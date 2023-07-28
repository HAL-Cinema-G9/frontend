import { css } from '@emotion/react';
import Link from 'next/link';

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
  isSufficient: boolean; // 必要な値が入力されているかどうか
  isNext: boolean; // 次へボタンかどうか
  href: string; // ボタンのリンク先
  text: string; // ボタンのテキスト
};

const ReservationButton = ({
  isSufficient,
  isNext,
  href,
  text,
}: Props) => {
  return (
    <>
      {isSufficient ? (
        <Link
          href={href}
          css={[styles.container, isNext && styles.isNext]}
        >
          {text}
        </Link>
      ) : (
        <p css={[styles.container, styles.isNotSufficient]}>
          {text}
        </p>
      )}
    </>
  );
};

export default ReservationButton;
