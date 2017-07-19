import { extendObservable, computed } from 'mobx'
class Infos {
    constructor () {
        extendObservable (this, {
            age: 44,
            name: 'liang xue chao',
            isOdd: computed(() => (this.age % 2 === 1))
        })
    }

    addAge () {
        this.age += 5
    }
    minAge () {
        this.age --
    }
    setName (newName) {
        this.name = newName
    }
}
export default Infos