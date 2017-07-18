import { extendObservable, computed } from 'mobx'
class Timer {
    constructor () {
        extendObservable(this, {
            time: 0,
            timer: null,
            isRunning: computed(() => !!this.timer)
        })
    }
    toggle() {
        this.timer ? this.stop() : this.start()
    }
    start () {
        if (this.timer) return
        this.timer = setInterval(() => this.time++ , 1000)
    }
    stop () {
        if (!this.timer) return
        clearInterval(this.timer)
        this.timer = null
    }
    reset () {
        this.time = 0
    }
}

export default new Timer()