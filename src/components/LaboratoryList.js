
  // 'use client';

  // import Link from 'next/link';
  // import { usePathname } from 'next/navigation';
  // import { useState } from 'react';
  // import { useTheme } from '@/app/context/themeContext'; // تأكد من المسار الصحيح

  // export default function LaboratoryList({ items, basePath }) {
  //   const { theme } = useTheme();
  //   const pathname = usePathname();
  //   const {
  //     fontFamily = 'sans-serif',
  //     fontSizeBase = '16px',
  //     primaryColor = '#1e3a8a',
  //     secondaryColor = '#f97316',
  //     textColor = '#ffffff',
  //     underlineColor = '#eee'
  //   } = theme || {};

  //   return (
  //     <div
  //       className="w-full max-w-[280px] bg-white shadow-lg rounded-xl p-4 sticky top-20 max-h-[80vh] overflow-y-auto"
  //       style={{
  //         fontFamily,
  //         fontSize: fontSizeBase
  //       }}
  //     >
  //       <h2
  //         className="text-xl font-bold text-right mb-4"
  //         style={{ color: primaryColor }}
  //       >
  //         Laboratuvarlar
  //       </h2>

  //       <div className="divide-y" style={{ borderColor: underlineColor }}>
  //         {items.map((item) => (
  //           <MenuItem
  //             key={item.slug}
  //             title={item.title}
  //             href={`/${basePath}/${item.slug}`}
  //             primaryColor={primaryColor}
  //             secondaryColor={secondaryColor}
  //             textColor={textColor}
  //             underlineColor={underlineColor}
  //             active={pathname === `/${basePath}/${item.slug}`}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // function MenuItem({
  //   title,
  //   href,
  //   primaryColor,
  //   secondaryColor,
  //   textColor,
  //   underlineColor,
  //   active
  // }) {
  //   const [hovered, setHovered] = useState(false);

  //   // إذا العنصر نشط أو hover، استعمل secondaryColor وإلا primaryColor
  //   const bgColor = active || hovered ? secondaryColor : primaryColor;

  //   return (
  //     <Link
  //       href={href}
  //       onMouseEnter={() => setHovered(true)}
  //       onMouseLeave={() => setHovered(false)}
  //       className="block transition-all duration-300"
  //     >
  //       <div
  //         className="flex justify-between items-center px-4 py-3 text-right"
  //         style={{
  //           backgroundColor: bgColor,
  //           borderBottom: `1px solid ${underlineColor}`,
  //           borderRadius: active ? '0 10px 0 0' : undefined
  //         }}
  //       >
  //         <span
  //           className="truncate font-medium"
  //           style={{ color: textColor }}
  //         >
  //           {title}
  //         </span>
  //         <span
  //           className="text-xl ml-2 transition-colors duration-300"
  //           style={{ color: textColor }}
  //         >
  //           ➜
  //         </span>
  //       </div>
  //     </Link>
  //   );
  // }


//   // src/components/LaboratoryList.js

// ____________________________________________________________
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { useTheme } from '@/app/context/themeContext'; // تأكد من المسار الصحيح

// export default function LaboratoryList({ items, basePath = {} }) {
//   const { theme } = useTheme();
//   const pathname = usePathname();
//   const {
//     fontFamily = 'sans-serif',
//     fontSizeBase = '16px',
//     primaryColor = '#1e3a8a',
//     secondaryColor = '#f97316',
//     textColor = '#ffffff',
//     underlineColor = '#eee'
//   } = theme || {};

//   return (
//     <div
//       className="w-full max-w-[280px] bg-white shadow-lg rounded-xl p-4 sticky top-20 max-h-[80vh] overflow-y-auto"
//       style={{
//         fontFamily,
//         fontSize: fontSizeBase
//       }}
//     >
//       {/* عنوان القائمة قابل للنقر للانتقال لأول عنصر */}
//       <Link
//         href={`/${basePath}/${items[0]?.slug}`}
//         className="block mb-4 cursor-pointer"
//       >
//         <h2
//           className="text-xl font-bold text-right transition-colors duration-300"
//           style={{ color: primaryColor }}
//         >
//           Laboratuvarlar
//         </h2>
//       </Link>

//       {/* القائمة */}
//       <div className="divide-y" style={{ borderColor: underlineColor }}>
//         {items.map((item) => (
//           <MenuItem
//             key={item.slug}
//             title={item.title}
//             href={`/${basePath}/${item.slug}`}
//             primaryColor={primaryColor}
//             secondaryColor={secondaryColor}
//             textColor={textColor}
//             underlineColor={underlineColor}
//             active={pathname === `/${basePath}/${item.slug}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function MenuItem({
//   title,
//   href,
//   primaryColor,
//   secondaryColor,
//   textColor,
//   underlineColor,
//   active
// }) {
//   const [hovered, setHovered] = useState(false);

//   // إذا العنصر نشط أو hover، استعمل secondaryColor وإلا primaryColor
//   const bgColor = active || hovered ? secondaryColor : primaryColor;

//   return (
//     <Link
//       href={href}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="block transition-all duration-300"
//     >
//       <div
//         className="flex justify-between items-center px-4 py-3 text-right"
//         style={{
//           backgroundColor: bgColor,
//           borderBottom: `1px solid ${underlineColor}`,
//           borderRadius: active ? '0 10px 0 0' : undefined
//         }}
//       >
//         <span
//           className="truncate font-medium"
//           style={{ color: textColor }}
//         >
//           {title}
//         </span>
//         <span
//           className="text-xl ml-2 transition-colors duration-300"
//           style={{ color: textColor }}
//         >
//           ➜
//         </span>
//       </div>
//     </Link>
//   );
// }

// _______________________________________________
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/app/context/themeContext';

export default function LaboratoryList({ items, basePath = '' }) {
  const { theme } = useTheme();
  const pathname = usePathname();

  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#ffffff',
    underlineColor = '#eee'
  } = theme || {};

  return (
    <div
      className="w-full max-w-[280px] bg-white shadow-lg rounded-xl p-4 sticky top-20 max-h-[80vh] overflow-y-auto"
      style={{ fontFamily, fontSize: fontSizeBase }}
    >
      {/* عنوان القائمة ينقلك لأول عنصر عند الضغط */}
      <Link href={`/${basePath}/${items[0]?.slug}`} className="block mb-4 cursor-pointer">
        <h2 className="text-xl font-bold text-right transition-colors duration-300" style={{ color: primaryColor }}>
          Laboratuvarlar
        </h2>
      </Link>

      <div className="divide-y" style={{ borderColor: underlineColor }}>
        {items.map((item) => (
          <MenuItem
            key={item.slug}
            title={item.title}
            href={`/${basePath}/${item.slug}`}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
            underlineColor={underlineColor}
            active={pathname === `/${basePath}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}

function MenuItem({
  title,
  href,
  primaryColor,
  secondaryColor,
  textColor,
  underlineColor,
  active
}) {
  const [hovered, setHovered] = useState(false);
  const bgColor = active || hovered ? secondaryColor : primaryColor;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block transition-all duration-300"
    >
      <div
        className="flex justify-between items-center px-4 py-3 text-right"
        style={{
          backgroundColor: bgColor,
          borderBottom: `1px solid ${underlineColor}`,
          borderRadius: active ? '0 10px 0 0' : undefined
        }}
      >
        <span className="truncate font-medium" style={{ color: textColor }}>
          {title}
        </span>
        <span className="text-xl ml-2 transition-colors duration-300" style={{ color: textColor }}>
          ➜
        </span>
      </div>
    </Link>
  );
}

