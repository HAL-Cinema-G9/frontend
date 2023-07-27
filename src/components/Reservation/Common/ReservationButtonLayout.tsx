import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    margin: 50px 0;
    padding: 40px 0;
    border-top: 3px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  `,
};

interface ReservationButtonLayoutProps {
  children: ReactNode; // ReactNodeは任意のReact要素を表します
}

const ReservationButtonLayout: React.FC<
  ReservationButtonLayoutProps
> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};

export default ReservationButtonLayout;
