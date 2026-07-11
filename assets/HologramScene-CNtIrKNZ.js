import{j as M}from"./index-BJSs873v.js";import{a as L}from"./icons-CcsL4hBU.js";import{S as K,P as Q,W as X,G as Y,L as Z,a as ee,b as N,c as H,A as l,M as g,d as x,T as te,C as ae,e as z,f as ne,g as oe,h as re,i as R,B as O,j as G,k as _,l as $,E as se,V as ie,m as ce}from"./three-LiJupoUT.js";function le(){if(navigator.userAgent.toLowerCase().includes("jsdom"))return!1;const s=document.createElement("canvas");try{return!!(s.getContext("webgl2")??s.getContext("webgl"))}catch{return!1}}function P(s,a,o,t){const r=new se(0,0,s,s*.28,0,Math.PI*2).getPoints(180).map(c=>new ie(c.x,o,c.y)),i=new O().setFromPoints(r),e=new H({color:a,transparent:!0,opacity:.72,blending:l}),n=new ce(i,e);return n.rotation.x=t,n}function q(s,a,o,t,d){const r=P(s,a,o,t);return r.rotation.z=d,r}function de(){const a=new Float32Array(7200),o=new Float32Array(2400*3),t=new R("#00d5ff"),d=new R("#8d5cff");for(let e=0;e<2400;e+=1){const n=Math.acos(1-2*e/2400),c=Math.PI*(1+Math.sqrt(5))*e,m=2.45+Math.sin(e*.17)*.015,S=Math.cos(c)*Math.sin(n)*m,y=Math.cos(n)*m,C=Math.sin(c)*Math.sin(n)*m;a[e*3]=S,a[e*3+1]=y,a[e*3+2]=C;const v=t.clone().lerp(d,(y/m+1)*.28);o[e*3]=v.r,o[e*3+1]=v.g,o[e*3+2]=v.b}const r=new O;r.setAttribute("position",new G(a,3)),r.setAttribute("color",new G(o,3));const i=new _({size:.014,vertexColors:!0,transparent:!0,opacity:.72,blending:l,depthWrite:!1});return new $(r,i)}function me(){const a=new Float32Array(720);for(let t=0;t<240;t+=1)a[t*3]=(Math.random()-.5)*7.5,a[t*3+1]=(Math.random()-.5)*4.5,a[t*3+2]=-1.5-Math.random()*4;const o=new O;return o.setAttribute("position",new G(a,3)),new $(o,new _({color:"#28e7ff",size:.015,transparent:!0,opacity:.62,blending:l,depthWrite:!1}))}function ve({motion:s=!0}){const a=L.useRef(null),o=L.useRef(s);return L.useEffect(()=>{o.current=s},[s]),L.useEffect(()=>{const t=a.current;if(!t)return;if(!le())return t.classList.add("webgl-unavailable"),()=>t.classList.remove("webgl-unavailable");const d=new K,r=new Q(34,1,.1,100);r.position.set(0,.06,7.1);const i=new X({alpha:!0,antialias:!0});i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(i.domElement),t.classList.add("webgl-ready");const e=new Y;d.add(e);const n=de();n.position.set(.48,.3,-1.18),n.scale.setScalar(1.14),n.renderOrder=1,e.add(n);const c=new Z(new ee(new N(2.5,38,22)),new H({color:"#0078ff",transparent:!0,opacity:.14,blending:l,depthWrite:!1}));c.position.copy(n.position),c.scale.copy(n.scale),c.renderOrder=0,e.add(c);const m=new g(new N(2.58,48,28),new x({color:"#006dff",transparent:!0,opacity:.045,blending:l,depthWrite:!1}));m.position.copy(n.position),m.scale.copy(n.scale),m.renderOrder=0,e.add(m);const S=P(1.72,54783,-1.58,.08),y=P(2.18,2317311,-1.51,-.1),C=P(1.28,1308098,-1.45,.04),v=q(3,2317311,-.34,.34,.12),E=q(3.18,9264383,-.12,-.22,-.36);e.add(S,y,C,v,E);const h=new g(new te(1.22,.018,8,180),new x({color:"#00d5ff",transparent:!0,opacity:.85,blending:l,depthWrite:!1}));h.position.set(0,-1.58,.52),h.rotation.x=Math.PI*.5,h.scale.set(1.78,1.78,1),h.renderOrder=2,e.add(h);const b=new g(new ae(1.15,120),new x({color:"#8d5cff",transparent:!0,opacity:.08,blending:l,depthWrite:!1}));b.position.set(0,-1.6,.48),b.rotation.x=Math.PI*.5,b.scale.set(1.5,1.5,1),b.renderOrder=1,e.add(b);const U=new g(new z(3.4,1.2),new x({color:"#00d5ff",transparent:!0,opacity:.12,blending:l,depthWrite:!1}));U.position.set(0,-1.18,.5),U.renderOrder=1,e.add(U);const W=new ne().load("/portfolio-strainus/avatar/strainus-avatar.jpeg");W.colorSpace=oe;const T=new re({uniforms:{uMap:{value:W},uCyan:{value:new R("#13f5c2")},uViolet:{value:new R("#8d5cff")},uTime:{value:0}},vertexShader:`
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vec3 transformed = position;
          transformed.x += sin((position.y + 0.45) * 8.0) * 0.012;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform vec3 uCyan;
        uniform vec3 uViolet;
        uniform float uTime;
        varying vec2 vUv;

        void main() {
          float glitchLine = step(0.985, sin((vUv.y + uTime * 0.18) * 92.0));
          float glitchOffset = glitchLine * 0.025;
          vec4 redSample = texture2D(uMap, vUv + vec2(glitchOffset, 0.0));
          vec4 baseSample = texture2D(uMap, vUv);
          vec4 blueSample = texture2D(uMap, vUv - vec2(glitchOffset * 0.75, 0.0));
          vec3 sampled = vec3(redSample.r, baseSample.g, blueSample.b);
          float luminance = dot(sampled, vec3(0.299, 0.587, 0.114));
          vec2 maskUv = (vUv - vec2(0.50, 0.47)) * vec2(0.80, 1.00);
          float portraitMask = smoothstep(0.78, 0.24, length(maskUv));
          float darkRemoval = smoothstep(0.035, 0.24, luminance);
          float scan = sin((vUv.y + uTime * 0.14) * 260.0) * 0.055;
          float rim = smoothstep(0.58, 0.76, length(maskUv)) * portraitMask;
          vec3 hologramTint = mix(uCyan, uViolet, smoothstep(0.18, 0.96, vUv.y));
          vec3 color = mix(sampled, hologramTint, 0.3) * (1.36 + scan + glitchLine * 0.28);
          color += rim * hologramTint * 0.75;
          float alpha = max(darkRemoval * portraitMask * 0.98, rim * 0.32);
          if (alpha < 0.012) {
            discard;
          }
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:l,depthWrite:!1,depthTest:!1}),f=new g(new z(2.68,2.68,8,8),T);f.position.set(0,-.43,.9),f.scale.set(1.2,1.2,1),f.renderOrder=5,e.add(f);const w=new g(new z(2.2,2.2),new x({color:"#13f5c2",transparent:!0,opacity:.035,blending:l,depthWrite:!1,wireframe:!0}));w.position.copy(f.position),w.position.z+=.02,w.scale.set(1.36,1.36,1),w.renderOrder=6,e.add(w);const k=me();e.add(k);const B=()=>{const p=t.clientWidth,u=t.clientHeight;i.setSize(p,u,!1),r.aspect=p/u,r.updateProjectionMatrix();const D=p<430?.74:p<520?.82:p<620?.9:1;e.scale.setScalar(D),e.position.set(p<520?.06:0,p<520?-.08:0,0)};B();const F=new ResizeObserver(B);F.observe(t);let A=0,V=0,j=!1;const I=()=>{V=window.requestAnimationFrame(I),o.current?(A+=.01,n.rotation.y+=.0018,c.rotation.y-=.0012,S.rotation.z+=.003,y.rotation.z-=.002,C.rotation.z+=.004,v.rotation.z+=.0012,E.rotation.z-=.001,k.rotation.y+=8e-4,T.uniforms.uTime.value=A,f.position.y=-.43+Math.sin(A*1.8)*.035,w.position.y=f.position.y,h.material.opacity=.65+Math.sin(A*3)*.18,i.render(d,r),j=!0):j||(i.render(d,r),j=!0)};return I(),()=>{window.cancelAnimationFrame(V),F.disconnect(),t.classList.remove("webgl-ready"),i.dispose(),d.traverse(p=>{const u=p;u.geometry&&u.geometry.dispose(),u.material&&(Array.isArray(u.material)?u.material:[u.material]).forEach(J=>J.dispose())}),W.dispose(),i.domElement.parentElement===t&&t.removeChild(i.domElement)}},[]),M.jsxs("div",{className:"hologram-scene",ref:a,children:[M.jsx("div",{className:"hologram-fallback","aria-hidden":"true",children:M.jsx("img",{src:"/portfolio-strainus/avatar/strainus-avatar.jpeg",alt:""})}),M.jsx("div",{className:"scene-scanlines"}),M.jsx("div",{className:"scene-vignette"})]})}export{ve as HologramScene};
