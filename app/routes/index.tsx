import axios from 'axios';
import { createFileRoute } from '@tanstack/react-router';
import { serverOnly$ } from 'vite-env-only/macros';
import { useSuspenseQuery, queryOptions } from '@tanstack/react-query';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import { z } from 'zod';
import { getRequestHost } from 'vinxi/http';
import { Suspense } from 'react';

export const Route = createFileRoute('/')({
  component: Page,
  validateSearch: zodSearchValidator(
    z
      .object({
        t: z.string(),
        object: z.object({
          boolean: z.boolean(),
          string: z.string(),
        }),
      })
      .default({
        t: 'halli hallo hallchen',
        object: {
          boolean: true,
          string: 'hallo 456',
        },
      })
      .catch({
        t: 'halli hallo hallchen',
        object: {
          boolean: true,
          string: 'hallo 456',
        },
      }),
  ),
});

function Page() {
  const search = Route.useSearch();

  return (
    <>
      <div>{JSON.stringify(search)}</div>
      <Suspense fallback={<div>Loading</div>}>
        <Suspending />
      </Suspense>
    </>
  );
}

const getBaseUrl = () => {
  if (typeof document !== 'undefined') return '';
  const host = serverOnly$(getRequestHost());
  if (host) {
    if (host.includes('localhost')) return `http://${host}`;
    return `https://${host}`;
  }
  return '';
};

const userQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['users', id],
    queryFn: () =>
      axios
        .get(getBaseUrl() + '/api/test')
        .then((r) => r.data)
        .catch(() => {
          throw new Error('Failed to fetch user');
        }),
  });

function Suspending() {
  const query = useSuspenseQuery(userQueryOptions('1'));
  return <div>{JSON.stringify(query.data)}</div>;
}
