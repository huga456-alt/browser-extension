import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "CRM Studio — Внедрение CRM за 1-4 недели",
  description:
    "CRM Studio помогает внедрять amoCRM, Kommo и Bitrix24, автоматизируя продажи и аналитику.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
