const reasons = [
  "put my life savings into a memecoin because a guy with a monkey pfp told me to",
  "my portfolio went from 6 figures to 3 figures in one candle",
  "i mass refreshed dexscreener for 9 hours and the chart moved 0.1%",
  "dev mass deleted twitter 47 seconds after launch",
  "i got rugged so many times i stopped counting after 30",
  "every single coin in my wallet is down 95% or more",
  "i told my girlfriend i was investing. she found my phantom wallet.",
  "i haven't slept more than 4 hours since i found pump.fun",
  "the only green in my portfolio is the color of the background on the app",
  "i sold my 100x at 2x because someone in a discord said \"top is in\"",
  "i mass bought a coin because the pfp was cute. it rugged in 11 seconds.",
  "my screen time report said 16 hours and 14 of them were dexscreener",
  "i got sniped on slot 0 and didn't even know what that meant until it was too late",
  "the dev rewards went straight to a binance deposit address",
  "i trusted a \"based dev\" who turned out to be 3 wallets in a trenchcoat",
  "i woke up at 4am for a launch that never launched",
  "the bubble map looked like a blood clot and i still bought",
  "my entire net worth is mass trapped in a token that will never graduate",
  "i mass ape'd into a coin called SAFU and it was not in fact safu",
  "i mass explained crypto to my parents and now they don't talk to me",
  "i mass lost more money this month than i made in 6 months at my job",
  "every \"alpha\" group i joined just front-ran me",
  "i got mass bundled and didn't realize until the chart was already at zero",
  "the only notification i get anymore is \"transaction failed\"",
  "i held through a 10x and sold at a loss",
  "i bought the dip and it dipped 80% more",
  "someone mass called me exit liquidity in a quote tweet and they were right",
  "i mass staked everything in a protocol that got exploited the next day",
  "my tax situation is so complicated that even my accountant quit",
  "i sent SOL to the wrong address and it was literally my own wallet from 2022",
  "the dev said \"stealth launch no bundlers\" and the top 10 wallets were all him",
  "i took a mass loan to buy crypto and now i owe money on an asset worth zero",
  "every time i think it's the bottom it keeps bottoming",
  "i mass paper-handed the one coin that actually went to a billion",
  "the chart looked bullish for exactly one candle and then it died",
  "i got mass added to 14 scam groups on telegram in one night",
  "i sold my car to buy more SOL at $240. SOL is now $67.",
  "i trusted an influencer who was literally paid to promote a rug",
  "the only person who made money from my trades was the MEV bot",
  "my watchlist has 200 tokens and every single one is red",
  "i mass spent 3 days researching a project and it rugged before i could buy",
  "i was mass convinced \"this time is different\" for the 47th time",
  "every friend i onboarded into crypto now hates me",
  "i haven't touched grass in so long i forgot what season it is"
];

let currentReason = '';
let siteUrl = '';
const reasonText = document.getElementById('reasonText');
const reasonCard = document.getElementById('reasonCard');
const doomBtn = document.getElementById('doomBtn');
const caBtn = document.getElementById('caBtn');
const twitterLink = document.getElementById('twitterLink');
const communityLink = document.getElementById('communityLink');
const toastEl = document.getElementById('toast');
const reasonsList = document.getElementById('reasonsList');

// Pick random reason
function randomReason() {
  let next;
  do {
    next = reasons[Math.floor(Math.random() * reasons.length)];
  } while (next === currentReason && reasons.length > 1);
  currentReason = next;
  reasonText.textContent = currentReason;
}

// Init
randomReason();

// Populate all reasons list
reasons.forEach(r => {
  const li = document.createElement('li');
  li.textContent = r;
  reasonsList.appendChild(li);
});

// Click card to change reason
reasonCard.addEventListener('click', randomReason);

// DoomPost button → Twitter intent
doomBtn.addEventListener('click', () => {
  const text = `${currentReason}. i'm done. $DOOMPOST`;
  const url = siteUrl || window.location.href;
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(intent, '_blank');
});

// Toast
function showToast(msg) {
  toastEl.textContent = msg || 'doom acknowledged.';
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2000);
}

// CA copy
let caAddress = '';
caBtn.addEventListener('click', () => {
  if (!caAddress) return;
  navigator.clipboard.writeText(caAddress).then(() => showToast());
});

// Load config from admin API
fetch('/api/config')
  .then(r => r.json())
  .then(cfg => {
    if (cfg.ca) {
      caAddress = cfg.ca;
      caBtn.textContent = 'CA';
      caBtn.title = cfg.ca;
    }
    if (cfg.twitter) {
      twitterLink.href = cfg.twitter;
    }
    if (cfg.community) {
      communityLink.href = cfg.community;
    }
    if (cfg.buy) {
      siteUrl = cfg.buy;
    }
  })
  .catch(() => {});
