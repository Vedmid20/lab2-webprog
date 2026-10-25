import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="resume-layout">
        <aside className="resume-sidebar">
          <About />
          <Skills />
          <Education />
        </aside>
        <div className="resume-content">
          <Experience />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;