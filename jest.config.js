//jestの設定ファイル
//moduleNameMapperでaliasのパス設定できる
//configの呼び方が複雑（jest.config.jsからtsconfig.jest.jsonを参照しそこからtsconfig.jsonを参照している）
//ある設定ファイルの設定をそのまま使うようなことが案外多い
module.exports = {
  moduleNameMapper: { '@/(.+)': '<rootDir>/src/$1' },
};
