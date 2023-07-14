import { useSession } from 'next-auth/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/Signin/MainContent';

const Signin = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <main>
        <Navbar />
        <MainContent />
        <Footer />
      </main>
    </>
  );
};

export default Signin;
