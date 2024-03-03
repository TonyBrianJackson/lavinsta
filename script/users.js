//arrays
let myFriends = [];
let myChatMsg = [];
let myCommunities = [];
const myFriendArray = JSON.parse(localStorage.getItem('myFriends'));
const chatMessage = JSON.parse(localStorage.getItem('myChatMsg'));
const communities = JSON.parse(localStorage.getItem('myCommunities'));
const User_Connection_Request = JSON.parse(localStorage.getItem('myFriendRequest'));


function createUsersProfile(locationId) {
    sessionStorage.setItem('activepage',locationId);
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(profile => {
        if (profile.user_Id === locationId) {
            let userprofileheader = document.createElement('header');
            let userprofileexit = document.createElement('span');
            let profile_Cliant = document.createElement('div');
            let usersprofile = document.createElement('div');
            let userprofilecolumn = document.createElement('div');
            let userscoverphotocontainer = document.createElement('div');
            let usercoverphoto = document.createElement('img');
            let userspreview = document.createElement('div');
            let userprofilepic = document.createElement('div');
            let userprofilepicture = document.createElement('img');
            let userspreviewflex = document.createElement('div');
            let usersname = document.createElement('b');
            let usertopactivity = document.createElement('div');
            let usertopactivitytimeline = document.createElement('span');
            let usertopactivitypublic = document.createElement('span');
            let usertopactivityothers = document.createElement('span');
            let usertimelinetext = document.createElement('span');
            let userpublic = document.createElement('span');
            let userothers = document.createElement('span');
            let topacttimeline = document.createElement('img');
            let topactpublic = document.createElement('img');
            let topactothers = document.createElement('img');
            let userconnectgrid = document.createElement('nav');
            let user_Connection_Grid_Inner = document.createElement('div');

            let user_More_Option_Views = document.createElement('span');
            let userconnect_Container = document.createElement('span');
            let user_Information_View_Container = document.createElement('span');
            let user_Friends_View_Container = document.createElement('span');

            let userconnect = document.createElement('img');
            let usersinformationview = document.createElement('img');
            let usersfriendsview = document.createElement('img');

            userspreview.appendChild(user_More_Option_Views);
            user_More_Option_Views.innerHTML = '&vellip;';

            userconnect.src = 'icons/add-user.png';
            usersfriendsview.src = 'icons/tow-people_solid.png';
            usersinformationview.src = 'icons/information.png';
            userconnectgrid.id = profile.user_Id;
            userprofileexit.id = profile.user_Id;
            user_More_Option_Views.id = profile.user_Id;
            userprofileheader.id = profile.user_Id;
            userconnect_Container.id = profile.user_Id;

            userconnect_Container.appendChild(userconnect);
            user_Friends_View_Container.appendChild(usersfriendsview);
            user_Information_View_Container.appendChild(usersinformationview);

            userconnectgrid.appendChild(user_Connection_Grid_Inner);
            user_Connection_Grid_Inner.appendChild(userconnect_Container);
            user_Connection_Grid_Inner.appendChild(user_Friends_View_Container);
            user_Connection_Grid_Inner.appendChild(user_Information_View_Container);

            userconnect_Container.classList.add('userconnect_Container');
            userconnect_Container.classList.add('unsent_Request');
            user_Friends_View_Container.classList.add('user_Friends_View_Container');
            user_Information_View_Container.classList.add('user_Information_View_Container');
            user_More_Option_Views.classList.add('user_More_Option_Views');
            function send_friend_request(user_Id) {
                userconnect_Container.addEventListener('click', () => {
                    if (userconnect_Container.classList.contains('unsent_Request')) {
                        userconnect_Container.classList.add('sent_Request');
                        userconnect_Container.classList.remove('unsent_Request');
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            function pushrequest() {
                                const id = '' + new Date().getTime();
                                if (data.user_Id === profile.user_Id) {
                                    let connections = data.user_ConnectRequest;
                                    connections.push({
                                        id: id,
                                        connectionId: user_Id,
                                        recieversId: profile.user_Id,
                                        time: new Date().getTime(),
                                        requestView: false,
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                } if (data.user_Id === user_Id) {
                                    let connections = data.user_SentRequest;
                                    connections.push({
                                        id: id,
                                        connectionId: user_Id,
                                        recieversId: profile.user_Id,
                                        time: new Date().getTime(),
                                        requestView: false,
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                            pushrequest();
                        });
                    } else if (userconnect_Container.classList.contains('sent_Request')) {
                        userconnect_Container.classList.remove('sent_Request');
                        userconnect_Container.classList.add('unsent_Request');
                        function removerequest() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(data => {
                                if (data.user_Id === profile.user_Id) {
                                    let connections = data.user_ConnectRequest;
                                    connections = connections.filter(connection => {
                                        if (connection.connectionId === user_Id) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                } if (data.user_Id === user_Id) {
                                    let connections = data.user_SentRequest;
                                    connections = connections.filter(connection => {
                                        if (connection.recieversId === profile.user_Id) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            });
                        }
                        removerequest();
                    }
                });
            }
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(user => {
                send_friend_request(user.user_Id);
                checkRequest(user.user_Id);
            });
            function checkRequest(user_Id) {
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.forEach(data => {
                    if (data.user_Id === user_Id) {
                        let connections = data.user_ConnectRequest;
                        connections.forEach(connection => {
                            if (connection.recieversId === profile.user_Id) {
                                userconnect_Container.classList.add('sent_Request');
                                userconnect_Container.classList.remove('unsent_Request');
                            } else {
                                userconnect_Container.classList.remove('sent_Request');
                                userconnect_Container.classList.add('unsent_Request');
                            }
                        })
                    }
                });
            }
            function Un_friend() {
                userconnect_Container.addEventListener('click', () => {
                    if (userconnect_Container.classList.contains('connected')) {
                        userconnect_Container.classList.add('unsent_Request');
                        userconnect_Container.classList.remove('connected');
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                if (user.user_Id === profile.user_Id) {
                                    let connections = user.user_Connection;
                                    if (connections) {
                                        connections = connections.filter(connect => {
                                            if (connect.connectionId === data.user_Id) {
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        });
                                        user.user_Connection = connections;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                } if (user.user_Id === data.user_Id) {
                                    let connections = user.user_Connection;
                                    if (connections) {
                                        connections = connections.filter(connect => {
                                            if (connect.connectionId === profile.user_Id) {
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        });
                                        user.user_Connection = connections;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                }
                            });
                        });
                    }
                });

                function checkRequest() {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(user => {
                        LogInFormData.forEach(data => {
                            if (data.user_Id === profile.user_Id) {
                                let connections = data.user_Connection;
                                connections.forEach(connect => {
                                    if (connect.connectionId === user.user_Id) {
                                        userconnect_Container.classList.add('connected');
                                        userconnect_Container.classList.remove('unsent_Request');
                                    }
                                });
                            }
                        });
                        if (user.user_Id === profile.user_Id) {
                            userconnect_Container.remove();
                        }
                    });
                }
                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                ActiveUser_Account.forEach(user => {
                    send_friend_request();
                });
                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    checkRequest();
                } else {
                    ActiveUser_Account = [];
                }
            }
            Un_friend();

            function createchatRoom_Button() {
                ActiveUser_Account.forEach(user => {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(data => {
                        if (data.user_Id === user.user_Id) {
                            let friends = data.user_Connection;
                            friends.forEach(friend => {
                                if (friend.connectionId === profile.user_Id) {
                                    let user_Chat_Room = document.createElement('span');
                                    let user_Chat_Room_Img = document.createElement('img');
                                    user_Connection_Grid_Inner.appendChild(user_Chat_Room);
                                    user_Chat_Room.appendChild(user_Chat_Room_Img);
                                    user_Chat_Room_Img.src = 'icons/more icons/chat.png';
                                    user_Chat_Room.classList.add('headerbtns');
                                    user_Chat_Room.id = friend.connectionId + data.user_Id;
                                    function decreasecount() {
                                        create_Chat_Rooms(friend.connectionId + user.user_Id, friend.connectionId, data.user_Id, friend.status);
                                        document.querySelectorAll('.userchatroom').forEach(chatroom => {
                                            if (user_Chat_Room.id === chatroom.id) {
                                                chatroom.classList.add('Funcy_Box_Shadow');
                                                setTimeout(() => {
                                                    chatroom.classList.remove('Funcy_Box_Shadow');
                                                }, 2000);
                                                sessionStorage.setItem('activepage', friend.connectionId + user.user_Id);
                                                document.querySelector('.navigatiofloatcontainer').style.display = 'none';
                                            }
                                        });
                                        if (JSON.parse(localStorage.getItem('myChatMsg'))) {
                                            myChatMsg = JSON.parse(localStorage.getItem('myChatMsg'));
                                            myChatMsg.forEach(chat => {
                                                if (chat.friendId_Receivers + chat.chat_ReceiverId === user_Chat_Room.id) {
                                                    chat.chatvisibilty = 'seen';
                                                    localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                                }
                                            });
                                        }

                                        if (LogInFormData) {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));;
                                            LogInFormData.forEach(user => {
                                                let userschatcount = document.querySelectorAll('.userschatcount');
                                                userschatcount.forEach(count => {
                                                    if (count.id === friend.friendId_Receivers && user.user_Id === friend.friendId_Receivers) {
                                                        count.style.display = 'none';
                                                        user.user_ChatView = true;
                                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                    }
                                                })
                                            })
                                        }
                                    }
                                    user_Chat_Room.addEventListener('click', () => {
                                        decreasecount();
                                    });

                                }
                            })
                        }
                    });
                });
            }
            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                createchatRoom_Button();
            } else {
                ActiveUser_Account = [];
            }
            userconnect.classList.add('userconnect');
            user_More_Option_Views.addEventListener('click', () => {
                userconnectgrid.classList.toggle('userconnectgridactive');
            });
            userconnectgrid.classList.add('userconnectgrid');

            //users mini profile
            let userstrash = document.createElement('nav');

            document.body.appendChild(userstrash);
            userstrash.style.display = 'none';

            let userbioblock = document.createElement('div');
            let userbioinfor = document.createElement('p');

            let userprofileminimizer = document.createElement('span');
            let userpostgridcontainer = document.createElement('nav');
            let userpostgrid = document.createElement('div');

            let userfriendlist = document.createElement('nav');
            let userfriendListColumn = document.createElement('div');
            let userfollowerlist = document.createElement('nav');
            let usersfriendlistheader = document.createElement('header');
            let usersfollowerslistheader = document.createElement('header');
            let userfriendlistexit = document.createElement('span');
            let userfollowersexit = document.createElement('span');
            usersfriendlistheader.appendChild(userfriendlistexit);
            usersfollowerslistheader.appendChild(userfollowersexit);
            usersfriendlistheader.classList.add('XyFireRecTorFas');
            usersfollowerslistheader.classList.add('XyFireRecTorFas');

            //profile picture and cover photo uploader.
            document.body.appendChild(userfriendlist);
            document.body.appendChild(userfollowerlist);
            userpostgridcontainer.appendChild(userpostgrid);

            userbioblock.appendChild(userbioinfor);
            userbioblock.classList.add('bioblock');

            if (profile.user_Bio === '') {
                userbioblock.style.display = 'none';
            } else {
                userbioinfor.textContent = profile.user_Bio;
                userbioblock.style.display = 'grid';
            }

            //userscount
            function usersCount() {
                function HomePageCounts() {
                    let usersnotificationcount = document.createElement('span');
                    let userschatcount = document.createElement('span');
                    let userspeoplecount = document.createElement('span');
                    let usersfeedcount = document.createElement('span');
                    let usersvideocount = document.createElement('span');

                    let feedcount = document.createElement('span');
                    let photocount = document.createElement('span');
                    let shortcount = document.createElement('span');

                    usersnotificationcount.id = profile.user_Id;
                    userschatcount.id = profile.user_Id;
                    userspeoplecount.id = profile.user_Id;
                    usersfeedcount.id = profile.user_Id;
                    usersvideocount.id = profile.user_Id;

                    feedcount.id = profile.user_Id;
                    photocount.id = profile.user_Id;
                    shortcount.id = profile.user_Id;

                    userstrash.appendChild(usersnotificationcount);
                    userstrash.appendChild(userschatcount);
                    userstrash.appendChild(userspeoplecount);
                    userstrash.appendChild(usersfeedcount);
                    userstrash.appendChild(usersvideocount);

                    userstrash.appendChild(feedcount);
                    userstrash.appendChild(photocount);
                    userstrash.appendChild(shortcount);

                    feedcount.textContent = profile.my_FeedsCount;
                    photocount.textContent = profile.my_PhotoCount;
                    shortcount.textContent = profile.my_ShortCount;

                    usersnotificationcount.textContent = '';
                    userschatcount.textContent = profile.my_ChatCount;
                    userspeoplecount.textContent = profile.my_PeopleCount;
                    usersfeedcount.textContent = profile.my_Home_FeedsCount;
                    usersvideocount.textContent = profile.my_VideosCount;

                    usersnotificationcount.classList.add('userscount');
                    userschatcount.classList.add('userscount');
                    userspeoplecount.classList.add('userscount');
                    usersfeedcount.classList.add('userscount');
                    usersvideocount.classList.add('userscount');

                    feedcount.classList.add('userscount');
                    photocount.classList.add('userscount');
                    shortcount.classList.add('userscount');

                    feedcount.classList.add('feedcount');
                    photocount.classList.add('photocount');
                    shortcount.classList.add('shortcount');

                    usersnotificationcount.classList.add('usersnotificationcount');
                    userschatcount.classList.add('userschatcount');
                    userspeoplecount.classList.add('userspeoplecount');
                    usersfeedcount.classList.add('usersfeedcount');
                    usersvideocount.classList.add('usersvideocount');
                }
                HomePageCounts();
            }
            usersCount();



            let storycount = document.createElement('span');
            userstrash.appendChild(storycount);
            storycount.textContent = profile.my_StoryCount;
            storycount.classList.add('storycount');
            storycount.id = profile.user_Id;

            //people and friends
            userfriendlist.id = profile.user_Id;
            userfriendListColumn.id = profile.user_Id;

            userfriendlistexit.innerHTML = '&LeftArrow;';
            userfollowersexit.innerHTML = '&LeftArrow;';
            userfollowersexit.classList.add('userfollowersexit');
            userfriendlistexit.classList.add('userfollowersexit');
            userfriendlist.classList.add('Friendlisttabs');
            userfollowerlist.classList.add('followerslisttabs');
            userfriendListColumn.classList.add('userfriendListColumn');
            userfollowerlist.innerHTML = 'followers';
            userfriendlist.appendChild(usersfriendlistheader);
            userfriendlist.appendChild(userfriendListColumn);
            userfollowerlist.appendChild(usersfollowerslistheader);

            userfriendlistexit.addEventListener('click', () => {
                userfriendlist.style.display = 'none';
            });
            userfollowersexit.addEventListener('click', () => {
                userfollowerlist.style.display = 'none';
            });
            userfriendlist.id = profile.user_Id;
            userfollowerlist.id = profile.user_Id;
            user_Friends_View_Container.id = profile.user_Id;
            user_Information_View_Container.id = profile.user_Id;

            userfriendlist.classList.add('Friendlisttabs');
            userfollowerlist.classList.add('followerslisttabs');
            user_Information_View_Container.addEventListener('click', () => {
                usersInformation(profile.user_Id);
            });
            user_Friends_View_Container.addEventListener('click', (e) => {
                createFriends(profile.user_Id);
            });

            usertopactivity.appendChild(usertopactivitytimeline);
            usertopactivity.appendChild(usertopactivitypublic);
            usertopactivity.appendChild(usertopactivityothers);

            usertopactivitytimeline.appendChild(topacttimeline);
            usertopactivitypublic.appendChild(topactpublic);
            usertopactivityothers.appendChild(topactothers);

            usertopactivitytimeline.appendChild(usertimelinetext);
            usertopactivitypublic.appendChild(userpublic);
            usertopactivityothers.appendChild(userothers);

            topacttimeline.src = 'icons/history.png';
            topactothers.src = 'icons/application.png';
            topactpublic.src = 'icons/web-content.png';
            usertimelinetext.textContent = 'timeline';
            userpublic.textContent = 'public';
            userothers.textContent = 'others';
            userprofileexit.innerHTML = '&LeftArrow;';
            userprofileminimizer.innerHTML = '&square;';
            userprofileheader.appendChild(userprofileexit);
            userprofileheader.appendChild(userprofileminimizer);
            userprofileheader.classList.add('userprofileheader');
            document.body.appendChild(profile_Cliant);
            profile_Cliant.appendChild(usersprofile);
            userprofilepic.appendChild(userprofilepicture);
            usersprofile.appendChild(userprofileheader);
            usersprofile.appendChild(userprofilecolumn);
            userprofilecolumn.appendChild(userscoverphotocontainer);
            userprofilecolumn.appendChild(userconnectgrid);
            userprofilecolumn.appendChild(userbioblock);
            userprofilecolumn.appendChild(userpostgridcontainer);
            userscoverphotocontainer.appendChild(usercoverphoto);
            userscoverphotocontainer.appendChild(userspreview);
            userspreview.appendChild(userprofilepic);
            userspreview.appendChild(userspreviewflex);
            userspreviewflex.appendChild(usersname);
            userspreviewflex.appendChild(usertopactivity);

            usersname.textContent = profile.user_Firstname + ' ' + profile.user_Surname;
            if (profile.user_CoverPhoto) {
                usercoverphoto.src = profile.user_CoverPhoto;
            } else {
                usercoverphoto.src = 'icons/male-user.png';
            } if (profile.user_ProfilePicture) {
                userprofilepicture.src = profile.user_ProfilePicture;
            } else {
                userprofilepicture.src = 'icons/male-user.png';
            }
            function filter_Image_Profile() {
                if (profile.user_ProfilePicture_Filter == 'default') {
                    userprofilepicture.classList.add('--color-default');
                } else if (profile.user_ProfilePicture_Filter == 'gray') {
                    userprofilepicture.classList.add('--color-gray');
                } else if (profile.user_ProfilePicture_Filter == 'contrast') {
                    userprofilepicture.classList.add('--color-contrast');
                } else if (profile.user_ProfilePicture_Filter == 'bright') {
                    userprofilepicture.classList.add('--color-bright');
                } else if (profile.user_ProfilePicture_Filter == 'blur') {
                    userprofilepicture.classList.add('--color-blur');
                } else if (profile.user_ProfilePicture_Filter == 'invert') {
                    userprofilepicture.classList.add('--color-invert');
                } else if (profile.user_ProfilePicture_Filter == 'sepia') {
                    userprofilepicture.classList.add('--color-sepia');
                } else if (profile.user_ProfilePicture_Filter == 'hue-rotate') {
                    userprofilepicture.classList.add('--color-hue-rotate');
                } else if (profile.user_ProfilePicture_Filter == 'opacity') {
                    userprofilepicture.classList.add('--color-opacity');
                } else if (profile.user_ProfilePicture_Filter == 'satulate') {
                    userprofilepicture.classList.add('--color-satulate');
                }
            }
            function filter_Image_Cover() {
                if (profile.user_CoverPhoto_Filter == 'default') {
                    usercoverphoto.classList.add('--color-default');
                } else if (profile.user_CoverPhoto_Filter == 'gray') {
                    usercoverphoto.classList.add('--color-gray');
                } else if (profile.user_CoverPhoto_Filter == 'contrast') {
                    usercoverphoto.classList.add('--color-contrast');
                } else if (profile.user_CoverPhoto_Filter == 'bright') {
                    usercoverphoto.classList.add('--color-bright');
                } else if (profile.user_CoverPhoto_Filter == 'blur') {
                    usercoverphoto.classList.add('--color-blur');
                } else if (profile.user_CoverPhoto_Filter == 'invert') {
                    usercoverphoto.classList.add('--color-invert');
                } else if (profile.user_CoverPhoto_Filter == 'sepia') {
                    usercoverphoto.classList.add('--color-sepia');
                } else if (profile.user_CoverPhoto_Filter == 'hue-rotate') {
                    usercoverphoto.classList.add('--color-hue-rotate');
                } else if (profile.user_CoverPhoto_Filter == 'opacity') {
                    usercoverphoto.classList.add('--color-opacity');
                } else if (profile.user_CoverPhoto_Filter == 'satulate') {
                    usercoverphoto.classList.add('--color-satulate');
                }
            }
            filter_Image_Profile();
            filter_Image_Cover();
            userpostgridcontainer.classList.add('postgridcontainer');
            userpostgrid.classList.add('postgrid');
            userbioinfor.classList.add('userbioinfor');
            userprofileminimizer.classList.add('userprofileminimizer');
            function expandProfile() {
                profile_Cliant.classList.toggle('profile_Cliantlarge');
                usersprofile.classList.toggle('usersprofilelarge');
                userprofilecolumn.classList.toggle('secondprofileculomnlarge');
                userspreview.classList.toggle('previewlarge');
                userscoverphotocontainer.classList.toggle('secondcoverphotocontainerlarge');
                userprofilepic.classList.toggle('profilepiclarge');
                usersname.classList.toggle('previewblarge');
                usertopactivity.classList.toggle('topactivitieslarge');
                userspreviewflex.classList.toggle('previewflexlarge');
                userpostgridcontainer.classList.toggle('postgridcontainerlarge');
                userpostgrid.classList.toggle('postgridlarge');
                userprofileminimizer.classList.toggle('userprofileminimizerlarge');
                userprofileexit.classList.toggle('userprofileexitlarge');
                userconnectgrid.classList.toggle('userconnectgridlarge');
                userconnect.classList.toggle('userconnectgridlargebutton');
                user_More_Option_Views.classList.toggle('user_More_Option_Views_Large');
            }

            userprofileminimizer.id = profile.user_Id;
            userprofileminimizer.addEventListener('click', (e) => {
                let gridpost = document.querySelectorAll('.gridpost');
                gridpost.forEach(post => {
                    if (profile.user_Id === post.id) {
                        post.classList.toggle('gridpostlarge');
                    }
                });
                expandProfile();
            });
            usertopactivitytimeline.addEventListener('click', () => {
                loader(userpostgridcontainer);
                usertopactivitytimeline.classList.add('active');
                usertopactivitypublic.classList.remove('active');
                usertopactivityothers.classList.remove('active');
                setTimeout(() => {
                    createGridPost(profile.user_Id,userpostgrid);
                }, 2000);
            });
            usertopactivitypublic.addEventListener('click', () => {
                loader(userpostgridcontainer);
                usertopactivitytimeline.classList.remove('active');
                usertopactivitypublic.classList.add('active');
                usertopactivityothers.classList.remove('active');
                setTimeout(() => {
                    createPublicGridPost(profile.user_Id,userpostgrid);
                }, 2000);
            });
            usertopactivityothers.addEventListener('click', () => {
                loader(userpostgridcontainer);
                usertopactivitytimeline.classList.remove('active');
                usertopactivitypublic.classList.remove('active');
                usertopactivityothers.classList.add('active');
                setTimeout(() => {
                    createOtherGridPost(profile.user_Id,userpostgrid);
                }, 2000);
            });
            userprofileexit.classList.add('userprofileexit');
            usertopactivity.classList.add('topactivities');
            usertopactivitytimeline.classList.add('usertopactivitytimeline');
            usertopactivitytimeline.classList.add('active');
            usertopactivitypublic.classList.add('usertopactivitytimeline');
            usertopactivityothers.classList.add('usertopactivitytimeline');
            usersname.classList.add('usersname');
            userprofilepic.classList.add('profilepic');
            userspreviewflex.classList.add('previewflex');
            userspreview.classList.add('preview');
            userscoverphotocontainer.classList.add('secondcoverphotocontainer');
            usercoverphoto.classList.add('coverphoto');
            usersprofile.classList.add('usersprofile');
            profile_Cliant.classList.add('profile_Cliant');
            userprofilecolumn.classList.add('secondprofileculomn');
            userprofileexit.addEventListener('click', () => {
                profile_Cliant.remove();
                sessionStorage.setItem('activepage', 'home');
                document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
            });

            profile_Cliant.id = profile.user_Id;
            userbioblock.id = profile.user_Id;
            userpostgrid.id = profile.user_Id;
            userprofilepicture.id = profile.user_Id;

            userbioinfor.id = profile.user_Id;
            usercoverphoto.id = profile.user_Id;
            loader(profile_Cliant);
            createGridPost(profile.user_Id,userpostgrid);
        }
    });
}

function usersInformation(locationId) {
    removeInfopage();
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(profile => {
        if (profile.user_Id === locationId) {
            function createOtherInformation(locationId) {
                let usersinfopro = document.createElement('session');
                let userinfocolumn = document.createElement('div');
                let userinfoexit = document.createElement('span');
                let usersinfoheader = document.createElement('header');
                document.body.appendChild(usersinfopro);
                usersinfopro.appendChild(usersinfoheader);
                usersinfopro.appendChild(userinfocolumn);
                usersinfoheader.appendChild(userinfoexit);
                usersinfopro.classList.add('infopro');
                userinfocolumn.classList.add('userinfocolumn');
                usersinfoheader.classList.add('XyFireRecTorFas');
                userinfoexit.classList.add('userfollowersexit');
                userinfoexit.innerHTML = '&LeftArrow;';
                usersinfopro.id = locationId;
                userinfoexit.addEventListener('click', () => {
                    usersinfopro.remove();
                });
                CityInfo(userinfocolumn);
                GenderInfo(userinfocolumn);
                DateOFBirthInfo(userinfocolumn);
                BioInfo(userinfocolumn);
                DateCreated(userinfocolumn);
                if (data.user_CoverPhoto) {
                    usersinfopro.style.backgroundImage = "url(" + data.user_CoverPhoto + ")";
                } else {
                    usersinfopro.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                }
            }
            createOtherInformation();
            function CityInfo(session) {
                let InforMationCenter = document.createElement('div');
                let Info = document.createElement('div');
                let center = document.createElement('div');
                let value = document.createElement('span');


                session.appendChild(InforMationCenter);
                InforMationCenter.appendChild(Info);
                InforMationCenter.appendChild(center);
                center.appendChild(value);
                InforMationCenter.classList.add('chosedplace');
                Info.classList.add('subject');
                center.classList.add('alwaysflex');
                value.classList.add('cityset');
                Info.textContent = 'City';
                value.textContent = profile.user_Location;
            }
            function GenderInfo(session) {
                let InforMationCenter = document.createElement('div');
                let Info = document.createElement('div');
                let center = document.createElement('div');
                let value = document.createElement('span');


                session.appendChild(InforMationCenter);
                InforMationCenter.appendChild(Info);
                InforMationCenter.appendChild(center);
                center.appendChild(value);
                InforMationCenter.classList.add('chosedplace');
                Info.classList.add('subject');
                center.classList.add('alwaysflex');
                value.classList.add('cityset');
                Info.textContent = 'Gender';
                value.textContent = profile.user_Gender;
            }
            function DateOFBirthInfo(session) {
                let InforMationCenter = document.createElement('div');
                let Info = document.createElement('div');
                let center = document.createElement('div');
                let value = document.createElement('span');


                session.appendChild(InforMationCenter);
                InforMationCenter.appendChild(Info);
                InforMationCenter.appendChild(center);
                center.appendChild(value);
                InforMationCenter.classList.add('chosedplace');
                Info.classList.add('subject');
                center.classList.add('alwaysflex');
                value.classList.add('cityset');
                Info.textContent = 'Date Of Birth';
                value.textContent = profile.user_Dateofbirth;
            }
            function BioInfo(session) {
                let InforMationCenter = document.createElement('div');
                let Info = document.createElement('div');
                let center = document.createElement('div');
                let value = document.createElement('span');


                session.appendChild(InforMationCenter);
                InforMationCenter.appendChild(Info);
                InforMationCenter.appendChild(center);
                center.appendChild(value);
                InforMationCenter.classList.add('chosedplace');
                Info.classList.add('subject');
                center.classList.add('alwaysflex');
                value.classList.add('cityset');
                Info.textContent = 'Bio';
                value.textContent = profile.user_Bio;
            }
            function DateCreated(session) {
                let InforMationCenter = document.createElement('div');
                let Info = document.createElement('div');
                let center = document.createElement('div');
                let value = document.createElement('span');


                session.appendChild(InforMationCenter);
                InforMationCenter.appendChild(Info);
                InforMationCenter.appendChild(center);
                center.appendChild(value);
                InforMationCenter.classList.add('chosedplace');
                Info.classList.add('subject');
                center.classList.add('alwaysflex');
                value.classList.add('cityset');
                Info.textContent = 'Date Created';
                value.textContent = profile.date_Created;
            }
        }
    });
}
function createFriends(locationId) {
    removeInfopage();
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(data => {
        if (data.user_Id === locationId) {
            function createOtherInformation(locationId) {
                let usersinfopro = document.createElement('session');
                let userinfocolumn = document.createElement('div');
                let userinfoexit = document.createElement('span');
                let usersinfoheader = document.createElement('header');
                document.body.appendChild(usersinfopro);
                usersinfopro.appendChild(usersinfoheader);
                usersinfopro.appendChild(userinfocolumn);
                usersinfoheader.appendChild(userinfoexit);
                usersinfopro.classList.add('infopro');
                userinfocolumn.classList.add('userinfocolumn');
                usersinfoheader.classList.add('XyFireRecTorFas');
                userinfoexit.classList.add('userfollowersexit');
                userinfoexit.innerHTML = '&LeftArrow;';
                usersinfopro.id = locationId;
                userinfoexit.addEventListener('click', () => {
                    usersinfopro.remove();
                });
                if (data.user_CoverPhoto) {
                    usersinfopro.style.backgroundImage = "url(" + data.user_CoverPhoto + ")";
                } else {
                    usersinfopro.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                }
                friends(userinfocolumn);
            }
            createOtherInformation();
            function friends(column) {
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

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(user => {
                            if (user.user_Id === connect.connectionId) {
                                frienddisconnect.textContent = 'my profile';
                            } else {
                                frienddisconnect.textContent = 'view profile';
                            }
                        });
                    }

                    frienddisconnect.addEventListener('click', () => {
                        createUsersProfile(connect.connectionId);
                    });
                    frienddisconnect.classList.add('frienddisconnect');
                    friendsRight.classList.add('friendsRight');
                    friendname.classList.add('friendname');
                    friendsLeft.classList.add('friendsLeft');
                    friendcontainer.classList.add('friendcontainer');
                    friendProfilePicture.classList.add('friendProfilePicture');
                });
            }
        }
    });
}
function removeInfopage() {
    document.querySelectorAll('.infopro').forEach(page => {
        page.remove();
    });
}