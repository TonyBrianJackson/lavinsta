// DELETED LARGESCREENPHOTO PICTURE CREATION SCRIPT 
function create_Trash_Items() {
    clearItemsInTrash();
    function createArchieves() {
        let userstrashcolumn = document.createElement('div');
        document.querySelector('.deletedpostsssculomn').appendChild(userstrashcolumn);
        userstrashcolumn.classList.add('userstrashcolumn');
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            userstrashcolumn.id = data.user_Id;
        });
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        userstrashcolumn.innerHTML = '';
        LogInFormData.forEach(user => {
            if (user.user_Id === userstrashcolumn.id) {
                let trashItem = user.user_Trash;
                trashItem.forEach(photo => {
                    if (userstrashcolumn.id === photo.posterId) {
                        let griditems = document.createElement('div');
                        userstrashcolumn.appendChild(griditems);
                        griditems.classList.add('griditems');
                        if (photo.type == 'photo') {
                            let gridimg = document.createElement('img');
                            griditems.appendChild(gridimg);
                            gridimg.src = photo.Property_Src;
                            gridimg.classList.add('gridimg');
                        } if (photo.type == 'video') {
                            let gridimg = document.createElement('video');
                            griditems.appendChild(gridimg);
                            gridimg.src = photo.Property_Src;
                            gridimg.classList.add('gridimg');
                        } if (photo.type == 'text') {
                            let gridpostmain = document.createElement('div');
                            let gridimg = document.createElement('p');
                            griditems.appendChild(gridpostmain);
                            gridpostmain.appendChild(gridimg);
                            gridimg.textContent = photo.Property_Src;
                            gridpostmain.classList.add('gridpostmain');
                            gridimg.classList.add('gridposttext');
                            function textGridPostTextTheme() {
                                function textThemeBackGround() {
                                    if (photo.themeMode == 'default') {
                                        gridpostmain.classList.add('themedefault');
                                    } else if (photo.themeMode == 'claimer') {
                                        gridpostmain.classList.add('themeclaimer');
                                    } else if (photo.themeMode == 'wriser') {
                                        gridpostmain.classList.add('themewriser');
                                    } else if (photo.themeMode == 'xriphor') {
                                        gridpostmain.classList.add('themexriphor');
                                    } else if (photo.themeMode == 'nophia') {
                                        gridpostmain.classList.add('themenophia');
                                    } else if (photo.themeMode == 'oracle') {
                                        gridpostmain.classList.add('themeoracle');
                                    } else if (photo.themeMode == 'folah') {
                                        gridpostmain.classList.add('themefolah');
                                    } else if (photo.themeMode == 'grino') {
                                        gridpostmain.classList.add('themegrino');
                                    } else if (photo.themeMode == 'rhisxos') {
                                        gridpostmain.classList.add('themerhisxos');
                                    } else if (photo.themeMode == 'nicklezol') {
                                        gridpostmain.classList.add('themenicklezol');
                                    } else if (photo.themeMode == 'mirox') {
                                        gridpostmain.classList.add('thememirox');
                                    } else if (photo.themeMode == 'xosiphor') {
                                        gridpostmain.classList.add('themexosiphor');
                                    } else if (photo.themeMode == 'rhicode') {
                                        gridpostmain.classList.add('themerhicode');
                                    } else if (photo.themeMode == 'srccod') {
                                        gridpostmain.classList.add('themesrccode');
                                    } else if (photo.themeMode == 'xporiah') {
                                        gridpostmain.classList.add('themexporiah');
                                    } else if (photo.themeMode == 'niph') {
                                        gridpostmain.classList.add('themeniph');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (photo.fontMode == 'Default') {
                                        gridimg.classList.add('TextDefault');
                                    } else if (photo.fontMode == 'Times') {
                                        gridimg.classList.add('TextTimes');
                                    } else if (photo.fontMode == 'Asul') {
                                        gridimg.classList.add('TextAsul');
                                    } else if (photo.fontMode == 'Satisfy') {
                                        gridimg.classList.add('TextSatisfy');
                                    } else if (photo.fontMode == 'Great Vibes') {
                                        gridimg.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTextTheme();
                        }
                        griditems.addEventListener('click', () => {
                            create_Main_Trash_Items(photo.id);
                        });
                        createTilePost(photo.posterId);
                    }
                });
            }
        });
    }
    createArchieves();
}
function clearItemsInTrash() {
    document.querySelectorAll('.userstrashcolumn').forEach(column => {
        column.remove();
    });
}
function clearItemsInSaved() {
    document.querySelectorAll('.savedculomn').forEach(column => {
        column.remove();
    });
}
function clearItemsInStoryTrash() {
    document.querySelectorAll('.userstorytrashcolumn').forEach(column => {
        column.remove();
    });
}
document.querySelector('.savedbackarrow').addEventListener('click', () => {
    clearItemsInSaved();
});
document.querySelector('.Arrpost').addEventListener('click', () => {
    clearItemsInTrash();
});
document.querySelector('#deletepst').addEventListener('click', () => {
    create_Trash_Items();
});

document.querySelector('#saved').addEventListener('click', () => {
    newSaved_Script();
})
async function create_Main_Trash_Items(locationId) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        let Trash = user.user_Trash;
        Trash.forEach(photo => {
            if (locationId === photo.id) {
                if (photo.id === locationId) {
                    let savedtilebox = document.createElement('nav');
                    let itemsviewclosebutton = document.createElement('span');
                    let itemsviewonlargescale = document.createElement('section');
                    let largescalewideviewcontainer = document.createElement('div');
                    let gridpostcaption = document.createElement('p');
                    //viewing gridpost
                    let gridpostimagecontainer = document.createElement('div');
                    let gridposttitlecover = document.createElement('span');
                    function delete_trash() {
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
                            confirmation_popup.remove();
                            createTilePost(photo.posterId);
                        });
                        itemsviewclosebutton.addEventListener('click', () => {
                            confirmation_popup.remove();
                        });
                    }
                    itemsviewonlargescale.style.display = 'flex';
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
                            delete_trash();
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
                    savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
                    savedtilebox.id = photo.posterId + 'UXer_TrUXheDTYle_bX';

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
                        if (photo.type == 'photo') {
                            let tile = document.createElement('a');
                            let tileImg = document.createElement('img');
                            tilecontainer.appendChild(tile);
                            tile.appendChild(tileImg);
                            tile.href = `#Post_Id=${gridphoto.id}/postType=${gridphoto.type}`;
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
                                create_Main_Trash_Items(photo.id);
                            });
                        } if (photo.type == 'video') {
                            let savedtileImg = document.createElement('video');
                            savedtile.appendChild(savedtileImg);
                            savedtileImg.src = photo.Property_Src;
                            tile.addEventListener('click', () => {
                                create_Main_Trash_Items(photo.id);
                            });
                        } if (photo.type == 'text') {
                            let tile = document.createElement('a');
                            let gridpostmain = document.createElement('div');
                            let tileText = document.createElement('p');
                            tilebox.appendChild(tile);
                            tile.appendChild(gridpostmain);
                            gridpostmain.appendChild(tileText);
                            tile.classList.add('radialtext');
                            gridpostmain.classList.add('gridpostmain');
                            tileText.classList.add('tileText');
                            tile.classList.add('tile');
                            tileText.textContent = photo.Property_Src;
                            function textGridPostTileTextTheme() {
                                function textThemeBackGround() {
                                    if (photo.themeMode == 'default') {
                                        gridpostmain.classList.add('themedefault');
                                    } else if (photo.themeMode == 'claimer') {
                                        gridpostmain.classList.add('themeclaimer');
                                    } else if (photo.themeMode == 'wriser') {
                                        gridpostmain.classList.add('themewriser');
                                    } else if (photo.themeMode == 'xriphor') {
                                        gridpostmain.classList.add('themexriphor');
                                    } else if (photo.themeMode == 'nophia') {
                                        gridpostmain.classList.add('themenophia');
                                    } else if (photo.themeMode == 'oracle') {
                                        gridpostmain.classList.add('themeoracle');
                                    } else if (photo.themeMode == 'folah') {
                                        gridpostmain.classList.add('themefolah');
                                    } else if (photo.themeMode == 'grino') {
                                        gridpostmain.classList.add('themegrino');
                                    } else if (photo.themeMode == 'rhisxos') {
                                        gridpostmain.classList.add('themerhisxos');
                                    } else if (photo.themeMode == 'nicklezol') {
                                        gridpostmain.classList.add('themenicklezol');
                                    } else if (photo.themeMode == 'mirox') {
                                        gridpostmain.classList.add('thememirox');
                                    } else if (photo.themeMode == 'xosiphor') {
                                        gridpostmain.classList.add('themexosiphor');
                                    } else if (photo.themeMode == 'rhicode') {
                                        gridpostmain.classList.add('themerhicode');
                                    } else if (photo.themeMode == 'srccod') {
                                        gridpostmain.classList.add('themesrccode');
                                    } else if (photo.themeMode == 'xporiah') {
                                        gridpostmain.classList.add('themexporiah');
                                    } else if (photo.themeMode == 'niph') {
                                        gridpostmain.classList.add('themeniph');
                                    }
                                }
                                textThemeBackGround();
                                function textThemeFont() {
                                    if (photo.fontMode == 'Default') {
                                        tileText.classList.add('TextDefault');
                                    } else if (photo.fontMode == 'Times') {
                                        tileText.classList.add('TextTimes');
                                    } else if (photo.fontMode == 'Asul') {
                                        tileText.classList.add('TextAsul');
                                    } else if (photo.fontMode == 'Satisfy') {
                                        tileText.classList.add('TextSatisfy');
                                    } else if (photo.fontMode == 'Great Vibes') {
                                        tileText.classList.add('TextGreatVibes');
                                    }
                                }
                                textThemeFont();
                            }
                            textGridPostTileTextTheme();
                            tile.addEventListener('click', () => {
                                create_Main_Trash_Items(photo.id);
                            });
                        }
                    }
                }
            });
        });
    })
}
function newSaved_Script() {
    clearItemsInSaved();
    let savedculomn = document.createElement('div');
    document.querySelector('.savedpage').appendChild(savedculomn);
    savedculomn.classList.add('savedculomn');
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(data => {
        savedculomn.id = data.user_Id;
    });
    function create_Saved() {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        Feeds_Data_Base.forEach(feed => {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === savedculomn.id) {
                    let savedItems = user.user_Saved;
                    savedItems.forEach(photo => {
                        if (savedculomn.id === photo.savedId) {
                            if (feed.id === photo.postId) {
                                if (feed.isProfile_Photo || feed.isCover_Photo || feed.isPhoto || feed.isAdvert || feed.isCrime) {
                                    let griditems = document.createElement('div');
                                    let gridimg = document.createElement('img');
                                    let deletebutton = document.createElement('div');
                                    let deleteimg = document.createElement('img');
                                    deletebutton.appendChild(deleteimg);
                                    deleteimg.src = 'newicons/trash-can.png';
                                    savedculomn.appendChild(griditems);
                                    griditems.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.src = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Saved_Post_Script(savedItems, LogInFormData, photo.savedId, photo.id);
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
                                    savedculomn.appendChild(griditems);
                                    griditems.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.src = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Saved_Post_Script(savedItems, LogInFormData, photo.savedId, photo.id);
                                    });
                                    griditems.addEventListener('click', event => {
                                        createMain_GridPost(feed.id, feed.Property_Src);
                                    });
                                } if (feed.isText) {
                                    let griditems = document.createElement('div');
                                    let gridpostmain = document.createElement('div');
                                    let gridimg = document.createElement('p');
                                    let deletebutton = document.createElement('div');
                                    deletebutton.innerHTML = deletesvg;
                                    savedculomn.appendChild(griditems);
                                    griditems.appendChild(gridpostmain);
                                    gridpostmain.appendChild(gridimg);
                                    griditems.appendChild(deletebutton);
                                    gridpostmain.classList.add('gridpostmain');
                                    gridimg.classList.add('gridposttext');
                                    griditems.classList.add('griditems');
                                    deletebutton.classList.add('deletebutton');
                                    gridimg.textContent = feed.Property_Src;
                                    deletebutton.addEventListener('click', () => {
                                        deleting_Saved_Post_Script(savedItems, LogInFormData, photo.savedId, photo.id);
                                    });
                                    griditems.addEventListener('click', event => {
                                        createMain_GridPost(feed.id, feed.Property_Src);
                                    });
                                    function textGridPostTextTheme() {
                                        function textThemeBackGround() {
                                            if (feed.themeMode == 'default') {
                                                gridpostmain.classList.add('themedefault');
                                            } else if (feed.themeMode == 'claimer') {
                                                gridpostmain.classList.add('themeclaimer');
                                            } else if (feed.themeMode == 'wriser') {
                                                gridpostmain.classList.add('themewriser');
                                            } else if (feed.themeMode == 'xriphor') {
                                                gridpostmain.classList.add('themexriphor');
                                            } else if (feed.themeMode == 'nophia') {
                                                gridpostmain.classList.add('themenophia');
                                            } else if (feed.themeMode == 'oracle') {
                                                gridpostmain.classList.add('themeoracle');
                                            } else if (feed.themeMode == 'folah') {
                                                gridpostmain.classList.add('themefolah');
                                            } else if (feed.themeMode == 'grino') {
                                                gridpostmain.classList.add('themegrino');
                                            } else if (feed.themeMode == 'rhisxos') {
                                                gridpostmain.classList.add('themerhisxos');
                                            } else if (feed.themeMode == 'nicklezol') {
                                                gridpostmain.classList.add('themenicklezol');
                                            } else if (feed.themeMode == 'mirox') {
                                                gridpostmain.classList.add('thememirox');
                                            } else if (feed.themeMode == 'xosiphor') {
                                                gridpostmain.classList.add('themexosiphor');
                                            } else if (feed.themeMode == 'rhicode') {
                                                gridpostmain.classList.add('themerhicode');
                                            } else if (feed.themeMode == 'srccod') {
                                                gridpostmain.classList.add('themesrccode');
                                            } else if (feed.themeMode == 'xporiah') {
                                                gridpostmain.classList.add('themexporiah');
                                            } else if (feed.themeMode == 'niph') {
                                                gridpostmain.classList.add('themeniph');
                                            }
                                        }
                                        textThemeBackGround();
                                        function textThemeFont() {
                                            if (feed.fontMode == 'Default') {
                                                gridimg.classList.add('TextDefault');
                                            } else if (feed.fontMode == 'Times') {
                                                gridimg.classList.add('TextTimes');
                                            } else if (feed.fontMode == 'Asul') {
                                                gridimg.classList.add('TextAsul');
                                            } else if (feed.fontMode == 'Satisfy') {
                                                gridimg.classList.add('TextSatisfy');
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
    }
    create_Saved();
}
function deleting_Saved_Post_Script(savedItems, LogInFormData, locationId, id) {
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
        confirmation_popup.remove();
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
function createSavedVideos() {
    const SavedVideos_Column = document.querySelectorAll('.SavedVideos_Column');
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
                                        deleting_Saved_Post_Script(savedItems, LogInFormData, photo.savedId, photo.id);
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
                                                let username;
                                                user.user_Mid_Name ? username =
                                                    user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                                savedvideogridname.innerHTML = username;
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
}