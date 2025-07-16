import type { NavItem } from './header.types';

export const navItems: NavItem[] = [
  { title: 'Anasayfa', href: '/' },
  {
    title: 'Kurumsal',
    subItems: [
      { title: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
      { title: 'Yönetim Kadromuz', href: '/kurumsal/yonetim-kadromuz' },
      { title: 'Akademik Personel', href: '/kurumsal/personel/akademik' },
      { title: 'Teknik Personel', href: '/kurumsal/personel/teknik' },
      { title: 'İdari Personel', href: '/kurumsal/personel/idari' },
      { title: 'Enstitü Yönetim Kurulu', href: '/kurumsal/enstitu-yonetim-kurulu' },
      { title: 'Kalite Komisyonu', href: '/kurumsal/kalite-komisyonu' },
    ],
  },
  {
    title: 'Hizmetler',
    subItems: [
      { title: 'Laboratuvarlar', href: '/hizmetler/laboratuvarlar' },
      { title: 'Raporlamalar', href: '/hizmetler/raporlamalar' },
    ],
  },
  { title: 'Duyurular&Haberler', href: '/duyurular-ve-haberler' },
  {
    title: 'Akademik',
    subItems: [
      { title: 'Dergi-NSJ ISI', href: '/akademik/nsji' },
      { title: 'Sempozyum-UDCS', href: '/akademik/udcs' },
    ],
  },
  {
    title: 'Hızlı Erişim',
    subItems: [
      { title: 'Fiyat Listesi', href: '/hizli-erisim/fiyat-listesi' },
      { title: 'Hizmet İşleyiş Süreci', href: '/hizli-erisim/hizmet-isleyis-sureci' },
      { title: 'İç Kontrol', href: '/hizli-erisim/ic-kontrol' },
      { title: 'Kalite Belgeleri', href: '/hizli-erisim/kalite-belgeleri' },
      { title: 'Numune Kabul Kriterleri', href: '/hizli-erisim/numune-kabul-kriterleri' },
      { title: 'Sem-Randevu', href: '/hizli-erisim/sem-randevu' },
    ],
  },
  {
    title: 'Araştırma Merkezleri',
    subItems: [
      { title: 'YEMMER', href: 'https://yemmer.karabuk.edu.tr/index.aspx' },
      { title: 'MARGEM', href: 'https://margem.karabuk.edu.tr/index.aspx' },
    ],
  },
  { title: 'İletişim', href: '/iletisim' },
];