// @ts-nocheck
export const Navbar = ({ count, message, topScore }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-default navbar-fixed-top mb-4">
      <div className="container">
          <h1 className="text-white">ClickMe</h1>
          <span className="game-message text-white navbar-text">{message}</span>
          <span className="text-white navbar-text">Score: {count}  |  Top Score: {topScore}</span>
      </div>
  </nav>
);
