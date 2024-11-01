let music = new Audio('audio/0.mp3')

let masterplay = document.querySelector('.pausebtn')
let gif = document.querySelector('.gif')
let masterkeysong = document.querySelector('.masterkeysong')
let masterkeysinger = document.querySelector('.masterkeysinger')
let inner_img = document.querySelector('.inner-img')
let vol_range = document.getElementById('vol-range')
let off = document.querySelector('.off')

let line = document.getElementById('line')
let running = document.querySelector('.running')
let total = document.querySelector('.duration')
let length = document.getElementsByClassName('length')
let mute = document.querySelector('.mute')
let unmute = document.querySelector('.unmute')

let item = Array.from(document.getElementsByClassName('item'))
let songbox_menu = Array.from(document.getElementsByClassName('songbox-menu'))
let songindex = 0



let data = [
    {
        flim: 'One Love', name: 'Shubh', thumnail: 'asset/3.jpg',
    },
    {
        flim: 'Satranga ', name: 'Arijit Singh', thumnail: 'asset/2.jpg',
    },
    {
        flim: 'Ye Tune Kya Kiya', name: 'Pritam, Javed Bashir', thumnail: 'asset/1.jpg',
    },

    {
        flim: 'Laapataa Ladies', name: 'Arijit Singh', thumnail: 'asset/4.jpg',
    },
    {
        flim: 'Heeriye', name: 'Arijit Singh, Jasleen Royal', thumnail: 'asset/5.jpg',
    },
    {
        flim: 'Gulabi Sadi ', name: 'Sanju Rathod', thumnail: 'asset/6.jpg',
    },
    {
        flim: 'NO LOVE  ', name: 'Shubh ', thumnail: 'asset/7.jpg',
    },
    {
        flim: 'Ve Haaniyaan', name: 'Avvy Sra, Danny, Sagar', thumnail: 'asset/8.jpg',
    },
    {
        flim: 'O Mahi', name: 'Arrijit Singh ', thumnail: 'asset/9.jpg',
    },
    {
        flim: 'Apna Bana Le', name: 'Arrijit Singh', thumnail: 'asset/10.jpg',
    },
    {
        flim: 'Bahara ', name: 'Shreya Ghosal ', thumnail: 'asset/11.jpg',
    },
    {
        flim: 'Chaleya ', name: 'Arrijit Singh ', thumnail: 'asset/12.jpg',
    },
    {
        flim: 'Kabhi Kabhi Aditi Zindag', name: 'Rashid Ali', thumnail: 'asset/13.jpg',
    },
    {
        flim: 'Pyaar Hota Hai', name: 'Arrijit Singh', thumnail: 'asset/14.jpg',
    },
    {
        flim: 'Kesariya', name: 'Arrijit Singh', thumnail: 'asset/15.jpg',
    },

]



item.forEach((element, i) => {
    /*console.log(element, i)*/
    element.getElementsByTagName('img')[0].src = data[i].thumnail
    element.getElementsByClassName('songname')[0].innerHTML = data[i].flim
    element.getElementsByClassName('album')[0].innerHTML = data[i].name

});


songbox_menu.forEach((element, i) => {
    /*console.log(element, i)*/
    element.getElementsByTagName('img')[0].src = data[i].thumnail
    element.getElementsByClassName('songname')[0].innerHTML = data[i].flim
    element.getElementsByClassName('album')[0].innerHTML = data[i].name

});


//handle play/pause click

masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity = 1

    }
    else {
        music.pause()
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0

    }
})

//listen to events

music.addEventListener('timeupdate', () => {
    progress = parseInt((music.currentTime / music.duration) * 100)
    line.value = progress
})

line.addEventListener('change', () => {
    music.currentTime = line.value * music.duration / 100


})
/*
music.addEventListener('timeupdate', () => {
    progress = (parseFloat(music.currentTime / music.duration))
    if (!Number.isInteger(progress)) {
        progress = progress.toFixed(2)
    }
    running.innerHTML==progress
    console.log(running.value=progress);
    
})
if (music.play()) {
    total.innerHTML='5:00'
}
*/


const makechange = () => {
    Array.from(document.getElementsByClassName('center')).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
        music.pause()
        gif.style.opacity = 0
    })
}

Array.from(document.getElementsByClassName('center')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makechange()
        songindex = parseInt(e.target.id)
        inner_img.src = data[songindex].thumnail
        masterkeysong.innerHTML = data[songindex].flim
        masterkeysinger.innerHTML = data[songindex].name
        music.src = `audio/${songindex + 1}.mp3`
        music.play()
        gif.style.opacity = 1
        element.classList.remove('fa-play')
        element.classList.add('fa-pause')
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    })
});

Array.from(document.getElementsByClassName('duplicate')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makechange()
        songindex = parseInt(e.target.id)
        masterkeysong.innerHTML = data[songindex].flim
        inner_img.src = data[songindex].thumnail
        masterkeysinger.innerHTML = data[songindex].name
        music.src = `audio/${songindex + 1}.mp3`
        music.play()
        gif.style.opacity = 1
        element.classList.remove('fa-play')
        element.classList.add('fa-pause')
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
    })
});


document.querySelector('.previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    } else {
        songindex -= 1
    }
    music.src = `audio/${songindex + 1}.mp3`
    masterkeysong.innerHTML = data[songindex].flim
    masterkeysinger.innerHTML = data[songindex].name
    inner_img.src = data[songindex].thumnail
    music.currentTime = 0
    music.play()
    gif.style.opacity = 1
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
})
document.querySelector('.next').addEventListener('click', () => {
    if (songindex >= 15) {
        songindex = 0
    } else {
        songindex += 1
    }
    music.src = `audio/${songindex + 1}.mp3`
    masterkeysong.innerHTML = data[songindex].flim
    masterkeysinger.innerHTML = data[songindex].name
    inner_img.src = data[songindex].thumnail
    music.currentTime = 0
    music.play()
    gif.style.opacity = 1
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
})



mute.addEventListener('click', (element) => {
    unmute.style.display = 'block'
    mute.style.display = 'none'
    music.volume = 0
    vol_range.value = 0
})
unmute.addEventListener('click', (element) => {
    unmute.style.display = 'none'
    mute.style.display = 'block'
    music.volume = 1
    vol_range.value = 100

})


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime
    let music_dur = music.duration

    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)


    if (sec1 < 10) {
        sec1 = `0${sec1}`

    }
    total.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`

    }
    running.innerHTML = `${min2}:${sec2}`


})

vol_range.addEventListener('input', () => {
    music.volume = vol_range.value / 100

})


vol_range.addEventListener('change', () => {

    if (vol_range.value == 0) {
        off.style.display = 'block'
        mute.style.display = 'none'
    }
    else {
        off.style.display = 'none'
        mute.style.display = 'block'
    }
})
/*
let search = document.querySelector('#search')
let sn = document.querySelector('.songname')

search.addEventListener('click',()=>{
    for (let i = 0; i < sn.length; i++) {
        let match = item[i].getElementsByClassName('songname')[0]
        if (match) {
            let tv =match.textContent||match.innerHTML
            if (tv.toUpperCase().indexOf(search)>-1) {
                item[i].style.display=''
            }else{
                item[i].style.display='none'
                
            }
        }
    }
})

*/