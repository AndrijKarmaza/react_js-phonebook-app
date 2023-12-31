import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Home.module.css';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <h1 className={css.title}>Your phone book</h1>
      {isLoggedIn ? (
        <h2 className={css.subTitle}>
          Go to contacts to view your contact list
        </h2>
      ) : (
        <h2 className={css.subTitle}>
          Register or log in to view your contact list
        </h2>
      )}
    </>
  );
};

export default Home;
