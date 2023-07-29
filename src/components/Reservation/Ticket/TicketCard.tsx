import { selectSeatState } from '@/recoil/selectSeatAtom';
import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import SeatCard from './SeatCard';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px;
  `,
  ticketContainer: css`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  `,
  titleText: css`
    font-size: 1.8rem;
    color: #212121;
    padding: 0 20px;
  `,
  ticketWrapper: css`
    margin: 20px auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    border-top: #ccc 3px solid;
    border-bottom: #ccc 3px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  `,
  screenName: css`
    font-size: 1.5rem;
    color: #212121;
    padding: 20px 20px 0px 20px;
  `,
  seats: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    seats: Seat[];
    tickets: Ticket[];
  };
};

const TicketCard = ({ props }: Props) => {
  const { schedule, seats, tickets } = props;
  const [selectSeat, setSelectSeat] =
    useRecoilState(selectSeatState);

  return (
    <div css={styles.container}>
      <div css={styles.ticketContainer}>
        <div css={styles.titleText}>
          チケットの種類をお選びください。
        </div>
        <div css={styles.ticketWrapper}>
          <p css={styles.screenName}>
            {schedule.screen.name}
          </p>
          {selectSeat.map((seatId) => (
            <div css={styles.seats} key={seatId}>
              <SeatCard
                props={{
                  schedule,
                  seats,
                  tickets,
                  seatId,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
