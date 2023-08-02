import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ConfirmCard from '@/components/Reservation/Confirm/ConfirmCard';
import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { GetServerSideProps } from 'next';

type Props = {
  schedule: Schedule;
  tickets: Ticket[];
};

const ReservationConfirm = ({
  schedule,
  tickets,
}: Props) => {
  return (
    <main>
      <Navbar />
      <ConfirmCard
        props={{
          schedule,
          tickets,
        }}
      />
      <Footer />
    </main>
  );
};

export default ReservationConfirm;

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    const { query } = context;
    const id = query.scheduleId;

    const res_schedule = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules/${id}`
    );
    const schedule: Schedule = await res_schedule.json();

    const res_tickets = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tickets`
    );
    const tickets: Ticket[] = await res_tickets.json();

    return {
      props: {
        schedule,
        tickets,
      },
    };
  };
