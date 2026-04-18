// Full English content for each AGTI personality type.
// 14 of 16 types are fully populated. CRPF and CRPM remain placeholders
// pending user-supplied content.

const emptyContent = (code, name) => ({
  name: `${code} — ${name}`,
  mbti: "",
  score: 0,
  overview: "",
  scoreBreakdown: [
    { label: "Execution speed & AI tool fit", score: 0 },
    { label: "Vision alignment & prompt quality", score: 0 },
    { label: "Process documentation & AI context", score: 0 },
    { label: "Focus & resistance to AI distraction", score: 0 },
  ],
  whatYouDoBest: "",
  areasToImprove: [],
  risks: { short: "", mid: "", long: "" },
  howToImprove: [],
});

export const personalityContent = {
  SVAF: {
    name: "SVAF — The Apollo Program",
    mbti: "ENTJ",
    score: 94,
    overview:
      "You're the kind of team that makes other startups both envious and a little breathless. You move fast, aim high, follow real processes, and protect deep focus — all at once. That combination is extraordinarily rare. Your advantage isn't any single trait; it's the compounding effect of four strengths reinforcing each other every week. You don't just ship features — you ship conviction, and people can feel it.",
    scoreBreakdown: [
      { label: "Execution speed & AI tool fit", score: 97 },
      { label: "Vision alignment & prompt quality", score: 95 },
      { label: "Process documentation & AI context", score: 93 },
      { label: "Focus & resistance to AI distraction", score: 91 },
    ],
    whatYouDoBest:
      "You're one of the few team types that truly understands AI is an accelerator, not a replacement. You leverage AI where leverage is highest — research, scaffolding, boilerplate — and keep human judgment exactly where it matters. Your team doesn't debate whether AI is 'good' or 'bad'; you treat it like any other tool and measure it by results. That maturity is rarer than it sounds.",
    areasToImprove: [
      {
        title: "Watch out for alignment tax buildup",
        body: "Your alignment culture is a strength, but at AI speed it can quietly become a bottleneck. When everyone needs to understand every decision, the cost of moving grows faster than you notice. Start distinguishing reversible from irreversible decisions and delegate the reversible ones aggressively.",
      },
      {
        title: "Vision lock-in risk",
        body: "AI is reshaping industries at unprecedented speed, and today's elegant vision can become tomorrow's legacy strategy. Schedule a quarterly 'vision stress test' — invite three people outside your team to poke holes in your thesis. The goal isn't to change direction, it's to make sure your conviction is earned, not inherited.",
      },
      {
        title: "Deep work vs. knowledge sharing",
        body: "Everyone is heads-down, but team-level learning compounds only when private insights become shared context. Build lightweight rituals — a Friday 'what I learned using AI this week' thread, a shared prompt library — that turn individual depth into collective depth.",
      },
    ],
    risks: {
      short:
        "You're susceptible to tool fatigue. Your team tries every promising new AI tool the day it launches, which is great for curiosity but expensive for focus. Pick a monthly 'tool anchor' and commit to it for 30 days before evaluating the next one.",
      mid: "Your team type is exactly who competitors want to poach. High-performing teams with rigor and vision are magnets for recruiters. Invest early in retention mechanics — ownership, compensation transparency, career pathing — before you need them reactively.",
      long:
        "The biggest long-term risk for SVAF is success inertia. You'll be right often enough that you stop actively questioning your playbook. Build a 'kill the company' exercise into your annual planning — spend one day assuming you'll lose, and figure out why.",
    },
    howToImprove: [
      {
        time: "This week",
        body: "Apply your 'write out the reasoning' culture to AI. Every time someone uses an LLM for a non-trivial decision, drop the prompt + output into a shared channel with a one-line note on what you changed. This turns silent AI usage into visible learning.",
      },
      {
        time: "This quarter",
        body: "Embed AI checkpoints into your async workflows. For every PRD, spec, or plan, require one bullet on 'how did AI help shape this, and where did we override it?' You already have the documentation discipline — this is a small extension with outsized compounding.",
      },
      {
        time: "Long-term",
        body: "Build a team-level AI capability assessment system. Revisit each person's AI leverage quarterly: which tasks are they now accelerating 2–5x? Which tasks are they still doing the old way out of habit? The teams that will win in 2–3 years are the ones measuring this explicitly today.",
      },
    ],
  },

  SVAM: {
    name: "SVAM — The Brilliant Dumpster Fire",
    mbti: "ENTP",
    score: 84,
    overview:
      "If your team were a song, it would be free-form jazz — no fixed score, but everyone knows when to come in, and what comes out often surprises the audience. Your idea density is extremely high, your action speed is extremely fast, and conversations always extend in some exciting direction. People who work alongside you feel their thinking being continuously stretched — a rare team experience.",
    scoreBreakdown: [
      { label: "Creative density & AI chemistry", score: 96 },
      { label: "Action speed & AI iteration fit", score: 90 },
      { label: "Alignment stability", score: 68 },
      { label: "Knowledge accumulation & AI context", score: 72 },
    ],
    whatYouDoBest:
      "You are the most dangerous creative machine in the AI era — 'dangerous' as a compliment. You can use AI to rapidly generate prototypes in five different directions while others are still debating feasibility, then find the truly valuable direction through real feedback. This ability to 'use AI to quickly invalidate bad ideas' is rarer and more valuable than 'using AI to optimize good ideas.'",
    areasToImprove: [
      { title: "Make implicit alignment explicit", body: "Your team has a set of judgment standards living in people's heads — what's good, what's worth doing. This needs to be written down, not for process, but so AI can inherit it. Spend one meeting writing out your team's 5 core judgment principles as text, to use as the system prompt for all important AI tasks." },
      { title: "Build an idea graveyard", body: "The biggest waste for SVAM teams isn't bad ideas — it's good ideas being buried by better ideas. Use AI to maintain a structured idea archive, and periodically have AI revisit these ideas in new contexts to see if they've become valuable again." },
      { title: "Set a completion threshold", body: "For core product features, set a clear definition of done and don't start new directions before reaching it. AI-era tools are too abundant — the temptation will only grow, not shrink." },
    ],
    risks: {
      short: "The abundance of AI tools is a double-edged sword for SVAM: it lets you explore more directions faster, but also makes it harder to focus. SVAM is the type most easily attracted when new tools come out, which will systematically scatter attention.",
      mid: "Your genius culture depends on high talent density. When AI lets ordinary teams produce high-quality prototypes, your differentiation shifts from can build it to knows what to build. Start accumulating judgment that AI cannot replace: deep user understanding, first-principles domain knowledge, intuition for market timing.",
      long: "Improvisational culture is an advantage when the team is small, a risk when it is large. As you scale, the cost of implicit alignment grows exponentially. While still small, invest in making core principles explicit — the most important long-term investment for this type.",
    },
    howToImprove: [
      { time: "This week", body: "Design an AI role for your brainstorm sessions: after each ideation ends, spend 5 minutes having AI do a structured summary — extracting consensus, identifying disagreements, listing next steps. Make this output the standard meeting notes format." },
      { time: "This quarter", body: "Build a team shared prompt library specifically for converting your improvised jazz into executable documents: user stories, technical specs, business assumptions. Let AI handle the conversion work, let people keep doing the creative work." },
      { time: "Long-term", body: "Systematically deconstruct your best improvisational decisions into reusable judgment frameworks. When AI can help you distill past success patterns into structured knowledge, your collective judgment will grow at a disproportionate rate." },
    ],
  },

  SVPF: {
    name: "SVPF — The Charismatic Cowboy",
    mbti: "ESTP",
    score: 80,
    overview:
      "You are the team driven by intuition and momentum — while others are still building analytical models, you already have real-world feedback. Your nose for opportunity is extremely sharp; you can make good decisions with incomplete information, a capability that is very hard to develop after the fact. Your team character evokes those explorers who were first to rush into new markets and plant their flags.",
    scoreBreakdown: [
      { label: "Execution & AI conversion speed", score: 92 },
      { label: "Opportunity identification & AI assist", score: 85 },
      { label: "Process documentation", score: 58 },
      { label: "Systematic AI learning", score: 65 },
    ],
    whatYouDoBest:
      "You are the market testing machine of the AI era. Use AI to rapidly generate multiple versions of product copy, pricing schemes, and feature prototypes, then use your intuition to quickly filter which ones are worth testing, then push them out fast to see real feedback — this loop runs at 2-3x the speed of other team types in your hands.",
    areasToImprove: [
      { title: "Convert intuition into teachable judgment", body: "Your most valuable asset is that market intuition living in your heads. Currently it can only be transmitted through direct mentorship. Regularly do decision retrospectives, using AI to help break down your intuitive judgments into discussable, learnable frameworks." },
      { title: "Build a lightweight knowledge capture habit", body: "You do not need a heavy documentation system, but you need a low-friction way to accumulate what you have learned. Use AI to help turn a 15-minute post-decision reflection into structured experience cards — accumulate long-term into a team knowledge base." },
      { title: "Embed AI checkpoints into high-speed execution", body: "Not to slow down — to improve directional accuracy. Before entering a new execution phase, spend 5 minutes having AI do a quick devil's advocate review of your assumptions, identifying blind spots you may have missed from being too focused." },
    ],
    risks: {
      short: "The biggest short-term risk for SVPF in the AI era is the speed trap — AI makes action faster, but if directional judgment does not improve in parallel, fast action just means going the wrong way faster. Introduce a lightweight direction calibration rhythm, like a bi-weekly strategy review.",
      mid: "Speed is one of your competitive advantages, but AI will make all teams faster. When speed advantage equalizes, your differentiation will depend more on judgment quality. Start investing now in capabilities AI cannot replace: deep customer relationships, unique market insights, hard-to-replicate execution experience.",
      long: "Intuition-driven culture faces a fundamental challenge in the AI era: AI is based on data and logic, while your core decision tool is intuition. Building a decision system where intuition and data mutually verify each other is the most important long-term challenge for this type.",
    },
    howToImprove: [
      { time: "This week", body: "Apply your test in the real world instinct to AI: before each important decision, quickly generate 3 different directional AI analyses, then compare your intuitive judgment against AI's logical analysis to see where they diverge and where the blind spots are." },
      { time: "This quarter", body: "Build a lightweight AI experiment log: record the most valuable things you have done with AI, and failed attempts. Review it after three months to discover your AI usage patterns and more systematically replicate successes and avoid failures." },
      { time: "Long-term", body: "Develop at least one person on the team into a deep AI user — not just using AI, but truly understanding its capability boundaries, able to identify when AI's judgment is trustworthy and when it needs to be corrected by your intuition." },
    ],
  },

  SVPM: {
    name: "SVPM — The Hype Machine",
    mbti: "ENFJ",
    score: 70,
    overview:
      "The energy your team radiates is real and palpable — people who walk into this team immediately feel a kind of contagion, feeling they have joined something important that is happening. Your vision is not written on walls; it lives in every conversation, every all-hands, every Slack message. This collective belief is something many teams spend enormous effort trying and failing to build.",
    scoreBreakdown: [
      { label: "Vision transmission & AI narrative", score: 88 },
      { label: "Action speed", score: 82 },
      { label: "Meeting culture vs. AI async fit", score: 55 },
      { label: "Process consistency", score: 52 },
    ],
    whatYouDoBest:
      "You are the best brand and culture building machine in the AI era. Use AI to expand your story — generate customized vision narratives for different audiences, rapidly iterate on recruiting copy, use AI to generate industry-specific case studies tailored to investors. These tasks you do better than any other type, because you naturally understand what kind of narrative moves people.",
    areasToImprove: [
      { title: "Design an AI role for meetings", body: "Not to reduce meetings, but to bring AI in. Before each important meeting, use AI to preprocess background materials and generate a discussion framework. After the meeting, use AI to do a structured summary extracting decisions and action items. This makes meetings denser, not longer." },
      { title: "Convert collective energy into AI context", body: "Your team has extremely strong collective belief, but this feeling is hard to transmit to AI. Invest time to distill your team's core values, judgment standards, and tone into a team AI guide — use it as the base context for all important AI tasks. Once built, your AI output quality will improve fundamentally." },
      { title: "Build async AI workflows", body: "Not to replace your real-time culture, but to let AI work continuously between real-time connections. Async-ify daily content production, data analysis, and market research — let AI handle them, so real-time meetings can focus on the things only humans can do." },
    ],
    risks: {
      short: "High-energy teams tend to use AI as a showcase tool rather than a work tool — generating beautiful presentation materials with AI, but no AI in the core workflow. This leads to very low ROI on AI investment, and creates an illusion of we are already using AI.",
      mid: "Your energy depends on high-frequency human connection. Think ahead about how to maintain team cohesion as AI changes work patterns and reduces the need for human-to-human collaboration.",
      long: "The hype machine culture depends on the personal charisma of founders or key figures. Start shifting culture from personal charisma driven toward systems and principles driven while maintaining that infectious energy.",
    },
    howToImprove: [
      { time: "This week", body: "Take your most compelling internal talk or meeting recording, and use AI to convert it into a structured culture DNA document. This document is both your brand guide and the core context for your AI work. Do it once, benefit long-term." },
      { time: "This quarter", body: "Embed an AI secretary role into your meeting culture: real-time recording during every meeting, AI automatically generates meeting summaries, decision records, and action items, synced to all relevant people." },
      { time: "Long-term", body: "Build an AI-assisted culture diffusion system: use AI to continuously convert core culture stories, value examples, and decision principles into different format content so your culture can spread effectively without the founder personally delivering it." },
    ],
  },

  SRAF: {
    name: "SRAF — The Quiet Overachiever",
    mbti: "ISTJ",
    score: 78,
    overview:
      "You are the team that makes investors quietly exhale with relief during portfolio reviews — commitments get fulfilled, completed work holds up to scrutiny, no drama, just continuous progress. You do not need to be the loudest voice in the room because your results speak for themselves. This reliability, in an industry full of noise, is a seriously undervalued scarce resource.",
    scoreBreakdown: [
      { label: "Execution reliability & AI workflow stability", score: 90 },
      { label: "Process documentation & AI context quality", score: 88 },
      { label: "New tool exploration eagerness", score: 52 },
      { label: "Risk tolerance & AI experimentation", score: 58 },
    ],
    whatYouDoBest:
      "You are the most trustworthy AI workflow operators. When an AI tool or process is validated in your hands, it gets executed with extremely high consistency — making AI investment returns predictable and cumulative. In the AI era, this reliable execution is an extremely scarce capability. Most teams only use AI for one-off things, while you turn it into a systematic advantage.",
    areasToImprove: [
      { title: "Build a safe experimentation zone", body: "You do not need to become an experiment-driven team, but you need a dedicated low-risk experimentation space alongside reliable execution. Every quarter, pick one core workflow and do a parallel test with a new AI tool, comparing results against the existing approach — not replacing it outright." },
      { title: "Accelerate AI tool evaluation rhythm", body: "Your wait for full validation strategy is too expensive in the AI space. Build a lightweight AI tool evaluation process: 14-day rapid trial, compare 5 specific metrics, then adopt or abandon. Compress evaluation cycles from months to two weeks." },
      { title: "Proactively identify reliability blind spots", body: "Every six months, do an assumption audit: list the 5 most core assumptions behind your current working methods, and use AI to help test whether these assumptions still hold in the current environment." },
    ],
    risks: {
      short: "The wait for validation strategy is becoming increasingly expensive as AI tools iterate faster. Your biggest short-term risk is competitors gaining efficiency advantages you could have had through more aggressive AI experiments, while you are still waiting for those tools to be fully validated.",
      mid: "Your reliability is built on clear processes, and the most valuable AI-era workflows are being rapidly rewritten. If your process update rhythm cannot keep up with AI development speed, your process advantage may become process baggage.",
      long: "The low profile culture has a hidden cost in the AI era: when AI makes brand storytelling and content production extremely cheap, the price of staying quiet keeps rising because competitors will continuously amplify their market presence using AI.",
    },
    howToImprove: [
      { time: "This week", body: "Take your best existing workflow and do an AI process reconstruction: have AI analyze the workflow, identify bottlenecks and redundant steps, then propose an AI-native version. You do not have to adopt it immediately, but this exercise shows you what AI can enable." },
      { time: "This quarter", body: "Establish an AI early adopter role: pick one person to continuously track new AI tools, do a 5-minute team share every two weeks, reducing the whole team's AI learning cost while keeping everyone's awareness of new tools current." },
      { time: "Long-term", body: "Transfer your predictable, cumulative execution advantage to AI capability building: build a quarterly plan for AI capability assessment and improvement, managing AI skill development as systematically as product iteration." },
    ],
  },

  SRAM: {
    name: "SRAM — The Reliable Chaos",
    mbti: "ESTJ",
    score: 68,
    overview:
      "You simultaneously possess two qualities that do not usually appear together: action bias and care for collective awareness. You are not just moving fast — you are ensuring the whole team moves fast together. This attention to no one gets left behind is precious in your culture, and it is why you can convert ideas into scaled execution.",
    scoreBreakdown: [
      { label: "Action bias & AI execution conversion", score: 82 },
      { label: "Realism & AI credibility assessment", score: 80 },
      { label: "Meeting culture vs. AI async tension", score: 48 },
      { label: "Alignment process & AI integration", score: 62 },
    ],
    whatYouDoBest:
      "You are the best scaled execution engine in the AI era. When an AI-driven workflow is validated as effective, you can roll it out to the entire team with extremely high consistency while ensuring no one gets left behind. This ability to achieve team-level diffusion of AI capabilities is one of the hardest things for most teams to do.",
    areasToImprove: [
      { title: "Redefine AI's role in meetings", body: "Not fewer meetings, but let AI handle the parts that do not need humans. Async-ify information sync, progress updates, and background introductions — handled by AI — reserving meeting time exclusively for judgment, creativity, and relationships." },
      { title: "Build AI-assisted context sharing", body: "Build an AI-generated daily or weekly context summary that automatically aggregates the most important information, letting everyone stay current on the big picture through 3 minutes of reading rather than 1 hour of meetings." },
      { title: "Apply your credibility principle to AI evaluation", body: "For each AI tool, clearly define what standard it needs to meet to be trustworthy, establishing clear adopt or abandon criteria rather than vaguely using it if it feels good." },
    ],
    risks: {
      short: "AI tools' async nature will put continuous pressure on your sync culture. Without actively managing this tension, you may face a dilemma: either use AI but sacrifice team sync, or maintain team sync but use AI inefficiently.",
      mid: "The no one gets left behind culture will face challenges in an era where AI creates huge individual productivity differences. The gap between the most and least AI-capable team members will widen rapidly. Actively manage this gap before it causes hidden team fractures.",
      long: "SRAM team reliability is built on collective coordination, while increasingly more high-value AI-era work will be individual deep work. How to leave enough space for individual deep work while maintaining collective cohesion is this type's most important long-term org design challenge.",
    },
    howToImprove: [
      { time: "This week", body: "Try replacing the information sync segment of your next regular meeting with AI: before the meeting, have AI aggregate everyone's progress updates into a summary. Start the meeting by going straight to discussion and decisions. Measure how much meeting efficiency improves." },
      { time: "This quarter", body: "Build a team AI learning plan: every two weeks, the whole team explores a new AI application scenario together in a 30-minute collective experiment, then discusses which workflows it would be most valuable for." },
      { time: "Long-term", body: "Design an AI-assisted organizational learning system: automatically aggregate everyone's AI problem-solving experiences into a shared knowledge base, regularly having AI distill patterns and findings." },
    ],
  },

  SRPF: {
    name: "SRPF — The Speed Merchant",
    mbti: "ISTP",
    score: 63,
    overview:
      "You are the team that defines itself by results — not process, not documentation, not meetings, but by real products shipped and real user feedback received. You have a quiet confidence that comes from knowing you can get things done, and done well. This capability is scarce, and its scarcity is further amplified in the AI era.",
    scoreBreakdown: [
      { label: "Execution speed & AI iteration", score: 85 },
      { label: "Individual AI usage depth", score: 78 },
      { label: "Team-level AI collaboration", score: 42 },
      { label: "Knowledge accumulation & AI context", score: 38 },
    ],
    whatYouDoBest:
      "You are the best rapid validators in the AI era. Use AI to quickly generate multiple solution options, apply your judgment to quickly filter which are worth testing, then push directly to real environments to check feedback — this loop runs faster and cleaner in your hands than any other type.",
    areasToImprove: [
      { title: "Build a minimum viable knowledge capture habit", body: "Not requiring long documentation, but finding an extremely low-friction way to accumulate what you have learned. After completing an important task, spend 2 minutes in conversation with AI, letting it help organize the decision and learning into a standardized experience card." },
      { title: "Convert individual AI capability into team asset", body: "Build an extremely lightweight sharing mechanism: one person shares the most valuable AI use this week, 10 minutes, no slides, just explain clearly. Simple and consistent." },
      { title: "Design context anchors for AI work", body: "Before starting an important AI task, spend 5 minutes verbally giving AI the key background in conversation, then let AI organize it into structured context to begin work. Suits your style better than writing documentation." },
    ],
    risks: {
      short: "The rapid iteration of AI tools will create a cognitive burden: you like deeply using certain tools, but the AI space has better tools appearing every few months. Finding balance between deep use and staying current is your most realistic short-term challenge.",
      mid: "Your individual depth advantage dilutes as the team grows. Individual AI depth cannot effectively transfer to new members, creating capability gaps between veterans and new hires that affect overall execution efficiency.",
      long: "The most valuable capability in the AI era is shifting from individual execution ability to AI collaboration orchestration ability — designing systems that let the whole team collaborate better with AI. This is a new capability that needs to be actively cultivated.",
    },
    howToImprove: [
      { time: "This week", body: "Choose the 3 AI tools you use most and build a personal best practices document for each — the most effective prompt templates and workflows you have actually found through use. This takes 2 hours and pays dividends long-term." },
      { time: "This quarter", body: "Every two weeks, do a 10x efficiency thought experiment on one core workflow with AI — if we wanted this process to be 10x faster, where should AI intervene? Then actually test it once." },
      { time: "Long-term", body: "Systematically convert your personal judgment into scalable AI prompts: externalize your judgment framework into rules and checklists AI can execute. This is the most worthwhile AI investment for your type right now." },
    ],
  },

  SRPM: {
    name: "SRPM — The Feature Factory",
    mbti: "ESFJ",
    score: 52,
    overview:
      "You are the type that makes users feel the team is genuinely working hard. The continuous delivery rhythm is not just an execution metric — it is how you build trust with users. Every release says: we heard you, we are acting. This continuous responsiveness is something many teams describe as a goal but struggle to actually achieve.",
    scoreBreakdown: [
      { label: "Execution rhythm stability", score: 75 },
      { label: "User orientation & AI feedback processing", score: 70 },
      { label: "Technical debt vs. AI tool adoption", score: 45 },
      { label: "Strategic clarity & AI prioritization", score: 40 },
    ],
    whatYouDoBest:
      "You are the best user insight extractors in the AI era. Using AI to process user feedback, analyze usage data, and identify highest-value feature requests — these tasks have natural advantages in your hands, because you have a continuous delivery rhythm and continuous data inflow, and AI can help you extract the most valuable signals from that data stream.",
    areasToImprove: [
      { title: "Build an AI-driven prioritization system", body: "Regularly have AI analyze your feature requests, user feedback, and business metrics to give a data-based priority suggestion, then have the team make final judgment." },
      { title: "Upgrade delivery rhythm to learning rhythm", body: "After each feature release, have AI analyze usage data and compare against pre-release assumptions to quickly identify which assumptions were right and wrong. Turning delivery rhythm into learning rhythm is the key step to upgrading from Feature Factory to Learning Machine." },
      { title: "Build a long-term view on AI tool investment", body: "Treat AI tool building like product features — put it in formal planning and prioritization rather than treating it as a side project to get to when there is time." },
    ],
    risks: {
      short: "The AI era adds AI-native competitors who build products with AI from the start, have no technical debt, and develop at 3-5x traditional speed. Without actively introducing AI to accelerate your own delivery rhythm, your relative competitive advantage will erode quickly.",
      mid: "The build what users ask for model faces a fundamental challenge in the AI era: users increasingly struggle to articulate what they truly need, because AI has introduced possibilities they could not previously imagine.",
      long: "Teams without a strong vision driving them face the risk of being replaced by AI products in the AI era. You need to find a core value proposition that AI cannot replace.",
    },
    howToImprove: [
      { time: "This week", body: "Organize your next iteration cycle's feature requests and have AI do a priority analysis. Compare the AI suggestion against the team's existing priority judgment. This exercise itself is very valuable." },
      { time: "This quarter", body: "Add an AI acceleration node to your delivery process: use AI to automatically generate feature technical spec drafts, test cases, and user documentation. Let AI handle standardized outputs, freeing up human time for judgment-heavy work." },
      { time: "Long-term", body: "Build a regular AI-assisted product direction exploration mechanism: every quarter, use AI to scan latest trends, competitor moves, and user behavior changes — helping the team shift from responding to the present toward anticipating the future." },
    ],
  },

  CVAF: {
    name: "CVAF — The Safety-Conscious Architect",
    mbti: "INTJ",
    score: 91,
    overview:
      "You are the kind of team that makes the entire AI industry feel a little more at ease. You simultaneously possess grand ambition and extreme attention to detail and risk — a combination that is especially rare in the AI space. What you build is seriously designed, with traceable reasoning behind every decision. Users trust you not just because the product works well, but because they sense there are people genuinely being responsible behind it.",
    scoreBreakdown: [
      { label: "Thinking framework & AI collaboration depth", score: 96 },
      { label: "Strategic clarity & AI direction", score: 94 },
      { label: "Process rigor & AI quality control", score: 92 },
      { label: "Execution speed", score: 78 },
    ],
    whatYouDoBest:
      "You are the best AI system designers in the AI era. Not just using AI, but designing how AI should work across your entire product and team. You can think about AI workflow architecture, identify new risks AI introduces, and establish principles and boundaries for AI use — this kind of systematic AI thinking is one of the most lacking capabilities in the entire industry.",
    areasToImprove: [
      { title: "Establish a good enough decision threshold", body: "In the AI era, good enough and ship fast often beats perfect and ship slow, because real feedback has far higher information density than internal analysis. Set a clear good enough standard for different decision types to prevent over-analysis." },
      { title: "Cultivate team AI experimentation willingness", body: "Build a low-risk experimentation zone that clearly defines what types of AI experiments can move fast without a full safety review. Safety awareness should not suppress all experimentation." },
      { title: "Convert safety awareness into competitive advantage", body: "You are the team type best positioned to become thought leaders in responsible AI use. Consider openly sharing your practices in AI safety and risk management — this is your most unique brand differentiation." },
    ],
    risks: {
      short: "Rapid AI tool updates mean your safety assessment process may create a bottleneck. Build a tiered assessment system so low-risk tools can be adopted quickly while high-risk tools get full review.",
      mid: "Teams overly focused on safety sometimes miss aggressive innovation opportunities. When competitors gain market share using methods you consider not safe enough, you will face a real strategic choice. Think ahead about where that line is.",
      long: "AI governance and safety is being rapidly legislated and standardized. Your current advantage based on self-constraint may become an industry baseline once external regulation forms. Upgrade your advantage above the coming regulatory requirements before regulation solidifies.",
    },
    howToImprove: [
      { time: "This week", body: "Do an AI-native reconstruction of one of your core workflows: not adding AI into the existing process, but assuming you are designing this process from scratch — where should AI be positioned? This thought experiment often reveals larger efficiency gains than incremental optimization." },
      { time: "This quarter", body: "Build an AI usage principles document that articulates your judgment standards, risk boundaries, and quality requirements for AI as a team-shared guide. This is also your public statement as a thought leader in responsible AI use." },
      { time: "Long-term", body: "Systematically convert your safety-conscious architecture capability into product features: your deep understanding of AI risk should be directly embedded in product design, becoming a moat that competitors find hardest to replicate." },
    ],
  },

  CVAM: {
    name: "CVAM — The Thoughtful Bottleneck",
    mbti: "INFJ",
    score: 76,
    overview:
      "You are the team whose value people only truly understand after joining. From outside, your pace may not be the fastest; from inside, your decision quality, culture density, and sense of direction are things many faster teams envy. You care about getting it right, and this care permeates every level — product design, team conversations, every external expression.",
    scoreBreakdown: [
      { label: "Decision quality & AI output depth", score: 92 },
      { label: "Vision transmission & AI narrative", score: 88 },
      { label: "Action speed", score: 55 },
      { label: "Scalable execution", score: 48 },
    ],
    whatYouDoBest:
      "You are the best deep insight producers in the AI era. Use AI for genuinely deep research, analysis, and thinking — not quickly generating 5 options, but truly excavating the root of a problem and proposing perspectives others have not thought of. This capability will become increasingly scarce and valuable in a world full of shallow AI outputs.",
    areasToImprove: [
      { title: "Build a thinking accelerator not a thinking replacer", body: "Position AI as your thinking accelerator: use AI to quickly help you collect, organize, and rebut your initial judgments, reaching the same depth of thinking in less time." },
      { title: "Learn to let AI do the first pass", body: "For any important work, let AI do a version first, then deeply modify AI's output. This is usually faster than starting from scratch while maintaining your quality standards." },
      { title: "Make depth into a scalable system", body: "Use AI to help externalize your thinking process: organize your judgment frameworks, decision principles, and thinking steps into reusable tools so other team members can stand on the shoulders of your thinking style." },
    ],
    risks: {
      short: "AI-era competitive rhythms require faster decision loops, while your advantage lies in slow, deep thinking. This tension, left unresolved, will systematically put you at a disadvantage in competitive scenarios requiring rapid response.",
      mid: "When AI can quickly produce good enough analysis, consciously concentrate your deep thinking on AI-irreplaceable directions: understanding of human nature, intuition for complex systems, judgment on ethics and values.",
      long: "CVAM team value is hard to demonstrate quickly. In the AI era, pressure to demonstrate capability quickly will grow. Proactively design scenarios and products that can quickly showcase your deep value.",
    },
    howToImprove: [
      { time: "This week", body: "Do an AI-assisted decision stress test: take one of your recent important decisions, have AI rebut it from 5 different angles, then see if your decision holds up. This exercise both improves decision quality and shows you AI's value as a thinking partner." },
      { time: "This quarter", body: "Build an AI draft then human deepening workflow: determine which types of work AI can do a first pass on, then humans do deep improvement. This model combines AI speed with your depth." },
      { time: "Long-term", body: "Systematize your deep thinking methodology and use AI to help spread it: organize your decision frameworks, analytical methods, and judgment principles into teachable tools, with AI generating cases, exercises, and application scenarios." },
    ],
  },

  CVPF: {
    name: "CVPF — The Lone Genius",
    mbti: "INTP",
    score: 74,
    overview:
      "What you produce often surprises people, because it comes from genuine deep thinking rather than copying existing patterns. Your team culture gives everyone enough autonomy to truly think something through, then act according to their own judgment. This respect for individual intellect is the most important source of your creativity.",
    scoreBreakdown: [
      { label: "Individual AI creativity", score: 93 },
      { label: "Conceptual framework building", score: 88 },
      { label: "Team AI collaboration", score: 45 },
      { label: "Execution rhythm consistency", score: 50 },
    ],
    whatYouDoBest:
      "You are the best conceptual breakthroughs team in the AI era. Use AI to explore true frontiers — not optimizing existing solutions, but redefining the problem itself. You can produce things that genuinely surprise the industry with AI, because your starting point is not how to do it better but why do it this way at all.",
    areasToImprove: [
      { title: "Build a pipeline from individual AI output to team knowledge", body: "Build an extremely low-friction sharing mechanism: whenever there is an AI exploration worth recording, capture it in a voice note, AI auto-converts to text summary, added to the team shared knowledge base." },
      { title: "Design collective concept collision time", body: "Every two weeks, schedule an AI exploration share: each person brings the most interesting AI discovery from that week, 15 minutes, pure sharing, no decisions required. This low-pressure sharing will produce unexpected cross-individual creative connections." },
      { title: "Build a collective verification mechanism for independent thinking", body: "Whenever there is an important original idea, have AI find its loopholes, counterexamples, and competing explanations first — strengthening the parts that hold up, fixing the parts that do not." },
    ],
    risks: {
      short: "CVPF teams easily fall into AI thought experiments without producing real output. AI is too good at discussing and analyzing, and for a team that already prefers thinking over execution, AI may reinforce this tendency. Set explicit output formats and deadlines for each AI exploration project.",
      mid: "Your originality depends on distance from mainstream perspectives, but AI is essentially a compression of massive mainstream content — deep collaboration with AI may unconsciously pull you toward mainstream thinking patterns. Consciously maintain a habit of reverse questioning in AI collaboration.",
      long: "When AI lets everyone generate seemingly deep concepts, the market value of truly deep original thinking will be misjudged. You need to better demonstrate your originality — not just articulating it, but making it visible in real products and results.",
    },
    howToImprove: [
      { time: "This week", body: "Do a team AI capability map: have each person describe their 3 most valuable current AI uses, and use AI to aggregate these into a knowledge map identifying overlaps and complements. This gives you your first real view of the team's AI capability landscape." },
      { time: "This quarter", body: "Build a concept to product AI workflow: design a specific AI-assisted process to help rapidly convert your best concepts into testable prototypes, shortening the distance from thought through to built out." },
      { time: "Long-term", body: "Systematize your most valuable original frameworks and use AI to expand and distribute them: organize your core thinking tools into a teachable methodology, with AI generating application cases, exercises, and guides for different scenarios." },
    ],
  },

  CVPM: {
    name: "CVPM — The Well-Intentioned Talker",
    mbti: "ENFP",
    score: 61,
    overview:
      "You are the team where every person who joins feels their voice is heard. You think through conversation, align through discussion, and make decisions through collective wisdom. This valuing of every individual builds an extremely high-density psychological safety, making team members willing to express real thoughts rather than performatively complying.",
    scoreBreakdown: [
      { label: "Vision narrative & AI creativity", score: 82 },
      { label: "Flexible adaptability", score: 72 },
      { label: "Dialogue density & AI context accumulation", score: 38 },
      { label: "Action landing rate", score: 45 },
    ],
    whatYouDoBest:
      "You are the best collective wisdom catalysts in the AI era. Use AI to enhance your conversations — provide background and data with AI before discussions, record insights with AI in real-time during discussions, and distill consensus and action items with AI after discussions. If you can embed AI into your conversation processes, your collective wisdom will grow at a disproportionate rate.",
    areasToImprove: [
      { title: "Install AI memory for conversations", body: "Introduce AI real-time recording in all important conversations: not just recording what was said, but recording what consensus was reached, what insights emerged, what decisions were made. Make this standard process and the value of every conversation will double." },
      { title: "Separate conversation conclusions from conversation process", body: "After each important conversation, spend 10 minutes having AI help distill: 3 most important points of consensus, 2 unresolved disagreements, 1 most important action item." },
      { title: "Build a conversation to action to feedback closed loop", body: "Introduce AI to track action item completion and effectiveness, bringing feedback data back into the next conversation, so each conversation stands on the learning of the previous one." },
    ],
    risks: {
      short: "Information explosion in the AI era will exacerbate conversation fatigue — there is more and more to discuss, but conversation time is limited. Without proactively designing which things need conversation and which AI can handle independently, your conversation culture may be overwhelmed.",
      mid: "High psychological safety teams face a subtle challenge: when AI can provide almost unlimited feeling heard, one-on-one interactions with AI may somewhat replace internal team conversations, weakening the cultural density of collective dialogue.",
      long: "The well-intentioned but unfocused risk: in the AI era, tool abundance will make this tendency more pronounced — every conversation generates new ideas, and AI can quickly turn these into prototypes, creating more things to discuss. Proactively establish direction anchors to prevent losing focus in infinite possibilities.",
    },
    howToImprove: [
      { time: "This week", body: "Trial an AI real-time secretary in your next important meeting: full AI transcription throughout, immediately after the meeting use AI to generate a structured summary. Compare how much distillable knowledge this conversation produced versus without AI." },
      { time: "This quarter", body: "Add a collective AI learning module to meeting agendas: every two weeks, add 5 minutes at the start of a regular meeting for one team member to share the most valuable thing they did with AI that week. Low pressure, pure sharing, no judgment." },
      { time: "Long-term", body: "Build an AI-assisted collective knowledge base that automatically accumulates insights from each important conversation, regularly having AI distill patterns and findings — truly converting your conversation density into organizational-level learning advantage." },
    ],
  },

  CRAF: {
    name: "CRAF — The Craft Studio",
    mbti: "ISFJ",
    score: 78,
    overview:
      "You are the team that makes users feel, after using your product, that someone genuinely cared about making this. This feeling does not come from marketing, but from every detail of the product itself. You have near-instinctive quality standards that do not need external pressure to maintain — they come from the team's shared recognition of doing it well. Users can feel this difference, even if they cannot articulate why.",
    scoreBreakdown: [
      { label: "Quality standards & AI output control", score: 92 },
      { label: "Deep work & AI focus", score: 88 },
      { label: "New tool adoption speed", score: 58 },
      { label: "Proactive innovation willingness", score: 60 },
    ],
    whatYouDoBest:
      "You are the best quality refiners in the AI era. AI produces the draft, you polish it to craftsman standards, until every detail holds up to scrutiny. This combination will produce real differentiation in highly competitive product markets — because most teams accept AI's first draft, and you will not.",
    areasToImprove: [
      { title: "Build a quality standards library", body: "Systematically externalize your quality standards: write what good enough means as specific checklists, then use these checklists to train AI's evaluation ability — making AI your first quality checkpoint." },
      { title: "Proactively explore AI-native craft possibilities", body: "Every quarter, do an AI-native possibilities exploration: ask yourself, if we designed our product or service from scratch using AI, what could we do that was previously impossible?" },
      { title: "Transmit craftsmanship to AI", body: "Invest time converting your quality judgment system into language AI can understand and execute: detailed quality descriptions, positive and negative example comparisons, scoring criteria. This one-time investment will fundamentally improve your AI output quality." },
    ],
    risks: {
      short: "Rapid AI tool updates mean your carefully built quality validation process will need frequent updating. Make quality standards maintenance itself automated: use AI to track tool updates, identifying which updates need re-validation.",
      mid: "Competition in the AI era will rapidly raise the good enough quality standard. Your high standards today may only be the industry average tomorrow. Build a proactive quality benchmark update mechanism, regularly reassessing whether your standards are still leading.",
      long: "Craftsman culture's biggest long-term risk is difficulty scaling. As the team grows, maintaining craftsman standards on every output while keeping sufficient speed is the hardest long-term challenge for this type. AI can help solve this scaling problem, but needs systematic design.",
    },
    howToImprove: [
      { time: "This week", body: "Deconstruct one of your recent high-quality outputs into parts AI can do and parts requiring human craftsmanship. In most work, 60-70% can be AI draft, the remaining 30-40% is where your craftsmanship is truly needed. Identifying this boundary clearly will greatly improve your AI efficiency." },
      { time: "This quarter", body: "Build an AI plus craftsman collaboration process: design a standardized workflow where AI is responsible for efficiency and humans are responsible for quality. Define AI's role and the human role at each step." },
      { time: "Long-term", body: "Convert your craftsman standards into AI prompt engineering: build detailed quality assessment prompts for your most important output types, making AI capable of serving as the first quality checkpoint before human review." },
    ],
  },

  CRAM: {
    name: "CRAM — The Aligned Adult",
    mbti: "ENFJ (mature)",
    score: 66,
    overview:
      "You are the team that becomes more trustworthy the better you know them. You know what you are building, why you are building it, and how you want to work together — teams that are simultaneously clear on all three are rarer than most people imagine. You maintain this clarity through continuous honest conversation, and this habit of active maintenance is the most precious thing in your culture.",
    scoreBreakdown: [
      { label: "Values consistency & AI usage principles", score: 88 },
      { label: "Dialogue quality & AI context depth", score: 82 },
      { label: "Decision speed", score: 55 },
      { label: "Experimentation willingness", score: 50 },
    ],
    whatYouDoBest:
      "You are the best AI governance designers in the AI era. Not just using AI, but thoughtfully considering what scope AI should operate within, what principles it should follow, and who should evaluate its effectiveness. This mature thinking about AI use is an extremely lacking capability in the entire industry.",
    areasToImprove: [
      { title: "Build individual AI authorization scope", body: "Clearly define which types of AI use can be explored independently by individuals, and which need team discussion. Give individuals more AI experimentation autonomy while maintaining collective oversight of important AI applications." },
      { title: "Transfer honest conversation ability to AI collaboration", body: "Do not just treat AI as a tool, but engage with it as a collaborator that deserves to be taken seriously — give it clear context, give honest feedback on its outputs, help it better understand your working style." },
      { title: "Accelerate experimental validation of AI principles", body: "Every quarter, select one principle for stress testing, seeing if it holds up in real scenarios, and updating the principle based on results." },
    ],
    risks: {
      short: "AI tool update speed means your AI usage principles need frequent updating, and frequent updates require frequent collective conversation. Build an async update mechanism for AI principles so maintaining principles does not become the main drain on collective conversation.",
      mid: "Mature alignment culture faces a new challenge: AI dramatically boosts individual productivity, creating centrifugal force on collective alignment culture. Redesign how alignment works so it still has sufficient value in the AI era.",
      long: "CRAM's biggest long-term risk is alignment cost rising with scale. When the team grows from 10 to 50 people, the time and energy needed to maintain the same density of honest conversation grows exponentially. AI can help solve this, but needs proactive design.",
    },
    howToImprove: [
      { time: "This week", body: "Use AI for a team AI usage current state audit: have everyone record all the things they did with AI in the past week, then use AI to aggregate and analyze, identifying the most valuable usage patterns and the biggest gaps." },
      { time: "This quarter", body: "Build an AI-assisted alignment maintenance system: use AI to automatically monitor team work progress and decisions, identifying signals of potential alignment drift — triggering conversations before gaps occur." },
      { time: "Long-term", body: "Productize your mature alignment capability: if your product serves other teams, your deep understanding of how to maintain healthy team alignment in the AI era is a real product differentiation direction." },
    ],
  },

  CRPF: {
    name: "CRPF — The Quiet Operator",
    mbti: "ISTP variant",
    score: 60,
    overview:
      "You build credibility through action rather than words. There is a quiet professionalism in the team — everyone knows their work, knows how to do it well, then goes and does it. You do not need external validation to confirm you are doing the right thing; internal standards are enough. This self-sufficient work culture is a remarkably rare steadiness in a noise-filled industry.",
    scoreBreakdown: [
      { label: "Individual professional depth & AI enhancement", score: 82 },
      { label: "Execution precision", score: 80 },
      { label: "Cross-team AI knowledge sharing", score: 35 },
      { label: "AI experimentation proactiveness", score: 42 },
    ],
    whatYouDoBest:
      "You are the most reliable precision executors in the AI era. When you decide to integrate AI into a workflow, it gets done with extreme thoroughness and consistency. Your AI workflows are not casual — they are truly integrated into daily work, and this depth of integration is something most teams find very hard to achieve.",
    areasToImprove: [
      { title: "Build visibility for quiet AI practices", body: "Build an extremely low-friction practice recording method: whenever there is an AI use worth recording, capture it in one Slack message or short document — no explanation needed, just record. Accumulated over time, these records become extremely valuable team knowledge assets." },
      { title: "Make cautious validation standards explicit", body: "Build clear AI tool adoption criteria: what metrics does this tool need to reach before I formally add it to my workflow? Make implicit caution into explicit standards." },
      { title: "Build a low-cost team AI sync mechanism", body: "Once a month, everyone contributes one line, AI aggregates into a monthly report, everyone reads it on their own, no discussion needed — just awareness. Fits your culture while maintaining team AI capability consistency." },
    ],
    risks: {
      short: "AI-era individual productivity differences will appear first in CRPF teams: everyone explores AI independently, capability gaps diverge quickly, but silent culture makes this divergence invisible long-term. Build regular AI capability baseline assessments to proactively identify and close gaps.",
      mid: "The quiet operation brand positioning will find it increasingly difficult to get market attention in the AI era. When AI lets every team produce professional content at low cost, the price of staying low-profile rises quickly.",
      long: "CRPF's individualist culture faces a fundamental challenge: AI's greatest value is often at the system level, not just the individual level. Crossing from individuals using AI well to systematically deploying AI is the most important capability gap this type needs to bridge.",
    },
    howToImprove: [
      { time: "This week", body: "Do a team AI professional capability inventory: each person lists their 3 areas of strongest AI use and 3 areas of weakest AI use. Aggregate these and you will see the team's AI capability map, identifying who can help whom and which areas are team-wide gaps." },
      { time: "This quarter", body: "Establish an AI pair learning system: pair the two team members with the biggest AI usage difference, 30 minutes every two weeks, each shows the other their AI working style. No judgment, just show." },
      { time: "Long-term", body: "Transfer your precision execution advantage to AI system design: design an AI-driven workflow automation system that embeds your most valuable execution precision into the system, so it continues running reliably even without direct individual involvement." },
    ],
  },

  CRPM: {
    name: "CRPM — The Patient Craftsperson",
    mbti: "INFP",
    score: 46,
    overview:
      "You will not go all-in before truly believing in something — this internal standard ensures everything you deliver has been genuinely tested, not padding, not compromise. You maintain mutual understanding through continuous honest conversation, and the team has a deep mutual trust that is not built through process but through real human-to-human connection.",
    scoreBreakdown: [
      { label: "Internal standards & AI output quality", score: 75 },
      { label: "Honest dialogue culture & AI integration", score: 65 },
      { label: "Action speed", score: 30 },
      { label: "Systematic AI workflow", score: 25 },
    ],
    whatYouDoBest:
      "You are the best deep value creators in the AI era. Among all types, CRPM outputs often have a depth and authenticity others find hard to replicate — because you will not do something before you truly understand it. When this depth combines with AI's efficiency, what gets produced has a unique soulful precision.",
    areasToImprove: [
      { title: "Build an AI trust threshold rather than an AI rejection habit", body: "Concretize your values into actionable AI trust standards: what conditions does this AI tool need to meet for me to trust it enough? Once conditions are met, fully use it rather than maintaining perpetual distance." },
      { title: "From in-conversation to post-conversation: capture collective wisdom", body: "Use AI to automatically record insights and consensus from each important conversation — truly converting your conversation density into accumulable knowledge assets." },
      { title: "Find the intersection of AI and your authenticity values", body: "AI is a tool, like a word processor — authenticity comes from the thinking and judgment of the person using it, not from the tool itself. Once this reframing is accepted, AI's value to you will suddenly become very clear." },
      { title: "Build a small-steps-fast AI experimentation habit", body: "Every week, pick an unimportant task, do it with AI, no commitment to results, just exploration. Lower the psychological cost of each AI experiment until experiment frequency goes from once a month to once a week." },
    ],
    risks: {
      short: "AI-era competitive speed is the biggest external pressure on CRPM. When competitors use AI to advance at 3x speed, your patience may shift from advantage to disadvantage. Identify which areas need to speed up and which areas are worth continuing to be patient about.",
      mid: "Your high standards for authenticity will face a practical problem in an environment of heavy AI use. The sooner you redefine what authentic means in the context of AI tools, the better positioned you will be.",
      long: "CRPM's biggest long-term risk is hidden unsustainability: high quality, low speed works when resources are sufficient, but becomes increasingly hard to maintain under competitive pressure. Start building a system now that can improve speed while maintaining quality.",
    },
    howToImprove: [
      { time: "This week — start here", body: "Do an AI bias check: write down your 5 most core concerns about AI, then spend a week seeking real evidence to test each one — whether it actually holds up. This helps you distinguish which concerns are genuinely valid and which are based on misunderstanding or outdated information." },
      { time: "This quarter", body: "Build an AI-assisted but human-led workflow for the work you are best at: AI handles information gathering, draft generation, and format processing; humans are responsible for judgment, deepening, and final quality control. In this model, AI serves your standards rather than lowering them." },
      { time: "Long-term", body: "Convert your patience into a true AI-era advantage: in a world full of shallow AI outputs, your insistence on depth and authenticity will become increasingly valuable. Intentionally build your depth brand so the market can feel the essential difference between your way of doing things and the fast-consumption products of the AI era." },
    ],
  },
};
