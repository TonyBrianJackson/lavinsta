function Create_Short() {
    const reelscontainer = document.querySelectorAll('.reelscontainer');
    reelscontainer.forEach(feedcolumn => {
        feedcolumn.innerHTML = ''
        Feeds_Data_Base.forEach(photo => {
            if (photo.isShort) {
                let short = document.createElement('div');
                let head = document.createElement('div');
                let authorsImg = document.createElement('img');
                let nameAndImg = document.createElement('div');
                let name = document.createElement('b');
                let title = document.createElement('div');
                let main = document.createElement('div');
                let sub = document.createElement('div');
                let masters = document.createElement('div');
                let mastersmiddle = document.createElement('span');
                let mainreel = document.createElement('video');
                let shortverticalfloat = document.createElement('div');
                let reeltime = document.createElement('div');


                let comment = document.createElement('span');
                let like = document.createElement('span');
                let save = document.createElement('span');
                let shorthorizontalfloat = document.createElement('div');

                let live_Like_Count_Container = document.createElement('div');
                let live_Comment_Count_Container = document.createElement('div');
                let livecommentcount = document.createElement('span');
                let livelikecount = document.createElement('span');

                let shortcomment = document.createElement('div');
                let shortcommentinput = document.createElement('input');
                let reelcommentsend = document.createElement('div');

                let timelinevideocover = document.createElement('div');
                let reelbottomcontrols = document.createElement('div');
                let reelprogressarea = document.createElement('div');
                let reelprogressbar = document.createElement('span');
                let reelbutton = document.createElement('div');
                let reelbuttons = document.createElement('div');
                let reelpauseimg = document.createElement('img');
                let reelplayimg = document.createElement('img');
                let reeltimelinevideotime = document.createElement('div');
                let reeltotaltime = document.createElement('span');
                let reelcurrenttime = document.createElement('span');
                let reelmute = document.createElement('img');
                let reelunmute = document.createElement('img');

                let viewsgrid = document.createElement('div');
                let viewscount = document.createElement('p');

                function Create_GridPost_Options(anything) {
                    let more = document.createElement('span');
                    let postmenu = document.createElement('nav');
                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');

                    head.appendChild(more);

                    short.appendChild(postmenu);

                    postmenu.appendChild(option_First_Child1);
                    postmenu.appendChild(option_First_Child2);
                    postmenu.appendChild(option_First_Child3);
                    postmenu.appendChild(option_First_Child4);
                    postmenu.appendChild(option_First_Child5);
                    postmenu.appendChild(option_First_Child6);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);
                    option_First_Child6.appendChild(option_Name6);

                    option_Name1.textContent = 'Edit';
                    option_Name2.textContent = 'Delete';
                    option_Name3.textContent = 'Turn Off Comments';
                    option_Name4.textContent = 'Turn Off Votes';
                    option_Name5.textContent = 'Turn Off Shares';
                    option_Name6.textContent = 'View Reports';
                    option_First_Child1.addEventListener('click', () => {
                        editingPostText(photo.id);
                    });
                    option_First_Child2.addEventListener('click', () => {
                        delete_Timeline_Post(photo.id);
                    });
                    option_First_Child3.addEventListener('click', () => {
                        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                        if (photo.commentactive === true) {
                            photo.commentactive = false;
                            option_Name3.textContent = 'Turn On Comments';
                        } else {
                            photo.commentactive = true;
                            option_Name3.textContent = 'Turn Off Comments';
                        }
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    });
                    option_First_Child4.addEventListener('click', () => {
                        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                        if (photo.likeactive === true) {
                            photo.likeactive = false;
                            option_Name4.textContent = 'Turn On Votes';
                        } else {
                            photo.likeactive = true;
                            option_Name4.textContent = 'Turn Off Votes';
                        }
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    });
                    option_First_Child5.addEventListener('click', () => {
                        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                        if (photo.shareactive === true) {
                            photo.shareactive = false;
                            option_Name5.textContent = 'Turn On Shares';
                        } else {
                            photo.shareactive = true;
                            option_Name5.textContent = 'Turn Off Shares';
                        }
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    });
                    option_First_Child6.addEventListener('click', () => {
                        create_reportScript(photo.id);
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (photo.posterId !== data.user_Id) {
                                more.remove();
                                postmenu.remove();
                            }
                        });
                    }
                    postmenu.classList.add('postmenu');
                    more.classList.add('more');
                    more.innerHTML = '&vellip;';
                    more.addEventListener('click', () => {
                        postmenu.classList.toggle('postmenuactive');
                    });
                    function Activities_Option_TextContents() {
                        if (photo.shareactive === false) {
                            option_Name5.textContent = 'Turn On Shares';
                        } if (photo.commentactive === false) {
                            option_Name3.textContent = 'Turn On Comments';
                        } if (photo.likeactive === false) {
                            option_Name4.textContent = 'Turn On Votes';
                        }
                    }
                    Activities_Option_TextContents();
                }
                Create_GridPost_Options();

                feedcolumn.appendChild(short);
                short.appendChild(head);
                short.appendChild(main);
                short.appendChild(shortverticalfloat);
                short.appendChild(shorthorizontalfloat);
                short.appendChild(masters);

                shortverticalfloat.appendChild(comment);
                shortverticalfloat.appendChild(live_Comment_Count_Container);
                shortverticalfloat.appendChild(like);
                shortverticalfloat.appendChild(live_Like_Count_Container);
                shorthorizontalfloat.appendChild(save);
                shorthorizontalfloat.appendChild(shortcomment);

                live_Comment_Count_Container.appendChild(livecommentcount);
                live_Like_Count_Container.appendChild(livelikecount);

                live_Like_Count_Container.id = photo.id;
                live_Comment_Count_Container.id = photo.id;

                live_Comment_Count_Container.classList.add('counts');

                live_Like_Count_Container.classList.add('like_count');

                masters.appendChild(mastersmiddle);
                shortcomment.appendChild(shortcommentinput);
                shortcomment.appendChild(reelcommentsend);
                reelcommentsend.innerHTML = send2svg;

                head.appendChild(nameAndImg);
                head.appendChild(reeltime);
                head.appendChild(title);

                main.appendChild(mainreel);
                main.appendChild(timelinevideocover);

                nameAndImg.appendChild(authorsImg);
                nameAndImg.appendChild(name);
                comment.innerHTML = commentsvg;
                like.innerHTML = likesvg;
                save.innerHTML = savedsvg;
                reeltime.classList.add('reeltime');

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
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                        token = 'week';
                        maintime = time / 604800;
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60) {
                        token = 'sec';
                        maintime = time;
                        reeltime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                }
                startTime();
                save.classList.add('save');


                title.textContent = photo.title;
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
                mastersmiddle.innerHTML = '&plus;';


                reeltimelinevideotime.appendChild(reelcurrenttime);
                reeltimelinevideotime.appendChild(reeltotaltime);
                timelinevideocover.appendChild(reelmute);
                timelinevideocover.appendChild(reelunmute);
                timelinevideocover.appendChild(viewsgrid);
                timelinevideocover.appendChild(reelbutton);
                timelinevideocover.appendChild(reelbuttons);
                timelinevideocover.appendChild(reelbottomcontrols)
                reelbottomcontrols.appendChild(reelprogressarea);
                reelbottomcontrols.appendChild(reeltimelinevideotime);
                reelprogressarea.appendChild(reelprogressbar);
                reelbutton.appendChild(reelplayimg);
                reelbuttons.appendChild(reelpauseimg);
                reelbuttons.style.display = 'none';


                mainreel.addEventListener('loadeddata', (e) => {
                    let videoDuration = e.target.duration;
                    let totalMin = Math.floor(videoDuration / 60);
                    let totalSec = Math.floor(videoDuration % 60);

                    //if totalmin are less than 10 add 0 at the beginning;
                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                    reeltotaltime.innerHTML = `${totalMin} : ${totalSec}`;
                });
                mainreel.addEventListener('timeupdate', (e) => {
                    let currentVideoTime = e.target.currentTime;
                    let currentMin = Math.floor(currentVideoTime / 60);
                    let currentSec = Math.floor(currentVideoTime % 60);

                    //if totalmin are less than 10 add 0 at the beginning;
                    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                    reelcurrenttime.innerHTML = `${currentMin} : ${currentSec}`;

                    //progress bar
                    let videoDuration = event.target.duration;
                    let progressvalue = (currentVideoTime / videoDuration) * 100;
                    reelprogressbar.style.width = `${progressvalue}%`;
                });
                mainreel.addEventListener('ended', () => {
                    reelbutton.style.display = 'flex';
                    reelbuttons.style.display = 'none';
                });
                mainreel.addEventListener('play', () => {
                    reelbutton.style.display = 'none';
                    reelbuttons.style.display = 'flex';
                    increaseviewscount(photo.id);
                });
                mainreel.addEventListener('pause', () => {
                    reelbutton.style.display = 'flex';
                    reelbuttons.style.display = 'none';
                });
                reelbutton.addEventListener('click', () => {
                    mainreel.play();
                });
                reelbuttons.addEventListener('click', () => {
                    mainreel.pause();
                });
                reelprogressarea.addEventListener('click', () => {
                    let videoDuration = mainreel.duration;
                    progressbarwidthvalue = reelprogressarea.clientWidth;
                    let clickOffSetx = event.offsetX;
                    mainreel.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
                });
                reelmute.addEventListener('click', () => {
                    mainreel.volume = 0;
                    reelmute.style.display = 'none';
                    reelunmute.style.display = 'flex';
                });
                reelunmute.addEventListener('click', () => {
                    mainreel.volume = 1;
                    reelunmute.style.display = 'none';
                    reelmute.style.display = 'flex';
                });
                reeltimelinevideotime.classList.add('reeltimelinevideotime');
                reeltotaltime.classList.add('reeltotaltime');
                reelcurrenttime.classList.add('reeltotaltime');
                reelplayimg.src = 'icons/play-button.png';
                reelpauseimg.src = 'icons/pause.png';
                reelmute.src = 'icons/audio.png';
                reelunmute.src = 'icons/mute.png';
                reelunmute.style.display = 'none';
                reelmute.classList.add('reelmute');
                reelunmute.classList.add('reelmute');
                reelprogressarea.classList.add('reelprogressarea');
                reelprogressbar.classList.add('progressbar');
                reelbottomcontrols.classList.add('reelbottomcontrols');
                reelbutton.classList.add('reelbutton');
                reelbuttons.classList.add('reelbutton');
                timelinevideocover.classList.add('timelinevideocover');
                //CLASSLIST
                main.classList.add('postmain');
                name.classList.add('postername');
                title.classList.add('posttitle');
                authorsImg.classList.add('authorsImg');
                nameAndImg.classList.add('nameandimg');
                comment.classList.add('commentimg');
                like.classList.add('commentimg');
                save.classList.add('commentimg');
                short.classList.add('reel');
                head.classList.add('head');
                shortverticalfloat.classList.add('shortverticalfloat');
                shorthorizontalfloat.classList.add('shorthorizontalfloat');
                shortcomment.classList.add('shortcomment');
                reelcommentsend.classList.add('reelcommentsend');
                masters.classList.add('masters');
                mastersmiddle.classList.add('plus');
                mainreel.classList.add('mainreel');
                sub.classList.add('bottomsub');
                //COMPARISSON OPERATORS
                mainreel.src = photo.Property_Src;
                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === photo.posterId) {
                            authorsImg.src = user.user_ProfilePicture;
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                //ATTRIBUTES NAMES
                short.id = photo.id;
                viewsgrid.appendChild(viewscount);
                viewsgrid.classList.add('viewsgrid');
                viewscount.classList.add('viewscount');
                viewscount.id = photo.id;
                let view_Count_Extension = '';
                viewscount.textContent = `${photo.views.length}${view_Count_Extension} views`;

                title.addEventListener('click', () => {
                    if (title.textContent.length > 294) {
                        title.classList.toggle('posttitlemoreorless');
                    }
                });

                function pushSavedphotos() {
                    if (save.classList.contains('gridpostsave')) {
                        const newId = '' + new Date().getTime();
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        let saved = user.user_Saved;
                                        saved.push({
                                            savedId: user.user_Id,
                                            postId: photo.id,
                                            id: newId,
                                        });
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        save.classList.remove('gridpostsave');
                                        save.classList.add('gridpostsaved');
                                    }
                                });
                            });
                        }
                        create_Message('saved successfully');
                    } else {
                        create_Message('already saved');
                    }
                }
                save.classList.add('gridpostsave');
                function checkIfPostIsSaved() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    let saved = user.user_Saved;
                                    saved.forEach(item => {
                                        if (item.postId === photo.id) {
                                            save.classList.remove('gridpostsave');
                                            save.classList.add('gridpostsaved');
                                        }
                                    })
                                }
                            });
                        });
                    }
                }

                checkIfPostIsSaved();

                save.addEventListener('click', () => {
                    newSaved_Script();
                    pushSavedphotos();
                    create_Message('saved successfully');
                });


                comment.addEventListener('click', () => {
                    create_Comment_room(photo.id);
                    sessionStorage.setItem('activepage', photo.id);
                });
                shortcommentinput.placeholder = 'add comment...';
                shortcommentinput.id = photo.id;
                short.id = photo.id + feedcolumn.id;

                reelcommentsend.addEventListener('click', () => {
                    set_Comment_Data(photo.id, shortcommentinput.value);
                    shortcommentinput.value = '';
                });
                like.id = photo.id;
                livecommentcount.textContent = photo.comments.length;
                livelikecount.textContent = photo.likes.length;
                livelikecount.id = photo.id;
                livecommentcount.id = photo.id;
                livelikecount.classList.add('livelikecount');
                livelikecount.classList.add('live_Like_Counters');
                livecommentcount.classList.add('live_Comment_Counters');
                livecommentcount.classList.add('livecommentcount');
                live_Like_Count_Container.addEventListener('click', () => {
                    LikePopupsAndMore(photo.id,'postlike');
                });

                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        like.id = data.user_Id + photo.id;
                    });
                }

                function checkIfPostIsLiked() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            let likes = photo.likes;
                            likes.forEach(like => {
                                if (like.id === data.user_Id + photo.id) {
                                    live_Like_Count_Container.classList.add('like_count_active');
                                    live_Like_Count_Container.classList.remove('live_Like_Count');
                                }
                            });
                        });
                    }
                }
                checkIfPostIsLiked();

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
                like.addEventListener('click', () => {
                    makeLike();
                });
                masters.addEventListener('click', () => {
                    shortverticalfloat.classList.toggle('shortverticalfloatactive');
                    shorthorizontalfloat.classList.toggle('shorthorizontalfloatactive');
                    mastersmiddle.classList.toggle('plusactive');
                });
                function showOnAndOffActivitiesOnGridPost() {
                    if (photo.commentactive === false) {
                        shortcomment.remove();
                    } if (photo.likeactive === false) {
                        like.remove();
                        livelikecount.remove();
                    }
                }
                showOnAndOffActivitiesOnGridPost();
            }
        });
    })
}
if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Create_Short();
} else {
    Feeds_Data_Base = [];
}