const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries({
    'content_type': 'blogPost'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchProjects() {
  const entries = await client.getEntries({
    'content_type': 'project'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntry(slug) {
    const entries = await client.getEntries({
        'content_type': 'blogPost',
        'fields.slug': slug
    })
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }