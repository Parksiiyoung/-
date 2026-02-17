// Sanity Schema: Work Document
// Use this schema when connecting Sanity Studio

export const workSchema = {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleKo', title: 'Title (Korean)', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    {
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    { name: 'description', title: 'Description', type: 'text', rows: 10 },
    { name: 'descriptionKo', title: 'Description (Korean)', type: 'text', rows: 10 },
    {
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'name', type: 'string', title: 'Name' },
          ],
        },
      ],
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Year (Newest)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'thumbnail' },
  },
};

export const categorySchema = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'nameKo', title: 'Name (Korean)', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
  ],
};
