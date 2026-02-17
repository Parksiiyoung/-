// Sanity Schema: Site Settings (singleton)

export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'studioName', title: 'Studio Name', type: 'string' },
    { name: 'studioNameKo', title: 'Studio Name (Korean)', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'descriptionKo', title: 'Description (Korean)', type: 'text' },
    { name: 'philosophy', title: 'Philosophy', type: 'text' },
    { name: 'philosophyKo', title: 'Philosophy (Korean)', type: 'text' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'addressKo', title: 'Address (Korean)', type: 'string' },
    {
      name: 'social',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'label', type: 'string', title: 'Label' },
          ],
        },
      ],
    },
  ],
};

export const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'nameEn', title: 'Name (English)', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
};

export const awardSchema = {
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'organization', title: 'Organization', type: 'string' },
    { name: 'project', title: 'Project', type: 'string' },
  ],
  orderings: [
    { title: 'Year (Newest)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
};
