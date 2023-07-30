import { css } from '@emotion/react';
import { useSession, signOut } from 'next-auth/react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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

const Logout = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <button
          onClick={() => signOut()}
          css={styles.button}
        >
          <ExitToAppIcon />
          <p>ログアウト</p>
        </button>
      </div>
    );
  }
  return null;
};

export default Logout;
