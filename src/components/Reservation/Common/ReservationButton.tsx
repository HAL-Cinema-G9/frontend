import { css } from '@emotion/react';
import Link from 'next/link';

type Props = {
  isNext: boolean;
  href: string;
  text: string;
};
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
};
const ReservationButton = ({
  isNext,
  href,
  text,
}: Props) => {
  return (
    <Link
      href={href}
      css={[styles.container, isNext && styles.isNext]}
    >
      {text}
    </Link>
  );
};

export default ReservationButton;
