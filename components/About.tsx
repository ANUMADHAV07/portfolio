"use client";
import { motion } from "framer-motion";

export default function About() {
  const roles = [
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with Golang and Node.js. Architecting RESTful APIs, GraphQL schemas, and gRPC microservices with proper ORM layers and database optimization.",
      stack: ["Golang", "Node.js", "NestJS", "Express.js", "gRPC", "GraphQL"],
    },
    {
      title: "Frontend Development",
      description:
        "Crafting responsive user interfaces with modern React ecosystem, focusing on performance and seamless user experience with TypeScript.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Golang", "TypeScript"],
    },
    {
      category: "Backend Frameworks",
      skills: ["Node.js", "NestJS", "Express.js", "gRPC"],
    },
    {
      category: "Frontend Frameworks",
      skills: ["React", "Next.js"],
    },
    {
      category: "ORMs & Database Libraries",
      skills: ["GORM", "pgx pool", "Prisma"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "Redis"],
    },
    {
      category: "Message Queues & Caching",
      skills: ["Kafka", "Redis", "BullMQ", "Sqs"],
    },
    {
      category: "Testing Frameworks",
      skills: ["Cucumber", "Integration Testing", "Unit Testing"],
    },
    {
      category: "AWS Services",
      skills: [
        "Lambda",
        "API Gateway",
        "S3",
        "Cognito",
        "DynamoDB",
        "LocalStack",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "Docker",
        "Git",
        "Swagger/OpenAPI",
        "Cobra CLI",
        "Viper",
        "GitHub Actions",
      ],
    },
  ];

  const passions = [
    { emoji: "🎌", label: "Anime Culture" },
    { emoji: "🌍", label: "World Explorer" },
    { emoji: "🏏", label: "Cricket Player" },
    { emoji: "📈", label: "Options Trading" },
  ];

  return (
    <section className="section-container relative" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-gojo mb-4">
            Who I Am
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--gojo-cyan)] to-[var(--gojo-purple)]"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm a{" "}
            <span className="text-[var(--gojo-cyan)] font-semibold">
              self-taught full stack developer
            </span>{" "}
            specializing in{" "}
            <span className="text-[var(--gojo-electric)]">
              Golang and TypeScript
            </span>{" "}
            ecosystems. From backend microservices to modern React frontends, I
            build complete systems that scale.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Expert in architecting RESTful APIs, gRPC services, and GraphQL
            schemas. Proficient with AWS cloud infrastructure, event-driven
            architectures using Kafka, and comprehensive testing strategies. My
            journey spans from cricket fields to trading floors, bringing
            competitive spirit and passion to every line of code.
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              className="limitless-card"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[var(--gojo-cyan)] mb-3">
                {role.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {role.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-[var(--gojo-midnight)] 
                             text-[var(--gojo-electric)] border border-[var(--gojo-dark)]
                             rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills by Category */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--gojo-lavender)] mb-8">
            Technical Expertise
          </h3>

          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-[var(--gojo-cyan)] mb-3">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-[var(--gojo-dark)] text-gray-300 rounded-lg
                               border border-[var(--gojo-midnight)] hover:border-[var(--gojo-cyan)]
                               transition-all cursor-default text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "var(--gojo-electric)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--gojo-lavender)] mb-6">
            Beyond the Code
          </h3>
          <div className="flex flex-wrap gap-6">
            {passions.map((passion, index) => (
              <motion.div
                key={passion.label}
                className="flex items-center gap-3 px-4 py-3 bg-[var(--gojo-dark)] 
                         rounded-lg border border-[var(--gojo-midnight)]
                         hover:border-[var(--gojo-cyan)] transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl">{passion.emoji}</span>
                <span className="text-gray-300 font-medium">
                  {passion.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          className="mt-16 p-8 border-l-4 border-[var(--gojo-cyan)] bg-[var(--gojo-dark)] rounded-r-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 italic">
            "Not just a coder — a{" "}
            <span className="text-[var(--gojo-cyan)]">vibe engineer</span>.
            Building production-grade systems with Golang and TypeScript, from
            AWS Lambda functions to Next.js applications, from Kafka streams to
            gRPC microservices. Crafting solutions that scale, and exploring
            life beyond the terminal."
          </p>
          <p className="text-sm text-gray-500 mt-4">
            ⚠️ Warning: Terrible memory but excellent documentation skills
          </p>
        </motion.div>
      </div>
    </section>
  );
}
