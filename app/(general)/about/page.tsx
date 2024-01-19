import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page Description",
  keywords: ["About Page", "Alfonsina", "información"],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
