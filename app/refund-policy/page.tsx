import { RefundPolicy } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Refund Policy",
    description: "Read the refund policy of Shivkishan Natural Pure Honey to understand how refunds and returns are handled for bulk orders.",
}

export default function RefundPolicyPage() {
    return (
        <RefundPolicy />
    );
}
