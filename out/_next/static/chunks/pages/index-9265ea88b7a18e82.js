(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7229)}])},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let a=r(8754),n=r(1757)._(r(7294)),o=a._(r(3935)),i=a._(r(4764)),l=r(8484),s=r(2666),c=r(4845);r(9982);let d=r(4167),u=a._(r(4148)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,a,n,o){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function p(e){let[t,r]=n.version.split(".",2),a=parseInt(t,10),o=parseInt(r,10);return a>18||18===a&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:o,height:i,width:l,decoding:s,className:c,style:d,fetchPriority:u,placeholder:f,loading:g,unoptimized:h,fill:b,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:w,onLoad:_,onError:j,...k}=e;return n.default.createElement("img",{...k,...p(u),loading:g,width:l,height:i,decoding:s,"data-nimg":b?"fill":"1",className:c,style:d,sizes:o,srcSet:a,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,f,x,v,y,h))},[r,f,x,v,y,j,h,t]),onLoad:e=>{m(e.currentTarget,f,x,v,y,h)},onError:e=>{w(!0),"empty"!==f&&y(!0),j&&j(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):n.default.createElement(i.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...a}))}let b=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(d.RouterContext),a=(0,n.useContext)(c.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=f||a||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:i,onLoadingComplete:m}=e,p=(0,n.useRef)(i);(0,n.useEffect)(()=>{p.current=i},[i]);let b=(0,n.useRef)(m);(0,n.useEffect)(()=>{b.current=m},[m]);let[x,v]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),{props:_,meta:j}=(0,l.getImgProps)(e,{defaultLoader:u.default,imgConf:o,blurComplete:x,showAltText:y});return n.default.createElement(n.default.Fragment,null,n.default.createElement(g,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:p,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:w,ref:t}),j.priority?n.default.createElement(h,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(9982);let a=r(2528),n=r(2666);function o(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:b,height:x,fill:v=!1,style:y,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:k,fetchPriority:N,layout:S,objectFit:z,objectPosition:E,lazyBoundary:C,lazyRoot:P,...I}=e,{imgConf:O,showAltText:R,blurComplete:M,defaultLoader:D}=t,L=O||n.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}let A=I.loader||D;delete I.loader,delete I.srcSet;let F="__next_img_default"in A;if(F){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...a}=t;return e(a)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!u&&(u=t)}let B="",G=i(b),T=i(x);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,k=k||e.blurDataURL,B=e.src,!v){if(G||T){if(G&&!T){let t=G/e.width;T=Math.round(e.height*t)}else if(!G&&T){let t=T/e.height;G=Math.round(e.width*t)}}else G=e.width,T=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(N="high");let U=i(h),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},R?{}:{color:"transparent"},y),q=M||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:G,heightInt:T,blurWidth:s,blurHeight:c,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+j+'")',J=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},X=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:o,sizes:i,loader:l}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,i),d=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,a)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:a+1)+c).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:G,quality:U,sizes:u,loader:A});return{props:{...I,loading:W?"lazy":p,fetchPriority:N,width:G,height:T,decoding:"async",className:g,style:{...V,...J},sizes:X.sizes,srcSet:X.srcSet,src:X.src},meta:{unoptimized:f,priority:m,placeholder:j,fill:v}}}},2528:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:i}=e,l=a?40*a:t,s=n?40*n:r,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return s},default:function(){return c}});let a=r(8754),n=r(8484),o=r(9982),i=r(1100),l=a._(r(4148)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=i.Image},4148:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},7229:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(5893),n=r(3465),o=r.n(n),i=r(5675),l=r.n(i);function s(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(o().className),children:[(0,a.jsxs)("div",{className:"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,a.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by editing\xa0",(0,a.jsx)("code",{className:"font-mono font-bold",children:"src/pages/index.tsx"})]}),(0,a.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,a.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,a.jsx)(l(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,a.jsxs)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},3465:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},5675:function(e,t,r){e.exports=r(256)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);