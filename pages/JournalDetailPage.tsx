import React, { useState, useEffect } from 'react';
import { useRouter } from '../lib/router';
import { Layout } from '../components/layout/Layout';
import { JournalDetail } from '../components/journal/JournalDetail';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { fetchJournalBySlug } from '../lib/sanity';
import type { JournalEntry } from '../types';

export function JournalDetailPage() {
  const { params } = useRouter();
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      setLoading(true);
      fetchJournalBySlug(params.slug).then((e) => {
        setEntry(e);
        setLoading(false);
      });
    }
  }, [params.slug]);

  if (loading) return <Layout><LoadingSpinner /></Layout>;
  if (!entry) {
    return (
      <Layout>
        <div className="py-section text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary">Entry not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <JournalDetail entry={entry} />
    </Layout>
  );
}
