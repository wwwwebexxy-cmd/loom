import styles from "./StickyFeatures.module.css";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    id: 1,
    title: "Living spaces",
    description: "Comfortable furnishings and soft layers for everyday moments.",
    image: "/loom-living-room.webp",
  },
  {
    id: 2,
    title: "Bedroom calm",
    description: "Thoughtful textures and details that make it easy to unwind.",
    image: "/loom-bedroom.webp",
  },
  {
    id: 3,
    title: "Upholstery & texture",
    description: "A tactile mix of fabric, tone, and character.",
    image: "/loom-upholstery.webp",
  },
  {
    id: 4,
    title: "Window treatments",
    description: "Curtains and blinds that shape light and privacy.",
    image: "/loom-curtains.webp",
  },
  {
    id: 5,
    title: "Natural materials",
    description: "Warm grains and considered finishes bring depth to a room.",
    image: "/loom-natural-materials.webp",
  },
  {
    id: 6,
    title: "Workspaces",
    description: "Furniture and finishes for focused, comfortable days.",
    image: "/loom-workspace.webp",
  }
];

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
                Loom and Grain brings furniture, fabrics, and finishing touches together in a thoughtful balance of texture, comfort, and character.
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
              {features.concat(features).map((feature, index) => (
                <div key={`${feature.id}-${index}`} className={styles.slideCard}>
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
