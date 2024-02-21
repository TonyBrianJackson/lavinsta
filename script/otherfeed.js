function createOtherPost() {
    const id = '' + new Date().getTime();
    document.querySelectorAll('.lavinstaphoto_Img_Container').forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type === 'other') {
                if (photo.isPhoto) {
                    let adgrid = document.createElement('div');
                    let head = document.createElement('header');
                    let adgridimagecontainer = document.createElement('div');

                    let nameandimg = document.createElement('div');
                    let postername = document.createElement('p');
                    let postelapsedtime = document.createElement('b');
                    let posttitle = document.createElement('p');
                    let authorsImg = document.createElement('img');

                    let adImg = document.createElement('img');


                    function Create_GridPost_Options(anything) {
                        let more = document.createElement('span');
                        let postmenu = document.createElement('nav');
                        let option_First_Child1 = document.createElement('span');
                        let option_First_Child2 = document.createElement('span');
                        let option_First_Child3 = document.createElement('span');
                        let option_First_Child4 = document.createElement('span');
                        let option_First_Child5 = document.createElement('span');

                        let option_Name1 = document.createElement('span');
                        let option_Name2 = document.createElement('span');
                        let option_Name3 = document.createElement('span');
                        let option_Name4 = document.createElement('span');
                        let option_Name5 = document.createElement('span');

                        head.appendChild(more);

                        adgrid.appendChild(postmenu);

                        postmenu.appendChild(option_First_Child1);
                        postmenu.appendChild(option_First_Child2);
                        postmenu.appendChild(option_First_Child3);
                        postmenu.appendChild(option_First_Child4);
                        postmenu.appendChild(option_First_Child5);

                        option_First_Child1.appendChild(option_Name1);
                        option_First_Child2.appendChild(option_Name2);
                        option_First_Child3.appendChild(option_Name3);
                        option_First_Child4.appendChild(option_Name4);
                        option_First_Child5.appendChild(option_Name5);

                        option_Name1.textContent = 'Edit';
                        option_Name2.textContent = 'Delete';
                        option_Name3.textContent = 'Turn Off Comments';
                        option_Name4.textContent = 'Turn Off Votes';
                        option_Name5.textContent = 'Turn Off Shares';

                        option_First_Child1.addEventListener('click', () => {
                            document.querySelectorAll('.editpopup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child2.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child3.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.commentactive === true) {
                                photo.commentactive = false;
                                option_Name3.textContent = 'Turn On Comments';
                            } else {
                                photo.commentactive = true;
                                option_Name3.textContent = 'Turn Off Comments';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child4.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.likeactive === true) {
                                photo.likeactive = false;
                                option_Name4.textContent = 'Turn On Votes';
                            } else {
                                photo.likeactive = true;
                                option_Name4.textContent = 'Turn Off Votes';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child5.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.shareactive === true) {
                                photo.shareactive = false;
                                option_Name5.textContent = 'Turn On Shares';
                            } else {
                                photo.shareactive = true;
                                option_Name5.textContent = 'Turn Off Shares';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });

                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                if (photo.posterId !== data.user_Id) {
                                    more.remove();
                                    postmenu.remove();
                                }
                            });
                        }
                        postmenu.classList.add('postmenu');
                        more.classList.add('more');
                        more.innerHTML = '&vellip;';
                        more.addEventListener('click', () => {
                            postmenu.classList.toggle('postmenuactive');
                        });
                        function Activities_Option_TextContents() {
                            if (photo.shareactive === false) {
                                option_Name5.textContent = 'Turn On Shares';
                            } if (photo.commentactive === false) {
                                option_Name3.textContent = 'Turn On Comments';
                            } if (photo.likeactive === false) {
                                option_Name4.textContent = 'Turn On Votes';
                            }
                        }
                        Activities_Option_TextContents();

                    }
                    Create_GridPost_Options();

                    let live_Like_Count_Container = document.createElement('span');
                    let live_Comment_Count_Container = document.createElement('span');

                    let advertactionbar = document.createElement('nav');
                    let advertlike = document.createElement('div');
                    let advertlikeimg = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let advertcomment = document.createElement('div');
                    let advertcommentimg = document.createElement('img');
                    let livecommentcount = document.createElement('span');
                    advertactionbar.appendChild(advertlike);
                    advertactionbar.appendChild(live_Like_Count_Container);
                    advertactionbar.appendChild(advertcomment);
                    advertactionbar.appendChild(live_Comment_Count_Container);
                    advertlike.appendChild(advertlikeimg);
                    advertcomment.appendChild(advertcommentimg);

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    livelikecount.classList.add('livelikecount');
                    livelikecount.classList.add('live_Like_Counters');
                    livecommentcount.classList.add('live_Comment_Counters');
                    livecommentcount.classList.add('livecommentcount');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    advertlikeimg.src = 'newicons/like.png';
                    advertcommentimg.src = 'newicons/comment.png';
                    head.appendChild(nameandimg);
                    head.appendChild(postelapsedtime);
                    head.appendChild(posttitle);
                    nameandimg.appendChild(authorsImg);
                    nameandimg.appendChild(postername);
                    adImg.src = photo.Property_Src;
                    posttitle.textContent = photo.title;
                    livelikecount.textContent = photo.likecount;
                    livecommentcount.textContent = photo.commentcount;
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                postername.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                                adImg.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                adImg.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                adImg.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                adImg.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                adImg.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                adImg.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                adImg.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                adImg.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                adImg.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                adImg.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();
                    column.appendChild(adgrid);
                    adgrid.appendChild(head);
                    adgrid.appendChild(adgridimagecontainer);
                    adgrid.appendChild(advertactionbar);
                    adgridimagecontainer.appendChild(adImg);

                    advertactionbar.classList.add('advertactionbar');
                    head.classList.add('head');
                    adgrid.classList.add('adgrid');
                    postelapsedtime.classList.add('postelapsedtime');
                    posttitle.classList.add('posttitle');
                    nameandimg.classList.add('nameandimg');
                    postername.classList.add('postername');
                    authorsImg.classList.add('authorsImg');
                    adgridimagecontainer.classList.add('adgridimagecontainer');

                    posttitle.addEventListener('click', () => {
                        posttitle.classList.toggle('posttitlemoreorless');
                    });

                    live_Like_Count_Container.addEventListener('click', () => {
                        document.querySelectorAll('.likerecordpopup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                    advertcomment.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === photo.id) {
                                sessionStorage.setItem('activepage', container.id);
                                container.classList.toggle('commentsectioncontaineractive');
                            }
                        });
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
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        }
                    }
                    startTime();
                    livelikecount.id = photo.id;
                    livecommentcount.id = photo.id;

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


                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            advertlike.id = data.user_Id + photo.id;
                        });
                    }

                    advertlike.addEventListener('click', () => {
                        makeLike();
                    });

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
                            like_Post(photo.id, photo.Property_Src, id, photo.posterId, 'post_Like', 'post_Like')
                        } else {
                            like_Post(photo.id, photo.title, id, photo.posterId, 'post_Like', 'post_Like')
                        }
                        createlikesrecordlist();
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
                        createlikesrecordlist();
                    }

                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function View_The_Post() {
                        document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                            if (container.id === photo.id) {
                                document.body.appendChild(container);
                                function Loader() {
                                    let gridpostloader = document.createElement('section');
                                    let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                    container.appendChild(gridpostloader);
                                    gridpostloader.appendChild(mainloadersvg);
                                    mainloadersvg.appendChild(mainloadercircle);
                                    mainloadercircle.setAttribute('cy', '30');
                                    mainloadercircle.setAttribute('cx', '30');
                                    mainloadercircle.setAttribute('r', '30');
                                    gridpostloader.classList.add('gridpostloader');
                                    container.style.display = 'flex';
                                    setTimeout(() => {
                                        gridpostloader.remove();
                                    }, 2000);
                                }
                                Loader();
                            }
                        });
                    }
                    adImg.addEventListener('click', () => {
                        View_The_Post();
                    });

                    function showOnAndOffActivitiesOnGridPost() {
                        if (photo.likeactive === false) {
                            advertlike.remove();
                            livelikecount.remove();
                        }
                    }
                    showOnAndOffActivitiesOnGridPost();
                }
            }
        });
    });
    document.querySelectorAll('.lavistaadvert_Img_Container').forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type == 'other') {
                if (photo.isAdvert) {
                    let adgrid = document.createElement('div');
                    let head = document.createElement('header');
                    let adgridimagecontainer = document.createElement('div');

                    let nameandimg = document.createElement('div');
                    let postername = document.createElement('p');
                    let postelapsedtime = document.createElement('b');
                    let posttitle = document.createElement('p');
                    let authorsImg = document.createElement('img');

                    let adImg = document.createElement('img');


                    function Create_GridPost_Options(anything) {
                        let more = document.createElement('span');
                        let postmenu = document.createElement('nav');
                        let option_First_Child1 = document.createElement('span');
                        let option_First_Child2 = document.createElement('span');
                        let option_First_Child3 = document.createElement('span');
                        let option_First_Child4 = document.createElement('span');
                        let option_First_Child5 = document.createElement('span');

                        let option_Name1 = document.createElement('span');
                        let option_Name2 = document.createElement('span');
                        let option_Name3 = document.createElement('span');
                        let option_Name4 = document.createElement('span');
                        let option_Name5 = document.createElement('span');

                        head.appendChild(more);

                        adgrid.appendChild(postmenu);

                        postmenu.appendChild(option_First_Child1);
                        postmenu.appendChild(option_First_Child2);
                        postmenu.appendChild(option_First_Child3);
                        postmenu.appendChild(option_First_Child4);
                        postmenu.appendChild(option_First_Child5);

                        option_First_Child1.appendChild(option_Name1);
                        option_First_Child2.appendChild(option_Name2);
                        option_First_Child3.appendChild(option_Name3);
                        option_First_Child4.appendChild(option_Name4);
                        option_First_Child5.appendChild(option_Name5);

                        option_Name1.textContent = 'Edit';
                        option_Name2.textContent = 'Delete';
                        option_Name3.textContent = 'Turn Off Comments';
                        option_Name4.textContent = 'Turn Off Votes';
                        option_Name5.textContent = 'Turn Off Shares';

                        option_First_Child1.addEventListener('click', () => {
                            document.querySelectorAll('.editpopup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child2.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child3.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.commentactive === true) {
                                photo.commentactive = false;
                                option_Name3.textContent = 'Turn On Comments';
                            } else {
                                photo.commentactive = true;
                                option_Name3.textContent = 'Turn Off Comments';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child4.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.likeactive === true) {
                                photo.likeactive = false;
                                option_Name4.textContent = 'Turn On Votes';
                            } else {
                                photo.likeactive = true;
                                option_Name4.textContent = 'Turn Off Votes';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child5.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.shareactive === true) {
                                photo.shareactive = false;
                                option_Name5.textContent = 'Turn On Shares';
                            } else {
                                photo.shareactive = true;
                                option_Name5.textContent = 'Turn Off Shares';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });


                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                if (photo.posterId !== data.user_Id) {
                                    more.remove();
                                    postmenu.remove();
                                }
                            });
                        }
                        postmenu.classList.add('postmenu');
                        more.classList.add('more');
                        more.innerHTML = '&vellip;';
                        more.addEventListener('click', () => {
                            postmenu.classList.toggle('postmenuactive');
                        });
                        function Activities_Option_TextContents() {
                            if (photo.shareactive === false) {
                                option_Name5.textContent = 'Turn On Shares';
                            } if (photo.commentactive === false) {
                                option_Name3.textContent = 'Turn On Comments';
                            } if (photo.likeactive === false) {
                                option_Name4.textContent = 'Turn On Votes';
                            }
                        }
                        Activities_Option_TextContents();

                    }
                    Create_GridPost_Options();

                    let live_Like_Count_Container = document.createElement('span');
                    let live_Comment_Count_Container = document.createElement('span');

                    let advertactionbar = document.createElement('nav');
                    let advertlike = document.createElement('div');
                    let advertlikeimg = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let advertcomment = document.createElement('div');
                    let advertcommentimg = document.createElement('img');
                    let livecommentcount = document.createElement('span');
                    advertactionbar.appendChild(advertlike);
                    advertactionbar.appendChild(live_Like_Count_Container);
                    advertactionbar.appendChild(advertcomment);
                    advertactionbar.appendChild(live_Comment_Count_Container);
                    advertlike.appendChild(advertlikeimg);
                    advertcomment.appendChild(advertcommentimg);

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    livelikecount.classList.add('livelikecount');
                    livelikecount.classList.add('live_Like_Counters');
                    livecommentcount.classList.add('live_Comment_Counters');
                    livecommentcount.classList.add('livecommentcount');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;


                    advertlikeimg.src = 'newicons/like.png';
                    advertcommentimg.src = 'newicons/comment.png';
                    head.appendChild(nameandimg);
                    head.appendChild(postelapsedtime);
                    head.appendChild(posttitle);
                    nameandimg.appendChild(authorsImg);
                    nameandimg.appendChild(postername);
                    adImg.src = photo.Property_Src;
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                postername.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                                adImg.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                adImg.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                adImg.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                adImg.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                adImg.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                adImg.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                adImg.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                adImg.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                adImg.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                adImg.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();
                    posttitle.textContent = photo.title;
                    livelikecount.textContent = photo.likecount;
                    livecommentcount.textContent = photo.commentcount;
                    column.appendChild(adgrid);
                    adgrid.appendChild(head);
                    adgrid.appendChild(adgridimagecontainer);
                    adgrid.appendChild(advertactionbar);
                    adgridimagecontainer.appendChild(adImg);
                    livelikecount.classList.add('livelikecount');
                    livecommentcount.classList.add('livecommentcount');
                    advertactionbar.classList.add('advertactionbar');
                    head.classList.add('head');
                    adgrid.classList.add('adgrid');
                    postelapsedtime.classList.add('postelapsedtime');
                    posttitle.classList.add('posttitle');
                    nameandimg.classList.add('nameandimg');
                    postername.classList.add('postername');
                    authorsImg.classList.add('authorsImg');
                    adgridimagecontainer.classList.add('adgridimagecontainer');

                    posttitle.addEventListener('click', () => {
                        posttitle.classList.toggle('posttitlemoreorless');
                    });
                    live_Like_Count_Container.addEventListener('click', () => {
                        document.querySelectorAll('.likerecordpopup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                    advertcomment.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === photo.id) {
                                sessionStorage.setItem('activepage', container.id);
                                container.classList.toggle('commentsectioncontaineractive');
                            }
                        });
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
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        }
                    }
                    startTime();

                    livelikecount.id = photo.id;
                    livecommentcount.id = photo.id;

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

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            advertlike.id = data.user_Id + photo.id;
                        });
                    }

                    advertlike.addEventListener('click', () => {
                        makeLike();
                    });

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
                            like_Post(photo.id, photo.Property_Src, id, photo.posterId, 'post_Like', 'post_Like')
                        } else {
                            like_Post(photo.id, photo.title, id, photo.posterId, 'post_Like', 'post_Like')
                        }
                        createlikesrecordlist();
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
                        createlikesrecordlist();
                    }

                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function View_The_Post() {
                        document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                            if (container.id === photo.id) {
                                document.body.appendChild(container);
                                function Loader() {
                                    let gridpostloader = document.createElement('section');
                                    let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                    container.appendChild(gridpostloader);
                                    gridpostloader.appendChild(mainloadersvg);
                                    mainloadersvg.appendChild(mainloadercircle);
                                    mainloadercircle.setAttribute('cy', '30');
                                    mainloadercircle.setAttribute('cx', '30');
                                    mainloadercircle.setAttribute('r', '30');
                                    gridpostloader.classList.add('gridpostloader');
                                    container.style.display = 'flex';
                                    setTimeout(() => {
                                        gridpostloader.remove();
                                    }, 2000);
                                }
                                Loader();
                            }
                        });
                    }
                    adImg.addEventListener('click', () => {
                        View_The_Post();
                    });

                    function showOnAndOffActivitiesOnGridPost() {
                        if (photo.likeactive === false) {
                            advertlike.remove();
                            livelikecount.remove();
                        }
                    }
                    showOnAndOffActivitiesOnGridPost();
                }
            }
        });
    });
    document.querySelectorAll('.lavinstacrime_Img_Container').forEach(column => {
        column.innerHTML = '';
        Feeds_Data_Base.forEach(photo => {
            if (photo.type == 'other') {
                if (photo.isCrime) {
                    let adgrid = document.createElement('div');
                    let head = document.createElement('header');
                    let adgridimagecontainer = document.createElement('div');

                    let nameandimg = document.createElement('div');
                    let postername = document.createElement('p');
                    let postelapsedtime = document.createElement('b');
                    let posttitle = document.createElement('p');
                    let authorsImg = document.createElement('img');

                    let adImg = document.createElement('img');


                    function Create_GridPost_Options(anything) {
                        let more = document.createElement('span');
                        let postmenu = document.createElement('nav');
                        let option_First_Child1 = document.createElement('span');
                        let option_First_Child2 = document.createElement('span');
                        let option_First_Child3 = document.createElement('span');
                        let option_First_Child4 = document.createElement('span');
                        let option_First_Child5 = document.createElement('span');

                        let option_Name1 = document.createElement('span');
                        let option_Name2 = document.createElement('span');
                        let option_Name3 = document.createElement('span');
                        let option_Name4 = document.createElement('span');
                        let option_Name5 = document.createElement('span');

                        head.appendChild(more);

                        adgrid.appendChild(postmenu);

                        postmenu.appendChild(option_First_Child1);
                        postmenu.appendChild(option_First_Child2);
                        postmenu.appendChild(option_First_Child3);
                        postmenu.appendChild(option_First_Child4);
                        postmenu.appendChild(option_First_Child5);

                        option_First_Child1.appendChild(option_Name1);
                        option_First_Child2.appendChild(option_Name2);
                        option_First_Child3.appendChild(option_Name3);
                        option_First_Child4.appendChild(option_Name4);
                        option_First_Child5.appendChild(option_Name5);

                        option_Name1.textContent = 'Edit';
                        option_Name2.textContent = 'Delete';
                        option_Name3.textContent = 'Turn Off Comments';
                        option_Name4.textContent = 'Turn Off Votes';
                        option_Name5.textContent = 'Turn Off Shares';

                        option_First_Child1.addEventListener('click', () => {
                            document.querySelectorAll('.editpopup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child2.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === photo.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                            postmenu.classList.toggle('postmenuactive');
                        });
                        option_First_Child3.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.commentactive === true) {
                                photo.commentactive = false;
                                option_Name3.textContent = 'Turn On Comments';
                            } else {
                                photo.commentactive = true;
                                option_Name3.textContent = 'Turn Off Comments';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child4.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.likeactive === true) {
                                photo.likeactive = false;
                                option_Name4.textContent = 'Turn On Votes';
                            } else {
                                photo.likeactive = true;
                                option_Name4.textContent = 'Turn Off Votes';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });
                        option_First_Child5.addEventListener('click', () => {
                            Feeds_Data_Base = savedOtherPost;
                            if (photo.shareactive === true) {
                                photo.shareactive = false;
                                option_Name5.textContent = 'Turn On Shares';
                            } else {
                                photo.shareactive = true;
                                option_Name5.textContent = 'Turn Off Shares';
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        });

                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                if (photo.posterId !== data.user_Id) {
                                    more.remove();
                                    postmenu.remove();
                                }
                            });
                        }
                        postmenu.classList.add('postmenu');
                        more.classList.add('more');
                        more.innerHTML = '&vellip;';
                        more.addEventListener('click', () => {
                            postmenu.classList.toggle('postmenuactive');
                        });
                        function Activities_Option_TextContents() {
                            if (photo.shareactive === false) {
                                option_Name5.textContent = 'Turn On Shares';
                            } if (photo.commentactive === false) {
                                option_Name3.textContent = 'Turn On Comments';
                            } if (photo.likeactive === false) {
                                option_Name4.textContent = 'Turn On Votes';
                            }
                        }
                        Activities_Option_TextContents();

                    }
                    Create_GridPost_Options();

                    let live_Like_Count_Container = document.createElement('span');
                    let live_Comment_Count_Container = document.createElement('span');

                    let advertactionbar = document.createElement('nav');
                    let advertlike = document.createElement('div');
                    let advertlikeimg = document.createElement('img');
                    let livelikecount = document.createElement('span');
                    let advertcomment = document.createElement('div');
                    let advertcommentimg = document.createElement('img');
                    let livecommentcount = document.createElement('span');
                    advertactionbar.appendChild(advertlike);
                    advertactionbar.appendChild(live_Like_Count_Container);
                    advertactionbar.appendChild(advertcomment);
                    advertactionbar.appendChild(live_Comment_Count_Container);
                    advertlike.appendChild(advertlikeimg);
                    advertcomment.appendChild(advertcommentimg);

                    live_Like_Count_Container.appendChild(livelikecount);
                    live_Comment_Count_Container.appendChild(livecommentcount);

                    live_Like_Count_Container.classList.add('like_count');
                    live_Comment_Count_Container.classList.add('counts');

                    livelikecount.classList.add('livelikecount');
                    livelikecount.classList.add('live_Like_Counters');
                    livecommentcount.classList.add('live_Comment_Counters');
                    livecommentcount.classList.add('livecommentcount');

                    live_Like_Count_Container.id = photo.id;
                    live_Comment_Count_Container.id = photo.id;

                    advertlikeimg.src = 'newicons/like.png';
                    advertcommentimg.src = 'newicons/comment.png';
                    head.appendChild(nameandimg);
                    head.appendChild(postelapsedtime);
                    head.appendChild(posttitle);
                    nameandimg.appendChild(authorsImg);
                    nameandimg.appendChild(postername);
                    adImg.src = photo.Property_Src;
                    posttitle.textContent = photo.title;
                    livelikecount.textContent = photo.likecount;
                    livecommentcount.textContent = photo.commentcount;
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === photo.posterId) {
                                authorsImg.src = user.user_ProfilePicture;
                                postername.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                                adImg.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                adImg.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                adImg.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                adImg.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                adImg.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                adImg.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                adImg.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                adImg.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                adImg.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                adImg.classList.add('--color-satulate');
                            }
                        }
                        filter_PostImage();
                    }
                    Poster_Details();
                    column.appendChild(adgrid);
                    adgrid.appendChild(head);
                    adgrid.appendChild(adgridimagecontainer);
                    adgrid.appendChild(advertactionbar);
                    adgridimagecontainer.appendChild(adImg);
                    livelikecount.classList.add('livelikecount');
                    livecommentcount.classList.add('livecommentcount');
                    advertactionbar.classList.add('advertactionbar');
                    head.classList.add('head');
                    adgrid.classList.add('adgrid');
                    postelapsedtime.classList.add('postelapsedtime');
                    posttitle.classList.add('posttitle');
                    nameandimg.classList.add('nameandimg');
                    postername.classList.add('postername');
                    authorsImg.classList.add('authorsImg');
                    adgridimagecontainer.classList.add('adgridimagecontainer');

                    posttitle.addEventListener('click', () => {
                        posttitle.classList.toggle('posttitlemoreorless');
                    });

                    live_Like_Count_Container.addEventListener('click', () => {
                        document.querySelectorAll('.likerecordpopup').forEach(popup => {
                            if (popup.id === photo.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                    advertcomment.addEventListener('click', () => {
                        document.querySelectorAll('.commentsectioncontainer').forEach(container => {
                            if (container.id === photo.id) {
                                sessionStorage.setItem('activepage', container.id);
                                container.classList.toggle('commentsectioncontaineractive');
                            }
                        });
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
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            postelapsedtime.innerHTML = Math.trunc(maintime) + ' ' + token + '<span class="centerdotentity">&centerdot;</span>' + moment + '<span class="centerdotentity">&centerdot;</span>' + photo.attribute;
                        }
                    }
                    startTime();

                    livelikecount.id = photo.id;
                    livecommentcount.id = photo.id;

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

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            advertlike.id = data.user_Id + photo.id;
                        });
                    }

                    advertlike.addEventListener('click', () => {
                        makeLike();
                    });

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
                            like_Post(photo.id, photo.Property_Src, id, photo.posterId, 'post_Like', 'post_Like')
                        } else {
                            like_Post(photo.id, photo.title, id, photo.posterId, 'post_Like', 'post_Like')
                        }
                        createlikesrecordlist();
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
                        createlikesrecordlist();
                    }
                    function makeLike() {
                        if (live_Like_Count_Container.classList.contains('like_count')) {
                            decideRight();
                        } else if (live_Like_Count_Container.classList.contains('like_count_active')) {
                            decideLeft();
                        }
                    }

                    function View_The_Post() {
                        document.querySelectorAll('.itemsviewonlargescale').forEach(container => {
                            if (container.id === photo.id) {
                                document.body.appendChild(container);
                                function Loader() {
                                    let gridpostloader = document.createElement('section');
                                    let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                    container.appendChild(gridpostloader);
                                    gridpostloader.appendChild(mainloadersvg);
                                    mainloadersvg.appendChild(mainloadercircle);
                                    mainloadercircle.setAttribute('cy', '30');
                                    mainloadercircle.setAttribute('cx', '30');
                                    mainloadercircle.setAttribute('r', '30');
                                    gridpostloader.classList.add('gridpostloader');
                                    container.style.display = 'flex';
                                    setTimeout(() => {
                                        gridpostloader.remove();
                                    }, 2000);
                                }
                                Loader();
                            }
                        });
                    }
                    adImg.addEventListener('click', () => {
                        View_The_Post();
                    });

                    function showOnAndOffActivitiesOnGridPost() {
                        if (photo.likeactive === false) {
                            advertlike.remove();
                            livelikecount.remove();
                        }
                    }
                    showOnAndOffActivitiesOnGridPost();
                }
            }
        });
    });
}

const savedOtherPost = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
if (Array.isArray(savedOtherPost)) {
    Feeds_Data_Base = savedOtherPost;
    Feeds_Data_Base.forEach(feed => {
        feed.likes = [];
        feed.comments = [];
        feed.shares = [];
        localStorage.setItem('Feeds_Data_Base',JSON.stringify(Feeds_Data_Base));
    });
    createOtherPost();
} else {
    Feeds_Data_Base = [];
}