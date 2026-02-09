import React from 'react';

interface Props {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string | null) => void;
}

const TagFilter: React.FC<Props> = ({ tags, activeTag, onTagClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10 items-center">
      <button
        onClick={() => onTagClick(null)}
        className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 border ${
          activeTag === null
            ? 'bg-neutral-900 text-white border-neutral-900'
            : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`px-4 py-1.5 text-xs tracking-wider transition-all duration-200 border ${
            activeTag === tag
              ? 'bg-neutral-900 text-white border-neutral-900'
              : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
