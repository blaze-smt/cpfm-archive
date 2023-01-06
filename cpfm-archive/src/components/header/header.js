import "./header.css";

function Header() {
  return (
    <header className="header-home">
      <nav className="navbar">
        <div className="nav-anchors">
          <a rel="noreferrer" href="https://discord.com/" target="_blank">
            Discord
          </a>
          <a rel="noreferrer" href="https://blazesmith.net/" target="_blank">
            Blaze
          </a>
        </div>
        <img
          id="logo-gif"
          alt="Archive CPFM website logo"
          src="/assets/gifs/cpfmxyz-logo.gif"
        ></img>
      </nav>
    </header>
  );
}

export default Header;
