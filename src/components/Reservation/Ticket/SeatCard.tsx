import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import SelectTicketCard from './SelectTicketCard';
import { Schedule, Seat, Ticket } from '@/types/apiTypes';
import { useRecoilState } from 'recoil';
import { selectSeatState } from '@/recoil/selectSeatAtom';

const styles = {
  container: css`
    background-color: #fff;
    width: 100%;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  seatWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-right: 50px;
    border-right: 1px solid #ccc;
  `,
  seatName: css`
    color: #212121;
    font-weight: bold;
  `,
};

type Props = {
  props: {
    schedule: Schedule;
    seats: Seat[];
    tickets: Ticket[];
    seatId: number;
  };
};

const SeatCard = ({ props }: Props) => {
  const { schedule, seats, tickets, seatId } = props;

  //seatと一致するseatを取得
  const selectSeat = seats.find((s) => seatId == s.id);

  return (
    <div css={styles.container}>
      <div css={styles.seatWrapper}>
        <Image
          src={'/images/seat-true.gif'}
          alt={''}
          height={60}
          width={50}
        />
        <p css={styles.seatName}>
          {selectSeat?.column}
          {selectSeat?.row}
        </p>
      </div>
      <SelectTicketCard tickets={tickets} />
    </div>
  );
};

export default SeatCard;
