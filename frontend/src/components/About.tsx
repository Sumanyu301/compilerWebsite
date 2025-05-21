import React from 'react';

const CompilerDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.2 }} />
      </linearGradient>
    </defs>
    <rect x="50" y="100" width="300" height="200" rx="20" fill="url(#grad1)" stroke="currentColor" strokeWidth="2" />
    <path d="M100,150 L300,150 M100,250 L300,250" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <text x="200" y="190" textAnchor="middle" className="text-base-content text-sm">Source Code</text>
    <text x="200" y="220" textAnchor="middle" className="text-base-content text-sm">Compiler</text>
    <text x="200" y="280" textAnchor="middle" className="text-base-content text-sm">Machine Code</text>
    <path d="M150,80 L250,80 L200,120 Z" fill="currentColor" opacity="0.5" />
    <path d="M150,320 L250,320 L200,280 Z" fill="currentColor" opacity="0.5" />
  </svg>
);

const ProcessDiagram = () => (
  <svg viewBox="0 0 800 300" className="w-full h-full">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.2 }} />
      </linearGradient>
    </defs>
    {/* Process boxes */}
    {['Lexer', 'Parser', 'Semantic', 'IR Gen', 'Optimizer', 'Code Gen'].map((text, i) => (
      <g key={i} transform={`translate(${100 + i * 120}, 100)`}>
        <rect width="100" height="60" rx="10" fill="url(#grad2)" stroke="currentColor" strokeWidth="2" />
        <text x="50" y="35" textAnchor="middle" className="text-base-content text-sm">{text}</text>
        {i < 5 && <path d="M110,30 L130,30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />}
      </g>
    ))}
    {/* Flow arrows */}
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" 
              markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
      </marker>
    </defs>
  </svg>
);

const SecurityDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.2 }} />
      </linearGradient>
    </defs>
    <circle cx="200" cy="200" r="150" fill="url(#grad3)" stroke="currentColor" strokeWidth="2" />
    <path d="M200,100 L200,300 M100,200 L300,200" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M160,200 L240,200 M200,160 L200,240" stroke="currentColor" strokeWidth="4" />
    <text x="200" y="140" textAnchor="middle" className="text-base-content text-sm">Secure Environment</text>
  </svg>
);

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">How Compilers Work</h1>
        <p className="text-xl text-base-content">Understanding the Magic Behind Code Compilation</p>
      </div>
      
      <div className="space-y-12">
        <section className="bg-base-200 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <CompilerDiagram />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">What is a Compiler?</h2>
              <p className="text-base-content">
                A compiler is a specialized program that translates source code written in a high-level programming language into machine code that can be directly executed by a computer's processor. Think of it as a translator that converts human-readable code into computer-readable instructions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">The Compilation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Process Steps */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">1. Lexical Analysis</h3>
                <p className="text-base-content">
                  The compiler first breaks down the source code into tokens (like words in a sentence). These tokens include:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-base-content">
                  <li>Keywords (if, while, return)</li>
                  <li>Identifiers (variable names)</li>
                  <li>Operators (+, -, *, /)</li>
                  <li>Literals (numbers, strings)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">2. Syntax Analysis</h3>
                <p className="text-base-content">
                  The parser builds an Abstract Syntax Tree (AST), ensuring the code follows language grammar rules. Common checks include:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-base-content">
                  <li>Proper bracket matching</li>
                  <li>Statement termination</li>
                  <li>Expression structure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">3. Semantic Analysis</h3>
                <p className="text-base-content">
                  This stage verifies the program's logical correctness through:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-base-content">
                  <li>Type checking</li>
                  <li>Scope resolution</li>
                  <li>Variable declaration checks</li>
                </ul>
              </div>
            </div>
            
            {/* Process Visualization */}
            <div className="space-y-6">
              <div className="bg-base-300 w-full aspect-video rounded-lg flex items-center justify-center mb-6">
                <ProcessDiagram />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">4. Intermediate Code Generation</h3>
                <p className="text-base-content">
                  The code is transformed into an intermediate representation (IR), often using formats like:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-base-content">
                  <li>Three-address code</li>
                  <li>Static single assignment (SSA)</li>
                  <li>Control flow graphs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">5. Code Optimization</h3>
                <p className="text-base-content">
                  Optimization techniques include:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-base-content">
                  <li>Dead code elimination</li>
                  <li>Constant folding</li>
                  <li>Loop optimization</li>
                  <li>Register allocation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-accent">6. Code Generation</h3>
                <p className="text-base-content">
                  The final stage produces optimized machine code specific to the target architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Common Compiler Optimizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-base-300 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-accent">Local Optimizations</h3>
              <ul className="list-disc list-inside space-y-1 text-base-content">
                <li>Constant folding</li>
                <li>Strength reduction</li>
                <li>Common subexpressions</li>
              </ul>
            </div>
            <div className="p-4 bg-base-300 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-accent">Loop Optimizations</h3>
              <ul className="list-disc list-inside space-y-1 text-base-content">
                <li>Loop unrolling</li>
                <li>Invariant code motion</li>
                <li>Induction variable elimination</li>
              </ul>
            </div>
            <div className="p-4 bg-base-300 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-accent">Global Optimizations</h3>
              <ul className="list-disc list-inside space-y-1 text-base-content">
                <li>Dead code elimination</li>
                <li>Function inlining</li>
                <li>Register allocation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-base-200 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Online Compiler</h2>
              <p className="text-base-content mb-4">
                Our online compiler provides a convenient way to write, compile, and run code directly in your browser. We prioritize:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content">
                <li>Security through isolated compilation environments</li>
                <li>Fast compilation and execution times</li>
                <li>Support for multiple programming languages</li>
                <li>Real-time error reporting and syntax highlighting</li>
                <li>Automatic memory management and resource limits</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <SecurityDiagram />
            </div>
          </div>
        </section>

        <section className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-base-300 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-accent">Learning Materials</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content">
                <li>Dragon Book (Compilers: Principles, Techniques, and Tools)</li>
                <li>Engineering a Compiler</li>
                <li>Modern Compiler Implementation in ML</li>
              </ul>
            </div>
            <div className="p-4 bg-base-300 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-accent">Online Resources</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content">
                <li>Compiler Explorer (godbolt.org)</li>
                <li>LLVM Documentation</li>
                <li>GCC Documentation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
