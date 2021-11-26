import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/base" passHref>
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
