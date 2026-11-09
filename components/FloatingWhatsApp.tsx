"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const whatsappNumber = "971582206054";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat with Loom and Grain on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}
