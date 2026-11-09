import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <ScrollReveal direction="right" className={styles.imageMain}>
            <img 
              src="/loom-about-living.webp"
              alt="A softly furnished interior with layered materials"
              className={styles.aboutImage}
            />
          </ScrollReveal>
        </div>
        <div className={styles.textContent}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', margin: 0 }}>About Us</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className={styles.heading}>FURNISHINGS THAT BRING COMFORT AND CHARACTER INTO YOUR SPACE</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.paragraph}>
              With 10 years of experience, Loom and Grain brings together furniture, textiles, and finishing details to create rooms that feel considered, comfortable, and personal.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.paragraph}>
              From the first fabric choice to the final detail, each layer adds warmth, character, and a sense of belonging to the spaces we live in.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
