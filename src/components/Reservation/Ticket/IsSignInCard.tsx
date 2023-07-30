import Login from '@/components/Signin/Button/LoginButton';
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
        <h3>・ソーシャルアカウントでログイン</h3>
        <p>※次に進むためにはログインしてください</p>
        <Login />
      </div>
    </div>
  );
};

export default IsSignInCard;
