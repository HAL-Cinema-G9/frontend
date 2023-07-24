import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { css } from '@emotion/react';

const styles = {
  container: css`
    padding: 100px 0;
    background-color: #f5f5f5;
    width: 100%;
  `,
  screenWrapper: css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  `,

  seatsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,

  seatGroupWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,

  seatCardWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  seat: css`
    border: 1px solid #ccc;
    margin: 5px;
    width: 40px;
    height: 40px;
    background-color: gray;
  `,
  seatColumn: css`
    width: 40px;
    height: 40px;
    text-align: center;
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

  // 20件ごとに座席をグループ化する関数
  const groupSeats = (seats: Seat[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < seats.length; i += groupSize) {
      groups.push(seats.slice(i, i + groupSize));
    }
    return groups;
  };

  // 20件ごとの座席グループを作成
  const seatGroups = groupSeats(seats, 20);
  return (
    <div css={styles.container}>
      <h2>{schedule.movie.title}</h2>
      <div>座席一覧</div>
      <div css={styles.screenWrapper}>
        <div css={styles.seatsWrapper}>
          {seatGroups.map((group, index) => (
            <div key={index} css={styles.seatGroupWrapper}>
              {group.map((seat) => (
                <div
                  key={seat.id}
                  css={styles.seatCardWrapper}
                >
                  <span css={styles.seat}>
                    {seat.column}
                    {seat.row}
                  </span>
                  {/* seat.rowが4か16のときは隣にcolumnを表示 */}
                  {seat.row === 4 || seat.row === 16 ? (
                    <span css={styles.seatColumn}>
                      {seat.column}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenCard;
