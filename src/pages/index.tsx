import Head from "next/head";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className}`}>
        <Layout>dsa</Layout>
      </main>
    </>
  );
}
