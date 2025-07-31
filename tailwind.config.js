/** @type {import('tailwindcss').Config} */
const config = {
  // Tailwind'in tarayacağı dosyaların yollarını belirtir
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Next.js 'app' dizini
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Next.js 'pages' dizini (eğer kullanıyorsanız)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Bileşenlerinizin bulunduğu dizin
    // Projenizdeki diğer dosya türleri veya dizinleri buraya ekleyebilirsiniz (örn: './src/**/*.{js,ts,jsx,tsx,mdx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config; // Change module.exports to export default