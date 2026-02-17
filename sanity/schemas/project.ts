// Sanity Schema: Side Project Document

export const projectSchema = {
  name: 'project',
  title: 'Side Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleKo', title: 'Title (Korean)', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Magazine', value: 'magazine' },
          { title: 'Media Art', value: 'media-art' },
          { title: 'Experimental', value: 'experimental' },
          { title: 'Tool', value: 'tool' },
        ],
      },
    },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'description', title: 'Description', type: 'text', rows: 5 },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'url', title: 'URL', type: 'url' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'thumbnail' },
  },
};
