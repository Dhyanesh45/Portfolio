import { createContext, useContext, useEffect, useState } from 'react'
import './Cell.css'

export const RunContext = createContext({ runId: 0 })

const KEYWORDS = {
  sql: /^(SELECT|FROM|WHERE|ORDER|BY|DESC|ASC|AS|AND|LIMIT|GROUP)$/,
  python: /^(def|return|import|from|for|in|if|None|True|False)$/,
}

// Small tokenizer so the code strips read like a real editor.
function highlight(code, lang) {
  const kw = KEYWORDS[lang]
  const re = /(--[^\n]*|#[^\n]*)|('[^']*'|"[^"]*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w.]*)(?=\()|([A-Za-z_]\w*)/g
  const out = []
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index))
    const [tok, com, str, num, fn, word] = m
    let cls = null
    if (com) cls = 'syn-com'
    else if (str) cls = 'syn-str'
    else if (num) cls = 'syn-num'
    else if (fn) cls = 'syn-fn'
    else if (word && kw?.test(word)) cls = 'syn-kw'
    out.push(cls ? <span key={i++} className={cls}>{tok}</span> : tok)
    last = m.index + tok.length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Cell({ n, id, lang, code, duration = 0.4, label, children }) {
  const { runId } = useContext(RunContext)
  const [state, setState] = useState('done')

  useEffect(() => {
    if (!runId) return
    const queue = setTimeout(() => setState('running'), n * 140)
    const finish = setTimeout(() => setState('done'), n * 140 + duration * 900)
    setState('queued')
    return () => { clearTimeout(queue); clearTimeout(finish) }
  }, [runId, n, duration])

  return (
    <section id={id} className="cell" data-state={state} aria-labelledby={label ? `${id}-title` : undefined}>
      <div className="cell-gutter" aria-hidden="true">
        <span className="cell-cmd">Cmd {n}</span>
        <span className="cell-status">
          {state === 'done' && <><CheckIcon />{duration.toFixed(2)}s</>}
          {state === 'running' && <><span className="spinner" />running</>}
          {state === 'queued' && <>waiting</>}
        </span>
      </div>

      <div className="cell-body">
        {code && (
          <div className="cell-input">
            <pre><code>{highlight(code, lang)}</code></pre>
            <span className="cell-lang">{lang === 'sql' ? '%sql' : lang === 'python' ? 'Python' : '%md'}</span>
          </div>
        )}
        <div className="cell-output">{children}</div>
      </div>
    </section>
  )
}
