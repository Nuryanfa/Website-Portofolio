import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        
        // Log error to console for debugging
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                        <div className="text-center">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Something went wrong
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                An error occurred while loading this page.
                            </p>
                            
                            {/* Error details for development */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="text-left bg-red-50 dark:bg-red-900 p-4 rounded-lg mb-4">
                                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Error Details:</h3>
                                    <pre className="text-xs text-red-700 dark:text-red-300 overflow-auto">
                                        {this.state.error.toString()}
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                </div>
                            )}
                            
                            <div className="space-y-2">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                >
                                    Reload Page
                                </button>
                                <a
                                    href="/"
                                    className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                                >
                                    Go to Homepage
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;