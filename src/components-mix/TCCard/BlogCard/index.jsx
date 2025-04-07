"use client";
import Image from "next/image";
import clsx from "clsx";
import { TCButton, TCTag } from "@/components";
import { useRouter } from "next/navigation";
import { Tag, Typography } from "antd";
import styles from "./BlogCard.module.css";
import { Icons } from "@/constants";

export const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  href,
}) => {
  const { Paragraph } = Typography;
  const router = useRouter();
  return (
    <article className={clsx(styles.card, "d-flex flex-column")}>
      <div className={clsx(styles.imageWrapper, "ratio")}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <TCTag
              className={clsx(styles.BlogOwner, "p sm clr-golden")}
              bordreedLess
              color="warning"
              variant="primary"
            >
              By Trademark Club
            </TCTag>
            <h2
              className={clsx(styles.title, "p xl fw-medium text-capitalize lh-sm")}
            >
              {title}
            </h2>
            <div className={styles.meta}>
              <span className={styles.category}>{category}</span>
              <time className={styles.date}>{date}</time>
            </div>
          </div>
          <Paragraph
            ellipsis={{
              rows: 2,
            }}
            className={clsx(styles.BlogParagraph, "p sm text-capitalize")}
          >
            {excerpt}
          </Paragraph>
        </div>
        <TCButton
          onClick={() => router.push(`/blog/blog-details/${href}`)}
          className={styles.readMore}
          icon={Icons.RightArrowFull}
          iconEnd
        >
          Read More
        </TCButton>
      </div>
    </article>
  );
};
