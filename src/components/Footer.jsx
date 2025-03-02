import '../styles/Footer.css'
import SocialLinks from './SocialLinks';
const Footer = () => {
  return (
    <footer className="footer">
      <h2>Portfolio</h2>
      <br />
      <br />
      <nav>
        Home | About | Service | Projects | Contact
      </nav>

      <br />
      <br />
      {/* <SocialLinks/>   */}
      <div className="copyright">
        © Copyright 2025 | Portfolio | All rights reserved |
        <br />
        Powered by <strong>BCABro</strong>
      </div>
    </footer>
  );
};

export default Footer;
