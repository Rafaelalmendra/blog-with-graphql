import Image from "next/image";
import Link from "next/link";

//styles
import styles from "./styles.module.css";

interface BlogCardProps {
  title: string;
  authorAvatar: string;
  authorName: string;
  coverPhoto: string;
  datePublished: string;
  slug: string;
}

const BlogCard = ({
  title,
  authorAvatar,
  authorName,
  coverPhoto,
  datePublished,
  slug,
}: BlogCardProps) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <div className={styles.card}>
          <h3>{title}</h3>
          <div className={styles.imgContainer}>
            <Image src={coverPhoto} width={500} height={300} alt="post image" />
          </div>
          <div className={styles.infos}>
            <div className={styles.author}>
              <Image
                src={authorAvatar}
                width={65}
                height={50}
                alt="author image"
              />
              <p>{authorName}</p>
            </div>
            <div className={styles.date}>
              <span>date:</span>
              <p>{datePublished}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
