const COURSE_LENGTH = 180;
const $ = (id) => document.getElementById(id);
const todayISO = () => new Date().toISOString().slice(0,10);
const addDaysISO = (days) => { const d = new Date(); d.setDate(d.getDate()+days); return d.toISOString().slice(0,10); };

const phraseBank = {
  pronunciation: [
    ["妈","Mā","mãe","1º tom: alto e reto."],["麻","Má","cânhamo","2º tom: sobe como pergunta."],["马","Mǎ","cavalo","3º tom: cai e sobe."],["骂","Mà","xingar","4º tom: cai forte."],["吃","Chī","comer","CH com ar."],["是","Shì","ser / sim","SH mais enrolado."],["西","Xī","oeste","X fino, perto de 'chi'."],["七","Qī","sete","Q parece 'tchi' com ar."],["几","Jǐ","quantos","J parece 'dji' leve."],["很","Hěn","muito","H sai com ar."],["我","Wǒ","eu","Terceiro tom."],["你","Nǐ","você","Terceiro tom."],["好","Hǎo","bom","Terceiro tom."],["再","Zài","de novo","Quarto tom."],["说","Shuō","falar","Som SHUO."],["中文","Zhōngwén","chinês","ZH é mais enrolado." ]
  ],
  basics: [
    ["你好","Nǐ hǎo","olá","Use em quase qualquer situação."],["谢谢","Xièxie","obrigado","X soa como 'chi' leve."],["我是 Jeff","Wǒ shì Jeff","eu sou Jeff","Apresentação simples."],["你好吗？","Nǐ hǎo ma?","como você está?","Ma transforma em pergunta."],["我很好","Wǒ hěn hǎo","estou bem","Resposta simples."],["你呢？","Nǐ ne?","e você?","Pergunta curta."],["对","Duì","certo / sim","Confirmação comum."],["不对","Bú duì","não está certo","Para corrigir."],["是","Shì","sim / ser","Curto e firme."],["不是","Bú shì","não é","Negação comum."],["我不懂","Wǒ bù dǒng","eu não entendo","Frase de sobrevivência."],["请再说一遍","Qǐng zài shuō yí biàn","fale de novo, por favor","Use sempre que travar."],["请说慢一点","Qǐng shuō màn yìdiǎn","fale mais devagar","Frase essencial."],["没关系","Méi guānxi","não tem problema","Muito usada."],["不好意思","Bù hǎoyìsi","com licença / desculpa","Educado e útil."],["可以吗？","Kěyǐ ma?","pode?","Pergunta simples." ]
  ],
  numbers: [
    ["一","Yī","1","Reto."],["二","Èr","2","Cai forte."],["三","Sān","3","Reto."],["四","Sì","4","Cai forte."],["五","Wǔ","5","Cai e sobe."],["六","Liù","6","Cai forte."],["七","Qī","7","Reto."],["八","Bā","8","Reto."],["九","Jiǔ","9","Cai e sobe."],["十","Shí","10","Sobe."],["二十","Èrshí","20","Dois dez."],["五十","Wǔshí","50","Cinco dez."],["一百","Yì bǎi","100","Yī muda em combinação."],["一千","Yì qiān","1.000","Muito útil para preço."],["一万","Yí wàn","10.000","Na China contam por dez mil."],["人民币","Rénmínbì","RMB / yuan","Moeda chinesa."],["美元","Měiyuán","dólar","Útil em negociação."],["巴西雷亚尔","Bāxī léiyà'ěr","real brasileiro","Vocabulário específico." ]
  ],
  shopping: [
    ["多少钱？","Duōshǎo qián?","quanto custa?","Frase obrigatória."],["太贵了","Tài guì le","muito caro","Use com leveza."],["便宜一点","Piányi yìdiǎn","um pouco mais barato","Negociação básica."],["我要这个","Wǒ yào zhège","quero este","Aponte para o produto."],["不要","Bú yào","não quero","Curto e direto."],["可以刷卡吗？","Kěyǐ shuākǎ ma?","pode passar cartão?","Loja/restaurante."],["可以用支付宝吗？","Kěyǐ yòng Zhīfùbǎo ma?","pode usar Alipay?","Muito comum na China."],["有发票吗？","Yǒu fāpiào ma?","tem nota/recibo?","Fāpiào é nota/recibo."],["我先看看","Wǒ xiān kànkan","vou olhar primeiro","Ganha tempo."],["这个多少钱？","Zhège duōshǎo qián?","quanto custa este?","Mais específico."],["我要两个","Wǒ yào liǎng ge","quero dois","Liǎng é usado para quantidade."],["有别的颜色吗？","Yǒu bié de yánsè ma?","tem outra cor?","Comprar produto."],["有大一点的吗？","Yǒu dà yìdiǎn de ma?","tem maior?","Tamanho."],["有小一点的吗？","Yǒu xiǎo yìdiǎn de ma?","tem menor?","Tamanho." ]
  ],
  factory: [
    ["你们是工厂吗？","Nǐmen shì gōngchǎng ma?","vocês são fábrica?","Pergunta essencial em feira."],["最小起订量是多少？","Zuìxiǎo qǐdìngliàng shì duōshǎo?","qual é o MOQ?","Pedido mínimo."],["交货期多久？","Jiāohuòqī duōjiǔ?","qual o prazo de entrega?","Fornecedor."],["可以定制吗？","Kěyǐ dìngzhì ma?","pode personalizar?","Cor, medida, marca."],["有现货吗？","Yǒu xiànhuò ma?","tem pronta entrega?","Estoque."],["质量怎么样？","Zhìliàng zěnmeyàng?","como é a qualidade?","Pergunta padrão."],["可以看样品吗？","Kěyǐ kàn yàngpǐn ma?","posso ver amostra?","Feira."],["样品多少钱？","Yàngpǐn duōshǎo qián?","quanto custa a amostra?","Amostra."],["包装怎么样？","Bāozhuāng zěnmeyàng?","como é a embalagem?","Importante para transporte."],["可以发目录吗？","Kěyǐ fā mùlù ma?","pode enviar catálogo?","Peça no WeChat."],["请加我的微信","Qǐng jiā wǒ de Wēixìn","adicione meu WeChat, por favor","Indispensável."],["这是我的名片","Zhè shì wǒ de míngpiàn","este é meu cartão","Profissional."],["价格可以谈吗？","Jiàgé kěyǐ tán ma?","o preço é negociável?","Negociação."],["如果数量多呢？","Rúguǒ shùliàng duō ne?","e se a quantidade for grande?","Pressão comercial."],["这个产品出口到巴西吗？","Zhège chǎnpǐn chūkǒu dào Bāxī ma?","este produto exporta para o Brasil?","Importação."],["有没有认证？","Yǒu méiyǒu rènzhèng?","tem certificação?","Qualidade/documentos."],["可以做我们的品牌吗？","Kěyǐ zuò wǒmen de pǐnpái ma?","pode fazer nossa marca?","Marca própria."],["外箱尺寸是多少？","Wàixiāng chǐcùn shì duōshǎo?","qual a medida da caixa master?","Logística."],["一箱多少个？","Yì xiāng duōshǎo ge?","quantas peças por caixa?","Cubagem."],["毛重净重是多少？","Máozhòng jìngzhòng shì duōshǎo?","qual peso bruto e líquido?","Importação." ]
  ],
  travel: [
    ["洗手间在哪里？","Xǐshǒujiān zài nǎlǐ?","onde fica o banheiro?","Sobrevivência."],["我要去酒店","Wǒ yào qù jiǔdiàn","quero ir ao hotel","Táxi/app."],["这个地址","Zhège dìzhǐ","este endereço","Mostre o celular."],["请帮我","Qǐng bāng wǒ","por favor me ajude","Emergência."],["我迷路了","Wǒ mílù le","estou perdido","Emergência."],["地铁站在哪里？","Dìtiězhàn zài nǎlǐ?","onde fica o metrô?","Transporte."],["机场","Jīchǎng","aeroporto","Viagem."],["火车站","Huǒchēzhàn","estação de trem","Viagem."],["出租车","Chūzūchē","táxi","Transporte."],["这里停车吗？","Zhèlǐ tíngchē ma?","pode parar aqui?","Táxi."],["我要去这个地方","Wǒ yào qù zhège dìfang","quero ir a este lugar","Mostre endereço."],["多少钱到这里？","Duōshǎo qián dào zhèlǐ?","quanto até aqui?","Transporte." ]
  ],
  hotelFood: [
    ["我有预订","Wǒ yǒu yùdìng","tenho reserva","Hotel/restaurante."],["我的房间在哪里？","Wǒ de fángjiān zài nǎlǐ?","onde é meu quarto?","Hotel."],["我要这个菜","Wǒ yào zhège cài","quero este prato","Aponte no cardápio."],["不辣","Bú là","sem pimenta","Essencial."],["一点辣","Yìdiǎn là","um pouco picante","Controle de pimenta."],["买单","Mǎidān","a conta","Restaurante."],["水","Shuǐ","água","Básico."],["咖啡","Kāfēi","café","Fácil de lembrar."],["菜单","Càidān","cardápio","Restaurante."],["有早餐吗？","Yǒu zǎocān ma?","tem café da manhã?","Hotel."],["可以换房间吗？","Kěyǐ huàn fángjiān ma?","pode trocar de quarto?","Hotel."],["我要一瓶水","Wǒ yào yì píng shuǐ","quero uma garrafa de água","Restaurante/loja." ]
  ],
  conversation: [
    ["你叫什么名字？","Nǐ jiào shénme míngzi?","como você se chama?","Apresentação."],["我叫 Jeff","Wǒ jiào Jeff","eu me chamo Jeff","Natural."],["我是巴西人","Wǒ shì Bāxī rén","sou brasileiro","Bāxī = Brasil."],["我来自巴西","Wǒ láizì Bāxī","venho do Brasil","Apresentação."],["很高兴认识你","Hěn gāoxìng rènshi nǐ","prazer em conhecer você","Educado."],["你会说英语吗？","Nǐ huì shuō Yīngyǔ ma?","você fala inglês?","Quando travar."],["我会说一点中文","Wǒ huì shuō yìdiǎn Zhōngwén","falo um pouco de chinês","Use com orgulho."],["请说慢一点","Qǐng shuō màn yìdiǎn","fale mais devagar","Sempre útil."],["我正在学习中文","Wǒ zhèngzài xuéxí Zhōngwén","estou aprendendo chinês","Quebra gelo."],["你是哪里人？","Nǐ shì nǎlǐ rén?","de onde você é?","Conversa."],["我做进口生意","Wǒ zuò jìnkǒu shēngyì","trabalho com importação","Seu caso."],["我们以后联系","Wǒmen yǐhòu liánxì","vamos nos falar depois","Networking." ]
  ]
};

const modules = [
  {start:1,end:14,name:"Pronúncia e tons", bank:"pronunciation", focus:"Ouvido, boca e tons antes de decorar palavras.", icon:"声"},
  {start:15,end:35,name:"Sobrevivência básica", bank:"basics", focus:"Cumprimentos, desculpas, pedir para repetir e não travar.", icon:"你"},
  {start:36,end:50,name:"Números e dinheiro", bank:"numbers", focus:"Números, yuan, dólar, quantidade e preço.", icon:"¥"},
  {start:51,end:70,name:"Compras e negociação", bank:"shopping", focus:"Comprar, pedir desconto, cor, tamanho e pagamento.", icon:"购"},
  {start:71,end:105,name:"Feira e fornecedores", bank:"factory", focus:"Fábrica, MOQ, prazo, amostra, embalagem, catálogo e WeChat.", icon:"厂"},
  {start:106,end:125,name:"Viagem na China", bank:"travel", focus:"Aeroporto, táxi, metrô, endereço, ajuda e banheiro.", icon:"飞"},
  {start:126,end:145,name:"Hotel e restaurante", bank:"hotelFood", focus:"Reserva, quarto, cardápio, água, conta e comida sem pimenta.", icon:"店"},
  {start:146,end:165,name:"Conversação prática", bank:"conversation", focus:"Apresentação, nacionalidade, conversa curta e networking.", icon:"聊"},
  {start:166,end:180,name:"Simulação final China", bank:"factory", focus:"Treino misturado para viagem, feira e fornecedores.", icon:"中"}
];

const simulations = [
  { title:"Hotel: check-in", turns:[["Atendente","你好，你有预订吗？","Nǐ hǎo, nǐ yǒu yùdìng ma?","Olá, você tem reserva?"],["Você","我有预订。","Wǒ yǒu yùdìng.","Tenho reserva."],["Atendente","请给我护照。","Qǐng gěi wǒ hùzhào.","Por favor, me dê o passaporte."],["Você","好的。","Hǎo de.","Tudo bem."]]},
  { title:"Feira: primeiro contato", turns:[["Você","你们是工厂吗？","Nǐmen shì gōngchǎng ma?","Vocês são fábrica?"],["Fornecedor","是，我们是工厂。","Shì, wǒmen shì gōngchǎng.","Sim, somos fábrica."],["Você","可以看样品吗？","Kěyǐ kàn yàngpǐn ma?","Posso ver amostra?"],["Fornecedor","可以。","Kěyǐ.","Pode."]]},
  { title:"Negociação: preço", turns:[["Você","这个多少钱？","Zhège duōshǎo qián?","Quanto custa este?"],["Fornecedor","十块。","Shí kuài.","Dez yuan."],["Você","太贵了，便宜一点。","Tài guì le, piányi yìdiǎn.","Muito caro, mais barato."],["Fornecedor","如果数量多，可以便宜。","Rúguǒ shùliàng duō, kěyǐ piányi.","Se a quantidade for grande, pode ficar mais barato."]]},
  { title:"Fornecedor: MOQ e prazo", turns:[["Você","最小起订量是多少？","Zuìxiǎo qǐdìngliàng shì duōshǎo?","Qual é o pedido mínimo?"],["Fornecedor","一千个。","Yì qiān ge.","Mil unidades."],["Você","交货期多久？","Jiāohuòqī duōjiǔ?","Qual é o prazo de entrega?"],["Fornecedor","三十天。","Sānshí tiān.","Trinta dias."]]},
  { title:"Restaurante: pedir comida", turns:[["Garçom","你要什么？","Nǐ yào shénme?","O que você quer?"],["Você","我要这个菜，不辣。","Wǒ yào zhège cài, bú là.","Quero este prato, sem pimenta."],["Garçom","要水吗？","Yào shuǐ ma?","Quer água?"],["Você","要一瓶水。","Yào yì píng shuǐ.","Quero uma garrafa de água."]]},
  { title:"Táxi: endereço", turns:[["Você","我要去这个地址。","Wǒ yào qù zhège dìzhǐ.","Quero ir a este endereço."],["Motorista","好的。","Hǎo de.","Tudo bem."],["Você","多少钱到这里？","Duōshǎo qián dào zhèlǐ?","Quanto até aqui?"],["Motorista","五十块。","Wǔshí kuài.","Cinquenta yuan."]]},
];

const planItems = [
  ["Fase 1 — Dias 1 a 14","Tons, pinyin e sons que brasileiros erram. Não avance rápido demais aqui."],
  ["Fase 2 — Dias 15 a 35","Frases de sobrevivência para não travar quando alguém falar com você."],
  ["Fase 3 — Dias 36 a 50","Números, dinheiro e quantidades. Isso é base para compra e negociação."],
  ["Fase 4 — Dias 51 a 70","Compras, desconto, forma de pagamento, cor, tamanho e decisão."],
  ["Fase 5 — Dias 71 a 105","Mandarim de fornecedor: fábrica, MOQ, prazo, amostra, embalagem, catálogo e WeChat."],
  ["Fase 6 — Dias 106 a 145","Viagem real: hotel, restaurante, aeroporto, táxi, metrô, banheiro e ajuda."],
  ["Fase 7 — Dias 146 a 165","Conversa curta para criar relação e falar quem você é."],
  ["Fase 8 — Dias 166 a 180","Simulado final: feira, fornecedor, preço, logística, hotel, táxi e emergência."],
];

const state = {
  day: Number(localStorage.getItem('mp_day') || 1),
  completed: JSON.parse(localStorage.getItem('mp_completed') || '[]'),
  reviews: JSON.parse(localStorage.getItem('mp_reviews') || '{}'),
  favorites: JSON.parse(localStorage.getItem('mp_favorites') || '[]'),
  showReading: false,
  currentQuiz: null,
  simIndex: Number(localStorage.getItem('mp_sim') || 0),
  deferredPrompt: null,
  mediaRecorder: null,
  chunks: [],
};

function toast(msg){ const t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),2400); }
function save(){ localStorage.setItem('mp_day', state.day); localStorage.setItem('mp_completed', JSON.stringify(state.completed)); localStorage.setItem('mp_reviews', JSON.stringify(state.reviews)); localStorage.setItem('mp_favorites', JSON.stringify(state.favorites)); localStorage.setItem('mp_sim', state.simIndex); }
function moduleFor(day){ return modules.find(m => day>=m.start && day<=m.end) || modules[0]; }
function makeDay(day){
  const mod = moduleFor(day); const bank = phraseBank[mod.bank]; const rel = day - mod.start;
  let phrases = [0,1,2,3].map(o=>{ const p=bank[(rel*3+o)%bank.length]; return {hanzi:p[0],pinyin:p[1],meaning:p[2],tip:p[3],key:`d${day}-p${o+1}`,audio:`audio/day-${String(day).padStart(3,'0')}-phrase-${String(o+1).padStart(2,'0')}.mp3`}; });
  if(day>=166){
    const all = [...phraseBank.factory,...phraseBank.travel,...phraseBank.hotelFood,...phraseBank.shopping,...phraseBank.conversation];
    phrases = [0,1,2,3].map(o=>{ const p=all[(rel*5+o*7)%all.length]; return {hanzi:p[0],pinyin:p[1],meaning:p[2],tip:p[3],key:`d${day}-p${o+1}`,audio:`audio/day-${String(day).padStart(3,'0')}-phrase-${String(o+1).padStart(2,'0')}.mp3`}; });
  }
  const review = day%7===0; const challenge = day%15===0;
  return {day, mod, title: challenge?`Simulado prático ${Math.ceil(day/15)}`:review?`Revisão guiada — dia ${day}`:`${mod.name} — treino ${rel+1}`, level:day<=35?'Iniciante absoluto':day<=105?'Básico funcional':day<=165?'Pré-intermediário prático':'Preparação final', goal: challenge?'Responder sem olhar. Objetivo: velocidade real.':review?'Consolidar. Hoje é mais revisão que conteúdo novo.':mod.focus, phrases, mission: challenge?'Faça uma simulação completa: cumprimente, pergunte preço, peça desconto, pergunte MOQ/prazo e peça WeChat.':review?'Faça 3 rodadas: ouvir sem ler, repetir olhando, falar sem olhar e gravar.':'Ouça cada frase 5 vezes. Repita 10 vezes. Grave sua voz e compare.'};
}
const course = Array.from({length:COURSE_LENGTH},(_,i)=>makeDay(i+1));

function speak(text, slow=false){
  if(!('speechSynthesis' in window)) return toast('Seu navegador não suporta voz automática.');
  speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang='zh-CN'; u.rate=slow?0.58:0.82; u.pitch=1; speechSynthesis.speak(u);
}
function playPhrase(phrase, slow=false){
  const useNative = $('useNativeFirst').checked;
  if(useNative && !slow){
    const audio = new Audio(phrase.audio);
    audio.play().catch(()=>speak(phrase.hanzi, slow));
    audio.onerror = () => speak(phrase.hanzi, slow);
  } else speak(phrase.hanzi, slow);
}
async function playAll(){ for(const p of course[state.day-1].phrases){ playPhrase(p); await new Promise(r=>setTimeout(r,1900)); } }

function render(){ renderStats(); renderModules(); renderDays(); renderLesson(); renderPhrases(); renderReview(); renderQuiz(); renderSimulation(); renderPlan(); save(); }
function renderStats(){
  const pct = Math.round(state.completed.length/COURSE_LENGTH*100); $('totalProgressText').textContent=pct+'%'; $('totalProgressBar').style.width=pct+'%'; $('doneDays').textContent=state.completed.length;
  $('streakDays').textContent = calcStreak();
  if(!$('tripDateInput').value){ $('tripDateInput').value = localStorage.getItem('mp_trip') || '2026-10-01'; }
  $('minutesInput').value = localStorage.getItem('mp_minutes') || $('minutesInput').value || 35;
}
function calcStreak(){ const done = new Set(state.completed); let s=0; for(let d=1; d<=COURSE_LENGTH; d++){ if(done.has(d)) s++; else if(d<state.day) s=0; } return s; }
function renderModules(){
  $('moduleCount').textContent = modules.length+' fases';
  $('moduleList').innerHTML = modules.map(m=>{ const total=m.end-m.start+1; const done=state.completed.filter(d=>d>=m.start&&d<=m.end).length; const active = state.day>=m.start&&state.day<=m.end; return `<button class="module ${active?'active':''}" data-goto="${m.start}"><span class="module__icon">${m.icon}</span><span class="module__body"><strong>${m.name}</strong><span>Dias ${m.start}-${m.end} · ${done}/${total}</span></span><span class="module__pct">${Math.round(done/total*100)}%</span></button>`; }).join('');
  document.querySelectorAll('[data-goto]').forEach(b=>b.onclick=()=>{state.day=Number(b.dataset.goto); render();});
}
function renderDays(){
  const q = $('searchInput').value.trim().toLowerCase();
  const filtered = course.filter(d=>!q || [d.title,d.goal,d.level,d.mod.name,...d.phrases.flatMap(p=>[p.hanzi,p.pinyin,p.meaning])].join(' ').toLowerCase().includes(q));
  $('dayList').innerHTML = filtered.map(d=>`<button class="day-item ${d.day===state.day?'active':''}" data-day="${d.day}"><span class="day-item__body"><strong>Dia ${d.day}</strong><span>${d.title}</span></span><span class="day-item__check">${state.completed.includes(d.day)?'✓':''}</span></button>`).join('');
  document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{state.day=Number(b.dataset.day); render(); window.scrollTo({top:0,behavior:'smooth'});});
}
function renderLesson(){
  const d = course[state.day-1]; $('lessonBadges').innerHTML = `<span>Dia ${d.day}</span><span>${d.level}</span><span>${d.mod.name}</span>`; $('lessonTitle').textContent=d.title; $('lessonGoal').textContent=d.goal;
  const total=d.mod.end-d.mod.start+1; const done=state.completed.filter(x=>x>=d.mod.start&&x<=d.mod.end).length; const pct=Math.round(done/total*100); $('moduleProgressText').textContent=pct+'%'; $('moduleProgressBar').style.width=pct+'%'; $('completeBtn').textContent=state.completed.includes(state.day)?'Aula concluída':'Concluir aula'; $('dailyMission').textContent=' '+d.mission;
}
function renderPhrases(){
  const d=course[state.day-1];
  $('phraseList').innerHTML=d.phrases.map((p,i)=>{ const fav=state.favorites.includes(p.key); return `<article class="phrase"><div class="phrase__top"><div><div class="hanzi">${p.hanzi}</div><div class="read ${state.showReading?'':'hidden'}"><div class="pinyin">${p.pinyin}</div><div class="meaning">${p.meaning}</div></div></div><div class="phrase__actions"><button class="btn btn--small" data-play="${i}">Nativo/normal</button><button class="btn btn--outline btn--small" data-slow="${i}">Lento</button><button class="btn btn--outline btn--small" data-fav="${i}">${fav?'★ Salva':'☆ Salvar'}</button><button class="btn btn--outline btn--small" data-review="${i}">Revisar</button></div></div><div class="tip ${state.showReading?'':'hidden'}"><strong>Macete:</strong> ${p.tip}</div></article>`; }).join('');
  document.querySelectorAll('[data-play]').forEach(b=>b.onclick=()=>playPhrase(d.phrases[Number(b.dataset.play)]));
  document.querySelectorAll('[data-slow]').forEach(b=>b.onclick=()=>playPhrase(d.phrases[Number(b.dataset.slow)], true));
  document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>{ const p=d.phrases[Number(b.dataset.fav)]; state.favorites = state.favorites.includes(p.key)?state.favorites.filter(k=>k!==p.key):[...state.favorites,p.key]; render(); });
  document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{ scheduleReview(d.phrases[Number(b.dataset.review)],1); toast('Agendado para revisar amanhã.'); renderReview(); });
}
function scheduleReview(p, days){ state.reviews[p.key] = { ...p, due:addDaysISO(days), ease:days }; save(); }
function answerReview(p, quality){ const days = quality==='bad'?1:quality==='mid'?3:quality==='good'?7:15; scheduleReview(p,days); toast(`Próxima revisão em ${days} dia(s).`); renderReview(); }
function renderReview(dueOnly=false){
  const today=todayISO(); let items=Object.values(state.reviews);
  if(dueOnly) items=items.filter(x=>x.due<=today);
  if(!items.length){ $('reviewList').innerHTML='<div class="review-card"><div><strong>Nenhuma revisão agendada.</strong><p class="meaning">Clique em “Revisar” em alguma frase para entrar no sistema inteligente.</p></div></div>'; return; }
  items.sort((a,b)=>a.due.localeCompare(b.due));
  $('reviewList').innerHTML=items.map((p,i)=>`<div class="review-card"><div><div class="hanzi" style="font-size:34px">${p.hanzi}</div><div class="pinyin">${p.pinyin}</div><div class="meaning">${p.meaning} · revisão: ${p.due}</div></div><div class="review-actions"><button class="btn btn--small" data-rplay="${i}">Ouvir</button><button class="btn btn--danger btn--small" data-rbad="${i}">Errei</button><button class="btn btn--outline btn--small" data-rmid="${i}">Quase</button><button class="btn btn--small" data-rgood="${i}">Acertei</button></div></div>`).join('');
  document.querySelectorAll('[data-rplay]').forEach(b=>b.onclick=()=>playPhrase(items[Number(b.dataset.rplay)]));
  document.querySelectorAll('[data-rbad]').forEach(b=>b.onclick=()=>answerReview(items[Number(b.dataset.rbad)],'bad'));
  document.querySelectorAll('[data-rmid]').forEach(b=>b.onclick=()=>answerReview(items[Number(b.dataset.rmid)],'mid'));
  document.querySelectorAll('[data-rgood]').forEach(b=>b.onclick=()=>answerReview(items[Number(b.dataset.rgood)],'good'));
}
function makeQuiz(){
  const d=course[state.day-1]; const p=d.phrases[Math.floor(Math.random()*d.phrases.length)]; const all=course.flatMap(x=>x.phrases); let opts=[p.meaning]; while(opts.length<4){ const m=all[Math.floor(Math.random()*all.length)].meaning; if(!opts.includes(m)) opts.push(m); } opts=opts.sort(()=>Math.random()-.5); state.currentQuiz={p,opts};
}
function renderQuiz(){
  if(!state.currentQuiz) makeQuiz(); const {p,opts}=state.currentQuiz;
  $('quizBox').innerHTML=`<div class="quiz-question"><h4>${p.hanzi}</h4><p class="pinyin">${p.pinyin}</p><button class="btn btn--outline" id="quizAudio">Ouvir</button><p>O que significa?</p><div class="options">${opts.map(o=>`<button class="option" data-answer="${o}">${o}</button>`).join('')}</div></div>`;
  $('quizAudio').onclick=()=>playPhrase(p);
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{ const ok=b.dataset.answer===p.meaning; b.classList.add(ok?'correct':'wrong'); if(ok){ scheduleReview(p,3); toast('Certo. Frase agendada para revisão.'); } else toast('Errou. Ouça de novo e repita.'); });
}
function renderSimulation(){
  const sim=simulations[state.simIndex%simulations.length];
  $('simulationBox').innerHTML=`<h3>${sim.title}</h3>${sim.turns.map((t,i)=>`<div class="sim-turn ${t[0]==='Você'?'sim-answer':''}"><b>${t[0]}</b><div class="hanzi" style="font-size:30px">${t[1]}</div><div class="pinyin">${t[2]}</div><div class="meaning">${t[3]}</div><button class="btn btn--outline btn--small" data-simplay="${i}">Ouvir</button></div>`).join('')}<p class="hint">Treino: toque no áudio do chinês, responda em voz alta, depois confira sua frase.</p>`;
  document.querySelectorAll('[data-simplay]').forEach(b=>b.onclick=()=>speak(sim.turns[Number(b.dataset.simplay)][1]));
}
function renderPlan(){ $('planGrid').innerHTML = planItems.map(([a,b])=>`<div class="plan-item"><strong>${a}</strong><span>${b}</span></div>`).join(''); }

function bind(){
  window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); state.deferredPrompt=e; $('installBtn').classList.remove('hidden'); });
  $('installBtn').onclick=async()=>{ if(state.deferredPrompt){ state.deferredPrompt.prompt(); state.deferredPrompt=null; $('installBtn').classList.add('hidden'); } };
  $('todayBtn').onclick=()=>{ const suggested = Math.min(COURSE_LENGTH, state.completed.length+1); state.day=suggested; render(); };
  $('resetBtn').onclick=()=>{ if(confirm('Zerar todo progresso e revisões?')){ localStorage.removeItem('mp_completed'); localStorage.removeItem('mp_reviews'); localStorage.removeItem('mp_favorites'); state.completed=[]; state.reviews={}; state.favorites=[]; render(); } };
  $('prevDay').onclick=()=>{ state.day=Math.max(1,state.day-1); render(); };
  $('nextDay').onclick=()=>{ state.day=Math.min(COURSE_LENGTH,state.day+1); render(); };
  $('completeBtn').onclick=()=>{ if(state.completed.includes(state.day)) state.completed=state.completed.filter(d=>d!==state.day); else { state.completed.push(state.day); course[state.day-1].phrases.forEach(p=>scheduleReview(p,3)); } render(); };
  $('searchInput').oninput=renderDays;
  $('toggleReading').onclick=()=>{ state.showReading=!state.showReading; $('toggleReading').textContent=state.showReading?'Ocultar leitura':'Mostrar leitura'; renderPhrases(); };
  $('playAll').onclick=playAll;
  $('newQuiz').onclick=()=>{ makeQuiz(); renderQuiz(); };
  $('dueOnlyBtn').onclick=()=>renderReview(true);
  $('newSimulation').onclick=()=>{ state.simIndex=(state.simIndex+1)%simulations.length; renderSimulation(); save(); };
  $('minutesInput').onchange=()=>localStorage.setItem('mp_minutes',$('minutesInput').value);
  $('tripDateInput').onchange=()=>localStorage.setItem('mp_trip',$('tripDateInput').value);
  document.querySelectorAll('.tab').forEach(tab=>tab.onclick=()=>{ document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active'); document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active')); $('panel-'+tab.dataset.tab).classList.add('active'); });
  $('recordBtn').onclick=startRecording; $('stopRecordBtn').onclick=stopRecording;
}
async function startRecording(){
  try{ const stream = await navigator.mediaDevices.getUserMedia({audio:true}); state.chunks=[]; state.mediaRecorder=new MediaRecorder(stream); state.mediaRecorder.ondataavailable=e=>state.chunks.push(e.data); state.mediaRecorder.onstop=()=>{ const blob=new Blob(state.chunks,{type:'audio/webm'}); $('recordedAudio').src=URL.createObjectURL(blob); stream.getTracks().forEach(t=>t.stop()); }; state.mediaRecorder.start(); $('recordBtn').disabled=true; $('stopRecordBtn').disabled=false; toast('Gravando...'); }catch(e){ toast('Permita o microfone para gravar.'); }
}
function stopRecording(){ if(state.mediaRecorder){ state.mediaRecorder.stop(); $('recordBtn').disabled=false; $('stopRecordBtn').disabled=true; toast('Gravação pronta.'); } }

if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{})); }
bind(); render();
