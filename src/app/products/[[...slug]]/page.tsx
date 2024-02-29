import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

export default function ProductPage({ params: { slug }, searchParams: { sortOrder } }: Props) {
  return (
    <div>
      Product page: {slug} {sortOrder}
    </div>
  );
}
