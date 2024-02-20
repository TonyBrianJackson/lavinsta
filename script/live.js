const startLive = document.querySelector('#startLive');
const livevideos = document.querySelector('#livevideos');
const endLive = document.getElementById('endLive');
const mainlivevideocomeraaccess = document.getElementById('mainlivevideocomeraaccess');
const tinylivevideocheck = document.getElementById('tinylivevideocheck');
const liveplay = document.querySelector('#liveplay');
const livevideocheckpause = document.getElementById('livevideocheckpause');
const boostlivevideo = document.getElementById('boostlivevideo');
livevideocheckpause.addEventListener('click', () => {
    tinylivevideocheck.pause();
});

liveplay.addEventListener('click', () => {
    tinylivevideocheck.play();
});
endLive.addEventListener('click', () => {
    startLive.disabled = false;
    mainlivevideocomeraaccess.pause();
    timerpause();
});
startLive.addEventListener('click', () => {
    startLive.disabled = true;
    activateLiveCamera();
    creatLive_Video_List();
    let livetimer = document.querySelector('.livetimer');
    livetimer.classList.toggle('livetimeractive');

    endLive.addEventListener('click', () => {
        startLive.disabled = false;
        mainlivevideocomeraaccess.pause();
    });
    ChangeState();
});

var chunks = [];
function creatLive_Video_List() {
    const live_Videos = document.querySelectorAll('.live_Videos');
    live_Videos.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(feed => {
            if (feed.isLive) {
                let gridshortlikecount = document.createElement('span');
                let gridshortcommentcount = document.createElement('span');
                let viewscount = document.createElement('span');
                let gridmenu = document.createElement('div');
    
                let reeltitleeee = document.createElement('span');
                let gridshort = document.createElement('div');
                let reelgrid1 = document.createElement('div');
                let reelgrid2 = document.createElement('div');
                let reelvid = document.createElement('div');
                let reelinfo = document.createElement('div');
                let reelvidvideo = document.createElement('video');
                let reelgridusersphoto = document.createElement('div');
                let reelgridposterimg = document.createElement('img');
                let reelgridpostername = document.createElement('b');
                let gridvideomore = document.createElement('span');
                let gridmenugrid = document.createElement('div');
    
                let gridmenusend = document.createElement('span');
                let gridmenusendimg = document.createElement('img');
                let gridvideodate = document.createElement('span');
                let commentandlikesharelivelikesflex = document.createElement('div');
                let reelvideocover = document.createElement('span');
                let gridmenudelete = document.createElement('span');
                let gridmenudeleteimg = document.createElement('img');
                
                live_Videos.appendChild(gridshort);
                gridshort.appendChild(reelgrid1);
                gridshort.appendChild(reelgrid2);
                gridshort.appendChild(gridvideomore);
                gridshort.appendChild(gridmenu);
                gridshort.appendChild(commentandlikesharelivelikesflex);
                reelgrid2.appendChild(reeltitleeee);
                reelgrid1.appendChild(reelvid);
                reelgrid1.appendChild(reelinfo);
                reelvid.appendChild(reelvidvideo);
                reelvid.appendChild(reelvideocover);
                reelinfo.appendChild(reelgridusersphoto);
                reelinfo.appendChild(reelgridpostername);
                reelinfo.appendChild(gridvideodate);
                reelgridusersphoto.appendChild(reelgridposterimg);
                reelgridusersphoto.classList.add('reelgridusersphoto');
    
                reeltitleeee.textContent = feed.title;
                reelvidvideo.src = feed.Property_Src;
                reeltitleeee.classList.add('reeltitleeee');
                reeltitleeee.addEventListener('click', () => {
                    if (reeltitleeee.textContent.length > 80) {
                        reeltitleeee.classList.toggle('reeltitleeeactive');
                    }
                });
    
                commentandlikesharelivelikesflex.appendChild(gridshortlikecount);
                commentandlikesharelivelikesflex.appendChild(gridshortcommentcount);
                commentandlikesharelivelikesflex.appendChild(viewscount);
                commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                gridshortlikecount.textContent = feed.likecount + 'likes';
                gridshortcommentcount.textContent = feed.commentcount + 'comments';
                viewscount.textContent = feed.viewcount + 'views';
                gridshortlikecount.classList.add('gridlike');
                gridshortcommentcount.classList.add('gridshortcommentcount');
                viewscount.classList.add('viewscount');
                gridshortlikecount.id = feed.id;
                gridshortcommentcount.id = feed.id;
                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - feed.time;
                    var token;
                    var moment = 'ago';
                    let maintime;
    
                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24 * 7 * 4 * 12) {
                        gridvideodate.innerHTML = feed.date;
                    } if (time == 60 * 60 * 24 * 7) {
                        token = 'week';
                        maintime = time / time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time <= 60 * 60 * 24 * 7 * 4 * 2) {
                        token = 'week';
                        maintime = time / 604800;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                    if (time == 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                    if (time == 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                    if (time == 60 * 2) {
                        token = 'min';
                        maintime = time / time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time == 60 * 60 || time <= 60 * 60 * 2) {
                        token = 'min';
                        maintime = time / 120;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                    if (time == 0) {
                        token = 'just now';
                        maintime = time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                    else if (time == 1) {
                        token = 'sec';
                        maintime = time / time;
                        gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time == 1 || time <= 60) {
                        token = 'sec';
                        maintime = 'just now';
                        gridvideodate.innerHTML = maintime;
                    }
                }
                startTime();
                gridvideodate.classList.add('gridvideodate');
                reelgridpostername.classList.add('videogridname');
                reelvideocover.classList.add('reelvideocover');
                reelgridposterimg.classList.add('usersphoto');
                reelvidvideo.classList.add('reelvidtowatch');
                reelinfo.classList.add('videoinfo');
                reelvid.classList.add('videoi');
                reelgrid1.classList.add('newvidc');
                reelgrid2.classList.add('newvidc1');
                gridshort.classList.add('newvideoposted');
                gridshort.classList.add('gridshort');
                reelvid.addEventListener('click', () => {
                    videovideoplayer.src = reelvidvideo.src;
                    playerplaybtn.style.display = 'none';
                    playerpausebtn.style.display = 'flex';
                    videoplayerplaybutton.style.display = 'none';
                    videoplayerpausebutton.style.display = 'flex';
                    videovideoplayer.play();
                    increaseviewscount(feed.id);
                });
                gridvideomore.innerHTML = '&vellip;';
                gridvideomore.classList.add('gridvideomore');
                gridvideomore.addEventListener('click', () => {
                    gridmenu.classList.toggle('gridmenuactive');
                });
                gridmenu.appendChild(gridmenugrid);
                gridmenugrid.appendChild(gridmenusend);
                gridmenugrid.appendChild(gridmenudelete);
    
                gridmenusend.appendChild(gridmenusendimg);
                gridmenudelete.appendChild(gridmenudeleteimg);
                gridmenudelete.classList.add('gridmenulike');
                gridmenu.classList.add('gridmenu');
                gridmenugrid.classList.add('gridmenugrid');
                gridmenusend.classList.add('gridmenulike');
    
                gridmenusendimg.src = 'newicons/send.png';
                gridmenudeleteimg.src = 'newicons/trash-can.png';
                gridmenusend.addEventListener('click', () => {
                    document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                        if (container.id === feed.id) {
                            container.classList.toggle('commentsectioncontaineractive');
                        } else {
                            container.classList.add('commentsectioncontainer');
                            container.classList.remove('commentsectioncontaineractive');
                        }
                    });
                    gridmenu.classList.toggle('gridmenuactive');
                });
    
                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === feed.posterId) {
                            reelgridposterimg.src = user.user_ProfilePicture;
                            reelgridpostername.innerHTML = user.user_Firstname + ' ' + user.user_Surname + '<span class="updatingprofilepicturetext">Uploaded a new Cover Photo</span> ';
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    reelgridposterimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    reelgridposterimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    reelgridposterimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    reelgridposterimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    reelgridposterimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    reelgridposterimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    reelgridposterimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    reelgridposterimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    reelgridposterimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    reelgridposterimg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                }
                Poster_Details();
            }
        });
    });
}
const liveArray = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
if (Array.isArray(liveArray)) {
    Feeds_Data_Base = liveArray;
    creatLive_Video_List();
} else {
    Feeds_Data_Base = [];
}
//Live Timer's Active
let active = false;
function startLiveTimer() {
    if (active) {
        let timer = document.querySelector('.timerlive').innerHTML;
        let arr = timer.split(':');//spliting timer into array':', so hour array[0],mins array[1],secs array[2] and so on 
        let hours = arr[0];//getting hours;
        let mins = arr[1];//getting mins;
        let secs = arr[2];//getting secs;
        if (secs == 59) {
            if (mins == 59) {
                hours++;
                mins = 0;
                if (hours < 10) {
                    hours = "0" + hours;
                }
            } else {
                mins++;
            } if (mins < 10) {
                mins = "0" + mins;
            } secs = 0;
        } else {
            secs++;
        } if (secs < 10) {
            secs = "0" + secs;
        }
        //update timer
        document.querySelector('.timerlive').innerHTML = hours + ":" + mins + ":" + secs;
        setTimeout(startLiveTimer, 1000);
        //keep repeating with the speed of one second

    }
};
function ChangeState() {
    if (active == false) {
        active = true;
        startLiveTimer();
    } else {
        active = false;
    }
}
function timerpause() {
    active = false;
}
let constraintObj = [{
    id: '' + new Date().getTime()
}];
function activateLiveCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(function (stream) {
            let media_Recorder = new MediaRecorder(stream);

            mainlivevideocomeraaccess.srcObject = stream;
            mainlivevideocomeraaccess.onloadedmetadata = () => {
                mainlivevideocomeraaccess.play();
                media_Recorder.start();
                setTimeout(() => {
                    media_Recorder.stop();
                }, 2000);
            }
            media_Recorder.ondataavailable = function (event) {
                chunks.push(event.data);
            }
            media_Recorder.onstop = function (event) {
                let blob = new Blob(chunks, { type: 'video/mp4' });
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                    var b64 = reader.result.replace(/^data:, + base64,/, '');
                    console.log(b64);
                    tinylivevideocheck.src = b64;
                    function pushLive_Video() {
                        const id = '' + new Date().getTime();
                        if (Array.isArray(ActiveAccount)) {
                            ActiveUser_Account = ActiveAccount;
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        Feeds_Data_Base.push({
                                            isLive: true,
                                            title: document.querySelector('#livepurposeinput').value,
                                            Property_Src: tinylivevideocheck.src,
                                            date: trackingDate,
                                            time: new Date().getTime(),
                                            posterId: user.user_Id,
                                            id: id,
                                            likecount: 0,
                                            commentcount: 0,
                                            sharecount: 0,
                                            viewcount: 0,
                                            attribute: 'live',
                                            likeactive: true,
                                            commentactive: true,
                                            shareactive: true,
                                            filter: 'default',
                                        });
                                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                        
                                    }
                                });
                            });
                        }
                    }
                    setTimeout(() => {
                        pushLive_Video();
                    }, 4000);
                }
                chunks = [];
            }
        })
    } else {
        alert('no camera device found');
    }
}
const searchlivevideo = document.querySelector('#searchlivevideo');
