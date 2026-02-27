import Founder from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Founder of Shivkishan Natural Pure Honey - Our Vision & Values",
  description:
    "Get to know the founder of Shivkishan Natural Pure Honey, their vision for the brand, and the core values that drive our commitment to quality, sustainability, and customer satisfaction.",
};

export default function FounderPage() {
  return (
    <Founder />
  );
}