import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";gsap.registerPlugin(ScrollTrigger);let sections=gsap.utils.toArray(".stage"),scrollContainer=document.querySelector("#service-scroll");ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.to(sections,{xPercent:-100*(sections.length-1),ease:"none"});ScrollTrigger.create({animation:e,trigger:scrollContainer,pin:!0,scrub:1,end:()=>"+="+scrollContainer.offsetWidth})},all:function(){}});const wideViewport=window.matchMedia("(min-width: 992px)");document.querySelectorAll("#navmenu a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").split("#")[1],o=document.getElementById(t),n=document.getElementById("masthead");wideViewport.matches?gsap.to(window,{scrollTo:(o.offsetLeft+n.offsetWidth*sections.indexOf(o))*(scrollContainer.offsetWidth/(scrollContainer.offsetWidth-o.offsetWidth)),duration:2}):gsap.to(window,{scrollTo:o,duration:2})}))}));import*as galleries from"./projects";window.addEventListener("load",(function(){let e=document.querySelectorAll("#gallery li");console.log(e),e.forEach(((e,t)=>{e.style.backgroundImage="url("+galleries.creativeDirection[t].images[0]+")"})),document.querySelectorAll("#gallery a").forEach(((e,t)=>{console.log("hello"),e.addEventListener("click",(()=>{localStorage.setItem("indexValue",t),e.href="detail.html?="+galleries.creativeDirection[t].title}))}));let t=gsap.utils.toArray(".stage"),o=document.querySelector("#hscroll"),n=document.getElementById("navmenu").getElementsByTagName("a");document.querySelector("#btncontact");ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.to(t,{xPercent:-100*(t.length-1),ease:"none"}),r=ScrollTrigger.create({animation:e,trigger:o,pin:!0,scrub:1,end:()=>"+="+o.offsetWidth});for(var i=o.offsetWidth/(window.innerWidth*(t.length-1)),l=(Draggable.create(".proxy",{trigger:o,type:"x",onPress(){this.startScroll=r.scroll()},onDrag(){r.scroll(this.startScroll-(this.x-this.startX)*i)}})[0],0);l<n.length;l++){!function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").split("#")[1],r=document.getElementById(n).offsetLeft*(o.offsetWidth/(o.offsetWidth-window.innerWidth));gsap.to(window,{scrollTo:r+100,duration:2})}))}(n[l])}},all:function(){}});const r=window.matchMedia("(min-width: 992px)");document.querySelectorAll("#navmenu a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=this.getAttribute("href").split("#")[1],i=document.getElementById(n),l=document.getElementById("masthead");console.log(document.getElementById(n)),console.log(t.indexOf(document.getElementById(n))),r.matches?gsap.to(window,{scrollTo:(i.offsetLeft+l.offsetWidth*t.indexOf(i))*(o.offsetWidth/(o.offsetWidth-i.offsetWidth)),duration:2}):gsap.to(window,{scrollTo:i,duration:2})}))}))}));