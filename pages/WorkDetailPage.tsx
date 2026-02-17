import React, { useState, useEffect } from 'react';
import { useRouter } from '../lib/router';
import { Layout } from '../components/layout/Layout';
import { WorkDetail } from '../components/work/WorkDetail';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { fetchWorkBySlug } from '../lib/sanity';
import type { WorkProject } from '../types';

export function WorkDetailPage() {
  const { params } = useRouter();
  const [project, setProject] = useState<WorkProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      setLoading(true);
      fetchWorkBySlug(params.slug).then((p) => {
        setProject(p);
        setLoading(false);
      });
    }
  }, [params.slug]);

  if (loading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="py-section text-center">
          <p className="font-mono text-caption uppercase text-text-tertiary">Project not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <WorkDetail project={project} />
    </Layout>
  );
}
