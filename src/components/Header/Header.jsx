import "./Header.css";

export const Header = () => {
  return (
    <>
      <nav className="nav">
        <img
          src="/src/assets/springfinder-logo.png"
          alt="SpringFinder Logo"
          className="nav__logo"
        />
        <ul className="nav__list">
          <li className="nav__list-item">Home</li>
          <li className="nav__list-item">Activity</li>
          <li className="nav__list-item">Destination</li>
          <li className="nav__list-item">Contact</li>
        </ul>
        <ul className="icons">
          <li className="icon-images"></li>
          <li className="icon-images"></li>
          <li className="icon-images"></li>
        </ul>
      </nav>
    </>
  );
};
