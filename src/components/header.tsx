export function Header(props: { title: string; subTitle?: string }) {
  return (
    <h1 class="mb-24 mt-10 text-center">
      <div class="text-5xl font-bold">{props.title}</div>
      {props.subTitle ? <div class="text-light">{props.subTitle}</div> : null}
    </h1>
  );
}
