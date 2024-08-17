// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/out.js',
  platform: 'node',
  format: 'esm',
  alias: {
    '~': './src'  // Alias `~` trỏ tới thư mục `src`
  }
}).catch(() => process.exit(1));
