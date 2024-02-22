function createMain_GridPost() {
    Feeds_Data_Base.forEach(photo => {
        if (photo.type == 'timeline' || photo.type == 'public' || photo.type == 'other') {
            let itemsviewclosebutton = document.createElement('span');
            let itemsviewonlargescale = document.createElement('section');
            let largescalewideviewcontainer = document.createElement('div');
            let gridpostcaption = document.createElement('p');
            //viewing gridpost
            let gridpostimagecontainer = document.createElement('div');
            let verticalfloat = document.createElement('div');
            let horizontalfloat = document.createElement('div');
            let gridinput = document.createElement('div');
            let gridinputinput = document.createElement('input');
            let gridcomment = document.createElement('img');
            let gridpostsave = document.createElement('div');
            let gridpostshare = document.createElement('div');
            let gridpostcomment = document.createElement('div');
            let gridpostlike = document.createElement('div');
            let gridpostsaveimg = document.createElement('img');
            let gridpostshareimg = document.createElement('img');
            let gridpostcommentimg = document.createElement('img');
            let gridpostslikeimg = document.createElement('img');
            let items_Float = document.createElement('span');
            let items_Center = document.createElement('span');

            let gridlikecount = document.createElement('span');
            let gridcommentcount = document.createElement('span');
            let gridsharecount = document.createElement('span');

            let tilebox_Timeline = document.createElement('nav');

            let gridposttime = document.createElement('b');


            if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo || photo.isAdvert || photo.isCrime) {
                let gridpostimagetoview = document.createElement('img');
                gridpostimagecontainer.appendChild(gridpostimagetoview);
                gridpostimagetoview.src = photo.Property_Src;
                gridpostimagetoview.classList.add('gridpostimagetoview');
                function filter_PostImage() {
                    if (photo.filter == 'default') {
                        gridpostimagetoview.classList.add('--color-default');
                    } else if (photo.filter == 'gray') {
                        gridpostimagetoview.classList.add('--color-gray');
                    } else if (photo.filter == 'contrast') {
                        gridpostimagetoview.classList.add('--color-contrast');
                    } else if (photo.filter == 'bright') {
                        gridpostimagetoview.classList.add('--color-bright');
                    } else if (photo.filter == 'blur') {
                        gridpostimagetoview.classList.add('--color-blur');
                    } else if (photo.filter == 'invert') {
                        gridpostimagetoview.classList.add('--color-invert');
                    } else if (photo.filter == 'sepia') {
                        gridpostimagetoview.classList.add('--color-sepia');
                    } else if (photo.filter == 'hue-rotate') {
                        gridpostimagetoview.classList.add('--color-hue-rotate');
                    } else if (photo.filter == 'opacity') {
                        gridpostimagetoview.classList.add('--color-opacity');
                    } else if (photo.filter == 'satulate') {
                        gridpostimagetoview.classList.add('--color-satulate');
                    }
                }
                filter_PostImage();
            } if (photo.isText) {
                let gridposttextToview = document.createElement('p');
                gridpostimagecontainer.appendChild(gridposttextToview);
                gridposttextToview.classList.add('gridposttextToview');
                gridposttextToview.textContent = photo.Property_Src;

                gridposttextToview.style.display = 'block';
                function textGridPostTextTheme() {
                    function textThemeBackGround() {
                        if (photo.themeMode == 'default') {
                            gridposttextToview.classList.add('themedefault');
                        } else if (photo.themeMode == 'claimer') {
                            gridposttextToview.classList.add('themeclaimer');
                        } else if (photo.themeMode == 'wriser') {
                            gridposttextToview.classList.add('themewriser');
                        } else if (photo.themeMode == 'xriphor') {
                            gridposttextToview.classList.add('themexriphor');
                        } else if (photo.themeMode == 'nophia') {
                            gridposttextToview.classList.add('themenophia');
                        } else if (photo.themeMode == 'oracle') {
                            gridposttextToview.classList.add('themeoracle');
                        } else if (photo.themeMode == 'folah') {
                            gridposttextToview.classList.add('themefolah');
                        } else if (photo.themeMode == 'grino') {
                            gridposttextToview.classList.add('themegrino');
                        } else if (photo.themeMode == 'rhisxos') {
                            gridposttextToview.classList.add('themerhisxos');
                        } else if (photo.themeMode == 'nicklezol') {
                            gridposttextToview.classList.add('themenicklezol');
                            gridposttextToview.classList.add('gridposttextToviewWhite');
                            gridposttextToview.classList.add('themenicklezoltext');
                        } else if (photo.themeMode == 'mirox') {
                            gridposttextToview.classList.add('thememirox');
                        } else if (photo.themeMode == 'xosiphor') {
                            gridposttextToview.classList.add('themexosiphor');
                        } else if (photo.themeMode == 'rhicode') {
                            gridposttextToview.classList.add('themerhicode');
                            gridposttextToview.classList.add('gridposttextToviewWhite');
                        } else if (photo.themeMode == 'srccod') {
                            gridposttextToview.classList.add('themesrccode');
                            gridposttextToview.classList.add('text_Theme_Color_Is_White');
                        } else if (photo.themeMode == 'xporiah') {
                            gridposttextToview.classList.add('themexporiah');
                            gridposttextToview.classList.add('text_Theme_Color_Is_White');
                        } else if (photo.themeMode == 'niph') {
                            gridposttextToview.classList.add('themeniph');
                            gridposttextToview.classList.add('text_Theme_Color_Is_White');
                        }
                    }
                    textThemeBackGround();
                    function textThemeFont() {
                        if (photo.fontMode == 'Default') {
                            gridposttextToview.classList.add('TextDefault');
                        } else if (photo.fontMode == 'Times') {
                            gridposttextToview.classList.add('TextTimes');
                        } else if (photo.fontMode == 'Arial') {
                            gridposttextToview.classList.add('TextArial');
                        } else if (photo.fontMode == 'Cursive') {
                            gridposttextToview.classList.add('TextCursive');
                        } else if (photo.fontMode == 'Great Vibes') {
                            gridposttextToview.classList.add('TextGreatVibes');
                        }
                    }
                    textThemeFont();
                }
                textGridPostTextTheme();

            } if (photo.isVideo || photo.isShort) {
                let gridpostimagetoview = document.createElement('video');
                let gridpostcover = document.createElement('div');
                let gridpostbottomcontrols = document.createElement('div');
                let gridpostprogressarea = document.createElement('span');
                let gridpostprogressbar = document.createElement('span');
                let gridposttimegrid = document.createElement('div');
                let gridposttotaltime = document.createElement('span');
                let gridpostcurrenttime = document.createElement('span');
                let gridpost_Video_Views = document.createElement('span');
                let gridpostplaybtn = document.createElement('span');
                let gridpostpausebtn = document.createElement('span');
                let gridpostplayicon = document.createElement('img');
                let gridpostpauseicon = document.createElement('img');
                gridpostimagecontainer.appendChild(gridpostimagetoview);
                gridpostimagecontainer.appendChild(gridpostcover);
                gridpostimagetoview.src = photo.Property_Src;
                gridpostimagetoview.classList.add('gridpostimagetoview');

                gridpostcover.appendChild(gridpostplaybtn);
                gridpostcover.appendChild(gridpostpausebtn);
                gridpostcover.appendChild(gridpostbottomcontrols);
                gridpostbottomcontrols.appendChild(gridpostprogressarea);
                gridpostbottomcontrols.appendChild(gridposttimegrid);
                let viewscount = document.createElement('span');
                gridpostbottomcontrols.appendChild(gridpost_Video_Views);
                gridpost_Video_Views.appendChild(viewscount);

                let view_Count_Extension = '';
                viewscount.textContent = `${photo.views.length}${view_Count_Extension} views`;
                viewscount.classList.add('viewscount');
                gridpost_Video_Views.classList.add('gridpost_Video_Views');
                gridpostcover.style.display = 'flex';
                gridpostpausebtn.style.display = 'none';
                gridpostprogressarea.appendChild(gridpostprogressbar);
                gridposttimegrid.appendChild(gridpostcurrenttime);
                gridposttimegrid.appendChild(gridposttotaltime);
                gridpostplaybtn.appendChild(gridpostplayicon);
                gridpostpausebtn.appendChild(gridpostpauseicon);


                gridpostplayicon.src = 'icons/play-button.png'
                gridpostpauseicon.src = 'icons/pause.png'
                gridpostplaybtn.classList.add('gridpostplaybtn');
                gridpostpausebtn.classList.add('gridpostplaybtn');
                gridpostbottomcontrols.classList.add('gridpostbottomcontrols');
                gridpostcover.classList.add('gridpostcover');
                gridpostprogressarea.classList.add('gridpostprogressarea');
                gridpostprogressbar.classList.add('gridpostprogressbar');
                gridposttimegrid.classList.add('gridposttimegrid');
                gridposttotaltime.classList.add('gridposttotaltime');
                gridpostcurrenttime.classList.add('gridposttotaltime');


                viewscount.id = photo.id;
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

                gridpostplaybtn.addEventListener('click', () => {
                    increaseviewscount(photo.id);
                    gridpostimagetoview.play();
                });
                gridpostpausebtn.addEventListener('click', () => {
                    gridpostimagetoview.pause();
                });
                gridpostimagetoview.addEventListener('play', () => {
                    gridpostpausebtn.style.display = 'flex';
                    gridpostplaybtn.style.display = 'none';
                });
                gridpostimagetoview.addEventListener('pause', () => {
                    gridpostpausebtn.style.display = 'none';
                    gridpostplaybtn.style.display = 'flex';
                });
                gridpostimagetoview.addEventListener('loadeddata', (e) => {
                    let videoDuration = e.target.duration;
                    let totalMin = Math.floor(videoDuration / 60);
                    let totalSec = Math.floor(videoDuration % 60);

                    //if totalmin are less than 10 add 0 at the beginning;
                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                    gridposttotaltime.innerHTML = `${totalMin} : ${totalSec}`;
                });
                gridpostimagetoview.addEventListener('timeupdate', (e) => {
                    let currentVideoTime = e.target.currentTime;
                    let currentMin = Math.floor(currentVideoTime / 60);
                    let currentSec = Math.floor(currentVideoTime % 60);

                    //if totalmin are less than 10 add 0 at the beginning;
                    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                    gridpostcurrenttime.innerHTML = `${currentMin} : ${currentSec}`;

                    //progress bar
                    let videoDuration = event.target.duration;
                    let progressvalue = (currentVideoTime / videoDuration) * 100;
                    gridpostprogressbar.style.width = `${progressvalue}%`;

                });

                gridpostimagetoview.addEventListener('ended', () => {
                    gridpostplaybtn.style.display = 'flex';
                    gridpostpausebtn.style.display = 'none';
                });

                //duration events
                gridpostprogressarea.addEventListener('click', () => {
                    let videoDuration = gridpostimagetoview.duration;
                    progressbarwidthvalue = gridpostprogressarea.clientWidth;
                    let clickOffSetx = event.offsetX;
                    gridpostimagetoview.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
                });

            }
            if (photo.type == 'timeline') {
                tilebox_Timeline.classList.add('tilebox_Timeline');
            } if (photo.type == 'public') {
                tilebox_Timeline.classList.add('tilebox_Public');
            } if (photo.type == 'other') {
                tilebox_Timeline.classList.add('tilebox_Other');
            }
            function Create_GridPost_Options(anything) {
                let gridView_Header = document.createElement('header');
                let more = document.createElement('span');
                let postmenu = document.createElement('nav');
                let option_First_Child1 = document.createElement('span');
                let option_First_Child2 = document.createElement('span');
                let option_First_Child3 = document.createElement('span');
                let option_First_Child4 = document.createElement('span');
                let option_First_Child5 = document.createElement('span');

                let option_Name1 = document.createElement('span');
                let option_Name2 = document.createElement('span');
                let option_Name3 = document.createElement('span');
                let option_Name4 = document.createElement('span');
                let option_Name5 = document.createElement('span');

                function create_Grid_PostHeader() {
                    let gridpostNameAndImg = document.createElement('div');
                    let nameAndImgWrapper = document.createElement('div');
                    let posterImgCont = document.createElement('span');
                    let nameAndCaptionWrapper = document.createElement('div');
                    let posterImg = document.createElement('img');
                    let posterName = document.createElement('p');
                    let postCaption = document.createElement('b');

                    gridpostimagecontainer.appendChild(gridView_Header);
                    gridView_Header.appendChild(gridpostNameAndImg);
                    gridView_Header.appendChild(more);
                    gridpostNameAndImg.appendChild(nameAndImgWrapper);
                    nameAndImgWrapper.appendChild(posterImgCont);
                    nameAndImgWrapper.appendChild(nameAndCaptionWrapper);
                    nameAndCaptionWrapper.appendChild(posterName);
                    nameAndCaptionWrapper.appendChild(postCaption);
                    nameAndCaptionWrapper.appendChild(gridposttime);
                    posterImgCont.appendChild(posterImg);
                    postCaption.textContent = photo.attribute;
                    nameAndImgWrapper.classList.add('nameAndImgWrapper');
                    gridpostNameAndImg.classList.add('gridpostNameAndImg');
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                posterImg.src = user.user_ProfilePicture;
                                posterName.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        posterImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        posterImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        posterImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        posterImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        posterImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        posterImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        posterImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        posterImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        posterImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        posterImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details();
                }
                create_Grid_PostHeader();
                gridpostimagecontainer.appendChild(postmenu);

                postmenu.appendChild(option_First_Child1);
                postmenu.appendChild(option_First_Child2);
                postmenu.appendChild(option_First_Child3);
                postmenu.appendChild(option_First_Child4);
                postmenu.appendChild(option_First_Child5);

                option_First_Child1.appendChild(option_Name1);
                option_First_Child2.appendChild(option_Name2);
                option_First_Child3.appendChild(option_Name3);
                option_First_Child4.appendChild(option_Name4);
                option_First_Child5.appendChild(option_Name5);

                option_Name1.textContent = 'Edit';
                option_Name2.textContent = 'Delete';
                option_Name3.textContent = 'Turn Off Comments';
                option_Name4.textContent = 'Turn Off Votes';
                option_Name5.textContent = 'Turn Off Shares';
                option_First_Child1.addEventListener('click', () => {
                    document.querySelectorAll('.editpopup').forEach(popup => {
                        if (popup.id === photo.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'none';
                        }
                    });
                });
                option_First_Child2.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        if (popup.id === photo.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'none';
                        }
                    });
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

                if (Array.isArray(ActiveAccount)) {
                    ActiveUser_Account = ActiveAccount;
                    ActiveUser_Account.forEach(data => {
                        if (photo.posterId !== data.user_Id) {
                            more.remove();
                            postmenu.remove();
                        }
                    });
                }

                postmenu.classList.add('postmenu');
                more.classList.add('more');
                gridView_Header.classList.add('gridView_Header');
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

            gridposttime.classList.add('gridposttime')

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
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                } if (time <= 60 * 60 * 24 * 7 * 4) {
                    token = 'week';
                    maintime = time / 604800;
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                } if (time <= 60 * 60 * 24 * 7) {
                    token = 'day';
                    maintime = time / 86400;
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                } if (time <= 60 * 60 * 24) {
                    token = 'hr';
                    maintime = time / 3600;
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                } if (time <= 60 * 60) {
                    token = 'min';
                    maintime = time / 60;
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                } if (time <= 60) {
                    token = 'sec';
                    maintime = time;
                    gridposttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                }
            }
            startTime();

            let gridposttitlecover = document.createElement('span');
            gridposttitlecover.appendChild(gridpostcaption);
            gridposttitlecover.classList.add('gridposttitlecover');
            gridpostimagecontainer.appendChild(gridposttitlecover);
            gridpostimagecontainer.appendChild(tilebox_Timeline);
            gridpostimagecontainer.appendChild(horizontalfloat);
            gridpostimagecontainer.appendChild(verticalfloat);
            gridpostimagecontainer.appendChild(items_Float);

            function pushSavedphotos() {
                if (gridpostsave.classList.contains('gridpostsave')) {
                    const newId = '' + new Date().getTime();
                    if (Array.isArray(ActiveAccount)) {
                        ActiveUser_Account = ActiveAccount;
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
                                    gridpostsave.classList.add('gridpostsaved');
                                    gridpostsave.classList.remove('gridpostsave');
                                }
                            });
                        });
                    }
                    create_Message('saved successfully');
                } else {
                    create_Message('already saved');
                }
            }

            gridpostsave.addEventListener('click', () => {
                gridpostsave.classList.add('gridpostsaved');
                pushSavedphotos();
                newSaved_Script();
            });
            gridpostsave.classList.add('gridpostsave');

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
                                        gridpostsave.classList.remove('gridpostsave');
                                        gridpostsave.classList.add('gridpostsaved');
                                    }
                                });
                            }
                        });
                    });
                }
            }
            checkIfPostIsSaved();

            items_Float.appendChild(items_Center);
            items_Center.classList.add('items_Center');
            items_Float.classList.add('items_Float');
            items_Center.innerHTML = '&plus;';
            //horizontal aspect

            horizontalfloat.appendChild(gridinput);
            gridinput.appendChild(gridinputinput);
            gridinput.appendChild(gridcomment);
            gridcomment.classList.add('gridcomment');
            gridcomment.src = 'icons/send.png';
            gridinput.classList.add('gridinput');
            horizontalfloat.classList.add('horizontalfloat');
            gridinputinput.setAttribute(`placeholder`, 'Add Comment');

            let live_Like_Count_Container = document.createElement('span');
            let live_Comment_Count_Container = document.createElement('span');
            let live_Share_Count_Container = document.createElement('span');

            verticalfloat.appendChild(gridpostlike);
            verticalfloat.appendChild(live_Like_Count_Container);
            verticalfloat.appendChild(gridpostcomment);
            verticalfloat.appendChild(live_Comment_Count_Container);
            verticalfloat.appendChild(gridpostshare);
            verticalfloat.appendChild(live_Share_Count_Container);
            verticalfloat.appendChild(gridpostsave);

            live_Like_Count_Container.appendChild(gridlikecount);
            live_Comment_Count_Container.appendChild(gridcommentcount);
            live_Share_Count_Container.appendChild(gridsharecount);

            live_Like_Count_Container.classList.add('live_Like_Count');
            live_Comment_Count_Container.classList.add('live_Comment_Count');
            live_Share_Count_Container.classList.add('live_Share_Count');

            live_Comment_Count_Container.classList.add('live_Counts');
            live_Share_Count_Container.classList.add('live_Counts');

            gridlikecount.textContent = photo.likes.length;
            gridcommentcount.textContent = photo.comments.length;
            gridsharecount.textContent = photo.shares.length;

            gridlikecount.classList.add('gridlike');
            gridcommentcount.classList.add('gridcommentcount');
            gridsharecount.classList.add('gridsharecount');

            gridlikecount.classList.add('live_Like_Counters');
            gridlikecount.classList.add('live_Comment_Counters');

            gridlikecount.id = photo.id;
            gridcommentcount.id = photo.id;
            gridsharecount.id = photo.id;

            live_Like_Count_Container.id = photo.id;
            live_Comment_Count_Container.id = photo.id;
            live_Share_Count_Container.id = photo.id;

            gridpostlike.appendChild(gridpostslikeimg);
            gridpostcomment.appendChild(gridpostcommentimg);
            gridpostsave.appendChild(gridpostsaveimg);
            gridpostshare.appendChild(gridpostshareimg);

            gridpostslikeimg.src = 'newicons/like.png';
            gridpostcommentimg.src = 'newicons/comment.png';
            gridpostsaveimg.src = 'newicons/bookmark-white.png';
            gridpostshareimg.src = 'newicons/share.png';

            verticalfloat.classList.add('verticalfloat');
            gridpostimagecontainer.classList.add('gridpostimagecontainer');

            gridpostcaption.innerText = photo.title;
            gridpostcaption.classList.add('gridpostcaption');
            gridpostcaption.addEventListener('click', () => {
                gridpostcaption.classList.toggle('gridpostcaptionactive');
            });

            itemsviewonlargescale.appendChild(largescalewideviewcontainer);
            itemsviewonlargescale.appendChild(itemsviewclosebutton);
            largescalewideviewcontainer.appendChild(gridpostimagecontainer);
            largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
            itemsviewclosebutton.classList.add('itemsviewclosebutton');
            itemsviewonlargescale.classList.add('itemsviewonlargescale');
            gridpostimagecontainer.style.display = 'flex';
            itemsviewclosebutton.innerHTML = '&times;';
            document.body.appendChild(itemsviewonlargescale);
            largescalewideviewcontainer.id = photo.id;
            itemsviewonlargescale.id = photo.id;

            items_Float.addEventListener('click', () => {
                items_Center.classList.toggle('items_Centeractive');
                horizontalfloat.classList.toggle('horizontalfloatactive');
                verticalfloat.classList.toggle('verticalfloatactive');
                gridpostcaption.classList.add('gridpostcaption');
                gridpostcaption.classList.remove('gridpostcaptionactive');
            });

            gridpostcomment.id = photo.id;
            gridpostcomment.addEventListener('click', () => {
                let commentsection = document.querySelectorAll('.commentsectioncontainer');
                commentsection.forEach(section => {
                    if (section.id === gridpostcomment.id) {
                        section.classList.toggle('commentsectioncontaineractive');
                    } else {
                        section.classList.remove('commentsectioncontaineractive');
                        section.classList.add('commentsectioncontainer');
                    }
                });
            });
            gridpostshare.addEventListener('click', () => {
                document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
                    if (popup.id === photo.id) {
                        popup.style.display = 'flex';
                    } else {
                        popup.style.display = 'none';
                    }
                });
            });

            if (Array.isArray(ActiveAccount)) {
                ActiveUser_Account = ActiveAccount;
                ActiveUser_Account.forEach(data => {
                    gridpostlike.id = data.user_Id + photo.id;
                });
            }

            function checkIfPostIsLiked() {
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        let likes = photo.likes;
                        likes.forEach(like => {
                            if (like.id === data.user_Id + photo.id) {
                                live_Like_Count_Container.classList.add('live_Like_Count_active');
                                live_Like_Count_Container.classList.remove('live_Like_Count');
                            }
                        });
                    });
                }
            }
            checkIfPostIsLiked();

            live_Like_Count_Container.addEventListener('click', () => {
                document.querySelectorAll('.likerecordpopup').forEach(popup => {
                    if (popup.id === photo.id) {
                        popup.style.display = 'flex';
                    } else {
                        popup.style.display = 'none';
                    }
                })
            });

            function decideRight() {
                live_Like_Count_Container.classList.add('live_Like_Count_active');
                live_Like_Count_Container.classList.remove('live_Like_Count');
                document.querySelectorAll('.like_count').forEach(count => {
                    if (count.id === photo.id) {
                        count.classList.add('like_count_active');
                        count.classList.remove('like_count');
                    }
                });

                if (Array.isArray(ActiveAccount)) {
                    ActiveUser_Account = ActiveAccount;
                    ActiveUser_Account.forEach(data => {
                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === data.user_Id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                    });
                }

                if (photo.isText === true) {
                    like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                } else {
                    like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                }
                createlikesrecordlist();
            }
            function decideLeft() {
                live_Like_Count_Container.classList.remove('live_Like_Count_active');
                live_Like_Count_Container.classList.add('live_Like_Count');
                document.querySelectorAll('.like_count_active').forEach(count => {
                    if (count.id === photo.id) {
                        count.classList.remove('like_count_active');
                        count.classList.add('like_count');
                    }
                });

                if (Array.isArray(ActiveAccount)) {
                    ActiveUser_Account = ActiveAccount;
                    ActiveUser_Account.forEach(data => {
                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === data.user_Id + photo.id) {
                                likebutton.classList.remove('sharegridliked');
                                likebutton.classList.add('sharegridlike');
                            }
                        });
                    });
                }

                Unlike_Post(photo.id);
                createlikesrecordlist();
            }

            function makeLike() {
                if (live_Like_Count_Container.classList.contains('live_Like_Count')) {
                    decideRight();
                } else if (live_Like_Count_Container.classList.contains('live_Like_Count_active')) {
                    decideLeft();
                }
            }
            gridpostlike.addEventListener('click', () => {
                makeLike();
            });

            gridcomment.addEventListener('click', () => {
                if (gridinputinput.value) {
                    set_Comment_Data(photo.id, gridinputinput.value);
                    CreationOfComments();
                }
                gridinputinput.value = '';
            });
            itemsviewclosebutton.addEventListener('click', () => {
                itemsviewonlargescale.style.display = 'none';
                document.querySelectorAll('.deletedconfirmationpopup').forEach(popup => {
                    popup.style.display = 'none';
                });
                document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                    if (container.id === photo.id) {
                        container.classList.add('commentsectioncontainer');
                        container.classList.remove('commentsectioncontaineractive');
                    }
                });
            });

            tilebox_Timeline.id = photo.posterId + 'timeline';

            function showOnAndOffActivitiesOnGridPost() {
                if (photo.shareactive === false) {
                    gridpostshare.remove();
                    gridsharecount.remove();
                } if (photo.commentactive === false) {
                    gridinput.remove();
                } if (photo.likeactive === false) {
                    gridpostlike.remove();
                    gridlikecount.remove();
                }
            }
            showOnAndOffActivitiesOnGridPost();
        }
        createGridPostTile();
    });
}
function createGridPostTile() {
    let tilebox_Timeline = document.querySelectorAll('.tilebox_Timeline');
    tilebox_Timeline.forEach(tilecontainer => {
        tilecontainer.innerHTML = '';
        if (Feeds_Data_Base) {
            Feeds_Data_Base.forEach(gridphoto => {
                if (gridphoto.type == 'timeline') {
                    if (tilecontainer.id === gridphoto.posterId + 'timeline') {
                        if (gridphoto.isPhoto || gridphoto.isProfile_Photo || gridphoto.isCover_Photo) {
                            let tile = document.createElement('a');
                            let tileImg = document.createElement('img');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileImg);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tileImg.src = gridphoto.Property_Src;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            function filter_Image() {
                                if (gridphoto.filter == 'default') {
                                    tileImg.classList.add('--color-default');
                                } else if (gridphoto.filter == 'gray') {
                                    tileImg.classList.add('--color-gray');
                                } else if (gridphoto.filter == 'contrast') {
                                    tileImg.classList.add('--color-contrast');
                                } else if (gridphoto.filter == 'bright') {
                                    tileImg.classList.add('--color-bright');
                                } else if (gridphoto.filter == 'blur') {
                                    tileImg.classList.add('--color-blur');
                                } else if (gridphoto.filter == 'invert') {
                                    tileImg.classList.add('--color-invert');
                                } else if (gridphoto.filter == 'sepia') {
                                    tileImg.classList.add('--color-sepia');
                                } else if (gridphoto.filter == 'hue-rotate') {
                                    tileImg.classList.add('--color-hue-rotate');
                                } else if (gridphoto.filter == 'opacity') {
                                    tileImg.classList.add('--color-opacity');
                                } else if (gridphoto.filter == 'satulate') {
                                    tileImg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        } if (gridphoto.isVideo || gridphoto.isShort) {
                            let tile = document.createElement('a');
                            let tilevideo = document.createElement('video');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tilevideo);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tilevideo.classList.add('tilevideo');
                            tile.classList.add('tile');
                            tilevideo.src = gridphoto.Property_Src;
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        } if (gridphoto.isText) {
                            let tile = document.createElement('a');
                            let tileText = document.createElement('p');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileText);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tileText.classList.add('tileText');
                            tile.classList.add('tile');
                            tileText.textContent = gridphoto.Property_Src;
                            function textGridPostTileTextTheme() {
                                function textThemeBackGround() {
                                    if (gridphoto.themeMode == 'default') {
                                        tile.classList.add('themedefault');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'claimer') {
                                        tile.classList.add('themeclaimer');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'wriser') {
                                        tile.classList.add('themewriser');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'xriphor') {
                                        tile.classList.add('themexriphor');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'nophia') {
                                        tile.classList.add('themenophia');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'oracle') {
                                        tile.classList.add('themeoracle');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'folah') {
                                        tile.classList.add('themefolah');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'grino') {
                                        tile.classList.add('themegrino');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'rhisxos') {
                                        tile.classList.add('themerhisxos');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'nicklezol') {
                                        tile.classList.add('themenicklezol');
                                        tileText.classList.add('themenicklezolgridposttext');
                                    } else if (gridphoto.themeMode == 'mirox') {
                                        tile.classList.add('thememirox');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'xosiphor') {
                                        tile.classList.add('themexosiphor');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'rhicode') {
                                        tile.classList.add('themerhicode');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'srccod') {
                                        tile.classList.add('themesrccode');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    } else if (gridphoto.themeMode == 'xporiah') {
                                        tile.classList.add('themexporiah');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    } else if (gridphoto.themeMode == 'niph') {
                                        tile.classList.add('themeniph');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (gridphoto.fontMode == 'Default') {
                                        tileText.classList.add('TextDefault');
                                    } else if (gridphoto.fontMode == 'Times') {
                                        tileText.classList.add('TextTimes');
                                    } else if (gridphoto.fontMode == 'Arial') {
                                        tileText.classList.add('TextArial');
                                    } else if (gridphoto.fontMode == 'Cursive') {
                                        tileText.classList.add('TextCursive');
                                    } else if (gridphoto.fontMode == 'Great Vibes') {
                                        tileText.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTileTextTheme();
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        }
                    }
                }
            });
        }
    });
    let tilebox_Public = document.querySelectorAll('.tilebox_Public');
    tilebox_Public.forEach(tilecontainer => {
        tilecontainer.innerHTML = '';
        if (Feeds_Data_Base) {
            Feeds_Data_Base.forEach(gridphoto => {
                if (gridphoto.type == 'public') {
                    if (tilecontainer.id === gridphoto.posterId + 'timeline') {
                        if (gridphoto.isPhoto) {
                            let tile = document.createElement('a');
                            let tileImg = document.createElement('img');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileImg);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tileImg.src = gridphoto.Property_Src;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            function filter_Image() {
                                if (gridphoto.filter == 'default') {
                                    tileImg.classList.add('--color-default');
                                } else if (gridphoto.filter == 'gray') {
                                    tileImg.classList.add('--color-gray');
                                } else if (gridphoto.filter == 'contrast') {
                                    tileImg.classList.add('--color-contrast');
                                } else if (gridphoto.filter == 'bright') {
                                    tileImg.classList.add('--color-bright');
                                } else if (gridphoto.filter == 'blur') {
                                    tileImg.classList.add('--color-blur');
                                } else if (gridphoto.filter == 'invert') {
                                    tileImg.classList.add('--color-invert');
                                } else if (gridphoto.filter == 'sepia') {
                                    tileImg.classList.add('--color-sepia');
                                } else if (gridphoto.filter == 'hue-rotate') {
                                    tileImg.classList.add('--color-hue-rotate');
                                } else if (gridphoto.filter == 'opacity') {
                                    tileImg.classList.add('--color-opacity');
                                } else if (gridphoto.filter == 'satulate') {
                                    tileImg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        } if (gridphoto.isVideo || gridphoto.isShort) {
                            let tile = document.createElement('a');
                            let tilevideo = document.createElement('video');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tilevideo);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tilevideo.classList.add('tilevideo');
                            tile.classList.add('tile');
                            tilevideo.src = gridphoto.Property_Src;
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        } if (gridphoto.isText) {
                            let tile = document.createElement('a');
                            let tileText = document.createElement('p');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileText);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tileText.classList.add('tileText');
                            tile.classList.add('tile');
                            tileText.textContent = gridphoto.Property_Src;
                            function textGridPostTileTextTheme() {
                                function textThemeBackGround() {
                                    if (gridphoto.themeMode == 'default') {
                                        tile.classList.add('themedefault');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'claimer') {
                                        tile.classList.add('themeclaimer');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'wriser') {
                                        tile.classList.add('themewriser');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'xriphor') {
                                        tile.classList.add('themexriphor');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'nophia') {
                                        tile.classList.add('themenophia');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'oracle') {
                                        tile.classList.add('themeoracle');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'folah') {
                                        tile.classList.add('themefolah');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'grino') {
                                        tile.classList.add('themegrino');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'rhisxos') {
                                        tile.classList.add('themerhisxos');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'nicklezol') {
                                        tile.classList.add('themenicklezol');
                                        tileText.classList.add('themenicklezolgridposttext');
                                    } else if (gridphoto.themeMode == 'mirox') {
                                        tile.classList.add('thememirox');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'xosiphor') {
                                        tile.classList.add('themexosiphor');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'rhicode') {
                                        tile.classList.add('themerhicode');
                                        tileText.classList.add('gridposttextdark');
                                    } else if (gridphoto.themeMode == 'srccod') {
                                        tile.classList.add('themesrccode');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    } else if (gridphoto.themeMode == 'xporiah') {
                                        tile.classList.add('themexporiah');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    } else if (gridphoto.themeMode == 'niph') {
                                        tile.classList.add('themeniph');
                                        tileText.classList.add('text_Theme_Color_Is_White');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (gridphoto.fontMode == 'Default') {
                                        tileText.classList.add('TextDefault');
                                    } else if (gridphoto.fontMode == 'Times') {
                                        tileText.classList.add('TextTimes');
                                    } else if (gridphoto.fontMode == 'Arial') {
                                        tileText.classList.add('TextArial');
                                    } else if (gridphoto.fontMode == 'Cursive') {
                                        tileText.classList.add('TextCursive');
                                    } else if (gridphoto.fontMode == 'Great Vibes') {
                                        tileText.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTileTextTheme();
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        }
                    }
                }
            });
        }
    });
    let tilebox_Other = document.querySelectorAll('.tilebox_Other');
    tilebox_Other.forEach(tilecontainer => {
        tilecontainer.innerHTML = '';
        if (Feeds_Data_Base) {
            Feeds_Data_Base.forEach(gridphoto => {
                if (gridphoto.type == 'other') {
                    if (tilecontainer.id === gridphoto.posterId + 'timeline') {
                        if (gridphoto.isPhoto || gridphoto.isAdvert || gridphoto.isCrime) {
                            let tile = document.createElement('a');
                            let tileImg = document.createElement('img');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileImg);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
                            tileImg.src = gridphoto.Property_Src;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            function filter_Image() {
                                if (gridphoto.filter == 'default') {
                                    tileImg.classList.add('--color-default');
                                } else if (gridphoto.filter == 'gray') {
                                    tileImg.classList.add('--color-gray');
                                } else if (gridphoto.filter == 'contrast') {
                                    tileImg.classList.add('--color-contrast');
                                } else if (gridphoto.filter == 'bright') {
                                    tileImg.classList.add('--color-bright');
                                } else if (gridphoto.filter == 'blur') {
                                    tileImg.classList.add('--color-blur');
                                } else if (gridphoto.filter == 'invert') {
                                    tileImg.classList.add('--color-invert');
                                } else if (gridphoto.filter == 'sepia') {
                                    tileImg.classList.add('--color-sepia');
                                } else if (gridphoto.filter == 'hue-rotate') {
                                    tileImg.classList.add('--color-hue-rotate');
                                } else if (gridphoto.filter == 'opacity') {
                                    tileImg.classList.add('--color-opacity');
                                } else if (gridphoto.filter == 'satulate') {
                                    tileImg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                            tile.addEventListener('click', () => {
                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                itemsviewonlargescale.forEach(largecontainer => {
                                    if (largecontainer.id === gridphoto.id) {
                                        let gridpostloader = document.createElement('section');
                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        largecontainer.appendChild(gridpostloader);
                                        gridpostloader.appendChild(mainloadersvg);
                                        mainloadersvg.appendChild(mainloadercircle);
                                        mainloadercircle.setAttribute('cy', '30');
                                        mainloadercircle.setAttribute('cx', '30');
                                        mainloadercircle.setAttribute('r', '30');
                                        gridpostloader.classList.add('gridpostloader');
                                        document.body.appendChild(largecontainer);
                                        largecontainer.style.display = 'flex';
                                        setTimeout(() => {
                                            gridpostloader.remove();
                                        }, 2000);
                                    } else {
                                        largecontainer.style.display = 'none';
                                    }
                                });
                            });
                        }
                    }
                }
            });
        }
    });
}