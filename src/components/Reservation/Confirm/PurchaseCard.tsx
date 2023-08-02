import { css } from '@emotion/react';
import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { endMovieTime } from '@/utils/endMovieTime';
import { startMovieTime } from '@/utils/startMovieTime';
import { addCommas } from '@/utils/addCommas';
import { useSession } from 'next-auth/react';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    color: #212121;
  `,
  header: css`
    background-color: #ccc;
    width: 100%;
    padding: 10px;
  `,
  main: css`
    padding: 10px;
    background-color: #fff;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    tickets: Ticket[];
    selectTicket: number[];
    seats: Seat[];
  };
};

const PurchaseCard = ({ props }: Props) => {
  const { data: session, status } = useSession();
  const { schedule, tickets, selectTicket, seats } = props;
  // formattedDate: 例 2023年7月26日（水）15:20∼17:35
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

  let selectedTicket: Ticket | undefined;
  let totalPrice = 0;
  {
    seats.map((seat, index) => {
      selectedTicket = tickets.find(
        (ticket) => ticket.id === selectTicket[index]
      );
      if (selectedTicket) {
        totalPrice += Math.floor(selectedTicket.price);
      }
    });
  }

  return (
    <div css={styles.container}>
      <p css={styles.header}>ご購入者情報</p>
      <div css={styles.main}>
        <p>メールアドレス：{session?.user?.email}</p>
        <p>ユーザー名：{session?.user?.name}</p>
      </div>
      <p css={styles.header}>ご購入内容</p>
      <div css={styles.main}>
        <p>作品</p>
        <h3>{schedule.movie.title}</h3>
        <p>日時</p>
        <h3>{formattedDate}</h3>
        <p>スクリーン</p>
        <h3>{schedule.screen.name}</h3>
        <p>座席(金額)</p>
        <h3>
          {seats.map((seat) => (
            <div key={seat.id}>
              <p>
                <span>
                  {seat.column}
                  {seat.row} : {/* チケットの名前と金額 */}
                </span>
                {selectedTicket && (
                  <span>
                    {selectedTicket.name}(
                    {addCommas(
                      Math.floor(selectedTicket.price)
                    )}
                    円)
                  </span>
                )}
              </p>
            </div>
          ))}
        </h3>
        <p>合計金額</p>
        <h3>{addCommas(totalPrice)}円</h3>
      </div>
    </div>
  );
};

export default PurchaseCard;
