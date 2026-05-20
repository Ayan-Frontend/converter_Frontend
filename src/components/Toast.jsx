export default function Toast({ message }) {
  return (
    <div className="fixed top-5 -right-40 bg-red-500 px-6 py-4 rounded-xl shadow-2xl">
      {message}
    </div>
  );
}
