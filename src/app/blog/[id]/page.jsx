import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
// import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.content,
  };
}

// const BlogPost = async ({ params }) => {
const BlogPost = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>

          <p className={styles.desc}>{data.content}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />

            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            // src={data.img}
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {/* {data.content} */}
          paragraph
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
