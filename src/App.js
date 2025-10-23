import './App.css';
import {default as profile} from './assets/profile.jpg'

function App() {
  return (
      <div>

      <header>
        <img src={profile} width={256} height={256} alt="Profile" />
        <h1>Nga Pham</h1>
        <h2>BSc'14, Information Technology, HNUE, Vietnam</h2>
      </header>

      <main>
        <div className="info">
          <p>👋 Hi, I’m Nga Pham, a female developer in EU.</p>
          <p>👀 I’m a passionate programmer, specialized in Web development.</p>
          <p>🌱 I am also a quiet bookgeek and a literature lover.</p>
          <p>💞️ I’m looking to collaborate on building interactive and responsive website.</p>
          <p>
            📫 How to reach me? You can contact me via email:
            <a href="mailto:nga.pham.cs83@gmail.com"> nga.pham.cs83@gmail.com</a> or
            <a href="https://www.linkedin.com/in/nga-pham-cs83"> linkedin</a>
          </p>
        </div>

        <hr />

        <div className="social-links">
          <h2>My repositories</h2>
          <a href="https://github.com/nga-pham">Github profile</a>
          <a href="https://bitbucket.org/danbistd/workspace/repositories/">Bitbucket profile</a>
        </div>

        <hr />

        <div className="post">
          <h2>My blog posts</h2>
          <ul>
            <li><a href="blog.html">AI is now an evolution. What's next?</a></li>
          </ul>
        </div>
      </main>

      <footer>© 2025 Nga Pham. All rights reserved.</footer>
    </div>
  );
}

export default App;
