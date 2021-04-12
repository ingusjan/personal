import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

async function getPost(params) {
  const query = {
    limit: 1,
    include: 10,
    "fields.slug": params.slug,
    content_type: "blogPost",
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: "blogPost",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchEntry(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export default { fetchEntries };
