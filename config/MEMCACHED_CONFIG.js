const MEMCACHED_CONFIG = {
  SERVER: '127.0.0.1',
  PORT: '11211',
  COMPLETE_PATH: '127.0.0.1:11211',
  KEY_LIFETIME: 1800,
  maxValue: 1024,
  maxKeySize: 1024,
  poolSize: 35,
  timeout: 5000,
};

module.exports = MEMCACHED_CONFIG;
