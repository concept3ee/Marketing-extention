import {
  Bricolage_Grotesque,
  Inter,
  Inter_Tight,
  Instrument_Serif,
} from "next/font/google";

export const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const interTight = Inter_Tight({
  variable: "--font-inter-tight-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif-face",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
