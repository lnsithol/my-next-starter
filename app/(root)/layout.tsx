import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DesktopNav } from "@/components/desktop-nav";
import Providers from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Providers>
        <DesktopNav />
      </Providers>
      <>
        <SiteHeader />
        <main className="container flex-1">{children}</main>
        <SiteFooter />
      </>
    </div>
  );
}
