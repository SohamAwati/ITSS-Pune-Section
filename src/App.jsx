import { useState } from 'react'
import Logo from './components/Logo.jsx'
import Officers from './components/Officers.jsx'
import Members from './components/Members.jsx'
import { events, contact } from './data.js'

const links = [['about', 'About'], ['officers', 'Officers'], ['events', 'Events'], ['join', 'Join'], ['contact', 'Contact']]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="topbar"><div className="wrap">
        <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org</a>
        <a href="https://its.ieee.org" target="_blank" rel="noopener noreferrer">IEEE ITSS</a>
        <a href="https://ieeepune.org" target="_blank" rel="noopener noreferrer">IEEE Pune Section</a>
      </div></div>
      <header className="nav"><div className="wrap navrow">
        <a className="brand" href="#top"><Logo /><span>IEEE ITSS<small>Pune Chapter</small></span></a>
        <button className="burger" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        <nav id="menu" className={open ? 'open' : ''}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div></header>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap herogrid">
        <div>
          <h1>ITSS IEEE Pune Section</h1>
          <p className="kicker">IEEE Intelligent Transportation Systems Society</p>
          <p className="lead">The IEEE Intelligent Transportation Systems Society (ITSS) is an IEEE organizational unit dedicated to advancing intelligent transportation systems (ITS) through research, innovation, education, and practical applications. Our mission is to promote the advancement and practical application of electrical engineering, information technologies, and emerging technologies in intelligent transportation systems, fostering innovation, research, collaboration, and system-level solutions to improve the safety, efficiency, sustainability, and reliability of transportation systems.</p>
          <div className="btns">
            <a className="btn primary" href="#join">Join the chapter</a>
            <a className="btn ghost" href="#about">About ITSS</a>
          </div>
        </div>
        <div className="logocard"><Logo /></div>
      </div>
      <div className="roadline" aria-hidden="true" />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="sec"><div className="wrap">
      <h2>About ITSS</h2>
      <div className="two">
        <div><h3>Overview</h3><p>The IEEE Intelligent Transportation Systems Society (ITSS) is an IEEE organizational unit dedicated to advancing intelligent transportation systems (ITS) through research, innovation, education, and practical applications. Established in 2005, the Society promotes the development and application of electrical engineering, information technologies, artificial intelligence, communication, and data-driven solutions to enhance the safety, efficiency, sustainability, and reliability of modern transportation systems.</p></div>
        <div><h3>Mission</h3><p>To promote the advancement and practical application of electrical engineering, information technologies, and emerging technologies in intelligent transportation systems, fostering innovation, research, collaboration, and system-level solutions to improve the safety, efficiency, sustainability, and reliability of transportation systems.</p></div>
      </div>
      <div className="two">
        <div>
          <h3>Objectives IEEE ITSS</h3>
          <ol>
            <li><strong>Build an Active ITSS Community:</strong> Establish Pune as a vibrant platform for ITS professionals, researchers, academicians, students and industry stakeholders.</li>
            <li><strong>Promote ITSS Membership and Awareness:</strong> Increase awareness and participation among students, researchers, faculty, Young Professionals and industry professionals.</li>
            <li><strong>Deliver High-Quality Technical Learning:</strong> Conduct expert lectures, workshops, seminars and technical interactions on emerging ITS technologies.</li>
            <li><strong>Engage Students and Young Professionals:</strong> Create mentoring, career development, technical project and innovation opportunities.</li>
            <li><strong>Strengthen Industry–Academia Interaction:</strong> Facilitate dialogue on real-world transportation challenges, applications, datasets, research and collaborative innovation.</li>
            <li><strong>Develop Research and Innovation Networks:</strong> Promote interdisciplinary research, technical collaboration, innovation and future project opportunities.</li>
          </ol>
        </div>
        <div>
          <h3>Scope</h3>
          <ul>
            <li>Promote intelligent, safe, and sustainable transportation technologies.</li>
            <li>Organize technical lectures, workshops, mentoring programmes, and hackathons.</li>
            <li>Encourage research, innovation, and student projects in intelligent transportation systems.</li>
            <li>Strengthen industry–academia collaboration and professional networking.</li>
            <li>Identify and address real-world transportation challenges.</li>
            <li>Facilitate multidisciplinary collaboration with IEEE societies, academia, and industry.</li>
            <li>Develop technical skills, professional capabilities, and leadership among students and professionals.</li>
            <li>Build a strong and sustainable IEEE ITSS community in Pune.</li>
          </ul>
        </div>
      </div>
      <div className="note">The IEEE Intelligent Transportation Systems Society (ITSS) Chapter at IEEE Pune Section has been established to create a focused professional and technical platform connecting students, Young Professionals (YPs), researchers, academicians, industry professionals and transportation stakeholders working in Intelligent Transportation Systems (ITS).</div>
    </div></section>
  )
}

function Events() {
  return (
    <section id="events" className="sec"><div className="wrap">
      <h2>Events</h2>
      <p className="sub">Talks, workshops and competitions from the chapter.</p>
      <ul className="timeline">
        {events.map((e, i) => (
          <li key={i}>
            <time>{e.date}</time>
            <div>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              {e.poster && (
                <div style={{ marginTop: '16px', maxWidth: '500px' }}>
                  <img src={e.poster} alt={`${e.title} poster`} style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--line)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div></section>
  )
}

function Join() {
  return (
    <section id="join" className="sec join"><div className="wrap">
      <h2>Join IEEE ITSS</h2>
      <p>Get career networking, publishing opportunities and technical training alongside engineers and researchers worldwide.</p>
      <div className="btns">
        <a className="btn light" href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer">Become an IEEE member</a>
        <a className="btn outline" href="https://its.ieee.org" target="_blank" rel="noopener noreferrer">Visit IEEE ITSS</a>
      </div>
    </div></section>
  )
}

function Contact() {
  return (
    <section id="contact" className="sec"><div className="wrap two">
      <div>
        <h2>Contact</h2>
        <p>Write to the chapter for collaborations, speaker invitations or membership questions.</p>
        <ul className="contact">
          <li><strong>Email</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><strong>Section</strong> <a href="https://ieeepune.org" target="_blank" rel="noopener noreferrer">IEEE Pune Section</a></li>
          <li><strong>Location</strong> {contact.location}</li>
        </ul>
      </div>
      <div className="note">Social links and a contact form can be added here.</div>
    </div></section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top"><Hero /><About /><Officers /><Members /><Events /><Join /><Contact /></main>
      <footer><div className="wrap foot">
        <div className="foot-logos">
          <img src="/ieee-pune-logo.png" alt="IEEE Pune Section" className="foot-logo" />
          <img src="/ieee-logo.svg" alt="IEEE" className="foot-logo" />
        </div>
        <div className="foot-text">
          <p>© {new Date().getFullYear()} IEEE ITSS Pune Chapter · IEEE Pune Section</p>
          <p>IEEE is the world's largest technical professional organisation for the advancement of technology.</p>
        </div>
      </div></footer>
    </>
  )
}
