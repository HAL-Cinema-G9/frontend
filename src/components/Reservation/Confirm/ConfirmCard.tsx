import { css } from '@emotion/react';

const styles = {
  container: css`
    background-color: #f5f5f5;
    width: 100%;
    padding: 20px;
  `,
};

const ConfirmCard = () => {
  return <div css={styles.container}>ConfirmCard</div>;
};

export default ConfirmCard;
