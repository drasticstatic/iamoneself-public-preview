import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retreats — I Am One Self",
  description:
    "Chaiconi Bari Ayahuasca Retreats in the Peruvian Amazon. Sacred ceremonies with traditional curanderos. The Plants & Miracles teaching.",
};

export default function RetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
