import Image from "next/image";
import Link from "next/link";
import { fetchEntries } from "../util/contentfulPosts";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import advancedFormat from "dayjs/plugin/advancedFormat";
import Head from "next/head";
const blogs = ({ posts }) => {
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);
  return (
    <div>
      <Head>
        <title>Blog - Ingus Jansons</title>
        <meta property='title' content='Blog - Ingus Jansons' key='title' />
        <meta
          name='description'
          content='See what sort of things I write in my spare time.'
        />
      </Head>
      <h1 className='text-4xl font-semibold mb-6'>Blog</h1>
      <p>See what sort of things I write in my spare time.</p>
      <div className='mt-8 flex flex-row flex-wrap justify-around space-y-2 lg:space-y-0 lg:space-x-3'>
        {posts.map((x) => {
          return (
            <Link key={x.id} href='/blog/[slug]' as={`/blog/${x.slug}`}>
              <div
                key={x.slug}
                style={{ marginBottom: "2em" }}
                className='hover:text-yellow-500 cursor-pointer w-[100%] lg:w-[31%]'
              >
                <Image
                  className='rounded-md'
                  quality='75%'
                  layout='responsive'
                  height={450}
                  width={880}
                  src={`https:${x.coverPhoto.fields.file.url}`}
                  alt={x.coverPhoto.fields.description}
                />

                <div>
                  <p className='text-gray-500 dark:text-gray-400 text-sm mt-2 mb-px'>
                    {dayjs(x.publishedDate).format("Do MMMM, YYYY")}
                  </p>
                  <h3 className='font-semibold text-xl'>{x.title}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};

export default blogs;
