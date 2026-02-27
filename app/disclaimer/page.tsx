import { Disclaimer } from "./clientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shivkishan Natural Pure Honey - Disclaimer",
    description: "Read the disclaimer of Shivkishan Natural Pure Honey regarding health information, product images, and external links.",
}

export default function DisclaimerPage() {
    return (
        <Disclaimer />
    );
}
