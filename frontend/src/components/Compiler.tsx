import { useState } from "react";

const cppTemplate = `#include <iostream>
using namespace std;

int main() {
    // Your code here
    cout << "Hello, World!" << endl;
    
    // Example: Basic array operations
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 0;
    
    for(int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    
    cout << "Sum of array: " << sum << endl;
    return 0;
}`;

export default function Compiler() {
  const [code, setCode] = useState(cppTemplate);
  const [language, setLanguage] = useState("cpp");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement compilation logic
    setOutput("Compilation result will appear here...");
  };

  return (
    <div className="h-[calc(100vh-9rem)] bg-base-100 rounded-lg shadow-lg">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="h-full flex flex-col p-6 border-r border-base-300">
          <h1 className="text-2xl font-bold mb-4 text-base-content">
            Code Editor
          </h1>

          {/* Language Selector */}
          <div className="mb-4">
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">basic</option>
            </select>
          </div>

          {/* Code Editor */}
          <div className="flex-1 relative">
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="textarea textarea-bordered font-mono w-full h-full resize-none bg-base-200"
              placeholder="Write your code here..."
            />
          </div>

          {/* Run Button */}
          <div className="mt-4">
            <button onClick={handleSubmit} className="btn btn-primary w-full">
              Compile & Run
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="h-full flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-4 text-base-content">Output</h1>
          <div className="flex-1 bg-base-200 rounded-lg p-4 font-mono">
            {output || "Output will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}
