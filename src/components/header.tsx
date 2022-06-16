export function Header(props: { title: string; subTitle?: string }) {
  return (
    <h1 class="text-center mt-10 mb-24">
      <div class="text-5xl font-bold">{props.title}</div>
      {props.subTitle ? <div class="text-light">{props.subTitle}</div> : null}
    </h1>
  );
}
