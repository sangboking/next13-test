import StyledComponentsRegistry from "@/lib/registry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "test title",
  description: "test description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
