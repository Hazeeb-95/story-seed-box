import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareHomeTab } from "@/components/tabs/CareHomeTab";

const CareHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <CareHomeTab />
      </main>

      <Footer />
    </div>
  );
};

export default CareHome;
