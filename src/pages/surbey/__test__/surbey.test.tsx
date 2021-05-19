import {getPidFromPath,switchPage} from '@/pages/surbey/[pid]'
import SurbeyFirst from '@/components/organisms/survey/SurbeyFirst'
import SurbeySecond from '@/components/organisms/survey/SurbeySecond'
import SurbeyThird from '@/components/organisms/survey/SurbeyThird'
test('getPidFromPath', () => {
  expect(getPidFromPath('aaa/bbb/ccc')).toBe("ccc");
});
test('switchPage', () => {
  expect(switchPage('SurbeyFirst')).toMatchObject(<SurbeyFirst />);
  expect(switchPage('SurbeySecond')).toMatchObject(<SurbeySecond />);
  expect(switchPage('SurbeyThird')).toMatchObject(<SurbeyThird />);
});

