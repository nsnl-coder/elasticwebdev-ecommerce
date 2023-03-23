import { HiBars3 } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag, BsPerson } from 'react-icons/bs';
//
import RowContainer from '../container/RowContainer';
import NavBar from './NavBar';
import Link from 'next/link';
import Logo from './Logo';

function MainHeader(): JSX.Element {
  return (
    <RowContainer className="border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <label htmlFor="side-drawer" className="cursor-pointer">
            <HiBars3 size={28} />
          </label>
          <Logo />
          <div className="hidden lg:block">
            <NavBar layout="horizontal" />
          </div>
        </div>
        <div className="flex items-center gap-x-4 py-6">
          <Link href="/auth/login">
            <BsPerson size={24} />
          </Link>
          <Link href="/">
            <IoIosSearch size={24} />
          </Link>
          <Link href="/">
            <AiOutlineHeart size={24} />
          </Link>
          <span>$0.00</span>
          <Link href="/">
            <BsBag size={21} />
          </Link>
        </div>
      </div>
    </RowContainer>
  );
}

export default MainHeader;
