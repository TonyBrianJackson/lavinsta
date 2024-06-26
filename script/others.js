function Creation_Mark_Photo(mark_Image, mark_Text, filter) {
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
function Creation_Mark_Text(mark_Image, mark_Text, themeMode, fontMode) {
    let updatingmessage = document.createElement('div');
    let gridpostmain = document.createElement('div');
    let innermessage = document.createElement('span');
    let updatingText = document.createElement('p');
    document.body.appendChild(updatingmessage);
    updatingmessage.appendChild(gridpostmain);
    updatingmessage.appendChild(innermessage);
    gridpostmain.appendChild(updatingText);
    document.body.appendChild(updatingmessage);
    innermessage.textContent = mark_Text;
    gridpostmain.classList.add('gridpostmain');
    updatingmessage.classList.add('updatingmessage');
    updatingText.textContent = mark_Image;
    function textTheme() {
        function textThemeBackGround() {
            if (themeMode == 'default') {
                gridpostmain.classList.add('themedefault');
            } else if (themeMode == 'claimer') {
                gridpostmain.classList.add('themeclaimer');
            } else if (themeMode == 'wriser') {
                gridpostmain.classList.add('themewriser');
            } else if (themeMode == 'xriphor') {
                gridpostmain.classList.add('themexriphor');
            } else if (themeMode == 'nophia') {
                gridpostmain.classList.add('themenophia');
            } else if (themeMode == 'oracle') {
                gridpostmain.classList.add('themeoracle');
            } else if (themeMode == 'folah') {
                gridpostmain.classList.add('themefolah');
            } else if (themeMode == 'grino') {
                gridpostmain.classList.add('themegrino');
            } else if (themeMode == 'rhisxos') {
                gridpostmain.classList.add('themerhisxos');
            } else if (themeMode == 'nicklezol') {
                gridpostmain.classList.add('themenicklezol');
            } else if (themeMode == 'mirox') {
                gridpostmain.classList.add('thememirox');
            } else if (themeMode == 'xosiphor') {
                gridpostmain.classList.add('themexosiphor');
            } else if (themeMode == 'rhicode') {
                gridpostmain.classList.add('themerhicode');
            } else if (themeMode == 'srccod') {
                gridpostmain.classList.add('themesrccode');
            } else if (themeMode == 'xporiah') {
                gridpostmain.classList.add('themexporiah');
            } else if (themeMode == 'niph') {
                gridpostmain.classList.add('themeniph');
            }
        }
        textThemeBackGround();
        function textThemeFont() {
            if (fontMode == 'Default') {
                updatingText.classList.add('TextDefault');
            } else if (fontMode == 'Times') {
                updatingText.classList.add('TextTimes');
            } else if (fontMode == 'Asul') {
                updatingText.classList.add('TextAsul');
            } else if (fontMode == 'Satisfy') {
                updatingText.classList.add('TextSatisfy');
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
                    let gridpostmain = document.createElement('div');
                    let gridpostcover = document.createElement('a');
                    userstoryarchievecolumn.appendChild(griditems);
                    griditems.appendChild(gridpostmain);
                    griditems.classList.add('griditems');
                    gridpostmain.classList.add('gridpostmain');
                    gridpostcover.classList.add('gridpostcover');
                    const setBackGroundImage = ()=> {
                        if (user.user_ProfilePicture) {
                            griditems.style.backgroundImage = "url(" + user.user_ProfilePicture + ")";
                        } else {
                            griditems.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                        }
                    }
                    setBackGroundImage();
                    if (trash.type == 'photo') {
                        let gridimg = document.createElement('img');
                        gridpostmain.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    } if (trash.type == 'video') {
                        let gridimg = document.createElement('video');
                        gridpostmain.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    }
                    griditems.addEventListener('click', () => {
                        create_Main_Story_Archieve(trash.id);
                    });
                    gridpostmain.appendChild(gridpostcover);
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
                let savedtilebox = document.createElement('nav');

                let itemsviewclosebutton = document.createElement('span');
                let itemsviewonlargescale = document.createElement('section');
                let largescalewideviewcontainer = document.createElement('div');
                let gridpostcaption = document.createElement('p');
                //viewing gridpost
                let gridpostimagecontainer = document.createElement('div');
                let gridposttitlecover = document.createElement('span');
                let gridposttime = document.createElement('b');
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
                        nameAndImgWrapper.classList.add('nameAndImgWrapper');
                        gridpostNameAndImg.classList.add('gridpostNameAndImg');
                        posterName.classList.add('largeusername');
                        postCaption.textContent = 'story archieve';
                        function Poster_Details() {
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
                        create_Options_Script();
                    });
                }
                Create_GridPost_Options();
                function create_Options_Script() {
                    removeOptions();
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let second_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    gridpostimagecontainer.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    options.appendChild(second_Option);
                    first_Option.innerHTML = deletesvg;
                    second_Option.innerHTML = downloadsvg;
                    exit.innerHTML = undo2;

                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    second_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.addEventListener('click', () => {
                        Remove_From_Archieve();
                        removeOptions();
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                    if (photo.type == 'photo') {
                        function pushSavedData() {
                            var new_Date = new Date().getTime();
                            var download_Link = document.createElement('a');
                            var mainimg = document.createElement('img');
                            mainimg.src = photo.Property_Src;
                            download_Link.href = mainimg.src;
                            download_Link.download = "Lavinsta" + '_' + 'IMG' + '_' + new_Date + '.' + 'jpeg';
                            download_Link.click();
                        }
                        second_Option.addEventListener('click', () => {
                            pushSavedData();
                            removeOptions();
                        });
                    } if (photo.type == 'video') {
                        function pushSavedData() {
                            var new_Date = new Date().getTime();
                            var download_Link = document.createElement('a');
                            var mainimg = document.createElement('video');
                            mainimg.src = photo.Property_Src;
                            download_Link.href = mainimg.src;
                            download_Link.download = "Lavinsta" + '_' + 'VIDEO' + '_' + new_Date + '.' + 'mp4';
                            download_Link.click();
                        }
                        second_Option.addEventListener('click', () => {
                            pushSavedData();
                            removeOptions();
                        });
                    } if (photo.type == 'text') {
                        second_Option.innerHTML = copysvg;
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
                        second_Option.addEventListener('click', () => {
                            copyTextPost(photo.Property_Src);
                            removeOptions();
                        });
                    }
                }
                function Remove_From_Archieve() {
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
                itemsviewonlargescale.style.display = 'flex';

                loader(itemsviewonlargescale, photo.id);
                if (photo.type == 'photo') {
                    let gridpostimagetoview = document.createElement('img');
                    gridpostimagecontainer.appendChild(gridpostimagetoview);
                    gridpostimagetoview.src = photo.Property_Src;
                    gridpostimagetoview.id = photo.id;
                    gridpostimagetoview.classList.add('gridpostimagetoview');
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
                            } else if (fontMode.textContent == 'Asul') {
                                gridposttextToview.classList.add('TextAsul');
                            } else if (fontMode.textContent == 'Satisfy') {
                                gridposttextToview.classList.add('TextSatisfy');
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
                savedtilebox.classList.add('savedtilebox');
                savedtilebox.classList.add('AaChIevE_TrUXheDTYle_bX');
                savedtilebox.id = photo.posterId + 'AaChIevE_TrUXheDTYle_bX';
                gridposttime.classList.add('gridposttime');

                gridposttitlecover.appendChild(gridpostcaption);
                gridposttitlecover.classList.add('gridposttitlecover');
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

document.querySelector('.storiesarchivebackarrow').addEventListener('click', () => {
    clearItemsInArchieve();
});
document.querySelector('#memoriespages').addEventListener('click', () => {
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
