import React from 'react';
import Link from 'next/link';

const about = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="flex gap-4">
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  </div>
);
export default about;
