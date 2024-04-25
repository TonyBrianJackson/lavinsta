//custom functional messages
//TIME FUNCTION
const day = new Date();
const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
function trackTime(ElapsedTime) {
    switch (typeof ElapsedTime) {
        case 'number':
            break;
        case 'string':
            ElapsedTime = +new Date(ElapsedTime);
            break;
        case 'object':
            if (ElapsedTime.constructor === Date) ElapsedTime = ElapsedTime.getTime();
            break;
        default:
            ElapsedTime = +new Date();
    }
    var time_formats = [
        [60, 'secs', 1], // 60
        [120, '1 min ago', '1 minute from now'], // 60*2
        [3600, 'mins', 60], // 60*60, 60
        [7200, '1 hr ago', '1 hour from now'], // 60*60*2
        [86400, 'hrs', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - ElapsedTime) / 1000,
        token = 'ago',
        list_choice = 1;

    if (seconds == 0) {
        return 'Just now';
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return ElapsedTime;
};
var aDay = 24 * 60 * 60 * 1000;
let increment = 0;

let timeing = trackTime((new Date(Date.now())));
const trackingElapsedTime = new Date().getTime();
const trackingDate = day.getDate() + ' ' + month[day.getMonth()] + ' ' + day.getFullYear();

function create_Message(messages) {
    let savingmessage = document.createElement('span');
    document.body.appendChild(savingmessage);
    savingmessage.innerText = messages;
    savingmessage.classList.add('savingmessage');
    setTimeout(() => {
        savingmessage.remove();
    }, 3500);
}

function shareMessage() {
    let editingmessage = document.createElement('div');
    let actualeditingmessage = document.createElement('p');
    document.body.appendChild(editingmessage);
    editingmessage.appendChild(actualeditingmessage);
    editingmessage.classList.add('editingmessage');
    actualeditingmessage.textContent = 'sharing post...';
    setTimeout(() => {
        actualeditingmessage.textContent = 'post shared';
        setTimeout(() => {
            editingmessage.remove();
        }, 2000);
    }, 3000);
}
function createpostLikeLicense(container, locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === locationId) {
            let likes = feed.likes;
            likes.forEach(license => {
                let viewblock = document.createElement('div');
                let viewblockhead = document.createElement('span');
                let viewblocktail = document.createElement('div');
                let viewblockimg = document.createElement('img');
                let viewtime = document.createElement('p');
                let viewname = document.createElement('p');
                container.appendChild(viewblock);
                viewblock.appendChild(viewblockhead);
                viewblock.appendChild(viewblocktail);
                viewblockhead.appendChild(viewblockimg);
                viewblocktail.appendChild(viewname);
                viewblocktail.appendChild(viewtime);

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - license.time;
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
                viewblockhead.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(license.posterId, user.user_Id);
                        });
                    }
                });
                viewname.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(license.posterId, user.user_Id);
                        });
                    }
                });
                viewblock.classList.add('viewblock');
                viewblocktail.classList.add('viewblocktail');
                function Poster_Details() {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === license.posterId) {
                            viewblockimg.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            viewname.innerHTML = username;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    viewblockimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    viewblockimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    viewblockimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    viewblockimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    viewblockimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    viewblockimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    viewblockimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    viewblockimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    viewblockimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    viewblockimg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                }
                Poster_Details();
            });
        }
    });
}
function createcommentsLikeLicense(container, locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            if (comment.id === locationId) {
                let likes = comment.likes;
                likes.forEach(license => {
                    let viewblock = document.createElement('div');
                    let viewblockhead = document.createElement('span');
                    let viewblocktail = document.createElement('div');
                    let viewblockimg = document.createElement('img');
                    let viewtime = document.createElement('p');
                    let viewname = document.createElement('p');
                    container.appendChild(viewblock);
                    viewblock.appendChild(viewblockhead);
                    viewblock.appendChild(viewblocktail);
                    viewblockhead.appendChild(viewblockimg);
                    viewblocktail.appendChild(viewname);
                    viewblocktail.appendChild(viewtime);

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - license.time;
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
                    viewblockhead.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(license.posterId, user.user_Id);
                            });
                        }
                    });
                    viewname.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(license.posterId, user.user_Id);
                            });
                        }
                    });
                    viewblock.classList.add('viewblock');
                    viewblocktail.classList.add('viewblocktail');
                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === license.posterId) {
                                viewblockimg.src = user.user_ProfilePicture;

                                let username;
                                user.user_Mid_Name ? username =
                                    user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                viewname.innerHTML = username;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        viewblockimg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        viewblockimg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        viewblockimg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        viewblockimg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        viewblockimg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        viewblockimg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        viewblockimg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        viewblockimg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        viewblockimg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        viewblockimg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details();
                });
            }
        });
    });
}
function removePopup() {
    document.querySelectorAll('.license_Popup').forEach(popup => {
        popup.remove();
    });
}
function LikePopupsAndMore(locationId, type, value) {
    removePopup();
    let statusviewsheader = document.createElement('header');
    let license_Popup = document.createElement('nav');
    let popupname = document.createElement('p');
    let license_Column = document.createElement('div');
    let exit = document.createElement('span');
    document.body.appendChild(license_Popup);
    license_Popup.appendChild(statusviewsheader);
    license_Popup.appendChild(license_Column);
    statusviewsheader.appendChild(exit);
    statusviewsheader.appendChild(popupname);
    exit.innerHTML = undo;
    exit.classList.add('headerbtns');
    license_Popup.classList.add('license_Popup');
    license_Column.classList.add('license_Column');
    exit.addEventListener('click', () => {
        license_Popup.remove();
    });
    license_Popup.style.display = 'flex';
    license_Popup.id = locationId;
    license_Column.id = locationId;
    if (type == 'postlike') {
        createpostLikeLicense(license_Column, locationId);
        popupname.innerHTML = `${value} like(s) on this post &quest;`;
    } if (type == 'commentlike') {
        createcommentsLikeLicense(license_Column, locationId);
        popupname.innerHTML = `${value} like(s) on this comment &quest;`;
    } if (type == 'commentreplylike') {
        CreationOfCommentsRepliesLikesLicense(license_Column, locationId);
        popupname.innerHTML = `${value} like(s) on this comment reply &quest;`;
    }
}
function CreationOfCommentsRepliesLikesLicense(container, locationId) {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            let commentreplies = comment.comments;
            commentreplies.forEach(reply => {
                let likes = reply.likes;
                likes.forEach(license => {
                    if (license.postId === locationId) {
                        let viewblock = document.createElement('div');
                        let viewblockhead = document.createElement('span');
                        let viewblocktail = document.createElement('div');
                        let viewblockimg = document.createElement('img');
                        let viewtime = document.createElement('p');
                        let viewname = document.createElement('p');
                        container.appendChild(viewblock);
                        viewblock.appendChild(viewblockhead);
                        viewblock.appendChild(viewblocktail);
                        viewblockhead.appendChild(viewblockimg);
                        viewblocktail.appendChild(viewname);
                        viewblocktail.appendChild(viewtime);

                        const startTime = function () {
                            let time;
                            let timeresult = new Date().getTime();
                            let miliseconds = timeresult - license.time;
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
                        viewblockhead.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(license.posterId, user.user_Id);
                                });
                            }
                        });
                        viewname.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(license.posterId, user.user_Id);
                                });
                            }
                        });
                        viewblock.classList.add('viewblock');
                        viewblocktail.classList.add('viewblocktail');
                        function Poster_Details() {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === license.posterId) {
                                    viewblockimg.src = user.user_ProfilePicture;

                                    let username;
                                    user.user_Mid_Name ? username =
                                        user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                        username = user.user_Firstname + ' ' + user.user_Surname;
                                    viewname.innerHTML = username;
                                    function filter_Image() {
                                        if (user.user_ProfilePicture_Filter == 'default') {
                                            viewblockimg.classList.add('--color-default');
                                        } else if (user.user_ProfilePicture_Filter == 'gray') {
                                            viewblockimg.classList.add('--color-gray');
                                        } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                            viewblockimg.classList.add('--color-contrast');
                                        } else if (user.user_ProfilePicture_Filter == 'bright') {
                                            viewblockimg.classList.add('--color-bright');
                                        } else if (user.user_ProfilePicture_Filter == 'blur') {
                                            viewblockimg.classList.add('--color-blur');
                                        } else if (user.user_ProfilePicture_Filter == 'invert') {
                                            viewblockimg.classList.add('--color-invert');
                                        } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                            viewblockimg.classList.add('--color-sepia');
                                        } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                            viewblockimg.classList.add('--color-hue-rotate');
                                        } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                            viewblockimg.classList.add('--color-opacity');
                                        } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                            viewblockimg.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                }
                            });
                        }
                        Poster_Details();
                    }
                });
            })
        });
    });
}
function createProfileOptions(locationId, user_Id) {
    document.querySelectorAll('.profile_options_container').forEach(optioncontainer => {
        optioncontainer.remove();
    });
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(profile => {
            if (profile.user_Id === locationId) {
                let option_header = document.createElement('header');
                let option_exit = document.createElement('div');
                let option_tag = document.createElement('b');
                let profile_options_container = document.createElement('div');
                let option_inner_container = document.createElement('div');
                let option_left = document.createElement('div');
                let option_right = document.createElement('div');
                let option_bottom = document.createElement('nav');
                let option_connect = document.createElement('button');
                let option_disconnect = document.createElement('button');
                let option_profile_bio = document.createElement('p');
                let option_profile_picture = document.createElement('div');
                let option_profile_picture_img = document.createElement('img');
                let option_profile_name = document.createElement('strong');
                document.body.appendChild(profile_options_container);
                option_header.appendChild(option_exit);
                option_header.appendChild(option_tag);
                profile_options_container.appendChild(option_header);
                profile_options_container.appendChild(option_inner_container);
                profile_options_container.appendChild(option_bottom);
                option_inner_container.appendChild(option_left);
                option_inner_container.appendChild(option_right);
                option_bottom.appendChild(option_connect);
                option_left.appendChild(option_profile_picture);
                option_left.appendChild(option_profile_name);
                option_right.appendChild(option_profile_bio);
                option_profile_picture.appendChild(option_profile_picture_img);
                option_exit.innerHTML = undo;
                option_profile_picture_img.src = profile.user_ProfilePicture;
                let username;
                profile.user_Mid_Name ? username = 
                profile.user_Firstname + ' ' + profile.user_Mid_Name + ' ' + profile.user_Surname : 
                username = profile.user_Firstname + ' ' + profile.user_Surname;
                option_profile_name.textContent = username;
                option_profile_bio.textContent = profile.user_Bio.trim();
                option_tag.innerHTML = 'User Profile Options &quest;';
                option_exit.classList.add('headerbtns');
                profile_options_container.classList.add('profile_options_container');
                option_connect.textContent = 'Connect';
                if (profile.user_CoverPhoto) {
                    option_profile_picture.style.backgroundImage = "url(" + profile.user_CoverPhoto + ")";
                } else {
                    option_profile_picture.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                }
                LogInFormData.forEach(user => {
                    if (user.user_Id === user_Id) {
                        let connections = user.user_Connection;
                        connections.forEach(friend => {
                            if (friend.connectionId === profile.user_Id) {
                                option_connect.textContent = 'Connected';
                            }
                        });
                        let sentconnections = user.user_SentRequest;
                        sentconnections.forEach(friend => {
                            if (friend.recieversId === profile.user_Id) {
                                option_connect.textContent = 'Cancel';
                            }
                        });
                        let connectionrequest = user.user_ConnectRequest;
                        connectionrequest.forEach(friend => {
                            if (friend.connectionId === profile.user_Id) {
                                option_connect.textContent = 'Accept';
                                option_disconnect.textContent = 'Decline';
                                option_bottom.appendChild(option_disconnect);
                            }
                        });
                    }
                });
                option_profile_picture.addEventListener('click', () => {
                    createUsersProfile(profile.user_Id);
                });
                option_connect.addEventListener('click', () => {
                    if (option_connect.textContent === 'Connect') {
                        option_connect.textContent = 'Cancel';
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            const id = '' + new Date().getTime();
                            if (user.user_Id === profile.user_Id) {
                                let connections = user.user_ConnectRequest;
                                connections.push({
                                    id: id,
                                    connectionId: user_Id,
                                    recieversId: profile.user_Id,
                                    time: new Date().getTime(),
                                    requestView: false,
                                });
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (user.user_Id === user_Id) {
                                let connections = user.user_SentRequest;
                                connections.push({
                                    id: id,
                                    connectionId: user_Id,
                                    recieversId: profile.user_Id,
                                    time: new Date().getTime(),
                                    requestView: false,
                                });
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    } else if (option_connect.textContent === 'Cancel') {
                        option_connect.textContent = 'Connect';
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === profile.user_Id) {
                                let connections = user.user_ConnectRequest;
                                connections = connections.filter(connect => {
                                    if (connect.connectionId === user_Id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                user.user_ConnectRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (user.user_Id === user_Id) {
                                let connections = user.user_SentRequest;
                                connections = connections.filter(connect => {
                                    if (connect.recieversId === profile.user_Id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                user.user_SentRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    } else if (option_connect.textContent === 'Accept') {
                        option_connect.textContent = 'Accepted';
                        option_connect.disabled = true;
                        option_disconnect.remove();
                        pushFriend();
                        option_connect.disabled = true;
                    }
                });
                option_disconnect.addEventListener('click', () => {
                    option_disconnect.textContent = 'Declined';
                    option_disconnect.disabled = true;
                    option_connect.remove();
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === profile.user_Id) {
                            let connectRequest = user.user_ConnectRequest;
                            connectRequest = connectRequest.filter(connection => {
                                if (connection.connectionId === user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_ConnectRequest = connectRequest;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                    LogInFormData.forEach(user => {
                        if (user.user_Id === user_Id) {
                            let sent_Request = user.user_SentRequest;
                            sent_Request = sent_Request.filter(connection => {
                                if (connection.recieversId === profile.user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_SentRequest = sent_Request;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                });
                option_exit.addEventListener('click', () => {
                    profile_options_container.remove();
                });
                if (profile.user_Id === user_Id) {
                    option_connect.remove();
                    option_disconnect.remove();
                    option_profile_name.textContent += ` (You)`;
                }
                function pushFriend() {
                    const id = '' + new Date().getTime();
                    LogInFormData.forEach(user => {
                        if (user.user_Id === user_Id) {
                            let connections = user.user_Connection;
                            connections.push({
                                connectionId: profile.user_Id,
                                id: id,
                                count: 0,
                                onlinestatus: false,
                                status: new Date().getTime(),
                                NotificationView: false,
                                connector_ChatView: false,
                            });
                            let connectRequest = user.user_ConnectRequest;
                            connectRequest = connectRequest.filter(connection => {
                                if (connection.connectionId === profile.user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_ConnectRequest = connectRequest;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        } if (user.user_Id === profile.user_Id) {
                            let connections = user.user_Connection;
                            let sent_Request = user.user_SentRequest;
                            connections.push({
                                connectionId: profile.user_Id,
                                id: id,
                                count: 0,
                                onlinestatus: false,
                                status: new Date().getTime(),
                                NotificationView: false,
                                connector_ChatView: false,
                            });
                            sent_Request = sent_Request.filter(sentRequest => {
                                if (sentRequest.recieversId === user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_SentRequest = sent_Request;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                    LogInFormData.forEach(user => {
                        if (user.user_Id === user_Id) {
                            let connectRequest = user.user_ConnectRequest;
                            connectRequest = connectRequest.filter(connection => {
                                if (connection.connectionId === profile.user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_ConnectRequest = connectRequest;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                    LogInFormData.forEach(user => {
                        if (user.user_Id === profile.user_Id) {
                            let sent_Request = user.user_SentRequest;
                            sent_Request = sent_Request.filter(sentRequest => {
                                if (sentRequest.recieversId === user_Id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_SentRequest = sent_Request;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                }
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
function removeInfopage() {
    document.querySelectorAll('.license_Popup').forEach(page => {
        page.remove();
    });
}