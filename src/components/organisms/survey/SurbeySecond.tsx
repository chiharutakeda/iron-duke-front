import React from 'react';
import { useRouter } from 'next/router';
const SurbeySecond = () => {
  const router = useRouter();
  return (
    <>
      <div>SurbeySecond</div>
      <button
        onClick={() => {
          router.push('SurbeyThird');
        }}
      >
        次へ
      </button>
    </>
  );
};

export default SurbeySecond;
