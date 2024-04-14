function createUsersProfile(locationId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        sessionStorage.setItem('activepage', locationId);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(profile => {
            if (profile.user_Id === locationId) {
                let userprofileheader = document.createElement('header');
                let exituserprofile = document.createElement('div');
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
                user_More_Option_Views.innerHTML = vellip;

                userconnect.src = 'icons/add-user.png';
                usersfriendsview.src = 'icons/tow-people_solid.png';
                usersinformationview.src = 'icons/information.png';
                userconnectgrid.id = profile.user_Id;
                exituserprofile.id = profile.user_Id;
                user_More_Option_Views.id = profile.user_Id;
                userprofileheader.id = profile.user_Id;
                userconnect_Container.id = profile.user_Id;

                userconnect_Container.innerHTML = moresvg;
                user_Friends_View_Container.innerHTML = peoplesvg;
                user_Information_View_Container.innerHTML = infosvg;

                userconnectgrid.appendChild(user_Connection_Grid_Inner);
                user_Connection_Grid_Inner.appendChild(userconnect_Container);
                user_Connection_Grid_Inner.appendChild(user_Friends_View_Container);
                user_Connection_Grid_Inner.appendChild(user_Information_View_Container);

                userconnect_Container.classList.add('headerbtns');
                user_Friends_View_Container.classList.add('headerbtns');
                user_Friends_View_Container.classList.add('headerbtns');
                user_Information_View_Container.classList.add('headerbtns');
                user_More_Option_Views.classList.add('headerbtns');

                userconnect_Container.classList.add('unsent_Request');
                user_Friends_View_Container.classList.add('user_Friends_View_Container');
                user_Information_View_Container.classList.add('user_Information_View_Container');
                user_More_Option_Views.classList.add('user_More_Option_Views');

                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                ActiveUser_Account.forEach(user => {
                    if (profile.user_Id === user.user_Id) {
                        userconnect_Container.remove();
                    }
                    userconnect_Container.addEventListener('click', () => {
                        createProfileOptions(locationId, user.user_Id);
                    });
                });

                function createchatRoom_Button() {
                    ActiveUser_Account.forEach(user => {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            if (data.user_Id === user.user_Id) {
                                let friends = data.user_Connection;
                                friends.forEach(friend => {
                                    if (friend.connectionId === profile.user_Id) {
                                        let user_Chat_Room = document.createElement('span');
                                        user_Connection_Grid_Inner.appendChild(user_Chat_Room);
                                        user_Chat_Room.innerHTML = smartchatsvg;
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

                userpostgridcontainer.appendChild(userpostgrid);

                userbioblock.appendChild(userbioinfor);
                userbioblock.classList.add('bioblock');

                if (profile.user_Bio === '') {
                    userbioblock.style.display = 'none';
                } else {
                    userbioinfor.textContent = profile.user_Bio;
                    userbioblock.style.display = 'grid';
                    userbioinfor.textContent.split(" ").forEach(texttitle => {
                        prefix.forEach(unit => {
                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                if (unit.prefixName == 'https://') {
                                    let newtitle = userbioinfor.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    userbioinfor.innerHTML = newtitle;
                                } else {
                                    let newtitle = userbioinfor.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    userbioinfor.innerHTML = newtitle;
                                }
                            }
                        });
                    });
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

                user_Friends_View_Container.id = profile.user_Id;
                user_Information_View_Container.id = profile.user_Id;

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
                exituserprofile.innerHTML = undo;
                userprofileminimizer.innerHTML = '&square;';
                userprofileheader.appendChild(exituserprofile);
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
                    exituserprofile.classList.toggle('exituserprofilelarge');
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
                        createGridPost(profile.user_Id, userpostgrid);
                    }, 2000);
                });
                usertopactivitypublic.addEventListener('click', () => {
                    loader(userpostgridcontainer);
                    usertopactivitytimeline.classList.remove('active');
                    usertopactivitypublic.classList.add('active');
                    usertopactivityothers.classList.remove('active');
                    setTimeout(() => {
                        createPublicGridPost(profile.user_Id, userpostgrid);
                    }, 2000);
                });
                usertopactivityothers.addEventListener('click', () => {
                    loader(userpostgridcontainer);
                    usertopactivitytimeline.classList.remove('active');
                    usertopactivitypublic.classList.remove('active');
                    usertopactivityothers.classList.add('active');
                    setTimeout(() => {
                        createOtherGridPost(profile.user_Id, userpostgrid);
                    }, 2000);
                });
                exituserprofile.classList.add('exituserprofile');
                exituserprofile.classList.add('headerbtns');
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
                exituserprofile.addEventListener('click', () => {
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
                createGridPost(profile.user_Id, userpostgrid);
            }
        });
    }
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
                option_profile_name.textContent = profile.user_Firstname + ' ' + profile.user_Surname;
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
            }
        });
    }
}
function usersInformation(locationId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        removeInfopage();
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(profile => {
            if (profile.user_Id === locationId) {
                function createOtherInformation(locationId) {
                    let license_Popup = document.createElement('session');
                    let license_Column = document.createElement('div');
                    let userinfoexit = document.createElement('span');
                    let usersinfoheader = document.createElement('header');
                    let popupname = document.createElement('p');
                    document.body.appendChild(license_Popup);
                    license_Popup.appendChild(usersinfoheader);
                    license_Popup.appendChild(license_Column);
                    usersinfoheader.appendChild(userinfoexit);
                    usersinfoheader.appendChild(popupname);
                    license_Popup.classList.add('license_Popup');
                    license_Column.classList.add('license_Column');
                    usersinfoheader.classList.add('XyFireRecTorFas');
                    userinfoexit.classList.add('userfollowersexit');
                    userinfoexit.innerHTML = undo;
                    popupname.innerHTML = 'User Profile Info &quest;';
                    userinfoexit.classList.add('headerbtns');
                    license_Popup.id = locationId;
                    userinfoexit.addEventListener('click', () => {
                        license_Popup.remove();
                    });
                    CityInfo(license_Column);
                    GenderInfo(license_Column);
                    DateOFBirthInfo(license_Column);
                    BioInfo(license_Column);
                    DateCreated(license_Column);
                }
                createOtherInformation();
                function CityInfo(session) {
                    let viewblock = document.createElement('div');
                    let viewhead = document.createElement('span');
                    let viewname = document.createElement('p');
                    let viewblocktail = document.createElement('div');
                    let value = document.createElement('p');

                    let newblock = document.createElement('section');

                    session.appendChild(viewblock);
                    viewblock.appendChild(newblock);
                    viewblock.appendChild(viewblocktail);
                    newblock.appendChild(viewhead);
                    newblock.appendChild(viewname);
                    viewblocktail.appendChild(value);
                    viewblock.classList.add('viewblock');
                    viewblock.classList.add('info');
                    viewblocktail.classList.add('viewblocktail');
                    viewname.textContent = 'City';
                    viewhead.innerHTML = citysvg;
                    value.textContent = profile.user_Location;
                }
                function GenderInfo(session) {
                    let viewblock = document.createElement('div');
                    let viewhead = document.createElement('span');
                    let viewname = document.createElement('p');
                    let viewblocktail = document.createElement('div');
                    let value = document.createElement('p');

                    let newblock = document.createElement('section');

                    session.appendChild(viewblock);
                    viewblock.appendChild(newblock);
                    viewblock.appendChild(viewblocktail);
                    newblock.appendChild(viewhead);
                    newblock.appendChild(viewname);
                    viewblocktail.appendChild(value);
                    viewblock.classList.add('viewblock');
                    viewblock.classList.add('info');
                    viewblocktail.classList.add('viewblocktail');
                    viewname.textContent = 'Gender';
                    viewhead.innerHTML = gendersvg;
                    value.textContent = profile.user_Gender;
                }
                function DateOFBirthInfo(session) {
                    let viewblock = document.createElement('div');
                    let viewhead = document.createElement('span');
                    let viewname = document.createElement('p');
                    let viewblocktail = document.createElement('div');
                    let value = document.createElement('p');

                    let newblock = document.createElement('section');

                    session.appendChild(viewblock);
                    viewblock.appendChild(newblock);
                    viewblock.appendChild(viewblocktail);
                    newblock.appendChild(viewhead);
                    newblock.appendChild(viewname);
                    viewblocktail.appendChild(value);
                    viewblock.classList.add('viewblock');
                    viewblock.classList.add('info');
                    viewblocktail.classList.add('viewblocktail');
                    viewname.textContent = 'Date Of Birth';
                    viewhead.innerHTML = infosvg;
                    value.textContent = profile.user_Dateofbirth;
                }
                function BioInfo(session) {
                    let viewblock = document.createElement('div');
                    let viewhead = document.createElement('span');
                    let viewname = document.createElement('p');
                    let viewblocktail = document.createElement('div');
                    let value = document.createElement('p');

                    let newblock = document.createElement('section');

                    session.appendChild(viewblock);
                    viewblock.appendChild(newblock);
                    viewblock.appendChild(viewblocktail);
                    newblock.appendChild(viewhead);
                    newblock.appendChild(viewname);
                    viewblocktail.appendChild(value);
                    viewblock.classList.add('viewblock');
                    viewblock.classList.add('info');
                    viewblocktail.classList.add('viewblocktail');
                    viewname.textContent = 'Bio';
                    viewhead.innerHTML = infosvg;
                    value.textContent = profile.user_Bio;
                }
                function DateCreated(session) {
                    let viewblock = document.createElement('div');
                    let viewhead = document.createElement('span');
                    let viewname = document.createElement('p');
                    let viewblocktail = document.createElement('div');
                    let value = document.createElement('p');

                    let newblock = document.createElement('section');

                    session.appendChild(viewblock);
                    viewblock.appendChild(newblock);
                    viewblock.appendChild(viewblocktail);
                    newblock.appendChild(viewhead);
                    newblock.appendChild(viewname);
                    viewblocktail.appendChild(value);
                    viewblock.classList.add('viewblock');
                    viewblock.classList.add('info');
                    viewblocktail.classList.add('viewblocktail');
                    viewname.textContent = 'Date Created';
                    viewhead.innerHTML = infosvg;
                    value.textContent = profile.date_Created;
                }
            }
        });
    }
}
function createFriends(locationId) {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        removeInfopage();
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === locationId) {
                function createOtherInformation(locationId) {
                    let license_Popup = document.createElement('session');
                    let license_Column = document.createElement('div');
                    let userinfoexit = document.createElement('span');
                    let usersinfoheader = document.createElement('header');
                    let popupname = document.createElement('p');
                    document.body.appendChild(license_Popup);
                    license_Popup.appendChild(usersinfoheader);
                    license_Popup.appendChild(license_Column);
                    usersinfoheader.appendChild(userinfoexit);
                    usersinfoheader.appendChild(popupname);
                    license_Popup.classList.add('license_Popup');
                    license_Column.classList.add('license_Column');
                    usersinfoheader.classList.add('XyFireRecTorFas');
                    userinfoexit.classList.add('userfollowersexit');
                    userinfoexit.innerHTML = undo;
                    popupname.innerHTML = `User Profile Info &quest; ${data.user_Connection.length} connections`;
                    userinfoexit.classList.add('headerbtns');
                    license_Popup.id = locationId;
                    userinfoexit.addEventListener('click', () => {
                        license_Popup.remove();
                    });
                    friends(license_Column);
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
}
function removeInfopage() {
    document.querySelectorAll('.license_Popup').forEach(page => {
        page.remove();
    });
}