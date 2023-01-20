import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <header className={styles.wrapper}>
      <p className={styles.logo}> TODO</p>
    </header>
  );
}

export default Header;
