// DELETED LARGESCREENPHOTO PICTURE CREATION SCRIPT 
function create_Trash_Items() {
    let userstrashcolumn = document.querySelectorAll('.userstrashcolumn');
    userstrashcolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let trashItem = user.user_Trash;
                trashItem.forEach(element => {
                    if (column.id === element.posterId) {
                        if (element.isPhoto) {
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
                            savedtime.textContent = element.date;
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
                            confirmationtrue.id = element.id
                            confirmationtrue.addEventListener('click', () => {
                                trashItem = trashItem.filter((element) => {
                                    if (element.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true
                                    }
                                });
                                confirmation_popup.style.display = 'none';
                                localStorage.setItem('trashItem', JSON.stringify(trashItem));
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
                            gridpostimagecontainer.appendChild(gridposttitlecover);
                            gridpostimagecontainer.appendChild(savedtilebox);
                            gridpostimagecontainer.style.display = 'flex';
                            savedtilebox.classList.add('savedtilebox');
                            savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
        
                            gridpostcaption.classList.add('gridpostcaption');
                            gridpostcaption.textContent = element.title;
                            gridimg.src = element.Property_Src;
                            gridpostimagetoview.src = element.Property_Src;
                            savedtilebox.id = element.posterId + 'UXer_TrUXheDTYle_bX';
                            gridimg.classList.add('gridimg');
                            savedtilebox.classList.add('savedtilebox');
                            savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
                            let itemsviewclosebutton = document.createElement('span');
                            let itemsviewonlargescale = document.createElement('section');
                            let largescalewideviewcontainer = document.createElement('div');
        
                            document.body.appendChild(itemsviewonlargescale);
                            itemsviewonlargescale.appendChild(itemsviewclosebutton);
                            itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                            largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                            itemsviewclosebutton.innerHTML = '&times;';
                            itemsviewonlargescale.id = element.id + element.posterId;
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
                        } if (element.isVideo) {
                            let griditems = document.createElement('div');
                            let savedvideo = document.createElement('video');
                            let gridpostimagecontainer = document.createElement('div');
                            let saveddelete = document.createElement('img');
                            let gridpostcaption = document.createElement('span');
                            let savedtime = document.createElement('span');
                            let saveddeletebtn = document.createElement('span');
                            let gridposttitlecover = document.createElement('span');
                            savedtime.textContent = element.date;
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
                            confirmationtrue.id = element.id
                            confirmationtrue.addEventListener('click', () => {
                                trashItem = trashItem.filter((element) => {
                                    if (element.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true
                                    }
                                });
                                confirmation_popup.style.display = 'none';
                                localStorage.setItem('trashItem', JSON.stringify(trashItem));
                                create_Trash_Items();
        
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
                            gridpostimagecontainer.style.display = 'flex';
                            savedvideo.src = element.Property_Src;
                            gridpostimagetoview.src = element.Property_Src;
                            gridpostcaption.textContent = element.title;
        
                            griditems.classList.add('griditems');
                            gridpostimagecontainer.classList.add('gridpostimagecontainer');
        
                            savedtilebox.classList.add('savedtilebox');
                            savedtilebox.classList.add('UXer_TrUXheDTYle_bX');
        
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
                            itemsviewonlargescale.id = element.id + element.posterId;
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
        
                            savedtilebox.id = element.posterId + 'UXer_TrUXheDTYle_bX';
                        }
                        function creategridpostimagecontaineringTile() {
                            document.querySelectorAll('.savedtilebox.UXer_TrUXheDTYle_bX').forEach(tilebox => {
                                tilebox.innerHTML = '';
                                if (trashItem) {
                                    trashItem.forEach(photo => {
                                        if (tilebox.id === photo.posterId + 'UXer_TrUXheDTYle_bX') {
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
                    }
                });
            }
        });
    });
}
create_Trash_Items();


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

                                    function view_SavedPost() {
                                        let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                        itemsviewonlargescale.forEach(largecontainer => {
                                            if (largecontainer.id === feed.id) {
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
                                                gridpostloader.id = feed.id;
                                                document.body.appendChild(largecontainer);
                                                largecontainer.style.display = 'flex';
                                                setTimeout(() => {
                                                    gridpostloader.remove();
                                                }, 2000);
                                            } else {
                                                largecontainer.style.display = 'none';
                                            }
                                        });
                                    }
                                    griditems.addEventListener('click', event => {
                                        view_SavedPost();
                                    });
                                    function deleting_Post_Script() {
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
                                        deletebutton.addEventListener('click', () => {
                                            confirmation_popup.style.display = 'flex';
                                        });
                                        confirmation_popup.id = photo.id;
                                        confirmationtrue.id = photo.id;
                                        confirmationtrue.addEventListener('click', () => {
                                            savedItems = savedItems.filter((photo) => {
                                                if (photo.id === confirmationtrue.id) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            });
                                            newSaved_Script();
                                            confirmation_popup.style.display = 'none';
                                            localStorage.setItem('savedItems', JSON.stringify(savedItems));
                                        });
                                    }
                                    deleting_Post_Script();
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

                                    function view_SavedPost() {
                                        let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                        itemsviewonlargescale.forEach(largecontainer => {
                                            if (largecontainer.id === feed.id) {
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
                                                gridpostloader.id = feed.id;
                                                document.body.appendChild(largecontainer);
                                                largecontainer.style.display = 'flex';
                                                setTimeout(() => {
                                                    gridpostloader.remove();
                                                }, 2000);
                                            } else {
                                                largecontainer.style.display = 'none';
                                            }
                                        });
                                    }
                                    griditems.addEventListener('click', event => {
                                        view_SavedPost();
                                    });
                                    function deleting_Post_Script() {
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
                                        deletebutton.addEventListener('click', () => {
                                            confirmation_popup.style.display = 'flex';
                                        });
                                        confirmation_popup.id = photo.id;
                                        confirmationtrue.id = photo.id;
                                        confirmationtrue.addEventListener('click', () => {
                                            savedItems = savedItems.filter((photo) => {
                                                if (photo.id === confirmationtrue.id) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            });
                                            LogInFormData.forEach(data => {
                                                if (data.user_Id === photo.savedId) {
                                                    let alreadysaved = data.user_Saved;
                                                    alreadysaved = savedItems;
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                }
                                            });
                                            newSaved_Script();
                                            confirmation_popup.style.display = 'none';
                                        });
                                    }
                                    deleting_Post_Script();
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

                                    function view_SavedPost() {
                                        let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                        itemsviewonlargescale.forEach(largecontainer => {
                                            if (largecontainer.id === feed.id) {
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
                                                gridpostloader.id = feed.id;
                                                document.body.appendChild(largecontainer);
                                                largecontainer.style.display = 'flex';
                                                setTimeout(() => {
                                                    gridpostloader.remove();
                                                }, 2000);
                                            } else {
                                                largecontainer.style.display = 'none';
                                            }
                                        });
                                    }
                                    griditems.addEventListener('click', event => {
                                        view_SavedPost();
                                    });
                                    function deleting_Post_Script() {
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
                                        deletebutton.addEventListener('click', () => {
                                            confirmation_popup.style.display = 'flex';
                                        });
                                        confirmation_popup.id = photo.id;
                                        confirmationtrue.id = photo.id;
                                        confirmationtrue.addEventListener('click', () => {
                                            savedItems = savedItems.filter((photo) => {
                                                if (photo.id === confirmationtrue.id) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            });
                                            newSaved_Script();
                                            confirmation_popup.style.display = 'none';
                                            localStorage.setItem('savedItems', JSON.stringify(savedItems));
                                        });
                                    }
                                    deleting_Post_Script();
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
                                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                            if (popup.id === photo.id) {
                                                popup.style.display = 'flex';
                                            } else {
                                                popup.style.display = 'none';
                                            }
                                        });
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
}
if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    newSaved_Script();
} else {
    Feeds_Data_Base = [];
}