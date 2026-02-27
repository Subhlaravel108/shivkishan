import Contact from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Shivkishan Foods - Get in Touch",
    description: "Have questions about our natural honey products or want to place a bulk order? Contact Shivkishan Foods today. We're here to help with any inquiries you may have.",
}

export default function ContactPage() {
    return (
        <Contact />
    );
}