import { officers } from '../data.js'
export default function Officers() {
  return (
    <section id="officers" className="sec alt">
      <div className="wrap">
        <h2>Chapter officers</h2>
        <div className="officers">
          {officers.slice(0, 4).map((o, i) => (
            <article className="officer" key={i}>
              <div className="photo">{o.photo ? <img src={o.photo} alt={o.name} /> : <span>Photo</span>}</div>
              <h3>{o.name}</h3>
              <p className="role">{o.role}</p>
              <p className="bio">{o.bio}</p>
              <ul className="links">
                {o.email && <li><a href={`mailto:${o.email}`}>{o.email}</a></li>}
                <li><a href={o.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
