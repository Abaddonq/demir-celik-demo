"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1";
import PageHeader from "@/components/PageHeader";
import { Staff } from "@/lib/dashboardTypes"; // Staff tipi için import ekledim
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the LoadingSpinner component

export default function IdariPersonelPage() {
  const [staff, setStaff] = useState<Staff[]>([]); // State'e tip ekledim
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state for better error handling

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("İdari")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Staff[]) => setStaff(data)) // Veri tipini belirttim
      .catch((err) => { // Use 'err' to distinguish from previous 'error'
        console.error("Failed to fetch staff data:", err);
        setError("Personel bilgileri yüklenirken bir hata oluştu."); // Set an error message
        setStaff([]); // Hata durumunda boş dizi döndür
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, []);

  if (loading) { // Conditionally render LoadingSpinner
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) { // Display error message if there was an error
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  if (!staff.length) { // Show "No staff found" message if array is empty after loading
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
        {staff.map((person: Staff, idx: number) => ( // person için tip belirttim
          <Person1 key={person.id ?? idx} person={person} />
        ))}
      </div>
    </div>
  );
}