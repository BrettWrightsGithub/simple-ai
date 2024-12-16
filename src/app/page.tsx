import Link from "next/link";
import { FeaturesGrid } from "@/components/FeaturesGrid";

const features = [
  {
    title: "Comparative Chat",
    description: "Compare responses from two AI models side-by-side",
    href: "/comparative-chat",
    icon: "💬",
  },
  {
    title: "RAG Demo",
    description: "Upload and query documents using natural language",
    href: "/rag-demo",
    icon: "📄",
  },
  {
    title: "Researcher Agent",
    description: "Get summaries and analysis of research papers",
    href: "/researcher-agent",
    icon: "🔍",
  },
  {
    title: "Scheduling Assistant",
    description: "Manage your schedule with AI-powered insights",
    href: "/scheduling-assistant",
    icon: "📅",
  },
  {
    title: "Inspiration Finder",
    description: "Discover personalized inspirational quotes",
    href: "/inspiration-finder",
    icon: "✨",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-12 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI Applications Showcase
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore a collection of practical AI applications demonstrating various use cases.
              Each feature showcases different aspects of AI technology and its real-world applications.
            </p>
            <FeaturesGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
