import { css } from '@emotion/react';
import { Ticket } from '@/types/apiTypes';
import { addCommas } from '@/utils/addCommas';
import { selectTicketState } from '@/recoil/selectSeatAtom';
import { useRecoilState } from 'recoil';
import { ReactElement, useEffect, useState } from 'react';

const styles = {
  container: css`
    width: 100%;
    max-width: 500px;
    padding: 20px;
  `,
  select: css`
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: #0d47a1;
    cursor: pointer;
  `,
  option: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 1.5rem;
    color: #212121;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  `,
};

type Props = {
  tickets: Ticket[];
  index: number;
};

const SelectTicketCard = ({ tickets, index }: Props) => {
  const [selectTicket, setSelectTicket] = useRecoilState(
    selectTicketState
  );
  const [showFlg, setShowFlg] = useState<boolean>(false);
  const [selectedTicketId, setSelectedTicketId] =
    useState<string>('');

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedId = event.target.value;
    setSelectedTicketId(selectedId);
  };

  useEffect(() => {
    // レンダリング後に選択したオプションの値をselectTicketステートに反映する
    const updatedSelectTicket = [...selectTicket];
    updatedSelectTicket[index] =
      selectedTicketId === ''
        ? ''
        : Number(selectedTicketId);
    setSelectTicket(updatedSelectTicket);
    setShowFlg(true);
  }, [selectedTicketId]);

  return (
    <div css={styles.container}>
      <select
        css={styles.select}
        value={selectedTicketId}
        onChange={handleSelectChange}
      >
        <option value="" hidden>
          券種を選択してください
        </option>
        {showFlg &&
          tickets.map((ticket, index) => (
            <option
              key={index}
              value={ticket.id}
              css={styles.option}
            >
              {ticket.name} :{' '}
              {addCommas(Math.floor(ticket.price))}円
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectTicketCard;
