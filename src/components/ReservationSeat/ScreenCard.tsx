import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { css } from '@emotion/react';

const styles = {
  container: css`
    padding: 100px 0;
    background-color: #524160;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    seats: Seat[];
    reservations: ReservationType[];
  };
};

const ScreenCard = ({ props }: Props) => {
  const { schedule, seats, reservations } = props;
  return (
    <div>
      <h2>{schedule.movie.title}</h2>
      <div>座席一覧</div>
      {seats.map((seat) => (
        <div key={seat.id}>
          <div>
            column:{seat.column},row:{seat.row}
          </div>
          <div>
            {/* reservationsの中にseat.idと同じモノが合ったらfalse */}
            {reservations.some(
              (reservation) =>
                reservation.seat_id === seat.id
            ) ? (
              <div>予約済み</div>
            ) : (
              <div>空席</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScreenCard;
