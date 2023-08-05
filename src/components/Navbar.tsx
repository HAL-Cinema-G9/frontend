import { css } from '@emotion/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  container: css`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
    font-size: 1.5rem;
  `,
  logoWrapper: css`
    font-weight: bold;
    margin: 0 20px;
    font-size: 1.8rem;
  `,
  navWrapper: css`
    ul {
      display: flex;
      li {
        cursor: pointer;
        border-right: 1px solid white;
        padding: 0px 20px;
        &:last-child {
          border-right: none;
        }
      }
    }
  `,
  accountWrapper: css`
    display: flex;
    align-items: center;
  `,
  accountImage: css`
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  `,
  signInLink: css`
    font-weight: bold;
    border: 2px solid red;
    border-radius: 2rem;
    padding: 5px 10px;
    margin: 0 20px;
  `,
};

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div css={styles.container}>
      <div css={styles.logoWrapper}>
        <Link href={'/'}>HALCINEMA</Link>
      </div>
      <nav css={styles.navWrapper}>
        <ul>
          <li>
            <Link href={'/movie'}>映画一覧</Link>
          </li>
          <li>
            <Link href={'/reservation'}>
              上映スケジュール
            </Link>
          </li>
          <li>
            <Link href={'/fee'}>料金表</Link>
          </li>
          <li>
            <Link href={'/facility'}>施設情報</Link>
          </li>
        </ul>
      </nav>
      {session && session.user?.image && (
        <Link href={'/mypage'} css={styles.accountWrapper}>
          <Image
            src={session.user.image}
            alt={'ログインユーザーアイコン'}
            height={60}
            width={60}
            css={styles.accountImage}
          />
        </Link>
      )}
      {!session && (
        <Link href={'/signin'} css={styles.signInLink}>
          会員登録
        </Link>
      )}
    </div>
  );
};

export default Navbar;
