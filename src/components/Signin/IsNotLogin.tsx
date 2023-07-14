import { useSession } from 'next-auth/react';
import { css } from '@emotion/react';
import Login from './Button/LoginButton';

const styles = {
  template: css`
    background-color: dimgray;
  `,
};

const IsNotLogin = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>
        あなたはログインしていません。Googleでログインしてください
      </p>
      <Login />
    </div>
  );
};

export default IsNotLogin;
