module.exports = {
  apps: [{
    name: 'spina-me',
    script: './server.js'
  }],
  deploy: {
    dev: {
      user: 'ubuntu',
      host: 'ec2-34-229-225-181.compute-1.amazonaws.com',
      key: '~/Documents/AWS/spina.pem',
      ref: 'origin/dev',
      repo: 'git@gitlab.doc.ic.ac.uk:as12015/spina-me.git',
      path: '/home/ubuntu/spina-me',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
