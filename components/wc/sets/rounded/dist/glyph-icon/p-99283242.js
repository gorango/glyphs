let e,t,n=e=>console.error(e),l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),a=new WeakMap,u=e=>"sc-"+e.o,f={},$=e=>"object"==(e=typeof e)||"function"===e,y=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!$(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?d(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,c.length>0&&(i.$=c),i},d=(e,t)=>({t:0,h:e,i:t,p:null,$:null,u:null}),h={},p=(e,t,n,l,s,o)=>{if(n!==l){let c=_(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=b(n),o=b(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else{const r=$(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},m=/\s/,b=e=>e?e.split(m):[],w=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||f,c=t.u||f;for(l in o)l in c||p(s,l,o[l],void 0,n,t.t);for(l in c)p(s,l,o[l],c[l],n,t.t)},g=(t,n,l)=>{let s,c,r=n.$[l],i=0;if(null!==r.i)s=r.p=o.createTextNode(r.i);else if(s=r.p=o.createElement(r.h),w(null,r,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),r.$)for(i=0;i<r.$.length;++i)c=g(t,r,i),c&&s.appendChild(c);return s},j=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=g(null,l,o),r&&(s[o].p=r,i.insertBefore(r,n)))},v=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},S=(e,t)=>e.h===t.h,M=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(w(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:S(i,f)?(M(i,f),i=t[++o],f=l[++c]):S(a,$)?(M(a,$),a=t[--r],$=l[--u]):S(i,$)?(M(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],$=l[--u]):S(a,f)?(M(a,f),e.insertBefore(a.p,i.p),a=t[--r],f=l[++c]):(s=g(t&&t[c],n,c),f=l[++c],s&&i.p.parentNode.insertBefore(s,i.p));o>r?j(e,null==l[u+1]?null:l[u+1].p,n,l,c,u):c>u&&v(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),j(n,null,t,s,0,s.length-1)):null!==l&&v(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=e=>F(e).m,C=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},O=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.j),Y((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.v;return H(void 0,(()=>x(e,n,t)))},x=async(n,l,s)=>{const c=n.m,r=c["s-rc"];s&&(e=>{const t=e.S,n=e.m,l=t.t,s=((e,t)=>{let n=u(t),l=D.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=a.get(e=e.head||e);s||a.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n);((n,l)=>{const s=n.m,o=n.S,c=n.M||d(null,null),r=(e=>e&&e.h===h)(l)?l:y(null,null,l);t=s.tagName,o.k&&(r.u=r.u||{},o.k.map((([e,t])=>r.u[t]=s[e]))),r.h=null,r.t|=4,n.M=r,r.p=c.p=s.shadowRoot||s,e=s["s-sc"],M(c,r)})(n,E(n,l)),r&&(r.map((e=>e())),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>T(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},E=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){n(e)}return t},T=e=>{const t=e.m,n=e.j;64&e.t||(e.t|=64,L(t),e.C(t),n||A()),e.g&&(e.g(),e.g=void 0),512&e.t&&X((()=>O(e,!1))),e.t&=-517},A=()=>{L(o.documentElement),X((()=>(e=>{const t=c.ce("appload",{detail:{namespace:"glyph-icon"}});return e.dispatchEvent(t),t})(s)))},H=(e,t)=>e&&e.then?e.then(t):t(),L=e=>e.classList.add("hydrated"),R=(e,t,l)=>{if(t.O){e.watchers&&(t.P=e.watchers);const s=Object.entries(t.O),o=e.prototype;if(s.map((([e,[s]])=>{(31&s||2&l&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>F(this).T.get(t))(0,e)},set(l){((e,t,l,s)=>{const o=F(e),c=o.T.get(t),r=o.t,i=o.v;if(l=((e,t)=>null==e||$(e)?e:1&t?e+"":e)(l,s.O[t][0]),!(8&r&&void 0!==c||l===c)&&(o.T.set(t,l),i)){if(s.P&&128&r){const e=s.P[t];e&&e.map((e=>{try{i[e](l,c,t)}catch(e){n(e)}}))}2==(18&r)&&O(o,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const n=new Map;o.attributeChangedCallback=function(e,t,l){c.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.k.push([e,s]),s}))}}return e},U=e=>{((e,t)=>{if(e&&e[t])try{e[t](void 0)}catch(e){n(e)}})(e,"connectedCallback")},W=(e,t={})=>{const l=[],r=t.exclude||[],a=s.customElements,f=o.head,$=f.querySelector("meta[charset]"),y=o.createElement("style"),d=[];let h,p=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],o:t[1],O:t[2],A:t[3]};s.O=t[2],s.k=[],s.P={};const o=s.o,f=class extends HTMLElement{constructor(e){super(e),V(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?d.push(this):c.jmp((()=>(e=>{if(0==(1&c.t)){const t=F(e),l=t.S,s=()=>{};if(1&t.t)U(t.v);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.j=n);break}}l.O&&Object.entries(l.O).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,l,s,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=B(l)).then){const e=()=>{};o=await o,e()}o.isProxied||(l.P=o.watchers,R(o,l,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){n(e)}t.t&=-9,t.t|=128,e(),U(t.v)}if(o.style){let e=o.style;const t=u(l);if(!D.has(t)){const n=()=>{};((e,t,n)=>{let l=D.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,D.set(e,l)})(t,e,!!(1&l.t)),n()}}}const c=t.j,r=()=>O(t,!0);c&&c["s-rc"]?c["s-rc"].push(r):r()})(0,t,l)}s()}})(this)))}disconnectedCallback(){c.jmp((()=>{}))}componentOnReady(){return F(this).H}};s.L=e[0],r.includes(o)||a.get(o)||(l.push(o),a.define(o,R(f,s,1)))})))),y.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),f.insertBefore(y,$?$.nextSibling:f.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):c.jmp((()=>h=setTimeout(A,30)))},q=new WeakMap,F=e=>q.get(e),N=(e,t)=>q.set(t.v=e,t),V=(e,t)=>{const n={t:0,m:e,S:t,T:new Map};return n.H=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},_=(e,t)=>t in e,z=new Map,B=e=>{const t=e.o.replace(/-/g,"_"),l=e.L,s=z.get(l);return s?s[t]:import(`./${l}.entry.js`).then((e=>(z.set(l,e),e[t])),n)},D=new Map,G=[],I=[],J=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?X(Q):c.raf(Q))},K=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){n(e)}e.length=0},Q=()=>{K(G),K(I),(l=G.length>0)&&c.raf(Q)},X=e=>r().then(e),Y=J(I,!0);export{h as H,W as b,k as g,y as h,r as p,N as r}