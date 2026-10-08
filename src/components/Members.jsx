import { members } from '../data.js'

export default function Members() {
  return (
    <section id="members" className="sec alt">
      <div className="wrap">
        <h2>Members</h2>
        <ul className="members">
          {members.map((member, i) => (
            <li key={i}>
              <strong>{member.name}</strong>
              <span>{member.designation}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
