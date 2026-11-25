import { L, type Lang } from './phones';

export type Centre = {
  city: Lang;
  area: Lang;
};

export const centres: Centre[] = [
  { city: L('Dhaka', 'ঢাকা'), area: L('Gulshan', 'গুলশান') },
  { city: L('Dhaka', 'ঢাকা'), area: L('Dhanmondi', 'ধানমন্ডি') },
  { city: L('Chattogram', 'চট্টগ্রাম'), area: L('Agrabad', 'আগ্রাবাদ') },
  { city: L('Sylhet', 'সিলেট'), area: L('Zindabazar', 'জিন্দাবাজার') },
  { city: L('Rajshahi', 'রাজশাহী'), area: L('Shaheb Bazar', 'সাহেব বাজার') },
  { city: L('Khulna', 'খুলনা'), area: L('Sonadanga', 'সোনাডাঙ্গা') },
  { city: L('Barishal', 'বরিশাল'), area: L('Sadar', 'সদর') },
  { city: L('Rangpur', 'রংপুর'), area: L('Modern Mor', 'মডার্ন মোড়') },
];

export const centreStatus = L('Placeholder. To be updated.', 'প্লেসহোল্ডার। হালনাগাদ হবে।');

export type Faq = { q: Lang; a: Lang };

export const faqs: Faq[] = [
  {
    q: L('Can I buy a phone on this website?', 'এই ওয়েবসাইটে কি ফোন কেনা যায়?'),
    a: L(
      'No. There is no basket and no card payment. The price on each model is indicative, in BDT. Notify me opens an email to robinwebc@gmail.com. It does not reserve a unit.',
      'না। কোনো ঝুড়ি নেই, কার্ড পেমেন্টও নেই। প্রতিটি মডেলের দাম নির্দেশক, টাকায়। জানান robinwebc@gmail.com-এ একটি ইমেইল খোলে। এতে কোনো ফোন আটকে রাখা হয় না।',
    ),
  },
  {
    q: L('Is the price final?', 'দাম কি চূড়ান্ত?'),
    a: L(
      'No. A shop, when one is listed, may charge a different amount. The figure on the model page is the indicative price for that memory option on the day we published the page.',
      'না। দোকান তালিকাভুক্ত হলে সেখানে অন্য দাম হতে পারে। মডেল পাতার অঙ্কটি সেই মেমরি বিকল্পের নির্দেশক দাম, যেদিন আমরা পাতাটি প্রকাশ করেছি।',
    ),
  },
  {
    q: L('Which phones have 5G?', 'কোন ফোনে 5G আছে?'),
    a: L(
      'The X1 and the A5 are 5G. The Go is 4G LTE. All three are dual nano-SIM. On the Go, the second SIM shares the tray with microSD.',
      'X1 ও A5-এ 5G আছে। Go 4G LTE। তিনটিতেই ডুয়াল ন্যানো-সিম। Go-তে দ্বিতীয় সিম microSD-এর সঙ্গে একই ট্রে ভাগ করে।',
    ),
  },
  {
    q: L('Are the phones water resistant?', 'ফোনগুলো কি পানিরোধী?'),
    a: L(
      'We do not publish an ingress-protection rating. Do not treat the phones as waterproof. Liquid damage is outside the warranty.',
      'আমরা ইনগ্রেস-প্রোটেকশন রেটিং প্রকাশ করি না। ফোনগুলোকে পানিরোধী ধরবেন না। পানির ক্ষতি ওয়ারেন্টির বাইরে।',
    ),
  },
  {
    q: L('What does the warranty cover?', 'ওয়ারেন্টি কী কভার করে?'),
    a: L(
      'Twelve months for a manufacturing defect, with a proof of purchase, for customers in Bangladesh. Cracked glass, liquid damage, and a repair we did not authorise are outside it. The warranty policy page is the full wording. To start a claim, email the model, the IMEI, and a photo of the proof of purchase.',
      'বারো মাস, উৎপাদনের ত্রুটির জন্য, ক্রয়ের প্রমাণসহ, বাংলাদেশের ক্রেতাদের জন্য। ফাটা কাচ, পানির ক্ষতি, এবং আমাদের অনুমতি ছাড়া মেরামত এর বাইরে। ওয়ারেন্টি নীতির পাতায় পুরো বয়ান। দাবি শুরু করতে মডেল, IMEI, এবং ক্রয়ের প্রমাণের ছবি ইমেইল করুন।',
    ),
  },
  {
    q: L('How do software updates arrive?', 'সফটওয়্যার আপডেট কীভাবে আসে?'),
    a: L(
      'On the phone: Settings, System, Software update. The X1 is scheduled for four OS upgrades and five years of security patches, the A5 for two upgrades and four years, and the Go for one upgrade and three years. All three ship on nSedo OS 2, based on Android 15, with the November 2026 security patch. The nSedo social app updates from its own GitHub releases, not from this updater.',
      'ফোনে: Settings, System, Software update। X1-এ চারটি ওএস আপগ্রেড ও পাঁচ বছর সিকিউরিটি প্যাচ নির্ধারিত, A5-এ দুটি আপগ্রেড ও চার বছর, Go-তে একটি আপগ্রেড ও তিন বছর। তিনটিই আসে nSedo OS 2-তে, Android 15-এর উপর, নভেম্বর ২০২৬ সিকিউরিটি প্যাচসহ। nSedo সামাজিক অ্যাপ তার নিজের GitHub রিলিজ থেকে আপডেট হয়, এই আপডেটার থেকে নয়।',
    ),
  },
  {
    q: L('Is the nSedo social app preinstalled?', 'nSedo সামাজিক অ্যাপ কি আগে থেকে বসানো?'),
    a: L(
      'No. You can download the Android app from the GitHub releases linked on this site. Read the release notes first. The app is not billed here. If a page asks you to pay for that download, it is not ours.',
      'না। এই সাইটে দেওয়া GitHub রিলিজ থেকে Android অ্যাপ ডাউনলোড করতে পারেন। আগে রিলিজ নোট পড়ুন। অ্যাপের জন্য এখানে বিল হয় না। সেই ডাউনলোডের জন্য কোনো পাতা টাকা চাইলে সেটি আমাদের নয়।',
    ),
  },
  {
    q: L('Do the phones include Bangla?', 'ফোনে কি বাংলা আছে?'),
    a: L(
      'Yes. nSedo OS includes Bangla and English. This website uses the same two languages. EN and বাংলা at the top of the page switch the site. The choice is stored in this browser only, under the key nsedo-lang.',
      'হ্যাঁ। nSedo OS-এ বাংলা ও ইংরেজি আছে। এই ওয়েবসাইটেও এই দুই ভাষা। পাতার উপরে EN ও বাংলা সাইট বদলায়। পছন্দটি শুধু এই ব্রাউজারে জমা থাকে, nsedo-lang নামে।',
    ),
  },
  {
    q: L('What is in the box?', 'বক্সে কী থাকে?'),
    a: L(
      'The handset, a USB-C cable, a USB-C charger matched to that model’s wired rate, a SIM ejector, a short guide, and a warranty card. Earphones are not included.',
      'হ্যান্ডসেট, একটি USB-C কেবল, সেই মডেলের তার-চার্জের হারের USB-C চার্জার, একটি সিম ইজেক্টর, একটি সংক্ষিপ্ত নির্দেশিকা, এবং একটি ওয়ারেন্টি কার্ড। ইয়ারফোন থাকে না।',
    ),
  },
  {
    q: L('Where are the service centres?', 'সার্ভিস সেন্টার কোথায়?'),
    a: L(
      'The table on this page is a placeholder. It names cities and areas we expect to confirm. It is not a list of open counters, and it has no street address. Do not travel on the basis of it. Write to us until a row is updated and the placeholder mark is gone.',
      'এই পাতার ছকটি প্লেসহোল্ডার। এতে শহর ও এলাকার নাম আছে, যেগুলো আমরা নিশ্চিত করার কথা ভাবছি। এটি খোলা কাউন্টারের তালিকা নয়, এবং রাস্তার ঠিকানা নেই। এর ভিত্তিতে কোথাও যাবেন না। কোনো সারি হালনাগাদ হয়ে প্লেসহোল্ডার চিহ্ন ওঠার আগে আমাদের লিখুন।',
    ),
  },
];
