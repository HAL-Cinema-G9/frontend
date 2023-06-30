import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { css } from '@emotion/react';

const styles = {
  topinfo_container: css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 700px;
    width: 100%;

    background-color: lightblue;
  `,
  topinfo_item: css`
    height: 80%;
    width: 25%;

    background-color: lightgray;
  `,

  middleContent_container: css`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    height: 100%;
    width: 90%;

    margin: 0 auto;

    background-color: gray;
  `,
  leftContents_box: css`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 55%;

    background-color: red;
  `,
  rightContents_box: css`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 45%;

    background-color: red;
  `,
  leftContent_box: css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    background-color: dimgray;
  `,

  left_header: css`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100px;
    width: 60%;

    margin-right: auto;

    background-color: lightgray;
  `,
  left_descriptionBox: css`
    display: flex;
    flex-direction: column;

    height: 400px;
    width: 50%;

    background-color: lightgray;
  `,
  left_descriptionTitle: css`
    height: 30%;
    width: 100%;

    background-color: darkgray;
  `,
  left_description: css`
    height: 70%;
    width: 100%;

    background-color: dimgray;
  `,
  left_movieImage: css`
    height: 400px;
    width: 50%;

    background-color: lightgray;
  `,
  right_header: css`
    height: 200px;
    width: 100%;

    background-color: lightgray;
  `,
  right_menuImage: css`
    height: 730px;
    width: 100%;

    background-color: dimgray;
  `,
  right_menuTitle: css`
    height: 70px;
    width: 100%;

    background-color: lightgray;
  `,
  right_menuDescription: css`
    height: 300px;
    width: 100%;

    background-color: dimgray;
  `,
};

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <div css={styles.topinfo_container}>
          <div css={styles.topinfo_item}>映画</div>
          <div css={styles.topinfo_item}>映画</div>
          <div css={styles.topinfo_item}>映画</div>
        </div>

        <div css={styles.middleContent_container}>
          <div css={styles.leftContents_box}>
            <div css={styles.leftContent_box}>
              <div css={styles.left_header}>HEADER</div>
            </div>

            <div css={styles.leftContent_box}>
              <div css={styles.left_descriptionBox}>
                <div css={styles.left_descriptionTitle}>
                  TITLE
                </div>
                <div css={styles.left_description}>
                  DESCRIPTION
                </div>
              </div>

              <div css={styles.left_movieImage}>IMAGE</div>
            </div>

            <div css={styles.leftContent_box}>
              <div css={styles.left_movieImage}>IMAGE</div>

              <div css={styles.left_descriptionBox}>
                <div css={styles.left_descriptionTitle}>
                  TITLE
                </div>
                <div css={styles.left_description}>
                  DESCRIPTION
                </div>
              </div>
            </div>

            <div css={styles.leftContent_box}>
              <div css={styles.left_descriptionBox}>
                <div css={styles.left_descriptionTitle}>
                  TITLE
                </div>
                <div css={styles.left_description}>
                  DESCRIPTION
                </div>
              </div>

              <div css={styles.left_movieImage}>IMAGE</div>
            </div>
          </div>

          <div css={styles.rightContents_box}>
            <div css={styles.right_header}>HEADER</div>
            <div css={styles.right_menuImage}>IMAGE</div>
            <div css={styles.right_menuTitle}>TITLE</div>
            <div css={styles.right_menuDescription}>
              DESCRIPTION
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
