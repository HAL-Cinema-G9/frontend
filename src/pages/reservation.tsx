import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MovieList from '@/components/Reservation/MovieList';
import ScheduleCalendar from '@/components/Reservation/ScheduleCalendar';
import {
  Movie,
  ReservationType,
  Schedule,
  Screen,
  Seat,
} from '@/types/apiTypes';
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

type Props = {
  schedules: Schedule[];
  screens: Screen[];
  seats: Seat[];
  movies: Movie[];
  reservations: ReservationType[];
};

const Reservation = ({
  schedules,
  screens,
  seats,
  movies,
  reservations,
}: Props) => {
  return (
    <main>
      <Navbar />
      <div css={styles.reservationContainer}>
        <ScheduleCalendar
          props={{
            schedules,
          }}
        />
        <MovieList />
      </div>
      <Footer />
    </main>
  );
};

export default Reservation;

export async function getStaticProps() {
  const res_schedules = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules`
  );
  const schedules: Schedule[] = await res_schedules.json();

  const res_screens = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/screens`
  );
  const screens: Screen[] = await res_screens.json();

  const res_seats = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seats`
  );
  const seats: Seat[] = await res_seats.json();

  const res_movies = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/movies`
  );
  const movies: Movie[] = await res_movies.json();

  const res_reservations = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations/upcoming`
  );
  const reservations: ReservationType[] =
    await res_reservations.json();

  return {
    props: {
      schedules,
      screens,
      seats,
      movies,
      reservations,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
