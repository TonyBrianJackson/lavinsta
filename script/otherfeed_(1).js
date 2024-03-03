function createPhotosGadget() {
    let advertStatusbar = document.querySelectorAll('.advertStatusbar');
    advertStatusbar.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type == 'other') {
                if (photo.isPhoto) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontainer = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');

                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');

                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });
                    livelikecount.classList.add('livelikecount');
                    livecommentcount.classList.add('livecommentcount');
                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontainer);
                    worldwidegadgetcontainer.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;

                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontainer.classList.add('worldwidegadgetcontainer');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');
                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                } if (photo.isAdvert) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontainer = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');
                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');


                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });

                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontainer);
                    worldwidegadgetcontainer.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;
                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontainer.classList.add('worldwidegadgetcontainer');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');
                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
                } if (photo.isCrime) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontainer = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');
                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');

                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });

                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontainer);
                    worldwidegadgetcontainer.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;
                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontainer.classList.add('worldwidegadgetcontainer');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');
                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
                }
            }
        });
    });
}
function createAdsGadget() {
    let rightsidefeedsothersection = document.querySelectorAll('.rightsidefeedsothersection');
    rightsidefeedsothersection.forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type === 'other') {
                if (photo.isPhoto) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontaineronshortpage = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');
                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');

                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });

                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontaineronshortpage);
                    worldwidegadgetcontaineronshortpage.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;
                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontaineronshortpage.classList.add('worldwidegadgetcontaineronshortpage');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');

                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
                } if (photo.isAdvert) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontaineronshortpage = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');
                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');

                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });

                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontaineronshortpage);
                    worldwidegadgetcontaineronshortpage.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;
                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontaineronshortpage.classList.add('worldwidegadgetcontaineronshortpage');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');

                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
                } if (photo.isCrime) {
                    let worldwidegadgethead = document.createElement('div');
                    let worldwidegadgetcontaineronshortpage = document.createElement('div');
                    let worldwidegadgetinnercontainer = document.createElement('div');
                    let worldwideImageGadget = document.createElement('img');
                    let worldwidegadgetcaptioncover = document.createElement('div');
                    let worldwidegadgetcaption = document.createElement('p');
                    let worldwidegadgetnameandimggrid = document.createElement('div');
                    let nameandimg = document.createElement('div');
                    let worldwidegadgetauthorsimgcontainer = document.createElement('div');
                    let authorsImg = document.createElement('img');
                    let authorsname = document.createElement('b');
                    let elapsedTime = document.createElement('span');
                    let attributation = document.createElement('span');
                    let gadgetsidepannel = document.createElement('nav');
                    let gadgetlike = document.createElement('img');
                    let gadgetcomment = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let livecommentcount = document.createElement('span');

                    let live_Like_Count_Container = document.createElement('div');
                    let live_Comment_Count_Container = document.createElement('div');

                    gadgetsidepannel.appendChild(gadgetlike);
                    gadgetsidepannel.appendChild(live_Like_Count_Container);
                    gadgetsidepannel.appendChild(gadgetcomment);
                    gadgetsidepannel.appendChild(live_Comment_Count_Container);
                    livecommentcount.textContent = photo.comments.length;
                    livelikecount.textContent = photo.likes.length;

                    livelikecount.classList.add('livelikecount');

                    livelikecount.classList.add('live_Like_Counters');

                    livecommentcount.classList.add('live_Comment_Counters');

                    livecommentcount.classList.add('livecommentcount');

                    livecommentcount.id = photo.id;
                    livelikecount.id = photo.id;

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    gadgetlike.src = 'newicons/like.png';
                    gadgetcomment.src = 'newicons/chat.png';

                    live_Like_Count_Container.addEventListener('click', () => {
                        LikePopupsAndMore(photo.id,'postlike');
                    });

                    gadgetlike.addEventListener('click', () => {
                        makeLike();
                    });


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            gadgetlike.id = data.user_Id + photo.id;
                        });
                    }

                    function decideRight() {
                        document.querySelectorAll('.live_Like_Count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('live_Like_Count_active');
                                count.classList.remove('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.add('like_count_active');
                                count.classList.remove('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridlike').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridliked');
                                likebutton.classList.remove('sharegridlike');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        if (photo.isText === true) {
                            like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        } else {
                            like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                        }
                    }
                    function decideLeft() {
                        document.querySelectorAll('.live_Like_Count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('live_Like_Count_active');
                                count.classList.add('live_Like_Count');
                            }
                        });
                        document.querySelectorAll('.like_count_active').forEach(count => {
                            if (count.id === photo.id) {
                                count.classList.remove('like_count_active');
                                count.classList.add('like_count');
                            }
                        });

                        document.querySelectorAll('.sharegridliked').forEach(likebutton => {
                            if (likebutton.id === column.id + photo.id) {
                                likebutton.classList.add('sharegridlike');
                                likebutton.classList.remove('sharegridliked');
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        Unlike_Post(photo.id);
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = photo.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + photo.id) {
                                        live_Like_Count_Container.classList.add('like_count_active');
                                        live_Like_Count_Container.classList.remove('like_count');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();

                    worldwidegadgetnameandimggrid.appendChild(worldwidegadgetauthorsimgcontainer);
                    worldwidegadgetnameandimggrid.appendChild(nameandimg);
                    nameandimg.appendChild(authorsname);
                    nameandimg.appendChild(elapsedTime);
                    nameandimg.appendChild(attributation);
                    column.appendChild(worldwidegadgetcontaineronshortpage);
                    worldwidegadgetcontaineronshortpage.appendChild(worldwidegadgetinnercontainer);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgethead);
                    worldwidegadgetinnercontainer.appendChild(worldwideImageGadget);
                    worldwidegadgetinnercontainer.appendChild(gadgetsidepannel);
                    worldwidegadgetinnercontainer.appendChild(worldwidegadgetcaptioncover);
                    worldwidegadgetcaptioncover.appendChild(worldwidegadgetcaption);
                    worldwidegadgethead.appendChild(worldwidegadgetnameandimggrid);
                    worldwidegadgetauthorsimgcontainer.appendChild(authorsImg);
                    worldwidegadgetcaption.textContent = photo.title;
                    worldwideImageGadget.src = photo.Property_Src;
                    attributation.textContent = photo.attribute;
                    gadgetsidepannel.classList.add('gadgetsidepannel');
                    worldwidegadgetinnercontainer.classList.add('worldwidegadgetinnercontainer');
                    elapsedTime.classList.add('elapsedTime');
                    attributation.classList.add('attributation');
                    nameandimg.classList.add('gadgetnameandimggrid');
                    worldwidegadgetauthorsimgcontainer.classList.add('worldwidegadgetauthorsimgcontainer');
                    worldwidegadgetnameandimggrid.classList.add('worldwidegadgetnameandimggrid');
                    worldwidegadgethead.classList.add('worldwidegadgethead');
                    worldwidegadgetcontaineronshortpage.classList.add('worldwidegadgetcontaineronshortpage');
                    worldwidegadgetcaptioncover.classList.add('worldwidegadgetcaptioncover');
                    worldwidegadgetcaption.classList.add('worldwidegadgetcaption');

                    gadgetcomment.addEventListener('click', () => {
                        create_Comment_room(photo.id);
                        sessionStorage.setItem('activepage', photo.id);
                    });

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
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            elapsedTime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + ' ' + photo.date;
                        }
                    }
                    startTime();

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                authorsname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        authorsImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        authorsImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        authorsImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        authorsImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        authorsImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        authorsImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        authorsImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        authorsImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        authorsImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        authorsImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                        function filter_PostImage() {
                            if (photo.filter == 'default') {
                                worldwideImageGadget.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                worldwideImageGadget.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                worldwideImageGadget.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                worldwideImageGadget.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                worldwideImageGadget.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                worldwideImageGadget.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                worldwideImageGadget.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                worldwideImageGadget.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                worldwideImageGadget.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                worldwideImageGadget.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();

                    worldwideImageGadget.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src);
                    });
                }
            }
        });
    });
}
if (Array.isArray(savedOtherPost)) {
    Feeds_Data_Base = savedOtherPost;
    createPhotosGadget();
    createAdsGadget();
} else {
    Feeds_Data_Base = [];
}
