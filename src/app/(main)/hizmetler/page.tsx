// pages/index.tsx
import React from "react";

// Bu sayfa "Hazırlanıyor" mesajı gösterecek
const UnderConstruction: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Site Hazırlanıyor</h1>
      <p style={styles.paragraph}>Yeniden bizi ziyaret ettiğinizde sitemiz hazır olacak!</p>
      <div style={styles.footer}>
        <p>&copy; 2025, Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

// Inline stil objesi
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  header: {
    fontSize: "48px",
    color: "#2C3E50",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    color: "#7F8C8D",
  },
  footer: {
    position: "absolute",
    bottom: "10px",
    fontSize: "14px",
    color: "#BDC3C7",
  },
};

export default UnderConstruction;
