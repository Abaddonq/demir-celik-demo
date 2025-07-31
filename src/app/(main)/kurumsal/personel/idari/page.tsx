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

export default function IdariPersonelPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("İdari")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Staff[]) => setStaff(data))
      .catch((err) => {
        console.error("Failed to fetch staff data:", err);
        setError("Personel bilgileri yüklenirken bir hata oluştu.");
        setStaff([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  if (!staff.length) {
    return <div>Personel bulunamadı.</div>;
  }

  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-kontrol.avif"
        title="İdari Personel"
      />
      {/* Grid yapısını mobil uyumlu hale getirdik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-8 px-4">
        {staff.map((person: Staff, idx: number) => (
          // Person1 component is now lazy-loaded, with the spinner appearing for each as it loads
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}