import styles from "../styles/Home.module.css";
import Head from "next/head";

import Articles from "../components/Articles";
import User from "../components/User";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Next Skeleton Screens</title>
        <meta
          name="description"
          content="Created by &R based on netnija tutorial"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <h1>React Skeletons</h1>
        </header>
        <div className={styles.content}>
          <Articles />
          <User />
        </div>
      </main>
    </div>
  );
}
