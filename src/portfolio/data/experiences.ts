import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "techywebsolutio",
    companyName: "Webability",
    companyLogo: "https://www.webability.io/logo.png",
    positions: [
      {
        id: "tws-fullstack-2024",
        title: "Software Developer",
        employmentPeriod: {
          start: "Nov 2025",
          end: "Jan 2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Architected a distributed website auditing system using Go, Node.js and RabbitMQ with 30+ checks, processing 30K+ webpages/day via horizontally scalable crawler–queue–worker architecture.
- Designed fault-tolerant job processing workflows with bounded retries, re-queuing, and DLQs, reducing job failures rate from 30% to <5% under worker crashes.
- Introduced Redis-backed job state tracking and result caching, cutting database calls by ~10–15× and eliminating high-frequency polling, improving responsiveness and preventing DB bottlenecks under load.
- Enhanced system observability and stability by implementing structured Zerolog logging and standardized Go error-handling patterns, making production failures easier to trace and reducing diagnosis time by ~2 times.
`,
        skills: [
          "Golang",
          "Node.js",
          "TypeScript",
          "RabbitMQ",
          "Redis",
          "Python",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "zeepty",
    companyName: "Zeepty Technologies ltd.",
    companyLogo: "https://zeepty-s3-bucket-prod.s3.ap-south-1.amazonaws.com/asset/Group+1597882452.svg",
    positions: [
      {
        id: "zeepty-sde-2025",
        title: "Backend Developer",
        employmentPeriod: {
          start: "May 2025",
          end: "Oct 2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a production Go service integrating with YouTube APIs using OAuth 2.0, building 15+ RESTful APIs  with Chi router and MVC architecture to automate creator workflows and improving efficiency
- Engineered a horizontally scalable Go worker service, processing SQS events concurrently using worker pool patterns, channels, and contexts, enabling parallel processing, graceful shutdown, and improved system stability under load.
- Integrated CI/CD pipelines using GitHub Actions for 5+ Microservices with optimized Docker builds, automating testing and deployment workflows and reducing hours of manual effort to minutes per release.
`,
        skills: [
          "Golang",
          "Node.js",
          "TypeScript",
          "OAuth 2.0",
          "Redis",
          "GitHub Actions",
          "AWS SQS"
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "akydeva",
    companyName: "AKY Deva",
    positions: [
      {
        id: "aky-deva-2024",
        title: "Software Developer",
        employmentPeriod: {
          start: "Nov 2024",
          end: "Jan 2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Built 12+ production REST APIs in Node.js handling 5K+ daily requests, optimizing database queries and access patterns to reduce response latency and improve efficiency.
- Implemented Rate Limiter using the token bucket algorithm to control request bursts, protect APIs from overload, and ensure stable performance under concurrent traffic.
`,
        skills: [
          "Node.js",
          "TypeScript",
          "REST APIs",
          "Redis",
          "Rate Limiting",
          "AWS EC2"
        ],
        isExpanded: false,
      },
    ],
  },
];
