import ScrollReveal from "./ScrollReveal";
import styles from "./OurClients.module.css";

const principles = [
  {
    number: "01",
    title: "The feel",
    description: "Soft layers and comfortable pieces that make a room welcoming.",
  },
  {
    number: "02",
    title: "The material",
    description: "A considered balance of texture, tone, and natural grain.",
  },
  {
    number: "03",
    title: "The finish",
    description: "Thoughtful details that bring the whole space together.",
  },
];

export default function OurClients() {
  return (
    <section className="py-20" id="our-clients">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center mb-12">The Loom and Grain approach</h2>
        </ScrollReveal>
        
        <div className={styles.logoGrid}>
          {principles.map((principle, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 + (index * 0.1)}>
              <div className={styles.logoWrapper}>
                <span className={styles.number}>{principle.number}</span>
                <h3 className={styles.cardTitle}>{principle.title}</h3>
                <p className={styles.cardDescription}>{principle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
