import Head from "next/head";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/Layout";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "@/graphql/queries/fetchCharacters";
import { Characters } from "@/components/Characters";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const { data, loading } = useQuery(FETCH_CHARACTERS, {
    variables: {
      page: 1,
    },
  });
  console.log("🚀 ~ file: index.tsx:14 ~ Home ~ data:", data);
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className}`}>
        <Layout>
          {/* <Characters characters={data?.characters?.results}/> */}
        </Layout>
      </main>
    </>
  );
}
