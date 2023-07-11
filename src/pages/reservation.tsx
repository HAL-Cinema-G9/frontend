import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScheduleCalendar from '@/components/Reservation/ScheduleCalendar';
import { css } from '@emotion/react';

const styles = {
  reservationContainer: css`
    padding: 100px 0;
    background-color: #524160;
    width: 100%;
  `,
};

const Reservation = () => {
  return (
    <main>
      <Navbar />
      <div css={styles.reservationContainer}>
        <ScheduleCalendar />
      </div>
      <Footer />
    </main>
  );
};

export default Reservation;
