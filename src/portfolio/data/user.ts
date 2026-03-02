import type { User } from "@/portfolio/types/user";

export const USER = {
  firstName: "Aashish",
  lastName: "Kumar",
  displayName: "Aashish Kumar",
  username: "aashish",
  gender: "male",
  pronouns: "he/him",
  bio: "Backend Engineer, who loves Golang, Distributed Systems, Microservices and Scale",
  flipSentences: [
    "Backend Engineer",
    "Devops Engineer",
    "Distributed Systems",
    "Microservices",
  ],
  address: "India",
  phoneNumber: "OUSMcU/xiX4sOV/lPUT6lQ8Qo+ttCxABKqmUBhQU4Ww=",
  email: "a3VtYXIuYXNoaXNoNzI4MDlAZ21haWwuY29t",
  website: "https://ashishkumar.tech",
  jobTitle: "Backend Engineer",
  jobs: [
    {
      title: "Ex-Software Developer Intern",
      company: "Webability",
      website: "https://www.webability.io/",
    },
    {
      title: "Ex-Backend Developer Intern",
      company: "Zeepty Technologies ltd.",
      website: "https://zeepty.com/",
    },
    {
      title: "Ex-Software Developer Intern",
      company: "Aky Deva",
      website: "https://www.akydeva.com/",
    },
  ],

  about: `
- **Full Stack Developer** specializing in **Go**, **Next.js**, **TypeScript**, and **microservices architecture**.
- Experienced in building **high-performance, scalable systems** with message queues (RabbitMQ), vector databases, and cloud infrastructure (AWS).
- Skilled in **LangChain**, **RAG pipelines**, and AI-powered applications with real-time capabilities.
- Creator of [Carter](https://github.com/Alkush-Pipania/Carter): A microservices platform with Go backend, RabbitMQ async processing, and Pinecone Vector DB — powering **100+ active users** with sub-100ms API latency.
- Built [UserAccess](https://useraccess.live): A WCAG-compliant accessibility widget hosted on AWS S3/CloudFront with global low-latency delivery.
- Developed [Cluely](https://github.com/Alkush-Pipania/JarwizAI): A RAG-powered conversational AI platform with real-time streaming and hybrid search.
- Crafted [Depo](https://github.com/Alkush-Pipania/Depo): A legal-tech platform using **LangGraph AI agents** for deposition question generation with live audio diarization.
- Pursuing **B.Tech in Computer Science** at Dr. A.P.J. Abdul Kalam Technical University.
`,
  avatar: "https://stealth.blr1.cdn.digitaloceanspaces.com/ashish.png",
  ogImage: "/Images/my.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "ashish",
    "aashish",
    "ashishkumar",
    "aashishkumar",
    "ashish kumar",
    "aashish kumar",
  ],
  dateCreated: "2025-01-01",
  resume: "https://drive.google.com/file/d/1PQBCxuvnEPt_ijs1P3pfePvIAayHUFQr/view?usp=drive_link",
} satisfies User;
