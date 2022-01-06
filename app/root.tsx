import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'
import { Link } from 'remix'
import tailwind from './app.css'

export const meta: MetaFunction = () => {
  const title = `States`
  const description = `...`
  return {
    title,
    description,
    'twitter:image': 'https://states.io/social.png',
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@StatesHQ',
    'twitter:site': '@StatesHQ',
    'twitter:title': title,
    'twitter:description': description,
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: 'any',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#8454E3',
    },
    {
      rel: 'stylesheet',
      href: tailwind,
    },
  ]
}


export default function App() {
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en"
      className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-full antialiased bg-gray-50 dark:bg-dark">
        <div className="flex-auto">
          <Outlet />
        </div>
        <footer className="shrink-0">
          <div className='container mx-auto prose text-center dark:prose-invert'>
            <div className='flex justify-between'>
              <p>
              </p>
              <p>
                &copy;{' '}{currentYear}{' '}<Link to="/">States</Link>{' · '}<Link to="/terms">Terms of Use</Link>{' · '}<Link to="/privacy">Privacy Policy</Link>
              </p>
              <p>
              </p>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
