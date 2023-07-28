import { selectSeatState } from '@/recoil/selectSeatAtom';
import { Schedule, Seat } from '@/types/apiTypes';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {
  props: {
    schedule: Schedule;
    seats: Seat[];
  };
};

const TicketCard = ({ props }: Props) => {
  const [selectSeat, setSelectSeat] =
    useRecoilState(selectSeatState);

  return <div>TicketCard</div>;
};

export default TicketCard;
