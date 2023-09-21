import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	moduleNameMapper: {},
};

export default createJestConfig(config);
