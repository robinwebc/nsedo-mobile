export type Lang = { en: string; bn: string };

export function L(en: string, bn: string): Lang {
  return { en, bn };
}

export function S(text: string): Lang {
  return { en: text, bn: text };
}

export type Tone = 'light' | 'dark';

export type Colorway = {
  id: string;
  name: Lang;
  back: string;
  chassis: string;
  tone: Tone;
};

export type StorageOption = {
  id: string;
  ram: number;
  storage: number;
  price: number;
};

export type SpecGroup = {
  id: string;
  label: Lang;
  rows: { id: string; label: Lang }[];
};

export type Phone = {
  slug: string;
  name: string;
  tier: Lang;
  summary: Lang;
  priceFrom: number;
  cameras: 1 | 2 | 3;
  colors: Colorway[];
  defaultColor: string;
  storage: StorageOption[];
  highlights: { label: Lang; value: Lang }[];
  specs: Record<string, Lang>;
  box: Lang[];
};

export const groups: SpecGroup[] = [
  {
    id: 'display',
    label: L('Display', 'ডিসপ্লে'),
    rows: [
      { id: 'display-size', label: L('Size', 'আকার') },
      { id: 'display-type', label: L('Panel', 'প্যানেল') },
      { id: 'display-resolution', label: L('Resolution', 'রেজোলিউশন') },
      { id: 'display-refresh', label: L('Refresh', 'রিফ্রেশ') },
      { id: 'display-brightness', label: L('Brightness', 'উজ্জ্বলতা') },
      { id: 'display-glass', label: L('Glass', 'কাচ') },
    ],
  },
  {
    id: 'performance',
    label: L('Performance', 'পারফরম্যান্স'),
    rows: [
      { id: 'perf-soc', label: L('Processor', 'প্রসেসর') },
      { id: 'perf-memory', label: L('Memory', 'মেমরি') },
      { id: 'perf-storage', label: L('Storage', 'স্টোরেজ') },
    ],
  },
  {
    id: 'camera',
    label: L('Camera', 'ক্যামেরা'),
    rows: [
      { id: 'cam-rear', label: L('Rear', 'পেছন') },
      { id: 'cam-front', label: L('Front', 'সামনে') },
      { id: 'cam-video', label: L('Video', 'ভিডিও') },
      { id: 'cam-stab', label: L('Stabilisation', 'স্টেবিলাইজেশন') },
    ],
  },
  {
    id: 'battery',
    label: L('Battery', 'ব্যাটারি'),
    rows: [
      { id: 'bat-capacity', label: L('Capacity', 'ধারণক্ষমতা') },
      { id: 'bat-wired', label: L('Wired charging', 'তার দিয়ে চার্জ') },
      { id: 'bat-wireless', label: L('Wireless charging', 'তার ছাড়া চার্জ') },
      { id: 'bat-box', label: L('Charger in the box', 'বক্সের চার্জার') },
    ],
  },
  {
    id: 'network',
    label: L('Connectivity', 'সংযোগ'),
    rows: [
      { id: 'net-sim', label: L('SIM', 'সিম') },
      { id: 'net-mobile', label: L('Mobile network', 'মোবাইল নেটওয়ার্ক') },
      { id: 'net-wifi', label: L('Wi-Fi', 'ওয়াই-ফাই') },
      { id: 'net-bt', label: L('Bluetooth', 'ব্লুটুথ') },
      { id: 'net-nfc', label: L('NFC', 'এনএফসি') },
      { id: 'net-usb', label: L('USB port', 'ইউএসবি পোর্ট') },
      { id: 'net-gnss', label: L('Positioning', 'অবস্থান') },
      { id: 'net-audio', label: L('Speakers', 'স্পিকার') },
    ],
  },
  {
    id: 'body',
    label: L('Body', 'বডি'),
    rows: [
      { id: 'body-size', label: L('Dimensions', 'মাপ') },
      { id: 'body-weight', label: L('Weight', 'ওজন') },
      { id: 'body-build', label: L('Materials', 'উপাদান') },
      { id: 'body-colours', label: L('Colours', 'রং') },
      { id: 'body-resist', label: L('Water and dust', 'পানি ও ধুলো') },
      { id: 'body-fp', label: L('Fingerprint', 'আঙুলের ছাপ') },
    ],
  },
  {
    id: 'software',
    label: L('Software', 'সফটওয়্যার'),
    rows: [
      { id: 'os-name', label: L('System', 'সিস্টেম') },
      { id: 'os-upgrades', label: L('OS upgrades', 'ওএস আপগ্রেড') },
      { id: 'os-security', label: L('Security patches', 'সিকিউরিটি প্যাচ') },
      { id: 'os-lang', label: L('Languages', 'ভাষা') },
    ],
  },
];

const glass = L('Chemically strengthened', 'রাসায়নিকভাবে শক্ত করা');
const notRated = L('Not rated. Not waterproof.', 'রেটিং নেই। পানিরোধী নয়।');
const noJack = L('No 3.5 mm headphone jack.', '৩.৫ মিমি হেডফোন জ্যাক নেই।');
const langs = L('Bangla and English', 'বাংলা ও ইংরেজি');
const os = L('nSedo OS 2, based on Android 15', 'nSedo OS 2, Android 15-এর উপর');
const patch = L(
  'Launch patch: November 2026',
  'লঞ্চ প্যাচ: নভেম্বর ২০২৬',
);

export const phones: Phone[] = [
  {
    slug: 'x1',
    name: 'nSedo X1',
    tier: L('Flagship', 'ফ্ল্যাগশিপ'),
    summary: L(
      'The bright-screen phone. A three-lens column, a 3× telephoto, and the largest battery in the range.',
      'উজ্জ্বল স্ক্রিনের ফোন। তিন লেন্সের কলাম, ৩× টেলিফোটো, আর এই সারির সবচেয়ে বড় ব্যাটারি।',
    ),
    priceFrom: 89990,
    cameras: 3,
    defaultColor: 'ember',
    colors: [
      { id: 'ink', name: L('Ink', 'কালি'), back: '#1A1F26', chassis: '#10141A', tone: 'dark' },
      { id: 'ember', name: L('Ember', 'অঙ্গার'), back: '#C6532C', chassis: '#8A3418', tone: 'dark' },
      { id: 'porcelain', name: L('Porcelain', 'পোর্সেলিন'), back: '#E6E0D4', chassis: '#C9C1B3', tone: 'light' },
      { id: 'sage', name: L('Sage', 'সেজ'), back: '#8B9A84', chassis: '#5C6B58', tone: 'dark' },
    ],
    storage: [
      { id: '12-256', ram: 12, storage: 256, price: 89990 },
      { id: '16-512', ram: 16, storage: 512, price: 99990 },
    ],
    highlights: [
      { label: L('Display', 'ডিসপ্লে'), value: L('6.78″ AMOLED, 120 Hz', '৬.৭৮″ AMOLED, ১২০ Hz') },
      { label: L('Camera', 'ক্যামেরা'), value: L('50 MP, 3× optical', '৫০ MP, ৩× অপটিক্যাল') },
      { label: L('Battery', 'ব্যাটারি'), value: L('5,500 mAh, 80 W', '৫,৫০০ mAh, ৮০ W') },
      { label: L('Software', 'সফটওয়্যার'), value: L('4 OS upgrades', '৪টি ওএস আপগ্রেড') },
    ],
    specs: {
      'display-size': S('6.78 inches'),
      'display-type': S('AMOLED'),
      'display-resolution': S('1260 × 2800, 453 ppi'),
      'display-refresh': S('1–120 Hz'),
      'display-brightness': L('1,600 nits peak, 800 nits typical', '১,৬০০ নিট পিক, ৮০০ নিট সাধারণ'),
      'display-glass': glass,
      'perf-soc': L(
        'nSedo Silicon S9, octa-core, up to 3.2 GHz, 4 nm class',
        'nSedo Silicon S9, অক্টা-কোর, সর্বোচ্চ ৩.২ GHz, ৪ nm শ্রেণি',
      ),
      'perf-memory': S('12 GB or 16 GB LPDDR5X'),
      'perf-storage': S('256 GB or 512 GB UFS 4.0'),
      'cam-rear': L(
        '50 MP main, 1/1.3-inch, f/1.6, OIS. 50 MP ultrawide, f/2.0, 120°. 50 MP telephoto, f/2.6, 3×, OIS.',
        '৫০ MP মেইন, ১/১.৩-ইঞ্চি, f/1.6, OIS। ৫০ MP আল্ট্রাওয়াইড, f/2.0, ১২০°। ৫০ MP টেলিফোটো, f/2.6, ৩×, OIS।',
      ),
      'cam-front': S('32 MP, f/2.2'),
      'cam-video': L('Rear 4K at 60 fps. Front 4K at 30 fps.', 'পেছনে ৪K, ৬০ fps। সামনে ৪K, ৩০ fps।'),
      'cam-stab': L('Optical on the main camera and the telephoto.', 'মেইন ও টেলিফোটোতে অপটিক্যাল।'),
      'bat-capacity': S('5,500 mAh'),
      'bat-wired': L(
        '80 W. Specified full charge about 50 minutes from empty, screen off, included charger.',
        '৮০ W। খালি থেকে পূর্ণ চার্জের স্পেসিফিকেশন প্রায় ৫০ মিনিট, স্ক্রিন বন্ধ, বক্সের চার্জার।',
      ),
      'bat-wireless': S('50 W'),
      'bat-box': S('80 W USB-C'),
      'net-sim': L('Dual nano-SIM', 'ডুয়াল ন্যানো-সিম'),
      'net-mobile': S('5G and 4G LTE'),
      'net-wifi': S('Wi-Fi 6E'),
      'net-bt': S('Bluetooth 5.4'),
      'net-nfc': L('Yes', 'আছে'),
      'net-usb': S('USB-C, USB 3.2'),
      'net-gnss': S('GPS, Galileo, GLONASS, BeiDou'),
      'net-audio': L(`Stereo speakers. ${noJack.en}`, `স্টেরিও স্পিকার। ${noJack.bn}`),
      'body-size': S('162.4 × 75.6 × 8.1 mm'),
      'body-weight': S('196 g'),
      'body-build': L('Aluminium frame, glass front and back', 'অ্যালুমিনিয়াম ফ্রেম, সামনে ও পেছনে কাচ'),
      'body-colours': L('Ink, Ember, Porcelain, Sage', 'কালি, অঙ্গার, পোর্সেলিন, সেজ'),
      'body-resist': notRated,
      'body-fp': L(
        'Under the display. Face recognition is a convenience unlock only, and is weaker than the fingerprint.',
        'ডিসপ্লের নিচে। মুখ চিনে খোলা শুধু সুবিধার জন্য, আঙুলের ছাপের চেয়ে দুর্বল।',
      ),
      'os-name': os,
      'os-upgrades': L('4', '৪'),
      'os-security': L(`5 years. ${patch.en}`, `৫ বছর। ${patch.bn}`),
      'os-lang': langs,
    },
    box: [
      L('nSedo X1 handset', 'nSedo X1 হ্যান্ডসেট'),
      L('USB-C to USB-C cable', 'USB-C থেকে USB-C কেবল'),
      L('80 W USB-C charger', '৮০ W USB-C চার্জার'),
      L('SIM ejector', 'সিম ইজেক্টর'),
      L('Quick start guide', 'সংক্ষিপ্ত নির্দেশিকা'),
      L('Warranty card', 'ওয়ারেন্টি কার্ড'),
    ],
  },
  {
    slug: 'a5',
    name: 'nSedo A5',
    tier: L('Mid-range', 'মধ্যম'),
    summary: L(
      'An AMOLED screen and optical stabilisation, without the flagship memory or the telephoto lens.',
      'ফ্ল্যাগশিপের মেমরি বা টেলিফোটো ছাড়াই AMOLED স্ক্রিন ও অপটিক্যাল স্টেবিলাইজেশন।',
    ),
    priceFrom: 34990,
    cameras: 2,
    defaultColor: 'sand',
    colors: [
      { id: 'graphite', name: L('Graphite', 'গ্রাফাইট'), back: '#3A3F46', chassis: '#23272C', tone: 'dark' },
      { id: 'sand', name: L('Sand', 'বালি'), back: '#D7C4A8', chassis: '#B5A288', tone: 'light' },
      { id: 'mist', name: L('Mist', 'মিস্ট'), back: '#8AA0AE', chassis: '#5E7482', tone: 'dark' },
    ],
    storage: [
      { id: '8-128', ram: 8, storage: 128, price: 34990 },
      { id: '8-256', ram: 8, storage: 256, price: 38990 },
    ],
    highlights: [
      { label: L('Display', 'ডিসপ্লে'), value: L('6.67″ AMOLED, 120 Hz', '৬.৬৭″ AMOLED, ১২০ Hz') },
      { label: L('Camera', 'ক্যামেরা'), value: L('50 MP main, OIS', '৫০ MP মেইন, OIS') },
      { label: L('Battery', 'ব্যাটারি'), value: L('5,200 mAh, 45 W', '৫,২০০ mAh, ৪৫ W') },
      { label: L('Software', 'সফটওয়্যার'), value: L('2 OS upgrades', '২টি ওএস আপগ্রেড') },
    ],
    specs: {
      'display-size': S('6.67 inches'),
      'display-type': S('AMOLED'),
      'display-resolution': S('1080 × 2400, 394 ppi'),
      'display-refresh': S('60–120 Hz'),
      'display-brightness': L('1,200 nits peak, 600 nits typical', '১,২০০ নিট পিক, ৬০০ নিট সাধারণ'),
      'display-glass': glass,
      'perf-soc': L(
        'nSedo Silicon M5, octa-core, up to 2.6 GHz, 6 nm class',
        'nSedo Silicon M5, অক্টা-কোর, সর্বোচ্চ ২.৬ GHz, ৬ nm শ্রেণি',
      ),
      'perf-memory': S('8 GB LPDDR5'),
      'perf-storage': S('128 GB or 256 GB UFS 3.1'),
      'cam-rear': L(
        '50 MP main, 1/1.56-inch, f/1.8, OIS. 8 MP ultrawide, f/2.2, 118°.',
        '৫০ MP মেইন, ১/১.৫৬-ইঞ্চি, f/1.8, OIS। ৮ MP আল্ট্রাওয়াইড, f/2.2, ১১৮°।',
      ),
      'cam-front': S('16 MP, f/2.2'),
      'cam-video': L('Rear 4K at 30 fps. Front 1080p at 30 fps.', 'পেছনে ৪K, ৩০ fps। সামনে ১০৮০p, ৩০ fps।'),
      'cam-stab': L('Optical on the main camera.', 'মেইন ক্যামেরায় অপটিক্যাল।'),
      'bat-capacity': S('5,200 mAh'),
      'bat-wired': L(
        '45 W. Specified full charge about 55 minutes from empty, screen off, included charger.',
        '৪৫ W। খালি থেকে পূর্ণ চার্জের স্পেসিফিকেশন প্রায় ৫৫ মিনিট, স্ক্রিন বন্ধ, বক্সের চার্জার।',
      ),
      'bat-wireless': L('No', 'নেই'),
      'bat-box': S('45 W USB-C'),
      'net-sim': L('Dual nano-SIM', 'ডুয়াল ন্যানো-সিম'),
      'net-mobile': S('5G and 4G LTE'),
      'net-wifi': S('Wi-Fi 6'),
      'net-bt': S('Bluetooth 5.3'),
      'net-nfc': L('Yes', 'আছে'),
      'net-usb': S('USB-C, USB 2.0'),
      'net-gnss': S('GPS, Galileo, GLONASS, BeiDou'),
      'net-audio': L(`Stereo speakers. ${noJack.en}`, `স্টেরিও স্পিকার। ${noJack.bn}`),
      'body-size': S('161.1 × 75.0 × 8.2 mm'),
      'body-weight': S('188 g'),
      'body-build': L('Aluminium frame, glass front, composite back', 'অ্যালুমিনিয়াম ফ্রেম, সামনে কাচ, কম্পোজিট ব্যাক'),
      'body-colours': L('Graphite, Sand, Mist', 'গ্রাফাইট, বালি, মিস্ট'),
      'body-resist': notRated,
      'body-fp': L('Under the display', 'ডিসপ্লের নিচে'),
      'os-name': os,
      'os-upgrades': L('2', '২'),
      'os-security': L(`4 years. ${patch.en}`, `৪ বছর। ${patch.bn}`),
      'os-lang': langs,
    },
    box: [
      L('nSedo A5 handset', 'nSedo A5 হ্যান্ডসেট'),
      L('USB-C to USB-C cable', 'USB-C থেকে USB-C কেবল'),
      L('45 W USB-C charger', '৪৫ W USB-C চার্জার'),
      L('SIM ejector', 'সিম ইজেক্টর'),
      L('Quick start guide', 'সংক্ষিপ্ত নির্দেশিকা'),
      L('Warranty card', 'ওয়ারেন্টি কার্ড'),
    ],
  },
  {
    slug: 'go',
    name: 'nSedo Go',
    tier: L('Entry', 'সাশ্রয়ী'),
    summary: L(
      'A plain 4G phone. Large battery, dual SIM, and a low indicative price. No 5G and no wireless charging.',
      'একটি সাদামাটা 4G ফোন। বড় ব্যাটারি, ডুয়াল সিম, আর কম নির্দেশক দাম। 5G নেই, তার ছাড়া চার্জও নেই।',
    ),
    priceFrom: 16990,
    cameras: 1,
    defaultColor: 'leaf',
    colors: [
      { id: 'black', name: L('Black', 'কালো'), back: '#1A1C1E', chassis: '#0E1012', tone: 'dark' },
      { id: 'leaf', name: L('Leaf', 'পাতা'), back: '#3E6B52', chassis: '#244333', tone: 'dark' },
      { id: 'white', name: L('White', 'সাদা'), back: '#F2F0EC', chassis: '#D4D0C8', tone: 'light' },
    ],
    storage: [
      { id: '6-128', ram: 6, storage: 128, price: 16990 },
      { id: '8-128', ram: 8, storage: 128, price: 18990 },
    ],
    highlights: [
      { label: L('Display', 'ডিসপ্লে'), value: L('6.56″ LCD, 90 Hz', '৬.৫৬″ LCD, ৯০ Hz') },
      { label: L('Camera', 'ক্যামেরা'), value: L('50 MP main', '৫০ MP মেইন') },
      { label: L('Battery', 'ব্যাটারি'), value: L('5,000 mAh, 18 W', '৫,০০০ mAh, ১৮ W') },
      { label: L('Network', 'নেটওয়ার্ক'), value: L('4G LTE, dual SIM', '4G LTE, ডুয়াল সিম') },
    ],
    specs: {
      'display-size': S('6.56 inches'),
      'display-type': S('LCD'),
      'display-resolution': S('720 × 1612, 269 ppi'),
      'display-refresh': S('90 Hz'),
      'display-brightness': L('550 nits peak, 450 nits typical', '৫৫০ নিট পিক, ৪৫০ নিট সাধারণ'),
      'display-glass': glass,
      'perf-soc': L(
        'nSedo Silicon E2, octa-core, up to 2.2 GHz, 6 nm class',
        'nSedo Silicon E2, অক্টা-কোর, সর্বোচ্চ ২.২ GHz, ৬ nm শ্রেণি',
      ),
      'perf-memory': S('6 GB or 8 GB LPDDR4X'),
      'perf-storage': L(
        '128 GB UFS 2.2. microSD up to 1 TB, shared with the second SIM.',
        '১২৮ GB UFS 2.2। microSD সর্বোচ্চ ১ TB, দ্বিতীয় সিমের সঙ্গে ভাগ করা।',
      ),
      'cam-rear': L('50 MP, 1/2.76-inch, f/1.8. No ultrawide lens.', '৫০ MP, ১/২.৭৬-ইঞ্চি, f/1.8। আল্ট্রাওয়াইড লেন্স নেই।'),
      'cam-front': S('8 MP, f/2.0'),
      'cam-video': S('1080p at 30 fps'),
      'cam-stab': L('Electronic only', 'শুধু ইলেকট্রনিক'),
      'bat-capacity': S('5,000 mAh'),
      'bat-wired': L(
        '18 W. Specified full charge about 1 hour 50 minutes from empty, screen off, included charger.',
        '১৮ W। খালি থেকে পূর্ণ চার্জের স্পেসিফিকেশন প্রায় ১ ঘণ্টা ৫০ মিনিট, স্ক্রিন বন্ধ, বক্সের চার্জার।',
      ),
      'bat-wireless': L('No', 'নেই'),
      'bat-box': S('18 W USB-C'),
      'net-sim': L(
        'Dual nano-SIM. The second SIM shares the tray with microSD.',
        'ডুয়াল ন্যানো-সিম। দ্বিতীয় সিম microSD-এর সঙ্গে একই ট্রে ব্যবহার করে।',
      ),
      'net-mobile': S('4G LTE'),
      'net-wifi': S('Wi-Fi 5'),
      'net-bt': S('Bluetooth 5.2'),
      'net-nfc': L('No', 'নেই'),
      'net-usb': S('USB-C, USB 2.0'),
      'net-gnss': S('GPS, GLONASS'),
      'net-audio': L(`Single bottom speaker. ${noJack.en}`, `নিচে একটি স্পিকার। ${noJack.bn}`),
      'body-size': S('164.0 × 76.1 × 8.9 mm'),
      'body-weight': S('193 g'),
      'body-build': L(
        'Polycarbonate frame and back, glass front',
        'পলিকার্বোনেট ফ্রেম ও ব্যাক, সামনে কাচ',
      ),
      'body-colours': L('Black, Leaf, White', 'কালো, পাতা, সাদা'),
      'body-resist': notRated,
      'body-fp': L('Side-mounted', 'পাশে বসানো'),
      'os-name': os,
      'os-upgrades': L('1', '১'),
      'os-security': L(`3 years. ${patch.en}`, `৩ বছর। ${patch.bn}`),
      'os-lang': langs,
    },
    box: [
      L('nSedo Go handset', 'nSedo Go হ্যান্ডসেট'),
      L('USB-C to USB-C cable', 'USB-C থেকে USB-C কেবল'),
      L('18 W USB-C charger', '১৮ W USB-C চার্জার'),
      L('SIM ejector', 'সিম ইজেক্টর'),
      L('Quick start guide', 'সংক্ষিপ্ত নির্দেশিকা'),
      L('Warranty card', 'ওয়ারেন্টি কার্ড'),
    ],
  },
];

export function getPhone(slug: string): Phone | undefined {
  return phones.find((phone) => phone.slug === slug);
}

export function storageLabel(option: StorageOption): string {
  return `${option.ram} GB + ${option.storage} GB`;
}
