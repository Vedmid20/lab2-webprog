const positions = [
  {
    title: 'Junior Frontend Developer',
    company: 'Назва компанії',
    period: '2024 — теперішній час',
    responsibilities: [
      'Верстка вебсторінок за макетами',
      'Робота з Git та GitHub',
      "Участь у код-рев'ю",
    ],
  },
  {
    title: 'Стажер',
    company: 'Інша компанія',
    period: '2023 — 2024',
    responsibilities: [
      'Допомога у розробці внутрішніх інструментів',
      'Тестування вебсайтів',
    ],
  },
];

function Experience() {
  return (
    <section className="section-block experience-section" id="experience">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2>Досвід роботи</h2>
      </div>
      <div className="experience-list">
        {positions.map((position) => (
          <article className="experience-item" key={position.title}>
            <div className="experience-meta">
              <span>{position.period}</span>
              <span className="meta-mark">↗</span>
            </div>
            <div>
              <h3>{position.title}</h3>
              <p className="company-name">{position.company}</p>
              <ul>
                {position.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;