import { css } from '@emotion/react';
import { useState } from 'react';
import Logout from '../Signin/Button/LogoutButton';
import { useSession } from 'next-auth/react';
import {
  ReservationType,
  Schedule,
} from '@/types/apiTypes';
import { startMovieTime } from '@/utils/startMovieTime';
import { addCommas } from '@/utils/addCommas';
import { endMovieTime } from '@/utils/endMovieTime';

const styles = {
  container: css`
    padding: 50px;
    background-color: #181818;
    color: #fff;
  `,
  selectNavbar: css`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #616161;
    & > button {
      margin-right: 20px;
    }
  `,
  selectDetailWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    & > div {
      margin: 10px 0;
      padding: 10px 0 30px 0;
      border-bottom: 1px solid #616161;
      & > h4 {
        font-size: 1.2rem;
        font-weight: bold;
      }
      & > p {
        font-size: 1.2rem;
        color: #919191;
      }
    }
  `,
  reverseWrapper: css`
    flex-direction: column-reverse;
  `,
  reservationWrapper: css`
    margin: 10px 0;
    padding: 10px 0 30px 0;
    border-bottom: 1px solid #616161;
    & > h4 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    & > p {
      font-size: 1.2rem;
      color: #919191;
    }
  `,
};

type Props = {
  myReservations: ReservationType[];
};

const MyPageCard = ({ myReservations }: Props) => {
  const [showSelectNav, setShowSelectNav] =
    useState<string>('account');
  const { data: session, status } = useSession();

  const getFormattedDate = (schedule: Schedule) => {
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
    return formattedDate;
  };

  return (
    <div css={styles.container}>
      <div css={styles.selectNavbar}>
        <button
          css={
            showSelectNav === 'account'
              ? { color: '#fff' }
              : { color: '#919191' }
          }
          onClick={() => setShowSelectNav('account')}
        >
          アカウント
        </button>
        <button
          css={
            showSelectNav === 'reservationList'
              ? { color: '#fff' }
              : { color: '#919191' }
          }
          onClick={() =>
            setShowSelectNav('reservationList')
          }
        >
          予約リスト
        </button>
      </div>
      {showSelectNav === 'account' && (
        <div css={styles.selectDetailWrapper}>
          <div>
            <h4>ユーザー名</h4>
            <p>{session?.user?.name}</p>
          </div>
          <div>
            <h4>メールアドレス</h4>
            <p>{session?.user?.email}</p>
          </div>
          <div>
            <h4>購入履歴</h4>
          </div>
          <div>
            <Logout />
          </div>
        </div>
      )}
      {showSelectNav === 'reservationList' && (
        <div
          css={[
            styles.selectDetailWrapper,
            styles.reverseWrapper,
          ]}
        >
          {myReservations.map((reservation) => (
            <div
              key={reservation.id}
              css={styles.reservationWrapper}
            >
              <h4>{reservation.schedule.movie.title}</h4>
              <p>
                座席：{reservation.seat.column}
                {reservation.seat.row}
              </p>
              <p>
                上映時刻：
                {getFormattedDate(reservation.schedule)}
              </p>
              <p>
                スクリーン：
                {reservation.schedule.screen.name}
              </p>
              <p>チケット：{reservation.ticket.name}</p>
              <p>
                金額：
                {addCommas(
                  Math.floor(reservation.ticket.price)
                )}
                円
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPageCard;
