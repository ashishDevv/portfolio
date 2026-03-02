import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "monit",
    title: "Monit",
    period: {
      start: "Jan 2026",
    },
    github: "https://github.com/ashishDevv/monit",
    skills: [
      "Go",
      "Redis",
      "PostgreSQL",
      "JWT",
      "Concurrency",
    ],
    description: `High Performance Uptime Monitoring Service.

**Features:**

- Architected a distributed uptime monitoring system in Go supporting 1M+ monitors, leveraging Redis sorted sets and Lua scripting for deterministic O(log N) scheduling across instances.
- Built a bounded-concurrency execution engine (5K HTTP connections) using goroutines, worker pools and semaphores to maximize throughput without resource exhaustion.
- Orchestrated a crash-resilient reliability framework with dual sorted sets and visibility timeouts, ensuring zero job loss during high-concurrency load and worker failures.
- Optimized the hot path with Redis-backed operations, preventing ~16K+ QPS load on PostgreSQL at scale.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/monit.png",
      alt: "Monit - Uptime monitor",
    },
  },
  {
    id: "outflow",
    title: "Outflow",
    period: {
      start: "Dec 2025",
    },
    github: "https://github.com/ashishDevv/Outflow",
    skills: [
      "Go",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Concurrency",
    ],
    description: `Highly Reliable Transactional Outbox Processor.

**Features:**

- Processed 10K+ events/min with horizontal scaling by building a concurrent transactional outbox processor in Go.
- Achieved zero message loss during crash simulations by designing atomic batch state transitions and time-based worker takeover within PostgreSQL transactions.
- Reduced database round-trips by ~80% by batching 500 events per cycle and performing bulk status updates.
- Ensured at-least-once delivery guarantees by combining persistence with reliable publishing to RabbitMQ
`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/outflow.png",
      alt: "Outflow - Reliable Transactional Outbox Processor",
    },
  },
  {
    id: "codeengine",
    title: "Code Execution Engine",
    period: {
      start: "Jan 2025",
    },
    github: "https://github.com/ashishDevv/Code-Execution-Engine",
    skills: [
      "Node.js",
      "Redis",
      "Docker",
      "BullMQ",
      "Message Queues"
    ],
    description: `Horizontally Scalable Code Execution Engine.

**Features:**

- Developed a Remote Code Execution System that securely runs user code within isolated environment, ensuring safe execution with limited resources.
- Implemented a microservices architecture using Node.js Severs and Redis based Message Queues, enabling scalabl execution of code in asynchronous, distributed environment.
- Utilized Node.js Streams to handle logs from Docker and process them to separate out stdout and stderr.
- Implemented BullMQ (Redis) for scalable task queuing system between Services to manage concurrency and allowing multiple code execution tasks to run in parallel without blocking the system.
- Developed a robust Express.js API, enabling seamless interaction and smooth execution of user code while handling requests asynchronously.`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/cee.png",
      alt: "Code Execution Engine",
    },
  },
]