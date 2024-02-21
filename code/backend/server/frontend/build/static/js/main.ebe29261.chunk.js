(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),i=a(6),o=(a(17),a(2)),s=(a(18),a(9)),u=a.n(s),m=a(11),p=a(5),d=a(7);a(19);const g=[];var h=function(){const e=Object(n.useRef)(null),[t,a]=Object(n.useState)(""),[c,r]=Object(n.useState)(""),[i,o]=Object(n.useState)(""),[s,h]=Object(n.useState)(null),[E,y]=Object(n.useState)(null),[f,b]=Object(n.useState)(!1);navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{h(e.coords.latitude),y(e.coords.longitude)}):console.log("map don't work cuhz"),fetch("https://places.googleapis.com/v1/places:searchText",{method:"POST",headers:{"Content-Type":"application/json","X-Goog-Api-Key":"AIzaSyCnsJR0l_GjIBQ6GGPgoGMgWue8SWJFytQ","X-Goog-FieldMask":"places.displayName,places.formattedAddress"},body:'{\n  "textQuery" : "Plastic Recycling Center",\n  "maxResultCount": 7,\n  "locationBias": {\n    "circle": {\n      "center": {"latitude": '.concat(s,', "longitude": ').concat(E,'},\n      "radius": 25000.0\n    }\n  },\n}')}).then(e=>e.json()).then(e=>{Object(d.setDefaults)({key:"AIzaSyCnsJR0l_GjIBQ6GGPgoGMgWue8SWJFytQ",language:"en"}),e.places.forEach(e=>{Object(d.fromAddress)(e.formattedAddress).then(t=>{let{results:a}=t;const{lat:n,lng:l}=a[0].geometry.location;g.push({address:e.formattedAddress,lat:n,lng:l})})})});const v={lat:s,lng:E},S=Object(n.useCallback)(()=>{const t=e.current.getScreenshot(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:t})};fetch("/send_image",n),fetch("/results").then(e=>e.json()).then(e=>{let t=e.recipes[0].Name,n=e.recipes[0].Material,l=e.recipes[0].Recipe;t.replace(/(\r\n|\r|\n)/g,"<br/>"),n.replace(/(\r\n|\r|\n)/g,"<br/>"),l.replace(/(\r\n|\r|\n)/g,"<br/>"),a(t),r(n),o(l)}).catch(e=>console.error(e))},[e]);return l.a.createElement("div",{className:"homepage finger-paint-regular"},l.a.createElement("div",{className:"Title"},l.a.createElement("h1",null,"EcoCrafts!"),l.a.createElement("p",null,"Scan your solid waste.")),l.a.createElement("div",{className:"Camera"},l.a.createElement(u.a,{ref:e,height:640,width:640,minScreenshotHeight:640,minScreenshotWidth:640,screenshotFormat:"image/jpeg"})),l.a.createElement("div",{className:"ScreenshotButton"},l.a.createElement(m.a,{variant:"primary",onClick:S}," Capture Screenshot")),l.a.createElement("div",{className:"Results"},l.a.createElement("h2",null,"Recipe"),l.a.createElement("p",null,"Capture Screenshot of item to view the recipe!"),l.a.createElement("div",null,"Recipe Name: ",t),l.a.createElement("div",null,c.split("\n").map(e=>l.a.createElement("p",null,e))),l.a.createElement("div",null,i.split("\n").map(e=>l.a.createElement("p",null,e)))),l.a.createElement("div",{className:"About"},l.a.createElement("h2",null,l.a.createElement("b",null,"About")),l.a.createElement("p",null,"EcoCrafts offers an engaging educational experience, introducing homegrown Indian agricultural, recreational, and lifestyle techniques to creatively upcycle solid waste. Through crowdsourcing methods and real-time object detection, EcoCrafts scales these recipes to a broader public, contributing to a more environmentally friendly and sustainable world.")),l.a.createElement("div",{className:"Upcycling"},l.a.createElement("h2",null,l.a.createElement("b",null,"What is upcycling?")),l.a.createElement("p",null,"Upcycling is the creative process of transforming discarded or unused materials into new products of higher value or quality. For example, turning paper cups into an art display!")),l.a.createElement("div",{className:"Activity"},l.a.createElement("h2",null,l.a.createElement("b",null,"The Activity")),l.a.createElement("p",null,"1.  Scan your solid waste by capturing a screenshot."),l.a.createElement("p",null,"2.  View upcycling recipes."),l.a.createElement("p",null,"3.  Collect additional materials."),l.a.createElement("p",null,"4.  Complete activity."),l.a.createElement("p",null,"5.  Upload personalized recipes.")),l.a.createElement("div",{className:"Curriculum"},l.a.createElement("h2",null,l.a.createElement("b",null,"Curriculum")),l.a.createElement("img",{src:"./activityrowimg.png",alt:""})),l.a.createElement("div",{className:"Map"},l.a.createElement("h2",null,l.a.createElement("b",null,"Find Materials in Your Locality")),l.a.createElement("p",null,"Travel with a parent or guardian."),l.a.createElement("h3",null,l.a.createElement(p.a,{mapContainerStyle:{width:"40vw",height:"40vh"},zoom:10,center:v},g.map(e=>l.a.createElement(p.c,{position:{lat:e.lat,lng:e.lng},onClick:()=>b(!f)},f&&l.a.createElement(p.b,{position:{lat:e.lat,lng:e.lng}},l.a.createElement("p",null,e.formattedAddress))))))),l.a.createElement("div",{className:"Upload"},l.a.createElement("h2",null,l.a.createElement("b",null,"Upload Yours")),l.a.createElement("a",{href:"https://d06bj4iwir2.typeform.com/to/yRScudbg"},l.a.createElement("img",{alt:"Stuff",src:"./uploadicon.png",width:"70px",height:"70px"}))))};var E=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",element:l.a.createElement(h,null)})))};a(21);r.a.render(l.a.createElement(i.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ebe29261.chunk.js.map