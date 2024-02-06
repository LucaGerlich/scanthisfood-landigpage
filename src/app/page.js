import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scan This Food</title>
        <meta name="Landing Page" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen flex-col place-content-center place-items-center bg-[#eeeeee] dark:bg-[#1e1e1e]">
        <div>
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            alt="The Scan this Food logo"
          />
        </div>
        <p className="mt-2 text-black opacity-50 dark:text-[#EE7150]">
          coming soon...
        </p>
      </main>

      <footer className="absolute bottom-0 flex w-full flex-row-reverse place-content-center gap-x-8 pb-4 pr-4 text-black opacity-75 dark:text-[#EE7150]">
        <a className="hover:underline" href="">
          Help
        </a>
        <a className="hover:underline" href="">
          Contact us
        </a>
        <a className="hover:underline" href="">
          Blog
        </a>
      </footer>
    </div>
  );
}
