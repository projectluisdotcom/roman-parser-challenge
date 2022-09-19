import Head from "next/head"
import Image from "next/image"

import styles from "@/pages/index.module.css"
import { Parser } from "@/components/ParserComponent"
import RomanParser from "src/core/parser/RomanParser"
import parsersBuilder from "src/core/parser/parsers"

const parsers = parsersBuilder()

// TODO: Set a state to select other parsers
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman parser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <Parser parser={parsers.get(RomanParser.id)!} defaultValue={12} />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href={"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
