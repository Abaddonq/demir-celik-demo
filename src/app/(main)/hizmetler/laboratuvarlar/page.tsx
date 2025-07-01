import { labs } from "@/data/labs";
// import Link from "next/link";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// export default function LaboratuvarList() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Laboratory</h1>
//       <ul className="space-y-2">
//         {labs.map((lab: { slug: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
//           <li key={lab.slug}>
//             <Link href={`/laboratuvarlar/${lab.slug}`} className="text-blue-600 hover:underline">
//               {lab.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function LabsListPage() {
  return (
    <>
    <h1>DİNAMİK TEST LABORATUVARI NEDİR</h1>
    <p className="text-gray-600 ">Dinamik test laboratuvarı, genellikle inşaat ve mühendislik alanlarında 
        kullanılan yapı malzemelerinin ve yapısal sistemlerin performansını değerlendirmek için kullanılan
         bir tür laboratuvar tesisidir. Bu laboratuvarlarda yapılan testler genellikle malzeme ve yapıların 
         dayanıklılığını, dayanımını, elastikiyetini, deformasyon özelliklerini ve benzeri mekanik özelliklerini
          ölçmeye yöneliktir.
            Dinamik testler, yapıların çeşitli koşullar altında nasıl davranacaklarını anlamak için gerçek dünya 
            koşullarını taklit eden dinamik yükler altında yapılan testlerdir. Örneğin, bir deprem sırasında binaların
            davranışını anlamak için deprem etkilerini taklit eden dinamik testler yapılabilir. Bu testler, yapısal 
            sistemlerin güvenilirliğini ve dayanıklılığını artırmak için tasarım ve mühendislik süreçlerinde önemli bir rol oynar.
            </p>
            
            </>

);
}
