export default {
    roots: ["<rootDir>/src/test/"],
    testEnvironment: "jsdom",
    moduleDirectories: ['src', 'node_modules'],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
