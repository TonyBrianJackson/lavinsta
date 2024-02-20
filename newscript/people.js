
let myFriendRequest = [];

function create_ThisPeople_List() {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        Create_People();
        createRequest();
        createSentRequest();
        createFriendList();
        createFriends();
        get_Active_Chat_Page();
        create_StatusBar();
    } else {
        LogInFormData = [];
    }
}
create_ThisPeople_List();
function reset() {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(data => {
        // data.user_Connection = [];
        // data.user_ConnectRequest = [];
        // data.user_SentRequest = [];
        // data.user_Story_Trash = [];
        // data.user_Stories = [];
        localStorage.setItem('LogInFormData',JSON.stringify(LogInFormData));
    });
}
// reset();
function Create_People() {
    let userpeoplecolumn = document.querySelectorAll('.userpeoplecolumn');
    userpeoplecolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData.forEach(profile => {
            let person = document.createElement('div');
            let personhead = document.createElement('span');
            let personprofileimage = document.createElement('img');
            let persontail = document.createElement('div');
            let personsname = document.createElement('p');
            let personAddandBlockFlex = document.createElement('div');
            let personaddbutton = document.createElement('span');
            let personblockbutton = document.createElement('span');
            column.appendChild(person);
            person.appendChild(personhead);
            person.appendChild(persontail);

            personhead.appendChild(personprofileimage);
            persontail.appendChild(personsname);
            persontail.appendChild(personAddandBlockFlex);

            personprofileimage.src = profile.user_ProfilePicture;
            personsname.textContent = profile.user_Firstname + ' ' + profile.user_Surname;
            personAddandBlockFlex.appendChild(personaddbutton);
            personAddandBlockFlex.appendChild(personblockbutton);

            personhead.id = profile.user_Id;
            personsname.id = profile.user_Id;
            person.id = profile.user_Id;
            personaddbutton.id = profile.user_Id;
            personblockbutton.id = profile.user_Id;
            personprofileimage.id = profile.user_Id;
            personblockbutton.style.display = 'none';
            personaddbutton.textContent = 'connect';
            personblockbutton.textContent = 'block';
            personaddbutton.classList.add('personaddbutton');
            personblockbutton.classList.add('personblockbutton');
            person.classList.add('person');
            personAddandBlockFlex.classList.add('personAddandBlockFlex');
            personhead.classList.add('personhead');
            persontail.classList.add('persontail');
            personsname.classList.add('personsname');
            if (person.id === column.id) {
                person.remove();
            }
            function filter_Image() {
                if (profile.user_ProfilePicture_Filter == 'default') {
                    personprofileimage.classList.add('--color-default');
                } else if (profile.user_ProfilePicture_Filter == 'gray') {
                    personprofileimage.classList.add('--color-gray');
                } else if (profile.user_ProfilePicture_Filter == 'contrast') {
                    personprofileimage.classList.add('--color-contrast');
                } else if (profile.user_ProfilePicture_Filter == 'bright') {
                    personprofileimage.classList.add('--color-bright');
                } else if (profile.user_ProfilePicture_Filter == 'blur') {
                    personprofileimage.classList.add('--color-blur');
                } else if (profile.user_ProfilePicture_Filter == 'invert') {
                    personprofileimage.classList.add('--color-invert');
                } else if (profile.user_ProfilePicture_Filter == 'sepia') {
                    personprofileimage.classList.add('--color-sepia');
                } else if (profile.user_ProfilePicture_Filter == 'hue-rotate') {
                    personprofileimage.classList.add('--color-hue-rotate');
                } else if (profile.user_ProfilePicture_Filter == 'opacity') {
                    personprofileimage.classList.add('--color-opacity');
                } else if (profile.user_ProfilePicture_Filter == 'satulate') {
                    personprofileimage.classList.add('--color-satulate');
                }
            }
            filter_Image();
            function filter_People_From_friends() {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === column.id) {
                        let connections = user.user_Connection;
                        connections.forEach(connect => {
                            if (connect.connectionId === profile.user_Id) {
                                person.remove();
                            }
                        });
                    }
                });
            }
            function filter_People_From_Request() {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === column.id) {
                        let connections = user.user_ConnectRequest;
                        connections.forEach(connect => {
                            if (connect.connectionId === column.id || connect.recieversId === profile.user_Id) {
                                person.remove();
                            }
                        });
                    }
                });
            }

            function send_friend_request() {
                personaddbutton.addEventListener('click', () => {
                    if (personaddbutton.textContent == 'connect') {
                        personaddbutton.textContent = 'cancel';
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            const id = '' + new Date().getTime();
                            if (user.user_Id === profile.user_Id) {
                                let connections = user.user_ConnectRequest;
                                connections.push({
                                    id: id,
                                    connectionId: column.id,
                                    recieversId: profile.user_Id,
                                    time: new Date().getTime(),
                                    requestView: false,
                                });
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (user.user_Id === column.id) {
                                let connections = user.user_SentRequest;
                                connections.push({
                                    id: id,
                                    connectionId: column.id,
                                    recieversId: profile.user_Id,
                                    time: new Date().getTime(),
                                    requestView: false,
                                });
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    } else if (personaddbutton.textContent == 'cancel') {
                        personaddbutton.textContent = 'connect';
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === profile.user_Id) {
                                let connections = user.user_ConnectRequest;
                                connections = connections.filter(connect => {
                                    if (connect.connectionId === column.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                user.user_ConnectRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (user.user_Id === column.id) {
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
                    }
                });
            }
            send_friend_request();
            personsname.addEventListener('click', () => {
                view_Profile(profile.user_Id);
            });
            personhead.addEventListener('click', () => {
                view_Profile(profile.user_Id);
            });
            filter_People_From_Request();
            filter_People_From_friends();
        });
    });
}
//friends list on people page
function createFriendList() {
    let usersfriendlistcolumn = document.querySelectorAll('.usersfriendlistcolumn');
    usersfriendlistcolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData.forEach(data => {
            if (data.user_Id === column.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    let friendcontainer = document.createElement('div');
                    let friendsLeft = document.createElement('span');
                    let friendsRight = document.createElement('div');
                    let friendProfilePicture = document.createElement('img');
                    let friendname = document.createElement('p');
                    let frienddisconnect = document.createElement('span');
                    friendsLeft.appendChild(friendProfilePicture);
                    column.appendChild(friendcontainer);
                    friendcontainer.appendChild(friendsLeft);
                    friendcontainer.appendChild(friendsRight);
                    friendsRight.appendChild(friendname);
                    friendsRight.appendChild(frienddisconnect);
                    friendname.id = connect.connectionId;
                    frienddisconnect.id = connect.id;
                    friendProfilePicture.id = connect.connectionId;
                    function getDetails() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === connect.connectionId) {
                                friendProfilePicture.src = user.user_ProfilePicture;
                                friendname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        friendProfilePicture.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        friendProfilePicture.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        friendProfilePicture.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        friendProfilePicture.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        friendProfilePicture.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        friendProfilePicture.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        friendProfilePicture.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        friendProfilePicture.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        friendProfilePicture.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        friendProfilePicture.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    getDetails();
                    frienddisconnect.textContent = 'view profile';

                    frienddisconnect.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                    frienddisconnect.classList.add('frienddisconnect');
                    friendsRight.classList.add('friendsRight');
                    friendname.classList.add('friendname');
                    friendsLeft.classList.add('friendsLeft');
                    friendcontainer.classList.add('friendcontainer');
                    friendProfilePicture.classList.add('friendProfilePicture');
                })
            }
        });
    });
}
//users friends List
function createFriends() {
    let userfriendListColumn = document.querySelectorAll('.userfriendListColumn');
    userfriendListColumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData.forEach(data => {
            if (data.user_Id === column.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    let friendcontainer = document.createElement('div');
                    let friendsLeft = document.createElement('span');
                    let friendsRight = document.createElement('div');
                    let friendProfilePicture = document.createElement('img');
                    let friendname = document.createElement('p');
                    let frienddisconnect = document.createElement('span');
                    friendsLeft.appendChild(friendProfilePicture);
                    column.appendChild(friendcontainer);
                    friendcontainer.appendChild(friendsLeft);
                    friendcontainer.appendChild(friendsRight);
                    friendsRight.appendChild(friendname);
                    friendsRight.appendChild(frienddisconnect);
                    friendname.id = connect.connectionId;
                    frienddisconnect.id = connect.id;
                    friendProfilePicture.id = connect.connectionId;

                    function getDetails() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === connect.connectionId) {
                                friendProfilePicture.src = user.user_ProfilePicture;
                                friendname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        friendProfilePicture.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        friendProfilePicture.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        friendProfilePicture.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        friendProfilePicture.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        friendProfilePicture.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        friendProfilePicture.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        friendProfilePicture.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        friendProfilePicture.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        friendProfilePicture.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        friendProfilePicture.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    getDetails();

                    if (Array.isArray(JSON.parse)) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                frienddisconnect.textContent = 'my profile';
                            } else {
                                frienddisconnect.textContent = 'view profile';
                            }
                        });
                    }

                    frienddisconnect.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                    frienddisconnect.classList.add('frienddisconnect');
                    friendsRight.classList.add('friendsRight');
                    friendname.classList.add('friendname');
                    friendsLeft.classList.add('friendsLeft');
                    friendcontainer.classList.add('friendcontainer');
                    friendProfilePicture.classList.add('friendProfilePicture');
                })
            }
        });
    });
}
document.querySelector('#notification').addEventListener('click', () => {
    if (ActiveUser_Account) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(data => {
                if (user.user_Id === data.user_Id) {
                    data.user_NotificationView = true;
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                }
            });
        });
    }
});
function createRequest() {
    let usersfriendrequestcolumn = document.querySelectorAll('.usersfriendrequestcolumn');
    usersfriendrequestcolumn.forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let connections = user.user_ConnectRequest;
                connections.forEach(connect => {
                    let friendconnectrequest = document.createElement('div');
                    let friendconnecttail = document.createElement('div');
                    let friendrequesthead = document.createElement('div');
                    let friendsrequestimg = document.createElement('img');
                    let personrequestname = document.createElement('p');
                    let personrequestandacceptgrid = document.createElement('div');
                    let personacceptbutton = document.createElement('span');
                    let persondeclinebutton = document.createElement('span');
                    let personrequesttime = document.createElement('span');
                    personrequestandacceptgrid.appendChild(personacceptbutton);
                    personrequestandacceptgrid.appendChild(persondeclinebutton);
                    personacceptbutton.textContent = 'accept';
                    persondeclinebutton.textContent = 'decline';
                    personrequesttime.classList.add('personrequesttime');
                    personacceptbutton.classList.add('personacceptbutton');
                    persondeclinebutton.classList.add('persondeclinebutton');
                    personrequestandacceptgrid.classList.add('personAddandBlockFlex')
                    column.appendChild(friendconnectrequest);
                    friendconnectrequest.appendChild(friendrequesthead);
                    friendconnectrequest.appendChild(friendconnecttail);
                    friendconnecttail.appendChild(personrequestname);
                    friendconnecttail.appendChild(personrequestandacceptgrid);
                    friendrequesthead.appendChild(friendsrequestimg);
                    friendrequesthead.appendChild(personrequesttime);
                    personacceptbutton.id = connect.id;
                    persondeclinebutton.id = connect.id;
                    friendconnectrequest.id = connect.id;
                    function pushFriend() {
                        const id = '' + new Date().getTime();
                        LogInFormData.forEach(user => {
                            if (user.user_Id === column.id) {
                                let connections = user.user_Connection;
                                connections.push({
                                    connectionId: connect.connectionId,
                                    id: id,
                                    count: 0,
                                    onlinestatus: false,
                                    status: new Date().getTime(),
                                    NotificationView: false,
                                    connector_ChatView: false,
                                });
                                let connectRequest = user.user_ConnectRequest;
                                connectRequest = connectRequest.filter(connection => {
                                    if (connection.id === persondeclinebutton.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                user.user_ConnectRequest = connectRequest;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (user.user_Id === connect.connectionId) {
                                let connections = user.user_Connection;
                                let sent_Request = user.user_SentRequest;
                                connections.push({
                                    connectionId: column.id,
                                    id: id,
                                    count: 0,
                                    onlinestatus: false,
                                    status: new Date().getTime(),
                                    NotificationView: false,
                                    connector_ChatView: false,
                                });
                                sent_Request = sent_Request.filter(sentRequest => {
                                    if (sentRequest.id === personacceptbutton.id) {
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
                    personacceptbutton.addEventListener('click', () => {
                        pushFriend();
                        createRequest();
                    });

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - connect.time;
                        var token;
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        }
                    }
                    startTime();
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            friendsrequestimg.src = user.user_ProfilePicture;
                            personrequestname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    friendsrequestimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    friendsrequestimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    friendsrequestimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    friendsrequestimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    friendsrequestimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    friendsrequestimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    friendsrequestimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    friendsrequestimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    friendsrequestimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    friendsrequestimg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(user => {
                        LogInFormData.forEach(user_Data => {
                            if (user_Data.user_Id === connect.connectionId && user.user_Id === column.id) {
                                function NotificationsOnly() {
                                    Notification.requestPermission().then(perm => {
                                        if (perm === 'granted') {
                                            new Notification("Lavinsta", {
                                                body: `hello ${user.user_Firstname + ' ' + user.user_Surname}, ${user_Data.user_Firstname + ' ' + user_Data.user_Surname} sent a connection request`,
                                                icon: 'lavinstaphotos/eagle.png',
                                                image: user_Data.user_ProfilePicture,
                                            });
                                        }
                                    });
                                }
                                if (connect.requestView === false) {
                                    NotificationsOnly();
                                    connect.requestView = true;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                        });
                    });

                    friendconnectrequest.classList.add('friendconnectrequest');
                    friendrequesthead.classList.add('personhead');
                    friendconnecttail.classList.add('persontail');
                    personrequestname.classList.add('personsname');
                    personrequestname.id = column.id;
                    friendrequesthead.id = column.id;

                    persondeclinebutton.addEventListener('click', () => {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            if (data.user_Id === column.id) {
                                let connections = data.user_ConnectRequest;
                                connections = connections.filter(connection => {
                                    if (connection.id === persondeclinebutton.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                data.user_ConnectRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (data.user_Id === connect.connectionId) {
                                let sent_Request = data.user_SentRequest;
                                sent_Request = sent_Request.filter(sentRequest => {
                                    if (sentRequest.id === persondeclinebutton.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                data.user_SentRequest = sent_Request;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                            createRequest();
                        });
                    });
                    personrequestname.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                    friendrequesthead.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                });
            }
        });
    })
}
function createSentRequest() {
    document.querySelectorAll('.usersentrequestcolumn').forEach(column => {
        column.innerHTML = '';
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === column.id) {
                let connections = user.user_SentRequest;
                connections.forEach(connect => {
                    let friendconnectrequest = document.createElement('div');
                    let friendconnecttail = document.createElement('div');
                    let friendrequesthead = document.createElement('div');
                    let friendsrequestimg = document.createElement('img');
                    let personrequestname = document.createElement('p');
                    let personrequestandacceptgrid = document.createElement('div');
                    let personacceptbutton = document.createElement('span');
                    let personrequesttime = document.createElement('span');
                    personrequestandacceptgrid.appendChild(personacceptbutton);
                    personacceptbutton.textContent = 'cancel';
                    personrequesttime.classList.add('personrequesttime');
                    personacceptbutton.classList.add('personacceptbutton');
                    personrequestandacceptgrid.classList.add('personAddandBlockFlex')
                    column.appendChild(friendconnectrequest);
                    friendconnectrequest.appendChild(friendrequesthead);
                    friendconnectrequest.appendChild(friendconnecttail);
                    friendconnecttail.appendChild(personrequestname);
                    friendconnecttail.appendChild(personrequestandacceptgrid);
                    friendrequesthead.appendChild(friendsrequestimg);
                    friendrequesthead.appendChild(personrequesttime);
                    personacceptbutton.id = connect.id;
                    friendconnectrequest.id = connect.id;

                    personacceptbutton.addEventListener('click', () => {
                        pushFriend();
                        createRequest();
                    });

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - connect.time;
                        var token;
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            personrequesttime.innerHTML = Math.trunc(maintime) + ' ' + token;
                        }
                    }
                    startTime();
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.recieversId) {
                            friendsrequestimg.src = user.user_ProfilePicture;
                            personrequestname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    friendsrequestimg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    friendsrequestimg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    friendsrequestimg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    friendsrequestimg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    friendsrequestimg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    friendsrequestimg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    friendsrequestimg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    friendsrequestimg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    friendsrequestimg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    friendsrequestimg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    friendconnectrequest.classList.add('friendconnectrequest');
                    friendrequesthead.classList.add('personhead');
                    friendconnecttail.classList.add('persontail');
                    personrequestname.classList.add('personsname');
                    personrequestname.id = column.id;
                    friendrequesthead.id = column.id;

                    personacceptbutton.addEventListener('click', () => {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            if (data.user_Id === column.id) {
                                let connections = data.user_SentRequest;
                                connections = connections.filter(connection => {
                                    if (connection.id === personacceptbutton.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                data.user_SentRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } if (data.user_Id === connect.recieversId) {
                                let connections = data.user_ConnectRequest;
                                connections = connections.filter(connection => {
                                    if (connection.id === personacceptbutton.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                data.user_ConnectRequest = connections;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                            createRequest();
                            createSentRequest();
                        });
                    });
                    personrequestname.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                    friendrequesthead.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                });
            }
        });
    });
}
function createFriendRequest() {
    if (Array.isArray(JSON.parse)) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(data => {
            LogInFormData.forEach(user => {
                if (user.user_Id === data.user_Id) {
                    function checkConnectionRequest() {
                        let addbutton = document.querySelectorAll('.personaddbutton');
                        myFriendRequest.forEach(request => {
                            addbutton.forEach(button => {
                                if (user.user_Id === connect.connectionId) {
                                    if (column.id === button.id && user.user_Id === connect.connectionId) {
                                        button.classList.remove('unsent_Request');
                                        button.classList.add('sent_Request');
                                    } if (connect.connectionId === button.id && column.id === user.user_Id) {
                                        button.classList.add('unsent_Request');
                                        button.classList.remove('sent_Request');
                                    }
                                }
                            });
                        });
                    }
                    if (Array.isArray(JSON.parse(localStorage.getItem('myFriendRequest')))) {
                        myFriendRequest = JSON.parse(localStorage.getItem('myFriendRequest'));
                        checkConnectionRequest();
                    }
                }
            });
        });
    }
}
createFriendRequest();
function create_StatusBar() {
    ActiveUser_Account.forEach(user => {
        LogInFormData.forEach(profile => {
            if (user.user_Id === profile.user_Id) {
                let userstatusbar = document.createElement('div');
                let useraddstatus = document.createElement('div');
                let useraddstoryimagecontainer = document.createElement('div');
                let useraddstoryimg = document.createElement('img');
                let storycount = document.createElement('span');
                let mystory = document.createElement('div');
                useraddstoryimagecontainer.appendChild(useraddstoryimg);
                useraddstoryimagecontainer.classList.add('addstoryimagcontainer');
                useraddstoryimg.src = profile.user_ProfilePicture;
                userstatusbar.appendChild(useraddstatus);
                userstatusbar.appendChild(mystory);
                document.querySelector('.statusbarcontainer').appendChild(userstatusbar);
                useraddstatus.appendChild(useraddstoryimagecontainer);
                mystory.appendChild(storycount);
                storycount.textContent = profile.user_Stories.length;
                mystory.classList.add('mystory');
                storycount.classList.add('storycount');
                useraddstatus.classList.add('addstory');
                userstatusbar.classList.add('statusbar');
                mystory.id = profile.user_Id;
                storycount.id = profile.user_Id;
                useraddstoryimg.id = profile.user_Id;
                useraddstoryimg.id = profile.user_Id;
                useraddstatus.id = profile.user_Id;
                userstatusbar.id = profile.user_Id;
                if (storycount.textContent < 0) {
                    storycount.textContent = 0;
                    profile.my_StoryCount = storycount.textContent;
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                } if (storycount.textContent == 0) {
                    mystory.style.display = 'none';
                } else {
                    mystory.style.display = 'flex';
                }
                useraddstatus.addEventListener('click', () => {
                    document.querySelector('.actualstorypopup').style.display = 'flex';
                });
                function filter_Image_Profile() {
                    if (profile.user_ProfilePicture_Filter == 'default') {
                        useraddstoryimg.classList.add('--color-default');
                    } else if (profile.user_ProfilePicture_Filter == 'gray') {
                        useraddstoryimg.classList.add('--color-gray');
                    } else if (profile.user_ProfilePicture_Filter == 'contrast') {
                        useraddstoryimg.classList.add('--color-contrast');
                    } else if (profile.user_ProfilePicture_Filter == 'bright') {
                        useraddstoryimg.classList.add('--color-bright');
                    } else if (profile.user_ProfilePicture_Filter == 'blur') {
                        useraddstoryimg.classList.add('--color-blur');
                    } else if (profile.user_ProfilePicture_Filter == 'invert') {
                        useraddstoryimg.classList.add('--color-invert');
                    } else if (profile.user_ProfilePicture_Filter == 'sepia') {
                        useraddstoryimg.classList.add('--color-sepia');
                    } else if (profile.user_ProfilePicture_Filter == 'hue-rotate') {
                        useraddstoryimg.classList.add('--color-hue-rotate');
                    } else if (profile.user_ProfilePicture_Filter == 'opacity') {
                        useraddstoryimg.classList.add('--color-opacity');
                    } else if (profile.user_ProfilePicture_Filter == 'satulate') {
                        useraddstoryimg.classList.add('--color-satulate');
                    }
                }
                filter_Image_Profile();
                function create_Friends_Start() {
                    let connections = profile.user_Connection;
                    connections.forEach(connect => {
                        let friendstatus = document.createElement('div');
                        let friendstorycount = document.createElement('span');
                        friendstatus.classList.add('mystory');
                        friendstorycount.classList.add('storycount');
                        friendstatus.appendChild(friendstorycount);
                        friendstatus.id = connect.connectionId;
                        friendstorycount.id = connect.connectionId;
                        userstatusbar.appendChild(friendstatus);
                        LogInFormData.forEach(user => {
                            if (user.user_Id === connect.connectionId) {
                                friendstorycount.textContent = user.user_Stories.length;
                            }
                        });
                        if (friendstorycount.textContent == 0) {
                            friendstatus.style.display = 'none';
                        } else {
                            friendstatus.style.display = 'flex';
                        }
                    });
                }
                create_Friends_Start();
            }
        });
    });
}
function get_Active_Chat_Page() {
    let profile_Cliant = document.querySelectorAll('.profile_Cliant');
    profile_Cliant.forEach(profile => {
        if (profile.id === sessionStorage.getItem('activepage')) {
            profile.style.display = 'flex';
        } else {
            profile.style.display = 'none';
        }
    });
}