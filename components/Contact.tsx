import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";

const instagramUrl = "https://www.instagram.com/loomandgrain.furnishings?cplk=MmdsNGJpaDhlN3Q2&utm_source=qr";
const mapsUrl = "https://maps.app.goo.gl/VCuisYDPTpYTA2hD8?g_st=iwb";
const mapEmbedUrl = "https://maps.google.com/maps?q=Al%20Khayat%20Avenue%2C%20Warehouse%20No.%2017%2C%2017th%20St%2C%20Al%20Quoz%20Ind.%20First%2C%20Al%20Quoz%2C%20Dubai&output=embed";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoColumn}>
          <ScrollReveal direction="right" delay={0.1}>
            <h2 className={`section-title text-gradient ${styles.title}`}>
              Let&apos;s talk about your space
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <p className={styles.contactCopy}>
              Speak with our operations team about furnishings, materials, and finishing details for your space.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3} className={styles.contactCard}>
            <div className={styles.person}>
              <h3 className={styles.personName}>Muhammed Arafath</h3>
              <p className={styles.personRole}>Head of Operations</p>
            </div>

            <div className={styles.contactDetails}>
              <a className={styles.detailLink} href="tel:+971582206054">
                <span className={styles.detailIcon}><FaPhoneAlt aria-hidden="true" /></span>
                <span className={styles.detailText}>
                  <span className={styles.detailLabel}>Phone</span>
                  <span className={styles.detailValue}>+971 582 206 054</span>
                </span>
              </a>

              <a className={styles.detailLink} href="mailto:loomandgrain@gmail.com">
                <span className={styles.detailIcon}><FaEnvelope aria-hidden="true" /></span>
                <span className={styles.detailText}>
                  <span className={styles.detailLabel}>Email</span>
                  <span className={styles.detailValue}>loomandgrain@gmail.com</span>
                </span>
              </a>

              <a
                className={`${styles.detailLink} ${styles.addressLink}`}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.detailIcon}><FaMapMarkerAlt aria-hidden="true" /></span>
                <span className={styles.detailText}>
                  <span className={styles.detailLabel}>Address</span>
                  <address className={styles.detailValue}>
                    Al Khayat Avenue, Warehouse No. 17, 17th St,
                    <br />Al Quoz Ind. First, Al Quoz, Dubai
                  </address>
                </span>
              </a>
            </div>

            <a
              className={styles.instagramLink}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Follow Loom and Grain on Instagram</span>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <a href="#services" className={styles.contactButton}>Explore furnishings</a>
          </ScrollReveal>
        </div>

        <div className={styles.mapColumn}>
          <iframe
            className={styles.mapFrame}
            src={mapEmbedUrl}
            title="Map to Loom and Grain Furnishing LLC in Al Quoz, Dubai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className={styles.mapLink}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Open exact location in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
