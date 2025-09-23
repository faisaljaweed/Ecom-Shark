// components/Loader.jsx
const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <span className="text-white text-sm">Sending...</span>
    </div>
  );
};

export default Loader;
