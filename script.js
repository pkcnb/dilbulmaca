const languages = [
  {
    name: "Baskça",
    code: "eu-ES",
    family: "Dil ailesi: izole dil",
    challenge: "Ergatif tuzağı",
    phrase: "Gaurko haizeak mendien atzean istorio zaharrak esnatzen ditu.",
    scriptSample: "Etxe zaharreko leihoetan euria gelditu da.",
    scriptLabel: "Latin harfleri, ama tanıdık Roman ritminden uzak.",
    fact: "Baskça Avrupa'nın en ünlü izole dillerinden biridir: bilinen büyük bir dil ailesine bağlanmaz ve ergatif-absolütif hizalanma kullanır.",
    hints: [
      "Avrupa'da konuşulur ama Hint-Avrupa dil ailesine ait değildir.",
      "Ergatif-absolütif hizalanma kullanan nadir Avrupa dillerindendir.",
      "İspanya ve Fransa sınırı çevresindeki Bask Bölgesi ile özdeşleşir.",
    ],
  },
  {
    name: "Gürcüce",
    code: "ka-GE",
    family: "Dil ailesi: Kartvel",
    challenge: "Kafkas ritmi",
    phrase: "დილით ქალაქის ძველი ქუჩები ნელა იღვიძებენ.",
    scriptSample: "დილით ქალაქის ძველი ქუჩები ნელა იღვიძებენ.",
    scriptLabel: "Yuvarlak Mkhedruli harfleri.",
    fact: "Gürcüce modern Mkhedruli yazısıyla yazılır; ayrıca patlamalı sessizlerin yanında ejektif ünsüzleriyle de ayırt edilir.",
    hints: [
      "Kafkasya'da konuşulur ve Kartvel dil ailesindendir.",
      "Modern yazısı Mkhedruli olarak bilinir.",
      "Ejektif ünsüzleri ve yoğun ünsüz kümeleriyle tanınır.",
    ],
  },
  {
    name: "Galce",
    code: "cy-GB",
    family: "Dil ailesi: Kelt",
    challenge: "Mutasyon alarmı",
    phrase: "Mae'r nos yn cario caneuon tawel dros y bryniau.",
    scriptSample: "Mae'r nos yn cario caneuon tawel dros y bryniau.",
    scriptLabel: "w ve y harfleri sık sık ünlü görevi görür.",
    fact: "Galcede kelimenin başındaki ünsüz, cümledeki görevine göre değişebilir; bu olaya başlangıç mutasyonu denir.",
    hints: [
      "Britanya'da konuşulan bir Kelt dilidir.",
      "Başlangıç ünsüz mutasyonları gramerin görünür parçasıdır.",
      "Yazıda w ve y harfleri sık sık ünlü gibi davranır.",
    ],
  },
  {
    name: "İzlandaca",
    code: "is-IS",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Eski İskandinav izi",
    phrase: "Gamla húsið stendur kyrrt þegar vindurinn syngur.",
    scriptSample: "Gamla húsið stendur kyrrt þegar vindurinn syngur.",
    scriptLabel: "ð ve þ harfleri güçlü ipucu verir.",
    fact: "İzlandaca, çekim sistemi ve kelime hazinesi açısından Eski Norsçaya modern İskandinav dillerinin çoğundan daha yakın durur.",
    hints: [
      "Kuzey Cermen dillerindendir.",
      "Yazıda þ ve ð harfleri hâlâ kullanılır.",
      "Eski Norsçaya oldukça yakın kalan modern bir dildir.",
    ],
  },
  {
    name: "Fince",
    code: "fi-FI",
    family: "Dil ailesi: Ural",
    challenge: "Vaka yağmuru",
    phrase: "Hiljainen järvi heijastaa aamun vaaleaa valoa.",
    scriptSample: "Hiljainen järvi heijastaa aamun vaaleaa valoa.",
    scriptLabel: "Uzun çift ünlüler ve ä sık görünür.",
    fact: "Fince edatlar yerine çoğu zaman isim durum eklerini kullanır; içeride, içeriye ve içeriden gibi ayrımlar eklerle kurulur.",
    hints: [
      "Ural dil ailesindendir.",
      "Çok sayıda isim durumu vardır.",
      "Uzun ünlüler ve çift harfler yazıda açıkça görülür.",
    ],
  },
  {
    name: "Macarca",
    code: "hu-HU",
    family: "Dil ailesi: Ural",
    challenge: "Ünlü uyumu",
    phrase: "A régi tér felett lassan megérkezik az este.",
    scriptSample: "A régi tér felett lassan megérkezik az este.",
    scriptLabel: "á, é, ő, ű gibi aksanlı ünlüler bolca gelir.",
    fact: "Macarcada birçok ekin biçimi kökteki ünlülere göre değişir; buna ünlü uyumu denir ve ek seçimini kulağa göre yönetir.",
    hints: [
      "Ural dil ailesindendir ama Finceyle karşılıklı anlaşılır değildir.",
      "Ünlü uyumu ek seçimini etkiler.",
      "Avrupa'nın ortasında konuşulan, bol ekli bir dildir.",
    ],
  },
  {
    name: "Lehçe",
    code: "pl-PL",
    family: "Dil ailesi: Batı Slav",
    challenge: "Sessiz kümesi",
    phrase: "W starym ogrodzie cichy deszcz budzi wspomnienia.",
    scriptSample: "W starym ogrodzie cichy deszcz budzi wspomnienia.",
    scriptLabel: "sz, cz, rz ve burunsu ą/ę iz bırakır.",
    fact: "Lehçede burunsu ünlüler yazıda hâlâ görünür: ą ve ę harfleri, Slav dilleri arasında dikkat çekici bir iz bırakır.",
    hints: [
      "Batı Slav dillerindendir.",
      "ą ve ę burunsu ünlüleri yazıda korur.",
      "sz, cz, rz gibi ikili harfler sık görülür.",
    ],
  },
  {
    name: "Çekçe",
    code: "cs-CZ",
    family: "Dil ailesi: Batı Slav",
    challenge: "Ř testi",
    phrase: "Na nádraží čeká vlak pod šedým ranním nebem.",
    scriptSample: "Na nádraží čeká vlak pod šedým ranním nebem.",
    scriptLabel: "ř, č, š, ž gibi harfler güçlü ipucu.",
    fact: "Çekçedeki ř sesi çok ayırt edicidir: titreşimli bir r ile sürtünmeli bir sesin birleşimi gibi duyulur.",
    hints: [
      "Batı Slav dillerindendir.",
      "ř sesi bu dilin en meşhur seslerinden biridir.",
      "Latin alfabesini çok sayıda diakritikle kullanır.",
    ],
  },
  {
    name: "Romence",
    code: "ro-RO",
    family: "Dil ailesi: Roman",
    challenge: "Balkan Latincesi",
    phrase: "Lumina serii cade încet peste acoperișurile vechi.",
    scriptSample: "Lumina serii cade încet peste acoperișurile vechi.",
    scriptLabel: "ă, â, î, ș ve ț harfleri belirgin.",
    fact: "Romence bir Roman dilidir ama Balkan dil alanıyla temas yüzünden ertelenmiş tanımlık gibi komşu dillere benzeyen özellikler taşır.",
    hints: [
      "Roman dilidir ama Balkan dil alanıyla temas izleri taşır.",
      "Tanımlık kelimenin sonuna eklenebilir.",
      "ă, â, î, ș, ț harfleri yazıda ayırt edicidir.",
    ],
  },
  {
    name: "Katalanca",
    code: "ca-ES",
    family: "Dil ailesi: Roman",
    challenge: "İspanyolca değil",
    phrase: "La llum del vespre dibuixa ombres sobre la plaça.",
    scriptSample: "La llum del vespre dibuixa ombres sobre la plaça.",
    scriptLabel: "ll, ny ve ç göze çarpar.",
    fact: "Katalanca, İspanyolcanın lehçesi değildir; Oksitanca ile tarihsel yakınlıkları olan ayrı bir Roman dilidir.",
    hints: [
      "Roman dilidir ve İber Yarımadası'nda konuşulur.",
      "İspanyolcanın lehçesi değil, ayrı bir dildir.",
      "ll, ny ve ç yazıda sık karşılaşılır.",
    ],
  },
  {
    name: "Yunanca",
    code: "el-GR",
    family: "Dil ailesi: Helen",
    challenge: "Tek başına dal",
    phrase: "Το φως της αυγής αλλάζει το χρώμα της θάλασσας.",
    scriptSample: "Το φως της αυγής αλλάζει το χρώμα της θάλασσας.",
    scriptLabel: "Modern Yunan alfabesi.",
    fact: "Yunanca, Hint-Avrupa içinde kendi başına Helen kolunu temsil eder ve yazılı tarihi üç bin yılı aşan bir süreklilik gösterir.",
    hints: [
      "Hint-Avrupa içinde Helen kolunu temsil eder.",
      "Kendi alfabesiyle yazılır.",
      "Yazılı tarihi çok uzun bir süreklilik gösterir.",
    ],
  },
  {
    name: "İbranice",
    code: "he-IL",
    family: "Dil ailesi: Sami",
    challenge: "Kök kalıp oyunu",
    phrase: "האור הקטן משנה את פני הרחוב בבוקר.",
    scriptSample: "האור הקטן משנה את פני הרחוב בבוקר.",
    scriptLabel: "Sağdan sola yazılan İbrani alfabesi.",
    fact: "İbranice, Sami dillerine özgü kök-kalıp sistemini kullanır; çoğu kelime üç ünsüzlü bir kökün farklı kalıplara girmesiyle oluşur.",
    hints: [
      "Sami dil ailesindendir.",
      "Sağdan sola yazılır.",
      "Kök-kalıp sistemiyle kelime türetir.",
    ],
  },
  {
    name: "Tayca",
    code: "th-TH",
    family: "Dil ailesi: Kra-Dai",
    challenge: "Ton mayını",
    phrase: "แสงเช้าทำให้เมืองเก่าดูอ่อนโยนขึ้น.",
    scriptSample: "แสงเช้าทำให้เมืองเก่าดูอ่อนโยนขึ้น.",
    scriptLabel: "Tay yazısı, harfler arasında boşluk az.",
    fact: "Tayca tonal bir dildir; hecenin tonu anlamı değiştirebilir ve yazı sistemi ton ipuçlarını ünsüz sınıflarıyla birlikte kodlar.",
    hints: [
      "Kra-Dai dil ailesindendir.",
      "Tonal bir dildir.",
      "Yazı sistemi tonları ünsüz sınıflarıyla birlikte kodlar.",
    ],
  },
  {
    name: "Vietnamca",
    code: "vi-VN",
    family: "Dil ailesi: Austroasya",
    challenge: "Altı ton",
    phrase: "Ánh sáng buổi sớm làm con phố trở nên yên tĩnh.",
    scriptSample: "Ánh sáng buổi sớm làm con phố trở nên yên tĩnh.",
    scriptLabel: "Latin harfleri üstünde yoğun ton işaretleri.",
    fact: "Vietnamca Latin alfabesi kullanır ama tonları ve ses ayrımlarını yoğun aksan işaretleriyle yazar.",
    hints: [
      "Austroasya dil ailesindendir.",
      "Latin alfabesi kullanır.",
      "Tonlar çok yoğun aksan işaretleriyle yazılır.",
    ],
  },
  {
    name: "Endonezce",
    code: "id-ID",
    family: "Dil ailesi: Avustronezya",
    challenge: "Ek mi, tekrar mı?",
    phrase: "Angin sore membawa cerita dari pulau yang jauh.",
    scriptSample: "Angin sore membawa cerita dari pulau yang jauh.",
    scriptLabel: "Sade Latin yazımı, çok düzenli görünür.",
    fact: "Endonezcede çoğulluk her zaman ayrı bir ekle değil, bazen kelime tekrarıyla kurulur: buku-buku 'kitaplar' gibi.",
    hints: [
      "Avustronezya dil ailesindendir.",
      "Latin alfabesiyle oldukça düzenli yazılır.",
      "Çoğulluk bazen kelime tekrarıyla yapılabilir.",
    ],
  },
  {
    name: "Ukraynaca",
    code: "uk-UA",
    family: "Dil ailesi: Doğu Slav",
    challenge: "Kiril ayrımı",
    phrase: "Тиха вулиця прокидається під теплим ранковим світлом.",
    scriptSample: "Тиха вулиця прокидається під теплим ранковим світлом.",
    scriptLabel: "Kiril; і, ї, є ve ґ ipucu verir.",
    fact: "Ukraynaca, Rusçayla aynı ailede olsa da ґ, є, і, ї gibi harfleriyle ve ses sistemiyle kolayca ayırt edilebilir.",
    hints: [
      "Doğu Slav dillerindendir.",
      "Kiril alfabesi kullanır.",
      "і, ї, є ve ґ harfleri ayırt edicidir.",
    ],
  },
  {
    name: "Danca",
    code: "da-DK",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Stød şüphesi",
    phrase: "Den lille havn bliver stille, når aftenen falder på.",
    scriptSample: "Den lille havn bliver stille, når aftenen falder på.",
    scriptLabel: "æ, ø ve å harfleri Kuzey izi.",
    fact: "Dancada stød denen gırtlaksı vurgu anlam ayırt edebilir; kulağa çok kısa bir kesinti gibi gelebilir.",
    hints: [
      "Kuzey Cermen dillerindendir.",
      "æ, ø ve å harflerini kullanır.",
      "Stød denen gırtlaksı vurgu ile tanınır.",
    ],
  },
  {
    name: "Norveççe",
    code: "nb-NO",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Melodik vurgu",
    phrase: "Fjorden ligger stille under den klare morgenhimmelen.",
    scriptSample: "Fjorden ligger stille under den klare morgenhimmelen.",
    scriptLabel: "æ, ø, å ve uzun bileşik kelimeler.",
    fact: "Norveççede birçok lehçede perde aksanı vardır; aynı ses dizisi farklı melodiyle farklı kelimelere dönüşebilir.",
    hints: [
      "Kuzey Cermen dillerindendir.",
      "Bokmål ve Nynorsk gibi iki yazı standardı vardır.",
      "Perde aksanı bazı kelimeleri ayırt edebilir.",
    ],
  },
  {
    name: "İsveççe",
    code: "sv-SE",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Şarkılı aksan",
    phrase: "Den gamla bron speglar sig i det kalla vattnet.",
    scriptSample: "Den gamla bron speglar sig i det kalla vattnet.",
    scriptLabel: "å, ä, ö harfleri ve melodik cümle yapısı.",
    fact: "İsveççe de perde aksanıyla ünlüdür; bu yüzden bazı kelimeler Türkçe kulağa neredeyse melodik bir iniş çıkışla gelir.",
    hints: [
      "Kuzey Cermen dillerindendir.",
      "å, ä ve ö harflerini kullanır.",
      "Perde aksanı kulağa şarkılı bir ritim verebilir.",
    ],
  },
  {
    name: "Slovakça",
    code: "sk-SK",
    family: "Dil ailesi: Batı Slav",
    challenge: "Uzun hece kuralı",
    phrase: "Tichá rieka nesie tiene starých stromov.",
    scriptSample: "Tichá rieka nesie tiene starých stromov.",
    scriptLabel: "á, č, š, ž ve yumuşatma işaretleri.",
    fact: "Slovakçada 'ritmik kural' denen eğilim, art arda gelen uzun heceleri sınırlayarak ek biçimlerini etkileyebilir.",
    hints: [
      "Batı Slav dillerindendir.",
      "Uzun ünlü işaretleri ve yumuşatma işaretleri sık görülür.",
      "Ritmik kural, uzun hecelerin dizilişini etkileyebilir.",
    ],
  },
];

const modes = {
  orthography: {
    title: "Alfabe Avcısı",
    eyebrow: "Ortografik tahmin",
    prompt: "Bu yazı hangi dile ait?",
    finalHigh: "Harflerden iz sürme işini çözmüşsün. Alfabeler artık sana küçük harita gibi konuşuyor.",
    finalMid: "Güzel göz. Diakritikler ve yazı sistemleri arasındaki farkları yakalamaya başlamışsın.",
    finalLow: "Bu mod ilk bakışta sinsidir. Harf biçimlerine, boşluklara ve aksanlara bakınca hızlanacaksın.",
  },
  listening: {
    title: "Kulak Dedektifi",
    eyebrow: "Dinleyerek tahmin",
    prompt: "Bu cümle hangi dilde?",
    finalHigh: "Kulakların gayet keskin. Ritim, vurgu ve ses dokusunu iyi yakalıyorsun.",
    finalMid: "Güzel başlangıç. Birkaç tur daha oynadığında benzer ses ailelerini ayırmak kolaylaşacak.",
    finalLow: "Bu mod ilk başta şaşırtıcı olabilir. Yeniden oynadığında özellikle ritme ve harf tınılarına odaklan.",
  },
  trivia: {
    title: "Trivia Turu",
    eyebrow: "İpucu ekonomisi",
    prompt: "İpuçlarından dili bul.",
    finalHigh: "Harika oynadın. Az ipucuyla çok şey çıkaran bir dil dedektifi tavrı bu.",
    finalMid: "İyi gidiyorsun. Puanı korumak için ilk ipucunda dil ailesini ve yazı ipuçlarını tart.",
    finalLow: "Trivia modu biraz satranç gibi. Ek ipucu pahalı ama bazen doğru yatırım.",
  },
};

const storageKey = "dilDedektifiKirpiState";
const starterLeaves = 1000000;
const hedgehogSpeakingFrames = Array.from(
  { length: 8 },
  (_, index) => `assets/hedgehog-speaking/speaking-${index + 1}.png?v=no-sparkle-1`,
);
const hedgehogOrthographyFrames = Array.from(
  { length: 10 },
  (_, index) => `assets/hedgehog-orthography/orthography-${index + 1}.png?v=orthography-1`,
);
const hedgehogTriviaFrames = Array.from(
  { length: 8 },
  (_, index) => `assets/hedgehog-trivia/trivia-${index + 1}.png?v=trivia-1`,
);
const hedgehogGestureFrame = "assets/hedgehog-frames/hedgehog-2.png?v=no-sparkle-1";
const hedgehogBlinkFrame = "assets/hedgehog-frames/hedgehog-blink.png?v=no-sparkle-1";
const hedgehogIdleFrames = [
  "assets/hedgehog-frames/hedgehog-5.png?v=no-sparkle-1",
  "assets/hedgehog-frames/hedgehog-idle-1.png?v=no-sparkle-1",
  "assets/hedgehog-frames/hedgehog-5.png?v=no-sparkle-1",
  "assets/hedgehog-frames/hedgehog-idle-2.png?v=no-sparkle-1",
];
const hedgehogTalkFrames = [7, 3, 4, 2, 5, 0, 6, 1];
const hedgehogOrthographyScanFrames = [9, 8, 7, 0, 1, 2, 5, 6, 0];
const hedgehogTriviaThinkFrames = [0, 1, 2, 5, 4, 6, 7, 0];
const shopItemsData = [
  { id: "flower_a", name: "Çiçek tacı A", slot: "head", price: 20 },
  { id: "flower_b", name: "Çiçek tacı B", slot: "head", price: 25 },
  { id: "detective_hat", name: "Dedektif şapkası", slot: "head", price: 35 },
  { id: "glasses_a", name: "Gözlük A", slot: "face", price: 15 },
  { id: "glasses_b", name: "Gözlük B", slot: "face", price: 25 },
  { id: "scarf_a", name: "Atkı A", slot: "neck", price: 20 },
  { id: "scarf_b", name: "Atkı B", slot: "neck", price: 20 },
  { id: "headphones_a", name: "Kulaklık A", slot: "ears", price: 35 },
  { id: "headphones_b", name: "Kulaklık B", slot: "ears", price: 40 },
  { id: "magnifier", name: "Büyüteç", slot: "hand", price: 25 },
  { id: "pencil", name: "Kalem", slot: "hand", price: 15 },
];

const totalRounds = 10;
let voices = [];
let deck = [];
let current = null;
let currentMode = null;
let currentRound = 0;
let score = 0;
let hasAnswered = false;
let isSpeaking = false;
let revealedHints = 1;
let playerState = loadPlayerState();
let lastReward = 0;
let hedgehogAnimationTimer = null;
let hedgehogFrameStep = 0;
let hedgehogBlinkTimer = null;
let hedgehogGestureTimer = null;
let hedgehogIdleTimer = null;
let hedgehogIdleStep = 0;
let hedgehogOrthographyTimer = null;
let hedgehogOrthographyFrameTimer = null;
let hedgehogTriviaTimer = null;
let hedgehogTriviaFrameTimer = null;
let hedgehogPassiveMode = "";

const modeEyebrow = document.querySelector("#modeEyebrow");
const modeMenu = document.querySelector("#modeMenu");
const playArea = document.querySelector("#playArea");
const shopPanel = document.querySelector("#shopPanel");
const backButton = document.querySelector("#backButton");
const roundLabel = document.querySelector("#roundLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const leafLabel = document.querySelector("#leafLabel");
const shopLeafLabel = document.querySelector("#shopLeafLabel");
const dressButton = document.querySelector("#dressButton");
const shopItems = document.querySelector("#shopItems");
const shopBackButton = document.querySelector("#shopBackButton");
const listenButton = document.querySelector("#listenButton");
const hintButton = document.querySelector("#hintButton");
const challengeLabel = document.querySelector("#challengeLabel");
const promptText = document.querySelector("#promptText");
const stageCharacter = document.querySelector("#stageCharacter");
const sampleText = document.querySelector("#sampleText");
const hintList = document.querySelector("#hintList");
const choices = document.querySelector("#choices");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultMeta = document.querySelector("#resultMeta");
const resultFact = document.querySelector("#resultFact");
const nextButton = document.querySelector("#nextButton");
const finalPanel = document.querySelector("#finalPanel");
const finalTitle = document.querySelector("#finalTitle");
const finalText = document.querySelector("#finalText");
const rewardText = document.querySelector("#rewardText");
const restartButton = document.querySelector("#restartButton");
const menuButton = document.querySelector("#menuButton");
const voiceNotice = document.querySelector("#voiceNotice");
const canvas = document.querySelector("#waveCanvas");
const ctx = canvas.getContext("2d");
const synth = window.speechSynthesis || null;

function loadPlayerState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved.leaves === "number") {
      const normalized = {
        leaves: Math.max(saved.leaves, starterLeaves),
        owned: Array.isArray(saved.owned) ? saved.owned : [],
        equipped: saved.equipped && typeof saved.equipped === "object" ? saved.equipped : {},
      };
      localStorage.setItem(storageKey, JSON.stringify(normalized));
      return normalized;
    }
  } catch {
    // Ignore broken saves and start fresh.
  }
  return { leaves: starterLeaves, owned: [], equipped: {} };
}

function savePlayerState() {
  localStorage.setItem(storageKey, JSON.stringify(playerState));
}

function updateLeafLabels() {
  leafLabel.textContent = `${playerState.leaves} yaprak`;
  shopLeafLabel.textContent = `${playerState.leaves} yaprak`;
}

function applyEquippedItems() {
  const wearClasses = shopItemsData.map((item) => `wear-${item.id}`);
  document.querySelectorAll(".character-hedgehog").forEach((character) => {
    character.classList.remove(...wearClasses);
    Object.values(playerState.equipped).forEach((itemId) => {
      if (itemId) character.classList.add(`wear-${itemId}`);
    });
  });
}

function setHedgehogImage(frame) {
  document.querySelectorAll(".hedgehog-img").forEach((image) => {
    image.src = frame;
  });
}

function startHedgehogAnimation(mode = "menu") {
  if (mode === "speaking") {
    startHedgehogTalking();
    return;
  }

  if (hedgehogPassiveMode !== mode) {
    clearHedgehogPassiveTimers();
    hedgehogPassiveMode = mode;
  }

  stopHedgehogTalking();
  startHedgehogIdle();
  scheduleHedgehogBlink();
  if (mode === "orthography") scheduleHedgehogOrthographyScan();
  else if (mode === "trivia") scheduleHedgehogTriviaThink();
  else scheduleHedgehogGesture();
}

function startHedgehogTalking() {
  clearHedgehogPassiveTimers();
  hedgehogPassiveMode = "speaking";
  if (hedgehogAnimationTimer) return;

  hedgehogFrameStep = 0;
  setHedgehogImage(hedgehogSpeakingFrames[hedgehogTalkFrames[0]]);
  hedgehogAnimationTimer = window.setInterval(() => {
    hedgehogFrameStep = (hedgehogFrameStep + 1) % hedgehogTalkFrames.length;
    setHedgehogImage(hedgehogSpeakingFrames[hedgehogTalkFrames[hedgehogFrameStep]]);
  }, 135);
}

function stopHedgehogTalking() {
  if (!hedgehogAnimationTimer) return;
  window.clearInterval(hedgehogAnimationTimer);
  hedgehogAnimationTimer = null;
  hedgehogFrameStep = 0;
}

function stopHedgehogAnimation() {
  stopHedgehogTalking();
  clearHedgehogPassiveTimers();
  hedgehogPassiveMode = "";
}

function clearHedgehogPassiveTimers() {
  window.clearTimeout(hedgehogBlinkTimer);
  window.clearTimeout(hedgehogGestureTimer);
  window.clearTimeout(hedgehogOrthographyTimer);
  window.clearTimeout(hedgehogOrthographyFrameTimer);
  window.clearTimeout(hedgehogTriviaTimer);
  window.clearTimeout(hedgehogTriviaFrameTimer);
  window.clearInterval(hedgehogIdleTimer);
  hedgehogBlinkTimer = null;
  hedgehogGestureTimer = null;
  hedgehogOrthographyTimer = null;
  hedgehogOrthographyFrameTimer = null;
  hedgehogTriviaTimer = null;
  hedgehogTriviaFrameTimer = null;
  hedgehogIdleTimer = null;
}

function startHedgehogIdle() {
  if (hedgehogIdleTimer) return;

  hedgehogIdleStep = 0;
  setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
  hedgehogIdleTimer = window.setInterval(() => {
    if (isSpeaking) return;
    hedgehogIdleStep = (hedgehogIdleStep + 1) % hedgehogIdleFrames.length;
    setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
  }, 850);
}

function scheduleHedgehogBlink() {
  if (hedgehogBlinkTimer) return;

  const delay = 5000 + Math.random() * 2000;
  hedgehogBlinkTimer = window.setTimeout(() => {
    hedgehogBlinkTimer = null;
    if (!isSpeaking && !hedgehogOrthographyFrameTimer && !hedgehogTriviaFrameTimer) {
      setHedgehogImage(hedgehogBlinkFrame);
      window.setTimeout(() => {
        if (!isSpeaking) setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
      }, 180);
    }
    scheduleHedgehogBlink();
  }, delay);
}

function scheduleHedgehogGesture() {
  if (hedgehogGestureTimer) return;

  const delay = 18000 + Math.random() * 18000;
  hedgehogGestureTimer = window.setTimeout(() => {
    hedgehogGestureTimer = null;
    if (!isSpeaking && Math.random() > 0.35) {
      setHedgehogImage(hedgehogGestureFrame);
      window.setTimeout(() => {
        if (!isSpeaking) setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
      }, 900);
    }
    scheduleHedgehogGesture();
  }, delay);
}

function scheduleHedgehogOrthographyScan() {
  if (hedgehogOrthographyTimer) return;

  const delay = 5200 + Math.random() * 2600;
  hedgehogOrthographyTimer = window.setTimeout(() => {
    hedgehogOrthographyTimer = null;
    playHedgehogOrthographyScan();
    scheduleHedgehogOrthographyScan();
  }, delay);
}

function playHedgehogOrthographyScan() {
  if (isSpeaking || currentMode !== "orthography" || hedgehogOrthographyFrameTimer) return;

  window.clearInterval(hedgehogIdleTimer);
  hedgehogIdleTimer = null;
  let frameStep = 0;
  const showNextFrame = () => {
    setHedgehogImage(hedgehogOrthographyFrames[hedgehogOrthographyScanFrames[frameStep]]);
    frameStep += 1;
    if (frameStep >= hedgehogOrthographyScanFrames.length) {
      hedgehogOrthographyFrameTimer = null;
      hedgehogIdleStep = 0;
      window.setTimeout(() => {
        if (currentMode === "orthography" && !isSpeaking) {
          setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
          startHedgehogIdle();
        }
      }, 70);
      return;
    }
    const delay = frameStep >= hedgehogOrthographyScanFrames.length - 2 ? 85 : 160;
    hedgehogOrthographyFrameTimer = window.setTimeout(showNextFrame, delay);
  };
  showNextFrame();
}

function scheduleHedgehogTriviaThink() {
  if (hedgehogTriviaTimer) return;

  const delay = 4800 + Math.random() * 2600;
  hedgehogTriviaTimer = window.setTimeout(() => {
    hedgehogTriviaTimer = null;
    playHedgehogTriviaThink();
    scheduleHedgehogTriviaThink();
  }, delay);
}

function playHedgehogTriviaThink() {
  if (isSpeaking || currentMode !== "trivia" || hedgehogTriviaFrameTimer) return;

  window.clearInterval(hedgehogIdleTimer);
  hedgehogIdleTimer = null;
  let frameStep = 0;
  const showNextFrame = () => {
    setHedgehogImage(hedgehogTriviaFrames[hedgehogTriviaThinkFrames[frameStep]]);
    frameStep += 1;
    if (frameStep >= hedgehogTriviaThinkFrames.length) {
      hedgehogTriviaFrameTimer = null;
      hedgehogIdleStep = 0;
      window.setTimeout(() => {
        if (currentMode === "trivia" && !isSpeaking) {
          setHedgehogImage(hedgehogIdleFrames[hedgehogIdleStep]);
          startHedgehogIdle();
        }
      }, 80);
      return;
    }
    hedgehogTriviaFrameTimer = window.setTimeout(showNextFrame, 150);
  };
  showNextFrame();
}

function renderShop() {
  updateLeafLabels();
  applyEquippedItems();
  shopItems.innerHTML = "";

  shopItemsData.forEach((item) => {
    const owned = playerState.owned.includes(item.id);
    const equipped = playerState.equipped[item.slot] === item.id;
    const card = document.createElement("article");
    card.className = "shop-item";

    const title = document.createElement("strong");
    title.textContent = item.name;
    const meta = document.createElement("span");
    meta.textContent = owned ? slotLabel(item.slot) : `${item.price} yaprak · ${slotLabel(item.slot)}`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = owned ? "" : "primary-shop";
    button.textContent = owned ? (equipped ? "Çıkar" : "Tak") : "Satın al";
    button.disabled = !owned && playerState.leaves < item.price;
    button.addEventListener("click", () => handleShopItem(item));

    card.append(title, meta, button);
    shopItems.append(card);
  });
}

function slotLabel(slot) {
  const labels = {
    head: "Baş",
    face: "Yüz",
    neck: "Boyun",
    ears: "Kulak",
    hand: "El",
  };
  return labels[slot] || slot;
}

function handleShopItem(item) {
  const owned = playerState.owned.includes(item.id);
  const equipped = playerState.equipped[item.slot] === item.id;

  if (!owned) {
    if (playerState.leaves < item.price) return;
    playerState.leaves -= item.price;
    playerState.owned.push(item.id);
    playerState.equipped[item.slot] = item.id;
  } else if (equipped) {
    delete playerState.equipped[item.slot];
  } else {
    playerState.equipped[item.slot] = item.id;
  }

  savePlayerState();
  renderShop();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function loadVoices() {
  voices = synth ? synth.getVoices() : [];
}

function getVoiceFor(language) {
  const exact = voices.find((voice) => voice.lang === language.code);
  const baseCode = language.code.split("-")[0];
  return exact || voices.find((voice) => voice.lang.startsWith(baseCode));
}

function createDeck(mode) {
  if (mode !== "listening") return shuffle(languages).slice(0, totalRounds);

  const playable = languages.filter((language) => getVoiceFor(language));
  const source = playable.length >= totalRounds ? playable : languages;
  return shuffle(source).slice(0, totalRounds);
}

function startGame(mode = currentMode || "listening") {
  if (synth) synth.cancel();
  document.body.classList.remove("is-menu-view", "is-shop-view");
  document.body.classList.add("is-game-view");
  currentMode = mode;
  deck = createDeck(mode);
  currentRound = 0;
  score = 0;
  modeMenu.hidden = true;
  shopPanel.hidden = true;
  playArea.hidden = false;
  backButton.hidden = false;
  finalPanel.hidden = true;
  resultPanel.hidden = true;
  nextButton.textContent = "Sonraki tur";
  modeEyebrow.textContent = modes[mode].eyebrow;
  startRound();
}

function showMenu() {
  if (synth) synth.cancel();
  document.body.classList.remove("is-game-view", "is-shop-view");
  document.body.classList.add("is-menu-view");
  resetListenButton();
  currentMode = null;
  updateCharacterState();
  modeMenu.hidden = false;
  playArea.hidden = true;
  shopPanel.hidden = true;
  backButton.hidden = true;
  modeEyebrow.textContent = "Mini dil oyunları";
  roundLabel.textContent = "Mod seç";
  scoreLabel.textContent = "0 puan";
  updateLeafLabels();
  applyEquippedItems();
  startHedgehogAnimation("menu");
}

function showShop() {
  if (synth) synth.cancel();
  document.body.classList.remove("is-menu-view", "is-game-view");
  document.body.classList.add("is-shop-view");
  resetListenButton();
  currentMode = null;
  modeMenu.hidden = true;
  playArea.hidden = true;
  shopPanel.hidden = false;
  backButton.hidden = false;
  modeEyebrow.textContent = "Kirpi gardırobu";
  roundLabel.textContent = "Mağaza";
  scoreLabel.textContent = "Süsleme";
  renderShop();
  startHedgehogAnimation("shop");
}

function startRound() {
  current = deck[currentRound];
  hasAnswered = false;
  revealedHints = 1;
  resultPanel.hidden = true;
  finalPanel.hidden = true;
  choices.hidden = false;
  roundLabel.textContent = `Tur ${currentRound + 1}/${totalRounds}`;
  scoreLabel.textContent = `${score} puan`;
  promptText.textContent = modes[currentMode].prompt;
  voiceNotice.textContent = "";
  challengeLabel.textContent = current.challenge;
  nextButton.textContent = currentRound === totalRounds - 1 ? "Sonucu gör" : "Sonraki tur";
  updateCharacterState();
  configureModeStage();
  renderChoices();
}

function updateCharacterState() {
  stageCharacter.className = `stage-character character-${currentMode || "menu"}`;
  stageCharacter.classList.toggle("is-speaking", isSpeaking);
  applyEquippedItems();
  startHedgehogAnimation(isSpeaking ? "speaking" : currentMode || "menu");
}

function configureModeStage() {
  listenButton.hidden = currentMode !== "listening";
  hintButton.hidden = currentMode !== "trivia";
  sampleText.hidden = currentMode === "listening" || currentMode === "trivia";
  hintList.hidden = currentMode !== "trivia";

  if (currentMode === "listening") {
    listenButton.disabled = !synth;
    sampleText.textContent = "";
    hintList.innerHTML = "";
    if (!synth) voiceNotice.textContent = "Bu tarayıcı sesli okuma desteklemiyor.";
    return;
  }

  resetListenButton();

  if (currentMode === "orthography") {
    sampleText.textContent = current.scriptSample;
    voiceNotice.textContent = current.scriptLabel;
    hintList.innerHTML = "";
    return;
  }

  renderHints();
}

function renderHints() {
  hintList.innerHTML = "";
  current.hints.slice(0, revealedHints).forEach((hint, index) => {
    const item = document.createElement("p");
    item.textContent = `${index + 1}. ${hint}`;
    hintList.append(item);
  });
  const nextPenalty = revealedHints === 1 ? "-3 puan" : "-6 puan";
  hintButton.textContent = revealedHints < current.hints.length
    ? `Ek ipucu al (${nextPenalty})`
    : "Tüm ipuçları açık";
  hintButton.disabled = revealedHints >= current.hints.length || hasAnswered;
  voiceNotice.textContent = revealedHints === 1
    ? "İlk ipucu bedava. Ek ipuçları bu turdaki puanı düşürür."
    : `${revealedHints} ipucu açık. Bu tur en fazla ${pointsForCurrentTrivia()} puan.`;
}

function revealHint() {
  if (hasAnswered || currentMode !== "trivia" || revealedHints >= current.hints.length) return;
  revealedHints += 1;
  renderHints();
}

function pointsForCurrentTrivia() {
  return Math.max(4, 10 - (revealedHints - 1) * 3);
}

function renderChoices() {
  const wrongOptions = shuffle(languages.filter((language) => language.name !== current.name)).slice(0, 3);
  const options = shuffle([current, ...wrongOptions]);
  choices.innerHTML = "";

  options.forEach((language) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = language.name;
    button.addEventListener("click", () => chooseLanguage(language, button));
    choices.append(button);
  });
}

function speakCurrentPhrase() {
  if (!synth || isSpeaking || currentMode !== "listening") return;

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(current.phrase);
  const voice = getVoiceFor(current);
  utterance.lang = current.code;
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (voice) {
    utterance.voice = voice;
    voiceNotice.textContent = "";
  } else {
    voiceNotice.textContent = `${current.name} sesi bulunamadı; tarayıcı en yakın sesi kullanacak.`;
  }

  const markSpeaking = () => {
    isSpeaking = true;
    updateCharacterState();
    listenButton.disabled = true;
    listenButton.querySelector(".button-icon").textContent = "■";
  };

  utterance.onstart = markSpeaking;
  utterance.onend = resetListenButton;
  utterance.onerror = () => {
    voiceNotice.textContent = "Ses oynatılamadı. Tarayıcı ses ayarlarını kontrol et.";
    resetListenButton();
  };

  markSpeaking();
  synth.speak(utterance);
}

function resetListenButton() {
  isSpeaking = false;
  updateCharacterState();
  listenButton.disabled = !synth && currentMode === "listening";
  listenButton.querySelector(".button-icon").textContent = "▶";
}

function chooseLanguage(language, selectedButton) {
  if (hasAnswered) return;

  hasAnswered = true;
  if (synth) synth.cancel();
  resetListenButton();
  hintButton.disabled = true;

  const isCorrect = language.name === current.name;
  const roundPoints = currentMode === "trivia" ? pointsForCurrentTrivia() : 10;
  if (isCorrect) score += roundPoints;

  [...choices.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.name) button.classList.add("correct");
  });

  if (!isCorrect) selectedButton.classList.add("wrong");

  scoreLabel.textContent = `${score} puan`;
  resultTitle.textContent = isCorrect
    ? `Doğru: ${current.name} (+${roundPoints})`
    : `Yakındı. Doğru cevap: ${current.name}`;
  resultMeta.textContent = current.family;
  resultFact.textContent = current.fact;
  resultPanel.hidden = false;
}

function goNext() {
  currentRound += 1;
  if (currentRound >= totalRounds) {
    showFinal();
    return;
  }
  startRound();
}

function showFinal() {
  resultPanel.hidden = true;
  choices.hidden = true;
  finalPanel.hidden = false;
  roundLabel.textContent = "Tamamlandı";
  finalTitle.textContent = `${score}/${totalRounds * 10} puan`;
  lastReward = calculateLeafReward();
  playerState.leaves += lastReward;
  savePlayerState();
  updateLeafLabels();
  rewardText.textContent = `+${lastReward} yaprak kazandın. Kirpini süslemeyi unutma.`;

  const copy = modes[currentMode];
  if (score >= 75) finalText.textContent = copy.finalHigh;
  else if (score >= 45) finalText.textContent = copy.finalMid;
  else finalText.textContent = copy.finalLow;
}

function calculateLeafReward() {
  const correctishReward = Math.floor(score / 10) * 2;
  const highScoreBonus = score >= 80 ? 5 : 0;
  const perfectBonus = score >= totalRounds * 10 ? 10 : 0;
  return correctishReward + highScoreBonus + perfectBonus;
}

function drawWave(time = 0) {
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const centerY = height / 2;
  const amp = isSpeaking ? 58 : currentMode === "orthography" ? 18 : 30;
  const speed = time / 360;

  for (let layer = 0; layer < 4; layer += 1) {
    ctx.beginPath();
    ctx.strokeStyle = layer % 2 === 0
      ? `rgba(236, 95, 149, ${0.42 - layer * 0.06})`
      : `rgba(92, 179, 206, ${0.38 - layer * 0.05})`;
    ctx.lineWidth = 3 - layer * 0.35;

    for (let x = 0; x <= width; x += 8) {
      const wave =
        Math.sin(x / (58 + layer * 14) + speed + layer * 20) * amp +
        Math.sin(x / (28 + layer * 8) - speed * 1.4) * (amp * 0.38);
      const y = centerY + wave * (0.45 + layer * 0.12);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  requestAnimationFrame(drawWave);
}

document.querySelectorAll(".mode-card[data-mode]").forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});

dressButton.addEventListener("click", showShop);
listenButton.addEventListener("click", speakCurrentPhrase);
hintButton.addEventListener("click", revealHint);
nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", () => startGame(currentMode));
menuButton.addEventListener("click", showMenu);
backButton.addEventListener("click", showMenu);
shopBackButton.addEventListener("click", showMenu);

loadVoices();
if (synth) {
  synth.onvoiceschanged = () => {
    const hadNoVoices = voices.length === 0;
    loadVoices();
    if (hadNoVoices && currentMode === "listening" && currentRound === 0 && !hasAnswered) {
      deck = createDeck("listening");
      startRound();
    }
  };
}

updateLeafLabels();
applyEquippedItems();
showMenu();
drawWave();
