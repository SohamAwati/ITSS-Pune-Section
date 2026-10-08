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
          <p className="lead">The IEEE Intelligent Transportation Systems Society (ITSS) advances the theoretical, experimental, and operational aspects of Electrical Engineering and Information Technologies as applied to intelligent transportation systems (ITS). The mission of the Intelligent Transportation Systems Society (ITSS) is to advance the theoretical, experimental, and operational aspects of Electrical Engineering and Information Technologies as applied to intelligent transportation systems (ITS), defined as those systems utilizing synergistic technologies and systems engineering concepts to develop and improve transportation systems of all kinds.</p>
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
        <div><h3>Overview</h3><p>The Intelligent Transportation Systems Society (ITSS) is an organisational unit of IEEE. It was established in 2005 and focuses on advancing the theoretical, experimental and practical aspects of Electrical Engineering and Information Technologies as applied to intelligent transportation systems (ITS).</p></div>
        <div><h3>Mission</h3><p>To advance the theoretical, experimental and operational aspects of Electrical Engineering and Information Technologies as applied to intelligent transportation systems, defined as systems using synergistic technologies and systems engineering concepts to develop and improve transportation systems of all kinds.</p></div>
      </div>
      <div className="note">The Pune Chapter operates under <strong>IEEE Pune Section</strong>. Chapter history and focus areas will be added here.</div>
    </div></section>
  )
}

function Events() {
  return (
    <section id="events" className="sec"><div className="wrap">
      <h2>Events</h2>
      <p className="sub">Talks, workshops and competitions from the chapter.</p>
      <ul className="timeline">
        {events.map((e, i) => <li key={i}><time>{e.date}</time><div><h3>{e.title}</h3><p>{e.text}</p></div></li>)}
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
        <p>© {new Date().getFullYear()} IEEE ITSS Pune Chapter · IEEE Pune Section</p>
        <p>IEEE is the world's largest technical professional organisation for the advancement of technology.</p>
      </div></footer>
    </>
  )
}
