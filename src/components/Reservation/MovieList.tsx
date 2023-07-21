import { selectDateState } from '@/recoil/elementAtom';
import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { endMovieTime } from '@/utils/endMovieTime';
import { shapingSchedule } from '@/utils/shapingSchedule';
import { startMovieTime } from '@/utils/startMovieTime';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

const styles = {
  movieListContainer: css`
    background-color: #524160;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  `,
  movieWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  titleWrapper: css`
    background-color: #555;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      padding: 10px 20px;
      color: #fff;
    }
    p {
      padding: 10px 20px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  `,
  scheduleWrapper: css`
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  screenInfo: css`
    background-color: #fff;
    padding: 10px 20px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      color: #555;
    }
  `,
  timeInfo: css`
    background-color: #fff;
    padding: 10px 20px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  time: css`
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: left;
    }
    p {
      font-size: 1rem;
      color: #555;
      text-align: right;
    }
  `,
  buyBtn: css`
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #5a5aa7;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
      font-weight: bold;
      background-color: white;
      color: #5a5aa7;
      padding: 3px 5px;
    }
    p {
      flex: 1;
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
  `,
};

type Props = {
  props: {
    schedules: Schedule[];
    seats: Seat[];
    reservations: ReservationType[];
  };
};

const MovieList = ({ props }: Props) => {
  const { schedules, seats, reservations } = props;
  const [selectedDate, setSelectedDate] =
    useRecoilState<string>(selectDateState);
  // ここでselectedDateを使って、schedulesから該当する日付のスケジュールを取得する
  const filteredSchedules = schedules.filter((schedule) => {
    const scheduleDate = new Date(schedule.date);
    scheduleDate.setHours(scheduleDate.getHours() - 9);
    const year = scheduleDate.getFullYear();
    const month = (scheduleDate.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const date = scheduleDate
      .getDate()
      .toString()
      .padStart(2, '0');
    const formattedDate = `${year}-${month}-${date}`;
    return formattedDate === selectedDate;
  });

  const showSchedule = shapingSchedule(filteredSchedules);

  console.log(showSchedule);

  return (
    <div css={styles.movieListContainer}>
      {showSchedule.map((movie) => (
        <div css={styles.movieWrapper} key={movie.id}>
          <div css={styles.titleWrapper}>
            <h2>{movie.title}</h2>
            <p>作品詳細へ</p>
          </div>
          {movie.screen.map((screen) => (
            <div
              css={styles.scheduleWrapper}
              key={screen.id}
            >
              <div css={styles.screenInfo}>
                <h2>{screen.name}</h2>
                <p>{movie.duration}分</p>
              </div>
              {screen.date.map((date, index) => (
                <div css={styles.timeInfo} key={index}>
                  <div css={styles.time}>
                    <h3>{startMovieTime(date)}</h3>
                    <p>
                      {endMovieTime(date, movie.duration)}
                    </p>
                  </div>
                  <div css={styles.buyBtn}>
                    <span>&#9675;</span>
                    <p>購入</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
