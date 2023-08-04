import { ReservationType } from '@/types/apiTypes';

export const resMyReservation = async (userId: number) => {
  const res_reservation = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations/user?user_id=${userId}`
  );
  const reservations: ReservationType[] =
    await res_reservation.json();
  return reservations;
};
