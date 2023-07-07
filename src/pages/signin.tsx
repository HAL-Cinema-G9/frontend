import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

const Signin = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        <h1>ログインページ</h1>

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
    </>
  );
};

export default Signin;
