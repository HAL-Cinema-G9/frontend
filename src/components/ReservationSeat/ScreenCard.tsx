import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { groupSeats } from '@/utils/groupSeats';
import { css } from '@emotion/react';
import PurchaseCard from './PurchaseCard';
import SeatManual from './SeatManual';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px;
  `,
  screenContainer: css`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  `,
  purchaseWrapper: css`
    width: 100%;
    max-width: 1200px;
    margin: 20px auto 0;
    background-color: #fff;
  `,
  titleText: css`
    font-size: 1.8rem;
    color: #212121;
    padding: 20px;
  `,
  screenWrapper: css`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    background-color: #fff;
  `,
  seatsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 70px;
    padding: 50px;
    color: #fff;
    background-color: #a9a9a9;
    border: 3px solid #000;
  `,
  screenName: css`
    width: 80%;
    text-align: center;
    font-size: 1.8rem;
    padding: 20px;
    border-top: 6px solid #fff;
  `,
  seatGroupWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `,
  seatCardWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  seat: css`
    border: 1px solid #212121;
    border-radius: 2px;
    margin: 6px 1px;
    width: 30px;
    height: 30px;
    color: #212121;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  `,
  seatColumn: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
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

  // screen.nameに大が含まれているときは20件ごとの座席グループを作成
  // screen.nameに中が含まれているときは12件ごとの座席グループを作成
  // screen.nameに小が含まれているときは10件ごとの座席グループを作成
  let seatGroups: Seat[][] = [];
  if (schedule.screen.name.includes('大')) {
    seatGroups = groupSeats(seats, 20);
  } else if (schedule.screen.name.includes('中')) {
    seatGroups = groupSeats(seats, 12);
  } else if (schedule.screen.name.includes('小')) {
    seatGroups = groupSeats(seats, 10);
  }

  return (
    <div css={styles.container}>
      <div css={styles.purchaseWrapper}>
        <PurchaseCard schedule={schedule} />
      </div>
      <div css={styles.screenContainer}>
        <div css={styles.titleText}>
          お好きな座席をお選びください。
        </div>
        <div css={styles.screenWrapper}>
          <SeatManual />
          <div css={styles.seatsWrapper}>
            <h5 css={styles.screenName}>
              {schedule.screen.name}
            </h5>
            {seatGroups.map((group, index) => (
              <div
                key={index}
                css={styles.seatGroupWrapper}
              >
                {group.map((seat) => (
                  <div
                    key={seat.id}
                    css={styles.seatCardWrapper}
                  >
                    <span css={styles.seat}>
                      {seat.column}
                      {seat.row}
                    </span>

                    {schedule.screen.name.includes('大') &&
                      (seat.row === 4 ||
                        seat.row === 16) && (
                        <span css={styles.seatColumn}>
                          {seat.column}
                        </span>
                      )}

                    {schedule.screen.name.includes('中') &&
                      (seat.row === 2 ||
                        seat.row === 10) && (
                        <span css={styles.seatColumn}>
                          {seat.column}
                        </span>
                      )}

                    {schedule.screen.name.includes('小') &&
                      (seat.row === 2 ||
                        seat.row === 8) && (
                        <span css={styles.seatColumn}>
                          {seat.column}
                        </span>
                      )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCard;
