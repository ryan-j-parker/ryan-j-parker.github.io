import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="link-box">
        {/* <h3>Ryan Parker, software developer</h3> */}
        <div className="header-link">
          <a href="https://www.linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
            <img src="../linkedin-icon.png" className="header-logo" />
          </a>
          <a href="https://www.github.com/ryan-j-parker" target="_blank" rel="noreferrer">
            <img src="../github-icon-white.png" className="header-logo" />
          </a>
          <a href="https://www.twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
            <img src="../twitter-icon.png" className="header-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
