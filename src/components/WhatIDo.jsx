import { whatIDo } from '../data/content'

function WhatIDo() {
  return (
    <section className="what-i-do">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <div className="what-i-do-grid">
          {whatIDo.map((item) => (
            <div className="what-i-do-card" key={item.title}>
              <div className="card-media" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
