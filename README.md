# weshare

> Sharing tool

[![Build Status](https://travis-ci.com/Jeff-Tian/weshare.svg?branch=master)](https://travis-ci.com/Jeff-Tian/weshare)

## update travis heroku api_key
```bash
travis encrypt $(heroku authorizations:create) --add deploy.api_key --pro
```

## Generate deploy key
```bash
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# You will get 2 files:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```

## Related accounts

### open.weixin.qq.com
jie.tian@hotmail.com

### mp.weixin.qq.com
jie.tian@live.cn

### open.weibo.com
jie.tian@myfootprints.cn
