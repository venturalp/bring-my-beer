module.exports = {
  transform: {
    '^.+\\.(svg|svg|ttf|png|jpg|jpeg|webp)$':
      '<rootDir>/src/fileTransformer.js',
    '^.+\\.jsx?$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],
  // setupFiles: ['jest-canvas-mock'],
  coverageThreshold: {
    global: {
      branches: process.env.JEST_BRANCHES,
      functions: process.env.JEST_FUNCTIONS,
      lines: process.env.JEST_LINES,
      statements: process.env.JEST_STATEMENTS,
    },
  },
}
