import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-mailto fadeIn">
        <h2>Hablemos</h2>
        <p>Contactame para que creemos un proyecto juntos</p>
        <a href="mailto:14bryansaenz@gmail.com">Envíame un correo</a>
      </div>
      <div className="footer-info">
        <p>B14S</p>
        <p>
          Aprendo y creo todos los días <br />
          Creemos un proyecto juntos
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/14BryanSaenz" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/14BryanSaenz" target="_blank">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/14bryansaenz/" target="_blank">
              <i className="bi bi-LinkedIn"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Bryan14Saenz" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
        <p>Desarrollado por Bryan Saenz ©(2025)</p>
      </div>
    </footer>
  );
}

export default Footer;
