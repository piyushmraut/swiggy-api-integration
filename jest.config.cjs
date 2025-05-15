module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  reporters: [
    "default",
    ["jest-summary-reporter", {
      failuresOnly: false,
    }]
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.jsx", // ✅ Add this line
    "@testing-library/jest-dom"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
};
