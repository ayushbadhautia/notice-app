// events.js
// Mock data for the Event feed. Each event has: id, title, category,
// venue, date (ISO yyyy-mm-dd), time (display string), and content
// (full body text shown in detail view).
// Categories in use: Cultural, Academic, Sports, Career, Health.

export const CATEGORY_META = {
  Academic: { color: "#C1502E" },
  Administrative: { color: "#B8862E" },
  Career: { color: "#2F7A78" },
  Cultural: { color: "#7D5A75" },
  Sports: { color: "#3D6B8C" },
  Health: { color: "#5B7F4F" },
};

export const EVENTS = [
  {
    id: "e1",
    title: "Spring Cultural Fest",
    category: "Cultural",
    venue: "Main Lawn",
    date: "2026-07-02",
    time: "5:00 PM – 10:00 PM",
    content:
      "An evening of music, dance, and food stalls run by student cultural societies. Headlining performance by the campus band Echo Theory at 8 PM, followed by an open dance floor. Entry is free for students with a valid ID; guests can purchase passes at the gate for ₹100.",
  },
  {
    id: "e2",
    title: "Guest Lecture: AI and Society",
    category: "Academic",
    venue: "Auditorium A",
    date: "2026-07-03",
    time: "3:00 PM – 4:30 PM",
    content:
      "A talk by visiting researcher Dr. Anya Koval on how artificial intelligence is reshaping work, education, and public policy. The session includes a 30-minute audience Q&A. Seating is first-come, first-served; the auditorium holds 300 and the talk is expected to be popular, so arrive early.",
  },
  {
    id: "e3",
    title: "Inter-College Basketball Finals",
    category: "Sports",
    venue: "Sports Complex, Court 1",
    date: "2026-07-05",
    time: "6:00 PM – 8:00 PM",
    content:
      "The men's and women's basketball finals between our campus team and Riverbend College. Free entry for students; a pep squad performance is scheduled for halftime. Limited seating in the front rows is reserved for the team's families.",
  },
  {
    id: "e4",
    title: "Career Fair 2026",
    category: "Career",
    venue: "Convention Hall",
    date: "2026-07-08",
    time: "10:00 AM – 4:00 PM",
    content:
      "Over 40 recruiters from tech, finance, consulting, and design will be on-site for resume drops and on-the-spot interviews. Pre-registered students get priority entry from 10 AM to 11 AM; general entry opens at 11 AM. Bring multiple printed resumes and a notepad.",
  },
  {
    id: "e5",
    title: "Open Mic Night",
    category: "Cultural",
    venue: "Student Center, Black Box Room",
    date: "2026-07-04",
    time: "7:00 PM – 9:30 PM",
    content:
      "A casual evening for anyone who wants to perform — poetry, comedy, music, or anything else that fits a five-minute slot. Sign-ups open at the door from 6:30 PM on a first-come basis. Light refreshments will be available.",
  },
  {
    id: "e6",
    title: "Hackathon: Build for Good",
    category: "Academic",
    venue: "Computer Science Building",
    date: "2026-07-11",
    time: "9:00 AM (Sat) – 9:00 AM (Sun)",
    content:
      "A 24-hour hackathon focused on projects with civic or environmental impact. Teams of up to four; solo entries are welcome too. Mentors from three local startups will be on-site through the night. Prizes for the top three teams, plus a People's Choice award.",
  },
  {
    id: "e7",
    title: "Yoga and Wellness Workshop",
    category: "Health",
    venue: "Gymnasium, Studio 2",
    date: "2026-07-01",
    time: "7:00 AM – 8:00 AM",
    content:
      "A beginner-friendly session led by a certified instructor, covering breathing techniques and a short guided flow to help with exam-season stress. Mats are provided, but you're welcome to bring your own. Space is limited to 25 participants.",
  },
  {
    id: "e8",
    title: "Alumni Networking Mixer",
    category: "Career",
    venue: "Rooftop Terrace, Block D",
    date: "2026-07-09",
    time: "6:30 PM – 8:30 PM",
    content:
      "An informal evening connecting current students with alumni working across industries. Light snacks and drinks will be served. Dress code is smart casual. Spots are limited to 80 students — register through the alumni office to reserve a place.",
  },
  {
    id: "e9",
    title: "Inter-Department Quiz Championship",
    category: "Academic",
    venue: "Seminar Hall, Block B",
    date: "2026-07-06",
    time: "2:00 PM – 5:00 PM",
    content:
      "Teams of three from each department compete across rounds covering general knowledge, science, and pop culture. Winners receive a rotating trophy and bragging rights for the year. Audience members can join a side quiz for smaller prizes during the break.",
  },
  {
    id: "e10",
    title: "Campus Photography Walk",
    category: "Cultural",
    venue: "Starting at the Clock Tower",
    date: "2026-07-12",
    time: "6:30 AM – 8:30 AM",
    content:
      "A guided early-morning walk around campus landmarks for anyone interested in photography, from phone cameras to DSLRs. Organized by the Photography Club. Selected photos will be featured in the next campus newsletter.",
  },
];
