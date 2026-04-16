import { motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'
import { Check, Route, Beaker, Hospital, Truck } from '../shared/Icons'

/* =========================================================
   CH 04 · THE SOLUTION
   Eight cards. White / brand design. Speaker prompts on every card.
   Phase 1 cost = £15-30M (aligned with Ch 5).
   ========================================================= */

function Card({ eyebrow, title, prompts = [], children, source }) {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden bg-white px-10 py-14 lg:px-16 lg:py-20">
      <SymbolWatermark opacity={0.04} size={540} position={{ top: '6%', right: '-8%' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 04 &nbsp;/&nbsp; {eyebrow}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl italic leading-[1.2] pb-[0.15em] text-az-navy md:text-5xl"
        >
          {title}
        </motion.h2>

        {prompts.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
            {prompts.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 text-base leading-snug text-az-charcoal md:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-az-magenta" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="relative mt-8 flex-1">{children}</div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
          Source: {source}
        </p>
      </div>
    </section>
  )
}

/* =========================================================
   CARD 4.1 - THE TOOLS EXIST. NOBODY CONNECTS THEM.
   ========================================================= */

function Card1Overview() {
  const tools = [
    { name: 'Qure.ai',       note: 'screens X-rays' },
    { name: 'Median eyonis', note: 'screens CT scans' },
    { name: 'Optellum',      note: 'NHS pilot running' },
  ]
  const actions = [
    { n: '01', title: 'ROUTES',      body: 'Patients from screening to specialist.' },
    { n: '02', title: 'MATCHES',     body: 'Biomarkers to the right trial.' },
    { n: '03', title: 'FOLLOWS UP',  body: 'So nobody gets lost.' },
  ]

  return (
    <Card
      eyebrow="THE SOLUTION"
      title="The tools exist. Nobody connects them."
      prompts={[
        'Screening tools already exist',
        'No system connects them',
        'Platform routes, matches, follows up',
        'AI never makes the diagnosis',
      ]}
      source="Median press release Feb 2026. NHS Optellum pilot Jan 2026. Colibri-Pneumo."
    >
      <div className="grid grid-cols-3 gap-4">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
            className="flex flex-col items-center rounded-xl border border-az-border bg-white p-5 shadow-card"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check size={18} />
            </span>
            <div className="mt-3 font-display text-lg font-bold italic text-az-navy md:text-xl">
              {t.name}
            </div>
            <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-az-muted">
              {t.note}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 flex items-center justify-center rounded-xl bg-az-magenta px-6 py-4 shadow-card-magenta"
      >
        <span className="font-display text-lg italic font-bold text-white md:text-xl">
          The coordination platform connects them.
        </span>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {actions.map((a, i) => (
          <motion.div
            key={a.n}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.12, duration: 0.6 }}
            className="rounded-xl border-[2px] border-az-navy bg-white p-5 shadow-card"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-bold italic text-az-magenta">{a.n}</span>
              <span className="font-display text-xl font-bold italic text-az-navy md:text-2xl">{a.title}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-az-charcoal">{a.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="mt-8 rounded-xl bg-az-navy p-5 text-center text-white shadow-card-navy"
      >
        <p className="font-display text-xl italic md:text-2xl">
          The AI coordinates. <span className="text-az-gold">It never diagnoses.</span>
        </p>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 4.2 - LAYER 1 · SCREENING
   ========================================================= */

function Card2Screening() {
  return (
    <Card
      eyebrow="LAYER 1 · SCREENING"
      title="CT scan, AI spots the nodule, doctor confirms"
      prompts={[
        'CNNs: AI that reads images',
        'Locked model - required for medical approval',
        'Already plugs into NHS screening',
        'AI flags, doctor decides',
      ]}
      source="NHS TLHC programme. FDA/MHRA SaMD guidance. Median FDA 510(k) Feb 2026."
    >
      {/* AI type callout */}
      <AITypeCallout
        label="AI TYPE"
        type="CNNs · Convolutional Neural Networks"
        plain="AI that reads images and spots patterns - like a super-fast second set of eyes for the radiologist."
      />

      {/* Three-step flow */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <Step n="01" title="CT SCAN"      body="Low-dose CT under the NHS Targeted Lung Health Check." tone="navy" delay={0.2} />
        <FlowArrow delay={0.35} />
        <Step n="02" title="AI SPOTS"      body="Locked CNN flags a nodule for review." tone="magenta" delay={0.5} />
        <FlowArrow delay={0.65} />
        <Step n="03" title="DOCTOR CONFIRMS" body="Radiologist reviews and signs off." tone="gold" delay={0.8} />
      </div>

      {/* Two key points */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <KeyPoint
          label="LOCKED MODEL"
          text={'Model weights don\u2019t change after approval. That\u2019s why regulators trust it.'}
        />
        <KeyPoint
          label="NHS TLHC"
          text="Targeted Lung Health Check programme is already running - we plug into it."
        />
      </div>
    </Card>
  )
}

function AITypeCallout({ label, type, plain }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border-[2px] border-az-gold bg-az-gold/10 p-5 shadow-card"
    >
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
        {label}
      </div>
      <div className="mt-2 font-display text-xl font-bold italic text-az-navy md:text-2xl">
        {type}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-az-charcoal md:text-base">{plain}</p>
    </motion.div>
  )
}

function Step({ n, title, body, tone = 'navy', delay = 0 }) {
  const toneMap = {
    navy:    { border: 'border-az-navy',    text: 'text-az-navy' },
    magenta: { border: 'border-az-magenta', text: 'text-az-magenta' },
    gold:    { border: 'border-az-gold',    text: 'text-az-gold-deep' },
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-xl border-[2px] bg-white p-5 shadow-card ${toneMap[tone].border}`}
    >
      <div className={`font-display text-3xl font-bold italic leading-none md:text-4xl ${toneMap[tone].text}`}>
        {n}
      </div>
      <div className="mt-3 font-display text-lg font-bold italic text-az-navy md:text-xl">
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-az-charcoal">{body}</p>
    </motion.div>
  )
}

function FlowArrow({ delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'left' }}
      width="44" height="14" viewBox="0 0 44 14"
      className="hidden md:block"
    >
      <path d="M 0 7 L 36 7" stroke="#830051" strokeWidth="2.4" />
      <path d="M 30 2 L 42 7 L 30 12" stroke="#830051" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

function KeyPoint({ label, text }) {
  return (
    <div className="rounded-xl border-l-4 border-az-magenta bg-white p-5 shadow-card">
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-az-charcoal md:text-base">{text}</p>
    </div>
  )
}

/* =========================================================
   CARD 4.3 - LAYER 2 · PATHOLOGY
   ========================================================= */

const biomarkers = ['EGFR', 'ALK', 'PD-L1']

function Card3Pathology() {
  return (
    <Card
      eyebrow="LAYER 2 · PATHOLOGY"
      title="Biopsy to biomarker profile"
      prompts={[
        'Computer vision reads the biopsy slide',
        'NLP structures the pathology report',
        'Biomarkers determine treatment + trial eligibility',
        'Honest gap: lung validation coming 2027',
      ]}
      source="AZ Modella AI acquisition Jan 2026. MHRA SaMD guidance."
    >
      <AITypeCallout
        label="AI TYPE"
        type="Computer vision + NLP"
        plain="One AI looks at the slide image; the other structures the pathology report into a clean biomarker profile."
      />

      {/* Flow diagram */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {/* Biopsy slide */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center rounded-2xl border-[2px] border-az-navy bg-white p-5 shadow-card"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
            BIOPSY SLIDE
          </div>
          <div className="relative mt-3 h-32 w-full overflow-hidden rounded-lg border border-az-border bg-az-light">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute rounded-full bg-az-magenta opacity-30"
                style={{
                  left: `${15 + (i % 3) * 30}%`,
                  top: `${20 + Math.floor(i / 3) * 30}%`,
                  width: 32,
                  height: 32,
                }}
              />
            ))}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute left-[45%] top-[25%] h-16 w-16 rounded-full border-[3px] border-az-magenta"
            />
          </div>
          <div className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-az-magenta">
            REGIONS OF INTEREST
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ transformOrigin: 'left' }}
            width="80" height="20" viewBox="0 0 80 20"
          >
            <path d="M 0 10 L 68 10" stroke="#830051" strokeWidth="3" />
            <path d="M 62 4 L 76 10 L 62 16" stroke="#830051" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>

        {/* Biomarker panel */}
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col rounded-2xl border-[2px] border-az-magenta bg-white p-5 shadow-card-magenta"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
            BIOMARKER PROFILE
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {biomarkers.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="rounded-lg bg-az-magenta px-3 py-3 text-center"
              >
                <span className="font-display text-lg font-bold italic text-white md:text-xl">{b}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-az-navy">
            DETERMINES TREATMENT + TRIAL
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-6 rounded-xl border-l-4 border-az-gold bg-white p-5 shadow-card"
      >
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
          HONEST GAP
        </div>
        <p className="mt-2 text-base text-az-charcoal md:text-lg">
          Modella: no lung-specific validation yet. Funded in Phase 1. <span className="font-bold text-az-navy">Target: 2027.</span>
        </p>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 4.4 - LAYER 3 · COORDINATION AGENTS (Blue Ocean)
   ========================================================= */

const agents = [
  { Icon: Route,    title: 'PATIENT ROUTER', body: 'Gets the screening flag. Sends the patient to the right specialist. Alerts if not seen in 14 days.', live: true },
  { Icon: Beaker,   title: 'TRIAL MATCHER',  body: 'Takes the biomarker profile. Finds matching trials. Doctor reviews every match.',                      live: true },
  { Icon: Hospital, title: 'SITE SELECTOR',  body: 'Picks the best trial site for this patient.',                                                           live: false },
  { Icon: Truck,    title: 'SUPPLY PLANNER', body: 'Pre-positions drug supply based on patient flow.',                                                      live: false },
]

function Card4Agents() {
  return (
    <Card
      eyebrow="LAYER 3 · COORDINATION"
      title="The coordination agents"
      prompts={[
        'LLMs + RAG: AI that reasons over documents and looks up real data',
        'Agent 1 routes patients · Agent 2 matches trials',
        'Agents 3-4 deferred to Phase 2',
        'Not medical devices - they coordinate, not diagnose',
      ]}
      source="MHRA AI guidance. EU AI Act classification. BIKG 130M+ relationships."
    >
      <AITypeCallout
        label="AI TYPE"
        type="LLMs + RAG · Retrieval-Augmented Generation"
        plain="Same core technology as ChatGPT - but it looks up real patient data before answering, and every decision is reviewed by a human."
      />

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {agents.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-xl border-[2px] p-5 shadow-card ${
              a.live ? 'border-az-magenta bg-white' : 'border-az-border bg-az-light'
            }`}
          >
            <div className={`flex items-center gap-3 ${a.live ? '' : 'opacity-50'}`}>
              <span className={`flex h-10 w-10 items-center justify-center rounded-full ${
                a.live ? 'bg-az-magenta text-white' : 'bg-az-muted/20 text-az-muted'
              }`}>
                <a.Icon size={18} />
              </span>
              <div className={`font-display text-lg font-bold italic md:text-xl ${
                a.live ? 'text-az-magenta' : 'text-az-muted'
              }`}>
                AGENT 0{i + 1} · {a.title}
              </div>
            </div>
            <p className={`mt-3 text-sm leading-relaxed ${a.live ? 'text-az-charcoal' : 'text-az-muted'}`}>
              {a.body}
            </p>
            {!a.live && (
              <span className="absolute right-4 top-4 rounded-full bg-az-amber/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-az-gold-deep">
                Phase 2
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-8 rounded-xl bg-az-navy p-5 text-white shadow-card-navy"
      >
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
          KEY INSIGHT
        </div>
        <p className="mt-3 font-display text-lg italic md:text-xl">
          These are not medical devices. They coordinate logistics, not diagnosis.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/80 md:text-base">
          {'That is why they don\u2019t need the same regulatory approval as the screening tools.'}
        </p>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 4.5 - THE DATA LAYER · FEDERATED LEARNING
   ========================================================= */

function Card5Federated() {
  const nodes = [
    { label: 'NHS TRUST 1', x: 80,  y: 100 },
    { label: 'NHS TRUST 2', x: 240, y: 100 },
    { label: 'NHS TRUST 3', x: 400, y: 100 },
  ]

  return (
    <Card
      eyebrow="THE DATA LAYER"
      title="Federated learning: data never moves"
      prompts={[
        'Patient data stays inside NHS servers',
        'AI models train locally at each trust',
        'Only model updates flow back - not patient records',
        'MELLODDY: AZ already proved this across 10 pharma companies',
      ]}
      source="MELLODDY consortium (Nature Machine Intelligence 2023). NHS Data Partnership framework. ICO federated learning guidance."
    >
      {/* AI type callout */}
      <AITypeCallout
        label="WHY THIS MATTERS"
        type="Federated Learning"
        plain="The AI travels to the data, not the other way around. Each hospital keeps full control of patient records. The system learns from everyone without anyone sharing sensitive information."
      />

      {/* Visual: Three NHS trusts with local models, central aggregator */}
      <div className="mt-6 flex justify-center">
        <svg viewBox="0 0 480 280" className="h-auto w-full max-w-[600px]">
          {/* NHS Trust boxes */}
          {nodes.map((node, i) => (
            <motion.g
              key={node.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
            >
              <rect
                x={node.x - 55} y={node.y - 35}
                width="110" height="70" rx="12"
                fill="#FFFFFF" stroke="#1C2B5E" strokeWidth="2"
              />
              <text x={node.x} y={node.y - 8} textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="700" letterSpacing="1" fill="#1C2B5E">
                {node.label}
              </text>
              <text x={node.x} y={node.y + 12} textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="600" fill="#6B7280">
                DATA STAYS HERE
              </text>
              {/* Lock icon */}
              <circle cx={node.x + 38} cy={node.y - 20} r="10" fill="#10B981" />
              <path d={`M ${node.x + 34} ${node.y - 20} L ${node.x + 42} ${node.y - 20} M ${node.x + 38} ${node.y - 24} L ${node.x + 38} ${node.y - 16}`} stroke="white" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          ))}

          {/* Arrows down from trusts */}
          {nodes.map((node, i) => (
            <motion.g
              key={`arrow-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
            >
              <path
                d={`M ${node.x} 75 L ${node.x} 55`}
                stroke="#830051" strokeWidth="2" markerEnd="url(#arrowUp)"
              />
              <path
                d={`M ${node.x} 175 L ${node.x} 195`}
                stroke="#830051" strokeWidth="2" strokeDasharray="4 3"
              />
            </motion.g>
          ))}

          {/* Central aggregator */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.7, type: 'spring', damping: 14 }}
          >
            <rect x="140" y="200" width="200" height="60" rx="12" fill="#830051" />
            <text x="240" y="225" textAnchor="middle" fontFamily="Montserrat" fontSize="12" fontWeight="700" letterSpacing="1.5" fill="white">
              CENTRAL AGGREGATOR
            </text>
            <text x="240" y="245" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="600" fill="#F0AB00">
              COMBINES MODEL UPDATES ONLY
            </text>
          </motion.g>

          {/* Arrows from aggregator back up */}
          <defs>
            <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M 0 6 L 4 0 L 8 6" fill="none" stroke="#830051" strokeWidth="1.5" />
            </marker>
          </defs>

          {/* Labels for data flow */}
          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            x="60" y="145" fontFamily="Montserrat" fontSize="8" fontWeight="700" letterSpacing="0.5" fill="#830051"
          >
            MODEL WEIGHTS
          </motion.text>
          <motion.text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            x="380" y="145" fontFamily="Montserrat" fontSize="8" fontWeight="700" letterSpacing="0.5" fill="#830051"
          >
            MODEL WEIGHTS
          </motion.text>
        </svg>
      </div>

      {/* Two key proof points */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="rounded-xl border-[2px] border-az-gold bg-white p-5 shadow-card"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
            MELLODDY CONSORTIUM
          </div>
          <p className="mt-2 text-sm leading-relaxed text-az-charcoal md:text-base">
            AstraZeneca already ran a federated node across <span className="font-bold text-az-navy">10 pharmaceutical companies</span>. The approach is proven at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.55, duration: 0.7 }}
          className="rounded-xl border-[2px] border-emerald-500 bg-white p-5 shadow-card"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-600">
            NHS COMPATIBILITY
          </div>
          <p className="mt-2 text-sm leading-relaxed text-az-charcoal md:text-base">
            No data sharing agreements needed between trusts. Each trust keeps <span className="font-bold text-az-navy">full sovereignty</span> over patient records.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="mt-6 rounded-xl bg-az-navy p-5 text-center text-white shadow-card-navy"
      >
        <p className="font-display text-xl italic md:text-2xl">
          This is how multiple NHS trusts can participate <span className="text-az-gold">without moving a single patient record.</span>
        </p>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   CARD 4.6 - ONE PATIENT, SIX STEPS (fixed journey)
   ========================================================= */

const steps = [
  { n: 1, title: 'GP VISIT',         body: 'CT scan ordered.' },
  { n: 2, title: 'AI FLAG',          body: 'Nodule spotted, doctor confirms.' },
  { n: 3, title: 'DIGITAL REFERRAL', body: 'Complete file. SMS within 5 days.' },
  { n: 4, title: 'BIOPSY',           body: 'AI assists pathologist. EGFR positive.' },
  { n: 5, title: 'TRIAL MATCH',      body: 'ADAURA eligibility. Doctor approves.' },
  { n: 6, title: 'ENROLLED',         body: 'Treatment begins.' },
]

function Card6Journey() {
  return (
    <Card
      eyebrow="ONE PATIENT"
      title="One patient, six steps"
      prompts={[
        'Complete dossier, no missing files',
        'SMS updates to the patient',
        'Biomarker to trial match: automatic',
        'Under 6 weeks vs 3-4 months today',
      ]}
      source="NHS pathway data. AZ ADAURA trial. Median eyonis."
    >
      <div className="relative">
        <div className="absolute left-[4%] right-[4%] top-5 h-1 rounded-full bg-az-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.3, duration: 2.4, ease: 'linear' }}
            className="h-full rounded-full bg-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.35, duration: 0.55 }}
              className="relative flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.35, type: 'spring', stiffness: 280, damping: 18 }}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-mono text-sm font-bold text-white shadow-card"
              >
                {s.n}
              </motion.div>
              <div className="mt-4 text-center">
                <div className="font-display text-sm font-bold italic text-az-navy md:text-base">
                  {s.title}
                </div>
                <p className="mt-1 text-xs leading-snug text-az-muted">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Green feeling bar - inverse of Ch 3 */}
      <div className="mt-12">
        <div className="h-3 w-full overflow-hidden rounded-full bg-az-border">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 2.4, duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
          />
        </div>
        <div className="mt-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-emerald-600">
          CONFIDENT · INFORMED · SUPPORTED
        </div>
      </div>

      {/* Comparison cards */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.0, duration: 0.7 }}
          className="rounded-xl border border-az-border bg-az-light p-6"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-muted">
            TODAY
          </div>
          <p className="mt-2 font-display text-xl italic text-az-charcoal md:text-2xl">
            3-4 months. 4 dropped handoffs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.15, duration: 0.7 }}
          className="rounded-xl border-[2px] border-emerald-500 bg-white p-6 shadow-card"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-600">
            WITH PLATFORM
          </div>
          <p className="mt-2 font-display text-xl italic text-emerald-700 md:text-2xl">
            Under 6 weeks. Zero dropped.
          </p>
        </motion.div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 4.7 - WHAT THIS DELIVERS
   ========================================================= */

function Card7Value() {
  return (
    <Card
      eyebrow="ADDED VALUE"
      title="What this delivers"
      prompts={[
        'Stage shift: 16% to 30% early detection',
        '£40K saved per patient',
        'Referral: weeks to days',
        'UK proof enables global scale',
      ]}
      source="CA Cancer J Clin 2025. NHS cost data. AZ FY2025."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* NHS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-2xl border-[2px] border-az-navy bg-white p-6 shadow-card"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
            FOR THE NHS
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <ValueBig big="16% → 30%" sub="EARLY STAGE" />
            <ValueBig big="£40K"      sub="PER PATIENT" />
            <ValueBig big="< 7 DAYS"  sub="REFERRAL" />
            <ValueBig big="2×"        sub="TRIAL RECRUIT" />
          </div>
        </motion.div>

        {/* Patients */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="rounded-2xl border-[2px] border-az-magenta bg-white p-6 shadow-card-magenta"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
            FOR PATIENTS
          </div>
          <ul className="mt-4 space-y-3">
            {[
              'SMS updates at every step',
              'One shared record across doctors',
              'Digital contact for families',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-az-magenta" />
                <span className="font-display text-base italic text-az-navy md:text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AZ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="rounded-2xl bg-az-navy p-6 text-white shadow-card-navy"
        >
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
            FOR ASTRAZENECA
          </div>
          <div className="mt-4 font-display text-5xl font-bold italic text-white md:text-6xl">
            4
          </div>
          <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
            VALUE STREAMS
          </div>
          <div className="mt-5 space-y-2 text-sm">
            <StreamDot color="bg-az-magenta" text="Real-world evidence" />
            <StreamDot color="bg-white"      text="Trained AI models" />
            <StreamDot color="bg-az-gold"    text="Publications + research" />
            <StreamDot color="bg-emerald-400" text="Global replication blueprint" />
          </div>
        </motion.div>
      </div>
    </Card>
  )
}

function ValueBig({ big, sub }) {
  return (
    <div>
      <div className="font-display text-xl font-bold italic text-az-magenta md:text-2xl">
        {big}
      </div>
      <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-az-muted">
        {sub}
      </div>
    </div>
  )
}

function StreamDot({ color, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="text-white/90">{text}</span>
    </div>
  )
}

/* =========================================================
   CARD 4.8 - UK FIRST
   ========================================================= */

function Card8GTM() {
  return (
    <Card
      eyebrow="GO-TO-MARKET"
      title="UK first"
      prompts={[
        'AZ headquartered in Cambridge',
        'NHS: one buyer, one data standard',
        'Lung Health Check already running',
        'Start small, scale on results',
      ]}
      source="AZ Cambridge HQ. NHS TLHC. Optellum pilot. NICE managed access framework."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.3fr]">
        {/* UK map with pins */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center rounded-2xl border border-az-border bg-white p-6 shadow-card"
        >
          <svg viewBox="0 0 260 360" className="h-auto w-full max-h-[400px]">
            <motion.path
              d="M 80 30 Q 100 20 130 25 Q 160 30 170 60 Q 180 80 175 110 L 200 130 Q 220 150 210 180 Q 205 210 180 220 Q 170 250 140 270 Q 110 290 90 310 Q 70 330 60 325 Q 40 310 50 280 Q 45 260 60 230 Q 70 200 60 180 Q 50 150 55 110 Q 65 70 80 30 Z"
              fill="#F4F6F9" stroke="#1C2B5E" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
            {[
              { x: 150, y: 190, label: 'CAMBRIDGE',  delay: 0.8 },
              { x: 110, y: 155, label: 'MANCHESTER', delay: 1.0 },
              { x: 130, y: 260, label: 'LONDON',     delay: 1.2 },
            ].map((p) => (
              <motion.g
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: p.delay, type: 'spring', stiffness: 280, damping: 16 }}
              >
                <motion.circle
                  cx={p.x} cy={p.y} r="18"
                  fill="none" stroke="#830051" strokeWidth="1.5"
                  animate={{ r: [18, 30, 18], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: p.delay }}
                />
                <circle cx={p.x} cy={p.y} r="6" fill="#830051" />
                <text x={p.x + 14} y={p.y + 4} fontFamily="Montserrat" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#1C2B5E">
                  {p.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>

        {/* Three phase cards */}
        <div className="flex flex-col gap-4">
          {[
            { phase: 'PHASE 1', years: 'Year 1',    invest: '£15-30M',  scope: '2-3 NHS trusts · Federated network live · UK proof', tone: 'navy' },
            { phase: 'PHASE 2', years: 'Years 2-3', invest: '£50-80M', scope: '15-20 trusts · Publish evidence · Refine models',                           tone: 'magenta' },
            { phase: 'PHASE 3', years: 'Years 3-5', invest: 'Global',     scope: 'Replicate with US, Asia, S. America health systems',  tone: 'gold' },
          ].map((p, i) => {
            const tone =
              p.tone === 'magenta'
                ? 'border-az-magenta bg-az-magenta text-white'
                : p.tone === 'gold'
                ? 'border-az-gold bg-az-gold text-[#1C1C1C]'
                : 'border-az-navy bg-white text-az-navy'
            return (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl border-[2px] p-5 shadow-card ${tone}`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] opacity-80">
                      {p.phase} · {p.years}
                    </div>
                    <div className="mt-1 font-display text-lg italic md:text-xl">
                      {p.scope}
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold italic md:text-3xl">
                    {p.invest}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-8 text-center font-display text-xl italic text-az-navy md:text-2xl"
      >
        Start narrow. <span className="text-az-magenta">Scale on evidence.</span>
      </motion.div>
    </Card>
  )
}

/* =========================================================
   EXPORT
   ========================================================= */

export default function Solution() {
  return (
    <PaginatedChapter
      chapterId="solution"
      pages={[
        <Card1Overview   key="overview"   />,
        <Card2Screening  key="screening"  />,
        <Card3Pathology  key="pathology"  />,
        <Card4Agents     key="agents"     />,
        <Card5Federated  key="federated"  />,
        <Card6Journey    key="journey"    />,
        <Card7Value      key="value"      />,
        <Card8GTM        key="gtm"        />,
      ]}
    />
  )
}
