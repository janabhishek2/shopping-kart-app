(this["webpackJsonpproject-r"]=this["webpackJsonpproject-r"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),s=a.n(n),r=a(21),o=a.n(r),i=(a(55),a(16)),l=a(31),d=a(8),j=a(9),h=a(11),b=a(10),u=(a(56),a(25),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return console.log("Navbar called"),Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"navbar navbar-dark bg-primary text-white fixed-top",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"https://janabhishek2.github.io/Bootstrap4/",children:"Con Fusion"}),Object(c.jsxs)("div",{className:"d-flex mr-1 font-weight-bold",children:["Total Items : ",this.props.tc]}),Object(c.jsxs)("div",{className:"d-flex ml-1 font-weight-bold",children:["Total Price : ",this.props.tp,"$"]})]})})}}]),a}(n.Component)),m=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e.getBadgeClasses=function(){return 0==e.props.uniItem.count?"d-none":"badge badge-primary"},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"col col-sm-6 col-md-4 d-flex",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("span",{className:"mr-auto",children:this.props.uniItem.name}),Object(c.jsx)("span",{className:this.getBadgeClasses(),children:this.props.uniItem.count})]})}),Object(c.jsxs)("div",{className:"card-body ",children:[Object(c.jsx)("img",{src:this.props.uniItem.url,className:"img img-fluid",alt:this.props.uniItem.name,height:"200",width:"300"}),Object(c.jsxs)("div",{className:"card-footer",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[this.props.uniItem.price,"$ per kg. *"]}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)("button",{className:"btn btn-success btn-sm m-2",onClick:function(){e.props.onIncrement(e.props.uniItem)},children:"Add to Cart"}),Object(c.jsx)("button",{className:"btn btn-danger btn-sm m-2",onClick:function(){e.props.onRemove(e.props.uniItem)},children:"Remove from Cart"})]})]})]})]})})}}]),a}(n.Component),p=a(15),O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;console.log("Items Called");return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"container",style:{marginTop:100},children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-5"}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(p.b,{to:"/add",children:Object(c.jsx)("button",{className:"btn btn-primary m-3",children:"Add Item"})})})]}),Object(c.jsx)("div",{className:"row",children:this.props.it.map((function(t){return Object(c.jsx)(m,{uniItem:t,onIncrement:e.props.onIncrement,onRemove:e.props.onRemove},t.id)}))})]}),Object(c.jsx)("div",{className:"justify-content-center d-flex mt-3 mb-3",children:Object(c.jsxs)(p.b,{to:"/login",children:["  ",Object(c.jsx)("button",{className:"btn btn-primary btn-lg",children:"Check-Out"})]})})]})}}]),a}(n.Component),x=a(6),g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var c;Object(d.a)(this,a),(c=t.call(this,e)).state={loggedIn:!1,data:{username:"",password:""}},c.handleChange=function(e){var t=Object(i.a)({},c.state.data);t[e.currentTarget.name]=e.currentTarget.value,c.setState({data:t})},c.handleSubmit=function(e){e.preventDefault();var t=c.state.data,a=t.username,n=t.password;if("admin"==a&&"12345"==n){localStorage.setItem("token","abcde");c.setState({loggedIn:!0})}};var n=!0;return null==localStorage.getItem("token")&&(n=!1),c.setState({loggedIn:n}),c}return Object(j.a)(a,[{key:"render",value:function(){return!0===this.state.loggedIn?Object(c.jsx)(x.a,{to:"/checkout"}):Object(c.jsx)("div",{className:"container",style:{marginTop:150},children:Object(c.jsxs)("div",{className:"form card",children:[Object(c.jsx)("div",{className:"card-header d-flex justify-content-center",children:Object(c.jsx)("h3",{children:"Log-In"})}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"username",className:"col-2",children:"User-Name :"}),Object(c.jsx)("input",{placeholder:"UserName",onChange:this.handleChange,type:"text",name:"username",value:this.state.data.username,id:"username",className:"col form-control"})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"password",className:"col-2",children:"Password :"}),Object(c.jsx)("input",{placeholder:"Password",onChange:this.handleChange,type:"password",name:"password",value:this.state.data.password,id:"password",className:"col form-control"})]}),Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("button",{className:"btn btn-primary ",children:"LogIn"})}),Object(c.jsx)("p",{children:"admin , 12345"})]})})]})})}}]),a}(n.Component),f=a(20),v=a(19),N=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={viewPort:{latitude:22.32664,longitude:114.26562,zoom:15,width:"1200px",height:"500px"},selected:0,userLat:0,userLng:0,userReq:!1},e.getCoordinates=function(t){var a=t.coords.latitude,c=t.coords.longitude;e.setState({userLat:a}),e.setState({userLng:c});var n={latitude:e.state.userLat,longitude:e.state.userLng,zoom:10,width:"1200px",height:"500px"};e.setState({viewPort:n})},e.getLocation=function(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(e.getCoordinates);e.setState({userReq:!0})}else f.b.error("Geolocation is not supported by this browser.")},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"container",style:{marginTop:100},children:[Object(c.jsx)("h1",{children:" Map For Reference : "}),Object(c.jsx)("br",{}),Object(c.jsxs)(v.c,Object(i.a)(Object(i.a)({onViewportChange:function(t){e.setState({viewPort:t})},mapStyle:"mapbox://styles/janabhishek2/ckiw5zews2i0u19o77nc2gm7p"},this.state.viewPort),{},{mapboxApiAccessToken:"pk.eyJ1IjoiamFuYWJoaXNoZWsyIiwiYSI6ImNraXc1Z3c0ZTNnM2gydnFqdHdrOGxpcGEifQ.t1mXdjR57fjDVeuIJEguxg",children:[Object(c.jsx)(v.a,{latitude:22.32664,longitude:114.26562,children:Object(c.jsx)("button",{onClick:function(){e.setState({selected:1})},className:"btn btn-sm",children:Object(c.jsx)("img",{src:"https://codelabs.developers.google.com/codelabs/advanced-android-training-google-maps/img/3077e66f9f7a1a46.png",width:"15",height:"20"})})}),Object(c.jsx)(v.a,{latitude:this.state.userLat,longitude:this.state.userLng,children:Object(c.jsx)("button",{className:"btn btn-sm",children:Object(c.jsx)("img",{src:"https://codelabs.developers.google.com/codelabs/advanced-android-training-google-maps/img/3077e66f9f7a1a46.png",width:"15",height:"20"})})}),1==this.state.selected?Object(c.jsx)(v.b,{onClose:function(){e.setState({selected:0})},latitude:22.32664,longitude:114.26562,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"Con Fusion"}),Object(c.jsxs)("p",{children:["121, Clear Water Bay Road ",Object(c.jsx)("br",{}),"Kowloon"]})]})}):null]})),Object(c.jsxs)("div",{className:"d-flex justify-content-center row",children:[Object(c.jsx)("button",{className:"btn btn-info m-3 btn-lg col-5",onClick:function(){e.setState({viewPort:{latitude:22.32664,longitude:114.26562,zoom:13,width:"1200px",height:"500px"}})},children:"Click To Show the restaurant on Map !"}),Object(c.jsx)("button",{className:"col-5 m-3 btn btn-primary btn-lg",onClick:this.getLocation,children:"Click to get Your Location"})]})]})}}]),a}(n.Component),y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var c;Object(d.a)(this,a),(c=t.call(this,e)).handleLogout=function(){localStorage.removeItem("token");c.setState({loggedIn:!1})};var n=!0;return null==localStorage.getItem("token")&&(n=!1),c.state={loggedIn:n},c}return Object(j.a)(a,[{key:"componentDidMount",value:function(){f.b.success("Welcome Back !")}},{key:"render",value:function(){var e=1;if(!1===this.state.loggedIn)return Object(c.jsx)(x.a,{to:"/login"});return Object(c.jsxs)("div",{style:{marginTop:150},className:"container",children:[Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header d-flex justify-content-center",children:Object(c.jsx)("h4",{children:"Summary"})}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:"thead-light",children:Object(c.jsxs)("tr",{className:"row",children:[Object(c.jsx)("th",{className:"col-2",children:"SNo."}),Object(c.jsx)("th",{className:"col-2",children:"Item"}),Object(c.jsx)("th",{className:"col-3",children:"Price"}),Object(c.jsx)("th",{className:"col-3",children:"Number of Kg(s)"}),Object(c.jsx)("th",{className:"col-2",children:"Price"})]})}),Object(c.jsxs)("tbody",{children:[this.props.foods.map((function(t){if(t.count>0)return Object(c.jsxs)("tr",{className:"row",children:[Object(c.jsx)("td",{className:"col-2",children:e++}),Object(c.jsx)("td",{className:"col-2",children:t.name}),Object(c.jsxs)("td",{className:"col-3",children:["$ ",t.price]}),Object(c.jsx)("td",{className:"col-3",children:t.count}),Object(c.jsxs)("td",{className:"col-2",children:[" $ ",t.count*t.price]})]})})),Object(c.jsxs)("tr",{className:"row mt-2",children:[Object(c.jsx)("td",{className:"col-10",children:Object(c.jsx)("h3",{children:"Grand Total :"})}),Object(c.jsxs)("td",{className:"col ",children:[" $ ",this.props.tc]})]})]})]})}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)(p.b,{to:"/thanks",children:Object(c.jsx)("button",{className:"btn-warning btn-lg btn",children:"Place Order"})})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("button",{className:"btn btn-danger btn-lg",onClick:this.handleLogout,children:" Logout "})})]})})]}),Object(c.jsx)("div",{className:"row mt-3",children:Object(c.jsx)(N,{})})]})}}]),a}(n.Component),w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e.func=function(){setTimeout((function(){e.props.history.push("/shopping-kart-app")}),3e3)},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{style:{marginTop:150,textAlign:"center"},className:"container",children:[Object(c.jsx)("h3",{children:" Thank you for choosing Us !"}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"You Will be automatically redirected to the menu-page in 3 seconds :)"}),this.func()]})}}]),a}(n.Component);a(79),a(49);var C=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{name:"",url:"",price:""}},e.handleChange=function(t){var a=Object(i.a)({},e.state.data);a[t.currentTarget.name]=t.currentTarget.value,e.setState({data:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.data.name,e.state.data.price,e.state.data.url),f.b.success("Item added !"),e.props.history.push("/shopping-kart-app")},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container",style:{marginTop:100},children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("b",{children:Object(c.jsx)("i",{children:"  Add Item "})})}),Object(c.jsx)("div",{className:"card-body m-2",children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"name",className:"col-2",children:"Name"}),Object(c.jsx)("input",{onChange:this.handleChange,type:"text",className:"col form-control",id:"name",name:"name",value:this.state.data.name})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"url",className:"col-2",children:"Url"}),Object(c.jsx)("input",{onChange:this.handleChange,type:"text",className:"col form-control",id:"url",name:"url",value:this.state.data.url})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"price",className:"col-2",children:"Price"}),Object(c.jsx)("input",{onChange:this.handleChange,type:"text",className:"col form-control",id:"price",name:"price",value:this.state.data.price})]}),Object(c.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add Item"})]})})]})})}}]),a}(n.Component),I=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={foods:[{id:1,name:"Apples",url:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apple-1776744_1280.jpg",price:1,count:0},{id:2,name:"Berries",url:"https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg",price:.5,count:0},{id:3,name:"Guavas",url:"https://cdn.pixabay.com/photo/2018/04/26/11/17/guava-3351709_1280.jpg",price:.7,count:0},{id:4,name:"Oranges",url:"https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_1280.jpg",price:1,count:0},{id:5,name:"Papaya",url:"https://cdn.pixabay.com/photo/2017/03/07/04/32/fruit-2123166_1280.jpg",price:2,count:0},{id:6,name:"Peaches",url:"https://cdn.pixabay.com/photo/2016/07/16/20/48/apricots-1522680_1280.jpg",price:1,count:0},{id:7,name:"Pineapples",url:"https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245_1280.jpg",price:3,count:0},{id:8,name:"Grapes",url:"https://cdn.pixabay.com/photo/2014/02/27/17/51/grapes-276070_1280.jpg",price:.4,count:0},{id:9,name:"Bananas",url:"https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg",price:.5,count:0}]},e.handleAdd=function(t,a,c){var n={id:Date.now(),name:t,url:c,price:a,count:0},s=Object(l.a)(e.state.foods);s.push(n),console.log(s),e.setState({foods:s})},e.totalCost=function(){var t=0;return e.state.foods.forEach((function(e){e.count>0&&(t+=e.count*e.price)})),t},e.totalCount=function(){var t=0;return e.state.foods.forEach((function(e){e.count>0&&t++})),t},e.handleIncrement=function(t){var a=Object(l.a)(e.state.foods);a[e.state.foods.indexOf(t)].count++,e.setState({foods:a})},e.handleRemove=function(t){var a=Object(l.a)(e.state.foods);a[e.state.foods.indexOf(t)].count=0,e.setState({foods:a})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{}),Object(c.jsx)(u,{it:this.state.foods,tc:this.totalCount(),tp:this.totalCost()}),Object(c.jsxs)(x.d,{children:[Object(c.jsx)(x.b,{path:"/shopping-kart-app",exact:!0,component:function(){return Object(c.jsx)(O,{it:e.state.foods,onIncrement:e.handleIncrement,onRemove:e.handleRemove})}}),Object(c.jsx)(x.b,{path:"/login",component:g}),Object(c.jsx)(x.b,{path:"/checkout",component:function(){return Object(c.jsx)(y,{foods:e.state.foods,tc:e.totalCost()})}}),Object(c.jsx)(x.b,{path:"/thanks",component:w}),Object(c.jsx)(x.b,{path:"/maps",component:N}),Object(c.jsx)(x.b,{path:"/add",component:function(t){return Object(c.jsx)(C,Object(i.a)({addItem:e.handleAdd},t))}})]})]})}}]),a}(n.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(p.a,{children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})})}),document.getElementById("root")),k()}},[[80,1,2]]]);
//# sourceMappingURL=main.d913043d.chunk.js.map