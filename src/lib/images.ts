import building from "@/assets/building.jpg.asset.json";
import sportsDrill from "@/assets/sports-drill.jpg.asset.json";
import teacherKids from "@/assets/teacher-kids.jpg.asset.json";
import drMala from "@/assets/dr-mala-kapoor.jpg.asset.json";
import g1 from "@/assets/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery-4.jpg.asset.json";
import g5 from "@/assets/gallery-5.jpg.asset.json";
import g6 from "@/assets/gallery-6.jpg.asset.json";
import g7 from "@/assets/gallery-7.jpg.asset.json";
import g8 from "@/assets/gallery-8.jpg.asset.json";
import g9 from "@/assets/gallery-9.jpg.asset.json";
import g10 from "@/assets/gallery-10.jpg.asset.json";
import resultSara from "@/assets/result-sara.jpg.asset.json";
import resultSanchai from "@/assets/result-sanchai.jpg.asset.json";
import news1 from "@/assets/news-1.jpg.asset.json";
import news2 from "@/assets/news-2.jpg.asset.json";
import v1 from "@/assets/video-1.jpg.asset.json";
import v2 from "@/assets/video-2.jpg.asset.json";
import v3 from "@/assets/video-3.jpg.asset.json";
import a1 from "@/assets/alumni-1.jpg.asset.json";
import a2 from "@/assets/alumni-2.jpg.asset.json";
import a3 from "@/assets/alumni-3.jpg.asset.json";

export const IMG = {
  building: building.url,
  sportsDrill: sportsDrill.url,
  teacherKids: teacherKids.url,
  drMala: drMala.url,
  gallery: [
    { src: g1.url, alt: "Guests at an outdoor school event" },
    { src: g2.url, alt: "Teacher guiding a student in the computer lab" },
    { src: g3.url, alt: "Pre-primary sports day drill" },
    { src: g4.url, alt: "Annual Sports Day 2022-23 board" },
    { src: g5.url, alt: "Principal with young students in costume" },
    { src: g6.url, alt: "Students planting in the school garden" },
    { src: g7.url, alt: "Prize distribution on the winners' podium" },
    { src: g8.url, alt: "Students in a dance class" },
    { src: g9.url, alt: "Students performing on the sports ground" },
    { src: g10.url, alt: "Teacher with students at an outdoor event" },
  ],
  results: [
    { src: resultSara.url, name: "Sara Bhatnagar Sirohi", stream: "Humanities", score: "96%" },
    { src: resultSanchai.url, name: "Sanchai Sharma", stream: "Humanities", score: "95.75%" },
  ],
  news: [
    { src: news1.url, alt: "Students being felicitated on stage" },
    { src: news2.url, alt: "Student speaking at a school event" },
  ],
  videos: [v1.url, v2.url, v3.url],
  alumni: [a1.url, a2.url, a3.url],
};
