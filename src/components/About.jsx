import profileImg from '../assets/1.png';
import "../App.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return (
    <>
    <section id="about" className="about-section">
  <div className="about-me-container ">
    <div className="about-content" data-aos="fade-up">
      <div className="intro row justify-content-between">
        <div className='col-4'>
          <h2>Introduction</h2>
          <h3>Hi! I'm Gautam</h3>
        </div>
        
        <div className="image col-4" data-aos="flip-left">
        <img src={profileImg} className="avatar" alt="profile" />
      </div>
        <p className="lead">
          A passionate frontend developer and computer science graduate. I love turning ideas into reality through clean, responsive, and interactive user interfaces.
        </p>
        <p>
          This Todo App is one of my personal projects to practice concepts like component-based architecture, <code>useState</code>, <code>useEffect</code>, localStorage, and dynamic UI updates.
        </p>
        <p>
          My goal is to keep learning, build real-world applications, and grow into a professional developer who delivers intuitive, accessible, and user-friendly experiences.
        </p>
        <p>
          I'm always open to collaboration, learning new technologies, and improving my skills. 🚀
        </p>
      </div>
      
      
    </div>
    <div className="app-desc" data-aos="fade-right">
      <h2 className="mb-4 text-center">📌 About the App</h2>
      <p>
        This is a simple and user-friendly <strong>Todo App</strong> built with <strong>React.js</strong>. It helps users manage daily tasks with ease by allowing them to add, delete, and mark tasks as complete.
      </p>
      <h5 className="mt-4">🛠 Tech Stack:</h5>
      <ul>
        <li>React.js</li>
        <li>Bootstrap 5</li>
        <li>JavaScript</li>
        <li>localStorage (for saving tasks)</li>
      </ul>
      <h5 className="mt-4">📚 Learnings:</h5>
      <ul>
        <li>Working with React components and state</li>
        <li>Persisting data using localStorage</li>
        <li>Handling forms and dynamic lists</li>
      </ul>
      <p className="mt-3">
        This project boosted my React fundamentals and helped me understand real-world UI building.
      </p>
      
    </div>
    <div className="social-links">
          <a href="http://x.com/code_rampage" aria-label="X (Twitter)"><FaSquareXTwitter /></a>
          <a href="https://github.com/Gothxam" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gautam-kohli-550458241/" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
  </div>
</section>
<footer>
  <div> &copy; gautam 2025 </div>
</footer>
    </>
    
  );
}
export default About;
{/* <div className="container text-center">
          <div className='row'><a href="http://x.com/code_rampage"><FaSquareXTwitter /></a></div>
          <div className='row'><a href="https://github.com/Gothxam"><FaGithub /></a></div>
          <div className='row'><a href="https://www.linkedin.com/in/gautam-kohli-550458241/"><FaLinkedin />
            </a>
          </div> */}