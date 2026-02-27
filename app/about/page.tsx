import About from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shivkishan Natural Pure Honey - Our Story & Philosophy",
  description:
    "Learn about the story behind Shivkishan Natural Pure Honey, our commitment to quality, and our brand philosophy focused on purity, tradition, and sustainability.",
};

export default function AboutPage() {
  return (
    <About />
  );
}