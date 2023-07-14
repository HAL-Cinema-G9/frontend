import { css } from '@emotion/react';
import { useSession, signIn } from 'next-auth/react';

const styles = {
  button: css`
    background-color: lightgray;
  `,
};

const Login = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status !== 'authenticated') {
    return (
      <div>
        <button
          css={styles.button}
          onClick={() =>
            signIn('google', { prompt: 'login' })
          }
        >
          Googleでログイン
        </button>
      </div>
    );
  }
  return null;
};

export default Login;
