import type { Metadata } from "next";
import { Clinicians } from "@/components/sections/Clinicians";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.clinicians.title,
  description: pages.clinicians.description,
};

export default function CliniciansPage() {
  return <Clinicians />;
}
