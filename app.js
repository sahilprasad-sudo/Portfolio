// ============================================================================
// Sahil Prasad — Interactive Apple-Style Portfolio & Crypto iOS Simulator Engine
// Extracted directly from /Crypto Swift source code & models
// ============================================================================

// 1. Real Market Data & News extracted from CoinModel.swift & CryptoNewsModel.swift
const MARKET_COINS = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    rank: 1,
    color: "#F7931A",
    currentPrice: 6140800,
    priceChangePercentage24H: 6.88,
    high24H: 6200000,
    low24H: 5900000,
    marketCap: "₹114.17T",
    volume: "₹6.72T",
    ath: "₹63,00,000",
    sparkline: [5800000, 5840000, 5810000, 5900000, 5980000, 6050000, 6140800]
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    rank: 2,
    color: "#627EEA",
    currentPrice: 284500,
    priceChangePercentage24H: 3.01,
    high24H: 289000,
    low24H: 274800,
    marketCap: "₹34.21T",
    volume: "₹2.18T",
    ath: "₹3,95,000",
    sparkline: [275000, 276200, 274900, 279000, 281500, 283100, 284500]
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    rank: 3,
    color: "#14F195",
    currentPrice: 18420,
    priceChangePercentage24H: 9.64,
    high24H: 18750,
    low24H: 16800,
    marketCap: "₹8.64T",
    volume: "₹742.5B",
    ath: "₹21,600",
    sparkline: [16800, 17050, 17300, 17190, 17800, 18150, 18420]
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "BNB",
    rank: 4,
    color: "#F3BA2F",
    currentPrice: 54200,
    priceChangePercentage24H: -1.42,
    high24H: 55300,
    low24H: 53800,
    marketCap: "₹7.91T",
    volume: "₹168.4B",
    ath: "₹60,400",
    sparkline: [55100, 54950, 55080, 54700, 54500, 54350, 54200]
  },
  {
    id: "arbitrum",
    symbol: "ARB",
    name: "Arbitrum",
    rank: 5,
    color: "#28A0F0",
    currentPrice: 78.2,
    priceChangePercentage24H: -3.58,
    high24H: 81.9,
    low24H: 77.1,
    marketCap: "₹312.4B",
    volume: "₹48.2B",
    ath: "₹198.50",
    sparkline: [81.1, 80.5, 79.8, 80.2, 79.1, 78.6, 78.2]
  },
  {
    id: "polygon",
    symbol: "POL",
    name: "Polygon",
    rank: 6,
    color: "#8247E5",
    currentPrice: 42.8,
    priceChangePercentage24H: 4.15,
    high24H: 43.5,
    low24H: 40.9,
    marketCap: "₹398.1B",
    volume: "₹39.4B",
    ath: "₹241.00",
    sparkline: [41.1, 41.0, 41.5, 41.9, 42.2, 42.5, 42.8]
  }
];

const NEWS_HEADLINES = [
  {
    source: "NewsData.io • Live Feed",
    title: "Institutional Inflows Push Bitcoin Above ₹61.4L Across Indian FIU Spot Exchanges",
    time: "12m ago"
  },
  {
    source: "DeFi Pulse • On-Chain",
    title: "Ethereum Layer-2 TVL Surges on Arbitrum & Base as Multi-Chain Gas Fees Hit Lows",
    time: "38m ago"
  },
  {
    source: "India VDA Policy • Tax Desk",
    title: "Understanding Sec 115BBH (30% Tax + 4% Cess) & 1% TDS u/s 194S for FY 2026-27",
    time: "1h ago"
  }
];

// 2. GoldRush Multi-Chain Portfolio Sample Assets (from PortfolioAssetModel.swift)
const PORTFOLIO_ASSETS = [
  {
    id: "eth-mainnet_native_eth",
    chain: "eth-mainnet",
    chainName: "Ethereum",
    chainBadge: "ETH",
    chainColor: "#627EEA",
    name: "Ether",
    symbol: "ETH",
    tokenBalance: 2.45,
    priceINR: 284500.0,
    price24hINR: 276200.0,
    valueINR: 697025.0,
    value24hINR: 676690.0,
    contract: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  },
  {
    id: "matic-mainnet_usdc",
    chain: "matic-mainnet",
    chainName: "Polygon",
    chainBadge: "POL",
    chainColor: "#8247E5",
    name: "USD Coin",
    symbol: "USDC",
    tokenBalance: 1850.0,
    priceINR: 86.45,
    price24hINR: 86.40,
    valueINR: 159932.5,
    value24hINR: 159840.0,
    contract: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359"
  },
  {
    id: "base-mainnet_cbeth",
    chain: "base-mainnet",
    chainName: "Base",
    chainBadge: "BASE",
    chainColor: "#0052FF",
    name: "Coinbase Wrapped Staked ETH",
    symbol: "cbETH",
    tokenBalance: 0.32,
    priceINR: 305200.0,
    price24hINR: 298000.0,
    valueINR: 97664.0,
    value24hINR: 95360.0,
    contract: "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22"
  },
  {
    id: "arbitrum-mainnet_arb",
    chain: "arbitrum-mainnet",
    chainName: "Arbitrum",
    chainBadge: "ARB",
    chainColor: "#28A0F0",
    name: "Arbitrum",
    symbol: "ARB",
    tokenBalance: 1240.0,
    priceINR: 78.2,
    price24hINR: 81.1,
    valueINR: 96968.0,
    value24hINR: 100564.0,
    contract: "0x912ce59144191c1204e64559fe8253a0e49e6548"
  },
  {
    id: "matic-mainnet_dust",
    chain: "matic-mainnet",
    chainName: "Polygon",
    chainBadge: "POL",
    chainColor: "#8247E5",
    name: "Polygon Gas Dust",
    symbol: "POL",
    tokenBalance: 1.4,
    priceINR: 42.8,
    price24hINR: 41.1,
    valueINR: 59.92,
    value24hINR: 57.54,
    contract: "0x0000000000000000000000000000000000001010"
  }
];

// 3. Initial VDA Trade Notes (from VDATaxModel.swift)
let vdaTradeNotes = [
  {
    id: "note-1",
    coinId: "bitcoin",
    coinSymbol: "BTC",
    coinName: "Bitcoin",
    investedAmountINR: 150000.0,
    buyPricePerUnitINR: 5450000.0,
    tokenQuantity: 150000.0 / 5450000.0,
    tdsPaidOnBuyINR: 0.0,
    exchangeType: "inrSpot",
    dateLabel: "18d ago",
    note: "Accumulated BTC on dip via INR spot"
  },
  {
    id: "note-2",
    coinId: "ethereum",
    coinSymbol: "ETH",
    coinName: "Ethereum",
    investedAmountINR: 80000.0,
    buyPricePerUnitINR: 245000.0,
    tokenQuantity: 80000.0 / 245000.0,
    tdsPaidOnBuyINR: 0.0,
    exchangeType: "inrSpot",
    dateLabel: "7d ago",
    note: "Pre-upgrade ETH position"
  },
  {
    id: "note-3",
    coinId: "solana",
    coinSymbol: "SOL",
    coinName: "Solana",
    investedAmountINR: 45000.0,
    buyPricePerUnitINR: 16800.0,
    tokenQuantity: 45000.0 / 16800.0,
    tdsPaidOnBuyINR: 450.0,
    exchangeType: "cryptoSwap",
    dateLabel: "36h ago",
    note: "Swapped USDT to SOL"
  }
];

// 4. Extracted Swift Code Snippets for Xcode Inspector
const SWIFT_FILES = {
  "HomeViewModel.swift": {
    path: "Crypto/Core/Home/ViewModels/HomeViewModel.swift",
    lines: "178 lines • Combine Reactive Pipeline",
    code: `<span class="code-cmt">//  HomeViewModel.swift — Created by Sahil Prasad</span>
<span class="code-kw">import</span> Foundation
<span class="code-kw">import</span> Combine
<span class="code-kw">import</span> SwiftUI

<span class="code-kw">class</span> <span class="code-type">HomeViewModel</span>: <span class="code-type">ObservableObject</span> {
    <span class="code-kw">@Published var</span> allCoins: [<span class="code-type">CoinModel</span>] = []
    <span class="code-kw">@Published var</span> filteredCoins: [<span class="code-type">CoinModel</span>] = []
    <span class="code-kw">@Published var</span> searchText: <span class="code-type">String</span> = <span class="code-str">""</span>
    <span class="code-kw">@Published var</span> sortOption: <span class="code-type">SortOption</span> = .rank
    <span class="code-kw">@Published var</span> filterOption: <span class="code-type">FilterOption</span> = .all
    <span class="code-kw">@Published var</span> favoriteCoinIDs: <span class="code-type">Set</span>&lt;<span class="code-type">String</span>&gt; = []

    <span class="code-kw">func</span> addSubscribers() {
        <span class="code-cmt">// Reactive 5-way Combine pipeline for instant UI updates</span>
        <span class="code-type">Publishers</span>.<span class="code-type">CombineLatest4</span>($allCoins, $searchText, $sortOption, $filterOption)
            .combineLatest($favoriteCoinIDs)
            .map { [<span class="code-kw">weak self</span>] (tuple, favorites) -> [<span class="code-type">CoinModel</span>] <span class="code-kw">in</span>
                <span class="code-kw">let</span> (coins, search, sort, filter) = tuple
                <span class="code-kw">return self</span>?.filterAndSortCoins(
                    coins: coins, search: search,
                    sort: sort, filter: filter, favorites: favorites
                ) ?? []
            }
            .receive(on: <span class="code-type">DispatchQueue</span>.main)
            .sink { [<span class="code-kw">weak self</span>] returnedCoins <span class="code-kw">in</span>
                <span class="code-kw">self</span>?.filteredCoins = returnedCoins
            }
            .store(in: &cancellables)
    }
}`
  },
  "GoldRushPortfolioService.swift": {
    path: "Crypto/Services/GoldRushPortfolioService.swift",
    lines: "372 lines • Multi-Chain Parallel Aggregation",
    code: `<span class="code-cmt">//  GoldRushPortfolioService.swift — Created by Sahil Prasad</span>
<span class="code-kw">import</span> Foundation
<span class="code-kw">import</span> Combine

<span class="code-kw">class</span> <span class="code-type">GoldRushPortfolioService</span>: <span class="code-type">ObservableObject</span> {
    <span class="code-kw">static let</span> refreshInterval: <span class="code-type">TimeInterval</span> = <span class="code-num">20</span> * <span class="code-num">60</span> <span class="code-cmt">// 20-min smart cache</span>
    <span class="code-kw">@Published var</span> selectedChain: <span class="code-type">PortfolioChain</span> = .allEVM
    <span class="code-kw">@Published var</span> assets: [<span class="code-type">PortfolioAsset</span>] = []

    <span class="code-kw">func</span> fetchPortfolio(force: <span class="code-type">Bool</span> = <span class="code-kw">false</span>) {
        <span class="code-kw">let</span> targetChains: [<span class="code-type">PortfolioChain</span>] = (selectedChain == .allEVM)
            ? <span class="code-type">PortfolioChain</span>.evmSubChains
            : [selectedChain]

        <span class="code-kw">let</span> publishers = targetChains.map { chain <span class="code-kw">in</span>
            fetchChainBalancesPublisher(address: walletAddress, chain: chain)
        }

        <span class="code-cmt">// Parallel multi-chain balance aggregation via MergeMany</span>
        <span class="code-type">Publishers</span>.<span class="code-type">MergeMany</span>(publishers)
            .collect()
            .receive(on: <span class="code-type">DispatchQueue</span>.main)
            .sink { [<span class="code-kw">weak self</span>] results <span class="code-kw">in</span>
                <span class="code-cmt">// Merges Ethereum, Polygon, Arbitrum, Base, Optimism, BSC, Avalanche</span>
                <span class="code-kw">self</span>?.processMultiChainResults(results)
            }
            .store(in: &fetchCancellables)
    }
}`
  },
  "VDATaxViewModel.swift": {
    path: "Crypto/Core/Tax/ViewModels/VDATaxViewModel.swift",
    lines: "312 lines • Sec 115BBH & 194S Engine",
    code: `<span class="code-cmt">//  VDATaxViewModel.swift — Created by Sahil Prasad</span>
<span class="code-kw">enum</span> <span class="code-type">IndiaVDATaxConstants</span> {
    <span class="code-kw">static let</span> flatTaxRate: <span class="code-type">Double</span> = <span class="code-num">0.30</span>       <span class="code-cmt">// Sec 115BBH 30% Flat Tax</span>
    <span class="code-kw">static let</span> cessRateOnTax: <span class="code-type">Double</span> = <span class="code-num">0.04</span>     <span class="code-cmt">// 4% Health & Education Cess</span>
    <span class="code-kw">static let</span> effectiveTaxRate: <span class="code-type">Double</span> = <span class="code-num">0.312</span> <span class="code-cmt">// 31.2% Effective Tax on Gains</span>
    <span class="code-kw">static let</span> tdsRate: <span class="code-type">Double</span> = <span class="code-num">0.01</span>          <span class="code-cmt">// Sec 194S 1% TDS on Transfer</span>
}

<span class="code-cmt">// Strictly enforces Sec 115BBH(2)(b): Losses cannot offset positive gains</span>
<span class="code-kw">func</span> computePortfolioSummary(allCoins: [<span class="code-type">CoinModel</span>]) -> <span class="code-type">PortfolioTaxSummary</span> {
    <span class="code-kw">for</span> note <span class="code-kw">in</span> tradeNotes {
        <span class="code-kw">let</span> live = livePriceINR(for: note, in: allCoins)
        <span class="code-kw">let</span> pnl = note.grossProfitOrLossINR(livePriceINR: live)
        <span class="code-kw">if</span> pnl > <span class="code-num">0</span> {
            gainsPool += pnl
            totalTax += note.totalTaxWithCessINR(livePriceINR: live)
        } <span class="code-kw">else if</span> pnl < <span class="code-num">0</span> {
            lossesPool += abs(pnl) <span class="code-cmt">// Isolated non-offsettable loss pool</span>
        }
    }
}`
  },
  "CoinDetailView.swift": {
    path: "Crypto/Core/Home/Views/CoinDetailView.swift",
    lines: "345 lines • Interactive Scrubbing Chart",
    code: `<span class="code-cmt">//  CoinDetailView.swift — Created by Sahil Prasad</span>
<span class="code-kw">.gesture</span>(
    <span class="code-type">DragGesture</span>(minimumDistance: <span class="code-num">0</span>)
        .onChanged { value <span class="code-kw">in</span>
            <span class="code-kw">let</span> clampedX = min(max(value.location.x, <span class="code-num">0</span>), width)
            dragLocationX = clampedX
            <span class="code-kw">let</span> fraction = clampedX / width
            <span class="code-kw">let</span> index = min(max(<span class="code-type">Int</span>(fraction * <span class="code-type">CGFloat</span>(prices.count - <span class="code-num">1</span>)), <span class="code-num">0</span>), prices.count - <span class="code-num">1</span>)
            <span class="code-kw">let</span> newPrice = prices[index]
            <span class="code-kw">if</span> selectedPrice != newPrice {
                selectedPrice = newPrice
                <span class="code-type">HapticManager</span>.impact(style: .light)
            }
        }
        .onEnded { _ <span class="code-kw">in</span>
            withAnimation(.spring()) {
                dragLocationX = <span class="code-kw">nil</span>
                selectedPrice = <span class="code-kw">nil</span>
            }
        }
)`
  }
};

// 5. Sahil Prasad's 12 Technical Skills Data
const SAHIL_SKILLS = [
  {
    name: "Swift & SwiftUI",
    category: "ios",
    badge: "Primary Stack",
    level: 96,
    span2: true,
    desc: " Declarative SwiftUI interfaces, custom GeometryReader charts, matchedGeometryEffect transitions, Combine reactive streams, and Haptic feedback systems."
  },
  {
    name: "iOS Architecture (MVVM)",
    category: "ios",
    badge: "Mobile Core",
    level: 95,
    span2: false,
    desc: "Clean separation of Views, ViewModels, and Services (CoinDataService, GoldRushPortfolioService, VDATaxViewModel) with persistent caching."
  },
  {
    name: "DSA in Java",
    category: "cs",
    badge: "Algorithms",
    level: 92,
    span2: false,
    desc: "Strong command over Trees, Graphs, Dynamic Programming, Heaps, Tries, and complexity-optimal problem solving in Java."
  },
  {
    name: "System Design",
    category: "cs",
    badge: "Architecture",
    level: 90,
    span2: true,
    desc: "Designing fault-tolerant distributed architectures, rate-limited API aggregators, 20-minute TTL caching layers, and multi-chain indexing pipelines."
  },
  {
    name: "Generative AI",
    category: "ai",
    badge: "AI Engineering",
    level: 91,
    span2: false,
    desc: "Building LLM-powered workflows, prompt engineering, RAG pipelines, intelligent code/financial assistants, and multi-modal integrations."
  },
  {
    name: "React",
    category: "web",
    badge: "Frontend UI",
    level: 89,
    span2: false,
    desc: "Component-driven SPAs, custom hooks, state management, and high-frame-rate interactive web applications."
  },
  {
    name: "JavaScript (ES6+)",
    category: "web",
    badge: "Web Core",
    level: 92,
    span2: false,
    desc: "Asynchronous event loops, DOM orchestration, Canvas/SVG data visualization, and REST/Web3 API consumption."
  },
  {
    name: "Tailwind CSS",
    category: "web",
    badge: "Utility Styling",
    level: 94,
    span2: false,
    desc: "Rapid utility-first design systems, dark-mode glassmorphism, responsive bento grids, and micro-interaction states."
  },
  {
    name: "HTML5 & CSS3",
    category: "web",
    badge: "Web Standards",
    level: 95,
    span2: false,
    desc: "Semantic accessible markup, CSS Grid/Flexbox layouts, keyframe animations, and Apple-inspired backdrop blur aesthetics."
  },
  {
    name: "Python",
    category: "ai",
    badge: "Backend & AI",
    level: 88,
    span2: false,
    desc: "Data automation, scripting, backend API prototyping, and Generative AI model orchestration."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    badge: "Version Control",
    level: 94,
    span2: false,
    desc: "Branching strategies, clean atomic commits, pull request workflows, code reviews, and CI/CD collaboration."
  }
];

// Simulator State
let simState = {
  activeTab: "home",
  newsIndex: 0,
  coinFilter: "All",
  coinSearch: "",
  coinSort: "rank",
  favorites: new Set(["bitcoin", "solana"]),
  selectedCoin: null,
  selectedChain: "all-evm",
  hideDust: false,
  portfolioSearch: "",
  vdaMode: "buy",
  vdaExchange: "inrSpot",
  vdaCoinId: "bitcoin",
  vdaAmount: 50000,
  vdaCostBasis: 35000,
  vdaUnitPrice: 6140800
};

// Format INR Helper (matching Formatting.swift)
function formatINR(val, maxDecimals = 2) {
  if (val === undefined || val === null || isNaN(val)) return "₹0.00";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: maxDecimals
  }).format(val);
}

// Trigger Dynamic Island Haptic Pulse
function triggerIslandHaptic(message) {
  const island = document.getElementById("dynamicIsland");
  const label = document.getElementById("islandLabel");
  if (!island || !label) return;
  label.textContent = message;
  island.classList.add("pulse");
  clearTimeout(window.__islandTimer);
  window.__islandTimer = setTimeout(() => {
    island.classList.remove("pulse");
    label.textContent = "Crypto • Live";
  }, 1400);
}

// Show Bottom Toast
function showToast(message) {
  const toast = document.getElementById("appleToast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

// ============================================================================
// Tab 1: HomeView Renderer
// ============================================================================
function renderNewsBanner() {
  const item = NEWS_HEADLINES[simState.newsIndex % NEWS_HEADLINES.length];
  const srcEl = document.getElementById("simNewsSource");
  const titleEl = document.getElementById("simNewsTitle");
  if (srcEl && titleEl) {
    srcEl.textContent = `${item.source} • ${item.time}`;
    titleEl.textContent = item.title;
  }
}

function buildSparklineSVG(prices, isPositive) {
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = Math.max(max - min, 1);
  const w = 58;
  const h = 24;
  const pts = prices
    .map((p, idx) => {
      const x = (idx / (prices.length - 1)) * w;
      const y = h - ((p - min) / range) * (h - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const stroke = isPositive ? "#30d158" : "#ff453a";
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
    <polyline points="${pts}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function renderHomeCoins() {
  const container = document.getElementById("simCoinList");
  const favCountEl = document.getElementById("favPillCount");
  if (!container) return;

  if (favCountEl) {
    favCountEl.textContent = simState.favorites.size > 0 ? ` (${simState.favorites.size})` : "";
  }

  let list = [...MARKET_COINS];

  // Filter
  if (simState.coinFilter === "Top Gainers") {
    list = list.filter((c) => c.priceChangePercentage24H > 0);
  } else if (simState.coinFilter === "Top Losers") {
    list = list.filter((c) => c.priceChangePercentage24H < 0);
  } else if (simState.coinFilter === "Watchlist") {
    list = list.filter((c) => simState.favorites.has(c.id));
  }

  // Search
  if (simState.coinSearch.trim() !== "") {
    const q = simState.coinSearch.toLowerCase();
    list = list.filter(
      (c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q)
    );
  }

  // Sort
  if (simState.coinSort === "rank") list.sort((a, b) => a.rank - b.rank);
  if (simState.coinSort === "rankRev") list.sort((a, b) => b.rank - a.rank);
  if (simState.coinSort === "price") list.sort((a, b) => b.currentPrice - a.currentPrice);
  if (simState.coinSort === "change")
    list.sort((a, b) => b.priceChangePercentage24H - a.priceChangePercentage24H);

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:28px 16px;color:var(--text-secondary);font-size:0.74rem;">
      No matching coins in <strong>${simState.coinFilter}</strong>.
    </div>`;
    return;
  }

  container.innerHTML = list
    .map((coin) => {
      const isPos = coin.priceChangePercentage24H >= 0;
      const isFav = simState.favorites.has(coin.id);
      return `
      <div class="ios-coin-row" onclick="openCoinDetail('${coin.id}')">
        <div class="coin-left">
          <span class="coin-rank">${coin.rank}</span>
          <div class="coin-icon-badge" style="background:${coin.color}">${coin.symbol[0]}</div>
          <div class="coin-title-wrap">
            <span class="coin-name">
              ${coin.name}
              <span onclick="event.stopPropagation();toggleFavoriteCoin('${coin.id}')" title="Toggle Watchlist Star" style="cursor:pointer;color:${
        isFav ? "#ffd60a" : "#6e6e73"
      }">★</span>
            </span>
            <span class="coin-sym">${coin.symbol}</span>
          </div>
        </div>
        <div>${buildSparklineSVG(coin.sparkline, isPos)}</div>
        <div class="coin-right">
          <div class="coin-price">${formatINR(coin.currentPrice, coin.currentPrice < 500 ? 2 : 0)}</div>
          <div class="coin-change ${isPos ? "pos" : "neg"}">${isPos ? "+" : ""}${coin.priceChangePercentage24H.toFixed(
        2
      )}%</div>
        </div>
      </div>`;
    })
    .join("");
}

window.toggleFavoriteCoin = function (coinId) {
  if (simState.favorites.has(coinId)) {
    simState.favorites.delete(coinId);
    triggerIslandHaptic("Removed Star");
  } else {
    simState.favorites.add(coinId);
    triggerIslandHaptic("Added to Watchlist ★");
  }
  renderHomeCoins();
};

// Interactive CoinDetailView Modal inside iPhone
window.openCoinDetail = function (coinId) {
  const coin = MARKET_COINS.find((c) => c.id === coinId);
  if (!coin) return;
  simState.selectedCoin = coin;
  triggerIslandHaptic(`${coin.symbol} Detail`);

  const sheet = document.getElementById("iosCoinDetailSheet");
  const content = document.getElementById("iosCoinDetailContent");
  if (!sheet || !content) return;

  const isPos = coin.priceChangePercentage24H >= 0;
  const stroke = isPos ? "#30d158" : "#ff453a";
  const min = Math.min(...coin.sparkline);
  const max = Math.max(...coin.sparkline);
  const range = Math.max(max - min, 1);
  const w = 310;
  const h = 120;
  const pts = coin.sparkline
    .map((p, idx) => {
      const x = (idx / (coin.sparkline.length - 1)) * w;
      const y = h - ((p - min) / range) * (h - 18) - 9;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  content.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <button onclick="closeCoinDetail()" style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:5px 11px;border-radius:999px;font-size:0.7rem;cursor:pointer;">← Back</button>
      <span style="font-size:0.75rem;font-weight:700;">${coin.name} (${coin.symbol})</span>
      <button onclick="toggleFavoriteCoin('${coin.id}');openCoinDetail('${coin.id}')" style="background:transparent;border:none;font-size:1rem;cursor:pointer;color:${
    simState.favorites.has(coin.id) ? "#ffd60a" : "#6e6e73"
  }">★</button>
    </div>

    <div style="background:rgba(255,255,255,0.04);padding:12px;border-radius:14px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:0.65rem;color:var(--text-secondary);" id="scrubStatusLabel">Current Live Price (INR)</div>
        <div style="font-size:1.15rem;font-weight:800;" id="scrubLivePrice">${formatINR(coin.currentPrice)}</div>
      </div>
      <div class="${isPos ? "pos" : "neg"}" style="font-size:0.8rem;font-weight:700;">
        ${isPos ? "+" : ""}${coin.priceChangePercentage24H}%
      </div>
    </div>

    <div style="background:rgba(255,255,255,0.03);padding:12px;border-radius:14px;">
      <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-secondary);margin-bottom:6px;">
        <span>7-Day Price Trend (CoinDetailView.swift)</span>
        <span style="color:var(--accent-teal);">Move cursor/finger to scrub</span>
      </div>
      <div id="scrubChartBox" style="position:relative;cursor:crosshair;" onmousemove="handleChartScrub(event, '${
        coin.id
      }')" onmouseleave="resetChartScrub('${coin.id}')">
        <svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
          <polyline points="${pts}" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.62rem;color:var(--text-muted);margin-top:4px;">
        <span>Low: ${formatINR(min, 0)}</span>
        <span>High: ${formatINR(max, 0)}</span>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.7rem;">
      <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:10px;">
        <div style="color:var(--text-secondary);font-size:0.62rem;">Market Cap</div>
        <div style="font-weight:700;margin-top:2px;">${coin.marketCap}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:10px;">
        <div style="color:var(--text-secondary);font-size:0.62rem;">Market Rank</div>
        <div style="font-weight:700;margin-top:2px;">#${coin.rank}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:10px;">
        <div style="color:var(--text-secondary);font-size:0.62rem;">24h High</div>
        <div style="font-weight:700;margin-top:2px;color:#30d158;">${formatINR(coin.high24H, 0)}</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);padding:9px;border-radius:10px;">
        <div style="color:var(--text-secondary);font-size:0.62rem;">All-Time High</div>
        <div style="font-weight:700;margin-top:2px;color:#ffd60a;">${coin.ath}</div>
      </div>
    </div>
  `;

  sheet.classList.add("open");
};

window.handleChartScrub = function (event, coinId) {
  const coin = MARKET_COINS.find((c) => c.id === coinId);
  if (!coin) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const relX = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
  const idx = Math.min(
    Math.floor((relX / rect.width) * coin.sparkline.length),
    coin.sparkline.length - 1
  );
  const price = coin.sparkline[idx];
  const priceEl = document.getElementById("scrubLivePrice");
  const labelEl = document.getElementById("scrubStatusLabel");
  if (priceEl) priceEl.textContent = formatINR(price);
  if (labelEl) labelEl.textContent = `Scrubbing Day ${idx + 1} of 7 • Haptic Tick`;
};

window.resetChartScrub = function (coinId) {
  const coin = MARKET_COINS.find((c) => c.id === coinId);
  if (!coin) return;
  const priceEl = document.getElementById("scrubLivePrice");
  const labelEl = document.getElementById("scrubStatusLabel");
  if (priceEl) priceEl.textContent = formatINR(coin.currentPrice);
  if (labelEl) labelEl.textContent = "Current Live Price (INR)";
};

window.closeCoinDetail = function () {
  const sheet = document.getElementById("iosCoinDetailSheet");
  if (sheet) sheet.classList.remove("open");
};

// ============================================================================
// Tab 2: PortfolioView (GoldRush Multi-Chain) Renderer
// ============================================================================
function renderPortfolioTab() {
  const listEl = document.getElementById("simPortfolioAssets");
  const totalEl = document.getElementById("simPortfolioTotal");
  const changeEl = document.getElementById("simPortfolioChange");
  const allocEl = document.getElementById("simAllocationBar");
  if (!listEl || !totalEl) return;

  let filtered = [...PORTFOLIO_ASSETS];
  if (simState.selectedChain !== "all-evm") {
    filtered = filtered.filter((a) => a.chain === simState.selectedChain);
  }
  if (simState.hideDust) {
    filtered = filtered.filter((a) => a.valueINR >= 100);
  }
  if (simState.portfolioSearch.trim() !== "") {
    const q = simState.portfolioSearch.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.symbol.toLowerCase().includes(q) ||
        a.chainName.toLowerCase().includes(q)
    );
  }

  const totalINR = filtered.reduce((acc, a) => acc + a.valueINR, 0);
  const total24h = filtered.reduce((acc, a) => acc + a.value24hINR, 0);
  const diff = totalINR - total24h;
  const pct = total24h > 0 ? (diff / total24h) * 100 : 0;

  totalEl.textContent = formatINR(totalINR);
  if (changeEl) {
    const isPos = diff >= 0;
    changeEl.className = isPos ? "pos" : "neg";
    changeEl.textContent = `${isPos ? "+" : ""}${formatINR(diff)} (${isPos ? "+" : ""}${pct.toFixed(2)}% 24h)`;
  }

  if (allocEl && totalINR > 0) {
    allocEl.innerHTML = filtered
      .map((a) => {
        const w = Math.max((a.valueINR / totalINR) * 100, 4);
        return `<div style="width:${w}%;background:${a.chainColor}" title="${a.symbol}: ${w.toFixed(1)}%"></div>`;
      })
      .join("");
  }

  listEl.innerHTML = filtered
    .map((a) => {
      const chg = ((a.priceINR - a.price24hINR) / a.price24hINR) * 100;
      const isPos = chg >= 0;
      return `
      <div class="ios-coin-row" onclick="navigator.clipboard?.writeText('${a.contract}');triggerIslandHaptic('Copied ${a.symbol} Contract')">
        <div class="coin-left">
          <div class="coin-icon-badge" style="background:${a.chainColor}">${a.symbol[0]}</div>
          <div class="coin-title-wrap">
            <span class="coin-name">${a.symbol} <span style="font-size:0.55rem;padding:1px 5px;border-radius:6px;background:rgba(255,255,255,0.1);color:${a.chainColor}">${a.chainBadge}</span></span>
            <span class="coin-sym">${a.tokenBalance} ${a.symbol}</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.63rem;" class="${isPos ? "pos" : "neg"}">
          ${isPos ? "+" : ""}${chg.toFixed(2)}%
        </div>
        <div class="coin-right">
          <div class="coin-price">${formatINR(a.valueINR, 0)}</div>
          <div class="coin-sym">${formatINR(a.priceINR, 0)}/unit</div>
        </div>
      </div>`;
    })
    .join("");
}

// ============================================================================
// Tab 3: VDATaxEstimatorView (Sec 115BBH 30% + 4% Cess & Sec 194S 1% TDS)
// ============================================================================
function renderVDATaxTab() {
  const amount = Math.max(0, parseFloat(document.getElementById("vdaAmountInput")?.value || "0"));
  const costBasis = Math.max(0, parseFloat(document.getElementById("vdaCostInput")?.value || "0"));
  const coinId = document.getElementById("vdaCoinSelect")?.value || "bitcoin";
  const coin = MARKET_COINS.find((c) => c.id === coinId) || MARKET_COINS[0];
  const unitPrice = coin.currentPrice;

  const costGroup = document.getElementById("vdaCostGroup");
  if (costGroup) {
    costGroup.style.display = simState.vdaMode === "sell" ? "block" : "none";
  }

  const outBox = document.getElementById("vdaBreakdownOutput");
  if (outBox) {
    if (simState.vdaMode === "buy") {
      const tdsRate = simState.vdaExchange === "inrSpot" ? 0.0 : 0.01;
      const tdsOnBuy = amount * tdsRate;
      const deployed = Math.max(0, amount - tdsOnBuy);
      const qty = unitPrice > 0 ? deployed / unitPrice : 0;
      const breakEven = qty > 0 ? amount / (qty * 0.99) : unitPrice;

      outBox.innerHTML = `
        <div class="vda-row"><span>Live ${coin.symbol} Spot Price</span><strong>${formatINR(unitPrice, 0)}</strong></div>
        <div class="vda-row"><span>Sec 194S Buy TDS (${(tdsRate * 100).toFixed(0)}%)</span><strong class="${
        tdsOnBuy > 0 ? "neg" : "pos"
      }">${formatINR(tdsOnBuy)}</strong></div>
        <div class="vda-row"><span>Net Capital Deployed</span><strong>${formatINR(deployed)}</strong></div>
        <div class="vda-row"><span>Estimated ${coin.symbol} Credited</span><strong style="color:var(--accent-teal)">${qty.toFixed(
        6
      )} ${coin.symbol}</strong></div>
        <div class="vda-row"><span>Break-Even Exit Price (after 1% Sell TDS)</span><strong>${formatINR(
          breakEven,
          0
        )}</strong></div>
      `;
    } else {
      const sellTDS = amount * 0.01;
      const grossPnL = amount - costBasis;
      const taxableGain = Math.max(0, grossPnL);
      const flat30 = taxableGain * 0.3;
      const cess4 = flat30 * 0.04;
      const totalTax = flat30 + cess4;
      const finalTakeHome = Math.max(0, amount - totalTax);
      const netProfit = grossPnL - totalTax;

      outBox.innerHTML = `
        <div class="vda-row"><span>Gross Profit / Loss</span><strong class="${
          grossPnL >= 0 ? "pos" : "neg"
        }">${formatINR(grossPnL)}</strong></div>
        <div class="vda-row"><span>Sec 194S 1% TDS Withheld</span><strong class="neg">-${formatINR(
          sellTDS
        )}</strong></div>
        <div class="vda-row"><span>Sec 115BBH 30% Tax + 4% Cess (31.2%)</span><strong class="neg">-${formatINR(
          totalTax
        )}</strong></div>
        <div class="vda-row"><span>Final Post-Tax Take-Home</span><strong style="color:var(--accent-teal)">${formatINR(
          finalTakeHome
        )}</strong></div>
        <div class="vda-row"><span>Net Post-Tax Profit in Pocket</span><strong class="${
          netProfit >= 0 ? "pos" : "neg"
        }">${formatINR(netProfit)}</strong></div>
      `;
    }
  }

  // Render Saved Buy Notes Ledger
  const notesEl = document.getElementById("vdaNotesList");
  if (notesEl) {
    notesEl.innerHTML = vdaTradeNotes
      .map((n) => {
        const liveCoin = MARKET_COINS.find((c) => c.id === n.coinId) || MARKET_COINS[0];
        const curVal = n.tokenQuantity * liveCoin.currentPrice;
        const gross = curVal - n.investedAmountINR;
        const tax = Math.max(0, gross) * 0.312;
        const net = gross - tax;
        const isPos = net >= 0;
        return `
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:9px;margin-bottom:6px;font-size:0.66rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;">
            <strong>${n.coinSymbol} • Invested ${formatINR(n.investedAmountINR, 0)}</strong>
            <span style="color:var(--text-muted)">${n.dateLabel}</span>
          </div>
          <div style="color:var(--text-secondary);margin-bottom:5px;">"${n.note}"</div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span>If Sold Now (Post-31.2% Tax): <strong class="${isPos ? "pos" : "neg"}">${
          isPos ? "+" : ""
        }${formatINR(net, 0)}</strong></span>
            <button onclick="simulateSellFromNote('${n.id}')" style="background:rgba(41,151,255,0.2);color:var(--accent-cyan);border:none;border-radius:6px;padding:3px 7px;font-size:0.62rem;font-weight:700;cursor:pointer;">Simulate Sell</button>
          </div>
        </div>`;
      })
      .join("");
  }
}

window.recordVDABuyNote = function () {
  const amount = Math.max(0, parseFloat(document.getElementById("vdaAmountInput")?.value || "0"));
  const coinId = document.getElementById("vdaCoinSelect")?.value || "bitcoin";
  const coin = MARKET_COINS.find((c) => c.id === coinId) || MARKET_COINS[0];
  if (amount <= 0) return;

  const qty = amount / coin.currentPrice;
  vdaTradeNotes.unshift({
    id: "note-" + Date.now(),
    coinId: coin.id,
    coinSymbol: coin.symbol,
    coinName: coin.name,
    investedAmountINR: amount,
    buyPricePerUnitINR: coin.currentPrice,
    tokenQuantity: qty,
    tdsPaidOnBuyINR: 0,
    exchangeType: simState.vdaExchange,
    dateLabel: "Just now",
    note: `Logged ${coin.symbol} buy at ${formatINR(coin.currentPrice, 0)}`
  });
  triggerIslandHaptic("Buy Note Saved ✓");
  renderVDATaxTab();
};

window.simulateSellFromNote = function (noteId) {
  const note = vdaTradeNotes.find((n) => n.id === noteId);
  if (!note) return;
  const coin = MARKET_COINS.find((c) => c.id === note.coinId) || MARKET_COINS[0];
  const curVal = note.tokenQuantity * coin.currentPrice;

  simState.vdaMode = "sell";
  document.querySelectorAll(".vda-seg-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === "sell");
  });
  const amtInput = document.getElementById("vdaAmountInput");
  const costInput = document.getElementById("vdaCostInput");
  const coinSel = document.getElementById("vdaCoinSelect");
  if (amtInput) amtInput.value = Math.round(curVal);
  if (costInput) costInput.value = Math.round(note.investedAmountINR);
  if (coinSel) coinSel.value = coin.id;

  triggerIslandHaptic(`Loaded ${coin.symbol} Exit`);
  renderVDATaxTab();
};

// ============================================================================
// Switch Simulator Tabs (Synchronizes Top Pill Bar & Bottom iOS TabView)
// ============================================================================
window.switchSimulatorTab = function (tabName) {
  simState.activeTab = tabName;
  closeCoinDetail();

  document.querySelectorAll(".ios-screen-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `pane-${tabName}`);
  });
  document.querySelectorAll(".ios-tab-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  document.querySelectorAll(".sim-tab-trigger").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  const labelMap = {
    home: "Home • Live Markets",
    portfolio: "GoldRush • Multi-Chain",
    vda: "India VDA • 30% Tax"
  };
  triggerIslandHaptic(labelMap[tabName] || "Crypto App");
};

// ============================================================================
// Xcode Code Explorer Switcher
// ============================================================================
window.selectSwiftFile = function (fileName) {
  const fileData = SWIFT_FILES[fileName];
  if (!fileData) return;

  document.querySelectorAll(".xcode-tab, .tree-file").forEach((el) => {
    el.classList.toggle("active", el.dataset.file === fileName);
  });

  const pathEl = document.getElementById("xcodeFilePath");
  const metaEl = document.getElementById("xcodeFileMeta");
  const codeEl = document.getElementById("xcodeCodeBlock");

  if (pathEl) pathEl.textContent = fileData.path;
  if (metaEl) metaEl.textContent = fileData.lines;
  if (codeEl) codeEl.innerHTML = fileData.code;
};

// ============================================================================
// Render Sahil's 12 Skills Bento Grid
// ============================================================================
window.renderSkillsGrid = function (filterCategory = "all") {
  const grid = document.getElementById("skillsBentoGrid");
  if (!grid) return;

  document.querySelectorAll(".skill-filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === filterCategory);
  });

  const items =
    filterCategory === "all"
      ? SAHIL_SKILLS
      : SAHIL_SKILLS.filter((s) => s.category === filterCategory);

  grid.innerHTML = items
    .map(
      (s) => `
    <div class="skill-card ${s.span2 && filterCategory === "all" ? "span-2" : ""}">
      <div>
        <div class="skill-top">
          <span class="skill-badge">${s.badge}</span>
          <span style="font-size:0.76rem;font-weight:700;color:var(--text-secondary)">${s.level}%</span>
        </div>
        <div class="skill-name">${s.name}</div>
        <p class="skill-desc">${s.desc}</p>
      </div>
      <div class="skill-meter">
        <div class="skill-meter-fill" style="width:${s.level}%"></div>
      </div>
    </div>`
    )
    .join("");
};

// ============================================================================
// Interactive Future Project Slot Customizer Modal
// ============================================================================
let targetSlotId = null;

window.openProjectSlotModal = function (slotId) {
  targetSlotId = slotId;
  const modal = document.getElementById("projectSlotModal");
  if (modal) modal.classList.add("open");
};

window.closeProjectSlotModal = function () {
  const modal = document.getElementById("projectSlotModal");
  if (modal) modal.classList.remove("open");
};

window.saveCustomProjectSlot = function (event) {
  event.preventDefault();
  const title = document.getElementById("slotTitleInput")?.value.trim();
  const stack = document.getElementById("slotStackInput")?.value.trim();
  const desc = document.getElementById("slotDescInput")?.value.trim();
  const link = document.getElementById("slotLinkInput")?.value.trim() || "#projects";

  if (!title || !targetSlotId) return;

  const slotCard = document.getElementById(targetSlotId);
  if (slotCard) {
    const tags = stack
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => `<span class="stack-pill">${t}</span>`)
      .join("");

    slotCard.classList.remove("placeholder-slot");
    slotCard.innerHTML = `
      <div>
        <div class="slot-status-pill" style="background:rgba(48,209,88,0.14);color:#30d158;border-color:rgba(48,209,88,0.3);">
          ● Active Project Added
        </div>
        <h3 style="font-size:1.5rem;font-weight:800;margin-bottom:10px;">${title}</h3>
        <p style="color:var(--text-secondary);font-size:0.94rem;line-height:1.6;">${desc}</p>
        <div class="stack-pills">${tags}</div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a href="${link}" class="btn-pill btn-primary btn-sm">Explore Project ↗</a>
        <button onclick="openProjectSlotModal('${targetSlotId}')" class="btn-pill btn-glass btn-sm">Edit Slot</button>
      </div>
    `;
  }

  closeProjectSlotModal();
  showToast(`Added "${title}" to your portfolio showcase!`);
};

// ============================================================================
// Copy Contact Info & Send Direct Email
// ============================================================================
window.copyTextWithToast = function (text, label) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
  showToast(`Copied ${label}: ${text}`);
};

window.handleDirectContactSubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("visitorName")?.value.trim() || "Hiring Team";
  const subject =
    document.getElementById("visitorSubject")?.value.trim() ||
    "iOS / Full-Stack Opportunity for Sahil Prasad";
  const message = document.getElementById("visitorMessage")?.value.trim() || "";

  const mailtoUrl = `mailto:notsahilprasad@gmail.com?subject=${encodeURIComponent(
    subject + " — from " + name
  )}&body=${encodeURIComponent(message + "\n\n---\nSent via Sahil Prasad's Interactive Portfolio")}`;

  window.location.href = mailtoUrl;
  showToast("Opening email client to notsahilprasad@gmail.com...");
};

// ============================================================================
// Initialize Everything on DOM Ready
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderNewsBanner();
  renderHomeCoins();
  renderPortfolioTab();
  renderVDATaxTab();
  selectSwiftFile("HomeViewModel.swift");
  renderSkillsGrid("all");

  // Cycle News Banner on click
  document.getElementById("simNewsBanner")?.addEventListener("click", () => {
    simState.newsIndex = (simState.newsIndex + 1) % NEWS_HEADLINES.length;
    renderNewsBanner();
    triggerIslandHaptic("Next Headline");
  });

  // Search Coins in Simulator
  document.getElementById("simCoinSearch")?.addEventListener("input", (e) => {
    simState.coinSearch = e.target.value;
    renderHomeCoins();
  });

  // Filter Pills in Simulator Home
  document.querySelectorAll(".sim-filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".sim-filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      simState.coinFilter = pill.dataset.filter;
      triggerIslandHaptic(simState.coinFilter);
      renderHomeCoins();
    });
  });

  // Chain Selector Pills in Simulator Portfolio
  document.querySelectorAll(".sim-chain-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".sim-chain-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      simState.selectedChain = pill.dataset.chain;
      triggerIslandHaptic(pill.textContent.trim());
      renderPortfolioTab();
    });
  });

  // Dust Filter Toggle in Simulator Portfolio
  document.getElementById("simDustBtn")?.addEventListener("click", (e) => {
    simState.hideDust = !simState.hideDust;
    e.currentTarget.classList.toggle("active", simState.hideDust);
    triggerIslandHaptic(simState.hideDust ? "Hid Dust < ₹100" : "Showing All");
    renderPortfolioTab();
  });

  // Portfolio Token Search
  document.getElementById("simPortfolioSearch")?.addEventListener("input", (e) => {
    simState.portfolioSearch = e.target.value;
    renderPortfolioTab();
  });

  // VDA Tax Mode Toggle (Buy vs Sell)
  document.querySelectorAll(".vda-seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".vda-seg-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      simState.vdaMode = btn.dataset.mode;
      triggerIslandHaptic(simState.vdaMode === "buy" ? "Buy Mode" : "Sell / Exit Mode");
      renderVDATaxTab();
    });
  });

  // VDA Calculator Live Inputs
  ["vdaAmountInput", "vdaCostInput", "vdaCoinSelect", "vdaExchangeSelect"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", (e) => {
      if (id === "vdaExchangeSelect") simState.vdaExchange = e.target.value;
      renderVDATaxTab();
    });
  });
});
