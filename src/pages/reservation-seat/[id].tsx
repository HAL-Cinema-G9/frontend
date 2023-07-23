import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScreenCard from '@/components/ReservationSeat/ScreenCard';
import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { GetStaticPropsContext } from 'next';

type Props = {
  props: {
    schedule: Schedule;
    seats: Seat[];
    reservations: ReservationType[];
  };
};

const ReservationSeat = ({ props }: Props) => {
  return (
    <main>
      <Navbar />
      <ScreenCard />
      <Footer />
    </main>
  );
};

export default ReservationSeat;

export async function getStaticProps({
  params,
}: GetStaticPropsContext) {
  const id = params?.id;

  const res_schedules = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules/${id}`
  );
  const schedule: Schedule = await res_schedules.json();

  const res_seats = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seats?screen_id=${schedule.screen_id}`
  );
  const seats: Seat[] = await res_seats.json();

  const res_reservations = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations?schedule_id=${id}`
  );
  const reservations: ReservationType[] =
    await res_reservations.json();

  return {
    props: {
      schedule,
      seats,
      reservations,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
