import { BIZ_UDPGothic, Inter, League_Gothic, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league-gothic",
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
});

const biz = BIZ_UDPGothic({
  subsets: ["latin"],
  variable: "--font-biz",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Daniel Kirmse | Portfólio",
  description: "Portfólio brutalista retro-futurista desenvolvido com Next.js e Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${leagueGothic.variable} ${vt323.variable} ${biz.variable} bg-background font-body text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
