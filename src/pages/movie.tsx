import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Header from '@/components/Movie/Header';
import MainInfo from '@/components/Movie/MainInfo';

const Movie = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <MainInfo />
        <Footer />
      </main>
    </>
  );
};

export default Movie;
