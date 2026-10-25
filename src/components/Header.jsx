const navigation = [
  { href: '#about', label: 'Про мене' },
  { href: '#experience', label: 'Досвід' },
  { href: '#education', label: 'Освіта' },
  { href: '#skills', label: 'Навички' },
];

function Header() {
  return (
    <header className="hero">
      <div className="hero-topline">
        <a className="wordmark" href="#top" aria-label="На початок сторінки">VM<span>.</span></a>
        <span className="hero-index">РЕЗЮМЕ / 2026</span>
      </div>
      <div className="hero-main" id="top">
        <div>
          <p className="eyebrow"><span className="status-dot" /> Відкритий до нових можливостей</p>
          <h1>Мартинович<br /><span>Віталій</span></h1>
        </div>
        <div className="hero-aside">
          <span className="hero-number">01</span>
          <p>Junior cybersecurity<br />спеціаліст</p>
        </div>
      </div>
      <nav className="site-nav" aria-label="Навігація по резюме">
        {navigation.map((item, index) => (
          <a href={item.href} key={item.href}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;