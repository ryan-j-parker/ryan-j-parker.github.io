import './About.css';

export default function About() {
  return (
    <>
      <div className="header-box">
        <div className="bg"></div>
        <a href="mailto:ryan.jos.parker+io@gmail.com">
          <p className="sitename">&#x2709;&#xFE0F;</p>
        </a>
        <span
          title="
            ryan.jos.parker@gmail.com
            linkedin.com/in/ryanparkerdev
            twitter.com/ryanparkerdev
          ~~ gaze upon my beautiful repo collection: ~~
            github.com/ryan-j-parker
          "
          className="faceblob"
        />
        <a href="https://www.linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
          <img src="../linkedin-icon.png" className="logo-img" />
        </a>
        <a href="https://www.github.com/ryan-j-parker" target="_blank" rel="noreferrer">
          <img src="../github-icon-white.png" className="logo-img" />
        </a>
        <a href="https://www.twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
          <img src="../twitter-icon.png" className="logo-img" />
        </a>
      </div>
      <div className="greeting">
        <div className="about-text">
          <h1 className="hi">Hi!</h1>
          <h5 className="my">my name is</h5>
          <h2 className="ryan" title="
            I'm currently working on v2 
            of this site, which will be
            a full-stack app built with
            React, Express, and Supabase.
            Please share your feedback!
          ">Ryan Parker</h2>
          <h2 className="dev">
            I&apos;m a{' '}
            <p className="creative" id="c">
              &#123; creative
            </p>{' '}
            <p className="creative" id="s">
              software
            </p>{' '}
            <p className="creative" id="d">
              developer &#125;
            </p>{' '}
            located in Vancouver, WA.
          </h2>
          <h3 className="apps">
            I develop responsive, intuitive, and scalable apps with React and Express.
          </h3>
          <h3 className="alchemy">
            I will be graduating from 
            <br /><a className="alchemy-link" href="https://www.alchemycodelab.com">Alchemy Code Lab</a><br /> 
            in February of 2023 as a full-stack software
            developer with
            <p className="hours">1000+ hours</p>
            of training.
          </h3>
          <h3 className="industry">I&apos;m looking forward to entering the tech industry!</h3>
        </div>
      </div>
    </>
  );
}
