import { TermsConditions } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Terms and Conditions",
    description: "Read the terms and conditions of Shivkishan Natural Pure Honey to understand the rules and guidelines for using our website, placing orders, and engaging with our services.",
}

export default function TermsPage() {
    return (
        <TermsConditions />
    );
}