let notifications = [];
const notification = JSON.parse(localStorage.getItem('notifications'));

function createNotifications() {
    let usernoticolumn = document.querySelectorAll('.usersnotificationcoulmn');
    usernoticolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === column.id) {
                let Notifications = data.user_Notifications;
                Notifications.forEach(notification => {
                    let notificationblock = document.createElement('div');
                    let innerblock = document.createElement('div');
                    let headwrapper = document.createElement('div');
                    let notificationhead = document.createElement('div');
                    let notificationtail = document.createElement('div');
                    let notificationImg = document.createElement('img');
                    let notificationcaption = document.createElement('p');
                    let more = document.createElement('span');
                    let notificationtime = document.createElement('span');
                    let NotificationNameAndImg = document.createElement('div');
                    let notictionName = document.createElement('b');
                    let nameandtime = document.createElement('div');
                    column.appendChild(notificationblock);
                    notificationblock.appendChild(innerblock);
                    innerblock.appendChild(NotificationNameAndImg);
                    innerblock.appendChild(notificationtail);
                    notificationblock.appendChild(more);
                    headwrapper.appendChild(notificationhead);
                    headwrapper.appendChild(notificationtime);
                    notificationhead.appendChild(notificationImg);
                    NotificationNameAndImg.appendChild(headwrapper);
                    NotificationNameAndImg.appendChild(nameandtime);
                    nameandtime.appendChild(notictionName);
                    nameandtime.appendChild(notificationcaption);
                    notictionName.classList.add('notictionName');
                    nameandtime.classList.add('nameandtime');
                    innerblock.classList.add('innerblock');
                    NotificationNameAndImg.classList.add('NotificationNameAndImg');
                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - notification.time;
                        var token;
                        let maintime;
    
                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            notificationtime.innerHTML = notification.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        }
                    }
                    startTime();
                    function GetInfo() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === notification.posterId) {
                                let username;
                                user.user_Mid_Name ? username = 
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                                notificationImg.src = user.user_ProfilePicture;
                                notictionName.textContent = username;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        notificationImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        notificationImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        notificationImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        notificationImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        notificationImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        notificationImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        notificationImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        notificationImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        notificationImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        notificationImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    GetInfo();
                    function GetPosterInfo() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === notification.posterId) {
                                notificationImg.src = user.user_ProfilePicture;
                                if (notification.type == 'comment') {
                                    notificationcaption.innerHTML = `added a comment to your post"${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        create_Comment_room(notification.postId);
                                        sessionStorage.setItem('activepage', notification.postId);
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('added a comment to your post');
                                        }
                                    });
                                } if (notification.isStatus === true) {
                                    notifications = notifications.filter(storyNotification => {
                                        let timeresult = new Date().getTime();
                                        let miliseconds = timeresult - storyNotification.time;
                                        let event = miliseconds / 1000;
                                        if (event >= 60 * 15) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                } if (notification.type == 'post_Like') {
                                    notificationcaption.innerHTML = `liked your post"${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        createMain_GridPost(notification.postId);
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('liked your post');
                                        }
                                    });
                                } if (notification.type == 'comment_Like') {
                                    notificationcaption.innerHTML = `liked your comment"${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        create_Comment_room(notification.postId);
                                        sessionStorage.setItem('activepage', notification.postId);
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('liked your comment');
                                        }
                                    });
                                } if (notification.type == 'comment_Reply') {
                                    if (notification.target == 'mention') {
                                        notificationcaption.innerHTML = `mentioned you in a comment`;
                                    } else {
                                        notificationcaption.innerHTML = `replied to your comment"${notification.caption}"`;
                                    }
                                    notificationcaption.addEventListener('click', () => {
                                        create_Comment_Reply_room(notification.postId);
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('replied to your comment');
                                        }
                                    });
                                } if (notification.type == 'postNotification') {
                                    notificationcaption.innerHTML = `${notification.caption}`;
                                    notificationcaption.addEventListener('click', () => {
                                        if (notification.liveNotification) {
                                            document.querySelector('.videopagebackground').style.display = 'flex';
                                            document.querySelector('.gallery').style.display = 'flex';
                                            document.querySelector('.live_Videos').style.display = 'grid';
                                            document.querySelector('.trending_Videos').style.display = 'none';
                                            document.querySelector('#livestreaming').classList.add('active');
                                            document.querySelector('#trendingvideos').classList.remove('active');
                                        } else {
                                            create_Main_Stories(notification.id);
                                            createMain_GridPost(notification.id);
                                        }
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification(notification.caption);
                                        }
                                    });
                                } if (notification.type == 'comment_ReplyLike') {
                                    notificationcaption.innerHTML = `liked your comment reply"${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        create_Comment_Reply_room(notification.relationId);
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('liked your comment reply');
                                        }
                                    });
                                }
                                function Send_Notification(Caption_value) {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        LogInFormData.forEach(user_Data => {
                                            if (user.user_Id === notification.trackingId) {
                                                if (user_Data.user_Id === notification.posterId) {
                                                    if (notification.type == 'postNotification') {
                                                        function NotificationsOnly() {
                                                            Notification.requestPermission().then(perm => {
                                                                if (perm === 'granted') {
                                                                    new Notification("Lavinsta", {
                                                                        body: `${user.user_Firstname + ' ' + user.user_Surname}, ${user_Data.user_Firstname + ' ' + user_Data.user_Surname} ${Caption_value}`,
                                                                        icon: 'lavinstaphotos/eagle.png',
                                                                        image: user_Data.user_ProfilePicture,
                                                                    });
                                                                }
                                                            });
                                                        }
                                                        if (notification.notification_View === false) {
                                                            NotificationsOnly();
                                                            notification.notification_View = true;
                                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                        }
                                                    } else {
                                                        function NotificationsOnly() {
                                                            Notification.requestPermission().then(perm => {
                                                                if (perm === 'granted') {
                                                                    new Notification("Lavinsta", {
                                                                        body: `${user.user_Firstname + ' ' + user.user_Surname}, ${user_Data.user_Firstname + ' ' + user_Data.user_Surname} ${Caption_value} "${notification.caption}"`,
                                                                        icon: 'lavinstaphotos/eagle.png',
                                                                        image: user_Data.user_ProfilePicture,
                                                                    });
                                                                }
                                                            });
                                                        }
                                                        if (notification.notification_View === false) {
                                                            NotificationsOnly();
                                                            notification.notification_View = true;
                                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                        }
                                                    }
                                                    
                                                }
                                            }
                                        });
                                    });
                                }
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        notificationImg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        notificationImg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        notificationImg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        notificationImg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        notificationImg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        notificationImg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        notificationImg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        notificationImg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        notificationImg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        notificationImg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    GetPosterInfo();
                    more.innerHTML = vellip;
                    notificationcaption.classList.add('notificationcaption');
                    headwrapper.classList.add('headwrapper');
                    notificationhead.classList.add('notificationhead');
                    notificationtail.classList.add('notificationtail');
                    notificationblock.classList.add('notificationblock');
                    more.classList.add('more');
                    notificationtime.classList.add('notificationtime');
                    more.id = notification.trackingId + notification.id;
    
                    if (notification.notification_isChecked === false) {
                        notificationtime.classList.add('new_No_Ti_Fi_Ca_Ti_On');
                        notificationcaption.classList.add('new_No_Ti_Fi_Ca_Ti_On_caption');
                    }
    
                    more.addEventListener('click', () => {
                        create_Options_Script();
                    });
                    function create_Options_Script() {
                        let options = document.createElement('div');
                        let first_Option = document.createElement('span');
                        let exit = document.createElement('span');
    
                        first_Option.id = notification.id;
                        column.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        first_Option.innerHTML = deletesvg;
                        exit.innerHTML = undo2;
                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        first_Option.classList.add('first_Option');
                        first_Option.id = notification.trackingId + notification.id;
                        first_Option.addEventListener('click', () => {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === notification.trackingId) {
                                    let notifications = user.user_Notifications;
                                    notifications = notifications.filter(notification => {
                                        if (first_Option.id === notification.trackingId + notification.id) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    user.user_Notifications = notifications;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    createNotifications();
                                    options.remove();
                                }
                            })
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }
                    notificationcaption.addEventListener('click', () => {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === column.id) {
                                user.user_NotificationView = true;
                                let myNotifications = user.user_Notifications;
                                myNotifications.forEach(notifi_cation => {
                                    if (notifi_cation.id === notification.id) {
                                        notifi_cation.notification_View = true;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        notificationtime.classList.remove('new_No_Ti_Fi_Ca_Ti_On');
                                        if (notifi_cation.notification_isChecked === false) {
                                            notifi_cation.notification_isChecked = true;
                                            notificationtime.classList.remove('new_No_Ti_Fi_Ca_Ti_On');
                                            notificationcaption.classList.remove('new_No_Ti_Fi_Ca_Ti_On_caption');
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        } if (notifi_cation.notification_View === false) {
                                            notifi_cation.notification_View = true;
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        }
                                    }
                                });
                            }
                        });
                    });
                });
            }
        });
    });
}
createNotifications();
