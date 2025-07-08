import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <PageHeader
            imageUrl="/images/demir-celik.jpg" 
            title="Demir Celik" 
          />
          <Link href="/hizmetler/genel-bakis">
            Anasayfa
          </Link>
    </>
  );
}
