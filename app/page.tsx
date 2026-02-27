import Index from "./pageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shivkishan Natural Pure Honey - Health Benefits & Bulk Orders",
  description:
    "Discover the health benefits of Shivkishan Natural Pure Honey. Learn about its nutritional value, antioxidant properties, and how to place bulk orders for your business.",
};

export default function HomePage() {
  return (
    <Index />
  );
}