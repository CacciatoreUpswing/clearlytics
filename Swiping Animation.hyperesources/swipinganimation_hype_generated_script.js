//	HYPE.documents["Swiping Animation"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Swiping%20Animation.hyperesources",c="Swiping Animation",e="swipinganimation_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("swipinganimation_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_538","HYPE_dtl_538",!0==(null!=a&&10>a||false==!0)?"HYPE-538.full.min.js":"HYPE-538.thin.min.js"),false==!0&&(a=a||l("HYPE_w_538","HYPE_wdtl_538","HYPE-538.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"loop",source:"function(hypeDocument, element, event) {\twindow.loopCounter++;\n\t\n\t\n\t\n\tif (window.loopCounter <= 3) {\n\t\n\thypeDocument.startTimelineNamed('loop', hypeDocument.kDirectionForward)\n\t}\n\t\n}",identifier:"17"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_538(c,e,{"0":{p:1,n:"Hand%20for%20swiping%20animation.svg",g:"5",t:"image/svg+xml"},"1":{p:1,n:"Arrow.svg",g:"13",t:"image/svg+xml"}},h,[],d,[{n:"Small",o:"1",X:[0]}],[{A:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"3",p:"600px",x:0,cA:false,Z:170,Y:195,c:"#EFEFEF",L:[],bY:1,d:195,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:3,b:[],a:[{f:"c",y:0,z:0.01,i:"e",e:1,s:0,o:"19"},{f:"c",y:0.01,z:1.15,i:"e",e:1,s:1,o:"19"},{f:"c",y:0.07,z:0.06,i:"e",e:1,s:0,o:"18"},{f:"c",y:0.09,z:0.08,i:"c",e:21,s:15,o:"18"},{f:"c",y:0.09,z:0.08,i:"b",e:35,s:38,o:"18"},{f:"c",y:0.09,z:0.08,i:"a",e:39,s:42,o:"18"},{f:"c",y:0.09,z:0.08,i:"d",e:21,s:15,o:"18"},{f:"c",y:0.13,z:0.06,i:"e",e:0,s:1,o:"18"},{f:"c",y:0.17,z:0.18,i:"e",e:1,s:0,o:"20"},{y:0.17,i:"c",s:21,z:0,o:"18",f:"c"},{y:0.17,i:"b",s:35,z:0,o:"18",f:"c"},{y:0.17,i:"a",s:39,z:0,o:"18",f:"c"},{y:0.17,i:"d",s:21,z:0,o:"18",f:"c"},{f:"c",y:0.19,z:0.16,i:"a",e:77,s:0,o:"20"},{f:"c",y:0.19,z:0.16,i:"a",e:105,s:29,o:"19"},{y:0.19,i:"e",s:0,z:0,o:"18",f:"c"},{f:"c",y:1.05,z:0.08,i:"e",e:1,s:1,o:"20"},{y:1.05,i:"a",s:77,z:0,o:"20",f:"c"},{y:1.05,i:"a",s:105,z:0,o:"19",f:"c"},{f:"c",y:1.13,z:0.09,i:"e",e:0,s:1,o:"20"},{f:"c",y:1.16,z:0.2,i:"e",e:0,s:1,o:"19"},{y:1.22,i:"e",s:0,z:0,o:"20",f:"c"},{y:2.06,i:"e",s:0,z:0,o:"19",f:"c"},{f:"c",p:2,y:3,z:0,i:"ActionHandler",s:{a:[{p:4,h:"17"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["19","18","20"],v:{"18":{c:15,d:15,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,N:1,aI:"50%",A:"#FF626D",x:"visible",O:1,j:"absolute",aJ:"50%",k:"div",C:"#FF626D",z:2,B:"#FF626D",D:"#FF626D",aK:"50%",P:1,a:42,aL:"50%",b:38},"20":{cN:"none",h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39,j:"absolute",bS:45,z:1,k:"div",aX:0,d:15,c:71,bU:0.5,e:0,aP:"auto",r:"inline"},"19":{p:"no-repeat",c:73,q:"100% 100%",d:112,I:"None",r:"inline",e:0,J:"None",bL:0,K:"None",BDbL:0,L:"None",h:"5",M:0,N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,z:4,a:29,b:44}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
