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

export default function YonetimKadromuzPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Yönetim Kurulu")}`)
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

  if (loading) { // Conditionally render LoadingSpinner
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // If not loading and no staff, show an appropriate message
  if (!staff.length) return <div>Personel bulunamadı.</div>;

  const topPerson = staff[0];
  const otherStaff = staff.slice(1);

  return (
    <div>
      <PageHeader
        imageUrl="/images/demir-celik.avif"
        title="Yönetim Kadromuz"
      />

      <div className="flex justify-center my-8">
        {topPerson && <Person1 person={topPerson} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {otherStaff.map((person: Staff, idx: number) => (
          <Person1 key={person.id || idx} person={person} />
        ))}
      </div>
    </div>
  );
}