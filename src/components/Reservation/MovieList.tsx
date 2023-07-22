import { selectDateState } from '@/recoil/elementAtom';
import {
  ReservationType,
  Schedule,
  Seat,
} from '@/types/apiTypes';
import { shapingSchedule } from '@/utils/shapingSchedule';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import MovieCard from './MovieCard';

const styles = {
  movieListContainer: css`
    background-color: #524160;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
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

  return (
    <div css={styles.movieListContainer}>
      {showSchedule.map((movie) => (
        <MovieCard
          props={{
            movie,
            seats,
            reservations,
          }}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
