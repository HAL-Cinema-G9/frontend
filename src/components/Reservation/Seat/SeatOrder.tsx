import { selectSeatState } from '@/recoil/selectSeatAtom';
import { Seat } from '@/types/apiTypes';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

const styles = {
  container: css`
    background-color: #000000cc;
    padding: 15px;
  `,
  seatOrderSelectWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  selectSeat: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b71c1c;
    font-weight: bold;
    padding: 5px 10px;
    background-color: #ececec;
    /* 横にborder 最後は付けない */
    border-right: 1px solid #ccc;
    &:last-child {
      border-right: none;
    }
  `,
  selectSeatImg: css``,
  selectSeatName: css`
    min-height: 20px;
    font-size: 0.8rem;
  `,
  resetBtn: css`
    font-size: 0.8rem;
    margin-left: 20px;
    padding: 5px 10px;
    background-color: #fff;
    color: #0d47a1;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    height: 60px;
    cursor: pointer;
  `,
};

type Props = {
  seats: Seat[];
};

const SeatOrder = ({ seats }: Props) => {
  const [selectSeat, setSelectSeat] =
    useRecoilState(selectSeatState);
  return (
    <div css={styles.container}>
      <div css={styles.seatOrderSelectWrapper}>
        {selectSeat.map((seat_id) => (
          <div key={seat_id} css={styles.selectSeat}>
            <Image
              src={'/images/seat-true.gif'}
              alt={'座席アイコン'}
              height={30}
              width={25}
              css={styles.selectSeatImg}
            />
            <p css={styles.selectSeatName}>
              {seats
                .filter((seat) => seat.id === seat_id)
                .map((seat) => seat.column + seat.row)}
            </p>
          </div>
        ))}
        {/* 6-selectSeat.length()だけ繰り返し表示 */}
        {Array.from(
          { length: 6 - selectSeat.length },
          (_, i) => (
            <div key={i} css={styles.selectSeat}>
              <Image
                src={'/images/seat-false.gif'}
                alt={'座席アイコン'}
                height={30}
                width={25}
                css={styles.selectSeatImg}
              />
              <p css={styles.selectSeatName}></p>
            </div>
          )
        )}
        <button
          onClick={() => setSelectSeat([])}
          css={styles.resetBtn}
        >
          解除
        </button>
      </div>
    </div>
  );
};

export default SeatOrder;
