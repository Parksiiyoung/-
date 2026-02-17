// GROQ Queries for Sanity CMS
// Use these queries when connecting to Sanity

export const QUERIES = {
  // Works
  allWorks: `*[_type == "work"] | order(order asc) {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    "category": category->{_id, name, nameKo, "slug": slug.current},
    year,
    client,
    "thumbnail": thumbnail.asset->url,
    "images": images[].asset->url,
    description,
    descriptionKo,
    credits,
    tags,
    featured,
    order
  }`,

  featuredWorks: `*[_type == "work" && featured == true] | order(order asc) {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    "category": category->{_id, name, nameKo, "slug": slug.current},
    year,
    client,
    "thumbnail": thumbnail.asset->url,
    featured,
    order
  }`,

  workBySlug: `*[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    "category": category->{_id, name, nameKo, "slug": slug.current},
    year,
    client,
    "thumbnail": thumbnail.asset->url,
    "images": images[].asset->url,
    description,
    descriptionKo,
    credits,
    tags,
    featured,
    order
  }`,

  categories: `*[_type == "category"] | order(name asc) {
    _id,
    name,
    nameKo,
    "slug": slug.current
  }`,

  // Journal
  allJournal: `*[_type == "journal"] | order(date desc) {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    excerpt,
    content,
    date,
    category,
    "thumbnail": thumbnail.asset->url,
    author
  }`,

  journalBySlug: `*[_type == "journal" && slug.current == $slug][0] {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    excerpt,
    content,
    date,
    category,
    "thumbnail": thumbnail.asset->url,
    author
  }`,

  // Projects
  allProjects: `*[_type == "project"] | order(year desc) {
    _id,
    title,
    titleKo,
    "slug": slug.current,
    type,
    year,
    description,
    "thumbnail": thumbnail.asset->url,
    url,
    tags
  }`,

  // About
  siteSettings: `*[_type == "siteSettings"][0]`,

  teamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    nameEn,
    role,
    bio,
    "image": image.asset->url
  }`,

  awards: `*[_type == "award"] | order(year desc) {
    _id,
    year,
    title,
    organization,
    project
  }`,
};
