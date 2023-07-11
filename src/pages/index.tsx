import Head from "next/head";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/Layout";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "@/graphql/queries/fetchCharacters";
import { Characters } from "@/components/Characters";
import { Input } from "@/components/Input";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { RadioGroup } from "@/components/RadioGroup";
import { Spin } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const radios = [
  {
    label: "Alive",
    value: "Alive",
    name: "status",
  },
  {
    label: "Dead",
    value: "Dead",
    name: "status",
  },
  {
    label: "Unknown",
    value: "Unknown",
    name: "status",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const debouncedValue = useDebounce(search);
  const { data, loading } = useQuery(FETCH_CHARACTERS, {
    variables: {
      page: page,
      filter: {
        name: debouncedValue,
        status: status,
      },
    },
  });

  const handleSelectStatus = (value: string) => {
    setPage(1);
    setStatus(value);
  };

  const handleSearch = (value: string) => {
    setPage(1);
    setSearch(value);
  };

  const handleSwithPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="List of Rick and Morty characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className}`}>
        <Layout>
          <Input
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
          />
          <RadioGroup
            radios={radios}
            value={status}
            onChange={handleSelectStatus}
            label="Search by status:"
          />
          {loading ? (
            <Spin size="large" />
          ) : (
            <>
              {data?.characters && <Characters characters={data.characters} />}
              {data?.characters?.info?.count! > 20 && (
                <Pagination
                  currentPage={page}
                  totalPages={data?.characters?.info?.pages!}
                  handleSwitchPage={handleSwithPage}
                />
              )}
            </>
          )}
        </Layout>
      </main>
    </>
  );
}
