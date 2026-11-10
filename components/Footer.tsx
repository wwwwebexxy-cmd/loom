import styles from "./Footer.module.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/loom-and-grain-horizontal.png"
              alt="Loom and Grain Furnishing LLC"
              width={2172}
              height={724}
              className={styles.logoImage}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          <p className={styles.description}>
            Furnishings, textures, and considered details chosen to make a space feel like your own.
          </p>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/loomandgrain.furnishings?cplk=MmdsNGJpaDhlN3Q2&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Loom and Grain on Instagram"
          >
            <FaInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Explore</h4>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#services" className={styles.link}>Services</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Our services</h4>
          <a href="#services" className={styles.link}>Curtains & blinds</a>
          <a href="#services" className={styles.link}>Upholstery & custom furniture</a>
          <a href="#services" className={styles.link}>Wall & floor finishes</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Get in touch</h4>
          <a href="tel:+971582206054" className={styles.link}>+971 582 206 054</a>
          <a href="mailto:loomandgrain@gmail.com" className={styles.link}>loomandgrain@gmail.com</a>
          <a
            href="https://maps.app.goo.gl/VCuisYDPTpYTA2hD8?g_st=iwb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Showroom location
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Loom and Grain Furnishing LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
