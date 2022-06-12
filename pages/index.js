import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Home({ image1, image2, categories }) {
  const [img1, setImg1] = useState(image1.url);
  const [img2, setImg2] = useState(image2.url);

  const handleSelect = async () => {
    let randomElem = categories[Math.floor(Math.random() * categories.length)];

    await fetch(`https://api.waifu.pics/sfw/${randomElem}`, { method: "GET" })
      .then((response) => response.text())
      .then((result) => {
        setImg1(JSON.parse(result).url);
      })
      .catch((error) => console.log("error", error));
    randomElem = categories[Math.floor(Math.random() * categories.length)];

    await fetch(`https://api.waifu.pics/sfw/${randomElem}`, { method: "GET" })
      .then((response) => response.text())
      .then((result) => {
        setImg2(JSON.parse(result).url);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className={styles.main}>
      <div className={styles.card} onClick={handleSelect}>
        <Image
          src={`${img1}`}
          alt="Picture of an anime"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.card} onClick={handleSelect}>
        <Image
          src={`${img2}`}
          alt="Picture of an anime"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  let image1 = {};
  let image2 = {};
  const categories = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "hug",
    "awoo",
    "kiss",
    "lick",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "mom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe",
  ];
  let randomElem = categories[Math.floor(Math.random() * categories.length)];

  await fetch(`https://api.waifu.pics/sfw/${randomElem}`, { method: "GET" })
    .then((response) => response.text())
    .then((result) => {
      image1 = JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
  randomElem = categories[Math.floor(Math.random() * categories.length)];

  await fetch(`https://api.waifu.pics/sfw/${randomElem}`, { method: "GET" })
    .then((response) => response.text())
    .then((result) => {
      image2 = JSON.parse(result);
    })
    .catch((error) => console.log("error", error));

  return {
    props: {
      image1,
      image2,
      categories,
    },
  };
}
