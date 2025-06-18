interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

export default function InputField({
  type,
  placeholder,
  name,
  required = true,
}: InputFieldProps) {
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
      />
    </div>
  );
}
