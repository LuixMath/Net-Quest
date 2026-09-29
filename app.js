
(() => {
  "use strict";

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  const view = $("#view");
  const modalRoot = $("#modal-root");
  const toastRoot = $("#toast-root");

  const STORAGE_KEY = "netquest-redes-v1";
  const defaultProgress = () => ({
    blocks: {},
    medals: [],
    totalAttempts: 0,
    totalCorrect: 0,
    questionStats: {},
    xp: 0,
    bestQuick: 0,
    dungeonBestRoom: 1,
    dungeonRuns: 0,
    loot: []
  });

  let progress = loadProgress();
  let currentView = "home";
  let deferredInstallPrompt = null;
  let quiz = null;
  let dungeon = null;
  let cleanupView = null;

  function loadProgress(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? {...defaultProgress(), ...JSON.parse(raw)} : defaultProgress();
    } catch {
      return defaultProgress();
    }
  }
  function saveProgress(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    updateLevelBadge();
  }
  function updateLevelBadge(){
    $("#profile-level").textContent = levelFromXp(progress.xp);
  }
  function levelFromXp(xp){ return Math.floor((xp || 0) / 120) + 1; }
  function clamp(n,min,max){ return Math.max(min,Math.min(max,n)); }
  function shuffle(arr){
    const a=[...arr];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  function sample(arr,n){ return shuffle(arr).slice(0,n); }
  function escapeHtml(s=""){
    return String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
  }
  function icon(name){
    const icons = {
      play:'<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>',
      grid:'<svg viewBox="0 0 24 24"><path d="M4 5h7v7H4Zm9 0h7v7h-7ZM4 14h7v6H4Zm9 0h7v6h-7Z"/></svg>',
      bolt:'<svg viewBox="0 0 24 24"><path d="m13.5 2-8 12h6L10.5 22l8-12h-6Z"/></svg>',
      book:'<svg viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3Zm3 0v16"/></svg>',
      castle:'<svg viewBox="0 0 24 24"><path d="M5 21V8l3-3v3l4-5 4 5V5l3 3v13Zm4-8h6v8H9Z"/></svg>',
      trophy:'<svg viewBox="0 0 24 24"><path d="M8 4h8v4c0 4-1.8 6-4 6s-4-2-4-6Zm4 10v4m-4 2h8M8 6H4v2c0 2 1.5 3 4 3m8-5h4v2c0 2-1.5 3-4 3"/></svg>',
      network:'<svg viewBox="0 0 24 24"><circle cx="6" cy="7" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="m8.3 7.2 7.2-.8M7.4 9l3.4 6.8m5.8-7.5-3.5 7.3"/></svg>',
      arrow:'<svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>',
      spark:'<svg viewBox="0 0 24 24"><path d="m12 2 1.5 5.2L19 9l-5.5 1.8L12 16l-1.5-5.2L5 9l5.5-1.8Zm7 13 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"/></svg>',
      check:'<svg viewBox="0 0 24 24"><path d="m5 12 4 4 10-10"/></svg>',
      heart:'<svg viewBox="0 0 24 24"><path d="M12 21S4 16 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 16 12 21 12 21Z"/></svg>'
    };
    return icons[name] || icons.network;
  }

  function toast(msg){
    const el=document.createElement("div");
    el.className="toast";
    el.textContent=msg;
    toastRoot.appendChild(el);
    setTimeout(()=>el.remove(),2200);
  }

  function setActiveTab(name){
    $$(".tab").forEach(b=>b.classList.toggle("active", b.dataset.nav===name || (name==="quiz" && b.dataset.nav==="blocks")));
  }

  function navigate(name, opts={}){
    if(cleanupView){ cleanupView(); cleanupView=null; }
    currentView=name;
    setActiveTab(name);
    window.scrollTo({top:0, behavior:opts.instant?"auto":"smooth"});
    if(name==="home") renderHome();
    else if(name==="blocks") renderBlocks();
    else if(name==="library") renderLibrary();
    else if(name==="dungeon") renderDungeon();
  }

  function overallAccuracy(){
    return progress.totalAttempts ? Math.round(progress.totalCorrect/progress.totalAttempts*100) : 0;
  }
  function bestBlockScore(){
    const vals=Object.values(progress.blocks||{}).map(x=>x.best||0);
    return vals.length ? Math.max(...vals) : 0;
  }
  function completedBlocks(){
    return Object.values(progress.blocks||{}).filter(x=>(x.attempts||0)>0).length;
  }

  function blockCard(i){
    const rec=progress.blocks[i]||{best:0,attempts:0};
    const pct=(rec.best||0)*10;
    const medal=progress.medals.includes(i);
    const accent=["#ff4c75","#8b6dff","#37b3ff","#36d0b3","#f5a84f","#ef5db7","#70d36d","#7e86ff"][i-1];
    return `
      <article class="game-card block-card" style="--accent:${accent}" data-block="${i}">
        <span class="card-glow"></span>
        <div class="mini-icon">${icon(i%2? "network":"grid")}</div>
        <h3>Bloco ${String(i).padStart(2,"0")}</h3>
        <p>10 questões da lista · ordem aleatória a cada tentativa.</p>
        <div class="progress-line"><i style="width:${pct}%"></i></div>
        <div class="card-foot">
          <span class="badge">${rec.attempts?`Melhor ${pct}%`:"Não iniciado"}</span>
          ${medal?'<span class="medal" title="100% conquistado">🏅</span>':'<span class="badge">10 Q</span>'}
        </div>
      </article>`;
  }

  function renderHome(){
    const acc=overallAccuracy();
    const medals=progress.medals.length;
    const best=bestBlockScore();
    const nextBlock=Math.min(8, [...Array(8)].findIndex((_,i)=>!(progress.blocks[i+1]?.attempts))+1 || 1);
    view.innerHTML=`
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${icon("spark")} Redes de Computadores I</span>
          <h1>Estude como se fosse um jogo.</h1>
          <p>As 80 questões da Lista 1 viraram blocos de 10, com dicas, correção explicada, nota, conquistas e uma dungeon em que conhecimento causa dano.</p>
          <div class="hero-actions">
            <button class="pill-button primary" id="continue-study">${icon("play")} ${completedBlocks() ? `Continuar · Bloco ${nextBlock}` : "Começar agora"}</button>
            <button class="pill-button secondary" id="quick-quiz">${icon("bolt")} Quiz aleatório</button>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit">
            <span class="node n1">${icon("network")}</span>
            <span class="node n2">${icon("book")}</span>
            <span class="node n3">${icon("trophy")}</span>
            <span class="node n4">${icon("bolt")}</span>
          </div>
        </div>
      </section>

      <section class="stats-grid">
        <div class="stat-card"><div class="k">Precisão geral</div><div class="v">${acc}%</div><div class="sub">${progress.totalCorrect}/${progress.totalAttempts || 0} respostas</div></div>
        <div class="stat-card"><div class="k">Medalhas</div><div class="v">${medals}/8</div><div class="sub">100% em um bloco</div></div>
        <div class="stat-card"><div class="k">Melhor nota</div><div class="v">${best.toFixed(1)}</div><div class="sub">de 10,0</div></div>
        <div class="stat-card"><div class="k">Nível</div><div class="v">${levelFromXp(progress.xp)}</div><div class="sub">${progress.xp} XP acumulados</div></div>
      </section>

      <section class="section">
        <div class="section-head"><div><h2>Seus blocos</h2><p>As 80 questões aparecem uma única vez entre os oito blocos.</p></div><button class="text-link" data-nav="blocks">Ver todos</button></div>
        <div class="card-grid">${[1,2,3,4].map(blockCard).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head"><div><h2>Modos de estudo</h2><p>Treino direto ou aprendizado com recompensa.</p></div></div>
        <div class="feature-row">
          <article class="feature-card dungeon-teaser">
            <span class="level-chip">${icon("castle")} Packet Dungeon</span>
            <h3 style="margin-top:18px">Abra caminho respondendo.</h3>
            <p>Explore salas, enfrente criaturas, abra baús e colete relíquias. Acertar perguntas causa dano; errar custa vida.</p>
            <button class="pill-button primary" data-nav="dungeon">${icon("play")} Entrar na dungeon</button>
          </article>
          <article class="feature-card lesson-teaser">
            <span class="level-chip">${icon("book")} Biblioteca</span>
            <h3 style="margin-top:18px">Aulas e glossário.</h3>
            <p>Os oito vídeos indicados ficam reunidos com um glossário rápido dos termos que mais aparecem na lista.</p>
            <button class="pill-button secondary" data-nav="library">Abrir biblioteca</button>
          </article>
        </div>
      </section>`;
    $("#continue-study").onclick=()=>startBlock(nextBlock);
    $("#quick-quiz").onclick=startQuickQuiz;
    $$(".block-card").forEach(c=>c.onclick=()=>startBlock(Number(c.dataset.block)));
    bindNavButtons();
  }

  function renderBlocks(){
    view.innerHTML=`
      <section class="page-head">
        <h1>Blocos de estudo</h1>
        <p>Distribuição fixa e aleatória das 80 questões: nenhuma se repete entre os blocos. Dentro de cada tentativa, a ordem é embaralhada. Faça 10/10 para ganhar a medalha dourada daquele bloco.</p>
      </section>
      <div class="block-list">
        ${[1,2,3,4,5,6,7,8].map(i=>{
          const rec=progress.blocks[i]||{best:0,attempts:0};
          const medal=progress.medals.includes(i);
          return `<article class="block-row">
            <div class="block-index">${String(i).padStart(2,"0")}</div>
            <div class="block-meta">
              <h3>Bloco ${i} ${medal?'· 🏅':''}</h3>
              <p>${rec.attempts?`${rec.attempts} tentativa${rec.attempts>1?"s":""} · melhor ${Math.round(rec.best*10)}% · nota ${rec.best.toFixed(1)}`:"10 questões · ainda não iniciado"}</p>
              <div class="progress-line"><i style="width:${(rec.best||0)*10}%"></i></div>
            </div>
            <div class="block-actions"><button class="pill-button compact primary" data-start-block="${i}">${icon("play")}<span>Jogar</span></button></div>
          </article>`;
        }).join("")}
      </div>
      <div class="source-note"><strong>Sobre o gabarito:</strong> a lista enviada contém as perguntas, mas não traz um gabarito oficial. As respostas, dicas e explicações deste app são material de estudo elaborado a partir dos conceitos de Redes de Computadores e do glossário fornecido; vale conferir com o material do professor caso ele publique um gabarito próprio.</div>`;
    $$("[data-start-block]").forEach(b=>b.onclick=()=>startBlock(Number(b.dataset.startBlock)));
  }

  function startBlock(index){
    const ids=window.STUDY_BLOCKS[index-1];
    startQuiz({type:"block", index, title:`Bloco ${index}`, ids:shuffle(ids)});
  }
  function startQuickQuiz(){
    startQuiz({type:"quick", title:"Quiz aleatório", ids:sample(window.QUESTIONS.map(q=>q.id),10)});
  }
  function startQuiz(config){
    if(cleanupView){ cleanupView(); cleanupView=null; }
    quiz={
      ...config, pos:0, score:0, selected:new Set(), confirmed:false, hint:false,
      answers:[]
    };
    currentView="quiz";
    setActiveTab("quiz");
    window.scrollTo({top:0,behavior:"smooth"});
    renderQuiz();
  }
  function currentQuestion(){
    return window.QUESTIONS.find(q=>q.id===quiz.ids[quiz.pos]);
  }
  function sameSet(a,b){
    return a.length===b.length && [...a].sort().every((x,i)=>x===[...b].sort()[i]);
  }
  function renderQuiz(){
    const q=currentQuestion();
    const isMulti=q.required>1;
    const percent=Math.round((quiz.pos/quiz.ids.length)*100);
    const selected=quiz.selected;
    const answerText=q.answers.map(k=>`${k.toUpperCase()}) ${q.options.find(o=>o.key===k).text}`).join(" · ");
    view.innerHTML=`
      <section class="page-head">
        <button class="pill-button compact ghost back" id="leave-quiz">← Sair</button>
        <h1>${escapeHtml(quiz.title)}</h1>
        <p>${quiz.type==="block"?"Vale medalha se você fechar 10/10.":"Treino livre com 10 questões sorteadas de toda a lista."}</p>
      </section>
      <div class="quiz-shell">
        <article class="quiz-card">
          <div class="quiz-top">
            <span class="quiz-label">Questão ${quiz.pos+1} de ${quiz.ids.length}</span>
            <span class="badge">${escapeHtml(q.category)} · original #${q.id}</span>
          </div>
          <div class="quiz-progress"><span style="width:${percent}%"></span></div>
          <div class="question-number">Lista 1 · questão ${q.id}</div>
          <h2 class="question-title">${escapeHtml(q.question)}</h2>
          ${isMulti?`<div class="multi-note">Selecione exatamente ${q.required} alternativas</div>`:""}
          <div class="option-list">
            ${q.options.map(o=>{
              const sel=selected.has(o.key);
              let cls=sel?" selected":"";
              let status="";
              if(quiz.confirmed){
                cls+=" locked";
                if(q.answers.includes(o.key)){ cls+=" correct"; status="✓"; }
                else if(sel){ cls+=" wrong"; status="×"; }
              }
              return `<button class="option${cls}" data-option="${o.key}" ${quiz.confirmed?"disabled":""}>
                <span class="letter">${o.key}</span>
                <span>${escapeHtml(o.text)}</span>
                <span class="status-mark">${status}</span>
              </button>`;
            }).join("")}
          </div>
          ${quiz.hint && !quiz.confirmed?`<div class="hint-box"><strong>Dica:</strong> ${escapeHtml(q.hint)}</div>`:""}
          ${quiz.confirmed?`<div class="explanation ${quiz.answers.at(-1)?.correct?"ok":"bad"}">
            <h4>${quiz.answers.at(-1)?.correct?"Resposta correta ✓":"Correção"}</h4>
            <p><strong>${escapeHtml(answerText)}</strong><br>${escapeHtml(q.explanation)}</p>
          </div>`:""}
          <div class="quiz-actions">
            <button class="pill-button secondary" id="hint-btn" ${quiz.confirmed?"disabled":""}>💡 ${quiz.hint?"Dica aberta":"Dica"}</button>
            ${quiz.confirmed
              ? `<button class="pill-button primary" id="next-question">${quiz.pos===quiz.ids.length-1?"Ver resultado":"Próxima"} →</button>`
              : `<button class="pill-button primary" id="confirm-answer" ${selected.size!==q.required?"disabled":""}>Confirmar resposta</button>`}
          </div>
        </article>
        <aside class="quiz-side">
          <div class="side-card"><h4>Acertos</h4><strong>${quiz.score}</strong><p>nesta tentativa</p></div>
          <div class="side-card"><h4>Nota parcial</h4><strong>${((quiz.score/Math.max(1,quiz.pos+(quiz.confirmed?1:0)))*10).toFixed(1)}</strong><p>de 10,0</p></div>
          <div class="side-card"><h4>XP</h4><strong>${progress.xp}</strong><p>acumulado</p></div>
        </aside>
      </div>`;
    $("#leave-quiz").onclick=()=>navigate("blocks");
    $$(".option").forEach(btn=>btn.onclick=()=>toggleOption(btn.dataset.option));
    $("#hint-btn").onclick=()=>{quiz.hint=true;renderQuiz();};
    const confirm=$("#confirm-answer");
    if(confirm) confirm.onclick=confirmAnswer;
    const next=$("#next-question");
    if(next) next.onclick=nextQuestion;
  }
  function toggleOption(key){
    if(quiz.confirmed) return;
    const q=currentQuestion();
    if(q.required===1){
      quiz.selected.clear(); quiz.selected.add(key);
    } else if(quiz.selected.has(key)){
      quiz.selected.delete(key);
    } else if(quiz.selected.size<q.required){
      quiz.selected.add(key);
    } else {
      toast(`Selecione apenas ${q.required} alternativas.`);
    }
    renderQuiz();
  }
  function confirmAnswer(){
    const q=currentQuestion();
    if(quiz.selected.size!==q.required) return;
    const picked=[...quiz.selected];
    const correct=sameSet(picked,q.answers);
    quiz.confirmed=true;
    if(correct) quiz.score++;
    quiz.answers.push({id:q.id,picked,correct});
    progress.totalAttempts++;
    if(correct) progress.totalCorrect++;
    const stat=progress.questionStats[q.id]||{tries:0,correct:0};
    stat.tries++; if(correct) stat.correct++;
    progress.questionStats[q.id]=stat;
    progress.xp += correct ? 8 : 2;
    saveProgress();
    renderQuiz();
  }
  function nextQuestion(){
    if(quiz.pos===quiz.ids.length-1){ finishQuiz(); return; }
    quiz.pos++;
    quiz.selected=new Set();
    quiz.confirmed=false;
    quiz.hint=false;
    renderQuiz();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function finishQuiz(){
    const score=quiz.score;
    const pct=score*10;
    let newMedal=false;
    if(quiz.type==="block"){
      const i=quiz.index;
      const rec=progress.blocks[i]||{best:0,attempts:0};
      rec.attempts++;
      rec.best=Math.max(rec.best||0,score);
      rec.last=score;
      progress.blocks[i]=rec;
      if(score===10 && !progress.medals.includes(i)){
        progress.medals.push(i); newMedal=true; progress.xp+=80;
      }
    } else {
      progress.bestQuick=Math.max(progress.bestQuick||0,score);
    }
    saveProgress();
    const weak=quiz.answers.filter(a=>!a.correct).map(a=>a.id);
    view.innerHTML=`
      <section class="result-card">
        <div class="result-ring" style="--score:${pct}%"><span>${pct}%</span></div>
        <h2>${score===10?"Perfeito.":score>=8?"Ótimo resultado.":score>=6?"Bom avanço.":"Hora de reforçar."}</h2>
        <p>Você acertou <strong>${score} de 10</strong> e ficou com nota <strong>${score.toFixed(1)}</strong>.</p>
        ${score===10 && quiz.type==="block"?`<div class="reward"><div class="big-medal">🏅</div><strong>${newMedal?"Nova conquista desbloqueada!":"Medalha preservada!"}</strong><p>Bloco ${quiz.index} concluído com 100%.</p></div>`:""}
        ${weak.length?`<p>Questões para revisar: <strong>${weak.join(", ")}</strong>.</p>`:`<p>Nenhuma questão errada nesta rodada.</p>`}
        <div class="hero-actions" style="justify-content:center;margin-top:24px">
          <button class="pill-button primary" id="retry-quiz">${icon("play")} Tentar novamente</button>
          <button class="pill-button secondary" id="back-blocks">Voltar aos blocos</button>
        </div>
      </section>`;
    $("#retry-quiz").onclick=()=> quiz.type==="block" ? startBlock(quiz.index) : startQuickQuiz();
    $("#back-blocks").onclick=()=>navigate("blocks");
  }

  function renderLibrary(){
    view.innerHTML=`
      <section class="page-head">
        <h1>Biblioteca</h1>
        <p>Aulas indicadas para o Capítulo 1 e um glossário rápido para revisar os conceitos que aparecem com frequência na lista.</p>
      </section>
      <div class="library-grid">
        <section class="library-panel">
          <div class="library-panel-head"><h2>Aulas em vídeo</h2><p>Abra no YouTube e volte ao app quando terminar.</p></div>
          <div class="lesson-list">
            ${window.VIDEOS.map(v=>`<a class="lesson" href="${v.url}" target="_blank" rel="noopener">
              <span class="lesson-id">${escapeHtml(v.id)}</span>
              <span><strong>${escapeHtml(v.title)}</strong><small>${v.featured?"Recomendado: camadas e encapsulamento":"Material indicado"}</small></span>
              ${icon("arrow")}
            </a>`).join("")}
          </div>
        </section>
        <section class="library-panel">
          <div class="library-panel-head"><h2>Glossário rápido</h2><p>Termos centrais para a prova.</p><input id="gloss-search" class="gloss-search" type="search" placeholder="Buscar termo..." autocomplete="off"></div>
          <dl class="gloss-list" id="gloss-list">${glossaryMarkup(window.GLOSSARY)}</dl>
        </section>
      </div>
      <div class="source-note"><strong>Fontes deste app:</strong> Lista de Exercícios 1 — DCO3002 / Redes de Computadores I / 2026.2, glossário enviado e os vídeos indicados nesta página. As explicações do quiz foram redigidas como material de estudo; não são apresentadas como gabarito oficial da disciplina.</div>`;
    $("#gloss-search").oninput=(e)=>{
      const s=e.target.value.trim().toLowerCase();
      const filtered=window.GLOSSARY.filter(g=>(g.term+" "+g.def).toLowerCase().includes(s));
      $("#gloss-list").innerHTML=filtered.length?glossaryMarkup(filtered):'<div class="empty">Nenhum termo encontrado.</div>';
    };
  }
  function glossaryMarkup(items){
    return items.map(g=>`<div class="gloss-item"><dt>${escapeHtml(g.term)}</dt><dd>${escapeHtml(g.def)}</dd></div>`).join("");
  }

  /* Dungeon */
  function makeDungeon(room=1){
    const isBoss=room%5===0;
    const monsters=isBoss
      ? [{id:"boss",x:70,y:42,hp:4,maxHp:4,type:"wisp"}]
      : [
          {id:"m1",x:64,y:34,hp:2,maxHp:2,type:room%2?"slime":"wisp"},
          {id:"m2",x:72,y:68,hp:2,maxHp:2,type:room%2?"wisp":"slime"}
        ];
    return {
      room, hp:4, maxHp:4, gems:0, player:{x:16,y:70}, monsters,
      chest:{x:48,y:25,opened:false}, exit:{x:91,y:50},
      busy:false, nearby:null, recent:[], won:false
    };
  }
  function renderDungeon(){
    dungeon=makeDungeon(progress.dungeonBestRoom||1);
    renderDungeonView();
  }
  function renderDungeonView(){
    if(cleanupView){ cleanupView(); cleanupView=null; }
    view.innerHTML=`
      <section class="page-head">
        <h1>Packet Dungeon</h1>
        <p>Use WASD/setas no PC ou o direcional na tela. Aproxime-se de inimigos, baús e do portal; então use <strong>Ação</strong> (Espaço/Enter no PC).</p>
      </section>
      <div class="dungeon-wrap">
        <div class="dungeon-hud">
          <div class="hud-chip">Sala<strong id="d-room">${dungeon.room}</strong></div>
          <div class="hud-chip">Vida<strong id="d-hp">${"♥".repeat(dungeon.hp)}${"♡".repeat(dungeon.maxHp-dungeon.hp)}</strong></div>
          <div class="hud-chip">Fragmentos<strong id="d-gems">${dungeon.gems}</strong></div>
          <div class="hud-chip">Melhor sala<strong>${progress.dungeonBestRoom||1}</strong></div>
        </div>
        <div class="dungeon-stage" id="dungeon-stage">
          <div class="dungeon-tip" id="dungeon-tip">Explore a sala e aproxime-se de um alvo.</div>
          <img class="sprite player" id="player-sprite" src="./assets/player.svg" alt="Explorador">
          ${dungeon.monsters.map(m=>`
            <img class="sprite enemy" id="enemy-${m.id}" src="./assets/${m.type}.svg" alt="Monstro">
            <span class="enemy-hp" id="hp-${m.id}"><i></i></span>`).join("")}
          <img class="sprite chest" id="chest-sprite" src="./assets/chest.svg" alt="Baú">
          <img class="sprite exit-gate" id="exit-sprite" src="./assets/gate.svg" alt="Portal">
          <div class="touch-controls" aria-label="Direcional">
            <button class="dpad-btn dpad-up" data-dir="up" aria-label="Cima">▲</button>
            <button class="dpad-btn dpad-down" data-dir="down" aria-label="Baixo">▼</button>
            <button class="dpad-btn dpad-left" data-dir="left" aria-label="Esquerda">◀</button>
            <button class="dpad-btn dpad-right" data-dir="right" aria-label="Direita">▶</button>
          </div>
          <button class="action-button" id="action-button">Ação</button>
        </div>
        <div class="dungeon-legend"><span class="desktop-only">PC: WASD/setas para mover · Espaço/Enter para interagir. </span>Derrote os inimigos e abra o baú para ativar o portal. O progresso de sala e os itens coletados ficam salvos neste navegador.</div>
      </div>`;
    positionDungeonSprites();
    setupDungeonControls();
    updateDungeonHud();
  }
  function positionDungeonSprites(){
    const p=$("#player-sprite"); if(!p) return;
    p.style.left=dungeon.player.x+"%"; p.style.top=dungeon.player.y+"%";
    dungeon.monsters.forEach(m=>{
      const el=$("#enemy-"+m.id), hp=$("#hp-"+m.id);
      if(el){
        el.style.left=m.x+"%"; el.style.top=m.y+"%";
        el.classList.toggle("dead",m.hp<=0);
      }
      if(hp){
        hp.style.left=m.x+"%"; hp.style.top=(m.y-8)+"%";
        hp.style.display=m.hp>0?"block":"none";
        $("i",hp).style.width=(m.hp/m.maxHp*100)+"%";
      }
    });
    const c=$("#chest-sprite"); c.style.left=dungeon.chest.x+"%"; c.style.top=dungeon.chest.y+"%"; c.classList.toggle("opened",dungeon.chest.opened);
    const g=$("#exit-sprite"); g.style.left=dungeon.exit.x+"%"; g.style.top=dungeon.exit.y+"%"; g.classList.toggle("ready",dungeonReady());
  }
  function dungeonReady(){
    return dungeon.monsters.every(m=>m.hp<=0) && dungeon.chest.opened;
  }
  function dist(a,b){ return Math.hypot(a.x-b.x,a.y-b.y); }
  function detectNearby(){
    const alive=dungeon.monsters.filter(m=>m.hp>0).sort((a,b)=>dist(dungeon.player,a)-dist(dungeon.player,b));
    if(alive[0] && dist(dungeon.player,alive[0])<14) return {kind:"enemy",id:alive[0].id};
    if(!dungeon.chest.opened && dist(dungeon.player,dungeon.chest)<13) return {kind:"chest"};
    if(dungeonReady() && dist(dungeon.player,dungeon.exit)<14) return {kind:"exit"};
    return null;
  }
  function updateDungeonHud(){
    const hp=$("#d-hp"), gems=$("#d-gems");
    if(hp) hp.textContent="♥".repeat(dungeon.hp)+"♡".repeat(dungeon.maxHp-dungeon.hp);
    if(gems) gems.textContent=dungeon.gems;
    positionDungeonSprites();
    dungeon.nearby=detectNearby();
    const tip=$("#dungeon-tip");
    if(tip){
      tip.textContent=dungeon.nearby?.kind==="enemy"?"Inimigo próximo · use Ação":
        dungeon.nearby?.kind==="chest"?"Baú próximo · use Ação":
        dungeon.nearby?.kind==="exit"?"Portal ativo · use Ação":"Explore a sala e aproxime-se de um alvo.";
    }
  }
  function setupDungeonControls(){
    const pressed=new Set();
    let raf=0,last=0;
    const keydown=(e)=>{
      const k=e.key.toLowerCase();
      if(["arrowup","arrowdown","arrowleft","arrowright","w","a","s","d"].includes(k)){ e.preventDefault(); pressed.add(k); }
      if((k===" "||k==="enter") && !dungeon.busy){ e.preventDefault(); dungeonAction(); }
    };
    const keyup=(e)=>pressed.delete(e.key.toLowerCase());
    window.addEventListener("keydown",keydown);
    window.addEventListener("keyup",keyup);
    function loop(t){
      if(t-last>18 && !dungeon.busy){
        let dx=0,dy=0;
        if(pressed.has("a")||pressed.has("arrowleft"))dx-=1;
        if(pressed.has("d")||pressed.has("arrowright"))dx+=1;
        if(pressed.has("w")||pressed.has("arrowup"))dy-=1;
        if(pressed.has("s")||pressed.has("arrowdown"))dy+=1;
        if(dx||dy) moveDungeon(dx,dy);
        last=t;
      }
      raf=requestAnimationFrame(loop);
    }
    raf=requestAnimationFrame(loop);

    $$(".dpad-btn").forEach(btn=>{
      let timer;
      const dir=btn.dataset.dir;
      const delta={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[dir];
      const start=(e)=>{e.preventDefault();moveDungeon(...delta);timer=setInterval(()=>moveDungeon(...delta),70);};
      const stop=()=>clearInterval(timer);
      btn.addEventListener("pointerdown",start);btn.addEventListener("pointerup",stop);btn.addEventListener("pointercancel",stop);btn.addEventListener("pointerleave",stop);
    });
    $("#action-button").onclick=dungeonAction;
    cleanupView=()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown",keydown);
      window.removeEventListener("keyup",keyup);
    };
  }
  function moveDungeon(dx,dy){
    if(dungeon.busy) return;
    const speed=1.35;
    const len=Math.hypot(dx,dy)||1;
    dungeon.player.x=clamp(dungeon.player.x+dx/len*speed,7,94);
    dungeon.player.y=clamp(dungeon.player.y+dy/len*speed,13,90);
    updateDungeonHud();
  }
  function dungeonAction(){
    if(dungeon.busy) return;
    dungeon.nearby=detectNearby();
    if(!dungeon.nearby){ toast("Chegue mais perto de um inimigo, baú ou portal."); return; }
    if(dungeon.nearby.kind==="exit"){ nextDungeonRoom(); return; }
    openDungeonQuestion(dungeon.nearby);
  }
  function dungeonQuestion(){
    let pool=window.QUESTIONS.filter(q=>!dungeon.recent.includes(q.id));
    if(!pool.length){dungeon.recent=[];pool=window.QUESTIONS;}
    const q=pool[Math.floor(Math.random()*pool.length)];
    dungeon.recent.push(q.id); if(dungeon.recent.length>12)dungeon.recent.shift();
    return q;
  }
  function openDungeonQuestion(target){
    dungeon.busy=true;
    const q=dungeonQuestion();
    let selected=new Set(), confirmed=false;
    const targetName=target.kind==="enemy"?"Ataque de conhecimento":"Trava do baú";
    const redraw=()=>{
      modalRoot.innerHTML=`
        <div class="quest-modal">
          <div class="modal-card">
            <div class="modal-sub">${targetName} · questão original #${q.id}</div>
            <h2>${escapeHtml(q.question)}</h2>
            ${q.required>1?`<div class="multi-note">Escolha ${q.required}</div>`:""}
            <div class="option-list">
              ${q.options.map(o=>{
                let cls=selected.has(o.key)?" selected":"";
                let mark="";
                if(confirmed){
                  if(q.answers.includes(o.key)){cls+=" correct locked";mark="✓";}
                  else if(selected.has(o.key)){cls+=" wrong locked";mark="×";}
                }
                return `<button class="option${cls}" data-d-option="${o.key}" ${confirmed?"disabled":""}><span class="letter">${o.key}</span><span>${escapeHtml(o.text)}</span><span class="status-mark">${mark}</span></button>`;
              }).join("")}
            </div>
            <div id="d-answer-feedback"></div>
            <div class="quiz-actions">
              ${!confirmed?'<button class="pill-button secondary" id="d-hint">💡 Dica</button>':"<span></span>"}
              ${confirmed?'<button class="pill-button primary" id="d-continue">Continuar</button>':`<button class="pill-button primary" id="d-confirm" ${selected.size!==q.required?"disabled":""}>Confirmar</button>`}
            </div>
          </div>
        </div>`;
      $$("[data-d-option]").forEach(b=>b.onclick=()=>{
        const k=b.dataset.dOption;
        if(q.required===1){selected.clear();selected.add(k);}
        else if(selected.has(k))selected.delete(k);
        else if(selected.size<q.required)selected.add(k);
        else toast(`Selecione apenas ${q.required}.`);
        redraw();
      });
      const hint=$("#d-hint");
      if(hint) hint.onclick=()=>toast(q.hint);
      const cf=$("#d-confirm");
      if(cf) cf.onclick=()=>{
        confirmed=true;
        const correct=sameSet([...selected],q.answers);
        progress.totalAttempts++; if(correct)progress.totalCorrect++;
        progress.xp+=correct?10:2;
        const stat=progress.questionStats[q.id]||{tries:0,correct:0};stat.tries++;if(correct)stat.correct++;progress.questionStats[q.id]=stat;
        saveProgress();
        redraw();
        const f=$("#d-answer-feedback");
        if(f) f.innerHTML=`<div class="explanation ${correct?"ok":"bad"}"><h4>${correct?"Acertou!":"Errou."}</h4><p>${escapeHtml(q.explanation)}</p></div>`;
        $("#d-continue").onclick=()=>{
          modalRoot.innerHTML="";
          applyDungeonAnswer(target,correct);
          dungeon.busy=false;
          updateDungeonHud();
        };
      };
      const cont=$("#d-continue");
      if(cont) cont.onclick=()=>{};
    };
    redraw();
  }
  function applyDungeonAnswer(target,correct){
    if(target.kind==="enemy"){
      const m=dungeon.monsters.find(x=>x.id===target.id);
      if(!m || m.hp<=0)return;
      if(correct){
        m.hp--;
        dungeon.gems+=1;
        const el=$("#enemy-"+m.id); if(el){el.classList.add("hit");setTimeout(()=>el.classList.remove("hit"),300);}
        if(m.hp<=0){ progress.xp+=20; dungeon.gems+=2; saveProgress(); toast("Inimigo derrotado · +20 XP"); }
      } else {
        dungeon.hp--;
        toast("O monstro contra-atacou.");
      }
    } else if(target.kind==="chest"){
      if(correct){
        dungeon.chest.opened=true;
        dungeon.gems+=3;
        const loot=["Runa TCP","Amuleto Ethernet","Fragmento de Fibra","Selo IP","Poção QoS","Chave de Roteamento"];
        const item=loot[Math.floor(Math.random()*loot.length)];
        if(!progress.loot.includes(item)) progress.loot.push(item);
        progress.xp+=25; saveProgress();
        toast(`Baú aberto: ${item}`);
      } else {
        dungeon.hp--; toast("A trava reagiu · você perdeu 1 vida.");
      }
    }
    if(dungeon.hp<=0){
      progress.dungeonRuns++; saveProgress();
      showDungeonDefeat(); return;
    }
    if(dungeonReady()) toast("Portal ativado!");
  }
  function nextDungeonRoom(){
    if(dungeon.room>=5){
      progress.dungeonBestRoom=Math.max(progress.dungeonBestRoom||1,5);
      saveProgress();
      showDungeonVictory(); return;
    }
    const next=dungeon.room+1;
    progress.dungeonBestRoom=Math.max(progress.dungeonBestRoom||1,next);
    progress.xp+=15;
    saveProgress();
    dungeon=makeDungeon(next);
    dungeon.gems=0;
    renderDungeonView();
  }
  function showDungeonDefeat(){
    dungeon.busy=true;
    modalRoot.innerHTML=`<div class="quest-modal"><div class="modal-card" style="text-align:center"><div style="font-size:54px">💀</div><h2>Fim da expedição</h2><p class="modal-sub">Você chegou à sala ${dungeon.room}. O XP e os itens já coletados foram preservados.</p><button class="pill-button primary" id="restart-dungeon">Tentar de novo</button></div></div>`;
    $("#restart-dungeon").onclick=()=>{modalRoot.innerHTML=""; dungeon=makeDungeon(1); renderDungeonView();};
  }
  function showDungeonVictory(){
    dungeon.busy=true;
    progress.dungeonRuns++; progress.xp+=100;
    if(!progress.loot.includes("Coroa do Backbone")) progress.loot.push("Coroa do Backbone");
    saveProgress();
    modalRoot.innerHTML=`<div class="quest-modal"><div class="modal-card" style="text-align:center"><div style="font-size:60px">👑</div><h2>Dungeon concluída!</h2><p class="modal-sub">Cinco salas vencidas. Você recebeu a Coroa do Backbone e +100 XP.</p><button class="pill-button primary" id="victory-close">Voltar ao início</button></div></div>`;
    $("#victory-close").onclick=()=>{modalRoot.innerHTML="";navigate("home");};
  }

  function bindNavButtons(){
    $$("[data-nav]").forEach(el=>{
      if(el.closest(".tabbar")||el.classList.contains("brand")) return;
      el.onclick=()=>navigate(el.dataset.nav);
    });
  }

  /* Profile + install */
  function openProfile(){
    const acc=overallAccuracy();
    modalRoot.innerHTML=`<div class="quest-modal"><div class="modal-card">
      <button class="close-x" id="close-profile">×</button>
      <div class="modal-sub">Seu progresso local</div>
      <h2>Nível ${levelFromXp(progress.xp)}</h2>
      <div class="profile-sheet-grid">
        <div class="profile-mini"><strong>${progress.xp}</strong><small>XP</small></div>
        <div class="profile-mini"><strong>${acc}%</strong><small>precisão</small></div>
        <div class="profile-mini"><strong>${progress.medals.length}</strong><small>medalhas</small></div>
      </div>
      <h3>Relíquias da dungeon</h3>
      <p class="modal-sub">${progress.loot.length?progress.loot.map(escapeHtml).join(" · "):"Nenhuma relíquia coletada ainda."}</p>
      <div class="danger-zone"><button class="pill-button secondary" id="reset-progress">Apagar progresso deste navegador</button></div>
    </div></div>`;
    $("#close-profile").onclick=()=>modalRoot.innerHTML="";
    $("#reset-progress").onclick=()=>{
      if(confirm("Apagar notas, medalhas, XP e progresso da dungeon?")){
        progress=defaultProgress();saveProgress();modalRoot.innerHTML="";navigate("home",{instant:true});
      }
    };
  }

  function isIos(){ return /iphone|ipad|ipod/i.test(navigator.userAgent); }
  function isStandalone(){ return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone===true; }
  function openInstall(){
    if(isStandalone()){toast("O NetQuest já está aberto como app.");return;}
    if(deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.finally(()=>deferredInstallPrompt=null);
      return;
    }
    const ios=isIos();
    modalRoot.innerHTML=`<div class="quest-modal"><div class="modal-card install-sheet">
      <button class="close-x" id="close-install">×</button>
      <div class="modal-sub">${ios?"iPhone / iPad":"Instalação do app"}</div>
      <h2>${ios?"Adicionar à Tela de Início":"Instale o NetQuest"}</h2>
      <p class="modal-sub">${ios?"No iOS, sites não podem abrir o instalador sozinhos. Use o menu do Safari:":"Se o navegador não mostrou um botão automático, use o menu do navegador para instalar/adicionar este site como aplicativo."}</p>
      ${ios?`<div class="steps">
        <div class="install-step"><b>1</b><span>Abra este site no <strong>Safari</strong>.</span></div>
        <div class="install-step"><b>2</b><span>Toque em <strong>Compartilhar</strong> (ícone do quadrado com seta).</span></div>
        <div class="install-step"><b>3</b><span>Escolha <strong>Adicionar à Tela de Início</strong> e confirme.</span></div>
      </div>`:""}
      <p class="modal-sub">Depois de instalado, abre em tela própria e continua funcionando offline após o primeiro carregamento.</p>
    </div></div>`;
    $("#close-install").onclick=()=>modalRoot.innerHTML="";
  }

  window.addEventListener("beforeinstallprompt",(e)=>{
    e.preventDefault(); deferredInstallPrompt=e;
    $("#install-btn")?.classList.add("success");
  });
  window.addEventListener("appinstalled",()=>{deferredInstallPrompt=null;toast("NetQuest instalado.");});

  document.addEventListener("click",(e)=>{
    const nav=e.target.closest("[data-nav]");
    if(nav && (nav.closest(".tabbar") || nav.classList.contains("brand"))){
      navigate(nav.dataset.nav);
    }
  });
  $("#install-btn").onclick=openInstall;
  $("#profile-btn").onclick=openProfile;

  if("serviceWorker" in navigator){
    window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
  }

  updateLevelBadge();
  navigate("home",{instant:true});
})();
