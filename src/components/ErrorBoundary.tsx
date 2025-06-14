import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('SSR Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cyber-black text-white">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-cyber-red">Възникна грешка</h1>
            <p className="text-gray-300 mb-6">
              Съжаляваме, но възникна неочаквана грешка. Моля, опитайте отново.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="btn-primary"
              >
                Опитай отново
              </button>
              <Link href="/" className="btn-outline">
                Към началната страница
              </Link>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-cyber-blue">
                  Детайли за грешката (само в development)
                </summary>
                <pre className="mt-4 p-4 bg-gray-800 rounded text-sm overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;