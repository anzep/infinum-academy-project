import {observable} from 'mobx';

class AppStore {
  @observable shows = [];
}

export default new AppStore();
