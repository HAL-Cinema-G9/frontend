import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PurchaseCard from './PurchaseCard';
import ReservationButtonLayout from '../Common/ReservationButtonLayout';
import ReservationButton from '../Common/ReservationButton';
import { useSession } from 'next-auth/react';
import ReservationConfirmButton from './ReservationConfirmButton';
import axios from 'axios';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px;
  `,
  confirmContainer: css`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  `,
  titleText: css`
    font-size: 1.8rem;
    color: #212121;
    padding: 0 20px;
  `,
  confirmBox: css`
    margin: 20px auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    border: #ccc 3px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    tickets: Ticket[];
  };
};

const ConfirmCard = ({ props }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  // http://localhost:3000/reservation/confirm?schduleId=16&seatId=190,191,192&ticketId=4,3,3
  const { seatId, ticketId } = router.query; // ここでURLのクエリパラメータを取得する
  const selectSeat: number[] = seatId
    ? seatId
        .toString()
        .split(',')
        .map((seatId) => Number(seatId))
    : [];
  const selectTicket: number[] = ticketId
    ? ticketId
        .toString()
        .split(',')
        .map((ticketId) => Number(ticketId))
    : [];
  const { schedule, tickets } = props;
  //   ticketIdの中にnumber以外の値が入っている場合は`/reservation/ticket?scheduleId=${schedule.id}&seatId=${selectSeat}`にリダイレクトする
  if (selectTicket.some((ticketId) => isNaN(ticketId))) {
    router.push(
      `/reservation/ticket?scheduleId=${schedule.id}&seatId=${selectSeat}`
    );
  }

  const [seats, setSeats] = useState<Seat[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    // ここで必要な座席情報を取得する
    const res_schedule = async () => {
      const seats: Seat[] = [];
      for (const seatId of selectSeat) {
        const res_seat = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seats/${seatId}`
        );
        const seat: Seat = await res_seat.json();
        seats.push(seat);
      }
      setSeats(seats);
    };
    res_schedule();
    // userIdの取得
    const res_user = async () => {
      if (session) {
        const res_user = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user?email=${session.user?.email}`
        );
        const user = await res_user.json();
        setUserId(user.id);
      }
    };
    res_user();
  }, []);

  const handleConfirmReservation = async () => {
    if (!userId) {
      alert('ログインしてください');
      return;
    }

    try {
      for (const [index, seat] of Object.entries(seats)) {
        const ticketId = selectTicket[Number(index)];
        const seatId = selectSeat[Number(index)];

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reservations`,
          {
            user_id: userId,
            ticket_id: ticketId,
            seat_id: seatId,
            schedule_id: schedule.id,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 201) {
          // 予約が成功した場合の処理をここに記述
          router.push(`/reservation/complete`);
        } else {
          // 予約が失敗した場合の処理をここに記述
          alert(
            '予約に失敗しました: すでに予約済みの可能性があります'
          );
          console.error(
            'Error occurred while confirming reservation:',
            response
          );
        }
      }
    } catch (error) {
      console.error(
        'Error occurred while confirming reservation:',
        error
      );
      // エラーが発生した場合の処理をここに記述
      alert('予約に失敗しました');
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.confirmContainer}>
        <div css={styles.titleText}>
          情報が正しければ「予約する」を押してください
        </div>
        <PurchaseCard
          props={{
            schedule,
            tickets,
            selectTicket,
            seats,
          }}
        />
        <ReservationButtonLayout>
          <ReservationConfirmButton
            isSufficient={session ? true : false}
            onClick={handleConfirmReservation}
          />
          <ReservationButton
            isSufficient={true}
            isNext={false}
            href={`/reservation/seat?schduleId=${schedule.id}`}
            text={'チケット選択画面に戻る'}
          />
        </ReservationButtonLayout>
      </div>
    </div>
  );
};

export default ConfirmCard;
