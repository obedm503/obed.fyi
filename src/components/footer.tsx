import { Links } from "./links";

export function Footer() {
  return (
    <footer
      class="text-center mt-8 bg-primary text-white p-8"
      style="box-sizing: border-box; clip-path: ellipse(95% 100% at 30% 100%);"
    >
      <Links />

      <div>Copyright © Obed Miranda {new Date().getFullYear()}</div>
    </footer>
  );
}
