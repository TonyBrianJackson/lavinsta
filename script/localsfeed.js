if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    get_Comment_Active_Page();
    createGridPost();
    createPublicGridPost();
    createOtherGridPost();
    document.addEventListener('DOMContentLoaded',createPhotoPostOnTimeLine());
} else {
    Feeds_Data_Base = [];
}

function createPhotoPostOnTimeLine() {
    document.querySelectorAll('.usersfeedcolumn').forEach(feedcolumn => {
        feedcolumn.innerHTML = '';
        let random = Math.floor(Math.random() * Feeds_Data_Base.length)
        Feeds_Data_Base.forEach(photo => {
            if (photo.type == 'timeline') {
                let post = document.createElement('div');
                let head = document.createElement('div');
                let authorsImg = document.createElement('img');
                let nameAndImg = document.createElement('div');
                let name = document.createElement('a');
                let title = document.createElement('div');
                let main = document.createElement('a');
                let commentinput = document.createElement('div');
                let commentinputinput = document.createElement('input');

                let sub = document.createElement('div');
                let more = document.createElement('span');

                more.addEventListener('click', () => {
                    create_Post_Options_Script(main, photo.id);
                });

                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                    let mainimg = document.createElement('img');
                    main.appendChild(mainimg);
                    mainimg.classList.add('mainimg');
                    // mainimg.addEventListener('click', () => {
                    //     createMain_GridPost(photo.id, mainimg.src);
                    // });

                    function create_Multi_Tile() {
                        let children_Tile_Box = document.createElement('nav');
                        let children = photo.children;
                        main.appendChild(children_Tile_Box);
                        children_Tile_Box.classList.add('children_Tile_Box');
                        children.forEach(child => {
                            let tile = document.createElement('div');
                            let image = document.createElement('img');
                            children_Tile_Box.appendChild(tile);
                            tile.appendChild(image);
                            image.src = child.Property_Src;
                            tile.id = child.Child_Id;
                            tile.addEventListener('click', () => {
                                loader(main);
                                mainimg.src = image.src;
                            });
                        });
                    }
                    if (photo.children) {
                        create_Multi_Tile();
                        let children = photo.children;
                        for (let i = 0; i < children.length; i++) {
                            mainimg.src = children[0].Property_Src;
                        }
                    } else {
                        mainimg.src = photo.Property_Src;
                    }
                    main.style.backgroundImage = "url(" + photo.Property_Src + ")";
                    mainimg.loading = 'lazy';
                    main.classList.add('imagecontainerLoading');
                    function loaded() {
                        main.classList.add('loaded');
                    }
                    if (mainimg.complete) {
                        loaded();
                    } else {
                        mainimg.addEventListener('load', loaded);
                    }
                    function filter_PostImage() {
                        if (photo.filter == 'default') {
                            mainimg.classList.add('--color-default');
                        } else if (photo.filter == 'gray') {
                            mainimg.classList.add('--color-gray');
                        } else if (photo.filter == 'contrast') {
                            mainimg.classList.add('--color-contrast');
                        } else if (photo.filter == 'bright') {
                            mainimg.classList.add('--color-bright');
                        } else if (photo.filter == 'blur') {
                            mainimg.classList.add('--color-blur');
                        } else if (photo.filter == 'invert') {
                            mainimg.classList.add('--color-invert');
                        } else if (photo.filter == 'sepia') {
                            mainimg.classList.add('--color-sepia');
                        } else if (photo.filter == 'hue-rotate') {
                            mainimg.classList.add('--color-hue-rotate');
                        } else if (photo.filter == 'opacity') {
                            mainimg.classList.add('--color-opacity');
                        } else if (photo.filter == 'satulate') {
                            mainimg.classList.add('--color-satulate');
                        }
                    }
                    filter_PostImage();
                } if (photo.isText) {
                    let textPost = document.createElement('p');
                    main.appendChild(textPost);
                    textPost.innerHTML = photo.Property_Src;
                    textPost.textContent.split(" ").forEach(texttitle => {
                        prefix.forEach(unit => {
                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                if (unit.prefixName == 'https://') {
                                    let newtitle = textPost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    textPost.innerHTML = newtitle;
                                } else {
                                    let newtitle = textPost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    textPost.innerHTML = newtitle;
                                }
                            }
                        });
                    });
                    textPost.classList.add('textPost');
                    textPost.addEventListener('click', () => {
                        textPost.classList.toggle('textPostmoreorless');
                    });
                    function textTheme() {
                        function textThemeBackGround() {
                            if (photo.themeMode == 'default') {
                                main.classList.add('themedefault');
                            } else if (photo.themeMode == 'claimer') {
                                main.classList.add('themeclaimer');
                            } else if (photo.themeMode == 'wriser') {
                                main.classList.add('themewriser');
                            } else if (photo.themeMode == 'xriphor') {
                                main.classList.add('themexriphor');
                            } else if (photo.themeMode == 'nophia') {
                                main.classList.add('themenophia');
                            } else if (photo.themeMode == 'oracle') {
                                main.classList.add('themeoracle');
                            } else if (photo.themeMode == 'folah') {
                                main.classList.add('themefolah');
                            } else if (photo.themeMode == 'grino') {
                                main.classList.add('themegrino');
                            } else if (photo.themeMode == 'rhisxos') {
                                main.classList.add('themerhisxos');
                            } else if (photo.themeMode == 'nicklezol') {
                                main.classList.add('themenicklezol');
                            } else if (photo.themeMode == 'mirox') {
                                main.classList.add('thememirox');
                            } else if (photo.themeMode == 'xosiphor') {
                                main.classList.add('themexosiphor');
                            } else if (photo.themeMode == 'rhicode') {
                                main.classList.add('themerhicode');
                            } else if (photo.themeMode == 'srccod') {
                                main.classList.add('themesrccode');
                            } else if (photo.themeMode == 'xporiah') {
                                main.classList.add('themexporiah');
                            } else if (photo.themeMode == 'niph') {
                                main.classList.add('themeniph');
                            }
                        }
                        textThemeBackGround();
                        function textThemeFont() {
                            if (photo.fontMode == 'Default') {
                                textPost.classList.add('TextDefault');
                            } else if (photo.fontMode == 'Times') {
                                textPost.classList.add('TextTimes');
                            } else if (photo.fontMode == 'Asul') {
                                textPost.classList.add('TextAsul');
                            } else if (photo.fontMode == 'Satisfy') {
                                textPost.classList.add('TextSatisfy');
                            } else if (photo.fontMode == 'Great Vibes') {
                                textPost.classList.add('TextGreatVibes');
                            }
                        }
                        textThemeFont();
                    }
                    textTheme();
                } if (photo.isVideo) {
                    let timelinevideo = document.createElement('video');
                    let timelinevideocover = document.createElement('div');
                    let timelinevideobottomtrols = document.createElement('span');
                    let timelinebottomplay = document.createElement('img');
                    let timelinebottompause = document.createElement('img');
                    let timelinebottomnext = document.createElement('img');
                    let timelinebottomprevious = document.createElement('img');
                    let timelineprogressarea = document.createElement('div');
                    let timelineprogressbar = document.createElement('span');
                    let timelinevideotime = document.createElement('div');
                    let timelinecurrenttime = document.createElement('span');
                    let timelinetotaltime = document.createElement('span');
                    let controlercontainer = document.createElement('div');
                    let timelinemute = document.createElement('img');
                    let timelineunmute = document.createElement('img');

                    let viewsgrid = document.createElement('div');
                    let viewscount = document.createElement('p');
                    viewsgrid.appendChild(viewscount);
                    viewsgrid.classList.add('viewsgridtimelinevideo');
                    viewscount.classList.add('viewscount');
                    viewscount.id = photo.id;
                    let view_Count_Extension = '';
                    viewscount.textContent = `${photo.views.length}${view_Count_Extension} views`;

                    timelinevideo.src = photo.Property_Src;
                    main.appendChild(timelinevideo);
                    main.appendChild(timelinevideocover);
                    timelinevideocover.appendChild(controlercontainer);
                    timelinevideocover.appendChild(timelinevideobottomtrols);
                    timelinevideocover.appendChild(timelinemute);
                    timelinevideocover.appendChild(timelineunmute);
                    timelinevideocover.appendChild(viewsgrid);
                    timelineunmute.src = 'icons/mute.png';
                    timelinemute.src = 'icons/audio.png';
                    timelineunmute.style.display = 'none';
                    timelinemute.style.display = 'flex';
                    controlercontainer.appendChild(timelinebottomprevious);
                    controlercontainer.appendChild(timelinebottomplay);
                    controlercontainer.appendChild(timelinebottompause);
                    controlercontainer.appendChild(timelinebottomnext);

                    timelineprogressarea.appendChild(timelineprogressbar);
                    timelinevideobottomtrols.appendChild(timelineprogressarea);
                    timelinevideobottomtrols.appendChild(timelinevideotime);
                    timelinevideotime.appendChild(timelinecurrenttime);
                    timelinevideotime.appendChild(timelinetotaltime);
                    timelinebottomplay.src = 'icons/play.png';
                    timelinebottompause.src = 'icons/pause.png';
                    timelinebottomnext.src = 'icons/fast-forward.png';
                    timelinebottomprevious.src = 'icons/replay.png';

                    timelinevideotime.classList.add('timelinevideotime');
                    timelinecurrenttime.classList.add('timelinecurrenttime');
                    timelinetotaltime.classList.add('timelinecurrenttime');

                    function checkifviews() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let views = photo.views;
                                views.forEach(count => {
                                    if (count.id === data.user_Id + photo.id) {
                                        viewscount.classList.add('Viewed');
                                        viewscount.classList.remove('viewscount');
                                    }
                                });
                            });
                        }
                    }
                    checkifviews();

                    timelinevideo.addEventListener('loadeddata', (e) => {
                        let videoDuration = e.target.duration;
                        let totalMin = Math.floor(videoDuration / 60);
                        let totalSec = Math.floor(videoDuration % 60);
                        //if seconds are less than 10 add 0 at the beginning;
                        totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                        //if minute are less than 10 add 0 at the beginning;
                        totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                        timelinetotaltime.innerHTML = `${totalMin} : ${totalSec}`;
                    })
                    timelinevideo.addEventListener('timeupdate', (e) => {
                        let currentVideoTime = e.target.currentTime;
                        let currentMin = Math.floor(currentVideoTime / 60);
                        let currentSec = Math.floor(currentVideoTime % 60);
                        //if seconds are less than 10 add 0 at the beginning;
                        currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                        //if minute are less than 10 add 0 at the beginning;
                        currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                        timelinecurrenttime.innerHTML = `${currentMin} : ${currentSec}`;

                        //progress bar
                        let videoDuration = event.target.duration;
                        let progressvalue = (currentVideoTime / videoDuration) * 100;
                        timelineprogressbar.style.width = `${progressvalue}%`;
                    });
                    timelinevideo.addEventListener('ended', () => {
                        timelinebottomplay.style.display = 'flex';
                        timelinebottompause.style.display = 'none';
                    });
                    timelinevideo.addEventListener('play', () => {
                        timelinebottomplay.style.display = 'none';
                        timelinebottompause.style.display = 'flex';
                        increaseviewscount(photo.id);
                    });
                    timelinevideo.addEventListener('pause', () => {
                        timelinebottomplay.style.display = 'flex';
                        timelinebottompause.style.display = 'none';
                    });
                    timelinebottomplay.addEventListener('click', () => {
                        timelinevideo.play();
                    });
                    timelinebottompause.addEventListener('click', () => {
                        timelinevideo.pause();
                    });
                    timelineprogressarea.addEventListener('click', () => {
                        let videoDuration = timelinevideo.duration;
                        progressbarwidthvalue = timelineprogressarea.clientWidth;
                        let clickOffSetx = event.offsetX;
                        timelinevideo.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
                    })
                    timelinemute.addEventListener('click', () => {
                        timelinevideo.volume = 1;
                        timelinemute.style.display = 'none';
                        timelineunmute.style.display = 'flex';
                    });
                    timelineunmute.addEventListener('click', () => {
                        timelinevideo.volume = 0;
                        timelinemute.style.display = 'flex';
                        timelineunmute.style.display = 'none';
                    });
                    // LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    // LogInFormData.forEach(user => {
                    //     ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    //     ActiveUser_Account.forEach(data => {
                    //         if (user.user_Id === data.user_Id) {
                    //             if (user.user_Play == 'autoplay') {
                    //                 timelinevideo.autoplay = true;
                    //             }
                    //         }
                    //     });
                    // });
                    timelinevideo.classList.add('mainvideo');
                    timelinevideocover.classList.add('timelinevideocover');
                    timelinemute.classList.add('timelinemute');
                    timelineunmute.classList.add('timelinemute');
                    controlercontainer.classList.add('controlercontainer');
                    timelinebottomplay.classList.add('timelinebottomplay');
                    timelinebottompause.classList.add('timelinebottomplay');
                    timelinebottomnext.classList.add('timelinebottomnext');
                    timelinebottomprevious.classList.add('timelinebottomprevious');
                    timelinevideobottomtrols.classList.add('timelinevideobottomtrols');
                    timelineprogressarea.classList.add('timelineprogressarea');
                    timelinebottompause.style.display = 'none';
                    timelinebottomplay.style.margin = '10px';
                    timelinebottompause.style.margin = '10px';
                    timelinebottomnext.addEventListener('click', () => {
                        timelinevideo.currentTime += 10;
                    });
                    timelinebottomprevious.addEventListener('click', () => {
                        timelinevideo.currentTime -= 10;
                    });
                }

                let postelapsedtime = document.createElement('span');
                let postattributation = document.createElement('span');

                let first_Child_1 = document.createElement('div');
                let first_Child_2 = document.createElement('div');
                let first_Child_3 = document.createElement('div');
                let first_Child_4 = document.createElement('div');

                let likes1 = document.createElement('img');
                let likes2 = document.createElement('img');
                let likes3 = document.createElement('img');
                let likes4 = document.createElement('img');

                first_Child_1.innerHTML = commentsvg;
                first_Child_2.innerHTML = likesvg;
                first_Child_3.innerHTML = sharesvg;
                first_Child_4.innerHTML = sendsvg;

                let shareandlikecommentflex = document.createElement('div');
                let last_Child = document.createElement('div');
                last_Child.innerHTML = commentsendsvg;

                //LIVE COUNTS
                let livecountgrid = document.createElement('div');
                let live_Like_Count_Container = document.createElement('div');
                let live_Comment_Count_Container = document.createElement('div');
                let live_Share_Count_Container = document.createElement('div');
                let livelikecount = document.createElement('span');
                let livecommentcount = document.createElement('span');
                let livesharecount = document.createElement('span');

                //toolpits
                let like_toolpit = document.createElement('p');
                let comment_toolpit = document.createElement('p');
                let share_toolpit = document.createElement('p');

                like_toolpit.textContent = 'likes';
                comment_toolpit.textContent = 'comments';
                share_toolpit.textContent = 'shares'

                like_toolpit.classList.add('toolpit');
                comment_toolpit.classList.add('toolpit');
                share_toolpit.classList.add('toolpit');

                first_Child_3.addEventListener('click', () => {
                    create_share_Popup(photo.id);
                });

                post.appendChild(livecountgrid);

                livecountgrid.appendChild(live_Like_Count_Container);
                livecountgrid.appendChild(live_Comment_Count_Container);
                livecountgrid.appendChild(live_Share_Count_Container);

                live_Like_Count_Container.appendChild(livelikecount);
                live_Comment_Count_Container.appendChild(livecommentcount);
                live_Share_Count_Container.appendChild(livesharecount);

                live_Like_Count_Container.appendChild(like_toolpit);
                live_Comment_Count_Container.appendChild(comment_toolpit);
                live_Share_Count_Container.appendChild(share_toolpit);

                livecountgrid.classList.add('livecountgrid');
                livelikecount.classList.add('livelikecount');
                livecommentcount.classList.add('livecommentcount');
                livesharecount.classList.add('livesharecount');

                livelikecount.classList.add('live_Like_Counters');
                livecommentcount.classList.add('live_Comment_Counters');

                live_Like_Count_Container.classList.add('like_count');
                live_Comment_Count_Container.classList.add('counts');
                live_Share_Count_Container.classList.add('counts');

                live_Like_Count_Container.id = photo.id;
                live_Comment_Count_Container.id = photo.id;
                live_Share_Count_Container.id = photo.id;

                livecommentcount.id = photo.id;
                livesharecount.id = photo.id;

                live_Like_Count_Container.addEventListener('click', () => {
                    LikePopupsAndMore(photo.id, 'postlike', photo.likes.length);
                });

                function checkIfPostIsLiked() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            let likes = photo.likes;
                            likes.forEach(like => {
                                if (like.id === data.user_Id + photo.id) {
                                    live_Like_Count_Container.classList.add('like_count_active');
                                    live_Like_Count_Container.classList.remove('like_count');
                                }
                            });
                        });
                    }
                }
                checkIfPostIsLiked();

                first_Child_4.addEventListener('click', () => {
                    if (commentinputinput.value) {
                        set_Comment_Data(photo.id, commentinputinput.value);
                    }
                    commentinputinput.value = '';
                    commentinput.classList.toggle('commentinputactive');
                    shareandlikecommentflex.classList.toggle('shareandlikecommentflexactive');
                });
                first_Child_4.id = feedcolumn.id + photo.id;
                livelikecount.classList.add('livelikecount');

                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === photo.posterId) {
                        let connections = user.user_Connection;
                        if (connections) {
                            connections.forEach(connect => {
                                if (connect.connectionId === feedcolumn.id) {
                                    feedcolumn.appendChild(post);
                                }
                            });
                        }
                    }
                });
                if (feedcolumn.id === photo.posterId) {
                    feedcolumn.appendChild(post);
                }
                let sharevideophotocomment = document.createElement('div');
                let sharephoto = document.createElement('div');
                let sharevideo = document.createElement('div');
                sharevideophotocomment.appendChild(sharephoto);
                sharevideophotocomment.appendChild(sharevideo);

                sharephoto.innerHTML = imagesvg;
                sharevideo.innerHTML = videosvg;

                sharephoto.classList.add('headerbtns');
                sharevideo.classList.add('headerbtns');


                sharevideophotocomment.classList.add('sharevideophotocomment');
                sharevideo.addEventListener('click', () => {
                    Media_Comment_Popup(photo.id, photo.posterId);
                });

                sharephoto.addEventListener('click', () => {
                    Media_Comment_Popup(photo.id, photo.posterId);
                });
                post.appendChild(head);
                post.appendChild(main);
                post.appendChild(sub);
                post.appendChild(sharevideophotocomment);


                head.appendChild(nameAndImg);
                head.appendChild(postelapsedtime);
                head.appendChild(postattributation);
                head.appendChild(more);

                postattributation.textContent = photo.attribute;
                postattributation.classList.add('postattributation');

                main.href = `view.html?Post_Id=${photo.id}`;

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - photo.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                        token = 'month';
                        maintime = time / 2419200;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                        token = 'week';
                        maintime = time / 604800;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    } if (time <= 60) {
                        token = 'sec';
                        maintime = time;
                        postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                    }
                }
                startTime();
                postelapsedtime.classList.add('postelapsedtime');

                post.id = photo.id;

                more.classList.add('more');
                more.innerHTML = vellip;
                nameAndImg.appendChild(authorsImg);
                nameAndImg.appendChild(name);
                head.appendChild(title);


                title.innerHTML = photo.title;

                title.textContent.split(" ").forEach(texttitle => {
                    prefix.forEach(unit => {
                        if (texttitle.indexOf(unit.prefixName) != -1) {
                            if (unit.prefixName == 'https://') {
                                let newtitle = title.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                title.innerHTML = newtitle;
                            } else {
                                let newtitle = title.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                title.innerHTML = newtitle;
                            }
                        }
                    });
                });
                sub.appendChild(commentinput);
                shareandlikecommentflex.appendChild(last_Child);
                shareandlikecommentflex.appendChild(first_Child_1);
                shareandlikecommentflex.appendChild(first_Child_2);
                shareandlikecommentflex.appendChild(first_Child_3);



                sub.appendChild(shareandlikecommentflex);
                shareandlikecommentflex.classList.add('shareandlikecommentflex');
                last_Child.addEventListener('click', () => {
                    shareandlikecommentflex.classList.toggle('shareandlikecommentflexactive');
                    commentinput.classList.toggle('commentinputactive');
                    commentinputinput.focus();
                });

                first_Child_4.addEventListener('mouseover', () => {
                    setTimeout(() => {
                        sharevideophotocomment.classList.add('sharevideophotocommentactive');
                    }, 1500);
                });
                first_Child_4.addEventListener('mouseout', () => {
                    setTimeout(() => {
                        sharevideophotocomment.classList.remove('sharevideophotocommentactive');
                    }, 3000);
                });




                commentinput.appendChild(commentinputinput);
                commentinput.appendChild(first_Child_4);
                commentinputinput.placeholder = 'Add a comment';

                commentinput.classList.add('commentinput');
                likes1.classList.add('likes111');
                likes2.classList.add('likes111');
                likes3.classList.add('likes111');
                likes4.classList.add('likes111');

                sub.classList.add('bottomsub');
                name.classList.add('postername');
                title.classList.add('posttitle');
                main.classList.add('postmain');
                authorsImg.classList.add('authorsImg');
                nameAndImg.classList.add('nameandimg');


                post.classList.add('post');
                head.classList.add('head');

                title.addEventListener('click', () => {
                    if (title.textContent.length > 294) {
                        title.classList.toggle('posttitlemoreorless');
                    }
                });

                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === photo.posterId) {
                            authorsImg.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username = 
                            user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                            username = user.user_Firstname + ' ' + user.user_Surname;
                            name.href = `#/user_Id=${user.user_Id}/users_Name=${user.user_Firstname + '+' + user.user_Surname}`;
                            if (photo.isProfile_Photo) {
                                name.innerHTML = username + '<span class="updatingprofilepicturetext">Uploaded a new Profile Picture</span>';
                            } if (photo.isCover_Photo) {
                                name.innerHTML = username + '<span class="updatingprofilepicturetext">Uploaded a new Cover Photo</span> ';
                            } if (photo.isPhoto) {
                                name.innerHTML = username;
                            } if (photo.isText) {
                                name.innerHTML = username;
                            } if (photo.isVideo) {
                                name.innerHTML = username;
                            }
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    authorsImg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    authorsImg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    authorsImg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    authorsImg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    authorsImg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    authorsImg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    authorsImg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    authorsImg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    authorsImg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    authorsImg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                }
                Poster_Details();

                livelikecount.textContent = photo.likes.length;
                livecommentcount.textContent = photo.comments.length;
                livesharecount.textContent = photo.shares.length;

                livelikecount.id = photo.id;

                function decideRight() {
                    document.querySelectorAll('.live_Like_Count').forEach(count => {
                        if (count.id === photo.id) {
                            count.classList.add('live_Like_Count_active');
                            count.classList.remove('live_Like_Count');
                        }
                    });
                    live_Like_Count_Container.classList.add('like_count_active');
                    live_Like_Count_Container.classList.remove('like_count');
                    document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                        if (likebutton.id === feedcolumn.id + photo.id) {
                            likebutton.classList.add('sharegridliked');
                            likebutton.classList.remove('sharegridlike');
                        }
                    });
                    if (photo.isText === true) {
                        like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                    } else {
                        like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                    }
                }
                function decideLeft() {
                    document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                        if (count.id === photo.id) {
                            count.classList.remove('live_Like_Count_active');
                            count.classList.add('live_Like_Count');
                        }
                    });
                    live_Like_Count_Container.classList.remove('like_count_active');
                    live_Like_Count_Container.classList.add('like_count');
                    document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                        if (likebutton.id === feedcolumn.id + photo.id) {
                            likebutton.classList.add('sharegridlike');
                            likebutton.classList.remove('sharegridliked');
                        }
                    });
                    Unlike_Post(photo.id);
                }
                function makeLike() {
                    if (live_Like_Count_Container.classList.contains('like_count')) {
                        decideRight();
                    } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                        decideLeft();
                    }
                }

                first_Child_2.addEventListener('click', () => {
                    makeLike();
                });
                first_Child_1.addEventListener('click', () => {
                    create_Comment_room(photo.id);
                    sessionStorage.setItem('activepage', photo.id);
                });

                function showOnAndOffActivities() {
                    if (photo.shareactive === false) {
                        first_Child_3.remove();
                    } if (photo.commentactive === false) {
                        commentinput.remove();
                        last_Child.remove();
                    } if (photo.likeactive === false) {
                        first_Child_2.remove();
                    }
                }
                showOnAndOffActivities();
                authorsImg.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(photo.posterId, user.user_Id);
                        });
                    }
                });
                name.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(photo.posterId, user.user_Id);
                        });
                    }
                });
            }
            document.querySelector('.postcontainer').style.display = 'none';
        });
    });
}

function get_Comment_Active_Page() {
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === sessionStorage.getItem('activepage')) {
            create_Comment_room(feed.id);
        }
    });
}