(()=>{var e={};e.id=691,e.ids=[691],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4822:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7076:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(7546),r(2980),r(4286);var s=r(3904),n=r(445),i=r(6103),o=r.n(i),a=r(6163),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["customer",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7546)),"/Users/friendkub/Desktop/final/app/customer/[id]/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1337))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2980)),"/Users/friendkub/Desktop/final/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,4286,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1337))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/friendkub/Desktop/final/app/customer/[id]/page.js"],p="/customer/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/customer/[id]/page",pathname:"/customer/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3852:(e,t,r)=>{Promise.resolve().then(r.bind(r,5578))},5562:(e,t,r)=>{Promise.resolve().then(r.bind(r,9047))},5464:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3122,23)),Promise.resolve().then(r.t.bind(r,4324,23)),Promise.resolve().then(r.t.bind(r,628,23)),Promise.resolve().then(r.t.bind(r,2271,23)),Promise.resolve().then(r.t.bind(r,1658,23)),Promise.resolve().then(r.t.bind(r,7673,23))},5578:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var s=r(92),n=r(9199),i=r(3685),o=r(857),a=r(1590),l=r(7208),c=r(2094),d=r(5319),p=r(1017),u=r(1928),x=r(9067),m=r(9233),h=r(9548),f=r(3278),g=r(4637),j=r(9406);let v=["Profile","Account","Dashboard","Logout"];function b(){let e=(0,j.useRouter)(),[t,r]=n.useState(null),[b,y]=n.useState(null),k=()=>{y(null)};return s.jsx(i.Z,{position:"static",children:s.jsx(u.Z,{maxWidth:"xl",children:(0,s.jsxs)(a.Z,{disableGutters:!0,children:[s.jsx(g.Z,{sx:{display:{xs:"none",md:"flex"},mr:1}}),s.jsx(m.Z,{onClick:()=>e.push("/"),sx:{my:2,color:"white",display:"block"},children:s.jsx(c.Z,{variant:"h6",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"VMS"})},1),(0,s.jsxs)(o.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[s.jsx(l.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{r(e.currentTarget)},color:"inherit",children:s.jsx(p.Z,{})}),(0,s.jsxs)(d.Z,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!t,onClose:()=>{r(null)},sx:{display:{xs:"block",md:"none"}},children:[s.jsx(f.Z,{onClick:()=>e.push("/product"),children:s.jsx(c.Z,{sx:{textAlign:"center"},children:"Products"})},1),s.jsx(f.Z,{onClick:()=>e.push("/category"),children:s.jsx(c.Z,{sx:{textAlign:"center"},children:"Categories"})},2),s.jsx(f.Z,{onClick:()=>e.push("/customers"),children:s.jsx(c.Z,{sx:{textAlign:"center"},children:"Customers"})},3)]})]}),s.jsx(g.Z,{sx:{display:{xs:"flex",md:"none"},mr:1}}),s.jsx(c.Z,{variant:"h5",noWrap:!0,component:"a",href:"#app-bar-with-responsive-menu",sx:{mr:2,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"}),(0,s.jsxs)(o.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[s.jsx(m.Z,{onClick:()=>e.push("/product"),sx:{my:2,color:"white",display:"block"},children:"Products"},1),s.jsx(m.Z,{onClick:()=>e.push("/category"),sx:{my:2,color:"white",display:"block"},children:"Categories"},2),s.jsx(m.Z,{onClick:()=>e.push("/customer"),sx:{my:2,color:"white",display:"block"},children:"Customers"},3)]}),(0,s.jsxs)(o.Z,{sx:{flexGrow:0},children:[s.jsx(h.Z,{title:"Open settings",children:s.jsx(l.Z,{onClick:e=>{y(e.currentTarget)},sx:{p:0},children:s.jsx(x.Z,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),s.jsx(d.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!b,onClose:k,children:v.map(e=>s.jsx(f.Z,{onClick:k,children:s.jsx(c.Z,{sx:{textAlign:"center"},children:e})},e))})]})]})})})}},9047:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(92),n=r(9199),i=r(9406);function o(){let e=(0,i.useRouter)(),[t,r]=(0,n.useState)(null),[o,a]=(0,n.useState)(!0),{id:l}=e.query;return o?s.jsx("div",{children:"Loading..."}):t?(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Customer Detail"}),(0,s.jsxs)("p",{children:["Name: ",t.name]}),(0,s.jsxs)("p",{children:["Email: ",t.email]})]}):s.jsx("div",{children:"No customer found."})}},7546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>a});var s=r(3396);let n=(0,s.createProxy)(String.raw`/Users/friendkub/Desktop/final/app/customer/[id]/page.js`),{__esModule:i,$$typeof:o}=n;n.default;let a=(0,s.createProxy)(String.raw`/Users/friendkub/Desktop/final/app/customer/[id]/page.js#default`)},2980:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>p});var s=r(3301),n=r(3269),i=r.n(n);r(7442);var o=r(3396);let a=(0,o.createProxy)(String.raw`/Users/friendkub/Desktop/final/app/components/ResponsiveAppBar.js`),{__esModule:l,$$typeof:c}=a;a.default;let d=(0,o.createProxy)(String.raw`/Users/friendkub/Desktop/final/app/components/ResponsiveAppBar.js#default`),p={title:"Stock App",description:"Stock App"};function u({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx(d,{}),e]})})}},1337:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5488);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7442:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[603,331,488],()=>r(7076));module.exports=s})();