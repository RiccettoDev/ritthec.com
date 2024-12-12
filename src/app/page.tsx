import Flex from "@/components/atomo/Flex";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Flex className="fle-col h-full">
          <a href="">bla</a>
          <h1>bla</h1>
          <h3>bla</h3>
          <span>bla</span>
        </Flex>
      </main>
      <Footer />
    </div>
  );
}
