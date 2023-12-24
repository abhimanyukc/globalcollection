import Head from "next/head";

export default function Meta() {
    return (
        <Head>
            <title>GlobalCollection</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1"/>
         {/* also u can mention other metadata like  description ,
         any open graph tags u like etc */}
        </Head>
    )
}