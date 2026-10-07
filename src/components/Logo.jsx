export default function Logo({ title = "IEEE ITSS Pune Chapter logo" }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={title}>
<defs>
<path id="lg-top" d="M30.7,140 A80,80 0 1,1 169.3,140"/>
<path id="lg-bot" d="M56,176.2 A88,88 0 0,0 144,176.2"/>
<clipPath id="lg-clip"><circle cx="100" cy="100" r="63"/></clipPath>
</defs>
<circle cx="100" cy="100" r="98" fill="#00205b"/>
<circle cx="100" cy="100" r="70" fill="#fff"/>
<circle cx="100" cy="100" r="70" fill="none" stroke="#00629b" strokeWidth="2"/>
<g clipPath="url(#lg-clip)" fill="none" stroke="#00629b" strokeWidth="2">
<circle cx="100" cy="100" r="62"/>
<ellipse cx="100" cy="100" rx="24" ry="62"/>
<ellipse cx="100" cy="100" rx="46" ry="62"/>
<line x1="100" y1="38" x2="100" y2="162"/>
<line x1="38" y1="100" x2="162" y2="100"/>
<path d="M44,70 Q100,84 156,70"/><path d="M44,130 Q100,116 156,130"/>
</g>
<rect x="46" y="78" width="108" height="46" rx="4" fill="#fff" fillOpacity=".92"/><text x="100" y="114" textAnchor="middle" fontFamily="Barlow Condensed,Arial Narrow,Arial,sans-serif" fontWeight="800" fontSize="44" fill="#00205b" letterSpacing="1">ITSS</text>
<text fontFamily="Barlow Condensed,Arial Narrow,sans-serif" fontWeight="700" fontSize="11" fill="#fff"><textPath href="#lg-top" startOffset="10" textLength="400" lengthAdjust="spacing">INTELLIGENT TRANSPORTATION SYSTEMS SOCIETY</textPath></text>
<text fontFamily="Barlow Condensed,Arial Narrow,sans-serif" fontWeight="800" fontSize="14" fill="#fff"><textPath href="#lg-bot" startOffset="50%" textAnchor="middle" letterSpacing="3">IEEE</textPath></text>
<circle cx="100" cy="100" r="98" fill="none" stroke="#b3243b" strokeWidth="3"/>
    </svg>
  )
}
