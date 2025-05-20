export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-base-100 rounded-lg p-8 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-base-content">
            Welcome to the Online Compiler
          </h1>
          <p className="text-lg text-base-content/70 mb-8">
            Write, compile, and run your code in multiple programming languages.
            Experience seamless development with our powerful online IDE.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Try Compiler</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Multiple Languages */}
        <div className="bg-base-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-base-content">
            Multiple Languages
          </h2>
          <p className="text-base-content/70">
            Support for various programming languages including C++, Python, and
            Java. Write and execute code in your preferred language.
          </p>
        </div>

        {/* Real-time Compilation */}
        <div className="bg-base-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-base-content">
            Real-time Compilation
          </h2>
          <p className="text-base-content/70">
            Get instant feedback with our real-time compilation feature. See
            your output immediately as you write code.
          </p>
        </div>

        {/* Error Handling */}
        <div className="bg-base-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-base-content">
            Smart Error Handling
          </h2>
          <p className="text-base-content/70">
            Clear error messages and debugging assistance to help you identify
            and fix issues in your code quickly.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-100 rounded-lg p-6 shadow-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">10+</div>
          <div className="text-base-content/70">Languages Supported</div>
        </div>
        <div className="bg-base-100 rounded-lg p-6 shadow-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">100ms</div>
          <div className="text-base-content/70">Average Compile Time</div>
        </div>
        <div className="bg-base-100 rounded-lg p-6 shadow-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">24/7</div>
          <div className="text-base-content/70">Available</div>
        </div>
      </div>
    </div>
  );
}
