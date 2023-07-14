import { useSession } from 'next-auth/react';
import { css } from '@emotion/react';
import Login from '@/components/Signin/Login';
import Logout from '@/components/Signin/Logout';

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

const MainInfo = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <div css={styles.container}>
        <div css={styles.content}>
          {session ? (
            <div>
              <p>セッションの期限：{session.expires}</p>
              <p>ようこそ、{session.user?.name}さん</p>
              {session.user?.image && (
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
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
