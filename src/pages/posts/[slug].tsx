import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//hooks
import useGetDetailsPost from "src/hooks/useGetDetailsPost";

//styles
import styles from "src/styles/Details.module.css";

const PostDetails = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, loading, error } = useGetDetailsPost(slug);
  const post = data?.post;

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error(error);
  }

  return (
    <main className={styles.blog}>
      <Link href="/">
        <a>
          <p style={{ marginBottom: "2.5rem" }}>⬅️ Return</p>
        </a>
      </Link>
      <Image
        src={post?.coverPhoto?.url}
        width={500}
        height={300}
        alt="post image"
      />
      <div className={styles.infos}>
        <div className={styles.author}>
          <Image
            src={post?.author.avatar.url}
            width={50}
            height={50}
            alt="author image"
          />
          <p>By {post?.author.name}</p>
        </div>
        <div className={styles.date}>
          <p>Date: </p>
          <span>{post?.datePublished}</span>
        </div>
      </div>

      <h2>{post?.title}</h2>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post?.content.html }}
      />
    </main>
  );
};

export default PostDetails;
