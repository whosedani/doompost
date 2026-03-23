const reasons = [
  // Market & Charts (20)
  "i've been watching a 15-minute candle for 3 hours and it hasn't moved",
  "my portfolio is down 94% and i just got a notification that it can still go lower",
  "i bought the dip and the dip bought a dip and that dip bought a dip",
  "the only green in my portfolio is the color of my face",
  "i set a stop loss and the chart went through it like it wasn't there",
  "every coin i buy immediately reverses. i am the indicator.",
  "i longed. it dumped. i shorted. it pumped. i am the liquidity.",
  "my unrealized losses have unrealized losses",
  "the 1-minute chart gave me more anxiety than my entire 20s",
  "i zoom out to cope and it's worse on every timeframe",
  "my entry is someone else's take profit",
  "i panic sold at the exact bottom. again.",
  "i watched my bag go from $50k to $800 and told myself 'it's fine'",
  "the chart looks like my EKG when i check the chart",
  "i refreshed dexscreener 47 times in one minute and nothing changed",
  "i am mass red across every chain every token every timeframe",
  "i've been in a 'temporary dip' for 8 months",
  "my portfolio went down while the market went up. i am uniquely bad at this.",
  "the only pattern i recognize on charts is pain",
  "i turned $10k into $200 and called it 'learning experience'",

  // Pump.fun & Memecoins (20)
  "i aped a coin called $RUG and i'm genuinely surprised it rugged",
  "i've been exit liquidity for 14 different tokens today",
  "the dev mass deployed 30 tokens while i was still reading the first one's description",
  "every single coin i buy is bundled. every one.",
  "i checked the bubble map after buying. i am the small dot.",
  "the community was 5 wallets and a telegram bot",
  "i bought a token because a stranger on twitter used a fire emoji",
  "the token graduated and immediately went to zero. congrats.",
  "i spent 3 hours researching a coin that lasted 4 minutes",
  "the dev pulled liquidity while i was still writing my bullish thesis",
  "i trusted a pfp that was clearly AI-generated and i deserve this",
  "another day another 40,000 tokens on pump.fun and i somehow found the worst one",
  "i was early to a scam. that's not better.",
  "the 'strong community' was the dev talking to himself from 3 accounts",
  "i paid gas to buy a coin that was already dead",
  "snipers got in on slot 0 and i got in on slot hopeless",
  "i held through a 95% drop because 'the narrative is strong'",
  "i just funded a stranger's vacation and called it investing",
  "my entire thesis was 'funny name' and i lost $2,000",
  "i bought the top so perfectly that the chart used my entry as resistance",

  // Lifestyle & Health (20)
  "it's 4am and i'm watching a chart of a coin i don't even own",
  "i haven't seen sunlight in 3 days but i can recite every top holder's wallet",
  "my screen time is 16 hours and 14 of those were dexscreener",
  "i skipped dinner because 'the candle was forming'",
  "i woke up at 3am because my phone buzzed. it was a spam email. i checked the charts anyway.",
  "my sleep schedule is based on which timezone has the most volume",
  "i've consumed 6 energy drinks today and my portfolio is still red",
  "my girlfriend asked what i do for a living and i couldn't answer",
  "i spent my rent money on a memecoin and i'm pretending it's an investment",
  "i cancelled plans to watch a chart go sideways for 4 hours",
  "the bags under my eyes are heavier than the bags in my wallet",
  "i told myself 'just one more trade' 47 trades ago",
  "i haven't spoken to a real human in 3 days. my only conversations are in telegram groups.",
  "i dreamed about candlestick patterns. i need help.",
  "i'm eating instant noodles to have more money to ape into tokens that go to zero",
  "my mental health is inversely correlated with the BTC price",
  "i can feel my blood pressure rise every time i open phantom",
  "i ghosted my therapist to watch a pump. it dumped.",
  "i aged 10 years in 6 months of trading memecoins",
  "the only exercise i get is reaching for my phone to check charts",

  // CT & Social Media (20)
  "i took financial advice from an account with a monkey pfp and 12 followers",
  "CT said 'this is the one' about 400 different coins this month",
  "every alpha caller i follow is underwater worse than me",
  "the only engagement on my bullish tweet was 3 bot replies",
  "someone told me 'ngmi' and they were right",
  "i posted my loss and got ratio'd by a meme account",
  "the influencer who shilled the coin deleted his tweet. i can't delete my bags.",
  "i joined 15 telegram groups and they all turned out to be the same cabal",
  "the 'insider info' i got was public knowledge 3 hours ago",
  "my timeline is 100% doomposting and i'm adding to it",
  "i followed a 'smart money tracker' and it tracked me straight to zero",
  "every single 'CT is back' tweet is immediately followed by another dump",
  "the best performing thing in my portfolio is the screenshot of what it used to be",
  "i posted 'gm' and the market took it personally",
  "the trenches have trenches and i'm in the trench below that",
  "i've been saying 'markets will recover next week' for 3 months",
  "i RT'd a bullish thread and the coin rugged before i finished reading",
  "the only people replying to my posts are bots and people even more underwater than me",
  "i tweeted 'we're so back' and we were in fact not back",
  "everyone is leaving crypto. i'm leaving crypto. see you tomorrow."
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
