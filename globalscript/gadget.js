function create_share_Popup(locationId) {
    document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === locationId) {
            function shareNotification(id, isStory, caption) {
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
                    popup.style.display = 'none';
                });
            }
            function Web_Share(title, text, url) {
                if (navigator.share) {
                    const share_DataBase = {
                        title: title,
                        text: text,
                        url: url
                    };
                    navigator.share(share_DataBase)
                        .then(() => {
                            create_Message('Shared Successfully');
                            document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
                                popup.style.display = 'none';
                            });
                        }).catch(err => {
                            create_Message(err);
                        })
                }
            }
            if (photo.type == 'timeline') {
                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');
                    let option_Name6_HeaderBtns = document.createElement('div');
                    let option_Name7_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;

                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = feedsvg;
                    option_Name3_HeaderBtns.innerHTML = crimesvg;
                    option_Name4_HeaderBtns.innerHTML = advertsvg;
                    option_Name5_HeaderBtns.innerHTML = imagesvg;
                    option_Name6_HeaderBtns.innerHTML = moresvg;
                    option_Name7_HeaderBtns.innerHTML = medicalreportsvg;

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);
                    option_First_Child6.appendChild(option_Name6_HeaderBtns);
                    option_First_Child7.appendChild(option_Name7_HeaderBtns);

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);
                    option_Name5_HeaderBtns.appendChild(option_Name5);
                    option_Name6_HeaderBtns.appendChild(option_Name6);
                    option_Name7_HeaderBtns.appendChild(option_Name7);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');
                    option_Name6_HeaderBtns.classList.add('headerbtns');
                    option_Name7_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');
                    option_Name5.classList.add('toolpit');
                    option_Name6.classList.add('toolpit');
                    option_Name7.classList.add('toolpit');

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                        function pushShareToAdverts() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            option_First_Child6.addEventListener('click', () => {
                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`
                                Web_Share('lavinsta', photo.title, url);
                            });
                            option_First_Child7.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child7.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isVideo) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = feedsvg;
                    option_Name3_HeaderBtns.innerHTML = stopwatchsvg;
                    option_Name4_HeaderBtns.innerHTML = moresvg;
                    option_Name5_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);
                    option_Name5_HeaderBtns.appendChild(option_Name5);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');
                    option_Name5.classList.add('toolpit');


                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'add to short';
                    option_Name4.textContent = 'advance';
                    option_Name5.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
                                                sharecount: 0,
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
                            option_First_Child4.addEventListener('click', () => {

                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`
                                Web_Share('lavinsta', photo.title, url);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child5.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isText) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_headerBtns = document.createElement('div');
                    let option_Name3_headerBtns = document.createElement('div');
                    let option_Name4_headerBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_headerBtns);
                    option_First_Child3.appendChild(option_Name3_headerBtns);
                    option_First_Child4.appendChild(option_Name4_headerBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_headerBtns.innerHTML = feedsvg;
                    option_Name3_headerBtns.innerHTML = moresvg;
                    option_Name4_headerBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_headerBtns.appendChild(option_Name2);
                    option_Name3_headerBtns.appendChild(option_Name3);
                    option_Name4_headerBtns.appendChild(option_Name4);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_headerBtns.classList.add('headerbtns');
                    option_Name3_headerBtns.classList.add('headerbtns');
                    option_Name4_headerBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            option_First_Child3.addEventListener('click', () => {
                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`;
                                Web_Share(photo.title, photo.Property_Src, url);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child4.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            } if (photo.type == 'public') {
                if (photo.isPhoto) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');
                    let option_Name6_HeaderBtns = document.createElement('div');
                    let option_Name7_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);
                    option_First_Child6.appendChild(option_Name6_HeaderBtns);
                    option_First_Child7.appendChild(option_Name7_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = homesvg;
                    option_Name3_HeaderBtns.innerHTML = crimesvg;
                    option_Name4_HeaderBtns.innerHTML = advertsvg;
                    option_Name5_HeaderBtns.innerHTML = imagesvg;
                    option_Name6_HeaderBtns.innerHTML = moresvg;
                    option_Name7_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);
                    option_Name5_HeaderBtns.appendChild(option_Name5);
                    option_Name6_HeaderBtns.appendChild(option_Name6);
                    option_Name7_HeaderBtns.appendChild(option_Name7);

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');
                    option_Name6_HeaderBtns.classList.add('headerbtns');
                    option_Name7_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');
                    option_Name5.classList.add('toolpit');
                    option_Name6.classList.add('toolpit');
                    option_Name7.classList.add('toolpit');


                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            option_First_Child6.addEventListener('click', () => {

                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`
                                Web_Share('lavinsta', photo.title, url);
                            });
                            option_First_Child7.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child7.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isVideo) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = homesvg;
                    option_Name3_HeaderBtns.innerHTML = stopwatchsvg;
                    option_Name4_HeaderBtns.innerHTML = moresvg;
                    option_Name5_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);
                    option_Name5_HeaderBtns.appendChild(option_Name5);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');
                    option_Name5.classList.add('toolpit');

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'add to short';
                    option_Name4.textContent = 'advance';
                    option_Name5.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            const id = '' + new Date().getTime();
                                            Feeds_Data_Base.push({
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            option_First_Child4.addEventListener('click', () => {

                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`
                                Web_Share('lavinsta', photo.title, url);
                            });
                            option_First_Child5.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child5.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isShort) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = feedsvg;
                    option_Name3_HeaderBtns.innerHTML = moresvg;
                    option_Name4_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
                                                views: [],
                                                sharecount: 0,
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
                            option_First_Child3.addEventListener('click', () => {

                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`
                                Web_Share('lavinsta', photo.title, url);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child4.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                } if (photo.isText) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = recreatesvg;
                    option_Name2_HeaderBtns.innerHTML = homesvg;
                    option_Name3_HeaderBtns.innerHTML = moresvg;
                    option_Name4_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);

                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');

                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'repost';
                    option_Name2.textContent = 'add to timeline';
                    option_Name3.textContent = 'advance';
                    option_Name4.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            option_First_Child3.addEventListener('click', () => {
                                let url = document.createElement('a');
                                url.href = `view.html?Post_Id=${photo.id}`;
                                Web_Share(photo.title, photo.Property_Src, url);
                            });
                            option_First_Child4.addEventListener('click', (event) => {
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child4.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            } if (photo.type == 'other') {
                if (photo.isPhoto || photo.isAdvert || photo.isCrime) {
                    let option_First_Child = document.createElement('span');
                    let postshare_Pop_up = document.createElement('div');
                    let postshare_Popup_Column = document.createElement('div');

                    let option_First_Child1 = document.createElement('span');
                    let option_First_Child2 = document.createElement('span');
                    let option_First_Child3 = document.createElement('span');
                    let option_First_Child4 = document.createElement('span');
                    let option_First_Child5 = document.createElement('span');
                    let option_First_Child6 = document.createElement('span');
                    let option_First_Child7 = document.createElement('span');

                    let option_Name = document.createElement('span');
                    let option_Name1 = document.createElement('span');
                    let option_Name2 = document.createElement('span');
                    let option_Name3 = document.createElement('span');
                    let option_Name4 = document.createElement('span');
                    let option_Name5 = document.createElement('span');
                    let option_Name6 = document.createElement('span');
                    let option_Name7 = document.createElement('span');

                    let option_Name_headerBtns = document.createElement('div');
                    let option_Name1_headerBtns = document.createElement('div');
                    let option_Name2_HeaderBtns = document.createElement('div');
                    let option_Name3_HeaderBtns = document.createElement('div');
                    let option_Name4_HeaderBtns = document.createElement('div');
                    let option_Name5_HeaderBtns = document.createElement('div');
                    let option_Name6_HeaderBtns = document.createElement('div');
                    let option_Name7_HeaderBtns = document.createElement('div');

                    postshare_Pop_up.id = photo.id;
                    postshare_Popup_Column.appendChild(option_First_Child);
                    postshare_Popup_Column.appendChild(option_First_Child1);
                    postshare_Popup_Column.appendChild(option_First_Child2);
                    postshare_Popup_Column.appendChild(option_First_Child3);
                    postshare_Popup_Column.appendChild(option_First_Child4);
                    postshare_Popup_Column.appendChild(option_First_Child5);
                    postshare_Popup_Column.appendChild(option_First_Child6);
                    postshare_Popup_Column.appendChild(option_First_Child7);

                    option_First_Child.appendChild(option_Name_headerBtns);
                    option_First_Child1.appendChild(option_Name1_headerBtns);
                    option_First_Child2.appendChild(option_Name2_HeaderBtns);
                    option_First_Child3.appendChild(option_Name3_HeaderBtns);
                    option_First_Child4.appendChild(option_Name4_HeaderBtns);
                    option_First_Child5.appendChild(option_Name5_HeaderBtns);
                    option_First_Child6.appendChild(option_Name6_HeaderBtns);
                    option_First_Child7.appendChild(option_Name7_HeaderBtns);

                    option_Name_headerBtns.innerHTML = undo;
                    option_Name1_headerBtns.innerHTML = homesvg;
                    option_Name2_HeaderBtns.innerHTML = feedsvg;
                    option_Name3_HeaderBtns.innerHTML = crimesvg;
                    option_Name4_HeaderBtns.innerHTML = advertsvg
                    option_Name5_HeaderBtns.innerHTML = imagesvg;
                    option_Name6_HeaderBtns.innerHTML = moresvg;
                    option_Name7_HeaderBtns.innerHTML = medicalreportsvg;

                    option_Name_headerBtns.appendChild(option_Name);
                    option_Name1_headerBtns.appendChild(option_Name1);
                    option_Name2_HeaderBtns.appendChild(option_Name2);
                    option_Name3_HeaderBtns.appendChild(option_Name3);
                    option_Name4_HeaderBtns.appendChild(option_Name4);
                    option_Name5_HeaderBtns.appendChild(option_Name5);
                    option_Name6_HeaderBtns.appendChild(option_Name6);
                    option_Name7_HeaderBtns.appendChild(option_Name7);


                    option_Name_headerBtns.classList.add('headerbtns');
                    option_Name1_headerBtns.classList.add('headerbtns');
                    option_Name2_HeaderBtns.classList.add('headerbtns');
                    option_Name3_HeaderBtns.classList.add('headerbtns');
                    option_Name4_HeaderBtns.classList.add('headerbtns');
                    option_Name5_HeaderBtns.classList.add('headerbtns');
                    option_Name6_HeaderBtns.classList.add('headerbtns');
                    option_Name7_HeaderBtns.classList.add('headerbtns');

                    option_Name.classList.add('toolpit');
                    option_Name1.classList.add('toolpit');
                    option_Name2.classList.add('toolpit');
                    option_Name3.classList.add('toolpit');
                    option_Name4.classList.add('toolpit');
                    option_Name5.classList.add('toolpit');
                    option_Name6.classList.add('toolpit');
                    option_Name7.classList.add('toolpit');


                    option_Name.textContent = 'exit';
                    option_Name1.textContent = 'add to timeline';
                    option_Name2.textContent = 'add to feeds';
                    option_Name3.textContent = 'add to crime';
                    option_Name4.textContent = 'add to advert';
                    option_Name5.textContent = 'add to photo';
                    option_Name6.textContent = 'advance';
                    option_Name7.textContent = 'report post';

                    document.body.appendChild(postshare_Pop_up);
                    postshare_Pop_up.appendChild(postshare_Popup_Column);
                    postshare_Pop_up.classList.add('postshare_Pop_up');
                    option_First_Child.addEventListener('click', () => {
                        postshare_Pop_up.remove();
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                                                likes: [],
                                                comments: [],
                                                shares: [],
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
                                create_reportScript(photo.id);
                            });
                        }
                        event_Listeners();
                        function RulesActivities() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Id === photo.posterId) {
                                        option_First_Child7.remove();
                                    }
                                });
                            }
                        }
                        RulesActivities();
                    }
                    share_Activities();
                }
            }
        }
    });
}

function create_Comment_room(locationId) {
    document.querySelectorAll('.commentsectioncontaineractive').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === locationId) {
            let sharegrid = document.createElement('div');

            let commentsectioncontainer = document.createElement('nav');
            let commentmovebackward = document.createElement('span');
            let commentsection = document.createElement('div');
            let commentattachmenticon = document.createElement('div');

            let newcommentinput = document.createElement('div');
            let newcommentinputinput = document.createElement('input');
            let newcommentinputinputsend = document.createElement('div');
            function create_Options_Script() {
                let options = document.createElement('div');
                let exit = document.createElement('span');

                let sharegridview = document.createElement('a');
                let sharegridlike = document.createElement('div');
                let sharegridshare = document.createElement('div');
                let sharegridphotoo = document.createElement('div');

                commentsection.insertAdjacentElement("afterend", options);
                options.appendChild(exit);
                options.appendChild(sharegridview);
                options.appendChild(sharegridlike);
                options.appendChild(sharegridshare);
                options.appendChild(sharegridphotoo);

                exit.innerHTML = undo2;
                sharegridlike.innerHTML = likesvg;
                sharegridshare.innerHTML = sharesvg;
                sharegridphotoo.innerHTML = createsvg;
                sharegridview.innerHTML = focussvg;
                if (photo.isVideo || photo.isShort) {
                    sharegridview.href = `view.html?video_Id=${photo.id}`;
                } else {
                    sharegridview.href = `view.html?Post_Id=${photo.id}`;
                }

                sharegridview.classList.add('headerbtns');
                sharegridlike.classList.add('headerbtns');
                sharegridshare.classList.add('headerbtns');
                sharegridphotoo.classList.add('headerbtns');
                sharegridview.classList.add('sharegridlike');
                sharegridlike.classList.add('sharegridlike');
                sharegridshare.classList.add('sharegridlike');
                sharegridphotoo.classList.add('sharegridlike');
                exit.classList.add('headerbtns');

                options.classList.add('options');
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
                sharegridlike.addEventListener('click', () => {
                    makeLike();
                });
                sharegridview.addEventListener('click', () => {
                    createMain_GridPost(photo.id, photo.Property_Src);
                    commentsectioncontainer.classList.toggle('commentsectioncontaineractive');
                });
                sharegridphotoo.addEventListener('click', () => {
                    Media_Comment_Popup(photo.id, photo.posterId);
                });
                sharegridshare.addEventListener('click', () => {
                    create_share_Popup(photo.id);
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
                    sharegridlike.classList.add('sharegridliked');
                    sharegridlike.classList.remove('sharegridlike');
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
                    sharegridlike.classList.remove('sharegridliked');
                    sharegridlike.classList.add('sharegridlike');
                    Unlike_Post(photo.id);
                }
                function makeLike() {
                    if (sharegridlike.classList.contains('sharegridlike')) {
                        decideRight();
                    } else if (sharegridlike.classList.contains('sharegridliked')) {
                        decideLeft();
                    }
                }
                function showOnAndOffActivities() {
                    if (photo.shareactive === false) {
                        sharegridshare.remove();
                    } if (photo.commentactive === false) {
                        sharegridphotoo.remove();
                    } if (photo.likeactive === false) {
                        sharegridlike.remove();
                    }
                }
                showOnAndOffActivities();
                exit.addEventListener('click', () => {
                    options.remove();
                });
            }
            newcommentinputinputsend.innerHTML = sendsvg;
            commentattachmenticon.innerHTML = moresvg;
            newcommentinputinputsend.classList.add('headerbtns');
            commentattachmenticon.classList.add('headerbtns');

            let actitionbtnscontainer = document.createElement('div');
            let commentactiongrid = document.createElement('div');
            let commentrefreshbtn = document.createElement('span');
            commentmovebackward.innerHTML = undo;
            commentrefreshbtn.innerHTML = recreatesvg;
            commentrefreshbtn.addEventListener('click', () => {
                reloadLocation();
            });
            function reloadLocation() {
                let commentsectionreloadloader = document.createElement('div');
                commentsectioncontainer.appendChild(commentsectionreloadloader);
                commentsectionreloadloader.classList.add('commentsectionreloadloader');
                setTimeout(() => {
                    CreationOfComments(commentsection, locationId);
                    commentsectionreloadloader.remove();
                }, 2000);
            }

            commentsection.id = photo.id;
            commentsectioncontainer.id = photo.id;
            newcommentinputinput.id = photo.id;

            commentsection.classList.add('commentsection');

            commentsectioncontainer.classList.add('commentsectioncontainer');
            commentsectioncontainer.classList.add('commentsectioncontaineractive');

            newcommentinput.classList.add('newcommentinput');

            actitionbtnscontainer.appendChild(commentmovebackward);
            actitionbtnscontainer.appendChild(commentrefreshbtn);
            commentactiongrid.appendChild(actitionbtnscontainer);
            commentactiongrid.classList.add('commentactiongrid');
            document.body.appendChild(commentsectioncontainer);
            commentsectioncontainer.appendChild(commentactiongrid);
            commentsectioncontainer.appendChild(commentsection);
            commentsectioncontainer.appendChild(newcommentinput);
            commentmovebackward.classList.add('headerbtns');
            commentrefreshbtn.classList.add('headerbtns');

            commentmovebackward.classList.add('sharegridlike');
            commentrefreshbtn.classList.add('sharegridlike');

            actitionbtnscontainer.classList.add('actitionbtnscontainer');

            newcommentinput.appendChild(newcommentinputinput);
            newcommentinput.appendChild(commentattachmenticon);
            newcommentinput.appendChild(newcommentinputinputsend);
            newcommentinputinput.setAttribute(`placeholder`, 'Add Comment');

            commentattachmenticon.addEventListener('click', () => {
                sharegrid.classList.toggle('sharegridactive');
                create_Options_Script();
            });

            commentmovebackward.addEventListener('click', () => {
                sessionStorage.setItem('activepage', 'home');
                commentsectioncontainer.classList.toggle('commentsectioncontaineractive');
            });

            newcommentinputinputsend.addEventListener('click', () => {
                if (newcommentinputinput.value) {
                    set_Comment_Data(photo.id, newcommentinputinput.value);
                    CreationOfComments(commentsection, locationId);
                    newcommentinputinput.value = '';
                }
            });

            function showOnAndOffActivities() {
                if (photo.commentactive === false) {
                    newcommentinput.remove();
                }
            }
            showOnAndOffActivities();
            CreationOfComments(commentsection, locationId);
            external_loader(commentsection);
        }
    });
}
function Media_Comment_Popup(locationId, posterId) {
    document.querySelectorAll('.mediacommentspopup').forEach(popup => {
        popup.remove();
    });
    let sharephotolabelinput = document.createElement('input');
    let sharevideolabelinput = document.createElement('input');

    let mediacommentspopup = document.createElement('div');
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

    sharephotolabelinput.id = locationId + 'Xfr_OxYP';
    sharevideolabelinput.id = locationId + 'Xfr_OxYV';
    const thephotoid = sharephotolabelinput.id;
    const thevideoid = sharevideolabelinput.id;
    document.body.appendChild(mediacommentspopup);
    mediacommentspopup.appendChild(sharephotolabelinput);
    mediacommentspopup.appendChild(sharevideolabelinput);
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
    let firsttext = document.createElement('span');
    let secondtext = document.createElement('span');
    uploadpreviewcontainer.classList.add('uploadpreviewcontainer');
    clickAndUploadContainer.classList.add('clickAndUploadContainer');
    mediacommentspopup.appendChild(header);
    mediacommentspopup.appendChild(uploadpreviewcontainer);
    uploadpreviewcontainer.appendChild(shareimagecontainer);
    uploadpreviewcontainer.appendChild(sharevideocontainer);
    sharevideocontainer.appendChild(sharevideo);
    subactions.classList.add('subactions');
    popup_Names_Container.classList.add('popup_Names_Container');
    mediacommentspopup.appendChild(clickAndUploadContainer);
    mediacommentspopup.appendChild(subactions);
    clickAndUploadContainer.appendChild(newphotolabel);
    clickAndUploadContainer.appendChild(newvideolabel);
    subactions.appendChild(caption);
    subactions.appendChild(sharephotosend);
    subactions.appendChild(sharevideosend);
    header.appendChild(photoexit);
    header.appendChild(popup_Names_Container);
    newphotolabel.innerHTML = imagesvg;
    newvideolabel.innerHTML = videosvg;
    newphotolabel.appendChild(firsttext);
    newvideolabel.appendChild(secondtext);

    photoexit.innerHTML = undo;
    photoexit.classList.add('headerbtns');
    firsttext.textContent = 'photo';
    secondtext.textContent = 'video';


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

    newphotolabel.classList.add('newphotolabel');
    newvideolabel.classList.add('newphotolabel');
    mediacommentspopup.classList.add('post_making_upload_popup');
    mediacommentspopup.classList.add('mediacommentspopup');
    caption.classList.add('caption');
    shareimagecontainer.classList.add('shareimagecontainer');
    captioninput.setAttribute(`placeholder`, 'add caption');

    sharevideocontainer.classList.add('shareimagecontainer');
    sharevideosend.textContent = 'send video';
    sharephotosend.textContent = 'send photo';


    sharephotosend.classList.add('sharephotosend');
    sharevideosend.classList.add('sharephotosend');

    photoexit.addEventListener('click', () => {
        mediacommentspopup.remove();
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
    mediacommentspopup.id = locationId;
    captioninput.id = locationId;

    caption.classList.add('caption');
    shareimagecontainer.classList.add('shareimagecontainer');
    function Set_This_Items() {
        function pushNotification(caption, id) {
            ActiveUser_Account.forEach(data => {
                if (data.user_Id !== posterId) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === posterId) {
                            user.user_NotificationView = false;
                            let Notifications = user.user_Notifications;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            function filterNotification() {
                                Notifications = Notifications.filter(notification => {
                                    if (notification.type == 'comment' && notification.postId === locationId) {
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
                                    trackingId: posterId,
                                    postId: locationId,
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
                        if (feed.id === locationId) {
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
                            document.querySelectorAll('.commentsection').forEach(section => {
                                if (section.id === locationId) {
                                    CreationOfComments(section, locationId);
                                } else {
                                    CreationOfComments(locationId);
                                }
                            });
                        }
                    });
                });
            }
        }

        sharephotosend.addEventListener('click', () => {
            if (shareimg.src) {
                pushMediaComments('photo', shareimg.src);
                captioninput.value = '';
                mediacommentspopup.remove();
            }
        });
        sharevideosend.addEventListener('click', () => {
            if (sharevideo.src) {
                pushMediaComments('video', sharevideo.src);
                captioninput.value = '';
                mediacommentspopup.remove();
            }
        });
    }
    Set_This_Items();
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
                            likes.push({
                                postId: postId,
                                posterId: data.user_Id,
                                id: data.user_Id + postId,
                                time: new Date().getTime(),
                                date: trackingDate
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            document.querySelectorAll('.live_Like_Counters').forEach(count => {
                                if (count.id === postId) {
                                    count.textContent = feed.likes.length;
                                }
                            });
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
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        document.querySelectorAll('.live_Like_Counters').forEach(count => {
                            if (count.id === postId) {
                                count.textContent = likes.length;
                            }
                        });
                    }
                });
            });
        }
    }
    removeLicense(postId)
}
function create_reportScript(locationId) {
    document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
        popup.remove();
    });
    document.querySelectorAll('.editpopup').forEach(popup => {
        popup.remove();
    });
    document.querySelectorAll('.reportpostcontainer').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === locationId) {
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
                reportcontainerexit.innerHTML = undo;
                reportcontainerexit.addEventListener('click', () => {
                    reportcontainer.remove();
                });
                function pushreport() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
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
                        reportcontainer.remove();
                    }, 1000);
                });
                reporttextboxcontainer.classList.add('reporttextboxcontainer');
                reportcontainer.classList.add('reportcontainer');
                reportcontainerexit.classList.add('headerbtns');
            }
            reportSubmission();
        }
    });
}
function editingPostText(locationId) {
    document.querySelectorAll('.postshare_Pop_up').forEach(popup => {
        popup.remove();
    });
    document.querySelectorAll('.editpopup').forEach(popup => {
        popup.remove();
    });
    document.querySelectorAll('.reportpostcontainer').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(photo => {
        if (photo.id === locationId) {
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
            editingpopupclosebtn.innerHTML = undo;
            editingisdone.textContent = 'done';
            editpopup.id = photo.id;
            editingpopupclosebtn.classList.add('headerbtns');
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
                editpopup.remove();
            });
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
                Feeds_Data_Base.forEach(feed => {
                    if (feed.id === photo.id) {
                        if (photo.isText) {
                            photo.Property_Src = editinput.value;
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        } else {
                            photo.title = editinput.value;
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        }
                    }
                });
            }
            editingisdone.id = photo.id
            editingisdone.addEventListener('click', () => {
                editpopup.style.display = 'none';
                EditingMessage();
            });
        }
    });
}
function delete_Timeline_Post(locationId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        Feeds_Data_Base.forEach(feed => {
            if (feed.id === locationId) {
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

                confirmation_popup.id = locationId;
                confirmationtrue.id = feed.id;
                confirmationtrue.addEventListener('click', () => {
                    pushtrash();
                    Feeds_Data_Base = Feeds_Data_Base.filter(photo => {
                        if (photo.id === confirmationtrue.id) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    confirmation_popup.remove();
                });
                function pushtrash() {
                    Feeds_Data_Base.forEach(photo => {
                        if (photo.id === locationId) {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === photo.posterId) {
                                    let trash = user.user_Trash;
                                    const id = '' + new Date().getTime();
                                    if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                                        if (photo.children) {
                                            trash.push({
                                                type: 'photo',
                                                posterId: photo.posterId,
                                                title: photo.title,
                                                Property_Src: photo.Property_Src,
                                                children: photo.children,
                                                filter: photo.filter,
                                                id: id,
                                                date: trackingDate,
                                                time: new Date().getTime()
                                            });
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        } else {
                                            trash.push({
                                                type: 'photo',
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
                                    } else if (photo.isVideo || photo.isShort) {
                                        trash.push({
                                            type: 'video',
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
                                            type: 'text',
                                            posterId: photo.posterId,
                                            title: photo.title,
                                            Property_Src: photo.Property_Src,
                                            themeMode: photo.themeMode,
                                            fontMode: photo.fontMode,
                                            id: id,
                                            date: trackingDate,
                                            time: new Date().getTime()
                                        });
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                    createPhotoPostOnTimeLine();
                                    create_TimeLine_G_Video();
                                    createGridPost();
                                    create_Message('operated successfully');
                                }
                            });
                        }
                    });
                }
            }
        });
    }
}
function increaseviewscount(postId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
            Feeds_Data_Base.forEach(feed => {
                if (feed.id === postId) {
                    let views = feed.views;
                    function pushViews() {
                        views.push({
                            postId: postId,
                            posterId: data.user_Id,
                            id: data.user_Id + postId
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                    }
                    document.querySelectorAll('.viewscount').forEach(count => {
                        if (count.id === postId) {
                            if (count.classList.contains('viewscount')) {
                                pushViews();
                                count.innerHTML = `${views.length} view(s)`;
                                count.classList.add('Viewed');
                                count.classList.remove('viewscount');
                            }
                        }
                    });
                }
            });
        });
    }
}
function set_Comment_Data(postId, input) {
    function pushNotification(posterId, postId, caption, id) {
        ActiveUser_Account.forEach(data => {
            if (data.user_Id !== posterId) {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === posterId) {
                        user.user_NotificationView = false;
                        let Notifications = user.user_Notifications;
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        function filterNotification() {
                            Notifications = Notifications.filter(notification => {
                                if (notification.type == 'comment' && notification.postId === postId) {
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
    function pushcommentData(postId, textBox) {
        const id = '' + new Date().getTime();
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    if (feed.id === postId) {
                        let comments = feed.comments;
                        if (textBox) {
                            comments.push({
                                type: 'text',
                                Property_Src: textBox,
                                postId: feed.id,
                                posterId: data.user_Id,
                                id: id,
                                inputId: textBox.id,
                                time: new Date().getTime(),
                                date: trackingDate,
                                likes: [],
                                comments: []
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            pushNotification(feed.posterId, feed.id, feed.title, id);
                            commentcount(postId, comments.length);
                            create_Message('Successfully');
                        }
                    }
                });
            });
        }
    }
    pushcommentData(postId, input);
    document.querySelectorAll('.commentsection').forEach(section => {
        if (section.id === postId) {
            CreationOfComments(section, postId);
        } else {
            CreationOfComments(postId);
        }
    });
    function commentcount(postId, count_length) {
        document.querySelectorAll('.live_Comment_Counters').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
}
function create_Post_Options_Script(container, locationId) {
    removeOptions();
    if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        Feeds_Data_Base.forEach(photo => {
            if (photo.id === locationId) {

                function pushSavedphotos(option) {
                    if (!option.classList.contains('active')) {
                        const newId = '' + new Date().getTime();
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        let saved = user.user_Saved;
                                        saved.push({
                                            savedId: user.user_Id,
                                            postId: photo.id,
                                            id: newId,
                                        });
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        option.classList.add('active');
                                    }
                                });
                            });
                        }
                        create_Message('saved successfully');
                    } else {
                        create_Message('already saved');
                    }
                }
                removeOptions();
                const copyLink = (text, messages) => {
                    if (navigator.clipboard) {
                        try {
                            const toCopy = text;
                            navigator.clipboard.writeText(toCopy);
                            create_Message(messages);
                        }
                        catch (err) {
                            console.error('Failed to copy: ', err);
                            create_Message('unable to copy');
                        }
                    }
                }
                let options = document.createElement('div');
                let first_Option = document.createElement('span');
                let second_Option = document.createElement('span');
                let third_Option = document.createElement('span');
                let fouth_Option = document.createElement('span');
                let fifth_Option = document.createElement('span');
                let sixth_Option = document.createElement('span');
                let seventh_Option = document.createElement('span');
                let eight_Option = document.createElement('span');
                let nineth_Option = document.createElement('span');
                let exit = document.createElement('span');

                container.insertAdjacentElement("afterend", options);
                options.appendChild(exit);
                options.appendChild(first_Option);
                options.appendChild(second_Option);
                options.appendChild(third_Option);
                options.appendChild(eight_Option);
                options.appendChild(nineth_Option);
                options.appendChild(fouth_Option);
                options.appendChild(fifth_Option);
                options.appendChild(sixth_Option);
                options.appendChild(seventh_Option);
                first_Option.innerHTML = editsvg;
                second_Option.innerHTML = savedsvg;
                third_Option.innerHTML = deletesvg;
                fouth_Option.innerHTML = likesvg;
                fifth_Option.innerHTML = commentsvg;
                sixth_Option.innerHTML = sharesvg;
                seventh_Option.innerHTML = medicalreportsvg;
                eight_Option.innerHTML = downloadsvg;
                nineth_Option.innerHTML = copyLinksvg;
                exit.innerHTML = undo2;

                options.classList.add('options');
                first_Option.classList.add('headerbtns');
                second_Option.classList.add('headerbtns');
                third_Option.classList.add('headerbtns');
                fouth_Option.classList.add('headerbtns');
                fifth_Option.classList.add('headerbtns');
                sixth_Option.classList.add('headerbtns');
                seventh_Option.classList.add('headerbtns');
                eight_Option.classList.add('headerbtns');
                nineth_Option.classList.add('headerbtns');
                exit.classList.add('headerbtns');
                fouth_Option.classList.add('cancelled');
                fifth_Option.classList.add('cancelled');
                sixth_Option.classList.add('cancelled');
                function showcancelled() {
                    if (photo.shareactive === false) {
                        sixth_Option.classList.remove('cancelled');
                        sixth_Option.classList.add('active');
                    } if (photo.commentactive === false) {
                        fifth_Option.classList.remove('cancelled');
                        fifth_Option.classList.add('active');
                    } if (photo.likeactive === false) {
                        fouth_Option.classList.remove('cancelled');
                        fouth_Option.classList.add('active');
                    }
                }
                showcancelled();
                seventh_Option.addEventListener('click', () => {
                    create_reportScript(photo.id);
                    removeOptions();
                });
                first_Option.addEventListener('click', () => {
                    editingPostText(photo.id);
                    removeOptions();
                });
                third_Option.addEventListener('click', () => {
                    delete_Timeline_Post(photo.id);
                    removeOptions();
                });
                fouth_Option.addEventListener('click', () => {
                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                    Feeds_Data_Base.forEach(feed => {
                        if (feed.id === photo.id) {
                            if (feed.likeactive === true) {
                                feed.likeactive = false;
                                fouth_Option.classList.remove('cancelled');
                                fouth_Option.classList.add('active');
                            } else {
                                feed.likeactive = true;
                                fouth_Option.classList.add('cancelled');
                                fouth_Option.classList.remove('active');
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        }
                    });
                });
                fifth_Option.addEventListener('click', () => {
                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                    Feeds_Data_Base.forEach(feed => {
                        if (feed.id === photo.id) {
                            if (feed.commentactive === true) {
                                feed.commentactive = false;
                                fifth_Option.classList.remove('cancelled');
                                fifth_Option.classList.add('active');
                            } else {
                                feed.commentactive = true;
                                fifth_Option.classList.add('cancelled');
                                fifth_Option.classList.remove('active');
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        }
                    });
                });
                sixth_Option.addEventListener('click', () => {
                    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                    Feeds_Data_Base.forEach(feed => {
                        if (feed.id === photo.id) {
                            if (feed.shareactive === true) {
                                feed.shareactive = false;
                                sixth_Option.classList.remove('cancelled');
                                sixth_Option.classList.add('active');
                            } else {
                                feed.shareactive = true;
                                sixth_Option.classList.add('cancelled');
                                sixth_Option.classList.remove('active');
                            }
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        }
                    });
                });
                nineth_Option.addEventListener('click', () => {
                    let url = document.createElement('a');
                    url.href = `view.html?Post_Id=${photo.id}`;
                    copyLink(url, 'post url copied...');
                });
                exit.addEventListener('click', () => {
                    options.remove();
                });
                function checkIfPostIsSaved() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    let saved = user.user_Saved;
                                    saved.forEach(item => {
                                        if (item.postId === photo.id) {
                                            second_Option.classList.add('active');
                                        }
                                    })
                                }
                            });
                        });
                    }
                }
                checkIfPostIsSaved();


                second_Option.addEventListener('click', () => {
                    pushSavedphotos(second_Option);
                    removeOptions();
                    newSaved_Script();
                });
                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                    function pushSavedData() {
                        var new_Date = new Date().getTime();
                        var download_Link = document.createElement('a');
                        var mainimg = document.createElement('img');
                        mainimg.src = photo.Property_Src;
                        download_Link.href = mainimg.src;
                        download_Link.download = "Lavinsta" + '_' + 'IMG' + '_' + new_Date + '.' + 'jpeg';
                        download_Link.click();
                    }
                    eight_Option.addEventListener('click', () => {
                        pushSavedData();
                        removeOptions();
                    });
                } if (photo.isVideo) {
                    function pushSavedData() {
                        var new_Date = new Date().getTime();
                        var download_Link = document.createElement('a');
                        var mainimg = document.createElement('video');
                        mainimg.src = photo.Property_Src;
                        download_Link.href = mainimg.src;
                        download_Link.download = "Lavinsta" + '_' + 'VIDEO' + '_' + new_Date + '.' + 'mp4';
                        download_Link.click();
                    }
                    eight_Option.addEventListener('click', () => {
                        pushSavedData();
                        removeOptions();
                    });
                } if (photo.isText) {
                    eight_Option.innerHTML = copysvg;
                    eight_Option.addEventListener('click', () => {
                        copyLink(photo.Property_Src, 'text copied');
                        removeOptions();
                    });
                }
                if (JSON.parse(localStorage.getItem('ActiveUser_Account'))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(user => {
                        if (user.user_Id === photo.posterId) {
                            seventh_Option.remove();
                        } else {
                            first_Option.remove();
                            third_Option.remove();
                            fouth_Option.remove();
                            fifth_Option.remove();
                            sixth_Option.remove();
                        }
                    })
                }
            }
        });
    }
}
function create_Side_Options(container, locationId) {
    removeOptions();
    if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        Feeds_Data_Base.forEach(photo => {
            if (photo.id === locationId) {
                let options = document.createElement('div');
                let first_Option = document.createElement('span');
                let second_Option = document.createElement('span');
                let third_Option = document.createElement('span');
                let fouth_Option = document.createElement('span');
                let fifth_Option = document.createElement('span');
                let exit = document.createElement('span');

                container.insertAdjacentElement("afterend", options);
                options.appendChild(exit);
                options.appendChild(first_Option);
                options.appendChild(second_Option);
                options.appendChild(third_Option);
                options.appendChild(fouth_Option);
                options.appendChild(fifth_Option);
                first_Option.innerHTML = commentsvg;
                second_Option.innerHTML = likesvg;
                third_Option.innerHTML = sharesvg;
                fouth_Option.innerHTML = settingssvg;
                fifth_Option.innerHTML = menusvg;
                exit.innerHTML = undo2;

                options.classList.add('options');
                first_Option.classList.add('headerbtns');
                second_Option.classList.add('headerbtns');
                third_Option.classList.add('headerbtns');
                fouth_Option.classList.add('headerbtns');
                fifth_Option.classList.add('headerbtns');
                exit.classList.add('headerbtns');
                first_Option.addEventListener('click', () => {
                    create_Comment_room(photo.id);
                    removeOptions();
                });
                third_Option.addEventListener('click', () => {
                    create_share_Popup(photo.id);
                    removeOptions();
                });
                let popupname = `${photo.likes.length} likes(s) &centerdot; ${photo.comments.length} comments(s) &centerdot; ${photo.shares.length} shares(s) &centerdot; ${photo.views.length} views(s)`;
                let newtime;
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
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                        token = 'week';
                        maintime = time / 604800;
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    } if (time <= 60) {
                        token = 'sec';
                        maintime = time;
                        newtime = `${photo.attribute} &centerdot; ${Math.trunc(maintime)} ${token} ${moment}`;
                    }
                }
                fouth_Option.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(user => {
                            create_Video_Info(container, newtime, popupname, photo.title, photo.posterId, user.user_Id);
                            removeOptions();
                        });
                    }
                });
                fifth_Option.addEventListener('click', () => {
                    create_List_Popup();
                    removeOptions();
                });
                startTime();

                exit.addEventListener('click', () => {
                    options.remove();
                });

                second_Option.classList.add('un_liked');
                function checkIfPostIsLiked() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            let likes = photo.likes;
                            likes.forEach(like => {
                                if (like.id === data.user_Id + photo.id) {
                                    second_Option.classList.add('liked');
                                    second_Option.classList.remove('un_liked');
                                }
                            });
                        });
                    }
                }
                checkIfPostIsLiked();
                function decideRight() {
                    second_Option.classList.add('liked');
                    second_Option.classList.remove('un_liked');
                    if (photo.isText === true) {
                        like_Post(photo.id, photo.Property_Src, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                    } else {
                        like_Post(photo.id, photo.title, '' + new Date().getTime(), photo.posterId, 'post_Like', 'post_Like');
                    }
                }
                function decideLeft() {
                    second_Option.classList.remove('liked');
                    second_Option.classList.add('un_liked');
                    Unlike_Post(photo.id);
                }
                function makeLike() {
                    if (second_Option.classList.contains('un_liked')) {
                        decideRight();
                    } else if (second_Option.classList.contains('liked')) {
                        decideLeft();
                    }
                }
                second_Option.addEventListener('click', () => {
                    makeLike();
                    removeOptions();
                });
            }
        });
    }
}
const createmininavigation = (container) => {
    removeOptions();
    const options = document.createElement('header');
    const exit = document.createElement('span');
    const first_Option = document.createElement('span');
    const second_Option = document.createElement('span');
    const third_Option = document.createElement('span');
    const fouth_Option = document.createElement('span');
    container.insertAdjacentElement("afterend", options);
    options.appendChild(exit);
    options.appendChild(first_Option);
    options.appendChild(second_Option);
    options.appendChild(third_Option);
    options.appendChild(fouth_Option);
    exit.innerHTML = undo;
    first_Option.innerHTML = feedsvg;
    second_Option.innerHTML = homesvg;
    third_Option.innerHTML = savedsvg;
    fouth_Option.innerHTML = stopwatchsvg;
    exit.classList.add('headerbtns');
    first_Option.classList.add('headerbtns');
    second_Option.classList.add('headerbtns');
    third_Option.classList.add('headerbtns');
    fouth_Option.classList.add('headerbtns');
    options.classList.add('options');
    exit.addEventListener('click',()=> {
        removeOptions();
    });
    first_Option.addEventListener('click',()=> {
        creategridvideo(container);
    });
    second_Option.addEventListener('click',()=> {
        create_TimeLine_G_Video(container);
    });
    third_Option.addEventListener('click',()=> {
        create_Saved_Videos(container);
    });
    fouth_Option.addEventListener('click',()=> {
        create_Short_Video(container);
    });
}
function create_List_Popup() {
    document.querySelectorAll('.playlist').forEach(list => {
        list.remove();
    });
    const playlist = document.createElement('section');
    const optionbtn = document.createElement('span');
    const navigation = document.createElement('nav');
    const exit = document.createElement('span');
    const playercolumn = document.createElement('div');
    document.body.appendChild(playlist);
    playlist.appendChild(playercolumn);
    playlist.appendChild(navigation);
    navigation.appendChild(exit);
    navigation.appendChild(optionbtn);
    playlist.classList.add('playlist');
    playercolumn.classList.add('playercolumn');
    optionbtn.innerHTML = moresvg;
    exit.innerHTML = undo;
    optionbtn.classList.add('headerbtns');
    exit.classList.add('headerbtns');
    navigation.classList.add('navigation');
    optionbtn.addEventListener('click',() => {
        createmininavigation(playercolumn);
    });
    exit.addEventListener('click',()=> {
        playlist.remove();
    });
    creategridvideo(playercolumn);
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            playercolumn.id = user.user_Id;
        });
    }
}
function create_Video_Info(container, elapsedtime, headers, Property_Src, locationId, user_Id) {
    document.querySelectorAll('.video_options_container').forEach(optioncontainer => {
        optioncontainer.remove();
    });
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(profile => {
            if (profile.user_Id === locationId) {
                let header = document.createElement('header');
                let exit = document.createElement('span');
                let video_options_container = document.createElement('div');
                let option_inner_container = document.createElement('div');
                let option_bottom = document.createElement('div');
                let option_profile_picture = document.createElement('div');
                let option_profile_picture_img = document.createElement('img');
                let option_profile_name = document.createElement('strong');
                let title = document.createElement('p');
                let multipleitems = document.createElement('b');
                let time = document.createElement('b');
                container.insertAdjacentElement("afterend", video_options_container);
                video_options_container.appendChild(header);
                video_options_container.appendChild(option_inner_container);
                video_options_container.appendChild(option_bottom);
                option_inner_container.appendChild(option_profile_picture);
                option_inner_container.appendChild(option_profile_name);
                option_profile_picture.appendChild(option_profile_picture_img);
                option_bottom.appendChild(time);
                option_bottom.appendChild(multipleitems);
                option_bottom.appendChild(title);
                header.appendChild(exit);
                exit.innerHTML = undo;
                title.textContent = Property_Src;
                multipleitems.innerHTML = headers;
                time.innerHTML = elapsedtime,
                    option_profile_picture_img.src = profile.user_ProfilePicture;
                let username;
                profile.user_Mid_Name ? username =
                    profile.user_Firstname + ' ' + profile.user_Mid_Name + ' ' + profile.user_Surname :
                    username = profile.user_Firstname + ' ' + profile.user_Surname;
                option_profile_name.textContent = username;
                exit.classList.add('headerbtns');
                option_bottom.classList.add('option_bottom')
                option_inner_container.classList.add('option_inner_container');
                video_options_container.classList.add('video_options_container');
                if (profile.user_CoverPhoto) {
                    option_profile_picture.style.backgroundImage = "url(" + profile.user_CoverPhoto + ")";
                } else {
                    option_profile_picture.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                }
                option_profile_picture.addEventListener('click', () => {
                    createProfileOptions(profile.user_Id, user_Id);
                });
                exit.addEventListener('click', () => {
                    video_options_container.remove();
                });
                function filter_Image_Profile() {
                    if (profile.user_ProfilePicture_Filter == 'default') {
                        option_profile_picture_img.classList.add('--color-default');
                    } else if (profile.user_ProfilePicture_Filter == 'gray') {
                        option_profile_picture_img.classList.add('--color-gray');
                    } else if (profile.user_ProfilePicture_Filter == 'contrast') {
                        option_profile_picture_img.classList.add('--color-contrast');
                    } else if (profile.user_ProfilePicture_Filter == 'bright') {
                        option_profile_picture_img.classList.add('--color-bright');
                    } else if (profile.user_ProfilePicture_Filter == 'blur') {
                        option_profile_picture_img.classList.add('--color-blur');
                    } else if (profile.user_ProfilePicture_Filter == 'invert') {
                        option_profile_picture_img.classList.add('--color-invert');
                    } else if (profile.user_ProfilePicture_Filter == 'sepia') {
                        option_profile_picture_img.classList.add('--color-sepia');
                    } else if (profile.user_ProfilePicture_Filter == 'hue-rotate') {
                        option_profile_picture_img.classList.add('--color-hue-rotate');
                    } else if (profile.user_ProfilePicture_Filter == 'opacity') {
                        option_profile_picture_img.classList.add('--color-opacity');
                    } else if (profile.user_ProfilePicture_Filter == 'satulate') {
                        option_profile_picture_img.classList.add('--color-satulate');
                    }
                }
                filter_Image_Profile();
            }
        });
    }
}
function removeOptions() {
    document.querySelectorAll('.options').forEach(option => {
        option.remove();
    });
}
document.querySelector('.viewoptions.headerbtns').addEventListener('click',() => {
    document.querySelector('.publicreelside').style.display = 'flex';
});

document.querySelector('.viewoptionsoptions').addEventListener('click',()=> {
    createmininavigation(document.querySelector('.Public_video_Reel_Column'));
});
