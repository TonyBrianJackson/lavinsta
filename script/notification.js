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
                    let notificationhead = document.createElement('div');
                    let notificationtail = document.createElement('div');
                    let notificationImg = document.createElement('img');
                    let notificationcaption = document.createElement('p');
                    let notificationmore = document.createElement('span');
                    let notificationtime = document.createElement('span');
    
                    column.appendChild(notificationblock);
                    notificationblock.appendChild(notificationhead);
                    notificationblock.appendChild(notificationtail);
                    notificationblock.appendChild(notificationmore);
                    notificationhead.appendChild(notificationImg);
                    notificationtail.appendChild(notificationcaption);
                    notificationtail.appendChild(notificationtime);
                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - notification.time;
                        var token;
                        var moment = 'ago';
                        let maintime;
    
                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            notificationtime.innerHTML = notification.date;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            notificationtime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        }
                    }
                    startTime();
                    function pushViewers() {
                        storiesphotosArray.forEach(story => {
                            if (story.id === notification.id) {
                                if (Array.isArray(ActiveAccount)) {
                                    ActiveUser_Account = ActiveAccount;
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
                                                        if (Array.isArray(ActiveAccount)) {
                                                            ActiveUser_Account = ActiveAccount;
                                                            ActiveUser_Account.forEach(data => {
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
                        });
                    }
                    function GetPosterInfo() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === notification.posterId) {
                                notificationImg.src = user.user_ProfilePicture;
                                if (notification.type == 'comment') {
                                    notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>added a comment to your post "${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        let commentspopup = document.querySelectorAll('.commentsectioncontainer');
                                        commentspopup.forEach(popup => {
                                            if (popup.id === notification.postId) {
                                                popup.classList.toggle('commentsectioncontaineractive');
                                            }
                                        });
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
                                    notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>liked your post "${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                        itemsviewonlargescale.forEach(largecontainer => {
                                            if (largecontainer.id === notification.postId) {
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
                                                gridpostloader.id = notification.id;
                                                document.body.appendChild(largecontainer);
                                                largecontainer.style.display = 'flex';
                                                pushViewers();
                                                setTimeout(() => {
                                                    gridpostloader.remove();
                                                }, 2000);
                                            } else {
                                                largecontainer.style.display = 'none';
                                            }
                                        });
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('liked your post');
                                        }
                                    });
                                } if (notification.type == 'comment_Like') {
                                    notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>liked your comment "${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        let commentspopup = document.querySelectorAll('.commentsectioncontainer');
                                        commentspopup.forEach(popup => {
                                            if (popup.id === notification.postId) {
                                                popup.classList.toggle('commentsectioncontaineractive');
                                            }
                                        });
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
                                        notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>mentioned you in a comment`;
                                    } else {
                                        notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>replied to your comment "${notification.caption}"`;
                                    }
                                    notificationcaption.addEventListener('click', () => {
                                        let commentspopup = document.querySelectorAll('.commentroomsection');
                                        commentspopup.forEach(popup => {
                                            if (popup.id === notification.postId) {
                                                popup.classList.toggle('commentroomsectionactive');
                                            }
                                        });
                                    });
                                    document.addEventListener('visibilitychange', () => {
                                        var state = document.visibilityState;
                                        if (state == 'hidden') {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            Send_Notification('replied to your comment');
                                        }
                                    });
                                } if (notification.type == 'postNotification') {
                                    notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>${notification.caption}`;
                                    notificationcaption.addEventListener('click', () => {
                                        if (notification.liveNotification) {
                                            document.querySelector('.videopagebackground').style.display = 'flex';
                                            document.querySelector('.gallery').style.display = 'flex';
                                            document.querySelector('.live_Videos').style.display = 'grid';
                                            document.querySelector('.trending_Videos').style.display = 'none';
                                            document.querySelector('#livestreaming').classList.add('active');
                                            document.querySelector('#trendingvideos').classList.remove('active');
                                        } else {
                                            let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                            itemsviewonlargescale.forEach(largecontainer => {
                                                if (largecontainer.id === notification.id) {
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
                                                    gridpostloader.id = notification.id;
                                                    document.body.appendChild(largecontainer);
                                                    largecontainer.style.display = 'flex';
                                                    pushViewers();
                                                    setTimeout(() => {
                                                        gridpostloader.remove();
                                                    }, 2000);
                                                } else {
                                                    largecontainer.style.display = 'none';
                                                }
                                            });
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
                                    notificationcaption.innerHTML = `<b class="notictionName">${user.user_Firstname + ' ' + user.user_Surname}</b>liked your comment reply "${notification.caption}"`;
                                    notificationcaption.addEventListener('click', () => {
                                        let commentspopup = document.querySelectorAll('.commentroomsection');
                                        commentspopup.forEach(popup => {
                                            if (popup.id === notification.postId) {
                                                popup.classList.toggle('commentroomsectionactive');
                                            }
                                        });
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
                    notificationmore.innerHTML = '&vellip;';
                    notificationcaption.classList.add('notificationcaption');
                    notificationhead.classList.add('notificationhead');
                    notificationtail.classList.add('notificationtail');
                    notificationblock.classList.add('notificationblock');
                    notificationmore.classList.add('notificationmore');
                    notificationtime.classList.add('notificationtime');
                    notificationmore.id = notification.trackingId + notification.id;
    
                    if (notification.notification_isChecked === false) {
                        notificationtime.classList.add('new_No_Ti_Fi_Ca_Ti_On');
                        notificationcaption.classList.add('new_No_Ti_Fi_Ca_Ti_On_caption');
                    }
    
                    notificationmore.addEventListener('click', () => {
                        create_Options_Script();
                    });
                    function create_Options_Script() {
                        let options = document.createElement('div');
                        let first_Option = document.createElement('span');
                        let first_Optionimg = document.createElement('img');
                        let exit = document.createElement('span');
    
                        first_Option.id = notification.id;
                        column.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        first_Option.appendChild(first_Optionimg);
                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        first_Option.classList.add('first_Option');
                        exit.innerHTML = '&times;';
                        first_Optionimg.src = 'newicons/trash-can.png';
                        first_Option.id = notification.trackingId + notification.id;
                        first_Option.addEventListener('click', () => {
                            notifications = notifications.filter(notification => {
                                if (first_Option.id === notification.trackingId + notification.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            data.user_Notifications = notifications;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            createNotifications();
                            options.remove();
                            create_Community_Chat_Messages();
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
