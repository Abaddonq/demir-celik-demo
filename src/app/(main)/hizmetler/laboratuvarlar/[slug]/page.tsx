// import { labs } from "@/data/labs";
// import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return labs.map((lab) => ({ slug: lab.slug }));
// }

// export default function LabDetailPage({ params }: { params: { slug: string } }) {
//   const lab = labs.find((l) => l.slug === params.slug);
//   if (!lab) return notFound();

//   return (
//     <>
//       <h1 className="text-2xl font-bold text-blue-900 mb-4">{lab.title}</h1>
//       <p className="text-gray-700">{lab.description}</p>
//     </>
//   );
// }

// /[slug]/page.tsx
import { labs } from '@/data/labs';
import { notFound } from 'next/navigation';
import LabClient from './LabClient';

export async function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export default function LabPage({ params }: { params: { slug: string } }) {
  const lab = labs.find((l) => l.slug === params.slug);
  if (!lab) return notFound();

  return <LabClient lab={lab} />;
}
