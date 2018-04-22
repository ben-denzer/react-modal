# @bdenzer/react-modal

### Simple Modal Component For React - Styled To Look Like Bootstrap's Modal

#### yarn test:watch throws ENOSPC error on Linux

This issue is that you have to increase the number of 'watchers' on your system. Run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` to fix. (From [this issue](https://github.com/facebook/jest/issues/3254) in the Jest repository.)
