import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/test')({
  component: () => (
    <div>
      <Link to="/">index</Link>
    </div>
  ),
});
