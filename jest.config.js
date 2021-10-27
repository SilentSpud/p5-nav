module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/__test__/config/importJestDOM.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__test__/__mocks__/fileMock.ts",
    "\\.(css|less|sass|scss)$": "<rootDir>/__test__/__mocks__/styleMock.ts"
  }
};
