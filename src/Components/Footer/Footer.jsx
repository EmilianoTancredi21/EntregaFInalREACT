import styles from "./Footer.module.css";

const Footer = () => {
  return <footer className={styles.footer}>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 footer-col">
        <h3>Información de contacto</h3>
        <p><i className="fa fa-map-marker"></i> 123 Calle Falsa, Springfield</p>
        <p><i className="fa fa-phone"></i> +1-555-1234567</p>
        <p><i className="fa fa-envelope"></i> info@miempresa.com</p>
      </div>
      <div className="col-md-4 col-sm-6 footer-col">
        <h3>Navegación</h3>
        <ul className="nav">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-12 footer-col">
        <h3>Síguenos en redes sociales:</h3>
        <ul className="social">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  </div>
</footer>;
};

export default Footer;
