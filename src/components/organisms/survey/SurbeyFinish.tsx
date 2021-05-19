import React from 'react';
import { useRouter } from 'next/router';
const SurbeyFinish = () => {
  const router = useRouter();
  return (
    <>
      <div>SurbeyFinish</div>
      <button
        onClick={() => {
          router.push('SurbeyFirst');
        }}
      >
        次へ
      </button>
    </>
  );
};

export default SurbeyFinish;
