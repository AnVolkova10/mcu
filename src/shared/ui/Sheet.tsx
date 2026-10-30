import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Accent color for the top edge of the panel. */
  color?: string;
  children: ReactNode;
}

/** Right-side panel. Closes with Esc, the backdrop or the close button; traps focus while open. */
export function Sheet({ open, onClose, title, color, children }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in" />
        <Dialog.Content
          aria-describedby={undefined}
          // Focus the panel itself rather than the close button, so no focus ring flashes on open.
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            (e.currentTarget as HTMLElement | null)?.focus();
          }}
          tabIndex={-1}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-line bg-bg shadow-2xl animate-panel-in focus:outline-none"
          style={{ borderTop: `3px solid ${color ?? 'var(--color-accent)'}` }}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <Dialog.Close
            className="absolute right-4 top-4 z-10 rounded-full border border-line bg-surface p-2 text-ink-muted transition hover:border-line-strong hover:text-ink"
            aria-label="Close panel"
          >
            <X className="size-4" />
          </Dialog.Close>
          <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
