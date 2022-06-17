import { Route, Routes } from 'solid-app-router';
import { lazy } from 'solid-js';
import { createClient, Provider } from 'solid-urql';
import { Links } from './components/links';
import { isNotFound } from './util';

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions() {
    return {
      headers: { Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}` },
    };
  },
});

const Index = lazy(() => import('./pages/index'));
const NotFound = lazy(() => import('./pages/404'));

export default function App() {
  return (
    <Provider value={client}>
      <div class={isNotFound() ? 'animate-glitch' : ''}>
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/*all" element={<NotFound />} />
          </Routes>
        </main>

        <footer
          class="text-center mt-8 bg-primary text-white p-8"
          style="box-sizing: border-box; clip-path: ellipse(95% 100% at 30% 100%);"
        >
          <div class="flex justify-center">
            {Array(5)
              .fill('*')
              .map(el => (
                <span class="p-1">{el}</span>
              ))}
          </div>

          <Links />

          <div class="">
            Copyright © Obed Miranda {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </Provider>
  );
}
