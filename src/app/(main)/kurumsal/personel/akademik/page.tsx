"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1";
import PageHeader from "@/components/PageHeader";
import AcademicAccordion from "@/components/AcademicAccordion";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the LoadingSpinner component

export default function AkademiPersonelPage() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Akademi")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setStaff(data);
      })
      .catch((err) => {
        console.error("Failed to fetch staff data:", err);
        setError("Personel bilgileri yüklenirken bir hata oluştu."); // Set an error message
        setStaff([]); // Clear staff on error
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
        title="Akademik Personel"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((person: any, idx: number) => (
            <div key={person.id ?? idx} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
              <Person1 person={person} />

             

              {/* Sorumlu Laboratuvarlar Accordion'ı */}
              <div className="w-full mt-4 max-w-sm">
                <AcademicAccordion
                  title="Sorumlu Laboratuvarlar"
                  items={[
                    {
                      name: person.name + " " + person.surname,
                      institution: (
                        <div>
                          {person.responsible_labs && person.responsible_labs.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {person.responsible_labs.map((lab: string, labIdx: number) => (
                                <li key={labIdx}>{lab}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className="opacity-70">Sorumlu olduğu laboratuvar bulunmamaktadır.</div>
                          )}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}