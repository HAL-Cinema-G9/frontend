import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { css } from '@emotion/react';
import SeatCard from './SeatCard';
import ReservationButtonLayout from '../Common/ReservationButtonLayout';
import ReservationButton from '../Common/ReservationButton';
import IsSignInCard from './IsSignInCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { selectTicketState } from '@/recoil/selectSeatAtom';
import { useEffect } from 'react';
import { addCommas } from '@/utils/addCommas';

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
  totalPriceWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #212121;
  `,
  totalPrice: css`
    display: flex;
    align-items: center;
    gap: 5px;
    h1 {
      font-size: 2rem;
    }
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
  const router = useRouter();
  const strSelectSeat = router.query.seatId;
  const selectSeat: number[] = strSelectSeat
    ? strSelectSeat
        .toString()
        .split(',')
        .map((seatId) => Number(seatId))
    : [];
  const { data: session, status } = useSession();
  const [selectTicket, setSelectTicket] = useRecoilState(
    selectTicketState
  );

  useEffect(() => {
    const arrTicket = selectSeat.map(() => '');
    setSelectTicket(arrTicket);
  }, []);

  // 合計金額を計算
  let totalPrice = 0;
  selectTicket.forEach((ticketId) => {
    const ticket = tickets.find((t) => t.id == ticketId);
    if (ticket) {
      totalPrice += Number(ticket.price);
    }
  });

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
          {selectSeat.map((seatId, index) => (
            <div css={styles.seats} key={seatId}>
              <SeatCard
                props={{
                  index,
                  schedule,
                  seats,
                  tickets,
                  seatId,
                }}
              />
            </div>
          ))}
          <div css={styles.totalPriceWrapper}>
            <h2>合計</h2>
            <div css={styles.totalPrice}>
              <h1>{addCommas(totalPrice)}</h1>
              <h2>円</h2>
            </div>
          </div>
        </div>
        {/* signinしているか */}
        <IsSignInCard />
        <ReservationButtonLayout>
          <ReservationButton
            // selectTicketの配列に空文字が含まれていないか
            isSufficient={
              !selectTicket.includes('') && session
                ? true
                : false
            }
            isNext={true}
            href={`/reservation/confirm?scheduleId=${schedule.id}&seatId=${selectSeat}&ticketId=${selectTicket}`}
            text={'確認画面へ'}
          />
          <ReservationButton
            isSufficient={true}
            isNext={false}
            href={`/reservation/seat?scheduleId=${schedule.id}`}
            text={'座席選択画面に戻る'}
          />
        </ReservationButtonLayout>
      </div>
    </div>
  );
};

export default TicketCard;
