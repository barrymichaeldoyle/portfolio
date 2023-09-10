import { PropsWithChildren } from 'react';

export function PageSection({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
