import React from 'react';

function Loading() {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded border border-ink/10 bg-surface"
        >
          <div className="aspect-[3/4] w-full animate-pulse bg-surfaceHi" />
          <div className="p-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-surfaceHi" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
