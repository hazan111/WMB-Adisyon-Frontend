interface InputFieldProps {
  type: string
  placeholder: string
  name: string
  required?: boolean
}

export default function InputField({ type, placeholder, name, required = true }: InputFieldProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-slate-800 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
      />
    </div>
  )
}