import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TicketCard from '@/components/Reservation/Ticket/TicketCard';
import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { GetServerSideProps } from 'next';

type Props = {
  schedule: Schedule;
  seats: Seat[];
  tickets: Ticket[];
};

const ReservationTicket = ({
  schedule,
  seats,
  tickets,
}: Props) => {
  return (
    <main>
      <Navbar />
      <TicketCard
        props={{
          schedule,
          seats,
          tickets,
        }}
      />
      <Footer />
    </main>
  );
};

export default ReservationTicket;

export const getServerSideProps: GetServerSideProps =
  async (context) => {
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

    const res_tickets = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tickets`
    );
    const tickets: Ticket[] = await res_tickets.json();

    return {
      props: {
        schedule,
        seats,
        tickets,
      },
    };
  };
