function floor_report(){var Q='bootstrap',R='begin',S='gwt.codesvr.floor_report=',T='gwt.codesvr=',U='floor_report',V='startup',W='DUMMY',X=0,Y=1,Z='iframe',$='javascript:""',_='position:absolute; width:0; height:0; border:none; left: -1000px;',ab=' top: -1000px;',bb='CSS1Compat',cb='<!doctype html>',db='',eb='<html><head><\/head><body><\/body><\/html>',fb='undefined',gb='DOMContentLoaded',hb=50,ib='Chrome',jb='eval("',kb='");',lb='script',mb='javascript',nb='moduleStartup',ob='moduleRequested',pb='Failed to load ',qb='head',rb='meta',sb='name',tb='floor_report::',ub='::',vb='gwt:property',wb='content',xb='=',yb='gwt:onPropertyErrorFn',zb='Bad handler "',Ab='" for "gwt:onPropertyErrorFn"',Bb='gwt:onLoadErrorFn',Cb='" for "gwt:onLoadErrorFn"',Db='#',Eb='?',Fb='/',Gb='img',Hb='clear.cache.gif',Ib='baseUrl',Jb='floor_report.nocache.js',Kb='base',Lb='//',Mb='locale',Nb='default',Ob='locale=',Pb=7,Qb='&',Rb='__gwt_Locale',Sb='_',Tb='Unexpected exception in locale detection, using default: ',Ub=2,Vb='mgwt.density',Wb='mid',Xb=1.5,Yb='xhigh',Zb='high',$b='mgwt.formfactor',_b='formfactor',ac='iphone',bc='ipod',cc='phone',dc='ipad',ec='tablet',fc='android',gc='mobile',hc='desktop',ic='selectingPermutation',jc='floor_report.devmode.js',kc='217165C2EED274603A3B48417CEA588B',lc=':1',mc=':2',nc='iw',oc='2F53A9FBFBB617B5C946DFA69B79541D',pc='en',qc='30998E9A7F1D7619BD5D36227F87CC92',rc=':3',sc=':4',tc=':5',uc='9ADF04CA207733B25583ACA09A8C8DB9',vc='B69F1129B9958CDF4A49F13FC7CA6C8E',wc='F721413870E2B04AC4C399B79EBA0D97',xc=':',yc=10,zc='.cache.js',Ac='link',Bc='rel',Cc='stylesheet',Dc='href',Ec='loadExternalRefs',Fc='gwt/standard/standard.css',Gc='end',Hc='http:',Ic='file:',Jc='_gwt_dummy_',Kc='__gwtDevModeHook:floor_report',Lc='Ignoring non-whitelisted Dev Mode URL: ',Mc=':moduleBase';var q=window;var r=document;t(Q,R);function s(){var a=q.location.search;return a.indexOf(S)!=-1||a.indexOf(T)!=-1}
function t(a,b){if(q.__gwtStatsEvent){q.__gwtStatsEvent({moduleName:U,sessionId:q.__gwtStatsSessionId,subSystem:V,evtGroup:a,millis:(new Date).getTime(),type:b})}}
floor_report.__sendStats=t;floor_report.__moduleName=U;floor_report.__errFn=null;floor_report.__moduleBase=W;floor_report.__softPermutationId=X;floor_report.__computePropValue=null;floor_report.__getPropMap=null;floor_report.__installRunAsyncCode=function(){};floor_report.__gwtStartLoadingFragment=function(){return null};floor_report.__gwt_isKnownPropertyValue=function(){return false};floor_report.__gwt_getMetaProperty=function(){return null};var u=null;var v=q.__gwt_activeModules=q.__gwt_activeModules||{};v[U]={moduleName:U};floor_report.__moduleStartupDone=function(e){var f=v[U].bindings;v[U].bindings=function(){var a=f?f():{};var b=e[floor_report.__softPermutationId];for(var c=X;c<b.length;c++){var d=b[c];a[d[X]]=d[Y]}return a}};var w;function A(){B();return w}
function B(){if(w){return}var a=r.createElement(Z);a.src=$;a.id=U;a.style.cssText=_+ab;a.tabIndex=-1;r.body.appendChild(a);w=a.contentDocument;if(!w){w=a.contentWindow.document}w.open();var b=document.compatMode==bb?cb:db;w.write(b+eb);w.close()}
function C(k){function l(a){function b(){if(typeof r.readyState==fb){return typeof r.body!=fb&&r.body!=null}return /loaded|complete/.test(r.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(r.removeEventListener){r.removeEventListener(gb,d,false)}if(e){clearInterval(e)}}}
if(r.addEventListener){r.addEventListener(gb,d,false)}var e=setInterval(function(){if(b()){d()}},hb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=A();var f=e.body;var g;if(navigator.userAgent.indexOf(ib)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(jb));for(var i=X;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Y,j.length-Y)))}h.appendChild(e.createTextNode(kb));g=e.createElement(lb);g.language=mb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=X;i<c.length;i++){g=e.createElement(lb);g.language=mb;g.text=c[i];f.appendChild(g);d(f,g)}}}
floor_report.onScriptDownloaded=function(a){l(function(){m(a)})};t(nb,ob);var n=r.createElement(lb);n.src=k;if(floor_report.__errFn){n.onerror=function(){floor_report.__errFn(U,new Error(pb+code))}}r.getElementsByTagName(qb)[X].appendChild(n)}
floor_report.__startLoadingFragment=function(a){return G(a)};floor_report.__installRunAsyncCode=function(a){var b=A();var c=b.body;var d=b.createElement(lb);d.language=mb;d.text=a;c.appendChild(d);c.removeChild(d)};function D(){var c={};var d;var e;var f=r.getElementsByTagName(rb);for(var g=X,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(sb),k;if(j){j=j.replace(tb,db);if(j.indexOf(ub)>=X){continue}if(j==vb){k=i.getAttribute(wb);if(k){var l,m=k.indexOf(xb);if(m>=X){j=k.substring(X,m);l=k.substring(m+Y)}else{j=k;l=db}c[j]=l}}else if(j==yb){k=i.getAttribute(wb);if(k){try{d=eval(k)}catch(a){alert(zb+k+Ab)}}}else if(j==Bb){k=i.getAttribute(wb);if(k){try{e=eval(k)}catch(a){alert(zb+k+Cb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};u=d;floor_report.__errFn=e}
function F(){function e(a){var b=a.lastIndexOf(Db);if(b==-1){b=a.length}var c=a.indexOf(Eb);if(c==-1){c=a.length}var d=a.lastIndexOf(Fb,Math.min(c,b));return d>=X?a.substring(X,d+Y):db}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=r.createElement(Gb);b.src=a+Hb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ib);if(a!=null){return a}return db}
function h(){var a=r.getElementsByTagName(lb);for(var b=X;b<a.length;++b){if(a[b].src.indexOf(Jb)!=-1){return e(a[b].src)}}return db}
function i(){var a=r.getElementsByTagName(Kb);if(a.length>X){return a[a.length-Y].href}return db}
function j(){var a=r.location;return a.href==a.protocol+Lb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==db){k=h()}if(k==db){k=i()}if(k==db&&j()){k=e(r.location.href)}k=f(k);return k}
function G(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return floor_report.__moduleBase+a}
function H(){var i=[];var j=X;function k(a,b){var c=i;for(var d=X,e=a.length-Y;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var l=[];var m=[];function n(a){var b=m[a](),c=l[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(u){u(a,d,b)}throw null}
m[Mb]=function(){var b=null;var c=Nb;try{if(!b){var d=location.search;var e=d.indexOf(Ob);if(e>=X){var f=d.substring(e+Pb);var g=d.indexOf(Qb,e);if(g<X){g=d.length}b=d.substring(e+Pb,g)}}if(!b){b=__gwt_getMetaProperty(Mb)}if(!b){b=q[Rb]}if(b){c=b}while(b&&!__gwt_isKnownPropertyValue(Mb,b)){var h=b.lastIndexOf(Sb);if(h<X){b=null;break}b=b.substring(X,h)}}catch(a){alert(Tb+a)}q[Rb]=c;return b||Nb};l[Mb]={'default':X,en:Y,iw:Ub};m[Vb]=function(){if(!window.devicePixelRatio){return Wb}if(window.devicePixelRatio>Xb){return Yb}else if(window.devicePixelRatio>Y){return Zb}return Wb};l[Vb]={high:X,mid:Y,xhigh:Ub};m[$b]=function(){var a=location.search;var b=a.indexOf(_b);if(b>=X){var c=a.substring(b);var d=c.indexOf(xb)+Y;var e=c.indexOf(Qb);if(e==-1){e=c.length}return c.substring(d,e)}var f=navigator.userAgent.toLowerCase();if(f.indexOf(ac)!=-1||f.indexOf(bc)!=-1){return cc}else if(f.indexOf(dc)!=-1){return ec}else if(f.indexOf(fc)!=-1){if(f.indexOf(gc)!=-1){return cc}else{return ec}}return hc};l[$b]={desktop:X,phone:Y,tablet:Ub};__gwt_isKnownPropertyValue=function(a,b){return b in l[a]};floor_report.__getPropMap=function(){var a={};for(var b in l){if(l.hasOwnProperty(b)){a[b]=n(b)}}return a};floor_report.__computePropValue=n;q.__gwt_activeModules[U].bindings=floor_report.__getPropMap;t(Q,ic);if(s()){return G(jc)}var o;try{k([Nb,Zb,hc],kc);k([Nb,Wb,hc],kc);k([Nb,Yb,hc],kc);k([Nb,Zb,hc],kc+lc);k([Nb,Wb,hc],kc+lc);k([Nb,Yb,hc],kc+lc);k([Nb,Zb,hc],kc+mc);k([Nb,Wb,hc],kc+mc);k([Nb,Yb,hc],kc+mc);k([nc,Zb,hc],oc);k([nc,Wb,hc],oc);k([nc,Yb,hc],oc);k([nc,Zb,hc],oc+lc);k([nc,Wb,hc],oc+lc);k([nc,Yb,hc],oc+lc);k([nc,Zb,hc],oc+mc);k([nc,Wb,hc],oc+mc);k([nc,Yb,hc],oc+mc);k([pc,Zb,cc],qc);k([pc,Zb,ec],qc);k([pc,Wb,cc],qc);k([pc,Wb,ec],qc);k([pc,Yb,cc],qc);k([pc,Yb,ec],qc);k([pc,Zb,cc],qc+lc);k([pc,Zb,ec],qc+lc);k([pc,Wb,cc],qc+lc);k([pc,Wb,ec],qc+lc);k([pc,Yb,cc],qc+lc);k([pc,Yb,ec],qc+lc);k([pc,Zb,cc],qc+mc);k([pc,Zb,ec],qc+mc);k([pc,Wb,cc],qc+mc);k([pc,Wb,ec],qc+mc);k([pc,Yb,cc],qc+mc);k([pc,Yb,ec],qc+mc);k([pc,Zb,cc],qc+rc);k([pc,Zb,ec],qc+rc);k([pc,Wb,cc],qc+rc);k([pc,Wb,ec],qc+rc);k([pc,Yb,cc],qc+rc);k([pc,Yb,ec],qc+rc);k([pc,Zb,cc],qc+sc);k([pc,Zb,ec],qc+sc);k([pc,Wb,cc],qc+sc);k([pc,Wb,ec],qc+sc);k([pc,Yb,cc],qc+sc);k([pc,Yb,ec],qc+sc);k([pc,Zb,cc],qc+tc);k([pc,Zb,ec],qc+tc);k([pc,Wb,cc],qc+tc);k([pc,Wb,ec],qc+tc);k([pc,Yb,cc],qc+tc);k([pc,Yb,ec],qc+tc);k([Nb,Zb,cc],uc);k([Nb,Zb,ec],uc);k([Nb,Wb,cc],uc);k([Nb,Wb,ec],uc);k([Nb,Yb,cc],uc);k([Nb,Yb,ec],uc);k([Nb,Zb,cc],uc+lc);k([Nb,Zb,ec],uc+lc);k([Nb,Wb,cc],uc+lc);k([Nb,Wb,ec],uc+lc);k([Nb,Yb,cc],uc+lc);k([Nb,Yb,ec],uc+lc);k([Nb,Zb,cc],uc+mc);k([Nb,Zb,ec],uc+mc);k([Nb,Wb,cc],uc+mc);k([Nb,Wb,ec],uc+mc);k([Nb,Yb,cc],uc+mc);k([Nb,Yb,ec],uc+mc);k([Nb,Zb,cc],uc+rc);k([Nb,Zb,ec],uc+rc);k([Nb,Wb,cc],uc+rc);k([Nb,Wb,ec],uc+rc);k([Nb,Yb,cc],uc+rc);k([Nb,Yb,ec],uc+rc);k([Nb,Zb,cc],uc+sc);k([Nb,Zb,ec],uc+sc);k([Nb,Wb,cc],uc+sc);k([Nb,Wb,ec],uc+sc);k([Nb,Yb,cc],uc+sc);k([Nb,Yb,ec],uc+sc);k([Nb,Zb,cc],uc+tc);k([Nb,Zb,ec],uc+tc);k([Nb,Wb,cc],uc+tc);k([Nb,Wb,ec],uc+tc);k([Nb,Yb,cc],uc+tc);k([Nb,Yb,ec],uc+tc);k([pc,Zb,hc],vc);k([pc,Wb,hc],vc);k([pc,Yb,hc],vc);k([pc,Zb,hc],vc+lc);k([pc,Wb,hc],vc+lc);k([pc,Yb,hc],vc+lc);k([pc,Zb,hc],vc+mc);k([pc,Wb,hc],vc+mc);k([pc,Yb,hc],vc+mc);k([nc,Zb,cc],wc);k([nc,Zb,ec],wc);k([nc,Wb,cc],wc);k([nc,Wb,ec],wc);k([nc,Yb,cc],wc);k([nc,Yb,ec],wc);k([nc,Zb,cc],wc+lc);k([nc,Zb,ec],wc+lc);k([nc,Wb,cc],wc+lc);k([nc,Wb,ec],wc+lc);k([nc,Yb,cc],wc+lc);k([nc,Yb,ec],wc+lc);k([nc,Zb,cc],wc+mc);k([nc,Zb,ec],wc+mc);k([nc,Wb,cc],wc+mc);k([nc,Wb,ec],wc+mc);k([nc,Yb,cc],wc+mc);k([nc,Yb,ec],wc+mc);k([nc,Zb,cc],wc+rc);k([nc,Zb,ec],wc+rc);k([nc,Wb,cc],wc+rc);k([nc,Wb,ec],wc+rc);k([nc,Yb,cc],wc+rc);k([nc,Yb,ec],wc+rc);k([nc,Zb,cc],wc+sc);k([nc,Zb,ec],wc+sc);k([nc,Wb,cc],wc+sc);k([nc,Wb,ec],wc+sc);k([nc,Yb,cc],wc+sc);k([nc,Yb,ec],wc+sc);k([nc,Zb,cc],wc+tc);k([nc,Zb,ec],wc+tc);k([nc,Wb,cc],wc+tc);k([nc,Wb,ec],wc+tc);k([nc,Yb,cc],wc+tc);k([nc,Yb,ec],wc+tc);o=i[n(Mb)][n(Vb)][n($b)];var p=o.indexOf(xc);if(p!=-1){j=parseInt(o.substring(p+Y),yc);o=o.substring(X,p)}}catch(a){}floor_report.__softPermutationId=j;return G(o+zc)}
function I(){if(!q.__gwt_stylesLoaded){q.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=r.createElement(Ac);b.setAttribute(Bc,Cc);b.setAttribute(Dc,G(a));r.getElementsByTagName(qb)[X].appendChild(b);__gwt_stylesLoaded[a]=true}}
t(Ec,R);c(Fc);t(Ec,Gc)}
D();floor_report.__moduleBase=F();v[U].moduleBase=floor_report.__moduleBase;var J=H();if(q){var K=!!(q.location.protocol==Hc||q.location.protocol==Ic);q.__gwt_activeModules[U].canRedirect=K;function L(){var b=Jc;try{q.sessionStorage.setItem(b,b);q.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(K&&L()){var M=Kc;var N=q.sessionStorage[M];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(N)){if(N&&(window.console&&console.log)){console.log(Lc+N)}N=db}if(N&&!q[M]){q[M]=true;q[M+Mc]=F();var O=r.createElement(lb);O.src=N;var P=r.getElementsByTagName(qb)[X];P.insertBefore(O,P.firstElementChild||P.children[X]);return false}}}I();t(Q,Gc);C(J);return true}
floor_report.succeeded=floor_report();