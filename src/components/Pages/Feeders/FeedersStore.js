import { observable } from "mobx"

class FeedersStore {
    @observable players = ["Joy", "Min Han"];
    @observable dp = ["./assets/img/joy.jpg", "./assets/img/joy.jpg"];
}
var store = new FeedersStore;

export default store