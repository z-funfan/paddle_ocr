let a=document.createElement("style");a.innerHTML=".image-stitch .upload[data-v-2aa9c0a3]{font-size:24px;color:#fff;margin:50px 0}.image-stitch .upload .file[data-v-2aa9c0a3]{padding:4px 10px;height:20px;line-height:20px;position:relative;cursor:pointer;color:#888;background:#fafafa;border:1px solid #ddd;border-radius:4px;overflow:hidden;display:inline-block}.image-stitch .upload .file input[data-v-2aa9c0a3]{position:absolute;font-size:100px;right:0;top:0;opacity:0;cursor:pointer}.image-stitch .upload .file[data-v-2aa9c0a3]:hover{color:#444;background:#eee;border-color:#ccc;text-decoration:none}.image-stitch .loading[data-v-2aa9c0a3]{z-index:5000;height:100vh;width:100vw;position:absolute;top:0;left:0;padding:50% 0;background:rgba(0,0,0,.3);font-size:24px;color:#fff}.image-stitch .preview[data-v-2aa9c0a3]{position:relative;background:#f1f0ef;padding:10px}",document.head.appendChild(a);import{r as e}from"./request.0a68414f.js";import{r as t,c as i,a as o,w as l,d as r,b as n,v as d,p as s,f as c,o as p,g as f}from"./index.dea00576.js";var g={name:"GirlCartoon",props:{msg:String,files:[]},data:()=>({count:0,loading:!1,imageData:null,direct:!0}),methods:{async formData(a){this.loading=!0;let t=a.target.files,i=new FormData;for(let a=0;a<t.length;a++)i.append("images",t[a]);let o={"Content-Type":"multipart/form-data"};try{const a=await e.post("/cv/girl/cartoon",i,{headers:o,responseType:"blob"});this.imageData=window.URL.createObjectURL(a.data)}catch(a){alert("解析图片失败",a),console.error(a)}finally{this.loading=!1}}}};const u=a=>(s("data-v-2aa9c0a3"),a=a(),c(),a),m={class:"image-stitch"},h=u((()=>r("h1",null,"女生卡通头像",-1))),v=f("回首页"),b=u((()=>r("h3",null,"选择一张照片",-1))),x={class:"upload"},w={class:"loading"},y=u((()=>r("h3",null,"结果预览",-1))),D={class:"preview"},k=["src"];g.render=function(a,e,s,c,f,g){const u=t("router-link");return p(),i("div",m,[h,o(u,{to:{name:"Home"}},{default:l((()=>[v])),_:1}),b,r("div",x,[r("input",{name:"",class:"file",id:"upload_file",type:"file",multiple:!1,onChange:e[0]||(e[0]=(...a)=>g.formData&&g.formData(...a))},null,32)]),n(r("div",w,"处理中 . . .",512),[[d,f.loading]]),y,r("div",D,[r("img",{src:f.imageData},null,8,k)])])},g.__scopeId="data-v-2aa9c0a3";export{g as default};