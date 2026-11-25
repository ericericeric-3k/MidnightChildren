const MAXC=6,TOT=30,KEY="cn_best";
const CR=["M70 52L86 70L78 88","M118 30L108 54L124 72","M60 130L100 150L84 182","M148 120L120 160L138 200","M92 190L112 215L98 240","M100 106L94 130L112 148"];
let S={};

const $=id=>document.getElementById(id);
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function best(g){try{if(g!=null){localStorage.setItem(KEY,g)}return localStorage.getItem(KEY)}catch(e){return null}}
function dots(){let s="";for(let i=0;i<TOT;i++){const r=12+i*3,a=i*2.4,x=100+r*Math.cos(a),y=60+r*Math.sin(a)*.6;s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i<S.lit?4:2}" fill="${i<S.lit?"#f2b134":"#4a477f"}"/>`}return `<svg viewBox="0 0 200 120" role="img" aria-label="${S.lit} of ${TOT} midnight's children awakened">${s}</svg>`}
function fig(){let c="";for(let i=0;i<S.cracks;i++)c+=`<path d="${CR[i]}" fill="none" stroke="#1b1a3a" stroke-width="3" stroke-linejoin="bevel"/>`;
return `<svg viewBox="0 0 200 260" role="img" aria-label="Saleem with ${S.cracks} of ${MAXC} cracks"><rect x="45" y="100" width="110" height="150" rx="40" fill="#d9a35f"/><circle cx="100" cy="62" r="40" fill="#e8b873"/><path d="M96 56Q88 92 108 90Q118 84 106 74Z" fill="#d9a35f" stroke="#a8742f" stroke-width="2"/><circle cx="84" cy="52" r="4" fill="#1b1a3a"/><circle cx="116" cy="52" r="4" fill="#1b1a3a"/>${c}</svg>`}
function bar(){return `<div class="bar"><span>Chapter ${S.ch+1} of 6: ${CH[S.ch].t}</span><span>Cracks ${S.cracks}/${MAXC}</span><span>Padma's Doubt ${S.doubt} left</span></div>`}

function title(){const b=best();S={ch:0,qi:0,cracks:0,lit:0,doubt:3,sc:[0,0,0,0,0,0]};
$("app").innerHTML=`<h1 style="margin: 1em 0 0">The Cracking Narrator</h1><h6>prepared by John Erick Camota</h6><p>Saleem Sinai is crumbling under too much history, and he must finish his story before he falls apart. Help him tell it right.</p><p class="mute">Answer 30 questions on <i>Midnight's Children</i>. Each wrong answer adds a crack to Saleem. Six cracks and he turns to dust. Each right answer awakens one of midnight's children. Some questions are Saleem's own claims: decide whether he is right or has misremembered again. Padma's Doubt removes one wrong option (3 uses).</p>${b?`<p class="mute">Your best: ${b} of ${TOT} correct.</p>`:""}<button class="go" id="st">Start the story</button>`;
$("st").onclick=intro;$("st").focus()}

function intro(){const c=CH[S.ch];$("app").innerHTML=`${bar()}<div class="grid"><div class="side">${fig()}${dots()}</div><div><h2>${c.t}</h2><p>${c.i}</p><button class="go" id="b">Begin</button></div></div>`;$("b").onclick=ask;$("b").focus()}
function ask(){const c=CH[S.ch],q=c.q[S.qi];S.q=q;S.used=false;S.opts=q.u?["Saleem is right","Saleem is wrong"]:sh([q.c,...q.w]);draw()}
function draw(fb){const q=S.q;let o="";S.opts.forEach((t,i)=>{o+=`<button data-i="${i}" ${S.hide&&S.hide.includes(i)?'class="gone" disabled':""}>${t}</button>`});
$("app").innerHTML=`${bar()}<div class="grid"><div class="side">${fig()}${dots()}</div><div><h2>${q.u?"Saleem tells you:":"Question "+(S.qi+1)+" of 5"}</h2><p>${q.q}</p><div class="opts" id="o">${o}</div><div id="f"></div><button id="d" ${S.doubt<1?"disabled":""}>Ask Padma's Doubt</button></div></div>`;
$("o").onclick=e=>{const b=e.target.closest("button");if(b&&!b.disabled)pick(+b.dataset.i)};
$("d").onclick=doubt}

function doubt(){if(S.used||S.doubt<1)return;S.used=true;S.doubt--;const q=S.q;let msg="Padma folds her arms: \"He's inventing again. Think it through.\"";
if(S.opts.length>2){const w=S.opts.map((t,i)=>i).filter(i=>S.opts[i]!==q.c&&!(S.hide||[]).includes(i));const h=w[Math.floor(Math.random()*w.length)];S.hide=[h];msg="Padma squints: \"Not that one, surely.\""}
draw();$("f").innerHTML=`<p class="fb">${msg}</p>`;$("d").disabled=true}
function pick(i){const q=S.q,right=S.opts[i]===q.c;S.hide=null;
document.querySelectorAll("#o button").forEach((b,j)=>{b.disabled=true;if(S.opts[j]===q.c)b.classList.add("ok");else if(j===i)b.classList.add("bad")});$("d").disabled=true;
if(right){S.lit++;S.sc[S.ch]++}else S.cracks++;
const lost=S.cracks>=MAXC;
$("f").innerHTML=`<div class="fb"><b>${right?"Correct.":"Not quite. The answer: "+q.c+"."}</b> ${q.e}</div><button class="go" id="n">${lost?"See what happens":"Continue"}</button>`;
$("n").onclick=()=>next(lost);$("n").focus()}
function next(lost){if(lost)return end(false);S.qi++;if(S.qi>=5){S.qi=0;S.ch++;if(S.ch>=CH.length)return end(true);return intro()}ask()}
function end(win){const prev=+best()||0;if(S.lit>prev)best(S.lit);
const jars=CH.map((c,i)=>`<div class="jar"><i><b style="height:${S.sc[i]*20}%"></b></i>${c.t}<br>${S.sc[i]}/5</div>`).join("");
$("app").innerHTML=`<h1>${win?"Saleem finishes his story":"Saleem crumbles into dust"}</h1><div class="grid"><div class="side">${fig()}${dots()}</div><div><p>${win?"You kept the cracks at bay, and the tale is told, whole enough to pass on.":"Too much history. The cracks won, but every answer you got right still lives on as one of midnight's children."}</p><p><b>${S.lit} of ${TOT} correct.</b> ${S.lit>prev?"New best score.":"Best: "+Math.max(prev,S.lit)+"."}</p><h2>Chutnified: your jars</h2><div class="jars">${jars}</div><button class="go" id="r">Tell it again</button></div></div>`;$("r").onclick=title}
title();
