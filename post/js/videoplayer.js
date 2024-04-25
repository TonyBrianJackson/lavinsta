const create_Video_Player = (LocationId) => {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === LocationId) {
            if (photo.isVideo || photo.isShort) {
                const videoplayer = document.createElement('section');
                const video = document.createElement('video');
                const videocover = document.createElement('div');
                const bottomcontrols = document.createElement('div');
                const leftcontrols = document.createElement('nav');
                const middlecontrols = document.createElement('nav');
                const rightcontrols = document.createElement('nav');
                const playerplay = document.createElement('button');
                const playerpause = document.createElement('button');
                const playerOptions = document.createElement('button');
                const playermore = document.createElement('button');
                const playerprogressarea = document.createElement('div');
                const progressline = document.createElement('span');
                const videoplayertime = document.createElement('div');
                const currenttime = document.createElement('span');
                const totaltime = document.createElement('span');
                const volumside = document.createElement('div');
                const volumbar = document.createElement('input');
                const exit = document.createElement('button');
                const mute = document.createElement('button');
                const unmute = document.createElement('button');
                const viewscount = document.createElement('p');
                document.body.appendChild(videoplayer);
                videoplayer.appendChild(video);
                videoplayer.appendChild(videocover);
                videoplayer.appendChild(bottomcontrols);
                bottomcontrols.appendChild(leftcontrols);
                bottomcontrols.appendChild(middlecontrols);
                bottomcontrols.appendChild(rightcontrols);
                videocover.appendChild(viewscount);

                leftcontrols.appendChild(playerprogressarea);
                leftcontrols.appendChild(videoplayertime);
                playerprogressarea.appendChild(progressline);

                videoplayertime.appendChild(currenttime);
                videoplayertime.appendChild(totaltime);

                middlecontrols.appendChild(playerplay);
                middlecontrols.appendChild(playerpause);
                middlecontrols.appendChild(playerOptions);
                middlecontrols.appendChild(playermore);

                rightcontrols.appendChild(exit);
                rightcontrols.appendChild(mute);
                rightcontrols.appendChild(unmute);

                rightcontrols.appendChild(volumside);
                volumside.appendChild(volumbar);

                volumbar.type = 'range';
                volumbar.value = 0;
                volumbar.minLength = 0;
                volumbar.maxLength = 100;

                currenttime.textContent = "00:00";
                totaltime.textContent = "00:00";

                playerplay.innerHTML = playsvg;
                playerpause.innerHTML = pausesvg;
                playerOptions.innerHTML = settingssvg;
                playermore.innerHTML = moresvg;
                exit.innerHTML = undo;
                mute.innerHTML = mutesvg;
                unmute.innerHTML = unmutesvg;

                video.src = photo.Property_Src;
                videoplayer.classList.add('viewvideoplayer');
                videocover.classList.add('videocover');
                bottomcontrols.classList.add('bottomcontrols');
                playerprogressarea.classList.add('playerprogressarea');
                progressline.classList.add('progressline');
                videoplayertime.classList.add('videoplayertime');
                volumside.classList.add('volumside');
                viewscount.classList.add('viewscount');
                viewscount.classList.add('videoviewed');
                playerplay.addEventListener('click', () => {
                    video.play();
                });
                playerpause.addEventListener('click', () => {
                    video.pause();
                });
                playerOptions.addEventListener('click',()=> {
                    create_Post_Options_Script(bottomcontrols,photo.id);
                });
                playermore.addEventListener('click',()=> {
                    create_Side_Options(bottomcontrols,photo.id);
                });
                video.addEventListener('loadeddata', (e) => {
                    let videoDuration = e.target.duration;
                    let totalMin = Math.floor(videoDuration / 60);
                    let totalSec = Math.floor(videoDuration % 60);
                
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                    totaltime.innerHTML = `${totalMin} : ${totalSec}`;
                });
                
                video.addEventListener('timeupdate', () => {
                    let currentVideoTime = event.target.currentTime;
                    let currentMin = Math.floor(currentVideoTime / 60);
                    let currentSec = Math.floor(currentVideoTime % 60);
                    //if CurrentMin is < 10 add 0 at the beginning;
                    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;
                
                    //if CurrentSec is < 10 add 0 at the beginning;
                    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                    currenttime.innerHTML = `${currentMin} : ${currentSec}`;
                
                    //progress bar
                    let videoDuration = event.target.duration;
                    let progressvalue = (currentVideoTime / videoDuration) * 100;
                    progressline.style.width = `${progressvalue}%`;
                });
                document.addEventListener('visibilitychange', () => {
                    var state = document.visibilityState;
                    if (!video.paused) {
                        if (state == 'hidden') {
                            video.pause();
                        }
                    }
                });
                playerprogressarea.addEventListener('click', () => {
                    let videoDuration = video.duration;
                    let progresslinewidth = playerprogressarea.clientWidth;
                    let clickOffSetx = event.offsetX;
                    video.currentTime = (clickOffSetx / progresslinewidth) * videoDuration;
                });
                mute.addEventListener('click', () => {
                    volumbar.value = 0;
                    video.volume = 0;
                });
                unmute.addEventListener('click', () => {
                    volumbar.value = 80;
                    video.volume = 0.8;
                });
                function volumeChanges() {
                    video.volume = volumbar.value / 100;
                }
                viewscount.id = photo.id;
                viewscount.innerHTML = `${photo.views.length} view(s)`;

                video.addEventListener('play', () => {
                    increaseviewscount(photo.id);
                });
                function checkifviews() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            let views = photo.views;
                            views.forEach(view => {
                                if (view.id === data.user_Id + photo.id) {
                                    viewscount.classList.add('Viewed');
                                    viewscount.classList.remove('viewscount');
                                }
                            });
                        });
                    }
                }
                checkifviews();
                volumbar.addEventListener('change', () => {
                    volumeChanges();
                });
                exit.addEventListener('click',()=> {
                    history.back();
                });
            }
        }
    });
}