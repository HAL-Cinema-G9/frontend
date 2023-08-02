import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { css } from '@emotion/react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReservationButton from '@/components/Reservation/Common/ReservationButton';
import ReservationButtonLayout from '@/components/Reservation/Common/ReservationButtonLayout';

const styles = {
  container: css`
    background-color: #f5f5f5;
    padding: 70px 0;
  `,
  completeBox: css`
    width: 800px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    color: #616161;
    border: #ccc 3px solid;
  `,
  completeIcon: css`
    font-size: 5rem;
    color: #4caf50;
  `,
  buttonWrapper: css`
    width: 1200px;
    margin: 0 auto;
  `,
};

const Complete = () => {
  return (
    <main>
      <Navbar />
      <div css={styles.container}>
        <div css={styles.completeBox}>
          <CheckCircleOutlineIcon
            css={styles.completeIcon}
          />
          <h1>予約が完了しました！</h1>
        </div>
        <div css={styles.buttonWrapper}>
          <ReservationButtonLayout>
            <ReservationButton
              href="/mypage"
              text="マイページで確認する"
              isSufficient={true}
              isNext={true}
            />
          </ReservationButtonLayout>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Complete;
