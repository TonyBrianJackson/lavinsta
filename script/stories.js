const deletedstoriessssculomn = document.querySelector('.deletedstoriessssculomn');

function create_Grid_Story_Trash() {
    clearItemsInStoryTrash();
    function createArchieves() {
        let userstorytrashcolumn = document.createElement('div');
        document.querySelector('.deletedstoriessssculomn').appendChild(userstorytrashcolumn);
        userstorytrashcolumn.classList.add('userstorytrashcolumn');
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            userstorytrashcolumn.id = data.user_Id;
        });
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        userstorytrashcolumn.innerHTML = '';
        LogInFormData.forEach(user => {
            if (user.user_Id === userstorytrashcolumn.id) {
                let Trash = user.user_Story_Trash;
                Trash.forEach(trash => {
                    let griditems = document.createElement('div');
                    userstorytrashcolumn.appendChild(griditems);
                    griditems.classList.add('griditems');
                    if (trash.type == 'photo') {
                        let gridimg = document.createElement('img');
                        griditems.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    } if (trash.type == 'video') {
                        let gridimg = document.createElement('video');
                        griditems.appendChild(gridimg);
                        gridimg.src = trash.Property_Src;
                        gridimg.classList.add('gridimg');
                    }
                    griditems.addEventListener('click', () => {
                        create_Main_Story_Trash(trash.id);
                    });
                });
            }
        });
    }
    createArchieves();
}
function create_Main_Story_Trash(locationId) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        let Trash = user.user_Story_Trash;
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
                        nameAndImgWrapper.classList.add('nameAndImgWrapper');
                        gridpostNameAndImg.classList.add('gridpostNameAndImg');
                        posterName.classList.add('largeusername');
                        postCaption.textContent = 'Trash';
                        gridposttime.textContent = photo.date;
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
                        Remove_From_Trash();
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

                function Remove_From_Trash() {
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
                            let storytrash = data.user_Story_Trash;
                            storytrash = storytrash.filter(story => {
                                if (story.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            data.user_Story_Trash = storytrash;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        create_Grid_Story_Trash();
                        confirmation_popup.remove();
                        creategridpostimagecontaineringTile(photo.posterId);
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
                } if (photo.type == 'text') {
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
                            } else if (photo.fontMode == 'Asul') {
                                gridposttextToview.classList.add('TextAsul');
                            } else if (photo.fontMode == 'Satisfy') {
                                gridposttextToview.classList.add('TextSatisfy');
                            } else if (photo.fontMode == 'Great Vibes') {
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
                gridpostcaption.textContent = photo.title;
                savedtilebox.classList.add('savedtilebox');
                savedtilebox.classList.add('Yyer_TrUXheDTYle_bX');
                savedtilebox.id = photo.posterId + 'Yyer_TrUXheDTYle_bX';

                gridposttitlecover.appendChild(gridpostcaption);
                gridposttitlecover.classList.add('gridposttitlecover');
                gridpostcaption.classList.add('gridpostcaption')
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
                creategridpostimagecontaineringTile(photo.posterId);
            }
        });
    });
}
function creategridpostimagecontaineringTile(locationId) {
    document.querySelectorAll('.savedtilebox.Yyer_TrUXheDTYle_bX').forEach(tilebox => {
        tilebox.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            let Trash = user.user_Story_Trash;
            Trash.forEach(photo => {
                if (photo.posterId === locationId) {
                    if (tilebox.id === photo.posterId + 'Yyer_TrUXheDTYle_bX') {
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
                            create_Main_Story_Trash(photo.id);
                        });
                    }
                }
            });
        });
    })
}
function clearItemsInStoryTrash() {
    document.querySelectorAll('.userstorytrashcolumn').forEach(column => {
        column.remove();
    });
}
document.querySelector('.Arrstories').addEventListener('click', () => {
    clearItemsInStoryTrash();
});
document.querySelector('#deletestoss').addEventListener('click', () => {
    create_Grid_Story_Trash();
});

/* STORIES UPLOAD*/
const mystory = document.querySelectorAll('.mystory');
let storiesphotosArray;

function createStoriesPhotos() {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        let mystorycontainers = document.querySelectorAll('.mystory');
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            mystorycontainers.forEach(mystory => {
                let stories = userdata.user_Stories;
                stories.forEach(storystatus => {
                    if (mystory.id === storystatus.posterId) {
                        let storyposterimg = document.createElement('img');
                        let storynameandimg = document.createElement('div');
                        let storyname = document.createElement('b');
                        let storytitle = document.createElement('p');
                        let newstoryuploadcontainer = document.createElement('div');
                        if (storystatus.type == 'photo') {
                            let newstoryupload = document.createElement('img');
                            newstoryuploadcontainer.appendChild(newstoryupload);
                            newstoryupload.classList.add('newstoryupload');
                            newstoryupload.src = storystatus.Property_Src;
                        } if (storystatus.type == 'video') {
                            let newstoryupload = document.createElement('video');
                            newstoryuploadcontainer.appendChild(newstoryupload);
                            newstoryupload.src = storystatus.Property_Src;
                            newstoryupload.classList.add('newstoryupload');
                        }
                        newstoryuploadcontainer.id = storystatus.posterId;
                        mystory.appendChild(newstoryuploadcontainer);
                        newstoryuploadcontainer.appendChild(storynameandimg)

                        storynameandimg.appendChild(storyposterimg);
                        storynameandimg.appendChild(storyname);
                        storynameandimg.appendChild(storytitle);

                        newstoryuploadcontainer.classList.add('newstoryuploadcontainer');
                        storytitle.classList.add('storytitle');
                        storyname.classList.add('storyname1');
                        storynameandimg.classList.add('storynameandimg');
                        storyposterimg.classList.add('storyposterimg');
                        storytitle.textContent = storystatus.title;

                        newstoryuploadcontainer.addEventListener('click', () => {
                            create_Main_Stories(storystatus.id, storystatus.Property_Src);
                        });
                        document.querySelectorAll('.storycount').forEach(count => {
                            if (count.id === storystatus.posterId) {
                                count.textContent = userdata.user_Stories.length;
                            }
                        });
                        function Poster_Details() {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === storystatus.posterId) {
                                    storyposterimg.src = user.user_ProfilePicture;
                                    storyname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                    function filter_Image() {
                                        //profile_filter 
                                        if (user.user_ProfilePicture_Filter == 'default') {
                                            storyposterimg.classList.add('--color-default');
                                        } else if (user.user_ProfilePicture_Filter == 'gray') {
                                            storyposterimg.classList.add('--color-gray');
                                        } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                            storyposterimg.classList.add('--color-contrast');
                                        } else if (user.user_ProfilePicture_Filter == 'bright') {
                                            storyposterimg.classList.add('--color-bright');
                                        } else if (user.user_ProfilePicture_Filter == 'blur') {
                                            storyposterimg.classList.add('--color-blur');
                                        } else if (user.user_ProfilePicture_Filter == 'invert') {
                                            storyposterimg.classList.add('--color-invert');
                                        } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                            storyposterimg.classList.add('--color-sepia');
                                        } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                            storyposterimg.classList.add('--color-hue-rotate');
                                        } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                            storyposterimg.classList.add('--color-opacity');
                                        } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                            storyposterimg.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                }
                            });
                        }
                        if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            Poster_Details();
                        } else {
                            LogInFormData = [];
                        }
                    }
                });
            });
        });
    }
}

function story_Deleting(locationId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            let stories = userdata.user_Stories;
            stories.forEach(storystatus => {
                if (storystatus.id === locationId) {
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
                    confirmation_popup.id = storystatus.id;
                    confirmationtrue.id = storystatus.id;
                    confirmation_popup.style.display = 'flex';

                    function pushtrash() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === storystatus.posterId) {
                                let Trash = user.user_Story_Trash;
                                const id = '' + new Date().getTime();
                                if (storystatus.type == 'photo') {
                                    Trash.push({
                                        type: 'photo',
                                        posterId: storystatus.posterId,
                                        Property_Src: storystatus.Property_Src,
                                        title: storystatus.title,
                                        id: id,
                                        date: trackingDate
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                } else if (storystatus.type == 'video') {
                                    Trash.push({
                                        type: 'video',
                                        posterId: storystatus.posterId,
                                        Property_Src: storystatus.Property_Src,
                                        title: storystatus.title,
                                        id: id,
                                        date: trackingDate
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                        });
                        deletestory();
                    }
                    function deletestory() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(userdata => {
                            if (userdata.user_Id === storystatus.posterId) {
                                let activestories = userdata.user_Stories;
                                activestories = activestories.filter(story => {
                                    if (story.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                userdata.user_Stories = activestories;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                create_Grid_Story_Trash();
                                confirmation_popup.remove();
                                createStoriesPhotos();
                                CreateTileImages(storystatus.posterId);
                            }
                        });
                    }
                    confirmationtrue.addEventListener('click', () => {
                        pushtrash();
                    });
                }
            });
        });
    }
}
story_Deleting();

async function create_Main_Stories(locationId, Property_Src) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(userdata => {
        let stories = userdata.user_Stories;
        stories.forEach(storystatus => {
            if (storystatus.id === locationId) {
                let itemsviewclosebutton = document.createElement('span');
                let itemsviewonlargescale = document.createElement('section');
                let largescalewideviewcontainer = document.createElement('div');

                let gridposttime = document.createElement('b');
                let gridpostimagecontainer = document.createElement('div');
                let gridpostcaption = document.createElement('p');
                //floats
                let items_Float = document.createElement('span');
                let items_Center = document.createElement('span');
                let horizontalfloat = document.createElement('div');
                let gridinput = document.createElement('div');
                let gridinputinput = document.createElement('input');
                let gridcomment = document.createElement('div');
                let tilebox_Stories = document.createElement('nav');

                if (storystatus.type == 'photo') {
                    let gridpostimagetoview = document.createElement('img');
                    gridpostimagecontainer.appendChild(gridpostimagetoview);
                    gridpostimagetoview.classList.add('gridpostimagetoview');
                    gridpostimagetoview.src = storystatus.Property_Src;
                    gridpostimagecontainer.style.backgroundImage = "url(" + storystatus.Property_Src + ")";
                    gridpostimagetoview.style.display = 'none';
                } if (storystatus.type == 'video') {
                    let gridpostimagetoview = document.createElement('video');
                    let gridpostcover = document.createElement('div');
                    let gridpostbottomcontrols = document.createElement('div');
                    let gridpostplaybtn = document.createElement('span');
                    let gridpostpausebtn = document.createElement('span');
                    let gridpostplayicon = document.createElement('img');
                    let gridpostpauseicon = document.createElement('img');
                    let gridpostprogressarea = document.createElement('span');
                    let gridpostprogressbar = document.createElement('span');
                    let gridposttimegrid = document.createElement('div');
                    let gridposttotaltime = document.createElement('span');
                    let gridpostcurrenttime = document.createElement('span')
                    let storymute = document.createElement('img');
                    let storyunmute = document.createElement('img');
                    gridpostimagecontainer.appendChild(gridpostimagetoview);
                    gridpostimagetoview.classList.add('gridpostimagetoview');
                    gridpostimagetoview.src = storystatus.Property_Src;
                    gridpostimagecontainer.style.backgroundImage = "url(" + storystatus.Property_Src + ")";

                    gridpostcover.style.display = 'flex';
                    gridpostimagecontainer.appendChild(gridpostcover);
                    gridposttimegrid.appendChild(gridpostcurrenttime);
                    gridposttimegrid.appendChild(gridposttotaltime);
                    gridpostcover.appendChild(gridpostbottomcontrols);
                    gridpostcover.appendChild(gridpostplaybtn);
                    gridpostcover.appendChild(gridpostpausebtn);
                    gridpostcover.appendChild(storymute);
                    gridpostcover.appendChild(storyunmute);

                    gridpostbottomcontrols.appendChild(gridpostprogressarea);

                    gridpostbottomcontrols.appendChild(gridposttimegrid);

                    gridpostprogressarea.appendChild(gridpostprogressbar);
                    gridpostplaybtn.appendChild(gridpostplayicon);
                    gridpostpausebtn.appendChild(gridpostpauseicon);
                    gridpostpausebtn.style.display = 'none';
                    storyunmute.style.display = 'none';
                    gridpostcover.style.display = 'flex';


                    gridposttimegrid.classList.add('gridposttimegrid');
                    gridpostcurrenttime.classList.add('gridpostcurrenttime');
                    gridposttotaltime.classList.add('gridpostcurrenttime');
                    gridpostpausebtn.classList.add('gridpostplaybtn');
                    gridpostplaybtn.classList.add('gridpostplaybtn');
                    gridpostplayicon.src = 'icons/play-button.png';
                    gridpostpauseicon.src = 'icons/pause.png';
                    storymute.src = 'icons/audio.png';
                    storyunmute.src = 'icons/mute.png';
                    storymute.classList.add('storymute');
                    storyunmute.classList.add('storymute');
                    gridpostprogressarea.classList.add('gridpostprogressarea');
                    gridpostprogressbar.classList.add('gridpostprogressbar');
                    gridpostcover.classList.add('gridpostcover');
                    gridpostbottomcontrols.classList.add('gridpostbottomcontrols');

                    gridpostcaption.addEventListener('click', () => {
                        gridpostcaption.classList.toggle('gridpostcaptionmoreorless');
                    });
                    storymute.addEventListener('click', () => {
                        storymute.style.display = 'none';
                        storyunmute.style.display = 'flex';
                        gridpostimagetoview.volume = 0;
                    });
                    storyunmute.addEventListener('click', () => {
                        storyunmute.style.display = 'none';
                        storymute.style.display = 'flex';
                        gridpostimagetoview.volume = 1;
                    });
                    gridpostplaybtn.addEventListener('click', () => {
                        gridpostimagetoview.play();
                        gridpostplaybtn.style.display = 'none';
                        gridpostpausebtn.style.display = 'flex';
                    });
                    gridpostpausebtn.addEventListener('click', () => {
                        gridpostimagetoview.pause();
                        gridpostpausebtn.style.display = 'none';
                        gridpostplaybtn.style.display = 'flex';
                    });
                    gridpostimagetoview.addEventListener('loadeddata', (e) => {
                        let videoDuration = event.target.duration;
                        let totalMin = Math.floor(videoDuration / 60);
                        let totalSec = Math.floor(videoDuration % 60);
                        //if mins are less than 10 add 0 at the beginning
                        totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                        // if secs are less than 10 add 0 at the beginning
                        totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                        gridposttotaltime.innerHTML = `${totalMin} : ${totalSec}`;
                    });
                    gridpostimagetoview.addEventListener('timeupdate', (e) => {
                        let newstoryuploadCurrentTime = event.target.currentTime;
                        let currentMin = Math.floor(newstoryuploadCurrentTime / 60);
                        let currentSec = Math.floor(newstoryuploadCurrentTime % 60);
                        //if mins are less than 10 add 0 at the beginning
                        currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                        // if secs are less than 10 add 0 at the beginning
                        currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                        gridpostcurrenttime.innerHTML = `${currentMin} : ${currentSec}`;

                        if (`${currentMin} : ${currentSec}` === gridposttotaltime.innerHTML) {
                            gridpostpausebtn.style.display = 'none';
                            gridpostplaybtn.style.display = 'flex';
                        }

                        //progress bar
                        let videoDuration = event.target.duration;
                        let progressvalue = (newstoryuploadCurrentTime / videoDuration) * 100;
                        gridpostprogressbar.style.width = `${progressvalue}%`;

                    });

                    gridpostprogressarea.addEventListener('click', () => {
                        let videoDuration = gridpostimagetoview.duration;
                        progressbarwidthvalue = gridpostprogressarea.clientWidth;
                        let clickOffSetx = event.offsetX;
                        gridpostimagetoview.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
                    });
                    gridpostbottomcontrols.display = 'none';
                    gridpostcover.addEventListener('mouseenter', (event) => {
                        gridpostbottomcontrols.style.display = 'flex';
                        setTimeout(() => {
                            gridpostbottomcontrols.classList.add('gridpostbottomcontrolsoff');
                        }, 4000);
                        gridpostcover.addEventListener('mousemove', () => {
                            gridpostbottomcontrols.classList.remove('gridpostbottomcontrolsoff');
                        })
                    });
                    gridpostcover.addEventListener('mouseleave', (event) => {
                        gridpostbottomcontrols.style.display = 'none';
                    });
                }
                let storyviewspopup = document.createElement('div');
                let statusviewsheader = document.createElement('header');
                let popupname = document.createElement('p');
                let exit = document.createElement('span');

                let storyviewscolumn = document.createElement('div');
                storyviewspopup.id = storystatus.id;
                storyviewscolumn.id = storystatus.id;
                statusviewsheader.appendChild(exit);
                statusviewsheader.appendChild(popupname);
                storyviewspopup.appendChild(statusviewsheader);
                storyviewspopup.appendChild(storyviewscolumn);
                storyviewscolumn.classList.add('storyviewscolumn');
                storyviewspopup.classList.add('storyviewspopup');
                exit.classList.add('headerbtns');
                exit.innerHTML = undo2;
                popupname.innerHTML = `${storystatus.views.length} view(s) &quest; on this story`;

                exit.addEventListener('click', () => {
                    storyviewspopup.classList.add('storyviewspopup');
                    storyviewspopup.classList.remove('storyviewspopupactive');
                });
                let gridposttitlecover = document.createElement('span');
                gridposttitlecover.appendChild(gridpostcaption);
                gridposttitlecover.classList.add('gridposttitlecover');

                let storyverticalfloat = document.createElement('nav');
                let storyviews = document.createElement('div');
                let storyviewtext = document.createElement('span');
                let viewcount = document.createElement('span');
                storyviews.appendChild(viewcount);
                storyviews.appendChild(storyviewtext);
                storyviewtext.textContent = 'views';
                viewcount.id = storystatus.id;
                storyverticalfloat.appendChild(storyviews);
                viewcount.classList.add('viewcount');
                storyviews.classList.add('storyviews');
                storyverticalfloat.classList.add('storyverticalfloat');
                storyviews.addEventListener('click', () => {
                    document.querySelectorAll('.storyviewspopup').forEach(popup => {
                        if (popup.id === storystatus.id) {
                            popup.classList.toggle('storyviewspopupactive');
                        } else {
                            popup.classList.add('storyviewspopup');
                            popup.classList.remove('storyviewspopupactive');
                        }
                    });
                });
                viewcount.textContent = storystatus.views.length;

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
                        postCaption.textContent = storystatus.attribute;
                        nameAndImgWrapper.classList.add('nameAndImgWrapper');
                        gridpostNameAndImg.classList.add('gridpostNameAndImg');
                        posterName.classList.add('largeusername');
                        posterImgCont.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(storystatus.posterId, user.user_Id);
                                });
                            }
                        });
                        function Poster_Details() {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === storystatus.posterId) {
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
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(user => {
                            if (user.user_Id !== storystatus.posterId) {
                                more.remove();
                            }
                        });
                    }
                }
                Create_GridPost_Options();

                function checkIfStatusIsViewed() {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        let views = storystatus.views;
                        views.forEach(view => {
                            if (view.id === data.user_Id + storystatus.id) {
                                viewcount.classList.add('storyviewed');
                                viewcount.classList.remove('viewcount');
                            }
                        });
                    });
                }
                checkIfStatusIsViewed();

                function pushViewers() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (data.user_Id !== storystatus.posterId) {
                                function pushstatusviews() {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        let storiesArr = user.user_Stories;
                                        storiesArr.forEach(story => {
                                            if (story.id === storystatus.id) {
                                                let views = story.views;
                                                function push() {
                                                    views.push({
                                                        postId: story.id,
                                                        posterId: data.user_Id,
                                                        id: data.user_Id + story.id,
                                                        time: new Date().getTime(),
                                                        date: trackingDate
                                                    });
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                }
                                                if (viewcount.classList.contains('viewcount')) {
                                                    push();
                                                    viewcount.textContent = views.length;
                                                    viewcount.classList.add('storyviewed');
                                                    viewcount.classList.remove('viewcount');
                                                }
                                            }
                                        })
                                    });
                                }
                                pushstatusviews();
                                return true;
                            }
                        });
                    }
                }
                pushViewers();
                loader(itemsviewonlargescale, storystatus.id);
                document.body.appendChild(itemsviewonlargescale);
                itemsviewonlargescale.id = storystatus.id;
                itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                gridpostimagecontainer.style.display = 'flex';
                itemsviewclosebutton.innerHTML = closesvg;
                gridcomment.innerHTML = send2svg;
                itemsviewclosebutton.classList.add('itemsviewclosebutton');

                largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                itemsviewonlargescale.classList.add('itemsviewonlargescale');
                itemsviewonlargescale.style.display = 'flex';
                items_Center.innerHTML = '&plus;';
                items_Float.classList.add('items_Float');
                items_Center.classList.add('items_Center');
                gridcomment.classList.add('gridcomment');
                gridinputinput.setAttribute(`placeholder`, 'whats on your mind');
                gridinput.classList.add('gridinput');
                horizontalfloat.classList.add('horizontalfloat');
                gridinputinput.classList.add('gridinputinput');

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - storystatus.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time <= 60 * 60 * 24) {
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
                tilebox_Stories.classList.add('tilebox_Stories');
                gridpostimagecontainer.classList.add('gridpostimagecontainer');
                gridpostcaption.classList.add('gridpostcaption');

                gridpostcaption.textContent = storystatus.title;
                gridpostcaption.innerHTML.split(" ").forEach(texttitle => {
                    prefix.forEach(unit => {
                        if (texttitle.indexOf(unit.prefixName) != -1) {
                            if (unit.prefixName == 'https://') {
                                let newtitle = gridpostcaption.innerHTML.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                gridpostcaption.innerHTML = newtitle;
                            } else {
                                let newtitle = gridpostcaption.innerHTML.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                gridpostcaption.innerHTML = newtitle;
                            }
                        }
                    });
                });
                if (gridpostcaption.textContent.length > 200) {
                    gridpostcaption.addEventListener('click', () => {
                        gridpostcaption.classList.toggle('gridpostcaptionmoreorless');
                    });
                }

                horizontalfloat.appendChild(gridinput);
                gridinput.appendChild(gridinputinput);
                gridinput.appendChild(gridcomment);
                items_Float.appendChild(items_Center);

                function create_Options_Script() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    gridpostimagecontainer.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = deletesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo2;
                    first_Option.addEventListener('click', () => {
                        story_Deleting(locationId);
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                gridpostimagecontainer.appendChild(gridposttitlecover);
                gridpostimagecontainer.appendChild(storyverticalfloat);
                gridpostimagecontainer.appendChild(horizontalfloat);
                gridpostimagecontainer.appendChild(items_Float);
                gridpostimagecontainer.appendChild(storyviewspopup);
                gridpostimagecontainer.appendChild(tilebox_Stories);

                horizontalfloat.appendChild(gridinput);

                itemsviewclosebutton.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        popup.style.display = 'none';
                    });
                    itemsviewonlargescale.remove();
                });
                items_Float.addEventListener('click', () => {
                    storyverticalfloat.classList.toggle('storyverticalfloatactive');
                    items_Center.classList.toggle('items_Centeractive');
                    if (horizontalfloat) {
                        horizontalfloat.classList.toggle('horizontalfloatactive');
                    }
                });
                function push_reply_To_Story() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    const id = '' + new Date().getTime();
                                    if (gridinputinput.value) {
                                        myChatMsg.push({
                                            isStory_Reply: true,
                                            isStoryPhoto: true,
                                            story_reply: gridinputinput.value,
                                            Property_Src: storystatus.Property_Src,
                                            story_title_reply: storystatus.title,
                                            id: id,
                                            posterId: user.user_Id,
                                            friendId_Receivers: user.user_Id,
                                            chat_ReceiverId: storystatus.posterId,
                                            time: new Date().getTime(),
                                            date: trackingDate,
                                            attribute: 'story',
                                            chatvisibilty: 'sent'
                                        });
                                        localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                    }
                                }
                            });
                        });
                    }
                }
                gridcomment.addEventListener('click', () => {
                    if (gridinputinput.value) {
                        push_reply_To_Story();
                        createChatMessages();
                        gridinputinput.value = '';
                    }
                });
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        if (storystatus.posterId === data.user_Id) {
                            if (horizontalfloat) {
                                horizontalfloat.remove();
                            }
                        }
                    });
                }
                tilebox_Stories.id = storystatus.posterId + 'St0rY_StAtuS';
                CreateTileImages(storystatus.posterId);
            }
        });
    });
    CreateStatusViews();
}
function CreateTileImages(locationId) {
    document.querySelectorAll('.tilebox_Stories').forEach(tile_box => {
        tile_box.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            let stories = userdata.user_Stories;
            stories.forEach(storystatus => {
                if (storystatus.posterId === locationId) {
                    if (storystatus.posterId + 'St0rY_StAtuS' === tile_box.id) {
                        let tile = document.createElement('div');
                        if (storystatus.type == 'photo') {
                            let tileImg = document.createElement('img');
                            tile.appendChild(tileImg);
                            tileImg.src = storystatus.Property_Src;
                        } if (storystatus.type == 'video') {
                            let tileImg = document.createElement('video');
                            tile.appendChild(tileImg);
                            tileImg.src = storystatus.Property_Src;
                        }
                        tile_box.appendChild(tile);
                        tile.classList.add('tile');
                        tile.addEventListener('click', () => {
                            create_Main_Stories(storystatus.id, storystatus.Property_Src);
                        });
                    }
                }
            });
        });
    });
}
function CreateStatusViews() {
    let storyviewscolumn = document.querySelectorAll('.storyviewscolumn');
    storyviewscolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            let stories = userdata.user_Stories;
            stories.forEach(storystatus => {
                let views = storystatus.views;
                views.forEach(view => {
                    if (view.postId === column.id) {
                        let viewblock = document.createElement('div');
                        let viewblockhead = document.createElement('span');
                        let viewblocktail = document.createElement('div');
                        let viewprofilepicture = document.createElement('img');
                        let viewname = document.createElement('p');
                        let viewtime = document.createElement('p');
                        column.appendChild(viewblock);
                        viewblock.appendChild(viewblockhead);
                        viewblock.appendChild(viewblocktail);
                        viewblocktail.appendChild(viewname);
                        viewblocktail.appendChild(viewtime);
                        viewblockhead.appendChild(viewprofilepicture);
                        viewblockhead.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(view.posterId, user.user_Id);
                                });
                            }
                        });
                        const startTime = function () {
                            let time;
                            let timeresult = new Date().getTime();
                            let miliseconds = timeresult - view.time;
                            var token;
                            var moment = 'ago';
                            let maintime;

                            time = miliseconds / 1000;
                            if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                token = 'month';
                                maintime = time / 2419200;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24 * 7 * 4) {
                                token = 'week';
                                maintime = time / 604800;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24 * 7) {
                                token = 'day';
                                maintime = time / 86400;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60 * 24) {
                                token = 'hr';
                                maintime = time / 3600;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60 * 60) {
                                token = 'min';
                                maintime = time / 60;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            } if (time <= 60) {
                                token = 'sec';
                                maintime = time;
                                viewtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                            }
                        }
                        startTime();
                        viewblock.classList.add('viewblock');
                        viewblocktail.classList.add('viewblocktail');

                        function Poster_Details() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === view.posterId) {
                                    viewprofilepicture.src = user.user_ProfilePicture;
                                    let username;
                                    user.user_Mid_Name ? username =
                                        user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                        username = user.user_Firstname + ' ' + user.user_Surname;
                                    viewname.innerHTML = username;
                                    function filter_Image() {
                                        //profile_filter 
                                        if (user.user_ProfilePicture_Filter == 'default') {
                                            viewprofilepicture.classList.add('--color-default');
                                        } else if (user.user_ProfilePicture_Filter == 'gray') {
                                            viewprofilepicture.classList.add('--color-gray');
                                        } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                            viewprofilepicture.classList.add('--color-contrast');
                                        } else if (user.user_ProfilePicture_Filter == 'bright') {
                                            viewprofilepicture.classList.add('--color-bright');
                                        } else if (user.user_ProfilePicture_Filter == 'blur') {
                                            viewprofilepicture.classList.add('--color-blur');
                                        } else if (user.user_ProfilePicture_Filter == 'invert') {
                                            viewprofilepicture.classList.add('--color-invert');
                                        } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                            viewprofilepicture.classList.add('--color-sepia');
                                        } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                            viewprofilepicture.classList.add('--color-hue-rotate');
                                        } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                            viewprofilepicture.classList.add('--color-opacity');
                                        } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                            viewprofilepicture.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                }
                            });
                        }
                        Poster_Details();
                    }
                });
            });
        });
    });
}

setTimeout(() => {
    createStoriesPhotos();
    Send_This_Story_To_Archieve();
}, 5000);
function Send_This_Story_To_Archieve() {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            let stories = userdata.user_Stories;
            stories.find(story => {
                let timeresult = new Date().getTime();
                let miliseconds = timeresult - story.time;
                let event = miliseconds / 1000;
                if (event >= 60 * 60 * 24) {
                    function pushtrash() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === story.posterId) {
                                let trash = user.user_Archieve;
                                if (story.type == 'photo') {
                                    const id = '' + new Date().getTime();
                                    trash.push({
                                        type: 'photo',
                                        Property_Src: story.Property_Src,
                                        title: story.title,
                                        posterId: story.posterId,
                                        postId: story.id,
                                        id: id,
                                        time: new Date().getTime(),
                                        date: trackingDate
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    let storycount = document.querySelectorAll('.storycount');
                                    storycount.forEach(count => {
                                        if (count.id === story.posterId) {
                                            count.textContent = trash.length;
                                        }
                                    });
                                } else if (story.type == 'video') {
                                    const id = '' + new Date().getTime();
                                    trash.push({
                                        type: 'video',
                                        Property_Src: story.Property_Src,
                                        title: story.title,
                                        posterId: story.posterId,
                                        postId: story.id,
                                        id: id,
                                        time: new Date().getTime(),
                                        date: trackingDate
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    let storycount = document.querySelectorAll('.storycount');
                                    storycount.forEach(count => {
                                        if (count.id === story.posterId) {
                                            count.textContent = trash.length;
                                        }
                                    });
                                }
                            }
                        });
                        CreateTileImages();
                    }
                    pushtrash();
                    addtoarchieves();
                }
            });
        });
        function addtoarchieves() {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(userdata => {
                let stories = userdata.user_Stories;
                stories = stories.filter(story => {
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - story.time;
                    let event = miliseconds / 1000;
                    if (event >= 60 * 60 * 24) {
                        return false
                    } else {
                        return true;
                    }
                });
                userdata.user_Stories = stories;
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                createStoriesPhotos();
            });
        }
    }
}
const storyphotolabel = document.getElementById('storyphotolabel');
function uploadphotostory() {
    let photostoryuploadbtn = document.getElementById('photol');
    let photostoryuploadinput = document.getElementById('photostory');
    photostoryuploadbtn === photostoryuploadinput;
    let storyreader = new FileReader();
    storyreader.readAsDataURL(photostoryuploadinput.files[0]);
    storyreader.onload = function () {
        document.getElementById('storyphotopreview').src = storyreader.result;
    }
};
//UPLOADING VIDEO STORY
function uploadvideostory() {
    let videostoryuploadbtn = document.getElementById('storyvideolabel');
    let videostoryuploadinput = document.getElementById('videostory');
    videostoryuploadbtn === videostoryuploadinput;
    let vstoryreader = new FileReader();
    vstoryreader.readAsDataURL(videostoryuploadinput.files[0]);
    vstoryreader.onload = function () {
        document.getElementById('storyvideopreview').src = vstoryreader.result;
    }
};