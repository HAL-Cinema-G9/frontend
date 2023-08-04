import Footer from '@/components/Footer';
import MyPageCard from '@/components/MyPage/MyPageCard';
import Navbar from '@/components/Navbar';
import { ReservationType } from '@/types/apiTypes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MyPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [myReservations, setMyReservations] = useState<
    ReservationType[]
  >([]);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.replace('/signin');
  }, [status, session, router]);

  useEffect(() => {
    if (!session?.user?.email) return;

    const res_user = async () => {
      const res_user = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user?email=${session.user?.email}`
      );

      const user = await res_user.json();
      setUserId(user.id);
    };
    res_user();
  }, [session]);

  useEffect(() => {
    if (!userId) return;

    const res_myReservation = async () => {
      const res_reservation = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations/user?user_id=${userId}`
      );
      const reservations: ReservationType[] =
        await res_reservation.json();
      setMyReservations(reservations);
    };

    res_myReservation();
  }, [userId]);

  return (
    <main>
      <Navbar />
      <MyPageCard myReservations={myReservations} />
      <Footer />
    </main>
  );
};

export default MyPage;
