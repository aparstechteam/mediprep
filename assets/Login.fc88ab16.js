import{r as l,m as c,g as u,j as d,k as t,v as p,y as m,G as x,H as _,B as v,I as h}from"./index.95a9dff0.js";const f={class:"container py-20 mx-auto"},b=t("h2",{class:"text-2xl font-bold text-center"},"Request For Access",-1),g=["onSubmit"],y={class:"space-y-2 form-control"},S=t("label",{for:"ttrx",class:""},"Group Joining ID",-1),B=t("p",{class:"text-sm"},"\u0995\u09CB\u09B0\u09CD\u09B8 \u0995\u09C7\u09A8\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09C1\u09AE\u09BF \u09AF\u09C7 \u0997\u09CD\u09B0\u09C1\u09AA \u099C\u09DF\u09C7\u09A8\u09BF\u0982 \u0986\u0987\u09A1\u09BF \u09A6\u09BF\u09DF\u09C7 \u09AB\u09C7\u09B8\u09AC\u09C1\u0995 \u0997\u09CD\u09B0\u09C1\u09AA\u09C7 \u09A1\u09C1\u0995\u09C7\u099B, \u09B8\u09C7\u099F\u09BF \u09A6\u09BF\u09AC\u09C7\u0964 \u098F\u099F\u09BF \u09B9\u09BE\u09B0\u09BF\u09DF\u09C7 \u09AB\u09C7\u09B2\u09B2\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AB\u09CB\u09A8\u09C7\u09B0 SMS \u0985\u09A5\u09AC\u09BE Email \u099A\u09C7\u0995 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09CB\u0964 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF, \u0995\u09CB\u09B0\u09CD\u09B8 \u0995\u09C7\u09A8\u09BE\u09B0 \u09B2\u09BF\u0982\u0995\u09C7 \u09AA\u09C1\u09A8\u09B0\u09BE\u09DF \u0997\u09BF\u09DF\u09C7 \u09B2\u0997-\u0987\u09A8 \u0995\u09B0\u09B2\u09C7\u0993 \u0997\u09CD\u09B0\u09C1\u09AA \u099C\u09DF\u09C7\u09A8\u09BF\u0982 \u0986\u0987\u09A1\u09BF \u09AA\u09C7\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964",-1),k={class:"text-center"},G={setup(w){const e=l(""),s=l(!1),r=c(),n=()=>{s.value=!0,v.get(`${h}?ttrx=${e.value}`).then(o=>{o.data?r.push("/register?ttrx="+e.value):(alert("\u09B8\u09A0\u09BF\u0995 \u0997\u09CD\u09B0\u09C1\u09AA \u099C\u09DF\u09C7\u09A8\u09BF\u0982 \u0986\u0987\u09A1\u09BF \u09A6\u09BF\u09DF\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964"),s.value=!1)}).catch(o=>{alert("Something Went Wrong"),console.log(o),s.value=!1})};return(o,a)=>(u(),d("div",f,[b,t("form",{onSubmit:_(n,["prevent"]),class:"max-w-2xl mx-auto space-y-2"},[t("div",y,[S,B,p(t("input",{type:"text",placeholder:"Group Joinig ID","onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),class:"input input-bordered"},null,512),[[m,e.value]])]),t("div",k,[t("button",{type:"submit",class:x(["btn btn-primary",{loading:s.value}])},"Submit",2)])],40,g)]))}};export{G as default};
