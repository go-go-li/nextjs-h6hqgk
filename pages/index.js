import Head from 'next/head';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>lhgoguehoiejhj trh4h4h h6hh6h</p>
      <p>lhgoguehoiejhj 6h655h6 6h65h65h65h56hh6h56h</p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  );
}
