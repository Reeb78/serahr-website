import Nav from "./Nav";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
