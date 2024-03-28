/** @type {import('next').NextConfig} */
const nextConfig = {
  // Can be safely removed in newer versions of Next.js
  //  future: {

  //     // by default, if you customize webpack config, they switch back to version 4.
  //     // Looks like backward compatibility approach.
  //     webpack5: true,
  //   },

  //   webpack(config) {
  //     config.resolve.fallback = {

  //       // if you miss it, all the other options in fallback, specified
  //       // by next.js will be dropped.
  //       ...config.resolve.fallback,

  //       fs: false, // the solution
  //     };

  //     return config;
  //   },
  // webpack: (config) => {
  //   const rules = config.module.rules
  //     .find((rule) => typeof rule.oneOf === "object")
  //     .oneOf.filter((rule) => Array.isArray(rule.use));
  //   rules.forEach((rule) => {
  //     rule.use.forEach((moduleLoader) => {
  //       if (
  //         moduleLoader.loader !== undefined &&
  //         moduleLoader.loader.includes("css-loader") &&
  //         typeof moduleLoader.options.modules === "object"
  //       ) {
  //         moduleLoader.options = {
  //           ...moduleLoader.options,
  //           modules: {
  //             ...moduleLoader.options.modules,
  //             // This is where we allow camelCase class names
  //             exportLocalsConvention: "camelCase",
  //           },
  //         };
  //       }
  //     });
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
