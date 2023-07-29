import { css } from '@emotion/react';
import { Ticket } from '@/types/apiTypes';
import { addCommas } from '@/utils/addCommas';

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
};

const SelectTicketCard = ({ tickets }: Props) => {
  return (
    <label css={styles.container}>
      <select required css={styles.select}>
        <option value="" hidden>
          券種を選択してください
        </option>
        {tickets.map((ticket) => (
          <option
            key={ticket.id}
            value={ticket.id}
            css={styles.option}
          >
            {ticket.name} :{' '}
            {addCommas(Math.floor(ticket.price))}円
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectTicketCard;
