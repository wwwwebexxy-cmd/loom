import styles from "./Services.module.css";
import ScrollReveal from "./ScrollReveal";
import { services } from "./serviceData";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle">
            Curtains, blinds, upholstery, custom furniture, wall finishes, flooring, carpets, decorative stickers, and frosted glass film.
          </p>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={0.2 + (index * 0.1)}>
              <div className={styles.card}>
                <img src={service.image} alt={service.title} className={styles.cardImage} />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
