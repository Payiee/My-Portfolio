// Illustrative UI sketches of each project, drawn in HTML/CSS.
// They're decorative (aria-hidden) — the project text carries the real information.

export function ReportMock() {
  const reports = [
    { title: 'Flooded street', place: 'Brgy. Sabang', status: 'Routed', tone: 'amber' },
    { title: 'Broken streetlight', place: 'Brgy. Marawoy', status: 'Received', tone: 'blue' },
    { title: 'Blocked drainage', place: 'Brgy. Tambo', status: 'Resolved', tone: 'green' },
  ]

  return (
    <div className="mock mock-report" aria-hidden="true">
      <div className="mock-console">
        <div className="console-bar">
          <i /> <i /> <i />
        </div>
        <div className="console-body">
          <div className="console-side">
            <b />
            <span />
            <span />
            <span />
          </div>
          <div className="console-main">
            <p className="console-heading">Incoming reports</p>
            {reports.map((r) => (
              <div className="console-row" key={r.title}>
                <span>{r.title}</span>
                <em className={`pill pill-${r.tone}`}>{r.status}</em>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <p className="phone-title">Report an incident</p>
        <div className="phone-field">
          <small>Category</small>
          <span>Flooding</span>
        </div>
        <div className="phone-field">
          <small>Location</small>
          <span>Brgy. Sabang</span>
        </div>
        <div className="phone-photo" />
        <div className="phone-button">Submit report</div>
      </div>
    </div>
  )
}

export function BudgetMock() {
  const bars = [42, 68, 30, 85, 52, 74, 38]
  const categories = [
    { name: 'Food', amount: '₱3,120', share: 62 },
    { name: 'Transport', amount: '₱1,480', share: 30 },
    { name: 'School', amount: '₱960', share: 19 },
  ]

  return (
    <div className="mock mock-budget" aria-hidden="true">
      <div className="phone phone-center">
        <div className="phone-notch" />
        <p className="phone-label">Spent this week</p>
        <p className="phone-amount">₱5,560</p>
        <div className="bars">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className={i === 3 ? 'is-peak' : undefined} />
          ))}
        </div>
        {categories.map((c) => (
          <div className="budget-row" key={c.name}>
            <div className="budget-row-top">
              <span>{c.name}</span>
              <span>{c.amount}</span>
            </div>
            <div className="meter">
              <span style={{ width: `${c.share}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DiaryMock() {
  // One week of the calendar; mood colours mirror a simple 5-mood scale.
  const week = [
    { d: 'M', n: 10, mood: 'calm' },
    { d: 'T', n: 11, mood: 'happy' },
    { d: 'W', n: 12, mood: 'low' },
    { d: 'T', n: 13, mood: 'calm', today: true },
    { d: 'F', n: 14, event: true },
    { d: 'S', n: 15 },
    { d: 'S', n: 16 },
  ]

  return (
    <div className="mock mock-diary" aria-hidden="true">
      <div className="phone phone-center diary-phone">
        <div className="phone-notch" />
        <p className="diary-greeting">Good morning, Fae</p>
        <div className="diary-week">
          {week.map((day) => (
            <div className={`diary-day${day.today ? ' is-today' : ''}`} key={day.n}>
              <small>{day.d}</small>
              <span>{day.n}</span>
              <i className={day.mood ? `dot dot-${day.mood}` : day.event ? 'dot dot-event' : 'dot'} />
            </div>
          ))}
        </div>
        <div className="diary-card">
          <small>For you</small>
          <p>“Small steps every day still move you forward.”</p>
        </div>
        <div className="diary-reminder">
          <span className="diary-reminder-bar" />
          <div>
            <b>Study group</b>
            <small>Tomorrow, 3:00 PM</small>
          </div>
        </div>
        <div className="diary-entry">
          <small>Today</small>
          <b>A quiet morning walk</b>
          <span>Felt calmer after getting some air before class…</span>
        </div>
        <div className="diary-fab">+</div>
      </div>
    </div>
  )
}
