import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <div className="bg-red-500 h-32 w-32">hello</div>,
});
