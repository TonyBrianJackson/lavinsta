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
function Creation_Mark_Photo(mark_Image, mark_Text) {
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
function Creation_Mark_Text(mark_Image, mark_Text) {
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
                personlikerecordname.addEventListener('click', () => {
                    createUsersProfile(license.posterId);
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
                    personlikerecordname.addEventListener('click', () => {
                        createUsersProfile(license.posterId);
                    });;
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
    likerecorderexit.innerHTML = '&LeftArrow;';
    likerecorderpopupheader.classList.add('likerecorderpopupheader');
    likerecorderexit.classList.add('likerecorderexit');
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

function createArchivepost() {
    let userstoryarchievecolumn = document.querySelectorAll('.userstoryarchievecolumn');
    userstoryarchievecolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let trash = user.user_Archieve;
                trash.forEach(item => {
                    if (item.isPhoto) {
                        let griditems = document.createElement('div');
                        let gridimg = document.createElement('img');
                        let gridpostimagetoview = document.createElement('img');
                        let gridpostimagecontainer = document.createElement('div');
                        let saveddelete = document.createElement('img');
                        let gridpostcaption = document.createElement('span');
                        let savedtilebox = document.createElement('nav');
                        let savedtime = document.createElement('span');
                        let saveddeletebtn = document.createElement('span');
                        let gridposttitlecover = document.createElement('span');
                        savedtime.textContent = item.date;
                        gridposttitlecover.appendChild(gridpostcaption);
                        saveddeletebtn.appendChild(saveddelete);
                        saveddelete.src = 'newicons/trash-can.png';
                        gridposttitlecover.classList.add('gridposttitlecover');
                        savedtime.classList.add('savedtime');
                        saveddeletebtn.classList.add('saveddeletebtn');
                        saveddeletebtn.classList.add('headerbtns');
                        //DELETE CONFIRMATION POPUP
                        let confirmation_popup = document.createElement('div');
                        let confirmationflex = document.createElement('div');
                        let confirmationflex1 = document.createElement('div');
                        let confirmationtext = document.createElement('p');
                        let confirmationtrue = document.createElement('span');
                        let confirmationfalse = document.createElement('span');
                        confirmationtext.textContent = 'Are You Sure You Want To Deleted';
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
                        confirmationfalse.addEventListener('click', () => {
                            confirmation_popup.style.display = 'none';
                        });
                        saveddeletebtn.addEventListener('click', () => {
                            confirmation_popup.style.display = 'flex';
                        });
                        confirmationtrue.id = item.id
                        confirmationtrue.addEventListener('click', () => {
                            trash = trash.filter((item) => {
                                if (item.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            createArchivepost();
                            creategridpostimagecontaineringTile();
                        });
                        column.appendChild(griditems);
                        griditems.classList.add('griditems');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');
                        gridpostimagetoview.classList.add('gridpostimagetoview');
                        griditems.appendChild(gridimg);
                        gridpostimagecontainer.appendChild(savedtime);
                        gridpostimagecontainer.appendChild(saveddeletebtn);
                        gridpostimagecontainer.appendChild(gridpostimagetoview);
                        gridpostimagecontainer.appendChild(gridposttitlecover);
                        gridpostimagecontainer.appendChild(savedtilebox);

                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('AaChIevE_TrUXheDTYle_bX');

                        gridpostcaption.classList.add('gridpostcaption');
                        gridpostcaption.textContent = item.title;
                        gridimg.src = item.Property_Src;
                        gridpostimagetoview.src = item.Property_Src;
                        savedtilebox.id = item.posterId + 'AaChIevE_TrUXheDTYle_bX';
                        gridimg.classList.add('gridimg');
                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('AaChIevE_TrUXheDTYle_bX');
                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');

                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                        itemsviewclosebutton.innerHTML = '&times;';
                        itemsviewonlargescale.id = item.id + item.posterId;
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        itemsviewclosebutton.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                popup.style.display = 'none';
                            });
                            itemsviewonlargescale.style.display = 'none';
                        });
                        griditems.addEventListener('click', () => {
                            itemsviewonlargescale.style.display = 'flex';
                        });
                    } if (item.isVideo) {
                        let griditems = document.createElement('div');
                        let savedvideo = document.createElement('video');
                        let gridpostimagecontainer = document.createElement('div');
                        let saveddelete = document.createElement('img');
                        let gridpostcaption = document.createElement('span');
                        let savedtime = document.createElement('span');
                        let saveddeletebtn = document.createElement('span');
                        let gridposttitlecover = document.createElement('span');
                        savedtime.textContent = item.date;
                        gridposttitlecover.appendChild(gridpostcaption);
                        saveddeletebtn.appendChild(saveddelete);
                        saveddelete.src = 'newicons/trash-can.png';
                        gridposttitlecover.classList.add('gridposttitlecover');
                        savedtime.classList.add('savedtime');
                        saveddeletebtn.classList.add('saveddeletebtn');
                        saveddeletebtn.classList.add('headerbtns');
                        //videoplayer

                        let gridpostimagetoview = document.createElement('video');
                        let gridpostcover = document.createElement('div');
                        let gridpostplaybtn = document.createElement('div');
                        let gridpostpausebtn = document.createElement('div');
                        let deletedreelvideopauseimg = document.createElement('img');
                        let deletedreelvideoplayimg = document.createElement('img');
                        let bottomvideocontrols = document.createElement('div');
                        let savedprogressarea = document.createElement('div');
                        let savedprogressbar = document.createElement('span');
                        let savedtimegrid = document.createElement('div');
                        let savedcurrenttime = document.createElement('span');
                        let savedtotaltime = document.createElement('span');
                        let savedmute = document.createElement('img');
                        let savedunmute = document.createElement('img');
                        let savedtilebox = document.createElement('nav');

                        //DELETE CONFIRMATION POPUP
                        let confirmation_popup = document.createElement('div');
                        let confirmationflex = document.createElement('div');
                        let confirmationflex1 = document.createElement('div');
                        let confirmationtext = document.createElement('p');
                        let confirmationtrue = document.createElement('span');
                        let confirmationfalse = document.createElement('span');
                        confirmationtext.textContent = 'Are You Sure You Want To Deleted';
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
                        confirmationfalse.addEventListener('click', () => {
                            confirmation_popup.style.display = 'none';
                        });
                        saveddeletebtn.addEventListener('click', () => {
                            confirmation_popup.style.display = 'flex';
                        });
                        confirmationtrue.id = item.id
                        confirmationtrue.addEventListener('click', () => {
                            trash = trash.filter((item) => {
                                if (item.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            createArchivepost();

                            creategridpostimagecontaineringTile();
                        });

                        column.appendChild(griditems);

                        griditems.appendChild(savedvideo);
                        griditems.appendChild(gridpostimagecontainer);
                        gridpostimagecontainer.appendChild(savedtime);
                        gridpostimagecontainer.appendChild(saveddeletebtn);
                        gridpostimagecontainer.appendChild(gridpostimagetoview);
                        gridpostimagecontainer.appendChild(gridpostcover);
                        gridpostimagecontainer.appendChild(gridposttitlecover);
                        gridpostimagecontainer.appendChild(savedtilebox);

                        gridpostcover.appendChild(gridpostplaybtn);
                        gridpostcover.appendChild(gridpostpausebtn);
                        gridpostcover.appendChild(savedmute);
                        gridpostcover.appendChild(savedunmute);
                        gridpostcover.appendChild(bottomvideocontrols);
                        gridpostcover.style.display = 'flex';
                        savedvideo.src = item.Property_Src;
                        gridpostimagetoview.src = item.Property_Src;
                        gridpostcaption.textContent = item.title;

                        griditems.classList.add('griditems');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');

                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('AaChIevE_TrUXheDTYle_bX');

                        gridpostcaption.classList.add('gridpostcaption');
                        saveddelete.classList.add('saveddelete');

                        deletedreelvideoplayimg.src = 'icons/play-button.png';
                        deletedreelvideopauseimg.src = 'icons/pause.png';
                        savedmute.src = 'icons/audio.png';
                        savedunmute.src = 'icons/mute.png';
                        saveddelete.src = 'newicons/trash-can.png';

                        gridpostpausebtn.style.display = 'none';
                        savedunmute.style.display = 'none';

                        bottomvideocontrols.appendChild(savedprogressarea);
                        bottomvideocontrols.appendChild(savedtimegrid);
                        gridpostplaybtn.appendChild(deletedreelvideoplayimg);
                        gridpostpausebtn.appendChild(deletedreelvideopauseimg);
                        savedprogressarea.appendChild(savedprogressbar);
                        savedtimegrid.appendChild(savedcurrenttime);
                        savedtimegrid.appendChild(savedtotaltime);
                        savedcurrenttime.innerHTML = '00' + ':' + '00';
                        savedtotaltime.innerHTML = '00' + ':' + '00';
                        gridpostplaybtn.addEventListener('click', () => {
                            gridpostimagetoview.play();
                            gridpostplaybtn.style.display = 'none';
                            gridpostpausebtn.style.display = 'flex';
                        });

                        gridpostpausebtn.addEventListener('click', () => {
                            gridpostimagetoview.pause();
                            gridpostplaybtn.style.display = 'flex';
                            gridpostpausebtn.style.display = 'none';
                        });
                        savedmute.addEventListener('click', () => {
                            savedmute.style.display = 'none';
                            savedunmute.style.display = 'flex';
                            gridpostimagetoview.volume = 0;
                        });
                        savedunmute.addEventListener('click', () => {
                            savedmute.style.display = 'flex';
                            savedunmute.style.display = 'none';
                            gridpostimagetoview.volume = 1;
                        });
                        gridpostimagetoview.addEventListener('loadeddata', (e) => {
                            let videoDuration = e.target.duration;
                            let totalmin = Math.floor(videoDuration / 60);
                            let totalsec = Math.floor(videoDuration % 60);
                            // if seconds are < 10 add 0;
                            totalmin < 10 ? totalmin = "0" + totalmin : totalmin;
                            // if seconds are < 10 add 0;
                            totalsec < 10 ? totalsec = "0" + totalsec : totalsec;
                            savedtotaltime.innerHTML = `${totalmin} : ${totalsec}`;
                        });
                        gridpostimagetoview.addEventListener('timeupdate', (e) => {
                            let savedreelvideocurrenttime = e.target.currentTime;
                            let currentMin = Math.floor(savedreelvideocurrenttime / 60);
                            let currentSec = Math.floor(savedreelvideocurrenttime % 60);
                            // if seconds are < 10 add 0;
                            currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                            // if seconds are < 10 add 0;
                            currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                            savedcurrenttime.innerHTML = `${currentMin} : ${currentSec}`;

                            //progress bar
                            let videoDuration = event.target.duration;
                            let progressvalue = (savedreelvideocurrenttime / videoDuration) * 100;
                            savedprogressbar.style.width = `${progressvalue}%`;
                        });
                        gridpostimagetoview.addEventListener('ended', () => {
                            gridpostplaybtn.style.display = 'flex';
                            gridpostpausebtn.style.display = 'none';
                        });
                        savedprogressarea.addEventListener('click', () => {
                            let videoDuration = gridpostimagetoview.duration;
                            progressbarwidthvalue = savedprogressarea.clientWidth;
                            let clickOffSetx = event.offsetX;
                            gridpostimagetoview.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
                        });



                        savedmute.classList.add('savedmute');
                        savedunmute.classList.add('savedmute');
                        savedprogressarea.classList.add('savedprogressarea');
                        savedprogressbar.classList.add('savedprogressbar');
                        savedtimegrid.classList.add('savedtimegrid');
                        savedtotaltime.classList.add('savedcurrenttime');
                        savedcurrenttime.classList.add('savedcurrenttime');
                        gridpostimagetoview.classList.add('gridpostimagetoview');
                        gridpostplaybtn.classList.add('gridpostplaybtn');
                        gridpostpausebtn.classList.add('gridpostplaybtn');
                        bottomvideocontrols.classList.add('bottomvideocontrols');
                        gridpostcover.classList.add('gridpostcover');
                        griditems.classList.add('griditems');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');

                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');

                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                        itemsviewclosebutton.innerHTML = '&times;';
                        itemsviewonlargescale.id = item.id + item.posterId;
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        gridpostimagecontainer.style.display = 'flex';
                        itemsviewclosebutton.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                popup.style.display = 'none';
                            });
                            itemsviewonlargescale.style.display = 'none';
                        });
                        griditems.addEventListener('click', () => {
                            itemsviewonlargescale.style.display = 'flex';
                        });

                        savedtilebox.id = item.posterId + 'AaChIevE_TrUXheDTYle_bX';
                    }
                    function creategridpostimagecontaineringTile() {
                        document.querySelectorAll('.savedtilebox.AaChIevE_TrUXheDTYle_bX').forEach(tilebox => {
                            tilebox.innerHTML = '';
                            if (trash) {
                                trash.forEach(photo => {
                                    if (tilebox.id === photo.posterId + 'AaChIevE_TrUXheDTYle_bX') {
                                        if (photo.isPhoto) {
                                            let savedtile = document.createElement('div');
                                            let savedtileImg = document.createElement('img');
                                            tilebox.appendChild(savedtile);
                                            savedtile.appendChild(savedtileImg);
                                            savedtileImg.src = photo.Property_Src;
                                            savedtile.classList.add('savedtile');
                                            savedtile.addEventListener('click', () => {
                                                document.querySelectorAll('.itemsviewonlargescale').forEach(popup => {
                                                    if (popup.id === photo.id + photo.posterId) {
                                                        function Loader() {
                                                            let gridpostloader = document.createElement('section');
                                                            let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                                            popup.appendChild(gridpostloader);
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
                                                        Loader();
                                                        popup.style.display = 'flex';
                                                    } else {
                                                        popup.style.display = 'none';
                                                    }
                                                })
                                            });
                                        } if (photo.isVideo) {
                                            let savedtile = document.createElement('div');
                                            let savedtileImg = document.createElement('video');
                                            tilebox.appendChild(savedtile);
                                            savedtile.appendChild(savedtileImg);
                                            savedtileImg.src = photo.Property_Src;
                                            savedtile.classList.add('savedtile');
                                            savedtile.addEventListener('click', () => {
                                                document.querySelectorAll('.itemsviewonlargescale').forEach(popup => {
                                                    if (popup.id === photo.id + photo.posterId) {
                                                        function Loader() {
                                                            let gridpostloader = document.createElement('section');
                                                            let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                                            popup.appendChild(gridpostloader);
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
                                                        Loader();
                                                        popup.style.display = 'flex';
                                                    } else {
                                                        popup.style.display = 'none';
                                                    }
                                                })
                                            });
                                        }
                                    }
                                });
                            }
                        })
                    }
                    creategridpostimagecontaineringTile();
                });
            }
        });
    })
}
function createTheItemsHere() {
    const reportedPost = JSON.parse(localStorage.getItem('postReport'));
    if (Array.isArray(reportedPost)) {
        postReport = reportedPost;
        createReport();
    } else {
        postReport = [];
    }
    createArchivepost();
}
setTimeout(() => {
    createTheItemsHere();
}, 10000);
