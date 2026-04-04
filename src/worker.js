// PROPRIETARY AND CONFIDENTIAL. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source.
// RoadWorld — Game Engine | roadworld.blackroad.io
// Build worlds. Play forever.

const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>RoadWorld — BlackRoad OS</title>
<meta name="description" content="RoadWorld — Game Engine. Part of BlackRoad OS.">
<meta property="og:title" content="RoadWorld — BlackRoad OS"><meta property="og:description" content="Build worlds. Play forever.">
<meta property="og:url" content="https://roadworld.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadworld.blackroad.io/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"RoadWorld","url":"https://roadworld.blackroad.io","author":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}</script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400&family=Inter:wght@400&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}:root{--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--text:#f5f5f5;--sub:#737373;--muted:#444;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--grad:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--accent:#9C27B0}html{scroll-behavior:smooth}body{background:var(--bg);color:var(--text);font-family:var(--sg);overflow-x:hidden}a{color:inherit;text-decoration:none}.bar{height:3px;background:var(--grad);position:fixed;top:0;left:0;right:0;z-index:1000}nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}.n-left{display:flex;align-items:center;gap:8px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:15px}.n-tag{font-family:var(--jb);font-size:10px;color:var(--muted);margin-left:8px}.n-right{margin-left:auto;display:flex;gap:12px;align-items:center}.n-right a{font-family:var(--in);font-size:12px;color:var(--sub)}.n-right a:hover{color:var(--text)}.cta{font-size:11px;font-weight:600;padding:6px 16px;border-radius:5px;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 24px 60px;position:relative;overflow:hidden}.orb{position:absolute;border-radius:50%;filter:blur(100px);opacity:.1}h1{font-size:clamp(32px,7vw,64px);font-weight:700;letter-spacing:-.03em;line-height:1.05;max-width:700px;margin-bottom:12px;position:relative}.sub{font-family:var(--in);font-size:clamp(14px,2vw,17px);color:var(--sub);max-width:500px;line-height:1.6;margin-bottom:32px;position:relative}.badge{font-family:var(--jb);font-size:10px;color:var(--sub);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px;position:relative;display:flex;align-items:center;gap:8px}.badge::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);animation:p 2s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.3}}.btns{display:flex;gap:10px;position:relative;flex-wrap:wrap;justify-content:center}.btn-p{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:var(--text);color:var(--bg);border:none;cursor:pointer;font-family:var(--sg)}.btn-g{padding:11px 28px;border-radius:7px;font-size:13px;font-weight:600;background:transparent;color:var(--text);border:1px solid var(--border);cursor:pointer;font-family:var(--sg)}.btn-g:hover{border-color:#444}.section{max-width:900px;margin:0 auto;padding:48px 24px}.status{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:14px 18px;display:flex;align-items:center;gap:10px;margin-bottom:24px}.status-dot{width:8px;height:8px;border-radius:50%;background:#22c55e;animation:p 2s infinite}.status-text{font-family:var(--jb);font-size:11px;color:var(--sub)}.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:24px}.feature-card{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:20px}.feature-card h3{font-size:14px;margin-bottom:6px;font-weight:600}.feature-card p{font-family:var(--in);font-size:12px;color:var(--sub);line-height:1.5}.feature-icon{width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;font-size:16px}.live-panel{border:1px solid var(--border);border-radius:8px;background:var(--card);padding:20px;margin-top:16px}.live-panel h2{font-size:16px;margin-bottom:12px;font-weight:600}.live-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:12px}.live-row:last-child{border-bottom:none}.live-label{color:var(--sub);font-family:var(--in)}.live-val{font-family:var(--jb);font-weight:600}footer{border-top:1px solid var(--border);padding:32px 24px;text-align:center}.f-links{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:12px}.f-links a{font-family:var(--in);font-size:11px;color:var(--sub)}.f-links a:hover{color:var(--text)}.f-copy{font-family:var(--jb);font-size:9px;color:var(--muted)}@media(max-width:768px){nav{padding:0 16px}.feature-grid{grid-template-columns:1fr}}</style></head><body>
<div class="bar"></div>
<nav><div class="n-left"><div class="n-dot"></div><span class="n-name">RoadWorld</span><span class="n-tag">BLACKROAD OS</span></div><div class="n-right"><a href="https://blackroad.io">Highway</a><a href="https://app.blackroad.io" class="cta">Open OS</a></div></nav>
<section class="hero"><div class="orb" style="width:400px;height:400px;background:#9C27B0;top:-10%;left:-15%"></div><div class="orb" style="width:300px;height:300px;background:#8844FF;bottom:-5%;right:-10%"></div><div class="badge">LIVE ON BLACKROAD OS</div><h1>Build worlds. Play forever.</h1><p class="sub">Game Engine with NPCs, Quests, Inventory, Economy, and Live Chat. Part of BlackRoad OS — 17 products, one highway.</p><div class="btns"><a href="https://app.blackroad.io"><button class="btn-p">Open BlackRoad OS</button></a><a href="https://blackroad.io"><button class="btn-g">The Highway</button></a></div></section>
<section class="section">
<div class="status"><div class="status-dot"></div><div class="status-text" id="st">Connecting...</div></div>
<div class="feature-grid">
<div class="feature-card"><div class="feature-icon" style="background:#1a1a2e">&#x1F30D;</div><h3>World Builder</h3><p>Create worlds from 8 templates. Place objects, wire logic, publish games. AI-generated descriptions.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#1a2e1a">&#x1F9D9;</div><h3>NPC System</h3><p>AI-powered NPCs with personalities, dialog trees, and dynamic behavior. Bring your worlds to life.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#2e1a1a">&#x2694;</div><h3>Quest Engine</h3><p>Create quests with objectives, rewards, and branching paths. Earn RoadCoin for completing challenges.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#1a1a2e">&#x1F392;</div><h3>Inventory + Crafting</h3><p>Collect items, craft gear, trade with other players. Full item economy with rarity tiers.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#2e2e1a">&#x1F4AC;</div><h3>World Chat</h3><p>Talk to other players in-world. Chat stays local to each world for immersive multiplayer.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#1a2e2e">&#x26C5;</div><h3>Weather + Day/Night</h3><p>Dynamic environment with weather effects, day/night cycle, seasons, and atmospheric conditions.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#2e1a2e">&#x1F3C6;</div><h3>Achievements</h3><p>Unlock achievements for milestones. Track progress, earn badges, and compare with the leaderboard.</p></div>
<div class="feature-card"><div class="feature-icon" style="background:#2e2e1a">&#x1FA99;</div><h3>RoadCoin Economy</h3><p>Earn ROAD for quests, trading, achievements. Spend on items, upgrades, and world customization.</p></div>
</div>
<div class="live-panel"><h2>Live Stats</h2><div id="live-stats"><div class="live-row"><span class="live-label">Loading...</span></div></div></div>
</section>
<footer><div class="f-links"><a href="https://os.blackroad.io">OS</a><a href="https://roadtrip.blackroad.io">Agents</a><a href="https://roadie.blackroad.io">Tutor</a><a href="https://roadview.blackroad.io">Search</a><a href="https://backroad.blackroad.io">Social</a><a href="https://roadchain.blackroad.io">Chain</a><a href="https://github.com/BlackRoadOS">GitHub</a></div><div class="f-copy">2025-2026 BlackRoad OS, Inc. Remember the Road. Pave Tomorrow.</div></footer>
<script>
fetch('/api/health').then(r=>r.json()).then(d=>{document.getElementById('st').textContent='RoadWorld is live — '+d.systems_online+' systems online'}).catch(()=>{document.getElementById('st').textContent='RoadWorld is running'});
fetch('/api/stats').then(r=>r.json()).then(d=>{
  const el=document.getElementById('live-stats');
  el.innerHTML=[
    ['Worlds',d.worlds],['Published Games',d.published_games],['Players',d.unique_players],
    ['Total Plays',d.total_plays],['Objects Placed',d.total_objects],['NPCs',d.total_npcs||0],
    ['Active Quests',d.active_quests||0],['Achievements',d.total_achievements||0],
    ['Templates',d.templates_available],['Agents',d.agents?.length||4]
  ].map(([l,v])=>'<div class="live-row"><span class="live-label">'+l+'</span><span class="live-val">'+v+'</span></div>').join('');
}).catch(()=>{});
</script>
</body></html>`;

// ─── Agent Personalities ───
const AGENTS = {
  thalia: { name: 'Thalia', role: 'Game Designer', prompt: 'You are Thalia, game designer on RoadWorld (BlackRoad OS). You design engaging game mechanics, levels, and experiences. You think about player motivation, difficulty curves, and reward loops.' },
  roadie: { name: 'Roadie', role: 'Racing Specialist', prompt: 'You are Roadie, racing and vehicle specialist on RoadWorld (BlackRoad OS). You design tracks, vehicle physics, racing mechanics, and competitive multiplayer systems.' },
  elias: { name: 'Elias', role: 'Educational Game Designer', prompt: 'You are Elias, educational game designer on RoadWorld (BlackRoad OS). You create learning experiences disguised as games. You balance fun and pedagogy. Every game teaches something.' },
  sapphira: { name: 'Sapphira', role: 'World Artist', prompt: 'You are Sapphira, world artist on RoadWorld (BlackRoad OS). You describe vivid game environments, pixel art styles, color palettes, and atmosphere. Your descriptions help builders visualize their worlds.' },
};

// ─── NPC Personality Templates ───
const NPC_PERSONALITIES = {
  merchant: { trait: 'friendly', greeting: 'Welcome, traveler! See anything you like?', behavior: 'trades items, gives quests about gathering materials' },
  guard: { trait: 'stern', greeting: 'Halt! State your business.', behavior: 'patrols area, warns about dangers, gives protection quests' },
  sage: { trait: 'wise', greeting: 'Ah, a seeker of knowledge...', behavior: 'shares lore, gives puzzle quests, teaches skills' },
  trickster: { trait: 'mischievous', greeting: 'Hehe, you look like someone who likes a challenge!', behavior: 'gives tricky quests, trades rare items at odd prices' },
  healer: { trait: 'compassionate', greeting: 'You look weary. Let me help.', behavior: 'heals players, gives rescue quests, sells potions' },
  explorer: { trait: 'adventurous', greeting: 'Have you seen the caves to the north?', behavior: 'shares map info, gives exploration quests, trades discoveries' },
  blacksmith: { trait: 'gruff', greeting: 'Need something forged? Make it quick.', behavior: 'crafts weapons/armor, gives material gathering quests' },
  innkeeper: { trait: 'warm', greeting: 'Come in, come in! Rest your feet.', behavior: 'shares rumors, gives social quests, sells food/lodging' },
};

// ─── Weather Types ───
const WEATHER_TYPES = ['clear', 'cloudy', 'rain', 'storm', 'fog', 'snow', 'wind', 'heat'];
const WEATHER_EFFECTS = {
  clear: { visibility: 1.0, speed_mod: 1.0, mood: 'bright' },
  cloudy: { visibility: 0.9, speed_mod: 1.0, mood: 'neutral' },
  rain: { visibility: 0.7, speed_mod: 0.9, mood: 'melancholy' },
  storm: { visibility: 0.4, speed_mod: 0.7, mood: 'intense' },
  fog: { visibility: 0.3, speed_mod: 0.8, mood: 'mysterious' },
  snow: { visibility: 0.6, speed_mod: 0.75, mood: 'serene' },
  wind: { visibility: 0.85, speed_mod: 0.85, mood: 'restless' },
  heat: { visibility: 0.95, speed_mod: 0.9, mood: 'oppressive' },
};

// ─── Achievement Definitions ───
const ACHIEVEMENTS = [
  { id: 'first_world', name: 'World Builder', description: 'Create your first world', category: 'creation', reward_road: 1.0 },
  { id: 'publish_game', name: 'Game Publisher', description: 'Publish a game for others to play', category: 'creation', reward_road: 2.0 },
  { id: 'first_quest', name: 'Quest Giver', description: 'Create your first quest', category: 'creation', reward_road: 0.5 },
  { id: 'quest_complete', name: 'Adventurer', description: 'Complete your first quest', category: 'adventure', reward_road: 1.0 },
  { id: 'ten_quests', name: 'Questmaster', description: 'Complete 10 quests', category: 'adventure', reward_road: 5.0 },
  { id: 'first_npc', name: 'Lifegiver', description: 'Create your first NPC', category: 'creation', reward_road: 0.5 },
  { id: 'ten_npcs', name: 'Populator', description: 'Create 10 NPCs across your worlds', category: 'creation', reward_road: 3.0 },
  { id: 'first_trade', name: 'Trader', description: 'Complete your first trade', category: 'economy', reward_road: 0.5 },
  { id: 'rich', name: 'Road Rich', description: 'Accumulate 100 RoadCoin', category: 'economy', reward_road: 10.0 },
  { id: 'first_craft', name: 'Crafter', description: 'Craft your first item', category: 'creation', reward_road: 0.5 },
  { id: 'social', name: 'Social Butterfly', description: 'Send 50 chat messages', category: 'social', reward_road: 2.0 },
  { id: 'explorer', name: 'Explorer', description: 'Play 10 different worlds', category: 'adventure', reward_road: 3.0 },
  { id: 'weathered', name: 'Weathered', description: 'Experience all weather types', category: 'adventure', reward_road: 2.0 },
  { id: 'night_owl', name: 'Night Owl', description: 'Play during night cycle for 30 minutes', category: 'adventure', reward_road: 1.0 },
  { id: 'collector', name: 'Collector', description: 'Collect 50 unique items', category: 'adventure', reward_road: 5.0 },
];

// ─── Item Rarity and Crafting Recipes ───
const ITEM_RARITIES = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
const CRAFTING_RECIPES = [
  { id: 'wooden_sword', name: 'Wooden Sword', ingredients: [{ item: 'wood', qty: 3 }, { item: 'stone', qty: 1 }], result_rarity: 'common' },
  { id: 'iron_sword', name: 'Iron Sword', ingredients: [{ item: 'iron_ore', qty: 5 }, { item: 'wood', qty: 2 }], result_rarity: 'uncommon' },
  { id: 'health_potion', name: 'Health Potion', ingredients: [{ item: 'herb', qty: 3 }, { item: 'water', qty: 1 }], result_rarity: 'common' },
  { id: 'shield', name: 'Iron Shield', ingredients: [{ item: 'iron_ore', qty: 8 }, { item: 'leather', qty: 3 }], result_rarity: 'uncommon' },
  { id: 'magic_staff', name: 'Magic Staff', ingredients: [{ item: 'crystal', qty: 2 }, { item: 'wood', qty: 5 }, { item: 'gem', qty: 1 }], result_rarity: 'rare' },
  { id: 'dragon_armor', name: 'Dragon Armor', ingredients: [{ item: 'dragon_scale', qty: 10 }, { item: 'iron_ore', qty: 20 }, { item: 'gem', qty: 5 }], result_rarity: 'legendary' },
];

// ─── Building Types ───
const BUILDING_TYPES = {
  house: { name: 'House', base_cost: { wood: 10, stone: 5 }, max_level: 5, bonus: { housing: 2 }, description: 'Shelter for residents' },
  shop: { name: 'Shop', base_cost: { wood: 8, stone: 8, iron_ore: 3 }, max_level: 5, bonus: { trade_bonus: 0.1 }, description: 'Trade goods with travelers' },
  tavern: { name: 'Tavern', base_cost: { wood: 15, stone: 10 }, max_level: 5, bonus: { morale: 5, quest_bonus: 0.05 }, description: 'Rest and hear rumors' },
  tower: { name: 'Watch Tower', base_cost: { stone: 20, iron_ore: 10 }, max_level: 5, bonus: { defense: 10, visibility: 0.2 }, description: 'Defend and scout' },
  farm: { name: 'Farm', base_cost: { wood: 5, stone: 2 }, max_level: 5, bonus: { food_production: 3 }, description: 'Grow crops for sustenance' },
  barracks: { name: 'Barracks', base_cost: { wood: 12, stone: 15, iron_ore: 8 }, max_level: 5, bonus: { defense: 15, training: 1 }, description: 'Train soldiers' },
  library: { name: 'Library', base_cost: { wood: 10, stone: 12, crystal: 2 }, max_level: 5, bonus: { xp_bonus: 0.1, magic: 5 }, description: 'Study and learn' },
  temple: { name: 'Temple', base_cost: { stone: 25, crystal: 5, gem: 2 }, max_level: 5, bonus: { healing: 10, morale: 10 }, description: 'Worship and heal' },
};

// ─── Skill Trees ───
const SKILL_TREES = {
  combat: {
    name: 'Combat', description: 'Master the art of battle',
    skills: [
      { id: 'sword_mastery', name: 'Sword Mastery', level_req: 1, xp_cost: 100, bonus: { attack: 5 }, prereqs: [] },
      { id: 'shield_block', name: 'Shield Block', level_req: 2, xp_cost: 200, bonus: { defense: 8 }, prereqs: ['sword_mastery'] },
      { id: 'berserker', name: 'Berserker Rage', level_req: 5, xp_cost: 500, bonus: { attack: 15, defense: -5 }, prereqs: ['sword_mastery'] },
      { id: 'war_cry', name: 'War Cry', level_req: 8, xp_cost: 800, bonus: { team_attack: 5 }, prereqs: ['berserker'] },
      { id: 'champion', name: 'Champion', level_req: 10, xp_cost: 1500, bonus: { attack: 25, defense: 15 }, prereqs: ['war_cry', 'shield_block'] },
    ],
  },
  crafting: {
    name: 'Crafting', description: 'Create powerful items',
    skills: [
      { id: 'basic_craft', name: 'Basic Crafting', level_req: 1, xp_cost: 80, bonus: { craft_speed: 0.1 }, prereqs: [] },
      { id: 'smithing', name: 'Smithing', level_req: 3, xp_cost: 250, bonus: { weapon_quality: 0.15 }, prereqs: ['basic_craft'] },
      { id: 'alchemy', name: 'Alchemy', level_req: 3, xp_cost: 250, bonus: { potion_power: 0.2 }, prereqs: ['basic_craft'] },
      { id: 'enchanting', name: 'Enchanting', level_req: 6, xp_cost: 600, bonus: { magic_imbue: 0.25 }, prereqs: ['smithing', 'alchemy'] },
      { id: 'master_artisan', name: 'Master Artisan', level_req: 10, xp_cost: 1500, bonus: { craft_all: 0.3 }, prereqs: ['enchanting'] },
    ],
  },
  magic: {
    name: 'Magic', description: 'Harness arcane forces',
    skills: [
      { id: 'spark', name: 'Spark', level_req: 1, xp_cost: 100, bonus: { magic_attack: 3 }, prereqs: [] },
      { id: 'fireball', name: 'Fireball', level_req: 3, xp_cost: 300, bonus: { magic_attack: 10 }, prereqs: ['spark'] },
      { id: 'heal', name: 'Heal', level_req: 2, xp_cost: 200, bonus: { healing_power: 8 }, prereqs: ['spark'] },
      { id: 'shield_magic', name: 'Arcane Shield', level_req: 5, xp_cost: 500, bonus: { magic_defense: 12 }, prereqs: ['heal'] },
      { id: 'archmage', name: 'Archmage', level_req: 10, xp_cost: 2000, bonus: { magic_all: 0.4 }, prereqs: ['fireball', 'shield_magic'] },
    ],
  },
  trading: {
    name: 'Trading', description: 'Master commerce and negotiation',
    skills: [
      { id: 'haggle', name: 'Haggle', level_req: 1, xp_cost: 80, bonus: { buy_discount: 0.05 }, prereqs: [] },
      { id: 'appraise', name: 'Appraise', level_req: 2, xp_cost: 150, bonus: { sell_bonus: 0.1 }, prereqs: ['haggle'] },
      { id: 'merchant_network', name: 'Merchant Network', level_req: 4, xp_cost: 400, bonus: { trade_range: 2 }, prereqs: ['appraise'] },
      { id: 'monopoly', name: 'Monopoly', level_req: 7, xp_cost: 700, bonus: { market_control: 0.15 }, prereqs: ['merchant_network'] },
      { id: 'trade_baron', name: 'Trade Baron', level_req: 10, xp_cost: 1500, bonus: { all_trade: 0.3 }, prereqs: ['monopoly'] },
    ],
  },
  exploration: {
    name: 'Exploration', description: 'Discover the unknown',
    skills: [
      { id: 'pathfinder', name: 'Pathfinder', level_req: 1, xp_cost: 80, bonus: { speed: 0.1 }, prereqs: [] },
      { id: 'cartography', name: 'Cartography', level_req: 2, xp_cost: 200, bonus: { map_reveal: 0.2 }, prereqs: ['pathfinder'] },
      { id: 'treasure_sense', name: 'Treasure Sense', level_req: 4, xp_cost: 400, bonus: { loot_bonus: 0.15 }, prereqs: ['cartography'] },
      { id: 'survivalist', name: 'Survivalist', level_req: 6, xp_cost: 600, bonus: { weather_resist: 0.3 }, prereqs: ['pathfinder'] },
      { id: 'world_walker', name: 'World Walker', level_req: 10, xp_cost: 1500, bonus: { explore_all: 0.35 }, prereqs: ['treasure_sense', 'survivalist'] },
    ],
  },
};

// ─── World Event Types ───
const EVENT_TYPES = {
  storm: { name: 'Great Storm', duration_minutes: 30, rarity: 'common', effects: { visibility: -0.4, speed: -0.2 }, rewards: { xp: 25 } },
  festival: { name: 'Harvest Festival', duration_minutes: 60, rarity: 'uncommon', effects: { morale: 0.3, trade_bonus: 0.2 }, rewards: { road_coin: 2.0, xp: 50 } },
  invasion: { name: 'Monster Invasion', duration_minutes: 45, rarity: 'rare', effects: { danger: 0.5, defense_needed: true }, rewards: { road_coin: 5.0, xp: 100, items: ['rare_loot'] } },
  treasure_hunt: { name: 'Treasure Hunt', duration_minutes: 20, rarity: 'uncommon', effects: { excitement: 0.4 }, rewards: { road_coin: 3.0, xp: 75, items: ['treasure_map'] } },
  eclipse: { name: 'Solar Eclipse', duration_minutes: 15, rarity: 'rare', effects: { light: -0.8, magic_boost: 0.5 }, rewards: { xp: 60 } },
  merchant_caravan: { name: 'Merchant Caravan', duration_minutes: 40, rarity: 'common', effects: { trade_bonus: 0.4 }, rewards: { road_coin: 1.0, xp: 30 } },
  dragon_sighting: { name: 'Dragon Sighting', duration_minutes: 50, rarity: 'legendary', effects: { danger: 0.8, excitement: 0.9 }, rewards: { road_coin: 10.0, xp: 200, items: ['dragon_scale'] } },
  plague: { name: 'Plague Outbreak', duration_minutes: 35, rarity: 'rare', effects: { health: -0.3, morale: -0.2 }, rewards: { xp: 40 } },
};

// ─── Pet System ───
const PET_SPECIES = {
  wolf: { name: 'Wolf', element: 'earth', base_stats: { attack: 8, defense: 5, speed: 7 }, evolves_to: 'dire_wolf', evolve_level: 10 },
  hawk: { name: 'Hawk', element: 'air', base_stats: { attack: 6, defense: 3, speed: 12 }, evolves_to: 'phoenix', evolve_level: 15 },
  turtle: { name: 'Turtle', element: 'water', base_stats: { attack: 3, defense: 12, speed: 2 }, evolves_to: 'dragon_turtle', evolve_level: 12 },
  cat: { name: 'Cat', element: 'shadow', base_stats: { attack: 5, defense: 4, speed: 10 }, evolves_to: 'shadow_panther', evolve_level: 10 },
  fox: { name: 'Fox', element: 'fire', base_stats: { attack: 7, defense: 4, speed: 9 }, evolves_to: 'nine_tail', evolve_level: 12 },
  owl: { name: 'Owl', element: 'arcane', base_stats: { attack: 4, defense: 5, speed: 6, magic: 10 }, evolves_to: 'mystic_owl', evolve_level: 10 },
  dire_wolf: { name: 'Dire Wolf', element: 'earth', base_stats: { attack: 16, defense: 10, speed: 12 }, evolves_to: null, evolve_level: null },
  phoenix: { name: 'Phoenix', element: 'fire', base_stats: { attack: 14, defense: 8, speed: 18 }, evolves_to: null, evolve_level: null },
  dragon_turtle: { name: 'Dragon Turtle', element: 'water', base_stats: { attack: 10, defense: 22, speed: 4 }, evolves_to: null, evolve_level: null },
  shadow_panther: { name: 'Shadow Panther', element: 'shadow', base_stats: { attack: 12, defense: 8, speed: 16 }, evolves_to: null, evolve_level: null },
  nine_tail: { name: 'Nine-Tailed Fox', element: 'fire', base_stats: { attack: 14, defense: 8, speed: 14 }, evolves_to: null, evolve_level: null },
  mystic_owl: { name: 'Mystic Owl', element: 'arcane', base_stats: { attack: 8, defense: 10, speed: 10, magic: 20 }, evolves_to: null, evolve_level: null },
};

// ─── Biome Types for Map System ───
const BIOMES = {
  forest: { name: 'Forest', color: '#228B22', resources: ['wood', 'herb', 'mushroom'], danger: 0.2, description: 'Dense woodland with tall trees' },
  desert: { name: 'Desert', color: '#EDC9AF', resources: ['sand', 'crystal', 'cactus_fruit'], danger: 0.3, description: 'Vast sandy dunes under scorching sun' },
  ocean: { name: 'Ocean', color: '#006994', resources: ['fish', 'pearl', 'seaweed'], danger: 0.4, description: 'Deep waters teeming with life' },
  mountain: { name: 'Mountain', color: '#808080', resources: ['stone', 'iron_ore', 'gem'], danger: 0.5, description: 'Towering peaks rich with ore' },
  swamp: { name: 'Swamp', color: '#556B2F', resources: ['herb', 'leather', 'mushroom'], danger: 0.4, description: 'Murky wetlands hiding secrets' },
  plains: { name: 'Plains', color: '#90EE90', resources: ['wheat', 'cotton', 'herb'], danger: 0.1, description: 'Open grasslands stretching to the horizon' },
  tundra: { name: 'Tundra', color: '#B0E0E6', resources: ['ice_crystal', 'fur', 'stone'], danger: 0.3, description: 'Frozen wasteland of ice and snow' },
  volcano: { name: 'Volcano', color: '#8B0000', resources: ['obsidian', 'dragon_scale', 'fire_crystal'], danger: 0.7, description: 'Fiery landscape of molten rock' },
  jungle: { name: 'Jungle', color: '#013220', resources: ['exotic_wood', 'venom', 'rare_herb'], danger: 0.5, description: 'Thick tropical growth with hidden dangers' },
};

// ─── Faction Definitions ───
const FACTION_TEMPLATES = {
  merchants_guild: { name: 'Merchants Guild', motto: 'Profit through partnership', bonus: { trade_bonus: 0.15, buy_discount: 0.1 }, color: '#FFD700' },
  shadow_order: { name: 'Shadow Order', motto: 'Unseen, unheard, unstoppable', bonus: { stealth: 0.3, speed: 0.1 }, color: '#2F2F2F' },
  iron_legion: { name: 'Iron Legion', motto: 'Strength in steel', bonus: { defense: 10, attack: 5 }, color: '#708090' },
  arcane_circle: { name: 'Arcane Circle', motto: 'Knowledge is the ultimate power', bonus: { magic: 0.2, xp_bonus: 0.1 }, color: '#9B59B6' },
  wildborne: { name: 'Wildborne', motto: 'Nature will prevail', bonus: { exploration: 0.2, healing: 5 }, color: '#27AE60' },
  road_runners: { name: 'Road Runners', motto: 'The road is home', bonus: { speed: 0.2, loot_bonus: 0.1 }, color: '#E74C3C' },
};

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

const TEMPLATES = [
  {
    id: 'platformer-basic',
    name: 'Basic Platformer',
    description: 'Side-scrolling platformer with gravity and collectibles. Classic jump-and-run with pixel art terrain, enemies, and power-ups.',
    genre: 'platformer',
    agent: 'Thalia',
    starter_objects: ['player', 'ground', 'platform', 'coin', 'enemy', 'flag'],
    default_state: { width: 800, height: 600, gravity: 9.8, tile_size: 32, layers: ['background', 'terrain', 'entities', 'ui'] },
  },
  {
    id: 'rpg-topdown',
    name: 'Top-Down RPG',
    description: 'Classic top-down RPG with dialogue trees, inventory management, and turn-based combat. Build towns, dungeons, and quests.',
    genre: 'rpg',
    agent: 'Thalia',
    starter_objects: ['hero', 'npc', 'chest', 'door', 'tree', 'house'],
    default_state: { width: 640, height: 480, tile_size: 16, layers: ['ground', 'objects', 'characters', 'ui'], systems: ['dialogue', 'inventory', 'combat'] },
  },
  {
    id: 'puzzle-grid',
    name: 'Grid Puzzle',
    description: 'Tile-matching puzzle game with cascading combos and power-ups. Design custom levels with increasing difficulty.',
    genre: 'puzzle',
    agent: 'Elias',
    starter_objects: ['tile_red', 'tile_blue', 'tile_green', 'tile_yellow', 'bomb', 'star'],
    default_state: { grid_width: 8, grid_height: 8, tile_types: 6, levels: 50, mechanics: ['match-3', 'cascade', 'powerups'] },
  },
  {
    id: 'racing-track',
    name: 'Track Racer',
    description: 'Top-down racing with AI opponents, drift mechanics, and customizable tracks. Roadie helps you build the perfect circuit.',
    genre: 'racing',
    agent: 'Roadie',
    starter_objects: ['car_player', 'car_ai', 'track_straight', 'track_curve', 'boost_pad', 'oil_slick'],
    default_state: { track_width: 1200, track_height: 800, max_speed: 200, ai_opponents: 5, laps: 3 },
  },
  {
    id: 'sandbox-open',
    name: 'Open Sandbox',
    description: 'Freeform creative sandbox with unlimited building tools. Draw, script, and animate anything you imagine.',
    genre: 'sandbox',
    agent: 'Sapphira',
    starter_objects: ['brush', 'eraser', 'bucket', 'text', 'shape', 'sprite'],
    default_state: { width: 1600, height: 1200, tile_size: 32, tools: ['draw', 'erase', 'fill', 'select', 'script'], max_objects: 10000 },
  },
  {
    id: 'tower-defense',
    name: 'Tower Defense',
    description: 'Place towers along paths to defend against waves of enemies. Balance economy, tower placement, and upgrade strategy.',
    genre: 'strategy',
    agent: 'Thalia',
    starter_objects: ['tower_basic', 'tower_freeze', 'tower_splash', 'enemy_walker', 'enemy_runner', 'path_tile'],
    default_state: { grid_width: 20, grid_height: 15, waves: 30, tower_types: 8, currency: 'roadcoin' },
  },
  {
    id: 'educational-quiz',
    name: 'Educational Quiz World',
    description: 'Build interactive quiz games with branching paths. Correct answers unlock new areas. Elias ensures learning comes first.',
    genre: 'educational',
    agent: 'Elias',
    starter_objects: ['question_node', 'answer_correct', 'answer_wrong', 'reward_door', 'hint_sign', 'score_display'],
    default_state: { width: 800, height: 600, categories: ['math', 'science', 'history', 'language'], difficulty_levels: 5, max_questions: 100 },
  },
  {
    id: 'adventure-story',
    name: 'Story Adventure',
    description: 'Narrative-driven adventure with choices that matter. Build branching storylines, puzzles, and character interactions.',
    genre: 'adventure',
    agent: 'Thalia',
    starter_objects: ['protagonist', 'npc_guide', 'item_key', 'door_locked', 'dialogue_trigger', 'cutscene_zone'],
    default_state: { width: 800, height: 600, scenes: 1, dialogue_nodes: 0, choices_count: 0, endings: 1 },
  },
];

// ─── Cross-Product Integration (RoadChain + RoadCoin) ───
async function stampChain(action, entity, details) {
  try {
    await fetch('https://roadchain-worker.blackroad.workers.dev/api/event', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({app:'roadworld', type: action, data: {entity, details}, ts: new Date().toISOString()})
    });
  } catch {}
}
async function earnCoin(road_id, action, amount) {
  try {
    await fetch('https://roadcoin-worker.blackroad.workers.dev/api/earn', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({road_id: road_id || 'roadworld-system', action, amount})
    });
  } catch {}
}

// ─── Environment Simulation ───
function getWorldEnvironment(worldId) {
  // Deterministic but world-specific time cycle based on real time
  const now = Date.now();
  const cycleLength = 24 * 60 * 1000; // 24 real minutes = 1 game day
  const dayProgress = (now % cycleLength) / cycleLength;
  const hour = Math.floor(dayProgress * 24);
  const minute = Math.floor((dayProgress * 24 - hour) * 60);

  let phase;
  if (hour >= 6 && hour < 12) phase = 'morning';
  else if (hour >= 12 && hour < 17) phase = 'afternoon';
  else if (hour >= 17 && hour < 20) phase = 'evening';
  else phase = 'night';

  // Weather changes every ~6 game hours (6 real minutes)
  const weatherSeed = Math.floor(now / (6 * 60 * 1000));
  const hashNum = (weatherSeed * 2654435761) >>> 0; // Knuth multiplicative hash
  const weatherIdx = hashNum % WEATHER_TYPES.length;
  const weather = WEATHER_TYPES[weatherIdx];

  // Season cycle: ~7 real days = 1 season
  const seasonIdx = Math.floor(now / (7 * 24 * 60 * 60 * 1000)) % 4;
  const seasons = ['spring', 'summer', 'autumn', 'winter'];

  return {
    time: { hour, minute, phase, formatted: `${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}` },
    weather: { type: weather, effects: WEATHER_EFFECTS[weather] },
    season: seasons[seasonIdx],
    light_level: phase === 'night' ? 0.2 : phase === 'evening' ? 0.5 : phase === 'morning' ? 0.7 : 1.0,
    ambient_temp: seasons[seasonIdx] === 'winter' ? -5 : seasons[seasonIdx] === 'summer' ? 30 : 18,
  };
}

async function ensureTables(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS roadworld_worlds (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      genre TEXT DEFAULT 'sandbox',
      template_id TEXT,
      state TEXT NOT NULL DEFAULT '{}',
      owner TEXT DEFAULT 'blackroad',
      visibility TEXT NOT NULL DEFAULT 'private',
      published INTEGER NOT NULL DEFAULT 0,
      published_at TEXT,
      players INTEGER DEFAULT 0,
      rating REAL DEFAULT 0.0,
      ratings_count INTEGER DEFAULT 0,
      version INTEGER DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadworld_assets (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      data TEXT NOT NULL DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (world_id) REFERENCES roadworld_worlds(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadworld_plays (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      player TEXT DEFAULT 'anonymous',
      score INTEGER DEFAULT 0,
      duration_seconds INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (world_id) REFERENCES roadworld_worlds(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_objects (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      x REAL DEFAULT 0,
      y REAL DEFAULT 0,
      properties TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_logic (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      from_object TEXT NOT NULL,
      to_object TEXT NOT NULL,
      trigger_type TEXT NOT NULL,
      action TEXT NOT NULL,
      properties TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_plays (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      session_id TEXT NOT NULL,
      player TEXT DEFAULT 'anonymous',
      state TEXT DEFAULT '{}',
      score INTEGER DEFAULT 0,
      started_at TEXT NOT NULL DEFAULT (datetime('now')),
      ended_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_versions (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      state TEXT NOT NULL,
      thumbnail TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);

  // ─── New tables for enhanced features ───
  await db.batch([
    // NPC System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_npcs (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      name TEXT NOT NULL,
      personality TEXT DEFAULT 'merchant',
      greeting TEXT,
      dialog_tree TEXT DEFAULT '[]',
      behavior TEXT DEFAULT '{}',
      x REAL DEFAULT 0,
      y REAL DEFAULT 0,
      sprite TEXT DEFAULT 'default_npc',
      active INTEGER DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Quest System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_quests (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      type TEXT DEFAULT 'fetch',
      objectives TEXT DEFAULT '[]',
      rewards TEXT DEFAULT '{}',
      npc_giver TEXT,
      npc_turnin TEXT,
      prerequisites TEXT DEFAULT '[]',
      difficulty INTEGER DEFAULT 1,
      repeatable INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Quest Progress (per player)
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_quest_progress (
      id TEXT PRIMARY KEY,
      quest_id TEXT NOT NULL,
      player TEXT NOT NULL,
      status TEXT DEFAULT 'accepted',
      progress TEXT DEFAULT '{}',
      completed_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Inventory System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_inventory (
      id TEXT PRIMARY KEY,
      player TEXT NOT NULL,
      world_id TEXT,
      item_name TEXT NOT NULL,
      item_type TEXT DEFAULT 'material',
      quantity INTEGER DEFAULT 1,
      rarity TEXT DEFAULT 'common',
      properties TEXT DEFAULT '{}',
      equipped INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // World Chat
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_chat (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      player TEXT NOT NULL,
      message TEXT NOT NULL,
      type TEXT DEFAULT 'say',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Achievements
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_achievements (
      id TEXT PRIMARY KEY,
      player TEXT NOT NULL,
      achievement_id TEXT NOT NULL,
      unlocked_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Player Economy (RoadCoin balances)
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_economy (
      id TEXT PRIMARY KEY,
      player TEXT NOT NULL UNIQUE,
      balance REAL DEFAULT 0.0,
      total_earned REAL DEFAULT 0.0,
      total_spent REAL DEFAULT 0.0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Trade log
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_trades (
      id TEXT PRIMARY KEY,
      from_player TEXT NOT NULL,
      to_player TEXT NOT NULL,
      items_offered TEXT DEFAULT '[]',
      items_received TEXT DEFAULT '[]',
      road_offered REAL DEFAULT 0,
      road_received REAL DEFAULT 0,
      status TEXT DEFAULT 'completed',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);

  // ─── New feature tables (buildings, skills, events, pets, map, factions, auction) ───
  await db.batch([
    // Building System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_buildings (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      owner TEXT NOT NULL,
      type TEXT NOT NULL,
      name TEXT,
      level INTEGER DEFAULT 1,
      x REAL DEFAULT 0,
      y REAL DEFAULT 0,
      health INTEGER DEFAULT 100,
      properties TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Skill Trees
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_player_skills (
      id TEXT PRIMARY KEY,
      player TEXT NOT NULL,
      tree TEXT NOT NULL,
      skill_id TEXT NOT NULL,
      level INTEGER DEFAULT 1,
      xp_spent INTEGER DEFAULT 0,
      unlocked_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Player XP
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_player_xp (
      id TEXT PRIMARY KEY,
      player TEXT NOT NULL UNIQUE,
      total_xp INTEGER DEFAULT 0,
      available_xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // World Events
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_events (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      effects TEXT DEFAULT '{}',
      rewards TEXT DEFAULT '{}',
      started_at TEXT NOT NULL DEFAULT (datetime('now')),
      ends_at TEXT NOT NULL,
      active INTEGER DEFAULT 1,
      participants TEXT DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Pet System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_pets (
      id TEXT PRIMARY KEY,
      owner TEXT NOT NULL,
      species TEXT NOT NULL,
      name TEXT NOT NULL,
      level INTEGER DEFAULT 1,
      xp INTEGER DEFAULT 0,
      happiness INTEGER DEFAULT 100,
      stats TEXT DEFAULT '{}',
      equipped INTEGER DEFAULT 0,
      evolved INTEGER DEFAULT 0,
      battles_won INTEGER DEFAULT 0,
      battles_lost INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Map Tiles
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_map_tiles (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      x INTEGER NOT NULL,
      y INTEGER NOT NULL,
      biome TEXT NOT NULL,
      elevation REAL DEFAULT 0.5,
      resources TEXT DEFAULT '[]',
      discovered_by TEXT DEFAULT '[]',
      properties TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);

  await db.batch([
    // Faction System
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_factions (
      id TEXT PRIMARY KEY,
      world_id TEXT,
      faction_type TEXT NOT NULL,
      name TEXT NOT NULL,
      motto TEXT,
      leader TEXT,
      member_count INTEGER DEFAULT 0,
      treasury REAL DEFAULT 0,
      territory_count INTEGER DEFAULT 0,
      reputation INTEGER DEFAULT 0,
      properties TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Faction Members
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_faction_members (
      id TEXT PRIMARY KEY,
      faction_id TEXT NOT NULL,
      player TEXT NOT NULL,
      rank TEXT DEFAULT 'member',
      reputation INTEGER DEFAULT 0,
      joined_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Faction Wars
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_faction_wars (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      attacker_faction TEXT NOT NULL,
      defender_faction TEXT NOT NULL,
      status TEXT DEFAULT 'active',
      attacker_score INTEGER DEFAULT 0,
      defender_score INTEGER DEFAULT 0,
      started_at TEXT NOT NULL DEFAULT (datetime('now')),
      ended_at TEXT
    )`),
    // Auction House
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_auctions (
      id TEXT PRIMARY KEY,
      world_id TEXT NOT NULL,
      seller TEXT NOT NULL,
      item_name TEXT NOT NULL,
      item_type TEXT DEFAULT 'misc',
      item_rarity TEXT DEFAULT 'common',
      item_properties TEXT DEFAULT '{}',
      quantity INTEGER DEFAULT 1,
      starting_price REAL NOT NULL,
      buyout_price REAL,
      current_bid REAL DEFAULT 0,
      current_bidder TEXT,
      bid_count INTEGER DEFAULT 0,
      status TEXT DEFAULT 'active',
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // Auction Bids
    db.prepare(`CREATE TABLE IF NOT EXISTS rw_auction_bids (
      id TEXT PRIMARY KEY,
      auction_id TEXT NOT NULL,
      bidder TEXT NOT NULL,
      amount REAL NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
  ]);
}

// ─── Helper: ensure player economy row exists ───
async function ensurePlayerEconomy(db, player) {
  const existing = await db.prepare('SELECT * FROM rw_economy WHERE player = ?').bind(player).first();
  if (!existing) {
    await db.prepare('INSERT INTO rw_economy (id, player, balance) VALUES (?, ?, ?)')
      .bind(crypto.randomUUID(), player, 10.0).run(); // Start with 10 ROAD
  }
}

// ─── Helper: check and grant achievements ───
async function checkAchievements(db, player, context) {
  const unlocked = [];
  const existing = await db.prepare('SELECT achievement_id FROM rw_achievements WHERE player = ?').bind(player).all();
  const earned = new Set((existing.results || []).map(a => a.achievement_id));

  for (const ach of ACHIEVEMENTS) {
    if (earned.has(ach.id)) continue;

    let qualifies = false;
    switch (ach.id) {
      case 'first_world':
        if (context.action === 'create_world') qualifies = true;
        break;
      case 'publish_game':
        if (context.action === 'publish_game') qualifies = true;
        break;
      case 'first_quest':
        if (context.action === 'create_quest') qualifies = true;
        break;
      case 'quest_complete':
        if (context.action === 'complete_quest') qualifies = true;
        break;
      case 'first_npc':
        if (context.action === 'create_npc') qualifies = true;
        break;
      case 'first_trade':
        if (context.action === 'trade') qualifies = true;
        break;
      case 'first_craft':
        if (context.action === 'craft') qualifies = true;
        break;
      case 'ten_quests': {
        const qCount = await db.prepare("SELECT COUNT(*) as c FROM rw_quest_progress WHERE player = ? AND status = 'completed'").bind(player).first();
        if ((qCount?.c || 0) >= 10) qualifies = true;
        break;
      }
      case 'ten_npcs': {
        const nCount = await db.prepare("SELECT COUNT(*) as c FROM rw_npcs WHERE world_id IN (SELECT id FROM roadworld_worlds WHERE owner = ?)").bind(player).first();
        if ((nCount?.c || 0) >= 10) qualifies = true;
        break;
      }
      case 'social': {
        const chatCount = await db.prepare('SELECT COUNT(*) as c FROM rw_chat WHERE player = ?').bind(player).first();
        if ((chatCount?.c || 0) >= 50) qualifies = true;
        break;
      }
      case 'explorer': {
        const worldsPlayed = await db.prepare('SELECT COUNT(DISTINCT world_id) as c FROM rw_plays WHERE player = ?').bind(player).first();
        if ((worldsPlayed?.c || 0) >= 10) qualifies = true;
        break;
      }
      case 'collector': {
        const items = await db.prepare('SELECT COUNT(DISTINCT item_name) as c FROM rw_inventory WHERE player = ?').bind(player).first();
        if ((items?.c || 0) >= 50) qualifies = true;
        break;
      }
      case 'rich': {
        const bal = await db.prepare('SELECT total_earned FROM rw_economy WHERE player = ?').bind(player).first();
        if ((bal?.total_earned || 0) >= 100) qualifies = true;
        break;
      }
    }

    if (qualifies) {
      await db.prepare('INSERT INTO rw_achievements (id, player, achievement_id) VALUES (?, ?, ?)')
        .bind(crypto.randomUUID(), player, ach.id).run();
      // Award RoadCoin for achievement
      await ensurePlayerEconomy(db, player);
      await db.prepare("UPDATE rw_economy SET balance = balance + ?, total_earned = total_earned + ?, updated_at = datetime('now') WHERE player = ?")
        .bind(ach.reward_road, ach.reward_road, player).run();
      unlocked.push({ ...ach, road_earned: ach.reward_road });
      earnCoin(player, `achievement_${ach.id}`, ach.reward_road).catch(() => {});
    }
  }
  return unlocked;
}

let dbReady = false;

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });
    if (!dbReady) { await ensureTables(env.DB); dbReady = true; }

    // Health
    if ((path === '/health' || path === '/api/health') && method === 'GET') {
      return json({
        status: 'ok', service: 'roadworld', timestamp: new Date().toISOString(),
        systems_online: 16,
        systems: ['worlds', 'npcs', 'quests', 'inventory', 'chat', 'environment', 'achievements', 'economy', 'buildings', 'skills', 'events', 'pets', 'map', 'factions', 'auction', 'rankings'],
      });
    }

    // Stats
    if (path === '/api/stats' && method === 'GET') {
      const worlds = await env.DB.prepare('SELECT COUNT(*) as count FROM roadworld_worlds').first();
      const published = await env.DB.prepare('SELECT COUNT(*) as count FROM roadworld_worlds WHERE published = 1').first();
      const plays = await env.DB.prepare('SELECT COUNT(DISTINCT player) as count FROM rw_plays').first();
      const totalPlays = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_plays').first();
      const legacyPlays = await env.DB.prepare('SELECT COUNT(*) as count FROM roadworld_plays').first();
      const objects = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_objects').first();
      const logicConns = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_logic').first();
      const npcs = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_npcs').first();
      const quests = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_quests WHERE active = 1').first();
      const achievements = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_achievements').first();
      const chatMsgs = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_chat').first();
      const inventoryItems = await env.DB.prepare('SELECT COUNT(*) as count FROM rw_inventory').first();
      return json({
        worlds: worlds.count,
        published_games: published.count,
        unique_players: plays.count || 0,
        total_plays: (totalPlays.count || 0) + (legacyPlays.count || 0),
        total_objects: objects.count || 0,
        total_logic_connections: logicConns.count || 0,
        total_npcs: npcs.count || 0,
        active_quests: quests.count || 0,
        total_achievements: achievements.count || 0,
        total_chat_messages: chatMsgs.count || 0,
        total_inventory_items: inventoryItems.count || 0,
        templates_available: TEMPLATES.length,
        achievement_types: ACHIEVEMENTS.length,
        crafting_recipes: CRAFTING_RECIPES.length,
        npc_personality_types: Object.keys(NPC_PERSONALITIES).length,
        agents: Object.values(AGENTS).map(a => ({ name: a.name, role: a.role })),
      });
    }

    // Create world
    if (path === '/api/worlds' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);

      const id = crypto.randomUUID();
      let state = body.state || {};
      let genre = body.genre || 'sandbox';

      // If template specified, use its default state
      if (body.template_id) {
        const template = TEMPLATES.find(t => t.id === body.template_id);
        if (template) {
          state = { ...template.default_state, ...state };
          genre = template.genre;
        }
      }

      // AI world description if not provided
      let description = body.description || '';
      if (!description && env.AI) {
        try {
          const template = TEMPLATES.find(t => t.id === body.template_id);
          const agentKey = template ? Object.keys(AGENTS).find(k => AGENTS[k].name === template.agent) : 'thalia';
          const agent = AGENTS[agentKey || 'thalia'];
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${agent.prompt} Generate a 1-2 sentence description for a game world. Be vivid and exciting. Return ONLY the description.` },
              { role: 'user', content: `Game name: "${body.name}", genre: ${genre}` },
            ],
            max_tokens: 100,
          });
          if (aiResult.response) description = aiResult.response.trim();
        } catch (e) {
          description = `A ${genre} world called ${body.name}`;
        }
      }

      await env.DB.prepare(
        'INSERT INTO roadworld_worlds (id, name, description, genre, template_id, state, owner) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, description, genre, body.template_id || null, JSON.stringify(state), body.owner || 'blackroad').run();

      // Store version 1
      await env.DB.prepare('INSERT INTO rw_versions (id, world_id, version, state) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), id, 1, JSON.stringify(state)).run();

      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(id).first();
      world.state = JSON.parse(world.state);
      stampChain('world_created', id, body.name.slice(0,100)).catch(()=>{});
      earnCoin(body.owner || 'creator', 'world', 1.0).catch(()=>{});

      // Check achievements
      const achUnlocked = await checkAchievements(env.DB, body.owner || 'blackroad', { action: 'create_world' });

      return json({ world, achievements_unlocked: achUnlocked }, 201);
    }

    // List worlds
    if (path === '/api/worlds' && method === 'GET') {
      const owner = url.searchParams.get('owner');
      const genre = url.searchParams.get('genre');
      let query = 'SELECT id, name, description, genre, template_id, owner, visibility, published, players, rating, version, created_at, updated_at FROM roadworld_worlds';
      const conditions = [];
      const params = [];
      if (owner) { conditions.push('owner = ?'); params.push(owner); }
      if (genre) { conditions.push('genre = ?'); params.push(genre); }
      if (conditions.length > 0) query += ' WHERE ' + conditions.join(' AND ');
      query += ' ORDER BY updated_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ worlds: result.results });
    }

    // Route matching — existing routes
    const worldMatch = path.match(/^\/api\/worlds\/([^/]+)$/);
    const worldPublishMatch = path.match(/^\/api\/worlds\/([^/]+)\/publish$/);
    const worldPlayMatch = path.match(/^\/api\/worlds\/([^/]+)\/play$/);
    const worldPlaysMatch = path.match(/^\/api\/worlds\/([^/]+)\/plays$/);
    const worldObjectsMatch = path.match(/^\/api\/worlds\/([^/]+)\/objects$/);
    const worldLogicMatch = path.match(/^\/api\/worlds\/([^/]+)\/logic$/);

    // Route matching — new feature routes
    const worldStateMatch = path.match(/^\/api\/worlds\/([^/]+)\/state$/);
    const worldNpcsMatch = path.match(/^\/api\/worlds\/([^/]+)\/npcs$/);
    const worldNpcMatch = path.match(/^\/api\/worlds\/([^/]+)\/npcs\/([^/]+)$/);
    const worldNpcDialogMatch = path.match(/^\/api\/worlds\/([^/]+)\/npcs\/([^/]+)\/talk$/);
    const worldQuestsMatch = path.match(/^\/api\/worlds\/([^/]+)\/quests$/);
    const worldQuestMatch = path.match(/^\/api\/worlds\/([^/]+)\/quests\/([^/]+)$/);
    const worldQuestAcceptMatch = path.match(/^\/api\/worlds\/([^/]+)\/quests\/([^/]+)\/accept$/);
    const worldQuestCompleteMatch = path.match(/^\/api\/worlds\/([^/]+)\/quests\/([^/]+)\/complete$/);
    const worldChatMatch = path.match(/^\/api\/worlds\/([^/]+)\/chat$/);
    const worldEnvironmentMatch = path.match(/^\/api\/worlds\/([^/]+)\/environment$/);
    const worldAchievementsMatch = path.match(/^\/api\/worlds\/([^/]+)\/achievements$/);

    // Route matching — 8 new feature routes
    const worldBuildingsMatch = path.match(/^\/api\/worlds\/([^/]+)\/buildings$/);
    const worldBuildingMatch = path.match(/^\/api\/worlds\/([^/]+)\/buildings\/([^/]+)$/);
    const worldBuildingUpgradeMatch = path.match(/^\/api\/worlds\/([^/]+)\/buildings\/([^/]+)\/upgrade$/);
    const worldEventsMatch = path.match(/^\/api\/worlds\/([^/]+)\/events$/);
    const worldEventMatch = path.match(/^\/api\/worlds\/([^/]+)\/events\/([^/]+)$/);
    const worldEventJoinMatch = path.match(/^\/api\/worlds\/([^/]+)\/events\/([^/]+)\/join$/);
    const worldMapMatch = path.match(/^\/api\/worlds\/([^/]+)\/map$/);
    const worldMapExploreMatch = path.match(/^\/api\/worlds\/([^/]+)\/map\/explore$/);
    const worldAuctionMatch = path.match(/^\/api\/worlds\/([^/]+)\/auction$/);
    const worldAuctionItemMatch = path.match(/^\/api\/worlds\/([^/]+)\/auction\/([^/]+)$/);
    const worldAuctionBidMatch = path.match(/^\/api\/worlds\/([^/]+)\/auction\/([^/]+)\/bid$/);
    const worldAuctionBuyoutMatch = path.match(/^\/api\/worlds\/([^/]+)\/auction\/([^/]+)\/buyout$/);
    const skillsMatch = path.match(/^\/api\/skills$/);
    const skillsPlayerMatch = path.match(/^\/api\/skills\/([^/]+)$/);
    const skillsUnlockMatch = path.match(/^\/api\/skills\/([^/]+)\/unlock$/);
    const petsMatch = path.match(/^\/api\/pets$/);
    const petMatch = path.match(/^\/api\/pets\/([^/]+)$/);
    const petTrainMatch = path.match(/^\/api\/pets\/([^/]+)\/train$/);
    const petEvolveMatch = path.match(/^\/api\/pets\/([^/]+)\/evolve$/);
    const petBattleMatch = path.match(/^\/api\/pets\/battle$/);
    const factionsMatch = path.match(/^\/api\/factions$/);
    const factionMatch = path.match(/^\/api\/factions\/([^/]+)$/);
    const factionJoinMatch = path.match(/^\/api\/factions\/([^/]+)\/join$/);
    const factionLeaveMatch = path.match(/^\/api\/factions\/([^/]+)\/leave$/);
    const factionWarMatch = path.match(/^\/api\/factions\/([^/]+)\/war$/);
    const rankingsMatch = path.match(/^\/api\/rankings$/);

    // ═══════════════════════════════════════════
    // ─── 1. REAL-TIME WORLD STATE ───
    // ═══════════════════════════════════════════
    if (worldStateMatch && method === 'GET') {
      const worldId = worldStateMatch[1];
      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);

      const objects = await env.DB.prepare('SELECT * FROM rw_objects WHERE world_id = ? ORDER BY created_at ASC').bind(worldId).all();
      const npcs = await env.DB.prepare('SELECT id, name, personality, x, y, sprite, active FROM rw_npcs WHERE world_id = ? AND active = 1').bind(worldId).all();
      const activePlays = await env.DB.prepare("SELECT session_id, player, started_at FROM rw_plays WHERE world_id = ? AND ended_at IS NULL ORDER BY started_at DESC LIMIT 50").bind(worldId).all();
      const questCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_quests WHERE world_id = ? AND active = 1').bind(worldId).first();
      const environment = getWorldEnvironment(worldId);

      // Resources: count items available in-world
      const worldItems = await env.DB.prepare("SELECT item_name, SUM(quantity) as total FROM rw_inventory WHERE world_id = ? GROUP BY item_name").bind(worldId).all();

      return json({
        world_id: worldId,
        name: world.name,
        genre: world.genre,
        state: JSON.parse(world.state),
        environment,
        players_online: (activePlays.results || []).map(p => ({ session: p.session_id, player: p.player, since: p.started_at })),
        player_count: (activePlays.results || []).length,
        npcs: (npcs.results || []).map(n => ({ id: n.id, name: n.name, personality: n.personality, x: n.x, y: n.y, sprite: n.sprite })),
        npc_count: (npcs.results || []).length,
        objects: (objects.results || []).map(o => ({ id: o.id, type: o.type, name: o.name, x: o.x, y: o.y })),
        object_count: (objects.results || []).length,
        active_quests: questCount?.c || 0,
        resources: (worldItems.results || []).map(r => ({ item: r.item_name, available: r.total })),
        timestamp: new Date().toISOString(),
      });
    }

    // ═══════════════════════════════════════════
    // ─── 2. NPC SYSTEM ───
    // ═══════════════════════════════════════════

    // Create NPC
    if (worldNpcsMatch && method === 'POST') {
      const worldId = worldNpcsMatch[1];
      const world = await env.DB.prepare('SELECT id, owner FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);

      const personality = NPC_PERSONALITIES[body.personality] ? body.personality : 'merchant';
      const template = NPC_PERSONALITIES[personality];
      const id = crypto.randomUUID();

      // AI-generated greeting if not provided
      let greeting = body.greeting || template.greeting;
      if (env.AI && !body.greeting) {
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are writing dialog for an NPC in a game. The NPC is a ${personality} named ${body.name}. Their personality trait is: ${template.trait}. Write a short, in-character greeting (1 sentence). Return ONLY the greeting.` },
              { role: 'user', content: `Generate a greeting for ${body.name} the ${personality}` },
            ],
            max_tokens: 60,
          });
          if (aiResult.response) greeting = aiResult.response.trim();
        } catch {}
      }

      // Build dialog tree
      const dialogTree = body.dialog_tree || [
        { id: 'greet', text: greeting, options: [
          { text: 'Tell me more.', next: 'info' },
          { text: 'What do you have?', next: 'trade' },
          { text: 'Goodbye.', next: null },
        ]},
        { id: 'info', text: `I am ${body.name}, a ${personality} of this land. ${template.behavior}`, options: [
          { text: 'Interesting. Anything else?', next: 'greet' },
          { text: 'Goodbye.', next: null },
        ]},
        { id: 'trade', text: 'Take a look at what I have to offer.', options: [
          { text: 'Thanks, I will browse.', next: null },
          { text: 'Never mind.', next: 'greet' },
        ]},
      ];

      const behavior = body.behavior || { patrol_radius: 0, hostile: false, trait: template.trait, behavior_desc: template.behavior };

      await env.DB.prepare(
        'INSERT INTO rw_npcs (id, world_id, name, personality, greeting, dialog_tree, behavior, x, y, sprite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, worldId, body.name.slice(0, 64), personality, greeting, JSON.stringify(dialogTree), JSON.stringify(behavior), body.x || 0, body.y || 0, body.sprite || 'default_npc').run();

      await env.DB.prepare("UPDATE roadworld_worlds SET updated_at = datetime('now') WHERE id = ?").bind(worldId).run();
      stampChain('npc_created', id, body.name.slice(0, 64)).catch(() => {});

      const achUnlocked = await checkAchievements(env.DB, world.owner || 'blackroad', { action: 'create_npc' });

      return json({
        ok: true, id, world_id: worldId,
        name: body.name, personality, greeting,
        dialog_tree: dialogTree,
        behavior,
        x: body.x || 0, y: body.y || 0,
        sprite: body.sprite || 'default_npc',
        achievements_unlocked: achUnlocked,
      }, 201);
    }

    // List NPCs
    if (worldNpcsMatch && method === 'GET') {
      const worldId = worldNpcsMatch[1];
      const npcs = await env.DB.prepare('SELECT * FROM rw_npcs WHERE world_id = ? ORDER BY created_at ASC').bind(worldId).all();
      return json({
        world_id: worldId,
        npcs: (npcs.results || []).map(n => ({
          ...n,
          dialog_tree: JSON.parse(n.dialog_tree || '[]'),
          behavior: JSON.parse(n.behavior || '{}'),
        })),
        total: (npcs.results || []).length,
        personality_types: Object.keys(NPC_PERSONALITIES),
      });
    }

    // Get single NPC
    if (worldNpcMatch && method === 'GET') {
      const [, worldId, npcId] = worldNpcMatch;
      const npc = await env.DB.prepare('SELECT * FROM rw_npcs WHERE id = ? AND world_id = ?').bind(npcId, worldId).first();
      if (!npc) return json({ error: 'NPC not found' }, 404);
      npc.dialog_tree = JSON.parse(npc.dialog_tree || '[]');
      npc.behavior = JSON.parse(npc.behavior || '{}');
      // Get quests this NPC gives
      const quests = await env.DB.prepare('SELECT id, title, description, type, difficulty FROM rw_quests WHERE npc_giver = ? AND active = 1').bind(npcId).all();
      return json({ npc, quests_available: quests.results || [] });
    }

    // Talk to NPC (AI-powered conversation)
    if (worldNpcDialogMatch && method === 'POST') {
      const [, worldId, npcId] = worldNpcDialogMatch;
      const npc = await env.DB.prepare('SELECT * FROM rw_npcs WHERE id = ? AND world_id = ?').bind(npcId, worldId).first();
      if (!npc) return json({ error: 'NPC not found' }, 404);

      const body = await request.json();
      const dialogTree = JSON.parse(npc.dialog_tree || '[]');

      // If player provides a dialog_node_id, return that node
      if (body.node_id) {
        const node = dialogTree.find(n => n.id === body.node_id);
        if (node) return json({ npc_name: npc.name, dialog: node });
        return json({ npc_name: npc.name, dialog: { text: npc.greeting, options: [] } });
      }

      // Free-form AI conversation
      if (body.message && env.AI) {
        try {
          const behavior = JSON.parse(npc.behavior || '{}');
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are ${npc.name}, a ${npc.personality} NPC in a game world. Your personality trait: ${behavior.trait || 'friendly'}. ${behavior.behavior_desc || ''}. Stay in character. Keep responses under 2 sentences. Never break character.` },
              { role: 'user', content: body.message },
            ],
            max_tokens: 100,
          });
          return json({ npc_name: npc.name, personality: npc.personality, response: aiResult.response?.trim() || npc.greeting });
        } catch {
          return json({ npc_name: npc.name, personality: npc.personality, response: npc.greeting });
        }
      }

      // Default: return greeting node
      const greetNode = dialogTree.find(n => n.id === 'greet') || { text: npc.greeting, options: [] };
      return json({ npc_name: npc.name, personality: npc.personality, dialog: greetNode });
    }

    // ═══════════════════════════════════════════
    // ─── 3. QUEST SYSTEM ───
    // ═══════════════════════════════════════════

    // Create Quest
    if (worldQuestsMatch && method === 'POST') {
      const worldId = worldQuestsMatch[1];
      const world = await env.DB.prepare('SELECT id, owner FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      if (!body.title) return json({ error: 'title is required' }, 400);

      const validTypes = ['fetch', 'kill', 'explore', 'deliver', 'escort', 'puzzle', 'craft', 'social'];
      const type = validTypes.includes(body.type) ? body.type : 'fetch';
      const id = crypto.randomUUID();

      const objectives = body.objectives || [{ id: 'obj1', description: body.title, target: 1, current: 0 }];
      const rewards = body.rewards || { road_coin: 1.0, xp: 50, items: [] };

      // Verify NPC exists if provided
      if (body.npc_giver) {
        const npc = await env.DB.prepare('SELECT id FROM rw_npcs WHERE id = ? AND world_id = ?').bind(body.npc_giver, worldId).first();
        if (!npc) return json({ error: 'NPC giver not found in this world' }, 404);
      }

      await env.DB.prepare(
        'INSERT INTO rw_quests (id, world_id, title, description, type, objectives, rewards, npc_giver, npc_turnin, prerequisites, difficulty, repeatable) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, worldId, body.title.slice(0, 128), body.description || '', type, JSON.stringify(objectives), JSON.stringify(rewards),
        body.npc_giver || null, body.npc_turnin || null, JSON.stringify(body.prerequisites || []),
        body.difficulty || 1, body.repeatable ? 1 : 0).run();

      stampChain('quest_created', id, body.title.slice(0, 64)).catch(() => {});
      const achUnlocked = await checkAchievements(env.DB, world.owner || 'blackroad', { action: 'create_quest' });

      return json({ ok: true, id, world_id: worldId, title: body.title, type, objectives, rewards, achievements_unlocked: achUnlocked }, 201);
    }

    // List Quests
    if (worldQuestsMatch && method === 'GET') {
      const worldId = worldQuestsMatch[1];
      const player = url.searchParams.get('player');
      const quests = await env.DB.prepare('SELECT * FROM rw_quests WHERE world_id = ? AND active = 1 ORDER BY created_at ASC').bind(worldId).all();

      const questList = (quests.results || []).map(q => ({
        ...q,
        objectives: JSON.parse(q.objectives || '[]'),
        rewards: JSON.parse(q.rewards || '{}'),
        prerequisites: JSON.parse(q.prerequisites || '[]'),
      }));

      // If player specified, include their progress
      if (player) {
        for (const q of questList) {
          const prog = await env.DB.prepare('SELECT * FROM rw_quest_progress WHERE quest_id = ? AND player = ? ORDER BY created_at DESC LIMIT 1').bind(q.id, player).first();
          q.player_progress = prog ? { status: prog.status, progress: JSON.parse(prog.progress || '{}'), completed_at: prog.completed_at } : null;
        }
      }

      return json({ world_id: worldId, quests: questList, total: questList.length });
    }

    // Get single quest
    if (worldQuestMatch && method === 'GET') {
      const [, worldId, questId] = worldQuestMatch;
      const quest = await env.DB.prepare('SELECT * FROM rw_quests WHERE id = ? AND world_id = ?').bind(questId, worldId).first();
      if (!quest) return json({ error: 'Quest not found' }, 404);
      quest.objectives = JSON.parse(quest.objectives || '[]');
      quest.rewards = JSON.parse(quest.rewards || '{}');
      quest.prerequisites = JSON.parse(quest.prerequisites || '[]');
      // Get all player progress for this quest
      const progress = await env.DB.prepare('SELECT player, status, progress, completed_at FROM rw_quest_progress WHERE quest_id = ?').bind(questId).all();
      return json({ quest, player_progress: (progress.results || []).map(p => ({ ...p, progress: JSON.parse(p.progress || '{}') })) });
    }

    // Accept Quest
    if (worldQuestAcceptMatch && method === 'POST') {
      const [, worldId, questId] = worldQuestAcceptMatch;
      const quest = await env.DB.prepare('SELECT * FROM rw_quests WHERE id = ? AND world_id = ? AND active = 1').bind(questId, worldId).first();
      if (!quest) return json({ error: 'Quest not found or inactive' }, 404);
      const body = await request.json().catch(() => ({}));
      const player = (body.player || 'anonymous').slice(0, 64);

      // Check if already accepted
      const existing = await env.DB.prepare("SELECT * FROM rw_quest_progress WHERE quest_id = ? AND player = ? AND status IN ('accepted','in_progress')").bind(questId, player).first();
      if (existing) return json({ error: 'Quest already accepted', progress: { ...existing, progress: JSON.parse(existing.progress || '{}') } }, 409);

      // Check prerequisites
      const prereqs = JSON.parse(quest.prerequisites || '[]');
      for (const pq of prereqs) {
        const completed = await env.DB.prepare("SELECT id FROM rw_quest_progress WHERE quest_id = ? AND player = ? AND status = 'completed'").bind(pq, player).first();
        if (!completed) return json({ error: `Prerequisite quest not completed: ${pq}` }, 400);
      }

      const id = crypto.randomUUID();
      const objectives = JSON.parse(quest.objectives || '[]');
      const progress = {};
      for (const obj of objectives) { progress[obj.id] = { current: 0, target: obj.target }; }

      await env.DB.prepare('INSERT INTO rw_quest_progress (id, quest_id, player, status, progress) VALUES (?, ?, ?, ?, ?)')
        .bind(id, questId, player, 'accepted', JSON.stringify(progress)).run();

      return json({ ok: true, quest_id: questId, player, status: 'accepted', progress, message: `Quest "${quest.title}" accepted` });
    }

    // Complete Quest
    if (worldQuestCompleteMatch && method === 'POST') {
      const [, worldId, questId] = worldQuestCompleteMatch;
      const quest = await env.DB.prepare('SELECT * FROM rw_quests WHERE id = ? AND world_id = ?').bind(questId, worldId).first();
      if (!quest) return json({ error: 'Quest not found' }, 404);
      const body = await request.json().catch(() => ({}));
      const player = (body.player || 'anonymous').slice(0, 64);

      const prog = await env.DB.prepare("SELECT * FROM rw_quest_progress WHERE quest_id = ? AND player = ? AND status IN ('accepted','in_progress') ORDER BY created_at DESC LIMIT 1").bind(questId, player).first();
      if (!prog) return json({ error: 'Quest not accepted or already completed' }, 400);

      // Mark complete
      await env.DB.prepare("UPDATE rw_quest_progress SET status = 'completed', completed_at = datetime('now') WHERE id = ?").bind(prog.id).run();

      // Award rewards
      const rewards = JSON.parse(quest.rewards || '{}');
      const roadEarned = rewards.road_coin || 1.0;

      await ensurePlayerEconomy(env.DB, player);
      await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, total_earned = total_earned + ?, updated_at = datetime('now') WHERE player = ?")
        .bind(roadEarned, roadEarned, player).run();

      // Award item rewards
      if (rewards.items && rewards.items.length > 0) {
        for (const item of rewards.items) {
          await env.DB.prepare('INSERT INTO rw_inventory (id, player, world_id, item_name, item_type, quantity, rarity) VALUES (?, ?, ?, ?, ?, ?, ?)')
            .bind(crypto.randomUUID(), player, worldId, item.name, item.type || 'quest_reward', item.quantity || 1, item.rarity || 'uncommon').run();
        }
      }

      stampChain('quest_completed', questId, `${player}:${quest.title}`).catch(() => {});
      earnCoin(player, 'quest_complete', roadEarned).catch(() => {});

      const achUnlocked = await checkAchievements(env.DB, player, { action: 'complete_quest' });

      return json({
        ok: true, quest_id: questId, player, status: 'completed',
        rewards_earned: { road_coin: roadEarned, xp: rewards.xp || 0, items: rewards.items || [] },
        achievements_unlocked: achUnlocked,
        message: `Quest "${quest.title}" completed! Earned ${roadEarned} ROAD`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 4. INVENTORY SYSTEM ───
    // ═══════════════════════════════════════════

    // Get player inventory
    if (path === '/api/inventory' && method === 'GET') {
      const player = url.searchParams.get('player');
      if (!player) return json({ error: 'player parameter required' }, 400);
      const worldId = url.searchParams.get('world_id');

      let query = 'SELECT * FROM rw_inventory WHERE player = ?';
      const params = [player];
      if (worldId) { query += ' AND (world_id = ? OR world_id IS NULL)'; params.push(worldId); }
      query += ' ORDER BY created_at DESC';

      const items = await env.DB.prepare(query).bind(...params).all();
      const economy = await env.DB.prepare('SELECT * FROM rw_economy WHERE player = ?').bind(player).first();

      return json({
        player,
        items: (items.results || []).map(i => ({ ...i, properties: JSON.parse(i.properties || '{}') })),
        total_items: (items.results || []).length,
        road_balance: economy?.balance || 0,
        total_earned: economy?.total_earned || 0,
        total_spent: economy?.total_spent || 0,
      });
    }

    // Add item to inventory
    if (path === '/api/inventory' && method === 'POST') {
      const body = await request.json();
      if (!body.player || !body.item_name) return json({ error: 'player and item_name required' }, 400);

      const validTypes = ['weapon', 'armor', 'potion', 'material', 'quest_item', 'tool', 'food', 'key', 'treasure', 'misc'];
      const itemType = validTypes.includes(body.item_type) ? body.item_type : 'misc';
      const rarity = ITEM_RARITIES.includes(body.rarity) ? body.rarity : 'common';
      const id = crypto.randomUUID();

      // Check if player already has this item, stack if so
      const existing = await env.DB.prepare('SELECT * FROM rw_inventory WHERE player = ? AND item_name = ? AND world_id IS ?')
        .bind(body.player, body.item_name, body.world_id || null).first();

      if (existing && !body.no_stack) {
        await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity + ?, updated_at = datetime('now') WHERE id = ?")
          .bind(body.quantity || 1, existing.id).run();
        return json({ ok: true, id: existing.id, stacked: true, new_quantity: existing.quantity + (body.quantity || 1) });
      }

      await env.DB.prepare('INSERT INTO rw_inventory (id, player, world_id, item_name, item_type, quantity, rarity, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, body.player.slice(0, 64), body.world_id || null, body.item_name.slice(0, 64), itemType, body.quantity || 1, rarity, JSON.stringify(body.properties || {})).run();

      return json({ ok: true, id, player: body.player, item_name: body.item_name, item_type: itemType, quantity: body.quantity || 1, rarity }, 201);
    }

    // Craft item
    if (path === '/api/inventory/craft' && method === 'POST') {
      const body = await request.json();
      if (!body.player || !body.recipe_id) return json({ error: 'player and recipe_id required' }, 400);

      const recipe = CRAFTING_RECIPES.find(r => r.id === body.recipe_id);
      if (!recipe) return json({ error: 'Recipe not found', available_recipes: CRAFTING_RECIPES.map(r => ({ id: r.id, name: r.name, ingredients: r.ingredients })) }, 404);

      // Check player has all ingredients
      for (const ing of recipe.ingredients) {
        const have = await env.DB.prepare('SELECT SUM(quantity) as total FROM rw_inventory WHERE player = ? AND item_name = ?')
          .bind(body.player, ing.item).first();
        if (!have || (have.total || 0) < ing.qty) {
          return json({ error: `Not enough ${ing.item}. Need ${ing.qty}, have ${have?.total || 0}`, missing: ing.item }, 400);
        }
      }

      // Consume ingredients
      for (const ing of recipe.ingredients) {
        let remaining = ing.qty;
        const stacks = await env.DB.prepare('SELECT id, quantity FROM rw_inventory WHERE player = ? AND item_name = ? ORDER BY quantity ASC')
          .bind(body.player, ing.item).all();
        for (const stack of (stacks.results || [])) {
          if (remaining <= 0) break;
          if (stack.quantity <= remaining) {
            await env.DB.prepare('DELETE FROM rw_inventory WHERE id = ?').bind(stack.id).run();
            remaining -= stack.quantity;
          } else {
            await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity - ?, updated_at = datetime('now') WHERE id = ?")
              .bind(remaining, stack.id).run();
            remaining = 0;
          }
        }
      }

      // Create crafted item
      const craftedId = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rw_inventory (id, player, item_name, item_type, quantity, rarity, properties) VALUES (?, ?, ?, ?, ?, ?, ?)')
        .bind(craftedId, body.player, recipe.name, 'weapon', 1, recipe.result_rarity, JSON.stringify({ crafted: true, recipe_id: recipe.id })).run();

      stampChain('item_crafted', craftedId, recipe.name).catch(() => {});
      const achUnlocked = await checkAchievements(env.DB, body.player, { action: 'craft' });

      return json({
        ok: true, crafted: { id: craftedId, name: recipe.name, rarity: recipe.result_rarity },
        consumed: recipe.ingredients,
        achievements_unlocked: achUnlocked,
        message: `Crafted ${recipe.name}!`,
      });
    }

    // List crafting recipes
    if (path === '/api/inventory/recipes' && method === 'GET') {
      return json({ recipes: CRAFTING_RECIPES, rarities: ITEM_RARITIES });
    }

    // Trade items between players
    if (path === '/api/inventory/trade' && method === 'POST') {
      const body = await request.json();
      if (!body.from_player || !body.to_player) return json({ error: 'from_player and to_player required' }, 400);
      if (!body.items && !body.road_amount) return json({ error: 'items or road_amount required' }, 400);

      const tradeId = crypto.randomUUID();
      const itemsTraded = [];

      // Transfer items
      if (body.items && Array.isArray(body.items)) {
        for (const item of body.items) {
          const fromItem = await env.DB.prepare('SELECT * FROM rw_inventory WHERE id = ? AND player = ?').bind(item.id, body.from_player).first();
          if (!fromItem) return json({ error: `Item ${item.id} not found in ${body.from_player}'s inventory` }, 404);
          if (fromItem.quantity < (item.quantity || 1)) return json({ error: `Not enough of ${fromItem.item_name}` }, 400);

          // Deduct from sender
          if (fromItem.quantity === (item.quantity || 1)) {
            await env.DB.prepare('DELETE FROM rw_inventory WHERE id = ?').bind(item.id).run();
          } else {
            await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity - ?, updated_at = datetime('now') WHERE id = ?")
              .bind(item.quantity || 1, item.id).run();
          }

          // Add to receiver (stack or new)
          const existingStack = await env.DB.prepare('SELECT * FROM rw_inventory WHERE player = ? AND item_name = ?')
            .bind(body.to_player, fromItem.item_name).first();
          if (existingStack) {
            await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity + ?, updated_at = datetime('now') WHERE id = ?")
              .bind(item.quantity || 1, existingStack.id).run();
          } else {
            await env.DB.prepare('INSERT INTO rw_inventory (id, player, item_name, item_type, quantity, rarity, properties) VALUES (?, ?, ?, ?, ?, ?, ?)')
              .bind(crypto.randomUUID(), body.to_player, fromItem.item_name, fromItem.item_type, item.quantity || 1, fromItem.rarity, fromItem.properties).run();
          }
          itemsTraded.push({ name: fromItem.item_name, quantity: item.quantity || 1 });
        }
      }

      // Transfer RoadCoin
      let roadTransferred = 0;
      if (body.road_amount && body.road_amount > 0) {
        await ensurePlayerEconomy(env.DB, body.from_player);
        await ensurePlayerEconomy(env.DB, body.to_player);
        const fromBal = await env.DB.prepare('SELECT balance FROM rw_economy WHERE player = ?').bind(body.from_player).first();
        if ((fromBal?.balance || 0) < body.road_amount) return json({ error: 'Insufficient RoadCoin balance' }, 400);

        await env.DB.prepare("UPDATE rw_economy SET balance = balance - ?, total_spent = total_spent + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(body.road_amount, body.road_amount, body.from_player).run();
        await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, total_earned = total_earned + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(body.road_amount, body.road_amount, body.to_player).run();
        roadTransferred = body.road_amount;
      }

      // Log trade
      await env.DB.prepare('INSERT INTO rw_trades (id, from_player, to_player, items_offered, road_offered) VALUES (?, ?, ?, ?, ?)')
        .bind(tradeId, body.from_player, body.to_player, JSON.stringify(itemsTraded), roadTransferred).run();

      stampChain('trade', tradeId, `${body.from_player}->${body.to_player}`).catch(() => {});
      const achUnlocked = await checkAchievements(env.DB, body.from_player, { action: 'trade' });

      return json({
        ok: true, trade_id: tradeId,
        from: body.from_player, to: body.to_player,
        items_traded: itemsTraded,
        road_transferred: roadTransferred,
        achievements_unlocked: achUnlocked,
        message: `Trade completed between ${body.from_player} and ${body.to_player}`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 5. WORLD CHAT ───
    // ═══════════════════════════════════════════

    // Send chat message
    if (worldChatMatch && method === 'POST') {
      const worldId = worldChatMatch[1];
      const world = await env.DB.prepare('SELECT id, name FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      if (!body.player || !body.message) return json({ error: 'player and message required' }, 400);

      const validTypes = ['say', 'shout', 'whisper', 'emote', 'system'];
      const type = validTypes.includes(body.type) ? body.type : 'say';
      const id = crypto.randomUUID();

      await env.DB.prepare('INSERT INTO rw_chat (id, world_id, player, message, type) VALUES (?, ?, ?, ?, ?)')
        .bind(id, worldId, body.player.slice(0, 64), body.message.slice(0, 500), type).run();

      // Check chat achievement
      const achUnlocked = await checkAchievements(env.DB, body.player, { action: 'chat' });

      return json({
        ok: true, id, world_id: worldId,
        player: body.player, message: body.message, type,
        world_name: world.name,
        achievements_unlocked: achUnlocked,
      }, 201);
    }

    // Get chat history
    if (worldChatMatch && method === 'GET') {
      const worldId = worldChatMatch[1];
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 200);
      const since = url.searchParams.get('since'); // ISO timestamp for polling

      let query = 'SELECT * FROM rw_chat WHERE world_id = ?';
      const params = [worldId];
      if (since) { query += ' AND created_at > ?'; params.push(since); }
      query += ' ORDER BY created_at DESC LIMIT ?';
      params.push(limit);

      const messages = await env.DB.prepare(query).bind(...params).all();
      return json({
        world_id: worldId,
        messages: (messages.results || []).reverse(), // Chronological order
        count: (messages.results || []).length,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 6. WEATHER / TIME / ENVIRONMENT ───
    // ═══════════════════════════════════════════

    if (worldEnvironmentMatch && method === 'GET') {
      const worldId = worldEnvironmentMatch[1];
      const world = await env.DB.prepare('SELECT id, name, genre FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);

      const env_state = getWorldEnvironment(worldId);

      return json({
        world_id: worldId,
        world_name: world.name,
        ...env_state,
        weather_types: WEATHER_TYPES,
        effects_reference: WEATHER_EFFECTS,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 7. ACHIEVEMENT SYSTEM ───
    // ═══════════════════════════════════════════

    // Get achievements for a world (all players) or specific player
    if (worldAchievementsMatch && method === 'GET') {
      const worldId = worldAchievementsMatch[1];
      const player = url.searchParams.get('player');

      if (player) {
        const earned = await env.DB.prepare('SELECT * FROM rw_achievements WHERE player = ? ORDER BY unlocked_at DESC').bind(player).all();
        const earnedIds = new Set((earned.results || []).map(a => a.achievement_id));
        return json({
          player,
          world_id: worldId,
          unlocked: (earned.results || []).map(a => {
            const def = ACHIEVEMENTS.find(d => d.id === a.achievement_id);
            return { ...a, ...def };
          }),
          locked: ACHIEVEMENTS.filter(a => !earnedIds.has(a.id)),
          progress: `${earnedIds.size}/${ACHIEVEMENTS.length}`,
        });
      }

      // All achievements in this world's context
      return json({
        world_id: worldId,
        available_achievements: ACHIEVEMENTS,
        total: ACHIEVEMENTS.length,
        categories: [...new Set(ACHIEVEMENTS.map(a => a.category))],
      });
    }

    // Global player achievements (no world context)
    if (path === '/api/achievements' && method === 'GET') {
      const player = url.searchParams.get('player');
      if (!player) return json({ available: ACHIEVEMENTS, total: ACHIEVEMENTS.length });
      const earned = await env.DB.prepare('SELECT * FROM rw_achievements WHERE player = ? ORDER BY unlocked_at DESC').bind(player).all();
      const earnedIds = new Set((earned.results || []).map(a => a.achievement_id));
      return json({
        player,
        unlocked: (earned.results || []).map(a => {
          const def = ACHIEVEMENTS.find(d => d.id === a.achievement_id);
          return { ...a, ...def };
        }),
        locked: ACHIEVEMENTS.filter(a => !earnedIds.has(a.id)),
        progress: `${earnedIds.size}/${ACHIEVEMENTS.length}`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 8. ROADCOIN ECONOMY ───
    // ═══════════════════════════════════════════

    // Get player balance
    if (path === '/api/economy' && method === 'GET') {
      const player = url.searchParams.get('player');
      if (!player) return json({ error: 'player parameter required' }, 400);
      await ensurePlayerEconomy(env.DB, player);
      const economy = await env.DB.prepare('SELECT * FROM rw_economy WHERE player = ?').bind(player).first();
      const recentTrades = await env.DB.prepare(
        'SELECT * FROM rw_trades WHERE from_player = ? OR to_player = ? ORDER BY created_at DESC LIMIT 10'
      ).bind(player, player).all();
      return json({
        player,
        balance: economy.balance,
        total_earned: economy.total_earned,
        total_spent: economy.total_spent,
        recent_trades: (recentTrades.results || []).map(t => ({
          ...t,
          items_offered: JSON.parse(t.items_offered || '[]'),
          items_received: JSON.parse(t.items_received || '[]'),
        })),
      });
    }

    // Economy leaderboard
    if (path === '/api/economy/leaderboard' && method === 'GET') {
      const topEarners = await env.DB.prepare('SELECT player, balance, total_earned, total_spent FROM rw_economy ORDER BY total_earned DESC LIMIT 25').all();
      return json({
        leaderboard: (topEarners.results || []).map((e, i) => ({
          rank: i + 1, player: e.player, balance: e.balance, total_earned: e.total_earned, total_spent: e.total_spent,
        })),
      });
    }

    // ═══════════════════════════════════════════
    // ─── EXISTING ENDPOINTS (preserved) ───
    // ═══════════════════════════════════════════

    // ─── World Objects ───
    if (worldObjectsMatch && method === 'POST') {
      const worldId = worldObjectsMatch[1];
      const world = await env.DB.prepare('SELECT id FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const validTypes = ['road', 'building', 'vehicle', 'character', 'nature', 'interactive', 'item', 'trigger', 'ui', 'decoration'];
      const type = validTypes.includes(body.type) ? body.type : 'interactive';
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rw_objects (id, world_id, type, name, x, y, properties) VALUES (?, ?, ?, ?, ?, ?, ?)')
        .bind(id, worldId, type, body.name.slice(0, 64), body.x || 0, body.y || 0, JSON.stringify(body.properties || {})).run();
      await env.DB.prepare("UPDATE roadworld_worlds SET updated_at = datetime('now') WHERE id = ?").bind(worldId).run();
      return json({ ok: true, id, world_id: worldId, type, name: body.name, x: body.x || 0, y: body.y || 0, properties: body.properties || {} }, 201);
    }

    if (worldObjectsMatch && method === 'GET') {
      const worldId = worldObjectsMatch[1];
      const objects = await env.DB.prepare('SELECT * FROM rw_objects WHERE world_id = ? ORDER BY created_at ASC').bind(worldId).all();
      return json({ world_id: worldId, objects: (objects.results || []).map(o => ({ ...o, properties: JSON.parse(o.properties || '{}') })), total: (objects.results || []).length });
    }

    // ─── World Logic Connections ───
    if (worldLogicMatch && method === 'POST') {
      const worldId = worldLogicMatch[1];
      const world = await env.DB.prepare('SELECT id FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      if (!body.from_object || !body.to_object || !body.trigger || !body.action) {
        return json({ error: 'from_object, to_object, trigger, and action are required' }, 400);
      }

      // Verify both objects exist
      const fromObj = await env.DB.prepare('SELECT id, name FROM rw_objects WHERE id = ? AND world_id = ?').bind(body.from_object, worldId).first();
      const toObj = await env.DB.prepare('SELECT id, name FROM rw_objects WHERE id = ? AND world_id = ?').bind(body.to_object, worldId).first();
      if (!fromObj) return json({ error: 'from_object not found in this world' }, 404);
      if (!toObj) return json({ error: 'to_object not found in this world' }, 404);

      const validTriggers = ['on_touch', 'on_click', 'on_enter', 'on_exit', 'on_timer', 'on_score', 'on_collect', 'on_destroy'];
      const validActions = ['move', 'show', 'hide', 'animate', 'spawn', 'destroy', 'teleport', 'dialog', 'score', 'sound', 'win', 'lose'];
      const trigger = validTriggers.includes(body.trigger) ? body.trigger : 'on_touch';
      const action = validActions.includes(body.action) ? body.action : 'show';

      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rw_logic (id, world_id, from_object, to_object, trigger_type, action, properties) VALUES (?, ?, ?, ?, ?, ?, ?)')
        .bind(id, worldId, body.from_object, body.to_object, trigger, action, JSON.stringify(body.properties || {})).run();
      await env.DB.prepare("UPDATE roadworld_worlds SET updated_at = datetime('now') WHERE id = ?").bind(worldId).run();

      return json({
        ok: true, id, world_id: worldId,
        from: { id: fromObj.id, name: fromObj.name },
        to: { id: toObj.id, name: toObj.name },
        trigger, action,
        properties: body.properties || {},
        description: `When ${fromObj.name} triggers ${trigger}, ${toObj.name} will ${action}`,
      }, 201);
    }

    if (worldLogicMatch && method === 'GET') {
      const worldId = worldLogicMatch[1];
      const logic = await env.DB.prepare(
        `SELECT l.*, fo.name as from_name, fo.type as from_type, t.name as to_name, t.type as to_type
         FROM rw_logic l
         LEFT JOIN rw_objects fo ON l.from_object = fo.id
         LEFT JOIN rw_objects t ON l.to_object = t.id
         WHERE l.world_id = ? ORDER BY l.created_at ASC`
      ).bind(worldId).all();
      return json({
        world_id: worldId,
        connections: (logic.results || []).map(l => ({
          ...l,
          properties: JSON.parse(l.properties || '{}'),
          description: `When ${l.from_name || l.from_object} triggers ${l.trigger_type}, ${l.to_name || l.to_object} will ${l.action}`,
        })),
        total: (logic.results || []).length,
      });
    }

    // ─── Play Session (start) ───
    if (worldPlayMatch && method === 'POST') {
      const worldId = worldPlayMatch[1];
      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json().catch(() => ({}));
      const sessionId = crypto.randomUUID();
      const player = (body.player || 'anonymous').slice(0, 64);

      await env.DB.prepare('INSERT INTO rw_plays (id, world_id, session_id, player, state) VALUES (?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), worldId, sessionId, player, world.state).run();

      // Increment play count
      await env.DB.prepare('UPDATE roadworld_worlds SET players = players + 1 WHERE id = ?').bind(worldId).run();

      // Also log in legacy plays table
      await env.DB.prepare('INSERT INTO roadworld_plays (id, world_id, player) VALUES (?, ?, ?)')
        .bind(crypto.randomUUID(), worldId, player).run();
      stampChain('play_started', sessionId, worldId).catch(()=>{});
      earnCoin(player, 'play', 0.1).catch(()=>{});

      // Ensure player economy exists
      await ensurePlayerEconomy(env.DB, player);

      const state = JSON.parse(world.state);
      const objects = await env.DB.prepare('SELECT * FROM rw_objects WHERE world_id = ? ORDER BY created_at ASC').bind(worldId).all();
      const logic = await env.DB.prepare('SELECT * FROM rw_logic WHERE world_id = ? ORDER BY created_at ASC').bind(worldId).all();
      const npcs = await env.DB.prepare('SELECT id, name, personality, x, y, sprite, greeting FROM rw_npcs WHERE world_id = ? AND active = 1').bind(worldId).all();
      const activeQuests = await env.DB.prepare('SELECT id, title, description, type, difficulty FROM rw_quests WHERE world_id = ? AND active = 1').bind(worldId).all();
      const environment = getWorldEnvironment(worldId);

      const achUnlocked = await checkAchievements(env.DB, player, { action: 'play' });

      return json({
        session_id: sessionId,
        world_id: worldId,
        name: world.name,
        genre: world.genre,
        state,
        environment,
        objects: (objects.results || []).map(o => ({ ...o, properties: JSON.parse(o.properties || '{}') })),
        logic: (logic.results || []).map(l => ({ ...l, properties: JSON.parse(l.properties || '{}') })),
        npcs: npcs.results || [],
        available_quests: activeQuests.results || [],
        achievements_unlocked: achUnlocked,
        message: `Welcome to ${world.name}! Your session has started.`,
      });
    }

    // ─── Play History ───
    if (worldPlaysMatch && method === 'GET') {
      const worldId = worldPlaysMatch[1];
      const world = await env.DB.prepare('SELECT id, name, players FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const plays = await env.DB.prepare('SELECT id, session_id, player, score, started_at, ended_at FROM rw_plays WHERE world_id = ? ORDER BY started_at DESC LIMIT 50').bind(worldId).all();
      return json({ world_id: worldId, name: world.name, total_plays: world.players || 0, sessions: plays.results || [] });
    }

    // ─── Single world ───
    if (worldMatch && method === 'GET') {
      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldMatch[1]).first();
      if (!world) return json({ error: 'World not found' }, 404);
      world.state = JSON.parse(world.state);

      const assets = await env.DB.prepare(
        'SELECT * FROM roadworld_assets WHERE world_id = ? ORDER BY created_at DESC'
      ).bind(worldMatch[1]).all();

      const objects = await env.DB.prepare('SELECT * FROM rw_objects WHERE world_id = ? ORDER BY created_at ASC').bind(worldMatch[1]).all();
      const logic = await env.DB.prepare('SELECT * FROM rw_logic WHERE world_id = ? ORDER BY created_at ASC').bind(worldMatch[1]).all();
      const recentPlays = await env.DB.prepare(
        'SELECT id, session_id, player, score, started_at FROM rw_plays WHERE world_id = ? ORDER BY started_at DESC LIMIT 10'
      ).bind(worldMatch[1]).all();
      const npcs = await env.DB.prepare('SELECT * FROM rw_npcs WHERE world_id = ?').bind(worldMatch[1]).all();
      const quests = await env.DB.prepare('SELECT * FROM rw_quests WHERE world_id = ? AND active = 1').bind(worldMatch[1]).all();
      const environment = getWorldEnvironment(worldMatch[1]);

      return json({
        world,
        assets: assets.results,
        objects: (objects.results || []).map(o => ({ ...o, properties: JSON.parse(o.properties || '{}') })),
        logic: (logic.results || []).map(l => ({ ...l, properties: JSON.parse(l.properties || '{}') })),
        npcs: (npcs.results || []).map(n => ({ ...n, dialog_tree: JSON.parse(n.dialog_tree || '[]'), behavior: JSON.parse(n.behavior || '{}') })),
        quests: (quests.results || []).map(q => ({ ...q, objectives: JSON.parse(q.objectives || '[]'), rewards: JSON.parse(q.rewards || '{}') })),
        environment,
        recent_plays: recentPlays.results,
      });
    }

    // ─── Save world state (with version tracking) ───
    if (worldMatch && method === 'PUT') {
      const existing = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldMatch[1]).first();
      if (!existing) return json({ error: 'World not found' }, 404);

      const body = await request.json();
      const state = body.state ? JSON.stringify(body.state) : existing.state;
      const newVersion = (existing.version || 1) + 1;

      await env.DB.prepare(
        "UPDATE roadworld_worlds SET name = ?, description = ?, state = ?, version = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(body.name || existing.name, body.description || existing.description, state, newVersion, worldMatch[1]).run();

      // Save version snapshot
      await env.DB.prepare('INSERT INTO rw_versions (id, world_id, version, state, thumbnail) VALUES (?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), worldMatch[1], newVersion, state, body.thumbnail || null).run();

      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldMatch[1]).first();
      world.state = JSON.parse(world.state);
      return json({ world, version: newVersion });
    }

    // ─── Publish world (with AI description) ───
    if (worldPublishMatch && method === 'POST') {
      const world = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldPublishMatch[1]).first();
      if (!world) return json({ error: 'World not found' }, 404);

      // AI generates a compelling description for the published game
      let description = world.description;
      try {
        const template = TEMPLATES.find(t => t.id === world.template_id);
        const agentKey = template ? Object.keys(AGENTS).find(k => AGENTS[k].name === template.agent) : 'thalia';
        const agent = AGENTS[agentKey || 'thalia'];
        const objectCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_objects WHERE world_id = ?').bind(worldPublishMatch[1]).first();
        const logicCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_logic WHERE world_id = ?').bind(worldPublishMatch[1]).first();
        const npcCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_npcs WHERE world_id = ?').bind(worldPublishMatch[1]).first();
        const questCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_quests WHERE world_id = ? AND active = 1').bind(worldPublishMatch[1]).first();

        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${agent.prompt} Write a compelling 2-3 sentence game store description for a published game. Make players want to play it. Return ONLY the description.` },
            { role: 'user', content: `Game: "${world.name}", genre: ${world.genre}, objects: ${objectCount?.c || 0}, logic connections: ${logicCount?.c || 0}, NPCs: ${npcCount?.c || 0}, quests: ${questCount?.c || 0}. Current description: ${world.description || 'none'}` },
          ],
          max_tokens: 150,
        });
        if (aiResult.response) description = aiResult.response.trim();
      } catch (e) { /* keep existing description */ }

      await env.DB.prepare(
        "UPDATE roadworld_worlds SET published = 1, visibility = 'public', description = ?, published_at = datetime('now'), updated_at = datetime('now') WHERE id = ?"
      ).bind(description, worldPublishMatch[1]).run();

      const updated = await env.DB.prepare('SELECT * FROM roadworld_worlds WHERE id = ?').bind(worldPublishMatch[1]).first();
      updated.state = JSON.parse(updated.state);
      stampChain('game_published', worldPublishMatch[1], updated.name.slice(0,100)).catch(()=>{});
      earnCoin(updated.owner || 'creator', 'publish_game', 2.0).catch(()=>{});

      const achUnlocked = await checkAchievements(env.DB, updated.owner || 'blackroad', { action: 'publish_game' });

      return json({ world: updated, message: 'World published and now playable', agent: 'Thalia', achievements_unlocked: achUnlocked });
    }

    // ─── Discover public games (sorted by plays) ───
    if (path === '/api/discover' && method === 'GET') {
      const q = url.searchParams.get('q');
      const genre = url.searchParams.get('genre');
      const sort = url.searchParams.get('sort') || 'popular';
      let query = "SELECT id, name, description, genre, owner, players, rating, ratings_count, version, published_at FROM roadworld_worlds WHERE published = 1";
      const params = [];
      if (q) { query += ' AND (name LIKE ? OR description LIKE ?)'; params.push(`%${q}%`, `%${q}%`); }
      if (genre) { query += ' AND genre = ?'; params.push(genre); }
      if (sort === 'recent') {
        query += ' ORDER BY published_at DESC';
      } else if (sort === 'rated') {
        query += ' ORDER BY rating DESC, ratings_count DESC';
      } else {
        query += ' ORDER BY players DESC, rating DESC';
      }
      query += ' LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ games: result.results, query: q, genre, sort });
    }

    // ─── Leaderboard (top creators by total plays) ───
    if (path === '/api/leaderboard' && method === 'GET') {
      const leaderboard = await env.DB.prepare(
        `SELECT owner, COUNT(*) as worlds_created, SUM(players) as total_plays, AVG(rating) as avg_rating,
         SUM(CASE WHEN published = 1 THEN 1 ELSE 0 END) as published_count
         FROM roadworld_worlds
         GROUP BY owner
         ORDER BY total_plays DESC
         LIMIT 25`
      ).all();
      return json({
        leaderboard: (leaderboard.results || []).map((e, i) => ({
          rank: i + 1,
          creator: e.owner,
          worlds_created: e.worlds_created,
          published: e.published_count,
          total_plays: e.total_plays || 0,
          average_rating: e.avg_rating ? Math.round(e.avg_rating * 10) / 10 : null,
        })),
      });
    }

    // ─── Templates (enhanced with agent assignments and starter objects) ───
    if (path === '/api/templates' && method === 'GET') {
      return json({
        templates: TEMPLATES,
        agents: Object.values(AGENTS).map(a => ({ name: a.name, role: a.role })),
      });
    }

    // ═══════════════════════════════════════════
    // ─── 9. BUILDING SYSTEM ───
    // ═══════════════════════════════════════════

    // Construct building
    if (worldBuildingsMatch && method === 'POST') {
      const worldId = worldBuildingsMatch[1];
      const world = await env.DB.prepare('SELECT id, owner FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json();
      const player = (body.owner || body.player || 'anonymous').slice(0, 64);
      const buildingType = body.type;

      if (!buildingType || !BUILDING_TYPES[buildingType]) {
        return json({ error: 'Invalid building type', available_types: Object.keys(BUILDING_TYPES).map(k => ({ id: k, ...BUILDING_TYPES[k] })) }, 400);
      }

      const template = BUILDING_TYPES[buildingType];

      // Check resources
      for (const [resource, qty] of Object.entries(template.base_cost)) {
        const have = await env.DB.prepare('SELECT SUM(quantity) as total FROM rw_inventory WHERE player = ? AND item_name = ?')
          .bind(player, resource).first();
        if (!have || (have.total || 0) < qty) {
          return json({ error: `Not enough ${resource}. Need ${qty}, have ${have?.total || 0}`, resource_costs: template.base_cost }, 400);
        }
      }

      // Consume resources
      for (const [resource, qty] of Object.entries(template.base_cost)) {
        let remaining = qty;
        const stacks = await env.DB.prepare('SELECT id, quantity FROM rw_inventory WHERE player = ? AND item_name = ? ORDER BY quantity ASC')
          .bind(player, resource).all();
        for (const stack of (stacks.results || [])) {
          if (remaining <= 0) break;
          if (stack.quantity <= remaining) {
            await env.DB.prepare('DELETE FROM rw_inventory WHERE id = ?').bind(stack.id).run();
            remaining -= stack.quantity;
          } else {
            await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity - ?, updated_at = datetime('now') WHERE id = ?")
              .bind(remaining, stack.id).run();
            remaining = 0;
          }
        }
      }

      const id = crypto.randomUUID();
      const buildingName = body.name || template.name;
      await env.DB.prepare('INSERT INTO rw_buildings (id, world_id, owner, type, name, x, y, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, worldId, player, buildingType, buildingName.slice(0, 64), body.x || 0, body.y || 0, JSON.stringify({ bonus: template.bonus })).run();

      stampChain('building_constructed', id, `${buildingType}:${buildingName}`).catch(() => {});
      earnCoin(player, 'build', 0.5).catch(() => {});

      return json({
        ok: true, id, world_id: worldId, owner: player,
        type: buildingType, name: buildingName,
        level: 1, x: body.x || 0, y: body.y || 0,
        bonus: template.bonus,
        resources_consumed: template.base_cost,
        message: `${template.name} constructed!`,
      }, 201);
    }

    // List buildings
    if (worldBuildingsMatch && method === 'GET') {
      const worldId = worldBuildingsMatch[1];
      const owner = url.searchParams.get('owner');
      let query = 'SELECT * FROM rw_buildings WHERE world_id = ?';
      const params = [worldId];
      if (owner) { query += ' AND owner = ?'; params.push(owner); }
      query += ' ORDER BY created_at ASC';
      const buildings = await env.DB.prepare(query).bind(...params).all();
      return json({
        world_id: worldId,
        buildings: (buildings.results || []).map(b => ({ ...b, properties: JSON.parse(b.properties || '{}') })),
        total: (buildings.results || []).length,
        building_types: Object.keys(BUILDING_TYPES).map(k => ({ id: k, ...BUILDING_TYPES[k] })),
      });
    }

    // Get single building
    if (worldBuildingMatch && method === 'GET') {
      const [, worldId, buildingId] = worldBuildingMatch;
      const building = await env.DB.prepare('SELECT * FROM rw_buildings WHERE id = ? AND world_id = ?').bind(buildingId, worldId).first();
      if (!building) return json({ error: 'Building not found' }, 404);
      building.properties = JSON.parse(building.properties || '{}');
      const typeInfo = BUILDING_TYPES[building.type] || {};
      return json({ building, type_info: typeInfo });
    }

    // Upgrade building
    if (worldBuildingUpgradeMatch && method === 'POST') {
      const [, worldId, buildingId] = worldBuildingUpgradeMatch;
      const building = await env.DB.prepare('SELECT * FROM rw_buildings WHERE id = ? AND world_id = ?').bind(buildingId, worldId).first();
      if (!building) return json({ error: 'Building not found' }, 404);

      const template = BUILDING_TYPES[building.type];
      if (!template) return json({ error: 'Unknown building type' }, 400);
      if (building.level >= template.max_level) return json({ error: `Building already at max level (${template.max_level})` }, 400);

      const body = await request.json().catch(() => ({}));
      const player = (body.player || building.owner).slice(0, 64);
      const multiplier = building.level + 1;

      // Check upgraded resource cost (multiplied by level)
      for (const [resource, qty] of Object.entries(template.base_cost)) {
        const needed = qty * multiplier;
        const have = await env.DB.prepare('SELECT SUM(quantity) as total FROM rw_inventory WHERE player = ? AND item_name = ?')
          .bind(player, resource).first();
        if (!have || (have.total || 0) < needed) {
          const upgradeCosts = {};
          for (const [r, q] of Object.entries(template.base_cost)) upgradeCosts[r] = q * multiplier;
          return json({ error: `Not enough ${resource}. Need ${needed}, have ${have?.total || 0}`, upgrade_costs: upgradeCosts }, 400);
        }
      }

      // Consume resources
      for (const [resource, qty] of Object.entries(template.base_cost)) {
        let remaining = qty * multiplier;
        const stacks = await env.DB.prepare('SELECT id, quantity FROM rw_inventory WHERE player = ? AND item_name = ? ORDER BY quantity ASC')
          .bind(player, resource).all();
        for (const stack of (stacks.results || [])) {
          if (remaining <= 0) break;
          if (stack.quantity <= remaining) {
            await env.DB.prepare('DELETE FROM rw_inventory WHERE id = ?').bind(stack.id).run();
            remaining -= stack.quantity;
          } else {
            await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity - ?, updated_at = datetime('now') WHERE id = ?")
              .bind(remaining, stack.id).run();
            remaining = 0;
          }
        }
      }

      const newLevel = building.level + 1;
      const scaledBonus = {};
      for (const [k, v] of Object.entries(template.bonus)) {
        scaledBonus[k] = typeof v === 'number' ? Math.round(v * newLevel * 100) / 100 : v;
      }

      await env.DB.prepare("UPDATE rw_buildings SET level = ?, properties = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(newLevel, JSON.stringify({ bonus: scaledBonus }), buildingId).run();

      stampChain('building_upgraded', buildingId, `${building.type}:L${newLevel}`).catch(() => {});

      return json({
        ok: true, building_id: buildingId,
        type: building.type, name: building.name,
        old_level: building.level, new_level: newLevel,
        bonus: scaledBonus,
        message: `${building.name} upgraded to level ${newLevel}!`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 10. SKILL TREES ───
    // ═══════════════════════════════════════════

    // Get all skill trees
    if (skillsMatch && method === 'GET') {
      const player = url.searchParams.get('player');
      if (player) {
        // Get player's unlocked skills
        const unlocked = await env.DB.prepare('SELECT * FROM rw_player_skills WHERE player = ? ORDER BY unlocked_at ASC').bind(player).all();
        const xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(player).first();
        return json({
          player,
          level: xpRow?.level || 1,
          total_xp: xpRow?.total_xp || 0,
          available_xp: xpRow?.available_xp || 0,
          unlocked_skills: (unlocked.results || []),
          skill_trees: SKILL_TREES,
        });
      }
      return json({ skill_trees: SKILL_TREES });
    }

    // Get player's skill profile
    if (skillsPlayerMatch && method === 'GET') {
      const player = skillsPlayerMatch[1];
      const unlocked = await env.DB.prepare('SELECT * FROM rw_player_skills WHERE player = ? ORDER BY unlocked_at ASC').bind(player).all();
      const xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(player).first();

      // Calculate total bonuses
      const totalBonuses = {};
      for (const skill of (unlocked.results || [])) {
        const tree = SKILL_TREES[skill.tree];
        if (!tree) continue;
        const skillDef = tree.skills.find(s => s.id === skill.skill_id);
        if (!skillDef) continue;
        for (const [k, v] of Object.entries(skillDef.bonus)) {
          totalBonuses[k] = (totalBonuses[k] || 0) + v;
        }
      }

      return json({
        player,
        level: xpRow?.level || 1,
        total_xp: xpRow?.total_xp || 0,
        available_xp: xpRow?.available_xp || 0,
        unlocked_skills: (unlocked.results || []),
        total_bonuses: totalBonuses,
        skill_trees: SKILL_TREES,
      });
    }

    // Unlock skill
    if (skillsUnlockMatch && method === 'POST') {
      const player = skillsUnlockMatch[1];
      const body = await request.json();
      if (!body.tree || !body.skill_id) return json({ error: 'tree and skill_id required' }, 400);

      const tree = SKILL_TREES[body.tree];
      if (!tree) return json({ error: 'Invalid skill tree', available: Object.keys(SKILL_TREES) }, 400);

      const skillDef = tree.skills.find(s => s.id === body.skill_id);
      if (!skillDef) return json({ error: 'Skill not found in tree', available: tree.skills.map(s => s.id) }, 400);

      // Check if already unlocked
      const existing = await env.DB.prepare('SELECT id FROM rw_player_skills WHERE player = ? AND tree = ? AND skill_id = ?')
        .bind(player, body.tree, body.skill_id).first();
      if (existing) return json({ error: 'Skill already unlocked' }, 409);

      // Ensure XP row
      let xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(player).first();
      if (!xpRow) {
        await env.DB.prepare('INSERT INTO rw_player_xp (id, player, total_xp, available_xp, level) VALUES (?, ?, ?, ?, ?)')
          .bind(crypto.randomUUID(), player, 0, 0, 1).run();
        xpRow = { total_xp: 0, available_xp: 0, level: 1 };
      }

      // Check level requirement
      if ((xpRow.level || 1) < skillDef.level_req) {
        return json({ error: `Requires level ${skillDef.level_req}, you are level ${xpRow.level || 1}` }, 400);
      }

      // Check XP cost
      if ((xpRow.available_xp || 0) < skillDef.xp_cost) {
        return json({ error: `Not enough XP. Need ${skillDef.xp_cost}, have ${xpRow.available_xp || 0}` }, 400);
      }

      // Check prerequisites
      for (const prereq of skillDef.prereqs) {
        const hasPrereq = await env.DB.prepare('SELECT id FROM rw_player_skills WHERE player = ? AND tree = ? AND skill_id = ?')
          .bind(player, body.tree, prereq).first();
        if (!hasPrereq) return json({ error: `Prerequisite skill not unlocked: ${prereq}` }, 400);
      }

      // Deduct XP and unlock
      await env.DB.prepare("UPDATE rw_player_xp SET available_xp = available_xp - ?, updated_at = datetime('now') WHERE player = ?")
        .bind(skillDef.xp_cost, player).run();
      await env.DB.prepare('INSERT INTO rw_player_skills (id, player, tree, skill_id, xp_spent) VALUES (?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), player, body.tree, body.skill_id, skillDef.xp_cost).run();

      stampChain('skill_unlocked', body.skill_id, `${player}:${body.tree}`).catch(() => {});

      return json({
        ok: true, player,
        tree: body.tree, skill: skillDef,
        xp_spent: skillDef.xp_cost,
        remaining_xp: (xpRow.available_xp || 0) - skillDef.xp_cost,
        message: `Skill "${skillDef.name}" unlocked!`,
      });
    }

    // Grant XP to player (utility endpoint)
    if (path === '/api/skills/grant-xp' && method === 'POST') {
      const body = await request.json();
      if (!body.player || !body.xp) return json({ error: 'player and xp required' }, 400);
      const xp = Math.max(0, Math.min(body.xp, 10000)); // Cap at 10k per grant

      let xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(body.player).first();
      if (!xpRow) {
        await env.DB.prepare('INSERT INTO rw_player_xp (id, player, total_xp, available_xp, level) VALUES (?, ?, ?, ?, ?)')
          .bind(crypto.randomUUID(), body.player, xp, xp, 1).run();
        xpRow = { total_xp: xp, available_xp: xp, level: 1 };
      } else {
        await env.DB.prepare("UPDATE rw_player_xp SET total_xp = total_xp + ?, available_xp = available_xp + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(xp, xp, body.player).run();
        xpRow = { total_xp: (xpRow.total_xp || 0) + xp, available_xp: (xpRow.available_xp || 0) + xp, level: xpRow.level };
      }

      // Calculate level (100 XP per level, scaling)
      const newTotalXp = (xpRow.total_xp || 0);
      const newLevel = Math.max(1, Math.floor(Math.sqrt(newTotalXp / 50)) + 1);
      if (newLevel !== (xpRow.level || 1)) {
        await env.DB.prepare("UPDATE rw_player_xp SET level = ? WHERE player = ?").bind(newLevel, body.player).run();
      }

      return json({
        ok: true, player: body.player,
        xp_granted: xp,
        total_xp: newTotalXp,
        available_xp: (xpRow.available_xp || 0),
        level: newLevel,
        message: body.reason ? `+${xp} XP: ${body.reason}` : `+${xp} XP granted`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 11. WORLD EVENTS ───
    // ═══════════════════════════════════════════

    // Trigger / create event
    if (worldEventsMatch && method === 'POST') {
      const worldId = worldEventsMatch[1];
      const world = await env.DB.prepare('SELECT id, name FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);
      const body = await request.json().catch(() => ({}));

      let eventType = body.type;
      if (!eventType || !EVENT_TYPES[eventType]) {
        // Random event
        const typeKeys = Object.keys(EVENT_TYPES);
        // Weight by rarity
        const weights = typeKeys.map(k => {
          const r = EVENT_TYPES[k].rarity;
          return r === 'common' ? 4 : r === 'uncommon' ? 3 : r === 'rare' ? 2 : 1;
        });
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        let roll = Math.random() * totalWeight;
        for (let i = 0; i < typeKeys.length; i++) {
          roll -= weights[i];
          if (roll <= 0) { eventType = typeKeys[i]; break; }
        }
        if (!eventType) eventType = typeKeys[0];
      }

      const template = EVENT_TYPES[eventType];
      const id = crypto.randomUUID();
      const now = new Date();
      const endsAt = new Date(now.getTime() + template.duration_minutes * 60 * 1000);

      await env.DB.prepare('INSERT INTO rw_events (id, world_id, type, name, description, effects, rewards, ends_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, worldId, eventType, template.name, body.description || `A ${template.name} has begun!`,
          JSON.stringify(template.effects), JSON.stringify(template.rewards), endsAt.toISOString()).run();

      stampChain('world_event', id, `${eventType}:${worldId}`).catch(() => {});

      return json({
        ok: true, id, world_id: worldId,
        type: eventType, name: template.name,
        effects: template.effects,
        rewards: template.rewards,
        duration_minutes: template.duration_minutes,
        started_at: now.toISOString(),
        ends_at: endsAt.toISOString(),
        message: `${template.name} has begun in ${world.name}!`,
      }, 201);
    }

    // List active events
    if (worldEventsMatch && method === 'GET') {
      const worldId = worldEventsMatch[1];
      const includeExpired = url.searchParams.get('all') === 'true';
      let query = 'SELECT * FROM rw_events WHERE world_id = ?';
      if (!includeExpired) {
        query += " AND ends_at > datetime('now')";
      }
      query += ' ORDER BY created_at DESC LIMIT 50';
      const events = await env.DB.prepare(query).bind(worldId).all();

      return json({
        world_id: worldId,
        events: (events.results || []).map(e => ({
          ...e,
          effects: JSON.parse(e.effects || '{}'),
          rewards: JSON.parse(e.rewards || '{}'),
          participants: JSON.parse(e.participants || '[]'),
          is_active: new Date(e.ends_at) > new Date(),
        })),
        total: (events.results || []).length,
        event_types: Object.keys(EVENT_TYPES).map(k => ({ id: k, ...EVENT_TYPES[k] })),
      });
    }

    // Get single event
    if (worldEventMatch && method === 'GET') {
      const [, worldId, eventId] = worldEventMatch;
      const event = await env.DB.prepare('SELECT * FROM rw_events WHERE id = ? AND world_id = ?').bind(eventId, worldId).first();
      if (!event) return json({ error: 'Event not found' }, 404);
      event.effects = JSON.parse(event.effects || '{}');
      event.rewards = JSON.parse(event.rewards || '{}');
      event.participants = JSON.parse(event.participants || '[]');
      event.is_active = new Date(event.ends_at) > new Date();
      return json({ event });
    }

    // Join event
    if (worldEventJoinMatch && method === 'POST') {
      const [, worldId, eventId] = worldEventJoinMatch;
      const event = await env.DB.prepare('SELECT * FROM rw_events WHERE id = ? AND world_id = ?').bind(eventId, worldId).first();
      if (!event) return json({ error: 'Event not found' }, 404);
      if (new Date(event.ends_at) <= new Date()) return json({ error: 'Event has ended' }, 400);

      const body = await request.json().catch(() => ({}));
      const player = (body.player || 'anonymous').slice(0, 64);
      const participants = JSON.parse(event.participants || '[]');

      if (participants.includes(player)) return json({ error: 'Already participating' }, 409);
      participants.push(player);

      await env.DB.prepare("UPDATE rw_events SET participants = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(JSON.stringify(participants), eventId).run();

      // Grant event rewards
      const rewards = JSON.parse(event.rewards || '{}');
      if (rewards.road_coin) {
        await ensurePlayerEconomy(env.DB, player);
        await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, total_earned = total_earned + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(rewards.road_coin, rewards.road_coin, player).run();
        earnCoin(player, `event_${event.type}`, rewards.road_coin).catch(() => {});
      }
      if (rewards.xp) {
        let xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(player).first();
        if (!xpRow) {
          await env.DB.prepare('INSERT INTO rw_player_xp (id, player, total_xp, available_xp, level) VALUES (?, ?, ?, ?, ?)')
            .bind(crypto.randomUUID(), player, rewards.xp, rewards.xp, 1).run();
        } else {
          await env.DB.prepare("UPDATE rw_player_xp SET total_xp = total_xp + ?, available_xp = available_xp + ?, updated_at = datetime('now') WHERE player = ?")
            .bind(rewards.xp, rewards.xp, player).run();
        }
      }

      return json({
        ok: true, event_id: eventId, player,
        event_name: event.name,
        rewards_earned: rewards,
        participant_count: participants.length,
        message: `Joined ${event.name}!`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 12. PET SYSTEM ───
    // ═══════════════════════════════════════════

    // Adopt pet
    if (petsMatch && method === 'POST') {
      const body = await request.json();
      if (!body.owner || !body.species) return json({ error: 'owner and species required' }, 400);
      const species = PET_SPECIES[body.species];
      if (!species) return json({ error: 'Unknown species', available: Object.keys(PET_SPECIES).filter(k => !PET_SPECIES[k].evolves_to === null || PET_SPECIES[k].evolves_to).map(k => ({ id: k, ...PET_SPECIES[k] })) }, 400);

      // Only allow base species (not evolved forms)
      const baseSpecies = ['wolf', 'hawk', 'turtle', 'cat', 'fox', 'owl'];
      if (!baseSpecies.includes(body.species)) return json({ error: 'Can only adopt base species', available: baseSpecies }, 400);

      // Max 3 pets per player
      const petCount = await env.DB.prepare('SELECT COUNT(*) as c FROM rw_pets WHERE owner = ?').bind(body.owner).first();
      if ((petCount?.c || 0) >= 3) return json({ error: 'Maximum 3 pets allowed' }, 400);

      const id = crypto.randomUUID();
      const petName = (body.name || `${species.name}`).slice(0, 32);

      await env.DB.prepare('INSERT INTO rw_pets (id, owner, species, name, stats) VALUES (?, ?, ?, ?, ?)')
        .bind(id, body.owner.slice(0, 64), body.species, petName, JSON.stringify(species.base_stats)).run();

      stampChain('pet_adopted', id, `${body.species}:${petName}`).catch(() => {});

      return json({
        ok: true, id, owner: body.owner,
        species: body.species, name: petName,
        level: 1, stats: species.base_stats,
        element: species.element,
        evolves_to: species.evolves_to,
        evolve_level: species.evolve_level,
        message: `${petName} the ${species.name} adopted!`,
      }, 201);
    }

    // List pets
    if (petsMatch && method === 'GET') {
      const owner = url.searchParams.get('owner');
      if (!owner) return json({ error: 'owner parameter required', available_species: Object.keys(PET_SPECIES).filter(k => ['wolf','hawk','turtle','cat','fox','owl'].includes(k)).map(k => ({ id: k, ...PET_SPECIES[k] })) }, 400);

      const pets = await env.DB.prepare('SELECT * FROM rw_pets WHERE owner = ? ORDER BY created_at ASC').bind(owner).all();
      return json({
        owner,
        pets: (pets.results || []).map(p => ({
          ...p, stats: JSON.parse(p.stats || '{}'),
          species_info: PET_SPECIES[p.species] || {},
        })),
        total: (pets.results || []).length,
      });
    }

    // Get single pet
    if (petMatch && method === 'GET') {
      const petId = petMatch[1];
      const pet = await env.DB.prepare('SELECT * FROM rw_pets WHERE id = ?').bind(petId).first();
      if (!pet) return json({ error: 'Pet not found' }, 404);
      pet.stats = JSON.parse(pet.stats || '{}');
      const speciesInfo = PET_SPECIES[pet.species] || {};
      return json({ pet, species_info: speciesInfo });
    }

    // Train pet (gain XP)
    if (petTrainMatch && method === 'POST') {
      const petId = petTrainMatch[1];
      const pet = await env.DB.prepare('SELECT * FROM rw_pets WHERE id = ?').bind(petId).first();
      if (!pet) return json({ error: 'Pet not found' }, 404);

      const body = await request.json().catch(() => ({}));
      const xpGain = Math.min(body.xp || 25, 100); // 25 default, 100 max per training
      const newXp = (pet.xp || 0) + xpGain;
      const newLevel = Math.max(1, Math.floor(Math.sqrt(newXp / 20)) + 1);

      // Scale stats with level
      const baseStats = PET_SPECIES[pet.species]?.base_stats || {};
      const scaledStats = {};
      for (const [k, v] of Object.entries(baseStats)) {
        scaledStats[k] = Math.round(v * (1 + (newLevel - 1) * 0.15));
      }

      // Happiness drops slightly with training (needs rest)
      const newHappiness = Math.max(10, (pet.happiness || 100) - 5);

      await env.DB.prepare("UPDATE rw_pets SET xp = ?, level = ?, stats = ?, happiness = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(newXp, newLevel, JSON.stringify(scaledStats), newHappiness, petId).run();

      const leveledUp = newLevel > (pet.level || 1);
      return json({
        ok: true, pet_id: petId, name: pet.name,
        xp_gained: xpGain, total_xp: newXp,
        old_level: pet.level || 1, new_level: newLevel,
        leveled_up: leveledUp,
        stats: scaledStats,
        happiness: newHappiness,
        message: leveledUp ? `${pet.name} leveled up to ${newLevel}!` : `${pet.name} gained ${xpGain} XP`,
      });
    }

    // Evolve pet
    if (petEvolveMatch && method === 'POST') {
      const petId = petEvolveMatch[1];
      const pet = await env.DB.prepare('SELECT * FROM rw_pets WHERE id = ?').bind(petId).first();
      if (!pet) return json({ error: 'Pet not found' }, 404);
      if (pet.evolved) return json({ error: 'Pet has already evolved' }, 400);

      const species = PET_SPECIES[pet.species];
      if (!species || !species.evolves_to) return json({ error: 'This species cannot evolve' }, 400);
      if ((pet.level || 1) < species.evolve_level) {
        return json({ error: `Requires level ${species.evolve_level}, pet is level ${pet.level || 1}` }, 400);
      }

      const evolvedSpecies = PET_SPECIES[species.evolves_to];
      if (!evolvedSpecies) return json({ error: 'Evolution species not found' }, 500);

      // Scale evolved stats
      const scaledStats = {};
      for (const [k, v] of Object.entries(evolvedSpecies.base_stats)) {
        scaledStats[k] = Math.round(v * (1 + ((pet.level || 1) - 1) * 0.15));
      }

      await env.DB.prepare("UPDATE rw_pets SET species = ?, stats = ?, evolved = 1, happiness = 100, updated_at = datetime('now') WHERE id = ?")
        .bind(species.evolves_to, JSON.stringify(scaledStats), petId).run();

      stampChain('pet_evolved', petId, `${pet.species}->${species.evolves_to}`).catch(() => {});

      return json({
        ok: true, pet_id: petId, name: pet.name,
        old_species: pet.species,
        new_species: species.evolves_to,
        new_name: evolvedSpecies.name,
        stats: scaledStats,
        message: `${pet.name} evolved into ${evolvedSpecies.name}!`,
      });
    }

    // Pet battle
    if (petBattleMatch && method === 'POST') {
      const body = await request.json();
      if (!body.pet1_id || !body.pet2_id) return json({ error: 'pet1_id and pet2_id required' }, 400);

      const pet1 = await env.DB.prepare('SELECT * FROM rw_pets WHERE id = ?').bind(body.pet1_id).first();
      const pet2 = await env.DB.prepare('SELECT * FROM rw_pets WHERE id = ?').bind(body.pet2_id).first();
      if (!pet1 || !pet2) return json({ error: 'One or both pets not found' }, 404);
      if (pet1.owner === pet2.owner) return json({ error: 'Cannot battle your own pets' }, 400);

      const stats1 = JSON.parse(pet1.stats || '{}');
      const stats2 = JSON.parse(pet2.stats || '{}');

      // Simple battle: total power = attack + defense + speed + (magic || 0), with randomness
      const power1 = (stats1.attack || 0) + (stats1.defense || 0) + (stats1.speed || 0) + (stats1.magic || 0) + Math.random() * 10;
      const power2 = (stats2.attack || 0) + (stats2.defense || 0) + (stats2.speed || 0) + (stats2.magic || 0) + Math.random() * 10;

      const winner = power1 >= power2 ? pet1 : pet2;
      const loser = power1 >= power2 ? pet2 : pet1;
      const winnerPower = power1 >= power2 ? power1 : power2;
      const loserPower = power1 >= power2 ? power2 : power1;

      // Update battle records
      await env.DB.prepare("UPDATE rw_pets SET battles_won = battles_won + 1, xp = xp + 15, updated_at = datetime('now') WHERE id = ?").bind(winner.id).run();
      await env.DB.prepare("UPDATE rw_pets SET battles_lost = battles_lost + 1, xp = xp + 5, updated_at = datetime('now') WHERE id = ?").bind(loser.id).run();

      // Award RoadCoin to winner's owner
      await ensurePlayerEconomy(env.DB, winner.owner);
      await env.DB.prepare("UPDATE rw_economy SET balance = balance + 0.5, total_earned = total_earned + 0.5, updated_at = datetime('now') WHERE player = ?")
        .bind(winner.owner).run();

      stampChain('pet_battle', winner.id, `${winner.name} vs ${loser.name}`).catch(() => {});

      return json({
        ok: true,
        winner: { id: winner.id, name: winner.name, species: winner.species, owner: winner.owner, power: Math.round(winnerPower) },
        loser: { id: loser.id, name: loser.name, species: loser.species, owner: loser.owner, power: Math.round(loserPower) },
        xp_awarded: { winner: 15, loser: 5 },
        road_coin_awarded: 0.5,
        message: `${winner.name} defeated ${loser.name} in battle!`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 13. MAP SYSTEM ───
    // ═══════════════════════════════════════════

    // Generate / get map
    if (worldMapMatch && method === 'GET') {
      const worldId = worldMapMatch[1];
      const world = await env.DB.prepare('SELECT id, name FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);

      const existingTiles = await env.DB.prepare('SELECT * FROM rw_map_tiles WHERE world_id = ? ORDER BY y ASC, x ASC').bind(worldId).all();

      if ((existingTiles.results || []).length > 0) {
        return json({
          world_id: worldId,
          world_name: world.name,
          tiles: (existingTiles.results || []).map(t => ({
            ...t,
            resources: JSON.parse(t.resources || '[]'),
            discovered_by: JSON.parse(t.discovered_by || '[]'),
            properties: JSON.parse(t.properties || '{}'),
            biome_info: BIOMES[t.biome] || {},
          })),
          total_tiles: (existingTiles.results || []).length,
          biomes: BIOMES,
        });
      }

      // Generate procedural map (16x16 grid)
      const mapSize = 16;
      const biomeKeys = Object.keys(BIOMES);
      const tiles = [];

      // Seed-based generation using world ID hash
      let seed = 0;
      for (let i = 0; i < worldId.length; i++) seed = ((seed << 5) - seed + worldId.charCodeAt(i)) | 0;
      const rng = (n) => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed % n; };

      for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
          const biomeIdx = rng(biomeKeys.length);
          const biome = biomeKeys[biomeIdx];
          const biomeData = BIOMES[biome];
          const elevation = (rng(100) / 100);

          // Select 1-3 resources from biome
          const numResources = 1 + rng(3);
          const tileResources = [];
          for (let r = 0; r < numResources && r < biomeData.resources.length; r++) {
            tileResources.push(biomeData.resources[rng(biomeData.resources.length)]);
          }

          const tileId = crypto.randomUUID();
          tiles.push({ id: tileId, world_id: worldId, x, y, biome, elevation, resources: tileResources });
        }
      }

      // Batch insert tiles
      for (const tile of tiles) {
        await env.DB.prepare('INSERT INTO rw_map_tiles (id, world_id, x, y, biome, elevation, resources) VALUES (?, ?, ?, ?, ?, ?, ?)')
          .bind(tile.id, tile.world_id, tile.x, tile.y, tile.biome, tile.elevation, JSON.stringify(tile.resources)).run();
      }

      return json({
        world_id: worldId,
        world_name: world.name,
        generated: true,
        map_size: `${mapSize}x${mapSize}`,
        tiles: tiles.map(t => ({ ...t, biome_info: BIOMES[t.biome] || {} })),
        total_tiles: tiles.length,
        biomes: BIOMES,
      });
    }

    // Explore tile
    if (worldMapExploreMatch && method === 'POST') {
      const worldId = worldMapExploreMatch[1];
      const body = await request.json();
      if (body.x === undefined || body.y === undefined || !body.player) {
        return json({ error: 'x, y, and player required' }, 400);
      }

      const tile = await env.DB.prepare('SELECT * FROM rw_map_tiles WHERE world_id = ? AND x = ? AND y = ?')
        .bind(worldId, body.x, body.y).first();
      if (!tile) return json({ error: 'Tile not found. Generate map first with GET /api/worlds/:id/map' }, 404);

      const discoveredBy = JSON.parse(tile.discovered_by || '[]');
      const alreadyDiscovered = discoveredBy.includes(body.player);

      if (!alreadyDiscovered) {
        discoveredBy.push(body.player);
        await env.DB.prepare("UPDATE rw_map_tiles SET discovered_by = ? WHERE id = ?")
          .bind(JSON.stringify(discoveredBy), tile.id).run();
      }

      const biomeData = BIOMES[tile.biome] || {};
      const resources = JSON.parse(tile.resources || '[]');

      // Gather resources on exploration
      const gathered = [];
      if (!alreadyDiscovered && resources.length > 0) {
        for (const res of resources) {
          const qty = 1 + Math.floor(Math.random() * 3);
          await env.DB.prepare('INSERT INTO rw_inventory (id, player, world_id, item_name, item_type, quantity, rarity) VALUES (?, ?, ?, ?, ?, ?, ?)')
            .bind(crypto.randomUUID(), body.player, worldId, res, 'material', qty, 'common').run();
          gathered.push({ item: res, quantity: qty });
        }
      }

      // XP for exploration
      if (!alreadyDiscovered) {
        let xpRow = await env.DB.prepare('SELECT * FROM rw_player_xp WHERE player = ?').bind(body.player).first();
        if (!xpRow) {
          await env.DB.prepare('INSERT INTO rw_player_xp (id, player, total_xp, available_xp, level) VALUES (?, ?, ?, ?, ?)')
            .bind(crypto.randomUUID(), body.player, 10, 10, 1).run();
        } else {
          await env.DB.prepare("UPDATE rw_player_xp SET total_xp = total_xp + 10, available_xp = available_xp + 10, updated_at = datetime('now') WHERE player = ?")
            .bind(body.player).run();
        }
      }

      return json({
        ok: true,
        tile: { x: tile.x, y: tile.y, biome: tile.biome, elevation: tile.elevation, biome_info: biomeData },
        new_discovery: !alreadyDiscovered,
        resources_gathered: gathered,
        xp_gained: alreadyDiscovered ? 0 : 10,
        danger_level: biomeData.danger || 0,
        message: alreadyDiscovered
          ? `Revisited ${biomeData.name || tile.biome} at (${tile.x}, ${tile.y})`
          : `Discovered ${biomeData.name || tile.biome} at (${tile.x}, ${tile.y})! Gathered ${gathered.length} resources.`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 14. FACTION SYSTEM ───
    // ═══════════════════════════════════════════

    // Create / list factions
    if (factionsMatch && method === 'POST') {
      const body = await request.json();
      if (!body.faction_type) return json({ error: 'faction_type required', available: Object.keys(FACTION_TEMPLATES).map(k => ({ id: k, ...FACTION_TEMPLATES[k] })) }, 400);

      const template = FACTION_TEMPLATES[body.faction_type];
      if (!template) return json({ error: 'Unknown faction type', available: Object.keys(FACTION_TEMPLATES) }, 400);

      const id = crypto.randomUUID();
      const name = body.name || template.name;
      const leader = (body.leader || 'anonymous').slice(0, 64);

      await env.DB.prepare('INSERT INTO rw_factions (id, world_id, faction_type, name, motto, leader, member_count, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(id, body.world_id || null, body.faction_type, name.slice(0, 64), template.motto, leader, 1, JSON.stringify({ bonus: template.bonus, color: template.color })).run();

      // Auto-join leader
      await env.DB.prepare('INSERT INTO rw_faction_members (id, faction_id, player, rank) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), id, leader, 'leader').run();

      stampChain('faction_created', id, name).catch(() => {});

      return json({
        ok: true, id, faction_type: body.faction_type,
        name, motto: template.motto,
        leader, bonus: template.bonus,
        color: template.color,
        message: `${name} faction founded!`,
      }, 201);
    }

    if (factionsMatch && method === 'GET') {
      const worldId = url.searchParams.get('world_id');
      let query = 'SELECT * FROM rw_factions';
      const params = [];
      if (worldId) { query += ' WHERE world_id = ?'; params.push(worldId); }
      query += ' ORDER BY member_count DESC, reputation DESC LIMIT 50';
      const factions = await env.DB.prepare(query).bind(...params).all();
      return json({
        factions: (factions.results || []).map(f => ({ ...f, properties: JSON.parse(f.properties || '{}') })),
        total: (factions.results || []).length,
        faction_types: Object.keys(FACTION_TEMPLATES).map(k => ({ id: k, ...FACTION_TEMPLATES[k] })),
      });
    }

    // Get faction details
    if (factionMatch && method === 'GET') {
      const factionId = factionMatch[1];
      const faction = await env.DB.prepare('SELECT * FROM rw_factions WHERE id = ?').bind(factionId).first();
      if (!faction) return json({ error: 'Faction not found' }, 404);
      faction.properties = JSON.parse(faction.properties || '{}');

      const members = await env.DB.prepare('SELECT * FROM rw_faction_members WHERE faction_id = ? ORDER BY joined_at ASC').bind(factionId).all();
      const wars = await env.DB.prepare(
        "SELECT * FROM rw_faction_wars WHERE (attacker_faction = ? OR defender_faction = ?) ORDER BY started_at DESC LIMIT 10"
      ).bind(factionId, factionId).all();

      return json({
        faction,
        members: members.results || [],
        wars: wars.results || [],
        template: FACTION_TEMPLATES[faction.faction_type] || {},
      });
    }

    // Join faction
    if (factionJoinMatch && method === 'POST') {
      const factionId = factionJoinMatch[1];
      const faction = await env.DB.prepare('SELECT * FROM rw_factions WHERE id = ?').bind(factionId).first();
      if (!faction) return json({ error: 'Faction not found' }, 404);

      const body = await request.json();
      const player = (body.player || 'anonymous').slice(0, 64);

      // Check not already in this faction
      const existing = await env.DB.prepare('SELECT id FROM rw_faction_members WHERE faction_id = ? AND player = ?').bind(factionId, player).first();
      if (existing) return json({ error: 'Already a member of this faction' }, 409);

      // Check not in another faction (one faction at a time)
      const otherMembership = await env.DB.prepare('SELECT fm.id, f.name FROM rw_faction_members fm JOIN rw_factions f ON fm.faction_id = f.id WHERE fm.player = ?').bind(player).first();
      if (otherMembership) return json({ error: `Already a member of ${otherMembership.name}. Leave first.` }, 400);

      await env.DB.prepare('INSERT INTO rw_faction_members (id, faction_id, player, rank) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), factionId, player, 'member').run();
      await env.DB.prepare("UPDATE rw_factions SET member_count = member_count + 1, updated_at = datetime('now') WHERE id = ?")
        .bind(factionId).run();

      return json({
        ok: true, faction_id: factionId,
        faction_name: faction.name, player,
        rank: 'member',
        message: `${player} joined ${faction.name}!`,
      });
    }

    // Leave faction
    if (factionLeaveMatch && method === 'POST') {
      const factionId = factionLeaveMatch[1];
      const body = await request.json();
      const player = (body.player || 'anonymous').slice(0, 64);

      const membership = await env.DB.prepare('SELECT * FROM rw_faction_members WHERE faction_id = ? AND player = ?').bind(factionId, player).first();
      if (!membership) return json({ error: 'Not a member of this faction' }, 400);
      if (membership.rank === 'leader') return json({ error: 'Leaders cannot leave. Transfer leadership first.' }, 400);

      await env.DB.prepare('DELETE FROM rw_faction_members WHERE id = ?').bind(membership.id).run();
      await env.DB.prepare("UPDATE rw_factions SET member_count = MAX(0, member_count - 1), updated_at = datetime('now') WHERE id = ?")
        .bind(factionId).run();

      return json({ ok: true, faction_id: factionId, player, message: `${player} left the faction` });
    }

    // Faction war
    if (factionWarMatch && method === 'POST') {
      const attackerFactionId = factionWarMatch[1];
      const body = await request.json();
      if (!body.defender_faction_id || !body.world_id) return json({ error: 'defender_faction_id and world_id required' }, 400);

      const attacker = await env.DB.prepare('SELECT * FROM rw_factions WHERE id = ?').bind(attackerFactionId).first();
      const defender = await env.DB.prepare('SELECT * FROM rw_factions WHERE id = ?').bind(body.defender_faction_id).first();
      if (!attacker || !defender) return json({ error: 'One or both factions not found' }, 404);
      if (attackerFactionId === body.defender_faction_id) return json({ error: 'Cannot declare war on yourself' }, 400);

      // Check no existing active war
      const existingWar = await env.DB.prepare(
        "SELECT id FROM rw_faction_wars WHERE ((attacker_faction = ? AND defender_faction = ?) OR (attacker_faction = ? AND defender_faction = ?)) AND status = 'active'"
      ).bind(attackerFactionId, body.defender_faction_id, body.defender_faction_id, attackerFactionId).first();
      if (existingWar) return json({ error: 'War already in progress between these factions' }, 409);

      // Simulate battle (based on member count and faction bonuses)
      const attackerProps = JSON.parse(attacker.properties || '{}');
      const defenderProps = JSON.parse(defender.properties || '{}');
      const attackerPower = (attacker.member_count || 1) * 10 + (attackerProps.bonus?.attack || 0) + Math.random() * 20;
      const defenderPower = (defender.member_count || 1) * 10 + (defenderProps.bonus?.defense || 0) + Math.random() * 20;

      const id = crypto.randomUUID();
      const status = 'completed';
      const attackerScore = Math.round(attackerPower);
      const defenderScore = Math.round(defenderPower);
      const winnerName = attackerScore >= defenderScore ? attacker.name : defender.name;

      await env.DB.prepare('INSERT INTO rw_faction_wars (id, world_id, attacker_faction, defender_faction, status, attacker_score, defender_score, ended_at) VALUES (?, ?, ?, ?, ?, ?, ?, datetime(\'now\'))')
        .bind(id, body.world_id, attackerFactionId, body.defender_faction_id, status, attackerScore, defenderScore).run();

      // Update reputation
      if (attackerScore >= defenderScore) {
        await env.DB.prepare("UPDATE rw_factions SET reputation = reputation + 10, territory_count = territory_count + 1, updated_at = datetime('now') WHERE id = ?").bind(attackerFactionId).run();
        await env.DB.prepare("UPDATE rw_factions SET reputation = reputation - 5, territory_count = MAX(0, territory_count - 1), updated_at = datetime('now') WHERE id = ?").bind(body.defender_faction_id).run();
      } else {
        await env.DB.prepare("UPDATE rw_factions SET reputation = reputation + 5, updated_at = datetime('now') WHERE id = ?").bind(body.defender_faction_id).run();
        await env.DB.prepare("UPDATE rw_factions SET reputation = reputation - 3, updated_at = datetime('now') WHERE id = ?").bind(attackerFactionId).run();
      }

      stampChain('faction_war', id, `${attacker.name} vs ${defender.name}`).catch(() => {});

      return json({
        ok: true, war_id: id,
        attacker: { id: attackerFactionId, name: attacker.name, score: attackerScore },
        defender: { id: body.defender_faction_id, name: defender.name, score: defenderScore },
        winner: winnerName,
        message: `${winnerName} won the battle!`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 15. AUCTION HOUSE ───
    // ═══════════════════════════════════════════

    // Create auction listing
    if (worldAuctionMatch && method === 'POST') {
      const worldId = worldAuctionMatch[1];
      const world = await env.DB.prepare('SELECT id FROM roadworld_worlds WHERE id = ?').bind(worldId).first();
      if (!world) return json({ error: 'World not found' }, 404);

      const body = await request.json();
      if (!body.seller || !body.item_name || !body.starting_price) {
        return json({ error: 'seller, item_name, and starting_price required' }, 400);
      }

      // Check seller has the item
      const sellerItem = await env.DB.prepare('SELECT * FROM rw_inventory WHERE player = ? AND item_name = ? AND quantity >= ?')
        .bind(body.seller, body.item_name, body.quantity || 1).first();
      if (!sellerItem) return json({ error: 'Item not found in seller inventory or insufficient quantity' }, 400);

      // Deduct item from seller inventory
      const deductQty = body.quantity || 1;
      if (sellerItem.quantity === deductQty) {
        await env.DB.prepare('DELETE FROM rw_inventory WHERE id = ?').bind(sellerItem.id).run();
      } else {
        await env.DB.prepare("UPDATE rw_inventory SET quantity = quantity - ?, updated_at = datetime('now') WHERE id = ?")
          .bind(deductQty, sellerItem.id).run();
      }

      const id = crypto.randomUUID();
      const durationHours = Math.min(body.duration_hours || 24, 72); // Max 72 hours
      const expiresAt = new Date(Date.now() + durationHours * 60 * 60 * 1000);

      await env.DB.prepare(
        'INSERT INTO rw_auctions (id, world_id, seller, item_name, item_type, item_rarity, item_properties, quantity, starting_price, buyout_price, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, worldId, body.seller.slice(0, 64), body.item_name.slice(0, 64),
        sellerItem.item_type || 'misc', sellerItem.rarity || 'common',
        sellerItem.properties || '{}', deductQty,
        body.starting_price, body.buyout_price || null,
        expiresAt.toISOString()).run();

      stampChain('auction_created', id, `${body.item_name}:${body.starting_price}`).catch(() => {});

      return json({
        ok: true, id, world_id: worldId,
        seller: body.seller,
        item_name: body.item_name,
        quantity: deductQty,
        starting_price: body.starting_price,
        buyout_price: body.buyout_price || null,
        expires_at: expiresAt.toISOString(),
        duration_hours: durationHours,
        message: `${body.item_name} listed on auction!`,
      }, 201);
    }

    // Browse auctions
    if (worldAuctionMatch && method === 'GET') {
      const worldId = worldAuctionMatch[1];
      // Auto-close expired auctions
      await env.DB.prepare("UPDATE rw_auctions SET status = 'ended' WHERE world_id = ? AND status = 'active' AND expires_at < datetime('now')").bind(worldId).run();
      const search = url.searchParams.get('search');
      const rarity = url.searchParams.get('rarity');
      const sort = url.searchParams.get('sort') || 'newest';

      let query = "SELECT * FROM rw_auctions WHERE world_id = ? AND status = 'active' AND expires_at > datetime('now')";
      const params = [worldId];

      if (search) { query += ' AND item_name LIKE ?'; params.push(`%${search}%`); }
      if (rarity) { query += ' AND item_rarity = ?'; params.push(rarity); }

      if (sort === 'price_asc') query += ' ORDER BY COALESCE(current_bid, starting_price) ASC';
      else if (sort === 'price_desc') query += ' ORDER BY COALESCE(current_bid, starting_price) DESC';
      else if (sort === 'ending') query += ' ORDER BY expires_at ASC';
      else query += ' ORDER BY created_at DESC';

      query += ' LIMIT 50';
      const auctions = await env.DB.prepare(query).bind(...params).all();

      return json({
        world_id: worldId,
        auctions: (auctions.results || []).map(a => ({
          ...a,
          item_properties: JSON.parse(a.item_properties || '{}'),
          time_remaining_minutes: Math.max(0, Math.round((new Date(a.expires_at) - new Date()) / 60000)),
        })),
        total: (auctions.results || []).length,
      });
    }

    // Get single auction
    if (worldAuctionItemMatch && method === 'GET') {
      const [, worldId, auctionId] = worldAuctionItemMatch;
      const auction = await env.DB.prepare('SELECT * FROM rw_auctions WHERE id = ? AND world_id = ?').bind(auctionId, worldId).first();
      if (!auction) return json({ error: 'Auction not found' }, 404);
      auction.item_properties = JSON.parse(auction.item_properties || '{}');

      const bids = await env.DB.prepare('SELECT * FROM rw_auction_bids WHERE auction_id = ? ORDER BY amount DESC LIMIT 20').bind(auctionId).all();
      return json({
        auction,
        bids: bids.results || [],
        time_remaining_minutes: Math.max(0, Math.round((new Date(auction.expires_at) - new Date()) / 60000)),
      });
    }

    // Place bid
    if (worldAuctionBidMatch && method === 'POST') {
      const [, worldId, auctionId] = worldAuctionBidMatch;
      const auction = await env.DB.prepare("SELECT * FROM rw_auctions WHERE id = ? AND world_id = ? AND status = 'active'").bind(auctionId, worldId).first();
      if (!auction) return json({ error: 'Auction not found or not active' }, 404);
      if (new Date(auction.expires_at) <= new Date()) return json({ error: 'Auction has expired' }, 400);

      const body = await request.json();
      if (!body.bidder || !body.amount) return json({ error: 'bidder and amount required' }, 400);
      if (body.bidder === auction.seller) return json({ error: 'Cannot bid on your own auction' }, 400);

      const minBid = Math.max(auction.starting_price, (auction.current_bid || 0) + 0.1);
      if (body.amount < minBid) return json({ error: `Bid must be at least ${minBid} ROAD` }, 400);

      // Check bidder balance
      await ensurePlayerEconomy(env.DB, body.bidder);
      const bidderBal = await env.DB.prepare('SELECT balance FROM rw_economy WHERE player = ?').bind(body.bidder).first();
      if ((bidderBal?.balance || 0) < body.amount) return json({ error: 'Insufficient ROAD balance' }, 400);

      // Refund previous bidder
      if (auction.current_bidder && auction.current_bid > 0) {
        await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(auction.current_bid, auction.current_bidder).run();
      }

      // Deduct from new bidder
      await env.DB.prepare("UPDATE rw_economy SET balance = balance - ?, updated_at = datetime('now') WHERE player = ?")
        .bind(body.amount, body.bidder).run();

      // Update auction
      await env.DB.prepare("UPDATE rw_auctions SET current_bid = ?, current_bidder = ?, bid_count = bid_count + 1 WHERE id = ?")
        .bind(body.amount, body.bidder, auctionId).run();

      // Log bid
      await env.DB.prepare('INSERT INTO rw_auction_bids (id, auction_id, bidder, amount) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), auctionId, body.bidder, body.amount).run();

      return json({
        ok: true, auction_id: auctionId,
        bidder: body.bidder, amount: body.amount,
        item_name: auction.item_name,
        bid_count: (auction.bid_count || 0) + 1,
        message: `Bid of ${body.amount} ROAD placed on ${auction.item_name}!`,
      });
    }

    // Buyout auction
    if (worldAuctionBuyoutMatch && method === 'POST') {
      const [, worldId, auctionId] = worldAuctionBuyoutMatch;
      const auction = await env.DB.prepare("SELECT * FROM rw_auctions WHERE id = ? AND world_id = ? AND status = 'active'").bind(auctionId, worldId).first();
      if (!auction) return json({ error: 'Auction not found or not active' }, 404);
      if (!auction.buyout_price) return json({ error: 'This auction has no buyout price' }, 400);

      const body = await request.json();
      if (!body.buyer) return json({ error: 'buyer required' }, 400);
      if (body.buyer === auction.seller) return json({ error: 'Cannot buy your own auction' }, 400);

      // Check buyer balance
      await ensurePlayerEconomy(env.DB, body.buyer);
      const buyerBal = await env.DB.prepare('SELECT balance FROM rw_economy WHERE player = ?').bind(body.buyer).first();
      if ((buyerBal?.balance || 0) < auction.buyout_price) return json({ error: 'Insufficient ROAD balance' }, 400);

      // Refund previous bidder if any
      if (auction.current_bidder && auction.current_bid > 0) {
        await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, updated_at = datetime('now') WHERE player = ?")
          .bind(auction.current_bid, auction.current_bidder).run();
      }

      // Deduct from buyer, pay seller (5% tax burned as economy sink)
      const tax = Math.round(auction.buyout_price * 0.05 * 100) / 100;
      const sellerPayout = auction.buyout_price - tax;
      await env.DB.prepare("UPDATE rw_economy SET balance = balance - ?, total_spent = total_spent + ?, updated_at = datetime('now') WHERE player = ?")
        .bind(auction.buyout_price, auction.buyout_price, body.buyer).run();
      await ensurePlayerEconomy(env.DB, auction.seller);
      await env.DB.prepare("UPDATE rw_economy SET balance = balance + ?, total_earned = total_earned + ?, updated_at = datetime('now') WHERE player = ?")
        .bind(sellerPayout, sellerPayout, auction.seller).run();

      // Transfer item to buyer
      await env.DB.prepare('INSERT INTO rw_inventory (id, player, world_id, item_name, item_type, quantity, rarity, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(crypto.randomUUID(), body.buyer, worldId, auction.item_name, auction.item_type, auction.quantity, auction.item_rarity, auction.item_properties).run();

      // Close auction
      await env.DB.prepare("UPDATE rw_auctions SET status = 'sold', current_bidder = ?, current_bid = ? WHERE id = ?")
        .bind(body.buyer, auction.buyout_price, auctionId).run();

      stampChain('auction_buyout', auctionId, `${body.buyer}:${auction.item_name}`).catch(() => {});

      return json({
        ok: true, auction_id: auctionId,
        buyer: body.buyer, seller: auction.seller,
        item_name: auction.item_name,
        price: auction.buyout_price,
        message: `${body.buyer} bought ${auction.item_name} for ${auction.buyout_price} ROAD!`,
      });
    }

    // ═══════════════════════════════════════════
    // ─── 16. WORLD RANKINGS ───
    // ═══════════════════════════════════════════

    if (rankingsMatch && method === 'GET') {
      const category = url.searchParams.get('category') || 'all';
      const rankings = {};

      // Top players by XP/Level
      if (category === 'all' || category === 'players') {
        const topPlayers = await env.DB.prepare('SELECT player, total_xp, level FROM rw_player_xp ORDER BY total_xp DESC LIMIT 25').all();
        rankings.top_players = (topPlayers.results || []).map((p, i) => ({ rank: i + 1, ...p }));
      }

      // Most popular worlds
      if (category === 'all' || category === 'worlds') {
        const topWorlds = await env.DB.prepare(
          "SELECT id, name, genre, owner, players, rating, ratings_count FROM roadworld_worlds WHERE published = 1 ORDER BY players DESC LIMIT 25"
        ).all();
        rankings.top_worlds = (topWorlds.results || []).map((w, i) => ({ rank: i + 1, ...w }));
      }

      // Top earners
      if (category === 'all' || category === 'economy') {
        const topEarners = await env.DB.prepare('SELECT player, balance, total_earned, total_spent FROM rw_economy ORDER BY total_earned DESC LIMIT 25').all();
        rankings.top_earners = (topEarners.results || []).map((e, i) => ({ rank: i + 1, ...e }));
      }

      // Achievement completion rates
      if (category === 'all' || category === 'achievements') {
        const achCounts = await env.DB.prepare('SELECT achievement_id, COUNT(*) as unlocked_by FROM rw_achievements GROUP BY achievement_id ORDER BY unlocked_by DESC').all();
        const totalPlayers = await env.DB.prepare('SELECT COUNT(DISTINCT player) as c FROM rw_player_xp').first();
        rankings.achievement_completion = (achCounts.results || []).map(a => {
          const def = ACHIEVEMENTS.find(d => d.id === a.achievement_id) || {};
          return {
            achievement_id: a.achievement_id,
            name: def.name || a.achievement_id,
            category: def.category,
            unlocked_by: a.unlocked_by,
            completion_rate: totalPlayers?.c ? `${Math.round(a.unlocked_by / totalPlayers.c * 100)}%` : '0%',
          };
        });
      }

      // Top pet battlers
      if (category === 'all' || category === 'pets') {
        const topPets = await env.DB.prepare('SELECT id, owner, name, species, level, battles_won, battles_lost FROM rw_pets ORDER BY battles_won DESC LIMIT 25').all();
        rankings.top_pets = (topPets.results || []).map((p, i) => ({
          rank: i + 1, ...p,
          win_rate: (p.battles_won + p.battles_lost) > 0 ? `${Math.round(p.battles_won / (p.battles_won + p.battles_lost) * 100)}%` : 'N/A',
        }));
      }

      // Top factions
      if (category === 'all' || category === 'factions') {
        const topFactions = await env.DB.prepare('SELECT id, name, faction_type, member_count, reputation, territory_count FROM rw_factions ORDER BY reputation DESC LIMIT 25').all();
        rankings.top_factions = (topFactions.results || []).map((f, i) => ({ rank: i + 1, ...f }));
      }

      // Top builders
      if (category === 'all' || category === 'builders') {
        const topBuilders = await env.DB.prepare(
          'SELECT owner, COUNT(*) as building_count, SUM(level) as total_levels FROM rw_buildings GROUP BY owner ORDER BY total_levels DESC LIMIT 25'
        ).all();
        rankings.top_builders = (topBuilders.results || []).map((b, i) => ({ rank: i + 1, ...b }));
      }

      return json({
        category,
        rankings,
        available_categories: ['all', 'players', 'worlds', 'economy', 'achievements', 'pets', 'factions', 'builders'],
        timestamp: new Date().toISOString(),
      });
    }

    // ─── Trending (most played in 7 days) ───
    if (path === '/api/discover/trending' && method === 'GET') {
      const result = await env.DB.prepare(
        "SELECT id, name, description, owner, template, plays, rating_sum, rating_count, created_at FROM rw_worlds WHERE is_published = 1 AND created_at >= datetime('now', '-7 days') ORDER BY plays DESC LIMIT 20"
      ).all();
      let trending = result.results || [];
      if (trending.length < 5) {
        const allTime = await env.DB.prepare(
          "SELECT id, name, description, owner, template, plays, rating_sum, rating_count, created_at FROM rw_worlds WHERE is_published = 1 ORDER BY plays DESC LIMIT 20"
        ).all();
        trending = allTime.results || [];
      }
      return json({ trending: trending.map(w => ({ ...w, avg_rating: w.rating_count > 0 ? Math.round(w.rating_sum / w.rating_count * 10) / 10 : null })) });
    }

    // ─── Rate a world ───
    const rateMatch = path.match(/^\/api\/worlds\/([^/]+)\/rate$/);
    if (rateMatch && method === 'POST') {
      const body = await request.json();
      const score = Math.min(5, Math.max(1, parseInt(body.score) || 3));
      const playerId = body.player_id || 'anonymous';
      const world = await env.DB.prepare('SELECT id FROM rw_worlds WHERE id = ?').bind(rateMatch[1]).first();
      if (!world) return json({ error: 'World not found' }, 404);
      await env.DB.prepare('UPDATE rw_worlds SET rating_sum = COALESCE(rating_sum, 0) + ?, rating_count = COALESCE(rating_count, 0) + 1 WHERE id = ?').bind(score, rateMatch[1]).run();
      return json({ ok: true, world_id: rateMatch[1], score, player: playerId });
    }

    // ─── Invite collaborator ───
    const inviteMatch = path.match(/^\/api\/worlds\/([^/]+)\/invite$/);
    if (inviteMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id) return json({ error: 'user_id required' }, 400);
      const world = await env.DB.prepare('SELECT id, owner FROM rw_worlds WHERE id = ?').bind(inviteMatch[1]).first();
      if (!world) return json({ error: 'World not found' }, 404);
      return json({ ok: true, world_id: inviteMatch[1], invited: body.user_id, role: body.role || 'editor' }, 201);
    }

    // ─── Soft delete world ───
    const deleteWorldMatch = path.match(/^\/api\/worlds\/([^/]+)$/);
    if (deleteWorldMatch && method === 'DELETE') {
      const world = await env.DB.prepare('SELECT id FROM rw_worlds WHERE id = ?').bind(deleteWorldMatch[1]).first();
      if (!world) return json({ error: 'World not found' }, 404);
      await env.DB.prepare("UPDATE rw_worlds SET is_published = 0, name = name || ' [DELETED]' WHERE id = ?").bind(deleteWorldMatch[1]).run();
      return json({ ok: true, deleted: deleteWorldMatch[1] });
    }

    // ─── Remove object from world ───
    const removeObjMatch = path.match(/^\/api\/worlds\/([^/]+)\/objects\/([^/]+)$/);
    if (removeObjMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM rw_objects WHERE id = ? AND world_id = ?').bind(removeObjMatch[2], removeObjMatch[1]).run();
      return json({ ok: true, removed: removeObjMatch[2] });
    }

    // ─── Earnings from games ───
    if (path === '/api/earnings' && method === 'GET') {
      const owner = url.searchParams.get('owner') || 'all';
      let query = "SELECT w.id, w.name, w.plays, w.plays * 0.1 as roadcoin_earned FROM rw_worlds w WHERE w.is_published = 1";
      const params = [];
      if (owner !== 'all') { query += ' AND w.owner = ?'; params.push(owner); }
      query += ' ORDER BY w.plays DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      const total = (result.results || []).reduce((s, w) => s + (w.roadcoin_earned || 0), 0);
      return json({ earnings: result.results || [], total_roadcoin: Math.round(total * 100) / 100 });
    }

    return json({ error: 'Not found', service: 'roadworld' }, 404);
  },
};
