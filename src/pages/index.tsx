import Head from "next/head";

import { FilterBar } from "@/components";
import { CardsContainer } from "@/containers";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Entry Level Test</title>
        <meta name="description" content="entry level test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FilterBar />
        <CardsContainer />
      </main>
    </>
  );
}
