import Login from '@/components/Signin/Button/LoginButton';
import Logout from '@/components/Signin/Button/LogoutButton';
import { css } from '@emotion/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const styles = {
  container: css`
    width: 100%;
    padding: 20px;
  `,
  title: css`
    font-size: 1.1rem;
    color: #fff;
    background-color: #424242;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  `,
  detail: css`
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #212121;
  `,
  signInWrapper: css`
    margin-top: 20px;
  `,
  signOutWrapper: css`
    margin-top: 20px;
  `,
};

const IsSignInCard = () => {
  const { data: session, status } = useSession();

  return (
    <div css={styles.container}>
      <div css={styles.title}>
        <Image
          src={'/images/member.png'}
          alt={'会員'}
          height={30}
          width={50}
        />
        <h2>会員登録</h2>
      </div>
      <div css={styles.detail}>
        {!session ? (
          <div>
            <h3>・ソーシャルアカウントでログイン</h3>
            <p>※次に進むためにはログインしてください</p>
            <div css={styles.signInWrapper}>
              <Login />
            </div>
          </div>
        ) : (
          <div>
            <h3>
              ・ログイン済みアカウントが正しければ先にお進みください
            </h3>
            <br />
            <p>メールアドレス：{session.user?.email}</p>
            <p>ユーザー名：{session.user?.name}</p>
            <br />
            <p>
              ※ログアウトする場合は下のボタンを押してください
            </p>
            <div css={styles.signOutWrapper}>
              <Logout />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IsSignInCard;
