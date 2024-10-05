import { createFileRoute } from '@tanstack/react-router';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import { z } from 'zod';

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
      })
  ),
});

function Page() {
  const search = Route.useSearch();
  return <div>{JSON.stringify(search)}</div>;
}
