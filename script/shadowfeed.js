function createMain_GridPost(LocationId, Property_Src,generictype) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === LocationId) {
            if (photo.type == 'timeline' || photo.type == 'public' || photo.type == 'other') {
                document.title = `post/${photo.title}`;
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
                let gridcomment = document.createElement('div');
                let gridpostsave = document.createElement('div');
                let gridpostshare = document.createElement('div');
                let gridpostcomment = document.createElement('div');
                let gridpostlike = document.createElement('div');
                let items_Float = document.createElement('span');
                let items_Center = document.createElement('span');

                let gridlikecount = document.createElement('span');
                let gridcommentcount = document.createElement('span');
                let gridsharecount = document.createElement('span');

                let tilebox_Timeline = document.createElement('nav');

                let gridposttime = document.createElement('b');

                itemsviewonlargescale.style.display = 'flex';

                loader(itemsviewonlargescale, photo.id);
                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo || photo.isAdvert || photo.isCrime) {
                    let gridpostimagetoview = document.createElement('img');
                    gridpostimagecontainer.appendChild(gridpostimagetoview);
                    if (Property_Src) {
                        gridpostimagetoview.src = Property_Src;
                    } else {
                        if (photo.children) {
                            let children = photo.children;
                            for (let i = 0; i < children.length; i++) {
                                gridpostimagetoview.src = children[0].Property_Src;
                            }
                        } else {
                            gridpostimagetoview.src = photo.Property_Src;
                        }
                    }
                    gridpostimagetoview.id = photo.id;
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
                    let postmain = document.createElement('div');
                    let textPost = document.createElement('p');
                    gridpostimagecontainer.appendChild(postmain);
                    postmain.appendChild(textPost);
                    textPost.classList.add('textPost');
                    postmain.classList.add('postmain')
                    textPost.textContent = photo.Property_Src;
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
                    function textGridPostTextTheme() {
                        function textThemeBackGround() {
                            if (photo.themeMode == 'default') {
                                postmain.classList.add('themedefault');
                            } else if (photo.themeMode == 'claimer') {
                                postmain.classList.add('themeclaimer');
                            } else if (photo.themeMode == 'wriser') {
                                postmain.classList.add('themewriser');
                            } else if (photo.themeMode == 'xriphor') {
                                postmain.classList.add('themexriphor');
                            } else if (photo.themeMode == 'nophia') {
                                postmain.classList.add('themenophia');
                            } else if (photo.themeMode == 'oracle') {
                                postmain.classList.add('themeoracle');
                            } else if (photo.themeMode == 'folah') {
                                postmain.classList.add('themefolah');
                            } else if (photo.themeMode == 'grino') {
                                postmain.classList.add('themegrino');
                            } else if (photo.themeMode == 'rhisxos') {
                                postmain.classList.add('themerhisxos');
                            } else if (photo.themeMode == 'nicklezol') {
                                postmain.classList.add('themenicklezol');
                            } else if (photo.themeMode == 'mirox') {
                                postmain.classList.add('thememirox');
                            } else if (photo.themeMode == 'xosiphor') {
                                postmain.classList.add('themexosiphor');
                            } else if (photo.themeMode == 'rhicode') {
                                postmain.classList.add('themerhicode');
                            } else if (photo.themeMode == 'srccod') {
                                postmain.classList.add('themesrccode');
                            } else if (photo.themeMode == 'xporiah') {
                                postmain.classList.add('themexporiah');
                            } else if (photo.themeMode == 'niph') {
                                postmain.classList.add('themeniph');
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
                    textGridPostTextTheme();
                    textPost.addEventListener('click', () => {
                        textPost.classList.toggle('textPostmoreorless');
                    });

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

                    gridpostplaybtn.addEventListener('click', () => {
                        gridpostimagetoview.play();
                    });
                    gridpostpausebtn.addEventListener('click', () => {
                        gridpostimagetoview.pause();
                    });
                    gridpostimagetoview.addEventListener('play', () => {
                        gridpostpausebtn.style.display = 'flex';
                        gridpostplaybtn.style.display = 'none';
                        increaseviewscount(photo.id);
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
                        gridView_Header.appendChild(itemsviewclosebutton);
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
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    posterImg.src = user.user_ProfilePicture;
                                    let username;
                                    user.user_Mid_Name ? username =
                                        user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                        username = user.user_Firstname + ' ' + user.user_Surname;
                                    posterName.innerHTML = username;
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
                    more.classList.add('more');
                    gridView_Header.classList.add('gridView_Header');
                    more.innerHTML = vellip;
                    more.addEventListener('click', () => {
                        create_Post_Options_Script(gridpostimagecontainer,photo.id);
                    });
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
                gridcomment.innerHTML = send2svg;
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

                gridpostlike.innerHTML = likesvg;
                gridpostcomment.innerHTML = commentsvg;
                gridpostsave.innerHTML = savedsvg;
                gridpostshare.innerHTML = sharesvg;

                verticalfloat.classList.add('verticalfloat');
                gridpostimagecontainer.classList.add('gridpostimagecontainer');

                gridpostcaption.innerText = photo.title;
                gridpostcaption.textContent.split(" ").forEach(texttitle => {
                    prefix.forEach(unit => {
                        if (texttitle.indexOf(unit.prefixName) != -1) {
                            if (unit.prefixName == 'https://') {
                                let newtitle = gridpostcaption.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                gridpostcaption.innerHTML = newtitle;
                            } else {
                                let newtitle = gridpostcaption.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                gridpostcaption.innerHTML = newtitle;
                            }
                        }
                    });
                });
                gridpostcaption.classList.add('gridpostcaption');
                gridpostcaption.addEventListener('click', () => {
                    gridpostcaption.classList.toggle('gridpostcaptionactive');
                });

                itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                itemsviewclosebutton.classList.add('itemsviewclosebutton');
                itemsviewonlargescale.classList.add('itemsviewonlargescale');
                gridpostimagecontainer.style.display = 'flex';
                itemsviewclosebutton.innerHTML = closesvg;
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
                    create_Comment_room(photo.id);
                    sessionStorage.setItem('activepage', photo.id);
                });
                gridpostshare.addEventListener('click', () => {
                    create_share_Popup(photo.id);
                });

                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                    LikePopupsAndMore(photo.id, 'postlike',photo.likes.length);
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

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                        CreationOfComments(photo.id);
                    }
                    gridinputinput.value = '';
                });
                itemsviewclosebutton.addEventListener('click', () => {
                    history.back();
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
            createGridPostTile(LocationId,generictype);
        }
    });
}
async function create_Random_Items(locationId, posterId, caption, Property_Src, type, generictype, elapsedtime) {
    function displayelement(display) {
        if (generictype == 'comment') {
            document.querySelectorAll('.commentroomsectionactive').forEach(container => {
                container.style.display = display;
            });
            document.querySelectorAll('.commentsectioncontaineractive').forEach(container => {
                container.style.display = display;
            });
        } if (generictype == 'chatroom') {
            document.querySelectorAll('.userchatroom').forEach(container => {
                container.style.display = display;
            });
        }
    }
    displayelement('none');
    let savedtilebox = document.createElement('nav');

    let itemsviewclosebutton = document.createElement('span');
    let itemsviewonlargescale = document.createElement('section');
    let largescalewideviewcontainer = document.createElement('div');
    let gridpostcaption = document.createElement('p');
    //viewing gridpost
    let gridpostimagecontainer = document.createElement('div');
    let gridposttitlecover = document.createElement('span');

    itemsviewonlargescale.style.display = 'flex';

    loader(itemsviewonlargescale, locationId);
    function Create_GridPost_Options(anything) {
        let gridView_Header = document.createElement('header');
        let more = document.createElement('span');

        function create_Grid_PostHeader() {
            let gridpostNameAndImg = document.createElement('div');
            let nameAndImgWrapper = document.createElement('div');
            let posterImgCont = document.createElement('span');
            let nameAndCaptionWrapper = document.createElement('div');
            let posterImg = document.createElement('img');
            let posterName = document.createElement('p');
            let postCaption = document.createElement('b');
            let gridposttime = document.createElement('b');

            gridpostimagecontainer.appendChild(gridView_Header);
            gridView_Header.appendChild(gridpostNameAndImg);
            gridView_Header.appendChild(more);
            gridView_Header.appendChild(itemsviewclosebutton);
            gridpostNameAndImg.appendChild(nameAndImgWrapper);
            nameAndImgWrapper.appendChild(posterImgCont);
            nameAndImgWrapper.appendChild(nameAndCaptionWrapper);
            nameAndCaptionWrapper.appendChild(posterName);
            nameAndCaptionWrapper.appendChild(postCaption);
            nameAndCaptionWrapper.appendChild(gridposttime);
            posterImgCont.appendChild(posterImg);
            postCaption.textContent = type;
            nameAndImgWrapper.classList.add('nameAndImgWrapper');
            gridpostNameAndImg.classList.add('gridpostNameAndImg');
            gridposttime.textContent = elapsedtime;
            gridposttime.classList.add('gridposttime');
            function Poster_Details() {
                LogInFormData.forEach(user => {
                    if (user.user_Id === posterId) {
                        posterImg.src = user.user_ProfilePicture;
                        let username;
                        user.user_Mid_Name ? username =
                            user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                            username = user.user_Firstname + ' ' + user.user_Surname;
                        posterName.innerHTML = username;
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
        more.classList.add('more');
        gridView_Header.classList.add('gridView_Header');
        more.innerHTML = vellip;
        more.addEventListener('click', () => {
            create_Post_Options_Script(gridpostimagecontainer,locationId);
        });
    }
    Create_GridPost_Options();
    function create_Post_Options_Script(container, idLocation) {
        if (locationId === idLocation) {
            let options = document.createElement('div');
            let eight_Option = document.createElement('span');
            let exit = document.createElement('span');

            container.insertAdjacentElement("afterend", options);
            options.appendChild(exit);
            options.appendChild(eight_Option);
            eight_Option.innerHTML = downloadsvg;
            exit.innerHTML = undo2;

            options.classList.add('options');
            eight_Option.classList.add('headerbtns');
            exit.classList.add('headerbtns');

            exit.addEventListener('click', () => {
                options.remove();
            });
            if (type == 'photo') {
                function pushSavedData() {
                    var new_Date = new Date().getTime();
                    var download_Link = document.createElement('a');
                    var mainimg = document.createElement('img');
                    mainimg.src = Property_Src;
                    download_Link.href = mainimg.src;
                    download_Link.download = "Lavinsta" + '_' + 'IMG' + '_' + new_Date + '.' + 'jpeg';
                    download_Link.click();
                }
                eight_Option.addEventListener('click', () => {
                    pushSavedData();
                    removeOptions();
                });
            } if (type == 'video') {
                function pushSavedData() {
                    var new_Date = new Date().getTime();
                    var download_Link = document.createElement('a');
                    var mainimg = document.createElement('video');
                    mainimg.src = Property_Src;
                    download_Link.href = mainimg.src;
                    download_Link.download = "Lavinsta" + '_' + 'VIDEO' + '_' + new_Date + '.' + 'mp4';
                    download_Link.click();
                }
                eight_Option.addEventListener('click', () => {
                    pushSavedData();
                    removeOptions();
                });
            } if (type == 'text') {
                eight_Option.innerHTML = copysvg;
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
                eight_Option.addEventListener('click', () => {
                    copyTextPost(Property_Src);
                    removeOptions();
                });
            }
        }
    }
    if (type == 'photo') {
        let gridpostimagetoview = document.createElement('img');
        gridpostimagecontainer.appendChild(gridpostimagetoview);
        gridpostimagetoview.src = Property_Src;
        gridpostimagetoview.classList.add('gridpostimagetoview');
    } if (type == 'video') {
        let gridpostimagetoview = document.createElement('video');
        let gridpostcover = document.createElement('div');
        let gridpostbottomcontrols = document.createElement('div');
        let gridpostprogressarea = document.createElement('span');
        let gridpostprogressbar = document.createElement('span');
        let gridposttimegrid = document.createElement('div');
        let gridposttotaltime = document.createElement('span');
        let gridpostcurrenttime = document.createElement('span');
        let gridpostplaybtn = document.createElement('span');
        let gridpostpausebtn = document.createElement('span');
        let gridpostplayicon = document.createElement('img');
        let gridpostpauseicon = document.createElement('img');
        gridpostimagecontainer.appendChild(gridpostimagetoview);
        gridpostimagecontainer.appendChild(gridpostcover);
        gridpostimagetoview.src = Property_Src;
        gridpostimagetoview.classList.add('gridpostimagetoview');

        gridpostcover.appendChild(gridpostplaybtn);
        gridpostcover.appendChild(gridpostpausebtn);
        gridpostcover.appendChild(gridpostbottomcontrols);
        gridpostbottomcontrols.appendChild(gridpostprogressarea);
        gridpostbottomcontrols.appendChild(gridposttimegrid);

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


        gridpostplaybtn.addEventListener('click', () => {
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

    } if (type == 'text') {
        let postmain = document.createElement('div');
        let textPost = document.createElement('p');
        gridpostimagecontainer.appendChild(postmain);
        postmain.appendChild(textPost);
        textPost.classList.add('textPost');
        postmain.classList.add('postmain')
        textPost.textContent = photo.Property_Src;
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
        function textGridPostTextTheme() {
            function textThemeBackGround() {
                if (photo.themeMode == 'default') {
                    postmain.classList.add('themedefault');
                } else if (photo.themeMode == 'claimer') {
                    postmain.classList.add('themeclaimer');
                } else if (photo.themeMode == 'wriser') {
                    postmain.classList.add('themewriser');
                } else if (photo.themeMode == 'xriphor') {
                    postmain.classList.add('themexriphor');
                } else if (photo.themeMode == 'nophia') {
                    postmain.classList.add('themenophia');
                } else if (photo.themeMode == 'oracle') {
                    postmain.classList.add('themeoracle');
                } else if (photo.themeMode == 'folah') {
                    postmain.classList.add('themefolah');
                } else if (photo.themeMode == 'grino') {
                    postmain.classList.add('themegrino');
                } else if (photo.themeMode == 'rhisxos') {
                    postmain.classList.add('themerhisxos');
                } else if (photo.themeMode == 'nicklezol') {
                    postmain.classList.add('themenicklezol');
                } else if (photo.themeMode == 'mirox') {
                    postmain.classList.add('thememirox');
                } else if (photo.themeMode == 'xosiphor') {
                    postmain.classList.add('themexosiphor');
                } else if (photo.themeMode == 'rhicode') {
                    postmain.classList.add('themerhicode');
                } else if (photo.themeMode == 'srccod') {
                    postmain.classList.add('themesrccode');
                } else if (photo.themeMode == 'xporiah') {
                    postmain.classList.add('themexporiah');
                } else if (photo.themeMode == 'niph') {
                    postmain.classList.add('themeniph');
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
        textGridPostTextTheme();
        textPost.addEventListener('click', () => {
            textPost.classList.toggle('textPostmoreorless');
        });
    }


    gridpostcaption.textContent = caption;

    savedtilebox.classList.add('savedtilebox');
    savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
    savedtilebox.id = posterId + 'UXer_TrUXheDTYle_bX';


    gridposttitlecover.appendChild(gridpostcaption);
    gridposttitlecover.classList.add('gridposttitlecover');
    gridpostcaption.classList.add('gridpostcaption');
    gridpostimagecontainer.appendChild(gridposttitlecover);
    gridpostimagecontainer.appendChild(savedtilebox);

    itemsviewonlargescale.appendChild(largescalewideviewcontainer);
    largescalewideviewcontainer.appendChild(gridpostimagecontainer);
    gridpostimagecontainer.classList.add('gridpostimagecontainer');
    largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
    itemsviewclosebutton.classList.add('itemsviewclosebutton');
    itemsviewonlargescale.classList.add('itemsviewonlargescale');
    gridpostimagecontainer.style.display = 'flex';
    itemsviewclosebutton.innerHTML = closesvg;
    document.body.appendChild(itemsviewonlargescale);

    itemsviewclosebutton.addEventListener('click', () => {
        itemsviewonlargescale.remove();
        displayelement('flex');
    });
}
function createGridPostTile(locationId,generictype) {
    let tilebox_Timeline = document.querySelectorAll('.tilebox_Timeline');
    tilebox_Timeline.forEach(tilecontainer => {
        if (Feeds_Data_Base) {
            tilecontainer.innerHTML = '';
            Feeds_Data_Base.forEach(gridphoto => {
                if (gridphoto.type == 'timeline') {
                    if (tilecontainer.id === gridphoto.posterId + 'timeline') {
                        if (gridphoto.isPhoto || gridphoto.isProfile_Photo || gridphoto.isCover_Photo) {
                            let tile = document.createElement('a');
                            let tileImg = document.createElement('img');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileImg);
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            if (gridphoto.children) {
                                let children = gridphoto.children;
                                for (let i = 0; i < children.length; i++) {
                                    tileImg.src = children[0].Property_Src;
                                }
                            } else {
                                tileImg.src = gridphoto.Property_Src;
                            }
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
                                createMain_GridPost(gridphoto.id, tileImg.src);
                            });
                        } if (gridphoto.isVideo || gridphoto.isShort) {
                            let tile = document.createElement('a');
                            let tilevideo = document.createElement('video');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tilevideo);
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tilevideo.classList.add('tilevideo');
                            tile.classList.add('tile');
                            tilevideo.src = gridphoto.Property_Src;
                            tile.addEventListener('click', () => {
                                createMain_GridPost(gridphoto.id);
                            });
                        } if (gridphoto.isText) {
                            let tile = document.createElement('a');
                            let gridpostmain = document.createElement('div');
                            let tileText = document.createElement('p');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(gridpostmain);
                            gridpostmain.appendChild(tileText);
                            tile.classList.add('radialtext');
                            gridpostmain.classList.add('gridpostmain');
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tileText.classList.add('tileText');
                            tile.classList.add('tile');
                            tileText.textContent = gridphoto.Property_Src;
                            function textGridPostTileTextTheme() {
                                function textThemeBackGround() {
                                    if (gridphoto.themeMode == 'default') {
                                        gridpostmain.classList.add('themedefault');
                                    } else if (gridphoto.themeMode == 'claimer') {
                                        gridpostmain.classList.add('themeclaimer');
                                    } else if (gridphoto.themeMode == 'wriser') {
                                        gridpostmain.classList.add('themewriser');
                                    } else if (gridphoto.themeMode == 'xriphor') {
                                        gridpostmain.classList.add('themexriphor');
                                    } else if (gridphoto.themeMode == 'nophia') {
                                        gridpostmain.classList.add('themenophia');
                                    } else if (gridphoto.themeMode == 'oracle') {
                                        gridpostmain.classList.add('themeoracle');
                                    } else if (gridphoto.themeMode == 'folah') {
                                        gridpostmain.classList.add('themefolah');
                                    } else if (gridphoto.themeMode == 'grino') {
                                        gridpostmain.classList.add('themegrino');
                                    } else if (gridphoto.themeMode == 'rhisxos') {
                                        gridpostmain.classList.add('themerhisxos');
                                    } else if (gridphoto.themeMode == 'nicklezol') {
                                        gridpostmain.classList.add('themenicklezol');
                                    } else if (gridphoto.themeMode == 'mirox') {
                                        gridpostmain.classList.add('thememirox');
                                    } else if (gridphoto.themeMode == 'xosiphor') {
                                        gridpostmain.classList.add('themexosiphor');
                                    } else if (gridphoto.themeMode == 'rhicode') {
                                        gridpostmain.classList.add('themerhicode');
                                    } else if (gridphoto.themeMode == 'srccod') {
                                        gridpostmain.classList.add('themesrccode');
                                    } else if (gridphoto.themeMode == 'xporiah') {
                                        gridpostmain.classList.add('themexporiah');
                                    } else if (gridphoto.themeMode == 'niph') {
                                        gridpostmain.classList.add('themeniph');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (gridphoto.fontMode == 'Default') {
                                        tileText.classList.add('TextDefault');
                                    } else if (gridphoto.fontMode == 'Times') {
                                        tileText.classList.add('TextTimes');
                                    } else if (gridphoto.fontMode == 'Asul') {
                                        tileText.classList.add('TextAsul');
                                    } else if (gridphoto.fontMode == 'Satisfy') {
                                        tileText.classList.add('TextSatisfy');
                                    } else if (gridphoto.fontMode == 'Great Vibes') {
                                        tileText.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTileTextTheme();
                            tile.addEventListener('click', () => {
                                createMain_GridPost(gridphoto.id);
                            });
                        } if (gridphoto.children) {
                            if (gridphoto.id === locationId) {
                                let gridfeed = gridphoto.children;
                                let another_Tile_Box = document.createElement('div');
                                another_Tile_Box.classList.add('another_Tile_Box');
                                another_Tile_Box.id = gridphoto.id;
                                gridfeed.forEach(feed => {
                                    let tile = document.createElement('a');
                                    let tileImg = document.createElement('img');
                                    tilecontainer.appendChild(another_Tile_Box);
                                    another_Tile_Box.appendChild(tile);
                                    tile.appendChild(tileImg);
                                    tile.href = `view.html?Post_Id=${feed.Child_Id}`;
                                    tileImg.src = feed.Property_Src;
                                    tileImg.classList.add('tileimg');
                                    tile.classList.add('tile');
                                    tile.addEventListener('click', () => {
                                        createMain_GridPost(gridphoto.id, feed.Property_Src);
                                    });
                                });
                            }
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
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            if (gridphoto.children) {
                                let children = gridphoto.children;
                                for (let i = 0; i < children.length; i++) {
                                    tileImg.src = children[0].Property_Src;
                                }
                            } else {
                                tileImg.src = gridphoto.Property_Src;
                            }
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
                                createMain_GridPost(gridphoto.id,tileImg.src);
                            });
                        } if (gridphoto.isVideo || gridphoto.isShort) {
                            let tile = document.createElement('a');
                            let tilevideo = document.createElement('video');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tilevideo);
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tilevideo.classList.add('tilevideo');
                            tile.classList.add('tile');
                            tilevideo.src = gridphoto.Property_Src;
                            tile.addEventListener('click', () => {
                                createMain_GridPost(gridphoto.id);
                            });
                        } if (gridphoto.isText) {
                            let tile = document.createElement('a');
                            let gridpostmain = document.createElement('div');
                            let tileText = document.createElement('p');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(gridpostmain);
                            gridpostmain.appendChild(tileText);
                            tile.classList.add('radialtext');
                            gridpostmain.classList.add('gridpostmain');
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tileText.classList.add('tileText');
                            tile.classList.add('tile');
                            tileText.textContent = gridphoto.Property_Src;
                            function textGridPostTileTextTheme() {
                                function textThemeBackGround() {
                                    if (gridphoto.themeMode == 'default') {
                                        gridpostmain.classList.add('themedefault');
                                    } else if (gridphoto.themeMode == 'claimer') {
                                        gridpostmain.classList.add('themeclaimer');
                                    } else if (gridphoto.themeMode == 'wriser') {
                                        gridpostmain.classList.add('themewriser');
                                    } else if (gridphoto.themeMode == 'xriphor') {
                                        gridpostmain.classList.add('themexriphor');
                                    } else if (gridphoto.themeMode == 'nophia') {
                                        gridpostmain.classList.add('themenophia');
                                    } else if (gridphoto.themeMode == 'oracle') {
                                        gridpostmain.classList.add('themeoracle');
                                    } else if (gridphoto.themeMode == 'folah') {
                                        gridpostmain.classList.add('themefolah');
                                    } else if (gridphoto.themeMode == 'grino') {
                                        gridpostmain.classList.add('themegrino');
                                    } else if (gridphoto.themeMode == 'rhisxos') {
                                        gridpostmain.classList.add('themerhisxos');
                                    } else if (gridphoto.themeMode == 'nicklezol') {
                                        gridpostmain.classList.add('themenicklezol');
                                    } else if (gridphoto.themeMode == 'mirox') {
                                        gridpostmain.classList.add('thememirox');
                                    } else if (gridphoto.themeMode == 'xosiphor') {
                                        gridpostmain.classList.add('themexosiphor');
                                    } else if (gridphoto.themeMode == 'rhicode') {
                                        gridpostmain.classList.add('themerhicode');
                                    } else if (gridphoto.themeMode == 'srccod') {
                                        gridpostmain.classList.add('themesrccode');
                                    } else if (gridphoto.themeMode == 'xporiah') {
                                        gridpostmain.classList.add('themexporiah');
                                    } else if (gridphoto.themeMode == 'niph') {
                                        gridpostmain.classList.add('themeniph');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (gridphoto.fontMode == 'Default') {
                                        tileText.classList.add('TextDefault');
                                    } else if (gridphoto.fontMode == 'Times') {
                                        tileText.classList.add('TextTimes');
                                    } else if (gridphoto.fontMode == 'Asul') {
                                        tileText.classList.add('TextAsul');
                                    } else if (gridphoto.fontMode == 'Satisfy') {
                                        tileText.classList.add('TextSatisfy');
                                    } else if (gridphoto.fontMode == 'Great Vibes') {
                                        tileText.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTileTextTheme();
                            tile.addEventListener('click', () => {
                                createMain_GridPost(gridphoto.id);
                            });
                        } if (gridphoto.children) {
                            if (gridphoto.id === locationId) {
                                let gridfeed = gridphoto.children;
                                let another_Tile_Box = document.createElement('div');
                                another_Tile_Box.classList.add('another_Tile_Box');
                                another_Tile_Box.id = gridphoto.id;
                                gridfeed.forEach(feed => {
                                    let tile = document.createElement('a');
                                    let tileImg = document.createElement('img');
                                    tilecontainer.appendChild(another_Tile_Box);
                                    another_Tile_Box.appendChild(tile);
                                    tile.appendChild(tileImg);
                                    tile.href = `view.html?Post_Id=${feed.Child_Id}`;
                                    tileImg.src = feed.Property_Src;
                                    tileImg.classList.add('tileimg');
                                    tile.classList.add('tile');
                                    tile.addEventListener('click', () => {
                                        createMain_GridPost(gridphoto.id, feed.Property_Src);
                                    });
                                });
                            }
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
                            tile.href = `view.html?Post_Id=${gridphoto.id}`;
                            tileImg.classList.add('tileimg');
                            tile.classList.add('tile');
                            if (gridphoto.children) {
                                let children = gridphoto.children;
                                for (let i = 0; i < children.length; i++) {
                                    tileImg.src = children[0].Property_Src;
                                }
                            } else {
                                tileImg.src = gridphoto.Property_Src;
                            }
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
                                createMain_GridPost(gridphoto.id, tileImg.src);
                            });
                        } if (gridphoto.children) {
                            if (gridphoto.id === locationId) {
                                let gridfeed = gridphoto.children;
                                let another_Tile_Box = document.createElement('div');
                                another_Tile_Box.classList.add('another_Tile_Box');
                                another_Tile_Box.id = gridphoto.id;
                                gridfeed.forEach(feed => {
                                    let tile = document.createElement('a');
                                    let tileImg = document.createElement('img');
                                    tilecontainer.appendChild(another_Tile_Box);
                                    another_Tile_Box.appendChild(tile);
                                    tile.appendChild(tileImg);
                                    tile.href = `view.html?Post_Id=${feed.Child_Id}`;
                                    tileImg.src = feed.Property_Src;
                                    tileImg.classList.add('tileimg');
                                    tile.classList.add('tile');
                                    tile.addEventListener('click', () => {
                                        createMain_GridPost(gridphoto.id, feed.Property_Src);
                                    });
                                });
                            }
                        }
                    }
                }
            });
        }
    });
}
function loader(container, LocationId) {
    document.querySelectorAll('.itemsviewonlargescale').forEach(item => {
        item.remove();
    });
    let gridpostloader = document.createElement('section');
    let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    container.appendChild(gridpostloader);
    gridpostloader.appendChild(mainloadersvg);
    mainloadersvg.appendChild(mainloadercircle);
    mainloadercircle.setAttribute('cy', '30');
    mainloadercircle.setAttribute('cx', '30');
    mainloadercircle.setAttribute('r', '30');
    gridpostloader.classList.add('gridpostloader');
    setTimeout(() => {
        gridpostloader.remove();
    }, 2000);
}
function external_loader(container) {
    let gridpostloader = document.createElement('section');
    let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    container.appendChild(gridpostloader);
    gridpostloader.appendChild(mainloadersvg);
    mainloadersvg.appendChild(mainloadercircle);
    mainloadercircle.setAttribute('cy', '30');
    mainloadercircle.setAttribute('cx', '30');
    mainloadercircle.setAttribute('r', '30');
    gridpostloader.classList.add('gridpostloader');
    setTimeout(() => {
        gridpostloader.remove();
    }, 2000);
}