module.exports = {
  apps: [{
    name: 'spina-me',
    script: './server.js'
  }],
  deploy: {
    dev: {
      user: 'ubuntu',
      host: 'ec2-54-174-243-250.compute-1.amazonaws.com',
      key: '~/Documents/AWS/spina.pem',
      ref: 'origin/dev',
      repo: 'git@gitlab.doc.ic.ac.uk:as12015/spina-me.git',
      path: '/home/ubuntu/spina-me',
      'post-deploy': 'npm install && npm run ng build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
