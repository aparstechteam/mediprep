import{j as c,G as v,r as d,l as m,m as h,t as e,v as s,I as a,x as _,D as g,L as b,M as f,N as y}from"./index.35e1c588.js";const S={class:"container py-20 mx-auto"},x=["onSubmit"],N={class:"form-control"},q=e("label",{for:"name"},"Name",-1),C={class:"form-control"},V=e("label",{for:"phone"},"Phone",-1),j=e("p",{class:"text-sm"}," \u098F\u0987 \u09A8\u09BE\u09AE\u09CD\u09AC\u09BE\u09B0\u09C7 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09AE\u09BE\u09B0\u09CD\u0995\u09CD\u09B8 \u098F\u09B8\u098F\u09AE\u098F\u09B8 \u0995\u09B0\u09C7 \u09AA\u09BE\u09A0\u09BF\u09DF\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964 ",-1),M={class:"form-control"},U=e("label",{for:"reg"},"HSC roll",-1),B={class:"form-control"},k=e("label",{for:"reg"},"HSC registration No.",-1),D=e("p",{class:"text-sm"},"\u098F\u099F\u09BF \u09A6\u09BF\u09DF\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE\u09B0 \u09B8\u0995\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09B9\u09AC\u09C7\u0964 \u09A4\u09BE\u0987 \u09B8\u09BE\u09AC\u09A7\u09BE\u09A8\u09C7 \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09AC\u09C7\u0964",-1),H={class:"form-control"},w=e("label",{for:"reg"},"Board",-1),I=y('<option value="" selected disabled>Select board</option><option value="barisal">Barisal</option><option value="chittagong">Chittagong</option><option value="comilla">Comilla</option><option value="dhaka">Dhaka</option><option value="dinajpur">Dinajpur</option><option value="jessore">Jessore</option><option value="madrasah">Madrasah</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="tec">Technical</option>',12),J=[I],O={class:"form-control"},R=e("label",{for:"college"},"Institution",-1),T={class:"text-center"},E={setup(P){const r=c(),u=v(),o=d({ttrx:"",name:"",phone:"",reg:"",college:"",board:"",roll:""});u.query.ttrx?o.value.ttrx=u.query.ttrx:r.replace("/login");const n=d(!1),p=()=>{n.value=!0,fetch(f,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(o.value)}).then(i=>{n.value=!1,localStorage.setItem("medi22",JSON.stringify(o.value)),r.push("/")}).catch(i=>{console.log(i),n.value=!1})};return(i,t)=>(m(),h("div",S,[e("form",{onSubmit:b(p,["prevent"]),class:"space-y-3"},[e("div",N,[q,s(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=l=>o.value.name=l),class:"input input-bordered"},null,512),[[a,o.value.name]])]),e("div",C,[V,j,s(e("input",{type:"tel",required:"","onUpdate:modelValue":t[1]||(t[1]=l=>o.value.phone=l),class:"input input-bordered"},null,512),[[a,o.value.phone]])]),e("div",M,[U,s(e("input",{type:"tel",required:"","onUpdate:modelValue":t[2]||(t[2]=l=>o.value.roll=l),class:"input input-bordered",placeholder:"HSC roll"},null,512),[[a,o.value.roll]])]),e("div",B,[k,D,s(e("input",{type:"tel",required:"","onUpdate:modelValue":t[3]||(t[3]=l=>o.value.reg=l),class:"input input-bordered",placeholder:"HSC registration No"},null,512),[[a,o.value.reg]])]),e("div",H,[w,s(e("select",{class:"select select-bordered",required:"","onUpdate:modelValue":t[4]||(t[4]=l=>o.value.board=l)},J,512),[[_,o.value.board]])]),e("div",O,[R,s(e("input",{type:"text",required:"","onUpdate:modelValue":t[5]||(t[5]=l=>o.value.college=l),placeholder:"College Name",class:"input input-bordered"},null,512),[[a,o.value.college]])]),e("div",T,[e("button",{type:"submit",class:g(["btn btn-primary",{loading:n.value}])},"Submit",2)])],40,x)]))}};export{E as default};
