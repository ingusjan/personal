import { fetchEntries, fetchEntry } from "../../../util/contentfulPosts";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import Image from "next/image";

const blog = ({ posts }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <p className="font-bold">{text}</p>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          className="lg:w-1/3 mt-5 rounded-md"
          quality="25%"
          layout="responsive"
          height="auto"
          width="auto"
          src={"https://" + node.data.target.fields.file.url}
        />
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="my-5 list-disc">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="list-inside list-disc">{children}</li>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-xl font-semibold my-5">{children}</h2>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => {
        const UnTaggedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        });

        return <li className="list-inside">{UnTaggedChildren}</li>;
      },
    },
    renderText: (text) => text.replace("!", "?"),
  };
  const post = posts[0];
  dayjs.extend(relativeTime);
  return (
    <div>
      <p className="mb-7 opacity-40 hover:underline">
        <Link href="/">Return to home</Link>
      </p>
      <h1 className="font-bold text-3xl tracking-tight">{post.title}</h1>
      <p className="opacity-50">
        Published {dayjs(post.publishedDate).format("DD/MM/YYYY")}
        <span> • {dayjs(post.publishedDate).fromNow()}</span>
      </p>

      <div className="my-7">
        {documentToReactComponents(post.body, options)}
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetchEntry(context.params.id);
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });
  const slugs = posts.map((post) => post.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default blog;
