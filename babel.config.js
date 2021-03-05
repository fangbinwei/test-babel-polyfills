module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: 'usage',
        // corejs: 3,
        targets: { ie: 11 },
      },
    ],
  ],
  plugins: [
      // "@babel/transform-runtime",
    // [
    //   "polyfill-regenerator",
    //   {
    //     method: "usage-global",
    //   },
    // ],
    [
      "polyfill-corejs3",
      {
        method: "usage-pure",
        targets: { ie: 11 },
      },
    ],
  ],
};

const bak = {
  overrides: [
    {
      exclude: [/@babel[/|\\\\]runtime/, /core-js/],

      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              chrome: "58",
              ie: "11",
            },
          },
        ],
      ],
      plugins: [
        ["@babel/plugin-transform-runtime"],

        [
          "polyfill-corejs3",
          {
            method: "usage-pure",
            targets: {
              chrome: "58",
              ie: "11",
            },
          },
        ],
      ],
    },
    {
      // there are some untranspiled code in @babel/runtime
      // https://github.com/babel/babel/issues/9903
      include: [/@babel[/|\\\\]runtime/],

      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              chrome: "58",
              ie: "11",
            },
          },
        ],
      ],
      plugins: [

        [
          "polyfill-corejs3",
          {
            method: "usage-pure",
            targets: {
              chrome: "58",
              ie: "11",
            },
          },
        ],
      ],
    },
  ],
}