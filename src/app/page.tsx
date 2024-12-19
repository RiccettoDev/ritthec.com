import About from "@/components/organism/about";
import Footer from "@/components/organism/footer";
import Header from "@/components/organism/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden bg-background1">
      <Header />
      <main className="flex flex-col w-full">
        <About />
      </main>
      <Footer />
    </div>
  );
}
