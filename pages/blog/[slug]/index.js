import { fetchEntries, fetchEntry } from "../../../util/contentfulPosts";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const blog = ({ posts }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <>
          <img
            className='rounded-md'
            quality='25%'
            layout='responsive'
            height='auto'
            width='auto'
            alt={node.data.target.fields.description}
            src={"https://" + node.data.target.fields.file.url}
          />
          <p className='text-sm opacity-75'>
            {node.data.target.fields.description}
          </p>
        </>
      ),
    },
    renderText: (text) => text.replace("!", "?"),
  };
  const post = posts[0];
  dayjs.extend(relativeTime);
  return (
    <>
      <Head>
        <title>{post.title} - Ingus Jansons</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta
          property='title'
          content={`${post.title} - Ingus Jansons`}
          key='title'
        />
        <meta name='description' content={post.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://ingus.co.uk/blog/${post.slug}`}
        />
        <meta property='og:title' content={`${post.title} - Ingus Jansons`} />
        <meta property='og:description' content={post.description} />
        <meta property='og:image' content={post.coverPhoto.fields.file.url} />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://ingus.co.uk/blog/${post.slug}`}
        />
        <meta
          property='twitter:title'
          content={`${post.title} - Ingus Jansons`}
        />
        <meta property='twitter:description' content={post.description} />
        <meta
          property='twitter:image'
          content={post.coverPhoto.fields.file.url}
        />
      </Head>
      <div className='prose dark:prose-light prose-yellow mx-auto max-w-2xl lg:prose-lg'>
        <p className='mb-7 hover:underline'>
          <Link href='/'>Return to home</Link>
        </p>
        <h1
          className='font-bold text-3xl tracking-tight'
          style={{ marginBottom: 0 }}
        >
          {post.title}
        </h1>

        <div className='flex items-center'>
          <img
            src={"/me_bw.jpg"}
            className='rounded-full w-12'
            alt='Ingus Jansons'
          />
          <div className='ml-3 leading-tight'>
            <Link href='/'>
              <span
                className='no-underline text-yellow-600 font-semibold hover:underline cursor-pointer dark:text-white'
                style={{ margin: 0 }}
              >
                Ingus Jansons
              </span>
            </Link>
            <p className='text-sm' style={{ margin: 0 }}>
              Software Engineer, Vodafone Group
            </p>
          </div>
        </div>
        <p
          className='text-gray-500 dark:text-gray-400'
          style={{ marginTop: 0 }}
        >
          Published {dayjs(post.publishedDate).format("DD/MM/YYYY")}
          <span> • {dayjs(post.publishedDate).fromNow()}</span>
        </p>
        <Image
          className='rounded-md'
          quality='75%'
          layout='responsive'
          height={450}
          width={880}
          src={`https:${post.coverPhoto.fields.file.url}`}
          alt={post.coverPhoto.fields.description}
        />
        <div className='my-7'>
          {documentToReactComponents(post.body, options)}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetchEntry(context.params.slug);
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
