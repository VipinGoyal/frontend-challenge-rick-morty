import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./apollo-wrapper";
import { Container, ThemeProvider } from "@mui/material";
import defaultTheme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty - Frontend Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Container>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
          </Container>
        </ApolloWrapper>
      </body>
    </html>
  );
}
