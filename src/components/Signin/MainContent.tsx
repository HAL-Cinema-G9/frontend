import { useSession } from 'next-auth/react';
import { css } from '@emotion/react';
import IsLogin from './IsLogin';
import IsNotLogin from './IsNotLogin';

const styles = {
  container: css`
    height: 1000px;
    display: flex;
    justify-content: center;

    background-color: dimgray;
  `,
  content: css`
    height: 550px;
    width: 800px;
    margin-top: 100px;
    padding: 20px;

    background-color: white;
  `,
};

const MainContent = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <div css={styles.container}>
        <div css={styles.content}>
          {session ? <IsLogin /> : <IsNotLogin />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
