import { labs } from '@/data/labs';
import { notFound } from 'next/navigation';
import LabClient from './LabClient';

export async function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  // params artık Promise olduğu için await etmemiz gerekiyor
  const { slug } = await params;
  
  const lab = labs.find((l) => l.slug === slug);
  if (!lab) return notFound();

  return <LabClient lab={lab} />;
<<<<<<< HEAD
}
=======
}
>>>>>>> 030d0c5477919e628a2ab64937e239c3cb29b63e
