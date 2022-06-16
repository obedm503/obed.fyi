import { onCleanup, onMount } from 'solid-js';
import { Header } from '../components/header';
import { setIsNotFound } from '../util';

export default function NotFound() {
  onMount(() => {
    setIsNotFound(true);
  });
  onCleanup(() => {
    setIsNotFound(false);
  });

  return (
    <div>
      <Header title="404 not found" />

      <h2 class="text-center text-xl font-bold">
        Couldn't find what your looking for. You should consider{' '}
        <a class="text-primary" href="/">
          going /
        </a>
      </h2>
    </div>
  );
}
