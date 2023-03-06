module.exports = {
  apps: [
    {
      name: 'next',
      cwd: '/root/savant',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',

      },
    },
  ],
};
