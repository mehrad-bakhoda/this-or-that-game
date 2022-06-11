import styles from "../styles/Home.module.css";
import Image from "next/image";
import superjson from "superjson";

export default function Home({ data }) {
  console.log(data);
  console.log(data.url);
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <Image
          src={`${data.url}`}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/2.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  let data = {};

  await fetch("https://api.waifu.pics/sfw/bonk", { method: "GET" })
    .then((response) => response.text())
    .then((result) => {
      data = result;
    })
    .catch((error) => console.log("error", error));

  return {
    props: {
      data,
    },
  };
}
