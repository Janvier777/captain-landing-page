export interface QuizOption {
  letter: string;
  text: string;
  note: string;
  side: string;
}

export interface QuizQuestion {
  id: number;
  dim: string;
  text: string;
  sub: string;
  options: QuizOption[];
}

// Questions reordered: original IDs 4,8,11,14,17,24,25,28,29,30,2,3,6,7,9,13,15,16,18,19,20,22,26,27
// Deleted original IDs: 1,5,10,12,21,23
export const questions: QuizQuestion[] = [
  { id: 1, dim: "vr", text: "Someone asks what your company will look like in 5 years. Your actual answer:", sub: "The one you believe, not the one that sounds good on stage.", options: [
    { letter: "A", text: "We'll be the infrastructure layer that every AI company builds on top of.", note: "If you're right, it's enormous. If you're wrong, the pivot will be very interesting.", side: "V" },
    { letter: "B", text: "We'll have 500 enterprise customers and strong NRR. That's the goal.", note: "Concrete. Achievable. Slightly boring at dinner parties. You're fine with this.", side: "R" },
    { letter: "C", text: "We're building toward a world where [sweeping statement about AI and humanity].", note: "The person you're talking to has started looking for a way to refill their drink.", side: "V" },
    { letter: "D", text: "Honestly? We're focused on the next 12 months. Five years is too far to predict.", note: "Epistemic humility. Or a valuation question you don't want to answer.", side: "R" }
  ]},
  { id: 2, dim: "vr", text: "An investor asks: 'What's your moat?' The answer that comes out before you can edit it:", sub: "The real one.", options: [
    { letter: "A", text: "Our data flywheel. The more users we have, the better the model gets, the harder we are to replace.", note: "Classic. Compelling. True for about 8% of companies that claim it.", side: "V" },
    { letter: "B", text: "Distribution and relationships. We know these customers better than anyone trying to replicate us.", note: "Boring. Extremely durable. Investors want to hear the other answer.", side: "R" },
    { letter: "C", text: "Honestly, we're still figuring out where the real stickiness is. We have strong hypotheses.", note: "This is the most honest answer. It will not help you close the round.", side: "R" },
    { letter: "D", text: "Speed of iteration. By the time someone copies this, we'll be three versions ahead.", note: "True at pre-seed. Gets tested when you are no longer the only one running.", side: "V" }
  ]},
  { id: 3, dim: "vr", text: "A major AI lab just released something that makes half your roadmap look obvious. Your team's internal reaction:", sub: "The Slack thread. Not the blog post.", options: [
    { letter: "A", text: "They proved the market. We just need to execute faster. Let's go.", note: "Unbothered. Possibly correct. Possibly performing unbothered.", side: "V" },
    { letter: "B", text: "Okay. What exactly did they ship? How does it compare to what we have? What do we change?", note: "Update function running. Systematic. Slightly less fun to watch.", side: "R" },
    { letter: "C", text: "We were going to build something way better anyway. This is actually good for us.", note: "The reframe happens within 90 minutes. You clock this as healthy.", side: "V" },
    { letter: "D", text: "Someone opens a competitive analysis doc. Someone else updates the roadmap. No drama.", note: "Calm. Functional. Borderline unsettling to outside observers.", side: "R" }
  ]},
  { id: 4, dim: "vr", text: "Your job description says 'working on one of the most important problems in the history of technology.' When you wrote this, you:", sub: "Honest self-assessment.", options: [
    { letter: "A", text: "Meant it completely. This is exactly how we think about what we're building.", note: "You believe this. Your NPS scores show it. Your burn rate also shows it.", side: "V" },
    { letter: "B", text: "Thought it was a bit much, but it's what people want to read, so fine.", note: "The market for mission statements is real. You are participating in it.", side: "R" },
    { letter: "C", text: "Debated it. Kept it. Still believe it, mostly.", note: "Healthy ambivalence. The sentence survives the edit. That means something.", side: "V" },
    { letter: "D", text: "Changed it to something more specific about what the role actually does.", note: "You have rejected the paradigm. The JD describes a job. Radical.", side: "R" }
  ]},
  { id: 5, dim: "vr", text: "Someone proposes using AI to replace a workflow that currently needs a human. Your team's honest reaction:", sub: "Not the values statement. The room temperature.", options: [
    { letter: "A", text: "Genuinely excited. We immediately prototype it. We figure out the human situation later.", note: "Move fast. The human situation is a downstream problem.", side: "V" },
    { letter: "B", text: "Interested, but we want to understand what the human actually does before replacing them.", note: "Due diligence before automation. Slower but you sleep better.", side: "R" },
    { letter: "C", text: "We try the AI version first. If it works, great. If not, we've learned something.", note: "Empirical approach. The human's job is safe until the eval says otherwise.", side: "R" },
    { letter: "D", text: "We'd automate everything if we could. Manual processes are tech debt with a salary.", note: "This is a strong opinion. You have said it out loud at a company event.", side: "V" }
  ]},
  { id: 6, dim: "vr", text: "Your AI product finds unexpected traction in a market segment you didn't target. You:", sub: "The real decision, not the thought leadership version.", options: [
    { letter: "A", text: "We note it as a signal but hold the original vision. The niche doesn't change our direction.", note: "Vision-committed. The detour is logged but not followed. You may be right.", side: "V" },
    { letter: "B", text: "We lean in. Profitable traction beats beautiful vision every time.", note: "Revenue gravity. You follow what works. The original vision updates around this.", side: "R" },
    { letter: "C", text: "We serve the niche while staying on the main trajectory. We can do both.", note: "And not or. Requires more resources than it sounds. You proceed anyway.", side: "V" },
    { letter: "D", text: "We dig into why it's working first. The insight shapes everything else.", note: "Understanding before action. The data tells you what the pivot should be.", side: "R" }
  ]},
  { id: 7, dim: "ap", text: "Your team disagrees about whether a model output is good enough to ship. Three engineers, three opinions. Resolution:", sub: "The actual mechanism.", options: [
    { letter: "A", text: "We write down the criteria we're actually judging against. Then we judge against the criteria.", note: "Disagreement as a measurement problem. Make it concrete. It works.", side: "A" },
    { letter: "B", text: "The person who owns the feature decides. We trust their judgment. Full stop.", note: "Single owner. Fast. Relies on trust being well-placed. Usually is.", side: "P" },
    { letter: "C", text: "We ship to 5% of users and let the data decide.", note: "The users are the tiebreaker. Bold. Effective. Slightly outsources the moral responsibility.", side: "P" },
    { letter: "D", text: "We define what 'good enough' means before we ship anything else. This takes a day.", note: "Alignment before action. The launch waits for the definition. Worth it.", side: "A" }
  ]},
  { id: 8, dim: "vr", text: "Your three-year plan. Where does the confidence actually come from?", sub: "The honest source.", options: [
    { letter: "A", text: "From knowing where AI is going and where we fit in that trajectory.", note: "Macro to micro. If the macro is right, the micro follows. Big if.", side: "V" },
    { letter: "B", text: "From the unit economics we've already proven at small scale.", note: "Evidence-based confidence. Boring. Correct. The kind investors actually like.", side: "R" },
    { letter: "C", text: "From the team. If we're this good at three people, imagine at thirty.", note: "Talent-compounding theory. Requires the talent to actually compound.", side: "V" },
    { letter: "D", text: "We have a rolling 12-month plan. Three years is too speculative to call a plan.", note: "Operational realism. The plan is a stake in the ground, not a prediction.", side: "R" }
  ]},
  { id: 9, dim: "ap", text: "Someone on the team has a gut feeling your AI approach is fundamentally wrong. They can't explain it yet. You:", sub: "What the team does with this signal.", options: [
    { letter: "A", text: "Ask them to write up their thinking before the next meeting. Intuition needs to earn its seat.", note: "Articulable or it doesn't count. Some intuitions survive this filter. Those are the good ones.", side: "A" },
    { letter: "B", text: "Take it seriously. Deep product intuition from someone who knows the system is worth more than they can justify.", note: "Trust the experienced gut. The articulation can follow.", side: "P" },
    { letter: "C", text: "Ask them to prototype an alternative. Seeing is faster than describing.", note: "Show don't tell. The prototype becomes the argument.", side: "P" },
    { letter: "D", text: "Log it and revisit in two weeks. Intuitions sometimes crystallize on their own.", note: "Patient holding. You've seen this become something real before. You give it space.", side: "A" }
  ]},
  { id: 10, dim: "fm", text: "Your team's Slack #random channel. What's actually in there?", sub: "Scroll through it. Now answer.", options: [
    { letter: "A", text: "AI paper links with comments. 'Thoughts?' No one replies. The papers are good.", note: "Academic culture. The silence is not a rejection of the paper. Probably.", side: "F" },
    { letter: "B", text: "Memes about prompts breaking, token limits, and hallucinations. The grief is communal.", note: "Shared suffering as bonding. This is a healthy team.", side: "M" },
    { letter: "C", text: "Dog photos, 'does anyone know the WiFi password,' and a gif that landed wrong.", note: "Human. Warm. Zero AI content. You are all pretending to be normal people.", side: "M" },
    { letter: "D", text: "A pinned message from six months ago that says 'keep it work-related.' Below it: chaos.", note: "The rule exists. It is not followed. The rule is important for the principle.", side: "F" }
  ]},
  { id: 11, dim: "sc", text: "Your team has been going back and forth on a product decision for three days. How does it end?", sub: "Not how it should end. How it actually ends.", options: [
    { letter: "A", text: "Someone just does it. The Slack thread is still unresolved. The feature is live.", note: "The debate continues in the thread. The feature does not care.", side: "S" },
    { letter: "B", text: "We write a doc with the pros and cons. Someone is assigned to review it. We decide by Friday.", note: "Friday becomes the following Monday. This is fine.", side: "C" },
    { letter: "C", text: "The loudest person wins. We call this 'strong conviction culture.'", note: "The loudest person is sometimes right. We call this 'luck.'", side: "S" },
    { letter: "D", text: "We schedule a meeting to decide. The meeting produces another meeting.", note: "Meetings are load-bearing. Remove one and the org chart collapses.", side: "C" }
  ]},
  { id: 12, dim: "sc", text: "You're describing your MVP to a potential user for the first time. Honestly, what is it?", sub: "The version you'd show your investor vs the version you'd show your mom.", options: [
    { letter: "A", text: "A Google Form and a Notion page we're calling a 'dashboard.' The AI is us, manually.", note: "Wizard of Oz MVP. Classic. The curtain is very thin.", side: "S" },
    { letter: "B", text: "A real product. It works. We spent the extra two weeks making sure.", note: "You missed your self-imposed deadline by two weeks. The product is good though.", side: "C" },
    { letter: "C", text: "It ships today. It's 80% done. We'll fix the other 20% based on feedback.", note: "The feedback will be: please fix the other 20%.", side: "S" },
    { letter: "D", text: "We're still in beta. Waitlist only. We want to make sure it's ready before we open it up.", note: "The waitlist has 200 people. The beta has been open for 6 months.", side: "C" }
  ]},
  { id: 13, dim: "ap", text: "Claude writes a first draft of your product spec. It's 80% right. Your team's actual next move:", sub: "What happens in the next hour.", options: [
    { letter: "A", text: "Light edits, share with stakeholders immediately. Real feedback will fix the rest.", note: "80% is shippable. The remaining 20% is someone else's problem for now.", side: "P" },
    { letter: "B", text: "The product owner rewrites it properly using the draft as inspiration only.", note: "AI as scaffolding. Human judgment as the actual product. Classic.", side: "A" },
    { letter: "C", text: "We label it 'AI draft — needs review' and gather input before finalizing.", note: "Transparent. Thorough. Will take three extra days. Worth it, probably.", side: "A" },
    { letter: "D", text: "We ship it as-is. If someone has notes, they can leave comments.", note: "'Comments are open' is our quality assurance process.", side: "P" }
  ]},
  { id: 14, dim: "sc", text: "A production bug hits on a Friday at 5pm. It affects 10% of users. Your team:", sub: "The honest version.", options: [
    { letter: "A", text: "Fixed and deployed by 5:45. Post-mortem scheduled for Monday. Slack message sent.", note: "Speed of response is a product feature. You treat it that way.", side: "S" },
    { letter: "B", text: "On-call engineer assesses severity. If it can wait until Monday, it waits until Monday.", note: "You have defined SLAs. They are followed. This is what maturity looks like.", side: "C" },
    { letter: "C", text: "The engineer who wrote the code is voluntarily fixing it right now. Nobody asked them to.", note: "They were not going to enjoy their weekend anyway. Now at least they have a reason.", side: "S" },
    { letter: "D", text: "30-minute triage call. Severity agreed. Owner assigned. Fix by Sunday.", note: "Process as comfort. The call is the thing that makes everyone feel better.", side: "C" }
  ]},
  { id: 15, dim: "fm", text: "Your team needs to pick the next big AI feature to build. How does this decision actually get made?", sub: "Not the process in your team handbook. The observed one.", options: [
    { letter: "A", text: "The founder has a strong opinion. The meeting is 20 minutes. We build what the founder wanted.", note: "Benevolent autocracy. Scales until it doesn't. Right now it scales fine.", side: "M" },
    { letter: "B", text: "Async doc. Everyone adds their reasoning. Decision emerges from the thread. No meeting needed.", note: "Written culture. The doc does the meeting's job. Slightly magical when it works.", side: "F" },
    { letter: "C", text: "A half-day workshop with sticky notes and a voting framework.", note: "You are a professional organization. This is not an insult.", side: "M" },
    { letter: "D", text: "Whoever owns the roadmap decides. Others give input if they care enough to write it down.", note: "Clear ownership. Low ceremony. Sometimes the wrong call. Quickly reversible.", side: "F" }
  ]},
  { id: 16, dim: "fm", text: "It's 11pm and a critical bug just hit production. Your team's actual coordination:", sub: "What happens, not what should happen.", options: [
    { letter: "A", text: "One person fixes it alone and posts a summary to Slack when it's done.", note: "Hero engineering. Efficient. Unsustainable. They are already doing it again.", side: "F" },
    { letter: "B", text: "Incident channel opens. Severity assessed. Owner assigned. Updates every 20 minutes.", note: "Process as calm. The structure is why nobody panics.", side: "M" },
    { letter: "C", text: "Three people are now in a call. Two of them are not needed. Everyone stays anyway.", note: "Emotional support engineering. The extra two are there for morale. It works.", side: "M" },
    { letter: "D", text: "The on-call engineer handles it. Everyone else finds out in the morning summary.", note: "Clear rotation. Clean handoff. The morning summary is always read.", side: "F" }
  ]},
  { id: 17, dim: "ap", text: "A new engineer joins and immediately starts changing how your AI prompts work — without asking. The changes are actually better. What happens?", sub: "The actual team response.", options: [
    { letter: "A", text: "We appreciate the results but explain that prompt changes go through review. Even good ones.", note: "The process holds even when the outcome is good. Especially when it's good.", side: "A" },
    { letter: "B", text: "We celebrate the improvement. If it's better, it's better. Process is a tool, not a rule.", note: "Outcome over procedure. The team is slightly more nervous about the next new hire.", side: "P" },
    { letter: "C", text: "We have a quick conversation about why communication matters, without making it a thing.", note: "Culture transmission. Low drama. High signal.", side: "A" },
    { letter: "D", text: "Nothing happens. Nobody noticed until the deploy went out. The prompts are better now.", note: "Visibility: zero. Results: good. Governance: questionable.", side: "P" }
  ]},
  { id: 18, dim: "sc", text: "Your team is 'moving fast.' What does the tech debt situation actually look like?", sub: "The honest version your future self will have to deal with.", options: [
    { letter: "A", text: "There's a ticket called 'clean up the AI pipeline.' It was created in January. It is still open.", note: "The ticket has 47 comments. None of them are 'I fixed this.'", side: "S" },
    { letter: "B", text: "We pay it down in dedicated sprints. The debt is visible, tracked, and prioritized.", note: "You have a healthy relationship with entropy. This took years to build.", side: "C" },
    { letter: "C", text: "We've rewritten the core three times. Each time is cleaner. We're due for another one.", note: "Rewrite as lifestyle. The codebase is permanently under reconstruction.", side: "S" },
    { letter: "D", text: "It exists. We know where it is. It will become a problem around Series B. We accept this.", note: "Future-you problem. Present-you respects this decision.", side: "C" }
  ]},
  { id: 19, dim: "fm", text: "Your team's all-hands. What is it actually for?", sub: "Not the calendar invite description. The real reason.", options: [
    { letter: "A", text: "Alignment on direction. Everyone hears the same thing at the same time. This matters.", note: "Information synchronization as ritual. The meeting is the message.", side: "M" },
    { letter: "B", text: "If there's something that genuinely needs everyone, we call one. Otherwise, Loom exists.", note: "The Loom exists. It is watched. Most of the time.", side: "F" },
    { letter: "C", text: "Culture. Morale. The feeling of being a team. You can't async that.", note: "You have correctly identified something async cannot replace. The meeting earns its slot.", side: "M" },
    { letter: "D", text: "Honestly? We haven't had one in a month. We probably should.", note: "The absence of structure is also a structure. Just a quieter one.", side: "F" }
  ]},
  { id: 20, dim: "ap", text: "Your AI product generates something a user finds offensive. Nobody flagged this scenario in planning. Next 48 hours:", sub: "Process, culture, and vibe.", options: [
    { letter: "A", text: "Fix it. Communicate with the user. Retrospective. Eval set updated. Loop closed.", note: "Systematic learning. Every failure is a test case. The system gets smarter.", side: "A" },
    { letter: "B", text: "Fix it fast, respond to the user personally, decide if this is a pattern or a one-off.", note: "Human first, system second. The personal response costs 10 minutes and is worth it.", side: "P" },
    { letter: "C", text: "Fix it. Write the post-mortem. Identify three action items. Two get completed.", note: "You are honest about the two-thirds completion rate. You factor this in.", side: "A" },
    { letter: "D", text: "Fix it. Make a note. If it happens again, that's when we treat it as systemic.", note: "Evidence-based intervention. One data point is not a pattern. Two is.", side: "P" }
  ]},
  { id: 21, dim: "vr", text: "A competitor just raised a big round and hired a bunch of people to work on your exact idea. Your honest internal temperature:", sub: "Not the confident public version.", options: [
    { letter: "A", text: "Energized. If they think this space is worth that, we're in the right place.", note: "Validated by competition. You will put this in the next all-hands.", side: "V" },
    { letter: "B", text: "Concerned. We need to understand exactly what they're doing and update our plan.", note: "Rational response. Update function activated. No drama.", side: "R" },
    { letter: "C", text: "Honestly fine. We know our customers better. Money doesn't fix that.", note: "Customer intimacy as confidence. Sometimes this is correct. Not always.", side: "R" },
    { letter: "D", text: "Slightly worried for exactly 24 hours. Then we ship something and feel better.", note: "Shipping as therapy. Effective. Possibly unsustainable. Also effective.", side: "V" }
  ]},
  { id: 22, dim: "ap", text: "You're three months in and realize you have no documented rationale for half your AI design decisions. You:", sub: "The honest reaction.", options: [
    { letter: "A", text: "Schedule a documentation sprint. We'll reconstruct the reasoning and write it down.", note: "Retroactive documentation. Better late than never. The reasoning is mostly correct.", side: "A" },
    { letter: "B", text: "Shrug. The decisions are in people's heads. That's fine for now.", note: "Oral knowledge base. Survives until the key people leave. Then it becomes a mystery.", side: "P" },
    { letter: "C", text: "Start documenting going forward. Can't go back, but we can build the habit from here.", note: "Future-facing. The past is the past. The present is when it starts.", side: "A" },
    { letter: "D", text: "We're moving fast. If it becomes a problem, we'll fix it then.", note: "Conditional documentation. The condition has not yet been met.", side: "P" }
  ]},
  { id: 23, dim: "fm", text: "It's the end of the week. Nobody has written up what was decided in three separate Slack threads. Your team:", sub: "What actually happens to this information.", options: [
    { letter: "A", text: "The decisions live in the threads. Anyone who needs to know can search for them.", note: "Slack as database. This works until it doesn't. It currently works.", side: "F" },
    { letter: "B", text: "Someone sends a 'week in review' message every Friday. It includes the key decisions.", note: "One person creates structure for the group. This person is a hero. Pay them more.", side: "M" },
    { letter: "C", text: "It comes up in Monday standup and gets summarized there.", note: "Meeting as memory consolidation. The information survives. Just delayed.", side: "M" },
    { letter: "D", text: "Someone owns a decision log. It gets updated. It is actually read.", note: "You have built institutional memory. This is rarer than it should be.", side: "F" }
  ]},
  { id: 24, dim: "sc", text: "You're pitching a new product direction internally. How do you convince the team?", sub: "Your actual style.", options: [
    { letter: "A", text: "I build a prototype and show it. The demo is the argument.", note: "Show don't tell. The thing speaks for itself. Or fails to. Either way, you know quickly.", side: "S" },
    { letter: "B", text: "I write a structured document with the problem, options, recommendation, and risks.", note: "Written reasoning. Reviewable. Asynchronous. Takes longer. Survives the meeting.", side: "C" },
    { letter: "C", text: "I find two customers who want this and put them on a call with the team.", note: "External validation as internal persuasion. Customers do the convincing.", side: "S" },
    { letter: "D", text: "I map out the market, the competition, and the opportunity before bringing it to anyone.", note: "Homework first. You arrive prepared. The room has no surprises for you.", side: "C" }
  ]},
];

export interface ResultType {
  name: string;
  code: string;
  description: string;
  aiScore: number;
  tags: string[];
  tagColors: string[];
}

export const resultTypes: Record<string, ResultType> = {
  SVAF: { name: "The Apollo Program", code: "SVAF", description: "You are the team that others simultaneously admire and find slightly exhausting to be around. Your vision is real, your execution is credible, your principles are actually followed, and your focus time is protected — all four of these happening in the same team is rarer than it sounds. You attract people who want to genuinely accomplish something important, not just participate in something interesting. Here, 'we're changing the world' isn't recruitment copy. It's Monday morning's work.", aiScore: 94, tags: ["Ships before kickoff", "Galaxy-brain vision", "Process-rigorous", "Deep focus only"], tagColors: ["purple", "teal", "teal", "purple"] },
  SVAM: { name: "The Brilliant Dumpster Fire", code: "SVAM", description: "If your team were a piece of music, it would be a jazz improvisation — no fixed score, but everyone knows when to come in, and what emerges tends to surprise the audience. Your idea density is high, your action speed is fast, and your conversations always seem to be heading somewhere exciting. People who work near you feel their thinking being continuously stretched. That's a rare team experience, and it's what makes people want to stay.", aiScore: 84, tags: ["Ships fast", "Civilizational stakes", "Aligned-ish", "Meetings: haunted"], tagColors: ["purple", "teal", "purple", "amber"] },
  SVPF: { name: "The Charismatic Cowboy", code: "SVPF", description: "You're a team driven by instinct and momentum — while others are still running analysis, you already have real data from the real world. Your ability to smell opportunity is exceptional, and you can make good decisions with incomplete information. That's not recklessness; it's a skill that's very hard to develop after the fact. Your team's individual heroics aren't a weakness — they're fuel. You tend to ship far more than your team size would suggest.", aiScore: 80, tags: ["Moves at speed", "Grand vision", "Gut-level ethics", "Async default"], tagColors: ["purple", "teal", "amber", "teal"] },
  SVPM: { name: "The Hype Machine", code: "SVPM", description: "The energy your team radiates is a genuine form of product value — it attracts talent, attracts users, attracts people who believe in what you're doing. Your vision doesn't live on a wall poster; it lives inside every conversation, every all-hands, every Slack message. That kind of collective belief is something many teams list as a goal but can never quite build. You've built it.", aiScore: 70, tags: ["Ships often", "Big picture", "Vibes-based ethics", "Everything is a meeting"], tagColors: ["purple", "teal", "amber", "amber"] },
  SRAF: { name: "The Quiet Overachiever", code: "SRAF", description: "You're a team that lets results do the talking. What you commit to gets done. What gets done holds up. You have a natural immunity to exaggeration, which makes your judgment unusually credible inside the team. The outside world may take a while to discover you — but once they do, they don't want to leave. VCs call you 'execution-focused,' which is VC language for 'not the most exciting story, but probably going to make money.' You're at peace with this. You have good unit economics.", aiScore: 78, tags: ["Ships reliably", "No hockey sticks", "Clear principles", "Meetings: optional"], tagColors: ["purple", "coral", "teal", "teal"] },
  SRAM: { name: "The Reliable Chaos", code: "SRAM", description: "You simultaneously hold two qualities that don't usually appear together: strong bias for action and genuine care for collective alignment. You're not just moving fast — you're making sure the whole team moves fast together. That attention to 'nobody gets left behind' is something precious in your culture, and it's why you're able to turn ideas into execution at scale, not just in theory.", aiScore: 68, tags: ["Delivers", "Honest scope", "Has values", "Sync-heavy"], tagColors: ["purple", "coral", "teal", "amber"] },
  SRPF: { name: "The Speed Merchant", code: "SRPF", description: "You're defined by output, not by process, documentation, or meeting count — by what actually ships and what actually comes back from users. There's a quiet confidence in your team that comes from knowing you can finish things and finish them well. In AI's current pace, that capability is scarcer than it looks. Your safety review might be 'we'll know if something goes wrong' — and somehow you're more right about that than you have any right to be.", aiScore: 63, tags: ["Highest output", "No illusions", "Ships on instinct", "Calendar: clean"], tagColors: ["purple", "coral", "amber", "teal"] },
  SRPM: { name: "The Feature Factory", code: "SRPM", description: "You're the team that makes users feel like someone is genuinely working hard on their behalf. Your continuous shipping cadence isn't just an execution metric — it's how you build trust. Every release says: we heard you, and we acted. That sustained responsiveness is something many teams describe as a goal but struggle to actually deliver. You deliver it consistently.", aiScore: 52, tags: ["Ships constantly", "Realistic", "Flexible", "Gcal: crime scene"], tagColors: ["purple", "coral", "amber", "amber"] },
  CVAF: { name: "The Safety-Conscious Architect", code: "CVAF", description: "You're the team that makes the rest of the AI industry feel slightly safer. You hold large ambition and deep attention to detail simultaneously — a combination that's genuinely rare in this space. Everything you build has been thoughtfully designed, with traceable reasoning behind every decision. Users trust you not just because the product works, but because they can feel that someone is taking real responsibility. Your evals are real. Your incidents are zero. You'll have a very good Series B and a very boring war story.", aiScore: 91, tags: ["Ships deliberately", "Frontier-level vision", "Evals exist", "Deep work only"], tagColors: ["coral", "teal", "teal", "purple"] },
  CVAM: { name: "The Thoughtful Bottleneck", code: "CVAM", description: "You're the team people truly understand only after they've joined. From the outside, your pace might not look like the fastest. From the inside, your decision quality, cultural density, and sense of direction are things that faster teams quietly envy. You care about getting things right, and that care permeates every layer — product design, team conversation, every external communication. Teams like you tend to be the ones still standing, and still respected, years later.", aiScore: 76, tags: ["Careful", "Long horizon", "Principled", "Meetings: load-bearing"], tagColors: ["coral", "teal", "teal", "amber"] },
  CVPF: { name: "The Lone Genius", code: "CVPF", description: "You produce things nobody expected, because you had the space and the culture for genuinely deep independent thinking. Everyone on your team has a high degree of autonomy, driven by internal standards rather than external checkboxes. That trust in individual judgment is the soil your creativity grows from. Your documentation might be sparse, and your onboarding might be a three-hour conversation and a prayer — but what you build tends to be original in a way that's very hard to replicate.", aiScore: 74, tags: ["Deep thinker", "Ambitious", "Gut-driven", "Solo or nothing"], tagColors: ["coral", "teal", "amber", "teal"] },
  CVPM: { name: "The Well-Intentioned Talker", code: "CVPM", description: "You're the team where everyone feels heard. You think through conversation, align through discussion, and build consensus through genuine exchange. The psychological safety in your team — the sense that your real opinion is welcome — is something many teams spend enormous effort trying to create. Yours exists naturally. Your vision isn't written in a doc; it lives in your collective dialogue.", aiScore: 61, tags: ["Builds carefully", "Grand ambition", "Pragmatic ethics", "Always talking"], tagColors: ["coral", "teal", "amber", "amber"] },
  CRAF: { name: "The Craft Studio", code: "CRAF", description: "You're the team that makes users feel, after using your product, that someone genuinely cared about making it. That feeling doesn't come from marketing — it comes from every detail of the product itself. Your quality standard is near-instinctive, maintained not by external pressure but by a shared internal belief in doing things well. Users can feel the difference, even when they can't articulate why. You're not the fastest team in the cohort. You have the best-reviewed product. These two facts are connected.", aiScore: 78, tags: ["Takes time, ships quality", "No false promises", "Documented", "Focus protected"], tagColors: ["coral", "coral", "teal", "purple"] },
  CRAM: { name: "The Aligned Adult", code: "CRAM", description: "You know what you're building, why you're building it, and how you want to work together — all three being simultaneously clear is less common than most people assume. You actively maintain that clarity through regular, honest conversation, and that intentionality is the most valuable thing in your culture. You meet enough to stay aligned without losing momentum. This is genuinely hard to build. You've built it. Accept the compliment.", aiScore: 66, tags: ["Deliberate", "Grounded", "Principled", "Syncs that matter"], tagColors: ["coral", "coral", "teal", "amber"] },
  CRPF: { name: "The Quiet Operator", code: "CRPF", description: "You build credibility through action, not volume. There's a quiet professionalism in your team — everyone knows their work, knows how to do it well, and goes and does it. You don't need external validation to confirm you're doing the right thing; your internal standard is sufficient. In an industry full of noise, that kind of groundedness is an exceptionally rare form of stability. Easy to underestimate. Very difficult to compete with.", aiScore: 60, tags: ["Underestimated", "No big claims", "Judgment-first", "Low overhead"], tagColors: ["coral", "coral", "amber", "teal"] },
  CRPM: { name: "The Patient Craftsperson", code: "CRPM", description: "You don't fully commit until you genuinely believe in something — and that internal standard ensures that everything you ship has been truly tested, not compromised, not rushed. You maintain mutual understanding through ongoing honest conversation, and the depth of trust in your team isn't built by process; it's built by real human connection. You build slowly and well. Your greatest strength and your primary constraint are the same thing. That's not a problem to fix — it's who you are.", aiScore: 46, tags: ["Takes care", "Grounded", "Flexible", "Team-first"], tagColors: ["coral", "coral", "amber", "amber"] }
};

export const dimensions = [
  { key: "sc", label: "Execution style", poles: ["Speed-first (S)", "Careful (C)"] },
  { key: "vr", label: "Ambition lens", poles: ["Visionary (V)", "Realist (R)"] },
  { key: "ap", label: "AI governance", poles: ["Aligned (A)", "Pragmatic (P)"] },
  { key: "fm", label: "Team operating system", poles: ["Focus-mode (F)", "Meeting-mode (M)"] },
];

// Balanced decision function for dimension scoring
function decide(
  sideA: string,
  sideB: string,
  countA: number,
  countB: number
): string {
  const diff = Math.abs(countA - countB);

  if (countA + countB === 0) {
    // No answers for this dimension: pure 50/50
    return Math.random() > 0.5 ? sideA : sideB;
  }

  if (diff >= 2) {
    // Clear winner
    return countA > countB ? sideA : sideB;
  }

  if (diff === 0) {
    // True tie: pure 50/50
    return Math.random() > 0.5 ? sideA : sideB;
  }

  // diff === 1: slight lean but not deterministic
  const winner = countA > countB ? sideA : sideB;
  const loser = countA > countB ? sideB : sideA;
  return Math.random() > 0.35 ? winner : loser;
}

export function calculateResult(answers: Record<number, string>) {
  const counts = {
    sc: { S: 0, C: 0 },
    vr: { V: 0, R: 0 },
    ap: { A: 0, P: 0 },
    fm: { F: 0, M: 0 },
  };

  questions.forEach((q) => {
    const answer = answers[q.id];
    if (!answer) return;
    const option = q.options.find((o) => o.letter === answer);
    if (option && counts[q.dim as keyof typeof counts]) {
      const dim = counts[q.dim as keyof typeof counts];
      const side = option.side as keyof typeof dim;
      dim[side]++;
    }
  });

  const s = decide("S", "C", counts.sc.S, counts.sc.C);
  const v = decide("V", "R", counts.vr.V, counts.vr.R);
  const a = decide("A", "P", counts.ap.A, counts.ap.P);
  const f = decide("F", "M", counts.fm.F, counts.fm.M);

  const answeredCount = Object.keys(answers).length;

  return {
    code: `${s}${v}${a}${f}`,
    counts,
    answeredCount,
    totalQuestions: questions.length,
    isComplete: answeredCount === questions.length,
  };
}

// Dev-only: run validateDistribution(questions) in browser console
// to verify all 16 types are reachable with random answers
export function validateDistribution(qs: QuizQuestion[], iterations = 10000) {
  const typeCounts: Record<string, number> = {};

  for (let i = 0; i < iterations; i++) {
    const answers: Record<number, string> = {};
    qs.forEach((q) => {
      const randomOption = q.options[Math.floor(Math.random() * q.options.length)];
      answers[q.id] = randomOption.letter;
    });

    const result = calculateResult(answers);
    typeCounts[result.code] = (typeCounts[result.code] || 0) + 1;
  }

  const total = iterations;
  const expected = total / 16;

  console.log("=== Type Distribution Validation ===");
  Object.entries(typeCounts)
    .sort(([, a], [, b]) => b - a)
    .forEach(([type, count]) => {
      const pct = ((count / total) * 100).toFixed(1);
      const deviation = (((count - expected) / expected) * 100).toFixed(1);
      console.log(`${type}: ${count} (${pct}%) — deviation: ${deviation}%`);
    });

  const allTypes = [
    "SVAF", "SVAM", "SVPF", "SVPM", "SRAF", "SRAM", "SRPF", "SRPM",
    "CVAF", "CVAM", "CVPF", "CVPM", "CRAF", "CRAM", "CRPF", "CRPM",
  ];
  const missing = allTypes.filter((t) => !typeCounts[t]);

  if (missing.length > 0) {
    console.warn("Missing types:", missing);
  } else {
    console.log("All 16 types reachable ✓");
  }

  return typeCounts;
}
