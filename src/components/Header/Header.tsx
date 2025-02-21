import './header.css';

function Header() {
  return (
    <header id="header">
      <div id="header-logo">
        <img src="/public/OnePiece.svg" alt="logo one piece" />
      </div>
      <nav id="header-nav">
        <ul>
          <li>
            <a href="/index.html">Inicio</a>
          </li>
          <li>
            <a
              href="https://api-onepiece.com/en/documentation/2-fruit"
              target="_blank"
            >
              API
            </a>
          </li>
          <li>
            <a href="#footer">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
