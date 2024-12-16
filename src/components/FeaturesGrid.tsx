'use client';

import Link from 'next/link';

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

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {features.map((feature) => (
        <Link
          key={feature.href}
          href={feature.href}
          className="relative group rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors"
        >
          <div className="flex items-center gap-x-4">
            <span className="text-2xl">{feature.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
          </div>
          <p className="mt-4 text-sm text-gray-500">{feature.description}</p>
          <div className="mt-4">
            <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
              Try it out →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
