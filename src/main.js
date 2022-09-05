import string from './css.js'


const code = document.querySelector('#code')
const styleTag = document.querySelector('#styleTag')

let n = 1
let time = 100
let id

const player = {
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'mid',
        '#btnSlow': 'slow',
        '#btnFast': 'fast'
    },
    init: () => {
        code.innerHTML = string.substring(0, n)
        styleTag.innerHTML = string.substring(0, n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        code.innerHTML = string.substring(0, n)
        styleTag.innerHTML = string.substring(0, n)
        code.scrollTop = code.scrollHeight
    },
    play: () => {
        id = setInterval(player.run, time)
    },
    pause: () => {
        return window.clearInterval(id)
    },
    mid: () => {
        player.pause()
        time = 100
        player.play()
    },
    slow: () => {
        player.pause()
        time = 300
        player.play()
    },
    fast: () => {
        player.pause()
        time = 0
        player.play()
    }
}

player.init()

