export function ExternalLink(props: { href: string; class: string; children }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      class={props.class}
    >
      {props.children}
    </a>
  );
}
