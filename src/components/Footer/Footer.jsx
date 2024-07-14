import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img
          src="/src/assets/springfinder-logo.png"
          alt="SpringFinder Logo"
          className="footer__logo"
        />
        <h1 className="footer__description">
          Discover the best waterholes near you with ease. Our mission is to
          help you find the perfect spot to cool off and enjoy nature's beauty.
          Whether you're looking for a serene hot spring, a hidden swimming
          hole, or a scenic waterfall, we've got you covered. Explore, relax,
          and create unforgettable memories with our comprehensive guides and
          reviews. Your adventure to the nearest water paradise starts here!
        </h1>
        <div className="footer__input-container">
          <p className="footer__input-label">Subscribe to our website</p>
          <input
            className="footer__input"
            type="text"
            placeholder="Email"
          ></input>
        </div>
        <p className="footer__copyright">© 2024 SpringFinder</p>
      </footer>
    </>
  );
};
