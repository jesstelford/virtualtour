// Pannellum 2.2.0, https://github.com/mpetroff/pannellum
window.libpannellum=function(D,h,s){function P(B,d,p,la){function ea(a,e){return 1==a.level&&1!=e.level?-1:1==e.level&&1!=a.level?1:e.timestamp-a.timestamp}function P(a,e){return a.level!=e.level?a.level-e.level:a.diff-e.diff}function I(a,e,g,d,f,b){this.vertices=a;this.side=e;this.level=g;this.x=d;this.y=f;this.path=b.replace("%s",e).replace("%l",g).replace("%x",d).replace("%y",f)}function Y(a,e,h,k,f){var b;var t=e.vertices;b=T(a,t.slice(0,3));var l=T(a,t.slice(3,6)),q=T(a,t.slice(6,9)),t=T(a,t.slice(9,
12)),p=b[0]+l[0]+q[0]+t[0];-4==p||4==p?b=!1:(p=b[1]+l[1]+q[1]+t[1],b=-4==p||4==p?!1:4!=b[2]+l[2]+q[2]+t[2]);if(b){b=e.vertices;l=b[0]+b[3]+b[6]+b[9];q=b[1]+b[4]+b[7]+b[10];t=b[2]+b[5]+b[8]+b[11];p=Math.sqrt(l*l+q*q+t*t);t=Math.asin(t/p);l=Math.atan2(q,l)-k;l+=l>Math.PI?-2*Math.PI:l<-Math.PI?2*Math.PI:0;l=Math.abs(l);e.diff=Math.acos(Math.sin(h)*Math.sin(t)+Math.cos(h)*Math.cos(t)*Math.cos(l));l=!1;for(q=0;q<g.nodeCache.length;q++)if(g.nodeCache[q].path==e.path){l=!0;g.nodeCache[q].timestamp=g.nodeCacheTimestamp++;
g.nodeCache[q].diff=e.diff;g.currentNodes.push(g.nodeCache[q]);break}l||(e.timestamp=g.nodeCacheTimestamp++,g.currentNodes.push(e),g.nodeCache.push(e));if(e.level<g.level){var t=d.cubeResolution*Math.pow(2,e.level-d.maxLevel),l=Math.ceil(t*d.invTileResolution)-1,q=t%d.tileResolution*2,y=2*t%d.tileResolution;0===y&&(y=d.tileResolution);0===q&&(q=2*d.tileResolution);p=0.5;if(e.x==l||e.y==l)p=1-d.tileResolution/(d.tileResolution+y);var r=1-p,t=[],c=p,v=p,w=p,A=r,s=r,x=r;if(y<d.tileResolution)if(e.x==
l&&e.y!=l){if(s=v=0.5,"d"==e.side||"u"==e.side)x=w=0.5}else e.x!=l&&e.y==l&&(A=c=0.5,"l"==e.side||"r"==e.side)&&(x=w=0.5);q<d.tileResolution&&(e.x==l&&(c=0,A=1,"l"==e.side||"r"==e.side)&&(w=0,x=1),e.y==l&&(v=0,s=1,"d"==e.side||"u"==e.side)&&(w=0,x=1));y=[b[0],b[1],b[2],b[0]*c+b[3]*A,b[1]*p+b[4]*r,b[2]*w+b[5]*x,b[0]*c+b[6]*A,b[1]*v+b[7]*s,b[2]*w+b[8]*x,b[0]*p+b[9]*r,b[1]*v+b[10]*s,b[2]*w+b[11]*x];y=new I(y,e.side,e.level+1,2*e.x,2*e.y,d.fullpath);t.push(y);e.x==l&&q<d.tileResolution||(y=[b[0]*c+b[3]*
A,b[1]*p+b[4]*r,b[2]*w+b[5]*x,b[3],b[4],b[5],b[3]*p+b[6]*r,b[4]*v+b[7]*s,b[5]*w+b[8]*x,b[0]*c+b[6]*A,b[1]*v+b[7]*s,b[2]*w+b[8]*x],y=new I(y,e.side,e.level+1,2*e.x+1,2*e.y,d.fullpath),t.push(y));e.x==l&&q<d.tileResolution||e.y==l&&q<d.tileResolution||(y=[b[0]*c+b[6]*A,b[1]*v+b[7]*s,b[2]*w+b[8]*x,b[3]*p+b[6]*r,b[4]*v+b[7]*s,b[5]*w+b[8]*x,b[6],b[7],b[8],b[9]*c+b[6]*A,b[10]*p+b[7]*r,b[11]*w+b[8]*x],y=new I(y,e.side,e.level+1,2*e.x+1,2*e.y+1,d.fullpath),t.push(y));e.y==l&&q<d.tileResolution||(y=[b[0]*
p+b[9]*r,b[1]*v+b[10]*s,b[2]*w+b[11]*x,b[0]*c+b[6]*A,b[1]*v+b[7]*s,b[2]*w+b[8]*x,b[9]*c+b[6]*A,b[10]*p+b[7]*r,b[11]*w+b[8]*x,b[9],b[10],b[11]],y=new I(y,e.side,e.level+1,2*e.x,2*e.y+1,d.fullpath),t.push(y));for(e=0;e<t.length;e++)Y(a,t[e],h,k,f)}}}function Z(){return[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1]}function $(a,e,g){var d=Math.sin(e);e=Math.cos(e);if("x"==
g)return[a[0],e*a[1]+d*a[2],e*a[2]-d*a[1],a[3],e*a[4]+d*a[5],e*a[5]-d*a[4],a[6],e*a[7]+d*a[8],e*a[8]-d*a[7]];if("y"==g)return[e*a[0]-d*a[2],a[1],e*a[2]+d*a[0],e*a[3]-d*a[5],a[4],e*a[5]+d*a[3],e*a[6]-d*a[8],a[7],e*a[8]+d*a[6]]}function ga(a){return[a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]]}function ma(g){g.texture||(g.texture=a.createTexture(),g.image=new Image,g.image.crossOrigin="anonymous",g.image.onload=function(){var e=g.image;a.bindTexture(a.TEXTURE_2D,
g.texture);a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,e);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.bindTexture(a.TEXTURE_2D,null);g.textureLoaded=!0;delete g.image},g.image.src=encodeURI(g.path+"."+d.extension))}function T(a,g){var d=[a[0]*g[0]+a[1]*g[1]+a[2]*g[2],a[4]*g[0]+a[5]*g[1]+
a[6]*g[2],a[11]+a[8]*g[0]+a[9]*g[1]+a[10]*g[2],1/(a[12]*g[0]+a[13]*g[1]+a[14]*g[2])],h=d[0]*d[3],f=d[1]*d[3],d=d[2]*d[3],b=[0,0,0];-1>h&&(b[0]=-1);1<h&&(b[0]=1);-1>f&&(b[1]=-1);1<f&&(b[1]=1);if(-1>d||1<d)b[2]=1;return b}var r=h.createElement("canvas");r.style.width=r.style.height="100%";B.appendChild(r);typeof p===s&&(p="equirectangular");var g,a,ha,J,aa,L;this.init=function(N,e,Q,D){var f;"cubemap"==p&&0!==(d[0].width&d[0].width-1)&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||
navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./))||(a=r.getContext("experimental-webgl",{alpha:!1,depth:!1}));if(!a&&("multires"==p&&d.hasOwnProperty("fallbackPath")||"cubemap"==p)&&("WebkitAppearance"in h.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||-1!==navigator.appVersion.indexOf("MSIE 10"))){J&&B.removeChild(J);J=h.createElement("div");J.className="pnlm-world";N=d.basePath?d.basePath+d.fallbackPath:
d.fallbackPath;var b="frblud".split(""),t=0;e=function(){var a=h.createElement("canvas");a.className="pnlm-face pnlm-"+b[this.side]+"face";J.appendChild(a);var g=a.getContext("2d");a.style.width=this.width+4+"px";a.style.height=this.height+4+"px";a.width=this.width+4;a.height=this.height+4;g.drawImage(this,2,2);var c=g.getImageData(0,0,a.width,a.height),f=c.data,e,d;for(e=2;e<a.width-2;e++)for(d=0;4>d;d++)f[4*(e+a.width)+d]=f[4*(e+2*a.width)+d],f[4*(e+a.width*(a.height-2))+d]=f[4*(e+a.width*(a.height-
3))+d];for(e=2;e<a.height-2;e++)for(d=0;4>d;d++)f[4*(e*a.width+1)+d]=f[4*(e*a.width+2)+d],f[4*((e+1)*a.width-2)+d]=f[4*((e+1)*a.width-3)+d];for(d=0;4>d;d++)f[4*(a.width+1)+d]=f[4*(2*a.width+2)+d],f[4*(2*a.width-2)+d]=f[4*(3*a.width-3)+d],f[4*(a.width*(a.height-2)+1)+d]=f[4*(a.width*(a.height-3)+2)+d],f[4*(a.width*(a.height-1)-2)+d]=f[4*(a.width*(a.height-2)-3)+d];for(e=1;e<a.width-1;e++)for(d=0;4>d;d++)f[4*e+d]=f[4*(e+a.width)+d],f[4*(e+a.width*(a.height-1))+d]=f[4*(e+a.width*(a.height-2))+d];for(e=
1;e<a.height-1;e++)for(d=0;4>d;d++)f[e*a.width*4+d]=f[4*(e*a.width+1)+d],f[4*((e+1)*a.width-1)+d]=f[4*((e+1)*a.width-2)+d];for(d=0;4>d;d++)f[d]=f[4*(a.width+1)+d],f[4*(a.width-1)+d]=f[4*(2*a.width-2)+d],f[a.width*(a.height-1)*4+d]=f[4*(a.width*(a.height-2)+1)+d],f[4*(a.width*a.height-1)+d]=f[4*(a.width*(a.height-1)-2)+d];g.putImageData(c,0,0);t++;6==t&&(ha=this.width,B.appendChild(J),D())};for(f=0;6>f;f++)Q=new Image,Q.crossOrigin="anonymous",Q.side=f,Q.onload=e,Q.src="multires"==p?encodeURI(N.replace("%s",
b[f])+"."+d.extension):encodeURI(d[f].src)}else{if(!a)throw console.log("Error: no WebGL support detected!"),{type:"no webgl"};d.fullpath=d.basePath?d.basePath+d.path:d.path;d.invTileResolution=1/d.tileResolution;var l=Z();aa=[];for(f=0;6>f;f++)aa[f]=l.slice(12*f,12*f+12),l=Z();if("equirectangular"==p){if(f=Math.max(d.width,d.height),l=a.getParameter(a.MAX_TEXTURE_SIZE),f>l)throw console.log("Error: The image is too big; it's "+f+"px wide, but this device's maximum supported width is "+l+"px."),{type:"webgl size error",
width:f,maxWidth:l};}else if("cubemap"==p&&(f=d[0].width,l=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f>l))throw console.log("Error: The cube face image is too big; it's "+f+"px wide, but this device's maximum supported width is "+l+"px."),{type:"webgl size error",width:f,maxWidth:l};d.horizonPitch!==s&&d.horizonRoll!==s&&(L=[d.horizonPitch,d.horizonRoll]);f=a.TEXTURE_2D;a.viewport(0,0,r.width,r.height);var l=a.createShader(a.VERTEX_SHADER),q=k;"multires"==p&&(q=z);a.shaderSource(l,q);a.compileShader(l);
var q=a.createShader(a.FRAGMENT_SHADER),I=U;"cubemap"==p?(f=a.TEXTURE_CUBE_MAP,I=ya):"multires"==p&&(I=na);a.shaderSource(q,I);a.compileShader(q);g=a.createProgram();a.attachShader(g,l);a.attachShader(g,q);a.linkProgram(g);a.getShaderParameter(l,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(l));a.getShaderParameter(q,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(q));a.getProgramParameter(g,a.LINK_STATUS)||console.log(a.getProgramInfoLog(g));a.useProgram(g);g.drawInProgress=!1;g.texCoordLocation=
a.getAttribLocation(g,"a_texCoord");a.enableVertexAttribArray(g.texCoordLocation);"multires"!=p?(g.texCoordBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,g.texCoordBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),a.STATIC_DRAW),a.vertexAttribPointer(g.texCoordLocation,2,a.FLOAT,!1,0,0),g.aspectRatio=a.getUniformLocation(g,"u_aspectRatio"),a.uniform1f(g.aspectRatio,r.width/r.height),g.psi=a.getUniformLocation(g,"u_psi"),g.theta=a.getUniformLocation(g,"u_theta"),
g.f=a.getUniformLocation(g,"u_f"),g.h=a.getUniformLocation(g,"u_h"),g.v=a.getUniformLocation(g,"u_v"),g.vo=a.getUniformLocation(g,"u_vo"),g.rot=a.getUniformLocation(g,"u_rot"),a.uniform1f(g.h,N/(2*Math.PI)),a.uniform1f(g.v,e/Math.PI),a.uniform1f(g.vo,Q/Math.PI*2),g.texture=a.createTexture(),a.bindTexture(f,g.texture),"cubemap"==p?(a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[1]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[3]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,
0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[4]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[5]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[0]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d[2])):a.texImage2D(f,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d),a.texParameteri(f,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(f,a.TEXTURE_MAG_FILTER,
a.LINEAR)):(g.vertPosLocation=a.getAttribLocation(g,"a_vertCoord"),a.enableVertexAttribArray(g.vertPosLocation),g.cubeVertBuf=a.createBuffer(),g.cubeVertTexCoordBuf=a.createBuffer(),g.cubeVertIndBuf=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertTexCoordBuf),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.cubeVertIndBuf),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),a.STATIC_DRAW),g.perspUniform=a.getUniformLocation(g,
"u_perspMatrix"),g.cubeUniform=a.getUniformLocation(g,"u_cubeMatrix"),g.level=-1,g.currentNodes=[],g.nodeCache=[],g.nodeCacheTimestamp=0);if(0!==a.getError())throw console.log("Error: Something went wrong with WebGL!"),{type:"webgl error"};D()}};this.destroy=function(){B!==s&&(r!==s&&B.removeChild(r),J!==s&&B.removeChild(J))};this.resize=function(){var d=D.devicePixelRatio||1;r.width=r.clientWidth*d;r.height=r.clientHeight*d;a&&(a.viewport(0,0,r.width,r.height),"multires"!=p&&a.uniform1f(g.aspectRatio,
r.width/r.height))};this.resize();this.render=function(h,e,k,z){var f;if(a||"multires"!=p&&"cubemap"!=p){if("multires"!=p){k=2*Math.atan(Math.tan(0.5*k)/(r.width/r.height));k=1/Math.tan(0.5*k);if("equirectangular"==p&&L!==s){f=L[0];var b=L[1],t=h,l=e,q=Math.cos(b)*Math.sin(h)*Math.sin(f)+Math.cos(h)*(Math.cos(f)*Math.cos(e)+Math.sin(b)*Math.sin(f)*Math.sin(e)),B=-Math.sin(h)*Math.sin(b)+Math.cos(h)*Math.cos(b)*Math.sin(e);h=Math.cos(b)*Math.cos(f)*Math.sin(h)+Math.cos(h)*(-Math.cos(e)*Math.sin(f)+
Math.cos(f)*Math.sin(b)*Math.sin(e));h=Math.asin(h);e=Math.atan2(B,q);f=[Math.cos(t)*(Math.sin(b)*Math.sin(f)*Math.cos(l)-Math.cos(f)*Math.sin(l)),Math.cos(t)*Math.cos(b)*Math.cos(l),Math.cos(t)*(Math.cos(f)*Math.sin(b)*Math.cos(l)+Math.sin(l)*Math.sin(f))];b=[-Math.cos(h)*Math.sin(e),Math.cos(h)*Math.cos(e)];b=Math.acos((f[0]*b[0]+f[1]*b[1])/(Math.sqrt(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*Math.sqrt(b[0]*b[0]+b[1]*b[1])));0>f[2]&&(b=2*Math.PI-b);a.uniform1f(g.rot,b)}a.uniform1f(g.psi,e);a.uniform1f(g.theta,
h);a.uniform1f(g.f,k);!0===la&&"equirectangular"==p&&(a.bindTexture(a.TEXTURE_2D,g.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d));a.drawArrays(a.TRIANGLES,0,6)}else{f=r.width/r.height;b=2*Math.atan(Math.tan(k/2)*r.height/r.width);b=1/Math.tan(b/2);f=[b/f,0,0,0,0,b,0,0,0,0,100.1/-99.9,20/-99.9,0,0,-1,0];for(b=1;b<d.maxLevel&&r.width>d.tileResolution*Math.pow(2,b-1)*Math.tan(k/2)*0.707;)b++;g.level=b;b=[1,0,0,0,1,0,0,0,1];b=$(b,-h,"x");b=$(b,e,"y");b=[b[0],b[1],b[2],0,b[3],b[4],
b[5],0,b[6],b[7],b[8],0,0,0,0,1];a.uniformMatrix4fv(g.perspUniform,!1,new Float32Array(ga(f)));a.uniformMatrix4fv(g.cubeUniform,!1,new Float32Array(ga(b)));b=[f[0]*b[0],f[0]*b[1],f[0]*b[2],0,f[5]*b[4],f[5]*b[5],f[5]*b[6],0,f[10]*b[8],f[10]*b[9],f[10]*b[10],f[11],-b[8],-b[9],-b[10],0];g.nodeCache.sort(ea);200<g.nodeCache.length&&g.nodeCache.length>g.currentNodes.length+50&&g.nodeCache.splice(200,g.nodeCache.length-200);g.currentNodes=[];t="fbudlr".split("");for(f=0;6>f;f++)l=new I(aa[f],t[f],1,0,0,
d.fullpath),Y(b,l,h,e,k);g.currentNodes.sort(P);for(h=0;h<g.currentNodes.length;h++)if(!g.currentNodes[h].texture){setTimeout(ma(g.currentNodes[h]),0);break}if(!g.drawInProgress){g.drawInProgress=!0;for(h=0;h<g.currentNodes.length;h++)g.currentNodes[h].textureLoaded&&(a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertBuf),a.bufferData(a.ARRAY_BUFFER,new Float32Array(g.currentNodes[h].vertices),a.STATIC_DRAW),a.vertexAttribPointer(g.vertPosLocation,3,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertTexCoordBuf),
a.vertexAttribPointer(g.texCoordLocation,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,g.currentNodes[h].texture),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0));g.drawInProgress=!1}}if(z!==s)return r.toDataURL("image/png")}else for(f=ha/2,z={f:"translate3d(-"+(f+2)+"px, -"+(f+2)+"px, -"+f+"px)",b:"translate3d("+(f+2)+"px, -"+(f+2)+"px, "+f+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(f+2)+"px, -"+f+"px, "+(f+2)+"px) rotateX(270deg)",d:"translate3d(-"+(f+2)+"px, "+f+"px, -"+(f+2)+"px) rotateX(90deg)",
l:"translate3d(-"+f+"px, -"+(f+2)+"px, "+(f+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+f+"px, -"+(f+2)+"px, -"+(f+2)+"px) rotateY(270deg)"},k=1/Math.tan(k/2),k=k*r.width/(D.devicePixelRatio||1)/2+"px",e="perspective("+k+") translateZ("+k+") rotateX("+h+"rad) rotateY("+e+"rad) ",k=Object.keys(z),h=0;6>h;h++)f=J.querySelector(".pnlm-"+k[h]+"face").style,f.webkitTransform=e+z[k[h]],f.transform=e+z[k[h]]};this.isLoading=function(){if(a&&"multires"==p)for(var d=0;d<g.currentNodes.length;d++)if(!g.currentNodes[d].textureLoaded)return!0;
return!1};this.getCanvas=function(){return r}}var k="attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}",z="attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",ya="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nconst float PI = 3.14159265358979323846264;\nuniform samplerCube u_image;\nvarying vec2 v_texCoord;\nvoid main() {\nvec3 planePos = vec3(v_texCoord.xy, 0.0);\nplanePos.x *= u_aspectRatio;\nvec3 viewVector = planePos - vec3(0.0,0.0,-u_f);\nfloat sinpsi = sin(-u_psi);\nfloat cospsi = cos(-u_psi);\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nvec3 viewVectorTheta = viewVector;\nviewVectorTheta.z = viewVector.z * costheta - viewVector.y * sintheta;\nviewVectorTheta.y = viewVector.z * sintheta + viewVector.y * costheta;\nvec3 viewVectorPsi = viewVectorTheta;\nviewVectorPsi.x = viewVectorTheta.x * cospsi - viewVectorTheta.z * sinpsi;\nviewVectorPsi.z = viewVectorTheta.x * sinpsi + viewVectorTheta.z * cospsi;\ngl_FragColor = textureCube(u_image, viewVectorPsi);\n}",
U="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);\nif(lambda > PI)\nlambda = lambda - PI * 2.0;\nif(lambda < -PI)\nlambda = lambda + PI * 2.0;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = vec4(0, 0, 0, 1.0);\nelse\ngl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}",
na="varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";return{renderer:function(h,d,k,s){return new P(h,d,k,s)}}}(window,document);window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(D,h){window.setTimeout(D,1E3/60)}}());
window.pannellum=function(D,h,s){function P(k,z){function P(){var a=h.createElement("div");a.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";if(1==a.getElementsByTagName("i").length)B();else{var b;if("cubemap"==c.type){C=[];for(a=0;6>a;a++)C.push(new Image),C[a].crossOrigin="anonymous";n.load.lbox.style.display="block";n.load.lbar.style.display="none"}else if("multires"==c.type)a=JSON.parse(JSON.stringify(c.multiRes)),c.basePath&&c.multiRes.basePath?a.basePath=c.basePath+c.multiRes.basePath:
c.basePath&&(a.basePath=c.basePath),C=a;else if(!0===c.dynamic)C=c.panorama;else{if(c.panorama===s){B("No panorama image was specified.");return}C=new Image}var d=function(a){return/^(?:[a-z]+:)?\/\//i.test(a)|"/"==a[0]};if("cubemap"==c.type)for(var f=6,g=function(){f--;0===f&&U()},e=function(a){var c=h.createElement("a");c.href=a.target.src;c.innerHTML=c.href;B("The file "+c.outerHTML+" could not be accessed.")},a=0;a<C.length;a++)C[a].onload=g,C[a].onerror=e,b=c.cubeMap[a],c.basePath&&!d(b)&&(b=
c.basePath+b),C[a].src=encodeURI(b);else if("multires"==c.type)U();else if(b="",c.basePath&&(b=c.basePath),!0!==c.dynamic){b=d(c.panorama)?c.panorama:b+c.panorama;C.onload=function(){D.URL.revokeObjectURL(this.src);U()};var l=new XMLHttpRequest;l.onloadend=function(){if(200!=l.status){var a=h.createElement("a");a.href=encodeURI(b);a.innerHTML=a.href;B("The file "+a.outerHTML+" could not be accessed.")}na(this.response);n.load.msg.innerHTML=""};l.onprogress=function(a){if(a.lengthComputable){n.load.lbarFill.style.width=
a.loaded/a.total*100+"%";var c,M;1E6<a.total?(c="MB",M=(a.loaded/1E6).toFixed(2),a=(a.total/1E6).toFixed(2)):1E3<a.total?(c="kB",M=(a.loaded/1E3).toFixed(1),a=(a.total/1E3).toFixed(1)):(c="B",M=a.loaded,a=a.total);n.load.msg.innerHTML=M+" / "+a+" "+c}else n.load.lbox.style.display="block",n.load.lbar.style.display="none"};try{l.open("GET",b,!0)}catch(m){B("There is something wrong with the panorama URL.")}l.responseType="blob";l.send()}k.classList.add("pnlm-grab");k.classList.remove("pnlm-grabbing")}}
function U(){v=new libpannellum.renderer(E,C,c.type,c.dynamic);!0!==c.dynamic&&(C=s);ua||(ua=!0,k.addEventListener("mousedown",la,!1),h.addEventListener("mousemove",xa,!1),h.addEventListener("mouseup",I,!1),k.addEventListener("mousewheel",r,!1),k.addEventListener("DOMMouseScroll",r,!1),k.addEventListener("mozfullscreenchange",l,!1),k.addEventListener("webkitfullscreenchange",l,!1),k.addEventListener("msfullscreenchange",l,!1),k.addEventListener("fullscreenchange",l,!1),D.addEventListener("resize",
aa,!1),k.addEventListener("keydown",g,!1),k.addEventListener("keyup",ha,!1),k.addEventListener("blur",a,!1),h.addEventListener("mouseleave",I,!1),k.addEventListener("touchstart",Y,!1),k.addEventListener("touchmove",Z,!1),k.addEventListener("touchend",$,!1),k.addEventListener("pointerdown",ga,!1),k.addEventListener("pointermove",ma,!1),k.addEventListener("pointerup",T,!1),k.addEventListener("pointerleave",T,!1),D.navigator.pointerEnabled&&(k.style.touchAction="none"));try{v.init(c.haov*Math.PI/180,
c.vaov*Math.PI/180,c.vOffset*Math.PI/180,e)}catch(M){"webgl error"==M.type||"no webgl"==M.type?B():"webgl size error"==M.type&&B("This panorama is too big for your device! It's "+M.width+"px wide, but your device only supports images up to "+M.maxWidth+"px wide. Try another device. (If you're the author, try scaling down the image.)")}setTimeout(function(){},500)}function na(a){var b=new FileReader;b.addEventListener("loadend",function(){var d=b.result;if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)){var f=
d.indexOf("\u00ff\u00c2");(0>f||65536<f)&&B("Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).")}f=d.indexOf("<x:xmpmeta");if(-1<f&&!0!==c.ignoreGPanoXMP){var g=d.substring(f,d.indexOf("</x:xmpmeta>")+12),e=function(a){var c;0<=g.indexOf(a+'="')?(c=g.substring(g.indexOf(a+'="')+a.length+2),c=c.substring(0,c.indexOf('"'))):0<=g.indexOf(a+">")&&(c=g.substring(g.indexOf(a+">")+a.length+1),c=c.substring(0,c.indexOf("<")));
return c!==s?Number(c):null},d=e("GPano:FullPanoWidthPixels"),f=e("GPano:CroppedAreaImageWidthPixels"),h=e("GPano:FullPanoHeightPixels"),k=e("GPano:CroppedAreaImageHeightPixels"),l=e("GPano:CroppedAreaTopPixels"),m=e("GPano:PoseHeadingDegrees"),n=e("GPano:PosePitchDegrees"),e=e("GPano:PoseRollDegrees");null!==d&&null!==f&&null!==h&&null!==k&&null!==l&&(c.haov=f/d*360,c.vaov=k/h*180,c.vOffset=-180*((l+k/2)/h-0.5),null!==m&&(c.northOffset=m,!1!==c.compass&&(c.compass=!0)),null!==n&&null!==e&&(C.horizonPitch=
n/180*Math.PI,C.horizonRoll=e/180*Math.PI))}C.src=D.URL.createObjectURL(a)});b.readAsBinaryString!==s?b.readAsBinaryString(a):b.readAsText(a)}function B(a){n.errorMsg.innerHTML=a!==s?"<p>"+a+"</p>":"<p>Your browser does not have the necessary WebGL support to display this panorama.</p>";u.load.style.display="none";n.load.box.style.display="none";n.errorMsg.style.display="table";E.style.display="none"}function d(a){var c=p(a);O.style.left=c.x+"px";O.style.top=c.y+"px";clearTimeout(d.t1);clearTimeout(d.t2);
O.style.display="block";O.style.opacity=1;d.t1=setTimeout(function(){O.style.opacity=0},2E3);d.t2=setTimeout(function(){O.style.display="none"},2500);a.preventDefault()}function p(a){var c=k.getBoundingClientRect(),b={};b.x=a.clientX-c.left;b.y=a.clientY-c.top;return b}function la(a){a.preventDefault();k.focus();if(F){var b=p(a);c.hotSpotDebug&&(a=ea(a),console.log("Pitch: "+a[0]+", Yaw: "+a[1]+", Center Pitch: "+c.pitch+", Center Yaw: "+c.yaw+", HFOV: "+c.hfov));c.autoRotate=!1;R=!0;x=Date.now();
V=b.x;W=b.y;ia=c.yaw;ja=c.pitch;k.classList.add("pnlm-grabbing");k.classList.remove("pnlm-grab");L()}}function ea(a){var b=p(a),d=v.getCanvas();a=b.x/d.width*2-1;var f=(1-b.y/d.height*2)*d.height/d.width,e=1/Math.tan(c.hfov*Math.PI/360),g=Math.sin(c.pitch*Math.PI/180),h=Math.cos(c.pitch*Math.PI/180),b=e*h-f*g,d=Math.sqrt(a*a+b*b),f=180*Math.atan((f*h+e*g)/d)/Math.PI;a=180*Math.atan2(a/d,b/d)/Math.PI+c.yaw;return[f,a]}function xa(a){if(R&&F){x=Date.now();var b=v.getCanvas();a=p(a);var d=180*(Math.atan(V/
b.width*2-1)-Math.atan(a.x/b.width*2-1))/Math.PI*c.hfov/90+ia;G=(d-c.yaw)%360*0.2;c.yaw=d;d=360*Math.atan(Math.tan(c.hfov/360*Math.PI)*b.height/b.width)/Math.PI;b=180*(Math.atan(a.y/b.height*2-1)-Math.atan(W/b.height*2-1))/Math.PI*d/90+ja;H=0.2*(b-c.pitch);c.pitch=b}}function I(){R&&(R=!1,15<Date.now()-x&&(H=G=0),k.classList.add("pnlm-grab"),k.classList.remove("pnlm-grabbing"))}function Y(a){if(F){var b=p(a.targetTouches[0]);V=b.x;W=b.y;2==a.targetTouches.length&&(a=p(a.targetTouches[1]),V+=0.5*(a.x-
b.x),W+=0.5*(a.y-b.y),ba=Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y)));R=!0;x=Date.now();ia=c.yaw;ja=c.pitch;L()}}function Z(a){a.preventDefault();F&&(x=Date.now());if(R&&F){var b=p(a.targetTouches[0]),d=b.x,f=b.y;2==a.targetTouches.length&&-1!=ba&&(a=p(a.targetTouches[1]),d+=0.5*(a.x-b.x),f+=0.5*(a.y-b.y),b=Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y)),q(c.hfov+0.1*(ba-b)),ba=b);d=0.1*(V-d)+ia;G=(d-c.yaw)%360*0.2;c.yaw=d;f=0.1*(f-W)+ja;H=0.2*(f-c.pitch);c.pitch=f}}function $(){R=!1;150<
Date.now()-x&&(H=G=0);ba=-1}function ga(a){"touch"==a.pointerType&&(S.push(a.pointerId),ca.push({clientX:a.clientX,clientY:a.clientY}),a.targetTouches=ca,Y(a),a.preventDefault())}function ma(a){if("touch"==a.pointerType)for(var c=0;c<S.length;c++)if(a.pointerId==S[c]){ca[c]={clientX:a.clientX,clientY:a.clientY};a.targetTouches=ca;Z(a);break}}function T(a){if("touch"==a.pointerType){for(var c=!1,b=0;b<S.length;b++)a.pointerId==S[b]&&(S[b]=s),S[b]&&(c=!0);c||(S=[],ca=[],$());a.preventDefault()}}function r(a){a.preventDefault();
F&&(x=Date.now(),a.wheelDeltaY?(q(c.hfov-0.05*a.wheelDeltaY),K=0>a.wheelDelta?1:-1):a.wheelDelta?(q(c.hfov-0.05*a.wheelDelta),K=0>a.wheelDelta?1:-1):a.detail&&(q(c.hfov+1.5*a.detail),K=0<a.detail?1:-1),L())}function g(a){a.preventDefault();c.autoRotate=!1;var b=a.keycode;a.which&&(b=a.which);27==b?ka&&t():J(b,!0)}function a(){for(var a=0;10>a;a++)m[a]=!1}function ha(a){a.preventDefault();var c=a.keycode;a.which&&(c=a.which);J(c,!1)}function J(a,c){var b=!1;switch(a){case 109:case 189:case 17:m[0]!=
c&&(b=!0);m[0]=c;break;case 107:case 187:case 16:m[1]!=c&&(b=!0);m[1]=c;break;case 38:m[2]!=c&&(b=!0);m[2]=c;break;case 87:m[6]!=c&&(b=!0);m[6]=c;break;case 40:m[3]!=c&&(b=!0);m[3]=c;break;case 83:m[7]!=c&&(b=!0);m[7]=c;break;case 37:m[4]!=c&&(b=!0);m[4]=c;break;case 65:m[8]!=c&&(b=!0);m[8]=c;break;case 39:m[5]!=c&&(b=!0);m[5]=c;break;case 68:m[9]!=c&&(b=!0),m[9]=c}b&&c&&(X="undefined"!==typeof performance&&performance.now()?performance.now():Date.now(),L())}function aa(){v.resize();L();l()}function L(){oa||
(oa=!0,N())}function N(){var a;F&&(180<c.yaw?c.yaw-=360:-180>c.yaw&&(c.yaw+=360),a=c.yaw,c.yaw=Math.max(c.minYaw,Math.min(c.maxYaw,c.yaw)),!1!==c.autoRotate&&a!=c.yaw&&(c.autoRotate*=-1),c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,c.pitch)),v.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180),sa(),c.compass&&(da.style.transform="rotate("+(-c.yaw-c.northOffset)+"deg)",da.style.webkitTransform="rotate("+(-c.yaw-c.northOffset)+"deg)"));if(R)requestAnimationFrame(N);else if(m[0]||m[1]||
m[2]||m[3]||m[4]||m[5]||m[6]||m[7]||m[8]||m[9]||c.autoRotate||0.01<Math.abs(G)||0.01<Math.abs(H)||0.01<Math.abs(K)){if(F){a=c.pitch;var b=c.yaw,d=c.hfov,f;f="undefined"!==typeof performance&&performance.now()?performance.now():Date.now();X===s&&(X=f);var e=(f-X)*c.hfov/1700,e=Math.min(e,1);m[0]&&!0===c.keyboardZoom&&q(c.hfov+(0.8*K+0.5)*e);m[1]&&!0===c.keyboardZoom&&q(c.hfov+(0.8*K-0.2)*e);if(m[2]||m[6])c.pitch+=(0.8*H+0.2)*e;if(m[3]||m[7])c.pitch+=(0.8*H-0.2)*e;if(m[4]||m[8])c.yaw+=(0.8*G-0.2)*e;
if(m[5]||m[9])c.yaw+=(0.8*G+0.2)*e;var g=Date.now()-x;c.autoRotate&&g>c.autoRotateInactivityDelay&&!1!==c.autoRotateStopDelay&&(1E-6<e&&(c.yaw-=c.autoRotate/60*e),c.autoRotateStopDelay&&(c.autoRotateStopDelay-=f-X,0>=c.autoRotateStopDelay&&(c.autoRotateStopDelay=!1)));0<e&&(m[4]||m[5]||m[8]||m[9]||(c.yaw+=G*e*0.85),m[2]||m[3]||m[6]||m[7]||(c.pitch+=H*e*0.85),m[0]||m[1]||q(c.hfov+K*e*0.85));X=f;0<e&&(G=0.8*G+(c.yaw-b)/e*0.2,H=0.8*H+(c.pitch-a)/e*0.2,K=0.8*K+(c.hfov-d)/e*0.2,G=Math.min(5,Math.max(G,
-5)),H=Math.min(5,Math.max(H,-5)),K=Math.min(5,Math.max(K,-5)));m[0]&&m[0]&&(K=0);(m[2]||m[6])&&(m[3]||m[7])&&(H=0);(m[4]||m[8])&&(m[5]||m[9])&&(G=0)}requestAnimationFrame(N)}else v&&(v.isLoading()||!0===c.dynamic&&va)?requestAnimationFrame(N):oa=!1}function e(){if(w!==s&&(w.destroy(),c.sceneFadeDuration&&w.fadeImg!==s)){w.fadeImg.style.opacity=0;var a=w.fadeImg;w=s;setTimeout(function(){E.removeChild(a)},c.sceneFadeDuration)}da.style.display=c.compass?"inline":"none";Q();n.load.box.style.display=
"none";A!==s&&(E.removeChild(A),A=s);F=!0;L()}function Q(){pa||(c.hotSpots?(c.hotSpots=c.hotSpots.sort(function(a,c){return a.pitch<c.pitch}),c.hotSpots.forEach(function(a){var c=h.createElement("div");c.className="pnlm-hotspot pnlm-tooltip pnlm-sprite pnlm-"+fa(a.type);var b=h.createElement("span");a.text&&(b.innerHTML=fa(a.text));var d;if(a.URL)d=h.createElement("a"),d.href=encodeURI(a.URL),d.target="_blank",E.appendChild(d),c.style.cursor="pointer",b.style.cursor="pointer",d.appendChild(c);else if(a.video)d=
h.createElement("video"),d.src=encodeURI(a.video),d.controls=!0,d.style.width=a.width+"px",E.appendChild(c),b.appendChild(d);else if(a.image){d=h.createElement("a");d.href=encodeURI(a.image);d.target="_blank";b.appendChild(d);var e=h.createElement("img");e.src=encodeURI(a.image);e.style.width=a.width+"px";e.style.paddingTop="5px";E.appendChild(c);d.appendChild(e);b.style.maxWidth="initial"}else a.sceneId&&(c.onclick=function(){y(a.sceneId,a.targetPitch,a.targetYaw);return!1},c.ontouchend=function(){y(a.sceneId,
a.targetPitch,a.targetYaw);return!1},c.style.cursor="pointer",b.style.cursor="pointer"),E.appendChild(c);c.appendChild(b);b.style.width=b.scrollWidth-20+"px";b.style.marginLeft=-(b.scrollWidth-26)/2+"px";b.style.marginTop=-b.scrollHeight-12+"px";a.div=c})):c.hotSpots=[],pa=!0,sa())}function sa(){c.hotSpots.forEach(function(a){var b=Math.sin(a.pitch*Math.PI/180),d=Math.cos(a.pitch*Math.PI/180),e=Math.sin(c.pitch*Math.PI/180),f=Math.cos(c.pitch*Math.PI/180),g=Math.cos((-a.yaw+c.yaw)*Math.PI/180),h=
Math.tan(c.hfov*Math.PI/360),k=b*e+d*g*f;if(90>=a.yaw&&-90<a.yaw&&0>=k||(90<a.yaw||-90>=a.yaw)&&0>=k)a.div.style.visibility="hidden";else{a.div.style.visibility="visible";var l=v.getCanvas(),m=l.width/(D.devicePixelRatio||1),l=l.height/(D.devicePixelRatio||1),b="translate("+(-m/h*Math.sin((-a.yaw+c.yaw)*Math.PI/180)*d/k/2+m/2-13)+"px, "+(-m/h*(b*f-d*g*e)/k/2+l/2-13)+"px) translateZ(9999px)";a.div.style.webkitTransform=b;a.div.style.MozTransform=b;a.div.style.transform=b}})}function f(a){c={};var b,
d=["haov","vaov","vOffset","northOffset"];for(b in qa)qa.hasOwnProperty(b)&&(c[b]=qa[b]);for(b in z.default)z.default.hasOwnProperty(b)&&(c[b]=z.default[b],0<=d.indexOf(b)&&(c.ignoreGPanoXMP=!0));if(null!==a&&""!==a&&z.scenes&&z.scenes[a]){var e=z.scenes[a];for(b in e)e.hasOwnProperty(b)&&(c[b]=e[b],0<=d.indexOf(b)&&(c.ignoreGPanoXMP=!0));c.activeScene=a}for(b in z)z.hasOwnProperty(b)&&(c[b]=z[b],0<=d.indexOf(b)&&(c.ignoreGPanoXMP=!0))}function b(){if("preview"in c){var a=c.preview;c.basePath&&(a=
c.basePath+a);A=h.createElement("div");A.className="pnlm-preview-img";A.style.backgroundImage="url('"+encodeURI(a)+"')";E.appendChild(A)}for(var b in c)if(c.hasOwnProperty(b))switch(b){case "title":n.title.innerHTML=fa(c[b]);n.container.style.display="inline";break;case "author":n.author.innerHTML="by "+fa(c[b]);n.container.style.display="inline";break;case "fallback":n.errorMsg.innerHTML='<p>Your browser does not support WebGL.<br><a href="'+encodeURI(c[b])+'" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
break;case "hfov":q(c[b]);break;case "pitch":c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,c.pitch));break;case "autoLoad":!0===c[b]&&w===s&&(n.load.box.style.display="inline",u.load.style.display="none",P());break;case "autoRotate":c.autoRotate=c[b];break;case "autoRotateInactivityDelay":c.autoRotateInactivityDelay=c[b];break;case "autoRotateStopDelay":c.autoRotateStopDelay=c[b];break;case "showZoomCtrl":u.zoom.style.display=c[b]?"block":"none";break;case "showFullscreenCtrl":u.fullscreen.style.display=
c[b]&&("fullscreen"in h||"mozFullScreen"in h||"webkitIsFullScreen"in h||"msFullscreenElement"in h)?"block":"none"}}function t(){if(F&&!wa)if(ka)h.exitFullscreen?h.exitFullscreen():h.mozCancelFullScreen?h.mozCancelFullScreen():h.webkitCancelFullScreen?h.webkitCancelFullScreen():h.msExitFullscreen&&h.msExitFullscreen();else try{k.requestFullscreen?k.requestFullscreen():k.mozRequestFullScreen?k.mozRequestFullScreen():k.msRequestFullscreen?k.msRequestFullscreen():k.webkitRequestFullScreen()}catch(a){}}
function l(){h.fullscreen||h.mozFullScreen||h.webkitIsFullScreen||h.msFullscreenElement?(u.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),ka=!0):(u.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),ka=!1)}function q(a){var b=c.minHfov;"multires"==c.type&&v&&(b=Math.min(b,v.getCanvas().width/(c.multiRes.cubeResolution/90*0.9)));b>=c.maxHfov?console.log("HFOV bounds do not make sense (minHfov >= maxHfov)."):c.hfov=a<b?b:a>c.maxHfov?c.maxHfov:a}function ta(){n.load.box.style.display=
"none";n.errorMsg.style.display="none";wa=!1;u.load.style.display="none";n.load.box.style.display="inline";P()}function y(a,d,e){F=!1;w=v;var g;if(c.sceneFadeDuration){g=new Image;g.className="pnlm-fade-img";g.style.transition="opacity "+c.sceneFadeDuration/1E3+"s";g.style.width="100%";g.style.height="100%";var h=v.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180,!0);h!==s&&(g.src=h);E.appendChild(g);w.fadeImg=g}d="same"===d?c.pitch:d;e="same"===e?c.yaw:"sameAzimuth"===e?c.yaw+c.northOffset-
z.scenes[a].northOffset:e;if(c.hotSpots)for(g=0;g<c.hotSpots.length;g++){for(h=c.hotSpots[g].div;h.parentNode!=E;)h=h.parentNode;E.removeChild(h);delete c.hotSpots[g].div}pa=!1;delete c.hotSpots;f(a);b();d&&(c.pitch=d);e&&(c.yaw=e);ta()}function fa(a){return String(a).replace(/&/g,"&amp;").replace('"',"&quot;").replace("'","&#39;").replace("<","&lt;").replace(">","&gt;").replace("/","&#x2f;")}var c,v,w,A,R=!1,x=Date.now(),V=0,W=0,ba=-1,ia=0,ja=0,m=Array(10),ka=!1,F=!1,wa=!1,ua=!1,C,X,G=0,H=0,K=0,
oa=!1,va=!1,pa=!1,qa={hfov:100,minHfov:50,maxHfov:120,pitch:0,minPitch:-85,maxPitch:85,yaw:0,minYaw:-360,maxYaw:360,haov:360,vaov:180,vOffset:0,autoRotate:!1,autoRotateInactivityDelay:-1,type:"equirectangular",northOffset:0,showFullscreenCtrl:!0,dynamic:!1,keyboardZoom:!0};k="string"===typeof k?h.getElementById(k):k;k.className+=" pnlm-container";k.tabIndex=0;var E=h.createElement("div");E.className="pnlm-render-container";k.appendChild(E);var ra=h.createElement("div");ra.className="pnlm-dragfix";
k.appendChild(ra);var O=h.createElement("span");O.className="pnlm-about-msg";O.innerHTML='<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.2.0';k.appendChild(O);ra.addEventListener("contextmenu",d);var n={};n.container=h.createElement("div");n.container.className="pnlm-panorama-info";n.title=h.createElement("div");n.title.className="pnlm-title-box";n.container.appendChild(n.title);n.author=h.createElement("div");n.author.className="pnlm-author-box";n.container.appendChild(n.author);
k.appendChild(n.container);n.load={};n.load.box=h.createElement("div");n.load.box.className="pnlm-load-box";n.load.box.innerHTML="<p>Loading...</p>";n.load.lbox=h.createElement("div");n.load.lbox.className="pnlm-lbox";n.load.lbox.innerHTML='<div class="pnlm-loading"></div>';n.load.box.appendChild(n.load.lbox);n.load.lbar=h.createElement("div");n.load.lbar.className="pnlm-lbar";n.load.lbarFill=h.createElement("div");n.load.lbarFill.className="pnlm-lbar-fill";n.load.lbar.appendChild(n.load.lbarFill);
n.load.box.appendChild(n.load.lbar);n.load.msg=h.createElement("p");n.load.msg.className="pnlm-lmsg";n.load.box.appendChild(n.load.msg);k.appendChild(n.load.box);n.errorMsg=h.createElement("div");n.errorMsg.className="pnlm-error-msg pnlm-info-box";k.appendChild(n.errorMsg);var u={};u.load=h.createElement("div");u.load.className="pnlm-load-button";u.load.innerHTML="<p>Click to<br>Load<br>Panorama<p>";u.load.addEventListener("click",ta);k.appendChild(u.load);u.zoom=h.createElement("div");u.zoom.className=
"pnlm-zoom-controls pnlm-controls";u.zoomIn=h.createElement("div");u.zoomIn.className="pnlm-zoom-in pnlm-sprite pnlm-control";u.zoomIn.addEventListener("click",function(){F&&q(c.hfov-5)});u.zoom.appendChild(u.zoomIn);u.zoomOut=h.createElement("div");u.zoomOut.className="pnlm-zoom-out pnlm-sprite pnlm-control";u.zoomOut.addEventListener("click",function(){F&&q(c.hfov+5)});u.zoom.appendChild(u.zoomOut);k.appendChild(u.zoom);u.fullscreen=h.createElement("div");u.fullscreen.addEventListener("click",t);
u.fullscreen.className="pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";(h.fullscreenEnabled||h.mozFullScreenEnabled||h.webkitFullscreenEnabled)&&k.appendChild(u.fullscreen);var da=h.createElement("div");da.className="pnlm-compass pnlm-controls pnlm-control";k.appendChild(da);z.firstScene?f(z.firstScene):z.default&&z.default.firstScene?f(z.default.firstScene):f(null);b();var S=[],ca=[];this.getPitch=function(){return c.pitch};this.setPitch=
function(a){c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,a));return this};this.getPitchBounds=function(){return[c.minPitch,c.maxPitch]};this.setPitchBounds=function(a){c.minPitch=Math.max(-90,Math.min(a[0],90));c.maxPitch=Math.max(-90,Math.min(a[1],90));return this};this.getYaw=function(){return c.yaw};this.setYaw=function(a){for(;180<a;)a-=360;for(;-180>a;)a+=360;c.yaw=Math.max(c.minYaw,Math.min(c.maxYaw,a));return this};this.getYawBounds=function(){return[c.minYaw,c.maxYaw]};this.setYawBounds=
function(a){c.minYaw=Math.max(-360,Math.min(a[0],360));c.maxYaw=Math.max(-360,Math.min(a[1],360));return this};this.getHfov=function(){return c.hfov};this.setHfov=function(a){q(a);return this};this.getHfovBounds=function(){return[c.minHfov,c.maxHfov]};this.setHfovBounds=function(a){c.minHfov=Math.max(0,a[0]);c.maxHfov=Math.max(0,a[1]);return this};this.getRenderer=function(){return v};this.setUpdate=function(a){va=!0===a;v===s?U():requestAnimationFrame(N);return this};this.mouseEventToCoords=function(a){return ea(a)}}
return{viewer:function(h,s){return new P(h,s)}}}(window,document);
