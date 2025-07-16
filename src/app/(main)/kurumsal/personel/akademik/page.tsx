// <<<<<<< HEAD
"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1"; 
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import AccreditationList from "@/components/AccreditationList";

export default function İdariPersonelPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Akademi")}`)
      .then(res => res.json())
      .then(data => setStaff(data));
  }, []);

  if (!staff.length) return <div>Yükleniyor...</div>;

  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-control.jpg"
         title="Akadimik Personel"
      />
      <div>
    <div className="grid grid-cols-3 gap-4">
      {staff.map((person: any, idx: number) => (
        <Person1 key={person.id ?? idx} person={person} />
        
      ))}
      </div>
    </div>
    </div>
  );
}
// =======
// // pages/index.tsx
// import React from "react";

// // Bu sayfa "Hazırlanıyor" mesajı gösterecek
// const UnderConstruction: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Site Hazırlanıyor</h1>
//       <p style={styles.paragraph}>Yeniden bizi ziyaret ettiğinizde sitemiz hazır olacak!</p>
//       <div style={styles.footer}>
//         <p>&copy; 2025, Tüm hakları saklıdır.</p>
//       </div>
//     </div>
//   );
// };

// // Inline stil objesi
// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f0f0f0",
//     textAlign: "center",
//   },
//   header: {
//     fontSize: "48px",
//     color: "#2C3E50",
//     marginBottom: "20px",
//   },
//   paragraph: {
//     fontSize: "18px",
//     color: "#7F8C8D",
//   },
//   footer: {
//     position: "absolute",
//     bottom: "10px",
//     fontSize: "14px",
//     color: "#BDC3C7",
//   },
// };

// export default UnderConstruction;
// >>>>>>> 030d0c5477919e628a2ab64937e239c3cb29b63e
