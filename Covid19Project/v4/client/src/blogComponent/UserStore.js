import { extendObservable } from 'mobx';

class UserStore {
  constructor() {

    extendObservable(this, {
      loading: true,
      isLoggedin: false,
      username: ''
    })

  }
}

export default new UserStore();