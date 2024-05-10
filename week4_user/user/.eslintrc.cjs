module.exports = {
    plugins: [
        'react', // React 규칙
        'prettier', // 코드 스타일 충돌 방지
        '@typescript-eslint', // TypeScript 코드 규칙
        'react-refresh', // 변경 코드 자동 반영
    ],
    extends: [
        'eslint:recommended', // ESLint에서 권장하는 JavaScript 규칙
        'plugin:@typescript-eslint/recommended', // TypeScript 코드 권장 규칙
        'plugin:react-hooks/recommended', // React Hooks 권장 규칙
        'plugin:prettier/recommended', // Prettier가 관리하는 코드 스타일 규칙을 ESLint에서 무시하도록 설정
        'airbnb', // Airbnb JavaScript 스타일 가이드
        'plugin:import/errors', // 잘못된 import/export 구문 검출
        'plugin:import/warnings', // import/export 관련 경고
        'plugin:import/typescript', // TypeScript import/export
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'linebreak-style': 0, // 개행 스타일(CRLF vs LF) 검사 비활성화
        'prettier/prettier': 0, // Prettier 충돌 규칙 비활성화
        'import/extensions': 0, // 파일 확장자 import 규칙 비활성화
        'import/no-unresolved': 0, // import 경로 무시
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'import/prefer-default-export': 0, // default export 권장 비활성화
        'react/prop-types': 0, // React의 PropTypes 검사 비활성화
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // 파일 확장자 지정
        'simple-import-sort/imports': 'error', // import 정렬
        'no-multi-spaces': 'error', // 공백 중복 금지
        'eol-last': ['error', 'always'], // line의 가장 마지막 줄에는 개행 넣기
        '@typescript-eslint/no-unused-vars': ['error'], // 사용하지 않는 변수가 있을 경우 오류
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
