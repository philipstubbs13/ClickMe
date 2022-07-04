export const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-default navbar-fixed-top mb-4">
      <div className="container">
          <h1 className="text-white">ClickMe</h1>
          <span className="game-message text-white navbar-text">{props.message}</span>
          <span className="text-white navbar-text">Score: {props.count}  |  Top Score: {props.topScore}</span>
      </div>
  </nav>
);
