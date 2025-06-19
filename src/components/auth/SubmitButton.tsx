interface SubmitButtonProps {
  label: string
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold text-lg py-4 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition"
    >
      {label}
    </button>
  )
}
