let id = 7770;
export interface faqsTypes {
  id:number,
  ac: string,
  key: string,
  title: string,
  text: string,
  open: boolean
}

export const faqs:Array<faqsTypes> = [
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "GENERAL QUESTIONS",
    text: ` <h3>What is cryptocurrency, and how can I make money from trading it?</h3>
  <p>Cryptocurrency is a digital form of money that operates on decentralized networks and uses cryptography for security. You can profit by buying cryptocurrencies when prices are low and selling them when their value rises.</p>

  <h3>What are the risks involved in trading cryptocurrency?</h3>
  <p>Cryptocurrency trading can be risky due to its high volatility. However, unlike traditional forex, crypto’s “floating losses” only become real if you sell at a lower price than what you paid. The key is smart trading and informed decisions.</p>

  <h3>What is Blacktinum?</h3>
  <p>Blacktinum is an AI-powered crypto trading platform designed to simplify your crypto journey. It combines advanced algorithms, automated trading, manual tools, copy trading, a P2P marketplace, Crypto Gems signals, and a crypto academy to cater to traders of all levels.</p>

  <h3>What services does Blacktinum offer?</h3>
  <ul>
    <li>AI-Powered Trading Bot</li>
    <li>Manual Trading Tools</li>
    <li>Copy Trading</li>
    <li>Peer-to-Peer (P2P) Trading Marketplace</li>
    <li>Crypto Gems Signals</li>
    <li>Crypto Academy</li>
    <li>Network Marketing Compensation Plans</li>
  </ul>

  <h3>What experience does Blacktinum have in cryptocurrency trading?</h3>
  <p>Blacktinum is backed by top-tier forex and crypto traders who use proven strategies based on market analysis and price action. Our techniques have been tested and refined over time to consistently produce successful results.</p>

  <h3>Can anyone participate in Blacktinum?</h3>
  <p>Yes, as long as you meet the legal age requirements and have a small amount to start, you can join Blacktinum.</p>

  <h3>How long will Blacktinum last?</h3>
  <p>As long as cryptocurrency trading and referral programs exist, Blacktinum will continue to thrive and evolve.</p>
`,
    open: true,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "GETTING STARTED",
    text: `
        <h3>How can I start trading with Blacktinum, and which exchanges can I use?</h3>
  <ul>
    <li>Download the Blacktinum app from the Play Store or App Store.</li>
    <li>Register for free. If referred, enter the referrer’s username.</li>
    <li>Choose your preferred subscription package.</li>
    <li>Bind your exchange API to Blacktinum to start trading.</li>
  </ul>

  <h3>Is there a guarantee of earnings with Blacktinum?</h3>
  <p>Crypto trading is inherently volatile, so while Blacktinum’s AI aims to make intelligent trades, we cannot guarantee profits.</p>
        `,
    open: false,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "ROBOTIC TRADING",
    text: `
        <h3>How do the trading robots work?</h3>
  <ul>
    <li>Set up your account in minutes.</li>
    <li>Let Blacktinum’s AI handle the trading.</li>
    <li>Watch your profits grow automatically!</li>
  </ul>
  <p>Blacktinum’s AI works 24/7, spotting profitable opportunities and executing precise trades, all while you sit back and relax—no trading knowledge required.</p>

 `,
    open: false,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "TRADING",
    text: ` 
         <h3>Do I need to be a professional trader to use Blacktinum?</h3>
  <p>Not at all! Blacktinum is designed to be beginner-friendly, with AI handling all the heavy lifting for you. You don’t need to be a pro to make profits.</p>

  <h3>How do I fund my Blacktinum account?</h3>
  <p>Your deposit into Blacktinum activates your subscription and covers fuel fees. The only accepted asset for deposit is USDT, which can be sent via the Polygon, BEP20, or TRC20 network.</p>

  <h3>How does withdrawal work?</h3>
  <p>You can withdraw your referral rewards once every 7 days, as long as you’ve accumulated a minimum of $50 in rewards. Since Blacktinum doesn’t hold your funds, you’re always in control of your trading account.</p>

  <h3>Can Blacktinum withdraw from my trading account?</h3>
  <p>No, Blacktinum cannot withdraw from your account. You retain full control over your funds at all times.</p>`,
    open: false,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "FEES AND COMMISSIONS",
    text: `
           <h3>How are commissions paid?</h3>
  <p>Commissions from your referral rewards can be withdrawn once you’ve accumulated a minimum of $50 in rewards, with payouts processed weekly.</p>`,
    open: false,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "REWARDS",
    text: `
          <h3>Do I have to refer people to earn rewards?</h3>
  <p>You can earn rewards in two ways: by referring others or by becoming a strategy provider on the platform. You don't need to refer people to earn!</p>

  <h3>Will I earn from people I refer, even if they are not directly under me?</h3>
  <p>Yes! You can earn from your referral downline up to seven levels deep, depending on your leadership rank.</p>

  <h3>How do I refer people to Blacktinum?</h3>
  <p>Simply share your unique referral link with others to start earning from your network!</p>
        
        
        `
        ,
    open: false,
  },
  {
    id: id++,
    ac: `panel${id}-content`,
    key: `panel${id}`,
    title: "SUBSCRIPTION",
    text: `
        
  <h3>How do I subscribe to Blacktinum packages?</h3>
  <p>To subscribe, fund your account with the equivalent of your chosen package’s fee.</p>

  <h3>What is the minimum and maximum package?</h3>
  <p>The minimum package is $30, and the maximum is $200.</p>

  <h3>Can I upgrade my package at any time?</h3>
  <p>Yes! You can upgrade your package at any time by simply funding your account with the required amount and selecting the package you want to upgrade to.</p>

  <h3>What is spillover?</h3>
  <p>Spillover refers to members who are placed in your matrix by people above you. This can help you advance faster in your referral structure and boost your earnings.</p>
        `,
    open: false,
  },
  
];
