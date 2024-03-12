if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    get_Comment_Active_Page();
    createPhotoPostOnTimeLine();
    createGridPost();
    createPublicGridPost();
    createOtherGridPost();
} else {
    Feeds_Data_Base = [];
}
function createPhotoPostOnTimeLine() {
    document.querySelectorAll('.usersfeedcolumn').forEach(column => {
        column.remove();
    })
    let usersfeedcolumn = document.createElement('div');
    document.querySelector('.greatpostcontainer').appendChild(usersfeedcolumn);
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(data => {
        usersfeedcolumn.id = data.user_Id;
    });
    usersfeedcolumn.innerHTML = '';
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
            let postmenu = document.createElement('div');

            let abc = document.createElement('span');
            let mno = document.createElement('span');
            let pqr = document.createElement('span');
            let rst = document.createElement('span');
            let uvw = document.createElement('span');
            let xyz = document.createElement('span');

            let abc1 = document.createElement('span');
            let mno5 = document.createElement('span');
            let pqr6 = document.createElement('span');
            let rst7 = document.createElement('span');
            let uvw8 = document.createElement('span');
            let xyz9 = document.createElement('span');

            let abcimg = document.createElement('img');
            let mnoimg = document.createElement('img');
            let pqrimg = document.createElement('img');
            let rstimg = document.createElement('img');
            let uvwimg = document.createElement('img');
            let xyzimg = document.createElement('img');

            if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                let mainimg = document.createElement('img');
                main.appendChild(mainimg);
                mainimg.classList.add('mainimg');
                mainimg.addEventListener('click', () => {
                    createMain_GridPost(photo.id, mainimg.src);
                });

                function pushSavedData() {
                    postmenu.classList.toggle('postmenuactive');
                    var new_Date = new Date().getTime();
                    var download_Link = document.createElement('a');
                    download_Link.href = mainimg.src;
                    download_Link.download = "Lavinsta" + '_' + 'IMG' + '_' + new_Date + '.' + 'jpeg';
                    download_Link.click();
                }
                xyz.addEventListener('click', () => {
                    pushSavedData();
                });
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
                // main.classList.add('imagecontainerLoading');
                // main.style.backgroundImage = "url(" + photo.Property_Src + ")";
                // mainimg.loading = 'lazy';
                // function loaded() {
                //     main.classList.add('loaded');
                // }
                // if (mainimg.complete) {
                //     loaded();
                // } else {
                //     mainimg.addEventListener('load',loaded);
                // }
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
                let copyText = document.createElement('span');
                let copy = document.createElement('span');
                let copyIcon = document.createElement('img');
                postmenu.appendChild(copyText);
                copyText.appendChild(copyIcon);
                copyText.appendChild(copy);
                copy.textContent = 'Copy Text';
                copyIcon.src = 'icons/copy.png';
                main.appendChild(textPost);
                textPost.textContent = photo.Property_Src;
                textPost.classList.add('textPost');
                copyText.addEventListener('click', () => {
                    copyTextPost(textPost.textContent);
                });
                textPost.addEventListener('click', () => {
                    if (textPost.textContent.length > 121) {
                        textPost.classList.toggle('textPostmoreorless');
                    }
                });
                function copyTextPost(text) {
                    if (navigator.clipboard) {
                        try {
                            const toCopy = text;
                            navigator.clipboard.writeText(toCopy);
                            create_Message('text copied');
                        }
                        catch (err) {
                            console.error('Failed to copy: ', err);
                            create_Message('unable to copy');
                        }
                    }
                }
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
                            textPost.classList.add('themenicklezoltext');
                        } else if (photo.themeMode == 'mirox') {
                            main.classList.add('thememirox');
                        } else if (photo.themeMode == 'xosiphor') {
                            main.classList.add('themexosiphor');
                        } else if (photo.themeMode == 'rhicode') {
                            main.classList.add('themerhicode');
                            textPost.classList.add('gridposttextToviewWhite');
                        } else if (photo.themeMode == 'srccod') {
                            main.classList.add('themesrccode');
                            textPost.classList.add('text_Theme_Color_Is_White');
                        } else if (photo.themeMode == 'xporiah') {
                            main.classList.add('themexporiah');
                            textPost.classList.add('text_Theme_Color_Is_White');
                        } else if (photo.themeMode == 'niph') {
                            main.classList.add('themeniph');
                            textPost.classList.add('text_Theme_Color_Is_White');
                        }
                    }
                    textThemeBackGround();
                    function textThemeFont() {
                        if (photo.fontMode == 'Default') {
                            textPost.classList.add('TextDefault');
                        } else if (photo.fontMode == 'Times') {
                            textPost.classList.add('TextTimes');
                        } else if (photo.fontMode == 'Arial') {
                            textPost.classList.add('TextArial');
                        } else if (photo.fontMode == 'Cursive') {
                            textPost.classList.add('TextCursive');
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
                    if (Array.isArray(ActiveAccount)) {
                        ActiveUser_Account = ActiveAccount;
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
                function pushSavedData() {
                    postmenu.classList.toggle('postmenuactive');
                    var new_Date = new Date().getTime();
                    var download_Link = document.createElement('a');
                    download_Link.href = timelinevideo.src;
                    download_Link.download = "Lavinsta" + '_' + 'VIDEO' + '_' + new_Date + '.' + 'mp4';
                    download_Link.click();
                }
                xyz.addEventListener('click', () => {
                    pushSavedData();
                });
            }

            let activitydownheadear = document.createElement('header');
            let activitydownexit = document.createElement('div');
            let activitydowncontainer = document.createElement('div');
            let commentshutdown = document.createElement('span');
            let likeshutdown = document.createElement('span');
            let shareshutdown = document.createElement('span');
            post.appendChild(activitydowncontainer);
            activitydowncontainer.appendChild(activitydownheadear);
            activitydowncontainer.appendChild(commentshutdown);
            activitydowncontainer.appendChild(likeshutdown);
            activitydowncontainer.appendChild(shareshutdown);
            activitydownheadear.appendChild(activitydownexit);
            activitydownheadear.classList.add('activitydownheadear');
            activitydowncontainer.classList.add('activitydowncontainer');
            commentshutdown.textContent = 'turn off comments';
            likeshutdown.textContent = 'turn off votes';
            shareshutdown.textContent = 'turn off shares';
            activitydownexit.innerHTML = '&LeftArrow;';
            uvw.addEventListener('click', () => {
                postmenu.classList.toggle('postmenuactive');
                activitydowncontainer.classList.toggle('activitydowncontaineractive');
            });
            activitydownexit.addEventListener('click', () => {
                activitydowncontainer.classList.toggle('activitydowncontaineractive');
            });

            likeshutdown.addEventListener('click', () => {
                if (photo.likeactive === true) {
                    photo.likeactive = false;
                    likeshutdown.textContent = 'turn on votes';
                } else {
                    photo.likeactive = true;
                    likeshutdown.textContent = 'turn off votes';
                }
                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
            });
            commentshutdown.addEventListener('click', () => {
                if (photo.commentactive === true) {
                    photo.commentactive = false;
                    commentshutdown.textContent = 'turn on comments';
                } else {
                    photo.commentactive = true;
                    commentshutdown.textContent = 'turn off comments';
                }
                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
            });
            shareshutdown.addEventListener('click', () => {
                if (photo.shareactive === true) {
                    photo.shareactive = false;
                    shareshutdown.textContent = 'turn on shares';
                } else {
                    photo.shareactive = true;
                    shareshutdown.textContent = 'turn off shares';
                }
                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
            });


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

            first_Child_1.appendChild(likes1);
            first_Child_2.appendChild(likes2);
            first_Child_3.appendChild(likes3);
            first_Child_4.appendChild(likes4);

            let shareandlikecommentflex = document.createElement('div');
            let last_Child = document.createElement('div');
            let opencommentboxactivate = document.createElement('img');
            last_Child.appendChild(opencommentboxactivate);

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

            mno.addEventListener('click', () => {
                create_reportScript(photo.id);
                postmenu.classList.toggle('postmenuactive');
            });
            rst.addEventListener('click', () => {
                editingPostText(photo.id);
                postmenu.classList.toggle('postmenuactive');
            });
            pqr.addEventListener('click', () => {
                delete_Timeline_Post(Feeds_Data_Base, photo.id);
                postmenu.classList.toggle('postmenuactive');
            });

            first_Child_3.addEventListener('click', () => {
                create_share_Popup(photo.id);
            });

            main.appendChild(livecountgrid);

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
                LikePopupsAndMore(photo.id, 'postlike');
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
            first_Child_4.id = usersfeedcolumn.id + photo.id;
            livelikecount.classList.add('livelikecount');

            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === photo.posterId) {
                    let connections = user.user_Connection;
                    if (connections) {
                        connections.forEach(connect => {
                            if (connect.connectionId === usersfeedcolumn.id) {
                                usersfeedcolumn.appendChild(post);
                            }
                        });
                    }
                }
            });
            if (usersfeedcolumn.id === photo.posterId) {
                usersfeedcolumn.appendChild(post);
            }
            let sharevideophotocomment = document.createElement('div');
            let sharephoto = document.createElement('div');
            let sharevideo = document.createElement('div');
            let sharephotoimg = document.createElement('img');
            let sharevideoimg = document.createElement('img');
            sharevideophotocomment.appendChild(sharephoto);
            sharevideophotocomment.appendChild(sharevideo);

            sharephoto.appendChild(sharephotoimg);
            sharevideo.appendChild(sharevideoimg);

            sharephoto.classList.add('headerbtns');
            sharevideo.classList.add('headerbtns');

            sharephotoimg.src = 'icons/image(0).png';
            sharevideoimg.src = 'icons/youtube.png';

            sharevideophotocomment.classList.add('sharevideophotocomment');
            sharevideo.addEventListener('click', () => {
                Media_Comment_Popup(photo.id, photo.posterId);
            });

            sharephoto.addEventListener('click', () => {
                Media_Comment_Popup(photo.id, photo.posterId);
            });
            post.appendChild(head);
            post.appendChild(postmenu);
            post.appendChild(main);
            post.appendChild(sub);
            post.appendChild(sharevideophotocomment);


            head.appendChild(nameAndImg);
            head.appendChild(postelapsedtime);
            head.appendChild(postattributation);
            head.appendChild(more);

            postattributation.textContent = photo.attribute;
            postattributation.classList.add('postattributation');

            postmenu.appendChild(rst);
            postmenu.appendChild(abc);
            postmenu.appendChild(mno);
            postmenu.appendChild(pqr);
            postmenu.appendChild(xyz);
            postmenu.appendChild(uvw);

            rst.appendChild(rstimg);
            abc.appendChild(abcimg);
            mno.appendChild(mnoimg);
            pqr.appendChild(pqrimg);
            uvw.appendChild(uvwimg);
            xyz.appendChild(xyzimg);

            abc.appendChild(abc1);
            mno.appendChild(mno5);
            pqr.appendChild(pqr6);
            rst.appendChild(rst7);
            uvw.appendChild(uvw8);
            xyz.appendChild(xyz9);

            abc1.textContent = 'Save';
            mno5.textContent = 'Report';
            pqr6.textContent = 'Delete';
            rst7.textContent = 'Edit';
            uvw8.textContent = 'More';
            xyz9.textContent = 'Download';

            uvwimg.src = 'icons/discover.png';
            abcimg.src = 'newicons/bookmark-white (1).png';
            mnoimg.src = 'newicons/medical-report.png';
            pqrimg.src = 'newicons/delete.png';
            rstimg.src = 'newicons/edit.png';
            xyzimg.src = 'icons/downloads.png';

            main.href = `#Post_Id=${photo.id}/postType=${photo.type}`;

            if (photo.posterId !== usersfeedcolumn.id) {
                pqr.remove();
                rst.remove();
                uvw.remove();
            } else {
                mno.remove();
            }

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
            more.innerHTML = '&vellip;';
            nameAndImg.appendChild(authorsImg);
            nameAndImg.appendChild(name);
            head.appendChild(title);


            title.textContent = photo.title;
            sub.appendChild(commentinput);
            shareandlikecommentflex.appendChild(last_Child);
            shareandlikecommentflex.appendChild(first_Child_1);
            shareandlikecommentflex.appendChild(first_Child_2);
            shareandlikecommentflex.appendChild(first_Child_3);



            sub.appendChild(shareandlikecommentflex);
            opencommentboxactivate.src = 'icons/send (2).png';
            opencommentboxactivate.classList.add('opencommentboxactivate');
            shareandlikecommentflex.classList.add('shareandlikecommentflex');
            last_Child.addEventListener('click', () => {
                shareandlikecommentflex.classList.toggle('shareandlikecommentflexactive');
                commentinput.classList.toggle('commentinputactive');
                commentinputinput.focus();
            });

            opencommentboxactivate.addEventListener('mouseover', () => {
                setTimeout(() => {
                    sharevideophotocomment.classList.add('sharevideophotocommentactive');
                }, 1500);
            });
            opencommentboxactivate.addEventListener('mouseout', () => {
                setTimeout(() => {
                    sharevideophotocomment.classList.remove('sharevideophotocommentactive');
                }, 3000);
            });




            commentinput.appendChild(commentinputinput);
            commentinput.appendChild(first_Child_4);
            commentinputinput.placeholder = 'Add a comment';



            likes1.src = 'icons/comment(0).png';
            likes2.src = 'icons/like(0).png';
            likes3.src = 'icons/share (1).png';
            likes4.src = 'icons/send.png';

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

            postmenu.classList.add('postmenu');

            title.addEventListener('click', () => {
                if (title.textContent.length > 294) {
                    title.classList.toggle('posttitlemoreorless');
                }
            });

            function getIconsOnDarkMode() {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                if (user.user_Mode == 'defaultTheme') {
                                    uvwimg.classList.remove('darkmodeicons');
                                    abcimg.classList.remove('darkmodeicons');
                                    mnoimg.classList.remove('darkmodeicons');
                                    pqrimg.classList.remove('darkmodeicons');
                                    rstimg.classList.remove('darkmodeicons');
                                    xyzimg.classList.remove('darkmodeicons');

                                    likes1.classList.remove('darkmodeicons');
                                    likes2.classList.remove('darkmodeicons');
                                    likes3.classList.remove('darkmodeicons');
                                    likes4.classList.remove('darkmodeicons');

                                    sharephotoimg.classList.remove('darkmodeicons');
                                    sharevideoimg.classList.remove('darkmodeicons');

                                    opencommentboxactivate.classList.remove('darkmodeicons');

                                    let allgridcomment = document.querySelectorAll('.gridinput img');
                                    allgridcomment.forEach(button => {
                                        button.classList.remove('darkmodeicons');
                                    });
                                } else {
                                    uvwimg.classList.add('darkmodeicons');
                                    abcimg.classList.add('darkmodeicons');
                                    mnoimg.classList.add('darkmodeicons');
                                    pqrimg.classList.add('darkmodeicons');
                                    rstimg.classList.add('darkmodeicons');
                                    xyzimg.classList.add('darkmodeicons');

                                    likes1.classList.add('darkmodeicons');
                                    likes2.classList.add('darkmodeicons');
                                    likes3.classList.add('darkmodeicons');
                                    likes4.classList.add('darkmodeicons');

                                    sharephotoimg.classList.add('darkmodeicons');
                                    sharevideoimg.classList.add('darkmodeicons');

                                    opencommentboxactivate.classList.add('darkmodeicons');

                                    let allgridcomment = document.querySelectorAll('.gridinput img');
                                    allgridcomment.forEach(button => {
                                        button.classList.add('darkmodeicons');
                                    })
                                }
                            }
                        });
                    });
                }
            }
            getIconsOnDarkMode();
            function Poster_Details() {
                LogInFormData.forEach(user => {
                    if (user.user_Id === photo.posterId) {
                        authorsImg.src = user.user_ProfilePicture;
                        name.href = `#/user_Id=${user.user_Id}/users_Name=${user.user_Firstname + '+' + user.user_Surname}`;
                        if (photo.isProfile_Photo) {
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname + '<span class="updatingprofilepicturetext">Uploaded a new Profile Picture</span>';
                        } if (photo.isCover_Photo) {
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname + '<span class="updatingprofilepicturetext">Uploaded a new Cover Photo</span> ';
                        } if (photo.isPhoto) {
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                        } if (photo.isText) {
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                            xyz.remove();
                        } if (photo.isVideo) {
                            name.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                                        abc1.textContent = 'Saved';
                                    }
                                })
                            }
                        });
                    });
                }
            }

            checkIfPostIsSaved();

            function pushSavedphotos() {
                if (abc1.textContent == 'Save') {
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
                                    abc1.textContent = 'Saved';
                                }
                            });
                        });
                    }
                    create_Message('saved successfully');
                } else {
                    create_Message('already saved');
                }
            }

            abc.addEventListener('click', () => {
                postmenu.classList.toggle('postmenuactive');
                pushSavedphotos();
                newSaved_Script();
            });

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

            more.addEventListener('click', (event) => {
                postmenu.classList.toggle('postmenuactive');
            });

            function showOnAndOffActivities() {
                if (photo.shareactive === false) {
                    likes3.remove();
                    shareshutdown.textContent = 'turn on shares';
                } if (photo.commentactive === false) {
                    commentinput.remove();
                    opencommentboxactivate.remove();
                    commentshutdown.textContent = 'turn on comments';
                } if (photo.likeactive === false) {
                    likes2.remove();
                    likeshutdown.textContent = 'turn on votes';
                }
            }
            showOnAndOffActivities();
            authorsImg.addEventListener('click', () => {
                createUsersProfile(photo.posterId);
            });
            name.addEventListener('click', () => {
                createUsersProfile(photo.posterId);
            });
        }
        document.querySelector('.postcontainer').style.display = 'none';
    });
}

function increaseviewscount(postId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
            Feeds_Data_Base.forEach(feed => {
                if (feed.id === postId) {
                    let views = feed.views;
                    function pushViews() {
                        views.push({
                            postId: postId,
                            posterId: data.user_Id,
                            id: data.user_Id + postId
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    }
                    document.querySelectorAll('.viewscount').forEach(count => {
                        if (count.id === postId) {
                            if (count.classList.contains('viewscount')) {
                                pushViews();
                                count.textContent = views.length;
                                count.classList.add('Viewed');
                                count.classList.remove('viewscount');
                            }
                        }
                    });
                }
            });
        });
    }
}
function set_Comment_Data(postId, input) {
    function pushNotification(posterId, postId, caption, id) {
        ActiveUser_Account.forEach(data => {
            if (data.user_Id !== posterId) {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === posterId) {
                        user.user_NotificationView = false;
                        let Notifications = user.user_Notifications;
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        function filterNotification() {
                            Notifications = Notifications.filter(notification => {
                                if (notification.type == 'comment' && notification.postId === postId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_Notifications = Notifications;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            notificationPusher();
                        }
                        function notificationPusher() {
                            Notifications.push({
                                type: 'comment',
                                notificationId: data.user_Id,
                                id: id,
                                caption: caption,
                                trackingId: posterId,
                                postId: postId,
                                posterId: data.user_Id,
                                notification_Count: 0,
                                time: new Date().getTime(),
                                date: trackingDate,
                                notification_isChecked: false,
                                notification_View: false,
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                        filterNotification();
                        return true;
                    }
                });
            }
        });
    }
    function pushcommentData(postId, textBox) {
        const id = '' + new Date().getTime();
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    if (feed.id === postId) {
                        let comments = feed.comments;
                        if (textBox) {
                            comments.push({
                                type: 'text',
                                Property_Src: textBox,
                                postId: feed.id,
                                posterId: data.user_Id,
                                id: id,
                                inputId: textBox.id,
                                time: new Date().getTime(),
                                date: trackingDate,
                                likes: [],
                                comments: []
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            pushNotification(feed.posterId, feed.id, feed.title, id);
                            commentcount(postId, comments.length);
                            create_Message('Successfully');
                        }
                    }
                });
            });
        }
    }
    pushcommentData(postId, input);
    document.querySelectorAll('.commentsection').forEach(section => {
        if (section.id === postId) {
            CreationOfComments(section, postId);
        } else {
            CreationOfComments(postId);
        }
    });
    function commentcount(postId, count_length) {
        document.querySelectorAll('.live_Comment_Counters').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
}
function get_Comment_Active_Page() {
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === sessionStorage.getItem('activepage')) {
            create_Comment_room(feed.id);
        }
    });
}