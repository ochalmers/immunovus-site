import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/Testimonials";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.cliniciansTestimonials.title,
  description: pages.cliniciansTestimonials.description,
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
