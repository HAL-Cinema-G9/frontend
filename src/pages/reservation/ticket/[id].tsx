import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TicketCard from '@/components/Reservation/Ticket/TicketCard';
import { Schedule, Seat } from '@/types/apiTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
  schedule: Schedule;
  seats: Seat[];
};

const ReservationTicket = ({ schedule, seats }: Props) => {
  return (
    <main>
      <Navbar />
      <TicketCard
        props={{
          schedule,
          seats,
        }}
      />
      <Footer />
    </main>
  );
};

export default ReservationTicket;

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const id = params?.id;

  const res_schedule = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules/${id}`
  );
  const schedule: Schedule = await res_schedule.json();

  const res_seats = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seats/screen?screen_id=${schedule.screen_id}`
  );
  const seats: Seat[] = await res_seats.json();

  return {
    props: {
      schedule,
      seats,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res_schedules = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/schedules/week`
  );
  const schedules: Schedule[] = await res_schedules.json();

  const paths = schedules.map((schedule) => {
    return {
      params: {
        id: schedule.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
