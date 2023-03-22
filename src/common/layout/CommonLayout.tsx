import Footer from '../footer/Footer';
import Header from '../header/Header';

interface Props {
  children: JSX.Element;
}

function CommonLayout(props: Props): JSX.Element {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default CommonLayout;
