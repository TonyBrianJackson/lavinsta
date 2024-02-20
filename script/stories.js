let trash = [];
const savedstoryArchieve = JSON.parse(localStorage.getItem('trash'));

let deletedstoriesArray = [];

const deletedstoriessssculomn = document.querySelector('.deletedstoriessssculomn');

function create_Story_Trash() {
    let userstorytrashcolumn = document.querySelectorAll('.userstorytrashcolumn');
    userstorytrashcolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let Trash = user.user_Story_Trash;
                Trash.forEach(trash => {
                    if (trash.isPhoto) {
                        let griditems = document.createElement('div');
                        let gridimg = document.createElement('img');
                        let gridpostimagetoview = document.createElement('img');
                        let gridpostimagecontainer = document.createElement('div');
                        let saveddelete = document.createElement('img');
                        let savedtitle = document.createElement('span');
                        let savedtilebox = document.createElement('nav');
                        let savedtime = document.createElement('span');
                        let saveddeletebtn = document.createElement('span');
                        let savedtitlecover = document.createElement('span');
                        savedtime.textContent = trash.date;
                        savedtitlecover.appendChild(savedtitle);
                        saveddeletebtn.appendChild(saveddelete);
                        saveddelete.src = 'newicons/trash-can.png';
                        savedtitlecover.classList.add('savedtitlecover');
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
                        confirmationtrue.id = trash.id
                        confirmationtrue.addEventListener('click', () => {
                            deletedstoriesArray = deletedstoriesArray.filter((trash) => {
                                if (trash.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            create_Trash_Items();
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
                        gridpostimagecontainer.appendChild(savedtitlecover);
                        gridpostimagecontainer.appendChild(savedtilebox);

                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('Yyer_TrUXheDTYle_bX');

                        savedtitle.classList.add('savedtitle');
                        savedtitle.textContent = trash.title;
                        gridimg.src = trash.Property_Src;
                        gridpostimagetoview.src = trash.Property_Src;
                        savedtilebox.id = trash.posterId + 'Yyer_TrUXheDTYle_bX';
                        gridimg.classList.add('gridimg');
                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('Yyer_TrUXheDTYle_bX');
                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');

                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                        itemsviewclosebutton.innerHTML = '&times;';
                        itemsviewonlargescale.id = trash.id + trash.posterId;
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
                    } if (trash.isVideo) {
                        let griditems = document.createElement('div');
                        let savedvideo = document.createElement('video');
                        let gridpostimagecontainer = document.createElement('div');
                        let saveddelete = document.createElement('img');
                        let savedtitle = document.createElement('span');
                        let savedtime = document.createElement('span');
                        let saveddeletebtn = document.createElement('span');
                        let savedtitlecover = document.createElement('span');
                        savedtime.textContent = trash.date;
                        savedtitlecover.appendChild(savedtitle);
                        saveddeletebtn.appendChild(saveddelete);
                        saveddelete.src = 'newicons/trash-can.png';
                        savedtitlecover.classList.add('savedtitlecover');
                        savedtime.classList.add('savedtime');
                        saveddeletebtn.classList.add('saveddeletebtn');
                        saveddeletebtn.classList.add('headerbtns');
                        //videoplayer

                        let gridpostimagetoview = document.createElement('video');
                        let savedvideoplayer = document.createElement('div');
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
                        confirmationtrue.id = trash.id
                        confirmationtrue.addEventListener('click', () => {
                            deletedstoriesArray = deletedstoriesArray.filter((trash) => {
                                if (trash.id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            create_Trash_Items();
                            creategridpostimagecontaineringTile();
                        });

                        column.appendChild(griditems);

                        griditems.appendChild(savedvideo);
                        griditems.appendChild(gridpostimagecontainer);
                        gridpostimagecontainer.appendChild(savedtime);
                        gridpostimagecontainer.appendChild(saveddeletebtn);
                        gridpostimagecontainer.appendChild(gridpostimagetoview);
                        gridpostimagecontainer.appendChild(savedvideoplayer);
                        gridpostimagecontainer.appendChild(savedtitlecover);
                        gridpostimagecontainer.appendChild(savedtilebox);

                        savedvideoplayer.appendChild(gridpostplaybtn);
                        savedvideoplayer.appendChild(gridpostpausebtn);
                        savedvideoplayer.appendChild(savedmute);
                        savedvideoplayer.appendChild(savedunmute);
                        savedvideoplayer.appendChild(bottomvideocontrols);
                        savedvideoplayer.style.display = 'flex';
                        savedvideo.src = trash.Property_Src;
                        gridpostimagetoview.src = trash.Property_Src;
                        savedtitle.textContent = trash.title;

                        griditems.classList.add('griditems');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');

                        savedtilebox.classList.add('savedtilebox');
                        savedtilebox.classList.add('Yyer_TrUXheDTYle_bX');

                        savedtitle.classList.add('savedtitle');
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
                        savedvideoplayer.classList.add('savedvideoplayer');
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
                        itemsviewonlargescale.id = trash.id + trash.posterId;
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

                        savedtilebox.id = trash.posterId + 'Yyer_TrUXheDTYle_bX';
                    }
                    function creategridpostimagecontaineringTile() {
                        document.querySelectorAll('.savedtilebox.Yyer_TrUXheDTYle_bX').forEach(tilebox => {
                            tilebox.innerHTML = '';
                            if (deletedstoriesArray) {
                                deletedstoriesArray.forEach(photo => {
                                    if (tilebox.id === photo.posterId + 'Yyer_TrUXheDTYle_bX') {
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
    });
}
function createdeletedstories() {
    if (Array.isArray(saveddeletedstories)) {
        deletedstoriesArray = saveddeletedstories;
        create_Story_Trash();
    } else {
        deletedstoriesArray = [];
    }
    //CREATING DELETED STORIES VIDEO
};
createdeletedstories();

/* STORIES UPLOAD*/
const mystory = document.querySelectorAll('.mystory');
const savedStoriesphoto = JSON.parse(localStorage.getItem('storiesphotosArray'));
let storiesphotosArray;

function createStoriesPhotos() {
    let mystorycontainers = document.querySelectorAll('.mystory');
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(userdata => {
        mystorycontainers.forEach(mystory => {
            let stories = userdata.user_Stories;
            stories.forEach(storystatus => {
                if (mystory.id === storystatus.posterId) {
                    if (storystatus.type == 'photo') {
                        let newstoryupload = document.createElement('img');
                        let storyposterimg = document.createElement('img');
                        let storynameandimg = document.createElement('div');
                        let storyname = document.createElement('b');
                        let storytitle = document.createElement('p');
                        let newstoryuploadcontainer = document.createElement('div');

                        newstoryuploadcontainer.id = storystatus.posterId;
                        mystory.appendChild(newstoryuploadcontainer);
                        newstoryuploadcontainer.appendChild(storynameandimg)
                        newstoryuploadcontainer.appendChild(newstoryupload);
                        storynameandimg.appendChild(storyposterimg);
                        storynameandimg.appendChild(storyname);
                        storynameandimg.appendChild(storytitle);

                        newstoryuploadcontainer.classList.add('newstoryuploadcontainer');
                        storytitle.classList.add('storytitle');
                        storyname.classList.add('storyname1');
                        storynameandimg.classList.add('storynameandimg');
                        storyposterimg.classList.add('storyposterimg');
                        newstoryupload.classList.add('newstoryupload');
                        storyposterimg.classList.add('storyposterimg');
                        storytitle.textContent = storystatus.title;
                        newstoryupload.src = storystatus.Property_Src;
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
                                                        document.querySelectorAll('.viewcount').forEach(count => {
                                                            if (count.id === storystatus.id) {
                                                                if (count.classList.contains('viewcount')) {
                                                                    push();
                                                                    count.textContent = views.length;
                                                                    count.classList.add('storyviewed');
                                                                    count.classList.remove('viewcount');
                                                                }
                                                            }
                                                        });
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

                        function Loader() {
                            let gridpostloader = document.createElement('section');
                            let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            gridpostloader.appendChild(mainloadersvg);
                            mainloadersvg.appendChild(mainloadercircle);
                            mainloadercircle.setAttribute('cy', '30');
                            mainloadercircle.setAttribute('cx', '30');
                            mainloadercircle.setAttribute('r', '30');
                            gridpostloader.classList.add('gridpostloader');
                            gridpostloader.id = storystatus.id;
                            document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                                if (container.id === storystatus.id) {
                                    container.style.display = 'flex';
                                    container.appendChild(gridpostloader);
                                }
                            });
                            setTimeout(() => {
                                gridpostloader.remove();
                            }, 2000);
                        }

                        newstoryuploadcontainer.addEventListener('click', () => {
                            Loader();
                            pushViewers();
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

                    } if (storystatus.type == 'video') {
                        let storycover = document.createElement('span');
                        let newstoryupload = document.createElement('video');
                        let storyposterimg = document.createElement('img');
                        let storynameandimg = document.createElement('div');
                        let storyname = document.createElement('b');

                        let storytitle = document.createElement('p');
                        let newstoryuploadcontainer = document.createElement('div');

                        newstoryuploadcontainer.id = storystatus.posterId;
                        mystory.appendChild(newstoryuploadcontainer);

                        newstoryuploadcontainer.appendChild(storycover);
                        newstoryuploadcontainer.appendChild(storynameandimg)
                        newstoryuploadcontainer.appendChild(newstoryupload);

                        storynameandimg.appendChild(storyposterimg);
                        storynameandimg.appendChild(storyname);
                        storynameandimg.appendChild(storytitle);

                        storycover.classList.add('storycover');
                        newstoryuploadcontainer.classList.add('newstoryuploadcontainer');
                        storytitle.classList.add('storytitle');
                        storyname.classList.add('storyname1');
                        storynameandimg.classList.add('storynameandimg');
                        storyposterimg.classList.add('storyposterimg');
                        newstoryupload.classList.add('newstoryupload');
                        storytitle.textContent = storystatus.title;


                        newstoryupload.src = storystatus.Property_Src;
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
                        function pushViewers() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    if (data.user_Id === storystatus.posterId) {
                                        null;
                                        return false;
                                    } else {
                                        function pushstatusviews() {
                                            storiesphotosArray = JSON.parse(localStorage.getItem('storiesphotosArray'));
                                            storiesphotosArray.forEach(story => {
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
                                                        localStorage.setItem('storiesphotosArray', JSON.stringify(storiesphotosArray));
                                                    }
                                                    document.querySelectorAll('.viewcount').forEach(count => {
                                                        if (count.id === storystatus.id) {
                                                            if (count.classList.contains('viewcount')) {
                                                                push();
                                                                count.textContent = parseInt(count.textContent) + 1;
                                                                storystatus.statusviewers = count.textContent;
                                                                localStorage.setItem('storiesphotosArray', JSON.stringify(storiesphotosArray));
                                                                count.classList.add('storyviewed');
                                                                count.classList.remove('viewcount');
                                                            }
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                        pushstatusviews();
                                        return true;
                                    }
                                });
                            }
                        }

                        function Loader() {
                            let gridpostloader = document.createElement('section');
                            let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            gridpostloader.appendChild(mainloadersvg);
                            mainloadersvg.appendChild(mainloadercircle);
                            mainloadercircle.setAttribute('cy', '30');
                            mainloadercircle.setAttribute('cx', '30');
                            mainloadercircle.setAttribute('r', '30');
                            gridpostloader.classList.add('gridpostloader');
                            gridpostloader.id = storystatus.id;
                            document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                                if (container.id === storystatus.id) {
                                    container.style.display = 'flex';
                                    container.appendChild(gridpostloader);
                                }
                            });
                            setTimeout(() => {
                                gridpostloader.remove();
                            }, 2000);
                        }

                        newstoryuploadcontainer.addEventListener('click', () => {
                            Loader();
                            pushViewers();
                        });
                    }
                }

            });
        });
    });
}
function AllOtherThingsAboutStories() {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(userdata => {
        let stories = userdata.user_Stories;
        stories.forEach(storystatus => {
            function deleteStory() {
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


                confirmationtrue.addEventListener('click', () => {
                    LogInFormData.forEach(userdata => {
                        let stories = userdata.user_Stories;
                        stories = stories.filter(story => {
                            if (story.id === confirmationtrue.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        pushtrash();
                        create_Story_Trash();
                        confirmation_popup.style.display = 'none';
                        let storycount = document.querySelectorAll('.storycount');
                        storycount.forEach(count => {
                            if (count.id === storystatus.posterId) {
                                count.style.display = 'block';
                                count.textContent = storys.length;
                            }
                        });
                        localStorage.setItem('storiesphotosArray', JSON.stringify(storiesphotosArray));
                        createStoriesPhotos();
                        CreateTileImages();
                    });
                });
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
                }
            }
            deleteStory();
        });
    });
}
function create_Main_Stories() {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(userdata => {
        let stories = userdata.user_Stories;
        stories.forEach(storystatus => {
            if (storystatus.type == 'photo') {
                let itemsviewclosebutton = document.createElement('span');
                let itemsviewonlargescale = document.createElement('section');
                let largescalewideviewcontainer = document.createElement('div');
                let nameandtimegrid = document.createElement('div');


                let storytime = document.createElement('p');
                let gridpostimagecontainer = document.createElement('div');
                let largenameandimg = document.createElement('div');
                let storyviewsmallimg = document.createElement('img');
                let largeusername = document.createElement('b');
                let gridpostcaption = document.createElement('p');
                //floats
                let items_Float = document.createElement('span');
                let items_Center = document.createElement('span');
                let horizontalfloat = document.createElement('div');
                let storyfloatinput = document.createElement('div');
                let storyfloatinputinput = document.createElement('input');
                let storysend = document.createElement('img');
                let storydelete = document.createElement('span');
                let storydeleteimg = document.createElement('img');
                let tilebox_Stories = document.createElement('nav');
                let gridpostimagetoview = document.createElement('img');

                let storyviewspopup = document.createElement('div');
                let storyviewscolumn = document.createElement('div');
                storyviewspopup.id = storystatus.id;
                storyviewscolumn.id = storystatus.id;
                storyviewspopup.appendChild(storyviewscolumn);
                storyviewscolumn.classList.add('storyviewscolumn');
                storyviewspopup.classList.add('storyviewspopup');



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


                document.body.appendChild(itemsviewonlargescale);
                itemsviewonlargescale.id = storystatus.id;
                itemsviewonlargescale.appendChild(itemsviewclosebutton);
                itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                gridpostimagecontainer.style.display = 'flex';
                itemsviewclosebutton.innerHTML = '&times;';
                itemsviewclosebutton.classList.add('itemsviewclosebutton');

                largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                itemsviewonlargescale.classList.add('itemsviewonlargescale');

                storysend.src = 'icons/send.png';
                items_Center.innerHTML = '&plus;';
                storydeleteimg.src = 'newicons/trash-can.png';
                storydelete.classList.add('storydelete');
                storydelete.classList.add('headerbtns');
                items_Float.classList.add('items_Float');
                items_Center.classList.add('items_Center');
                storysend.classList.add('storysend');
                storyfloatinputinput.setAttribute(`placeholder`, 'whats on your mind');
                storyfloatinput.classList.add('storyfloatinput');
                horizontalfloat.classList.add('horizontalfloat');
                storyfloatinputinput.classList.add('storyfloatinputinput');

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - storystatus.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24) {
                        token = 'day';
                        maintime = time / 86400;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time == 60 * 2) {
                        token = 'min';
                        maintime = time / time;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time == 60 * 60 || time <= 60 * 60 * 2) {
                        token = 'min';
                        maintime = time / 60;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time == 0) {
                        token = 'just now';
                        maintime = time;
                        storytime.innerHTML = token + ' ' + moment;
                    } else if (time == 1) {
                        token = 'just now';
                        maintime = time / time;
                        storytime.innerHTML = token + ' ' + moment;
                    } else if (time == 1 || time <= 60) {
                        token = 'sec';
                        maintime = 'just now';
                        storytime.innerHTML = maintime;
                    }
                }
                startTime();


                storytime.classList.add('storytime');
                nameandtimegrid.classList.add('nameandtimegrid');
                tilebox_Stories.classList.add('tilebox_Stories');
                gridpostimagetoview.classList.add('gridpostimagetoview');
                gridpostimagecontainer.classList.add('gridpostimagecontainer');
                largenameandimg.classList.add('largenameandimg');
                largeusername.classList.add('largeusername');
                storyviewsmallimg.classList.add('storyviewsmallimg');
                gridpostcaption.classList.add('gridpostcaption');

                gridpostcaption.textContent = storystatus.title;

                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === storystatus.posterId) {
                            storyviewsmallimg.src = user.user_ProfilePicture;
                            largeusername.textContent = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    storyviewsmallimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    storyviewsmallimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    storyviewsmallimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    storyviewsmallimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    storyviewsmallimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    storyviewsmallimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    storyviewsmallimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    storyviewsmallimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    storyviewsmallimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    storyviewsmallimg.classList.add('--color-satulate');
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
                if (gridpostcaption.textContent.length > 200) {
                    gridpostcaption.addEventListener('click', () => {
                        gridpostcaption.classList.toggle('gridpostcaptionmoreorless');
                    });
                }

                horizontalfloat.appendChild(storyfloatinput);
                storyfloatinput.appendChild(storyfloatinputinput);
                storyfloatinput.appendChild(storysend);
                items_Float.appendChild(items_Center);

                storydelete.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        if (popup.id === storystatus.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'none';
                        }
                    });
                });
                storydelete.appendChild(storydeleteimg);
                gridpostimagecontainer.appendChild(largenameandimg);
                gridpostimagecontainer.appendChild(gridpostimagetoview);
                gridpostimagecontainer.appendChild(gridposttitlecover);
                gridpostimagecontainer.appendChild(storyverticalfloat);
                gridpostimagecontainer.appendChild(horizontalfloat);
                gridpostimagecontainer.appendChild(items_Float);
                gridpostimagecontainer.appendChild(storyviewspopup);
                gridpostimagecontainer.appendChild(tilebox_Stories);

                horizontalfloat.appendChild(storyfloatinput);
                largenameandimg.appendChild(storyviewsmallimg);
                largenameandimg.appendChild(nameandtimegrid);
                nameandtimegrid.appendChild(largeusername);
                nameandtimegrid.appendChild(storytime);
                largenameandimg.appendChild(storydelete);
                gridpostimagetoview.src = storystatus.Property_Src;


                itemsviewclosebutton.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        popup.style.display = 'none';
                    });
                    itemsviewonlargescale.style.display = 'none';
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
                                    if (storyfloatinputinput.value) {
                                        myChatMsg.push({
                                            isStory_Reply: true,
                                            isStoryPhoto: true,
                                            story_reply: storyfloatinputinput.value,
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
                storysend.addEventListener('click', () => {
                    if (storyfloatinputinput.value) {
                        push_reply_To_Story();
                        createChatMessages();
                        storyfloatinputinput.value = '';
                    }
                });
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        if (storystatus.posterId !== data.user_Id) {
                            storydelete.remove();
                        } if (storystatus.posterId === data.user_Id) {
                            if (horizontalfloat) {
                                horizontalfloat.remove();
                            }
                        }
                    });
                }
                tilebox_Stories.id = storystatus.posterId + 'St0rY_StAtuS';
            } if (storystatus.type == 'video') {
                let itemsviewclosebutton = document.createElement('span');
                let itemsviewonlargescale = document.createElement('section');
                let largescalewideviewcontainer = document.createElement('div');
                let nameandtimegrid = document.createElement('div');
                let storytime = document.createElement('p');
                let gridpostimagecontainer = document.createElement('div');
                let largenameandimg = document.createElement('div');
                let storyviewsmallimg = document.createElement('img');
                let largeusername = document.createElement('b');
                let gridpostcaption = document.createElement('p');
                //floats
                let items_Float = document.createElement('span');
                let items_Center = document.createElement('span');
                let horizontalfloat = document.createElement('div');
                let storyfloatinput = document.createElement('div');
                let storyfloatinputinput = document.createElement('input');
                let storysend = document.createElement('img');
                let storydelete = document.createElement('span');
                let storydeleteimg = document.createElement('img');

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

                //gridpostimagetoview
                let gridpostimagetoview = document.createElement('video');
                let storyseemoreorless = document.createElement('span');
                let tilebox_Stories = document.createElement('nav');

                let gridposttitlecover = document.createElement('span');
                gridposttitlecover.appendChild(gridpostcaption);
                gridposttitlecover.classList.add('gridposttitlecover');

                let storyviewspopup = document.createElement('div');
                let storyviewscolumn = document.createElement('div');
                storyviewspopup.id = storystatus.id;
                storyviewscolumn.id = storystatus.id;
                storyviewspopup.appendChild(storyviewscolumn);
                storyviewscolumn.classList.add('storyviewscolumn');
                storyviewspopup.classList.add('storyviewspopup');

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

                document.body.appendChild(itemsviewonlargescale);
                itemsviewonlargescale.appendChild(itemsviewclosebutton);
                itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                gridpostimagecontainer.style.display = 'flex';
                itemsviewclosebutton.innerHTML = '&times;';
                itemsviewclosebutton.classList.add('itemsviewclosebutton');

                largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                itemsviewonlargescale.classList.add('itemsviewonlargescale');
                itemsviewonlargescale.id = storystatus.id;

                gridpostimagecontainer.appendChild(largenameandimg);
                gridpostimagecontainer.appendChild(gridpostimagetoview);
                gridpostimagecontainer.appendChild(gridposttitlecover);
                gridpostimagecontainer.appendChild(tilebox_Stories);
                gridpostimagecontainer.appendChild(storyviewspopup);
                gridpostcover.appendChild(storyverticalfloat);

                gridpostcover.appendChild(horizontalfloat);
                gridpostcover.appendChild(items_Float);
                largenameandimg.appendChild(storyviewsmallimg);
                largenameandimg.appendChild(nameandtimegrid);
                nameandtimegrid.appendChild(largeusername);
                nameandtimegrid.appendChild(storytime);
                largenameandimg.appendChild(storydelete);
                storydelete.appendChild(storydeleteimg);

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - storystatus.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24) {
                        token = 'day';
                        maintime = time / 86400;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time == 60 * 2) {
                        token = 'min';
                        maintime = time / time;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } else if (time == 60 * 60 || time <= 60 * 60 * 2) {
                        token = 'min';
                        maintime = time / 60;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    } if (time == 0 || time <= 60) {
                        token = 'sec';
                        maintime = time;
                        storytime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                    }
                }
                startTime();

                storytime.classList.add('storytime');
                nameandtimegrid.classList.add('nameandtimegrid');
                gridpostimagetoview.src = storystatus.Property_Src;
                gridpostimagetoview.classList.add('gridpostimagetoview');
                gridpostcover.style.display = 'flex';
                gridpostcaption.style.display = 'block';

                gridpostcaption.textContent = storystatus.title;
                gridpostimagetoview.id = gridpostimagetoview.id;

                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === storystatus.posterId) {
                            storyviewsmallimg.src = user.user_ProfilePicture;
                            largeusername.textContent = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    storyviewsmallimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    storyviewsmallimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    storyviewsmallimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    storyviewsmallimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    storyviewsmallimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    storyviewsmallimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    storyviewsmallimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    storyviewsmallimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    storyviewsmallimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    storyviewsmallimg.classList.add('--color-satulate');
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

                gridpostimagecontainer.appendChild(gridpostcover);
                gridposttimegrid.appendChild(gridpostcurrenttime);
                gridposttimegrid.appendChild(gridposttotaltime);
                gridpostcover.appendChild(gridpostbottomcontrols);
                gridpostcover.appendChild(storydelete);
                gridpostcover.appendChild(gridpostplaybtn);
                gridpostcover.appendChild(gridpostpausebtn);
                gridpostcover.appendChild(storymute);
                gridpostcover.appendChild(storyunmute);
                gridpostcover.appendChild(storyseemoreorless);

                gridpostbottomcontrols.appendChild(gridpostprogressarea);

                gridpostbottomcontrols.appendChild(gridposttimegrid);

                gridpostprogressarea.appendChild(gridpostprogressbar);
                gridpostplaybtn.appendChild(gridpostplayicon);
                gridpostpausebtn.appendChild(gridpostpauseicon);
                gridpostpausebtn.style.display = 'none';
                storyunmute.style.display = 'none';
                gridpostcover.style.display = 'flex';
                tilebox_Stories.classList.add('tilebox_Stories');
                items_Float.classList.add('items_Float');
                horizontalfloat.classList.add('horizontalfloat');
                gridpostimagecontainer.classList.add('gridpostimagecontainer');
                largenameandimg.classList.add('largenameandimg');
                largeusername.classList.add('largeusername');
                storyviewsmallimg.classList.add('storyviewsmallimg');
                gridpostcaption.classList.add('gridpostcaption');
                gridposttimegrid.classList.add('gridposttimegrid');
                gridpostcurrenttime.classList.add('gridpostcurrenttime');
                gridposttotaltime.classList.add('gridpostcurrenttime');
                gridpostpausebtn.classList.add('gridpostpausebtn');
                gridpostplaybtn.classList.add('gridpostpausebtn');
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
                horizontalfloat.appendChild(storyfloatinput);
                storyfloatinput.appendChild(storyfloatinputinput);
                storyfloatinput.appendChild(storysend);
                items_Float.appendChild(items_Center);
                storysend.src = 'icons/send.png';
                items_Center.innerHTML = '&plus;';
                storydeleteimg.src = 'newicons/trash-can.png';
                storydelete.classList.add('storydelete');
                storydelete.classList.add('headerbtns');
                items_Float.classList.add('items_Float');
                items_Center.classList.add('items_Center');
                storysend.classList.add('storysend');
                storyfloatinputinput.setAttribute(`placeholder`, 'whats on your mind');
                storyfloatinput.classList.add('storyfloatinput');
                storyfloatinputinput.classList.add('storyfloatinputinput');

                itemsviewclosebutton.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        popup.style.display = 'none';
                    });
                    itemsviewonlargescale.style.display = 'none';
                });
                items_Float.addEventListener('click', () => {
                    storyverticalfloat.classList.toggle('storyverticalfloatactive');
                    items_Center.classList.toggle('items_Centeractive');
                    if (horizontalfloat) {
                        horizontalfloat.classList.toggle('horizontalfloatactive');
                    }
                });
                storydelete.addEventListener('click', () => {
                    document.querySelectorAll('.confirmation_popup').forEach(popup => {
                        if (popup.id === storystatus.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'none';
                        }
                    });
                });
                function push_reply_To_Story() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    const id = '' + new Date().getTime();
                                    if (storyfloatinputinput.value) {
                                        myChatMsg.push({
                                            isStory_Reply: true,
                                            isStoryVideo: true,
                                            story_reply: storyfloatinputinput.value,
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
                storysend.addEventListener('click', () => {
                    if (storyfloatinputinput.value) {
                        push_reply_To_Story();
                        createChatMessages();
                        storyfloatinputinput.value = '';
                    }
                });

                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        if (storystatus.posterId !== data.user_Id) {
                            storydelete.remove();
                        } if (storystatus.posterId === data.user_Id) {
                            if (horizontalfloat) {
                                horizontalfloat.remove();
                            }
                        }
                    });
                }
                tilebox_Stories.id = storystatus.posterId + 'St0rY_StAtuS';
            }
        });
    });
    CreateTileImages();
    CreateStatusViews();
}
function CreateTileImages() {
    document.querySelectorAll('.tilebox_Stories').forEach(tile_box => {
        tile_box.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(userdata => {
            let stories = userdata.user_Stories;
            stories.forEach(story => {
                if (story.posterId + 'St0rY_StAtuS' === tile_box.id) {
                    if (story.type == 'video') {
                        let tile = document.createElement('div');
                        let tileImg = document.createElement('video');
                        tile_box.appendChild(tile);
                        tile.appendChild(tileImg);
                        tile.classList.add('tile');
                        tileImg.src = story.Property_Src;
                        function pushViewers() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            if (user.user_Id === story.posterId) {
                                                null;
                                                return false;
                                            } else {
                                                function pushstatusviews() {
                                                    statusview.push({
                                                        postId: story.id,
                                                        posterId: user.user_Id,
                                                        name: user.user_Firstname + ' ' + user.user_Surname,
                                                        img: user.user_ProfilePicture,
                                                        id: user.user_Id + story.id,
                                                        time: new Date().getTime(),
                                                        date: trackingDate
                                                    });
                                                    localStorage.setItem('statusview', JSON.stringify(statusview));
                                                }
                                                function removeOddViewLicenseOut() {
                                                    if (LogInFormData) {
                                                        LogInFormData.forEach(user => {
                                                            if (user.user_Id === data.user_Id) {
                                                                statusview = statusview.filter(license => {
                                                                    if (license.id === user.user_Id + story.id) {
                                                                        return false;
                                                                    } else {
                                                                        return true;
                                                                    }
                                                                });
                                                                localStorage.setItem('statusview', JSON.stringify(statusview));
                                                                pushstatusviews();
                                                                CreateStatusViews();
                                                            }
                                                        });
                                                    }
                                                }
                                                removeOddViewLicenseOut();
                                                document.querySelectorAll('.viewcount').forEach(count => {
                                                    if (count.id === story.id) {
                                                        if (count.classList.contains('viewcount')) {
                                                            count.textContent = parseInt(count.textContent) + 1;
                                                            story.statusviewers = count.textContent;
                                                            localStorage.setItem('storiesphotosArray', JSON.stringify(storiesphotosArray));
                                                            count.classList.add('storyviewed');
                                                            count.classList.remove('viewcount');
                                                        }
                                                    }
                                                });
                                                return true;
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        tile.addEventListener('click', () => {
                            function Loader() {
                                let gridpostloader = document.createElement('section');
                                let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                gridpostloader.appendChild(mainloadersvg);
                                mainloadersvg.appendChild(mainloadercircle);
                                mainloadercircle.setAttribute('cy', '30');
                                mainloadercircle.setAttribute('cx', '30');
                                mainloadercircle.setAttribute('r', '30');
                                gridpostloader.classList.add('gridpostloader');
                                gridpostloader.id = story.id;
                                document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                                    if (container.id === story.id) {
                                        container.style.display = 'flex';
                                        container.appendChild(gridpostloader);
                                    } else {
                                        container.style.display = 'none';
                                    }
                                });
                                setTimeout(() => {
                                    gridpostloader.remove();
                                }, 2000);
                            }
                            Loader();
                            pushViewers();
                        });
                    } if (story.type == 'photo') {
                        let tile = document.createElement('div');
                        let tileImg = document.createElement('img');
                        tile_box.appendChild(tile);
                        tile.appendChild(tileImg);

                        tile.classList.add('tile');
                        tileImg.src = story.Property_Src;
                        function pushViewers() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            if (user.user_Id === story.posterId) {
                                                null;
                                                return false;
                                            } else {
                                                function pushstatusviews() {
                                                    statusview.push({
                                                        postId: story.id,
                                                        posterId: user.user_Id,
                                                        name: user.user_Firstname + ' ' + user.user_Surname,
                                                        img: user.user_ProfilePicture,
                                                        id: user.user_Id + story.id,
                                                        time: new Date().getTime(),
                                                        date: trackingDate
                                                    });
                                                    localStorage.setItem('statusview', JSON.stringify(statusview));
                                                }
                                                function removeOddViewLicenseOut() {
                                                    if (LogInFormData) {
                                                        LogInFormData.forEach(user => {
                                                            if (user.user_Id === data.user_Id) {
                                                                statusview = statusview.filter(license => {
                                                                    if (license.id === user.user_Id + story.id) {
                                                                        return false;
                                                                    } else {
                                                                        return true;
                                                                    }
                                                                });
                                                                localStorage.setItem('statusview', JSON.stringify(statusview));
                                                                pushstatusviews();
                                                                CreateStatusViews();
                                                            }
                                                        });
                                                    }
                                                }
                                                removeOddViewLicenseOut();
                                                document.querySelectorAll('.viewcount').forEach(count => {
                                                    if (count.id === story.id) {
                                                        if (count.classList.contains('viewcount')) {
                                                            count.textContent = parseInt(count.textContent) + 1;
                                                            story.statusviewers = count.textContent;
                                                            localStorage.setItem('storiesphotosArray', JSON.stringify(storiesphotosArray));
                                                            count.classList.add('storyviewed');
                                                            count.classList.remove('viewcount');
                                                        }
                                                    }
                                                });
                                                return true;
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        tile.addEventListener('click', () => {
                            function Loader() {
                                let gridpostloader = document.createElement('section');
                                let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                gridpostloader.appendChild(mainloadersvg);
                                mainloadersvg.appendChild(mainloadercircle);
                                mainloadercircle.setAttribute('cy', '30');
                                mainloadercircle.setAttribute('cx', '30');
                                mainloadercircle.setAttribute('r', '30');
                                gridpostloader.classList.add('gridpostloader');
                                gridpostloader.id = story.id;
                                document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                                    if (container.id === story.id) {
                                        container.style.display = 'flex';
                                        container.appendChild(gridpostloader);
                                    } else {
                                        container.style.display = 'none';
                                    }
                                });
                                setTimeout(() => {
                                    gridpostloader.remove();
                                }, 2000);
                            }
                            Loader();
                            pushViewers();
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
                                viewname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                });
            });
        });
    });
}

setTimeout(() => {
    createStoriesPhotos();
    create_Main_Stories();
    AllOtherThingsAboutStories();
    Send_This_Story_To_Archieve();
}, 5000);
function Send_This_Story_To_Archieve() {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(userdata => {
        let stories = userdata.user_Stories;
        stories = stories.filter(story => {
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