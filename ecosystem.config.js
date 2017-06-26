module.exports = {
  apps: [{
    name: 'spina-me',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'spina.me',
      key: '~/Documents/AWS/spina.pem',
      ref: 'origin/dev',
      repo: 'git@gitlab.doc.ic.ac.uk:as12015/spina-me.git',
      path: '/home/ubuntu/spina-me',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
