import Footer from '@/components/Footer';
import MiddleInfo from '@/components/Index/MiddleInfo';
import Navbar from '@/components/Navbar';
import TopInfo from '@/components/Index/TopInfo';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <TopInfo />
        <MiddleInfo />
        <Footer />
      </main>
    </>
  );
}
