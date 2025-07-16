"use client";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useTheme } from "@/app/context/themeContext";
import Link from "next/link";

export default function Header() {
  const { theme } = useTheme();

  const primary = theme?.primaryColor ?? "#1e3a8a";
  const secondary = theme?.secondaryColor ?? "#f97316";
  const bg = theme?.mode ? "#000000" : "#ffffff";
  const font = theme?.fontFamily ?? "sans-serif";
  const fontSize = theme?.fontSizeBase ?? "16px";

  return (
    <header
      style={{
        fontFamily: font,
        fontSize,
        backgroundColor: bg,
      }}
      className="sticky top-0 z-50"
    >
      <TopBar primary={primary} secondary={secondary} bg={bg} />

      <div className="flex items-center justify-between lg:justify-center lg:gap-8 px-4 py-3">
        <Link href="/" aria-label="Anasayfa">
          <img
            src="/images/enstitulogo.png"
            alt="Demir Çelik Enstitüsü"
            className="object-contain"
            style={{ height: "2.5em" }}
          />
        </Link>

        <DesktopNav primary={primary} secondary={secondary} />
        <MobileNav primary={primary} secondary={secondary} bg={bg} />
      </div>
    </header>
  );
}
