(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6954],{8624:function(e,t,n){e.exports=n(4522)},257:function(e,t,n){"use strict";var r=n(3205);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return u((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},102:function(e,t,n){"use strict";e.exports=n(257)},4727:function(e,t,n){"use strict";n.d(t,{$l:function(){return a},BN:function(){return A},DY:function(){return g},Fs:function(){return M},J$:function(){return q},JN:function(){return w},LI:function(){return L},PM:function(){return c},UG:function(){return U},W6:function(){return O},i_:function(){return i},ko:function(){return Z},kw:function(){return S},mf:function(){return s},o8:function(){return u},qC:function(){return N},s6:function(){return H},sj:function(){return P},u3:function(){return I},u_:function(){return J},w6:function(){return V},xD:function(){return K}});var r=n(3205);const o=()=>{},i=o(),a=Object,u=e=>e===i,s=e=>"function"==typeof e,c=(e,t)=>({...e,...t}),l=new WeakMap;let d=0;const f=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(a(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=l.get(e),o)return o;if(o=++d+"~",l.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=f(e[i])+",";l.set(e,o)}if(n==a){o="#";const t=a.keys(e).sort();for(;!u(i=t.pop());)u(e[i])||(o+=i+":"+f(e[i])+",");l.set(e,o)}}return o},g=new WeakMap,E={},v={},_="undefined",h=typeof window!=_,p=typeof document!=_,w=(e,t)=>{const n=g.get(e);return[()=>!u(t)&&e.get(t)||E,r=>{if(!u(t)){const o=e.get(t);t in v||(v[t]=o),n[5](t,c(o,r),o||E)}},n[6],()=>!u(t)&&t in v?v[t]:!u(t)&&e.get(t)||E]};let y=!0;const[m,R]=h&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[o,o],b={isOnline:()=>y,isVisible:()=>{const e=p&&document.visibilityState;return u(e)||"hidden"!==e}},T={initFocus:e=>(p&&document.addEventListener("visibilitychange",e),m("focus",e),()=>{p&&document.removeEventListener("visibilitychange",e),R("focus",e)}),initReconnect:e=>{const t=()=>{y=!0,e()},n=()=>{y=!1};return m("online",t),m("offline",n),()=>{R("online",t),R("offline",n)}}},V=!r.default.useId,O=!h||"Deno"in window,S=e=>h&&typeof window.requestAnimationFrame!=_?window.requestAnimationFrame(e):setTimeout(e,1),L=O?r.useEffect:r.useLayoutEffect,k="undefined"!==typeof navigator&&navigator.connection,C=!O&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),N=e=>{if(s(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?f(e):"",t]};let D=0;const I=()=>++D;var P={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function A(...e){const[t,n,r,o]=e,a=c({populateCache:!0,throwOnError:!0},"boolean"===typeof o?{revalidate:o}:o||{});let l=a.populateCache;const d=a.rollbackOnError;let f=a.optimisticData;const E=a.throwOnError;if(s(n)){const e=n,r=[],o=t.keys();for(const n of o)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&r.push(n);return Promise.all(r.map(v))}return v(n);async function v(n){const[o]=N(n);if(!o)return;const[c,v]=w(t,o),[_,h,p,y]=g.get(t),m=()=>{const e=_[o];return(s(a.revalidate)?a.revalidate(c().data,n):!1!==a.revalidate)&&(delete p[o],delete y[o],e&&e[0])?e[0](2).then((()=>c().data)):c().data};if(e.length<3)return m();let R,b=r;const T=I();h[o]=[T,0];const V=!u(f),O=c(),S=O.data,L=O._c,k=u(L)?S:L;if(V&&(f=s(f)?f(k,S):f,v({data:f,_c:k})),s(b))try{b=b(k)}catch(C){R=C}if(b&&s(b.then)){if(b=await b.catch((e=>{R=e})),T!==h[o][0]){if(R)throw R;return b}R&&V&&(e=>"function"===typeof d?d(e):!1!==d)(R)&&(l=!0,v({data:k,_c:i}))}if(l&&!R)if(s(l)){const e=l(b,k);v({data:e,error:i,_c:i})}else v({data:b,error:i,_c:i});if(h[o][1]=I(),Promise.resolve(m()).then((()=>{v({_c:i})})),!R)return b;if(E)throw R}}const j=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},F=(e,t)=>{if(!g.has(e)){const n=c(T,t),r={},a=A.bind(i,e);let u=o;const s={},l=(e,t)=>{const n=s[e]||[];return s[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);const o=s[t];if(o)for(const e of o)e(n,r)},f=()=>{if(!g.has(e)&&(g.set(e,[r,{},{},{},a,d,l]),!O)){const t=n.initFocus(setTimeout.bind(i,j.bind(i,r,0))),o=n.initReconnect(setTimeout.bind(i,j.bind(i,r,1)));u=()=>{t&&t(),o&&o(),g.delete(e)}}};return f(),[e,a,f,u]}return[e,g.get(e)[4]]},[M,x]=F(new Map),J=c({onLoadingSlow:o,onSuccess:o,onError:o,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!u(i)&&a>i||setTimeout(r,s,o)},onDiscarded:o,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:(e,t)=>f(e)==f(t),isPaused:()=>!1,cache:M,mutate:x,fallback:{}},b),W=(e,t)=>{const n=c(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=c(o,a))}return n},$=(0,r.createContext)({}),q=e=>{const{value:t}=e,n=(0,r.useContext)($),o=s(t),a=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),u=(0,r.useMemo)((()=>o?a:W(n,a)),[o,n,a]),l=a&&a.provider,d=(0,r.useRef)(i);l&&!d.current&&(d.current=F(l(u.cache||M),a));const f=d.current;return f&&(u.cache=f[0],u.mutate=f[1]),L((()=>{if(f)return f[2]&&f[2](),f[3]}),[]),(0,r.createElement)($.Provider,c(e,{value:u}))},U="$inf$",z=h&&window.__SWR_DEVTOOLS_USE__,Y=z?window.__SWR_DEVTOOLS_USE__:[],B=e=>s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],G=Y.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=N(t),[,,,o]=g.get(M);if(r.startsWith(U))return n(...e);const i=o[r];return u(i)?n(...e):(delete o[r],i)}),r))),H=e=>function(...t){const n=c(J,(0,r.useContext)($)),[o,i,a]=B(t),u=W(n,a);let s=e;const{use:l}=u,d=(l||[]).concat(G);for(let e=d.length;e--;)s=d[e](s);return s(o,i||u.fetcher||null,u)},Z=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},K=(e,t)=>(...n)=>{const[r,o,i]=B(n),a=(i.use||[]).concat(t);return e(r,o,{...i,use:a})};z&&(window.__SWR_DEVTOOLS_REACT__=r.default)},2402:function(e,t,n){"use strict";n.d(t,{J$:function(){return s}});var r=n(3205),o=n(102),i=n(4727);const a=r.default.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0},s=i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});(0,i.s6)(((e,t,n)=>{const{cache:s,compare:c,suspense:l,fallbackData:d,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:v,refreshWhenOffline:_,keepPreviousData:h}=n,[p,w,y,m]=i.DY.get(s),[R,b]=(0,i.qC)(e),T=(0,r.useRef)(!1),V=(0,r.useRef)(!1),O=(0,r.useRef)(R),S=(0,r.useRef)(t),L=(0,r.useRef)(n),k=()=>L.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,P]=(0,i.JN)(s,R),A=(0,r.useRef)({}).current,j=(0,i.o8)(d)?n.fallback[R]:d,F=(e,t)=>{for(const n in A){const r=n;if("data"===r){if(!c(e[r],t[r])){if(!(0,i.o8)(e[r]))return!1;if(!c(Y,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},M=(0,r.useMemo)((()=>{const e=!!R&&!!t&&((0,i.o8)(f)?!k().isPaused()&&!l&&(!!(0,i.o8)(g)||g):f),n=t=>{const n=(0,i.PM)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=N(),o=P(),a=n(r),u=r===o?a:n(o);let s=a;return[()=>{const e=n(N());return F(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>u]}),[s,R]),x=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>I(R,((t,n)=>{F(n,t)||e()}))),[s,R]),M[0],M[1]),J=!T.current,W=p[R]&&p[R].length>0,$=x.data,q=(0,i.o8)($)?j:$,U=x.error,z=(0,r.useRef)(q),Y=h?(0,i.o8)($)?z.current:$:q,B=!(W&&!(0,i.o8)(U))&&(J&&!(0,i.o8)(f)?f:!k().isPaused()&&(l?!(0,i.o8)(q)&&g:(0,i.o8)(q)||g)),G=!!(R&&t&&J&&B),H=(0,i.o8)(x.isValidating)?G:x.isValidating,Z=(0,i.o8)(x.isLoading)?G:x.isLoading,K=(0,r.useCallback)((async e=>{const t=S.current;if(!R||!t||V.current||k().isPaused())return!1;let r,o,a=!0;const u=e||{},s=!y[R]||!u.dedupe,l=()=>i.w6?!V.current&&R===O.current&&T.current:R===O.current,d={isValidating:!1,isLoading:!1},f=()=>{D(d)},g=()=>{const e=y[R];e&&e[1]===o&&delete y[R]},E={isValidating:!0};(0,i.o8)(N().data)&&(E.isLoading=!0);try{if(s&&(D(E),n.loadingTimeout&&(0,i.o8)(N().data)&&setTimeout((()=>{a&&l()&&k().onLoadingSlow(R,n)}),n.loadingTimeout),y[R]=[t(b),(0,i.u3)()]),[r,o]=y[R],r=await r,s&&setTimeout(g,n.dedupingInterval),!y[R]||y[R][1]!==o)return s&&l()&&k().onDiscarded(R),!1;d.error=i.i_;const e=w[R];if(!(0,i.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return f(),s&&l()&&k().onDiscarded(R),!1;const u=N().data;d.data=c(u,r)?u:r,s&&l()&&k().onSuccess(r,R,n)}catch(v){g();const e=k(),{shouldRetryOnError:t}=e;e.isPaused()||(d.error=v,s&&l()&&(e.onError(v,R,e),(!0===t||(0,i.mf)(t)&&t(v))&&(k().revalidateOnFocus&&k().revalidateOnReconnect&&!C()||e.onErrorRetry(v,R,e,(e=>{const t=p[R];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return a=!1,f(),!0}),[R,s]),Q=(0,r.useCallback)(((...e)=>(0,i.BN)(s,O.current,...e)),[]);if((0,i.LI)((()=>{S.current=t,L.current=n,(0,i.o8)($)||(z.current=$)})),(0,i.LI)((()=>{if(!R)return;const e=K.bind(i.i_,u);let t=0;const n=(0,i.ko)(R,p,((n,r={})=>{if(n==i.sj.FOCUS_EVENT){const n=Date.now();k().revalidateOnFocus&&n>t&&C()&&(t=n+k().focusThrottleInterval,e())}else if(n==i.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else{if(n==i.sj.MUTATE_EVENT)return K();if(n==i.sj.ERROR_REVALIDATE_EVENT)return K(r)}}));return V.current=!1,O.current=R,T.current=!0,D({_k:b}),B&&((0,i.o8)(q)||i.W6?e():(0,i.kw)(e)),()=>{V.current=!0,n()}}),[R]),(0,i.LI)((()=>{let e;function t(){const t=(0,i.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(n,t))}function n(){N().error||!v&&!k().isVisible()||!_&&!k().isOnline()?t():K(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[E,v,_,R]),(0,r.useDebugValue)(Y),l&&(0,i.o8)(q)&&R){if(!i.w6&&i.W6)throw new Error("Fallback data is required when using suspense in SSR.");S.current=t,L.current=n,V.current=!1;const e=m[R];if(!(0,i.o8)(e)){const t=Q(e);a(t)}if(!(0,i.o8)(U))throw U;{const e=K(u);(0,i.o8)(Y)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Q,get data(){return A.data=!0,Y},get error(){return A.error=!0,U},get isValidating(){return A.isValidating=!0,H},get isLoading(){return A.isLoading=!0,Z}}}))},1058:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d}});var r=n(3205),o=n(102),i=n(4727);const a=r.default.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});const s=(0,i.s6)(((e,t,n)=>{const{cache:s,compare:c,suspense:l,fallbackData:d,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:v,refreshWhenOffline:_,keepPreviousData:h}=n,[p,w,y,m]=i.DY.get(s),[R,b]=(0,i.qC)(e),T=(0,r.useRef)(!1),V=(0,r.useRef)(!1),O=(0,r.useRef)(R),S=(0,r.useRef)(t),L=(0,r.useRef)(n),k=()=>L.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,P]=(0,i.JN)(s,R),A=(0,r.useRef)({}).current,j=(0,i.o8)(d)?n.fallback[R]:d,F=(e,t)=>{for(const n in A){const r=n;if("data"===r){if(!c(e[r],t[r])){if(!(0,i.o8)(e[r]))return!1;if(!c(Y,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},M=(0,r.useMemo)((()=>{const e=!!R&&!!t&&((0,i.o8)(f)?!k().isPaused()&&!l&&(!!(0,i.o8)(g)||g):f),n=t=>{const n=(0,i.PM)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=N(),o=P(),a=n(r),u=r===o?a:n(o);let s=a;return[()=>{const e=n(N());return F(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>u]}),[s,R]),x=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>I(R,((t,n)=>{F(n,t)||e()}))),[s,R]),M[0],M[1]),J=!T.current,W=p[R]&&p[R].length>0,$=x.data,q=(0,i.o8)($)?j:$,U=x.error,z=(0,r.useRef)(q),Y=h?(0,i.o8)($)?z.current:$:q,B=!(W&&!(0,i.o8)(U))&&(J&&!(0,i.o8)(f)?f:!k().isPaused()&&(l?!(0,i.o8)(q)&&g:(0,i.o8)(q)||g)),G=!!(R&&t&&J&&B),H=(0,i.o8)(x.isValidating)?G:x.isValidating,Z=(0,i.o8)(x.isLoading)?G:x.isLoading,K=(0,r.useCallback)((async e=>{const t=S.current;if(!R||!t||V.current||k().isPaused())return!1;let r,o,a=!0;const u=e||{},s=!y[R]||!u.dedupe,l=()=>i.w6?!V.current&&R===O.current&&T.current:R===O.current,d={isValidating:!1,isLoading:!1},f=()=>{D(d)},g=()=>{const e=y[R];e&&e[1]===o&&delete y[R]},E={isValidating:!0};(0,i.o8)(N().data)&&(E.isLoading=!0);try{if(s&&(D(E),n.loadingTimeout&&(0,i.o8)(N().data)&&setTimeout((()=>{a&&l()&&k().onLoadingSlow(R,n)}),n.loadingTimeout),y[R]=[t(b),(0,i.u3)()]),[r,o]=y[R],r=await r,s&&setTimeout(g,n.dedupingInterval),!y[R]||y[R][1]!==o)return s&&l()&&k().onDiscarded(R),!1;d.error=i.i_;const e=w[R];if(!(0,i.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return f(),s&&l()&&k().onDiscarded(R),!1;const u=N().data;d.data=c(u,r)?u:r,s&&l()&&k().onSuccess(r,R,n)}catch(v){g();const e=k(),{shouldRetryOnError:t}=e;e.isPaused()||(d.error=v,s&&l()&&(e.onError(v,R,e),(!0===t||(0,i.mf)(t)&&t(v))&&(k().revalidateOnFocus&&k().revalidateOnReconnect&&!C()||e.onErrorRetry(v,R,e,(e=>{const t=p[R];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0}))))}return a=!1,f(),!0}),[R,s]),Q=(0,r.useCallback)(((...e)=>(0,i.BN)(s,O.current,...e)),[]);if((0,i.LI)((()=>{S.current=t,L.current=n,(0,i.o8)($)||(z.current=$)})),(0,i.LI)((()=>{if(!R)return;const e=K.bind(i.i_,u);let t=0;const n=(0,i.ko)(R,p,((n,r={})=>{if(n==i.sj.FOCUS_EVENT){const n=Date.now();k().revalidateOnFocus&&n>t&&C()&&(t=n+k().focusThrottleInterval,e())}else if(n==i.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else{if(n==i.sj.MUTATE_EVENT)return K();if(n==i.sj.ERROR_REVALIDATE_EVENT)return K(r)}}));return V.current=!1,O.current=R,T.current=!0,D({_k:b}),B&&((0,i.o8)(q)||i.W6?e():(0,i.kw)(e)),()=>{V.current=!0,n()}}),[R]),(0,i.LI)((()=>{let e;function t(){const t=(0,i.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(n,t))}function n(){N().error||!v&&!k().isVisible()||!_&&!k().isOnline()?t():K(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[E,v,_,R]),(0,r.useDebugValue)(Y),l&&(0,i.o8)(q)&&R){if(!i.w6&&i.W6)throw new Error("Fallback data is required when using suspense in SSR.");S.current=t,L.current=n,V.current=!1;const e=m[R];if(!(0,i.o8)(e)){const t=Q(e);a(t)}if(!(0,i.o8)(U))throw U;{const e=K(u);(0,i.o8)(Y)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Q,get data(){return A.data=!0,Y},get error(){return A.error=!0,U},get isValidating(){return A.isValidating=!0,H},get isLoading(){return A.isLoading=!0,Z}}})),c=e=>(0,i.qC)(e?e(0,null):null)[0],l=Promise.resolve(),d=(0,i.xD)(s,(e=>(t,n,a)=>{const u=(0,r.useRef)(!1),{cache:s,initialSize:d=1,revalidateAll:f=!1,persistSize:g=!1,revalidateFirstPage:E=!0,revalidateOnMount:v=!1,parallel:_=!1}=a,[,,,h]=i.DY.get(i.Fs);let p;try{p=c(t),p&&(p=i.UG+p)}catch(k){}const[w,y,m]=(0,i.JN)(s,p),R=(0,r.useCallback)((()=>(0,i.o8)(w()._l)?d:w()._l),[s,p,d]);(0,o.useSyncExternalStore)((0,r.useCallback)((e=>p?m(p,(()=>{e()})):()=>{}),[s,p]),R,R);const b=(0,r.useCallback)((()=>{const e=w()._l;return(0,i.o8)(e)?d:e}),[p,d]),T=(0,r.useRef)(b());(0,i.LI)((()=>{u.current?p&&y({_l:g?T.current:b()}):u.current=!0}),[p,s]);const V=v&&!u.current,O=e(p,(async e=>{const r=w()._i,o=w()._r;y({_r:i.i_});const u=[],c=b(),[l]=(0,i.JN)(s,e),d=l().data,g=[];let v=null;for(let p=0;p<c;++p){const[e,c]=(0,i.qC)(t(p,_?null:v));if(!e)break;const[l,w]=(0,i.JN)(s,e);let y=l().data;const m=f||r||(0,i.o8)(y)||E&&!p&&!(0,i.o8)(d)||V||d&&!(0,i.o8)(d[p])&&!a.compare(d[p],y);if(n&&("function"===typeof o?o(y,c):m)){const t=async()=>{if(e in h){const t=h[e];delete h[e],y=await t}else y=await n(c);w({data:y,_k:c}),u[p]=y};_?g.push(t):await t()}else u[p]=y;_||(v=y)}return _&&await Promise.all(g.map((e=>e()))),y({_i:i.i_}),u}),a),S=(0,r.useCallback)((function(e,t){const n="boolean"===typeof t?{revalidate:t}:t||{},r=!1!==n.revalidate;return p?(r&&((0,i.o8)(e)?y({_i:!0,_r:n.revalidate}):y({_i:!1,_r:n.revalidate})),arguments.length?O.mutate(e,{...n,revalidate:r}):O.mutate()):l}),[p,s]),L=(0,r.useCallback)((e=>{if(!p)return l;const[,n]=(0,i.JN)(s,p);let r;if((0,i.mf)(e)?r=e(b()):"number"==typeof e&&(r=e),"number"!=typeof r)return l;n({_l:r}),T.current=r;const o=[],[a]=(0,i.JN)(s,p);let u=null;for(let c=0;c<r;++c){const[e]=(0,i.qC)(t(c,u)),[n]=(0,i.JN)(s,e),r=e?n().data:i.i_;if((0,i.o8)(r))return S(a().data);o.push(r),u=r}return S(o)}),[p,s,S,b]);return{size:b(),setSize:L,mutate:S,get data(){return O.data},get error(){return O.error},get isValidating(){return O.isValidating},get isLoading(){return O.isLoading}}}))}}]);