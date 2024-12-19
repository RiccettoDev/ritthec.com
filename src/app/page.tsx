import About from "@/components/organism/about";
import Companies from "@/components/organism/companies";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col w-full">
        <About />
        <Companies />
      </main>
      <Footer />
    </div>
  );
}
