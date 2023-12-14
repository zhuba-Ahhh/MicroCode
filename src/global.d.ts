declare module '*.less' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import type ReactNode from 'react';

  const content: ReactNode;
  export default content;
}
