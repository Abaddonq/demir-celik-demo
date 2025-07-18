"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1";
import PageHeader from "@/components/PageHeader";
import { Staff } from "@/lib/dashboardTypes";

export default function EnstitüYonetimKuruluPage() {
  const [staff, setStaff] = useState<Staff[]>([]);

  useEffect(() => {
    fetch(
      `/api/staff?department=${encodeURIComponent("Enstitü Yönetim Kurulu")}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Staff[]) => {
        // Find 'Recep'
        const recepIndex = data.findIndex(
          (person: Staff) => person.name === "Recep"
        );

        // If Recep is found, move him to the beginning of the array
        if (recepIndex !== -1) {
          const recep = data.splice(recepIndex, 1)[0];
          data.unshift(recep);
        }

        setStaff(data);
      })
      .catch((error) => {
        console.error("Failed to fetch staff data:", error);
        // Optionally, handle the error more gracefully in the UI
        setStaff([]);
      });
  }, []);

  if (!staff.length) return <div>Yükleniyor...</div>;

  const topPerson = staff[0];
  const otherStaff = staff.slice(1);

  return (
    <div>
      <PageHeader
        imageUrl="/images/demir-celik.avif"
        title="Yönetim Kadromuz"
      />

      {/* Top person displayed centrally */}
      <div className="flex justify-center my-8">
        {/* Sadece ilk kişiyi (topPerson) göster */}
        {topPerson && <Person1 person={topPerson} />}
      </div>

      {/* Remaining staff displayed in a 2x2 grid (or adjust grid-cols for 4 people side-by-side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {/* Diğer tüm personelleri (otherStaff) ızgarada göster */}
        {otherStaff.map((person: Staff, idx: number) => (
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}
