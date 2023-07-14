import { useSession } from 'next-auth/react';
import { css } from '@emotion/react';
import Logout from './Button/LogoutButton';

const styles = {
  template: css`
    background-color: dimgray;
  `,
};

const IsLogin = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <p>セッションの期限：{session?.expires}</p>
      <p>ようこそ、{session?.user?.name}さん</p>
      {session?.user?.image && (
        <img
          src={session.user?.image}
          alt=""
          style={{ borderRadius: '50px' }}
        />
      )}
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default IsLogin;
