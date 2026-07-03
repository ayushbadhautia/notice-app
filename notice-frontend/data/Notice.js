// notices.js
// Mock data for the Notice feed. Each notice has: id, title, category,
// postedDate (ISO yyyy-mm-dd), and content (full body text shown in detail view).
// Categories in use: Academic, Administrative, Career, Health.

export const CATEGORY_META = {
  Academic: "sienna",              // was #C1502E
  Administrative: "darkgoldenrod", // was #B8862E
  Career: "teal",                  // was #2F7A78
  Cultural: "darkslateblue",       // was #7D5A75
  Sports: "steelblue",             // was #3D6B8C
  Health: "darkolivegreen",        // was #5B7F4F
};

export const NOTICES = [
  {
    id: "n1",
    title: "Library Extended Hours for Finals Week",
    category: "Academic",
    postedDate: "2026-06-26",
    content:
      "The Main Library will stay open until 2 AM from June 29th through July 10th to support finals preparation. The 2nd-floor silent study zone remains 24 hours during this period. Group study rooms can be booked up to 3 days in advance through the library portal. Please bring your student ID — entry after 11 PM requires a swipe at the east entrance.",
  },
  {
    id: "n2",
    title: "Parking Lot C Closed for Resurfacing",
    category: "Administrative",
    postedDate: "2026-06-25",
    content:
      "Parking Lot C will be closed from June 30th to July 4th for resurfacing work. Vehicles must be relocated to Lot D or the North Annex by 7 AM on June 30th, or they will be towed at the owner's expense. Shuttle service between Lot D and the main campus will run every 10 minutes during this period.",
  },
  {
    id: "n3",
    title: "Scholarship Applications Open for Fall Semester",
    category: "Academic",
    postedDate: "2026-06-24",
    content:
      "The Office of Financial Aid is now accepting applications for the Fall 2026 Merit and Need-based Scholarships. Eligible students must have a minimum GPA of 3.0 and submit transcripts, a personal statement, and two faculty recommendations. The deadline to apply is July 20th. Late submissions will not be considered.",
  },
  {
    id: "n4",
    title: "Wi-Fi Maintenance in North Hall",
    category: "Administrative",
    postedDate: "2026-06-27",
    content:
      "IT Services will perform scheduled maintenance on the North Hall wireless network on July 1st between 1 AM and 5 AM. Connectivity will be intermittent during this window. Wired ports in the computer labs will remain unaffected. Report any lingering issues to the IT helpdesk after 9 AM on July 1st.",
  },
  {
    id: "n5",
    title: "Career Fair Registration Now Open",
    category: "Career",
    postedDate: "2026-06-23",
    content:
      "Registration for the Fall Career Fair is open to all final-year and pre-final-year students. Over 40 companies across tech, finance, and design have confirmed attendance. Bring at least five printed copies of your resume. Business casual attire is required for entry to the Convention Hall.",
  },
  {
    id: "n6",
    title: "Lost and Found: Items from Spring Fest",
    category: "Administrative",
    postedDate: "2026-06-22",
    content:
      "Several items were left behind after Spring Fest, including water bottles, a set of keys with a maroon lanyard, two umbrellas, and a grey hoodie. These are being held at the Student Affairs front desk through July 15th, after which unclaimed items will be donated.",
  },
  {
    id: "n7",
    title: "Health Center Flu Shot Clinic",
    category: "Health",
    postedDate: "2026-06-21",
    content:
      "The Student Health Center will run a walk-in flu vaccination clinic every Tuesday and Thursday from 10 AM to 3 PM through the end of July. Shots are free for students with a valid health insurance card on file; a $15 fee applies otherwise. No appointment necessary.",
  },
  {
    id: "n8",
    title: "Student Council Election Results",
    category: "Academic",
    postedDate: "2026-06-20",
    content:
      "Results from the Student Council general election have been certified. The new council will be sworn in at a ceremony on July 8th in the Auditorium. Full vote counts by department are posted on the Student Affairs noticeboard and on the council's official page.",
  },
  {
    id: "n9",
    title: "Bike Registration Deadline Approaching",
    category: "Administrative",
    postedDate: "2026-06-19",
    content:
      "All bicycles parked on campus racks must be registered with Campus Security by July 5th. Registration is free and takes under five minutes at the Security office in Gate 2. Unregistered bikes found after the deadline may be impounded.",
  },
  {
    id: "n10",
    title: "New Vegan Menu Rolling Out at Dining Hall",
    category: "Health",
    postedDate: "2026-06-18",
    content:
      "Starting July 1st, the Main Dining Hall will introduce a dedicated vegan counter with rotating daily specials. The change follows a student survey where 68% of respondents requested more plant-based options. Feedback can be left at the suggestion box near the dining hall entrance.",
  },
  {
    id: "n11",
    title: "Mid-Semester Fee Payment Deadline",
    category: "Administrative",
    postedDate: "2026-06-17",
    content:
      "Students who opted for installment-based fee payment must clear the second installment by July 12th. A late fee of $25 per week applies after the deadline. Payments can be made through the student portal or in person at the Accounts Office, Block A.",
  },
  {
    id: "n12",
    title: "Research Assistant Positions Open in CS Department",
    category: "Career",
    postedDate: "2026-06-16",
    content:
      "The Computer Science department is hiring undergraduate research assistants for the summer term, working on projects in distributed systems and applied machine learning. Interested students should email a short statement of interest and resume to the department office by July 6th.",
  },
];
