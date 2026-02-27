import { PrivacyPolicy } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Privacy Policy",
    description: "Read the privacy policy of Shivkishan Natural Pure Honey to understand how we collect, use, and protect your personal information when you interact with our website and services.",
}

export default function PrivacyPolicyPage() {
    return (
        <PrivacyPolicy />
    );
}