import '../App.css';

function About() {
  return (
    <div className="board about-container">
      
      {/* Intro Header */}
      <h1 className="about-header">Welcome to Wordle Clone!</h1>
      <p className="about-intro">
        This project is a tribute to the viral daily word game that captured the world's attention. 
        Built entirely from scratch using React, it brings the familiar, addictive challenge of 
        guessing the secret five-letter word right to your browser. Test your vocabulary and logic 
        to see if you can solve the puzzle in six tries!
      </p>

      <hr className="about-divider" />

      {/* How to Play Section */}
      <h2 className="about-section-title">How to Play</h2>
      <p className="about-text">
        You have <strong>6 attempts</strong> to guess the secret <strong>5-letter word</strong>. 
        Type your guess and hit the <strong>Enter</strong> key to submit. The color of the tiles 
        will change to show how close your guess was:
      </p>

      {/* Visual Examples */}
      <div className="about-examples-list">
        <div className="about-example-row">
          <div className="tile correct">W</div>
          <span><strong>Green:</strong> The letter is in the word and in the <strong>correct</strong> spot.</span>
        </div>
        
        <div className="about-example-row">
          <div className="tile close">O</div>
          <span><strong>Yellow:</strong> The letter is in the word but in the <strong>wrong</strong> spot.</span>
        </div>
        
        <div className="about-example-row">
          <div className="tile incorrect">R</div>
          <span><strong>Grey:</strong> The letter is <strong>not</strong> in the word at all.</span>
        </div>
      </div>

      <hr className="about-divider" />

      {/* About the Tech Section */}
      <h2 className="about-section-title">About the Project</h2>
      <p className="about-text tech-description">
        This application was created as a hands-on exploration of modern front-end engineering. 
        Behind the simple grid interface lies a robust engine running on React state management. 
        The app dynamically captures keyboard inputs using window event listeners, syncs your 
        progress across rows, and instantly cross-references data against a local JSON 
        dictionary the exact moment you submit your word.
      </p>

    </div>
  );
}

export default About;