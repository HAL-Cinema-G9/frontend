import {
  ReservationType,
  Seat,
  ShapedScheduleMovie,
} from '@/types/apiTypes';
import { endMovieTime } from '@/utils/endMovieTime';
import { startMovieTime } from '@/utils/startMovieTime';
import { css } from '@emotion/react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Image from 'next/image';
import { useState } from 'react';

const styles = {
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
  movieDetailWrapper: css`
    background-color: #555;
    padding: 10px 20px;
    color: #fff;
    display: flex;
    gap: 20px;
  `,
  movieDetailLeftWrapper: css`
    border-radius: 5px;
    object-fit: cover;
    flex: 1;
  `,
  movieDetailRightWrapper: css`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    p {
      font-size: 14px;
      line-height: 1.5;
      display: flex;
      gap: 10px;
    }
  `,
};

type Props = {
  props: {
    movie: ShapedScheduleMovie;
    seats: Seat[];
    reservations: ReservationType[];
  };
};

const MovieCard = ({ props }: Props) => {
  const { movie, seats, reservations } = props;
  const [isShowDetail, setIsShowDetail] =
    useState<boolean>(false);

  return (
    <div css={styles.movieWrapper}>
      <div css={styles.titleWrapper}>
        <h2>{movie.title}</h2>
        {isShowDetail ? (
          <AddCircleOutlineIcon
            onClick={() => setIsShowDetail(!isShowDetail)}
          />
        ) : (
          <RemoveCircleOutlineIcon
            onClick={() => setIsShowDetail(!isShowDetail)}
          />
        )}
      </div>
      {isShowDetail && (
        <div css={styles.movieDetailWrapper}>
          <Image
            src={movie.thumbnail}
            alt={movie.title}
            height={200}
            width={200}
            css={styles.movieDetailLeftWrapper}
          />
          <div css={styles.movieDetailRightWrapper}>
            <p>
              {movie.title} 上映時間：{movie.duration}分
            </p>
            <p>{movie.description}</p>
            <div>
              <p>
                <span>監督</span>
                <span>{movie.director}</span>
              </p>
              <p>
                <span>出演</span>
                <span>{movie.actors}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {movie.screen.map((screen) => (
        <div css={styles.scheduleWrapper} key={screen.id}>
          <div css={styles.screenInfo}>
            <h2>{screen.name}</h2>
            <p>{movie.duration}分</p>
          </div>
          {screen.date.map((date, index) => (
            <div css={styles.timeInfo} key={index}>
              <div css={styles.time}>
                <h3>{startMovieTime(date)}</h3>
                <p>{endMovieTime(date, movie.duration)}</p>
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
  );
};

export default MovieCard;
