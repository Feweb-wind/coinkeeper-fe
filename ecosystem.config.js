module.exports = {
  apps: [
    {
      name: 'coinkeeper-fe',
      script: 'juejue-vite-h5-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '101.201.108.246',
      ref: 'origin/master',
      repo: 'git@github.com:Feweb-wind/coinkeeper-fe.git',
      path: '~/workspace/coinkeeper-fe',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}