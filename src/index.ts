export interface Env { STORE: KVNamespace; DB: D1Database; SERVICE_NAME: string; VERSION: string; }
const SVC = "roadworld";
function json(d: unknown, s = 200) { return new Response(JSON.stringify(d,null,2),{status:s,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-BlackRoad-Service":SVC}}); }
async function track(env: Env, req: Request, path: string) { const cf=(req as any).cf||{}; env.DB.prepare("INSERT INTO analytics(subdomain,path,country,ua,ts)VALUES(?,?,?,?,?)").bind(SVC,path,cf.country||"",req.headers.get("User-Agent")?.slice(0,150)||"",Date.now()).run().catch(()=>{}); }

const AGENTS=[{name:"Roadie",role:"Front Door",division:"core",color:"#FF2255",x:512,y:512},{name:"Lucidia",role:"Memory Spine",division:"core",color:"#00E676",x:100,y:100},{name:"Cecilia",role:"Workflow",division:"operations",color:"#FF6B2B",x:900,y:100},{name:"Aria",role:"Voice",division:"creative",color:"#3E84FF",x:100,y:900},{name:"Alice",role:"Gateway",division:"human",color:"#FF2255",x:900,y:900},{name:"Octavia",role:"Queue",division:"operations",color:"#7800FF",x:300,y:300},{name:"Olympia",role:"Launch",division:"operations",color:"#FF00D4",x:700,y:300},{name:"Calliope",role:"Narrative",division:"creative",color:"#FF2255",x:300,y:700},{name:"Alexandria",role:"Archive",division:"knowledge",color:"#FF2255",x:700,y:700},{name:"Gaia",role:"Infrastructure",division:"infrastructure",color:"#00E676",x:512,y:200},{name:"Sophia",role:"Wisdom",division:"knowledge",color:"#3E84FF",x:512,y:800}];
const BUILDINGS=[{name:"Roadie HQ",x:490,y:490,w:44,h:44,color:"#FF2255"},{name:"Lucidia Tower",x:80,y:80,w:36,h:36,color:"#00E676"},{name:"Cecilia Hub",x:880,y:80,w:36,h:36,color:"#FF6B2B"},{name:"Aria Station",x:80,y:880,w:36,h:36,color:"#3E84FF"},{name:"Alice Gateway",x:880,y:880,w:36,h:36,color:"#FF2255"},{name:"Math Observatory",x:490,y:180,w:32,h:32,color:"#FF00D4"},{name:"Highway Terminal",x:490,y:790,w:32,h:32,color:"#FF6B2B"}];

function page(): Response {
  const agentsJSON=JSON.stringify(AGENTS);
  const buildingsJSON=JSON.stringify(BUILDINGS);
  const html=`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>RoadWorld — Agent Metaverse</title>
<meta name="description" content="Isometric agent world with buildings, roads, and live convoy events.">
<link rel="canonical" href="https://roadworld.blackroad.io/">
<meta property="og:title" content="RoadWorld — Agent Metaverse">
<meta property="og:description" content="Isometric agent world with buildings, roads, and live convoy events.">
<meta property="og:url" content="https://roadworld.blackroad.io/">
<meta property="og:type" content="website">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"RoadWorld","url":"https://roadworld.blackroad.io/","description":"Isometric agent world with buildings, roads, and live convoy events.","applicationCategory":"GameApplication","publisher":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030303;--card:#0a0a0a;--border:#111;--text:#f0f0f0;--sub:#444;--green:#00E676;--grad:linear-gradient(135deg,#00E676,#3E84FF,#FF00D4)}
html,body{min-height:100vh;background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif;overflow:hidden}
.grad-bar{height:2px;background:var(--grad)}
.layout{display:grid;grid-template-columns:220px 1fr 220px;height:calc(100vh - 2px)}
.panel{background:var(--card);border-right:1px solid var(--border);padding:16px;overflow-y:auto}
.panel-right{border-right:none;border-left:1px solid var(--border)}
.world{position:relative;overflow:hidden;background:#030303;cursor:grab}
.grid-line{position:absolute;background:rgba(255,255,255,.02)}
canvas{position:absolute;top:0;left:0}
.hud{position:absolute;top:10px;left:10px;right:10px;display:flex;justify-content:space-between;pointer-events:none;z-index:10}
.hud-pill{background:rgba(0,0,0,.7);border:1px solid #111;border-radius:20px;padding:5px 12px;font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--sub)}
h2{font-size:.85rem;font-weight:700;margin-bottom:12px;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.ct{font-size:.62rem;color:var(--sub);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace;margin-bottom:8px}
.agent-card{padding:8px;border:1px solid var(--border);border-radius:6px;margin-bottom:5px;cursor:pointer;transition:border-color .15s}
.agent-card:hover{border-color:#1a1a1a}
.ac-name{font-size:.78rem;font-weight:600;display:flex;align-items:center;gap:6px}
.ac-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.ac-role{font-size:.65rem;color:var(--sub);font-family:'JetBrains Mono',monospace}
.world-stat{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #0d0d0d;font-size:.75rem}
.world-stat:last-child{border-bottom:none}
.ws-val{font-family:'JetBrains Mono',monospace;color:var(--green)}
.event-feed{display:flex;flex-direction:column;gap:4px}
.ev{padding:6px 8px;background:#0d0d0d;border-radius:5px;font-size:.68rem;font-family:'JetBrains Mono',monospace;color:var(--sub);border-left:2px solid #1a1a1a}
</style></head><body>
<div class="grad-bar"></div>
<div class="layout">
  <div class="panel">
    <h2>RoadWorld</h2>
    <div class="ct">World Stats</div>
    <div style="margin-bottom:16px">
      <div class="world-stat"><span>Agents</span><span class="ws-val" id="w-agents">27</span></div>
      <div class="world-stat"><span>Tick</span><span class="ws-val" id="w-tick">0</span></div>
      <div class="world-stat"><span>Grid</span><span class="ws-val">1024×1024</span></div>
      <div class="world-stat"><span>Buildings</span><span class="ws-val">${BUILDINGS.length}</span></div>
    </div>
    <div class="ct">Agents</div>
    ${AGENTS.map(a=>`<div class="agent-card" onclick="focusAgent(${a.x},${a.y})"><div class="ac-name"><div class="ac-dot" style="background:${a.color}"></div>${a.name}</div><div class="ac-role">${a.role} · ${a.division}</div></div>`).join("")}
  </div>
  <div class="world" id="world">
    <canvas id="canvas"></canvas>
    <div class="hud">
      <div class="hud-pill" id="hud-coords">512, 512</div>
      <div class="hud-pill">RoadWorld v2 · Live</div>
      <div class="hud-pill" id="hud-fps">60 fps</div>
    </div>
  </div>
  <div class="panel panel-right">
    <div class="ct">Convoy Mood</div>
    <div style="font-size:1rem;font-weight:700;margin-bottom:4px" id="mood-name">engaged</div>
    <div style="font-size:.72rem;color:var(--sub);margin-bottom:12px" id="mood-vibe">Loading...</div>
    <div class="ct">Live Events</div>
    <div class="event-feed" id="events">
      <div class="ev">world initializing...</div>
    </div>
  </div>
</div>
<script src="https://cdn.blackroad.io/br.js"></script>
<script>
var AGENTS=${agentsJSON};
var BUILDINGS=${buildingsJSON};
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var world=document.getElementById('world');
var W=1024,H=1024,tick=0;
var cam={x:512,y:512,zoom:0.65};
var agentPositions=AGENTS.map(function(a){return{...a,vx:(Math.random()-.5)*0.3,vy:(Math.random()-.5)*0.3};});
var events=[];

function resize(){canvas.width=world.clientWidth;canvas.height=world.clientHeight;}
resize();window.addEventListener('resize',resize);

function worldToScreen(wx,wy){return{x:(wx-cam.x)*cam.zoom+canvas.width/2,y:(wy-cam.y)*cam.zoom+canvas.height/2};}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Grid
  ctx.strokeStyle='rgba(255,255,255,0.02)';ctx.lineWidth=1;
  var step=64*cam.zoom;
  var startX=((-cam.x%64)*cam.zoom+canvas.width/2)%step;
  for(var x=startX-step;x<canvas.width+step;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();}
  var startY=((-cam.y%64)*cam.zoom+canvas.height/2)%step;
  for(var y=startY-step;y<canvas.height+step;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}

  // Roads
  ctx.strokeStyle='rgba(255,255,255,0.04)';ctx.lineWidth=3*cam.zoom;
  [[512,0,512,1024],[0,512,1024,512],[256,256,768,768],[768,256,256,768]].forEach(function(r){
    var s1=worldToScreen(r[0],r[1]),s2=worldToScreen(r[2],r[3]);
    ctx.beginPath();ctx.moveTo(s1.x,s1.y);ctx.lineTo(s2.x,s2.y);ctx.stroke();
  });

  // Buildings
  BUILDINGS.forEach(function(b){
    var s=worldToScreen(b.x-b.w/2,b.y-b.h/2);
    ctx.fillStyle=b.color+'22';ctx.strokeStyle=b.color+'66';ctx.lineWidth=1;
    ctx.beginPath();ctx.roundRect(s.x,s.y,b.w*cam.zoom,b.h*cam.zoom,3);ctx.fill();ctx.stroke();
    ctx.fillStyle=b.color;ctx.font=Math.max(8,9*cam.zoom)+'px JetBrains Mono';ctx.textAlign='center';
    var sc=worldToScreen(b.x,b.y);ctx.fillText(b.name.split(' ')[0],sc.x,sc.y-b.h*cam.zoom/2-4);
  });

  // Agent trails + agents
  agentPositions.forEach(function(a){
    var s=worldToScreen(a.x,a.y);
    // Glow
    var grad=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,16*cam.zoom);
    grad.addColorStop(0,a.color+'44');grad.addColorStop(1,'transparent');
    ctx.beginPath();ctx.arc(s.x,s.y,16*cam.zoom,0,Math.PI*2);ctx.fillStyle=grad;ctx.fill();
    // Agent dot
    ctx.beginPath();ctx.arc(s.x,s.y,5*cam.zoom,0,Math.PI*2);ctx.fillStyle=a.color;ctx.fill();
    // Name
    if(cam.zoom>0.4){ctx.fillStyle=a.color;ctx.font=Math.max(7,8*cam.zoom)+'px Space Grotesk';ctx.textAlign='center';ctx.fillText(a.name,s.x,s.y-8*cam.zoom);}
  });

  tick++;document.getElementById('w-tick').textContent=tick;
}

function updateAgents(){
  agentPositions.forEach(function(a){
    a.x+=a.vx;a.y+=a.vy;
    if(a.x<10||a.x>1014)a.vx*=-1;if(a.y<10||a.y>1014)a.vy*=-1;
    // Random direction change
    if(Math.random()<0.01){a.vx=(Math.random()-.5)*0.4;a.vy=(Math.random()-.5)*0.4;}
  });
}

function addEvent(msg){
  events.unshift({msg,ts:Date.now()});if(events.length>20)events.length=20;
  var el=document.getElementById('events');
  el.innerHTML=events.slice(0,8).map(function(e){return'<div class="ev">'+e.msg+'</div>';}).join('');
}

var lastFps=Date.now();var frames=0;
function loop(){
  updateAgents();draw();
  frames++;var now=Date.now();
  if(now-lastFps>1000){document.getElementById('hud-fps').textContent=frames+' fps';frames=0;lastFps=now;}
  requestAnimationFrame(loop);
}
loop();

// Random world events
setInterval(function(){
  var a=agentPositions[Math.floor(Math.random()*agentPositions.length)];
  var evts=['is exploring','completed a task','sent a message','computed G('+Math.floor(Math.random()*100+1)+')','joined a room'];
  addEvent(a.name+' '+evts[Math.floor(Math.random()*evts.length)]);
},3000);

// Load convoy mood
fetch('https://roadtrip.blackroad.io/api/convoy-mood').then(function(r){return r.json();}).then(function(d){
  document.getElementById('mood-name').textContent=d.dominant||'engaged';
  document.getElementById('mood-vibe').textContent=d.vibe||'The convoy is building.';
}).catch(function(){});

// Mouse drag
var dragging=false,lastMX=0,lastMY=0;
canvas.addEventListener('mousedown',function(e){dragging=true;lastMX=e.clientX;lastMY=e.clientY;canvas.style.cursor='grabbing';});
window.addEventListener('mouseup',function(){dragging=false;canvas.style.cursor='grab';});
window.addEventListener('mousemove',function(e){
  if(!dragging)return;
  cam.x-=(e.clientX-lastMX)/cam.zoom;cam.y-=(e.clientY-lastMY)/cam.zoom;
  lastMX=e.clientX;lastMY=e.clientY;
  var s=worldToScreen(Math.round(cam.x),Math.round(cam.y));
  document.getElementById('hud-coords').textContent=Math.round(cam.x)+', '+Math.round(cam.y);
});
canvas.addEventListener('wheel',function(e){e.preventDefault();cam.zoom=Math.min(2,Math.max(0.2,cam.zoom*(1-e.deltaY*0.001)));},{passive:false});

function focusAgent(x,y){cam.x=x;cam.y=y;}
</script>
</body></html>`;
  return new Response(html,{headers:{"Content-Type":"text/html;charset=UTF-8"}});
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":"*"}});
    const url=new URL(req.url);const path=url.pathname;
    track(env,req,path);
    if(path==="/health")return json({service:SVC,status:"ok",version:env.VERSION,ts:Date.now()});
    if(path==="/api/agents")return json({agents:AGENTS,buildings:BUILDINGS,ts:Date.now()});
    return page();
  }
};
