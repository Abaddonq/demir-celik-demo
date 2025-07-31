"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; 
import PageHeader from "@/components/PageHeader";
import { Staff } from "@/lib/dashboardTypes";
import LoadingSpinner from "@/components/LoadingSpinner"; 
const Person1 = dynamic(() => import("@/components/Person1"), {
  loading: () => <LoadingSpinner />, 
  ssr: false, 
});

export default function EnstitüYonetimKuruluPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true); // Initialize loading state for data fetch

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
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch is complete
      });
  }, []);

  // Only show a full-page spinner if the initial data is still loading
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // If not loading and no staff, show "Personel bulunamadı."
  if (!staff.length) return <div>Personel bulunamadı.</div>;

  const topPerson = staff[0];
  const otherStaff = staff.slice(1);

  return (
    <div>
      <PageHeader
        imageUrl="/images/demir-celik.avif"
        title="Enstitü Yönetim"
      />

      {/* Top person displayed centrally. next/dynamic handles the loading state via its 'loading' option. */}
      <div className="flex justify-center my-8">
        {topPerson && <Person1 person={topPerson} />}
      </div>

      {/* Remaining staff displayed in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {otherStaff.map((person: Staff, idx: number) => (
          // next/dynamic handles the loading state for each instance
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}