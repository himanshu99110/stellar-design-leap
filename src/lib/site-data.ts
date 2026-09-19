export const SITE = {
  name: "Silverline Prestige School",
  short: "SLPS",
  motto: "Try To Attain Thy Heights",
  tagline: "Creating Global Citizens since 1987",
  heroVideoId: "UpZ0XVvsx9w",
  admissionLabel: "Admission 2027-28",
  admissionHref: "https://thesilverlineschool.com/admission-process/",
  helpline: [
    { label: "9999774433", tel: "tel:9999774433", pretty: "+91 99997 74433" },
    { label: "9810499951", tel: "tel:9810499951", pretty: "+91 98104 99951" },
  ],
  youtube: "https://www.youtube.com/@silverlineschoolgzb/featured",
  social: {
    instagram: "http://www.instagram.com/slpsnnb",
    facebook: "https://www.facebook.com/slpsnnb",
    youtube: "https://www.youtube.com/c/SilverlinePrestigeSchoolGhaziabad",
  },
  ticker: [
    "Age Criteria for Class 1: 6 years of age by the 31st of March of the academic year",
    "100% Google Certified Teachers",
    "ADMISSION OPEN for 2027-28",
    "ADMISSIONS OPEN FOR SILVER STARS PLAYWAY 2 years+",
    "Introducing 8th Grade in Nehru Nagar Branch",
  ],
};

export type NavLink = { label: string; href: string; note?: string };
export type NavGroup = { title?: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href?: string;
  groups?: NavGroup[];
  featured?: { eyebrow: string; title: string; body: string; cta: string; href: string };
};

const B = "https://thesilverlineschool.com";

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About SLPS",
    groups: [
      {
        title: "The School",
        links: [
          { label: "History", href: `${B}/history/`, note: "Since 4 February 1987" },
          { label: "Motto, Vision & Mission", href: `${B}/vision-mission/` },
          { label: "Media & Awards", href: `${B}/awards/` },
          { label: "SLPS Gallery", href: `${B}/slps-gallery/` },
        ],
      },
      {
        title: "Branches",
        links: [
          { label: "Nehru Nagar", href: `${B}/slps-nehru-nagar/` },
          { label: "Bulandshahr Road", href: `${B}/slps-bulandshahr-road/` },
        ],
      },
      {
        title: "More",
        links: [
          { label: "Silver Times Blog", href: `${B}/blogs/` },
          { label: "FAQ", href: `${B}/faqs/` },
          { label: "Careers", href: `${B}/careers/` },
        ],
      },
    ],
  },
  {
    label: "Student Life",
    groups: [
      {
        title: "Learning",
        links: [
          { label: "Academia", href: `${B}/academia/` },
          { label: "Co-Scholastics", href: `${B}/co-scholastics/` },
          { label: "The SLPS Way", href: `${B}/the-slps-way/` },
        ],
      },
      {
        title: "SLPS Alumni",
        links: [
          { label: "Alumni Overview", href: `${B}/slps-alumni/` },
          { label: "Alumni Registration", href: `${B}/alumni-registration/` },
          { label: "Students Acknowledgement", href: `${B}/students-acknowledgement/` },
        ],
      },
    ],
  },
  {
    label: "Our Leaders",
    groups: [
      {
        links: [
          { label: "Founder’s Message", href: `${B}/founder-and-director-message/` },
          { label: "Director’s Message", href: `${B}/directors-message/` },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    groups: [
      {
        title: "Apply by Stage",
        links: [
          { label: "Admission For Playgroup", href: `${B}/playgroup-school-in-ghaziabad/`, note: "Silver Stars · 2 years+" },
          { label: "Pre Primary Admissions", href: `${B}/admission-for-pre-primary/` },
          { label: "Class 1 Admissions", href: `${B}/admission-for-class-1/`, note: "6 years by 31 March" },
          { label: "Primary Admissions (I-V)", href: `${B}/admission-for-primary/` },
          { label: "Admissions for Class VI-VIII", href: `${B}/admission-for-class-6th-8th/` },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Admission Process", href: `${B}/admission-process/` },
          { label: "Download Registration Form", href: `${B}/wp-content/uploads/2023/08/Admission-Form.pdf` },
          { label: "Download SLPS Connect", href: `${B}/slps-connect/` },
        ],
      },
    ],
    featured: {
      eyebrow: "Now open",
      title: "Admission 2027-28",
      body: "Playgroup to Class VIII across Nehru Nagar, Kavi Nagar and Bulandshahr Road.",
      cta: "Start your application",
      href: `${B}/admission-process/`,
    },
  },
  {
    label: "Administration",
    groups: [
      {
        links: [
          { label: "Fee & Timings", href: `${B}/fee/` },
          { label: "Transport Facility", href: `${B}/transport-facility/` },
        ],
      },
    ],
  },
  {
    label: "Parents Portal",
    groups: [
      {
        links: [
          { label: "Parent Login", href: "https://slpsnehrunagar.schoolpad.in/" },
          { label: "Online Fee Payment", href: "https://slpsnehrunagar.schoolpad.in/" },
          { label: "Silver Times OTT Platform", href: `${B}/silver-times/` },
        ],
      },
    ],
  },
  {
    label: "Media",
    groups: [
      {
        links: [
          { label: "Events", href: `${B}/events/` },
          { label: "Latest News", href: `${B}/latest-news/` },
          { label: "SLPS Visits", href: `${B}/visits/` },
        ],
      },
    ],
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Academia", href: `${B}/academia/` },
  { label: "Admission Process", href: `${B}/admission-process/` },
  { label: "History", href: `${B}/history/` },
  { label: "Transport Facility", href: `${B}/transport-facility/` },
  { label: "Vision", href: `${B}/vision-mission/` },
  { label: "Gallery", href: `${B}/slps-gallery/` },
  { label: "Blogs", href: `${B}/blogs/` },
  { label: "News", href: `${B}/latest-news/` },
  { label: "FAQ", href: `${B}/faqs/` },
  { label: "Fee", href: `${B}/fee/` },
];

export const BRANCHES = [
  { name: "Nehru Nagar Branch", address: "III – B/12, Nehru Nagar, Ghaziabad", code: "457457" },
  { name: "Kavi Nagar Branch", address: "KI - 14, Block I, Sector 18, Kavi Nagar, Ghaziabad" },
  { name: "Senior Secondary Branch", address: "Bulandshahr Road, Ghaziabad" },
];

export const LINKS = {
  history: `${B}/history/`,
  getStarted: `${B}/admission-for-primary/`,
  academia: `${B}/academia/`,
  coScholastics: `${B}/co-scholastics/`,
  slpsWay: `${B}/the-slps-way/`,
  gallery: `${B}/slps-gallery/`,
  founder: `${B}/founder-and-director-message/`,
  news: `${B}/latest-news/`,
  playstore: "https://play.google.com/store",
  appstore: "https://www.apple.com/app-store/",
  designer: "https://littleabs.com/",
};

export const TESTIMONIALS = [
  {
    quote:
      "Thank you to the hard working staff in the School. You always greet parents with a smile and are always friendly and helpful. My child often talks about the nice kind ladies in the office. Your hard work and kindness is appreciated.",
    name: "Minakshi Verma",
    role: "Parent",
  },
  {
    quote:
      "We are much satisfied parents. Faculties are very intelligent and much cooperative. My husband, Mr. Amit Garg, was a very first student of the first batch in Nehru Nagar. Thanks to all who worked hard to make online classes more innovative.",
    name: "Garg Family",
    role: "Parent & Alumni family",
  },
  {
    quote:
      "All the teachers are hardworking, responsible, polite, and supportive. I would surely like to appreciate the music, art, and craft teachers along with our dear English and Hindi teachers too. My best wishes to all the teachers for their endeavors.",
    name: "Geeta Kakkar",
    role: "Parent",
  },
  {
    quote:
      "Our school name is Silver Line Prestige School — it means our school is a shining star. Our teachers and staff are helpful and hard workers. They support us with new opportunities and guide us in every work.",
    name: "SLPS Student",
    role: "Student",
  },
];

export const VIDEOS = [
  { id: "jMupqJBOEnk", title: "Annual Report 2021-22", meta: "Nehru Nagar Branch" },
  { id: "1Ycb5opEQt0", title: "Annual Report 2021-22", meta: "Kavi Nagar Branch" },
  { id: "e8vpsoZjjkU", title: "SLPS Amrit Mahotsav Song", meta: "Written & composed by Dr. Mala Kapoor" },
];

export const ALUMNI_VIDEOS = [
  { id: "_VgTiTBzsts", title: "Alumni Speak", meta: "Divyansh Bhatnagar" },
  { id: "v5mwaQayj6Q", title: "Alumni Speak", meta: "Akanksha Tyagi · Managing Partner, Social Friendly Consulting" },
  { id: "XOBguVXwDkg", title: "Alumni Speak", meta: "Tejaswini Oberoi · Apparel Buyer, PUMA" },
];
