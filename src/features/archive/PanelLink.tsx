import type { MouseEvent, ReactNode } from 'react';
import { currentRoute, href, openPanel, type Panel } from '@/app/router';

interface PanelLinkProps {
  panel: Panel;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

/** Opens a side panel over the current page. A real link underneath, so middle-click still opens a new tab. */
export function PanelLink({ panel, children, className, style, title }: PanelLinkProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openPanel(currentRoute(), panel);
  };
  return (
    <a href={href('timeline', { open: `${panel.kind}:${panel.id}` })} onClick={onClick} className={className} style={style} title={title}>
      {children}
    </a>
  );
}
