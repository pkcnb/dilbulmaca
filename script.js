const languages = [
  {
    name: "Baskça",
    code: "eu-ES",
    family: "Dil ailesi: izole dil",
    challenge: "Ergatif tuzağı",
    phrase: "Gaurko haizeak mendien atzean istorio zaharrak esnatzen ditu.",
    fact: "Baskça Avrupa'nın en ünlü izole dillerinden biridir: bilinen büyük bir dil ailesine bağlanmaz ve ergatif-absolütif hizalanma kullanır.",
  },
  {
    name: "Gürcüce",
    code: "ka-GE",
    family: "Dil ailesi: Kartvel",
    challenge: "Kafkas ritmi",
    phrase: "დილით ქალაქის ძველი ქუჩები ნელა იღვიძებენ.",
    fact: "Gürcüce modern Mkhedruli yazısıyla yazılır; ayrıca patlamalı sessizlerin yanında ejektif ünsüzleriyle de ayırt edilir.",
  },
  {
    name: "Galce",
    code: "cy-GB",
    family: "Dil ailesi: Kelt",
    challenge: "Mutasyon alarmı",
    phrase: "Mae'r nos yn cario caneuon tawel dros y bryniau.",
    fact: "Galcede kelimenin başındaki ünsüz, cümledeki görevine göre değişebilir; bu olaya başlangıç mutasyonu denir.",
  },
  {
    name: "İzlandaca",
    code: "is-IS",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Eski İskandinav izi",
    phrase: "Gamla húsið stendur kyrrt þegar vindurinn syngur.",
    fact: "İzlandaca, çekim sistemi ve kelime hazinesi açısından Eski Norsçaya modern İskandinav dillerinin çoğundan daha yakın durur.",
  },
  {
    name: "Fince",
    code: "fi-FI",
    family: "Dil ailesi: Ural",
    challenge: "Vaka yağmuru",
    phrase: "Hiljainen järvi heijastaa aamun vaaleaa valoa.",
    fact: "Fince edatlar yerine çoğu zaman isim durum eklerini kullanır; içeride, içeriye ve içeriden gibi ayrımlar eklerle kurulur.",
  },
  {
    name: "Macarca",
    code: "hu-HU",
    family: "Dil ailesi: Ural",
    challenge: "Ünlü uyumu",
    phrase: "A régi tér felett lassan megérkezik az este.",
    fact: "Macarcada birçok ekin biçimi kökteki ünlülere göre değişir; buna ünlü uyumu denir ve ek seçimini kulağa göre yönetir.",
  },
  {
    name: "Lehçe",
    code: "pl-PL",
    family: "Dil ailesi: Batı Slav",
    challenge: "Sessiz kümesi",
    phrase: "W starym ogrodzie cichy deszcz budzi wspomnienia.",
    fact: "Lehçede burunsu ünlüler yazıda hâlâ görünür: ą ve ę harfleri, Slav dilleri arasında dikkat çekici bir iz bırakır.",
  },
  {
    name: "Çekçe",
    code: "cs-CZ",
    family: "Dil ailesi: Batı Slav",
    challenge: "Ř testi",
    phrase: "Na nádraží čeká vlak pod šedým ranním nebem.",
    fact: "Çekçedeki ř sesi çok ayırt edicidir: titreşimli bir r ile sürtünmeli bir sesin birleşimi gibi duyulur.",
  },
  {
    name: "Romence",
    code: "ro-RO",
    family: "Dil ailesi: Roman",
    challenge: "Balkan Latincesi",
    phrase: "Lumina serii cade încet peste acoperișurile vechi.",
    fact: "Romence bir Roman dilidir ama Balkan dil alanıyla temas yüzünden ertelenmiş tanımlık gibi komşu dillere benzeyen özellikler taşır.",
  },
  {
    name: "Katalanca",
    code: "ca-ES",
    family: "Dil ailesi: Roman",
    challenge: "İspanyolca değil",
    phrase: "La llum del vespre dibuixa ombres sobre la plaça.",
    fact: "Katalanca, İspanyolcanın lehçesi değildir; Oksitanca ile tarihsel yakınlıkları olan ayrı bir Roman dilidir.",
  },
  {
    name: "Yunanca",
    code: "el-GR",
    family: "Dil ailesi: Helen",
    challenge: "Tek başına dal",
    phrase: "Το φως της αυγής αλλάζει το χρώμα της θάλασσας.",
    fact: "Yunanca, Hint-Avrupa içinde kendi başına Helen kolunu temsil eder ve yazılı tarihi üç bin yılı aşan bir süreklilik gösterir.",
  },
  {
    name: "İbranice",
    code: "he-IL",
    family: "Dil ailesi: Sami",
    challenge: "Kök kalıp oyunu",
    phrase: "האור הקטן משנה את פני הרחוב בבוקר.",
    fact: "İbranice, Sami dillerine özgü kök-kalıp sistemini kullanır; çoğu kelime üç ünsüzlü bir kökün farklı kalıplara girmesiyle oluşur.",
  },
  {
    name: "Tayca",
    code: "th-TH",
    family: "Dil ailesi: Kra-Dai",
    challenge: "Ton mayını",
    phrase: "แสงเช้าทำให้เมืองเก่าดูอ่อนโยนขึ้น.",
    fact: "Tayca tonal bir dildir; hecenin tonu anlamı değiştirebilir ve yazı sistemi ton ipuçlarını ünsüz sınıflarıyla birlikte kodlar.",
  },
  {
    name: "Vietnamca",
    code: "vi-VN",
    family: "Dil ailesi: Austroasya",
    challenge: "Altı ton",
    phrase: "Ánh sáng buổi sớm làm con phố trở nên yên tĩnh.",
    fact: "Vietnamca Latin alfabesi kullanır ama tonları ve ses ayrımlarını yoğun aksan işaretleriyle yazar.",
  },
  {
    name: "Endonezce",
    code: "id-ID",
    family: "Dil ailesi: Avustronezya",
    challenge: "Ek mi, tekrar mı?",
    phrase: "Angin sore membawa cerita dari pulau yang jauh.",
    fact: "Endonezcede çoğulluk her zaman ayrı bir ekle değil, bazen kelime tekrarıyla kurulur: buku-buku 'kitaplar' gibi.",
  },
  {
    name: "Ukraynaca",
    code: "uk-UA",
    family: "Dil ailesi: Doğu Slav",
    challenge: "Kiril ayrımı",
    phrase: "Тиха вулиця прокидається під теплим ранковим світлом.",
    fact: "Ukraynaca, Rusçayla aynı ailede olsa da ґ, є, і, ї gibi harfleriyle ve ses sistemiyle kolayca ayırt edilebilir.",
  },
  {
    name: "Danca",
    code: "da-DK",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Stød şüphesi",
    phrase: "Den lille havn bliver stille, når aftenen falder på.",
    fact: "Dancada stød denen gırtlaksı vurgu anlam ayırt edebilir; kulağa çok kısa bir kesinti gibi gelebilir.",
  },
  {
    name: "Norveççe",
    code: "nb-NO",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Melodik vurgu",
    phrase: "Fjorden ligger stille under den klare morgenhimmelen.",
    fact: "Norveççede birçok lehçede perde aksanı vardır; aynı ses dizisi farklı melodiyle farklı kelimelere dönüşebilir.",
  },
  {
    name: "İsveççe",
    code: "sv-SE",
    family: "Dil ailesi: Kuzey Cermen",
    challenge: "Şarkılı aksan",
    phrase: "Den gamla bron speglar sig i det kalla vattnet.",
    fact: "İsveççe de perde aksanıyla ünlüdür; bu yüzden bazı kelimeler Türkçe kulağa neredeyse melodik bir iniş çıkışla gelir.",
  },
  {
    name: "Slovakça",
    code: "sk-SK",
    family: "Dil ailesi: Batı Slav",
    challenge: "Uzun hece kuralı",
    phrase: "Tichá rieka nesie tiene starých stromov.",
    fact: "Slovakçada 'ritmik kural' denen eğilim, art arda gelen uzun heceleri sınırlayarak ek biçimlerini etkileyebilir.",
  },
];

const totalRounds = 10;
let voices = [];
let deck = [];
let current = null;
let currentRound = 0;
let score = 0;
let hasAnswered = false;
let isSpeaking = false;

const roundLabel = document.querySelector("#roundLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const listenButton = document.querySelector("#listenButton");
const challengeLabel = document.querySelector("#challengeLabel");
const choices = document.querySelector("#choices");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultMeta = document.querySelector("#resultMeta");
const resultFact = document.querySelector("#resultFact");
const nextButton = document.querySelector("#nextButton");
const finalPanel = document.querySelector("#finalPanel");
const finalTitle = document.querySelector("#finalTitle");
const finalText = document.querySelector("#finalText");
const restartButton = document.querySelector("#restartButton");
const voiceNotice = document.querySelector("#voiceNotice");
const canvas = document.querySelector("#waveCanvas");
const ctx = canvas.getContext("2d");
const synth = window.speechSynthesis || null;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function loadVoices() {
  voices = synth ? synth.getVoices() : [];
  if (!synth) {
    voiceNotice.textContent = "Bu tarayıcı sesli okuma desteklemiyor.";
    listenButton.disabled = true;
  }
}

function getVoiceFor(language) {
  const exact = voices.find((voice) => voice.lang === language.code);
  const baseCode = language.code.split("-")[0];
  return exact || voices.find((voice) => voice.lang.startsWith(baseCode));
}

function createDeck() {
  const playable = languages.filter((language) => getVoiceFor(language));
  const source = playable.length >= totalRounds ? playable : languages;
  return shuffle(source).slice(0, totalRounds);
}

function startGame() {
  if (synth) synth.cancel();
  deck = createDeck();
  currentRound = 0;
  score = 0;
  finalPanel.hidden = true;
  resultPanel.hidden = true;
  nextButton.textContent = "Sonraki tur";
  startRound();
}

function startRound() {
  current = deck[currentRound];
  hasAnswered = false;
  resultPanel.hidden = true;
  finalPanel.hidden = true;
  roundLabel.textContent = `Tur ${currentRound + 1}/${totalRounds}`;
  scoreLabel.textContent = `${score} puan`;
  voiceNotice.textContent = "";
  challengeLabel.textContent = current.challenge;
  renderChoices();
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
  if (!synth || isSpeaking) return;

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

  utterance.onstart = () => {
    isSpeaking = true;
    listenButton.disabled = true;
    listenButton.querySelector(".button-icon").textContent = "■";
  };

  utterance.onend = resetListenButton;
  utterance.onerror = () => {
    voiceNotice.textContent = "Ses oynatılamadı. Tarayıcı ses ayarlarını kontrol et.";
    resetListenButton();
  };

  synth.speak(utterance);
}

function resetListenButton() {
  isSpeaking = false;
  listenButton.disabled = false;
  listenButton.querySelector(".button-icon").textContent = "▶";
}

function chooseLanguage(language, selectedButton) {
  if (hasAnswered) return;

  hasAnswered = true;
  if (synth) synth.cancel();
  resetListenButton();

  const isCorrect = language.name === current.name;
  if (isCorrect) score += 10;

  [...choices.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.name) button.classList.add("correct");
  });

  if (!isCorrect) selectedButton.classList.add("wrong");

  scoreLabel.textContent = `${score} puan`;
  resultTitle.textContent = isCorrect
    ? `Doğru: ${current.name}`
    : `Yakındı. Doğru cevap: ${current.name}`;
  resultMeta.textContent = current.family;
  resultFact.textContent = current.fact;
  resultPanel.hidden = false;

  if (currentRound === totalRounds - 1) {
    nextButton.textContent = "Sonucu gör";
  }
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
  choices.innerHTML = "";
  finalPanel.hidden = false;
  roundLabel.textContent = "Tamamlandı";
  finalTitle.textContent = `${score}/${totalRounds * 10} puan`;

  if (score >= 60) {
    finalText.textContent = "Kulakların gayet keskin. Dillerin ritmini, vurgu yerlerini ve ses dokusunu iyi yakalıyorsun.";
  } else if (score >= 35) {
    finalText.textContent = "Güzel başlangıç. Birkaç tur daha oynadığında benzer ses ailelerini ayırmak çok daha kolaylaşacak.";
  } else {
    finalText.textContent = "Bu oyun ilk başta şaşırtıcı olabilir. Yeniden oynadığında özellikle ritme ve harf tınılarına odaklan.";
  }
}

function drawWave(time = 0) {
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const centerY = height / 2;
  const amp = isSpeaking ? 58 : 28;
  const speed = time / 360;

  for (let layer = 0; layer < 4; layer += 1) {
    ctx.beginPath();
    const hueShift = layer * 26;
    ctx.strokeStyle = layer % 2 === 0
      ? `rgba(92, 200, 167, ${0.56 - layer * 0.08})`
      : `rgba(243, 201, 105, ${0.42 - layer * 0.06})`;
    ctx.lineWidth = 3 - layer * 0.35;

    for (let x = 0; x <= width; x += 8) {
      const wave =
        Math.sin(x / (58 + layer * 14) + speed + hueShift) * amp +
        Math.sin(x / (28 + layer * 8) - speed * 1.4) * (amp * 0.38);
      const y = centerY + wave * (0.45 + layer * 0.12);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  requestAnimationFrame(drawWave);
}

listenButton.addEventListener("click", speakCurrentPhrase);
nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", startGame);

loadVoices();
if (synth) {
  synth.onvoiceschanged = () => {
    const hadNoVoices = voices.length === 0;
    loadVoices();
    if (hadNoVoices && currentRound === 0 && !hasAnswered) startGame();
  };
}

startGame();
drawWave();
