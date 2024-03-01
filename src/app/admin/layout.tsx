import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AdminRootLayout({ children }: Props) {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-4'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
}
