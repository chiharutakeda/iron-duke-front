import React from 'react';
import { useRouter } from 'next/router';
const SurbeyFirst = () => {
  const router = useRouter();
  return (
    <>
      <div>SurbeyFirst</div>
      <button
        onClick={() => {
          router.push('SurbeySecond');
        }}
      >
        次へ
      </button>
    </>
  );
};

export default SurbeyFirst;
