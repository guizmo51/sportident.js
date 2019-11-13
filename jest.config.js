/* eslint-env node */

const totalCoverage = {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
};

const percentCoverage = (percent) => ({
    branches: percent,
    functions: percent,
    lines: percent,
    statements: percent,
})

const jestConfig = {
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '.*/.*\\.test\\.(jsx?|tsx?)',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/'],
    collectCoverage: true,
    maxConcurrency: 1,
    coverageThreshold: {
        './packages/sportident/src/': {
            branches: 92,
            functions: 93,
            lines: 95,
            statements: 93,
        },
        './packages/sportident/src/SiCard': {
            branches: 85,
            functions: 89,
            lines: 93,
            statements: 94,
        },
        './packages/sportident/src/SiDevice': percentCoverage(85),
        './packages/sportident/src/simulation': {
            branches: 94,
            functions: 100,
            lines: 97,
            statements: 97,
        },
        './packages/sportident/src/SiStation': {
            branches: 84,
            functions: 94,
            lines: 95,
            statements: 95,
        },
        './packages/sportident/src/storage': {
            branches: 97,
            functions: 100,
            lines: 99,
            statements: 99,
        },
        './packages/sportident/src/utils': totalCoverage,
        './packages/sportident/src/constants.ts': totalCoverage,
        './packages/sportident/src/siProtocol.ts': totalCoverage,
        './packages/sportident/src/testUtils.ts': totalCoverage,
    },
};
module.exports = jestConfig;