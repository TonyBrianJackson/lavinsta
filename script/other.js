// DELETED LARGESCREENPHOTO PICTURE CREATION SCRIPT 
function create_Trash_Items() {
    let userstrashcolumn = document.querySelectorAll('.userstrashcolumn');
    userstrashcolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let trashItem = user.user_Trash;
                trashItem.forEach(photo => {
                    if (column.id === photo.posterId) {
                        let griditems = document.createElement('div');
                        column.appendChild(griditems);
                        griditems.classList.add('griditems');
                        if (photo.type == 'photo') {
                            let gridimg = document.createElement('img');
                            griditems.appendChild(gridimg);
                            gridimg.src = photo.Property_Src;
                            gridimg.classList.add('gridimg');
                        } if (photo.type == 'video') {
                            let gridimg = document.createElement('img');
                            griditems.appendChild(gridimg);
                            gridimg.src = photo.Property_Src;
                            gridimg.classList.add('gridimg');
                        }
                        griditems.addEventListener('click', () => {
                            create_Main_Trash_Items(photo.id);
                        });
                        createTilePost(photo.posterId);
                    }
                });
            }
        });
    });
}
create_Trash_Items();
async function create_Main_Trash_Items(locationId) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        let Trash = user.user_Trash;
        Trash.forEach(photo => {
            if (locationId === photo.id) {
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
                        confirmationfalse.addEventListener('click', () => {
                            confirmation_popup.style.display = 'none';
                        });
                        saveddeletebtn.addEventListener('click', () => {
                            confirmation_popup.style.display = 'flex';
                        });
                        confirmationtrue.id = photo.id
                        confirmationtrue.addEventListener('click', () => {
                            LogInFormData.forEach(data => {
                                let usertrash = data.user_Trash;
                                usertrash = usertrash.filter(story => {
                                    if (story.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                data.user_Trash = usertrash;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            });
                            create_Trash_Items();
                            confirmation_popup.style.display = 'none';
                            createTilePost(photo.posterId);
                        });
                        itemsviewclosebutton.addEventListener('click', () => {
                            confirmation_popup.remove();
                        });
                    }
                    delete_DELETED_story();
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
                    gridpostcaption.textContent = photo.title;
                    saveddeletebtn.appendChild(saveddelete);
                    saveddelete.src = 'newicons/trash-can.png';
                    savedtime.classList.add('savedtime');
                    saveddeletebtn.classList.add('saveddeletebtn');
                    saveddeletebtn.classList.add('headerbtns');

                    savedtilebox.classList.add('savedtilebox');
                    savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
                    savedtilebox.id = photo.posterId + 'UXer_TrUXheDTYle_bX';

                    gridposttime.classList.add('gridposttime');

                    gridposttitlecover.appendChild(gridpostcaption);
                    gridposttitlecover.classList.add('gridposttitlecover');
                    gridpostcaption.classList.add('gridpostcaption');
                    gridpostimagecontainer.appendChild(gridposttitlecover);
                    gridpostimagecontainer.appendChild(savedtime);
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
                    createTilePost(photo.posterId);
                }
            }
        });
    });
}
function createTilePost(locationId) {
    document.querySelectorAll('.savedtilebox.UXer_TrUXheDTYle_bX').forEach(tilebox => {
        tilebox.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            let Trash = user.user_Trash;
            Trash.forEach(photo => {
                if (tilebox.id === photo.posterId + 'UXer_TrUXheDTYle_bX') {
                    if (photo.posterId === locationId) {
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
                            create_Main_Trash_Items(photo.id);
                        });
                    }
                }
            });
        });
    })
}
function newSaved_Script() {
    let savedculomn = document.querySelectorAll('.savedculomn');
    const SavedVideos_Column = document.querySelectorAll('.SavedVideos_Column');
    savedculomn.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(feed => {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === column.id) {
                    let savedItems = user.user_Saved;
                    savedItems.forEach(photo => {
                        if (column.id === photo.savedId) {
                            if (feed.id === photo.postId) {
                                if (feed.isProfile_Photo || feed.isCover_Photo || feed.isPhoto || feed.isAdvert || feed.isCrime) {
                                    let griditems = document.createElement('div');
                                    let gridimg = document.createElement('img');
                                    let deletebutton = document.createElement('div');
                                    let deleteimg = document.createElement('img');
                                    deletebutton.appendChild(deleteimg);
                                    deleteimg.src = 'newicons/trash-can.png';
                                    column.appendChild(griditems);
                                    griditems.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.src = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Post_Script(savedItems,LogInFormData,photo.savedId,photo.id);
                                    });
                                    griditems.addEventListener('click', event => {
                                        createMain_GridPost(feed.id, feed.Property_Src);
                                    });
                                    function filter_Image() {
                                        if (feed.filter == 'default') {
                                            gridimg.classList.add('--color-default');
                                        } else if (feed.filter == 'gray') {
                                            gridimg.classList.add('--color-gray');
                                        } else if (feed.filter == 'contrast') {
                                            gridimg.classList.add('--color-contrast');
                                        } else if (feed.filter == 'bright') {
                                            gridimg.classList.add('--color-bright');
                                        } else if (feed.filter == 'blur') {
                                            gridimg.classList.add('--color-blur');
                                        } else if (feed.filter == 'invert') {
                                            gridimg.classList.add('--color-invert');
                                        } else if (feed.filter == 'sepia') {
                                            gridimg.classList.add('--color-sepia');
                                        } else if (feed.filter == 'hue-rotate') {
                                            gridimg.classList.add('--color-hue-rotate');
                                        } else if (feed.filter == 'opacity') {
                                            gridimg.classList.add('--color-opacity');
                                        } else if (feed.filter == 'satulate') {
                                            gridimg.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                } if (feed.isVideo || feed.isShort) {
                                    let griditems = document.createElement('div');
                                    let gridimg = document.createElement('video');
                                    let deletebutton = document.createElement('div');
                                    let deleteimg = document.createElement('img');
                                    deletebutton.appendChild(deleteimg);
                                    deleteimg.src = 'newicons/trash-can.png';
                                    column.appendChild(griditems);
                                    griditems.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.src = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Post_Script(savedItems,LogInFormData,photo.savedId,photo.id);
                                    });
                                    griditems.addEventListener('click', event => {
                                        createMain_GridPost(feed.id, feed.Property_Src);
                                    });
                                } if (feed.isText) {
                                    let griditems = document.createElement('div');
                                    let gridimg = document.createElement('p');
                                    let deletebutton = document.createElement('div');
                                    let deleteimg = document.createElement('img');
                                    deletebutton.appendChild(deleteimg);
                                    deleteimg.src = 'newicons/trash-can.png';
                                    column.appendChild(griditems);
                                    griditems.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.textContent = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Post_Script(savedItems,LogInFormData,photo.savedId,photo.id);
                                    });
                                    griditems.addEventListener('click', event => {
                                        createMain_GridPost(feed.id, feed.Property_Src);
                                    });
                                    function textGridPostTextTheme() {
                                        function textThemeBackGround() {
                                            if (feed.themeMode == 'default') {
                                                griditems.classList.add('themedefault');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'claimer') {
                                                griditems.classList.add('themeclaimer');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'wriser') {
                                                griditems.classList.add('themewriser');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'xriphor') {
                                                griditems.classList.add('themexriphor');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'nophia') {
                                                griditems.classList.add('themenophia');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'oracle') {
                                                griditems.classList.add('themeoracle');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'folah') {
                                                griditems.classList.add('themefolah');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'grino') {
                                                griditems.classList.add('themegrino');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'rhisxos') {
                                                griditems.classList.add('themerhisxos');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'nicklezol') {
                                                griditems.classList.add('themenicklezol');
                                                griditems.classList.add('gridpost_Radius');
                                                gridimg.classList.add('themenicklezolgridposttext');
                                            } else if (feed.themeMode == 'mirox') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('thememirox');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'xosiphor') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('themexosiphor');
                                                gridimg.classList.add('gridposttextdark');
                                            } else if (feed.themeMode == 'rhicode') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('themerhicode');
                                                gridimg.classList.add('gridposttextToviewWhite');
                                            } else if (feed.themeMode == 'srccod') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('themesrccode');
                                                gridimg.classList.add('text_Theme_Color_Is_White');
                                            } else if (feed.themeMode == 'xporiah') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('themexporiah');
                                                gridimg.classList.add('text_Theme_Color_Is_White');
                                            } else if (feed.themeMode == 'niph') {
                                                griditems.classList.add('gridpost_Radius');
                                                griditems.classList.add('themeniph');
                                                gridimg.classList.add('text_Theme_Color_Is_White');
                                            }
                                        }
                                        textThemeBackGround();
                                        function textThemeFont() {
                                            if (feed.fontMode == 'Default') {
                                                gridimg.classList.add('TextDefault');
                                            } else if (feed.fontMode == 'Times') {
                                                gridimg.classList.add('TextTimes');
                                            } else if (feed.fontMode == 'Arial') {
                                                gridimg.classList.add('TextArial');
                                            } else if (feed.fontMode == 'Cursive') {
                                                gridimg.classList.add('TextCursive');
                                            } else if (feed.fontMode == 'Great Vibes') {
                                                gridimg.classList.add('TextGreatVibes');
                                            }
                                        }
                                        textThemeFont();
                                    }
                                    textGridPostTextTheme();
                                }
                            }
                        }
                    });
                }
            });
        });
    });
    SavedVideos_Column.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(feed => {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === column.id) {
                    let savedItems = user.user_Saved;
                    savedItems.forEach(photo => {
                        if (column.id === photo.savedId) {
                            if (feed.id === photo.postId) {
                                if (feed.isVideo || feed.isShort) {
                                    let gridvideosaved = document.createElement('video')
                                    let videogrid = document.createElement('div');
                                    let topvideogrid = document.createElement('div');
                                    let bottomvideogrid = document.createElement('div');
                                    let topvideogridcontainer = document.createElement('div');
                                    let topvidrightsection = document.createElement('div');
                                    let title = document.createElement('div');
                                    let savedvideogridname = document.createElement('b');
                                    let reelgridusersphoto = document.createElement('div');
                                    let reelgridposterimg = document.createElement('img');
                                    let gridvideosavedtime = document.createElement('span');
                                    let gridvideodate = document.createElement('span');
                                    let gridsavedvideomore = document.createElement('span');
                                    let gridvideomenu = document.createElement('div');
                                    let gridmenugrid = document.createElement('div');
                                    let gridvideoremove = document.createElement('span');
                                    let gridmenudeleteimg = document.createElement('img');

                                    reelgridusersphoto.appendChild(reelgridposterimg);
                                    reelgridusersphoto.classList.add('reelgridusersphoto');

                                    gridvideoremove.addEventListener('click', () => {
                                        deleting_Post_Script(savedItems,LogInFormData,photo.savedId,photo.id);
                                        gridvideomenu.classList.toggle('gridmenuactive');
                                    });
                                    gridvideoremove.appendChild(gridmenudeleteimg);
                                    gridmenudeleteimg.src = 'newicons/trash-can.png';

                                    gridvideoremove.classList.add('gridmenulike');

                                    gridvideomenu.appendChild(gridmenugrid);
                                    gridmenugrid.appendChild(gridvideoremove);
                                    gridmenugrid.classList.add('gridmenugrid');
                                    gridsavedvideomore.innerHTML = '&vellip;';
                                    videogrid.appendChild(gridsavedvideomore);
                                    videogrid.appendChild(gridvideomenu);
                                    gridsavedvideomore.classList.add('gridvideomore');
                                    gridvideomenu.classList.add('gridmenu');


                                    column.appendChild(videogrid);
                                    videogrid.appendChild(topvideogrid);
                                    videogrid.appendChild(bottomvideogrid);
                                    topvideogrid.appendChild(topvideogridcontainer);
                                    topvideogridcontainer.appendChild(gridvideosaved);
                                    topvideogridcontainer.appendChild(gridvideosavedtime);
                                    topvideogrid.appendChild(topvidrightsection);
                                    bottomvideogrid.appendChild(title);
                                    topvidrightsection.appendChild(reelgridusersphoto);
                                    topvidrightsection.appendChild(savedvideogridname);
                                    topvidrightsection.appendChild(gridvideodate);
                                    gridvideodate.textContent = feed.date;
                                    gridvideosaved.src = feed.Property_Src;
                                    function Poster_Details() {
                                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                        LogInFormData.forEach(user => {
                                            if (user.user_Id === feed.posterId) {
                                                reelgridposterimg.src = user.user_ProfilePicture;
                                                savedvideogridname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                                function filter_Image() {
                                                    //profile_filter 
                                                    if (user.user_ProfilePicture_Filter == 'default') {
                                                        reelgridposterimg.classList.add('--color-default');
                                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                                        reelgridposterimg.classList.add('--color-gray');
                                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                                        reelgridposterimg.classList.add('--color-contrast');
                                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                                        reelgridposterimg.classList.add('--color-bright');
                                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                                        reelgridposterimg.classList.add('--color-blur');
                                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                                        reelgridposterimg.classList.add('--color-invert');
                                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                                        reelgridposterimg.classList.add('--color-sepia');
                                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                                        reelgridposterimg.classList.add('--color-hue-rotate');
                                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                                        reelgridposterimg.classList.add('--color-opacity');
                                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                                        reelgridposterimg.classList.add('--color-satulate');
                                                    }
                                                }
                                                filter_Image();
                                            }
                                        });
                                    }
                                    Poster_Details();
                                    title.addEventListener('click', () => {
                                        if (title.textContent.length > 80) {
                                            title.classList.toggle('reeltitleeeactive');
                                        };
                                    });
                                    gridvideodate.classList.add('gridvideodate');
                                    videogrid.classList.add('newvideoposted');
                                    topvideogridcontainer.classList.add('videoi');
                                    topvidrightsection.classList.add('videoinfo');
                                    bottomvideogrid.classList.add('newvidc1');
                                    topvideogrid.classList.add('newvidc');
                                    title.classList.add('savedvideotitle');
                                    gridvideosavedtime.classList.add('gridvideotime');
                                    reelgridposterimg.classList.add('usersphoto');
                                    gridvideosaved.classList.add('videotowatch');
                                    title.textContent = feed.title;
                                    savedvideogridname.classList.add('videogridname');
                                    gridvideosaved.addEventListener('loadeddata', () => {
                                        let videoDuration = event.target.duration;
                                        let currentMin = Math.floor(videoDuration / 60);
                                        currentMin < 10 ? currentMin = '0' + currentMin : currentMin;
                                        let currentSec = Math.floor(videoDuration % 60);
                                        currentSec < 10 ? currentSec = '0' + currentSec : currentSec;
                                        gridvideosavedtime.innerHTML = `${currentMin} : ${currentSec}`
                                    });
                                    topvideogridcontainer.addEventListener('click', () => {
                                        Videoplayer.src = gridvideosaved.src;
                                        Videoplayer === gridvideosaved;
                                        playerpausebtn.style.display = 'flex';
                                        playerplaybtn.style.display = 'none';
                                        titlearea.textContent = title.textContent;
                                        Videoplayer.play();
                                    });

                                    gridsavedvideomore.addEventListener('click', () => {
                                        gridvideomenu.classList.toggle('gridmenuactive');
                                    });
                                }
                            }
                        }
                    });
                }
            });
        });
    });
    function deleting_Post_Script(savedItems,LogInFormData,locationId,id) {
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
        confirmation_popup.style.display = 'flex';

        confirmation_popup.id = id;
        confirmationtrue.id = id;
        confirmationtrue.addEventListener('click', () => {
            LogInFormData = LogInFormData.filter(data => {
                if (data.user_Id === locationId) {
                    savedItems = savedItems.filter((photo) => {
                        if (photo.id === confirmationtrue.id) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    data.user_Saved = savedItems;
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                    newSaved_Script();
                    confirmation_popup.remove();
                }
            });
        });
    }
}
if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    newSaved_Script();
} else {
    Feeds_Data_Base = [];
}