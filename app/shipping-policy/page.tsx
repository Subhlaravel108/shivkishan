import { ShippingPolicy } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Shipping Policy",
    description: "Read the shipping policy of Shivkishan Natural Pure Honey to understand delivery timelines, shipping charges, and packaging details.",
}

export default function ShippingPolicyPage() {
    return (
        <ShippingPolicy />
    );
}
