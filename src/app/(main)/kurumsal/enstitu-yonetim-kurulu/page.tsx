"use client";
import { useEffect, useState } from "react";
import Person1 from "@/components/Person1"; 
import PageHeader from "@/components/PageHeader";

export default function EnstitüYonetimKuruluPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch(`/api/staff?department=${encodeURIComponent("Enstitü Yönetim Kurulu")}`)
      .then(res => res.json())
      .then(data => setStaff(data));
  }, []);

  if (!staff.length) return <div>Yükleniyor...</div>;

  return (
    
   
      
    <div>
            <PageHeader
              imageUrl="/images/ic-control.jpg"
              title="Enstitü-Yönetim-Kurulu"
            />
          <div className="grid grid-cols-3 gap-4">
          
          {staff.map((person: any, idx: number) => (
            <Person1 key={person.id ?? idx} person={person} />
          ))}
        </div>

    </div>


  );
}