const videofeedcolumn = document.querySelector('.videofeedcolumn');
const create_Videos = () => {
    videofeedcolumn.innerHTML = '';
    Feeds_Data_Base.forEach(photo => {
        if (photo.type == 'public') {
            if (photo.isVideo) {
                const videosContainer = document.createElement('div');
                const videoheader = document.createElement('header');
                const title = document.createElement('p');
                const mainvideo = document.createElement('a');
                const videocover = document.createElement('div');
                const video = document.createElement('video');
                const duration = document.createElement('p');
                videofeedcolumn.appendChild(videosContainer);
                videosContainer.appendChild(videoheader);
                videosContainer.appendChild(mainvideo);
                videoheader.appendChild(title);
                mainvideo.appendChild(video);
                mainvideo.appendChild(videocover);
                mainvideo.appendChild(duration);
                video.src = photo.Property_Src;
                title.textContent = photo.title;
                duration.textContent = "00:00";
                mainvideo.classList.add('mainvideo');
                videosContainer.classList.add('videosContainer');
                mainvideo.href = `view.html?video_Id=${photo.id}`;
                title.addEventListener('click',()=> {
                    title.classList.toggle('gridpostcaptionactive');
                });
                video.addEventListener('loadeddata', (e) => {
                    let videoDuration = e.target.duration;
                    let totalMin = Math.floor(videoDuration / 60);
                    let totalSec = Math.floor(videoDuration % 60);
                
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                    duration.innerHTML = `${totalMin} : ${totalSec}`;
                });
                function Create_GridPost_Options(anything) {
                    const videobottom = document.createElement('header');
                    let more = document.createElement('span');
                    videosContainer.appendChild(videobottom);
                    videobottom.classList.add('videobottom');

                    function create_Grid_PostHeader() {
                        let gridpostNameAndImg = document.createElement('div');
                        let nameAndImgWrapper = document.createElement('div');
                        let posterImgCont = document.createElement('span');
                        let nameAndCaptionWrapper = document.createElement('div');
                        let posterImg = document.createElement('img');
                        let posterName = document.createElement('p');
                        let postCaption = document.createElement('b');
                        let postdiscription = document.createElement('b');
                        videobottom.appendChild(gridpostNameAndImg);
                        videobottom.appendChild(more);
                        gridpostNameAndImg.appendChild(nameAndImgWrapper);
                        nameAndImgWrapper.appendChild(posterImgCont);
                        nameAndImgWrapper.appendChild(nameAndCaptionWrapper);
                        nameAndCaptionWrapper.appendChild(posterName);
                        nameAndCaptionWrapper.appendChild(postCaption);
                        nameAndCaptionWrapper.appendChild(postdiscription);
                        posterImgCont.appendChild(posterImg);
                        postCaption.textContent = photo.attribute;
                        postdiscription.innerHTML = `${photo.likes.length} like(s) &centerdot; ${photo.comments.length} comments(s) &centerdot; ${photo.shares.length} shares(s) &centerdot; ${photo.views.length} views(s)`;
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
                                    if (user.user_CoverPhoto) {
                                        posterImgCont.style.backgroundImage = "url(" + user.user_CoverPhoto + ")";
                                    } else {
                                        posterImgCont.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                                    }
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
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            } if (time <= 60 * 60 * 24 * 7 * 4) {
                                token = 'week';
                                maintime = time / 604800;
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            } if (time <= 60 * 60 * 24 * 7) {
                                token = 'day';
                                maintime = time / 86400;
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            } if (time <= 60 * 60 * 24) {
                                token = 'hr';
                                maintime = time / 3600;
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            } if (time <= 60 * 60) {
                                token = 'min';
                                maintime = time / 60;
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            } if (time <= 60) {
                                token = 'sec';
                                maintime = time;
                                postCaption.innerHTML = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                            }
                        }
                        startTime();
                    }
                    create_Grid_PostHeader();
                    more.classList.add('more');
                    more.innerHTML = vellip;
                    more.addEventListener('click', () => {
                        create_Post_Options_Script(mainvideo,photo.id);
                    });
                }
                Create_GridPost_Options();
            }
        }
    });
}
document.addEventListener('DOMContentLoaded',create_Videos);