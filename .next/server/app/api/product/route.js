"use strict";(()=>{var e={};e.id=500,e.ids=[500],e.modules={1185:e=>{e.exports=require("mongoose")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1350:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>w,patchFetch:()=>g,requestAsyncStorage:()=>m,routeModule:()=>l,serverHooks:()=>y,staticGenerationAsyncStorage:()=>f});var n={};r.r(n),r.d(n,{GET:()=>p,PATCH:()=>c,POST:()=>u,PUT:()=>d});var o=r(6360),a=r(445),s=r(475),i=r(1354);async function p(){return Response.json(await i.Z.find())}async function u(e){let t=await e.json();console.log(t);let r=new i.Z(t);return await r.save(),Response.json(r)}async function d(e){let{_id:t,...r}=await e.json(),n=await i.Z.findByIdAndUpdate(t,r,{new:!0});return n?Response.json(n):new Response("Product not found",{status:404})}async function c(e){let{_id:t,...r}=await e.json(),n=await i.Z.findByIdAndUpdate(t,r,{new:!0});return n?Response.json(n):new Response("Product not found",{status:404})}let l=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/product/route",pathname:"/api/product",filename:"route",bundlePath:"app/api/product/route"},resolvedPagePath:"/Users/friendkub/Desktop/final/app/api/product/route.js",nextConfigOutput:"",userland:n}),{requestAsyncStorage:m,staticGenerationAsyncStorage:f,serverHooks:y}=l,w="/api/product/route";function g(){return(0,s.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:f})}},1354:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1185),o=r.n(n);let a=new(o()).Schema({code:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!1},price:{type:Number,required:!0},category:{type:o().Schema.Types.ObjectId,ref:"category"}}),s=o().models.product||o().model("product",a)},6360:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[603],()=>r(1350));module.exports=n})();