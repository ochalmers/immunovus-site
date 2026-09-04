import type { Metadata } from "next";
import { Discovery } from "@/components/sections/Discovery";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.discovery.title,
  description: pages.discovery.description,
};

export default function DiscoveryPage() {
  return <Discovery />;
}
