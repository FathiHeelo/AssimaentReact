const Header = ({ title, subtitle }) => (
  <header style={{ backgroundImage: `url('/src/assets/Banner Background.png')` }}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
);

export default Header;