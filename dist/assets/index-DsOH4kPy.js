(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Xo="160",tn={ROTATE:0,DOLLY:1,PAN:2},nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,Ra=1,Bd=2,Bc=1,Ud=2,Pn=3,Mn=0,Ht=1,rn=2,Kn=0,jn=1,Ia=2,Pa=3,Da=4,Uc=5,di=100,Od=101,Nd=102,La=103,Fa=104,zd=200,Hd=201,kd=202,Gd=203,Ms=204,Es=205,Vd=206,Wd=207,Xd=208,qd=209,Qd=210,Yd=211,Kd=212,jd=213,Zd=214,$d=0,Jd=1,eh=2,Ar=3,th=4,nh=5,ih=6,sh=7,Oc=0,rh=1,oh=2,Zn=0,ah=1,lh=2,ch=3,dh=4,hh=5,uh=6,Nc=300,Zi=301,$i=302,Io=303,Po=304,Rr=306,Do=1e3,gn=1001,Lo=1002,Rt=1003,Ba=1004,zr=1005,sn=1006,fh=1007,bs=1008,On=1009,ph=1010,mh=1011,qo=1012,zc=1013,Yt=1014,vn=1015,Ji=1016,Hc=1017,kc=1018,mi=1020,gh=1021,Ot=1023,Ah=1024,xh=1025,$n=1026,es=1027,Sh=1028,Qo=1029,vh=1030,Gc=1031,ms=1033,Hr=33776,kr=33777,Gr=33778,Vr=33779,Ua=35840,Oa=35841,Na=35842,za=35843,Vc=36196,Ha=37492,ka=37496,Ga=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Qa=37813,Ya=37814,Ka=37815,ja=37816,Za=37817,$a=37818,Ja=37819,el=37820,tl=37821,Wr=36492,nl=36494,il=36495,_h=36283,sl=36284,rl=36285,ol=36286,Wc=3e3,gi=3001,yh=3200,Mh=3201,Eh=0,bh=1,on="",It="srgb",Nn="srgb-linear",Yo="display-p3",Ir="display-p3-linear",xr="linear",ot="srgb",Sr="rec709",vr="p3",Si=7680,al=519,Ch=512,Th=513,wh=514,Xc=515,Rh=516,Ih=517,Ph=518,Dh=519,ll=35044,Lh=35048,cl="300 es",Fo=1035,Un=2e3,_r=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Bo=180/Math.PI;function Ps(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function Fh(r,e){return(r%e+e)%e}function Xr(r,e,t){return(1-t)*r+t*e}function dl(r){return(r&r-1)===0&&r!==0}function Uo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ls(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:pr};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],A=n[8],g=i[0],m=i[3],p=i[6],x=i[1],S=i[4],_=i[7],M=i[2],E=i[5],v=i[8];return s[0]=a*g+o*x+l*M,s[3]=a*m+o*S+l*E,s[6]=a*p+o*_+l*v,s[1]=c*g+d*x+h*M,s[4]=c*m+d*S+h*E,s[7]=c*p+d*_+h*v,s[2]=u*g+f*x+A*M,s[5]=u*m+f*S+A*E,s[8]=u*p+f*_+A*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,A=t*h+n*u+i*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return e[0]=h*g,e[1]=(i*c-d*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(d*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Ne;function qc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bh(){const r=yr("canvas");return r.style.display="block",r}const hl={};function gs(r){r in hl||(hl[r]=!0,console.warn(r))}const ul=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[Nn]:{transfer:xr,primaries:Sr,toReference:r=>r,fromReference:r=>r},[It]:{transfer:ot,primaries:Sr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ir]:{transfer:xr,primaries:vr,toReference:r=>r.applyMatrix3(fl),fromReference:r=>r.applyMatrix3(ul)},[Yo]:{transfer:ot,primaries:vr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fl),fromReference:r=>r.applyMatrix3(ul).convertLinearToSRGB()}},Uh=new Set([Nn,Ir]),it={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Uh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Os[e].toReference,i=Os[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Os[r].primaries},getTransfer:function(r){return r===on?xr:Os[r].transfer}};function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vi;class Qc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=yr("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ps(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yr(i[a].image)):s.push(Yr(i[a]))}else s=Yr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class kt extends ni{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=gn,i=gn,s=sn,a=bs,o=Ot,l=On,c=kt.DEFAULT_ANISOTROPY,d=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ps(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===gi?It:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?gi:Wc}set encoding(e){gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gi?It:on}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Nc;kt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],A=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(A+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(f+1)/2,M=(p+1)/2,E=(d+u)/4,v=(h+g)/4,P=(A+m)/4;return S>_&&S>M?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=v/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=E/i,s=P/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=v/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-A)*(m-A)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-A)/x,this.y=(h-g)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gi?It:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends zh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kc extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hh extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[a+0],f=s[a+1],A=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=A,e[t+3]=g;return}if(h!==g||l!==u||c!==f||d!==A){let m=1-o;const p=l*u+c*f+d*A+h*g,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const M=Math.sqrt(S),E=Math.atan2(M,p*x);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const _=o*x;if(l=l*m+u*_,c=c*m+f*_,d=d*m+A*_,h=h*m+g*_,m===1-o){const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[a],u=s[a+1],f=s[a+2],A=s[a+3];return e[t]=o*A+d*h+l*f-c*u,e[t+1]=l*A+d*u+c*h-o*f,e[t+2]=c*A+d*f+o*u-l*h,e[t+3]=d*A-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(s/2),u=l(n/2),f=l(i/2),A=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*A,this._y=c*f*h-u*d*A,this._z=c*d*A+u*f*h,this._w=c*d*h-u*f*A;break;case"YXZ":this._x=u*d*h+c*f*A,this._y=c*f*h-u*d*A,this._z=c*d*A-u*f*h,this._w=c*d*h+u*f*A;break;case"ZXY":this._x=u*d*h-c*f*A,this._y=c*f*h+u*d*A,this._z=c*d*A+u*f*h,this._w=c*d*h-u*f*A;break;case"ZYX":this._x=u*d*h-c*f*A,this._y=c*f*h+u*d*A,this._z=c*d*A-u*f*h,this._w=c*d*h+u*f*A;break;case"YZX":this._x=u*d*h+c*f*A,this._y=c*f*h+u*d*A,this._z=c*d*A-u*f*h,this._w=c*d*h-u*f*A;break;case"XZY":this._x=u*d*h-c*f*A,this._y=c*f*h-u*d*A,this._z=c*d*A+u*f*h,this._w=c*d*h+u*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=i+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new I,pl=new rt;class _n{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),zs.subVectors(this.max,cs),_i.subVectors(e.a,cs),yi.subVectors(e.b,cs),Mi.subVectors(e.c,cs),Hn.subVectors(yi,_i),kn.subVectors(Mi,yi),ri.subVectors(_i,Mi);let t=[0,-Hn.z,Hn.y,0,-kn.z,kn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,kn.z,0,-kn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-kn.y,kn.x,0,-ri.y,ri.x,0];return!jr(t,_i,yi,Mi,zs)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,_i,yi,Mi,zs))?!1:(Hs.crossVectors(Hn,kn),t=[Hs.x,Hs.y,Hs.z],jr(t,_i,yi,Mi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,Ns=new _n,_i=new I,yi=new I,Mi=new I,Hn=new I,kn=new I,ri=new I,cs=new I,zs=new I,Hs=new I,oi=new I;function jr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){oi.fromArray(r,s);const o=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),d=n.dot(oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const kh=new _n,ds=new I,Zr=new I;class jo{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Zr)),this.expandByPoint(ds.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new I,$r=new I,ks=new I,Gn=new I,Jr=new I,Gs=new I,eo=new I;let Zo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$r.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ks),o=Gn.dot(this.direction),l=-Gn.dot(ks),c=Gn.lengthSq(),d=Math.abs(1-a*a);let h,u,f,A;if(d>0)if(h=a*l-o,u=a*o-l,A=s*d,h>=0)if(u>=-A)if(u<=A){const g=1/d;h*=g,u*=g,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-A?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=A?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($r).addScaledVector(ks,u),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){Jr.subVectors(t,e),Gs.subVectors(n,e),eo.crossVectors(Jr,Gs);let a=this.direction.dot(eo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(Gn,Gs));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(Gn));if(c<0||l+c>a)return null;const d=-o*Gn.dot(eo);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ze{constructor(e,t,n,i,s,a,o,l,c,d,h,u,f,A,g,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,h,u,f,A,g,m)}set(e,t,n,i,s,a,o,l,c,d,h,u,f,A,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=A,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,A=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+A*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=A+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,A=c*d,g=c*h;t[0]=u+g*o,t[4]=A*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-A,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,A=c*d,g=c*h;t[0]=u-g*o,t[4]=-a*h,t[8]=A+f*o,t[1]=f+A*o,t[5]=a*d,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,A=o*d,g=o*h;t[0]=l*d,t[4]=A*c-f,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=f*c-A,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*d,t[4]=g-u*h,t[8]=A*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+A,t[10]=u-g*h}else if(e.order==="XZY"){const u=a*l,f=a*c,A=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=a*d,t[9]=f*h-A,t[2]=A*h-f,t[6]=o*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,Vh)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Vn.crossVectors(n,Vt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Vn.crossVectors(n,Vt)),Vn.normalize(),Vs.crossVectors(Vt,Vn),i[0]=Vn.x,i[4]=Vs.x,i[8]=Vt.x,i[1]=Vn.y,i[5]=Vs.y,i[9]=Vt.y,i[2]=Vn.z,i[6]=Vs.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],A=n[2],g=n[6],m=n[10],p=n[14],x=n[3],S=n[7],_=n[11],M=n[15],E=i[0],v=i[4],P=i[8],y=i[12],b=i[1],F=i[5],B=i[9],z=i[13],R=i[2],L=i[6],O=i[10],G=i[14],q=i[3],H=i[7],Q=i[11],J=i[15];return s[0]=a*E+o*b+l*R+c*q,s[4]=a*v+o*F+l*L+c*H,s[8]=a*P+o*B+l*O+c*Q,s[12]=a*y+o*z+l*G+c*J,s[1]=d*E+h*b+u*R+f*q,s[5]=d*v+h*F+u*L+f*H,s[9]=d*P+h*B+u*O+f*Q,s[13]=d*y+h*z+u*G+f*J,s[2]=A*E+g*b+m*R+p*q,s[6]=A*v+g*F+m*L+p*H,s[10]=A*P+g*B+m*O+p*Q,s[14]=A*y+g*z+m*G+p*J,s[3]=x*E+S*b+_*R+M*q,s[7]=x*v+S*F+_*L+M*H,s[11]=x*P+S*B+_*O+M*Q,s[15]=x*y+S*z+_*G+M*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],A=e[3],g=e[7],m=e[11],p=e[15];return A*(+s*l*h-i*c*h-s*o*u+n*c*u+i*o*f-n*l*f)+g*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*d-s*l*d)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*d-n*c*d)+p*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],A=e[12],g=e[13],m=e[14],p=e[15],x=h*m*c-g*u*c+g*l*f-o*m*f-h*l*p+o*u*p,S=A*u*c-d*m*c-A*l*f+a*m*f+d*l*p-a*u*p,_=d*g*c-A*h*c+A*o*f-a*g*f-d*o*p+a*h*p,M=A*h*l-d*g*l-A*o*u+a*g*u+d*o*m-a*h*m,E=t*x+n*S+i*_+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/E;return e[0]=x*v,e[1]=(g*u*s-h*m*s-g*i*f+n*m*f+h*i*p-n*u*p)*v,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*v,e[3]=(h*l*s-o*u*s-h*i*c+n*u*c+o*i*f-n*l*f)*v,e[4]=S*v,e[5]=(d*m*s-A*u*s+A*i*f-t*m*f-d*i*p+t*u*p)*v,e[6]=(A*l*s-a*m*s-A*i*c+t*m*c+a*i*p-t*l*p)*v,e[7]=(a*u*s-d*l*s+d*i*c-t*u*c-a*i*f+t*l*f)*v,e[8]=_*v,e[9]=(A*h*s-d*g*s-A*n*f+t*g*f+d*n*p-t*h*p)*v,e[10]=(a*g*s-A*o*s+A*n*c-t*g*c-a*n*p+t*o*p)*v,e[11]=(d*o*s-a*h*s-d*n*c+t*h*c+a*n*f-t*o*f)*v,e[12]=M*v,e[13]=(d*g*i-A*h*i+A*n*u-t*g*u-d*n*m+t*h*m)*v,e[14]=(A*o*i-a*g*i-A*n*l+t*g*l+a*n*m-t*o*m)*v,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*v,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,A=s*h,g=a*d,m=a*h,p=o*h,x=l*c,S=l*d,_=l*h,M=n.x,E=n.y,v=n.z;return i[0]=(1-(g+p))*M,i[1]=(f+_)*M,i[2]=(A-S)*M,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(u+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(A+S)*v,i[9]=(m-x)*v,i[10]=(1-(u+g))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/s,d=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=d,fn.elements[5]*=d,fn.elements[6]*=d,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Un){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,A;if(o===Un)f=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===_r)f=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Un){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-s),u=(t+e)*c,f=(n+i)*d;let A,g;if(o===Un)A=(a+s)*h,g=-2*h;else if(o===_r)A=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new I,fn=new ze,Gh=new I(0,0,0),Vh=new I(1,1,1),Vn=new I,Vs=new I,Vt=new I,ml=new ze,gl=new rt;class Ds{constructor(e=0,t=0,n=0,i=Ds.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ds.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wh=0;const Al=new I,bi=new rt,Tn=new ze,Ws=new I,hs=new I,Xh=new I,qh=new rt,xl=new I(1,0,0),Sl=new I(0,1,0),vl=new I(0,0,1),Qh={type:"added"},Yh={type:"removed"};class yt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new I,t=new Ds,n=new rt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ne}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(hs,Ws,this.up):Tn.lookAt(Ws,hs,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Tn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),A=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,wn=new I,to=new I,Rn=new I,Ci=new I,Ti=new I,_l=new I,no=new I,io=new I,so=new I;let Xs=!1;class mn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),wn.subVectors(n,t),to.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(wn),l=pn.dot(to),c=wn.dot(wn),d=wn.dot(to),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,A=(a*d-o*l)*u;return s.set(1-f-A,A,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xs=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),wn.subVectors(e,t),pn.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),pn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xs=!0),mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ci.subVectors(i,n),Ti.subVectors(s,n),no.subVectors(e,n);const l=Ci.dot(no),c=Ti.dot(no);if(l<=0&&c<=0)return t.copy(n);io.subVectors(e,i);const d=Ci.dot(io),h=Ti.dot(io);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ci,a);so.subVectors(e,s);const f=Ci.dot(so),A=Ti.dot(so);if(A>=0&&f<=A)return t.copy(s);const g=f*c-l*A;if(g<=0&&c>=0&&A<=0)return o=c/(c-A),t.copy(n).addScaledVector(Ti,o);const m=d*A-f*h;if(m<=0&&h-d>=0&&f-A>=0)return _l.subVectors(s,i),o=(h-d)/(h-d+(f-A)),t.copy(i).addScaledVector(_l,o);const p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(Ci,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function ro(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Fh(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return it.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Ft(Lt.r*255,0,255))*65536+Math.round(Ft(Lt.g*255,0,255))*256+Math.round(Ft(Lt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,s=Lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=It){it.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(qs);const n=Xr(Wn.h,qs.h,t),i=Xr(Wn.s,qs.s,t),s=Xr(Wn.l,qs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Je;Je.NAMES=Zc;let Kh=0;class Pr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=jn,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=Es,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ms&&(n.blendSrc=this.blendSrc),this.blendDst!==Es&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ai extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bn=jh();function jh(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,s[l]=c|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Zh(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ft(r,-65504,65504),Bn.floatView[0]=r;const e=Bn.uint32View[0],t=e>>23&511;return Bn.baseTable[t]+((e&8388607)>>Bn.shiftTable[t])}function $h(r){const e=r>>10;return Bn.uint32View[0]=Bn.mantissaTable[Bn.offsetTable[e]+(r&1023)]+Bn.exponentTable[e],Bn.floatView[0]}const Cs={toHalfFloat:Zh,fromHalfFloat:$h},xt=new I,Qs=new xe;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class $c extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jh=0;const en=new ze,oo=new yt,wi=new I,Wt=new _n,us=new _n,Ct=new I;class hn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Jc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Wt.min,us.min),Wt.expandByPoint(Ct),Ct.addVectors(Wt.max,us.max),Wt.expandByPoint(Ct)):(Wt.expandByPoint(us.min),Wt.expandByPoint(us.max))}Wt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Ct.add(wi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<o;b++)c[b]=new I,d[b]=new I;const h=new I,u=new I,f=new I,A=new xe,g=new xe,m=new xe,p=new I,x=new I;function S(b,F,B){h.fromArray(i,b*3),u.fromArray(i,F*3),f.fromArray(i,B*3),A.fromArray(a,b*2),g.fromArray(a,F*2),m.fromArray(a,B*2),u.sub(h),f.sub(h),g.sub(A),m.sub(A);const z=1/(g.x*m.y-m.x*g.y);isFinite(z)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(z),x.copy(f).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(z),c[b].add(p),c[F].add(p),c[B].add(p),d[b].add(x),d[F].add(x),d[B].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let b=0,F=_.length;b<F;++b){const B=_[b],z=B.start,R=B.count;for(let L=z,O=z+R;L<O;L+=3)S(n[L+0],n[L+1],n[L+2])}const M=new I,E=new I,v=new I,P=new I;function y(b){v.fromArray(s,b*3),P.copy(v);const F=c[b];M.copy(F),M.sub(v.multiplyScalar(v.dot(F))).normalize(),E.crossVectors(P,F);const z=E.dot(d[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=z}for(let b=0,F=_.length;b<F;++b){const B=_[b],z=B.start,R=B.count;for(let L=z,O=z+R;L<O;L+=3)y(n[L+0]),y(n[L+1]),y(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const A=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,A),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,A=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*d;for(let p=0;p<d;p++)u[A++]=c[f++]}return new ln(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new ze,ai=new Zo,Ys=new jo,Ml=new I,Ri=new I,Ii=new I,Pi=new I,ao=new I,Ks=new I,js=new xe,Zs=new xe,$s=new xe,El=new I,bl=new I,Cl=new I,Js=new I,er=new I;class St extends yt{constructor(e=new hn,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(ao.fromBufferAttribute(h,e),a?Ks.addScaledVector(ao,d):Ks.addScaledVector(ao.sub(t),d))}t.add(Ks)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(Ys.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ys,Ml)===null||ai.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(yl.copy(s).invert(),ai.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=u.length;A<g;A++){const m=u[A],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,M=S;_<M;_+=3){const E=o.getX(_),v=o.getX(_+1),P=o.getX(_+2);i=tr(this,p,e,n,c,d,h,E,v,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);i=tr(this,a,e,n,c,d,h,x,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,g=u.length;A<g;A++){const m=u[A],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,M=S;_<M;_+=3){const E=_,v=_+1,P=_+2;i=tr(this,p,e,n,c,d,h,E,v,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){const x=m,S=m+1,_=m+2;i=tr(this,a,e,n,c,d,h,x,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function eu(r,e,t,n,i,s,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Mn,o),l===null)return null;er.copy(o),er.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:r}}function tr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ri),r.getVertexPosition(l,Ii),r.getVertexPosition(c,Pi);const d=eu(r,e,t,n,Ri,Ii,Pi,Js);if(d){i&&(js.fromBufferAttribute(i,o),Zs.fromBufferAttribute(i,l),$s.fromBufferAttribute(i,c),d.uv=mn.getInterpolation(Js,Ri,Ii,Pi,js,Zs,$s,new xe)),s&&(js.fromBufferAttribute(s,o),Zs.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),d.uv1=mn.getInterpolation(Js,Ri,Ii,Pi,js,Zs,$s,new xe),d.uv2=d.uv1),a&&(El.fromBufferAttribute(a,o),bl.fromBufferAttribute(a,l),Cl.fromBufferAttribute(a,c),d.normal=mn.getInterpolation(Js,Ri,Ii,Pi,El,bl,Cl,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};mn.getNormal(Ri,Ii,Pi,h.normal),d.face=h}return d}class ss extends hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;A("z","y","x",-1,-1,n,t,e,a,s,0),A("z","y","x",1,-1,n,t,-e,a,s,1),A("x","z","y",1,1,e,n,t,i,a,2),A("x","z","y",1,-1,e,n,-t,i,a,3),A("x","y","z",1,-1,e,t,n,i,s,4),A("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(h,2));function A(g,m,p,x,S,_,M,E,v,P,y){const b=_/v,F=M/P,B=_/2,z=M/2,R=E/2,L=v+1,O=P+1;let G=0,q=0;const H=new I;for(let Q=0;Q<O;Q++){const J=Q*F-z;for(let ee=0;ee<L;ee++){const W=ee*b-B;H[g]=W*x,H[m]=J*S,H[p]=R,c.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[p]=E>0?1:-1,d.push(H.x,H.y,H.z),h.push(ee/v),h.push(1-Q/P),G+=1}}for(let Q=0;Q<P;Q++)for(let J=0;J<v;J++){const ee=u+J+L*Q,W=u+J+L*(Q+1),$=u+(J+1)+L*(Q+1),re=u+(J+1)+L*Q;l.push(ee,W,re),l.push(W,$,re),q+=6}o.addGroup(f,q,y),f+=q,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function tu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ed(r){return r.getRenderTarget()===null?r.outputColorSpace:it.workingColorSpace}const nu={clone:ts,merge:Bt};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class td extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends td{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Li=1;class ru extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(Di,Li,e,t);i.layers=this.layers,this.add(i);const s=new qt(Di,Li,e,t);s.layers=this.layers,this.add(s);const a=new qt(Di,Li,e,t);a.layers=this.layers,this.add(a);const o=new qt(Di,Li,e,t);o.layers=this.layers,this.add(o);const l=new qt(Di,Li,e,t);l.layers=this.layers,this.add(l);const c=new qt(Di,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class nd extends kt{constructor(e,t,n,i,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ou extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gi?It:on),this.texture=new nd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ss(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Kn});s.uniforms.tEquirect.value=t;const a=new St(i,s),o=t.minFilter;return t.minFilter===bs&&(t.minFilter=sn),new ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const lo=new I,au=new I,lu=new Ne;class Ln{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lo.subVectors(n,t).cross(au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lu.getNormalMatrix(e),i=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new jo,nr=new I;class id{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,s=new Ln,a=new Ln){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],A=i[9],g=i[10],m=i[11],p=i[12],x=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-s,u-c,m-f,_-p).normalize(),n[1].setComponents(l+s,u+c,m+f,_+p).normalize(),n[2].setComponents(l+a,u+d,m+A,_+x).normalize(),n[3].setComponents(l-a,u-d,m-A,_-x).normalize(),n[4].setComponents(l-o,u-h,m-g,_-S).normalize(),t===Un)n[5].setComponents(l+o,u+h,m+g,_+S).normalize();else if(t===_r)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(nr.x=i.normal.x>0?e.max.x:e.min.x,nr.y=i.normal.y>0?e.max.y:e.min.y,nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,f=h.byteLength,A=r.createBuffer();r.bindBuffer(d,A),r.bufferData(d,h,u),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:A,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){const u=d.array,f=d._updateRange,A=d.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&A.length===0&&r.bufferSubData(h,0,u),A.length!==0){for(let g=0,m=A.length;g<m;g++){const p=A[g];t?r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:a,remove:o,update:l}}class Ts extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,f=[],A=[],g=[],m=[];for(let p=0;p<d;p++){const x=p*u-a;for(let S=0;S<c;S++){const _=S*h-s;A.push(_,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+c*p,_=x+c*(p+1),M=x+1+c*(p+1),E=x+1+c*p;f.push(S,_,E),f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new Zt(A,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,Su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`
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
}`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
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
}`,$u=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
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
#endif`,df=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_f=`#if defined( USE_POINTS_UV )
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
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
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
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
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
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kf=`float getShadowMask() {
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
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Rp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,Up=`#define TOON
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
}`,Op=`#define TOON
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
}`,Np=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,kp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:du,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:fu,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:Au,batching_pars_vertex:xu,batching_vertex:Su,begin_vertex:vu,beginnormal_vertex:_u,bsdfs:yu,iridescence_fragment:Mu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:wu,color_fragment:Ru,color_pars_fragment:Iu,color_pars_vertex:Pu,color_vertex:Du,common:Lu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:Uu,displacementmap_vertex:Ou,emissivemap_fragment:Nu,emissivemap_pars_fragment:zu,colorspace_fragment:Hu,colorspace_pars_fragment:ku,envmap_fragment:Gu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:sf,envmap_vertex:qu,fog_vertex:Qu,fog_pars_vertex:Yu,fog_fragment:Ku,fog_pars_fragment:ju,gradientmap_pars_fragment:Zu,lightmap_fragment:$u,lightmap_pars_fragment:Ju,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:df,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:Af,map_fragment:xf,map_pars_fragment:Sf,map_particle_fragment:vf,map_particle_pars_fragment:_f,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Mf,morphcolor_vertex:Ef,morphnormal_vertex:bf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Tf,normal_fragment_begin:wf,normal_fragment_maps:Rf,normal_pars_fragment:If,normal_pars_vertex:Pf,normal_vertex:Df,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Of,opaque_fragment:Nf,packing:zf,premultiplied_alpha_fragment:Hf,project_vertex:kf,dithering_fragment:Gf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Qf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Kf,skinbase_vertex:jf,skinning_pars_vertex:Zf,skinning_vertex:$f,skinnormal_vertex:Jf,specularmap_fragment:ep,specularmap_pars_fragment:tp,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:op,uv_pars_vertex:ap,uv_vertex:lp,worldpos_vertex:cp,background_vert:dp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:Ap,distanceRGBA_vert:xp,distanceRGBA_frag:Sp,equirect_vert:vp,equirect_frag:_p,linedashed_vert:yp,linedashed_frag:Mp,meshbasic_vert:Ep,meshbasic_frag:bp,meshlambert_vert:Cp,meshlambert_frag:Tp,meshmatcap_vert:wp,meshmatcap_frag:Rp,meshnormal_vert:Ip,meshnormal_frag:Pp,meshphong_vert:Dp,meshphong_frag:Lp,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:Up,meshtoon_frag:Op,points_vert:Np,points_frag:zp,shadow_vert:Hp,shadow_frag:kp,sprite_vert:Gp,sprite_frag:Vp},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Sn={basic:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Bt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Bt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Bt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Bt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Bt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Bt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Bt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Bt([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Sn.physical={uniforms:Bt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ir={r:0,b:0,g:0};function Wp(r,e,t,n,i,s,a){const o=new Je(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function A(m,p){let x=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S)),S===null?g(o,l):S&&S.isColor&&(g(S,1),x=!0);const _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Rr)?(d===void 0&&(d=new St(new ss(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ts(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=it.getTransfer(S.colorSpace)!==ot,(h!==S||u!==S.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=S,u=S.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new St(new Ts(2,2),new cn({name:"BackgroundMaterial",uniforms:ts(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(ir,ed(r)),n.buffers.color.setClear(ir.r,ir.g,ir.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:A}}function Xp(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function h(R,L,O,G,q){let H=!1;if(a){const Q=g(G,O,L);c!==Q&&(c=Q,f(c.object)),H=p(R,G,O,q),H&&x(R,G,O,q)}else{const Q=L.wireframe===!0;(c.geometry!==G.id||c.program!==O.id||c.wireframe!==Q)&&(c.geometry=G.id,c.program=O.id,c.wireframe=Q,H=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,P(R,L,O,G),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function A(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function g(R,L,O){const G=O.wireframe===!0;let q=o[R.id];q===void 0&&(q={},o[R.id]=q);let H=q[L.id];H===void 0&&(H={},q[L.id]=H);let Q=H[G];return Q===void 0&&(Q=m(u()),H[G]=Q),Q}function m(R){const L=[],O=[],G=[];for(let q=0;q<i;q++)L[q]=0,O[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:G,object:R,attributes:{},index:null}}function p(R,L,O,G){const q=c.attributes,H=L.attributes;let Q=0;const J=O.getAttributes();for(const ee in J)if(J[ee].location>=0){const $=q[ee];let re=H[ee];if(re===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;Q++}return c.attributesNum!==Q||c.index!==G}function x(R,L,O,G){const q={},H=L.attributes;let Q=0;const J=O.getAttributes();for(const ee in J)if(J[ee].location>=0){let $=H[ee];$===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),q[ee]=re,Q++}c.attributes=q,c.attributesNum=Q,c.index=G}function S(){const R=c.newAttributes;for(let L=0,O=R.length;L<O;L++)R[L]=0}function _(R){M(R,0)}function M(R,L){const O=c.newAttributes,G=c.enabledAttributes,q=c.attributeDivisors;O[R]=1,G[R]===0&&(r.enableVertexAttribArray(R),G[R]=1),q[R]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),q[R]=L)}function E(){const R=c.newAttributes,L=c.enabledAttributes;for(let O=0,G=L.length;O<G;O++)L[O]!==R[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function v(R,L,O,G,q,H,Q){Q===!0?r.vertexAttribIPointer(R,L,O,q,H):r.vertexAttribPointer(R,L,O,G,q,H)}function P(R,L,O,G){if(n.isWebGL2===!1&&(R.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=G.attributes,H=O.getAttributes(),Q=L.defaultAttributeValues;for(const J in H){const ee=H[J];if(ee.location>=0){let W=q[J];if(W===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const $=W.normalized,re=W.itemSize,de=t.get(W);if(de===void 0)continue;const ue=de.buffer,Ce=de.type,Te=de.bytesPerElement,Se=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||W.gpuType===zc);if(W.isInterleavedBufferAttribute){const Le=W.data,V=Le.stride,ke=W.offset;if(Le.isInstancedInterleavedBuffer){for(let ve=0;ve<ee.locationSize;ve++)M(ee.location+ve,Le.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ve=0;ve<ee.locationSize;ve++)_(ee.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let ve=0;ve<ee.locationSize;ve++)v(ee.location+ve,re/ee.locationSize,Ce,$,V*Te,(ke+re/ee.locationSize*ve)*Te,Se)}else{if(W.isInstancedBufferAttribute){for(let Le=0;Le<ee.locationSize;Le++)M(ee.location+Le,W.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Le=0;Le<ee.locationSize;Le++)_(ee.location+Le);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let Le=0;Le<ee.locationSize;Le++)v(ee.location+Le,re/ee.locationSize,Ce,$,re*Te,re/ee.locationSize*Le*Te,Se)}}else if(Q!==void 0){const $=Q[J];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(ee.location,$);break;case 3:r.vertexAttrib3fv(ee.location,$);break;case 4:r.vertexAttrib4fv(ee.location,$);break;default:r.vertexAttrib1fv(ee.location,$)}}}}E()}function y(){B();for(const R in o){const L=o[R];for(const O in L){const G=L[O];for(const q in G)A(G[q].object),delete G[q];delete L[O]}delete o[R]}}function b(R){if(o[R.id]===void 0)return;const L=o[R.id];for(const O in L){const G=L[O];for(const q in G)A(G[q].object),delete G[q];delete L[O]}delete o[R.id]}function F(R){for(const L in o){const O=o[L];if(O[R.id]===void 0)continue;const G=O[R.id];for(const q in G)A(G[q].object),delete G[q];delete O[R.id]}}function B(){z(),d=!0,c!==l&&(c=l,f(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:_,disableUnusedAttributes:E}}function qp(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}function o(d,h){r.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,u){if(u===0)return;let f,A;if(i)f=r,A="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[A](s,d,h,u),t.update(h,s,u)}function c(d,h,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<u;A++)this.render(d[A],h[A]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let A=0;for(let g=0;g<u;g++)A+=h[g];t.update(A,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Qp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,_=a||e.has("OES_texture_float"),M=S&&_,E=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:E}}function Yp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ln,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const A=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||A===null||A.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,S=x*4;let _=p.clippingState||null;l.value=_,_=d(A,u,S,f);for(let M=0;M!==S;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,A){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,A!==!0||m===null){const p=f+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==g;++S,_+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Kp(r){let e=new WeakMap;function t(a,o){return o===Io?a.mapping=Zi:o===Po&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Po)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ou(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $o extends td{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Tl=[.125,.215,.35,.446,.526,.582],hi=20,co=new $o,wl=new Je;let ho=null,uo=0,fo=0;const ci=(1+Math.sqrt(5))/2,Fi=1/ci,Rl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ci,Fi),new I(0,ci,-Fi),new I(Fi,0,ci),new I(-Fi,0,ci),new I(ci,Fi,0),new I(-ci,Fi,0)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,uo,fo),e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ji,format:Ot,colorSpace:Nn,depthBuffer:!1},i=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(s)),this._blurMaterial=Zp(s,e,t)}return i}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,i){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(wl),d.toneMapping=Zn,d.autoClear=!1;const f=new Ai({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),A=new St(new ss,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(wl),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;sr(i,x*S,p>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(A,o),d.render(e,o)}A.geometry.dispose(),A.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Rl[(i-1)%Rl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new St(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,A=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hi-1),g=s/A,m=isFinite(s)?1+Math.floor(d*g):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const p=[];let x=0;for(let v=0;v<hi;++v){const P=v/g,y=Math.exp(-P*P/2);p.push(y),v===0?x+=y:v<m&&(x+=2*y)}for(let v=0;v<p.length;v++)p[v]=p[v]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=A,u.mipInt.value=S-n;const _=this._sizeLods[i],M=3*_*(i>S-zi?i-S+zi:0),E=4*(this._cubeSize-_);sr(t,M,E,3*_,2*_),l.setRenderTarget(t),l.render(h,co)}}function jp(r){const e=[],t=[],n=[];let i=r;const s=r-zi+1+Tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-zi?l=Tl[a-r+zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,A=6,g=3,m=2,p=1,x=new Float32Array(g*A*f),S=new Float32Array(m*A*f),_=new Float32Array(p*A*f);for(let E=0;E<f;E++){const v=E%3*2/3-1,P=E>2?0:-1,y=[v,P,0,v+2/3,P,0,v+2/3,P+1,0,v,P,0,v+2/3,P+1,0,v,P+1,0];x.set(y,g*A*E),S.set(u,m*A*E);const b=[E,E,E,E,E,E];_.set(b,p*A*E)}const M=new hn;M.setAttribute("position",new ln(x,g)),M.setAttribute("uv",new ln(S,m)),M.setAttribute("faceIndex",new ln(_,p)),e.push(M),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(r,e,t){const n=new ei(r,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Zp(r,e,t){const n=new Float32Array(hi),i=new I(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Dl(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ll(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function $p(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Io||l===Po,d=l===Zi||l===$i;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Il(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&i(h)){t===null&&(t=new Il(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function em(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const A in u.attributes)e.remove(u.attributes[A]);for(const A in u.morphAttributes){const g=u.morphAttributes[A];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const A in u)e.update(u[A],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const A in f){const g=f[A];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,A=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let S=0,_=x.length;S<_;S+=3){const M=x[S+0],E=x[S+1],v=x[S+2];u.push(M,E,E,v,v,M)}}else if(A!==void 0){const x=A.array;g=A.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const M=S+0,E=S+1,v=S+2;u.push(M,E,E,v,v,M)}}else return;const m=new(qc(u)?Jc:$c)(u,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function tm(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function d(f,A){r.drawElements(s,A,o,f*l),t.update(A,s,1)}function h(f,A,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,A,o,f*l,g),t.update(A,s,g)}function u(f,A,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,A[p]);else{m.multiDrawElementsWEBGL(s,A,0,o,f,0,g);let p=0;for(let x=0;x<g;x++)p+=A[x];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function nm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function im(r,e){return r[0]-e[0]}function sm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function rm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const A=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=A!==void 0?A.length:0;let m=s.get(d);if(m===void 0||m.count!==g){let L=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",L)};var f=L;m!==void 0&&m.texture.dispose();const S=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let y=0;S===!0&&(y=1),_===!0&&(y=2),M===!0&&(y=3);let b=d.attributes.position.count*y,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*F*4*g),z=new Kc(B,b,F,g);z.type=vn,z.needsUpdate=!0;const R=y*4;for(let O=0;O<g;O++){const G=E[O],q=v[O],H=P[O],Q=b*F*4*O;for(let J=0;J<G.count;J++){const ee=J*R;S===!0&&(a.fromBufferAttribute(G,J),B[Q+ee+0]=a.x,B[Q+ee+1]=a.y,B[Q+ee+2]=a.z,B[Q+ee+3]=0),_===!0&&(a.fromBufferAttribute(q,J),B[Q+ee+4]=a.x,B[Q+ee+5]=a.y,B[Q+ee+6]=a.z,B[Q+ee+7]=0),M===!0&&(a.fromBufferAttribute(H,J),B[Q+ee+8]=a.x,B[Q+ee+9]=a.y,B[Q+ee+10]=a.z,B[Q+ee+11]=H.itemSize===4?a.w:1)}}m={count:g,texture:z,size:new xe(b,F)},s.set(d,m),d.addEventListener("dispose",L)}let p=0;for(let S=0;S<u.length;S++)p+=u[S];const x=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const A=u===void 0?0:u.length;let g=n[d.id];if(g===void 0||g.length!==A){g=[];for(let _=0;_<A;_++)g[_]=[_,0];n[d.id]=g}for(let _=0;_<A;_++){const M=g[_];M[0]=_,M[1]=u[_]}g.sort(sm);for(let _=0;_<8;_++)_<A&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(im);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const M=o[_],E=M[0],v=M[1];E!==Number.MAX_SAFE_INTEGER&&v?(m&&d.getAttribute("morphTarget"+_)!==m[E]&&d.setAttribute("morphTarget"+_,m[E]),p&&d.getAttribute("morphNormal"+_)!==p[E]&&d.setAttribute("morphNormal"+_,p[E]),i[_]=v,x+=v):(m&&d.hasAttribute("morphTarget"+_)===!0&&d.deleteAttribute("morphTarget"+_),p&&d.hasAttribute("morphNormal"+_)===!0&&d.deleteAttribute("morphNormal"+_),i[_]=0)}const S=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function om(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ea extends kt{constructor(e,t,n,i,s,a,o,l,c,d){if(d=d!==void 0?d:$n,d!==$n&&d!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===$n&&(n=Yt),n===void 0&&d===es&&(n=mi),super(null,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rd=new kt,od=new ea(1,1);od.compareFunction=Xc;const ad=new Kc,ld=new Hh,cd=new nd,Fl=[],Bl=[],Ul=new Float32Array(16),Ol=new Float32Array(9),Nl=new Float32Array(4);function rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fl[i];if(s===void 0&&(s=new Float32Array(i),Fl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dr(r,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function am(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function hm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Nl.set(n),r.uniformMatrix2fv(this.addr,!1,Nl),Et(t,n)}}function um(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Ol.set(n),r.uniformMatrix3fv(this.addr,!1,Ol),Et(t,n)}}function fm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Ul.set(n),r.uniformMatrix4fv(this.addr,!1,Ul),Et(t,n)}}function pm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function xm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function _m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function ym(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?od:rd;t.setTexture2D(e||s,i)}function Mm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ld,i)}function Em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cd,i)}function bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ad,i)}function Cm(r){switch(r){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return dm;case 35674:return hm;case 35675:return um;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return Am;case 5125:return xm;case 36294:return Sm;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return bm}}function Tm(r,e){r.uniform1fv(this.addr,e)}function wm(r,e){const t=rs(e,this.size,2);r.uniform2fv(this.addr,t)}function Rm(r,e){const t=rs(e,this.size,3);r.uniform3fv(this.addr,t)}function Im(r,e){const t=rs(e,this.size,4);r.uniform4fv(this.addr,t)}function Pm(r,e){const t=rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dm(r,e){const t=rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lm(r,e){const t=rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fm(r,e){r.uniform1iv(this.addr,e)}function Bm(r,e){r.uniform2iv(this.addr,e)}function Um(r,e){r.uniform3iv(this.addr,e)}function Om(r,e){r.uniform4iv(this.addr,e)}function Nm(r,e){r.uniform1uiv(this.addr,e)}function zm(r,e){r.uniform2uiv(this.addr,e)}function Hm(r,e){r.uniform3uiv(this.addr,e)}function km(r,e){r.uniform4uiv(this.addr,e)}function Gm(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,s[a])}function Vm(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ld,s[a])}function Wm(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||cd,s[a])}function Xm(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ad,s[a])}function qm(r){switch(r){case 5126:return Tm;case 35664:return wm;case 35665:return Rm;case 35666:return Im;case 35674:return Pm;case 35675:return Dm;case 35676:return Lm;case 5124:case 35670:return Fm;case 35667:case 35671:return Bm;case 35668:case 35672:return Um;case 35669:case 35673:return Om;case 5125:return Nm;case 36294:return zm;case 36295:return Hm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cm(t.type)}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}}class Km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function zl(r,e){r.seq.push(e),r.map[e.id]=e}function jm(r,e,t){const n=r.name,i=n.length;for(po.lastIndex=0;;){const s=po.exec(n),a=po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zl(t,c===void 0?new Qm(o,r,e):new Ym(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Km(o),zl(t,h)),t=h}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);jm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Hl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Zm=37297;let $m=0;function Jm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function eg(r){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(r);let n;switch(e===t?n="":e===vr&&t===Sr?n="LinearDisplayP3ToLinearSRGB":e===Sr&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),r){case Nn:case Ir:return[n,"LinearTransferOETF"];case It:case Yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function kl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Jm(r.getShaderSource(e),a)}else return i}function tg(r,e){const t=eg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ng(r,e){let t;switch(e){case ah:t="Linear";break;case lh:t="Reinhard";break;case ch:t="OptimizedCineon";break;case dh:t="ACESFilmic";break;case uh:t="AgX";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ig(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function sg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hi).join(`
`)}function rg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Hi(r){return r!==""}function Gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(r){return r.replace(ag,cg)}const lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cg(r,e){let t=Xe[e];if(t===void 0){const n=lg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(r){return r.replace(dg,hg)}function hg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ug(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zi:case $i:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===$i&&(e="ENVMAP_MODE_REFRACTION"),e}function mg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case rh:e="ENVMAP_BLENDING_MIX";break;case oh:e="ENVMAP_BLENDING_ADD";break}return e}function gg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ag(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ug(t),c=fg(t),d=pg(t),h=mg(t),u=gg(t),f=t.isWebGL2?"":ig(t),A=sg(t),g=rg(s),m=i.createProgram();let p,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),x.length>0&&(x+=`
`)):(p=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),x=[f,Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Zn?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Oo(a),a=Gl(a,t),a=Vl(a,t),o=Oo(o),o=Gl(o,t),o=Vl(o,t),a=Wl(a),o=Wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=S+p+a,M=S+x+o,E=Hl(i,i.VERTEX_SHADER,_),v=Hl(i,i.FRAGMENT_SHADER,M);i.attachShader(m,E),i.attachShader(m,v),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(B){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(v).trim();let O=!0,G=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,E,v);else{const q=kl(i,E,"vertex"),H=kl(i,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+q+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(R===""||L==="")&&(G=!1);G&&(B.diagnostics={runnable:O,programLog:z,vertexShader:{log:R,prefix:p},fragmentShader:{log:L,prefix:x}})}i.deleteShader(E),i.deleteShader(v),y=new mr(i,m),b=og(i,m)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,Zm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=v,this}let xg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vg(e),t.set(e,n)),n}}class vg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function _g(r,e,t,n,i,s,a){const o=new jc,l=new Sg,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,F,B,z){const R=B.fog,L=z.geometry,O=y.isMeshStandardMaterial?B.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),q=G&&G.mapping===Rr?G.image.height:null,H=A[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=Q!==void 0?Q.length:0;let ee=0;L.morphAttributes.position!==void 0&&(ee=1),L.morphAttributes.normal!==void 0&&(ee=2),L.morphAttributes.color!==void 0&&(ee=3);let W,$,re,de;if(H){const pt=Sn[H];W=pt.vertexShader,$=pt.fragmentShader}else W=y.vertexShader,$=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const ue=r.getRenderTarget(),Ce=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,Se=!!y.map,Le=!!y.matcap,V=!!G,ke=!!y.aoMap,ve=!!y.lightMap,_e=!!y.bumpMap,ye=!!y.normalMap,Ye=!!y.displacementMap,Re=!!y.emissiveMap,w=!!y.metalnessMap,C=!!y.roughnessMap,Y=y.anisotropy>0,ce=y.clearcoat>0,ie=y.iridescence>0,oe=y.sheen>0,Ie=y.transmission>0,Ae=Y&&!!y.anisotropyMap,Me=ce&&!!y.clearcoatMap,Be=ce&&!!y.clearcoatNormalMap,He=ce&&!!y.clearcoatRoughnessMap,ne=ie&&!!y.iridescenceMap,je=ie&&!!y.iridescenceThicknessMap,N=oe&&!!y.sheenColorMap,te=oe&&!!y.sheenRoughnessMap,ge=!!y.specularMap,he=!!y.specularColorMap,D=!!y.specularIntensityMap,le=Ie&&!!y.transmissionMap,we=Ie&&!!y.thicknessMap,be=!!y.gradientMap,se=!!y.alphaMap,U=y.alphaTest>0,ae=!!y.alphaHash,pe=!!y.extensions,Fe=!!L.attributes.uv1,Pe=!!L.attributes.uv2,Ve=!!L.attributes.uv3;let Ke=Zn;return y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=r.toneMapping),{isWebGL2:d,shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:$,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Nn,map:Se,matcap:Le,envMap:V,envMapMode:V&&G.mapping,envMapCubeUVHeight:q,aoMap:ke,lightMap:ve,bumpMap:_e,normalMap:ye,displacementMap:u&&Ye,emissiveMap:Re,normalMapObjectSpace:ye&&y.normalMapType===bh,normalMapTangentSpace:ye&&y.normalMapType===Eh,metalnessMap:w,roughnessMap:C,anisotropy:Y,anisotropyMap:Ae,clearcoat:ce,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:He,iridescence:ie,iridescenceMap:ne,iridescenceThicknessMap:je,sheen:oe,sheenColorMap:N,sheenRoughnessMap:te,specularMap:ge,specularColorMap:he,specularIntensityMap:D,transmission:Ie,transmissionMap:le,thicknessMap:we,gradientMap:be,opaque:y.transparent===!1&&y.blending===jn,alphaMap:se,alphaTest:U,alphaHash:ae,combine:y.combine,mapUv:Se&&g(y.map.channel),aoMapUv:ke&&g(y.aoMap.channel),lightMapUv:ve&&g(y.lightMap.channel),bumpMapUv:_e&&g(y.bumpMap.channel),normalMapUv:ye&&g(y.normalMap.channel),displacementMapUv:Ye&&g(y.displacementMap.channel),emissiveMapUv:Re&&g(y.emissiveMap.channel),metalnessMapUv:w&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:Ae&&g(y.anisotropyMap.channel),clearcoatMapUv:Me&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:te&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:he&&g(y.specularColorMap.channel),specularIntensityMapUv:D&&g(y.specularIntensityMap.channel),transmissionMapUv:le&&g(y.transmissionMap.channel),thicknessMapUv:we&&g(y.thicknessMap.channel),alphaMapUv:se&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||Y),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Pe,vertexUv3s:Ve,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(Se||se),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:pe&&y.extensions.derivatives===!0,extensionFragDepth:pe&&y.extensions.fragDepth===!0,extensionDrawBuffers:pe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)b.push(F),b.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(b,y),S(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function _(y){const b=A[y.type];let F;if(b){const B=Sn[b];F=nu.clone(B.uniforms)}else F=y.uniforms;return F}function M(y,b){let F;for(let B=0,z=c.length;B<z;B++){const R=c[B];if(R.cacheKey===b){F=R,++F.usedTimes;break}}return F===void 0&&(F=new Ag(r,b,y,s),c.push(F)),F}function E(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function v(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:P}}function yg(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ql(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ql(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,f,A,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:A,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=A,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,u,f,A,g,m){const p=a(h,u,f,A,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,A,g,m){const p=a(h,u,f,A,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||Mg),n.length>1&&n.sort(u||ql),i.length>1&&i.sort(u||ql)}function d(){for(let h=e,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function Eg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ql,r.set(n,[a])):i>=s.length?(a=new Ql,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function bg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Tg=0;function wg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rg(r,e){const t=new bg,n=Cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new I);const s=new I,a=new ze,o=new ze;function l(d,h){let u=0,f=0,A=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,m=0,p=0,x=0,S=0,_=0,M=0,E=0,v=0,P=0,y=0;d.sort(wg);const b=h===!0?Math.PI:1;for(let B=0,z=d.length;B<z;B++){const R=d[B],L=R.color,O=R.intensity,G=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*O*b,f+=L.g*O*b,A+=L.b*O*b;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],O);y++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Q=R.shadow,J=n.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=R.shadow.matrix,_++}i.directional[g]=H,g++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(L).multiplyScalar(O*b),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[p]=H;const Q=R.shadow;if(R.map&&(i.spotLightMap[v]=R.map,v++,Q.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[p]=Q.matrix,R.castShadow){const J=n.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=q,E++}p++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(L).multiplyScalar(O),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=H,x++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*b),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Q=R.shadow,J=n.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=R.shadow.matrix,M++}i.point[m]=H,m++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(O*b),H.groundColor.copy(R.groundColor).multiplyScalar(O*b),i.hemi[S]=H,S++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=A;const F=i.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==S||F.numDirectionalShadows!==_||F.numPointShadows!==M||F.numSpotShadows!==E||F.numSpotMaps!==v||F.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+v-P,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,F.directionalLength=g,F.pointLength=m,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=S,F.numDirectionalShadows=_,F.numPointShadows=M,F.numSpotShadows=E,F.numSpotMaps=v,F.numLightProbes=y,i.version=Tg++)}function c(d,h){let u=0,f=0,A=0,g=0,m=0;const p=h.matrixWorldInverse;for(let x=0,S=d.length;x<S;x++){const _=d[x];if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(_.isSpotLight){const M=i.spot[A];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),A++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Yl(r,e){const t=new Rg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ig(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Yl(r,e),t.set(s,[l])):a>=o.length?(l=new Yl(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Pg extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dg extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Bg(r,e,t){let n=new id;const i=new xe,s=new xe,a=new vt,o=new Pg({depthPacking:Mh}),l=new Dg,c={},d=t.maxTextureSize,h={[Mn]:Ht,[Ht]:Mn,[rn]:rn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Lg,fragmentShader:Fg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const A=new hn;A.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new St(A,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let p=this.type;this.render=function(E,v,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=r.getRenderTarget(),b=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==Pn&&this.type===Pn,R=p===Pn&&this.type!==Pn;for(let L=0,O=E.length;L<O;L++){const G=E[L],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const H=q.getFrameExtents();if(i.multiply(H),s.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/H.x),i.x=s.x*H.x,q.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/H.y),i.y=s.y*H.y,q.mapSize.y=s.y)),q.map===null||z===!0||R===!0){const J=this.type!==Pn?{minFilter:Rt,magFilter:Rt}:{};q.map!==null&&q.map.dispose(),q.map=new ei(i.x,i.y,J),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Q=q.getViewportCount();for(let J=0;J<Q;J++){const ee=q.getViewport(J);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),B.viewport(a),q.updateMatrices(G,J),n=q.getFrustum(),_(v,P,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Pn&&x(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,b,F)};function x(E,v){const P=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ei(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(v,null,P,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(v,null,P,f,g,null)}function S(E,v,P,y){let b=null;const F=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)b=F;else if(b=P.isPointLight===!0?l:o,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const B=b.uuid,z=v.uuid;let R=c[B];R===void 0&&(R={},c[B]=R);let L=R[z];L===void 0&&(L=b.clone(),R[z]=L,v.addEventListener("dispose",M)),b=L}if(b.visible=v.visible,b.wireframe=v.wireframe,y===Pn?b.side=v.shadowSide!==null?v.shadowSide:v.side:b.side=v.shadowSide!==null?v.shadowSide:h[v.side],b.alphaMap=v.alphaMap,b.alphaTest=v.alphaTest,b.map=v.map,b.clipShadows=v.clipShadows,b.clippingPlanes=v.clippingPlanes,b.clipIntersection=v.clipIntersection,b.displacementMap=v.displacementMap,b.displacementScale=v.displacementScale,b.displacementBias=v.displacementBias,b.wireframeLinewidth=v.wireframeLinewidth,b.linewidth=v.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=r.properties.get(b);B.light=P}return b}function _(E,v,P,y,b){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Pn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const z=e.update(E),R=E.material;if(Array.isArray(R)){const L=z.groups;for(let O=0,G=L.length;O<G;O++){const q=L[O],H=R[q.materialIndex];if(H&&H.visible){const Q=S(E,H,y,b);E.onBeforeShadow(r,E,v,P,z,Q,q),r.renderBufferDirect(P,null,z,Q,E,q),E.onAfterShadow(r,E,v,P,z,Q,q)}}}else if(R.visible){const L=S(E,R,y,b);E.onBeforeShadow(r,E,v,P,z,L,null),r.renderBufferDirect(P,null,z,L,E,null),E.onAfterShadow(r,E,v,P,z,L,null)}}const B=E.children;for(let z=0,R=B.length;z<R;z++)_(B[z],v,P,y,b)}function M(E){E.target.removeEventListener("dispose",M);for(const P in c){const y=c[P],b=E.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Ug(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const ae=new vt;let pe=null;const Fe=new vt(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!U&&(r.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,Ve,Ke,ut,pt){pt===!0&&(Pe*=ut,Ve*=ut,Ke*=ut),ae.set(Pe,Ve,Ke,ut),Fe.equals(ae)===!1&&(r.clearColor(Pe,Ve,Ke,ut),Fe.copy(ae))},reset:function(){U=!1,pe=null,Fe.set(-1,0,0,0)}}}function s(){let U=!1,ae=null,pe=null,Fe=null;return{setTest:function(Pe){Pe?Te(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!U&&(r.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(pe!==Pe){switch(Pe){case $d:r.depthFunc(r.NEVER);break;case Jd:r.depthFunc(r.ALWAYS);break;case eh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case th:r.depthFunc(r.EQUAL);break;case nh:r.depthFunc(r.GEQUAL);break;case ih:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Fe!==Pe&&(r.clearDepth(Pe),Fe=Pe)},reset:function(){U=!1,ae=null,pe=null,Fe=null}}}function a(){let U=!1,ae=null,pe=null,Fe=null,Pe=null,Ve=null,Ke=null,ut=null,pt=null;return{setTest:function(Ze){U||(Ze?Te(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!U&&(r.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,At,xn){(pe!==Ze||Fe!==At||Pe!==xn)&&(r.stencilFunc(Ze,At,xn),pe=Ze,Fe=At,Pe=xn)},setOp:function(Ze,At,xn){(Ve!==Ze||Ke!==At||ut!==xn)&&(r.stencilOp(Ze,At,xn),Ve=Ze,Ke=At,ut=xn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){pt!==Ze&&(r.clearStencil(Ze),pt=Ze)},reset:function(){U=!1,ae=null,pe=null,Fe=null,Pe=null,Ve=null,Ke=null,ut=null,pt=null}}}const o=new i,l=new s,c=new a,d=new WeakMap,h=new WeakMap;let u={},f={},A=new WeakMap,g=[],m=null,p=!1,x=null,S=null,_=null,M=null,E=null,v=null,P=null,y=new Je(0,0,0),b=0,F=!1,B=null,z=null,R=null,L=null,O=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=H>=2);let J=null,ee={};const W=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),re=new vt().fromArray(W),de=new vt().fromArray($);function ue(U,ae,pe,Fe){const Pe=new Uint8Array(4),Ve=r.createTexture();r.bindTexture(U,Ve),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<pe;Ke++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(ae+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return Ve}const Ce={};Ce[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(r.DEPTH_TEST),l.setFunc(Ar),Re(!1),w(Ra),Te(r.CULL_FACE),ye(Kn);function Te(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function Se(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Le(U,ae){return f[U]!==ae?(r.bindFramebuffer(U,ae),f[U]=ae,n&&(U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ae),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function V(U,ae){let pe=g,Fe=!1;if(U)if(pe=A.get(ae),pe===void 0&&(pe=[],A.set(ae,pe)),U.isWebGLMultipleRenderTargets){const Pe=U.texture;if(pe.length!==Pe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Ve=0,Ke=Pe.length;Ve<Ke;Ve++)pe[Ve]=r.COLOR_ATTACHMENT0+Ve;pe.length=Pe.length,Fe=!0}}else pe[0]!==r.COLOR_ATTACHMENT0&&(pe[0]=r.COLOR_ATTACHMENT0,Fe=!0);else pe[0]!==r.BACK&&(pe[0]=r.BACK,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ke(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const ve={[di]:r.FUNC_ADD,[Od]:r.FUNC_SUBTRACT,[Nd]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[La]=r.MIN,ve[Fa]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ve[La]=U.MIN_EXT,ve[Fa]=U.MAX_EXT)}const _e={[zd]:r.ZERO,[Hd]:r.ONE,[kd]:r.SRC_COLOR,[Ms]:r.SRC_ALPHA,[Qd]:r.SRC_ALPHA_SATURATE,[Xd]:r.DST_COLOR,[Vd]:r.DST_ALPHA,[Gd]:r.ONE_MINUS_SRC_COLOR,[Es]:r.ONE_MINUS_SRC_ALPHA,[qd]:r.ONE_MINUS_DST_COLOR,[Wd]:r.ONE_MINUS_DST_ALPHA,[Yd]:r.CONSTANT_COLOR,[Kd]:r.ONE_MINUS_CONSTANT_COLOR,[jd]:r.CONSTANT_ALPHA,[Zd]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(U,ae,pe,Fe,Pe,Ve,Ke,ut,pt,Ze){if(U===Kn){p===!0&&(Se(r.BLEND),p=!1);return}if(p===!1&&(Te(r.BLEND),p=!0),U!==Uc){if(U!==x||Ze!==F){if((S!==di||E!==di)&&(r.blendEquation(r.FUNC_ADD),S=di,E=di),Ze)switch(U){case jn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.ONE,r.ONE);break;case Pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Da:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case jn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Da:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,M=null,v=null,P=null,y.set(0,0,0),b=0,x=U,F=Ze}return}Pe=Pe||ae,Ve=Ve||pe,Ke=Ke||Fe,(ae!==S||Pe!==E)&&(r.blendEquationSeparate(ve[ae],ve[Pe]),S=ae,E=Pe),(pe!==_||Fe!==M||Ve!==v||Ke!==P)&&(r.blendFuncSeparate(_e[pe],_e[Fe],_e[Ve],_e[Ke]),_=pe,M=Fe,v=Ve,P=Ke),(ut.equals(y)===!1||pt!==b)&&(r.blendColor(ut.r,ut.g,ut.b,pt),y.copy(ut),b=pt),x=U,F=!1}function Ye(U,ae){U.side===rn?Se(r.CULL_FACE):Te(r.CULL_FACE);let pe=U.side===Ht;ae&&(pe=!pe),Re(pe),U.blending===jn&&U.transparent===!1?ye(Kn):ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const Fe=U.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Y(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function w(U){U!==Fd?(Te(r.CULL_FACE),U!==z&&(U===Ra?r.cullFace(r.BACK):U===Bd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),z=U}function C(U){U!==R&&(q&&r.lineWidth(U),R=U)}function Y(U,ae,pe){U?(Te(r.POLYGON_OFFSET_FILL),(L!==ae||O!==pe)&&(r.polygonOffset(ae,pe),L=ae,O=pe)):Se(r.POLYGON_OFFSET_FILL)}function ce(U){U?Te(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function ie(U){U===void 0&&(U=r.TEXTURE0+G-1),J!==U&&(r.activeTexture(U),J=U)}function oe(U,ae,pe){pe===void 0&&(J===null?pe=r.TEXTURE0+G-1:pe=J);let Fe=ee[pe];Fe===void 0&&(Fe={type:void 0,texture:void 0},ee[pe]=Fe),(Fe.type!==U||Fe.texture!==ae)&&(J!==pe&&(r.activeTexture(pe),J=pe),r.bindTexture(U,ae||Ce[U]),Fe.type=U,Fe.texture=ae)}function Ie(){const U=ee[J];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function le(U){de.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function we(U,ae){let pe=h.get(ae);pe===void 0&&(pe=new WeakMap,h.set(ae,pe));let Fe=pe.get(U);Fe===void 0&&(Fe=r.getUniformBlockIndex(ae,U.name),pe.set(U,Fe))}function be(U,ae){const Fe=h.get(ae).get(U);d.get(ae)!==Fe&&(r.uniformBlockBinding(ae,Fe,U.__bindingPointIndex),d.set(ae,Fe))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,ee={},f={},A=new WeakMap,g=[],m=null,p=!1,x=null,S=null,_=null,M=null,E=null,v=null,P=null,y=new Je(0,0,0),b=0,F=!1,B=null,z=null,R=null,L=null,O=null,re.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:Se,bindFramebuffer:Le,drawBuffers:V,useProgram:ke,setBlending:ye,setMaterial:Ye,setFlipSided:Re,setCullFace:w,setLineWidth:C,setPolygonOffset:Y,setScissorTest:ce,activeTexture:ie,bindTexture:oe,unbindTexture:Ie,compressedTexImage2D:Ae,compressedTexImage3D:Me,texImage2D:ge,texImage3D:he,updateUBOMapping:we,uniformBlockBinding:be,texStorage2D:N,texStorage3D:te,texSubImage2D:Be,texSubImage3D:He,compressedTexSubImage2D:ne,compressedTexSubImage3D:je,scissor:D,viewport:le,reset:se}}function Og(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,C){return f?new OffscreenCanvas(w,C):yr("canvas")}function g(w,C,Y,ce){let ie=1;if((w.width>ce||w.height>ce)&&(ie=ce/Math.max(w.width,w.height)),ie<1||C===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const oe=C?Uo:Math.floor,Ie=oe(ie*w.width),Ae=oe(ie*w.height);h===void 0&&(h=A(Ie,Ae));const Me=Y?A(Ie,Ae):h;return Me.width=Ie,Me.height=Ae,Me.getContext("2d").drawImage(w,0,0,Ie,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ie+"x"+Ae+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return dl(w.width)&&dl(w.height)}function p(w){return o?!1:w.wrapS!==gn||w.wrapT!==gn||w.minFilter!==Rt&&w.minFilter!==sn}function x(w,C){return w.generateMipmaps&&C&&w.minFilter!==Rt&&w.minFilter!==sn}function S(w){r.generateMipmap(w)}function _(w,C,Y,ce,ie=!1){if(o===!1)return C;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe=C;if(C===r.RED&&(Y===r.FLOAT&&(oe=r.R32F),Y===r.HALF_FLOAT&&(oe=r.R16F),Y===r.UNSIGNED_BYTE&&(oe=r.R8)),C===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(oe=r.R8UI),Y===r.UNSIGNED_SHORT&&(oe=r.R16UI),Y===r.UNSIGNED_INT&&(oe=r.R32UI),Y===r.BYTE&&(oe=r.R8I),Y===r.SHORT&&(oe=r.R16I),Y===r.INT&&(oe=r.R32I)),C===r.RG&&(Y===r.FLOAT&&(oe=r.RG32F),Y===r.HALF_FLOAT&&(oe=r.RG16F),Y===r.UNSIGNED_BYTE&&(oe=r.RG8)),C===r.RGBA){const Ie=ie?xr:it.getTransfer(ce);Y===r.FLOAT&&(oe=r.RGBA32F),Y===r.HALF_FLOAT&&(oe=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(oe=Ie===ot?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(w,C,Y){return x(w,Y)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==sn?Math.log2(Math.max(C.width,C.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?C.mipmaps.length:1}function E(w){return w===Rt||w===Ba||w===zr?r.NEAREST:r.LINEAR}function v(w){const C=w.target;C.removeEventListener("dispose",v),y(C),C.isVideoTexture&&d.delete(C)}function P(w){const C=w.target;C.removeEventListener("dispose",P),F(C)}function y(w){const C=n.get(w);if(C.__webglInit===void 0)return;const Y=w.source,ce=u.get(Y);if(ce){const ie=ce[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(w),Object.keys(ce).length===0&&u.delete(Y)}n.remove(w)}function b(w){const C=n.get(w);r.deleteTexture(C.__webglTexture);const Y=w.source,ce=u.get(Y);delete ce[C.__cacheKey],a.memory.textures--}function F(w){const C=w.texture,Y=n.get(w),ce=n.get(C);if(ce.__webglTexture!==void 0&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(Y.__webglFramebuffer[ie]))for(let oe=0;oe<Y.__webglFramebuffer[ie].length;oe++)r.deleteFramebuffer(Y.__webglFramebuffer[ie][oe]);else r.deleteFramebuffer(Y.__webglFramebuffer[ie]);Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[ie])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ie=0;ie<Y.__webglFramebuffer.length;ie++)r.deleteFramebuffer(Y.__webglFramebuffer[ie]);else r.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ie=0;ie<Y.__webglColorRenderbuffer.length;ie++)Y.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[ie]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,oe=C.length;ie<oe;ie++){const Ie=n.get(C[ie]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),a.memory.textures--),n.remove(C[ie])}n.remove(C),n.remove(w)}let B=0;function z(){B=0}function R(){const w=B;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),B+=1,w}function L(w){const C=[];return C.push(w.wrapS),C.push(w.wrapT),C.push(w.wrapR||0),C.push(w.magFilter),C.push(w.minFilter),C.push(w.anisotropy),C.push(w.internalFormat),C.push(w.format),C.push(w.type),C.push(w.generateMipmaps),C.push(w.premultiplyAlpha),C.push(w.flipY),C.push(w.unpackAlignment),C.push(w.colorSpace),C.join()}function O(w,C){const Y=n.get(w);if(w.isVideoTexture&&Ye(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){const ce=w.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Y,w,C);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+C)}function G(w,C){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){re(Y,w,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+C)}function q(w,C){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){re(Y,w,C);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+C)}function H(w,C){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){de(Y,w,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+C)}const Q={[Do]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[Lo]:r.MIRRORED_REPEAT},J={[Rt]:r.NEAREST,[Ba]:r.NEAREST_MIPMAP_NEAREST,[zr]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[fh]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},ee={[Ch]:r.NEVER,[Dh]:r.ALWAYS,[Th]:r.LESS,[Xc]:r.LEQUAL,[wh]:r.EQUAL,[Ph]:r.GEQUAL,[Rh]:r.GREATER,[Ih]:r.NOTEQUAL};function W(w,C,Y){if(Y?(r.texParameteri(w,r.TEXTURE_WRAP_S,Q[C.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Q[C.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Q[C.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,J[C.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,J[C.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==gn||C.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,E(C.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,E(C.minFilter)),C.minFilter!==Rt&&C.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ee[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Rt||C.minFilter!==zr&&C.minFilter!==bs||C.type===vn&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(w,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function $(w,C){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,C.addEventListener("dispose",v));const ce=C.source;let ie=u.get(ce);ie===void 0&&(ie={},u.set(ce,ie));const oe=L(C);if(oe!==w.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ie[oe].usedTimes++;const Ie=ie[w.__cacheKey];Ie!==void 0&&(ie[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(C)),w.__cacheKey=oe,w.__webglTexture=ie[oe].texture}return Y}function re(w,C,Y){let ce=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ce=r.TEXTURE_3D);const ie=$(w,C),oe=C.source;t.bindTexture(ce,w.__webglTexture,r.TEXTURE0+Y);const Ie=n.get(oe);if(oe.version!==Ie.__version||ie===!0){t.activeTexture(r.TEXTURE0+Y);const Ae=it.getPrimaries(it.workingColorSpace),Me=C.colorSpace===on?null:it.getPrimaries(C.colorSpace),Be=C.colorSpace===on||Ae===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const He=p(C)&&m(C.image)===!1;let ne=g(C.image,He,!1,i.maxTextureSize);ne=Re(C,ne);const je=m(ne)||o,N=s.convert(C.format,C.colorSpace);let te=s.convert(C.type),ge=_(C.internalFormat,N,te,C.colorSpace,C.isVideoTexture);W(ce,C,je);let he;const D=C.mipmaps,le=o&&C.isVideoTexture!==!0&&ge!==Vc,we=Ie.__version===void 0||ie===!0,be=M(C,ne,je);if(C.isDepthTexture)ge=r.DEPTH_COMPONENT,o?C.type===vn?ge=r.DEPTH_COMPONENT32F:C.type===Yt?ge=r.DEPTH_COMPONENT24:C.type===mi?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:C.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===$n&&ge===r.DEPTH_COMPONENT&&C.type!==qo&&C.type!==Yt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Yt,te=s.convert(C.type)),C.format===es&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,C.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=mi,te=s.convert(C.type))),we&&(le?t.texStorage2D(r.TEXTURE_2D,1,ge,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,N,te,null));else if(C.isDataTexture)if(D.length>0&&je){le&&we&&t.texStorage2D(r.TEXTURE_2D,be,ge,D[0].width,D[0].height);for(let se=0,U=D.length;se<U;se++)he=D[se],le?t.texSubImage2D(r.TEXTURE_2D,se,0,0,he.width,he.height,N,te,he.data):t.texImage2D(r.TEXTURE_2D,se,ge,he.width,he.height,0,N,te,he.data);C.generateMipmaps=!1}else le?(we&&t.texStorage2D(r.TEXTURE_2D,be,ge,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,N,te,ne.data)):t.texImage2D(r.TEXTURE_2D,0,ge,ne.width,ne.height,0,N,te,ne.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){le&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,D[0].width,D[0].height,ne.depth);for(let se=0,U=D.length;se<U;se++)he=D[se],C.format!==Ot?N!==null?le?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ne.depth,N,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,ge,he.width,he.height,ne.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ne.depth,N,te,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,ge,he.width,he.height,ne.depth,0,N,te,he.data)}else{le&&we&&t.texStorage2D(r.TEXTURE_2D,be,ge,D[0].width,D[0].height);for(let se=0,U=D.length;se<U;se++)he=D[se],C.format!==Ot?N!==null?le?t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,he.width,he.height,N,he.data):t.compressedTexImage2D(r.TEXTURE_2D,se,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(r.TEXTURE_2D,se,0,0,he.width,he.height,N,te,he.data):t.texImage2D(r.TEXTURE_2D,se,ge,he.width,he.height,0,N,te,he.data)}else if(C.isDataArrayTexture)le?(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ge,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,N,te,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,N,te,ne.data);else if(C.isData3DTexture)le?(we&&t.texStorage3D(r.TEXTURE_3D,be,ge,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,N,te,ne.data)):t.texImage3D(r.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,N,te,ne.data);else if(C.isFramebufferTexture){if(we)if(le)t.texStorage2D(r.TEXTURE_2D,be,ge,ne.width,ne.height);else{let se=ne.width,U=ne.height;for(let ae=0;ae<be;ae++)t.texImage2D(r.TEXTURE_2D,ae,ge,se,U,0,N,te,null),se>>=1,U>>=1}}else if(D.length>0&&je){le&&we&&t.texStorage2D(r.TEXTURE_2D,be,ge,D[0].width,D[0].height);for(let se=0,U=D.length;se<U;se++)he=D[se],le?t.texSubImage2D(r.TEXTURE_2D,se,0,0,N,te,he):t.texImage2D(r.TEXTURE_2D,se,ge,N,te,he);C.generateMipmaps=!1}else le?(we&&t.texStorage2D(r.TEXTURE_2D,be,ge,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,N,te,ne)):t.texImage2D(r.TEXTURE_2D,0,ge,N,te,ne);x(C,je)&&S(ce),Ie.__version=oe.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function de(w,C,Y){if(C.image.length!==6)return;const ce=$(w,C),ie=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+Y);const oe=n.get(ie);if(ie.version!==oe.__version||ce===!0){t.activeTexture(r.TEXTURE0+Y);const Ie=it.getPrimaries(it.workingColorSpace),Ae=C.colorSpace===on?null:it.getPrimaries(C.colorSpace),Me=C.colorSpace===on||Ie===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=C.isCompressedTexture||C.image[0].isCompressedTexture,He=C.image[0]&&C.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Be&&!He?ne[se]=g(C.image[se],!1,!0,i.maxCubemapSize):ne[se]=He?C.image[se].image:C.image[se],ne[se]=Re(C,ne[se]);const je=ne[0],N=m(je)||o,te=s.convert(C.format,C.colorSpace),ge=s.convert(C.type),he=_(C.internalFormat,te,ge,C.colorSpace),D=o&&C.isVideoTexture!==!0,le=oe.__version===void 0||ce===!0;let we=M(C,je,N);W(r.TEXTURE_CUBE_MAP,C,N);let be;if(Be){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,he,je.width,je.height);for(let se=0;se<6;se++){be=ne[se].mipmaps;for(let U=0;U<be.length;U++){const ae=be[U];C.format!==Ot?te!==null?D?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,ae.width,ae.height,te,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,he,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,ae.width,ae.height,te,ge,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,he,ae.width,ae.height,0,te,ge,ae.data)}}}else{be=C.mipmaps,D&&le&&(be.length>0&&we++,t.texStorage2D(r.TEXTURE_CUBE_MAP,we,he,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(He){D?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,te,ge,ne[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,he,ne[se].width,ne[se].height,0,te,ge,ne[se].data);for(let U=0;U<be.length;U++){const pe=be[U].image[se].image;D?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,pe.width,pe.height,te,ge,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,he,pe.width,pe.height,0,te,ge,pe.data)}}else{D?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,te,ge,ne[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,he,te,ge,ne[se]);for(let U=0;U<be.length;U++){const ae=be[U];D?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,te,ge,ae.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,he,te,ge,ae.image[se])}}}x(C,N)&&S(r.TEXTURE_CUBE_MAP),oe.__version=ie.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function ue(w,C,Y,ce,ie,oe){const Ie=s.convert(Y.format,Y.colorSpace),Ae=s.convert(Y.type),Me=_(Y.internalFormat,Ie,Ae,Y.colorSpace);if(!n.get(C).__hasExternalTextures){const He=Math.max(1,C.width>>oe),ne=Math.max(1,C.height>>oe);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,oe,Me,He,ne,C.depth,0,Ie,Ae,null):t.texImage2D(ie,oe,Me,He,ne,0,Ie,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ye(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,ie,n.get(Y).__webglTexture,0,_e(C)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,ie,n.get(Y).__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(w,C,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,w),C.depthBuffer&&!C.stencilBuffer){let ce=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Y||ye(C)){const ie=C.depthTexture;ie&&ie.isDepthTexture&&(ie.type===vn?ce=r.DEPTH_COMPONENT32F:ie.type===Yt&&(ce=r.DEPTH_COMPONENT24));const oe=_e(C);ye(C)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,ce,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ce,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,ce,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(C.depthBuffer&&C.stencilBuffer){const ce=_e(C);Y&&ye(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,C.width,C.height):ye(C)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ce=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0;ie<ce.length;ie++){const oe=ce[ie],Ie=s.convert(oe.format,oe.colorSpace),Ae=s.convert(oe.type),Me=_(oe.internalFormat,Ie,Ae,oe.colorSpace),Be=_e(C);Y&&ye(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Me,C.width,C.height):ye(C)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Be,Me,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Me,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(w,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);const ce=n.get(C.depthTexture).__webglTexture,ie=_e(C);if(C.depthTexture.format===$n)ye(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(C.depthTexture.format===es)ye(C)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Se(w){const C=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(C.__webglFramebuffer,w)}else if(Y){C.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ce]),C.__webglDepthbuffer[ce]=r.createRenderbuffer(),Ce(C.__webglDepthbuffer[ce],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),Ce(C.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(w,C,Y){const ce=n.get(w);C!==void 0&&ue(ce.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Se(w)}function V(w){const C=w.texture,Y=n.get(w),ce=n.get(C);w.addEventListener("dispose",P),w.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=C.version,a.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,oe=w.isWebGLMultipleRenderTargets===!0,Ie=m(w)||o;if(ie){Y.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(o&&C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer[Ae]=[];for(let Me=0;Me<C.mipmaps.length;Me++)Y.__webglFramebuffer[Ae][Me]=r.createFramebuffer()}else Y.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)Y.__webglFramebuffer[Ae]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(oe)if(i.drawBuffers){const Ae=w.texture;for(let Me=0,Be=Ae.length;Me<Be;Me++){const He=n.get(Ae[Me]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ye(w)===!1){const Ae=oe?C:[C];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<Ae.length;Me++){const Be=Ae[Me];Y.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);const He=s.convert(Be.format,Be.colorSpace),ne=s.convert(Be.type),je=_(Be.internalFormat,He,ne,Be.colorSpace,w.isXRRenderTarget===!0),N=_e(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,N,je,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(Y.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),W(r.TEXTURE_CUBE_MAP,C,Ie);for(let Ae=0;Ae<6;Ae++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)ue(Y.__webglFramebuffer[Ae][Me],w,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Me);else ue(Y.__webglFramebuffer[Ae],w,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(C,Ie)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const Ae=w.texture;for(let Me=0,Be=Ae.length;Me<Be;Me++){const He=Ae[Me],ne=n.get(He);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),W(r.TEXTURE_2D,He,Ie),ue(Y.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),x(He,Ie)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?Ae=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ce.__webglTexture),W(Ae,C,Ie),o&&C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)ue(Y.__webglFramebuffer[Me],w,C,r.COLOR_ATTACHMENT0,Ae,Me);else ue(Y.__webglFramebuffer,w,C,r.COLOR_ATTACHMENT0,Ae,0);x(C,Ie)&&S(Ae),t.unbindTexture()}w.depthBuffer&&Se(w)}function ke(w){const C=m(w)||o,Y=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0,ie=Y.length;ce<ie;ce++){const oe=Y[ce];if(x(oe,C)){const Ie=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ae=n.get(oe).__webglTexture;t.bindTexture(Ie,Ae),S(Ie),t.unbindTexture()}}}function ve(w){if(o&&w.samples>0&&ye(w)===!1){const C=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],Y=w.width,ce=w.height;let ie=r.COLOR_BUFFER_BIT;const oe=[],Ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=n.get(w),Me=w.isWebGLMultipleRenderTargets===!0;if(Me)for(let Be=0;Be<C.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Be=0;Be<C.length;Be++){oe.push(r.COLOR_ATTACHMENT0+Be),w.depthBuffer&&oe.push(Ie);const He=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(He===!1&&(w.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),Me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Be]),He===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ie]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ie])),Me){const ne=n.get(C[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,ie,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let Be=0;Be<C.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Be]);const He=n.get(C[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function _e(w){return Math.min(i.maxSamples,w.samples)}function ye(w){const C=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ye(w){const C=a.render.frame;d.get(w)!==C&&(d.set(w,C),w.update())}function Re(w,C){const Y=w.colorSpace,ce=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Fo||Y!==Nn&&Y!==on&&(it.getTransfer(Y)===ot?o===!1?e.has("EXT_sRGB")===!0&&ce===Ot?(w.format=Fo,w.minFilter=sn,w.generateMipmaps=!1):C=Qc.sRGBToLinear(C):(ce!==Ot||ie!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),C}this.allocateTextureUnit=R,this.resetTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ye}function dd(r,e,t){const n=t.isWebGL2;function i(s,a=on){let o;const l=it.getTransfer(a);if(s===On)return r.UNSIGNED_BYTE;if(s===Hc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ph)return r.BYTE;if(s===mh)return r.SHORT;if(s===qo)return r.UNSIGNED_SHORT;if(s===zc)return r.INT;if(s===Yt)return r.UNSIGNED_INT;if(s===vn)return r.FLOAT;if(s===Ji)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gh)return r.ALPHA;if(s===Ot)return r.RGBA;if(s===Ah)return r.LUMINANCE;if(s===xh)return r.LUMINANCE_ALPHA;if(s===$n)return r.DEPTH_COMPONENT;if(s===es)return r.DEPTH_STENCIL;if(s===Fo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Sh)return r.RED;if(s===Qo)return r.RED_INTEGER;if(s===vh)return r.RG;if(s===Gc)return r.RG_INTEGER;if(s===ms)return r.RGBA_INTEGER;if(s===Hr||s===kr||s===Gr||s===Vr)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ua||s===Oa||s===Na||s===za)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ua)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===za)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ha||s===ka)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ha)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ka)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ga||s===Va||s===Wa||s===Xa||s===qa||s===Qa||s===Ya||s===Ka||s===ja||s===Za||s===$a||s===Ja||s===el||s===tl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ga)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Va)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wa)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xa)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qa)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qa)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ya)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ka)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ja)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Za)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$a)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ja)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===el)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wr||s===nl||s===il)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Wr)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===il)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_h||s===sl||s===rl||s===ol)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Wr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ol)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ng extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,A=.005;c.inputState.pinching&&u>f+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hg extends ni{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,A=null;const g=t.getContextAttributes();let m=null,p=null;const x=[],S=[],_=new xe;let M=null;const E=new qt;E.layers.enable(1),E.viewport=new vt;const v=new qt;v.layers.enable(2),v.viewport=new vt;const P=[E,v],y=new Ng;y.layers.enable(1),y.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=x[W];return $===void 0&&($=new mo,x[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=x[W];return $===void 0&&($=new mo,x[W]=$),$.getGripSpace()},this.getHand=function(W){let $=x[W];return $===void 0&&($=new mo,x[W]=$),$.getHandSpace()};function B(W){const $=S.indexOf(W.inputSource);if($===-1)return;const re=x[$];re!==void 0&&(re.update(W.inputSource,W.frame,c||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",R);for(let W=0;W<x.length;W++){const $=S[W];$!==null&&(S[W]=null,x[W].disconnect($))}b=null,F=null,e.setRenderTarget(m),f=null,u=null,h=null,i=null,p=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return A},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",z),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ei(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:On,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,re=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?es:$n,re=g.stencil?mi:Yt);const ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new ei(u.textureWidth,u.textureHeight,{format:Ot,type:On,depthTexture:new ea(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(W){for(let $=0;$<W.removed.length;$++){const re=W.removed[$],de=S.indexOf(re);de>=0&&(S[de]=null,x[de].disconnect(re))}for(let $=0;$<W.added.length;$++){const re=W.added[$];let de=S.indexOf(re);if(de===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=S.length){S.push(re),de=Ce;break}else if(S[Ce]===null){S[Ce]=re,de=Ce;break}if(de===-1)break}const ue=x[de];ue&&ue.connect(re)}}const L=new I,O=new I;function G(W,$,re){L.setFromMatrixPosition($.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const de=L.distanceTo(O),ue=$.projectionMatrix.elements,Ce=re.projectionMatrix.elements,Te=ue[14]/(ue[10]-1),Se=ue[14]/(ue[10]+1),Le=(ue[9]+1)/ue[5],V=(ue[9]-1)/ue[5],ke=(ue[8]-1)/ue[0],ve=(Ce[8]+1)/Ce[0],_e=Te*ke,ye=Te*ve,Ye=de/(-ke+ve),Re=Ye*-ke;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Re),W.translateZ(Ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=Te+Ye,C=Se+Ye,Y=_e-Re,ce=ye+(de-Re),ie=Le*Se/C*w,oe=V*Se/C*w;W.projectionMatrix.makePerspective(Y,ce,ie,oe,w,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;y.near=v.near=E.near=W.near,y.far=v.far=E.far=W.far,(b!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,F=y.far);const $=W.parent,re=y.cameras;q(y,$);for(let de=0;de<re.length;de++)q(re[de],$);re.length===2?G(y,E,v):y.projectionMatrix.copy(E.projectionMatrix),H(W,y,$)};function H(W,$,re){re===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let Q=null;function J(W,$){if(d=$.getViewerPose(c||a),A=$,d!==null){const re=d.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let de=!1;re.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let ue=0;ue<re.length;ue++){const Ce=re[ue];let Te=null;if(f!==null)Te=f.getViewport(Ce);else{const Le=h.getViewSubImage(u,Ce);Te=Le.viewport,ue===0&&(e.setRenderTargetTextures(p,Le.colorTexture,u.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let Se=P[ue];Se===void 0&&(Se=new qt,Se.layers.enable(ue),Se.viewport=new vt,P[ue]=Se),Se.matrix.fromArray(Ce.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ce.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),ue===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(Se)}}for(let re=0;re<x.length;re++){const de=S[re],ue=x[re];de!==null&&ue!==void 0&&ue.update(de,$,c||a)}Q&&Q(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),A=null}const ee=new sd;ee.setAnimationLoop(J),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function kg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ed(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),A(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,S){const _=S.program;n.uniformBlockBinding(x,_)}function c(x,S){let _=i[x.id];_===void 0&&(A(x),_=d(x),i[x.id]=_,x.addEventListener("dispose",m));const M=S.program;n.updateUBOMapping(x,M);const E=e.render.frame;s[x.id]!==E&&(u(x),s[x.id]=E)}function d(x){const S=h();x.__bindingPointIndex=S;const _=r.createBuffer(),M=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=i[x.id],_=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,v=_.length;E<v;E++){const P=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,b=P.length;y<b;y++){const F=P[y];if(f(F,E,y,M)===!0){const B=F.__offset,z=Array.isArray(F.value)?F.value:[F.value];let R=0;for(let L=0;L<z.length;L++){const O=z[L],G=g(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,B+R,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,R),R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,_,M){const E=x.value,v=S+"_"+_;if(M[v]===void 0)return typeof E=="number"||typeof E=="boolean"?M[v]=E:M[v]=E.clone(),!0;{const P=M[v];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return M[v]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function A(x){const S=x.uniforms;let _=0;const M=16;for(let v=0,P=S.length;v<P;v++){const y=Array.isArray(S[v])?S[v]:[S[v]];for(let b=0,F=y.length;b<F;b++){const B=y[b],z=Array.isArray(B.value)?B.value:[B.value];for(let R=0,L=z.length;R<L;R++){const O=z[R],G=g(O),q=_%M;q!==0&&M-q<G.boundary&&(_+=M-q),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=G.storage}}}const E=_%M;return E>0&&(_+=M-E),x.__size=_,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ta{constructor(e={}){const{canvas:t=Bh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const f=new Uint32Array(4),A=new Int32Array(4);let g=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const S=this;let _=!1,M=0,E=0,v=null,P=-1,y=null;const b=new vt,F=new vt;let B=null;const z=new Je(0);let R=0,L=t.width,O=t.height,G=1,q=null,H=null;const Q=new vt(0,0,L,O),J=new vt(0,0,L,O);let ee=!1;const W=new id;let $=!1,re=!1,de=null;const ue=new ze,Ce=new xe,Te=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return v===null?G:1}let V=n;function ke(T,X){for(let j=0;j<T.length;j++){const Z=T[j],K=t.getContext(Z,X);if(K!==null)return K}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ae,!1),V===null){const X=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&X.shift(),V=ke(X,T),V===null)throw ke(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,_e,ye,Ye,Re,w,C,Y,ce,ie,oe,Ie,Ae,Me,Be,He,ne,je,N,te,ge,he,D,le;function we(){ve=new Jp(V),_e=new Qp(V,ve,e),ve.init(_e),he=new dd(V,ve,_e),ye=new Ug(V,ve,_e),Ye=new nm(V),Re=new yg,w=new Og(V,ve,ye,Re,_e,he,Ye),C=new Kp(S),Y=new $p(S),ce=new cu(V,_e),D=new Xp(V,ve,ce,_e),ie=new em(V,ce,Ye,D),oe=new om(V,ie,ce,Ye),N=new rm(V,_e,w),He=new Yp(Re),Ie=new _g(S,C,Y,ve,_e,D,He),Ae=new kg(S,Re),Me=new Eg,Be=new Ig(ve,_e),je=new Wp(S,C,Y,ye,oe,u,l),ne=new Bg(S,oe,_e),le=new Gg(V,Ye,_e,ye),te=new qp(V,ve,Ye,_e),ge=new tm(V,ve,Ye,_e),Ye.programs=Ie.programs,S.capabilities=_e,S.extensions=ve,S.properties=Re,S.renderLists=Me,S.shadowMap=ne,S.state=ye,S.info=Ye}we();const be=new Hg(S,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(L,O,!1))},this.getSize=function(T){return T.set(L,O)},this.setSize=function(T,X,j=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,O=X,t.width=Math.floor(T*G),t.height=Math.floor(X*G),j===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(L*G,O*G).floor()},this.setDrawingBufferSize=function(T,X,j){L=T,O=X,G=j,t.width=Math.floor(T*j),t.height=Math.floor(X*j),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,X,j,Z){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,X,j,Z),ye.viewport(b.copy(Q).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,X,j,Z){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,X,j,Z),ye.scissor(F.copy(J).multiplyScalar(G).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){ye.setScissorTest(ee=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(T=!0,X=!0,j=!0){let Z=0;if(T){let K=!1;if(v!==null){const Ee=v.texture.format;K=Ee===ms||Ee===Gc||Ee===Qo}if(K){const Ee=v.texture.type,De=Ee===On||Ee===Yt||Ee===qo||Ee===mi||Ee===Hc||Ee===kc,Ue=je.getClearColor(),Oe=je.getClearAlpha(),qe=Ue.r,Ge=Ue.g,We=Ue.b;De?(f[0]=qe,f[1]=Ge,f[2]=We,f[3]=Oe,V.clearBufferuiv(V.COLOR,0,f)):(A[0]=qe,A[1]=Ge,A[2]=We,A[3]=Oe,V.clearBufferiv(V.COLOR,0,A))}else Z|=V.COLOR_BUFFER_BIT}X&&(Z|=V.DEPTH_BUFFER_BIT),j&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Me.dispose(),Be.dispose(),Re.dispose(),C.dispose(),Y.dispose(),oe.dispose(),D.dispose(),le.dispose(),Ie.dispose(),be.dispose(),be.removeEventListener("sessionstart",pt),be.removeEventListener("sessionend",Ze),de&&(de.dispose(),de=null),At.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Ye.autoReset,X=ne.enabled,j=ne.autoUpdate,Z=ne.needsUpdate,K=ne.type;we(),Ye.autoReset=T,ne.enabled=X,ne.autoUpdate=j,ne.needsUpdate=Z,ne.type=K}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const X=T.target;X.removeEventListener("dispose",pe),Fe(X)}function Fe(T){Pe(T),Re.remove(T)}function Pe(T){const X=Re.get(T).programs;X!==void 0&&(X.forEach(function(j){Ie.releaseProgram(j)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,j,Z,K,Ee){X===null&&(X=Se);const De=K.isMesh&&K.matrixWorld.determinant()<0,Ue=Id(T,X,j,Z,K);ye.setMaterial(Z,De);let Oe=j.index,qe=1;if(Z.wireframe===!0){if(Oe=ie.getWireframeAttribute(j),Oe===void 0)return;qe=2}const Ge=j.drawRange,We=j.attributes.position;let mt=Ge.start*qe,Gt=(Ge.start+Ge.count)*qe;Ee!==null&&(mt=Math.max(mt,Ee.start*qe),Gt=Math.min(Gt,(Ee.start+Ee.count)*qe)),Oe!==null?(mt=Math.max(mt,0),Gt=Math.min(Gt,Oe.count)):We!=null&&(mt=Math.max(mt,0),Gt=Math.min(Gt,We.count));const bt=Gt-mt;if(bt<0||bt===1/0)return;D.setup(K,Z,Ue,j,Oe);let En,dt=te;if(Oe!==null&&(En=ce.get(Oe),dt=ge,dt.setIndex(En)),K.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*Le()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(K.isLine){let Qe=Z.linewidth;Qe===void 0&&(Qe=1),ye.setLineWidth(Qe*Le()),K.isLineSegments?dt.setMode(V.LINES):K.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else K.isPoints?dt.setMode(V.POINTS):K.isSprite&&dt.setMode(V.TRIANGLES);if(K.isBatchedMesh)dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)dt.renderInstances(mt,bt,K.count);else if(j.isInstancedBufferGeometry){const Qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Br=Math.min(j.instanceCount,Qe);dt.renderInstances(mt,bt,Br)}else dt.render(mt,bt)};function Ve(T,X,j){T.transparent===!0&&T.side===rn&&T.forceSinglePass===!1?(T.side=Ht,T.needsUpdate=!0,Us(T,X,j),T.side=Mn,T.needsUpdate=!0,Us(T,X,j),T.side=rn):Us(T,X,j)}this.compile=function(T,X,j=null){j===null&&(j=T),m=Be.get(j),m.init(),x.push(m),j.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),T!==j&&T.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(S._useLegacyLights);const Z=new Set;return T.traverse(function(K){const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Ue=Ee[De];Ve(Ue,j,K),Z.add(Ue)}else Ve(Ee,j,K),Z.add(Ee)}),x.pop(),m=null,Z},this.compileAsync=function(T,X,j=null){const Z=this.compile(T,X,j);return new Promise(K=>{function Ee(){if(Z.forEach(function(De){Re.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){K(T);return}setTimeout(Ee,10)}ve.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ke=null;function ut(T){Ke&&Ke(T)}function pt(){At.stop()}function Ze(){At.start()}const At=new sd;At.setAnimationLoop(ut),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(T){Ke=T,be.setAnimationLoop(T),T===null?At.stop():At.start()},be.addEventListener("sessionstart",pt),be.addEventListener("sessionend",Ze),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(X),X=be.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,X,v),m=Be.get(T,x.length),m.init(),x.push(m),ue.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W.setFromProjectionMatrix(ue),re=this.localClippingEnabled,$=He.init(this.clippingPlanes,re),g=Me.get(T,p.length),g.init(),p.push(g),xn(T,X,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(q,H),this.info.render.frame++,$===!0&&He.beginShadows();const j=m.state.shadowsArray;if(ne.render(j,T,X),$===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,T),m.setupLights(S._useLegacyLights),X.isArrayCamera){const Z=X.cameras;for(let K=0,Ee=Z.length;K<Ee;K++){const De=Z[K];Ma(g,T,De,De.viewport)}}else Ma(g,T,X);v!==null&&(w.updateMultisampleRenderTarget(v),w.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(S,T,X),D.resetDefaultState(),P=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function xn(T,X,j,Z){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){Z&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const De=oe.update(T),Ue=T.material;Ue.visible&&g.push(T,De,Ue,j,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const De=oe.update(T),Ue=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Te.copy(De.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Ue)){const Oe=De.groups;for(let qe=0,Ge=Oe.length;qe<Ge;qe++){const We=Oe[qe],mt=Ue[We.materialIndex];mt&&mt.visible&&g.push(T,De,mt,j,Te.z,We)}}else Ue.visible&&g.push(T,De,Ue,j,Te.z,null)}}const Ee=T.children;for(let De=0,Ue=Ee.length;De<Ue;De++)xn(Ee[De],X,j,Z)}function Ma(T,X,j,Z){const K=T.opaque,Ee=T.transmissive,De=T.transparent;m.setupLightsView(j),$===!0&&He.setGlobalState(S.clippingPlanes,j),Ee.length>0&&Rd(K,Ee,X,j),Z&&ye.viewport(b.copy(Z)),K.length>0&&Bs(K,X,j),Ee.length>0&&Bs(Ee,X,j),De.length>0&&Bs(De,X,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Rd(T,X,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Ee=_e.isWebGL2;de===null&&(de=new ei(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ji:On,minFilter:bs,samples:Ee?4:0})),S.getDrawingBufferSize(Ce),Ee?de.setSize(Ce.x,Ce.y):de.setSize(Uo(Ce.x),Uo(Ce.y));const De=S.getRenderTarget();S.setRenderTarget(de),S.getClearColor(z),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const Ue=S.toneMapping;S.toneMapping=Zn,Bs(T,j,Z),w.updateMultisampleRenderTarget(de),w.updateRenderTargetMipmap(de);let Oe=!1;for(let qe=0,Ge=X.length;qe<Ge;qe++){const We=X[qe],mt=We.object,Gt=We.geometry,bt=We.material,En=We.group;if(bt.side===rn&&mt.layers.test(Z.layers)){const dt=bt.side;bt.side=Ht,bt.needsUpdate=!0,Ea(mt,j,Z,Gt,bt,En),bt.side=dt,bt.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(de),w.updateRenderTargetMipmap(de)),S.setRenderTarget(De),S.setClearColor(z,R),S.toneMapping=Ue}function Bs(T,X,j){const Z=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ee=T.length;K<Ee;K++){const De=T[K],Ue=De.object,Oe=De.geometry,qe=Z===null?De.material:Z,Ge=De.group;Ue.layers.test(j.layers)&&Ea(Ue,X,j,Oe,qe,Ge)}}function Ea(T,X,j,Z,K,Ee){T.onBeforeRender(S,X,j,Z,K,Ee),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(S,X,j,Z,T,Ee),K.transparent===!0&&K.side===rn&&K.forceSinglePass===!1?(K.side=Ht,K.needsUpdate=!0,S.renderBufferDirect(j,X,Z,K,T,Ee),K.side=Mn,K.needsUpdate=!0,S.renderBufferDirect(j,X,Z,K,T,Ee),K.side=rn):S.renderBufferDirect(j,X,Z,K,T,Ee),T.onAfterRender(S,X,j,Z,K,Ee)}function Us(T,X,j){X.isScene!==!0&&(X=Se);const Z=Re.get(T),K=m.state.lights,Ee=m.state.shadowsArray,De=K.state.version,Ue=Ie.getParameters(T,K.state,Ee,X,j),Oe=Ie.getProgramCacheKey(Ue);let qe=Z.programs;Z.environment=T.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(T.isMeshStandardMaterial?Y:C).get(T.envMap||Z.environment),qe===void 0&&(T.addEventListener("dispose",pe),qe=new Map,Z.programs=qe);let Ge=qe.get(Oe);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===De)return Ca(T,Ue),Ge}else Ue.uniforms=Ie.getUniforms(T),T.onBuild(j,Ue,S),T.onBeforeCompile(Ue,S),Ge=Ie.acquireProgram(Ue,Oe),qe.set(Oe,Ge),Z.uniforms=Ue.uniforms;const We=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=He.uniform),Ca(T,Ue),Z.needsLights=Dd(T),Z.lightsStateVersion=De,Z.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function ba(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=mr.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Ca(T,X){const j=Re.get(T);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Id(T,X,j,Z,K){X.isScene!==!0&&(X=Se),w.resetTextureUnits();const Ee=X.fog,De=Z.isMeshStandardMaterial?X.environment:null,Ue=v===null?S.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Nn,Oe=(Z.isMeshStandardMaterial?Y:C).get(Z.envMap||De),qe=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!j.morphAttributes.position,mt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color;let bt=Zn;Z.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(bt=S.toneMapping);const En=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=En!==void 0?En.length:0,Qe=Re.get(Z),Br=m.state.lights;if($===!0&&(re===!0||T!==y)){const Jt=T===y&&Z.id===P;He.setState(Z,T,Jt)}let ft=!1;Z.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Br.state.version||Qe.outputColorSpace!==Ue||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||Qe.envMap!==Oe||Z.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ge||Qe.morphTargets!==We||Qe.morphNormals!==mt||Qe.morphColors!==Gt||Qe.toneMapping!==bt||_e.isWebGL2===!0&&Qe.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Qe.__version=Z.version);let ii=Qe.currentProgram;ft===!0&&(ii=Us(Z,X,K));let Ta=!1,as=!1,Ur=!1;const Pt=ii.getUniforms(),si=Qe.uniforms;if(ye.useProgram(ii.program)&&(Ta=!0,as=!0,Ur=!0),Z.id!==P&&(P=Z.id,as=!0),Ta||y!==T){Pt.setValue(V,"projectionMatrix",T.projectionMatrix),Pt.setValue(V,"viewMatrix",T.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(V,Te.setFromMatrixPosition(T.matrixWorld)),_e.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,as=!0,Ur=!0)}if(K.isSkinnedMesh){Pt.setOptional(V,K,"bindMatrix"),Pt.setOptional(V,K,"bindMatrixInverse");const Jt=K.skeleton;Jt&&(_e.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Pt.setValue(V,"boneTexture",Jt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Pt.setOptional(V,K,"batchingTexture"),Pt.setValue(V,"batchingTexture",K._matricesTexture,w));const Or=j.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&_e.isWebGL2===!0)&&N.update(K,j,ii),(as||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Pt.setValue(V,"receiveShadow",K.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(si.envMap.value=Oe,si.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),as&&(Pt.setValue(V,"toneMappingExposure",S.toneMappingExposure),Qe.needsLights&&Pd(si,Ur),Ee&&Z.fog===!0&&Ae.refreshFogUniforms(si,Ee),Ae.refreshMaterialUniforms(si,Z,G,O,de),mr.upload(V,ba(Qe),si,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mr.upload(V,ba(Qe),si,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(V,"center",K.center),Pt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(V,"normalMatrix",K.normalMatrix),Pt.setValue(V,"modelMatrix",K.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Jt=Z.uniformsGroups;for(let Nr=0,Ld=Jt.length;Nr<Ld;Nr++)if(_e.isWebGL2){const wa=Jt[Nr];le.update(wa,ii),le.bind(wa,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Pd(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Dd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,X,j){Re.get(T.texture).__webglTexture=X,Re.get(T.depthTexture).__webglTexture=j;const Z=Re.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,X){const j=Re.get(T);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,j=0){v=T,M=X,E=j;let Z=!0,K=null,Ee=!1,De=!1;if(T){const Oe=Re.get(T);Oe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(V.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?w.setupRenderTarget(T):Oe.__hasExternalTextures&&w.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ge=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[X])?K=Ge[X][j]:K=Ge[X],Ee=!0):_e.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?K=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[j]:K=Ge,b.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else b.copy(Q).multiplyScalar(G).floor(),F.copy(J).multiplyScalar(G).floor(),B=ee;if(ye.bindFramebuffer(V.FRAMEBUFFER,K)&&_e.drawBuffers&&Z&&ye.drawBuffers(T,K),ye.viewport(b),ye.scissor(F),ye.setScissorTest(B),Ee){const Oe=Re.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,j)}else if(De){const Oe=Re.get(T.texture),qe=X||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,j||0,qe)}P=-1},this.readRenderTargetPixels=function(T,X,j,Z,K,Ee,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){ye.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Oe=T.texture,qe=Oe.format,Ge=Oe.type;if(qe!==Ot&&he.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Ji&&(ve.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==On&&he.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===vn&&(_e.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-Z&&j>=0&&j<=T.height-K&&V.readPixels(X,j,Z,K,he.convert(qe),he.convert(Ge),Ee)}finally{const Oe=v!==null?Re.get(v).__webglFramebuffer:null;ye.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(T,X,j=0){const Z=Math.pow(2,-j),K=Math.floor(X.image.width*Z),Ee=Math.floor(X.image.height*Z);w.setTexture2D(X,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,T.x,T.y,K,Ee),ye.unbindTexture()},this.copyTextureToTexture=function(T,X,j,Z=0){const K=X.image.width,Ee=X.image.height,De=he.convert(j.format),Ue=he.convert(j.type);w.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Z,T.x,T.y,K,Ee,De,Ue,X.image.data):X.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Z,T.x,T.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Z,T.x,T.y,De,Ue,X.image),Z===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,X,j,Z,K=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Oe=he.convert(Z.format),qe=he.convert(Z.type);let Ge;if(Z.isData3DTexture)w.setTexture3D(Z,0),Ge=V.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)w.setTexture2DArray(Z,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const We=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Gt=V.getParameter(V.UNPACK_SKIP_PIXELS),bt=V.getParameter(V.UNPACK_SKIP_ROWS),En=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=j.isCompressedTexture?j.mipmaps[K]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,T.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,T.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(Ge,K,X.x,X.y,X.z,Ee,De,Ue,Oe,qe,dt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ge,K,X.x,X.y,X.z,Ee,De,Ue,Oe,dt.data)):V.texSubImage3D(Ge,K,X.x,X.y,X.z,Ee,De,Ue,Oe,qe,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,We),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Gt),V.pixelStorei(V.UNPACK_SKIP_ROWS,bt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,En),K===0&&Z.generateMipmaps&&V.generateMipmap(Ge),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){M=0,E=0,v=null,ye.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yo?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?gi:Wc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gi?It:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vg extends ta{}Vg.prototype.isWebGL1Renderer=!0;class hd extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xn extends kt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Rt,d=Rt,h,u){super(null,a,o,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wg extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class ws extends hn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let A=0;const g=[],m=n/2;let p=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function x(){const _=new I,M=new I;let E=0;const v=(t-e)/n;for(let P=0;P<=s;P++){const y=[],b=P/s,F=b*(t-e)+e;for(let B=0;B<=i;B++){const z=B/i,R=z*l+o,L=Math.sin(R),O=Math.cos(R);M.x=F*L,M.y=-b*n+m,M.z=F*O,h.push(M.x,M.y,M.z),_.set(L,v,O).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-b),y.push(A++)}g.push(y)}for(let P=0;P<i;P++)for(let y=0;y<s;y++){const b=g[y][P],F=g[y+1][P],B=g[y+1][P+1],z=g[y][P+1];d.push(b,F,z),d.push(F,B,z),E+=6}c.addGroup(p,E,0),p+=E}function S(_){const M=A,E=new xe,v=new I;let P=0;const y=_===!0?e:t,b=_===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),A++;const F=A;for(let B=0;B<=i;B++){const R=B/i*l+o,L=Math.cos(R),O=Math.sin(R);v.x=y*O,v.y=m*b,v.z=y*L,h.push(v.x,v.y,v.z),u.push(0,b,0),E.x=L*.5+.5,E.y=O*.5*b+.5,f.push(E.x,E.y),A++}for(let B=0;B<i;B++){const z=M+B,R=F+B;_===!0?d.push(R,R+1,z):d.push(R+1,R,z),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class na extends ws{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new na(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends hn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new I,u=new I,f=[],A=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],S=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const E=M/t;h.x=-e*Math.cos(i+E*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+E*s)*Math.sin(a+S*o),A.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(E+_,1-S),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const S=d[p][x+1],_=d[p][x],M=d[p+1][x],E=d[p+1][x+1];(p!==0||a>0)&&f.push(S,_,E),(p!==n-1||l<Math.PI)&&f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new Zt(A,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xg extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Er{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);const Kl={type:"change"},go={type:"start"},jl={type:"end"},or=new Zo,Zl=new Ln,qg=Math.cos(70*Ko.DEG2RAD);let Qg=class extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:nn.ROTATE,TWO:nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Be),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kl),n.update(),s=i.NONE},this.update=(function(){const D=new I,le=new rt().setFromUnitVectors(e.up,new I(0,1,0)),we=le.clone().invert(),be=new I,se=new rt,U=new I,ae=2*Math.PI;return function(Fe=null){const Pe=n.object.position;D.copy(Pe).sub(n.target),D.applyQuaternion(le),o.setFromVector3(D),n.autoRotate&&s===i.NONE&&B(b(Fe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ve=n.minAzimuthAngle,Ke=n.maxAzimuthAngle;isFinite(Ve)&&isFinite(Ke)&&(Ve<-Math.PI?Ve+=ae:Ve>Math.PI&&(Ve-=ae),Ke<-Math.PI?Ke+=ae:Ke>Math.PI&&(Ke-=ae),Ve<=Ke?o.theta=Math.max(Ve,Math.min(Ke,o.theta)):o.theta=o.theta>(Ve+Ke)/2?Math.max(Ve,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(we),Pe.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let ut=!1;if(n.zoomToCursor&&E){let pt=null;if(n.object.isPerspectiveCamera){const Ze=D.length();pt=Q(Ze*c);const At=Ze-pt;n.object.position.addScaledVector(_,At),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new I(M.x,M.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ut=!0;const At=new I(M.x,M.y,0);At.unproject(n.object),n.object.position.sub(At).add(Ze),n.object.updateMatrixWorld(),pt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(pt).add(n.object.position):(or.origin.copy(n.object.position),or.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(or.direction))<qg?e.lookAt(n.target):(Zl.setFromNormalAndCoplanarPoint(n.object.up,n.target),or.intersectPlane(Zl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ut=!0);return c=1,E=!1,ut||be.distanceToSquared(n.object.position)>a||8*(1-se.dot(n.object.quaternion))>a||U.distanceToSquared(n.target)>0?(n.dispatchEvent(Kl),be.copy(n.object.position),se.copy(n.object.quaternion),U.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",je),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",Y),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",Y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Be),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Er,l=new Er;let c=1;const d=new I,h=new xe,u=new xe,f=new xe,A=new xe,g=new xe,m=new xe,p=new xe,x=new xe,S=new xe,_=new I,M=new xe;let E=!1;const v=[],P={};let y=!1;function b(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function F(D){const le=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*le)}function B(D){l.theta-=D}function z(D){l.phi-=D}const R=(function(){const D=new I;return function(we,be){D.setFromMatrixColumn(be,0),D.multiplyScalar(-we),d.add(D)}})(),L=(function(){const D=new I;return function(we,be){n.screenSpacePanning===!0?D.setFromMatrixColumn(be,1):(D.setFromMatrixColumn(be,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(we),d.add(D)}})(),O=(function(){const D=new I;return function(we,be){const se=n.domElement;if(n.object.isPerspectiveCamera){const U=n.object.position;D.copy(U).sub(n.target);let ae=D.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),R(2*we*ae/se.clientHeight,n.object.matrix),L(2*be*ae/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(we*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),L(be*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function G(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(D,le){if(!n.zoomToCursor)return;E=!0;const we=n.domElement.getBoundingClientRect(),be=D-we.left,se=le-we.top,U=we.width,ae=we.height;M.x=be/U*2-1,M.y=-(se/ae)*2+1,_.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function J(D){h.set(D.clientX,D.clientY)}function ee(D){H(D.clientX,D.clientX),p.set(D.clientX,D.clientY)}function W(D){A.set(D.clientX,D.clientY)}function $(D){u.set(D.clientX,D.clientY),f.subVectors(u,h).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*f.x/le.clientHeight),z(2*Math.PI*f.y/le.clientHeight),h.copy(u),n.update()}function re(D){x.set(D.clientX,D.clientY),S.subVectors(x,p),S.y>0?G(F(S.y)):S.y<0&&q(F(S.y)),p.copy(x),n.update()}function de(D){g.set(D.clientX,D.clientY),m.subVectors(g,A).multiplyScalar(n.panSpeed),O(m.x,m.y),A.copy(g),n.update()}function ue(D){H(D.clientX,D.clientY),D.deltaY<0?q(F(D.deltaY)):D.deltaY>0&&G(F(D.deltaY)),n.update()}function Ce(D){let le=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),le=!0;break}le&&(D.preventDefault(),n.update())}function Te(D){if(v.length===1)h.set(D.pageX,D.pageY);else{const le=he(D),we=.5*(D.pageX+le.x),be=.5*(D.pageY+le.y);h.set(we,be)}}function Se(D){if(v.length===1)A.set(D.pageX,D.pageY);else{const le=he(D),we=.5*(D.pageX+le.x),be=.5*(D.pageY+le.y);A.set(we,be)}}function Le(D){const le=he(D),we=D.pageX-le.x,be=D.pageY-le.y,se=Math.sqrt(we*we+be*be);p.set(0,se)}function V(D){n.enableZoom&&Le(D),n.enablePan&&Se(D)}function ke(D){n.enableZoom&&Le(D),n.enableRotate&&Te(D)}function ve(D){if(v.length==1)u.set(D.pageX,D.pageY);else{const we=he(D),be=.5*(D.pageX+we.x),se=.5*(D.pageY+we.y);u.set(be,se)}f.subVectors(u,h).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*f.x/le.clientHeight),z(2*Math.PI*f.y/le.clientHeight),h.copy(u)}function _e(D){if(v.length===1)g.set(D.pageX,D.pageY);else{const le=he(D),we=.5*(D.pageX+le.x),be=.5*(D.pageY+le.y);g.set(we,be)}m.subVectors(g,A).multiplyScalar(n.panSpeed),O(m.x,m.y),A.copy(g)}function ye(D){const le=he(D),we=D.pageX-le.x,be=D.pageY-le.y,se=Math.sqrt(we*we+be*be);x.set(0,se),S.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),G(S.y),p.copy(x);const U=(D.pageX+le.x)*.5,ae=(D.pageY+le.y)*.5;H(U,ae)}function Ye(D){n.enableZoom&&ye(D),n.enablePan&&_e(D)}function Re(D){n.enableZoom&&ye(D),n.enableRotate&&ve(D)}function w(D){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",Y)),N(D),D.pointerType==="touch"?He(D):ce(D))}function C(D){n.enabled!==!1&&(D.pointerType==="touch"?ne(D):ie(D))}function Y(D){te(D),v.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",Y)),n.dispatchEvent(jl),s=i.NONE}function ce(D){let le;switch(D.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case tn.DOLLY:if(n.enableZoom===!1)return;ee(D),s=i.DOLLY;break;case tn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;W(D),s=i.PAN}else{if(n.enableRotate===!1)return;J(D),s=i.ROTATE}break;case tn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;J(D),s=i.ROTATE}else{if(n.enablePan===!1)return;W(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(go)}function ie(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(D);break;case i.DOLLY:if(n.enableZoom===!1)return;re(D);break;case i.PAN:if(n.enablePan===!1)return;de(D);break}}function oe(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(go),ue(Ie(D)),n.dispatchEvent(jl))}function Ie(D){const le=D.deltaMode,we={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(le){case 1:we.deltaY*=16;break;case 2:we.deltaY*=100;break}return D.ctrlKey&&!y&&(we.deltaY*=10),we}function Ae(D){D.key==="Control"&&(y=!0,document.addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(D){D.key==="Control"&&(y=!1,document.removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function Be(D){n.enabled===!1||n.enablePan===!1||Ce(D)}function He(D){switch(ge(D),v.length){case 1:switch(n.touches.ONE){case nn.ROTATE:if(n.enableRotate===!1)return;Te(D),s=i.TOUCH_ROTATE;break;case nn.PAN:if(n.enablePan===!1)return;Se(D),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case nn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(D),s=i.TOUCH_DOLLY_PAN;break;case nn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(D),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(go)}function ne(D){switch(ge(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(D),n.update();break;default:s=i.NONE}}function je(D){n.enabled!==!1&&D.preventDefault()}function N(D){v.push(D.pointerId)}function te(D){delete P[D.pointerId];for(let le=0;le<v.length;le++)if(v[le]==D.pointerId){v.splice(le,1);return}}function ge(D){let le=P[D.pointerId];le===void 0&&(le=new xe,P[D.pointerId]=le),le.set(D.pageX,D.pageY)}function he(D){const le=D.pointerId===v[0]?v[1]:v[0];return P[le]}n.domElement.addEventListener("contextmenu",je),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",Y),n.domElement.addEventListener("wheel",oe,{passive:!1}),document.addEventListener("keydown",Ae,{passive:!0,capture:!0}),this.update()}};class Yn{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((c,d)=>{n=c,i=d});const s=n.bind(this),a=i.bind(this),o=(...c)=>{s(...c)},l=c=>{a(c)};e(o.bind(this),l.bind(this)),this.abortHandler=t,this.id=Yn.idGen++}then(e){return new Yn((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof Yn?s.then((...a)=>{t(...a)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new Yn(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class ud extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const a=n>>23&255;return a<103?i:a>142?(i|=31744,i|=(a==255?0:1)&&n&8388607,i):a<113?(s|=2048,i|=(s>>114-a)+(s>>113-a&1),i):(i|=a-112<<10|s>>1,i+=s&1,i)}})();const Ao=(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}})(),Yg=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},Lr=function(r,e,t=!0,n){const i=new AbortController,s=i.signal;let a=!1;const o=d=>{i.abort(d),a=!0};let l=!1;const c=(d,h,u,f)=>{e&&!l&&(e(d,h,u,f),d===100&&(l=!0))};return new Yn((d,h)=>{const u={signal:s};n&&(u.headers=n),fetch(r,u).then(async f=>{if(!f.ok){const S=await f.text();h(new Error(`Fetch failed: ${f.status} ${f.statusText} ${S}`));return}const A=f.body.getReader();let g=0,m=f.headers.get("Content-Length"),p=m?parseInt(m):void 0;const x=[];for(;!a;)try{const{value:S,done:_}=await A.read();if(_){if(c(100,"100%",S,p),t){const v=new Blob(x).arrayBuffer();d(v)}else d();break}g+=S.length;let M,E;p!==void 0&&(M=g/p*100,E=`${M.toFixed(2)}%`),t&&x.push(S),c(M,E,S,p)}catch(S){h(S);return}}).catch(f=>{h(new ud(f))})},o)},ct=function(r,e,t){return Math.max(Math.min(r,t),e)},Bi=function(){return performance.now()/1e3},Ni=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)Ni(e)},Kt=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r?r():void 0)},e?1:50)}),qi=(r=0)=>{let e=0;if(r===1)e=9;else if(r===2)e=24;else if(r===3)e=45;else if(r>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},ia=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},xo=r=>{let e,t;return r||(r=()=>{}),{promise:new Yn((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class Kg{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function sa(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function fd(){if(sa()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new Kg(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const jg=14;class fe{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=qi(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+jg,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=qi(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=fe.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,a,o,l,c,d,h,u,f,A,...g){const m=[e,t,n,i,s,a,o,l,c,d,h,u,f,A,...this.defaultSphericalHarmonics];for(let p=0;p<g.length&&p<this.sphericalHarmonicsCount;p++)m[p]=g[p];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=fe.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}}class st{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const Zg=st.SphericalHarmonics8BitCompressionRange,qn=Zg/2,_t=Cs.toHalfFloat.bind(Cs),ra=Cs.fromHalfFloat.bind(Cs),lt=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return Cs.fromHalfFloat(r);if(e===2)return oa(r,n,i)},As=(r,e,t)=>{r=ct(r,e,t);const n=t-e;return ct(Math.floor((r-e)/n*255),0,255)},oa=(r,e,t)=>{const n=t-e;return r/255*n+e},pd=(r,e,t)=>As(ra(r,e,t)),$g=(r,e,t)=>_t(oa(r,e,t)),tt=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),Jg=(function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=$g:n==0&&(s=oa):t===2||t===1?n===0?s=ra:n==2&&(i?s=pd:s=r):t===0&&(n===1?s=_t:n==2&&(i?s=As:s=_t)),s(e)}})(),Ui=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),a=new Uint8Array(t,n);for(let o=0;o<i;o++)a[o]=s[o]};class k{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let a=0;for(;s<e.splatCount;){let o=e.partiallyFilledBucketLengths[a];if(t>=s&&t<s+o)break;s+=o,n++,a++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],a=e-s.splatCountOffset,o=s.bytesPerSplat*a,l=new DataView(this.bufferData,s.dataBase+o),c=tt(l,0,this.compressionLevel),d=tt(l,1,this.compressionLevel),h=tt(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(s,a)*k.BucketStorageSizeFloats,A=s.compressionScaleFactor,g=s.compressionScaleRange;t.x=(c-g)*A+s.bucketArray[f],t.y=(d-g)*A+s.bucketArray[f+1],t.z=(h-g)*A+s.bucketArray[f+2]}else t.x=c,t.y=d,t.z=h;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){const e=new ze,t=new ze,n=new ze,i=new I,s=new I,a=new rt;return function(o,l,c,d,h){const u=this.globalSplatIndexToSectionMap[o],f=this.sections[u],A=o-f.splatCountOffset,g=f.bytesPerSplat*A+k.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,f.dataBase+g);s.set(lt(tt(m,0,this.compressionLevel),this.compressionLevel),lt(tt(m,1,this.compressionLevel),this.compressionLevel),lt(tt(m,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(s.x=h.x),h.y!==void 0&&(s.y=h.y),h.z!==void 0&&(s.z=h.z)),a.set(lt(tt(m,4,this.compressionLevel),this.compressionLevel),lt(tt(m,5,this.compressionLevel),this.compressionLevel),lt(tt(m,6,this.compressionLevel),this.compressionLevel),lt(tt(m,3,this.compressionLevel),this.compressionLevel)),d?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(a),n.copy(e).multiply(t).multiply(d),n.decompose(i,c,l)):(l.copy(s),c.copy(a))}})();getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,a=i.bytesPerSplat*s+k.CompressionLevels[this.compressionLevel].ColorOffsetBytes,o=new Uint8Array(this.bufferData,i.dataBase+a,4);t.set(o[0],o[1],o[2],o[3])}fillSplatCenterArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);const o=new I;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],d=this.sections[c],h=l-d.splatCountOffset,u=(l-n+s)*k.CenterComponentCount,f=d.bytesPerSplat*h,A=new DataView(this.bufferData,d.dataBase+f),g=tt(A,0,this.compressionLevel),m=tt(A,1,this.compressionLevel),p=tt(A,2,this.compressionLevel);if(this.compressionLevel>=1){const S=this.getBucketIndex(d,h)*k.BucketStorageSizeFloats,_=d.compressionScaleFactor,M=d.compressionScaleRange;o.x=(g-M)*_+d.bucketArray[S],o.y=(m-M)*_+d.bucketArray[S+1],o.z=(p-M)*_+d.bucketArray[S+2]}else o.x=g,o.y=m,o.z=p;t&&o.applyMatrix4(t),e[u]=o.x,e[u+1]=o.y,e[u+2]=o.z}}fillSplatScaleRotationArray=(function(){const e=new ze,t=new ze,n=new ze,i=new I,s=new rt,a=new I,o=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,d,h,u,f,A,g){const m=this.splatCount;h=h||0,u=u||m-1,f===void 0&&(f=h);const p=(x,S)=>Jg(x,S,A);for(let x=h;x<=u;x++){const S=this.globalSplatIndexToSectionMap[x],_=this.sections[S],M=x-_.splatCountOffset,E=_.bytesPerSplat*M+k.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,v=(x-h+f)*k.ScaleComponentCount,P=(x-h+f)*k.RotationComponentCount,y=new DataView(this.bufferData,_.dataBase+E),b=g&&g.x!==void 0?g.x:tt(y,0,this.compressionLevel),F=g&&g.y!==void 0?g.y:tt(y,1,this.compressionLevel),B=g&&g.z!==void 0?g.z:tt(y,2,this.compressionLevel),z=tt(y,3,this.compressionLevel),R=tt(y,4,this.compressionLevel),L=tt(y,5,this.compressionLevel),O=tt(y,6,this.compressionLevel);i.set(lt(b,this.compressionLevel),lt(F,this.compressionLevel),lt(B,this.compressionLevel)),s.set(lt(R,this.compressionLevel),lt(L,this.compressionLevel),lt(O,this.compressionLevel),lt(z,this.compressionLevel)).normalize(),d&&(a.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(d),n.decompose(a,s,i),s.normalize()),o(s),l&&(l[v]=p(i.x,0),l[v+1]=p(i.y,0),l[v+2]=p(i.z,0)),c&&(c[P]=p(s.x,0),c[P+1]=p(s.y,0),c[P+2]=p(s.z,0),c[P+3]=p(s.w,0))}}})();static computeCovariance=(function(){const e=new ze,t=new Ne,n=new Ne,i=new Ne,s=new Ne,a=new Ne,o=new Ne;return function(l,c,d,h,u=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),d&&(a.setFromMatrix4(d),o.copy(a).transpose(),s.multiply(o),s.premultiply(a)),f>=1?(h[u]=_t(s.elements[0]),h[u+1]=_t(s.elements[3]),h[u+2]=_t(s.elements[6]),h[u+3]=_t(s.elements[4]),h[u+4]=_t(s.elements[7]),h[u+5]=_t(s.elements[8])):(h[u]=s.elements[0],h[u+1]=s.elements[3],h[u+2]=s.elements[6],h[u+3]=s.elements[4],h[u+4]=s.elements[7],h[u+5]=s.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,s,a){const o=this.splatCount,l=new I,c=new rt;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let d=n;d<=i;d++){const h=this.globalSplatIndexToSectionMap[d],u=this.sections[h],f=d-u.splatCountOffset,A=(d-n+s)*k.CovarianceComponentCount,g=u.bytesPerSplat*f+k.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,u.dataBase+g);l.set(lt(tt(m,0,this.compressionLevel),this.compressionLevel),lt(tt(m,1,this.compressionLevel),this.compressionLevel),lt(tt(m,2,this.compressionLevel),this.compressionLevel)),c.set(lt(tt(m,4,this.compressionLevel),this.compressionLevel),lt(tt(m,5,this.compressionLevel),this.compressionLevel),lt(tt(m,6,this.compressionLevel),this.compressionLevel),lt(tt(m,3,this.compressionLevel),this.compressionLevel)),k.computeCovariance(l,c,t,e,A,a)}}fillSplatColorArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let o=n;o<=i;o++){const l=this.globalSplatIndexToSectionMap[o],c=this.sections[l],d=o-c.splatCountOffset,h=(o-n+s)*k.ColorComponentCount,u=c.bytesPerSplat*d+k.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+u);let A=f[3];A=A>=t?A:0,e[h]=f[0],e[h+1]=f[1],e[h+2]=f[2],e[h+3]=A}}fillSphericalHarmonicsArray=(function(){for(let R=0;R<15;R++)new I;const e=new Ne,t=new ze,n=new I,i=new I,s=new rt,a=[],o=[],l=[],c=[],d=[],h=[],u=[],f=[],A=[],g=[],m=[],p=[],x=[],S=[],_=[],M=[],E=[],v=[],P=R=>R,y=(R,L,O,G)=>{R[0]=L,R[1]=O,R[2]=G},b=(R,L,O,G,q)=>{R[0]=tt(L,G,q,!0),R[1]=tt(L,G+O,q,!0),R[2]=tt(L,G+O+O,q,!0)},F=(R,L)=>{L[0]=R[0],L[1]=R[1],L[2]=R[2]},B=(R,L,O,G)=>{L[O]=G(R[0]),L[O+1]=G(R[1]),L[O+2]=G(R[2])},z=(R,L,O,G,q)=>(L[0]=lt(R[0],O,!0,G,q),L[1]=lt(R[1],O,!0,G,q),L[2]=lt(R[2],O,!0,G,q),L);return function(R,L,O,G,q,H,Q){const J=this.splatCount;G=G||0,q=q||J-1,H===void 0&&(H=G),O&&L>=1&&(t.copy(O),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),y(a,e.elements[4],-e.elements[7],e.elements[1]),y(o,-e.elements[5],e.elements[8],-e.elements[2]),y(l,e.elements[3],-e.elements[6],e.elements[0]));const ee=$=>pd($,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),W=$=>As($,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let $=G;$<=q;$++){const re=this.globalSplatIndexToSectionMap[$],de=this.sections[re];L=Math.min(L,de.sphericalHarmonicsDegree);const ue=qi(L),Ce=$-de.splatCountOffset,Te=de.bytesPerSplat*Ce+k.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Se=new DataView(this.bufferData,de.dataBase+Te),Le=($-G+H)*ue;let V=O?0:this.compressionLevel,ke=P;V!==Q&&(V===1?Q===0?ke=ra:Q==2&&(ke=ee):V===0&&(Q===1?ke=_t:Q==2&&(ke=W)));const ve=this.minSphericalHarmonicsCoeff,_e=this.maxSphericalHarmonicsCoeff;L>=1&&(b(A,Se,3,0,this.compressionLevel),b(g,Se,3,1,this.compressionLevel),b(m,Se,3,2,this.compressionLevel),O?(z(A,A,this.compressionLevel,ve,_e),z(g,g,this.compressionLevel,ve,_e),z(m,m,this.compressionLevel,ve,_e),k.rotateSphericalHarmonics3(A,g,m,a,o,l,S,_,M)):(F(A,S),F(g,_),F(m,M)),B(S,R,Le,ke),B(_,R,Le+3,ke),B(M,R,Le+6,ke),L>=2&&(b(A,Se,5,9,this.compressionLevel),b(g,Se,5,10,this.compressionLevel),b(m,Se,5,11,this.compressionLevel),b(p,Se,5,12,this.compressionLevel),b(x,Se,5,13,this.compressionLevel),O?(z(A,A,this.compressionLevel,ve,_e),z(g,g,this.compressionLevel,ve,_e),z(m,m,this.compressionLevel,ve,_e),z(p,p,this.compressionLevel,ve,_e),z(x,x,this.compressionLevel,ve,_e),k.rotateSphericalHarmonics5(A,g,m,p,x,a,o,l,c,d,h,u,f,S,_,M,E,v)):(F(A,S),F(g,_),F(m,M),F(p,E),F(x,v)),B(S,R,Le+9,ke),B(_,R,Le+12,ke),B(M,R,Le+15,ke),B(E,R,Le+18,ke),B(v,R,Le+21,ke)))}}})();static dot3=(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const a=i[0],o=i[1],l=i[2];k.addInto3(e[0]*a,e[1]*a,e[2]*a,s),k.addInto3(t[0]*o,t[1]*o,t[2]*o,s),k.addInto3(n[0]*l,n[1]*l,n[2]*l,s)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,s,a,o)=>{o[0]=o[1]=o[2]=0;const l=a[0],c=a[1],d=a[2],h=a[3],u=a[4];k.addInto3(e[0]*l,e[1]*l,e[2]*l,o),k.addInto3(t[0]*c,t[1]*c,t[2]*c,o),k.addInto3(n[0]*d,n[1]*d,n[2]*d,o),k.addInto3(i[0]*h,i[1]*h,i[2]*h,o),k.addInto3(s[0]*u,s[1]*u,s[2]*u,o)};static rotateSphericalHarmonics3=(e,t,n,i,s,a,o,l,c)=>{k.dot3(e,t,n,i,o),k.dot3(e,t,n,s,l),k.dot3(e,t,n,a,c)};static rotateSphericalHarmonics5=(e,t,n,i,s,a,o,l,c,d,h,u,f,A,g,m,p,x)=>{const S=Math.sqrt(.25),_=Math.sqrt(3/4),M=Math.sqrt(1/3),E=Math.sqrt(4/3),v=Math.sqrt(1/12);c[0]=S*(l[2]*a[0]+l[0]*a[2]+(a[2]*l[0]+a[0]*l[2])),c[1]=l[1]*a[0]+a[1]*l[0],c[2]=_*(l[1]*a[1]+a[1]*l[1]),c[3]=l[1]*a[2]+a[1]*l[2],c[4]=S*(l[2]*a[2]-l[0]*a[0]+(a[2]*l[2]-a[0]*l[0])),k.dot5(e,t,n,i,s,c,A),d[0]=S*(o[2]*a[0]+o[0]*a[2]+(a[2]*o[0]+a[0]*o[2])),d[1]=o[1]*a[0]+a[1]*o[0],d[2]=_*(o[1]*a[1]+a[1]*o[1]),d[3]=o[1]*a[2]+a[1]*o[2],d[4]=S*(o[2]*a[2]-o[0]*a[0]+(a[2]*o[2]-a[0]*o[0])),k.dot5(e,t,n,i,s,d,g),h[0]=M*(o[2]*o[0]+o[0]*o[2])+-v*(l[2]*l[0]+l[0]*l[2]+(a[2]*a[0]+a[0]*a[2])),h[1]=E*o[1]*o[0]+-M*(l[1]*l[0]+a[1]*a[0]),h[2]=o[1]*o[1]+-S*(l[1]*l[1]+a[1]*a[1]),h[3]=E*o[1]*o[2]+-M*(l[1]*l[2]+a[1]*a[2]),h[4]=M*(o[2]*o[2]-o[0]*o[0])+-v*(l[2]*l[2]-l[0]*l[0]+(a[2]*a[2]-a[0]*a[0])),k.dot5(e,t,n,i,s,h,m),u[0]=S*(o[2]*l[0]+o[0]*l[2]+(l[2]*o[0]+l[0]*o[2])),u[1]=o[1]*l[0]+l[1]*o[0],u[2]=_*(o[1]*l[1]+l[1]*o[1]),u[3]=o[1]*l[2]+l[1]*o[2],u[4]=S*(o[2]*l[2]-o[0]*l[0]+(l[2]*o[2]-l[0]*o[0])),k.dot5(e,t,n,i,s,u,p),f[0]=S*(l[2]*l[0]+l[0]*l[2]-(a[2]*a[0]+a[0]*a[2])),f[1]=l[1]*l[0]-a[1]*a[0],f[2]=_*(l[1]*l[1]-a[1]*a[1]),f[3]=l[1]*l[2]-a[1]*a[2],f[4]=S*(l[2]*l[2]-l[0]*l[0]-(a[2]*a[2]-a[0]*a[0])),k.dot5(e,t,n,i,s,f,x)};static parseHeader(e){const t=new Uint8Array(e,0,k.HeaderSizeBytes),n=new Uint16Array(e,0,k.HeaderSizeBytes/2),i=new Uint32Array(e,0,k.HeaderSizeBytes/4),s=new Float32Array(e,0,k.HeaderSizeBytes/4),a=t[0],o=t[1],l=i[1],c=i[2],d=i[3],h=i[4],u=n[10],f=new I(s[6],s[7],s[8]),A=s[9]||-qn,g=s[10]||qn;return{versionMajor:a,versionMinor:o,maxSectionCount:l,sectionCount:c,maxSplatCount:d,splatCount:h,compressionLevel:u,sceneCenter:f,minSphericalHarmonicsCoeff:A,maxSphericalHarmonicsCoeff:g}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,k.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,k.HeaderSizeBytes),i=new Uint16Array(t,0,k.HeaderSizeBytes/2),s=new Uint32Array(t,0,k.HeaderSizeBytes/4),a=new Float32Array(t,0,k.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,a[6]=e.sceneCenter.x,a[7]=e.sceneCenter.y,a[8]=e.sceneCenter.z,a[9]=e.minSphericalHarmonicsCoeff||-qn,a[10]=e.maxSphericalHarmonicsCoeff||qn}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,a=e.maxSectionCount,o=new Uint16Array(t,n,a*k.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,a*k.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,a*k.SectionHeaderSizeBytes/4),d=[];let h=0,u=h/2,f=h/4,A=k.HeaderSizeBytes+e.maxSectionCount*k.SectionHeaderSizeBytes,g=0;for(let m=0;m<a;m++){const p=l[f+1],x=l[f+2],S=l[f+3],_=c[f+4],M=_/2,E=o[u+10],v=l[f+6]||k.CompressionLevels[s].ScaleRange,P=l[f+8],y=l[f+9],b=y*4,F=E*S+b,B=o[u+20],{bytesPerSplat:z}=k.calculateComponentStorage(s,B),R=z*p,L=R+F,O={bytesPerSplat:z,splatCountOffset:g,splatCount:i?p:0,maxSplatCount:p,bucketSize:x,bucketCount:S,bucketBlockSize:_,halfBucketBlockSize:M,bucketStorageSizeBytes:E,bucketsStorageSizeBytes:F,splatDataStorageSizeBytes:R,storageSizeBytes:L,compressionScaleRange:v,compressionScaleFactor:M/v,base:A,bucketsBase:A+b,dataBase:A+F,fullBucketCount:P,partiallyFilledBucketCount:y,sphericalHarmonicsDegree:B};d[m]=O,A+=L,h+=k.SectionHeaderSizeBytes,u=h/2,f=h/4,g+=p}return d}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,k.SectionHeaderSizeBytes/2),a=new Uint32Array(n,i,k.SectionHeaderSizeBytes/4),o=new Float32Array(n,i,k.SectionHeaderSizeBytes/4);a[0]=e.splatCount,a[1]=e.maxSplatCount,a[2]=t>=1?e.bucketSize:0,a[3]=t>=1?e.bucketCount:0,o[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?k.BucketStorageSizeBytes:0,a[6]=t>=1?e.compressionScaleRange:0,a[7]=e.storageSizeBytes,a[8]=t>=1?e.fullBucketCount:0,a[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,k.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=k.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=k.parseSectionHeaders(n,this.bufferData,k.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=k.CompressionLevels[e].BytesPerCenter,i=k.CompressionLevels[e].BytesPerScale,s=k.CompressionLevels[e].BytesPerRotation,a=k.CompressionLevels[e].BytesPerColor,o=qi(t),l=k.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*o,c=n+i+s+a+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:a,sphericalHarmonicsComponentsPerSplat:o,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*k.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){k.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=k.HeaderSizeBytes+k.SectionHeaderSizeBytes*e;k.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),a=new rt,o=new I,l=new I,{X:c,Y:d,Z:h,SCALE0:u,SCALE1:f,SCALE2:A,ROTATION0:g,ROTATION1:m,ROTATION2:p,ROTATION3:x,FDC0:S,FDC1:_,FDC2:M,OPACITY:E,FRC0:v,FRC9:P}=fe.OFFSET,y=(b,F,B)=>{const z=B*2+1;return b=Math.round(b*F)+B,ct(b,0,z)};return function(b,F,B,z,R,L,O,G,q=-qn,H=qn){const Q=qi(R),J=k.CompressionLevels[z].BytesPerCenter,ee=k.CompressionLevels[z].BytesPerScale,W=k.CompressionLevels[z].BytesPerRotation,$=k.CompressionLevels[z].BytesPerColor,re=B,de=re+J,ue=de+ee,Ce=ue+W,Te=Ce+$;if(b[g]!==void 0?(a.set(b[g],b[m],b[p],b[x]),a.normalize()):a.set(1,0,0,0),b[u]!==void 0?o.set(b[u]||0,b[f]||0,b[A]||0):o.set(0,0,0),z===0){const Le=new Float32Array(F,re,k.CenterComponentCount),V=new Float32Array(F,ue,k.RotationComponentCount),ke=new Float32Array(F,de,k.ScaleComponentCount);if(V.set([a.x,a.y,a.z,a.w]),ke.set([o.x,o.y,o.z]),Le.set([b[c],b[d],b[h]]),R>0){const ve=new Float32Array(F,Te,Q);if(R>=1){for(let _e=0;_e<9;_e++)ve[_e]=b[v+_e]||0;if(R>=2)for(let _e=0;_e<15;_e++)ve[_e+9]=b[P+_e]||0}}}else{const Le=new Uint16Array(e,0,k.CenterComponentCount),V=new Uint16Array(n,0,k.RotationComponentCount),ke=new Uint16Array(t,0,k.ScaleComponentCount);if(V.set([_t(a.x),_t(a.y),_t(a.z),_t(a.w)]),ke.set([_t(o.x),_t(o.y),_t(o.z)]),l.set(b[c],b[d],b[h]).sub(L),l.x=y(l.x,O,G),l.y=y(l.y,O,G),l.z=y(l.z,O,G),Le.set([l.x,l.y,l.z]),R>0){const ve=z===1?Uint16Array:Uint8Array,_e=z===1?2:1,ye=new ve(s,0,Q);if(R>=1){for(let Re=0;Re<9;Re++){const w=b[v+Re]||0;ye[Re]=z===1?_t(w):As(w,q,H)}const Ye=9*_e;if(Ui(ye.buffer,0,F,Te,Ye),R>=2){for(let Re=0;Re<15;Re++){const w=b[P+Re]||0;ye[Re+9]=z===1?_t(w):As(w,q,H)}Ui(ye.buffer,Ye,F,Te+Ye,15*_e)}}}Ui(Le.buffer,0,F,re,6),Ui(ke.buffer,0,F,de,6),Ui(V.buffer,0,F,ue,8)}const Se=new Uint8ClampedArray(i,0,4);Se.set([b[S]||0,b[_]||0,b[M]||0]),Se[3]=b[E]||0,Ui(Se.buffer,0,F,Ce,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,s,a,o=[]){let l=0;for(let M=0;M<e.length;M++){const E=e[M];l=Math.max(E.sphericalHarmonicsDegree,l)}let c,d;for(let M=0;M<e.length;M++){const E=e[M];for(let v=0;v<E.splats.length;v++){const P=E.splats[v];for(let y=fe.OFFSET.FRC0;y<fe.OFFSET.FRC23&&y<P.length;y++)(!c||P[y]<c)&&(c=P[y]),(!d||P[y]>d)&&(d=P[y])}}c=c||-qn,d=d||qn;const{bytesPerSplat:h}=k.calculateComponentStorage(n,l),u=k.CompressionLevels[n].ScaleRange,f=[],A=[];let g=0;for(let M=0;M<e.length;M++){const E=e[M],v=new fe(l);for(let re=0;re<E.splatCount;re++){const de=E.splats[re];(de[fe.OFFSET.OPACITY]||0)>=t&&v.addSplat(de)}const P=o[M]||{},y=(P.blockSizeFactor||1)*(s||k.BucketBlockSize),b=Math.ceil((P.bucketSizeFactor||1)*(a||k.BucketSize)),F=k.computeBucketsForUncompressedSplatArray(v,y,b),B=F.fullBuckets.length,z=F.partiallyFullBuckets.map(re=>re.splats.length),R=z.length,L=[...F.fullBuckets,...F.partiallyFullBuckets],O=v.splats.length*h,G=R*4,q=n>=1?L.length*k.BucketStorageSizeBytes+G:0,H=O+q,Q=new ArrayBuffer(H),J=u/(y*.5),ee=new I;let W=0;for(let re=0;re<L.length;re++){const de=L[re];ee.fromArray(de.center);for(let ue=0;ue<de.splats.length;ue++){let Ce=de.splats[ue];const Te=v.splats[Ce],Se=q+W*h;k.writeSplatDataToSectionBuffer(Te,Q,Se,n,l,ee,J,u,c,d),W++}}if(g+=W,n>=1){const re=new Uint32Array(Q,0,z.length*4);for(let ue=0;ue<z.length;ue++)re[ue]=z[ue];const de=new Float32Array(Q,G,L.length*k.BucketStorageSizeFloats);for(let ue=0;ue<L.length;ue++){const Ce=L[ue],Te=ue*3;de[Te]=Ce.center[0],de[Te+1]=Ce.center[1],de[Te+2]=Ce.center[2]}}f.push(Q);const $=new ArrayBuffer(k.SectionHeaderSizeBytes);k.writeSectionHeaderToBuffer({maxSplatCount:W,splatCount:W,bucketSize:b,bucketCount:L.length,bucketBlockSize:y,compressionScaleRange:u,storageSizeBytes:H,fullBucketCount:B,partiallyFilledBucketCount:R,sphericalHarmonicsDegree:l},n,$,0),A.push($)}let m=0;for(let M of f)m+=M.byteLength;const p=k.HeaderSizeBytes+k.SectionHeaderSizeBytes*f.length+m,x=new ArrayBuffer(p);k.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:g,splatCount:g,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:d},x);let S=k.HeaderSizeBytes;for(let M of A)new Uint8Array(x,S,k.SectionHeaderSizeBytes).set(new Uint8Array(M)),S+=k.SectionHeaderSizeBytes;for(let M of f)new Uint8Array(x,S,M.byteLength).set(new Uint8Array(M)),S+=M.byteLength;return new k(x)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,a=new I,o=new I;for(let g=0;g<i;g++){const m=e.splats[g],p=[m[fe.OFFSET.X],m[fe.OFFSET.Y],m[fe.OFFSET.Z]];(g===0||p[0]<a.x)&&(a.x=p[0]),(g===0||p[0]>o.x)&&(o.x=p[0]),(g===0||p[1]<a.y)&&(a.y=p[1]),(g===0||p[1]>o.y)&&(o.y=p[1]),(g===0||p[2]<a.z)&&(a.z=p[2]),(g===0||p[2]>o.z)&&(o.z=p[2])}const l=new I().copy(o).sub(a),c=Math.ceil(l.y/t),d=Math.ceil(l.z/t),h=new I,u=[],f={};for(let g=0;g<i;g++){const m=e.splats[g],p=[m[fe.OFFSET.X],m[fe.OFFSET.Y],m[fe.OFFSET.Z]],x=Math.floor((p[0]-a.x)/t),S=Math.floor((p[1]-a.y)/t),_=Math.floor((p[2]-a.z)/t);h.x=x*t+a.x+s,h.y=S*t+a.y+s,h.z=_*t+a.z+s;const M=x*(c*d)+S*d+_;let E=f[M];E||(f[M]=E={splats:[],center:h.toArray()}),E.splats.push(g),E.splats.length>=n&&(u.push(E),f[M]=null)}const A=[];for(let g in f)if(f.hasOwnProperty(g)){const m=f[g];m&&A.push(m)}return{fullBuckets:u,partiallyFullBuckets:A}}static preallocateUncompressed(e,t){const n=k.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=k.HeaderSizeBytes+k.SectionHeaderSizeBytes,s=i+n.BytesPerSplat*e,a=new ArrayBuffer(s);return k.writeHeaderToBuffer({versionMajor:k.CurrentMajorVersion,versionMinor:k.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new I},a),k.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,a,k.HeaderSizeBytes),{splatBuffer:new k(a,!0),splatBufferDataOffsetBytes:i}}}const $l=new Uint8Array([112,108,121,10]),Jl=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),So="end_header",vo=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),yn=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},ec=(r,e)=>{r.x=yn(e>>>21,11),r.y=yn(e>>>11,10),r.z=yn(e,11)},e0=(r,e)=>{r.x=yn(e>>>24,8),r.y=yn(e>>>16,8),r.z=yn(e>>>8,8),r.w=yn(e,8)},t0=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(yn(e>>>20,10)-.5)*t,i=(yn(e>>>10,10)-.5)*t,s=(yn(e,10)-.5)*t,a=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(a,n,i,s);break;case 1:r.set(n,a,i,s);break;case 2:r.set(n,i,a,s);break;case 3:r.set(n,i,s,a);break}},In=(r,e,t)=>r*(1-t)+e*t,ht=(r,e)=>r.properties.find(t=>t.name===e&&t.storage)?.storage;class $e{static decodeHeaderText(e){let t,n,i,s;const a=e.split(`
`).filter(h=>!h.startsWith("comment "));let o=0,l=!1;for(let h=1;h<a.length;++h){const u=a[h].split(" ");switch(u[0]){case"format":if(u[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:u[1],count:parseInt(u[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(s=t);break;case"property":{if(!vo.has(u[1]))throw new Error(`Unrecognized property data type '${u[1]}' in ply header`);const f=vo.get(u[1]),A=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=f.BYTES_PER_ELEMENT),t.properties.push({type:u[1],name:u[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:A}),t.storageSizeBytes+=A;break}case So:l=!0;break;default:throw new Error(`Unrecognized header value '${u[0]}' in ply header`)}if(l)break}let c=0,d=0;return s&&(d=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:s,bytesPerSplat:o,headerSizeBytes:e.indexOf(So)+So.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:d}}static decodeHeader(e){const t=(f,A)=>{const g=f.length-A.length;let m,p;for(m=0;m<=g;++m){for(p=0;p<A.length&&f[m+p]===A[p];++p);if(p===A.length)return m}return-1},n=(f,A)=>{if(f.length<A.length)return!1;for(let g=0;g<A.length;++g)if(f[g]!==A[g])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=$l.length&&!n(i,$l))throw new Error("Invalid PLY header");if(s=t(i,Jl),s===-1)throw new Error("End of PLY header not found");const a=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:h,bytesPerSplat:u}=$e.decodeHeaderText(a);return{headerSizeBytes:s+Jl.length,bytesPerSplat:u,chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:d,sphericalHarmonicsPerSplat:h}}static readElementData(e,t,n,i,s,a=null){let o=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const d=e.properties[c],h=vo.get(d.type),u=h.BYTES_PER_ELEMENT*e.count;if((!d.storage||d.storage.byteLength<u)&&(!a||a(d.name))&&(d.storage=new h(e.count)),d.storage)switch(d.type){case"char":d.storage[l]=o.getInt8(n);break;case"uchar":d.storage[l]=o.getUint8(n);break;case"short":d.storage[l]=o.getInt16(n,!0);break;case"ushort":d.storage[l]=o.getUint16(n,!0);break;case"int":d.storage[l]=o.getInt32(n,!0);break;case"uint":d.storage[l]=o.getUint32(n,!0);break;case"float":d.storage[l]=o.getFloat32(n,!0);break;case"double":d.storage[l]=o.getFloat64(n,!0);break}n+=d.byteSize}return n}static readPly(e,t=null){const n=$e.decodeHeader(e);let i=$e.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=$e.readElementData(n.vertexElement,e,i,null,null,t),$e.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const s=ht(e,"min_r"),a=ht(e,"min_g"),o=ht(e,"min_b"),l=ht(e,"max_r"),c=ht(e,"max_g"),d=ht(e,"max_b"),h=ht(e,"min_x"),u=ht(e,"min_y"),f=ht(e,"min_z"),A=ht(e,"max_x"),g=ht(e,"max_y"),m=ht(e,"max_z"),p=ht(e,"min_scale_x"),x=ht(e,"min_scale_y"),S=ht(e,"min_scale_z"),_=ht(e,"max_scale_x"),M=ht(e,"max_scale_y"),E=ht(e,"max_scale_z"),v=ht(t,"packed_position"),P=ht(t,"packed_rotation"),y=ht(t,"packed_scale"),b=ht(t,"packed_color");i.colorExtremes={minR:s,maxR:l,minG:a,maxG:c,minB:o,maxB:d},i.positionExtremes={minX:h,maxX:A,minY:u,maxY:g,minZ:f,maxZ:m},i.scaleExtremes={minScaleX:p,maxScaleX:_,minScaleY:x,maxScaleY:M,minScaleZ:S,maxScaleZ:E},i.position=v,i.rotation=P,i.scale=y,i.color=b}if(n){const s={};for(let a=0;a<45;a++){const o=`f_rest_${a}`,l=ht(n,o);if(l)s[o]=l;else break}i.sh=s}return i}static decompressBaseSplat=(function(){const e=new I,t=new rt,n=new I,i=new vt,s=fe.OFFSET;return function(a,o,l,c,d,h,u,f,A,g){g=g||fe.createSplat();const m=Math.floor((o+a)/256);return ec(e,l[a]),t0(t,u[a]),ec(n,d[a]),e0(i,A[a]),g[s.X]=In(c.minX[m],c.maxX[m],e.x),g[s.Y]=In(c.minY[m],c.maxY[m],e.y),g[s.Z]=In(c.minZ[m],c.maxZ[m],e.z),g[s.ROTATION0]=t.x,g[s.ROTATION1]=t.y,g[s.ROTATION2]=t.z,g[s.ROTATION3]=t.w,g[s.SCALE0]=Math.exp(In(h.minScaleX[m],h.maxScaleX[m],n.x)),g[s.SCALE1]=Math.exp(In(h.minScaleY[m],h.maxScaleY[m],n.y)),g[s.SCALE2]=Math.exp(In(h.minScaleZ[m],h.maxScaleZ[m],n.z)),f.minR&&f.maxR?g[s.FDC0]=ct(Math.round(In(f.minR[m],f.maxR[m],i.x)*255),0,255):g[s.FDC0]=ct(Math.floor(i.x*255),0,255),f.minG&&f.maxG?g[s.FDC1]=ct(Math.round(In(f.minG[m],f.maxG[m],i.y)*255),0,255):g[s.FDC1]=ct(Math.floor(i.y*255),0,255),f.minB&&f.maxB?g[s.FDC2]=ct(Math.round(In(f.minB[m],f.maxB[m],i.z)*255),0,255):g[s.FDC2]=ct(Math.floor(i.z*255),0,255),g[s.OPACITY]=ct(Math.floor(i.w*255),0,255),g}})();static decompressSphericalHarmonics=(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,s,a,o){o=o||fe.createSplat();let l=e[s],c=e[a];for(let d=0;d<3;++d)for(let h=0;h<15;++h){const u=t[d*15+h];h<l&&h<c&&(o[fe.OFFSET.FRC0+u]=i[d*c+h][n]*(8/255)-4)}return o}})();static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l,c=null){$e.readElementData(t,a,0,n,i,c);const d=k.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:h,scaleExtremes:u,colorExtremes:f,position:A,rotation:g,scale:m,color:p}=$e.getElementStorageArrays(e,t),x=fe.createSplat();for(let S=n;S<=i;++S){$e.decompressBaseSplat(S,s,A,h,m,u,g,f,p,x);const _=S*d+l;k.writeSplatDataToSectionBuffer(x,o,_,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o,l=null){$e.readElementData(t,a,0,n,i,l);const{positionExtremes:c,scaleExtremes:d,colorExtremes:h,position:u,rotation:f,scale:A,color:g}=$e.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const p=fe.createSplat();$e.decompressBaseSplat(m,s,u,c,A,d,f,h,g,p),o.addSplat(p)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,s,a,o,l,c,d=null){$e.readElementData(t,s,a,n,i,d);const{sh:h}=$e.getElementStorageArrays(e,void 0,t),u=Object.values(h);for(let f=n;f<=i;++f)$e.decompressSphericalHarmonics(f,u,o,l,c.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=$e.readPly(e);t=Math.min(t,a);const o=new fe(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:d,position:h,rotation:u,scale:f,color:A}=$e.getElementStorageArrays(n,i);let g;if(t>0){const{sh:m}=$e.getElementStorageArrays(n,void 0,s);g=Object.values(m)}for(let m=0;m<i.count;++m){o.addDefaultSplat();const p=o.getSplat(o.splatCount-1);$e.decompressBaseSplat(m,0,h,l,f,c,u,d,A,p),t>0&&$e.decompressSphericalHarmonics(m,g,t,a,p)}return o}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=$e.readPly(e);t=Math.min(t,a);const{splatBuffer:o,splatBufferDataOffsetBytes:l}=k.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:d,colorExtremes:h,position:u,rotation:f,scale:A,color:g}=$e.getElementStorageArrays(n,i);let m;if(t>0){const{sh:S}=$e.getElementStorageArrays(n,void 0,s);m=Object.values(S)}const p=k.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,x=fe.createSplat(t);for(let S=0;S<i.count;++S){$e.decompressBaseSplat(S,0,u,c,A,d,f,h,g,x),t>0&&$e.decompressSphericalHarmonics(S,m,t,a,x);const _=S*p+l;k.writeSplatDataToSectionBuffer(x,o.bufferData,_,0,t)}return o}}const Ut={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[md,aa,la,ca,da,ha,ua]=[0,1,2,3,4,5,6],tc={double:md,int:aa,uint:la,float:ca,short:da,ushort:ha,uchar:ua},n0={[md]:8,[aa]:4,[la]:4,[ca]:4,[da]:2,[ha]:2,[ua]:1};class et{static HeaderEndToken="end_header";static decodeSectionHeader(e,t,n=0){const i=[];let s=!1,a=-1,o=0,l=!1,c=null;const d=[],h=[],u=[],f={};for(let p=n;p<e.length;p++){const x=e[p].trim();if(x.startsWith("element"))if(s){a--;break}else{s=!0,n=p,a=p;const S=x.split(" ");let _=0;for(let M of S){const E=M.trim();E.length>0&&(_++,_===2?c=E:_===3&&(o=parseInt(E)))}}else if(x.startsWith("property")){const S=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(S){const _=S[2],M=S[3];u.push(M);const E=t[M];f[M]=_;const v=tc[_];E!==void 0&&(d.push(E),h[E]=v)}}if(x===et.HeaderEndToken){l=!0;break}s&&(i.push(x),a++)}const A=[];let g=0;for(let p of u){const x=f[p];if(f.hasOwnProperty(p)){const S=t[p];S!==void 0&&(A[S]=g)}g+=n0[tc[x]]}const m=et.decodeSphericalHarmonicsFromSectionHeader(u,t);return{headerLines:i,headerStartLine:n,headerEndLine:a,fieldTypes:h,fieldIds:d,fieldOffsets:A,bytesPerVertex:g,vertexCount:o,dataSizeBytes:g*o,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let a=[],o=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)a.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)o.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:a,degree2Fields:o}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let a of i){const o=a.trim();o.length>0&&(s++,s===2&&t.push(o))}}return t}static checkTextForEndHeader(e){return!!e.includes(et.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),a=i.decode(s);return et.checkTextForEndHeader(a)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,et.checkBufferForEndHeader(e,n,s*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,et.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===et.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=et.convertHeaderTextToLines(e);let n=Ut.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Ut.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Ut.INRIAV2;else if(s===et.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=et.extractHeaderFromBufferToText(e);return et.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,a,o=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,d=t.fieldTypes;for(let h of s){const u=d[h];u===ca?a[h]=e.getFloat32(l+c[h],!0):u===da?a[h]=e.getInt16(l+c[h],!0):u===ha?a[h]=e.getUint16(l+c[h],!0):u===aa?a[h]=e.getInt32(l+c[h],!0):u===la?a[h]=e.getUint32(l+c[h],!0):u===ua&&(o?a[h]=e.getUint8(l+c[h])/255:a[h]=e.getUint8(l+c[h]))}}}const gd=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],i0=gd.map((r,e)=>e),[nc,s0,r0,o0,a0,l0,c0,d0,h0,u0,ic,f0,p0,sc,rc,m0,g0,A0]=i0;class wt{static decodeHeaderLines(e){let t=0;e.forEach(d=>{d.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((d,h)=>`f_rest_${h+1}`);const a=[...gd,...s],o=a.map((d,h)=>h),l=o.reduce((d,h)=>(d[a[h]]=h,d),{}),c=et.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=o,c}static decodeHeaderText(e){const t=et.convertHeaderTextToLines(e),n=wt.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(et.HeaderEndToken)+et.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=et.readHeaderFromBuffer(e);return wt.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=k.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let d=t;d<=n;d++){const h=wt.parseToUncompressedSplat(i,d,e,s,l),u=d*c+o;k.writeSplatDataToSectionBuffer(h,a,u,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o=0){o=Math.min(o,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=wt.parseToUncompressedSplat(i,l,e,s,o);a.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,s=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),s){const a=new fe(i);for(let o=0;o<t;o++){const l=wt.parseToUncompressedSplat(e,o,n,0,i);a.addSplat(l)}return a}else{const{splatBuffer:a,splatBufferDataOffsetBytes:o}=k.preallocateUncompressed(t,i);return wt.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,a.bufferData,o,i),a}}static parseToUncompressedSplat=(function(){let e=[];const t=new rt,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,a=fe.OFFSET.SCALE0,o=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,d=fe.OFFSET.ROTATION1,h=fe.OFFSET.ROTATION2,u=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,A=fe.OFFSET.FDC1,g=fe.OFFSET.FDC2,m=fe.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=fe.OFFSET.FRC0+x;return function(x,S,_,M=0,E=0){E=Math.min(E,_.sphericalHarmonicsDegree),wt.readSplat(x,_,S,M,e);const v=fe.createSplat(E);if(e[nc]!==void 0?(v[a]=Math.exp(e[nc]),v[o]=Math.exp(e[s0]),v[l]=Math.exp(e[r0])):(v[a]=.01,v[o]=.01,v[l]=.01),e[ic]!==void 0){const P=.28209479177387814;v[f]=(.5+P*e[ic])*255,v[A]=(.5+P*e[f0])*255,v[g]=(.5+P*e[p0])*255}else e[rc]!==void 0?(v[f]=e[rc]*255,v[A]=e[m0]*255,v[g]=e[g0]*255):(v[f]=0,v[A]=0,v[g]=0);if(e[sc]!==void 0&&(v[m]=1/(1+Math.exp(-e[sc]))*255),v[f]=ct(Math.floor(v[f]),0,255),v[A]=ct(Math.floor(v[A]),0,255),v[g]=ct(Math.floor(v[g]),0,255),v[m]=ct(Math.floor(v[m]),0,255),E>=1&&e[A0]!==void 0){for(let P=0;P<9;P++)v[p[P]]=e[_.sphericalHarmonicsDegree1Fields[P]];if(E>=2)for(let P=0;P<15;P++)v[p[9+P]]=e[_.sphericalHarmonicsDegree2Fields[P]]}return t.set(e[o0],e[a0],e[l0],e[c0]),t.normalize(),v[c]=t.x,v[d]=t.y,v[h]=t.z,v[u]=t.w,v[n]=e[d0],v[i]=e[h0],v[s]=e[u0],v}})();static readSplat(e,t,n,i,s){return et.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:s}=oc(e);return wt.decodeSectionSplatData(s,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:s}=oc(e);return wt.decodeSectionSplatData(s,i,n,t,!1)}}function oc(r){const e=wt.decodeHeaderFromBuffer(r),t=e.splatCount,n=wt.findSplatData(r,e);return{header:e,splatCount:t,splatData:n}}const Ad=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],ar=Ad.map((r,e)=>e),[lr,x0,S0,ac,cr,v0,_o]=[0,1,4,16,17,18,19],xd=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],No=xd.map((r,e)=>e),[lc,_0,y0,M0,E0,b0,C0,T0,w0,R0,zo,Sd,vd,cc]=No,dc=zo,I0=Sd,P0=vd,dr=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)};class Xt{static decodeSectionHeadersFromHeaderLines(e){const t=No.reduce((d,h)=>(d[xd[h]]=h,d),{}),n=ar.reduce((d,h)=>(d[Ad[h]]=h,d),{}),i=et.getHeaderSectionNames(e);let s;for(let d=0;d<i.length;d++)i[d]==="codebook_centers"&&(s=d);let a=0,o=!1;const l=[];let c=0;for(;!o;){let d;c===s?d=et.decodeSectionHeader(e,n,a):d=et.decodeSectionHeader(e,t,a),o=d.endOfHeader,a=d.headerEndLine+1,o||(d.splatCount=d.vertexCount,d.bytesPerSplat=d.bytesPerVertex),l.push(d),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=et.convertHeaderTextToLines(e);return Xt.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(et.HeaderEndToken)+et.HeaderEndToken.length+1,n=Xt.decodeSectionHeadersFromHeaderText(e),i=Xt.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=et.readHeaderFromBuffer(e);return Xt.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const a=t.sectionHeaders[s];i+=a.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){et.readVertex(e,t,s,0,ar,n);for(let a of ar){const o=ar[a];let l=i[o];l||(i[o]=l=[]),l.push(n[a])}}for(let s=0;s<i.length;s++){const a=i[s],o=.28209479177387814;for(let l=0;l<a.length;l++){const c=dr(a[l]);s===ac?a[l]=Math.round(1/(1+Math.exp(-c))*255):s===lr?a[l]=Math.round((.5+o*c)*255):s===cr?a[l]=Math.exp(c):a[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const a=new fe(s);for(let o=0;o<t;o++){const l=Xt.parseToUncompressedSplat(e,o,n,i,0,s);a.addSplat(l)}return a}static parseToUncompressedSplat=(function(){let e=[];const t=new rt,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,a=fe.OFFSET.SCALE0,o=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,d=fe.OFFSET.ROTATION1,h=fe.OFFSET.ROTATION2,u=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,A=fe.OFFSET.FDC1,g=fe.OFFSET.FDC2,m=fe.OFFSET.OPACITY,p=[];for(let x=0;x<45;x++)p[x]=fe.OFFSET.FRC0+x;return function(x,S,_,M,E=0,v=0){v=Math.min(v,_.sphericalHarmonicsDegree),Xt.readSplat(x,_,S,E,e);const P=fe.createSplat(v);if(e[lc]!==void 0?(P[a]=M[cr][e[lc]],P[o]=M[cr][e[_0]],P[l]=M[cr][e[y0]]):(P[a]=.01,P[o]=.01,P[l]=.01),e[zo]!==void 0?(P[f]=M[lr][e[zo]],P[A]=M[lr][e[Sd]],P[g]=M[lr][e[vd]]):e[dc]!==void 0?(P[f]=e[dc]*255,P[A]=e[I0]*255,P[g]=e[P0]*255):(P[f]=0,P[A]=0,P[g]=0),e[cc]!==void 0&&(P[m]=M[ac][e[cc]]),P[f]=ct(Math.floor(P[f]),0,255),P[A]=ct(Math.floor(P[A]),0,255),P[g]=ct(Math.floor(P[g]),0,255),P[m]=ct(Math.floor(P[m]),0,255),v>=1&&_.sphericalHarmonicsDegree>=1){for(let z=0;z<9;z++){const R=M[x0+z%3];P[p[z]]=R[e[_.sphericalHarmonicsDegree1Fields[z]]]}if(v>=2&&_.sphericalHarmonicsDegree>=2)for(let z=0;z<15;z++){const R=M[S0+z%5];P[p[9+z]]=R[e[_.sphericalHarmonicsDegree2Fields[z]]]}}const y=M[v0][e[M0]],b=M[_o][e[E0]],F=M[_o][e[b0]],B=M[_o][e[C0]];return t.set(y,b,F,B),t.normalize(),P[c]=t.x,P[d]=t.y,P[h]=t.z,P[u]=t.w,P[n]=dr(e[T0]),P[i]=dr(e[w0]),P[s]=dr(e[R0]),P}})();static readSplat(e,t,n,i,s){return et.readVertex(e,t,n,i,No,s,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=Xt.decodeHeaderFromBuffer(e,t);let s;for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName==="codebook_centers"){const c=Xt.findVertexData(e,i,o);s=Xt.decodeCodeBook(c,l)}}for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,d=Xt.findVertexData(e,i,o),h=Xt.decodeSectionSplatData(d,c,l,s,t);n.push(h)}}const a=new fe(t);for(let o of n)for(let l of o.splats)a.addSplat(l);return a}}class hc{static parseToUncompressedSplatArray(e,t=0){const n=et.determineHeaderFormatFromPlyBuffer(e);if(n===Ut.PlayCanvasCompressed)return $e.parseToUncompressedSplatArray(e,t);if(n===Ut.INRIAV1)return wt.parseToUncompressedSplatArray(e,t);if(n===Ut.INRIAV2)return Xt.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=et.determineHeaderFormatFromPlyBuffer(e);if(n===Ut.PlayCanvasCompressed)return $e.parseToUncompressedSplatBuffer(e,t);if(n===Ut.INRIAV1)return wt.parseToUncompressedSplatBuffer(e,t);if(n===Ut.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class fa{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const a=this.partitionGenerator(e);t=a.groupingParameters,n=a.sectionCount,i=a.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let a=0;a<n;a++){const o=new fe(e.sphericalHarmonicsDegree),l=i[a];for(let c=0;c<e.splatCount;c++)l(c)&&o.addSplat(e.splats[c]);s.push(o)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=k.BucketBlockSize,i=k.BucketSize){const s=a=>{const o=fe.OFFSET.X,l=fe.OFFSET.Y,c=fe.OFFSET.Z;e<=0&&(e=a.splatCount);const d=new I,h=.5,u=p=>{p.x=Math.floor(p.x/h)*h,p.y=Math.floor(p.y/h)*h,p.z=Math.floor(p.z/h)*h};a.splats.forEach(p=>{d.set(p[o],p[l],p[c]).sub(t),u(d),p.centerDist=d.lengthSq()}),a.splats.sort((p,x)=>{let S=p.centerDist,_=x.centerDist;return S>_?1:-1});const f=[],A=[];e=Math.min(a.splatCount,e);const g=Math.ceil(a.splatCount/e);let m=0;for(let p=0;p<g;p++){let x=m;f.push(S=>S>=x&&S<x+e),A.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:A}};return new fa(void 0,void 0,void 0,s)}}class Ls{constructor(e,t,n,i,s,a,o){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new I().copy(s):void 0,this.blockSize=a,this.bucketSize=o}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return k.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,s=k.BucketBlockSize,a=k.BucketSize){const o=fa.getStandardPartitioner(n,i,s,a);return new Ls(o,e,t,n,i,s,a)}}const gt={Downloading:0,Processing:1,Done:2};class br extends Error{constructor(e){super(e)}}const at={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function uc(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function fc(r,e,t,n,i,s,a,o){return e?Ls.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):k.generateFromUncompressedSplatArrays([r],t,0,new I)}class pa{static loadFromURL(e,t,n,i,s,a,o=!0,l=0,c,d,h,u,f){let A;!n&&!o?A=at.DownloadBeforeProcessing:o?A=at.ProgressiveToSplatArray:A=at.ProgressiveToSplatBuffer;const g=st.ProgressiveLoadSectionSize,m=k.HeaderSizeBytes+k.SectionHeaderSizeBytes,p=1;let x,S,_,M,E,v=0,P=0,y=0,b=!1,F=!1,B=!1;const z=ia();let R=0,L=0,O=0,G=0,q="",H=null,Q=[],J;const ee=new TextDecoder,W=($,re,de)=>{const ue=$>=100;if(de&&(Q.push({data:de,sizeBytes:de.byteLength,startBytes:O,endBytes:O+de.byteLength}),O+=de.byteLength),A===at.DownloadBeforeProcessing)ue&&z.resolve(Q);else{if(b){if(x===Ut.PlayCanvasCompressed&&!F){const Ce=H.headerSizeBytes+H.chunkElement.storageSizeBytes;E=uc(Q,E),E.byteLength>=Ce&&($e.readElementData(H.chunkElement,E,H.headerSizeBytes),R=Ce,L=Ce,F=!0)}}else if(q+=ee.decode(de),et.checkTextForEndHeader(q)){if(x=et.determineHeaderFormatFromHeaderText(q),x===Ut.INRIAV1)H=wt.decodeHeaderText(q),l=Math.min(l,H.sphericalHarmonicsDegree),v=H.splatCount,F=!0,G=H.headerSizeBytes+H.bytesPerSplat*v;else if(x===Ut.PlayCanvasCompressed){if(H=$e.decodeHeaderText(q),l=Math.min(l,H.sphericalHarmonicsDegree),A===at.ProgressiveToSplatBuffer&&l>0)throw new br("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");v=H.vertexElement.count,G=H.headerSizeBytes+H.bytesPerSplat*v+H.chunkElement.storageSizeBytes}else{if(A===at.ProgressiveToSplatBuffer)throw new br("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");A=at.DownloadBeforeProcessing;return}if(A===at.ProgressiveToSplatBuffer){const Ce=k.CompressionLevels[0].SphericalHarmonicsDegrees[l],Te=m+Ce.BytesPerSplat*v;_=new ArrayBuffer(Te),k.writeHeaderToBuffer({versionMajor:k.CurrentMajorVersion,versionMinor:k.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:v,splatCount:0,compressionLevel:0,sceneCenter:new I},_)}else J=new fe(l);R=H.headerSizeBytes,L=H.headerSizeBytes,b=!0}if(b&&F&&Q.length>0&&(S=uc(Q,S),O-R>g||O>=G&&!B||ue)){const Te=B?H.sphericalHarmonicsPerSplat:H.bytesPerSplat,Le=(B?O:Math.min(G,O))-L,V=Math.floor(Le/Te),ke=V*Te,ve=O-L-ke,_e=L-Q[0].startBytes,ye=new DataView(S,_e,ke);if(B)x===Ut.PlayCanvasCompressed&&A===at.ProgressiveToSplatArray&&($e.parseSphericalHarmonicsToUncompressedSplatArraySection(H.chunkElement,H.shElement,y,y+V-1,ye,0,l,H.sphericalHarmonicsDegree,J),y+=V);else{if(A===at.ProgressiveToSplatBuffer){const Ye=k.CompressionLevels[0].SphericalHarmonicsDegrees[l],Re=P*Ye.BytesPerSplat+m;x===Ut.PlayCanvasCompressed?$e.parseToUncompressedSplatBufferSection(H.chunkElement,H.vertexElement,0,V-1,P,ye,_,Re):wt.parseToUncompressedSplatBufferSection(H,0,V-1,ye,0,_,Re,l)}else x===Ut.PlayCanvasCompressed?$e.parseToUncompressedSplatArraySection(H.chunkElement,H.vertexElement,0,V-1,P,ye,J):wt.parseToUncompressedSplatArraySection(H,0,V-1,ye,0,J,l);P+=V,A===at.ProgressiveToSplatBuffer&&(M||(k.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:P,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,_,k.HeaderSizeBytes),M=new k(_,!1)),M.updateLoadedCounts(1,P)),O>=G&&(B=!0)}if(ve===0)Q=[];else{let Ye=[],Re=0;for(let w=Q.length-1;w>=0;w--){const C=Q[w];if(Re+=C.sizeBytes,Ye.unshift(C),Re>=ve)break}Q=Ye}R+=g,L+=ke}i&&M&&i(M,ue),ue&&(A===at.ProgressiveToSplatBuffer?z.resolve(M):z.resolve(J))}t&&t($,re,gt.Downloading)};return t&&t(0,"0%",gt.Downloading),Lr(e,W,!1,c).then(()=>(t&&t(0,"0%",gt.Processing),z.promise.then($=>{if(t&&t(100,"100%",gt.Done),A===at.DownloadBeforeProcessing){const re=Q.map(de=>de.data);return new Blob(re).arrayBuffer().then(de=>pa.loadFromFileData(de,s,a,o,l,d,h,u,f))}else return A===at.ProgressiveToSplatBuffer?$:Kt(()=>fc($,o,s,a,d,h,u,f))})))}static loadFromFileData(e,t,n,i,s=0,a,o,l,c){return i?Kt(()=>hc.parseToUncompressedSplatArray(e,s)).then(d=>fc(d,i,t,n,a,o,l,c)):Kt(()=>hc.parseToUncompressedSplatBuffer(e,s))}}const D0=r=>new ReadableStream({async start(e){e.enqueue(r),e.close()}});async function L0(r){try{const e=D0(r);if(!e)throw new Error("Failed to create stream from data");return await F0(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function F0(r){const e=r.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const B0=1347635022,U0=1,O0=.15;function N0(r){const e=r>>15&1,t=r>>10&31,n=r&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function z0(r){return(r-128)/128}function pi(r){switch(r){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${r}`),0}}const H0=(function(){let r=[];const e=new rt,t=fe.OFFSET.X,n=fe.OFFSET.Y,i=fe.OFFSET.Z,s=fe.OFFSET.SCALE0,a=fe.OFFSET.SCALE1,o=fe.OFFSET.SCALE2,l=fe.OFFSET.ROTATION0,c=fe.OFFSET.ROTATION1,d=fe.OFFSET.ROTATION2,h=fe.OFFSET.ROTATION3,u=fe.OFFSET.FDC0,f=fe.OFFSET.FDC1,A=fe.OFFSET.FDC2,g=fe.OFFSET.OPACITY,m=[pi(0),pi(1),pi(2),pi(3)],p=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(x,S,_){_=Math.min(S,_);const M=fe.createSplat(_);x.scale[0]!==void 0?(M[s]=x.scale[0],M[a]=x.scale[1],M[o]=x.scale[2]):(M[s]=.01,M[a]=.01,M[o]=.01),x.color[0]!==void 0?(M[u]=x.color[0],M[f]=x.color[1],M[A]=x.color[2]):r[RED]!==void 0?(M[u]=r[RED]*255,M[f]=r[GREEN]*255,M[A]=r[BLUE]*255):(M[u]=0,M[f]=0,M[A]=0),x.alpha!==void 0&&(M[g]=x.alpha),M[u]=ct(Math.floor(M[u]),0,255),M[f]=ct(Math.floor(M[f]),0,255),M[A]=ct(Math.floor(M[A]),0,255),M[g]=ct(Math.floor(M[g]),0,255);let E=m[_],v=m[S];for(let P=0;P<3;++P)for(let y=0;y<15;++y){const b=p[P*15+y];y<E&&y<v&&(M[fe.OFFSET.FRC0+b]=x.sh[P*v+y])}return e.set(x.rotation[3],x.rotation[0],x.rotation[1],x.rotation[2]),e.normalize(),M[l]=e.x,M[c]=e.y,M[d]=e.z,M[h]=e.w,M[t]=x.position[0],M[n]=x.position[1],M[i]=x.position[2],M}})();function k0(r,e,t,n){return!(r.positions.length!==e*3*(n?2:3)||r.scales.length!==e*3||r.rotations.length!==e*3||r.alphas.length!==e||r.colors.length!==e*3||r.sh.length!==e*t*3)}function pc(r,e,t,n,i){e=Math.min(e,r.shDegree);const s=r.numPoints,a=pi(r.shDegree),o=r.positions.length===s*3*2;if(!k0(r,s,a,o))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;o&&(c=new Uint16Array(r.positions.buffer,r.positions.byteOffset,s*3));const d=1/(1<<r.fractionalBits),h=pi(r.shDegree),u=.28209479177387814;for(let f=0;f<s;f++){if(o)for(let x=0;x<3;x++)l.position[x]=N0(c[f*3+x]);else for(let x=0;x<3;x++){const S=f*9+x*3;let _=r.positions[S];_|=r.positions[S+1]<<8,_|=r.positions[S+2]<<16,_|=_&8388608?4278190080:0,l.position[x]=_*d}for(let x=0;x<3;x++)l.scale[x]=Math.exp(r.scales[f*3+x]/16-10);const A=r.rotations.subarray(f*3,f*3+3),g=[A[0]/127.5-1,A[1]/127.5-1,A[2]/127.5-1];l.rotation[0]=g[0],l.rotation[1]=g[1],l.rotation[2]=g[2];const m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(r.alphas[f]);for(let x=0;x<3;x++)l.color[x]=Math.floor(((r.colors[f*3+x]/255-.5)/O0*u+.5)*255);for(let x=0;x<3;x++)for(let S=0;S<h;S++)l.sh[x*h+S]=z0(r.sh[h*3*f+S*3+x]);const p=H0(l,r.shDegree,e);if(t){const x=k.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,S=f*x+i;k.writeSplatDataToSectionBuffer(p,n,S,0,e)}else n.addSplat(p)}}const G0=16,V0=1e7;function W0(r){const e=new DataView(r);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=G0,n.magic!==B0)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>V0)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,s=pi(n.shDegree),a=n.version===1,o={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&U0)!==0,positions:new Uint8Array(i*3*(a?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*s*3)};try{const l=new Uint8Array(r);let c=o.positions.length,d=t;if(o.positions.set(l.slice(d,d+c)),d+=c,o.alphas.set(l.slice(d,d+o.alphas.length)),d+=o.alphas.length,o.colors.set(l.slice(d,d+o.colors.length)),d+=o.colors.length,o.scales.set(l.slice(d,d+o.scales.length)),d+=o.scales.length,o.rotations.set(l.slice(d,d+o.rotations.length)),d+=o.rotations.length,o.sh.set(l.slice(d,d+o.sh.length)),d+o.sh.length!==r.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return o}async function X0(r){try{const e=await L0(r);return W0(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class ma{static loadFromURL(e,t,n,i,s=!0,a=0,o,l,c,d,h){return t&&t(0,"0%",gt.Downloading),Lr(e,t,!0,o).then(u=>(t&&t(0,"0%",gt.Processing),ma.loadFromFileData(u,n,i,s,a,l,c,d,h)))}static async loadFromFileData(e,t,n,i,s=0,a,o,l,c){await Kt();const d=await X0(e);s=Math.min(d.shDegree,s);const h=new fe(s);if(i)return pc(d,s,!1,h,0),Ls.getStandardGenerator(t,n,a,o,l,c).generateFromUncompressedSplatArray(h);{const{splatBuffer:u,splatBufferDataOffsetBytes:f}=k.preallocateUncompressed(d.numPoints,s);return pc(d,s,!0,u.bufferData,f),u}}}class nt{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,s,a){const o=k.CompressionLevels[0].BytesPerCenter,l=k.CompressionLevels[0].BytesPerScale,c=k.CompressionLevels[0].BytesPerRotation,d=k.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const u=h*nt.RowSizeBytes+i,f=new Float32Array(n,u,3),A=new Float32Array(n,u+nt.CenterSizeBytes,3),g=new Uint8Array(n,u+nt.CenterSizeBytes+nt.ScaleSizeBytes,4),m=new Uint8Array(n,u+nt.CenterSizeBytes+nt.ScaleSizeBytes+nt.RotationSizeBytes,4),p=new rt((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);p.normalize();const x=h*d+a,S=new Float32Array(s,x,3),_=new Float32Array(s,x+o,3),M=new Float32Array(s,x+o+l,4),E=new Uint8Array(s,x+o+l+c,4);S[0]=f[0],S[1]=f[1],S[2]=f[2],_[0]=A[0],_[1]=A[1],_[2]=A[2],M[0]=p.w,M[1]=p.x,M[2]=p.y,M[3]=p.z,E[0]=g[0],E[1]=g[1],E[2]=g[2],E[3]=g[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let a=e;a<=t;a++){const o=a*nt.RowSizeBytes+i,l=new Float32Array(n,o,3),c=new Float32Array(n,o+nt.CenterSizeBytes,3),d=new Uint8Array(n,o+nt.CenterSizeBytes+nt.ScaleSizeBytes,4),h=new Uint8Array(n,o+nt.CenterSizeBytes+nt.ScaleSizeBytes+nt.RotationSizeBytes,4),u=new rt((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);u.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],u.w,u.x,u.y,u.z,d[0],d[1],d[2],d[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/nt.RowSizeBytes,n=new fe;for(let i=0;i<t;i++){const s=i*nt.RowSizeBytes,a=new Float32Array(e,s,3),o=new Float32Array(e,s+nt.CenterSizeBytes,3),l=new Uint8Array(e,s+nt.CenterSizeBytes+nt.ScaleSizeBytes,4),c=new Uint8Array(e,s+nt.CenterSizeBytes+nt.ScaleSizeBytes+nt.ColorSizeBytes,4),d=new rt((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);d.normalize(),n.addSplatFromComonents(a[0],a[1],a[2],o[0],o[1],o[2],d.w,d.x,d.y,d.z,l[0],l[1],l[2],l[3])}return n}}function mc(r,e,t,n,i,s,a,o){return e?Ls.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):k.generateFromUncompressedSplatArrays([r],t,0,new I)}class ga{static loadFromURL(e,t,n,i,s,a,o=!0,l,c,d,h,u){let f=n?at.ProgressiveToSplatBuffer:at.ProgressiveToSplatArray;o&&(f=at.ProgressiveToSplatArray);const A=k.HeaderSizeBytes+k.SectionHeaderSizeBytes,g=st.ProgressiveLoadSectionSize,m=1;let p,x,S,_=0,M=0,E;const v=ia();let P=0,y=0,b=[];const F=(B,z,R,L)=>{const O=B>=100;if(R&&b.push(R),f===at.DownloadBeforeProcessing){O&&v.resolve(b);return}if(!L){if(n)throw new br("Cannon directly load .splat because no file size info is available.");f=at.DownloadBeforeProcessing;return}if(!p){_=L/nt.RowSizeBytes,p=new ArrayBuffer(L);const G=k.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,q=A+G*_;f===at.ProgressiveToSplatBuffer?(x=new ArrayBuffer(q),k.writeHeaderToBuffer({versionMajor:k.CurrentMajorVersion,versionMinor:k.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:_,splatCount:M,compressionLevel:0,sceneCenter:new I},x)):E=new fe(0)}if(R){new Uint8Array(p,y,R.byteLength).set(new Uint8Array(R)),y+=R.byteLength;const G=y-P;if(G>g||O){const H=(O?G:g)/nt.RowSizeBytes,Q=M+H;f===at.ProgressiveToSplatBuffer?nt.parseToUncompressedSplatBufferSection(M,Q-1,p,0,x,A):nt.parseToUncompressedSplatArraySection(M,Q-1,p,0,E),M=Q,f===at.ProgressiveToSplatBuffer&&(S||(k.writeSectionHeaderToBuffer({maxSplatCount:_,splatCount:M,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,x,k.HeaderSizeBytes),S=new k(x,!1)),S.updateLoadedCounts(1,M),i&&i(S,O)),P+=g}}O&&(f===at.ProgressiveToSplatBuffer?v.resolve(S):v.resolve(E)),t&&t(B,z,gt.Downloading)};return t&&t(0,"0%",gt.Downloading),Lr(e,F,!1,l).then(()=>(t&&t(0,"0%",gt.Processing),v.promise.then(B=>(t&&t(100,"100%",gt.Done),f===at.DownloadBeforeProcessing?new Blob(b).arrayBuffer().then(z=>ga.loadFromFileData(z,s,a,o,c,d,h,u)):f===at.ProgressiveToSplatBuffer?B:Kt(()=>mc(B,o,s,a,c,d,h,u))))))}static loadFromFileData(e,t,n,i,s,a,o,l){return Kt(()=>{const c=nt.parseStandardSplatToUncompressedSplatArray(e);return mc(c,i,t,n,s,a,o,l)})}}class xs{static checkVersion(e){const t=k.CurrentMajorVersion,n=k.CurrentMinorVersion,i=k.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let a,o,l,c,d=!1,h=!1,u,f=[],A=!1,g=!1,m=0,p=0,x=0,S=!1,_=!1,M=!1,E=[];const v=ia(),P=()=>{!d&&!h&&m>=k.HeaderSizeBytes&&(h=!0,new Blob(E).arrayBuffer().then(L=>{l=new ArrayBuffer(k.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(L,0,k.HeaderSizeBytes)),xs.checkVersion(l),h=!1,d=!0,c=k.parseHeader(l),window.setTimeout(()=>{F()},1)}))};let y=0;const b=()=>{y===0&&(y++,window.setTimeout(()=>{y--,B()},1))},F=()=>{const R=()=>{g=!0,new Blob(E).arrayBuffer().then(O=>{g=!1,A=!0,u=new ArrayBuffer(c.maxSectionCount*k.SectionHeaderSizeBytes),new Uint8Array(u).set(new Uint8Array(O,k.HeaderSizeBytes,c.maxSectionCount*k.SectionHeaderSizeBytes)),f=k.parseSectionHeaders(c,u,0,!1);let G=0;for(let H=0;H<c.maxSectionCount;H++)G+=f[H].storageSizeBytes;const q=k.HeaderSizeBytes+c.maxSectionCount*k.SectionHeaderSizeBytes+G;if(!a){a=new ArrayBuffer(q);let H=0;for(let Q=0;Q<E.length;Q++){const J=E[Q];new Uint8Array(a,H,J.byteLength).set(new Uint8Array(J)),H+=J.byteLength}}x=k.HeaderSizeBytes+k.SectionHeaderSizeBytes*c.maxSectionCount;for(let H=0;H<=f.length&&H<c.maxSectionCount;H++)x+=f[H].storageSizeBytes;b()})};!g&&!A&&d&&m>=k.HeaderSizeBytes+k.SectionHeaderSizeBytes*c.maxSectionCount&&R()},B=()=>{if(M)return;M=!0;const R=()=>{if(M=!1,A){if(_)return;if(S=m>=x,m-p>st.ProgressiveLoadSectionSize||S){p+=st.ProgressiveLoadSectionSize,_=p>=x,o||(o=new k(a,!1));const O=k.HeaderSizeBytes+k.SectionHeaderSizeBytes*c.maxSectionCount;let G=0,q=0,H=0;for(let ee=0;ee<c.maxSectionCount;ee++){const W=f[ee],$=G+W.partiallyFilledBucketCount*4+W.bucketStorageSizeBytes*W.bucketCount,re=O+$;if(p>=re){q++;const de=p-re,Te=k.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[W.sphericalHarmonicsDegree].BytesPerSplat;let Se=Math.floor(de/Te);Se=Math.min(Se,W.maxSplatCount),H+=Se,o.updateLoadedCounts(q,H),o.updateSectionLoadedCounts(ee,Se)}else break;G+=W.storageSizeBytes}i(o,_);const Q=p/x*100,J=Q.toFixed(2)+"%";t&&t(Q,J,gt.Downloading),_?v.resolve(o):B()}}};window.setTimeout(R,st.ProgressiveLoadSectionDelayDuration)};return Lr(e,(R,L,O)=>{O&&(E.push(O),a&&new Uint8Array(a,m,O.byteLength).set(new Uint8Array(O)),m+=O.byteLength),n?(P(),F(),B()):t&&t(R,L,gt.Downloading)},!n,s).then(R=>(t&&t(0,"0%",gt.Processing),(n?v.promise:xs.loadFromFileData(R)).then(O=>(t&&t(100,"100%",gt.Done),O))))}static loadFromFileData(e){return Kt(()=>(xs.checkVersion(e),new k(e)))}static downloadFile=(function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()}const zt={Splat:0,KSplat:1,Ply:2,Spz:3},gc=r=>r.endsWith(".ply")?zt.Ply:r.endsWith(".splat")?zt.Splat:r.endsWith(".ksplat")?zt.KSplat:r.endsWith(".spz")?zt.Spz:null,Ac={type:"change"},yo={type:"start"},xc={type:"end"},hr=new Zo,Sc=new Ln,q0=Math.cos(70*Ko.DEG2RAD);class ur extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:nn.ROTATE,TWO:nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",oe),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(Ac),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){d.set(0,0,0)},this.update=(function(){const N=new I,te=new rt().setFromUnitVectors(e.up,new I(0,1,0)),ge=te.clone().invert(),he=new I,D=new rt,le=new I,we=2*Math.PI;return function(){te.setFromUnitVectors(e.up,new I(0,1,0)),ge.copy(te).invert();const se=n.object.position;N.copy(se).sub(n.target),N.applyQuaternion(te),o.setFromVector3(N),n.autoRotate&&s===i.NONE&&F(y()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let U=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(U)&&isFinite(ae)&&(U<-Math.PI?U+=we:U>Math.PI&&(U-=we),ae<-Math.PI?ae+=we:ae>Math.PI&&(ae-=we),U<=ae?o.theta=Math.max(U,Math.min(ae,o.theta)):o.theta=o.theta>(U+ae)/2?Math.max(U,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=H(o.radius):o.radius=H(o.radius*c),N.setFromSpherical(o),N.applyQuaternion(ge),se.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let pe=!1;if(n.zoomToCursor&&E){let Fe=null;if(n.object.isPerspectiveCamera){const Pe=N.length();Fe=H(Pe*c);const Ve=Pe-Fe;n.object.position.addScaledVector(_,Ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Pe=new I(M.x,M.y,0);Pe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pe=!0;const Ve=new I(M.x,M.y,0);Ve.unproject(n.object),n.object.position.sub(Ve).add(Pe),n.object.updateMatrixWorld(),Fe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fe).add(n.object.position):(hr.origin.copy(n.object.position),hr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(hr.direction))<q0?e.lookAt(n.target):(Sc.setFromNormalAndCoplanarPoint(n.object.up,n.target),hr.intersectPlane(Sc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pe=!0);return c=1,E=!1,pe||he.distanceToSquared(n.object.position)>a||8*(1-D.dot(n.object.quaternion))>a||le.distanceToSquared(n.target)>0?(n.dispatchEvent(Ac),he.copy(n.object.position),D.copy(n.object.quaternion),le.copy(n.target),pe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Me),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",C),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",oe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Er,l=new Er;let c=1;const d=new I,h=new xe,u=new xe,f=new xe,A=new xe,g=new xe,m=new xe,p=new xe,x=new xe,S=new xe,_=new I,M=new xe;let E=!1;const v=[],P={};function y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function F(N){l.theta-=N}function B(N){l.phi-=N}const z=(function(){const N=new I;return function(ge,he){N.setFromMatrixColumn(he,0),N.multiplyScalar(-ge),d.add(N)}})(),R=(function(){const N=new I;return function(ge,he){n.screenSpacePanning===!0?N.setFromMatrixColumn(he,1):(N.setFromMatrixColumn(he,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ge),d.add(N)}})(),L=(function(){const N=new I;return function(ge,he){const D=n.domElement;if(n.object.isPerspectiveCamera){const le=n.object.position;N.copy(le).sub(n.target);let we=N.length();we*=Math.tan(n.object.fov/2*Math.PI/180),z(2*ge*we/D.clientHeight,n.object.matrix),R(2*he*we/D.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(ge*(n.object.right-n.object.left)/n.object.zoom/D.clientWidth,n.object.matrix),R(he*(n.object.top-n.object.bottom)/n.object.zoom/D.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(N){if(!n.zoomToCursor)return;E=!0;const te=n.domElement.getBoundingClientRect(),ge=N.clientX-te.left,he=N.clientY-te.top,D=te.width,le=te.height;M.x=ge/D*2-1,M.y=-(he/le)*2+1,_.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function H(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function Q(N){h.set(N.clientX,N.clientY)}function J(N){q(N),p.set(N.clientX,N.clientY)}function ee(N){A.set(N.clientX,N.clientY)}function W(N){u.set(N.clientX,N.clientY),f.subVectors(u,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;F(2*Math.PI*f.x/te.clientHeight),B(2*Math.PI*f.y/te.clientHeight),h.copy(u),n.update()}function $(N){x.set(N.clientX,N.clientY),S.subVectors(x,p),S.y>0?O(b()):S.y<0&&G(b()),p.copy(x),n.update()}function re(N){g.set(N.clientX,N.clientY),m.subVectors(g,A).multiplyScalar(n.panSpeed),L(m.x,m.y),A.copy(g),n.update()}function de(N){q(N),N.deltaY<0?G(b()):N.deltaY>0&&O(b()),n.update()}function ue(N){let te=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):L(-n.keyPanSpeed,0),te=!0;break}te&&(N.preventDefault(),n.update())}function Ce(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const N=.5*(v[0].pageX+v[1].pageX),te=.5*(v[0].pageY+v[1].pageY);h.set(N,te)}}function Te(){if(v.length===1)A.set(v[0].pageX,v[0].pageY);else{const N=.5*(v[0].pageX+v[1].pageX),te=.5*(v[0].pageY+v[1].pageY);A.set(N,te)}}function Se(){const N=v[0].pageX-v[1].pageX,te=v[0].pageY-v[1].pageY,ge=Math.sqrt(N*N+te*te);p.set(0,ge)}function Le(){n.enableZoom&&Se(),n.enablePan&&Te()}function V(){n.enableZoom&&Se(),n.enableRotate&&Ce()}function ke(N){if(v.length==1)u.set(N.pageX,N.pageY);else{const ge=je(N),he=.5*(N.pageX+ge.x),D=.5*(N.pageY+ge.y);u.set(he,D)}f.subVectors(u,h).multiplyScalar(n.rotateSpeed);const te=n.domElement;F(2*Math.PI*f.x/te.clientHeight),B(2*Math.PI*f.y/te.clientHeight),h.copy(u)}function ve(N){if(v.length===1)g.set(N.pageX,N.pageY);else{const te=je(N),ge=.5*(N.pageX+te.x),he=.5*(N.pageY+te.y);g.set(ge,he)}m.subVectors(g,A).multiplyScalar(n.panSpeed),L(m.x,m.y),A.copy(g)}function _e(N){const te=je(N),ge=N.pageX-te.x,he=N.pageY-te.y,D=Math.sqrt(ge*ge+he*he);x.set(0,D),S.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),O(S.y),p.copy(x)}function ye(N){n.enableZoom&&_e(N),n.enablePan&&ve(N)}function Ye(N){n.enableZoom&&_e(N),n.enableRotate&&ke(N)}function Re(N){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",C)),Be(N),N.pointerType==="touch"?Ie(N):Y(N))}function w(N){n.enabled!==!1&&(N.pointerType==="touch"?Ae(N):ce(N))}function C(N){He(N),v.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",C)),n.dispatchEvent(xc),s=i.NONE}function Y(N){let te;switch(N.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case tn.DOLLY:if(n.enableZoom===!1)return;J(N),s=i.DOLLY;break;case tn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ee(N),s=i.PAN}else{if(n.enableRotate===!1)return;Q(N),s=i.ROTATE}break;case tn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;Q(N),s=i.ROTATE}else{if(n.enablePan===!1)return;ee(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(yo)}function ce(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(N);break;case i.DOLLY:if(n.enableZoom===!1)return;$(N);break;case i.PAN:if(n.enablePan===!1)return;re(N);break}}function ie(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(yo),de(N),n.dispatchEvent(xc))}function oe(N){n.enabled===!1||n.enablePan===!1||ue(N)}function Ie(N){switch(ne(N),v.length){case 1:switch(n.touches.ONE){case nn.ROTATE:if(n.enableRotate===!1)return;Ce(),s=i.TOUCH_ROTATE;break;case nn.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case nn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=i.TOUCH_DOLLY_PAN;break;case nn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(yo)}function Ae(N){switch(ne(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ke(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(N),n.update();break;default:s=i.NONE}}function Me(N){n.enabled!==!1&&N.preventDefault()}function Be(N){v.push(N)}function He(N){delete P[N.pointerId];for(let te=0;te<v.length;te++)if(v[te].pointerId==N.pointerId){v.splice(te,1);return}}function ne(N){let te=P[N.pointerId];te===void 0&&(te=new xe,P[N.pointerId]=te),te.set(N.pageX,N.pageY)}function je(N){const te=N.pointerId===v[0].pointerId?v[1]:v[0];return P[te.pointerId]}n.domElement.addEventListener("contextmenu",Me),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const Q0=(r,e,t,n,i)=>{const s=performance.now();let a=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(a)&&(a=1);const o=window.setInterval(()=>{const c=performance.now()-s;let d=Math.min(c/n,1);d>.999&&(d=1);let h;e?(h=(1-d)*a,h<1e-4&&(h=0)):h=(1-a)*d+a,h>0?(r.style.display=t,r.style.opacity=h):r.style.display="none",d>=1&&(i&&i(),window.clearInterval(o))},16);return o},Y0=500;class Aa{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=Aa.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,a,o,l)=>{a?i.style.display=s?o:"none":this.fadeTransitions[l]=Q0(i,!s,o,Y0,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class K0{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class j0{constructor(e){this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const a=document.createElement("div");a.style.display="table-row",a.className="info-panel-row";const o=document.createElement("div");o.style.display="table-cell",o.innerHTML=`${s[0]}: `,o.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,a.appendChild(o),a.appendChild(l),a.appendChild(c),i.appendChild(a)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,s,a,o,l,c,d,h,u,f,A){const g=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==g&&(this.infoCells.cameraPosition.innerHTML=g),n){const p=n,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==x&&(this.infoCells.cameraLookAt.innerHTML=x)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",a){const p=a,x=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=x}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=o,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${d.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${u.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${A}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const vc=new I;class Z0 extends yt{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,s=16776960,a=n*.2,o=a*.2){super(),this.type="ArrowHelper";const l=new ws(i,i,n,32);l.translate(0,n/2,0);const c=new ws(0,o,a,32);c.translate(0,n,0),this.position.copy(t),this.line=new St(l,new Ai({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new St(c,new Ai({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(vc,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Ss{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new ei(e,t,{format:Ot,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new ea(e,t),this.splatRenderTarget.depthTexture.format=$n,this.splatRenderTarget.depthTexture.type=Yt}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new cn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Uc,blendSrc:Ms,blendSrcAlpha:Ms,blendDst:Es,blendDstAlpha:Es});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new St(new Ts(2,2),t),this.renderTargetCopyCamera=new $o(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Ni(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new na(.5,1.5,32),t=new Ai({color:16777215}),n=new St(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new St(e,t);i.position.set(0,-1,0);const s=new St(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const a=new St(e,t);a.rotation.set(0,0,-Math.PI/2),a.position.set(-1,0,0),this.meshCursor=new yt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(a),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Ni(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Mr(.5,32,32),t=Ss.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new St(e,t)}}destroyFocusMarker(){this.focusMarker&&(Ni(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new I,t=new ze,n=new I;return function(i,s,a){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const o=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(o,o,o),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(a),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Ts(1,1);e.rotateX(-Math.PI/2);const t=new Ai({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=rn;const n=new St(e,t),i=new I(0,1,0);i.normalize();const s=new I(0,0,0),a=.5,o=.01,l=56576,c=new Z0(i,s,a,o,l,.1,.03);this.controlPlane=new yt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Ni(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new rt,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Ni(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Mr(1,32,32),n=new yt,i=(s,a)=>{let o=new St(t,Ss.buildDebugMaterial(s));o.renderOrder=e,n.add(o),o.position.fromArray(a)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ss(3,3,3),n=new yt;let i=12303291;const s=o=>{let l=new St(t,Ss.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(o)};let a=10;return s([-a,0,-a]),s([-a,0,a]),s([a,0,-a]),s([a,0,a]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Je(e)}},s=new cn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:Mn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Je(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new xe},opacity:{value:0}};return new cn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:Mn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const $0=new I(1,0,0),J0=new I(0,1,0),eA=new I(0,0,1);class Mo{constructor(e=new I,t=new I){this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){const e=new I,t=[],n=[],i=[];return function(s,a){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return a&&(a.origin.copy(this.origin),a.normal.set(0,0,0),a.distance=-1),!0;for(let o=0;o<3;o++){if(i[o]==0)continue;const l=o==0?$0:o==1?J0:eA,c=i[o]<0?s.max:s.min;let d=-Math.sign(i[o]);t[0]=o==0?c.x:o==1?c.y:c.z;let h=t[0]-n[o];if(h*d<0){const u=(o+1)%3,f=(o+2)%3;if(t[2]=i[u]/i[o]*h+n[u],t[1]=i[f]/i[o]*h+n[f],e.set(t[o],t[f],t[u]),this.boxContainsPoint(s,e,1e-4))return a&&(a.origin.copy(e),a.normal.copy(l).multiplyScalar(d),a.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new I;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),a=s*s,l=e.dot(e)-a,c=n*n;if(l>c)return!1;const d=Math.sqrt(c-l),h=s-d,u=s+d;if(u<0)return!1;let f=h<0?u:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}})()}class xa{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new xa;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Fn={ThreeD:0,TwoD:1};class tA{constructor(e,t,n=!1){this.ray=new Mo(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){const e=new xe;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new ze,t=new ze,n=new ze,i=new Mo,s=new I;return function(a,o=[]){const l=a.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const d=l.subTrees[c];t.copy(a.matrixWorld),a.dynamicMode&&(a.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const h=[];d.rootNode&&this.castRayAtSplatTreeNode(i,l,d.rootNode,h),h.forEach(u=>{u.origin.applyMatrix4(t),u.normal.applyMatrix4(t).normalize(),u.distance=s.copy(u.origin).sub(this.ray.origin).length()}),o.push(...h)}return o.sort((c,d)=>c.distance>d.distance?1:-1),o}}})();castRayAtSplatTreeNode=(function(){const e=new vt,t=new I,n=new I,i=new rt,s=new xa,a=1e-7,o=new I(0,0,0),l=new ze,c=new ze,d=new ze,h=new ze,u=new ze,f=new Mo;return function(A,g,m,p=[]){if(A.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let x=0;x<m.data.indexes.length;x++){const S=m.data.indexes[x],_=g.splatMesh.getSceneIndexForSplat(S);if(g.splatMesh.getScene(_).visible&&(g.splatMesh.getSplatColor(S,e),g.splatMesh.getSplatCenter(S,t),g.splatMesh.getSplatScaleAndRotation(S,n,i),!(n.x<=a||n.y<=a||g.splatMesh.splatRenderMode===Fn.ThreeD&&n.z<=a)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),d.makeRotationFromQuaternion(i);const E=Math.log10(e.w)*2;if(l.makeScale(E,E,E),u.copy(l).multiply(d).multiply(c),h.copy(u).invert(),f.origin.copy(A.origin).sub(t).applyMatrix4(h),f.direction.copy(A.origin).add(A.direction).sub(t),f.direction.applyMatrix4(h).sub(f.origin).normalize(),f.intersectSphere(o,1,s)){const v=s.clone();v.splatIndex=S,v.origin.applyMatrix4(u).add(t),p.push(v)}}else{let E=n.x+n.y,v=2;if(g.splatMesh.splatRenderMode===Fn.ThreeD&&(E+=n.z,v=3),E=E/v,A.intersectSphere(t,E,s)){const P=s.clone();P.splatIndex=S,p.push(P)}}}if(m.children&&m.children.length>0)for(let x of m.children)this.castRayAtSplatTreeNode(A,g,x,p);return p}}})()}class Qi{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${st.MaxScenes}];
            uniform int sceneVisibility[${st.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${st.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${st.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${st.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const a={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new xe},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new xe},basisViewport:{type:"v2",value:new xe},debugColor:{type:"v3",value:new Je},centersColorsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new xe(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new xe(1024,1024)},sceneCount:{type:"i",value:1}};for(let o=0;o<st.MaxScenes;o++)a.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),a.sphericalHarmonics8BitCompressionRangeMax.value.push(st.SphericalHarmonics8BitCompressionRange/2);if(t){const o=[];for(let c=0;c<st.MaxScenes;c++)o.push(1);a.sceneOpacity={type:"f",value:o};const l=[];for(let c=0;c<st.MaxScenes;c++)l.push(1);a.sceneVisibility={type:"i",value:l}}if(e){const o=[];for(let l=0;l<st.MaxScenes;l++)o.push(new ze);a.transforms={type:"mat4",value:o}}return a}}class Cr{static build(e=!1,t=!1,n=!1,i=2048,s=1,a=!1,o=0,l=.3){let d=Qi.buildVertexShaderBase(e,t,o,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);d+=Cr.buildVertexShaderProjection(n,t,i,l);const h=Cr.buildFragmentShader(),u=Qi.getUniforms(e,t,o,s,a);return u.covariancesTextureSize={type:"v2",value:new xe(1024,1024)},u.covariancesTexture={type:"t",value:null},u.covariancesTextureHalfFloat={type:"t",value:null},u.covariancesAreHalfFloat={type:"i",value:0},new cn({uniforms:u,vertexShader:d,fragmentShader:h,transparent:!0,alphaTest:1,blending:jn,depthTest:!0,depthWrite:!1,side:rn})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Qi.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class Tr{static build(e=!1,t=!1,n=1,i=!1,s=0){let o=Qi.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);o+=Tr.buildVertexShaderProjection();const l=Tr.buildFragmentShader(),c=Qi.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new xe(1024,1024)},new cn({uniforms:c,vertexShader:o,fragmentShader:l,transparent:!0,alphaTest:1,blending:jn,depthTest:!0,depthWrite:!1,side:rn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Qi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class nA{static build(e){const t=new hn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),i=new ln(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new Xg().copy(t),a=new Uint32Array(e),o=new Wg(a,1,!1);return o.setUsage(Lh),s.setAttribute("splatIndex",o),s.instanceCount=0,s}}class iA extends yt{constructor(e,t=new I,n=new rt,i=new I(1,1,1),s=1,a=1,o=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ze,this.minimumAlpha=s,this.opacity=a,this.visible=o}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class Sa{static idGen=0;constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new _n(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Sa.idGen++}}class vs{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new Sa(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(vs.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new vs(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=vs.convertWorkerSubTreeNode(e.rootNode);const i=(s,a)=>{s.children.length===0&&a(s);for(let o of s.children)i(o,a)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function sA(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,d,h){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=d,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(o,l,c,d){const h=l.data.indexes.length;if(h<o.maxCentersPerNode||l.depth>o.maxDepth){const x=[];for(let S=0;S<l.data.indexes.length;S++)o.addedIndexes[l.data.indexes[S]]||(x.push(l.data.indexes[S]),o.addedIndexes[l.data.indexes[S]]=!0);l.data.indexes=x,l.data.indexes.sort((S,_)=>S>_?1:-1),o.nodesWithIndexes.push(l);return}const u=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[u[0]*.5,u[1]*.5,u[2]*.5],A=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],g=[new t([A[0]-f[0],A[1],A[2]-f[2]],[A[0],A[1]+f[1],A[2]]),new t([A[0],A[1],A[2]-f[2]],[A[0]+f[0],A[1]+f[1],A[2]]),new t([A[0],A[1],A[2]],[A[0]+f[0],A[1]+f[1],A[2]+f[2]]),new t([A[0]-f[0],A[1],A[2]],[A[0],A[1]+f[1],A[2]+f[2]]),new t([A[0]-f[0],A[1]-f[1],A[2]-f[2]],[A[0],A[1],A[2]]),new t([A[0],A[1]-f[1],A[2]-f[2]],[A[0]+f[0],A[1],A[2]]),new t([A[0],A[1]-f[1],A[2]],[A[0]+f[0],A[1],A[2]+f[2]]),new t([A[0]-f[0],A[1]-f[1],A[2]],[A[0],A[1],A[2]+f[2]])],m=[];for(let x=0;x<g.length;x++)m[x]=[];const p=[0,0,0];for(let x=0;x<h;x++){const S=l.data.indexes[x],_=c[S];p[0]=d[_],p[1]=d[_+1],p[2]=d[_+2];for(let M=0;M<g.length;M++)g[M].containsPoint(p)&&m[M].push(S)}for(let x=0;x<g.length;x++){const S=new i(g[x].min,g[x].max,l.depth+1);S.data={indexes:m[x]},l.children.push(S)}l.data={};for(let x of l.children)processSplatTreeNode(o,x,c,d)};const s=(o,l,c)=>{const d=[0,0,0],h=[0,0,0],u=[],f=Math.floor(o.length/4);for(let g=0;g<f;g++){const m=g*4,p=o[m],x=o[m+1],S=o[m+2],_=Math.round(o[m+3]);(g===0||p<d[0])&&(d[0]=p),(g===0||p>h[0])&&(h[0]=p),(g===0||x<d[1])&&(d[1]=x),(g===0||x>h[1])&&(h[1]=x),(g===0||S<d[2])&&(d[2]=S),(g===0||S>h[2])&&(h[2]=S),u.push(_)}const A=new n(l,c);return A.sceneMin=d,A.sceneMax=h,A.rootNode=new i(A.sceneMin,A.sceneMax,0),A.rootNode.data={indexes:u},A};function a(o,l,c){const d=[];for(let u of o){const f=Math.floor(u.length/4);for(let A=0;A<f;A++){const g=A*4,m=Math.round(u[g+3]);d[m]=g}}const h=[];for(let u of o){const f=s(u,l,c);h.push(f),processSplatTreeNode(f,f.rootNode,d,u)}r.postMessage({subTrees:h})}r.onmessage=o=>{o.data.process&&a(o.data.process.centers,o.data.process.maxDepth,o.data.process.maxCentersPerNode)}}function rA(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function oA(){return new Worker(URL.createObjectURL(new Blob(["(",sA.toString(),")(self)"],{type:"application/javascript"})))}class aA{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=oA()),this.splatMesh=e,this.subTrees=[];const s=new I,a=(o,l)=>{const c=new Float32Array(l*4);let d=0;for(let h=0;h<l;h++){const u=h+o;if(t(u)){e.getSplatCenter(u,s);const f=d*4;c[f]=s.x,c[f+1]=s.y,c[f+2]=s.z,c[f+3]=u,d++}}return c};return new Promise(o=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),o(),!0):!1;n&&n(!1),Kt(()=>{if(l())return;const c=[];if(e.dynamicMode){let d=0;for(let h=0;h<e.scenes.length;h++){const f=e.getScene(h).splatBuffer.getSplatCount(),A=a(d,f);c.push(A),d+=f}}else{const d=a(0,e.getSplatCount());c.push(d)}this.splatTreeWorker.onmessage=d=>{l()||d.data.subTrees&&(i&&i(!1),Kt(()=>{if(!l()){for(let h of d.data.subTrees){const u=vs.convertWorkerSubTree(h,e);this.subTrees.push(u)}this.diposeSplatTreeWorker(),i&&i(!0),Kt(()=>{o()})}}))},Kt(()=>{if(l())return;n&&n(!0);const d=c.map(h=>h.buffer);rA(this.splatTreeWorker,c,d,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function lA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cA(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,_=a||e.has("OES_texture_float"),M=S&&_,E=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:A,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:E}}const _s={Default:0,Instant:2},Yi={None:0,Info:3},_c=new hn,dA=new Ai,fr=6,hA=4,uA=4,fA=4,pA=6,mA=8,Eo=4,bo=4,yc=1,gA=.012,AA=.003,Mc=1,Ec=16777216;class Tt extends St{constructor(e=Fn.ThreeD,t=!1,n=!1,i=!1,s=1,a=!0,o=!1,l=!1,c=1024,d=Yi.None,h=0,u=1,f=.3){super(_c,dA),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=s,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=o,this.antialiased=l,this.kernel2DSize=f,this.maxScreenSpaceSplatSize=c,this.logLevel=d,this.sphericalHarmonicsDegree=h,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=u,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new _n,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){const i=[];i.length=t.length;for(let s=0;s<t.length;s++){const a=t[s],o=n[s]||{};let l=o.position||[0,0,0],c=o.rotation||[0,0,0,1],d=o.scale||[1,1,1];const h=new I().fromArray(l),u=new rt().fromArray(c),f=new I().fromArray(d),A=Tt.createScene(a,h,u,f,o.splatAlphaRemovalThreshold||1,o.opacity,o.visible);e.add(A),i[s]=A}return i}static createScene(e,t,n,i,s,a=1,o=!0){return new iA(e,t,n,i,s,a,o)}static buildSplatIndexMaps(e){const t=[],n=[];let i=0;for(let s=0;s<e.length;s++){const o=e[s].getMaxSplatCount();for(let l=0;l<o;l++)t[i]=l,n[i]=s,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new aA(8,1e3);const s=performance.now(),a=new vt;this.baseSplatTree.processSplatMesh(this,o=>{this.getSplatColor(o,a);const l=this.getSceneIndexForSplat(o),c=e[l]||1;return a.w>=c},t,n).then(()=>{const o=performance.now()-s;if(this.logLevel>=Yi.Info&&console.log("SplatTree build: "+o+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let l=0,c=0,d=0;this.splatTree.visitLeaves(h=>{const u=h.data.indexes.length;u>0&&(c+=u,d++,l++)}),this.logLevel>=Yi.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${l}`),c=c/d,console.log(`Avg splat count per node: ${c}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,s,a,o=!0){this.sceneOptions=t,this.finalBuild=i;const l=Tt.getTotalMaxSplatCountForSplatBuffers(e),c=Tt.buildScenes(this,e,t);if(n)for(let g=0;g<this.scenes.length&&g<c.length;g++){const m=c[g],p=this.getScene(g);m.copyTransformData(p)}this.scenes=c;let d=3;for(let g of e){const m=g.getMinSphericalHarmonicsDegree();m<d&&(d=m)}this.minSphericalHarmonicsDegree=Math.min(d,this.sphericalHarmonicsDegree);let h=!1;if(e.length!==this.lastBuildScenes.length)h=!0;else for(let g=0;g<e.length;g++)if(e[g]!==this.lastBuildScenes[g].splatBuffer){h=!0;break}let u=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==l||h)&&(u=!1),!u){this.boundingBox=new _n,o||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=nA.build(l),this.splatRenderMode===Fn.ThreeD?this.material=Cr.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=Tr.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const g=Tt.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=g.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=g.sceneIndexMap}const f=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const A=this.refreshGPUDataFromSplatBuffers(u);for(let g=0;g<this.scenes.length;g++)this.lastBuildScenes[g]=this.scenes[g];return this.lastBuildSplatCount=f,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(g=>g.splatAlphaRemovalThreshold||1),s,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,A}freeIntermediateSplatData(){const e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new _n,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==_c&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){const n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){const t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:s}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,s,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:s}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){const i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){const t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();const n=(v,P)=>{const y=new xe(4096,1024);for(;y.x*y.y*v<e*P;)y.y*=2;return y},i=v=>v>=1?pA:uA,s=v=>{const P=i(v),y=n(P,6);return{elementsPerTexelStored:P,texSize:y}};let a=this.getTargetCovarianceCompressionLevel();const o=0,l=this.getTargetSphericalHarmonicsCompressionLevel();let c,d,h;if(this.splatRenderMode===Fn.ThreeD){const v=s(a);v.texSize.x*v.texSize.y>Ec&&a===0&&(a=1),c=new Float32Array(e*fr)}else d=new Float32Array(e*3),h=new Float32Array(e*4);const u=new Float32Array(e*3),f=new Uint8Array(e*4);let A=Float32Array;l===1?A=Uint16Array:l===2&&(A=Uint8Array);const g=qi(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new A(e*g):void 0,p=n(bo,4),x=new Uint32Array(p.x*p.y*bo);Tt.updateCenterColorsPaddedData(0,t-1,u,f,x);const S=new Xn(x,p.x,p.y,ms,Yt);if(S.internalFormat="RGBA32UI",S.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=S,this.material.uniforms.centersColorsTextureSize.value.copy(p),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:c,scales:d,rotations:h,centers:u,colors:f,sphericalHarmonics:m},centerColors:{data:x,texture:S,size:p}},this.splatRenderMode===Fn.ThreeD){const v=s(a),P=v.elementsPerTexelStored,y=v.texSize;let b=a>=1?Uint32Array:Float32Array;const F=a>=1?mA:fA,B=new b(y.x*y.y*F);a===0?B.set(c):Tt.updatePaddedCompressedCovariancesTextureData(c,B,0,0,c.length);let z;if(a>=1)z=new Xn(B,y.x,y.y,ms,Yt),z.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=z;else{z=new Xn(B,y.x,y.y,Ot,vn),this.material.uniforms.covariancesTexture.value=z;const R=new Xn(new Uint32Array(32),2,2,ms,Yt);R.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=R,R.needsUpdate=!0}z.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(y),this.splatDataTextures.covariances={data:B,texture:z,size:y,compressionLevel:a,elementsPerTexelStored:P,elementsPerTexelAllocated:F}}else{const P=n(Eo,6);let y=Float32Array,b=vn;const F=new y(P.x*P.y*Eo);Tt.updateScaleRotationsPaddedData(0,t-1,d,h,F);const B=new Xn(F,P.x,P.y,Ot,b);B.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=B,this.material.uniforms.scaleRotationsTextureSize.value.copy(P),this.splatDataTextures.scaleRotations={data:F,texture:B,size:P,compressionLevel:o}}if(m){const v=l===2?On:Ji;let P=g;P%2!==0&&P++;const y=4,b=Ot;let F=n(y,P);if(F.x*F.y<=Ec){const B=F.x*F.y*y,z=new A(B);for(let L=0;L<t;L++){const O=g*L,G=P*L;for(let q=0;q<g;q++)z[G+q]=m[O+q]}const R=new Xn(z,F.x,F.y,b,v);R.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=R,this.splatDataTextures.sphericalHarmonics={componentCount:g,paddedComponentCount:P,data:z,textureCount:1,texture:R,size:F,compressionLevel:l,elementsPerTexel:y}}else{const B=g/3;P=B,P%2!==0&&P++,F=n(y,P);const z=F.x*F.y*y,R=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],L=[],O=[];for(let G=0;G<3;G++){const q=new A(z);L.push(q);for(let Q=0;Q<t;Q++){const J=g*Q,ee=P*Q;if(B>=3){for(let W=0;W<3;W++)q[ee+W]=m[J+G*3+W];if(B>=8)for(let W=0;W<5;W++)q[ee+3+W]=m[J+9+G*5+W]}}const H=new Xn(q,F.x,F.y,b,v);O.push(H),H.needsUpdate=!0,R[G].value=H}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:g,componentCountPerChannel:B,paddedComponentCount:P,data:L,textureCount:3,textures:O,size:F,compressionLevel:l,elementsPerTexel:y}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(F),this.material.uniforms.sphericalHarmonics8BitMode.value=l===2?1:0;for(let B=0;B<this.scenes.length;B++){const z=this.scenes[B].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[B]=z.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[B]=z.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const _=n(yc,4),M=new Uint32Array(_.x*_.y*yc);for(let v=0;v<t;v++)M[v]=this.globalSplatIndexToSceneIndexMap[v];const E=new Xn(M,_.x,_.y,Qo,Yt);E.internalFormat="R32UI",E.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=E,this.material.uniforms.sceneIndexesTextureSize.value.copy(_),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:M,texture:E,size:_},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,a=s?s.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,a,l,e,t,e)}updateDataTexturesFromBaseData(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,a=s?s.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0,c=this.splatDataTextures.centerColors,d=c.data,h=c.texture;Tt.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,d);const u=this.renderer?this.renderer.properties.get(h):null;if(!u||!u.__webglTexture?h.needsUpdate=!0:this.updateDataTexture(d,c.texture,c.size,u,bo,hA,4,e,t),n){const x=n.texture,S=e*fr,_=t*fr;if(i===0)for(let E=S;E<=_;E++){const v=this.splatDataTextures.baseData.covariances[E];n.data[E]=v}else Tt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,S,_);const M=this.renderer?this.renderer.properties.get(x):null;!M||!M.__webglTexture?x.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,M,n.elementsPerTexelStored,fr,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,M,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(s){const x=s.data,S=s.texture,_=6,M=a===0?4:2;Tt.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,x);const E=this.renderer?this.renderer.properties.get(S):null;!E||!E.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(x,s.texture,s.size,E,Eo,_,M,e,t)}const f=this.splatDataTextures.baseData.sphericalHarmonics;if(f){let x=4;l===1?x=2:l===2&&(x=1);const S=(E,v,P,y,b)=>{const F=this.renderer?this.renderer.properties.get(E):null;!F||!F.__webglTexture?E.needsUpdate=!0:this.updateDataTexture(y,E,v,F,P,b,x,e,t)},_=o.componentCount,M=o.paddedComponentCount;if(o.textureCount===1){const E=o.data;for(let v=e;v<=t;v++){const P=_*v,y=M*v;for(let b=0;b<_;b++)E[y+b]=f[P+b]}S(o.texture,o.size,o.elementsPerTexel,E,M)}else{const E=o.componentCountPerChannel;for(let v=0;v<3;v++){const P=o.data[v];for(let y=e;y<=t;y++){const b=_*y,F=M*y;if(E>=3){for(let B=0;B<3;B++)P[F+B]=f[b+v*3+B];if(E>=8)for(let B=0;B<5;B++)P[F+3+B]=f[b+9+v*5+B]}}S(o.textures[v],o.size,o.elementsPerTexel,P,M)}}}const A=this.splatDataTextures.sceneIndexes,g=A.data;for(let x=this.lastBuildSplatCount;x<=t;x++)g[x]=this.globalSplatIndexToSceneIndexMap[x];const m=A.texture,p=this.renderer?this.renderer.properties.get(m):null;!p||!p.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(g,A.texture,A.size,p,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,s){const a=s/i,o=e*a,l=Math.floor(o/n),c=l*n*i,d=t*a,h=Math.floor(d/n),u=h*n*i+n*i;return{dataStart:c,dataEnd:u,startRow:l,endRow:h}}updateDataTexture(e,t,n,i,s,a,o,l,c){const d=this.renderer.getContext(),h=Tt.computeTextureUpdateRegion(l,c,n.x,s,a),u=h.dataEnd-h.dataStart,f=new e.constructor(e.buffer,h.dataStart*o,u),A=h.endRow-h.startRow+1,g=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),p=d.getParameter(d.TEXTURE_BINDING_2D);d.bindTexture(d.TEXTURE_2D,i.__webglTexture),d.texSubImage2D(d.TEXTURE_2D,0,0,h.startRow,n.x,A,m,g,f),d.bindTexture(d.TEXTURE_2D,p)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,s){let a=new DataView(t.buffer),o=n,l=0;for(let c=i;c<=s;c+=2)a.setUint16(o*2,e[c],!0),a.setUint16(o*2+2,e[c+1],!0),o+=2,l++,l>=3&&(o+=2,l=0)}static updateCenterColorsPaddedData(e,t,n,i,s){for(let a=e;a<=t;a++){const o=a*4,l=a*3,c=a*4;s[c]=Yg(i,o),s[c+1]=Ao(n[l]),s[c+2]=Ao(n[l+1]),s[c+3]=Ao(n[l+2])}}static updateScaleRotationsPaddedData(e,t,n,i,s){for(let o=e;o<=t;o++){const l=o*3,c=o*4,d=o*6;s[d]=n[l],s[d+1]=n[l+1],s[d+2]=n[l+2],s[d+3]=i[c],s[d+4]=i[c+1],s[d+5]=i[c+2]}}updateVisibleRegion(e){const t=this.getSplatCount(!0),n=new I;if(!e){const s=new I;this.scenes.forEach(a=>{s.add(a.splatBuffer.sceneCenter)}),s.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(s),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const i=e?this.lastBuildSplatCount:0;for(let s=i;s<t;s++){this.getSplatCenter(s,n,!0);const a=n.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Mc&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Mc,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=_s.Default){const t=gA*this.sceneFadeInRateMultiplier,n=AA*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,s=e===_s.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*s+this.visibleRegionFadeStartRadius;const o=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=o||e===_s.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!o}updateRenderIndexes(e,t){const n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new xe;return function(t,n,i,s,a,o){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=s?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=o,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=ct(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?Tt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return Tt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const t=this.renderer.getContext(),n=new lA(t),i=new cA(t,n,{});if(n.init(i),this.webGLUtils=new dd(t,n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:s,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(s,a)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const t=this.getMaxSplatCount();if(!this.renderer)return;const n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();const s=this.renderer.getContext(),a=(u,f,A)=>{const g=u.createShader(f);if(!g)return console.error("Fatal error: gl could not create a shader object."),null;if(u.shaderSource(g,A),u.compileShader(g),!u.getShaderParameter(g,u.COMPILE_STATUS)){let p="unknown";f===u.VERTEX_SHADER?p="vertex shader":f===u.FRAGMENT_SHADER&&(p="fragement shader");const x=u.getShaderInfoLog(g);return console.error("Failed to compile "+p+" with these errors:"+x),u.deleteShader(g),null}return g};let o;this.integerBasedDistancesComputation?(o=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${st.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:o+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(o=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${st.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:o+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const l=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,c=s.getParameter(s.VERTEX_ARRAY_BINDING),d=s.getParameter(s.CURRENT_PROGRAM),h=d?s.getProgramParameter(d,s.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=s.createVertexArray()),s.bindVertexArray(this.distancesTransformFeedback.vao),n){const u=s.createProgram(),f=a(s,s.VERTEX_SHADER,o),A=a(s,s.FRAGMENT_SHADER,l);if(!f||!A)throw new Error("Could not compile shaders for distances computation on GPU.");if(s.attachShader(u,f),s.attachShader(u,A),s.transformFeedbackVaryings(u,["distance"],s.SEPARATE_ATTRIBS),s.linkProgram(u),!s.getProgramParameter(u,s.LINK_STATUS)){const m=s.getProgramInfoLog(u);throw console.error("Fatal error: Failed to link program: "+m),s.deleteProgram(u),s.deleteShader(A),s.deleteShader(f),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=u,this.distancesTransformFeedback.vertexShader=f,this.distancesTransformFeedback.vertexShader=A}if(s.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let u=0;u<this.scenes.length;u++)this.distancesTransformFeedback.transformsLocs[u]=s.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${u}]`)}else this.distancesTransformFeedback.modelViewProjLoc=s.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.bufferData(s.ARRAY_BUFFER,t*4,s.STATIC_READ),n&&(this.distancesTransformFeedback.id=s.createTransformFeedback()),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),d&&h!==!0&&s.useProgram(d),c&&s.bindVertexArray(c),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,o=16,l=n*o;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,l,t);else{const c=new a(this.getMaxSplatCount()*o);c.set(t),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const a=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,a,t);else{const o=new Uint32Array(this.getMaxSplatCount()*4);o.set(t),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}getSceneIndexes(e,t){let n;const i=t-e+1;n=new Uint32Array(i);for(let s=e;s<=t;s++)n[s]=this.globalSplatIndexToSceneIndexMap[s];return n}fillTransformsArray=(function(){const e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).transform.elements;for(let a=0;a<16;a++)e[n*16+a]=s[a]}t.set(e)}})();computeDistancesOnGPU=(function(){const e=new ze;return function(t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING),a=i.getParameter(i.CURRENT_PROGRAM),o=a?i.getProgramParameter(a,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let d=0;d<this.scenes.length;d++)if(e.copy(this.getScene(d).transform),e.premultiply(t),this.integerBasedDistancesComputation){const h=Tt.getIntegerMatrixArray(e),u=[h[2],h[6],h[10],h[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[d],u[0],u[1],u[2],u[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[d],!1,e.elements);else if(this.integerBasedDistancesComputation){const d=Tt.getIntegerMatrixArray(t),h=[d[2],d[6],d[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}else{const d=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);const l=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();const c=new Promise(d=>{const h=()=>{if(this.disposed)d();else switch(i.clientWaitSync(l,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(h),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(l);const g=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),g&&i.bindVertexArray(g),d()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(h)});return a&&o!==!0&&i.useProgram(a),s&&i.bindVertexArray(s),c}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,s,a,o,l=0,c=0,d=1,h,u,f=0,A){const g=new I;g.x=void 0,g.y=void 0,this.splatRenderMode===Fn.ThreeD?g.z=void 0:g.z=1;const m=new ze;let p=0,x=this.scenes.length-1;A!=null&&A>=0&&A<=this.scenes.length&&(p=A,x=A);for(let S=p;S<=x;S++){o==null&&(o=!this.dynamicMode);const _=this.getScene(S),M=_.splatBuffer;let E;if(o&&(this.getSceneTransform(S,m),E=m),e&&M.fillSplatCovarianceArray(e,E,h,u,f,l),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');M.fillSplatScaleRotationArray(t,n,E,h,u,f,c,g)}i&&M.fillSplatCenterArray(i,E,h,u,f),s&&M.fillSplatColorArray(s,_.minimumAlpha,h,u,f),a&&M.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,E,h,u,f,d),f+=M.getSplatCount()}}getIntegerCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e);let a,o=n?4:3;a=new Int32Array(i*o);for(let l=0;l<i;l++){for(let c=0;c<3;c++)a[l*o+c]=Math.round(s[l*3+c]*1e3);n&&(a[l*o+3]=1e3)}return a}getFloatCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e),!n)return s;let a=new Float32Array(i*4);for(let o=0;o<i;o++){for(let l=0;l<3;l++)a[o*4+l]=s[o*3+l];a[o*4+3]=1}return a}getSplatCenter=(function(){const e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},t=new I;return function(n,i,s,a){this.getLocalSplatParameters(n,e,a),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===Fn.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,s,e.sceneTransform,t)}})();getSplatColor=(function(){const e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){const n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}const i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);const s=new I,a=new I;for(let o=0;o<n;o++){const l=o*3,c=i[l],d=i[l+1],h=i[l+2];(o===0||c<s.x)&&(s.x=c),(o===0||d<s.y)&&(s.y=d),(o===0||h<s.z)&&(s.z=h),(o===0||c>a.x)&&(a.x=c),(o===0||d>a.y)&&(a.y=d),(o===0||h>a.z)&&(a.z=h)}return new _n(s,a)}}var xA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",bc="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",SA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",vA="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function _A(r){let e,t,n,i,s,a,o,l,c,d,h,u,f,A,g,m,p,x,S,_;function M(E,v,P,y,b,F,B){const z=performance.now();if(!n&&(new Uint32Array(t,o,b.byteLength/_.BytesPerInt).set(b),new Float32Array(t,d,B.byteLength/_.BytesPerFloat).set(B),y)){let q;i?q=new Int32Array(t,h,F.byteLength/_.BytesPerInt):q=new Float32Array(t,h,F.byteLength/_.BytesPerFloat),q.set(F)}m||(m=new Uint32Array(x)),new Float32Array(t,g,16).set(P),new Uint32Array(t,f,x).set(m),e.exports.sortIndexes(o,A,h,u,f,g,l,c,d,x,E,v,a,y,i,s);const R={sortDone:!0,splatSortCount:E,splatRenderCount:v,sortTime:0};if(!n){const O=new Uint32Array(t,l,v);(!p||p.length<v)&&(p=new Uint32Array(v)),p.set(O),R.sortedIndexes=p}const L=performance.now();R.sortTime=L-z,r.postMessage(R)}r.onmessage=E=>{if(E.data.centers)centers=E.data.centers,sceneIndexes=E.data.sceneIndexes,i?new Int32Array(t,A+E.data.range.from*_.BytesPerInt*4,E.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,A+E.data.range.from*_.BytesPerFloat*4,E.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+E.data.range.from*4,E.data.range.count).set(new Uint32Array(sceneIndexes)),S=E.data.range.from+E.data.range.count;else if(E.data.sort){const v=Math.min(E.data.sort.splatRenderCount||0,S),P=Math.min(E.data.sort.splatSortCount||0,S),y=E.data.sort.usePrecomputedDistances;let b,F,B;n||(b=E.data.sort.indexesToSort,B=E.data.sort.transforms,y&&(F=E.data.sort.precomputedDistances)),M(P,v,E.data.sort.modelViewProj,y,b,F,B)}else if(E.data.init){_=E.data.init.Constants,a=E.data.init.splatCount,n=E.data.init.useSharedMemory,i=E.data.init.integerBasedSort,s=E.data.init.dynamicMode,x=E.data.init.distanceMapRange,S=0;const v=i?_.BytesPerInt*4:_.BytesPerFloat*4,P=new Uint8Array(E.data.init.sorterWasmBytes),y=16*_.BytesPerFloat,b=a*_.BytesPerInt,F=a*v,B=y,z=i?a*_.BytesPerInt:a*_.BytesPerFloat,R=a*_.BytesPerInt,L=a*_.BytesPerInt,O=i?x*_.BytesPerInt*2:x*_.BytesPerFloat*2,G=s?a*_.BytesPerInt:0,q=s?_.MaxScenes*y:0,H=_.MemoryPageSize*32,Q=b+F+B+z+R+O+L+G+q+H,J=Math.floor(Q/_.MemoryPageSize)+1,ee={module:{},env:{memory:new WebAssembly.Memory({initial:J,maximum:J,shared:!0})}};WebAssembly.compile(P).then(W=>WebAssembly.instantiate(W,ee)).then(W=>{e=W,o=0,A=o+b,g=A+F,h=g+B,u=h+z,f=u+R,l=f+O,c=l+L,d=c+G,t=ee.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:o,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:d}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function yA(r,e,t,n,i,s=st.DefaultSplatSortDistanceMapPrecision){const a=new Worker(URL.createObjectURL(new Blob(["(",_A.toString(),")(self)"],{type:"application/javascript"})));let o=xA;const l=sa()?fd():null;!t&&!e?(o=bc,l&&l.major<=16&&l.minor<4&&(o=vA)):t?e||l&&l.major<=16&&l.minor<4&&(o=SA):o=bc;const c=atob(o),d=new Uint8Array(c.length);for(let h=0;h<c.length;h++)d[h]=c.charCodeAt(h);return a.postMessage({init:{sorterWasmBytes:d.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:st.BytesPerFloat,BytesPerInt:st.BytesPerInt,MemoryPageSize:st.MemoryPageSize,MaxScenes:st.MaxScenes}}}),a}const Oi={None:0,VR:1,AR:2};class ns{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function d(f){f.addEventListener("end",h),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const u={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",u).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",u).then(d).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",u).then(d).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&ns.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ns.xrSessionIsGranted=!0})}}}ns.xrSessionIsGranted=!1;ns.registerSessionGrantedListener();class MA{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const u=document.createElement("div");u.style.display="none",document.body.appendChild(u);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),u.appendChild(f);const A=document.createElementNS("http://www.w3.org/2000/svg","path");A.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),A.setAttribute("stroke","#fff"),A.setAttribute("stroke-width",2),f.appendChild(A),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:u}}let c=null;async function d(u){u.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(u),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=u}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(u=>{console.warn(u)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(u=>{console.warn(u)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="AR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():a()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const Co={Always:0,Never:2},EA=50,bA=.75,CA=15e5,TA=10,wA=2.5,RA=60;class ki{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Oi.None,this.webXRMode!==Oi.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Co.Always,this.sceneRevealMode=e.sceneRevealMode||_s.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Yi.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,sa()){const n=fd();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Fn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||st.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=ct(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new tA,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new xe,this.mouseDownPosition=new xe,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Aa(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new K0(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new j0(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Tt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new hd,this.sceneHelper=new Ss(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new xe;this.getRenderDimensions(e),this.perspectiveCamera=new qt(EA,e.x/e.y,.1,1e3),this.orthographicCamera=new $o(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new xe;this.getRenderDimensions(e),this.renderer=new ta({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Je(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Oi.VR?this.rootElement.appendChild(ns.createButton(this.renderer,e)):this.webXRMode===Oi.AR&&this.rootElement.appendChild(MA.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Oi.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new ur(this.camera,this.renderer.domElement):this.perspectiveControls=new ur(this.camera,this.renderer.domElement):(this.perspectiveControls=new ur(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new ur(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Oi.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new I,t=new ze,n=new ze;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Bi()}onMouseUp=(function(){const e=new xe;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Bi()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new xe,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>bA&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Bi())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=o=>{o.saveState(),o.reset()},s=this.controls,a=e?this.orthographicControls:this.perspectiveControls;i(a),i(s),a.target.copy(s.target),e?ki.setCameraZoomFromPosition(n,t,s):ki.setCameraPositionFromZoom(n,t,a),this.controls=a,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new I;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new I;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}})();updateSplatMesh=(function(){const e=new xe;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,a=this.focalAdjustment*s,o=1/a;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*a,i*a,this.camera.isOrthographicCamera,this.camera.zoom||1,o)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:gc(e),i=ki.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let a=null;s&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(g,m,p)=>{if(s)if(p===gt.Downloading)if(g==100)this.loadingSpinner.setMessageForTask(a,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(a,"Downloading splats...");else{const x=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(a,`Downloading${x}`)}else p===gt.Processing&&this.loadingSpinner.setMessageForTask(a,"Processing splats...")};let c=!1,d=0;const h=(g,m)=>{s&&((g&&i||m&&!i)&&(this.loadingSpinner.removeTask(a),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(d)))},u=(g,m,p)=>{d=g,l(g,m,p),t.onProgress&&t.onProgress(g,m,p)},f=(g,m,p)=>{!i&&t.onProgress&&t.onProgress(0,"0%",gt.Processing);const x={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([g],[x],p,m&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",gt.Processing),h(m,p)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),u,o.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,a,o){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,o),c=xo(l.abortHandler);return l.then(d=>(this.removeSplatSceneDownloadPromise(l),i(d,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(d=>{a&&a(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(d,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,a,o){let l=0,c=!1;const d=[],h=()=>{if(d.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=d.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?A.resolve():m.finalBuild&&(g.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),d.length>0&&Kt(()=>h())})}},u=(m,p)=>{this.isDisposingOrDisposed()||(p||d.length===0||m.getSplatCount()>d[0].splatBuffer.getSplatCount())&&(d.push({splatBuffer:m,firstBuild:l===0,finalBuild:p}),l++,h())},f=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,u,t,o),A=xo(f.abortHandler),g=xo();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(g.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const p=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");A.reject(p),a&&a(p)}),A.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let a;t&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=(h,u,f,A)=>{s[h]=u;let g=0;for(let m=0;m<i;m++)g+=s[m]||0;g=g/i,f=`${g.toFixed(2)}%`,t&&A===gt.Downloading&&this.loadingSpinner.setMessageForTask(a,g==100?"Download complete!":`Downloading: ${f}`),n&&n(g,f,A)},l=[],c=[];for(let h=0;h<e.length;h++){const u=e[h],f=u.format!==void 0&&u.format!==null?u.format:gc(u.path),A=this.downloadSplatSceneToSplatBuffer(u.path,u.splatAlphaRemovalThreshold,o.bind(this,h),!1,void 0,f,u.headers);l.push(A),c.push(A.promise)}const d=new Yn((h,u)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(a),n&&n(0,"0%",gt.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",gt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(f=>{t&&this.loadingSpinner.removeTask(a),this.clearSplatSceneDownloadAndBuildPromise(),u(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(d)})},h=>{for(let u of l)u.abort(h)});return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(d),d}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,a,o){try{if(a===zt.Splat||a===zt.KSplat||a===zt.Ply){const l=i?!1:this.optimizeSplatData;if(a===zt.Splat)return ga.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,o);if(a===zt.KSplat)return xs.loadFromURL(e,n,i,s,o);if(a===zt.Ply)return pa.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,o)}else if(a===zt.Spz)return ma.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,o)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===zt.Splat||e===zt.KSplat||e===zt.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,s=!0,a=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const d=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(h=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),Kt(()=>{if(this.isDisposingOrDisposed())h();else{const u=this.addSplatBuffersToMesh(e,t,n,s,a,l),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:u.centers.buffer,sceneIndexes:u.sceneIndexes.buffer,range:{from:u.from,to:u.to,count:u.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(g=>{!this.sortWorker||!g?(this.splatRenderReady=!0,d(),h()):(o?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{d(),h()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,s=!1,a=!1,o=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];a||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const d=f=>{if(this.isDisposingOrDisposed())return;const A=this.splatMesh.getSplatCount();s&&A>=CA&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},u=this.splatMesh.build(l,c,!0,i,d,h,o);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),u}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=yA(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=a=>{if(a.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,a.data.splatRenderCount);else{const o=new Uint32Array(a.data.sortedIndexes.buffer,0,a.data.splatRenderCount);this.splatMesh.updateRenderIndexes(o,a.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=a.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(o=>{o()}),this.runAfterNextSort.length=0)}else if(a.data.sortCanceled)this.sortRunning=!1;else if(a.data.sortSetupPhase1Complete){this.logLevel>=Yi.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(a.data.sortedIndexesBuffer,a.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(a.data.indexesToSortBuffer,a.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(a.data.precomputedDistancesBuffer,a.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(a.data.transformsBuffer,a.data.transformsOffset,st.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(st.MaxScenes*16));for(let o=0;o<i;o++)this.sortWorkerIndexesToSort[o]=o;if(this.sortWorker.maxSplatCount=s,this.logLevel>=Yi.Info){console.log("Sorting web worker ready.");const o=this.splatMesh.getSplatDataTextures(),l=o.covariances.size,c=o.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof ud?e:e instanceof br?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let a;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),a=this.loadingSpinner.addTask("Removing splat scene..."));const o=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(a))},l=d=>{o(),this.splatSceneRemovalPromise=null,d?s(d):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const d=[],h=[],u=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let A=!1;for(let g of e)if(g===f){A=!0;break}if(!A){const g=this.splatMesh.scenes[f];d.push(g.splatBuffer),h.push(this.splatMesh.sceneOptions[f]),u.push({position:g.position.clone(),quaternion:g.quaternion.clone(),scale:g.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=_s.Instant,this.createSplatMesh(),this.addSplatBuffers(d,h,!0,!1,!0).then(()=>{c()||(o(),this.splatMesh.scenes.forEach((f,A)=>{f.position.copy(u[A].position),f.quaternion.copy(u[A].quaternion),f.scale.copy(u[A].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const t=new I,n=new rt,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,a=!1;if(this.camera){const o=this.camera.position,l=this.camera.quaternion;a=Math.abs(o.x-t.x)>i||Math.abs(o.y-t.y)>i||Math.abs(o.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==Co.Never&&(e===0||this.splatMesh.visibleRegionChanging||a||this.renderMode===Co.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&ki.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=Bi(),t=0;return function(){if(this.consecutiveRenderFrames>RA){const n=Bi();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new xe,t=new xe;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const t=Bi();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),o=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,o),this.camera.lookAt(e),this.controls.target.copy(e),o>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new xe;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+TA*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-wA*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){const e=[],t=new xe;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new xe;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new ze,t=[],n=new I(0,0,-1),i=new I(0,0,-1),s=new I,a=new I,o=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,d=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,u=0,f=!1,A=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=i.dot(n),u=a.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&o.length===0&&(h<=.99&&(f=!0),u>=1&&(A=!0),!f&&!A))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:g,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||d,this.splatRenderCount=g,e.copy(this.camera.matrixWorld).invert();const p=this.perspectiveCamera||this.camera;e.premultiply(p.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let x=Promise.resolve(!0);return this.gpuAcceleratedSort&&(o.length<=1||o.length%2===0)&&(x=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),x.then(()=>{if(o.length===0)if(this.splatMesh.dynamicMode||m)o.push(this.splatRenderCount);else{for(let M of l)if(h<M.angleThreshold){for(let E of M.sortFractions)o.push(Math.floor(this.splatRenderCount*E));break}o.push(this.splatRenderCount)}let S=Math.min(o.shift(),this.splatRenderCount);this.splatSortCount=S,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const _={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:S,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(_.indexesToSort=this.sortWorkerIndexesToSort,_.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(_.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(M=>{this.sortPromiseResolver=M}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(M=>{this.sortWorker.postMessage(M)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:_}),o.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),x}})();gatherSceneNodesForSort=(function(){const e=[];let t=null;const n=new I,i=new I,s=new I,a=new ze,o=new ze,l=new ze,c=new I,d=new I(0,0,-1),h=new I,u=f=>h.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const A=c.y/2/Math.tan(this.camera.fov/2*Ko.DEG2RAD),g=Math.atan(c.x/2/A),m=Math.atan(c.y/2/A),p=Math.cos(g),x=Math.cos(m),S=this.splatMesh.getSplatTree();if(S){o.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||o.multiply(this.splatMesh.matrixWorld);let _=0,M=0;for(let v=0;v<S.subTrees.length;v++){const P=S.subTrees[v];a.copy(o),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(v,l),a.multiply(l));const y=P.nodesWithIndexes.length;for(let b=0;b<y;b++){const F=P.nodesWithIndexes[b];if(!F.data||!F.data.indexes||F.data.indexes.length===0)continue;s.copy(F.center).applyMatrix4(a);const B=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const z=d.dot(i),R=d.dot(n),L=u(F),O=R<x-.6,G=z<p-.6;!f&&(G||O)&&B>L||(M+=F.data.indexes.length,e[_]=F,F.data.distanceToNode=B,_++)}}e.length=_,e.sort((v,P)=>v.data.distanceToNode<P.data.distanceToNode?-1:1);let E=M*st.BytesPerInt;for(let v=0;v<_;v++){const P=e[v],y=P.data.indexes.length,b=y*st.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,E-b,y).set(P.data.indexes),E-=b}return{splatRenderCount:M,shouldSortAll:!1}}else{const _=this.splatMesh.getSplatCount();if(!t||t.length!==_){t=new Uint32Array(_);for(let M=0;M<_;M++)t[M]=M}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:_,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}class IA{canvas;renderer;camera;controls;threeScene;isMobileLike;viewer=null;customUniforms=null;animationMode="none";animationStartTime=performance.now();morphLoopSeconds=3.2;pointCloudEnterMorph=.38;pointCloudExitMorph=.02;modelRevealStartMorph=.34;modelRevealStartGain=.62;modelRevealStartScale=.84;pointCloudEnabled=!1;luminanceBridgeDurationSeconds=.32;luminanceBridgeActive=!1;luminanceBridgeFrom=1;luminanceBridgeElapsed=0;scaleBridgeDurationSeconds=.28;scaleBridgeActive=!1;scaleBridgeFrom=1;scaleBridgeElapsed=0;colorGainApplied=1;scaleApplied=1;colorRisePerSecond=.35;colorFallPerSecond=1.8;lastUniformUpdateTimeMs=performance.now();sceneCenter=new I;sceneRadius=1;loadVersion=0;disposed=!1;onResize=()=>this.resize();flipQuaternion=new rt().setFromEuler(new Ds(Math.PI,0,0));bubbleLayer=null;bubbleMessages=[];floatingBubbles=[];nextBubbleSpawnMs=Number.POSITIVE_INFINITY;maxFloatingBubbles=18;bubbleLifeMinMs=3400;bubbleLifeMaxMs=5600;bubbleSpawnMinGapMs=230;bubbleSpawnMaxGapMs=520;textBubbleSpawnProbability=.42;maxTextBubbles=6;edgeDisappearMarginPx=56;bubbleEdgeSpawnRadiusFactor=1.02;bubbleEdgeSpawnJitterFactor=.012;bubbleNoOverlapSampleRadiusPx=14;bubbleNoOverlapPushStepFactor=.04;bubbleNoOverlapPushMaxTries=12;bubbleOverlapCheckIntervalDesktopMs=36;bubbleOverlapCheckIntervalMobileMs=120;mobileMaxFloatingBubbles=11;lowMobileMaxFloatingBubbles=7;lowDesktopMaxFloatingBubbles=12;lowBubbleTickIntervalMs=28;highDprCapDesktop=2;highDprCapMobile=1.75;lowDprCapDesktop=1.35;lowDprCapMobile=1.05;bubbleProjection=new I;bubbleWorldPos=new I;bubbleOffsetTemp=new I;bubbleTangentATemp=new I;bubbleTangentBTemp=new I;bubbleSamplePixel=new Uint8Array(4);performanceLevel="high";lastBubbleTickMs=0;bubblesEnabledForModel=!1;activeTextBubble=null;orbitPointerReleaseTimer=null;onOrbitStart=()=>{this.bubbleLayer&&this.bubbleLayer.classList.add("is-orbiting"),this.orbitPointerReleaseTimer!==null&&(window.clearTimeout(this.orbitPointerReleaseTimer),this.orbitPointerReleaseTimer=null)};onOrbitEnd=()=>{this.orbitPointerReleaseTimer!==null&&window.clearTimeout(this.orbitPointerReleaseTimer),this.orbitPointerReleaseTimer=window.setTimeout(()=>{this.orbitPointerReleaseTimer=null,this.bubbleLayer?.classList.remove("is-orbiting")},120)};onDocumentPointerDown=e=>{const t=this.activeTextBubble;if(!t)return;const n=e.target instanceof Node?e.target:null;n&&t.element.contains(n)||this.dismissActiveTextBubble()};constructor(e){this.canvas=e,this.threeScene=new hd,this.isMobileLike=window.matchMedia("(max-width: 980px), (pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),this.camera=new qt(60,e.clientWidth/Math.max(e.clientHeight,1),.01,1e4),this.camera.up.set(0,1,0),this.camera.position.set(0,0,3),this.renderer=new ta({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight,!1),this.applyRendererPixelRatio(),this.renderer.setClearColor(0,0),this.controls=new Qg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enableRotate=!0,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.controls.screenSpacePanning=!0,this.controls.rotateSpeed=this.isMobileLike?.78:1,this.controls.zoomSpeed=this.isMobileLike?.9:1,this.controls.panSpeed=this.isMobileLike?.72:1,this.controls.minDistance=1e-4,this.controls.maxDistance=Number.POSITIVE_INFINITY,this.controls.target.set(0,0,0),this.controls.update(),this.controls.addEventListener("start",this.onOrbitStart),this.controls.addEventListener("end",this.onOrbitEnd),window.addEventListener("resize",this.onResize),window.addEventListener("pointerdown",this.onDocumentPointerDown)}async load(e){if(this.disposed)throw new Error("SplatViewer already disposed");this.loadVersion+=1;const t=this.loadVersion;this.customUniforms=null,this.bubblesEnabledForModel=!1,this.resetFloatingBubbles(!1);const n=/\.ksplat(?:\?|$)/i.test(e),i=this.viewer;this.viewer=null,i&&await i.dispose();const s=new ki({selfDrivenMode:!1,renderer:this.renderer,camera:this.camera,threeScene:this.threeScene,useBuiltInControls:!1,sharedMemoryForWorkers:!1,gpuAcceleratedSort:!1,enableSIMDInSort:!1,integerBasedSort:!this.isMobileLike,splatSortDistanceMapPrecision:this.isMobileLike?24:20});try{if(await s.addSplatScene(e,{rotation:[this.flipQuaternion.x,this.flipQuaternion.y,this.flipQuaternion.z,this.flipQuaternion.w],splatAlphaRemovalThreshold:this.isMobileLike&&!n?1:0,showLoadingUI:!0,progressiveLoad:this.isMobileLike&&!n}),this.disposed||t!==this.loadVersion){await s.dispose();return}this.viewer=s,this.installCustomAnimationKernel(s),this.frameCameraFromSplatMesh(s.splatMesh),this.bubblesEnabledForModel=!0,this.resetFloatingBubbles(!0),this.animationStartTime=performance.now(),this.lastUniformUpdateTimeMs=performance.now(),this.colorGainApplied=1,this.scaleApplied=1,this.luminanceBridgeActive=!1,this.scaleBridgeActive=!1,this.applyAnimationStyle(!0),this.updateAnimationUniforms()}catch(a){throw await s.dispose(),a}}setAnimation(e){const t=String(e||"none").toLowerCase().trim(),n={none:"none",off:"none","z wave":"zwave",z_wave:"zwave","z-wave":"zwave",zwave:"zwave",swirl:"swirl",noise:"noise",breath:"breath",breathe:"breath",explode:"explode"};this.animationMode=n[t]||"none",this.animationStartTime=performance.now(),this.lastUniformUpdateTimeMs=performance.now(),this.animationMode==="none"&&(this.colorGainApplied=1,this.scaleApplied=1,this.luminanceBridgeActive=!1,this.scaleBridgeActive=!1),this.applyAnimationStyle(!0),this.updateAnimationUniforms()}setFloatingBubbles(e,t){this.resetFloatingBubbles(!1),this.bubbleLayer=e,this.bubbleMessages=t.map(n=>n.trim()).filter(n=>n.length>0),this.bubbleLayer&&this.bubbleLayer.replaceChildren(),this.nextBubbleSpawnMs=this.bubbleLayer&&this.bubblesEnabledForModel?performance.now()+320:Number.POSITIVE_INFINITY}setPerformanceLevel(e){if(this.performanceLevel===e)return;this.performanceLevel=e,this.applyRendererPixelRatio();const t=this.getActiveMaxFloatingBubbles();for(;this.floatingBubbles.length>t;)this.floatingBubbles.shift()?.element.remove()}update(){this.disposed||(this.controls.update(),this.updateAnimationUniforms(),this.viewer?(this.viewer.update(),this.viewer.render()):this.renderer.render(this.threeScene,this.camera),this.updateFloatingBubbles())}async dispose(){this.disposed||(this.disposed=!0,window.removeEventListener("resize",this.onResize),this.controls.dispose(),this.controls.removeEventListener("start",this.onOrbitStart),this.controls.removeEventListener("end",this.onOrbitEnd),window.removeEventListener("pointerdown",this.onDocumentPointerDown),this.orbitPointerReleaseTimer!==null&&(window.clearTimeout(this.orbitPointerReleaseTimer),this.orbitPointerReleaseTimer=null),this.resetFloatingBubbles(!1),this.bubbleLayer=null,this.bubbleMessages=[],this.viewer&&(await this.viewer.dispose(),this.viewer=null))}installCustomAnimationKernel(e){const t=e?.splatMesh?.material;if(!(!t||typeof t.vertexShader!="string")){if(t.uniforms.uCustomAnimTime||(t.uniforms.uCustomAnimTime={value:0},t.uniforms.uCustomAnimMode={value:0},t.uniforms.uCustomAnimMorph={value:0},t.uniforms.uCustomColorGain={value:1},t.uniforms.uCustomAnimStrength={value:1},t.uniforms.uCustomAnimRadius={value:1}),t.userData||(t.userData={}),!t.userData.customAnimKernelInstalled){const n="uniform float currentTime;",i="vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));";let s=t.vertexShader;if(!s.includes(n)||!s.includes(i))throw new Error("Gaussian shader layout changed; custom kernel patch failed.");s=s.replace(n,`${n}
        uniform float uCustomAnimTime;
        uniform int uCustomAnimMode;
        uniform float uCustomAnimMorph;
        uniform float uCustomColorGain;
        uniform float uCustomAnimStrength;
        uniform float uCustomAnimRadius;`);const a="vColor = uintToRGBAVec(sampledCenterColor.r);";if(!s.includes(a))throw new Error("Gaussian shader color anchor not found; custom kernel patch failed.");s=s.replace(a,`${a}
            vColor.rgb *= uCustomColorGain;`),s=s.replace(i,`${i}
            vec3 baseCenter = splatCenter;
            if (uCustomAnimMode > 0) {
                float id = float(splatIndex);
                float seed = fract(sin(id * 12.9898) * 43758.5453);
                float morph = clamp(uCustomAnimMorph, 0.0, 1.0);
                vec3 fromCenter = baseCenter - sceneCenter;
                float radiusNorm = clamp(length(fromCenter) / max(uCustomAnimRadius, 0.0001), 0.0, 1.0);
                float t = uCustomAnimTime;
                float phase = t * 1.2 + seed * 6.2831853;
                float motionGate = smoothstep(0.12, 0.35, morph);
                float strength = uCustomAnimStrength * morph * motionGate;
                vec3 animatedCenter = baseCenter;

                vec3 grainDir = normalize(vec3(
                    sin(seed * 31.4) - 0.5,
                    cos(seed * 47.1) - 0.5,
                    sin(seed * 59.9) - 0.5
                ) + vec3(0.0001));
                float breakup = smoothstep(0.05, 0.85, morph);
                animatedCenter += grainDir * breakup * mix(0.01, 0.09, radiusNorm) * uCustomAnimRadius;

                if (uCustomAnimMode == 1) {
                    float wave = sin(phase + dot(fromCenter, vec3(0.11, 0.07, 0.13)) * 3.0);
                    animatedCenter.z += wave * strength * mix(0.03, 0.16, radiusNorm) * uCustomAnimRadius;
                    animatedCenter.y += cos(phase * 0.8 + radiusNorm * 5.0) * strength * 0.02 * uCustomAnimRadius;
                } else if (uCustomAnimMode == 2) {
                    float angle = atan(fromCenter.z, fromCenter.x);
                    float radial = length(fromCenter.xz);
                    angle += sin(phase + fromCenter.y * 0.08) * 1.15 * strength;
                    animatedCenter.x = sceneCenter.x + cos(angle) * radial;
                    animatedCenter.z = sceneCenter.z + sin(angle) * radial;
                    animatedCenter.y += sin(phase * 0.9 + radial * 0.06) * 0.03 * strength * uCustomAnimRadius;
                } else if (uCustomAnimMode == 3) {
                    vec3 wobble = vec3(
                        sin(phase * 2.1 + fromCenter.y * 0.13) + cos(phase * 0.7 + fromCenter.z * 0.09),
                        cos(phase * 1.7 + fromCenter.x * 0.11) + sin(phase * 0.9 + fromCenter.z * 0.05),
                        sin(phase * 1.3 + fromCenter.x * 0.07) + cos(phase * 1.6 + fromCenter.y * 0.12)
                    );
                    animatedCenter += wobble * 0.03 * strength * uCustomAnimRadius;
                } else if (uCustomAnimMode == 4) {
                    float scalePulse = 1.0 + sin(phase * 0.9) * 0.12 * strength;
                    animatedCenter = sceneCenter + fromCenter * scalePulse;
                } else if (uCustomAnimMode == 5) {
                    float burst = pow(max(sin(phase * 0.8), 0.0), 2.0);
                    vec3 explodeDir = normalize(fromCenter + vec3(0.0001, 0.0001, 0.0001));
                    animatedCenter += explodeDir * burst * strength * 0.28 * uCustomAnimRadius;
                }

                splatCenter = mix(baseCenter, animatedCenter, morph);
            }`),t.vertexShader=s,t.userData.customAnimKernelInstalled=!0,t.needsUpdate=!0}this.customUniforms={time:t.uniforms.uCustomAnimTime,mode:t.uniforms.uCustomAnimMode,morph:t.uniforms.uCustomAnimMorph,colorGain:t.uniforms.uCustomColorGain,strength:t.uniforms.uCustomAnimStrength,radius:t.uniforms.uCustomAnimRadius}}}applyAnimationStyle(e=!1){if(!this.viewer?.splatMesh)return;const t=this.viewer.splatMesh;(this.animationMode==="none"||e)&&(typeof t.setPointCloudModeEnabled=="function"&&t.setPointCloudModeEnabled(!1),typeof t.setSplatScale=="function"&&t.setSplatScale(1),this.pointCloudEnabled=!1)}updateAnimationUniforms(){if(!this.customUniforms)return;const e=performance.now(),t=(e-this.animationStartTime)/1e3,n=Math.min(Math.max((e-this.lastUniformUpdateTimeMs)/1e3,0),.05);this.lastUniformUpdateTimeMs=e;let i=0,s=!1;if(this.animationMode!=="none"){const L=t%this.morphLoopSeconds/this.morphLoopSeconds;s=L<.5;const O=L<.5?L*2:(1-L)*2;i=this.easeInOutCubic(O)}let a=this.pointCloudEnabled;this.animationMode==="none"?a=!1:s&&i>=this.pointCloudEnterMorph?a=!0:!s&&i<=this.pointCloudExitMorph&&(a=!1);const o=this.animationMode!=="none"&&!s&&i<=this.modelRevealStartMorph,l=o?1-this.smoothstep(0,this.modelRevealStartMorph,i):0,c=this.easeInOutCubic(i),d=this.smoothstep(.03,.18,i),h=s?0:1-this.smoothstep(0,.28,i),u=this.animationMode==="none"?1:1+.22*c*d+.26*h;let f=0;this.animationMode!=="none"&&(s?f=this.smoothstep(this.pointCloudEnterMorph-.14,this.pointCloudEnterMorph+.04,i):f=this.smoothstep(0,.16,i));const A=1-this.smoothstep(0,.24,i),g=1-.08*A,m=1.2+.14*A,p=this.animationMode==="none"?1:this.mix(g,m,f),x=this.animationMode==="none"?1:1-this.smoothstep(this.pointCloudExitMorph+.02,this.pointCloudExitMorph+.14,i),S=this.mix(u,1,x),_=this.isMobileLike&&a?S*1.18:S,M=p,E=this.viewer?.splatMesh;E&&((o||!s&&i<=this.pointCloudExitMorph+.03)&&(a=!1),this.pointCloudEnabled&&!a&&(this.luminanceBridgeActive=!0,this.luminanceBridgeFrom=this.colorGainApplied,this.luminanceBridgeElapsed=0,this.scaleBridgeActive=!0,this.scaleBridgeFrom=Math.min(this.scaleApplied,.9),this.scaleBridgeElapsed=0),this.pointCloudEnabled!==a&&(typeof E.setPointCloudModeEnabled=="function"&&E.setPointCloudModeEnabled(a),this.pointCloudEnabled=a));let v=_;if(o)this.scaleBridgeActive=!1,v=this.mix(this.modelRevealStartScale,1,l);else if(this.animationMode==="none")this.scaleBridgeActive=!1,v=1;else if(this.scaleBridgeActive){this.scaleBridgeElapsed+=n;const L=this.smoothstep(0,this.scaleBridgeDurationSeconds,this.scaleBridgeElapsed);v=this.mix(this.scaleBridgeFrom,1,L),L>=1&&(this.scaleBridgeActive=!1)}let P=M;if(o){this.luminanceBridgeActive=!1;const L=this.easeOutCubic(l);P=this.mix(this.modelRevealStartGain,1,L)}else if(this.animationMode==="none")this.luminanceBridgeActive=!1,P=1;else if(this.luminanceBridgeActive){this.luminanceBridgeElapsed+=n;const L=this.easeOutCubic(this.smoothstep(0,this.luminanceBridgeDurationSeconds,this.luminanceBridgeElapsed));P=this.mix(this.luminanceBridgeFrom,1,L),L>=1&&(this.luminanceBridgeActive=!1)}const y=1-Math.exp(-n/.18),b=1-Math.exp(-n/.1),F=this.colorGainApplied+(P-this.colorGainApplied)*y,B=F-this.colorGainApplied,z=this.colorRisePerSecond*n,R=this.colorFallPerSecond*n;B>z?this.colorGainApplied+=z:B<-R?this.colorGainApplied-=R:this.colorGainApplied=F,this.scaleApplied+=(v-this.scaleApplied)*b,E&&typeof E.setSplatScale=="function"&&E.setSplatScale(this.scaleApplied),this.customUniforms.time.value=t,this.customUniforms.mode.value=this.animationModeToInt(this.animationMode),this.customUniforms.morph.value=i,this.customUniforms.colorGain.value=this.colorGainApplied,this.customUniforms.strength.value=this.animationMode==="none"?0:.35+.65*i,this.customUniforms.radius.value=Math.max(this.sceneRadius,.25)}easeInOutCubic(e){const t=Math.max(0,Math.min(1,e));return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}smoothstep(e,t,n){if(e===t)return n<e?0:1;const i=Math.max(0,Math.min(1,(n-e)/(t-e)));return i*i*(3-2*i)}mix(e,t,n){const i=Math.max(0,Math.min(1,n));return e*(1-i)+t*i}easeOutCubic(e){const t=Math.max(0,Math.min(1,e));return 1-Math.pow(1-t,3)}frameCameraFromSplatMesh(e){const t=e?.calculatedSceneCenter,n=e?.maxSplatDistanceFromSceneCenter;t&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)?this.sceneCenter.set(t.x,t.y,t.z):this.sceneCenter.set(0,0,0),this.sceneRadius=Number.isFinite(n)&&n>0?n:1;const i=this.camera.fov*Math.PI/180,s=this.sceneRadius/Math.tan(i/2),a=Math.max(s*1.35,this.sceneRadius*1.8);this.camera.position.set(this.sceneCenter.x+a*.14,this.sceneCenter.y+a*.08,this.sceneCenter.z+a),this.camera.near=Math.max(.001,a/5e3),this.camera.far=Math.max(1e3,a*3e3),this.camera.updateProjectionMatrix(),this.controls.target.copy(this.sceneCenter),this.controls.minDistance=Math.max(this.sceneRadius*.001,1e-4),this.controls.maxDistance=Number.POSITIVE_INFINITY,this.controls.update()}animationModeToInt(e){return e==="zwave"?1:e==="swirl"?2:e==="noise"?3:e==="breath"?4:e==="explode"?5:0}resetFloatingBubbles(e){for(this.activeTextBubble=null;this.floatingBubbles.length>0;)this.floatingBubbles.pop()?.element.remove();this.nextBubbleSpawnMs=e&&this.bubbleLayer?performance.now()+320:Number.POSITIVE_INFINITY}scheduleNextBubble(e){const t=this.performanceLevel==="low"?1.28:1,n=this.isMobileLike?1.2:1,i=this.bubbleSpawnMinGapMs*n*t,s=this.bubbleSpawnMaxGapMs*(this.isMobileLike?1.3:1)*t,a=i+Math.random()*Math.max(s-i,1);this.nextBubbleSpawnMs=e+a}dissipateBubble(e,t=performance.now()){this.spawnDustBurst(e.screenX,e.screenY,e.colorRgb),e.element.classList.remove("is-open"),e.element.style.opacity="0",e.element.style.pointerEvents="none",e.spawnMs=t-e.lifeMs-1,this.activeTextBubble===e&&(this.activeTextBubble=null)}dismissActiveTextBubble(){const e=this.activeTextBubble;e&&(this.dissipateBubble(e),this.activeTextBubble=null,this.bubbleLayer&&this.bubblesEnabledForModel&&this.scheduleNextBubble(performance.now()))}activateTextBubble(e){const t=performance.now();this.activeTextBubble&&this.activeTextBubble!==e&&(this.dissipateBubble(this.activeTextBubble,t),this.activeTextBubble=null),this.activeTextBubble=e,e.revealUntilMs=Number.POSITIVE_INFINITY,e.element.classList.add("is-open");for(const n of this.floatingBubbles)n!==e&&this.dissipateBubble(n,t);this.nextBubbleSpawnMs=Number.POSITIVE_INFINITY}spawnFloatingBubble(e){if(!this.bubbleLayer)return;const t=this.floatingBubbles.reduce((_,M)=>_+(M.kind==="text"?1:0),0),i=this.bubbleMessages.length>0&&t<this.maxTextBubbles&&Math.random()<this.textBubbleSpawnProbability?"text":"plain",s=i==="text"&&this.bubbleMessages[Math.floor(Math.random()*this.bubbleMessages.length)]||"",a=Math.random(),o=document.createElement("button");o.type="button",o.className=`story-bubble story-bubble--${i}`,o.setAttribute("aria-label",i==="text"?`Show note: ${s}`:"Trigger particle burst");const l=document.createElement("span");if(l.className="story-bubble__core",o.append(l),i==="text"){const _=document.createElement("span");_.className="story-bubble__label",_.textContent=s,o.appendChild(_)}const c=this.performanceLevel==="low"?this.fallbackBubbleColor(a):this.resolveBubbleColor(a);o.style.setProperty("--bubble-rgb",`${c[0]} ${c[1]} ${c[2]}`),o.style.setProperty("--bubble-phase",`${(-Math.random()*6).toFixed(2)}s`);const d=Math.random()*Math.PI*2,h=Math.acos(Math.random()*2-1),u=new I(Math.sin(h)*Math.cos(d),Math.cos(h),Math.sin(h)*Math.sin(d)).normalize(),f=this.sceneRadius*this.bubbleEdgeSpawnRadiusFactor;this.bubbleTangentATemp.set(u.y,-u.x,0),this.bubbleTangentATemp.lengthSq()<1e-5&&this.bubbleTangentATemp.set(0,u.z,-u.y),this.bubbleTangentATemp.normalize(),this.bubbleTangentBTemp.crossVectors(u,this.bubbleTangentATemp).normalize();const A=Math.max(this.sceneRadius*this.bubbleEdgeSpawnJitterFactor,.003),g=this.sceneCenter.clone().addScaledVector(u,f).addScaledVector(this.bubbleTangentATemp,(Math.random()*2-1)*A).addScaledVector(this.bubbleTangentBTemp,(Math.random()*2-1)*A);this.pushBubbleOutsideModel(g,u);const m=Math.max(this.sceneRadius*(.05+Math.random()*.04),.02),p=m*(.14+Math.random()*.2),x=u.clone().multiplyScalar(m).addScaledVector(this.bubbleTangentATemp,(Math.random()*2-1)*p).addScaledVector(this.bubbleTangentBTemp,(Math.random()*2-1)*p),S={element:o,kind:i,position:g,velocity:x,outwardDir:u,outwardAccel:Math.max(this.sceneRadius*(.09+Math.random()*.06),.03),driftRadius:this.sceneRadius*(1.24+Math.random()*.56),seed:a,spawnMs:e,lastUpdateMs:e,lifeMs:this.bubbleLifeMinMs+Math.random()*(this.bubbleLifeMaxMs-this.bubbleLifeMinMs),revealUntilMs:0,startScale:i==="text"?.42+Math.random()*.2:2.05+Math.random()*1,endScale:i==="text"?1.82+Math.random()*1.18:.55+Math.random()*.45,maxAlpha:.56,colorRgb:c,screenX:this.canvas.clientWidth*.5,screenY:this.canvas.clientHeight*.5,overModel:!1,lastOverlapCheckMs:0};o.addEventListener("click",()=>{if(S.kind==="text"){this.activateTextBubble(S);return}this.dissipateBubble(S)}),this.bubbleLayer.appendChild(o),this.floatingBubbles.push(S),this.floatingBubbles.length>this.getActiveMaxFloatingBubbles()&&this.floatingBubbles.shift()?.element.remove()}updateFloatingBubbles(){if(!this.bubbleLayer||!this.bubblesEnabledForModel)return;const e=performance.now();if(this.performanceLevel==="low"&&e-this.lastBubbleTickMs<this.lowBubbleTickIntervalMs||(this.lastBubbleTickMs=e,this.activeTextBubble===null&&this.floatingBubbles.length<this.getActiveMaxFloatingBubbles()&&e>=this.nextBubbleSpawnMs&&(this.spawnFloatingBubble(e),this.scheduleNextBubble(e)),this.floatingBubbles.length===0))return;const t=Math.max(this.canvas.clientWidth,1),n=Math.max(this.canvas.clientHeight,1);for(let i=this.floatingBubbles.length-1;i>=0;i-=1){const s=this.floatingBubbles[i],o=(e-s.spawnMs)/s.lifeMs;if(o>=1&&s!==this.activeTextBubble){s.element.remove(),this.floatingBubbles.splice(i,1);continue}const l=Math.min(Math.max((e-s.lastUpdateMs)/1e3,0),.05);s.lastUpdateMs=e;const c=1-this.smoothstep(.3,.78,o);s.velocity.addScaledVector(s.outwardDir,s.outwardAccel*.28*c*l);const d=e*.001,h=d*.65+s.seed*9.7,u=.45+.55*(.5+.5*Math.sin(h*1.17+Math.sin(h*.43+s.seed*6.1)+Math.cos(h*.31+s.seed*11.4)));this.bubbleTangentATemp.set(Math.sin(h+s.seed*1.9)+.36*Math.sin(h*1.91+s.seed*7.6),.22*Math.sin(h*1.37+s.seed*4.8),Math.cos(h*.83+s.seed*2.7)+.34*Math.cos(h*1.73+s.seed*8.3)),this.bubbleTangentATemp.lengthSq()>1e-6?this.bubbleTangentATemp.normalize():this.bubbleTangentATemp.set(1,0,0);const f=Math.max(this.sceneRadius*(.07+.09*u),.02);s.velocity.addScaledVector(this.bubbleTangentATemp,f*l);const A=Math.max(this.sceneRadius*.028,.006);s.velocity.x+=(Math.random()*2-1)*A*l,s.velocity.y+=(Math.random()*2-1)*A*.58*l,s.velocity.z+=(Math.random()*2-1)*A*l,s.velocity.y+=Math.sin(d*2.1+s.seed*17.2)*Math.max(this.sceneRadius*.012,.0035)*l;const g=Math.exp(-l*2.05);s.velocity.multiplyScalar(g),s.position.addScaledVector(s.velocity,l),this.bubbleOffsetTemp.copy(s.position).sub(this.sceneCenter);const m=this.bubbleOffsetTemp.length(),p=this.sceneRadius*.78;if(m>1e-4&&m<p){this.bubbleOffsetTemp.multiplyScalar(1/m);const M=(p-m)/p;s.velocity.addScaledVector(this.bubbleOffsetTemp,M*this.sceneRadius*.5*l)}if(m>s.driftRadius){this.bubbleOffsetTemp.multiplyScalar(1/Math.max(m,1e-4));const M=m-s.driftRadius;s.velocity.addScaledVector(this.bubbleOffsetTemp,-M*.45*l)}this.bubbleWorldPos.copy(s.position),this.bubbleProjection.copy(this.bubbleWorldPos).project(this.camera);const x=s.maxAlpha*this.smoothstep(0,.78,o),S=this.mix(s.startScale,s.endScale,this.easeOutCubic(o));if(!(this.bubbleProjection.z>-1&&this.bubbleProjection.z<1&&this.bubbleProjection.x>-1.2&&this.bubbleProjection.x<1.2&&this.bubbleProjection.y>-1.2&&this.bubbleProjection.y<1.2)||x<=.02)s.element.style.opacity="0",s.element.style.pointerEvents="none";else{const M=(this.bubbleProjection.x*.5+.5)*t,E=(-this.bubbleProjection.y*.5+.5)*n;s.screenX=M,s.screenY=E;const v=this.isMobileLike?this.bubbleOverlapCheckIntervalMobileMs:this.bubbleOverlapCheckIntervalDesktopMs,P=this.performanceLevel==="low"?v*1.9:v;e-s.lastOverlapCheckMs>=P&&(s.overModel=this.isModelPixelCovered(M,E,this.getActiveNoOverlapSampleRadiusPx()),s.lastOverlapCheckMs=e);const y=s.overModel,b=Math.min(M,t-M,E,n-E),F=this.smoothstep(this.edgeDisappearMarginPx,this.edgeDisappearMarginPx+36,b),B=x*F;if(y||B<=.02){s.element.style.opacity="0",s.element.style.pointerEvents="none";continue}s.element.style.opacity=B.toFixed(3),s.element.style.pointerEvents=B>.08?"auto":"none",s.element.style.transform=`translate3d(${M.toFixed(1)}px, ${E.toFixed(1)}px, 0) translate(-50%, -50%) scale(${S.toFixed(3)})`}s!==this.activeTextBubble&&e>s.revealUntilMs&&s.element.classList.remove("is-open")}}spawnDustBurst(e,t,n){if(!this.bubbleLayer)return;const i=document.createElement("div");i.className="bubble-dust",i.style.left=`${e.toFixed(1)}px`,i.style.top=`${t.toFixed(1)}px`,i.style.setProperty("--dust-rgb",`${n[0]} ${n[1]} ${n[2]}`),i.style.setProperty("--dust-duration",`${(.96+Math.random()*.28).toFixed(2)}s`);const s=document.createElement("span");s.className="bubble-dust__flash",i.appendChild(s);const a=document.createElement("span");a.className="bubble-dust__ring",i.appendChild(a);const o=24+Math.floor(Math.random()*12);for(let c=0;c<o;c+=1){const d=document.createElement("span");d.className="bubble-dust__p";const h=Math.PI*2*c/o+(Math.random()*2-1)*.4,u=28+Math.random()*78,f=1.8+Math.random()*4.6;d.style.setProperty("--dx",`${(Math.cos(h)*u).toFixed(1)}px`),d.style.setProperty("--dy",`${(Math.sin(h)*u).toFixed(1)}px`),d.style.setProperty("--size",`${f.toFixed(2)}px`),d.style.setProperty("--life",`${(.74+Math.random()*.42).toFixed(2)}s`),d.style.animationDelay=`${(Math.random()*.12).toFixed(3)}s`,i.appendChild(d)}this.bubbleLayer.appendChild(i);const l=()=>i.remove();i.addEventListener("animationend",l,{once:!0}),window.setTimeout(l,1400)}pushBubbleOutsideModel(e,t){const n=Math.max(this.canvas.clientWidth,1),i=Math.max(this.canvas.clientHeight,1),s=Math.max(this.sceneRadius*this.bubbleNoOverlapPushStepFactor,.005),a=this.isMobileLike?Math.min(this.bubbleNoOverlapPushMaxTries,6):this.bubbleNoOverlapPushMaxTries,o=this.performanceLevel==="low"?Math.min(a,4):a;for(let l=0;l<o;l+=1){this.bubbleProjection.copy(e).project(this.camera);const c=this.bubbleProjection;if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||c.z<=-1||c.z>=1||c.x<=-1.1||c.x>=1.1||c.y<=-1.1||c.y>=1.1)return;const d=(c.x*.5+.5)*n,h=(-c.y*.5+.5)*i;if(!this.isModelPixelCovered(d,h,this.getActiveNoOverlapSampleRadiusPx()))return;e.addScaledVector(t,s)}e.addScaledVector(t,s*1.5)}isModelPixelCovered(e,t,n=0){const i=this.renderer?.getContext?.();if(!i||typeof i.readPixels!="function")return!1;const s=Number(i.drawingBufferWidth)||0,a=Number(i.drawingBufferHeight)||0;if(s<2||a<2)return!1;const o=Math.max(this.canvas.clientWidth,1),l=Math.max(this.canvas.clientHeight,1),c=e/o*s,d=t/l*a,h=Math.max(1,n*(s/o)),u=this.performanceLevel==="low"?[[0,0],[h,0],[-h,0],[0,h],[0,-h]]:this.isMobileLike?[[0,0],[h,0],[-h,0],[0,h],[0,-h]]:[[0,0],[h,0],[-h,0],[0,h],[0,-h],[h*.72,h*.72],[h*.72,-h*.72],[-h*.72,h*.72],[-h*.72,-h*.72]];for(const[f,A]of u)if(this.readRenderAlpha(i,c+f,d+A)>14)return!0;return!1}readRenderAlpha(e,t,n){const i=Number(e.drawingBufferWidth)||0,s=Number(e.drawingBufferHeight)||0;if(i<2||s<2)return 0;const a=Math.max(0,Math.min(i-1,Math.round(t))),o=Math.max(0,Math.min(s-1,Math.round(n))),l=s-1-o;try{e.readPixels(a,l,1,1,e.RGBA,e.UNSIGNED_BYTE,this.bubbleSamplePixel)}catch{return 0}return this.bubbleSamplePixel[3]}resolveBubbleColor(e){const t=this.fallbackBubbleColor(e),n=this.renderer?.getContext?.();if(!n||typeof n.readPixels!="function")return t;const i=Number(n.drawingBufferWidth)||0,s=Number(n.drawingBufferHeight)||0;if(i<2||s<2||(this.bubbleProjection.copy(this.sceneCenter).project(this.camera),!Number.isFinite(this.bubbleProjection.x)||!Number.isFinite(this.bubbleProjection.y)||this.bubbleProjection.z<=-1||this.bubbleProjection.z>=1))return t;const a=(this.bubbleProjection.x*.5+.5)*i,o=(-this.bubbleProjection.y*.5+.5)*s,l=Math.max(5,Math.min(i,s)*.009),c=[[0,0],[Math.cos(e*6.283)*l,Math.sin(e*6.283)*l],[Math.cos((e+.33)*6.283)*l*1.45,Math.sin((e+.33)*6.283)*l*1.45],[Math.cos((e+.66)*6.283)*l*.72,Math.sin((e+.66)*6.283)*l*.72]];let d=null,h=-1;for(const[f,A]of c){const g=this.readFramePixel(n,a+f,o+A);if(!g)continue;const m=Math.min(g[0],g[1],g[2]),p=Math.max(g[0],g[1],g[2]),S=g[0]*.2126+g[1]*.7152+g[2]*.0722+(p-m)*.7;S>h&&(d=g,h=S)}if(!d)return t;const u=this.colorGainApplied;return[Math.min(255,Math.round(d[0]*(.82+u*.26))),Math.min(255,Math.round(d[1]*(.82+u*.26))),Math.min(255,Math.round(d[2]*(.82+u*.26)))]}readFramePixel(e,t,n){const i=Number(e.drawingBufferWidth)||0,s=Number(e.drawingBufferHeight)||0;if(i<2||s<2)return null;const a=Math.max(0,Math.min(i-1,Math.round(t))),o=Math.max(0,Math.min(s-1,Math.round(n))),l=s-1-o;try{e.readPixels(a,l,1,1,e.RGBA,e.UNSIGNED_BYTE,this.bubbleSamplePixel)}catch{return null}const c=this.bubbleSamplePixel[3],d=this.bubbleSamplePixel[0],h=this.bubbleSamplePixel[1],u=this.bubbleSamplePixel[2];return c<14||d+h+u<32?null:[d,h,u]}fallbackBubbleColor(e){let t=[130,186,245];this.animationMode==="zwave"&&(t=[120,201,255]),this.animationMode==="swirl"&&(t=[132,220,246]),this.animationMode==="noise"&&(t=[172,188,255]),this.animationMode==="breath"&&(t=[168,223,255]),this.animationMode==="explode"&&(t=[255,172,128]);const n=(e-.5)*36;return[Math.max(0,Math.min(255,Math.round(t[0]+n))),Math.max(0,Math.min(255,Math.round(t[1]+n*.7))),Math.max(0,Math.min(255,Math.round(t[2]+n*.4)))]}resize(){const e=Math.max(this.canvas.clientWidth,1),t=Math.max(this.canvas.clientHeight,1);this.renderer.setSize(e,t,!1),this.applyRendererPixelRatio(),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}getActiveMaxFloatingBubbles(){return this.performanceLevel==="low"?this.isMobileLike?this.lowMobileMaxFloatingBubbles:this.lowDesktopMaxFloatingBubbles:this.isMobileLike?this.mobileMaxFloatingBubbles:this.maxFloatingBubbles}getActiveNoOverlapSampleRadiusPx(){return this.performanceLevel==="low"?this.isMobileLike?Math.max(7,this.bubbleNoOverlapSampleRadiusPx-6):Math.max(8,this.bubbleNoOverlapSampleRadiusPx-4):this.isMobileLike?Math.max(8,this.bubbleNoOverlapSampleRadiusPx-4):this.bubbleNoOverlapSampleRadiusPx}applyRendererPixelRatio(){const e=this.performanceLevel==="low"?this.isMobileLike?this.lowDprCapMobile:this.lowDprCapDesktop:this.isMobileLike?this.highDprCapMobile:this.highDprCapDesktop;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e))}}class PA{canvas;ctx;particles=[];isMobileLike;width=1;height=1;dpr=1;timeSeconds=0;lastFrameMs=performance.now();performanceLevel="high";backgroundLinear=null;backgroundRadial=null;onResize=()=>this.resize();constructor(e){this.canvas=e;const t=e.getContext("2d");if(!t)throw new Error("Particle backdrop canvas 2D context unavailable.");this.ctx=t,this.isMobileLike=window.matchMedia("(max-width: 980px), (pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),this.resize(),window.addEventListener("resize",this.onResize)}dispose(){window.removeEventListener("resize",this.onResize)}setPerformanceLevel(e){this.performanceLevel!==e&&(this.performanceLevel=e,this.resize())}update(){this.ensureSize();const e=performance.now(),t=this.performanceLevel==="low"?50:this.isMobileLike?33:0;if(t>0&&e-this.lastFrameMs<t)return;const n=Math.min(Math.max((e-this.lastFrameMs)/1e3,0),.05);this.lastFrameMs=e,this.timeSeconds+=n,this.stepParticles(n),this.render()}ensureSize(){const e=Math.max(this.canvas.clientWidth,1),t=Math.max(this.canvas.clientHeight,1),n=Math.min(window.devicePixelRatio||1,this.getDprCap());(e!==this.width||t!==this.height||Math.abs(n-this.dpr)>.01)&&this.resize()}resize(){this.width=Math.max(this.canvas.clientWidth,1),this.height=Math.max(this.canvas.clientHeight,1),this.dpr=Math.min(window.devicePixelRatio||1,this.getDprCap()),this.canvas.width=Math.round(this.width*this.dpr),this.canvas.height=Math.round(this.height*this.dpr),this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0),this.rebuildBackgroundGradients(),this.ensureParticleCount()}ensureParticleCount(){const e=this.performanceLevel==="low"?Math.min(90,Math.max(34,Math.round(this.width*this.height/28e3))):this.isMobileLike?Math.min(130,Math.max(56,Math.round(this.width*this.height/2e4))):Math.min(260,Math.max(100,Math.round(this.width*this.height/12e3)));for(;this.particles.length<e;)this.particles.push(this.createParticle(!0));for(;this.particles.length>e;)this.particles.pop()}createParticle(e){const t=e?Math.random()*1.2:.92+Math.random()*.34;return{x:(Math.random()*2-1)*1.15,y:Math.random()*1.25-.22,z:t,vx:(Math.random()*2-1)*.02,vy:(Math.random()*2-1)*.016,speed:.16+Math.random()*.24,size:.6+Math.random()*1.4,twinkle:.6+Math.random()*1.9,seed:Math.random()*9999}}resetParticle(e){const t=this.createParticle(!1);e.x=t.x,e.y=t.y,e.z=t.z,e.vx=t.vx,e.vy=t.vy,e.speed=t.speed,e.size=t.size,e.twinkle=t.twinkle}stepParticles(e){for(const t of this.particles){const n=this.timeSeconds*.62+t.seed*.013,i=.5+.5*Math.sin(n*1.18+Math.sin(n*.46+t.seed*.004)+Math.cos(n*.3+t.seed*.002)),s=Math.sin(n)*(.048+i*.038),a=Math.cos(n*1.3+t.seed*.001)*.018;t.vx+=s*e,t.vy+=a*e;const o=.021;t.vx+=(Math.random()*2-1)*o*e,t.vy+=(Math.random()*2-1)*o*.65*e,t.vy+=Math.sin(this.timeSeconds*1.9+t.seed*.008)*.006*e;const l=Math.exp(-e*2.05);t.vx*=l,t.vy*=l,t.x+=t.vx*e,t.y+=t.vy*e,t.z-=t.speed*e,(t.z<=.02||Math.abs(t.x)>1.5||t.y<-.45||t.y>1.45)&&this.resetParticle(t)}}render(){this.ctx.clearRect(0,0,this.width,this.height),this.renderBackgroundGlow(),this.renderPerspectiveGrid(),this.renderParticles()}renderBackgroundGlow(){(!this.backgroundLinear||!this.backgroundRadial)&&this.rebuildBackgroundGradients(),this.ctx.fillStyle=this.backgroundLinear,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle=this.backgroundRadial,this.ctx.fillRect(0,0,this.width,this.height)}renderPerspectiveGrid(){const e=this.width*.5,t=this.height*.34,n=this.height+4,i=this.performanceLevel==="low"?6:this.isMobileLike?8:12,s=this.performanceLevel==="low"?8:this.isMobileLike?12:22;this.ctx.lineWidth=1,this.ctx.strokeStyle="rgba(132, 194, 255, 0.12)";for(let o=-i;o<=i;o+=1){const l=o/i,c=e+l*this.width*.09,d=e+l*this.width*1.03;this.ctx.beginPath(),this.ctx.moveTo(c,t+2),this.ctx.lineTo(d,n),this.ctx.stroke()}this.ctx.strokeStyle="rgba(164, 216, 255, 0.1)";const a=this.timeSeconds*.32%1;for(let o=0;o<s;o+=1){const l=(o+a)/s,c=Math.pow(Math.min(l,1),1.78),d=t+c*(n-t),h=this.width*(.05+c*.98);this.ctx.beginPath(),this.ctx.moveTo(e-h*.5,d),this.ctx.lineTo(e+h*.5,d),this.ctx.stroke()}}renderParticles(){const e=this.width*.5,t=this.height*.32;for(const n of this.particles){const i=1-Math.min(Math.max(n.z,0),1.25)/1.25,s=.18+i*1.6,a=e+n.x*this.width*.46*s,o=t+n.y*this.height*.58*s;if(a<-20||a>this.width+20||o<-20||o>this.height+20)continue;const l=.68+.32*Math.sin(this.timeSeconds*n.twinkle+n.seed*.003),c=Math.min(.9,Math.max(.06,i*.86*l)),d=n.size*(.55+s*.95),h=Math.round(122+70*(.5+.5*Math.sin(this.timeSeconds*.28+n.seed*.002))),u=Math.round(185+34*(.5+.5*Math.cos(this.timeSeconds*.22+n.seed*.0015))),f=255;this.ctx.fillStyle=`rgba(${h}, ${u}, ${f}, ${c.toFixed(3)})`,this.ctx.beginPath(),this.ctx.arc(a,o,d,0,Math.PI*2),this.ctx.fill(),this.ctx.strokeStyle=`rgba(${h}, ${u}, ${f}, ${(c*.34).toFixed(3)})`,this.ctx.lineWidth=Math.max(.6,d*.35),this.ctx.beginPath(),this.ctx.moveTo(a,o),this.ctx.lineTo(a-n.vx*780,o-n.vy*780),this.ctx.stroke()}}getDprCap(){return this.performanceLevel==="low"?this.isMobileLike?1:1.15:this.isMobileLike?1.25:2}rebuildBackgroundGradients(){const e=this.ctx.createLinearGradient(0,0,0,this.height);e.addColorStop(0,"rgba(7, 16, 32, 0.68)"),e.addColorStop(.34,"rgba(6, 13, 28, 0.52)"),e.addColorStop(1,"rgba(3, 8, 18, 0.84)"),this.backgroundLinear=e;const t=this.ctx.createRadialGradient(this.width*.52,this.height*.2,this.height*.04,this.width*.5,this.height*.42,this.height*.85);t.addColorStop(0,"rgba(58, 126, 178, 0.22)"),t.addColorStop(.38,"rgba(34, 76, 132, 0.14)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),this.backgroundRadial=t}}const _d=document.getElementById("canvas");if(!(_d instanceof HTMLCanvasElement))throw new Error("鏈壘鍒扮敾甯冨厓绱?#canvas");const ys=document.getElementById("modelUrl"),Cc=document.getElementById("reload"),Gi=document.getElementById("displayToggle"),Vi=document.getElementById("showcaseToggle"),Tc=document.getElementById("status"),Dn=document.getElementById("narrativeScroll"),An=document.getElementById("app"),Qn=document.getElementById("splitter"),To=document.querySelector(".stage-wrap"),wc=document.getElementById("backdropCanvas"),Rc=document.getElementById("bubbleLayer"),Ic=document.getElementById("mobileQr"),wo=document.getElementById("mobileLink"),Pc=document.getElementById("mobileHint"),DA=Array.from(document.querySelectorAll(".narrative-block[data-mode]")),Qt=DA.map((r,e)=>{const t=(r.dataset.mode||"none").trim(),i=r.querySelector("h2")?.textContent?.trim()||`娈佃惤 ${e+1}`;return{mode:t,element:r,title:i}});if(Qt.length===0)throw new Error("鏈壘鍒?.narrative-block[data-mode] 鍔ㄧ敾閿氱偣");const zn=new IA(_d),va=wc instanceof HTMLCanvasElement?new PA(wc):null,Ho="/models/tower/tower_mobile.ksplat",LA=["铺沟石窟"];ys instanceof HTMLInputElement&&!ys.value.trim()&&(ys.value=Ho);zn.setFloatingBubbles(Rc instanceof HTMLElement?Rc:null,LA);const Wi=window.matchMedia("(max-width: 980px)"),fs=["zwave","swirl","breath","explode"];let an=Wi.matches,ti="high",ko=!1,Jn=-1,$t=!1,xi=0,Rs=!1,ps=null,dn=0,jt=null;const FA=140;let Ki=0,wr=!1,gr=null,Go=null;const yd=10,Dc=340,is=r=>{ti!==r&&(ti=r,zn.setPerformanceLevel(r),va?.setPerformanceLevel(r),document.documentElement.classList.toggle("perf-low",r==="low"))},ji=r=>{Tc&&(Tc.textContent=r)},_a=()=>{Gi instanceof HTMLButtonElement&&(Gi.classList.remove("is-active"),Gi.setAttribute("aria-pressed","false"),Gi.textContent="动画"),Vi instanceof HTMLButtonElement&&(Vi.classList.toggle("is-active",$t),Vi.setAttribute("aria-pressed",$t?"true":"false"),Vi.textContent=$t?"返回":"展示")},BA=()=>{if(!(Ic instanceof HTMLImageElement)||!(wo instanceof HTMLAnchorElement))return;const r=new URL(window.location.href);r.searchParams.delete("qr");const e=r.toString(),t="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(e);if(Ic.src=t,wo.href=e,wo.textContent=e,Pc){const n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";Pc.textContent=n?"若手机无法打开，请把 localhost 替换为电脑局域网 IP。":"扫码可在手机端打开同一页面。"}},Md=()=>{Qt.forEach((r,e)=>{r.element.classList.toggle("active",e===Jn)})},Fs=()=>{if(!(Dn instanceof HTMLElement)||Qt.length===0)return 0;const r=Math.max(Dn.scrollHeight-Dn.clientHeight,0);if(r<=0||Dn.scrollTop<=1)return 0;if(Dn.scrollTop>=r-1)return Qt.length-1;const e=Dn.scrollTop+Dn.clientHeight*.18;let t=0;for(let n=1;n<Qt.length;n+=1){const i=Qt[n-1].element.offsetTop,s=Qt[n].element.offsetTop,a=i+(s-i)*.5;if(e>=a)t=n;else break}return t},UA=()=>{Rs||(Rs=!0,ui=0,fi=0,ps=ti,ti!=="low"&&is("low"))},ya=()=>{Rs&&(Rs=!1,ui=0,fi=0,ps&&ti!==ps&&is(ps),ps=null)},Lc=()=>{dn===0&&(dn=window.requestAnimationFrame(()=>{dn=0,os(Fs())}))},Ed=()=>{Ki===0&&(Ki=window.requestAnimationFrame(()=>{Ki=0,window.dispatchEvent(new Event("resize"))}))},OA=()=>{!(To instanceof HTMLElement)||!(An instanceof HTMLElement)||(To.parentElement!==An&&An.appendChild(To),window.dispatchEvent(new Event("resize")))},bd=r=>{if(!(An instanceof HTMLElement))return;const e=An.clientWidth;if(e<=0)return;const t=Dc,n=Math.max(t,e-Dc-yd),i=Math.max(t,Math.min(n,r));Go=i,An.style.setProperty("--sidebar-width",`${i}px`)},Is=()=>{if(wr){if(wr=!1,Qn instanceof HTMLElement&&gr!==null)try{Qn.releasePointerCapture(gr)}catch{}gr=null,An?.classList.remove("is-resizing"),Ed()}},Vo=r=>{if(!wr||!(An instanceof HTMLElement)||an)return;const e=An.getBoundingClientRect(),t=r-e.left-yd*.5;bd(t),Ed()},Wo=()=>{if(an=Wi.matches,an){if(Is(),$t&&($t=!1),jt!==null&&(window.clearTimeout(jt),jt=null),dn!==0&&(window.cancelAnimationFrame(dn),dn=0),ya(),Jn>=0){const r=Qt[Jn]?.mode||"",e=fs.indexOf(r);e>=0&&(xi=e)}}else Go!==null&&bd(Go);if(an&&ti!=="low"&&is("low"),_a(),OA(),an)Fr(xi);else if($t)zn.setAnimation("none"),ji("展示模式 | 原色静态");else{const r=Fs();os(r)}},os=r=>{const e=(r%Qt.length+Qt.length)%Qt.length;if(e===Jn)return;Jn=e;const t=Qt[Jn];zn.setAnimation(t.mode),Md(),ji(`宸插垏鎹?| ${t.title} | ${t.mode}`)},NA=r=>{const e=Qt.findIndex(t=>t.mode===r);return e>=0?e:0},Fr=r=>{xi=(r%fs.length+fs.length)%fs.length;const t=fs[xi];os(NA(t))},Cd=r=>{if($t!==r){if($t=r,_a(),$t){jt!==null&&(window.clearTimeout(jt),jt=null),dn!==0&&(window.cancelAnimationFrame(dn),dn=0),ya(),zn.setAnimation("none"),ji("展示模式 | 原色静态");return}an?Fr(xi):os(Fs())}},zA=()=>ys instanceof HTMLInputElement&&ys.value.trim()||Ho,Td=async()=>{const r=zA();ko=!0,ji(`鍔犺浇涓細${r}`);try{await zn.load(r),an?Fr(xi):$t?(zn.setAnimation("none"),ji("展示模式 | 原色静态")):os(Fs())}catch(e){const t=e instanceof Error?e.message:String(e);ji(`加载失败：${t}`),console.error(e)}finally{ko=!1}};Dn instanceof HTMLElement&&Dn.addEventListener("scroll",()=>{$t||an||(UA(),Lc(),jt!==null&&window.clearTimeout(jt),jt=window.setTimeout(()=>{jt=null,Lc(),ya()},FA))});Gi instanceof HTMLButtonElement&&Gi.addEventListener("click",()=>{if($t&&Cd(!1),an){Fr(xi+1);return}const r=Jn>=0?Jn+1:Fs();os(r)});Vi instanceof HTMLButtonElement&&Vi.addEventListener("click",()=>{Cd(!$t)});Cc instanceof HTMLButtonElement&&Cc.addEventListener("click",()=>{Td()});Qn instanceof HTMLElement&&(Qn.addEventListener("pointerdown",r=>{!(An instanceof HTMLElement)||an||(wr=!0,gr=r.pointerId,Qn.setPointerCapture(r.pointerId),An.classList.add("is-resizing"),Vo(r.clientX),r.preventDefault())}),Qn.addEventListener("pointermove",r=>{Vo(r.clientX)}),Qn.addEventListener("pointerup",Is),Qn.addEventListener("pointercancel",Is));window.addEventListener("pointermove",r=>{Vo(r.clientX)});window.addEventListener("pointerup",Is);window.addEventListener("pointercancel",Is);Md();_a();BA();is(an?"low":"high");Wo();Td();typeof Wi.addEventListener=="function"?Wi.addEventListener("change",Wo):typeof Wi.addListener=="function"&&Wi.addListener(Wo);const wd=()=>{requestAnimationFrame(wd);const r=performance.now();Ro+=1;const e=r-Fc;if(e>=1e3){const t=Ro*1e3/e;Ro=0,Fc=r,Rs?(ui=0,fi=0):(t<42?(ui+=1,fi=0):t>55?(fi+=1,ui=0):(ui=0,fi=0),ti==="high"&&ui>=2?is("low"):ti==="low"&&fi>=3&&!an&&is("high"))}ko||va?.update(),zn.update()};let Ro=0,Fc=performance.now(),ui=0,fi=0;wd();window.addEventListener("beforeunload",()=>{jt!==null&&(window.clearTimeout(jt),jt=null),dn!==0&&(window.cancelAnimationFrame(dn),dn=0),Ki!==0&&(window.cancelAnimationFrame(Ki),Ki=0),va?.dispose(),zn.dispose()});
