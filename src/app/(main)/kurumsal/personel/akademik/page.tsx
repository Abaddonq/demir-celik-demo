"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1";
import PageHeader from "@/components/PageHeader";
import AcademicAccordion from "@/components/AcademicAccordion"; // Yeni Accordion bileşenini import ediyoruz

export default function AkademiPersonelPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Akademi")}`)
      .then((res) => res.json())
      .then((data) => setStaff(data));
  }, []);

  if (!staff.length) return <div>Yükleniyor...</div>;

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

              {/* İletişim Bilgileri Accordion'ı */}
              <div className="w-full mt-6 max-w-sm">
                <AcademicAccordion
                  title="İletişim Bilgileri"
                  items={[
                    {
                      name: person.name + " " + person.surname,
                      email: person.email,
                      institution: person.phone ? `Telefon: ${person.phone}` : 'Telefon bilgisi yok',
                    },
                  ]}
                />
              </div>

              {/* Sorumlu Laboratuvarlar Accordion'ı */}
              <div className="w-full mt-4 max-w-sm">
                <AcademicAccordion
                  title="Sorumlu Laboratuvarlar"
                  items={[
                    {
                      name: person.name + " " + person.surname, // Bu kısım hala gerekli çünkü Accordion bileşeni Editor tipini bekliyor
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