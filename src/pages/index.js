import Head from "next/head";
import Image from "next/image";
import Footer from "@components/footer";

import Logo from "@assets/logo/logo.png";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          <Image src={Logo} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
