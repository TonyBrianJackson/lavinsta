function creategridvideo(feedcolumn) {
    feedcolumn.innerHTML = '';
    Feeds_Data_Base.forEach(gridvideo => {
        if (gridvideo.type == 'public') {
            if (gridvideo.isVideo) {
                let gridshortlikecount = document.createElement('span');
                let reeltitleeee = document.createElement('span');
                let gridshort = document.createElement('div');
                let reelgrid1 = document.createElement('div');
                let reelgrid2 = document.createElement('div');
                let reelvid = document.createElement('a');
                let reelinfo = document.createElement('div');
                let reelvidvideo = document.createElement('video');
                let reelgridusersphoto = document.createElement('div');
                let reelgridposterimg = document.createElement('img');
                let reelgridpostername = document.createElement('b');
                let gridvideotime = document.createElement('span');
                let more = document.createElement('span');
                let gridvideodate = document.createElement('span');
                let commentandlikesharelivelikesflex = document.createElement('div');
                let reelvideocover = document.createElement('span');

                feedcolumn.appendChild(gridshort);

                gridshort.appendChild(reelgrid1);
                gridshort.appendChild(reelgrid2);
                gridshort.appendChild(more);
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
                reelgridusersphoto.addEventListener('click',()=> {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            createProfileOptions(gridvideo.posterId, data.user_Id);
                        });
                    }
                });
                reeltitleeee.textContent = gridvideo.title;
                reelvidvideo.src = gridvideo.Property_Src;
                reelvid.href = `view.html?video_Id=${gridvideo.id}`;
                function Poster_Details() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === gridvideo.posterId) {
                            reelgridposterimg.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            reelgridpostername.innerHTML = username;
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

                reeltitleeee.classList.add('reeltitleeee');
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
                commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                gridshortlikecount.innerHTML = `${gridvideo.likes.length} like(s) &centerdot; ${gridvideo.comments.length} comments(s) &centerdot; ${gridvideo.views.length} views(s)`;

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - gridvideo.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                        token = 'month';
                        maintime = time / 2419200;
                        gridvideodate.innerHTML = gridvideo.date;
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
                more.innerHTML = vellip;

                more.innerHTML = vellip;

                more.classList.add('more');


                more.addEventListener('click', () => {
                    create_Post_Options_Script(feedcolumn, gridvideo.id);
                });
            }
        }
    });
}
function create_TimeLine_G_Video(feedcolumn) {
    feedcolumn.innerHTML = '';
    Feeds_Data_Base.forEach(gridvideo => {
        if (gridvideo.type == 'timeline') {
            if (gridvideo.isVideo) {
                let gridshortlikecount = document.createElement('span');
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
                let gridvideotime = document.createElement('span');
                let more = document.createElement('span');
                let gridvideodate = document.createElement('span');
                let commentandlikesharelivelikesflex = document.createElement('div');
                let reelvideocover = document.createElement('span');

                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === gridvideo.posterId) {
                        let connections = user.user_Connection;
                        if (connections) {
                            connections.forEach(connect => {
                                if (connect.connectionId === feedcolumn.id) {
                                    feedcolumn.appendChild(gridshort);
                                }
                            });
                        }
                    }
                });
                if (feedcolumn.id === gridvideo.posterId) {
                    feedcolumn.appendChild(gridshort);
                }
                gridshort.appendChild(reelgrid1);
                gridshort.appendChild(reelgrid2);
                gridshort.appendChild(more);
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
                reelgridusersphoto.addEventListener('click',()=> {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            createProfileOptions(gridvideo.posterId, data.user_Id);
                        });
                    }
                });
                reeltitleeee.textContent = gridvideo.title;
                reelvidvideo.src = gridvideo.Property_Src;
                function Poster_Details() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === gridvideo.posterId) {
                            reelgridposterimg.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            reelgridpostername.innerHTML = username;
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
                reeltitleeee.classList.add('reeltitleeee');
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
                commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                gridshortlikecount.innerHTML = `${gridvideo.likes.length} like(s) &centerdot; ${gridvideo.comments.length} comments(s) &centerdot; ${gridvideo.views.length} views(s)`;


                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - gridvideo.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                        token = 'month';
                        maintime = time / 2419200;
                        gridvideodate.innerHTML = gridvideo.date;
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
                more.innerHTML = vellip;
                more.classList.add('more');
                more.addEventListener('click', () => {
                    create_Post_Options_Script(feedcolumn, gridvideo.id);
                });
            }
        }
    });
}
function create_Short_Video(feedcolumn) {
    feedcolumn.innerHTML = '';
    Feeds_Data_Base.forEach(gridvideo => {
        if (gridvideo.type == 'public') {
            if (gridvideo.isShort) {
                let gridshortlikecount = document.createElement('span');
                let reeltitleeee = document.createElement('span');
                let gridshort = document.createElement('div');
                let reelgrid1 = document.createElement('div');
                let reelgrid2 = document.createElement('div');
                let reelvid = document.createElement('a');
                let reelinfo = document.createElement('div');
                let reelvidvideo = document.createElement('video');
                let reelgridusersphoto = document.createElement('div');
                let reelgridposterimg = document.createElement('img');
                let reelgridpostername = document.createElement('b');
                let gridvideotime = document.createElement('span');
                let more = document.createElement('span');
                let gridvideodate = document.createElement('span');
                let commentandlikesharelivelikesflex = document.createElement('div');
                let reelvideocover = document.createElement('span');

                feedcolumn.appendChild(gridshort);

                gridshort.appendChild(reelgrid1);
                gridshort.appendChild(reelgrid2);
                gridshort.appendChild(more);
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
                reelgridusersphoto.addEventListener('click',()=> {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            createProfileOptions(gridvideo.posterId, data.user_Id);
                        });
                    }
                });
                reeltitleeee.textContent = gridvideo.title;
                reelvidvideo.src = gridvideo.Property_Src;
                reelvid.href = `view.html?video_Id=${gridvideo.id}`;
                function Poster_Details() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === gridvideo.posterId) {
                            reelgridposterimg.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            reelgridpostername.innerHTML = username;
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

                reeltitleeee.classList.add('reeltitleeee');
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
                commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                gridshortlikecount.innerHTML = `${gridvideo.likes.length} like(s) &centerdot; ${gridvideo.comments.length} comments(s) &centerdot; ${gridvideo.views.length} views(s)`;

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - gridvideo.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                        token = 'month';
                        maintime = time / 2419200;
                        gridvideodate.innerHTML = gridvideo.date;
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
                more.innerHTML = vellip;

                more.innerHTML = vellip;

                more.classList.add('more');


                more.addEventListener('click', () => {
                    create_Post_Options_Script(feedcolumn, gridvideo.id);
                });
            }
        }
    });
}
function create_Saved_Videos(feedcolumn) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        feedcolumn.innerHTML = '';
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        Feeds_Data_Base.forEach(gridvideo => {
            if (user.user_Id === feedcolumn.id) {
                let savedItems = user.user_Saved;
                if (gridvideo.isVideo) {
                    savedItems.forEach(item => {
                        if (item.postId === gridvideo.id) {
                            let gridshortlikecount = document.createElement('span');
                            let reeltitleeee = document.createElement('span');
                            let gridshort = document.createElement('div');
                            let reelgrid1 = document.createElement('div');
                            let reelgrid2 = document.createElement('div');
                            let reelvid = document.createElement('a');
                            let reelinfo = document.createElement('div');
                            let reelvidvideo = document.createElement('video');
                            let reelgridusersphoto = document.createElement('div');
                            let reelgridposterimg = document.createElement('img');
                            let reelgridpostername = document.createElement('b');
                            let gridvideotime = document.createElement('span');
                            let more = document.createElement('span');
                            let gridvideodate = document.createElement('span');
                            let commentandlikesharelivelikesflex = document.createElement('div');
                            let reelvideocover = document.createElement('span');

                            feedcolumn.appendChild(gridshort);

                            gridshort.appendChild(reelgrid1);
                            gridshort.appendChild(reelgrid2);
                            gridshort.appendChild(more);
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
                            reelgridusersphoto.addEventListener('click',()=> {
                                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                    ActiveUser_Account.forEach(data => {
                                        createProfileOptions(gridvideo.posterId, data.user_Id);
                                    });
                                }
                            });
                            reeltitleeee.textContent = gridvideo.title;
                            reelvidvideo.src = gridvideo.Property_Src;
                            reelvid.href = `view.html?video_Id=${gridvideo.id}`;
                            function Poster_Details() {
                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === gridvideo.posterId) {
                                        reelgridposterimg.src = user.user_ProfilePicture;
                                        let username;
                                        user.user_Mid_Name ? username =
                                            user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                            username = user.user_Firstname + ' ' + user.user_Surname;
                                        reelgridpostername.innerHTML = username;
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

                            reeltitleeee.classList.add('reeltitleeee');
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
                            commentandlikesharelivelikesflex.classList.add('commentandlikesharelivelikesflex');
                            gridshortlikecount.innerHTML = `${gridvideo.likes.length} like(s) &centerdot; ${gridvideo.comments.length} comments(s) &centerdot; ${gridvideo.views.length} views(s)`;

                            const startTime = function () {
                                let time;
                                let timeresult = new Date().getTime();
                                let miliseconds = timeresult - gridvideo.time;
                                var token;
                                var moment = 'ago';
                                let maintime;

                                time = miliseconds / 1000;
                                if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                    token = 'month';
                                    maintime = time / 2419200;
                                    gridvideodate.innerHTML = gridvideo.date;
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
                            more.innerHTML = vellip;

                            more.innerHTML = vellip;

                            more.classList.add('more');


                            more.addEventListener('click', () => {
                                create_Post_Options_Script(feedcolumn, gridvideo.id);
                            });
                        }
                    });
                }
            }
        });
    });
}
