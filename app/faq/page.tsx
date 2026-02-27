import FAQ from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - FAQ",
    description: "Find answers to frequently asked questions about Shivkishan Natural Pure Honey, including its health benefits, sourcing, and how to place bulk orders.",
}

export default function FAQPage() {
    return (
        <FAQ />
    );
}