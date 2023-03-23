import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../header/SideBar';
import Newletter from '../newsletter/NewsLetter';

interface Props {
  children: JSX.Element;
}

function CommonLayout(props: Props): JSX.Element {
  return (
    <div className="drawer">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-full flex flex-col justify-between">
        <div>
          <Header />
          {props.children}
        </div>
        <div>
          <Newletter />
          <Footer />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <div className=" p-4 w-80 bg-base-100 text-base-content">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default CommonLayout;
