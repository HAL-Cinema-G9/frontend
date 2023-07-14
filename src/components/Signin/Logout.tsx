import { css } from '@emotion/react';
import { useSession, signOut } from 'next-auth/react';

const styles = {
  container: css`
    height: 100px;
    width: 100%;
    display: flex;
    background-color: gray;
  `,
  menu: css`
    background-color: red;
  `,
  logo: css`
    background-color: blue;
    margin: 0 auto;
  `,
  account: css`
    background-color: red;
  `,
  search: css`
    background-color: blue;
  `,
};

const Logout = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <button onClick={() => signOut()}>
          ログアウト
        </button>
      </div>
    );
  }
  return null;
};

export default Logout;
