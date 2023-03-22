interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

function RowContainer(props: Props): JSX.Element {
  const { className } = props;

  return (
    <div className={className}>
      <div className={`max-w-7xl px-3 mx-auto`}>{props.children}</div>
    </div>
  );
}

export default RowContainer;
