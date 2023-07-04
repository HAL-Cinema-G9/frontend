import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { isMenuClickedState } from '@/recoil/elementAtom';

const styles = {
  openBtn4: css`
    position: relative;
    background: #d54884;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  `,

  span: css`
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 2px;
    border-radius: 5px;
    background: #fff;
    width: 45%;

    &:nth-of-type(1) {
      top: 13px;
    }

    &:nth-of-type(2) {
      top: 19px;
    }

    &:nth-of-type(3) {
      top: 25px;

      &::after {
        content: 'Menu';
        position: absolute;
        top: 5px;
        left: -2px;
        color: #fff;
        font-size: 0.6rem;
        text-transform: uppercase;
      }
    }
  `,
  active: css`
    span:nth-of-type(1) {
      top: 14px;
      left: 18px;
      transform: translateY(6px) rotate(-45deg);
      width: 30%;
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      top: 26px;
      left: 18px;
      transform: translateY(-6px) rotate(45deg);
      width: 30%;

      &::after {
        content: 'Close';
        transform: translateY(0) rotate(-45deg);
        top: 5px;
        left: 4px;
      }
    }
  `,
};

const Burger = () => {
  // to change burger classes
  const [isMenuClicked, setIsMenuClicked] = useRecoilState(
    isMenuClickedState
  );

  // toggle burger menu change
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div
      css={[
        styles.openBtn4,
        isMenuClicked === true && styles.active,
      ]}
      onClick={updateMenu}
    >
      <span css={styles.span}></span>
      <span css={styles.span}></span>
      <span css={styles.span}></span>
    </div>
  );
};

export default Burger;
