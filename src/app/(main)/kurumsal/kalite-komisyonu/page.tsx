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

export default function KaliteKomisyonuPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Kalite Komisyonu")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Staff[]) => setStaff(data))
      .catch((error) => {
        console.error("Failed to fetch staff data:", error);
        setStaff([]);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, []);

  if (loading) { // Conditionally render LoadingSpinner for initial data fetch
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // If not loading and no staff, show an appropriate message
  if (!staff.length) return <div>Personel bulunamadı.</div>;

  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-kontrol.avif"
        title="Kalite Komisyonu"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8 px-4">
        {/* Person1 components are now lazy-loaded, with the spinner appearing for each as it loads */}
        {staff.map((person: Staff, idx: number) => (
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}