import Head from "next/head";
import TheMenu from "./TheMenu";

const TheHeader = () => {
  return (
    <>
      <Head>
        <meta name="description" content="The World’s Work Marketplace." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Menu Bar */}
      <TheMenu/>
    </>
  )
}

export default TheHeader