import './Stack.css';

export default function Stack() {
  return (
    <div className="stack">
      <div className="items">
        <div className="twitter-box">
          <a
            className="twitter-timeline"
            data-lang="en"
            data-width="260"
            data-height="500"
            data-theme="dark"
            data-chrome="noscrollbar"
            data-tweet-limit="5"
            href="https://twitter.com/ryanparkerdev?ref_src=twsrc%5Etfw"
          >
            Tweets by ryanparkerdev
          </a>
          <a
            href="https://twitter.com/ryanparkerdev?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-size="large"
            data-show-count="false"
          >
            Follow @ryanparkerdev
          </a>
        </div>
        <div className="frame">
          <h2 className="category">Frameworks</h2>
          <div className="icon-box">
            <img className="tech" title="react.js" src="../icons/react-logo.png" />
            <img className="tech" title="express.js" src="../icons/express-icon.png" />
            <img className="tech" title="three.js" src="../icons/threejs-icon.png" />
          </div>
        </div>
        <div className="db">
          <h2 className="category">Databases</h2>
          <div className="icon-box">
            <img className="tech" title="PostgreSQL" src="../icons/postgres.png" />
            <img className="tech" title="Supabase" src="../icons/supabase-icon.png" />
          </div>
        </div>
        <div className="tools">
          <h2 className="category">Tools</h2>
          <div className="icon-box">
            <img className="tech" title="Beekeeper" src="../icons/beekeeper.png" />
            <img className="tech" title="Discord" src="../icons/discord-logo.png" />
            <img className="tech" title="GIMP 2.0" src="../icons/gimp-icon.png" />
            <img className="tech" title="GitHub" src="../github-icon.png" />
            <img className="tech" title="Material UI" src="../icons/mui-icon.png" />
            <img className="tech" title="Miro" src="../icons/miro-icon.png" />
            <img className="tech" title="Netlify" src="../netlify-icon.png" />
            <img className="tech" title="Postman" src="../icons/postman-icon.png" />
            <img className="tech" title="Slack" src="../icons/slack-icon.png" />
            <img className="tech" title="Storybook" src="../icons/storybook-icon.png" />
            <img className="tech" title="Zoom" src="../icons/zoom-icon-text.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
