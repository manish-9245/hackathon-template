"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "TypeScript",
    designation: "For type safety",
    image: "https://skillicons.dev/icons?i=ts",
  },
  {
    id: 2,
    name: "Supabase",
    designation: "For database",
    image: "https://skillicons.dev/icons?i=supabase",
  },
  {
    id: 3,
    name: "NextJS",
    designation: "For SSR and CSR",
    image: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    id: 4,
    name: "TailwindCSS",
    designation: "For styling",
    image: "https://skillicons.dev/icons?i=tailwindcss",
  },
  {
    id: 5,
    name: "Aceternity",
    designation: "For animation",
    image: "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75",
  },
  {
    id: 6,
    name: "ShadCn",
    designation: "For design",
    image:
      "https://refine-web.imgix.net/blog/2024-03-19-ts-shadcn/social.png?w=800",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
