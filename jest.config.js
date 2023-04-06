module.exports = {
  // ...
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-native-vector-icons|@react-native|@react-navigation)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest/presets/js-with-ts',
  // Add these lines to support ECMAScript Modules
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.json',
      diagnostics: false,
      isolatedModules: true,
    },
    'ts-jest': {
      useESM: true,
    },
    __DEV__: true,
  },
};
