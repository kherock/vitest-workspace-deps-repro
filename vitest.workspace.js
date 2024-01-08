import { defineWorkspace } from 'vitest/config';

import pkg from './package.json';

import { glob } from 'glob';
import slash from 'slash';

export default defineWorkspace(
  glob
    .sync(pkg.workspaces.map((glob) => `${glob}/vitest.config.js`))
    .map(slash),
);
