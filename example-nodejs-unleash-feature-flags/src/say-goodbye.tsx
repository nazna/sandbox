interface Props {
  enabled: boolean;
}

export function SayGoodbye(props: Props) {
  if (!props.enabled) {
    return null;
  }

  return <p>Good bye :P</p>;
}
