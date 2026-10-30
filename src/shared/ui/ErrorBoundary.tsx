import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

/** Keeps a failure inside the part that broke, so the rest of the app stays usable. Give it a `key` to reset it. */
export class ErrorBoundary extends Component<ErrorBoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="grid h-full place-items-center px-6 py-32 text-center">
        <div>
          <p className="font-display text-3xl text-ink">This could not load</p>
          <p className="mt-2 text-sm text-ink-muted">A new version may be out, or this browser lacks something it needs, like WebGL.</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-5 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold text-ink transition hover:bg-surface-2">
            Reload
          </button>
        </div>
      </div>
    );
  }
}
