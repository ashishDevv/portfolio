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
- Backend-focused engineer specializing in **Golang**, **Node.js** and **Distributed systems**, building production-grade services designed for scalability, reliability, and fault tolerance from the ground up.
- Designed high-throughput systems processing **30K+ daily jobs** and **10K+ events/min**, implementing transactional outbox, visibility timeouts, DLQs, bounded retries, and idempotent workflows to guarantee reliability under failure.
- Strong hands-on experience with **Concurrency in Go** — worker pools, goroutines, channels, mutex, semaphores, backpressure handling, and graceful shutdown using contexts.
- Strong believer in designing for failure first — **crash resilience**, **zero job loss guarantees**, **at-least-once delivery semantics**, and **database-safe concurrency patterns**.
- Cloud & DevOps aware engineer with practical experience in **Docker**, **Kubernetes**, **AWS**, and **CI/CD pipelines**, focusing on reproducible builds, automated testing, and production-ready deployments.
- Currently advancing my expertise in **Observability Engineering**, **Testing**, **Benchmarking**, and **Profiling**, ensuring systems are not just functional but measurable, optimized, and performance-conscious.
- Built [Monit](https://github.com/ashishDevv/Monit) — a distributed uptime monitoring system can handle **1M+ monitors**.
- Built [Outflow](https://github.com/ashishDevv/Outflow) — a crash-resilient transactional outbox processor handling **10K+ events/min**.
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
