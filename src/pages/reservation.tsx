import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MovieList from '@/components/Reservation/MovieList';
import ScheduleCalendar from '@/components/Reservation/ScheduleCalendar';
import { css } from '@emotion/react';

const styles = {
  reservationContainer: css`
    padding: 100px 0;
    background-color: #524160;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
  `,
};

const Reservation = () => {
  return (
    <main>
      <Navbar />
      <div css={styles.reservationContainer}>
        <ScheduleCalendar />
        <MovieList />
      </div>
      <Footer />
    </main>
  );
};

export default Reservation;
