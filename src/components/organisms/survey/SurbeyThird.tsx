import React from 'react';
import { useRouter } from 'next/router';
const SurbeyThird = () => {
  const router = useRouter();
  return (
    <>
      <div>SurbeyThird</div>
      <button
        onClick={() => {
          router.push('SurbeyFinish');
        }}
      >
        次へ
      </button>
    </>
  );
};

export default SurbeyThird;
