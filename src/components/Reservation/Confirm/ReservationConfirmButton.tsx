import { css } from '@emotion/react';

const styles = {
  container: css`
    background-color: #fff;
    width: 50%;
    margin: 0 auto;
    border: gray 1px solid;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    color: #616161;
    font-size: 1.2rem;
    font-weight: bold;
  `,
  isNext: css`
    background-color: #b71c1c;
    color: #fff;
  `,
  isNotSufficient: css`
    background-color: #616161;
    color: #9e9e9e;
  `,
};

type Props = {
  onClick: () => void;
  isSufficient: boolean;
};

const ReservationConfirmButton = ({
  onClick,
  isSufficient,
}: Props) => {
  return (
    <>
      {isSufficient && (
        <button
          onClick={onClick}
          css={[styles.container, styles.isNext]}
        >
          予約する
        </button>
      )}
    </>
  );
};

export default ReservationConfirmButton;
