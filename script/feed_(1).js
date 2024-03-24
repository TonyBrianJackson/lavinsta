const publicplay = document.querySelector('.publicplay');
const publicpause = document.querySelector('.publicpause');
const publicvideoplayersrc = document.querySelector('.publicvideoplayersrc');
const publiccurrenttime = document.querySelector('.publiccurrenttime');
const publictotaltime = document.querySelector('.publictotaltime');
const publicvideoplayerprogressbar = document.querySelector('.publicvideoplayerprogressbar');
const publicvideoplayerprogressarea = document.querySelector('.publicvideoplayerprogressarea');

publicplay.addEventListener('click', () => {
    if (publicvideoplayersrc.src) {
        publicvideoplayersrc.play();
    }
});
publicpause.addEventListener('click', () => {
    if (publicvideoplayersrc.src) {
        publicvideoplayersrc.pause();
    }
});
publicvideoplayersrc.addEventListener('loadeddata', (e) => {
    let videoDuration = e.target.duration;
    let totalMin = Math.floor(videoDuration / 60);
    let totalSec = Math.floor(videoDuration % 60);

    //if totalmin are less than 10 add 0 at the beginning;
    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
    //if totalmin are less than 10 add 0 at the beginning;
    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
    publictotaltime.innerHTML = `${totalMin} : ${totalSec}`;

});

publicvideoplayersrc.addEventListener('timeupdate', () => {
    let currentVideoTime = event.target.currentTime;
    let currentMin = Math.floor(currentVideoTime / 60);
    let currentSec = Math.floor(currentVideoTime % 60);
    //if CurrentMin is < 10 add 0 at the beginning;
    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

    //if CurrentSec is < 10 add 0 at the beginning;
    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
    publiccurrenttime.innerHTML = `${currentMin} : ${currentSec}`;
    publicplay.style.display = 'none';
    publicpause.style.display = 'flex';

    //progress bar
    let videoDuration = event.target.duration;
    let progressvalue = (currentVideoTime / videoDuration) * 100;
    publicvideoplayerprogressbar.style.width = `${progressvalue}%`;
});
publicvideoplayersrc.addEventListener('ended',() => {
    publicplay.style.display = 'flex';
    publicpause.style.display = 'none';
});
publicvideoplayersrc.addEventListener('play',()=> {
    publicplay.style.display = 'none';
    publicpause.style.display = 'flex';
});
publicvideoplayersrc.addEventListener('pause',()=> {
    publicplay.style.display = 'flex';
    publicpause.style.display = 'none';
});
publicvideoplayerprogressarea.addEventListener('click', () => {
    let videoDuration = publicvideoplayersrc.duration;
    progressbarwidthvalue = publicvideoplayerprogressarea.clientWidth;
    let clickOffSetx = event.offsetX;
    publicvideoplayersrc.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
});


document.querySelector('.publivvideosidebarexit').addEventListener('click', () => {
    publicvideoplayersrc.pause();
    publicplay.style.display = 'flex'
    publicpause.style.display = 'none';
    document.querySelector('.publicvideosidebar').style.display = 'none';
});

document.querySelector('.publicreelsideexit').addEventListener('click', () => {
    document.querySelector('.publicreelside').style.display = 'none';
});
document.querySelector('#activatereelgadget').addEventListener('click', () => {
    document.querySelector('.reelsideoutercontainer').style.display = 'flex';
});
document.querySelector('.reelsideoutercontainerexit').addEventListener('click', () => {
    document.querySelector('.reelsideoutercontainer').style.display = 'none';
});
function createPublicGridShortVideo() {
    const Public_video_Reel_Column = document.querySelectorAll('.Public_video_Reel_Column');
    Public_video_Reel_Column.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(shortVideo => {
            if (shortVideo.type == 'public') {
                if (shortVideo.isShort) {
                    let gridshortlikecount = document.createElement('span');
                    let gridshortcommentcount = document.createElement('span');
                    let viewscount = document.createElement('span');
                    let gridmenusave = document.createElement('span');
                    let gridmenudelete = document.createElement('span');
                    let gridmenu = document.createElement('div');
    
                    let reeltitleeee = document.createElement('span');
                    let gridshort = document.createElement('div');
                    let reelgrid1 = document.createElement('div');
                    let reelgrid2 = document.createElement('div');
                    let reelvid = document.createElement('div');
                    let reelinfo = document.createElement('div');
                    let reelvidvideo = document.createElement('video');
                    let reelgridusersphoto = document.createElement('div')
                    let reelgridposterimg = document.createElement('img');
                    let reelgridpostername = document.createElement('b');
                    let gridvideotime = document.createElement('span');
                    let gridvideomore = document.createElement('span');
                    let gridmenugrid = document.createElement('div');
    
                    let gridmenusend = document.createElement('span');
                    let gridmenusendimg = document.createElement('img');
                    let gridmenudeleteimg = document.createElement('img');
                    let gridmenusaveimg = document.createElement('img');
                    let gridvideodate = document.createElement('span');
                    let commentandlikesharelivelikesflex = document.createElement('div');
                    let reelvideocover = document.createElement('span');
    
                    column.appendChild(gridshort);
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
                    reelvideocover.appendChild(gridvideotime);
                    reelinfo.appendChild(reelgridusersphoto);
                    reelinfo.appendChild(reelgridpostername);
                    reelinfo.appendChild(gridvideodate);
                    reelgridusersphoto.appendChild(reelgridposterimg);
                    reelgridusersphoto.classList.add('reelgridusersphoto');
                    reeltitleeee.textContent = shortVideo.title;
                    reelvidvideo.src = shortVideo.Property_Src;
                    reeltitleeee.classList.add('reeltitleeee');
    
                    function Poster_Details() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === shortVideo.posterId) {
                                reelgridposterimg.src = user.user_ProfilePicture;
                                reelgridpostername.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
    
                    reeltitleeee.addEventListener('click', () => {
                        if (reeltitleeee.textContent.length > 80) {
                            reeltitleeee.classList.toggle('reeltitleeeactive');
                        }
                    });
                    reelvidvideo.addEventListener('loadeddata', (e) => {
                        let videoDuration = e.target.duration;
                        let currentMin = Math.floor(videoDuration / 60);
                        let currentSec = Math.floor(videoDuration % 60);
                        //if min is less than 10 add 0 at the beginning;
                        currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                        //if secs is less than 10 add 0 at the beginning;
                        currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                        gridvideotime.innerHTML = `${currentMin} : ${currentSec}`;
                    });
    
                    commentandlikesharelivelikesflex.appendChild(gridshortlikecount);
                    commentandlikesharelivelikesflex.appendChild(gridshortcommentcount);
                    commentandlikesharelivelikesflex.appendChild(viewscount);
                    commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                    gridshortlikecount.textContent = shortVideo.likes.length + 'likes';
                    gridshortcommentcount.textContent = shortVideo.comments.length + 'comments';
                    gridshortlikecount.classList.add('gridvideolikecount');
                    gridshortcommentcount.classList.add('gridshortcommentcount');
                    viewscount.classList.add('viewscount');

                    gridshortlikecount.addEventListener('click',() => {
                        LikePopupsAndMore(shortVideo.id,'postlike');
                    });

                    let view_Count_Extension = '';
                    viewscount.textContent = `${shortVideo.views.length}${view_Count_Extension} views`;


                    gridshortlikecount.id = shortVideo.id;
                    gridshortcommentcount.id = shortVideo.id;
                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - shortVideo.time;
                        var token;
                        var moment = 'ago';
                        let maintime;
    
                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            gridvideodate.innerHTML = shortVideo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = 'just now';
                            gridvideodate.innerHTML = maintime;
                        }
                    }
                    startTime();
                    gridvideodate.classList.add('gridvideodate');
                    reelgridpostername.classList.add('videogridname');
                    gridvideotime.classList.add('gridvideotime');
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
                        publicvideoplayersrc.src = reelvidvideo.src;
                        publicvideoplayersrc.play();
                        document.querySelector('.publicvideosidebar').style.display = 'flex';
                        increaseviewscount(shortVideo.id);
                    });
    
                    gridmenu.appendChild(gridmenugrid);
                    gridmenugrid.appendChild(gridmenusave);
                    gridmenugrid.appendChild(gridmenudelete);
                    gridmenugrid.appendChild(gridmenusend);
                    gridvideomore.innerHTML = '&vellip;';
                    gridmenugrid.classList.add('gridmenugrid');
                    gridmenudelete.classList.add('gridmenulike');
                    gridmenusave.classList.add('gridmenulike');
                    gridmenusend.classList.add('gridmenulike');
    
    
                    gridmenusend.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === shortVideo.id) {
                                container.classList.toggle('commentsectioncontaineractive');
                            } else {
                                container.classList.add('commentsectioncontainer');
                                container.classList.remove('commentsectioncontaineractive');
                            }
                        });
                        gridmenu.classList.toggle('gridmenuactive');
                    });
    
                    gridmenusend.appendChild(gridmenusendimg);
    
                    gridmenusendimg.src = 'newicons/send.png';
    
                    gridmenusave.appendChild(gridmenusaveimg);
                    gridmenudelete.appendChild(gridmenudeleteimg);
                    gridmenusaveimg.src = 'newicons/bookmark-white.png';
                    gridmenudeleteimg.src = 'newicons/trash-can.png';
                    gridvideomore.innerHTML = '&vellip;';
    
                    gridvideomore.classList.add('gridvideomore');
                    gridmenu.classList.add('gridmenu');
    
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (shortVideo.posterId !== data.user_Id) {
                                gridmenudelete.remove();
                            }
                        });
                    }
    
                    gridvideomore.addEventListener('click', () => {
                        gridmenu.classList.toggle('gridmenuactive');
                    });

                    function pushSavedphotos() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        let saved = user.user_Saved;
                                        saved.forEach(item => {
                                            if (item.postId === shortVideo.id) {
                                                create_Message('already saved');
                                            } else {
                                                const newId = '' + new Date().getTime();
                                                saved.push({
                                                    savedId: user.user_Id,
                                                    postId: shortVideo.id,
                                                    id: newId,
                                                });
                                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                create_Message('saved successfully');
                                            }
                                        })
                                    }
                                });
                            });
                        }
                    }
        
                    gridmenusave.addEventListener('click', () => {
                        gridmenu.classList.toggle('gridmenuactive');
                        pushSavedphotos();
                        newSaved_Script();
                    });
                    
                    gridmenudelete.addEventListener('click', () => {
                        delete_Timeline_Post(shortVideo.id);
                        gridmenu.classList.toggle('gridmenuactive');
                    });
                }
            }
        });
    });
}
function creategridreel() {
    const ReelsVideos_Column = document.querySelectorAll('.ReelsVideos_Column');
    ReelsVideos_Column.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(shortVideo => {
            if (shortVideo.type == 'public') {
                if (shortVideo.isShort) {
                    let gridshortlikecount = document.createElement('span');
                    let gridshortcommentcount = document.createElement('span');
                    let viewscount = document.createElement('span');
                    let gridmenusave = document.createElement('span');
                    let gridmenudelete = document.createElement('span');
                    let gridmenu = document.createElement('div');
    
                    let reeltitleeee = document.createElement('span');
                    let gridshort = document.createElement('div');
                    let reelgrid1 = document.createElement('div');
                    let reelgrid2 = document.createElement('div');
                    let reelvid = document.createElement('div');
                    let reelinfo = document.createElement('div');
                    let reelvidvideo = document.createElement('video');
                    let reelgridusersphoto = document.createElement('div')
                    let reelgridposterimg = document.createElement('img');
                    let reelgridpostername = document.createElement('b');
                    let gridvideotime = document.createElement('span');
                    let gridvideomore = document.createElement('span');
                    let gridmenugrid = document.createElement('div');
    
                    let gridmenusend = document.createElement('span');
                    let gridmenusendimg = document.createElement('img');
                    let gridmenudeleteimg = document.createElement('img');
                    let gridmenusaveimg = document.createElement('img');
                    let gridvideodate = document.createElement('span');
                    let commentandlikesharelivelikesflex = document.createElement('div');
                    let reelvideocover = document.createElement('span');
    
                    column.appendChild(gridshort);
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
                    reelvideocover.appendChild(gridvideotime);
                    reelinfo.appendChild(reelgridusersphoto);
                    reelinfo.appendChild(reelgridpostername);
                    reelinfo.appendChild(gridvideodate);
                    reelgridusersphoto.appendChild(reelgridposterimg);
                    reelgridusersphoto.classList.add('reelgridusersphoto');
    
                    reeltitleeee.textContent = shortVideo.title;
                    reelvidvideo.src = shortVideo.Property_Src;
                    reeltitleeee.classList.add('reeltitleeee');
    
                    function Poster_Details() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === shortVideo.posterId) {
                                reelgridposterimg.src = user.user_ProfilePicture;
                                reelgridpostername.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
    
                    reeltitleeee.addEventListener('click', () => {
                        if (reeltitleeee.textContent.length > 80) {
                            reeltitleeee.classList.toggle('reeltitleeeactive');
                        }
                    });
                    reelvidvideo.addEventListener('loadeddata', (e) => {
                        let videoDuration = e.target.duration;
                        let currentMin = Math.floor(videoDuration / 60);
                        let currentSec = Math.floor(videoDuration % 60);
                        //if min is less than 10 add 0 at the beginning;
                        currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                        //if secs is less than 10 add 0 at the beginning;
                        currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                        gridvideotime.innerHTML = `${currentMin} : ${currentSec}`;
                    });
    
                    commentandlikesharelivelikesflex.appendChild(gridshortlikecount);
                    commentandlikesharelivelikesflex.appendChild(gridshortcommentcount);
                    commentandlikesharelivelikesflex.appendChild(viewscount);
                    commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                    gridshortlikecount.textContent = shortVideo.likes.length + 'likes';
                    gridshortcommentcount.textContent = shortVideo.comments.length + 'comments';

                    gridshortlikecount.addEventListener('click',() => {
                        LikePopupsAndMore(shortVideo.id,'postlike');
                    });

                    let view_Count_Extension = '';
                    viewscount.textContent = `${shortVideo.views.length}${view_Count_Extension} views`;

                    gridshortlikecount.classList.add('gridvideolikecount');
                    gridshortcommentcount.classList.add('gridshortcommentcount');
                    viewscount.classList.add('viewscount');
                    gridshortlikecount.id = shortVideo.id;
                    gridshortcommentcount.id = shortVideo.id;
                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - shortVideo.time;
                        var token;
                        var moment = 'ago';
                        let maintime;
    
                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            gridvideodate.innerHTML = shortVideo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            gridvideodate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = 'just now';
                            gridvideodate.innerHTML = maintime;
                        }
                    }
                    startTime();
                    gridvideodate.classList.add('gridvideodate');
                    reelgridpostername.classList.add('videogridname');
                    gridvideotime.classList.add('gridvideotime');
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
                        videovideoplayer.play();
                        increaseviewscount(shortVideo.id);
                    });
                    gridmenu.appendChild(gridmenugrid);
                    gridmenugrid.appendChild(gridmenusave);
                    gridmenugrid.appendChild(gridmenudelete);
                    gridmenugrid.appendChild(gridmenusend);
                    gridvideomore.innerHTML = '&vellip;';
                    gridmenugrid.classList.add('gridmenugrid');
                    gridmenudelete.classList.add('gridmenulike');
                    gridmenusave.classList.add('gridmenulike');
                    gridmenusend.classList.add('gridmenulike');
    
    
                    gridmenusend.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === shortVideo.id) {
                                container.classList.toggle('commentsectioncontaineractive');
                            } else {
                                container.classList.add('commentsectioncontainer');
                                container.classList.remove('commentsectioncontaineractive');
                            }
                        });
                        gridmenu.classList.toggle('gridmenuactive');
                    });
    
                    gridmenusend.appendChild(gridmenusendimg);
    
                    gridmenusendimg.src = 'newicons/send.png';
    
                    gridmenusave.appendChild(gridmenusaveimg);
                    gridmenudelete.appendChild(gridmenudeleteimg);
                    gridmenusaveimg.src = 'newicons/bookmark-white.png';
                    gridmenudeleteimg.src = 'newicons/trash-can.png';
                    gridvideomore.innerHTML = '&vellip;';
    
                    gridvideomore.classList.add('gridvideomore');
                    gridmenu.classList.add('gridmenu');
    
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (shortVideo.posterId !== data.user_Id) {
                                gridmenudelete.remove();
                            }
                        });
                    }
    
                    gridvideomore.addEventListener('click', () => {
                        gridmenu.classList.toggle('gridmenuactive');
                    });

                    
                    function pushSavedphotos() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        let saved = user.user_Saved;
                                        saved.forEach(item => {
                                            if (item.postId === shortVideo.id) {
                                                create_Message('already saved');
                                            } else {
                                                const newId = '' + new Date().getTime();
                                                saved.push({
                                                    savedId: user.user_Id,
                                                    postId: shortVideo.id,
                                                    id: newId,
                                                });
                                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                create_Message('saved successfully');
                                            }
                                        })
                                    }
                                });
                            });
                        }
                    }
        
                    gridmenusave.addEventListener('click', () => {
                        gridmenu.classList.toggle('gridmenuactive');
                        pushSavedphotos();
                        newSaved_Script();
                    });
                    
                    gridmenudelete.addEventListener('click', () => {
                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                            if (popup.id === shortVideo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        })
                        gridmenu.classList.toggle('gridmenuactive');
                    });
                }
            }
        });
    });
}
if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    createPublicGridShortVideo();
    creategridreel();
} else {
    Feeds_Data_Base = [];
}