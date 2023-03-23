interface Props {
  id: string;
  label: string;
  className?: string;
  type?: string;
}

function Input(props: Props): JSX.Element {
  const { id, label, className = 'mb-4', type = 'text' } = props;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-p1">
        {label}
      </label>
      <input
        type={type}
        className="border outline-0 px-4 py-2 w-full"
        id="email"
      />
    </div>
  );
}

export default Input;
