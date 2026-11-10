"use client";

import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";
import { services } from "./serviceData";

export default function ServiceCarousel() {
  return (
    <section className="py-20 overflow-hidden bg-white" id="services">
      <div className="container mb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle text-center mx-auto">
            Curtains, blinds, sofa upholstery, custom furniture, wall finishes, flooring, carpets, stickers, and frosted glass film for residential and commercial spaces.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
