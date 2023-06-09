import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRecoilState } from 'recoil';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Footer />
      </main>
    </>
  );
}
