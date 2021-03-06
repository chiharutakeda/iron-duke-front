import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/templates/Layout'
import SurbeyFirst from '@/components/organisms/survey/SurbeyFirst';
import SurbeySecond from '@/components/organisms/survey/SurbeySecond';
import SurbeyThird from '@/components/organisms/survey/SurbeyThird';
import SurbeyFinish from '@/components/organisms/survey/SurbeyFinish';
import SurbeyContext from '@/context/SurbeyContext';

//urlからpidを取り出す
export const getPidFromPath = (path: string) => {
  return path.split('/')[2];
};

//pidによってページ遷移する。
export const switchPage = (pid: string) => {
  switch (pid) {
    case 'SurbeyFirst':
      return <SurbeyFirst />;
    case 'SurbeySecond':
      return <SurbeySecond />;
    case 'SurbeyThird':
      return <SurbeyThird />;
    default:
      return <SurbeyFinish />;
  }
};
const Surbey = () => {
  const router = useRouter();
  const path = router.asPath;
  const pid = getPidFromPath(path);
  const surbeyJSX = switchPage(pid);

  //contextでラップする。
  return <Layout><SurbeyContext>{surbeyJSX}</SurbeyContext></Layout>;
};

export default Surbey;
