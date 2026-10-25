const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'];

function Skills() {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2>Навички</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <div className="language-row">
        <span>Англійська</span>
        <span className="language-level">B1</span>
      </div>
    </section>
  );
}

export default Skills;