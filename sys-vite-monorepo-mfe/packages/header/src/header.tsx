import { header, thumbnail } from './header.css';

const Header = () => {
  return (
    <section className={header}>
      <h1>This is header component.</h1>
      <img src="/thumbnail.jpg" className={thumbnail} alt="thumbnail" />
    </section>
  );
};

export default Header;
