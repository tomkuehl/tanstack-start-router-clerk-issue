import appCss from '../app.css?url';
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';

export const Route = createRootRoute({
  links: () => [{ rel: 'stylesheet', href: appCss }],
  component: () => (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  ),
});
