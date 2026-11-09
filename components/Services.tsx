import styles from "./Services.module.css";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Living Room Furnishings",
    image: "/loom-living-room.webp"
  },
  {
    title: "Furniture for Everyday Living",
    image: "/loom-bedroom.webp"
  },
  {
    title: "Upholstery & Textures",
    image: "/loom-upholstery.webp"
  },
  {
    title: "Curtains & Soft Furnishings",
    image: "/loom-curtains.webp"
  },
  {
    title: "Natural Materials & Finishes",
    image: "/loom-natural-materials.webp"
  },
  {
    title: "Furniture for Workspaces",
    image: "/loom-workspace.webp"
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient">Our Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle">
            Discover furnishings, textures, and finishing touches for rooms that feel warm, balanced, and personal.
          </p>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={0.2 + (index * 0.1)}>
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
