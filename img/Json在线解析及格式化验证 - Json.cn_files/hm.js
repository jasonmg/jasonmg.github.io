(function(){var h={},mt={},c={id:"2ea5d7a3a13a1da3236117fd8ee2b071",dm:["json.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,t=null,w=!1;mt.i={};mt.i.V=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Ga=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Ja=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,f){var d;f.I&&(d=new Date,d.setTime(d.getTime()+f.I));document.cookie=a+"="+b+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.ab?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.m={};mt.m.sa=function(a){return document.getElementById(a)};mt.m.ta=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};
(mt.m.Y=function(){function a(){if(!a.B){a.B=r;for(var b=0,g=d.length;b<g;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var f=w,d=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,w);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!f)if(f=r,"complete"===document.readyState)a.B=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var d=w;try{d=window.frameElement==t}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.B?b():d.push(b)}}()).B=w;mt.event={};mt.event.c=function(a,b,f){a.attachEvent?a.attachEvent("on"+b,function(b){f.call(a,b)}):a.addEventListener&&a.addEventListener(b,f,w)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var g=["["],f=d.length,n,e,k;for(e=0;e<f;e++)switch(k=d[e],typeof k){case "undefined":case "function":case "unknown":break;default:n&&g.push(","),g.push(mt.j.stringify(k)),n=1}g.push("]");return g.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];e=mt.j.stringify;for(f in d)if(Object.prototype.hasOwnProperty.call(d,f))switch(k=
d[f],typeof k){case "undefined":case "unknown":case "function":break;default:g&&n.push(","),g=1,n.push(e(f)+":"+e(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ya=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.$a=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.G=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return w}return r};
mt.localStorage.set=function(a,b,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.G()&&(mt.localStorage.g.expires=d.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,b),mt.localStorage.g.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),f=a.substring(0,b)-0;if(f&&f>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.G())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(d){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.G())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.$={};mt.$.log=function(a,b){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=t;f=window[d]=t;b&&b(a)};f.src=a};mt.P={};
mt.P.za=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.P.Ua=function(a,b,f,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+d+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.f=function(a,b){var f=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return f?f[3]:t};mt.url.Wa=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.wa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.T=function(a){return(a=mt.url.wa(a))?a.replace(/:\d+$/,""):a};mt.url.Va=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=w,f=document.getElementsByTagName("script"),d=f.length,d=100<d?100:d,g=0;g<d;g++){var m=f[g].src;if(m&&0===m.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.ra=a})();var A=h.ra;
h.s={Xa:"http://tongji.baidu.com/hm-web/welcome/ico",N:"hm.baidu.com/hm.gif",ea:"baidu.com",Da:"hmmd",Ea:"hmpl",Ra:"utm_medium",Ca:"hmkw",Ta:"utm_term",Aa:"hmci",Qa:"utm_content",Fa:"hmsr",Sa:"utm_source",Ba:"hmcu",Pa:"utm_campaign",o:0,k:Math.round(+new Date/1E3),R:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",C:A()||"https:"===document.location.protocol?"https:":"http:",Za:0,ka:6E5,la:10,Q:1024,ia:1,r:2147483647,aa:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn u tt".split(" ")};
(function(){var a={l:{},c:function(a,f){this.l[a]=this.l[a]||[];this.l[a].push(f)},w:function(a,f){this.l[a]=this.l[a]||[];for(var d=this.l[a].length,g=0;g<d;g++)this.l[a][g](f)}};return h.z=a})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";b.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.m,b=mt.event,f=mt.i,d=h.s,g=[],m={ba:function(){c.ctrk&&(b.c(document,"mouseup",m.ha()),b.c(window,"unload",function(){m.D()}),setInterval(function(){m.D()},d.ka))},ha:function(){return function(a){a=m.ua(a);if(""!==a){var b=(d.C+"//"+d.N+"?"+h.b.Z().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;b+(d.r+"").length>d.Q||(b+encodeURIComponent(g.join(",")+(g.length?",":"")).length+(d.r+"").length>d.Q&&m.D(),g.push(a),(g.length>=d.la||/t:a/.test(a))&&m.D())}}},ua:function(b){if(0===
d.ia){var e=b.target||b.srcElement,k=e.tagName.toLowerCase();if("embed"==k||"object"==k)return""}f.V?(e=Math.max(document.documentElement.scrollTop,document.body.scrollTop),k=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),k=b.clientX+k,e=b.clientY+e):(k=b.pageX,e=b.pageY);var l=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:k-=l/2;break;case 2:k-=l}k="{x:"+k+",y:"+e+",";e=b.target||b.srcElement;return k=(b="a"==e.tagName.toLowerCase()?
e:a.ta(e))?k+("t:a,u:"+encodeURIComponent(b.href)+"}"):k+"t:b}"},D:function(){0!==g.length&&(h.b.a.et=2,h.b.a.ep="["+g.join(",")+"]",h.b.h(),g=[])}};h.z.c("pv-b",m.ba);return m})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.H.xa()+","+h.H.va();h.b.h()}}function b(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);e="undefined"==typeof a?r:a;if((!n||!k)&&e&&l)u=r,p=+new Date;else if(n&&k&&(!e||!l))u=w,s+=+new Date-p;n=e;k=l;y=setTimeout(b,100)}function f(a){var k=document,p="";if(a in k)p=a;else for(var b=["webkit","ms","moz","o"],l=0;l<b.length;l++){var d=b[l]+a.charAt(0).toUpperCase()+a.slice(1);if(d in k){p=
d;break}}return p}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))l="focus"==a.type||"focusin"==a.type?r:w,b()}var g=mt.event,m=h.z,n=r,e=r,k=r,l=r,v=+new Date,p=v,s=0,u=r,x=f("visibilityState"),z=f("hidden"),y;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,a,b);g.c(window,"pageshow",b);g.c(window,"pagehide",b);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.H={xa:function(){return+new Date-v},va:function(){return u?+new Date-p+s:s}};m.c("pv-b",function(){g.c(window,"unload",a())});return h.H})();
(function(){var a=mt.lang,b=h.s,f=h.load,d={Ha:function(d){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.J();f([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),d)}},Oa:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ma=d})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];f.d(d,"Object")||f.d(d,"Array")?a(d):k[b]=String(d)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.lang,d=mt.j,g=h.s,m=h.z,n=h.ma,e={p:[],F:0,W:w,init:function(){e.e=0;m.c("pv-b",function(){e.na();e.pa()});m.c("pv-d",e.qa);m.c("stag-b",function(){h.b.a.api=e.e||e.F?e.e+"_"+e.F:""});m.c("stag-d",function(){h.b.a.api=0;e.e=0;e.F=0})},na:function(){var a=window._hmt||
[];if(!a||f.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var p=arguments[k];f.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},pa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,s=b.length;p<s;p++){var f=b[p];
d.test(f[0])?e.p.push(f):e.M(f)}a.cmd[c.id]={push:e.M}},qa:function(){if(0<e.p.length)for(var a=0,b=e.p.length;a<b;a++)e.M(e.p[a]);e.p=t},M:function(a){var b=a[0];if(e.hasOwnProperty(b)&&f.d(e[b],"Function"))e[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(e.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||r===a))e.e|=2,h.b.U=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){e.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.K?(h.b.a.nv=0,h.b.a.st=
4):h.b.K=r;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];e.W||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(e.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],f=a[4]||3;if(0<d&&6>d&&0<f&&4>f){e.F++;for(var p=(h.b.a.cv||"*").split("!"),s=p.length;s<d-1;s++)p.push("*");p[d-1]=f+"*"+b(a[2])+
"*"+b(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ia("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],e.W=r)},_trackOrder:function(b){b=b[1];f.d(b,"Object")&&(a(b),e.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=b[1];f.d(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(e.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var l=function(a){var b=h.b.a.rt;e.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},m=b.length;if(900>=m)l.call(this,b);else for(var m=Math.ceil(m/900),p="block|"+Math.round(Math.random()*
g.r).toString(16)+"|"+m+"|",s=[],u=0;u<m;u++)s.push(u),s.push(b.substring(900*u,900*u+900)),l.call(this,p+s.join("|")),s=[]}},_setUserId:function(a){a=a[1];n.Ha();n.Oa(a)}};e.init();h.fa=e;return h.fa})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.U=r,this.K=w,this.init())}var b=mt.url,f=mt.$,d=mt.P,g=mt.lang,m=mt.cookie,n=mt.i,e=mt.localStorage,k=mt.sessionStorage,l=h.s,v=h.z;a.prototype={L:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},X:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},A:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.X(a,c.dm[d]))return r}else{var f=b.T(a);if(f&&this.L(f,c.dm[d]))return r}return w},J:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.L(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},S:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.X(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ya:function(){if(!document.referrer)return l.k-l.o>c.vdur?1:4;var a=
w;this.A(document.referrer)&&this.A(document.location.href)?a=r:(a=b.T(document.referrer),a=this.L(a||"",document.location.hostname));return a?l.k-l.o>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||k.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.J(),path:this.S(),I:d}),d?e.set(a,b,d):k.set(a,b)}catch(f){}},Ia:function(a){try{m.set(a,"",{domain:this.J(),path:this.S(),I:-1}),k.remove(a),e.remove(a)}catch(b){}},Ma:function(){var a,b,d,f,e;l.o=this.getData("Hm_lpvt_"+
c.id)||0;13===l.o.length&&(l.o=Math.round(l.o/1E3));b=this.ya();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13===f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<l.k-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(l.k);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=l.k,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,l.k);d=l.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.A(document.location.href)&&
(""===document.referrer||this.A(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},Z:function(){for(var a=[],b=this.a.et,d=0,f=l.aa.length;d<f;d++){var e=l.aa[d],g=this.a[e];"undefined"!==typeof g&&""!==g&&("tt"!==e||"tt"===e&&0===b)&&a.push(e+"="+encodeURIComponent(g))}switch(b){case 0:a.push("sn="+l.R);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+l.R);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},Na:function(){this.Ma();
this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Ja;this.a.cl=n.colorDepth+"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.za();this.a.v="1.2.13";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.f(a,l.Da)||"";this.a.cp=b.f(a,l.Ea)||b.f(a,l.Ra)||"";this.a.cw=b.f(a,l.Ca)||b.f(a,l.Ta)||"";this.a.ci=b.f(a,
l.Aa)||b.f(a,l.Qa)||"";this.a.cf=b.f(a,l.Fa)||b.f(a,l.Sa)||"";this.a.cu=b.f(a,l.Ba)||b.f(a,l.Pa)||""},init:function(){try{this.Na(),0===this.a.nv?this.La():this.O(".*"),h.b=this,this.ga(),v.w("pv-b"),this.Ka()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(l.C+"//"+l.N+"?"+b.join("&"))}},Ka:function(){function a(){v.w("pv-d")}this.U?(this.K=r,this.a.et=0,this.a.ep="",this.h(a)):
a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*l.r);v.w("stag-b");var d=l.C+"//"+l.N+"?"+b.Z();v.w("stag-d");b.da(d);f.log(d,function(d){b.O(d);g.d(a,"Function")&&a.call(b)})},ga:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),f=-1<document.referrer.indexOf(l.ea),e=b.f(a,"jn"),g=/^heatlink$|^select$/.test(e);a&&(d.test(a)&&f&&g)&&(this.a.rnd=Math.round(Math.random()*l.r),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset",
"utf-8"),a.setAttribute("src",l.protocol+"//"+c.js+e+".js?"+this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,e))},da:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},O:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+
"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},La:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){f.log(l.C+"//"+decodeURIComponent(b),function(b){a.O(b)})},e=0,g=b.length;e<g;e++)d(b[e])}};return new a})();
(function(){var a=mt.m,b=mt.event,f=mt.url,d=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=t;a.Y(function(){n=+new Date});var e=function(){var a,b,e;e=m("navigation");b=m("request");e={netAll:b.start-e.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-e.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=t;b=t;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])u=f.f(a,"qid"),b=f.f(a,"click_t");a=u;e.qid=a!=t?a:"";b!=t?(e.bdDom=n?n-b:0,e.bdRun=g-b,e.bdDef=m("navigation").start-b):(e.bdDom=0,e.bdRun=0,e.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(e);h.b.h()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(k){}})();
(function(){var a=mt.i,b=mt.lang,f=mt.event,d=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.V||7<a.Ga)&&c.cvcc)){var g,m,n,e,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},l=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},v=function(a,e){var f={};f.n=g;f.t="clk";f.v=a;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";n.test(k)?(f.sn="mediate",
f.snv=k):b.d(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.h();for(f=+new Date;400>=+new Date-f;);};if(c.med)m="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,e={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,f,e=0,g=b.length;e<g;e++)d=b[e],f=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(f)||n.test(d))&&a.push(b[e]);return a}};else if(c.cvcc){m="/other-comm";g="other";n=c.cvcc.q||q;var p=c.cvcc.id||q;e={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],n!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||p.test(d))&&
a.push(b[g])):(n.test(e)||n.test(f))&&a.push(b[g])):p!==q&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof e&&"undefined"!==typeof n){var s;m+=/\/$/.test(m)?"":"/";var u=function(a,d){if(s===d)return v(m+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(s===d[e])return v(m+a+"/"+(e+1),d[e]),w};f.c(document,"mousedown",function(a){a=a||window.event;s=a.target||a.srcElement;var d={};for(l(e,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});s&&
s!==document&&l(d,u)!==w;)s=s.parentNode})}}})();(function(){var a=mt.m,b=mt.lang,f=mt.event,d=mt.j;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={ca:function(){for(var b=c.cvcf.length,d,e=0;e<b;e++)(d=a.sa(decodeURIComponent(c.cvcf[e])))&&f.c(d,"click",g.oa())},oa:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.h()}}};a.Y(function(){g.ca()})}})();
(function(){var a=mt.event,b=mt.j;if(c.med&&"undefined"!==typeof h.b){var f=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=b.stringify(d);h.b.h()};a.c(document,"click",function(){d.clk++});a.c(document,"keyup",function(){d.kb=1});a.c(window,"scroll",function(){d.sb++});a.c(window,"unload",function(){d.t=+new Date-f;g()});a.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
