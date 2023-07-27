import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 80%;
    margin: 50px auto;
    padding: 40px;
    border-top: 3px solid #ccc;
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
