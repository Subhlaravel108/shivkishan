import { CancellationPolicy } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Cancellation Policy",
    description: "Read the cancellation policy of Shivkishan Natural Pure Honey to understand how to cancel orders and the timelines involved.",
}

export default function CancellationPolicyPage() {
    return (
        <CancellationPolicy />
    );
}
