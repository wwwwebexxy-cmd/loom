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
            <h3 className={styles.heading}>TRUSTED CURTAIN SOLUTIONS ACROSS DUBAI AND THE UAE</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.paragraph}>
              With over 12 years of experience in the Dubai and UAE market, Loom and Grain has established itself as a trusted leader in premium curtain solutions, known for reliability and excellence throughout Dubai and the UAE.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.paragraph}>
              Our portfolio spans prestigious hotel chains, luxury residential villas, and commercial spaces. We bring technical precision and bespoke design to every installation, ensuring perfect functionality and aesthetic appeal.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5}>
            <p className={styles.paragraph}>
              At Loom and Grain, we combine innovative shading technology with timeless craftsmanship. Our dedicated team manages every phase from concept to completion, delivering tailored results that stand the test of time.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
