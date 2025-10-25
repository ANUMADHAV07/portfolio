export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anu Madhav",
    url: "https://anumadhav.in",
    jobTitle: "Senior Golang Developer",
    sameAs: [
      "www.linkedin.com/in/anu-madhav-7158621a6",
      "https://medium.com/@anumadhavan7",
    ],
    knowsAbout: [
      "Golang",
      "Backend Development",
      "Microservices",
      "AWS",
      "PostgreSQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
