function create_Comment_Sections_TimeLinePost() {
    Feeds_Data_Base.forEach(photo => {

        function create_share_Popup() {
            function shareNotification(id, isStory, caption) {
                if (Array.isArray(ActiveAccount)) {
                    ActiveUser_Account = ActiveAccount;
                    ActiveUser_Account.forEach(activeUser => {
                        LogInFormData.forEach(user_data => {
                            let connections = user_data.user_Connection;
                            connections.forEach(connection => {
                                if (connection.connectionId === activeUser.user_Id) {
                                    let Notifications = user_data.user_Notifications;
                                    Notifications.push({
                                        isStory: isStory,
                                        type: 'postNotification',
                                        notificationId: activeUser.user_Id,
                                        id: id,
                                        caption: caption,
                                        trackingId: connection.connectionId,
                                        posterId: activeUser.user_Id,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        notification_isChecked: false,
                                        notification_View: false,
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            });
                        });
                    });
                }
            }
            if (photo.type == 'timeline') {
                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    let option_Name1_HeaderBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');
                    let option_Name6_HeaderBtns = document.createElement('div');
                    let option_Name7_HeaderBtns = document.createElement('div');

                    let option_Name1_Img = document.createElement('img');
                    let option_Name2_Img = document.createElement('img');
                    let option_Name3_Img = document.createElement('img');
                    let option_Name4_Img = document.createElement('img');
                    let option_Name5_Img = document.createElement('img');
                    let option_Name6_Img = document.createElement('img');
                    let option_Name7_Img = document.createElement('img');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_Name1_HeaderBtns.appendChild(option_Name1_Img);
                    option_Name2_HeaderBtns.appendChild(option_Name2_Img);
                    option_Name3_HeaderBtns.appendChild(option_Name3_Img);
                    option_Name4_HeaderBtns.appendChild(option_Name4_Img);
                    option_Name5_HeaderBtns.appendChild(option_Name5_Img);
                    option_Name6_HeaderBtns.appendChild(option_Name6_Img);
                    option_Name7_HeaderBtns.appendChild(option_Name7_Img);

                    option_First_Child1.appendChild(option_Name1_HeaderBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);
                    option_First_Child6.appendChild(option_Name6_HeaderBtns);
                    option_First_Child7.appendChild(option_Name7_HeaderBtns);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);
                    option_First_Child6.appendChild(option_Name6);
                    option_First_Child7.appendChild(option_Name7);

                    option_Name1_HeaderBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');
                    option_Name6_HeaderBtns.classList.add('headerbtns');
                    option_Name7_HeaderBtns.classList.add('headerbtns');

                    postshare_Pop_up_Close.classList.add('headerbtns');

                    option_Name1_Img.src = 'icons/recreate.png';
                    option_Name2_Img.src = 'icons/web-content.png';
                    option_Name3_Img.src = 'newicons/handcuff.png';
                    option_Name4_Img.src = 'newicons/promotion.png';
                    option_Name5_Img.src = 'icons/image(0).png';
                    option_Name6_Img.src = 'icons/discover.png';
                    option_Name7_Img.src = 'newicons/medical-report.png';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushShareToPhotos() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'lavinsta photos' + ')',
                                                isPhoto: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToAdverts() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'advert' + ')',
                                                isAdvert: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToCrime() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'crime' + ')',
                                                isCrime: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child3.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToCrime();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToAdverts();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToPhotos();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child7.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child7.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isVideo) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

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

                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_headerBtns = document.createElement('div');
                    let option_Name3_headerBtns = document.createElement('div');
                    let option_Name4_headerBtns = document.createElement('div');
                    let option_Name5_headerBtns = document.createElement('div');

                    let option_Name1_Img = document.createElement('img');
                    let option_Name2_Img = document.createElement('img');
                    let option_Name3_Img = document.createElement('img');
                    let option_Name4_Img = document.createElement('img');
                    let option_Name5_Img = document.createElement('img');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);

                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_headerBtns);
                    option_First_Child3.appendChild(option_Name3_headerBtns);
                    option_First_Child4.appendChild(option_Name4_headerBtns);
                    option_First_Child5.appendChild(option_Name5_headerBtns);

                    option_Name1_headerBtns.appendChild(option_Name1_Img);
                    option_Name2_headerBtns.appendChild(option_Name2_Img);
                    option_Name3_headerBtns.appendChild(option_Name3_Img);
                    option_Name4_headerBtns.appendChild(option_Name4_Img);
                    option_Name5_headerBtns.appendChild(option_Name5_Img);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);

                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_headerBtns.classList.add('headerbtns');
                    option_Name3_headerBtns.classList.add('headerbtns');
                    option_Name4_headerBtns.classList.add('headerbtns');
                    option_Name5_headerBtns.classList.add('headerbtns');

                    postshare_Pop_up_Close.classList.add('headerbtns');
                    

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'add to short';
                    option_Name4.textContent = 'advance';
                    option_Name5.textContent = 'report post';

                    option_Name1_Img.src = 'icons/recreate.png';
                    option_Name2_Img.src = 'icons/home.png';
                    option_Name3_Img.src = 'icons/stopwatch.png';
                    option_Name4_Img.src = 'icons/discover.png';
                    option_Name5_Img.src = 'newicons/medical-report.png';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isVideo: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline video' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                viewcount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }

                        function pushtoshort() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            shortVideoArray.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isShort: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public short' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                viewcount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('shortVideoArray', JSON.stringify(shortVideoArray));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isVideo: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public video' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                viewcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child3.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtoshort();
                                    Create_Short();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child5.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isText) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_headerBtns = document.createElement('div');
                    let option_Name3_headerBtns = document.createElement('div');
                    let option_Name4_headerBtns = document.createElement('div');

                    let option_Name1_Img = document.createElement('img');
                    let option_Name2_Img = document.createElement('img');
                    let option_Name3_Img = document.createElement('img');
                    let option_Name4_Img = document.createElement('img');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_headerBtns);
                    option_First_Child3.appendChild(option_Name3_headerBtns);
                    option_First_Child4.appendChild(option_Name4_headerBtns);

                    option_Name1_headerBtns.appendChild(option_Name1_Img);
                    option_Name2_headerBtns.appendChild(option_Name2_Img);
                    option_Name3_headerBtns.appendChild(option_Name3_Img);
                    option_Name4_headerBtns.appendChild(option_Name4_Img);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);

                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_headerBtns.classList.add('headerbtns');
                    option_Name3_headerBtns.classList.add('headerbtns');
                    option_Name4_headerBtns.classList.add('headerbtns');

                    postshare_Pop_up_Close.classList.add('headerbtns');

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    option_Name1_Img.src = 'icons/recreate.png';
                    option_Name2_Img.src = 'icons/web-content.png';
                    option_Name3_Img.src = 'icons/discover.png';
                    option_Name4_Img.src = 'newicons/medical-report.png';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {
                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isText: photo.isText,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline text' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                themeMode: photo.themeMode,
                                                fontMode: photo.fontMode,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }

                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isText: photo.isText,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public text' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                themeMode: photo.themeMode,
                                                fontMode: photo.fontMode,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child4.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            } if (photo.type == 'public') {
                if (photo.isPhoto) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);
                    option_First_Child6.appendChild(option_Name6);
                    option_First_Child7.appendChild(option_Name7);

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushShareToPhotos() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'lavinsta photos' + ')',
                                                isPhoto: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToAdverts() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'advert' + ')',
                                                isAdvert: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToCrime() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'crime' + ')',
                                                isCrime: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child3.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToCrime();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToAdverts();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToPhotos();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child7.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child7.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isVideo) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

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

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'add to short';
                    option_Name4.textContent = 'advance';
                    option_Name5.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isVideo: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + ' ' + '',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                viewcount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }

                        function pushtoshort() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            shortVideoArray.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isShort: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public short' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                viewcount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('shortVideoArray', JSON.stringify(shortVideoArray));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isVideo: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public video' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                viewcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child3.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtoshort();
                                    Create_Short();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child5.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isShort) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isShort: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public short' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                viewcount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isVideo: photo.isVideo,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public video' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                viewcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child4.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isText) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);

                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {
                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isText: photo.isText,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline text' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                themeMode: photo.themeMode,
                                                fontMode: photo.fontMode,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }

                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isText: photo.isText,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public text' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                themeMode: photo.themeMode,
                                                fontMode: photo.fontMode,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child4.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            } if (photo.type == 'other') {
                if (photo.isPhoto || photo.isAdvert || photo.isCrime) {
                    let postshare_Pop_up_header = document.createElement('header');
                    let postshare_Pop_up_Close = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_First_Child1.appendChild(option_Name1);
                    option_First_Child2.appendChild(option_Name2);
                    option_First_Child3.appendChild(option_Name3);
                    option_First_Child4.appendChild(option_Name4);
                    option_First_Child5.appendChild(option_Name5);
                    option_First_Child6.appendChild(option_Name6);
                    option_First_Child7.appendChild(option_Name7);

                    option_Name1.textContent = 'add to timeline';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Pop_up_header);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up_header.appendChild(postshare_Pop_up_Close);
                    postshare_Pop_up_Close.innerHTML = '&times;';
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    postshare_Pop_up_Close.addEventListener('click', () => {
                        postshare_Pop_up.style.display = 'none';
                    });
                    function share_Activities() {

                        function increasesharecount() {
                            document.querySelectorAll('.gridsharecount').forEach(count => {
                                if (count.id === photo.id) {
                                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                                    count.textContent = parseInt(count.textContent) + 1;
                                    photo.sharecount = count.textContent;
                                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                    document.querySelectorAll('.livesharecount').forEach(livecount => {
                                        if (livecount.id === photo.id) {
                                            livecount.textContent = count.textContent;
                                        }
                                    });
                                }
                            });
                        }

                        function pushShareToPhotos() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'lavinsta photos' + ')',
                                                isPhoto: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToAdverts() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'advert' + ')',
                                                isAdvert: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushShareToCrime() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'other',
                                                shareId: photo.id,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'crime' + ')',
                                                isCrime: true,
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushRepost() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'timeline',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'timeline photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            })
                                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function pushtopublic() {
                            if (Array.isArray(ActiveAccount)) {
                                ActiveUser_Account = ActiveAccount;
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
                                                type: 'public',
                                                shareId: photo.id,
                                                isPhoto: true,
                                                Property_Src: photo.Property_Src,
                                                title: photo.title,
                                                attribute: 'shared' + '(' + 'public photo' + ')',
                                                date: trackingDate,
                                                time: new Date().getTime(),
                                                posterId: user.user_Id,
                                                id: id,
                                                likecount: 0,
                                                commentcount: 0,
                                                sharecount: 0,
                                                likeactive: true,
                                                commentactive: true,
                                                shareactive: true,
                                                filter: photo.filter
                                            });
                                            localStorage.setItem('createPublicFeed', JSON.stringify(createPublicFeed));
                                            shareNotification(id, false, 'shared a post');
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            option_First_Child1.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushRepost();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child2.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushtopublic();
                                    createPublicFeed();
                                    createPublicGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child3.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToCrime();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToAdverts();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                shareMessage();
                                setTimeout(() => {
                                    pushShareToPhotos();
                                    createPhotoPostOnTimeLine();
                                    createGridPost();
                                    increasesharecount();
                                }, 3000);
                            });
                            option_First_Child7.addEventListener('click', (event) => {
                                document.querySelectorAll('.reportcontainer').forEach(popup => {
                                    if (popup.id === photo.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            ActiveUser_Account.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    option_First_Child7.remove();
                                }
                            });
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            }
        }
        create_share_Popup();
        function create_reportScript() {
            let reportpostheader = document.createElement('header');
            let reportpostexit = document.createElement('span');
            let reportpostcontainer = document.createElement('section');
            let reportpostcolumn = document.createElement('div');
            document.body.appendChild(reportpostcontainer);
            reportpostcontainer.appendChild(reportpostheader);
            reportpostcontainer.appendChild(reportpostcolumn);
            reportpostheader.appendChild(reportpostexit);
            reportpostcontainer.id = photo.id;
            reportpostcolumn.id = photo.id;
            reportpostcolumn.classList.add('reportpostcolumn');
            reportpostcontainer.classList.add('reportpostcontainer');
            reportpostexit.innerHTML = '&LeftArrow;';

            reportpostexit.addEventListener('click', () => {
                reportpostcontainer.style.display = 'none';
            });
            function reportSubmission() {
                let reportcontainerheader = document.createElement('header');
                let reportcontainerexit = document.createElement('span');
                let reportcontainer = document.createElement('div');
                let reporttextboxcontainer = document.createElement('div');
                let reporttextarea = document.createElement('textarea');
                let reportsubmitbutton = document.createElement('button');
                document.body.appendChild(reportcontainer);
                reportcontainer.appendChild(reportcontainerheader);
                reportcontainerheader.appendChild(reportcontainerexit);
                reportcontainer.appendChild(reporttextboxcontainer);
                reportcontainer.appendChild(reportsubmitbutton);
                reporttextboxcontainer.appendChild(reporttextarea);
                reportsubmitbutton.textContent = 'submit report';
                reporttextarea.placeholder = 'what is the probem...';
                reportcontainer.id = photo.id;
                reportcontainerexit.innerHTML = '&LeftArrow;';
                reportcontainerexit.addEventListener('click', () => {
                    reportcontainer.style.display = 'none';
                });

                function pushreport() {
                    if (Array.isArray(ActiveAccount)) {
                        ActiveUser_Account = ActiveAccount;
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    if (reporttextarea.value) {
                                        const id = '' + new Date().getTime();
                                        if (photo.isText) {
                                            Admins_Notification.push({
                                                id: id,
                                                type: 'is_Post_report',
                                                report_Id: user.user_Id,
                                                report_Speech: reporttextarea.value,
                                                post_Caption: photo.Property_Src,
                                                poster_Id: photo.posterId,
                                                post_Id: photo.id,
                                            });
                                            localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                                        } else {
                                            Admins_Notification.push({
                                                id: id,
                                                type: 'is_Post_report',
                                                report_Id: user.user_Id,
                                                report_Speech: reporttextarea.value,
                                                post_Caption: photo.title,
                                                poster_Id: photo.posterId,
                                                post_Id: photo.id,
                                            });
                                            localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                                        }
                                    }
                                }
                            });
                        });
                    }
                }
                reportsubmitbutton.addEventListener('click', () => {
                    pushreport();
                    reporttextarea.value = '';
                    setTimeout(() => {
                        reportcontainer.style.display = 'none';
                    }, 1000);
                });
                reporttextboxcontainer.classList.add('reporttextboxcontainer');
                reportcontainer.classList.add('reportcontainer');
            }
            reportSubmission();
        }
        create_reportScript();

        function editingPostText() {
            let editpopup = document.createElement('div');
            let editinputbox = document.createElement('div');
            let editinput = document.createElement('textarea');
            let editingisdone = document.createElement('span');
            let editingpopupheader = document.createElement('header');
            let editingpopupclosebtn = document.createElement('span');
            document.body.appendChild(editpopup);
            editpopup.appendChild(editingpopupheader);
            editpopup.appendChild(editinputbox);
            editpopup.appendChild(editingisdone);
            editinputbox.appendChild(editinput);
            editingpopupheader.appendChild(editingpopupclosebtn)
            editingpopupclosebtn.innerHTML = '&times;';
            editingisdone.textContent = 'done';
            editpopup.id = photo.id;
            editingpopupclosebtn.classList.add('editingpopupclosebtn');
            editpopup.classList.add('editpopup');
            editingisdone.classList.add('editingisdone');
            editinputbox.classList.add('editinputbox');
            editinput.placeholder = 'edit text...';
            if (photo.isText) {
                editinput.value = photo.Property_Src;
            } else {
                editinput.value = photo.title;
            }
            editingpopupclosebtn.addEventListener('click', () => {
                editpopup.style.display = 'none';
            });
            if (Array.isArray(ActiveAccount)) {
                ActiveUser_Account = ActiveAccount;
                ActiveUser_Account.forEach(data => {
                    if (photo.posterId !== data.user_Id) {
                        editpopup.remove();
                    }
                });
            }
            function EditingMessage() {
                let editingmessage = document.createElement('div');
                let actualeditingmessage = document.createElement('p');
                document.body.appendChild(editingmessage);
                editingmessage.appendChild(actualeditingmessage);
                editingmessage.classList.add('editingmessage');
                actualeditingmessage.textContent = 'editing post...';
                setTimeout(() => {
                    actualeditingmessage.textContent = 'post edited';
                    postIsEdited();
                    setTimeout(() => {
                        editingmessage.remove();
                    }, 2000);
                }, 3000);
            }
            function postIsEdited() {
                if (photo.id === editingisdone.id) {
                    if (photo.isText) {
                        photo.Property_Src = editinput.value;
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    } else {
                        photo.title = editinput.value;
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    }
                }
            }
            editingisdone.id = photo.id
            editingisdone.addEventListener('click', () => {
                editpopup.style.display = 'none';
                EditingMessage();
            });
        }
        editingPostText();

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

            confirmation_popup.id = photo.id;
            confirmationtrue.id = photo.id;
            function pushtrash() {
                LogInFormData.forEach(user => {
                    if (user.user_Id === photo.posterId) {
                        let trash = user.user_Trash;
                        const id = '' + new Date().getTime();
                        if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                            trash.push({
                                isPhoto: true,
                                posterId: photo.posterId,
                                title: photo.title,
                                Property_Src: photo.Property_Src,
                                filter: photo.filter,
                                id: id,
                                date: trackingDate,
                                time: new Date().getTime()
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        } else if (photo.isVideo) {
                            trash.push({
                                isVideo: true,
                                posterId: photo.posterId,
                                title: photo.title,
                                Property_Src: photo.Property_Src,
                                filter: photo.filter,
                                id: id,
                                date: trackingDate,
                                time: new Date().getTime()
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        } else if (photo.isText) {
                            trash.push({
                                isText: true,
                                posterId: photo.posterId,
                                title: photo.title,
                                Property_Src: photo.Property_Src,
                                filter: photo.filter,
                                id: id,
                                date: trackingDate,
                                time: new Date().getTime()
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    }
                });
            }
            confirmationtrue.addEventListener('click', () => {
                pushtrash();
                create_Trash_Items();
                Feeds_Data_Base = Feeds_Data_Base.filter((photo) => {
                    if (photo.id === confirmationtrue.id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                createPhotoPostOnTimeLine();
                create_TimeLine_G_Video();
                createGridPost();
                create_Message('operated successfully');
                confirmation_popup.style.display = 'none';
            });
        }
        deleting_Post_Script();
        function createShare_Photo_Popup() {
            let sharephotolabelinput = document.createElement('input');
            let sharevideolabelinput = document.createElement('input');

            let sharephotocomentcontainer = document.createElement('div');
            let shareimagecontainer = document.createElement('div');
            let shareimg = document.createElement('img');
            let caption = document.createElement('div');
            let captioninput = document.createElement('input');
            let sharephotosend = document.createElement('button');
            let photoexit = document.createElement('span');
            let newphotolabel = document.createElement('label');
            let newvideolabel = document.createElement('label');


            let sharevideocontainer = document.createElement('div');
            let sharevideo = document.createElement('video');
            let sharevideosend = document.createElement('button');

            sharephotolabelinput.id = photo.id + 'Xfr_OxYP';
            sharevideolabelinput.id = photo.id + 'Xfr_OxYV';
            const thephotoid = sharephotolabelinput.id;
            const thevideoid = sharevideolabelinput.id;
            document.body.appendChild(sharephotocomentcontainer);
            sharephotocomentcontainer.appendChild(sharephotolabelinput);
            sharephotocomentcontainer.appendChild(sharevideolabelinput);
            sharephotolabelinput.classList.add('sharephotolabelinput');
            sharevideolabelinput.classList.add('sharephotolabelinput');
            newphotolabel.htmlFor = thephotoid;
            newvideolabel.htmlFor = thevideoid;

            sharevideolabelinput.accept = 'video/*';
            sharephotolabelinput.accept = 'image/*';

            sharephotolabelinput.type = 'file';
            sharevideolabelinput.type = 'file';
            sharephotolabelinput.onchange = executephoto;
            sharevideolabelinput.onchange = executevideo;


            let uploadpreviewcontainer = document.createElement('div');
            let header = document.createElement('header');
            let popup_Names_Container = document.createElement('div');
            let Names_title = document.createElement('strong');
            let subactions = document.createElement('div');

            let clickAndUploadContainer = document.createElement('div');
            let firstImg = document.createElement('img');
            let secondImg = document.createElement('img');
            let firsttext = document.createElement('span');
            let secondtext = document.createElement('span');
            uploadpreviewcontainer.classList.add('uploadpreviewcontainer');
            clickAndUploadContainer.classList.add('clickAndUploadContainer');
            sharephotocomentcontainer.appendChild(header);
            sharephotocomentcontainer.appendChild(uploadpreviewcontainer);
            uploadpreviewcontainer.appendChild(shareimagecontainer);
            uploadpreviewcontainer.appendChild(sharevideocontainer);
            sharevideocontainer.appendChild(sharevideo);
            subactions.classList.add('subactions');
            popup_Names_Container.classList.add('popup_Names_Container');
            sharephotocomentcontainer.appendChild(clickAndUploadContainer);
            sharephotocomentcontainer.appendChild(subactions);
            clickAndUploadContainer.appendChild(newphotolabel);
            clickAndUploadContainer.appendChild(newvideolabel);
            subactions.appendChild(caption);
            subactions.appendChild(sharephotosend);
            subactions.appendChild(sharevideosend);
            header.appendChild(photoexit);
            header.appendChild(popup_Names_Container);
            newphotolabel.appendChild(firstImg);
            newvideolabel.appendChild(secondImg);
            newphotolabel.appendChild(firsttext);
            newvideolabel.appendChild(secondtext);

            firsttext.textContent = 'photo';
            secondtext.textContent = 'video';

            firstImg.src = 'icons/image(0).png';
            secondImg.src = 'icons/youtube.png';
            popup_Names_Container.appendChild(Names_title);
            Names_title.textContent = 'Media Comment';
            caption.appendChild(captioninput);
            shareimagecontainer.appendChild(shareimg);
            sharevideosend.style.display = 'none';

            newphotolabel.addEventListener('click', () => {
                sharevideosend.style.display = 'none';
                sharevideocontainer.style.display = 'none';
                sharephotosend.style.display = 'block';
                shareimagecontainer.style.display = 'flex';
            });
            newvideolabel.addEventListener('click', () => {
                sharevideosend.style.display = 'block';
                sharevideocontainer.style.display = 'flex';
                sharephotosend.style.display = 'none';
                shareimagecontainer.style.display = 'none';
            });
            //classlist 
            photoexit.innerHTML = '&LeftArrow;';
            photoexit.classList.add('photoexit');
            newphotolabel.classList.add('newphotolabel');
            newvideolabel.classList.add('newphotolabel');
            sharephotocomentcontainer.classList.add('post_making_upload_popup');
            sharephotocomentcontainer.classList.add('sharephotocomentcontainer');
            caption.classList.add('caption');
            shareimagecontainer.classList.add('shareimagecontainer');
            captioninput.setAttribute(`placeholder`, 'add caption');


            sharevideocontainer.classList.add('shareimagecontainer');
            sharevideosend.textContent = 'send video';
            sharephotosend.textContent = 'send photo';


            sharephotosend.classList.add('sharephotosend');
            sharevideosend.classList.add('sharephotosend');


            sharegridphotoo.addEventListener('click', () => {
                sharephotocomentcontainer.style.display = 'flex';
            });

            photoexit.addEventListener('click', () => {
                sharephotocomentcontainer.style.display = 'none';
            });

            function executephoto() {
                let pcommentreader = new FileReader();
                pcommentreader.readAsDataURL(sharephotolabelinput.files[0]);
                pcommentreader.onload = function () {
                    shareimg.src = pcommentreader.result;
                }
            };

            function executevideo() {
                let vcommentreader = new FileReader();
                vcommentreader.readAsDataURL(sharevideolabelinput.files[0]);
                vcommentreader.onload = function () {
                    sharevideo.src = vcommentreader.result;
                }
            };
            sharephotocomentcontainer.id = photo.id;
            captioninput.id = photo.id;

            photoexit.classList.add('photoexit');

            sharephotocomentcontainer.classList.add('sharephotocomentcontainer');
            caption.classList.add('caption');
            shareimagecontainer.classList.add('shareimagecontainer');

            function Set_This_Items() {
                function pushNotification(caption, id) {
                    ActiveUser_Account.forEach(data => {
                        if (data.user_Id !== photo.posterId) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    user.user_NotificationView = false;
                                    let Notifications = user.user_Notifications;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    function filterNotification() {
                                        Notifications = Notifications.filter(notification => {
                                            if (notification.type == 'comment' && notification.postId === photo.id) {
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        });
                                        user.user_Notifications = Notifications;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        notificationPusher();
                                    }
                                    function notificationPusher() {
                                        Notifications.push({
                                            type: 'comment',
                                            notificationId: data.user_Id,
                                            id: id,
                                            caption: caption,
                                            trackingId: photo.posterId,
                                            postId: photo.id,
                                            posterId: data.user_Id,
                                            notification_Count: 0,
                                            time: new Date().getTime(),
                                            date: trackingDate,
                                            notification_isChecked: false,
                                            notification_View: false,
                                        });
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                    filterNotification();
                                    return true;
                                }
                            });
                        }
                    });
                }

                function pushMediaComments(type, Property_Src) {
                    const id = '' + new Date().getTime();
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                            Feeds_Data_Base.forEach(feed => {
                                if (feed.id === photo.id) {
                                    let comments = feed.comments;
                                    if (Property_Src) {
                                        comments.push({
                                            type: type,
                                            Property_Src: Property_Src,
                                            caption: captioninput.value,
                                            postId: feed.id,
                                            posterId: data.user_Id,
                                            id: id,
                                            inputId: Property_Src.id,
                                            time: new Date().getTime(),
                                            date: trackingDate,
                                            commentcount: 0,
                                            likecount: 0,
                                            likes: [],
                                            comments: []
                                        });
                                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                        pushNotification(data.user_Id, feed.id, feed.title, id);
                                    }
                                    function createLiveCount() {
                                        document.querySelectorAll('.gridcommentcount').forEach(count => {
                                            if (count.id === feed.id) {
                                                count.textContent = feed.comments.length;
                                            }
                                        });
                                        document.querySelectorAll('.livecommentcount').forEach(count => {
                                            if (count.id === feed.id) {
                                                count.textContent = feed.comments.length;
                                            }
                                        });
                                    }
                                    createLiveCount();
                                }
                            });
                        });
                    }
                }

                newcommentinputinputsend.addEventListener('click', () => {
                    if (newcommentinputinput.value) {
                        set_Comment_Data(photo.id, newcommentinputinput.value);
                        CreationOfComments();
                        newcommentinputinput.value = '';
                    }
                });
                sharephotosend.addEventListener('click', () => {
                    if (shareimg.src) {
                        pushMediaComments('photo', shareimg.src);
                        CreationOfComments();
                        captioninput.value = '';
                        sharephotocomentcontainer.style.display = 'none';
                    }
                });
                sharevideosend.addEventListener('click', () => {
                    if (sharevideo.src) {
                        commentsection.innerHTML = '';
                        pushMediaComments('video', sharevideo.src);
                        CreationOfComments();
                        captioninput.value = '';
                        sharephotocomentcontainer.style.display = 'none';
                    }
                });
            }
            Set_This_Items();
        }

        let sharegrid = document.createElement('div');
        let sharegridviewimg = document.createElement('img');
        let sharegridlikeimg = document.createElement('img');
        let sharegridshareimg = document.createElement('img');
        let sharegridphoto = document.createElement('img');

        let sharegridview = document.createElement('div');
        let sharegridlike = document.createElement('div');
        let sharegridshare = document.createElement('div');
        let sharegridphotoo = document.createElement('div');


        let commentsectioncontainer = document.createElement('nav');
        let commentmovebackward = document.createElement('span');
        let commentsection = document.createElement('div');
        let commentattachmenticon = document.createElement('div');
        let commentattachImg = document.createElement('img');

        let newcommentinput = document.createElement('div');
        let newcommentinputinput = document.createElement('input');
        let newcommentinputinputsend = document.createElement('div');
        let sendimg = document.createElement('img');
        newcommentinputinputsend.appendChild(sendimg);
        sendimg.src = 'icons/send.png';
        commentattachmenticon.appendChild(commentattachImg);
        commentattachImg.src = 'icons/discover.png';
        newcommentinputinputsend.classList.add('headerbtns');
        commentattachmenticon.classList.add('headerbtns');

        let actitionbtnscontainer = document.createElement('div');
        let commentactiongrid = document.createElement('div');
        let commentrefreshbtn = document.createElement('span');
        commentrefreshbtn.innerHTML = '&circlearrowright;';
        commentmovebackward.innerHTML = '&LeftArrow;';
        commentrefreshbtn.addEventListener('click', () => {
            reloadLocation();
        });
        function reloadLocation() {
            commentsection.innerHTML = '';
            let commentsectionreloadloader = document.createElement('div');
            commentsectioncontainer.appendChild(commentsectionreloadloader);
            commentsectionreloadloader.classList.add('commentsectionreloadloader');
            setTimeout(() => {
                CreationOfComments();
                commentsectionreloadloader.remove();
            }, 2000);
        }
        //popup

        createShare_Photo_Popup();

        commentsection.id = photo.id;
        commentsectioncontainer.id = photo.id;
        newcommentinputinput.id = photo.id;
        if (Array.isArray(ActiveAccount)) {
            ActiveUser_Account = ActiveAccount;
            ActiveUser_Account.forEach(data => {
                sharegridlike.id = data.user_Id + photo.id;
            });
        }

        commentsection.classList.add('commentsection');

        commentsectioncontainer.classList.add('commentsectioncontainer');
        newcommentinput.classList.add('newcommentinput');

        actitionbtnscontainer.appendChild(commentmovebackward);
        actitionbtnscontainer.appendChild(commentrefreshbtn);
        commentactiongrid.appendChild(actitionbtnscontainer);
        commentactiongrid.appendChild(sharegrid);
        commentactiongrid.classList.add('commentactiongrid');
        document.body.appendChild(commentsectioncontainer);
        commentsectioncontainer.appendChild(commentactiongrid);
        commentsectioncontainer.appendChild(commentsection);
        commentsectioncontainer.appendChild(newcommentinput);

        sharegrid.appendChild(sharegridview);
        sharegrid.appendChild(sharegridlike);
        sharegrid.appendChild(sharegridphotoo);
        sharegrid.appendChild(sharegridshare)

        sharegridlike.classList.add('headerbtns');
        sharegridshare.classList.add('headerbtns');
        sharegridphotoo.classList.add('headerbtns');
        sharegridview.classList.add('headerbtns');
        commentmovebackward.classList.add('headerbtns');
        commentrefreshbtn.classList.add('headerbtns');

        sharegridview.classList.add('sharegridlike');
        sharegridlike.classList.add('sharegridlike');
        sharegridshare.classList.add('sharegridlike');
        sharegridphotoo.classList.add('sharegridlike');
        commentmovebackward.classList.add('sharegridlike');
        commentrefreshbtn.classList.add('sharegridlike');

        sharegridlike.appendChild(sharegridlikeimg);
        sharegridshare.appendChild(sharegridshareimg);
        sharegridphotoo.appendChild(sharegridphoto);
        sharegridview.appendChild(sharegridviewimg);

        sharegridviewimg.src = 'icons/focus.png';
        sharegridlikeimg.src = 'icons/like(0).png';
        sharegridshareimg.src = 'icons/share (1).png';
        sharegridphoto.src = 'icons/image(0).png';

        actitionbtnscontainer.classList.add('actitionbtnscontainer');
        sharegrid.classList.add('sharegrid');

        newcommentinput.appendChild(newcommentinputinput);
        newcommentinput.appendChild(commentattachmenticon);
        newcommentinput.appendChild(newcommentinputinputsend);
        newcommentinputinput.setAttribute(`placeholder`, 'Add Comment');

        commentmovebackward.innerHTML = '&LeftArrow;';
        commentattachmenticon.addEventListener('click', () => {
            sharegrid.classList.toggle('sharegridactive');
        });

        commentmovebackward.addEventListener('click', () => {
            sessionStorage.setItem('activepage', 'home');
            commentsectioncontainer.classList.toggle('commentsectioncontaineractive');
        });
        sharegridlike.addEventListener('click', () => {
            makeLike();
        });
        sharegridview.addEventListener('click', () => {
            View_The_Post(photo.id);
            commentsectioncontainer.classList.toggle('commentsectioncontaineractive');
        });
        sharegridshare.addEventListener('click', () => {
            document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
                if (popup.id === photo.id) {
                    popup.style.display = 'flex';
                }
            });
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
            const id = '' + new Date().getTime();
            sharegridlike.classList.add('sharegridliked');
            sharegridlike.classList.remove('sharegridlike');
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
            sharegridlike.classList.remove('sharegridliked');
            sharegridlike.classList.add('sharegridlike');
            Unlike_Post(photo.id);
            createlikesrecordlist();
        }
        function makeLike() {
            if (sharegridlike.classList.contains('sharegridlike')) {
                decideRight();
            } else if (sharegridlike.classList.contains('sharegridliked')) {
                decideLeft();
            }
        }
        function getIconsOnDarkMode() {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            if (Array.isArray(ActiveAccount)) {
                ActiveUser_Account = ActiveAccount;
                ActiveUser_Account.forEach(data => {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === data.user_Id) {
                            if (user.user_Mode == 'defaultTheme') {
                                sharegridviewimg.classList.remove('darkmodeicons');
                                sharegridlikeimg.classList.remove('darkmodeicons');
                                sharegridshareimg.classList.remove('darkmodeicons');
                                sharegridphoto.classList.remove('darkmodeicons');
                                commentattachmenticon.classList.remove('darkmodeicons');

                                newcommentinputinputsend.classList.remove('darkmodeicons');
                            } else {
                                sharegridviewimg.classList.add('darkmodeicons');
                                sharegridlikeimg.classList.add('darkmodeicons');
                                sharegridshareimg.classList.add('darkmodeicons');
                                sharegridphoto.classList.add('darkmodeicons');
                                commentattachmenticon.classList.add('darkmodeicons');

                                newcommentinputinputsend.classList.add('darkmodeicons');
                            }
                        }
                    });
                });
            }
        }
        getIconsOnDarkMode();

        function showOnAndOffActivities() {
            if (photo.shareactive === false) {
                sharegridshare.remove();
            } if (photo.commentactive === false) {
                newcommentinput.remove();
                sharegridphotoo.remove();
            } if (photo.likeactive === false) {
                sharegridlike.remove();
            }
        }
        showOnAndOffActivities();
        function LikePopupsAndMore() {
            let likerecorderpopupheader = document.createElement('header');
            let likerecordpopup = document.createElement('nav');
            let likerecordcolumn = document.createElement('div');
            let likerecorderexit = document.createElement('span');
            document.body.appendChild(likerecordpopup);
            likerecordpopup.appendChild(likerecorderpopupheader);
            likerecordpopup.appendChild(likerecordcolumn);
            likerecorderpopupheader.appendChild(likerecorderexit);
            likerecorderexit.innerHTML = '&LeftArrow;';
            likerecorderpopupheader.classList.add('likerecorderpopupheader');
            likerecorderexit.classList.add('likerecorderexit');
            likerecorderexit.classList.add('Exitpage_Arrow');
            likerecordpopup.classList.add('likerecordpopup');
            likerecordcolumn.classList.add('likerecordcolumn');
            likerecorderexit.addEventListener('click', () => {
                likerecordpopup.style.display = 'none';
            });
            likerecordpopup.id = photo.id;
            likerecordcolumn.id = photo.id;
        }
        LikePopupsAndMore();
        function checkIfPostIsLiked() {
            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                ActiveUser_Account.forEach(data => {
                    let likes = photo.likes;
                    likes.forEach(like => {
                        if (like.id === data.user_Id + photo.id) {
                            sharegridlike.classList.add('sharegridliked');
                            sharegridlike.classList.remove('sharegridlike');
                        }
                    });
                });
            }
        }
        checkIfPostIsLiked();
    });
}

function like_Post(postId, caption, id, posterId, type, target) {
    function pushLikeLicense(postId) {
        if (LogInFormData) {
            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                ActiveUser_Account.forEach(data => {
                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                    Feeds_Data_Base.forEach(feed => {
                        if (feed.id === postId) {
                            let likes = feed.likes;
                            const id = '' + new Date().getTime();
                            likes.push({
                                postId: postId,
                                posterId: data.user_Id,
                                id: data.user_Id + postId,
                                time: new Date().getTime(),
                                date: trackingDate
                            });
                            document.querySelectorAll('.live_Like_Counters').forEach(count => {
                                if (count.id === postId) {
                                    count.textContent = likes.length;
                                }
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        }
                    });
                });
            }
        }
    }
    pushLikeLicense(postId);
    function pushNotification(caption, id, postId, posterId, type, target) {
        ActiveUser_Account.forEach(data => {
            if (data.user_Id !== posterId) {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === posterId) {
                        let Notifications = user.user_Notifications;
                        function filterNotification() {
                            Notifications = Notifications.filter(notification => {
                                if (notification.type == type && notification.postId === postId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_Notifications = Notifications;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            notificationPusher();
                        }
                        function notificationPusher() {
                            Notifications.push({
                                type: type,
                                target: target,
                                notificationId: data.user_Id,
                                id: id,
                                caption: caption,
                                trackingId: posterId,
                                postId: postId,
                                posterId: data.user_Id,
                                notification_Count: 0,
                                time: new Date().getTime(),
                                date: trackingDate,
                                notification_isChecked: false,
                                notification_View: false,
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                        filterNotification();
                        return true;
                    }
                });
            }
        });
    }
    pushNotification(caption, id, postId, posterId, type, target);
}
function Unlike_Post(postId) {
    function removeLicense(postId) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    if (feed.id === postId) {
                        let likes = feed.likes;
                        likes = likes.filter(like => {
                            if (like.id === data.user_Id + postId) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        feed.likes = likes;
                        document.querySelectorAll('.live_Like_Counters').forEach(count => {
                            if (count.id === postId) {
                                count.textContent = likes.length;
                            }
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    }
                });
            });
        }
    }
    removeLicense(postId)
}