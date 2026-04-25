const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center space-y-6">
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-accent">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold">Oops! Page not found</h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <a href="/" className="btn btn-accent text-white">
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
