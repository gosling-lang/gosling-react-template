(this["webpackJsonptest-gosling-locally"]=this["webpackJsonptest-gosling-locally"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),r=a.n(l),o=(a(26),a(2)),c=(a(27),a(18)),s=function(e,t,a,n,i){return{layout:"linear",arrangement:"vertical",centerRadius:.8,xDomain:{chromosome:"1",interval:[1,3000500]},views:[{tracks:[{id:"track-1",data:{url:"https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",type:"multivec",row:"sample",column:"position",value:"peak",categories:["sample 1","sample 2","sample 3","sample 4"],binSize:0===a?1:a},mark:t,x:{field:"start",type:"genomic",axis:"top"},xe:{field:"end",type:"genomic"},row:{field:"sample",type:"nominal",legend:!0},color:{field:"peak",type:"quantitative",legend:!0,domain:e},tooltip:[{field:"start",type:"genomic",alt:"Start Position"},{field:"end",type:"genomic",alt:"End Position"},{field:"peak",type:"quantitative",alt:"Value",format:".2"},{field:"sample",type:"nominal",alt:"Sample"}],width:600,height:n},{alignment:"overlay",data:{url:"https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",type:"multivec",row:"sample",column:"position",value:"peak",categories:["sample 1","sample 2","sample 3","sample 4"],binSize:0===a?1:a},mark:"point",x:{field:"position",type:"genomic",axis:"top"},y:{field:"peak",type:"quantitative"},opacity:{value:.6},tracks:[{id:"track-2",color:{value:"lightgray"}},{id:"track-3",dataTransform:[{type:"filter",field:"sample",oneOf:[i]}],color:{value:"steelblue"}}],width:600,height:n}]}]}};var u=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(0),a=Object(o.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(130),m=Object(o.a)(u,2),p=m[0],g=(m[1],Object(n.useState)("rect")),d=Object(o.a)(g,2),f=d[0],v=d[1],y=Object(n.useState)(0),b=Object(o.a)(y,2),h=b[0],k=b[1],E=Object(n.useState)(),O=Object(o.a)(E,2),j=O[0],S=O[1];return Object(n.useEffect)((function(){if(e.current)return e.current.api.subscribe("mouseover",(function(e,t){S(t.data.sample)})),e.current.api.subscribe("mouseleave",(function(e,t){S()})),function(){return e.current.api.unsubscribe("mouseover")}}),[e]),i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,i.a.createElement("div",{style:{marginTop:30,marginLeft:80}},"Bin Size:",i.a.createElement("input",{type:"range",min:0,max:32,step:4,value:h,className:"slider",id:"bin-slider",style:{width:100,display:"inline",margin:10},onChange:function(e){return k(+e.currentTarget.value)}}),0===h?1:h),i.a.createElement("div",{style:{marginLeft:80}},"Color Min Value:",i.a.createElement("input",{type:"range",min:0,max:.001,step:1e-4,value:l,className:"slider",id:"min-slider",style:{width:100,display:"inline",margin:10},onChange:function(e){return r(e.currentTarget.value)}}),l)),i.a.createElement("div",{style:{marginTop:30,marginLeft:80}},"Mark:",i.a.createElement("select",{name:"mark",onChange:function(e){return v(e.currentTarget.value)}},i.a.createElement("option",{value:"rect"},"rect"),i.a.createElement("option",{value:"point"},"point"))),i.a.createElement(c.GoslingComponent,{ref:e,spec:s([+l,.001],f,h,p,j),experimental:{reactive:!0}}))},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),l(e),r(e)}))};r.a.render(i.a.createElement(u,null),document.getElementById("root")),m()}},[[60,1,2]]]);
//# sourceMappingURL=main.87167920.chunk.js.map