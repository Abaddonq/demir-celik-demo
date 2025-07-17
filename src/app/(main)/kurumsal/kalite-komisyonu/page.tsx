"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1";
import PageHeader from "@/components/PageHeader";
import { Staff } from "@/lib/dashboardTypes"; // Staff tipi için import ekledim

export default function KaliteKomisyonuPage() {
  const [staff, setStaff] = useState<Staff[]>([]); // State'e tip ekledim

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Kalite Komisyonu")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Staff[]) => setStaff(data)) // Veri tipini belirttim
      .catch((error) => {
        console.error("Failed to fetch staff data:", error);
        setStaff([]); // Hata durumunda boş dizi döndür
      });
  }, []);

  if (!staff.length) return <div>Yükleniyor...</div>;

  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-kontrol.avif"
        title="Kalite Komisyonu" // Title'ı düzelttim
      />
      {/* Grid yapısını mobil uyumlu hale getirdik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8 px-4">
        {staff.map((person: Staff, idx: number) => ( // person için tip belirttim
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}