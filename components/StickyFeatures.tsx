import styles from "./StickyFeatures.module.css";
import ScrollReveal from "./ScrollReveal";
import { serviceHighlights as features } from "./serviceData";

export default function StickyFeatures() {
  return (
    <section id="features" className={styles.sectionContainer}>
      <div className="container">

        <div className={styles.splitLayout}>
          <div className={styles.textContent}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title text-gradient" style={{ textAlign: "left", margin: 0 }}>
                The details make the room
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className={styles.description}>
                Loom and Grain brings curtains, blinds, upholstery, custom furniture, and finishing services together for residential and commercial spaces.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.imageContent}>
            <ScrollReveal direction="left" delay={0.2}>
              <img src="/loom-project-details.webp" alt="Furnishing samples and project plans arranged on a table" className={styles.mainImage} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {[...features, ...features].map((feature, index) => (
                <div key={`${feature.title}-${index}`} className={styles.slideCard}>
                  <img src={feature.image} alt={feature.title} className={styles.slideImage} />
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>{feature.title}</h3>
                    <p className={styles.slideDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
