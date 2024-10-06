import { json } from '@tanstack/start';
import { createAPIFileRoute } from '@tanstack/start/api';

export const Route = createAPIFileRoute('/api/test')({
  GET: async ({ request, params }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return json({ message: 'Hello /api/test' });
  },
});
