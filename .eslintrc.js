module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "react-app",
  plugins: ["emotion"],
  rules: {
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
  },
}
