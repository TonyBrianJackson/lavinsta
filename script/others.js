//custom functional messages
function create_Message(messages) {
    let savingmessage = document.createElement('span');
    document.body.appendChild(savingmessage);
    savingmessage.innerText = messages;
    savingmessage.classList.add('savingmessage');
    setTimeout(() => {
        savingmessage.remove();
    }, 3500);
}

function shareMessage() {
    let editingmessage = document.createElement('div');
    let actualeditingmessage = document.createElement('p');
    document.body.appendChild(editingmessage);
    editingmessage.appendChild(actualeditingmessage);
    editingmessage.classList.add('editingmessage');
    actualeditingmessage.textContent = 'sharing post...';
    setTimeout(() => {
        actualeditingmessage.textContent = 'post shared';
        setTimeout(() => {
            editingmessage.remove();
        }, 2000);
    }, 3000);
}
function Creation_Mark_Photo(mark_Image, mark_Text,filter) {
    let updatingmessage = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingImg = document.createElement('img');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(updatingImg);
    updatingmessage.appendChild(innermessage);
    updatingImg.classList.add('updatingimg');
    innermessage.textContent = mark_Text;
    updatingmessage.classList.add('updatingmessage');
    updatingImg.src = mark_Image;
    function filter_PostImage() {
        if (filter == 'default') {
            updatingImg.classList.add('--color-default');
        } else if (filter == 'gray') {
            updatingImg.classList.add('--color-gray');
        } else if (filter == 'contrast') {
            updatingImg.classList.add('--color-contrast');
        } else if (filter == 'bright') {
            updatingImg.classList.add('--color-bright');
        } else if (filter == 'blur') {
            updatingImg.classList.add('--color-blur');
        } else if (filter == 'invert') {
            updatingImg.classList.add('--color-invert');
        } else if (filter == 'sepia') {
            updatingImg.classList.add('--color-sepia');
        } else if (filter == 'hue-rotate') {
            updatingImg.classList.add('--color-hue-rotate');
        } else if (filter == 'opacity') {
            updatingImg.classList.add('--color-opacity');
        } else if (filter == 'satulate') {
            updatingImg.classList.add('--color-satulate');
        }
    }
    filter_PostImage();
    setTimeout(() => {
        updatingmessage.textContent = 'reflesh page to see all';
        setTimeout(() => {
            updatingmessage.remove();
        }, 2000);
        createOtherPost();
        createPhotosGadget();
        createPublicFeed();
        createPhotoPostOnTimeLine();
        createGridPost();
        createPublicGridPost();
        createOtherGridPost();
    }, 3000);
}
function Creation_Mark_Video(mark_Image, mark_Text) {
    let updatingmessage = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingImg = document.createElement('video');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(updatingImg);
    updatingmessage.appendChild(innermessage);
    updatingImg.classList.add('updatingimg');
    innermessage.textContent = mark_Text;
    updatingmessage.classList.add('updatingmessage');
    updatingImg.src = mark_Image;
    setTimeout(() => {
        updatingmessage.textContent = 'reflesh page to see all';
        setTimeout(() => {
            updatingmessage.remove();
        }, 2000);
        createPublicFeed();
        createPublicGridPost();
        creategridvideo();
        createPhotoPostOnTimeLine();
        createGridPost();
        create_TimeLine_G_Video();

        Create_Short();
        creategridreel();
        createReelPageVideo();
    }, 3000);
}
function Creation_Mark_Text(mark_Image, mark_Text,themeMode,fontMode) {
    let updatingmessage = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingText = document.createElement('p');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(updatingText);
    updatingmessage.appendChild(innermessage);
    document.body.appendChild(updatingmessage);
    innermessage.textContent = mark_Text;
    updatingmessage.classList.add('updatingmessage');
    updatingText.textContent = mark_Image;
    function textTheme() {
        function textThemeBackGround() {
            if (themeMode == 'default') {
                updatingText.classList.add('themedefault');
            } else if (themeMode == 'claimer') {
                updatingText.classList.add('themeclaimer');
            } else if (themeMode == 'wriser') {
                updatingText.classList.add('themewriser');
            } else if (themeMode == 'xriphor') {
                updatingText.classList.add('themexriphor');
            } else if (themeMode == 'nophia') {
                updatingText.classList.add('themenophia');
            } else if (themeMode == 'oracle') {
                updatingText.classList.add('themeoracle');
            } else if (themeMode == 'folah') {
                updatingText.classList.add('themefolah');
            } else if (themeMode == 'grino') {
                updatingText.classList.add('themegrino');
            } else if (themeMode == 'rhisxos') {
                updatingText.classList.add('themerhisxos');
            } else if (themeMode == 'nicklezol') {
                updatingText.classList.add('themenicklezol');
                updatingText.classList.add('themenicklezoltext');
            } else if (themeMode == 'mirox') {
                updatingText.classList.add('thememirox');
            } else if (themeMode == 'xosiphor') {
                updatingText.classList.add('themexosiphor');
            } else if (themeMode == 'rhicode') {
                updatingText.classList.add('themerhicode');
                updatingText.classList.add('gridposttextToviewWhite');
            } else if (themeMode == 'srccod') {
                updatingText.classList.add('themesrccode');
                updatingText.classList.add('text_Theme_Color_Is_White');
            } else if (themeMode == 'xporiah') {
                updatingText.classList.add('themexporiah');
                updatingText.classList.add('text_Theme_Color_Is_White');
            } else if (themeMode == 'niph') {
                updatingText.classList.add('themeniph');
                updatingText.classList.add('text_Theme_Color_Is_White');
            }
        }
        textThemeBackGround();
        function textThemeFont() {
            if (fontMode == 'Default') {
                updatingText.classList.add('TextDefault');
            } else if (fontMode == 'Times') {
                updatingText.classList.add('TextTimes');
            } else if (fontMode == 'Arial') {
                updatingText.classList.add('TextArial');
            } else if (fontMode == 'Cursive') {
                updatingText.classList.add('TextCursive');
            } else if (fontMode == 'Great Vibes') {
                updatingText.classList.add('TextGreatVibes');
            }
        }
        textThemeFont();
    }
    textTheme();
    setTimeout(() => {
        updatingmessage.textContent = 'reflesh page to see all';
        setTimeout(() => {
            updatingmessage.remove();
        }, 2000);
        createPublicFeed();
        createPublicGridPost();
        createPhotoPostOnTimeLine();
        createGridPost();
    }, 3000);
}
function Creation_Mark_Photo_Story(mark_Image, mark_Text) {
    let updatingmessage = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingImg = document.createElement('img');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(updatingImg);
    updatingmessage.appendChild(innermessage);
    updatingImg.classList.add('updatingimg');
    innermessage.textContent = mark_Text;
    updatingmessage.classList.add('updatingmessage');
    updatingImg.src = mark_Image;
    setTimeout(() => {
        updatingmessage.textContent = 'reflesh page to see all';
        setTimeout(() => {
            updatingmessage.remove();
        }, 2000);
        createStoriesPhotos();
    }, 3000);
}
function Creation_Mark_Video_Story(mark_Image, mark_Text) {
    let updatingmessage = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingImg = document.createElement('video');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(updatingImg);
    updatingmessage.appendChild(innermessage);
    updatingImg.classList.add('updatingimg');
    innermessage.textContent = mark_Text;
    updatingmessage.classList.add('updatingmessage');
    updatingImg.src = mark_Image;
    setTimeout(() => {
        updatingmessage.textContent = 'reflesh page to see all';
        setTimeout(() => {
            updatingmessage.remove();
        }, 2000);
        createStoriesPhotos();
    }, 3000);
}
//TIMELINE POST
function createReport() {
    let reportcolumn = document.querySelectorAll('.reportpostcolumn');
    reportcolumn.forEach(column => {
        column.innerHTML = '';
        postReport.forEach(report => {
            if (report.postId === column.id) {
                let reportdelete = document.createElement('span');
                let reportdeleteimg = document.createElement('img');
                let reportblockspace = document.createElement('div');
                let reportnameandtext = document.createElement('div');
                let reporttext = document.createElement('p');
                let reportname = document.createElement('strong');
                column.appendChild(reportblockspace);
                reportdelete.appendChild(reportdeleteimg);
                reportblockspace.appendChild(reportdelete);
                reportblockspace.appendChild(reportnameandtext);
                reportnameandtext.appendChild(reportname);
                reportnameandtext.appendChild(reporttext);
                reportdelete.classList.add('reportdelete');
                reportnameandtext.classList.add('reportnameandtext');
                reportblockspace.classList.add('reportblockspace');
                reporttext.classList.add('reporttext');
                reportname.classList.add('reportname');
                reporttext.textContent = report.title;
                reportname.textContent = report.name;
                reportdeleteimg.src = 'newicons/trash-can.png';
                reportblockspace.style.backgroundImage = "url(" + report.img + ")";
                reportdelete.id = report.id;
                reportdelete.addEventListener('click', () => {
                    postReport = postReport.filter(existingreport => {
                        if (existingreport.id === reportdelete.id) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    localStorage.setItem('postReport', JSON.stringify(postReport));
                    createReport();
                });
                reportname.id = report.reportingId;
                reportname.addEventListener('click', () => {
                    let usersprofile = document.querySelectorAll('.profile_Cliant');
                    usersprofile.forEach(profile => {
                        if (reportname.id === profile.id) {
                            let usersprofileloader = document.createElement('section');
                            let mainprofilesvgloader = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            profile.appendChild(usersprofileloader);
                            usersprofileloader.appendChild(mainprofilesvgloader);
                            mainprofilesvgloader.appendChild(mainloadercircle);
                            mainloadercircle.setAttribute('cy', '30');
                            mainloadercircle.setAttribute('cx', '30');
                            mainloadercircle.setAttribute('r', '30');
                            usersprofileloader.classList.add('usersprofileloader');
                            profile.style.display = 'flex';
                            document.title = reportname.textContent;
                            setTimeout(() => {
                                usersprofileloader.remove();
                            }, 3000);
                        } else {
                            profile.style.display = 'none';
                        }
                    });
                })
            }
        });
    });
}

function createpostLikeLicense(container, locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === locationId) {
            let likes = feed.likes;
            likes.forEach(license => {
                let personlikerecord = document.createElement('div');
                let personitemsflex = document.createElement('div');
                let personlikerecordimg = document.createElement('img');
                let persontimeanddate = document.createElement('span');
                let personlikerecordname = document.createElement('p');
                container.appendChild(personlikerecord);
                personlikerecord.appendChild(personitemsflex);
                personlikerecord.appendChild(persontimeanddate);
                personitemsflex.appendChild(personlikerecordimg);
                personitemsflex.appendChild(personlikerecordname);
                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - license.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                        token = 'month';
                        maintime = time / 2419200;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                        token = 'week';
                        maintime = time / 604800;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time <= 60) {
                        token = 'sec';
                        maintime = time;
                        persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                }
                startTime();
                personlikerecordimg.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(license.posterId,user.user_Id);
                        });
                    }
                });
                personlikerecordname.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(license.posterId,user.user_Id);
                        });
                    }
                });
                personlikerecord.classList.add('personlikerecord');

                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === license.posterId) {
                            personlikerecordimg.src = user.user_ProfilePicture;
                            personlikerecordname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    personlikerecordimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    personlikerecordimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    personlikerecordimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    personlikerecordimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    personlikerecordimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    personlikerecordimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    personlikerecordimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    personlikerecordimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    personlikerecordimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    personlikerecordimg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                }
                Poster_Details();
            });
        }
    });
}
function createcommentsLikeLicense(container, locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            if (comment.id === locationId) {
                let likes = comment.likes;
                likes.forEach(license => {
                    let personlikerecord = document.createElement('div');
                    let personitemsflex = document.createElement('div');
                    let personlikerecordimg = document.createElement('img');
                    let persontimeanddate = document.createElement('span');
                    let personlikerecordname = document.createElement('p');
                    container.appendChild(personlikerecord);
                    personlikerecord.appendChild(personitemsflex);
                    personlikerecord.appendChild(persontimeanddate);
                    personitemsflex.appendChild(personlikerecordimg);
                    personitemsflex.appendChild(personlikerecordname);
                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - license.time;
                        var token;
                        var moment = 'ago';
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        }
                    }
                    startTime();
                    personlikerecordimg.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(license.posterId,user.user_Id);
                            });
                        }
                    });
                    personlikerecordname.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(license.posterId,user.user_Id);
                            });
                        }
                    });
                    personlikerecord.classList.add('personlikerecord');

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === license.posterId) {
                                personlikerecordimg.src = user.user_ProfilePicture;
                                personlikerecordname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        personlikerecordimg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        personlikerecordimg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        personlikerecordimg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        personlikerecordimg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        personlikerecordimg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        personlikerecordimg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        personlikerecordimg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        personlikerecordimg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        personlikerecordimg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        personlikerecordimg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details();
                });
            }
        });
    });
}
function removePopup() {
    document.querySelectorAll('.likerecordpopup').forEach(popup => {
        popup.remove();
    });
}
function LikePopupsAndMore(locationId,type) {
    removePopup();
    let likerecorderpopupheader = document.createElement('header');
    let likerecordpopup = document.createElement('nav');
    let likerecordcolumn = document.createElement('div');
    let likerecorderexit = document.createElement('span');
    document.body.appendChild(likerecordpopup);
    likerecordpopup.appendChild(likerecorderpopupheader);
    likerecordpopup.appendChild(likerecordcolumn);
    likerecorderpopupheader.appendChild(likerecorderexit);
    likerecorderexit.innerHTML = undo;
    likerecorderpopupheader.classList.add('likerecorderpopupheader');
    likerecorderexit.classList.add('headerbtns');
    likerecorderexit.classList.add('Exitpage_Arrow');
    likerecordpopup.classList.add('likerecordpopup');
    likerecordcolumn.classList.add('likerecordcolumn');
    likerecorderexit.addEventListener('click', () => {
        likerecordpopup.remove();
    });
    likerecordpopup.style.display = 'flex';
    likerecordpopup.id = locationId;
    likerecordcolumn.id = locationId;
    if (type == 'postlike') {
        createpostLikeLicense(likerecordcolumn, locationId);
    } if (type == 'commentlike') {
        createcommentsLikeLicense(likerecordcolumn, locationId);
    } if (type == 'commentreplylike') {
        CreationOfCommentsRepliesLikesLicense(likerecordcolumn, locationId);
    }
}
function CreationOfCommentsRepliesLikesLicense(container,locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            let commentreplies = comment.comments;
            commentreplies.forEach(reply => {
                let likes = reply.likes;
                likes.forEach(license => {
                    if (license.postId === locationId) {
                        let personlikerecord = document.createElement('div');
                        let personitemsflex = document.createElement('div');
                        let personlikerecordimg = document.createElement('img');
                        let persontimeanddate = document.createElement('span');
                        let personlikerecordname = document.createElement('p');
                        container.appendChild(personlikerecord);
                        personlikerecord.appendChild(personitemsflex);
                        personlikerecord.appendChild(persontimeanddate);
                        personitemsflex.appendChild(personlikerecordimg);
                        personitemsflex.appendChild(personlikerecordname);
                        const startTime = function () {
                            let time;
                            let timeresult = new Date().getTime();
                            let miliseconds = timeresult - license.time;
                            var token;
                            var moment = 'ago';
                            let maintime;

                            time = miliseconds / 1000;
                            if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                token = 'month';
                                maintime = time / 2419200;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24 * 7 * 4) {
                                token = 'week';
                                maintime = time / 604800;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24 * 7) {
                                token = 'day';
                                maintime = time / 86400;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24) {
                                token = 'hr';
                                maintime = time / 3600;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60) {
                                token = 'min';
                                maintime = time / 60;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60) {
                                token = 'sec';
                                maintime = time;
                                persontimeanddate.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            }
                        }
                        startTime();
                        personlikerecordname.addEventListener('click', () => {
                            createUsersProfile(license.posterId);
                        });;
                        personlikerecord.classList.add('personlikerecord');
                        personlikerecordimg.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(license.posterId,user.user_Id);
                                });
                            }
                        });
                        personlikerecordname.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(license.posterId,user.user_Id);
                                });
                            }
                        });
                        function Poster_Details() {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === license.posterId) {
                                    personlikerecordimg.src = user.user_ProfilePicture;
                                    personlikerecordname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                    function filter_Image() {
                                        //profile_filter 
                                        if (user.user_ProfilePicture_Filter == 'default') {
                                            personlikerecordimg.classList.add('--color-default');
                                        } else if (user.user_ProfilePicture_Filter == 'gray') {
                                            personlikerecordimg.classList.add('--color-gray');
                                        } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                            personlikerecordimg.classList.add('--color-contrast');
                                        } else if (user.user_ProfilePicture_Filter == 'bright') {
                                            personlikerecordimg.classList.add('--color-bright');
                                        } else if (user.user_ProfilePicture_Filter == 'blur') {
                                            personlikerecordimg.classList.add('--color-blur');
                                        } else if (user.user_ProfilePicture_Filter == 'invert') {
                                            personlikerecordimg.classList.add('--color-invert');
                                        } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                            personlikerecordimg.classList.add('--color-sepia');
                                        } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                            personlikerecordimg.classList.add('--color-hue-rotate');
                                        } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                            personlikerecordimg.classList.add('--color-opacity');
                                        } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                            personlikerecordimg.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                }
                            });
                        }
                        Poster_Details();
                    }
                });
            })
        });
    });
}
function create_Grid_Story_Archieve() {
    clearItemsInArchieve();
    function createArchieves() {
        let userstoryarchievecolumn = document.createElement('div');
        document.querySelector('.storiesarchivecolumn').appendChild(userstoryarchievecolumn);
        userstoryarchievecolumn.classList.add('userstoryarchievecolumn');
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            userstoryarchievecolumn.id = data.user_Id;
        });
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        userstoryarchievecolumn.innerHTML = '';
        LogInFormData.forEach(user => {
            if (user.user_Id === userstoryarchievecolumn.id) {
                let Trash = user.user_Archieve;
                Trash.forEach(trash => {
                    let griditems = document.createElement('div');
                    userstoryarchievecolumn.appendChild(griditems);
                    griditems.classList.add('griditems');
                    if (trash.type == 'photo') {
                        let gridimg = document.createElement('img');
                        griditems.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    } if (trash.type == 'video') {
                        let gridimg = document.createElement('img');
                        griditems.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    }
                    griditems.addEventListener('click', () => {
                        create_Main_Story_Archieve(trash.id);
                    });
                });
            }
        });
    }
    createArchieves();
}
function create_Main_Story_Archieve(locationId) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        let Trash = user.user_Archieve;
        Trash.forEach(photo => {
            if (photo.id === locationId) {
                let saveddelete = document.createElement('img');
                let savedtilebox = document.createElement('nav');
                let savedtime = document.createElement('span');
                let saveddeletebtn = document.createElement('span');

                let itemsviewclosebutton = document.createElement('span');
                let itemsviewonlargescale = document.createElement('section');
                let largescalewideviewcontainer = document.createElement('div');
                let gridpostcaption = document.createElement('p');
                //viewing gridpost
                let gridpostimagecontainer = document.createElement('div');
                let gridposttitlecover = document.createElement('span');
                let gridposttime = document.createElement('b');
                function delete_DELETED_story() {
                    let confirmation_popup = document.createElement('div');
                    let confirmationflex = document.createElement('div');
                    let confirmationflex1 = document.createElement('div');
                    let confirmationtext = document.createElement('p');
                    let confirmationtrue = document.createElement('span');
                    let confirmationfalse = document.createElement('span');
                    confirmationtext.textContent = 'Are You Sure You Want To Delete';
                    confirmationtrue.textContent = 'Yes';
                    confirmationfalse.textContent = 'No';
                    document.body.appendChild(confirmation_popup);
                    confirmation_popup.appendChild(confirmationflex);
                    confirmation_popup.appendChild(confirmationflex1);
                    confirmationflex.appendChild(confirmationtext);
                    confirmationflex1.appendChild(confirmationtrue);
                    confirmationflex1.appendChild(confirmationfalse);
                    confirmation_popup.classList.add('confirmation_popup');
                    confirmationflex.classList.add('confirmationflex');
                    confirmationflex1.classList.add('confirmationflex');
                    confirmationtrue.classList.add('confirmationtrue');
                    confirmationfalse.classList.add('confirmationfalse');
                    confirmation_popup.style.display = 'flex';
                    confirmationfalse.addEventListener('click', () => {
                        confirmation_popup.remove();
                    });
                    confirmationtrue.id = photo.id
                    confirmationtrue.addEventListener('click', () => {
                        LogInFormData.forEach(data => {
                            let storytrash = data.user_Archieve;
                            storytrash = storytrash.filter(story => {
                                if (story.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            data.user_Archieve = storytrash;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        create_Grid_Story_Archieve();
                        confirmation_popup.remove();
                        creteArchieveTiles(photo.posterId);
                    });
                    itemsviewclosebutton.addEventListener('click', () => {
                        confirmation_popup.remove();
                    });
                }
                saveddeletebtn.addEventListener('click', () => {
                    delete_DELETED_story();
                });
                itemsviewonlargescale.style.display = 'flex';

                loader(itemsviewonlargescale, photo.id);
                if (photo.type == 'photo') {
                    let gridpostimagetoview = document.createElement('img');
                    gridpostimagecontainer.appendChild(gridpostimagetoview);
                    gridpostimagetoview.src = photo.Property_Src;
                    gridpostimagetoview.id = photo.id;
                    gridpostimagetoview.classList.add('gridpostimagetoview');
                    function filter_PostImage() {
                        if (filter == 'default') {
                            gridpostimagetoview.classList.add('--color-default');
                        } else if (filter == 'gray') {
                            gridpostimagetoview.classList.add('--color-gray');
                        } else if (filter == 'contrast') {
                            gridpostimagetoview.classList.add('--color-contrast');
                        } else if (filter == 'bright') {
                            gridpostimagetoview.classList.add('--color-bright');
                        } else if (filter == 'blur') {
                            gridpostimagetoview.classList.add('--color-blur');
                        } else if (filter == 'invert') {
                            gridpostimagetoview.classList.add('--color-invert');
                        } else if (filter == 'sepia') {
                            gridpostimagetoview.classList.add('--color-sepia');
                        } else if (filter == 'hue-rotate') {
                            gridpostimagetoview.classList.add('--color-hue-rotate');
                        } else if (filter == 'opacity') {
                            gridpostimagetoview.classList.add('--color-opacity');
                        } else if (filter == 'satulate') {
                            gridpostimagetoview.classList.add('--color-satulate');
                        }
                    }
                    filter_PostImage();
                } if (photo.type == 'text') {
                    let gridposttextToview = document.createElement('p');
                    gridpostimagecontainer.appendChild(gridposttextToview);
                    gridposttextToview.classList.add('gridposttextToview');
                    gridposttextToview.textContent = photo.Property_Src;

                    gridposttextToview.style.display = 'block';
                    function textGridPostTextTheme() {
                        function textThemeBackGround() {
                            if (themeMode == 'default') {
                                gridposttextToview.classList.add('themedefault');
                            } else if (themeMode == 'claimer') {
                                gridposttextToview.classList.add('themeclaimer');
                            } else if (themeMode == 'wriser') {
                                gridposttextToview.classList.add('themewriser');
                            } else if (themeMode == 'xriphor') {
                                gridposttextToview.classList.add('themexriphor');
                            } else if (themeMode == 'nophia') {
                                gridposttextToview.classList.add('themenophia');
                            } else if (themeMode == 'oracle') {
                                gridposttextToview.classList.add('themeoracle');
                            } else if (themeMode == 'folah') {
                                gridposttextToview.classList.add('themefolah');
                            } else if (themeMode == 'grino') {
                                gridposttextToview.classList.add('themegrino');
                            } else if (themeMode == 'rhisxos') {
                                gridposttextToview.classList.add('themerhisxos');
                            } else if (themeMode == 'nicklezol') {
                                gridposttextToview.classList.add('themenicklezol');
                                gridposttextToview.classList.add('gridposttextToviewWhite');
                                gridposttextToview.classList.add('themenicklezoltext');
                            } else if (themeMode == 'mirox') {
                                gridposttextToview.classList.add('thememirox');
                            } else if (themeMode == 'xosiphor') {
                                gridposttextToview.classList.add('themexosiphor');
                            } else if (themeMode == 'rhicode') {
                                gridposttextToview.classList.add('themerhicode');
                                gridposttextToview.classList.add('gridposttextToviewWhite');
                            } else if (themeMode == 'srccod') {
                                gridposttextToview.classList.add('themesrccode');
                                gridposttextToview.classList.add('text_Theme_Color_Is_White');
                            } else if (themeMode == 'xporiah') {
                                gridposttextToview.classList.add('themexporiah');
                                gridposttextToview.classList.add('text_Theme_Color_Is_White');
                            } else if (themeMode == 'niph') {
                                gridposttextToview.classList.add('themeniph');
                                gridposttextToview.classList.add('text_Theme_Color_Is_White');
                            }
                        }
                        textThemeBackGround();
                        function textThemeFont() {
                            if (fontMode.textContent == 'Default') {
                                gridposttextToview.classList.add('TextDefault');
                            } else if (fontMode.textContent == 'Times') {
                                gridposttextToview.classList.add('TextTimes');
                            } else if (fontMode.textContent == 'Arial') {
                                gridposttextToview.classList.add('TextArial');
                            } else if (fontMode.textContent == 'Cursive') {
                                gridposttextToview.classList.add('TextCursive');
                            } else if (fontMode.textContent == 'Great Vibes') {
                                gridposttextToview.classList.add('TextGreatVibes');
                            }
                        }
                        textThemeFont();
                    }
                    textGridPostTextTheme();

                } if (photo.type == 'video') {
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
                    gridpostimagetoview.src = photo.Property_Src;
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

                }
                savedtime.textContent = photo.date;
                saveddeletebtn.appendChild(saveddelete);
                saveddelete.src = 'newicons/trash-can.png';
                savedtime.classList.add('savedtime');
                saveddeletebtn.classList.add('saveddeletebtn');
                saveddeletebtn.classList.add('headerbtns');
                savedtilebox.classList.add('savedtilebox');
                savedtilebox.classList.add('AaChIevE_TrUXheDTYle_bX');
                savedtilebox.id = photo.posterId + 'AaChIevE_TrUXheDTYle_bX';
                gridposttime.classList.add('gridposttime');

                gridposttitlecover.appendChild(gridpostcaption);
                gridposttitlecover.classList.add('gridposttitlecover');
                gridpostimagecontainer.appendChild(gridposttitlecover);
                gridpostimagecontainer.appendChild(saveddeletebtn);
                gridpostimagecontainer.appendChild(savedtilebox);

                itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                itemsviewonlargescale.appendChild(itemsviewclosebutton);
                largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                gridpostimagecontainer.classList.add('gridpostimagecontainer');
                largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                itemsviewclosebutton.classList.add('itemsviewclosebutton');
                itemsviewonlargescale.classList.add('itemsviewonlargescale');
                gridpostimagecontainer.style.display = 'flex';
                itemsviewclosebutton.innerHTML = '&times;';
                document.body.appendChild(itemsviewonlargescale);
                largescalewideviewcontainer.id = photo.id;
                itemsviewonlargescale.id = photo.id;

                itemsviewclosebutton.addEventListener('click', () => {
                    itemsviewonlargescale.remove();
                });
                creteArchieveTiles(photo.posterId);
            }
        });
    });
}
function creteArchieveTiles(locationId) {
    document.querySelectorAll('.savedtilebox.AaChIevE_TrUXheDTYle_bX').forEach(tilebox => {
        tilebox.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            let Trash = user.user_Archieve;
            Trash.forEach(photo => {
                if (photo.posterId === locationId) {
                    if (tilebox.id === photo.posterId + 'AaChIevE_TrUXheDTYle_bX') {
                        let savedtile = document.createElement('div');
                        if (photo.type == 'photo') {
                            let savedtileImg = document.createElement('img');
                            savedtile.appendChild(savedtileImg);
                            savedtileImg.src = photo.Property_Src;
                        } if (photo.type == 'video') {
                            let savedtileImg = document.createElement('video');
                            savedtile.appendChild(savedtileImg);
                            savedtileImg.src = photo.Property_Src;
                        }
                        tilebox.appendChild(savedtile);
                        savedtile.classList.add('savedtile');
                        savedtile.addEventListener('click', () => {
                            create_Main_Story_Archieve(photo.id);
                        });
                    }
                }
            });
        });
    })
}
function clearItemsInArchieve() {
    document.querySelectorAll('.userstoryarchievecolumn').forEach(column => {
        column.remove();
    });
}
document.querySelector('.storiesarchivebackarrow').addEventListener('click',()=> {
    clearItemsInArchieve();
});
document.querySelector('#memoriespages').addEventListener('click',()=> {
    create_Grid_Story_Archieve();
});
function createTheItemsHere() {
    const reportedPost = JSON.parse(localStorage.getItem('postReport'));
    if (Array.isArray(reportedPost)) {
        postReport = reportedPost;
        createReport();
    } else {
        postReport = [];
    }
}
setTimeout(() => {
    createTheItemsHere();
}, 10000);
