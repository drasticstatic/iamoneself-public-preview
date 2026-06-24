import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — I Am One Self",
  description:
    "Frequently asked questions about our sacred ceremonies, preparation, safety, travel logistics, and the Plants & Miracles teaching.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
