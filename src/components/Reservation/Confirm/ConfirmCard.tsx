import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { endMovieTime } from '@/utils/endMovieTime';
import { startMovieTime } from '@/utils/startMovieTime';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    tickets: Ticket[];
  };
};

const ConfirmCard = ({ props }: Props) => {
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

  console.log(schedule);
  const scheduleDate = new Date(schedule.date);
  const year = scheduleDate.getFullYear();
  const month = (scheduleDate.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const date = scheduleDate
    .getDate()
    .toString()
    .padStart(2, '0');

  const formattedDate = `${year}年${month}月${date}日（水）${startMovieTime(
    scheduleDate
  )}~${endMovieTime(
    scheduleDate,
    schedule.movie.duration
  )}`;

  const [seats, setSeats] = useState<Seat[]>([]);
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
  }, []);

  return (
    <div css={styles.container}>
      <p>作品</p>
      <h3>{schedule.movie.title}</h3>
      <p>日時</p>
      <h3>{formattedDate}</h3>
      <p>スクリーン</p>
      <h3>{schedule.screen.name}</h3>
      <p>座席</p>
      <h3>
        {seats.map((seat, index) => (
          <div key={seat.id}>
            <p>
              {seat.column}
              {seat.row}
            </p>
            <p>
              {/* チケットの名前と金額 */}
              {
                tickets.find(
                  (ticket) =>
                    ticket.id === selectTicket[index]
                )?.name // ここでチケットの名前を取得する
              }
              :
              {
                tickets.find(
                  (ticket) =>
                    ticket.id === selectTicket[index]
                )?.price // ここでチケットの金額を取得する
              }
            </p>
          </div>
        ))}
      </h3>
    </div>
  );
};

export default ConfirmCard;
