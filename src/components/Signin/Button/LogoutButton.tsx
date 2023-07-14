import { css } from '@emotion/react';
import { useSession, signOut } from 'next-auth/react';

const styles = {
  button: css`
    background-color: lightgray;
  `,
};

const Logout = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <button
          onClick={() => signOut()}
          css={styles.button}
        >
          ログアウト
        </button>
      </div>
    );
  }
  return null;
};

export default Logout;
