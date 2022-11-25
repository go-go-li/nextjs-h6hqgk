import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Ninjas List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};
export default Navbar;
