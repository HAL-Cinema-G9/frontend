import Footer from '@/components/Footer';
import MiddleInfo from '@/components/MiddleInfo';
import Navbar from '@/components/Navbar';
import TopInfo from '@/components/TopInfo';

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
