create_StatusBar();

function create_ThisPeople_List() {
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            createPeopleNotification(user.user_Id);
            let userpeoplecolumn = document.createElement('div');
            userpeoplecolumn.classList.add('userpeoplecolumn');
            userpeoplecolumn.id = user.user_Id;
            document.querySelector('.peopleculomn').appendChild(userpeoplecolumn);
            var activepage = sessionStorage.getItem('activepage');
            if (activepage == 'lavinstapeople' || activepage == 'peoplerequest' || activepage == 'sent_requests' || activepage == 'peoplelist') {
                document.querySelector('.people').style.display = 'flex';
                document.querySelector('.profile').style.display = 'none';
                function removeActive() {
                    document.querySelectorAll('#lavinstapeople').forEach(item => {
                        item.classList.remove('active');
                    });
                }
                if (sessionStorage.getItem('activepage') == 'lavinstapeople') {
                    document.querySelectorAll('#lavinstapeople').forEach(item => {
                        item.classList.add('active');
                    });
                    Create_People(user.user_Id, userpeoplecolumn);
                } else if (sessionStorage.getItem('activepage') == 'peoplerequest') {
                    removeActive();
                    document.querySelectorAll('#peoplerequest').forEach(item => {
                        item.classList.add('active');
                    });
                    createRequest(user.user_Id, userpeoplecolumn);
                } else if (sessionStorage.getItem('activepage') == 'sent_requests') {
                    removeActive();
                    document.querySelectorAll('#sent_requests').forEach(item => {
                        item.classList.add('active');
                    });
                    createSentRequest(user.user_Id, userpeoplecolumn);
                } else if (sessionStorage.getItem('activepage') == 'peoplelist') {
                    removeActive();
                    document.querySelectorAll('#peoplelist').forEach(item => {
                        item.classList.add('active');
                    });
                    createFriendList(user.user_Id, userpeoplecolumn);
                }
            } else {
                document.querySelector('.people').style.display = 'none';
            }
        });
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
        // data.user_Notifications = [];
        // data.user_Recent_Search = [];
        // data.user_Recent_Video_Search = [];
        // data.user_Play = 'default';
        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
    });
}
// reset();
//users friends List
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

function removeclones() {
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    if (JSON.parse(localStorage.getItem('ActiveUser_Account')).length !== 0) {
        document.querySelector('html').classList.remove('clone');
        document.querySelector('.addstory').classList.remove('clone');
        document.querySelectorAll('.stories_clone').forEach(clone => {
            clone.remove();
        });
        document.querySelectorAll('.clonedfeedcolumn').forEach(clone => {
            clone.remove();
        });
    } else {
        document.querySelector('html').classList.add('clone');
        document.querySelector('.addstory').classList.add('clone');
    }
}
removeclones();
function create_StatusBar() {
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            LogInFormData.forEach(profile => {
                const addstoryimagcontainer = document.querySelector('.addstoryimagcontainer');
                if (user.user_Id === profile.user_Id) {
                    const userstatusbar = document.querySelector('.statusbar');
                    let useraddstoryimg = document.createElement('img');
                    let storycount = document.createElement('span');
                    let mystory = document.createElement('div');
                    let beforeofmystory = document.createElement('div');
                    addstoryimagcontainer.innerHTML = '';
                    addstoryimagcontainer.appendChild(useraddstoryimg);
                    useraddstoryimg.src = profile.user_ProfilePicture;
                    userstatusbar.appendChild(mystory);
                    mystory.appendChild(beforeofmystory);
                    beforeofmystory.appendChild(storycount);
                    beforeofmystory.classList.add('beforeofmystory');
                    storycount.textContent = profile.user_Stories.length;
                    mystory.classList.add('mystory');
                    storycount.classList.add('storycount');
                    mystory.id = profile.user_Id;
                    storycount.id = profile.user_Id;
                    useraddstoryimg.id = profile.user_Id;
                    if (storycount.textContent == 0) {
                        mystory.style.display = 'none';
                    } else {
                        mystory.style.display = 'flex';
                    }
                    document.querySelector('.addstory').addEventListener('click', () => {
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
                            let beforeoffriendstatus = document.createElement('div');
                            friendstatus.classList.add('mystory');
                            friendstorycount.classList.add('storycount');
                            beforeoffriendstatus.classList.add('beforeofmystory')
                            friendstatus.appendChild(beforeoffriendstatus);
                            beforeoffriendstatus.appendChild(friendstorycount);
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
}
function get_Active_Chat_Page() {
    createUsersProfile(sessionStorage.getItem('activepage'));
}
get_Active_Chat_Page();

function createFriendList(locationId, column) {
    LogInFormData.forEach(data => {
        if (data.user_Id === locationId) {
            let connections = data.user_Connection;
            connections.forEach(connect => {
                let person = document.createElement('div');
                let personhead = document.createElement('span');
                let persontail = document.createElement('div');
                let personprofileimage = document.createElement('img');
                let personsname = document.createElement('p');
                let personAddandBlockFlex = document.createElement('div');
                let personaddbutton = document.createElement('span');
                personhead.appendChild(personprofileimage);
                column.appendChild(person);
                person.appendChild(personhead);
                person.appendChild(persontail);
                persontail.appendChild(personsname);
                persontail.appendChild(personAddandBlockFlex);
                personAddandBlockFlex.appendChild(personaddbutton);
                personsname.id = connect.connectionId;
                personaddbutton.id = connect.id;
                personprofileimage.id = connect.connectionId;
                function getDetails() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            personprofileimage.src = user.user_ProfilePicture;
                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname; f
                            personsname.textContent = username;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    personprofileimage.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    personprofileimage.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    personprofileimage.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    personprofileimage.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    personprofileimage.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    personprofileimage.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    personprofileimage.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    personprofileimage.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    personprofileimage.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    personprofileimage.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                }
                getDetails();
                personAddandBlockFlex.classList.add('personAddandBlockFlex')
                personaddbutton.textContent = 'view profile';

                personaddbutton.addEventListener('click', () => {
                    createUsersProfile(connect.connectionId);
                });
                personaddbutton.classList.add('personaddbutton');
                persontail.classList.add('persontail');
                personsname.classList.add('personsname');
                personhead.classList.add('personhead');
                person.classList.add('person');
                personprofileimage.classList.add('personprofileimage');
            });
        }
    });
}
function createSentRequest(locationId, column) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        if (user.user_Id === locationId) {
            let connections = user.user_SentRequest;
            connections.forEach(connect => {
                let person = document.createElement('div');
                let persontail = document.createElement('div');
                let personhead = document.createElement('div');
                let personprofileimage = document.createElement('img');
                let personsname = document.createElement('p');
                let personAddandBlockFlex = document.createElement('div');
                let personacceptbutton = document.createElement('button');
                let personrequesttime = document.createElement('button');
                personAddandBlockFlex.appendChild(personacceptbutton);
                personacceptbutton.textContent = 'cancel';
                personrequesttime.classList.add('personrequesttime');
                personacceptbutton.classList.add('personacceptbutton');
                personAddandBlockFlex.classList.add('personAddandBlockFlex')
                column.appendChild(person);
                person.appendChild(personhead);
                person.appendChild(persontail);
                persontail.appendChild(personsname);
                persontail.appendChild(personAddandBlockFlex);
                personhead.appendChild(personprofileimage);
                personhead.appendChild(personrequesttime);
                personacceptbutton.id = connect.id;
                person.id = connect.id;

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
                        personprofileimage.src = user.user_ProfilePicture;
                        let username;
                        user.user_Mid_Name ? username =
                            user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                            username = user.user_Firstname + ' ' + user.user_Surname; f
                        personsname.textContent = username;
                        function filter_Image() {
                            //profile_filter 
                            if (user.user_ProfilePicture_Filter == 'default') {
                                personprofileimage.classList.add('--color-default');
                            } else if (user.user_ProfilePicture_Filter == 'gray') {
                                personprofileimage.classList.add('--color-gray');
                            } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                personprofileimage.classList.add('--color-contrast');
                            } else if (user.user_ProfilePicture_Filter == 'bright') {
                                personprofileimage.classList.add('--color-bright');
                            } else if (user.user_ProfilePicture_Filter == 'blur') {
                                personprofileimage.classList.add('--color-blur');
                            } else if (user.user_ProfilePicture_Filter == 'invert') {
                                personprofileimage.classList.add('--color-invert');
                            } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                personprofileimage.classList.add('--color-sepia');
                            } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                personprofileimage.classList.add('--color-hue-rotate');
                            } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                personprofileimage.classList.add('--color-opacity');
                            } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                personprofileimage.classList.add('--color-satulate');
                            }
                        }
                        filter_Image();
                    }
                });
                person.classList.add('person');
                personhead.classList.add('personhead');
                persontail.classList.add('persontail');
                personsname.classList.add('personsname');
                personsname.id = locationId;
                personhead.id = locationId;

                personacceptbutton.addEventListener('click', () => {
                    cancelrequest();
                    personacceptbutton.textContent = 'cancelled';
                    personacceptbutton.disabled = true;
                });
                function cancelrequest() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(data => {
                        if (data.user_Id === locationId) {
                            let connections = data.user_SentRequest;
                            connections = connections.filter(connection => {
                                if (connection.recieversId === connect.recieversId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            data.user_SentRequest = connections;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                    LogInFormData.forEach(data => {
                        if (data.user_Id === connect.recieversId) {
                            let connections = data.user_ConnectRequest;
                            connections = connections.filter(connection => {
                                if (connection.connectionId === locationId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            data.user_ConnectRequest = connections;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    });
                }
                personsname.addEventListener('click', () => {
                    createUsersProfile(connect.recieversId);
                });
                personhead.addEventListener('click', () => {
                    createUsersProfile(connect.recieversId);
                });
            });
        }
    });
}
function createRequest(locationId, column) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        if (user.user_Id === locationId) {
            let connections = user.user_ConnectRequest;
            connections.forEach(connect => {
                let person = document.createElement('div');
                let persontail = document.createElement('div');
                let personhead = document.createElement('div');
                let personprofileimage = document.createElement('img');
                let personsname = document.createElement('p');
                let personAddandBlockFlex = document.createElement('div');
                let personacceptbutton = document.createElement('button');
                let persondeclinebutton = document.createElement('button');
                let personrequesttime = document.createElement('span');
                personAddandBlockFlex.appendChild(personacceptbutton);
                personAddandBlockFlex.appendChild(persondeclinebutton);
                personacceptbutton.textContent = 'accept';
                persondeclinebutton.textContent = 'decline';
                personrequesttime.classList.add('personrequesttime');
                personacceptbutton.classList.add('personacceptbutton');
                persondeclinebutton.classList.add('persondeclinebutton');
                personAddandBlockFlex.classList.add('personAddandBlockFlex')
                column.appendChild(person);
                person.appendChild(personhead);
                person.appendChild(persontail);
                persontail.appendChild(personsname);
                persontail.appendChild(personAddandBlockFlex);
                personhead.appendChild(personprofileimage);
                personhead.appendChild(personrequesttime);
                personacceptbutton.id = connect.id;
                persondeclinebutton.id = connect.id;
                person.id = connect.id;
                function pushFriend() {
                    const id = '' + new Date().getTime();
                    LogInFormData.forEach(user => {
                        if (user.user_Id === locationId) {
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
                                if (connection.connectionId === persondeclinebutton.id) {
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
                                connectionId: locationId,
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
                    LogInFormData.forEach(user => {
                        if (user.user_Id === locationId) {
                            let connectRequest = user.user_ConnectRequest;
                            connectRequest = connectRequest.filter(connection => {
                                if (connection.connectionId === connect.connectionId) {
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
                        if (user.user_Id === connect.connectionId) {
                            let sent_Request = user.user_SentRequest;
                            sent_Request = sent_Request.filter(sentRequest => {
                                if (sentRequest.recieversId === locationId) {
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
                    personacceptbutton.textContent = 'accepted';
                    personacceptbutton.disabled = true;
                    persondeclinebutton.remove();
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
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(user => {
                    if (user.user_Id === connect.connectionId) {
                        personprofileimage.src = user.user_ProfilePicture;
                        let username;
                        user.user_Mid_Name ? username =
                            user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                            username = user.user_Firstname + ' ' + user.user_Surname; f
                        personsname.textContent = username;
                        function filter_Image() {
                            //profile_filter 
                            if (user.user_ProfilePicture_Filter == 'default') {
                                personprofileimage.classList.add('--color-default');
                            } else if (user.user_ProfilePicture_Filter == 'gray') {
                                personprofileimage.classList.add('--color-gray');
                            } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                personprofileimage.classList.add('--color-contrast');
                            } else if (user.user_ProfilePicture_Filter == 'bright') {
                                personprofileimage.classList.add('--color-bright');
                            } else if (user.user_ProfilePicture_Filter == 'blur') {
                                personprofileimage.classList.add('--color-blur');
                            } else if (user.user_ProfilePicture_Filter == 'invert') {
                                personprofileimage.classList.add('--color-invert');
                            } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                personprofileimage.classList.add('--color-sepia');
                            } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                personprofileimage.classList.add('--color-hue-rotate');
                            } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                personprofileimage.classList.add('--color-opacity');
                            } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                personprofileimage.classList.add('--color-satulate');
                            }
                        }
                        filter_Image();
                    }
                });

                person.classList.add('person');
                personhead.classList.add('personhead');
                persontail.classList.add('persontail');
                personsname.classList.add('personsname');
                personsname.id = locationId;
                personhead.id = locationId;

                persondeclinebutton.addEventListener('click', () => {
                    declineRequest();
                    persondeclinebutton.disabled = true;
                    persondeclinebutton.textContent = 'declined';
                    personacceptbutton.remove();
                });
                function declineRequest() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === locationId) {
                            let connectRequest = user.user_ConnectRequest;
                            connectRequest = connectRequest.filter(connection => {
                                if (connection.connectionId === connect.connectionId) {
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
                        if (user.user_Id === connect.connectionId) {
                            let sent_Request = user.user_SentRequest;
                            sent_Request = sent_Request.filter(sentRequest => {
                                if (sentRequest.recieversId === locationId) {
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
                personsname.addEventListener('click', () => {
                    createUsersProfile(connect.connectionId);
                });
                personhead.addEventListener('click', () => {
                    createUsersProfile(connect.connectionId);
                });
            });
        }
    });
}
function createPeopleNotification(locationId) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(user => {
        if (user.user_Id === locationId) {
            let connections = user.user_ConnectRequest;
            connections.forEach(connection => {
                LogInFormData.forEach(user_Data => {
                    if (user_Data.user_Id === connection.connectionId && user.user_Id === locationId) {
                        function NotificationsOnly() {
                            Notification.requestPermission().then(perm => {
                                if (perm === 'granted') {
                                    new Notification("Lavinsta", {
                                        body: `hello ${user.user_Firstname + ' ' + user.user_Surname}, ${user_Data.user_Firstname + ' ' + user_Data.user_Surname} want a connection with you`,
                                        icon: 'lavinstaphotos/eagle.png',
                                        image: user_Data.user_ProfilePicture,
                                    });
                                }
                            });
                        }
                        if (connection.requestView === false) {
                            NotificationsOnly();
                            connection.requestView = true;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    }
                });
            });
            let friendsConnections = user.user_Connection;
            friendsConnections.forEach(connection => {
                LogInFormData.forEach(user_Data => {
                    if (user_Data.user_Id === connection.connectionId && user.user_Id === locationId) {
                        function NotificationsOnly() {
                            Notification.requestPermission().then(perm => {
                                if (perm === 'granted') {
                                    new Notification("Lavinsta", {
                                        body: `hello ${user.user_Firstname + ' ' + user.user_Surname}, you and ${user_Data.user_Firstname + ' ' + user_Data.user_Surname} are now connected on lavinsta`,
                                        icon: 'lavinstaphotos/eagle.png',
                                        image: user_Data.user_ProfilePicture,
                                    });
                                }
                            });
                        }
                        if (connection.NotificationView === false) {
                            NotificationsOnly();
                            connection.NotificationView = true;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    }
                });
            });
        }
    });
}
function Create_People(locationId, column) {
    LogInFormData.forEach(profile => {
        let person = document.createElement('div');
        let personhead = document.createElement('span');
        let personprofileimage = document.createElement('img');
        let persontail = document.createElement('div');
        let personsname = document.createElement('p');
        let personAddandBlockFlex = document.createElement('div');
        let personaddbutton = document.createElement('span');
        let personblockbutton = document.createElement('span');
        let username;
        profile.user_Mid_Name ? username =
            profile.user_Firstname + ' ' + profile.user_Mid_Name + ' ' + profile.user_Surname :
            username = profile.user_Firstname + ' ' + profile.user_Surname;
        column.appendChild(person);
        person.appendChild(personhead);
        person.appendChild(persontail);

        personhead.appendChild(personprofileimage);
        persontail.appendChild(personsname);
        persontail.appendChild(personAddandBlockFlex);

        personprofileimage.src = profile.user_ProfilePicture;
        personsname.textContent = username;
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
        if (person.id === locationId) {
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
        function filter_People() {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === locationId) {
                    let connections = user.user_Connection;
                    connections.forEach(connect => {
                        if (connect.connectionId === profile.user_Id) {
                            person.remove();
                        }
                    });
                    let receivedrequest = user.user_ConnectRequest;
                    receivedrequest.forEach(connect => {
                        if (connect.connectionId === profile.user_Id) {
                            person.remove();
                        }
                    });
                    let sentrequest = user.user_SentRequest;
                    sentrequest.forEach(connect => {
                        if (connect.recieversId === profile.user_Id) {
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
                                connectionId: locationId,
                                recieversId: profile.user_Id,
                                time: new Date().getTime(),
                                requestView: false,
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        } if (user.user_Id === locationId) {
                            let connections = user.user_SentRequest;
                            connections.push({
                                id: id,
                                connectionId: locationId,
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
                                if (connect.connectionId === locationId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            user.user_ConnectRequest = connections;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        } if (user.user_Id === locationId) {
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
            createUsersProfile(profile.user_Id);
        });
        personhead.addEventListener('click', () => {
            createUsersProfile(profile.user_Id);
        });
        filter_People();
    });
}
function removepeoplecolumn() {
    document.querySelectorAll('.userpeoplecolumn').forEach(container => {
        container.remove();
    });
}
document.querySelectorAll('.people_C_button').forEach(button => {
    button.addEventListener('click', () => {
        removepeoplecolumn();
        loadscreen();
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            let userpeoplecolumn = document.createElement('div');
            userpeoplecolumn.classList.add('userpeoplecolumn');
            userpeoplecolumn.id = user.user_Id;
            document.querySelector('.peopleculomn').appendChild(userpeoplecolumn);
            if (button.id == 'lavinstapeople') {
                Create_People(user.user_Id, userpeoplecolumn);
                sessionStorage.setItem('activepage', 'lavinstapeople');
            } else if (button.id == 'peoplerequest') {
                createRequest(user.user_Id, userpeoplecolumn);
                sessionStorage.setItem('activepage', 'peoplerequest');
            } else if (button.id == 'sent_requests') {
                createSentRequest(user.user_Id, userpeoplecolumn);
                sessionStorage.setItem('activepage', 'sent_requests');
            } else if (button.id == 'peoplelist') {
                createFriendList(user.user_Id, userpeoplecolumn);
                sessionStorage.setItem('activepage', 'peoplelist');
            }
        });
        stoploading();
    });
});
document.querySelector('#peopleclosebtn').addEventListener('click', () => {
    document.querySelector('.people').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
function secondcreatePeople() {
    removepeoplecolumn();
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(user => {
        let userpeoplecolumn = document.createElement('div');
        userpeoplecolumn.classList.add('userpeoplecolumn');
        userpeoplecolumn.id = user.user_Id;
        document.querySelector('.peopleculomn').appendChild(userpeoplecolumn);
        Create_People(user.user_Id, userpeoplecolumn);
    });
}