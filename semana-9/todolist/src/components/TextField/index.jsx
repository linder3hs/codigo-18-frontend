/* eslint-disable react/prop-types */
export default function TextField(props) {
  const { type, name, value, onChange, placeholder } = props;

  return (
    <div className="my-5">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 rounded-md border outline-none w-full"
      />
    </div>
  );
}
