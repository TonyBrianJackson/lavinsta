function getActiveInputs() {
    let selectposttype = document.querySelectorAll('.selectposttype');
    selectposttype.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('label--1')) {
                publicmultipleupload.style.display = 'none';
                document.querySelector('.publicPhoto').style.display = 'flex';
                document.querySelector('.publicphotoupload').style.display = 'block';
            } else {
                document.querySelector('.publicPhoto').style.display = 'none';
                document.querySelector('.publicphotoupload').style.display = 'none';
            } if (button.classList.contains('label--2')) {
                publicmultipleupload.style.display = 'none';
                document.querySelector('.publicVideo').style.display = 'flex';
                document.querySelector('.publicvideoupload').style.display = 'block';
            } else {
                publicmultipleupload.style.display = 'none';
                document.querySelector('.publicVideo').style.display = 'none';
                document.querySelector('.publicvideoupload').style.display = 'none';
            } if (button.classList.contains('label--3')) {
                publicmultipleupload.style.display = 'none';
                document.querySelector('.PublicText').style.display = 'flex';
                document.querySelector('.publictextupload').style.display = 'block';
            } else {
                document.querySelector('.PublicText').style.display = 'none';
                document.querySelector('.publictextupload').style.display = 'none';
            }
        })
    });
}
getActiveInputs();

function getPublicUploadPhoto() {
    let publicphotopostinput = document.querySelector('#publicphotopostinput');
    const reader = new FileReader();
    reader.readAsDataURL(publicphotopostinput.files[0]);
    reader.onload = () => {
        document.querySelector('.publicimagepreview').src = reader.result;
    }
}
function getPublicUploadVideo() {
    let publicvideopostinput = document.querySelector('#publicvideopostinput');
    const reader = new FileReader();
    reader.readAsDataURL(publicvideopostinput.files[0]);
    reader.onload = () => {
        document.querySelector('.publicvideopreview').src = reader.result;
    }
}

function createPublicFeed() {
    let publicpostcontainer = document.querySelectorAll('.publicpostcontainer');
    publicpostcontainer.forEach(feedcolumn => {
        feedcolumn.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type == 'public') {
                if (photo.isPhoto || photo.isVideo || photo.isText) {
                    let post = document.createElement('div');
                    let head = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let nameAndImg = document.createElement('div');
                    let name = document.createElement('a');
                    let title = document.createElement('div');
                    let main = document.createElement('a');
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

                    if (photo.isPhoto) {
                        let mainimg = document.createElement('img');
                        main.appendChild(mainimg);
                        mainimg.src = photo.Property_Src;
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
                        viewscount.textContent = photo.viewcount;
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
                        });
                        timelinevideo.addEventListener('pause', () => {
                            timelinebottomplay.style.display = 'flex';
                            timelinebottompause.style.display = 'none';
                        });
                        timelinebottomplay.addEventListener('click', () => {
                            timelinevideo.play();
                            increaseviewscount(photo.id);
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
    
                    let commentinput = document.createElement('div');
                    let commentinputinput = document.createElement('input');

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
                        document.querySelectorAll('.reportcontainer').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                        postmenu.classList.toggle('postmenuactive');
                    });

                    rst.addEventListener('click', () => {
                        document.querySelectorAll('.editpopup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                        postmenu.classList.toggle('postmenuactive');
                    });
                    pqr.addEventListener('click', () => {
                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                        postmenu.classList.toggle('postmenuactive');
                    });


                    first_Child_3.addEventListener('click', () => {
                        document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
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
                        document.querySelectorAll('.likerecordpopup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        })
                    });

                    livelikecount.classList.add('livelikecount');

                    let sharevideophotocomment = document.createElement('div');
                    let sharephoto = document.createElement('div');
                    let sharevideo = document.createElement('div');
                    let sharephotoimg = document.createElement('img');
                    let sharevideoimg = document.createElement('img');
                    sharevideophotocomment.appendChild(sharephoto);
                    sharevideophotocomment.appendChild(sharevideo);

                    sharephoto.classList.add('headerbtns');
                    sharevideo.classList.add('headerbtns');

                    sharephoto.appendChild(sharephotoimg);
                    sharevideo.appendChild(sharevideoimg);

                    sharephotoimg.src = 'icons/image(0).png';
                    sharevideoimg.src = 'icons/youtube.png';

                    sharevideophotocomment.classList.add('sharevideophotocomment');
                    sharevideo.addEventListener('click', () => {
                        document.querySelectorAll('.sharephotocomentcontainer').forEach(container => {
                            if (container.id === photo.id) {
                                container.style.display = 'flex';
                            } else {
                                container.style.display = 'none';
                            }
                        });
                    });

                    sharephoto.addEventListener('click', () => {
                        document.querySelectorAll('.sharephotocomentcontainer').forEach(container => {
                            if (container.id === photo.id) {
                                container.style.display = 'flex';
                            } else {
                                container.style.display = 'none';
                            }
                        });
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

                    likes2.id = feedcolumn.id + photo.id;

                    feedcolumn.appendChild(post);
                    post.appendChild(head);
                    post.appendChild(postmenu);
                    post.appendChild(main);
                    post.appendChild(sub);
                    post.appendChild(sharevideophotocomment);


                    post.classList.add('post');
                    head.classList.add('head');
                    head.appendChild(nameAndImg);
                    head.appendChild(postelapsedtime);
                    head.appendChild(postattributation);
                    head.appendChild(more);

                    postattributation.textContent = photo.attribute;
                    postattributation.classList.add('postattributation');

                    postmenu.classList.add('postmenu');
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

                    if (photo.posterId !== feedcolumn.id) {
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
                    commentinputinput.id = photo.id;

                    first_Child_4.addEventListener('click', () => {
                        if (commentinputinput.value) {
                            set_Comment_Data(photo.id, commentinputinput.value);
                            CreationOfComments();
                        }
                        commentinputinput.value = '';
                        commentinput.classList.toggle('commentinputactive');
                        shareandlikecommentflex.classList.toggle('shareandlikecommentflexactive');
                    });

                    more.classList.add('more');
                    more.innerHTML = '&vellip;';
                    nameAndImg.appendChild(authorsImg);
                    nameAndImg.appendChild(name);
                    nameAndImg.classList.add('nameandimg');
                    head.appendChild(title);
                    authorsImg.classList.add('authorsImg');
                    name.classList.add('postername');
                    title.classList.add('posttitle');
                    title.textContent = photo.title
                    main.classList.add('postmain');

                    main.setAttribute(`id`, 'main');
                    sub.classList.add('bottomsub');
                    sub.appendChild(commentinput);
                    first_Child_1.appendChild(likes1);
                    first_Child_2.appendChild(likes2);
                    first_Child_3.appendChild(likes3);

                    sub.appendChild(commentinput);
                    commentinput.classList.add('commentinput');
                    commentinput.appendChild(commentinputinput);
                    commentinput.appendChild(first_Child_4);
                    commentinputinput.placeholder = 'Add a comment';

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

                    likes1.classList.add('likes111');
                    likes2.classList.add('likes111');
                    likes3.classList.add('likes111');
                    likes4.classList.add('likes111');

                    likes1.src = 'icons/comment(0).png';
                    likes2.src = 'icons/like(0).png';
                    likes3.src = 'icons/share (1).png';
                    likes4.src = 'icons/send.png';



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

                    main.href = `#Post_Id=${photo.id}/postType=${photo.type}`;
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                name.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                name.href = `#/user_Id=${user.user_Id}/users_Name=${user.user_Firstname + '+' + user.user_Surname}`;
                                if (photo.isText) {
                                    xyz.remove();
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

                    title.addEventListener('click', () => {
                        if (title.textContent.length > 294) {
                            title.classList.toggle('posttitlemoreorless');
                        }
                    });

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
                        if (abc1.innerText == 'Save') {
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
                                            abc1.innerText = 'Saved';
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
                        createlikesrecordlist();
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
                        createlikesrecordlist();
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
                    //COMMENT ASSPECT
                    first_Child_1.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === photo.id) {
                                sessionStorage.setItem('activepage', container.id);
                                container.classList.toggle('commentsectioncontaineractive');
                            }
                        });
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
                    more.addEventListener('click', (event) => {
                        postmenu.classList.toggle('postmenuactive');
                    });

                    authorsImg.addEventListener('click', () => {
                        view_Profile(photo.posterId);
                    });
                    name.addEventListener('click', () => {
                        view_Profile(photo.posterId);
                    });
                }
            }
        });
    });
}

if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    createPublicFeed();
} else {
    Feeds_Data_Base = [];
}