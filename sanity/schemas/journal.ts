// Sanity Schema: Journal Entry Document

export const journalSchema = {
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleKo', title: 'Title (Korean)', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'content', title: 'Content', type: 'text', rows: 20 },
    { name: 'date', title: 'Date', type: 'date' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Essay', value: 'essay' },
          { title: 'Update', value: 'update' },
          { title: 'Event', value: 'event' },
        ],
      },
    },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'string' },
  ],
  orderings: [
    { title: 'Date (Newest)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'thumbnail' },
  },
};
