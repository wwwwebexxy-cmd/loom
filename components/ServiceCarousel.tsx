"use client";

import React from "react";
import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";

const allServices = [
  { title: "Living Room Furnishings", image: "/loom-living-room.webp" },
  { title: "Bedroom Comfort", image: "/loom-bedroom.webp" },
  { title: "Upholstery & Textures", image: "/loom-upholstery.webp" },
  { title: "Curtains & Soft Layers", image: "/loom-curtains.webp" },
  { title: "Furniture for Workspaces", image: "/loom-workspace.webp" },
  { title: "Wardrobes & Storage", image: "/loom-storage.webp" },
  { title: "Wall Finishes & Details", image: "/loom-wall-finish.webp" },
  { title: "Natural Materials", image: "/loom-natural-materials.webp" },
];

export default function ServiceCarousel() {
  return (
    <section className="py-20 overflow-hidden bg-white" id="services">
      <div className="container mb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center">Comprehensive Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle text-center mx-auto">
            Explore comfortable furniture, soft furnishings, and the considered details that make a space your own.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {allServices.map((service, index) => (
            <div key={index} className={styles.card}>
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
