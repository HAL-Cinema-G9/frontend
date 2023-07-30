import { css } from '@emotion/react';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';

const styles = {
  button: css`
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fff;
    color: #808080;
    font-weight: bold;
    font-size: 20px;
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 10px 20px;
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
          <Image
            src={'/images/google-icon.png'}
            alt={'google-icon'}
            height={26}
            width={26}
          />
          <p>Googleでログイン</p>
        </button>
      </div>
    );
  }
  return null;
};

export default Login;
