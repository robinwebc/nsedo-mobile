import { L, type Lang } from './phones';

export type Article = {
  slug: string;
  date: string;
  dateLabel: Lang;
  title: Lang;
  standfirst: Lang;
  paragraphs: Lang[];
};

export const articles: Article[] = [
  {
    slug: 'three-phones',
    date: '2026-11-18',
    dateLabel: L('18 November 2026', '১৮ নভেম্বর ২০২৬'),
    title: L('Three phones, one brief', 'তিনটি ফোন, একটাই সংক্ষিপ্ত বর্ণনা'),
    standfirst: L(
      'The X1, the A5, and the Go are the first nSedo Mobile phones. Prices on this site are indicative, in taka, and nothing here takes payment.',
      'X1, A5, ও Go হলো nSedo Mobile-এর প্রথম ফোন। এই সাইটের দাম নির্দেশক, টাকায়, আর এখানে কোনো পেমেন্ট নেওয়া হয় না।',
    ),
    paragraphs: [
      L(
        'nSedo Mobile is Robin’s phone brand, based in Bangladesh. The brief for the first range was ordinary and strict: a screen you can read outdoors, a battery that covers a long day, and software that does not bury the person who bought the phone.',
        'nSedo Mobile রবিনের ফোন ব্র্যান্ড, বাংলাদেশ থেকে। প্রথম সারির বর্ণনা সহজ ও কড়া ছিল: বাইরে পড়া যায় এমন স্ক্রিন, দীর্ঘ দিন ধরে চলে এমন ব্যাটারি, আর এমন সফটওয়্যার যা ক্রেতাকে চাপা দিয়ে ফেলে না।',
      ),
      L(
        'The X1 is the flagship. It has a 6.78-inch 120 Hz AMOLED, a vertical camera column with a 3× telephoto, and a 5,500 mAh battery with 80 W wired charging. The indicative price starts at ৳89,990 for 12 GB of memory and 256 GB of storage.',
        'X1 ফ্ল্যাগশিপ। এতে ৬.৭৮ ইঞ্চি ১২০ Hz AMOLED, ৩× টেলিফোটোসহ খাড়া ক্যামেরা কলাম, আর ৮০ W তার-চার্জের ৫,৫০০ mAh ব্যাটারি। ১২ GB মেমরি ও ২৫৬ GB স্টোরেজের নির্দেশক দাম শুরু ৳৮৯,৯৯০।',
      ),
      L(
        'The A5 sits in the middle: 6.67-inch AMOLED, optical stabilisation on the main camera, 5,200 mAh, from ৳34,990. The Go is the entry phone: 6.56-inch LCD, 5,000 mAh, 4G rather than 5G, from ৳16,990. The Go’s second SIM shares its tray with a microSD card. That is stated on the spec table so it is not a surprise at the counter.',
        'A5 মাঝখানে: ৬.৬৭ ইঞ্চি AMOLED, মেইন ক্যামেরায় অপটিক্যাল স্টেবিলাইজেশন, ৫,২০০ mAh, শুরু ৳৩৪,৯৯০। Go সাশ্রয়ী ফোন: ৬.৫৬ ইঞ্চি LCD, ৫,০০০ mAh, 5G নয় 4G, শুরু ৳১৬,৯৯০। Go-এর দ্বিতীয় সিম microSD-এর সঙ্গে একই ট্রে ভাগ করে। স্পেক টেবিলে সেটা লেখা আছে, যাতে কাউন্টারে গিয়ে অবাক হতে না হয়।',
      ),
      L(
        'We are not listing a shop network yet. Notify me sends an email. Find a store opens the service-centre section, which is still a placeholder. Read the model page before you rely on a single line from this note.',
        'এখনো দোকানের নেটওয়ার্ক সাজানো হয়নি। জানান বোতাম একটি ইমেইল পাঠায়। দোকান খুঁজুন সার্ভিস সেন্টার অংশে নিয়ে যায়, যা এখনো প্লেসহোল্ডার। এই নোটের একটা লাইনের উপর নির্ভর করার আগে মডেলের পাতা পড়ুন।',
      ),
    ],
  },
  {
    slug: 'nsedo-os-2',
    date: '2026-11-04',
    dateLabel: L('4 November 2026', '৪ নভেম্বর ২০২৬'),
    title: L('nSedo OS 2, on Android 15', 'nSedo OS 2, Android 15-এর উপর'),
    standfirst: L(
      'The phone software keeps the Android app library and states, per model, how many OS upgrades and security patches are scheduled.',
      'ফোনের সফটওয়্যার Android-এর অ্যাপ লাইব্রেরি রাখে, আর মডেল অনুযায়ী কতগুলো ওএস আপগ্রেড ও সিকিউরিটি প্যাচ নির্ধারিত তা বলে।',
    ),
    paragraphs: [
      L(
        'nSedo OS 2 is the interface on these phones. Under it is Android 15. The launch security patch is November 2026. Bangla and English are both on the device. We are not claiming a private operating system, and we are not claiming a partnership with any other company for the software.',
        'nSedo OS 2 এই ফোনগুলোর ইন্টারফেস। এর নিচে Android 15। লঞ্চ সিকিউরিটি প্যাচ নভেম্বর ২০২৬। ডিভাইসে বাংলা ও ইংরেজি দুটোই আছে। আমরা আলাদা কোনো অপারেটিং সিস্টেমের দাবি করছি না, এবং সফটওয়্যারের জন্য অন্য কোনো কোম্পানির সঙ্গে অংশীদারিত্বের দাবিও করছি না।',
      ),
      L(
        'The update promise is different on each phone, and it is printed on the spec table. The X1 is scheduled for four OS upgrades and five years of security patches. The A5 is scheduled for two OS upgrades and four years. The Go is scheduled for one OS upgrade and three years. “Scheduled” means that is the commitment. It is not a certificate from a third party.',
        'আপডেটের প্রতিশ্রুতি প্রতিটি ফোনে আলাদা, এবং সেটা স্পেক টেবিলে লেখা। X1-এ চারটি ওএস আপগ্রেড ও পাঁচ বছর সিকিউরিটি প্যাচ নির্ধারিত। A5-এ দুটি ওএস আপগ্রেড ও চার বছর। Go-তে একটি ওএস আপগ্রেড ও তিন বছর। “নির্ধারিত” মানে এটাই প্রতিশ্রুতি। এটা কোনো তৃতীয় পক্ষের সনদ নয়।',
      ),
      L(
        'Updates are delivered on the phone from Settings, System, Software update, over Wi-Fi or mobile data. The nSedo social app is not part of that updater. It is a separate Android app, it is not preinstalled, and its releases live on GitHub.',
        'আপডেট ফোনে পৌঁছায় Settings, System, Software update থেকে, ওয়াই-ফাই বা মোবাইল ডেটায়। nSedo সামাজিক অ্যাপ সেই আপডেটারের অংশ নয়। সেটি আলাদা Android অ্যাপ, আগে থেকে বসানো থাকে না, আর এর রিলিজ GitHub-এ।',
      ),
      L(
        'Face recognition on the X1 is a convenience unlock. The fingerprint reader is the stronger method. We would rather say that plainly than imply the two are equal.',
        'X1-এ মুখ চেনা শুধু সুবিধার জন্য খোলার উপায়। আঙুলের ছাপই শক্তিশালী পদ্ধতি। দুটোকে সমান বলে ইঙ্গিত দেওয়ার চেয়ে এটা সরাসরি বলা ভালো।',
      ),
    ],
  },
  {
    slug: 'service-list',
    date: '2026-10-16',
    dateLabel: L('16 October 2026', '১৬ অক্টোবর ২০২৬'),
    title: L('The service list is a placeholder', 'সার্ভিসের তালিকাটি প্লেসহোল্ডার'),
    standfirst: L(
      'The cities on the support page are where we expect to confirm a counter. They are not open service centres, and they have no street address.',
      'সহায়তা পাতার শহরগুলো সেখানে, যেখানে আমরা একটি কাউন্টার নিশ্চিত করার কথা ভাবছি। সেগুলো খোলা সার্ভিস সেন্টার নয়, এবং কোনো রাস্তার ঠিকানা নেই।',
    ),
    paragraphs: [
      L(
        'A phone brand needs a place to take a repair. We do not have a confirmed counter list yet, and we are not going to invent street numbers to make the page look finished. The support page names Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Barishal, and Rangpur, with an area beside each city. Every row is marked placeholder.',
        'একটা ফোন ব্র্যান্ডের মেরামত নেওয়ার জায়গা লাগে। এখনো নিশ্চিত কাউন্টারের তালিকা নেই, আর পাতাটাকে সম্পূর্ণ দেখাতে আমরা রাস্তার নম্বর বানিয়ে দেব না। সহায়তা পাতায় ঢাকা, চট্টগ্রাম, সিলেট, রাজশাহী, খুলনা, বরিশাল ও রংপুরের নাম আছে, প্রতিটি শহরের পাশে একটি এলাকা। প্রতিটি সারি প্লেসহোল্ডার হিসেবে চিহ্নিত।',
      ),
      L(
        'Do not travel to those areas expecting an nSedo counter. When a centre is real, the row will lose the placeholder mark and gain an address, a phone number, and opening days. Until then, warranty questions go to robinwebc@gmail.com with the model, the IMEI, and a photo of the proof of purchase.',
        'nSedo-র কাউন্টার আছে ভেবে সেই এলাকায় যাবেন না। কোনো সেন্টার সত্যি হলে সেই সারি থেকে প্লেসহোল্ডার চিহ্ন উঠে যাবে, এবং ঠিকানা, ফোন নম্বর ও খোলার দিন যোগ হবে। ততক্ষণ ওয়ারেন্টির কথা robinwebc@gmail.com-এ লিখুন, সঙ্গে মডেল, IMEI, এবং ক্রয়ের প্রমাণের ছবি।',
      ),
      L(
        'The limited warranty itself is twelve months for a manufacturing defect, for customers in Bangladesh, with a proof of purchase. It does not cover cracked glass, liquid damage, or a repair done by someone we did not authorise. The phones are not given an ingress-protection rating. The warranty policy page has the longer wording.',
        'সীমিত ওয়ারেন্টি বারো মাস, উৎপাদনের ত্রুটির জন্য, বাংলাদেশের ক্রেতাদের জন্য, ক্রয়ের প্রমাণসহ। ফাটা কাচ, পানির ক্ষতি, বা আমাদের অনুমতি ছাড়া করা মেরামত এর মধ্যে পড়ে না। ফোনগুলোর ইনগ্রেস-প্রোটেকশন রেটিং দেওয়া হয়নি। ওয়ারেন্টি নীতির পাতায় দীর্ঘ বয়ান আছে।',
      ),
    ],
  },
  {
    slug: 'nsedo-app',
    date: '2026-09-28',
    dateLabel: L('28 September 2026', '২৮ সেপ্টেম্বর ২০২৬'),
    title: L('The nSedo app, beside the phone', 'nSedo অ্যাপ, ফোনের পাশে'),
    standfirst: L(
      'nSedo, the social app, is a separate product from the same house. It is not preinstalled on nSedo Mobile phones and it is not sold on this website.',
      'nSedo, সামাজিক অ্যাপটি, একই ঘরের আলাদা পণ্য। nSedo Mobile ফোনে আগে থেকে বসানো থাকে না, এবং এই ওয়েবসাইটে বিক্রি হয় না।',
    ),
    paragraphs: [
      L(
        'The app is for short posts, follows, friends, messages, audio and video calls, and small live rooms. The Android app is the main client. Releases are published on GitHub, as APK files. Read the notes on a release before you install it. The current packages are built for testing and are signed accordingly. The release page says so.',
        'অ্যাপটি ছোট পোস্ট, ফলো, বন্ধু, বার্তা, অডিও ও ভিডিও কল, এবং ছোট লাইভ রুমের জন্য। Android অ্যাপই মূল ক্লায়েন্ট। রিলিজ GitHub-এ APK ফাইল হিসেবে প্রকাশিত হয়। ইনস্টলের আগে রিলিজের নোট পড়ুন। বর্তমান প্যাকেজগুলো পরীক্ষার জন্য তৈরি এবং সেভাবেই সই করা। রিলিজ পাতায় সেটা বলা আছে।',
      ),
      L(
        'Because the phones run Android, the app can be installed on an X1, an A5, a Go, or another Android phone. nSedo OS does not preload it, and system software updates do not update it. The app has its own releases.',
        'ফোনগুলো Android-এ চলে বলে অ্যাপটি X1, A5, Go, বা অন্য Android ফোনে বসানো যায়। nSedo OS সেটি আগে থেকে রাখে না, এবং সিস্টেম সফটওয়্যার আপডেট সেটিকে আপডেট করে না। অ্যাপের নিজস্ব রিলিজ আছে।',
      ),
      L(
        'This website does not take a subscription, a deposit, or any other payment for the app or the phones. If a download page asks you for money, it is not ours. Use the GitHub releases link from the footer or from the home page.',
        'এই ওয়েবসাইট অ্যাপ বা ফোনের জন্য সাবস্ক্রিপশন, অগ্রিম, বা অন্য কোনো টাকা নেয় না। কোনো ডাউনলোড পাতা টাকা চাইলে সেটি আমাদের নয়। ফুটার বা নীড় পাতার GitHub রিলিজ লিঙ্ক ব্যবহার করুন।',
      ),
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
