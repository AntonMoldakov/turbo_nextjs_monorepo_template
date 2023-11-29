import { join, dirname, resolve } from "path";
import { TsconfigPathsPlugin }  from 'tsconfig-paths-webpack-plugin';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
          includePaths: [resolve(__dirname, '../src/assets/styles')],
          prependData: (content, loaderContext) => {
            const { resourcePath } = loaderContext;

            if (resourcePath.includes('/assets/')) {
              return content;
            }

            return `
            ${content}
          `;
          },
        },
      }
    }
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions })];
    }

    return config;
  },
};
export default config;
