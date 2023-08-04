import { css } from '@emotion/react';
import { useState } from 'react';
import Logout from '../Signin/Button/LogoutButton';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const styles = {
  container: css`
    padding: 50px;
    background-color: #181818;
    color: #fff;
  `,
  selectNavbar: css`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #616161;
    & > button {
      margin-right: 20px;
    }
  `,
  selectDetailWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    & > div {
      margin: 10px 0;
      padding: 10px 0 30px 0;
      border-bottom: 1px solid #616161;
      & > h4 {
        font-size: 1.2rem;
        font-weight: bold;
      }
      & > p {
        font-size: 1.2rem;
        color: #919191;
      }
    }
  `,
};

const MyPageCard = () => {
  const [showSelectNav, setShowSelectNav] =
    useState<string>('account');
  const { data: session, status } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/');
  }

  return (
    <div css={styles.container}>
      <div css={styles.selectNavbar}>
        <button
          css={
            showSelectNav === 'account'
              ? { color: '#fff' }
              : { color: '#919191' }
          }
          onClick={() => setShowSelectNav('account')}
        >
          アカウント
        </button>
        <button
          css={
            showSelectNav === 'reservationList'
              ? { color: '#fff' }
              : { color: '#919191' }
          }
          onClick={() =>
            setShowSelectNav('reservationList')
          }
        >
          予約リスト
        </button>
      </div>
      {showSelectNav === 'account' && (
        <div css={styles.selectDetailWrapper}>
          <div>
            <h4>ユーザー名</h4>
            <p>{session?.user?.name}</p>
          </div>
          <div>
            <h4>メールアドレス</h4>
            <p>{session?.user?.email}</p>
          </div>
          <div>
            <h4>購入履歴</h4>
          </div>
          <div>
            <Logout />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPageCard;
