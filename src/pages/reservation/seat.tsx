import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScreenCard from '@/components/Reservation/Seat/ScreenCard';
import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { GetServerSideProps } from 'next';

type Props = {
  schedule: Schedule;
  seats: Seat[];
  reservations: ReservationType[];
};

const ReservationSeat = ({
  schedule,
  seats,
  reservations,
}: Props) => {
  return (
    <main>
      <Navbar />
      <ScreenCard
        props={{
          schedule,
          seats,
          reservations,
        }}
      />
      <Footer />
    </main>
  );
};

export default ReservationSeat;

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    //現在のURL:reservation/seat?scheduleId=${movie.id}
    //scheduleIdを取得する
    const { query } = context;
    const id = query.scheduleId;

    const res_schedule = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules/${id}`
    );
    const schedule: Schedule = await res_schedule.json();

    const res_seats = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seats/screen?screen_id=${schedule.screen_id}`
    );
    const seats: Seat[] = await res_seats.json();

    const res_reservations = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations/schedule?schedule_id=${id}`
    );
    const reservations: ReservationType[] =
      await res_reservations.json();

    return {
      props: {
        schedule,
        seats,
        reservations,
      },
    };
  };
