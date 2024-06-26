let Community_myChat_Msg = [];
if (Array.isArray(JSON.parse(localStorage.getItem('myCommunities')))) {
    myCommunities = JSON.parse(localStorage.getItem('myCommunities'));
    getActive_Community_Page();
    removeAllchatcontainers();
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(data => {
        var activepage = sessionStorage.getItem('activepage');

        if (activepage == 'community_smart_Chat') {
            let userschatcontainer = document.createElement('div');
            userschatcontainer.classList.add('userschatcontainer');
            document.querySelector('.msgculomn').appendChild(userschatcontainer);
            userschatcontainer.id = data.user_Id;
            document.querySelectorAll('#general_smart_Chat').forEach(button => {
                button.classList.remove('active');
            });
            document.querySelectorAll('#community_smart_Chat').forEach(button => {
                button.classList.add('active');
            });
            document.querySelector('.chattab').style.display = 'flex';
            create_Community_Chat_Menu(data.user_Id);
        }
    });
} else {
    myCommunities = [];
}


JSON.parse(localStorage.getItem('Community_myChat_Msg'));

function create_Community_Chat_Menu(locationId) {
    removeAllchatcontainers();
    let userschatcontainer = document.createElement('div');
    userschatcontainer.classList.add('userschatcontainer');
    document.querySelector('.msgculomn').appendChild(userschatcontainer);
    myCommunities.forEach(community => {
        let members = community.community_Members;
        members.forEach(member => {
            if (member.community_Id === community.community_Id) {
                if (locationId === member.members_Id) {
                    let chatblock = document.createElement('div');
                    let chatblockhead = document.createElement('div');
                    let chatblockreciepientProfileImg = document.createElement('img');
                    let chatblocktail = document.createElement('div');
                    let chatreciepientname = document.createElement('p');
                    let community_chat_sample = document.createElement('span');
                    let chatstatus = document.createElement('b');
                    let sampleblock = document.createElement('div');
                    let sampleimagecontainer = document.createElement('div');
                    let sampleimage = document.createElement('img');
                    userschatcontainer.appendChild(chatblock);
                    chatblock.appendChild(chatblockhead);
                    chatblock.appendChild(chatblocktail);
                    chatblockhead.appendChild(chatblockreciepientProfileImg);
                    chatblocktail.appendChild(chatreciepientname);
                    chatblocktail.appendChild(sampleblock);
                    chatblocktail.appendChild(chatstatus);
                    sampleblock.appendChild(sampleimagecontainer);
                    sampleblock.appendChild(community_chat_sample);
                    sampleimagecontainer.appendChild(sampleimage);
                    sampleimage.classList.add('sampleimage');
                    sampleimage.src = community.community_Image;
                    chatstatus.classList.add('chatstatus');
                    community_chat_sample.classList.add('community_chat_sample');
                    chatblock.classList.add('chatblock');
                    sampleblock.classList.add('sampleblock');
                    chatblockhead.classList.add('chatblockhead');
                    chatblocktail.classList.add('chatblocktail');
                    chatreciepientname.classList.add('chatreciepientname');
                    chatblockreciepientProfileImg.classList.add('chatblockreciepientProfileImg');

                    chatblockreciepientProfileImg.src = community.community_Image;
                    chatreciepientname.textContent = community.community_Name;
                    chatreciepientname.id = community.community_Id;
                    chatblockhead.id = community.community_Id;
                    community_chat_sample.id = community.community_Id;
                    sampleimage.id = community.community_Id;
                    community_chat_sample.textContent = 'start conversation';
                    if (Array.isArray(JSON.parse(localStorage.getItem('Community_myChat_Msg')))) {
                        Community_myChat_Msg = JSON.parse(localStorage.getItem('Community_myChat_Msg'));
                        Community_myChat_Msg.forEach(chat => {
                            if (chat.chat_receiver === community_chat_sample.id) {
                                if (chat.isText) {
                                    community_chat_sample.textContent = chat.Property_Src;
                                } if (chat.isPhoto) {
                                    community_chat_sample.textContent = 'photo';
                                } if (chat.isVideo) {
                                    community_chat_sample.textContent = 'video';
                                } if (chat.isAudio) {
                                    community_chat_sample.textContent = 'audio';
                                }
                            }
                        })
                    }
                    if (member.checked === false) {
                        community_chat_sample.classList.add('unchecked_Chat');
                    }
                    chatblock.id = member.community_Id + member.members_Id;
                    chatblock.addEventListener('click', (e) => {
                        sessionStorage.setItem('activepage', member.community_Id + member.members_Id);
                        create_Community_Chat_Rooms(member.community_Id + member.members_Id, member.community_Id, member.members_Id, community.creator_Id, community.community_Image, community.community_Name);
                        myCommunities.forEach(com => {
                            let mem = com.community_Members;
                            if (com.community_Id === member.community_Id) {
                                mem.forEach(mems => {
                                    if (mems.members_Id === member.members_Id) {
                                        mems.checked = true;
                                        localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                                    }
                                });
                            }
                        });
                        community_chat_sample.classList.remove('unchecked_Chat');
                    });
                }
            }
        });
    });
}
function create_Community_Chat_Members(locationId, room) {
    document.querySelectorAll('.memberscontainer').forEach(container => {
        container.remove();
    });
    function createmembersPopup() {
        let memberscontainer = document.createElement('div');
        let membersheader = document.createElement('header');
        let title = document.createElement('h1');
        let membersexit = document.createElement('span');
        let memberscolumn = document.createElement('div');
        room.appendChild(memberscontainer);
        memberscontainer.appendChild(membersheader);
        memberscontainer.appendChild(memberscolumn);
        membersheader.appendChild(membersexit);
        membersheader.appendChild(title);
        title.textContent = 'Members';
        memberscontainer.classList.add('memberscontainer');
        memberscontainer.classList.add('membersContainer');
        memberscolumn.classList.add('community_memberscolumn');
        membersexit.innerHTML = undo;
        membersexit.classList.add('headerbtns');

        memberscontainer.id = locationId;
        memberscolumn.id = locationId;
        createItems(memberscolumn);
        membersexit.addEventListener('click', () => {
            memberscontainer.remove();
        });
    }
    createmembersPopup();
    function createItems(session) {
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (locationId === member.community_Id) {
                    let memberblock = document.createElement('div');
                    let membertop = document.createElement('div');
                    let memberbottom = document.createElement('div');
                    let memberhead = document.createElement('span');
                    let membertail = document.createElement('span');
                    let memberimage = document.createElement('img');
                    let membername = document.createElement('strong');
                    let memberaddbutton = document.createElement('button');
                    let memberviewbutton = document.createElement('button');
                    session.appendChild(memberblock);
                    memberblock.appendChild(membertop);
                    memberblock.appendChild(memberbottom);
                    membertop.appendChild(memberhead);
                    membertop.appendChild(membertail);
                    memberbottom.appendChild(memberaddbutton);
                    memberbottom.appendChild(memberviewbutton);
                    memberhead.appendChild(memberimage);
                    membertail.appendChild(membername);
                    memberaddbutton.textContent = 'Remove';
                    memberviewbutton.textContent = 'Profile';
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(user => {
                        if (user.user_Id !== community.creator_Id) {
                            memberaddbutton.style.display = 'none';
                        }
                        if (member.members_Id === user.user_Id) {
                            memberaddbutton.textContent = 'Leave';
                            memberaddbutton.style.display = 'block';
                        } else {
                            memberaddbutton.textContent = 'Remove';
                        }
                    });

                    memberblock.classList.add('memberblock');
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === member.members_Id) {
                            memberimage.src = user.user_ProfilePicture;

                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            membername.textContent = username;

                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    memberimage.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    memberimage.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    memberimage.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    memberimage.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    memberimage.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    memberimage.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    memberimage.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    memberimage.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    memberimage.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    memberimage.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    memberaddbutton.classList.add('memberaddbutton');
                    memberviewbutton.classList.add('memberaddbutton');
                    memberaddbutton.id = member.id;
                    memberviewbutton.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(member.members_Id, user.user_Id);
                            });
                        }
                    });
                    memberaddbutton.addEventListener('click', () => {
                        memberaddbutton.textContent = 'Removed';
                        memberaddbutton.disabled = true;
                        memberaddbutton.classList.add('memberadded');
                        members = members.filter((mems) => {
                            if (mems.id === memberaddbutton.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        console.log(members);
                        community.community_Members = members;
                        community.lavinsta = members;
                        localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                    });
                }
            });
        });
    }
}
function create_Community_Profile(locationId, room) {
    document.querySelectorAll('.memberscontainer').forEach(container => {
        container.remove();
    });
    function createCommunityProfile() {
        let memberscontainer = document.createElement('div');
        let membersheader = document.createElement('header');
        let membersexit = document.createElement('span');
        let memberscolumn = document.createElement('div');
        room.appendChild(memberscontainer);
        memberscontainer.appendChild(membersheader);
        memberscontainer.appendChild(memberscolumn);
        membersheader.appendChild(membersexit);
        memberscontainer.classList.add('memberscontainer');
        memberscontainer.classList.add('community_profile');
        memberscolumn.classList.add('communityprofilecolumn');
        membersexit.innerHTML = undo;
        membersexit.classList.add('headerbtns');

        memberscontainer.id = locationId;
        memberscolumn.id = locationId;
        createItems(memberscolumn);
        membersexit.addEventListener('click', () => {
            memberscontainer.remove();
        });
    }
    createCommunityProfile();
    function createItems(session) {
        myCommunities.forEach(community => {
            if (locationId === community.community_Id) {
                let container_profile_commu = document.createElement('div');
                let com_container = document.createElement('label');
                let commprofileimage = document.createElement('img');
                let commname = document.createElement('strong');
                let uploader = document.createElement('input');
                let captionholder = document.createElement('div');
                let new_Name = document.createElement('input');
                let activities = document.createElement('nav');
                let editprofile = document.createElement('div');
                let addmembers = document.createElement('div');
                let viewmembers = document.createElement('div');
                session.appendChild(container_profile_commu);
                commprofileimage.src = community.community_Image;
                commname.textContent = community.community_Name;
                container_profile_commu.appendChild(com_container);
                container_profile_commu.appendChild(commname);
                container_profile_commu.appendChild(uploader);
                container_profile_commu.appendChild(captionholder);
                container_profile_commu.appendChild(activities);
                activities.appendChild(editprofile);
                activities.appendChild(addmembers);
                activities.appendChild(viewmembers);
                editprofile.innerHTML = sendsvg;
                addmembers.innerHTML = addpeoplesvg;
                viewmembers.innerHTML = gendersvg;
                captionholder.appendChild(new_Name);
                com_container.appendChild(commprofileimage);

                uploader.id = community.community_Id + 'Com_PrO_file';
                uploader.type = 'file';
                new_Name.type = 'text';
                new_Name.placeholder = 'edit name';
                com_container.htmlFor = uploader.id;
                uploader.style.display = 'none';
                function update() {
                    const reader = new FileReader();
                    reader.readAsDataURL(uploader.files[0]);
                    reader.onload = () => {
                        commprofileimage.src = reader.result;
                    }
                }
                editprofile.addEventListener('click', () => {
                    if (new_Name.value || commprofileimage.src !== community.community_Image) {
                        if (new_Name.value) {
                            commname.textContent = new_Name.value;
                            community.community_Name = new_Name.value;
                            new_Name.value = '';
                            localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                        } if (commprofileimage.src !== community.community_Image) {
                            community.community_Image = commprofileimage.src;
                            localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                        }
                        Creation_Mark_Photo(commprofileimage.src, 'Applying Changes...');
                    }
                });
                addmembers.addEventListener('click', () => {
                    create_Community_Chat_Add_Members(locationId, room);
                });
                viewmembers.addEventListener('click', () => {
                    create_Community_Chat_Members(locationId, room);
                });
                uploader.onchange = update;
                editprofile.classList.add('headerbtns');
                addmembers.classList.add('headerbtns');
                viewmembers.classList.add('headerbtns');
                captionholder.classList.add('caption');
                com_container.classList.add('com_container');
                container_profile_commu.classList.add('container_profile_commu');
            }
        });
    }
}
function create_Community_Chat_Add_Members(locationId, room) {
    document.querySelectorAll('.memberscontainer').forEach(container => {
        container.remove();
    });
    function createAddmembersPopup() {
        let memberscontainer = document.createElement('div');
        let membersheader = document.createElement('header');
        let title = document.createElement('h1');
        let membersexit = document.createElement('span');
        let memberscolumn = document.createElement('div');
        room.appendChild(memberscontainer);
        memberscontainer.appendChild(membersheader);
        memberscontainer.appendChild(memberscolumn);
        membersheader.appendChild(membersexit);
        membersheader.appendChild(title);
        title.textContent = 'Add Members';
        memberscontainer.classList.add('memberscontainer');
        memberscontainer.classList.add('membersAddContainer');

        memberscolumn.classList.add('memberscolumn');
        membersexit.innerHTML = undo;
        membersexit.classList.add('headerbtns');

        memberscontainer.id = locationId;
        memberscolumn.id = locationId;
        createItems(memberscolumn);
        membersexit.addEventListener('click', () => {
            memberscontainer.remove();
        });
    }
    createAddmembersPopup();
    function createItems(session) {
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (locationId === member.community_Id) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(data => {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(database => {
                            if (database.user_Id === data.user_Id) {
                                if (data.user_Id === member.members_Id) {
                                    let connections = data.user_Connection;
                                    connections.forEach(connection => {
                                        let memberblock = document.createElement('div');
                                        let membertop = document.createElement('div');
                                        let memberbottom = document.createElement('div');
                                        let memberhead = document.createElement('span');
                                        let membertail = document.createElement('span');
                                        let memberimage = document.createElement('img');
                                        let membername = document.createElement('strong');
                                        let memberaddbutton = document.createElement('button');
                                        session.appendChild(memberblock);
                                        memberblock.appendChild(membertop);
                                        memberblock.appendChild(memberbottom);
                                        membertop.appendChild(memberhead);
                                        membertop.appendChild(membertail);
                                        memberbottom.appendChild(memberaddbutton);
                                        memberhead.appendChild(memberimage);
                                        membertail.appendChild(membername);
                                        memberaddbutton.textContent = 'Add Member';
                                        memberblock.classList.add('memberblock');

                                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                        LogInFormData.forEach(user => {
                                            if (user.user_Id === connection.connectionId) {
                                                memberimage.src = user.user_ProfilePicture;

                                                let username;
                                                user.user_Mid_Name ? username =
                                                    user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                                membername.textContent = username;

                                                function filter_Image() {
                                                    //profile_filter 
                                                    if (user.user_ProfilePicture_Filter == 'default') {
                                                        memberimage.classList.add('--color-default');
                                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                                        memberimage.classList.add('--color-gray');
                                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                                        memberimage.classList.add('--color-contrast');
                                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                                        memberimage.classList.add('--color-bright');
                                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                                        memberimage.classList.add('--color-blur');
                                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                                        memberimage.classList.add('--color-invert');
                                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                                        memberimage.classList.add('--color-sepia');
                                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                                        memberimage.classList.add('--color-hue-rotate');
                                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                                        memberimage.classList.add('--color-opacity');
                                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                                        memberimage.classList.add('--color-satulate');
                                                    }
                                                }
                                                filter_Image();
                                            }
                                        });
                                        function push() {
                                            const id = '' + new Date().getTime();
                                            members.push({
                                                community_Id: member.community_Id,
                                                members_Id: connection.connectionId,
                                                id: id,
                                                count: 0,
                                                checked: false,
                                                view: false,
                                            });
                                            localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                                        }
                                        members.forEach(member => {
                                            if (member.members_Id === connection.connectionId) {
                                                memberaddbutton.disabled = true;
                                                memberaddbutton.textContent = 'Already A Member';
                                                memberblock.remove();
                                            }
                                        });
                                        memberaddbutton.classList.add('memberaddbutton');
                                        memberaddbutton.classList.add('invitation');
                                        memberaddbutton.addEventListener('click', () => {
                                            push();
                                            memberaddbutton.textContent = 'Added';
                                            memberaddbutton.disabled = true;
                                            memberaddbutton.classList.add('memberadded')
                                        });
                                    });
                                }
                            }
                        });
                    });
                }
            });
        });
    }
}
function create_Community_Chat_Rooms(trackingId, locationId, members_Id, creator_Id, community_Image, community_Name) {
    document.querySelectorAll('.userchatroom').forEach(room => {
        room.remove();
    });

    //user unique chatrooms
    let userchatroom = document.createElement('nav');
    let Community_chatroomcolumn = document.createElement('div');
    //userchat header
    let userchatheader = document.createElement('header');
    let userschatexit = document.createElement('span');
    let userchatreciepientname = document.createElement('strong');
    let userchatprofilepicturecontainer = document.createElement('div');
    let memberimage = document.createElement('img');

    //chat box
    let userschatbox = document.createElement('div');
    let userchattextbox = document.createElement('input');
    let userchatsend = document.createElement('div');
    let attach = document.createElement('div');
    //chat float
    let chatfloat = document.createElement('nav');
    let chatuploadicon = document.createElement('div');
    let chatoptionicon = document.createElement('div');
    let chatcallicon = document.createElement('div');
    let voicerecordicon = document.createElement('div');

    //chatoptions

    function create_Post_Options_Script() {
        let options = document.createElement('div');
        let exit = document.createElement('span');
        let first_Option = document.createElement('span');
        let second_Option = document.createElement('span');
        let third_Option = document.createElement('span');
        Community_chatroomcolumn.insertAdjacentElement("afterend", options);
        options.appendChild(exit);
        options.appendChild(first_Option);
        options.appendChild(second_Option);
        options.appendChild(third_Option);
        first_Option.innerHTML = profilesetting;
        second_Option.innerHTML = gendersvg;
        third_Option.innerHTML = addpeoplesvg;
        second_Option.id = locationId;
        exit.innerHTML = undo;
        options.classList.add('options');
        exit.classList.add('headerbtns');
        first_Option.classList.add('headerbtns');
        second_Option.classList.add('headerbtns');
        third_Option.classList.add('headerbtns');

        first_Option.addEventListener('click', () => {
            create_Community_Profile(locationId, userchatroom);
        });
        third_Option.addEventListener('click', () => {
            create_Community_Chat_Add_Members(locationId, userchatroom);
        });
        second_Option.addEventListener('click', () => {
            create_Community_Chat_Members(locationId, userchatroom);
        });
        exit.addEventListener('click', () => {
            options.remove();
        });
        if (members_Id === creator_Id) {
            let fouth_Option = document.createElement('span');
            options.appendChild(fouth_Option);
            fouth_Option.innerHTML = deletesvg;
            fouth_Option.classList.add('headerbtns');
            function Delete_Community() {
                let confirmation_popup = document.createElement('div');
                let confirmationflex = document.createElement('div');
                let confirmationflex1 = document.createElement('div');
                let confirmationtext = document.createElement('p');
                let confirmationtrue = document.createElement('span');
                let confirmationfalse = document.createElement('span');
                confirmationtext.textContent = 'Are You Sure You Want To Delete This Comment?';
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
                confirmation_popup.id = locationId;
                confirmationtrue.id = locationId;
                confirmationtrue.addEventListener('click', () => {
                    myCommunities = myCommunities.filter((commu_nity) => {
                        if (commu_nity.community_Id === confirmationtrue.id) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                    confirmation_popup.style.display = 'none';
                    create_Message('operated successfully');
                });
                fouth_Option.addEventListener('click', () => {
                    confirmation_popup.style.display = 'flex';
                });
            }
            Delete_Community();
        }
    }
    chatoptionicon.addEventListener('click', () => {
        create_Post_Options_Script();
    });
    voicerecordicon.addEventListener('click', () => {
        chatfloat.classList.toggle('chatfloatactive');
        create_Voice_Recording_Script(locationId, creator_Id, userchatroom);
    });

    chatuploadicon.addEventListener('click', () => {
        createUploader(locationId, members_Id, userchatroom, Community_chatroomcolumn, voicerecordicon, 'community_chat', locationId);
    });

    function pushChat() {
        const id = '' + new Date().getTime();
        if (userchattextbox.value) {
            Community_myChat_Msg.push({
                isText: true,
                Property_Src: userchattextbox.value,
                id: id,
                posterId: members_Id,
                chat_receiver: locationId,
                time: new Date().getTime(),
                date: trackingDate,
                chatvisibilty: 'sent',
                views: []
            });
            localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
        }
    }
    function hightlightchatblock() {
        myCommunities.forEach(com => {
            let mem = com.community_Members;
            if (com.community_Id === locationId) {
                mem.forEach(mems => {
                    if (mems.members_Id === members_Id) {
                        mems.checked = true;
                        localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                    } else {
                        mems.checked = false;
                        localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                    }
                });
            }
        });
    }
    userchatsend.addEventListener('click', () => {
        if (userchattextbox.value) {
            Community_chatroomcolumn.innerHTML = '';
            pushChat();
            create_Community_Chat_Messages(Community_chatroomcolumn, locationId, members_Id);
            hightlightchatblock();
            userchattextbox.value = '';
            increaseCommunityChatCount();
        }
    });
    document.addEventListener('keypress', (e) => {
        if (userchattextbox.value) {
            if (e.key === 'Enter') {
                userchatsend.click();
            }
        }
    });


    voicerecordicon.innerHTML = microphone;
    chatoptionicon.innerHTML = moresvg;
    chatcallicon.innerHTML = videocallsvg;

    chatuploadicon.innerHTML = createsolidsvg;
    chatfloat.appendChild(voicerecordicon);
    chatfloat.appendChild(chatuploadicon);
    chatfloat.appendChild(chatoptionicon);
    chatfloat.appendChild(chatcallicon);
    chatcallicon.style.display = 'none';
    attach.addEventListener('click', () => {
        chatfloat.classList.toggle('chatfloatactive');
    });
    chatcallicon.id = trackingId;
    chatcallicon.addEventListener('click', () => {
        document.querySelectorAll('.video_Call_Popup').forEach(popup => {
            if (popup.id !== chatcallicon.id) {
                popup.style.display = 'none';
            } else {
                popup.style.display = 'flex';
            }
        })
    });
    chatfloat.classList.add('chatfloat');

    userschatbox.appendChild(userchattextbox);
    userschatbox.appendChild(attach);
    userschatbox.appendChild(userchatsend);
    attach.innerHTML = moresvg;
    userchatsend.innerHTML = send2svg;

    attach.classList.add('headerbtns');
    userchatsend.classList.add('headerbtns');

    voicerecordicon.classList.add('headerbtns');
    chatuploadicon.classList.add('headerbtns');
    chatoptionicon.classList.add('headerbtns');
    chatcallicon.classList.add('headerbtns');

    userchattextbox.type = 'text';
    userchattextbox.placeholder = 'send message...';
    userschatbox.classList.add('userschatbox');
    document.body.appendChild(userchatroom);
    userchatroom.appendChild(userchatheader);
    userchatroom.appendChild(Community_chatroomcolumn);
    userchatroom.appendChild(userschatbox);
    userchatroom.appendChild(chatfloat);
    userchatroom.classList.add('userchatroom');
    Community_chatroomcolumn.classList.add('Community_chatroomcolumn');
    Community_chatroomcolumn.id = locationId;
    //header
    let friendactivestatus = document.createElement('strong');
    let usersHeaderflex = document.createElement('div');
    userchatheader.appendChild(userschatexit);
    userchatheader.appendChild(userchatprofilepicturecontainer);
    userchatheader.appendChild(usersHeaderflex);
    usersHeaderflex.appendChild(userchatreciepientname);
    usersHeaderflex.appendChild(friendactivestatus);
    userchatprofilepicturecontainer.appendChild(memberimage);
    userschatexit.innerHTML = undo;
    userschatexit.classList.add('headerbtns');
    usersHeaderflex.classList.add('usersHeaderflex');
    userchatheader.classList.add('userchatheader');
    userchatprofilepicturecontainer.classList.add('userchatprofilepicturecontainer');

    userchatroom.id = trackingId;
    userchatprofilepicturecontainer.id = locationId;
    userchatreciepientname.id = locationId;
    memberimage.src = community_Image;
    userchatreciepientname.textContent = community_Name;

    function increaseCommunityChatCount() {
        if (LogInFormData) {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            myCommunities = JSON.parse(localStorage.getItem('myCommunities'));
            myCommunities.forEach(community => {
                if (community.community_Id === locationId) {
                    let members = community.community_Members;
                    members.forEach(mem => {
                        LogInFormData.forEach(user => {
                            if (mem.community_Id === locationId) {
                                if (user.user_Id === mem.members_Id && user.user_Id !== members_Id) {
                                    user.user_ChatView = false;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                        });
                    });
                }
            });
        }
    }
    userchatreciepientname.classList.add('userchatreciepientname');
    document.querySelector('.navigatiofloatcontainer').style.display = 'none';
    userschatexit.addEventListener('click', () => {
        create_Community_Chat_Menu(members_Id);
        document.querySelectorAll('#general_smart_Chat').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelectorAll('#community_smart_Chat').forEach(button => {
            button.classList.add('active');
        });
        userchatroom.remove();
        sessionStorage.setItem('activepage', 'community_smart_Chat');
        document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
    });
    if (Array.isArray(JSON.parse(localStorage.getItem('Community_myChat_Msg')))) {
        Community_myChat_Msg = JSON.parse(localStorage.getItem('Community_myChat_Msg'));
        create_Community_Chat_Messages(Community_chatroomcolumn, locationId, members_Id);
    } else {
        Community_myChat_Msg = [];
    }
}
function create_Voice_Recording_Script(locationId, CreatorId, chatroom) {
    let my_Audio_Records = [];
    let voicechat = document.createElement('div');
    let voicechataudio = document.createElement('audio');
    let chat_audionreciever = document.createElement('audio');
    let voicechatsend = document.createElement('div');
    let voicechatsendimg = document.createElement('img');
    let audiorecord_Cancel = document.createElement('div');
    let audiorecord_exit_img = document.createElement('img');
    let chat_Audio_Gadget = document.createElement('div');
    let chatplay = document.createElement('div');
    let chatRecordplay = document.createElement('img');
    let chatRecordPause = document.createElement('img');
    let record_Timer = document.createElement('span');
    chatplay.appendChild(chatRecordplay);
    chatplay.appendChild(chatRecordPause);
    chat_Audio_Gadget.appendChild(chatplay);
    record_Timer.textContent = '00:00';
    chatroom.appendChild(voicechat);
    voicechat.appendChild(audiorecord_Cancel);
    voicechat.appendChild(chat_Audio_Gadget);
    voicechat.appendChild(record_Timer);
    voicechat.appendChild(voicechataudio);
    voicechat.appendChild(chat_audionreciever);
    voicechat.appendChild(voicechatsend);
    voicechatsend.appendChild(voicechatsendimg);
    voicechat.classList.add('voicechat');
    audiorecord_Cancel.appendChild(audiorecord_exit_img);
    audiorecord_Cancel.classList.add('headerbtns');
    chatplay.classList.add('headerbtns');
    voicechatsend.classList.add('headerbtns');
    audiorecord_exit_img.src = 'icons/undo_2.png';
    voicechatsendimg.src = 'newicons/send.png';
    audiorecord_Cancel.innerHTML = '&times;';

    voicechataudio.addEventListener('timeupdate', () => {
        let currentVideoTime = event.target.currentTime;
        let currentMin = Math.floor(currentVideoTime / 60);
        let currentSec = Math.floor(currentVideoTime % 60);
        //if CurrentMin is < 10 add 0 at the beginning;
        currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

        //if CurrentSec is < 10 add 0 at the beginning;
        currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
        record_Timer.innerHTML = ` ${currentMin} : ${currentSec}`;
    });

    chatRecordplay.src = 'icons/play.png';
    chatRecordPause.src = 'icons/pause.png';
    chatRecordPause.style.display = 'none';

    chat_Audio_Gadget.classList.add('chat_Audio_Gadget');
    audiorecord_Cancel.classList.add('audiorecord_Cancel');
    function record_Chat() {
        audiorecord_Cancel.addEventListener('click', () => {
            voicechat.remove();
        });
        activateaudio();
    }
    record_Chat();
    function activateaudio() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
            }).then(function (stream) {
                voicechataudio.srcObject = stream;

                let media_Recorder = new MediaRecorder(stream);
                chatRecordplay.addEventListener('click', () => {
                    voicechataudio.play();
                    media_Recorder.start();
                    console.log(media_Recorder.state);
                    chatRecordplay.style.display = 'none';
                    chatRecordPause.style.display = 'block';
                });
                function change_mediaRecorderState() {
                    chatRecordplay.style.display = 'block';
                    chatRecordPause.style.display = 'none';
                    media_Recorder.stop();
                    voicechataudio.pause();
                    console.log(media_Recorder.state);
                    record_Timer.textContent = '00:00';
                }
                media_Recorder.ondataavailable = function (event) {
                    my_Audio_Records.push(event.data);
                }
                media_Recorder.onstop = function (event) {
                    let blob = new Blob(my_Audio_Records, { type: 'audio/mp3' });
                    let reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onload = () => {
                        var b64 = reader.result.replace(/^data:, + base64,/, '');
                        console.log(b64);
                        chat_audionreciever.src = b64;
                    }
                    my_Audio_Records = [];
                }

                voicechatsend.addEventListener('click', () => {
                    voicechat.style.display = 'none';
                    pushVoiceChat();
                    change_mediaRecorderState();
                    hightlightchatblock();
                    increaseChatCount(locationId);
                    voicechataudio.src = '';
                    voicechataudio.pause();
                    if (type == 'friends_chat') {
                        createChatMessages(chatroom, locationId, CreatorId);
                    } if (type == 'community_chat') {
                        create_Community_Chat_Messages(chatroom, locationId, CreatorId);
                    }
                });
                function pushVoiceChat() {
                    const id = '' + new Date().getTime();
                    if (chat_audionreciever.src) {
                        if (type == 'friends_chat') {
                            myChatMsg.push({
                                isAudio: true,
                                voice: true,
                                Property_Src: chat_audionreciever.src,
                                id: id,
                                posterId: CreatorId,
                                chat_receiver: locationId,
                                time: new Date().getTime(),
                                date: trackingDate,
                                chatvisibilty: 'sent'
                            });
                            localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                        } if (type == 'community_chat') {
                            Community_myChat_Msg.push({
                                isAudio: true,
                                voice: true,
                                Property_Src: chat_audionreciever.src,
                                id: id,
                                posterId: CreatorId,
                                chat_receiver: locationId,
                                time: new Date().getTime(),
                                date: trackingDate,
                                chatvisibilty: 'sent',
                                views: []
                            });
                            localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                        }
                    }
                }
            });
        }
    }
}
function create_Community_Chat_Messages(column, locationId, members_Id) {
    document.querySelectorAll('.Community_chatroomcolumn').forEach(container => {
        container.innerHTML = '';
    });
    function pushViewers(user_Id) {
        Community_myChat_Msg.forEach(textmesg => {
            if (textmesg.chat_receiver === locationId) {
                let views = textmesg.views;
                function filterviews() {
                    views = views.filter(view => {
                        if (user_Id === view.posterId) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    textmesg.views = views;
                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                    pushdata();
                }
                function pushdata() {
                    views.push({
                        posterId: user_Id,
                        id: '' + new Date().getTime()
                    });
                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                }
                if (user_Id !== textmesg.posterId) {
                    filterviews();
                }
            }
        });
    }
    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            pushViewers(user.user_Id);
        });
    }
    Community_myChat_Msg.forEach(textmesg => {
        if (textmesg.chat_receiver === locationId) {
            if (textmesg.isText) {
                let textchatcontainer = document.createElement('div');
                let chatmesgaitself = document.createElement('div');
                let chattext = document.createElement('p');
                let chatstime = document.createElement('span');

                let chattimeandstatus = document.createElement('div');
                let chatviews = document.createElement('nav');
                let reciepientblock = document.createElement('div');
                let reciepientimgCont = document.createElement('div');
                let reciepientimage = document.createElement('img');
                let reciepientname = document.createElement('strong');

                function create_Reply() {
                    Community_myChat_Msg.forEach(mesg => {
                        if (mesg.id === textmesg.replyId) {
                            if (mesg.isText) {
                                let replychatcontainer = document.createElement('div');
                                let chatmesgaitself = document.createElement('div');
                                let chattext = document.createElement('p');
                                let chatstime = document.createElement('span');

                                let chattimeandstatus = document.createElement('div');

                                let reciepientblock = document.createElement('div');
                                let reciepientimgCont = document.createElement('div');
                                let reciepientimage = document.createElement('img');
                                let reciepientname = document.createElement('strong');
                                let purposemesg = document.createElement('b');

                                textchatcontainer.appendChild(purposemesg);
                                textchatcontainer.appendChild(replychatcontainer);
                                reciepientblock.appendChild(reciepientimgCont);
                                reciepientblock.appendChild(reciepientname);
                                reciepientimgCont.appendChild(reciepientimage);
                                replychatcontainer.appendChild(reciepientblock);
                                reciepientblock.classList.add('reciepientblock');
                                replychatcontainer.appendChild(chatmesgaitself);
                                replychatcontainer.appendChild(chattimeandstatus);
                                chattimeandstatus.appendChild(chatstime);
                                chatmesgaitself.appendChild(chattext);
                                chattext.textContent = mesg.Property_Src;
                                chattext.textContent.split(" ").forEach(texttitle => {
                                    prefix.forEach(unit => {
                                        if (texttitle.indexOf(unit.prefixName) != -1) {
                                            if (unit.prefixName == 'https://') {
                                                let newtitle = chattext.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                                chattext.innerHTML = newtitle;
                                            } else {
                                                let newtitle = chattext.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                                chattext.innerHTML = newtitle;
                                            }
                                        }
                                    });
                                });
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - mesg.time;
                                    var token;
                                    var moment = 'ago';
                                    let maintime;

                                    time = miliseconds / 1000;
                                    if (time >= 60 * 60 * 24 * 7) {
                                        chatstime.innerHTML = mesg.date;
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        token = 'day';
                                        maintime = time / 86400;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60 * 24) {
                                        token = 'hr';
                                        maintime = time / 3600;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60) {
                                        token = 'min';
                                        maintime = time / 60;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60) {
                                        token = 'just now';
                                        chatstime.innerHTML = token;
                                    }
                                }
                                startTime();

                                if (LogInFormData) {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === mesg.posterId) {
                                            reciepientimage.src = user.user_ProfilePicture;

                                            let username;
                                            user.user_Mid_Name ? username =
                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                            reciepientname.textContent = username;
                                        } if (user.user_Id === textmesg.posterId) {
                                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                            ActiveUser_Account.forEach(data => {
                                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                                LogInFormData.forEach(userdata => {
                                                    if (userdata.user_Id === mesg.posterId) {
                                                        if (data.user_Id === textmesg.posterId) {
                                                            let username;
                                                            userdata.user_Mid_Name ? username =
                                                                userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname :
                                                                username = userdata.user_Firstname + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `you replied to ${username}`;
                                                            reciepientblock.style.display = 'none';
                                                        } else {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            let newusername;
                                                            userdata.user_Mid_Name ? newusername =
                                                                userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname :
                                                                newusername = userdata.user_Firstname + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `${username} replied to ${newusername}`;
                                                        } if (data.user_Id === mesg.posterId) {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            purposemesg.textContent = `${username} replied to you`;
                                                        }
                                                    }
                                                });

                                                if (data.user_Id === mesg.posterId) {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('mychatcontainer');
                                                    chatmesgaitself.classList.add('mychat');
                                                    chatstime.classList.add('mychatstime');
                                                    chattimeandstatus.classList.add('mychattimeandstatus');
                                                    reciepientblock.style.display = 'none';
                                                } else {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('friendchatcontainer');
                                                    chatmesgaitself.classList.add('friendschat');
                                                    chatstime.classList.add('friendschatstime');
                                                    chattimeandstatus.classList.add('friendschattimeandstatus');
                                                }
                                            });
                                        }
                                    });
                                    purposemesg.classList.add('purposemesg');
                                }
                                chattext.classList.add('chattext');
                            } if (mesg.isPhoto) {
                                let replychatcontainer = document.createElement('div');
                                let chatphotocontainer = document.createElement('div');
                                let chatphoto = document.createElement('img');
                                let chatstime = document.createElement('span');
                                let chattimeandstatus = document.createElement('div');

                                let reciepientblock = document.createElement('div');
                                let reciepientimgCont = document.createElement('div');
                                let reciepientimage = document.createElement('img');
                                let reciepientname = document.createElement('strong');

                                let purposemesg = document.createElement('b');

                                textchatcontainer.appendChild(purposemesg);

                                textchatcontainer.appendChild(replychatcontainer);
                                reciepientblock.appendChild(reciepientimgCont);
                                reciepientblock.appendChild(reciepientname);
                                reciepientimgCont.appendChild(reciepientimage);
                                replychatcontainer.appendChild(reciepientblock);
                                reciepientblock.classList.add('reciepientblock');

                                let chatCover = document.createElement('div');
                                let chattypeIndicator = document.createElement('span');
                                let chattypeIndicatorImage = document.createElement('img');

                                chatCover.appendChild(chattypeIndicator);
                                chattypeIndicator.appendChild(chattypeIndicatorImage);
                                chattypeIndicatorImage.src = 'icons/image(0).png';
                                chatCover.classList.add('chatCover');

                                replychatcontainer.appendChild(chatphotocontainer);
                                replychatcontainer.appendChild(chattimeandstatus);
                                chattimeandstatus.appendChild(chatstime);
                                chatphotocontainer.appendChild(chatphoto);
                                chatphotocontainer.appendChild(chatCover);

                                replychatcontainer.id = mesg.chat_receiver;
                                chatphoto.id = mesg.chat_receiver;
                                chatphotocontainer.id = mesg.chat_receiver;
                                chatphoto.src = mesg.Property_Src;
                                if (LogInFormData) {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === mesg.posterId) {
                                            reciepientimage.src = user.user_ProfilePicture;

                                            let username;
                                            user.user_Mid_Name ? username =
                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                            reciepientname.textContent = username;
                                        } if (user.user_Id === textmesg.posterId) {
                                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                            ActiveUser_Account.forEach(data => {
                                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                                LogInFormData.forEach(userdata => {
                                                    if (userdata.user_Id === mesg.posterId) {
                                                        if (data.user_Id === textmesg.posterId) {
                                                            let username;
                                                            userdata.user_Mid_Name ? username =
                                                                userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname :
                                                                username = userdata.user_Firstname + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `you replied to ${username}`;
                                                            reciepientblock.style.display = 'none';
                                                        } else {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            let newusername;
                                                            userdata.user_Mid_Name ? newusername =
                                                                userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname :
                                                                newusername = userdata.user_Firstname + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `${username} replied to ${newusername}`;
                                                        } if (data.user_Id === mesg.posterId) {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            purposemesg.textContent = `${username} replied to you`;
                                                        }
                                                    }
                                                });
                                                if (data.user_Id === mesg.posterId) {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('mychatcontainer');
                                                    chatphotocontainer.classList.add('mychatphoto');
                                                    chatstime.classList.add('mychatstime');
                                                    chattimeandstatus.classList.add('mychattimeandstatus');
                                                    reciepientblock.style.display = 'none';
                                                } else {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('friendchatcontainer');
                                                    chatphotocontainer.classList.add('friendschatphoto');
                                                    chatstime.classList.add('friendschatstime');
                                                    chattimeandstatus.classList.add('friendschattimeandstatus');
                                                    chatsvisiblestatus.style.display = 'none';
                                                }
                                            });
                                        }
                                    });
                                    purposemesg.classList.add('purposemesg');
                                }
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - mesg.time;
                                    var token;
                                    var moment = 'ago';
                                    let maintime;

                                    time = miliseconds / 1000;
                                    if (time >= 60 * 60 * 24 * 7) {
                                        chatstime.innerHTML = mesg.date;
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        token = 'day';
                                        maintime = time / 86400;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60 * 24) {
                                        token = 'hr';
                                        maintime = time / 3600;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60) {
                                        token = 'min';
                                        maintime = time / 60;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60) {
                                        token = 'just now';
                                        chatstime.innerHTML = token;
                                    }
                                }
                                startTime();
                                chatphotocontainer.addEventListener('click', () => {
                                    removeOptions();
                                });
                                chattext.classList.add('chattext');
                            } if (mesg.isVideo) {
                                let replychatcontainer = document.createElement('div');
                                let chatphotocontainer = document.createElement('div');
                                let chatphoto = document.createElement('video');
                                let chatstime = document.createElement('span');
                                let chattimeandstatus = document.createElement('div');

                                let reciepientblock = document.createElement('div');
                                let reciepientimgCont = document.createElement('div');
                                let reciepientimage = document.createElement('img');
                                let reciepientname = document.createElement('strong');

                                let purposemesg = document.createElement('b');

                                textchatcontainer.appendChild(purposemesg);

                                textchatcontainer.appendChild(replychatcontainer);
                                reciepientblock.appendChild(reciepientimgCont);
                                reciepientblock.appendChild(reciepientname);
                                reciepientimgCont.appendChild(reciepientimage);
                                replychatcontainer.appendChild(reciepientblock);
                                reciepientblock.classList.add('reciepientblock');

                                let chatCover = document.createElement('div');
                                let chattypeIndicator = document.createElement('span');
                                let chattypeIndicatorImage = document.createElement('img');

                                chatCover.appendChild(chattypeIndicator);
                                chattypeIndicator.appendChild(chattypeIndicatorImage);
                                chattypeIndicatorImage.src = 'icons/youtube.png';
                                chatCover.classList.add('chatCover');

                                replychatcontainer.appendChild(chatphotocontainer);
                                replychatcontainer.appendChild(chattimeandstatus);
                                chattimeandstatus.appendChild(chatstime);
                                chatphotocontainer.appendChild(chatphoto);
                                chatphotocontainer.appendChild(chatCover);

                                replychatcontainer.id = mesg.chat_receiver;
                                chatphoto.id = mesg.chat_receiver;
                                chatphotocontainer.id = mesg.chat_receiver;
                                chatphoto.src = mesg.Property_Src;
                                chatphotocontainer.addEventListener('click', () => {
                                    removeOptions();
                                });
                                if (LogInFormData) {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === mesg.posterId) {
                                            reciepientimage.src = user.user_ProfilePicture;

                                            let username;
                                            user.user_Mid_Name ? username =
                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                            reciepientname.textContent = username;
                                        } if (user.user_Id === textmesg.posterId) {
                                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                            ActiveUser_Account.forEach(data => {
                                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                                LogInFormData.forEach(userdata => {
                                                    if (userdata.user_Id === mesg.posterId) {
                                                        if (data.user_Id === textmesg.posterId) {
                                                            let username;
                                                            userdata.user_Mid_Name ? username =
                                                                userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname :
                                                                username = userdata.user_Firstname + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `you replied to ${username}`;
                                                            reciepientblock.style.display = 'none';
                                                        } else {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            const newusername = userdata.user_Firstname + ' ' + userdata.user_Mid_Name + ' ' + userdata.user_Surname;
                                                            purposemesg.textContent = `${username} replied to ${newusername}`;
                                                        } if (data.user_Id === mesg.posterId) {

                                                            let username;
                                                            user.user_Mid_Name ? username =
                                                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                                username = user.user_Firstname + ' ' + user.user_Surname;
                                                            purposemesg.textContent = `${username} replied to you`;
                                                        }
                                                    }
                                                });
                                                if (data.user_Id === mesg.posterId) {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('mychatcontainer');
                                                    chatphotocontainer.classList.add('mychatphoto');
                                                    chatstime.classList.add('mychatstime');
                                                    chattimeandstatus.classList.add('mychattimeandstatus');
                                                    reciepientblock.style.display = 'none';
                                                } else {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('friendchatcontainer');
                                                    chatphotocontainer.classList.add('friendschatphoto');
                                                    chatstime.classList.add('friendschatstime');
                                                    chattimeandstatus.classList.add('friendschattimeandstatus');
                                                    chatsvisiblestatus.style.display = 'none';
                                                }
                                            });
                                        }
                                    });
                                    purposemesg.classList.add('purposemesg');
                                }
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - mesg.time;
                                    var token;
                                    var moment = 'ago';
                                    let maintime;

                                    time = miliseconds / 1000;
                                    if (time >= 60 * 60 * 24 * 7) {
                                        chatstime.innerHTML = mesg.date;
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        token = 'day';
                                        maintime = time / 86400;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60 * 24) {
                                        token = 'hr';
                                        maintime = time / 3600;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60 * 60) {
                                        token = 'min';
                                        maintime = time / 60;
                                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                                    } if (time <= 60) {
                                        token = 'just now';
                                        chatstime.innerHTML = token;
                                    }
                                }
                                startTime();
                                chattext.classList.add('chattext');
                            } if (mesg.isAudio) {
                                let replychatcontainer = document.createElement('div');
                                let chataudiocontainer = document.createElement('div');
                                let chataudio = document.createElement('audio');
                                let chatstime = document.createElement('span');
                                let chataudioplay = document.createElement('img');
                                let chataudiopause = document.createElement('img');
                                let chataudiptimegrid = document.createElement('nav');
                                let chataudiocurrenttime = document.createElement('span');
                                let chataudiototaltime = document.createElement('span');
                                let chattimeandstatus = document.createElement('div');

                                let reciepientblock = document.createElement('div');
                                let reciepientimgCont = document.createElement('div');
                                let reciepientimage = document.createElement('img');
                                let reciepientname = document.createElement('strong');

                                let purposemesg = document.createElement('b');

                                textchatcontainer.appendChild(purposemesg);

                                textchatcontainer.appendChild(replychatcontainer);
                                reciepientblock.appendChild(reciepientimgCont);
                                reciepientblock.appendChild(reciepientname);
                                reciepientimgCont.appendChild(reciepientimage);
                                replychatcontainer.appendChild(reciepientblock);
                                reciepientblock.classList.add('reciepientblock');

                                chataudiptimegrid.append(chataudiocurrenttime);
                                chataudiptimegrid.append(chataudiototaltime);
                                chataudiptimegrid.classList.add('chataudiptimegrid');
                                chataudioplay.src = 'icons/play.png';
                                chataudiopause.src = 'icons/pause.png';
                                chataudiocontainer.appendChild(chataudioplay);
                                chataudiocontainer.appendChild(chataudiopause);
                                chataudiocontainer.appendChild(chataudiptimegrid);
                                chataudioplay.style.display = 'block';
                                chataudiopause.style.display = 'none';

                                chataudio.classList.add('chataudio');
                                chataudio.addEventListener('play', () => {
                                    chataudioplay.style.display = 'none';
                                    chataudiopause.style.display = 'block';
                                });
                                chataudio.addEventListener('pause', () => {
                                    chataudioplay.style.display = 'block';
                                    chataudiopause.style.display = 'none';
                                });
                                chataudio.addEventListener('ended', () => {
                                    chataudioplay.style.display = 'block';
                                    chataudiopause.style.display = 'none';
                                });
                                chataudioplay.addEventListener('click', () => {
                                    chataudio.play();
                                    removeOptions();
                                });
                                chataudiopause.addEventListener('click', () => {
                                    chataudio.pause();
                                    removeOptions();
                                });
                                chataudio.addEventListener('timeupdate', () => {
                                    let currentaudiotime = event.target.currentTime;
                                    let currentMin = Math.floor(currentaudiotime / 60);
                                    let currentSec = Math.floor(currentaudiotime % 60);
                                    //if CurrentMin is < 10 add 0 at the beginning;
                                    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

                                    //if CurrentSec is < 10 add 0 at the beginning;
                                    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                                    chataudiocurrenttime.innerHTML = ` ${currentMin} : ${currentSec}  /  `;
                                });
                                chataudio.addEventListener('loadeddata', (e) => {
                                    let audiodureation = e.target.duration;
                                    let totalMin = Math.floor(audiodureation / 60);
                                    let totalSec = Math.floor(audiodureation % 60);

                                    //if totalmin are less than 10 add 0 at the beginning;
                                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                                    //if totalmin are less than 10 add 0 at the beginning;
                                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                                    chataudiototaltime.innerHTML = `${totalMin} : ${totalSec}`;
                                    if (mesg.voice) {
                                        chataudiototaltime.innerHTML = 'voice';
                                    }
                                });
                                replychatcontainer.appendChild(chataudiocontainer);
                                replychatcontainer.appendChild(chataudiocontainer);
                                replychatcontainer.appendChild(chattimeandstatus);
                                chattimeandstatus.appendChild(chatstime);
                                chataudiocontainer.appendChild(chataudio);
                                chataudio.src = mesg.Property_Src;
                                if (LogInFormData) {
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === mesg.posterId) {
                                            reciepientimage.src = user.user_ProfilePicture;
                                            reciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                        } if (user.user_Id === textmesg.posterId) {
                                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                            ActiveUser_Account.forEach(data => {
                                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                                LogInFormData.forEach(userdata => {
                                                    if (userdata.user_Id === mesg.posterId) {
                                                        if (data.user_Id === textmesg.posterId) {
                                                            purposemesg.textContent = `you replied to ${userdata.user_Firstname + ' ' + userdata.user_Surname}`;
                                                            reciepientblock.style.display = 'none';
                                                        } else {
                                                            purposemesg.textContent = `${user.user_Firstname + ' ' + user.user_Surname} replied to ${userdata.user_Firstname + ' ' + userdata.user_Surname}`;
                                                        } if (data.user_Id === mesg.posterId) {
                                                            purposemesg.textContent = `${user.user_Firstname + ' ' + user.user_Surname} replied to you`;
                                                        }
                                                    }
                                                });
                                                if (data.user_Id === mesg.posterId) {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('mychatcontainer');
                                                    chataudiocontainer.classList.add('mychataudio');
                                                    chatstime.classList.add('mychatstime');
                                                    chattimeandstatus.classList.add('mychattimeandstatus');
                                                    reciepientblock.style.display = 'none';
                                                } else {
                                                    textchatcontainer.classList.add('replyChat');
                                                    replychatcontainer.classList.add('friendchatcontainer');
                                                    chataudiocontainer.classList.add('friendschataudio');
                                                    chatstime.classList.add('friendschatstime');
                                                    chattimeandstatus.classList.add('friendschattimeandstatus');
                                                    chatsvisiblestatus.style.display = 'none';
                                                }
                                            });
                                        }
                                    });
                                    purposemesg.classList.add('purposemesg');
                                }
                            }
                        }
                    });
                }
                if (textmesg.reply === true) {
                    create_Reply();
                }
                reciepientblock.appendChild(reciepientimgCont);
                reciepientblock.appendChild(reciepientname);
                reciepientimgCont.appendChild(reciepientimage);
                textchatcontainer.appendChild(reciepientblock);
                reciepientblock.classList.add('reciepientblock');
                reciepientimgCont.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(textmesg.posterId, user.user_Id);
                        });
                    }
                });
                reciepientname.addEventListener('click', () => {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account.forEach(user => {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                            createProfileOptions(textmesg.posterId, user.user_Id);
                        });
                    }
                });
                chatmesgaitself.addEventListener('click', () => {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        removeOptions();
                        if (textmesg.posterId === data.user_Id) {
                            create_Options_Script();
                        } else {
                            view_Options();
                        }
                    });
                });
                function view_Options() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = recreatesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo;
                    function create_replyInputs() {
                        first_Option.remove();
                        let mesgBox = document.createElement('div');
                        let mesgTextBox = document.createElement('input');
                        let sendmesg = document.createElement('div');
                        options.appendChild(mesgBox);
                        mesgBox.appendChild(mesgTextBox);
                        options.appendChild(sendmesg);
                        sendmesg.innerHTML = sendsvg;
                        sendmesg.classList.add('headerbtns');
                        mesgBox.classList.add('mesgBox');
                        mesgTextBox.placeholder = 'send reply...';
                        function pushChat(user_Id) {
                            const id = '' + new Date().getTime();
                            if (mesgTextBox.value) {
                                Community_myChat_Msg.push({
                                    isText: true,
                                    reply: true,
                                    replyId: textmesg.id,
                                    Property_Src: mesgTextBox.value,
                                    id: id,
                                    posterId: user_Id,
                                    chat_receiver: textmesg.chat_receiver,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent',
                                    views: []
                                });
                                localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                            }
                        }
                        sendmesg.addEventListener('click', () => {
                            ActiveUser_Account.forEach(user => {
                                pushChat(user.user_Id);
                                options.remove();
                                create_Community_Chat_Messages(column, locationId, members_Id);
                            });
                        });
                    }
                    first_Option.addEventListener('click', () => {
                        create_replyInputs();
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                function create_Options_Script() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = deletesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo2;
                    first_Option.addEventListener('click', () => {
                        Community_myChat_Msg = Community_myChat_Msg.filter(text => {
                            if (text.id === first_Option.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                        options.remove();
                        create_Community_Chat_Messages(column, locationId, members_Id);
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }

                textchatcontainer.id = textmesg.chat_receiver;
                column.appendChild(textchatcontainer);
                textchatcontainer.appendChild(chatmesgaitself);
                textchatcontainer.appendChild(chatviews);
                textchatcontainer.appendChild(chattimeandstatus);
                chattimeandstatus.appendChild(chatstime);
                chatmesgaitself.appendChild(chattext);
                chattext.textContent = textmesg.Property_Src;
                chattext.textContent.split(" ").forEach(texttitle => {
                    prefix.forEach(unit => {
                        if (texttitle.indexOf(unit.prefixName) != -1) {
                            if (unit.prefixName == 'https://') {
                                let newtitle = chattext.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                chattext.innerHTML = newtitle;
                            } else {
                                let newtitle = chattext.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                chattext.innerHTML = newtitle;
                            }
                        }
                    });
                });
                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - textmesg.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24 * 7) {
                        chatstime.innerHTML = textmesg.date;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60) {
                        token = 'just now';
                        chatstime.innerHTML = token;
                    }
                }
                startTime();
                document.querySelectorAll('.community_chat_sample').forEach(sampletext => {
                    if (sampletext.id === textmesg.chat_receiver) {
                        sampletext.textContent = textmesg.Property_Src;
                    }
                });
                if (LogInFormData) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === textmesg.posterId) {
                            document.querySelectorAll('.sampleimage').forEach(image => {
                                if (image.id === textmesg.chat_receiver) {
                                    image.src = user.user_ProfilePicture;
                                }
                            });
                            reciepientimage.src = user.user_ProfilePicture;

                            let username;
                            user.user_Mid_Name ? username =
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                            reciepientname.textContent = username;
                        }
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    if (textmesg.posterId === user.user_Id) {
                                        textchatcontainer.classList.add('mychatcontainer');
                                        chatmesgaitself.classList.add('mychat');
                                        chatstime.classList.add('mychatstime');
                                        chattimeandstatus.classList.add('mychattimeandstatus');
                                        chatviews.classList.add('mychatviews');
                                        reciepientblock.style.display = 'none';
                                    } else {
                                        textchatcontainer.classList.add('friendchatcontainer');
                                        chatmesgaitself.classList.add('friendschat');
                                        chatstime.classList.add('friendschatstime');
                                        chattimeandstatus.classList.add('friendschattimeandstatus');
                                        chatviews.classList.add('friendschatviews');
                                        chatviews.style.display = 'none';
                                    }
                                }
                            });
                        });
                    }
                }
                function createViews() {
                    let views = textmesg.views;
                    views.slice(0, 6).forEach(view => {
                        let imgcontainer = document.createElement('div');
                        let profilepicture = document.createElement('img');
                        imgcontainer.appendChild(profilepicture);
                        chatviews.appendChild(imgcontainer);
                        function getDetails() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === view.posterId) {
                                    profilepicture.src = user.user_ProfilePicture;
                                    function filter_Image() {
                                        //profile_filter 
                                        if (user.user_ProfilePicture_Filter == 'default') {
                                            profilepicture.classList.add('--color-default');
                                        } else if (user.user_ProfilePicture_Filter == 'gray') {
                                            profilepicture.classList.add('--color-gray');
                                        } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                            profilepicture.classList.add('--color-contrast');
                                        } else if (user.user_ProfilePicture_Filter == 'bright') {
                                            profilepicture.classList.add('--color-bright');
                                        } else if (user.user_ProfilePicture_Filter == 'blur') {
                                            profilepicture.classList.add('--color-blur');
                                        } else if (user.user_ProfilePicture_Filter == 'invert') {
                                            profilepicture.classList.add('--color-invert');
                                        } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                            profilepicture.classList.add('--color-sepia');
                                        } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                            profilepicture.classList.add('--color-hue-rotate');
                                        } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                            profilepicture.classList.add('--color-opacity');
                                        } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                            profilepicture.classList.add('--color-satulate');
                                        }
                                    }
                                    filter_Image();
                                }
                            });
                        }
                        getDetails();
                        imgcontainer.addEventListener('click', () => {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account.forEach(user => {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                    createProfileOptions(view.posterId, user.user_Id);
                                });
                            }
                        });
                    });
                    if (views.length > 6) {
                        let count = document.createElement('p');
                        chatviews.appendChild(count);
                        var num = views.length;
                        count.textContent = `+${views.slice(6, num).length}`;
                        console.log(views.length);
                        count.addEventListener('click', () => {
                            createViewers();
                        });
                    }
                    function createViewers() {
                        if (Array.isArray(textmesg.views)) {
                            removeInfopage();
                            function createOtherInformation() {
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
                                popupname.innerHTML = `Chat Viewers Info &quest;`;
                                userinfoexit.classList.add('headerbtns');
                                userinfoexit.addEventListener('click', () => {
                                    license_Popup.remove();
                                });
                                friends(license_Column);
                            }
                            createOtherInformation();
                            function friends(column) {
                                let views = textmesg.views;
                                views.forEach(connect => {
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

                                    function getDetails() {
                                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                        LogInFormData.forEach(user => {
                                            if (user.user_Id === connect.posterId) {
                                                friendProfilePicture.src = user.user_ProfilePicture;

                                                let username;
                                                user.user_Mid_Name ? username =
                                                    user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                                friendname.textContent = username;
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
                                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                            ActiveUser_Account.forEach(user => {
                                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                                createProfileOptions(connect.posterId, user.user_Id);
                                            });
                                        }
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
                    }
                }
                createViews();
                chatviews.classList.add('chatviews');
                chattext.classList.add('chattext');
            } if (textmesg.isPhoto) {
                let textchatcontainer = document.createElement('div');
                let chatphotocontainer = document.createElement('div');
                let chatphoto = document.createElement('img');
                let chatstime = document.createElement('span');
                let chattimeandstatus = document.createElement('div');
                let chatsvisiblestatus = document.createElement('span');

                let reciepientblock = document.createElement('div');
                let reciepientimgCont = document.createElement('div');
                let reciepientimage = document.createElement('img');
                let reciepientname = document.createElement('strong');

                reciepientblock.appendChild(reciepientimgCont);
                reciepientblock.appendChild(reciepientname);
                reciepientimgCont.appendChild(reciepientimage);
                textchatcontainer.appendChild(reciepientblock);
                reciepientblock.classList.add('reciepientblock');

                let chatCover = document.createElement('div');
                let chattypeIndicator = document.createElement('span');
                let chattypeIndicatorImage = document.createElement('img');

                chatCover.appendChild(chattypeIndicator);
                chattypeIndicator.appendChild(chattypeIndicatorImage);
                chattypeIndicatorImage.src = 'icons/image(0).png';
                chatCover.classList.add('chatCover');

                textchatcontainer.id = textmesg.chat_receiver;
                chatphoto.id = textmesg.chat_receiver;
                chatphotocontainer.id = textmesg.chat_receiver;
                chatphoto.src = textmesg.Property_Src;
                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - textmesg.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24 * 7) {
                        chatstime.innerHTML = textmesg.date;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60) {
                        token = 'just now';
                        chatstime.innerHTML = token;
                    }
                }
                startTime();
                document.querySelectorAll('.community_chat_sample').forEach(sampletext => {
                    if (sampletext.id === textmesg.chat_receiver) {
                        sampletext.textContent = 'photo';
                    }
                });
                chatsvisiblestatus.id = textmesg.posterId;
                chatsvisiblestatus.textContent = textmesg.chatvisibilty;
                column.appendChild(textchatcontainer);
                textchatcontainer.appendChild(chatphotocontainer);
                textchatcontainer.appendChild(chattimeandstatus);
                chattimeandstatus.appendChild(chatstime);
                chattimeandstatus.appendChild(chatsvisiblestatus);
                chatphotocontainer.appendChild(chatphoto);
                chatphotocontainer.appendChild(chatCover);
                chatphotocontainer.addEventListener('click', () => {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        removeOptions();
                        if (textmesg.posterId === data.user_Id) {
                            create_Options_Script();
                        } else {
                            view_Options();
                        }
                    });
                });
                function view_Options() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = recreatesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo;
                    function create_replyInputs() {
                        first_Option.remove();
                        let mesgBox = document.createElement('div');
                        let mesgTextBox = document.createElement('input');
                        let sendmesg = document.createElement('div');
                        options.appendChild(mesgBox);
                        mesgBox.appendChild(mesgTextBox);
                        options.appendChild(sendmesg);
                        sendmesg.innerHTML = sendsvg
                        sendmesg.classList.add('headerbtns');
                        mesgBox.classList.add('mesgBox');
                        mesgTextBox.placeholder = 'send reply...';
                        function pushChat(user_Id) {
                            const id = '' + new Date().getTime();
                            if (mesgTextBox.value) {
                                Community_myChat_Msg.push({
                                    isText: true,
                                    reply: true,
                                    replyId: textmesg.id,
                                    Property_Src: mesgTextBox.value,
                                    id: id,
                                    posterId: user_Id,
                                    chat_receiver: textmesg.chat_receiver,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent',
                                    views: []
                                });
                                localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                            }
                        }
                        sendmesg.addEventListener('click', () => {
                            ActiveUser_Account.forEach(user => {
                                pushChat(user.user_Id);
                                options.remove();
                                create_Community_Chat_Messages(column, locationId, members_Id);
                            });
                        });
                    }
                    first_Option.addEventListener('click', () => {
                        create_replyInputs();
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                function create_Options_Script() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = deletesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo2;
                    first_Option.addEventListener('click', () => {
                        Community_myChat_Msg = Community_myChat_Msg.filter(text => {
                            if (text.id === first_Option.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                        options.remove();
                        create_Community_Chat_Messages(column, locationId, members_Id);
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                if (LogInFormData) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === textmesg.posterId) {
                            document.querySelectorAll('.sampleimage').forEach(image => {
                                if (image.id === textmesg.chat_receiver) {
                                    image.src = user.user_ProfilePicture;
                                }
                            });
                            reciepientimage.src = user.user_ProfilePicture;
                            reciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                        }
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (textmesg.posterId === data.user_Id) {
                                textchatcontainer.classList.add('mychatcontainer');
                                chatphotocontainer.classList.add('mychatphoto');
                                chatstime.classList.add('mychatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('mychattimeandstatus');
                                reciepientblock.style.display = 'none';
                            } else {
                                textchatcontainer.classList.add('friendchatcontainer');
                                chatphotocontainer.classList.add('friendschatphoto');
                                chatstime.classList.add('friendschatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('friendschattimeandstatus');
                                chatsvisiblestatus.style.display = 'none';
                            }
                        });
                    }
                }
                chatphotocontainer.addEventListener('click', () => {
                    create_Random_Items(textmesg.id, textmesg.posterId, 'no text to preview', textmesg.Property_Src, 'photo', 'chatroom', chatstime.innerHTML,);
                    removeOptions();
                });
            } if (textmesg.isVideo) {
                let textchatcontainer = document.createElement('div');
                let chatphotocontainer = document.createElement('div');
                let chatCover = document.createElement('div');
                let chattypeIndicator = document.createElement('span');
                let chattypeIndicatorImage = document.createElement('img');
                let chatphoto = document.createElement('video');
                let chatstime = document.createElement('span');
                let chattimeandstatus = document.createElement('div');
                let chatsvisiblestatus = document.createElement('span');

                let reciepientblock = document.createElement('div');
                let reciepientimgCont = document.createElement('div');
                let reciepientimage = document.createElement('img');
                let reciepientname = document.createElement('strong');

                reciepientblock.appendChild(reciepientimgCont);
                reciepientblock.appendChild(reciepientname);
                reciepientimgCont.appendChild(reciepientimage);
                textchatcontainer.appendChild(reciepientblock);
                reciepientblock.classList.add('reciepientblock');

                chatCover.appendChild(chattypeIndicator);
                chattypeIndicator.appendChild(chattypeIndicatorImage);
                chattypeIndicatorImage.src = 'icons/youtube.png';
                chatCover.classList.add('chatCover');

                textchatcontainer.id = textmesg.chat_receiver;
                chatphotocontainer.id = textmesg.chat_receiver;
                chatsvisiblestatus.id = textmesg.posterId;
                chatsvisiblestatus.textContent = textmesg.chatvisibilty;

                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - textmesg.time;
                    var token;
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24 * 7) {
                        chatstime.innerHTML = textmesg.date;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60) {
                        token = 'just now';
                        chatstime.innerHTML = token;
                    }
                }
                startTime();
                document.querySelectorAll('.community_chat_sample').forEach(sampletext => {
                    if (sampletext.id === textmesg.chat_receiver) {
                        sampletext.textContent = 'video';
                    }
                });
                column.appendChild(textchatcontainer);
                textchatcontainer.appendChild(chatphotocontainer);
                textchatcontainer.appendChild(chattimeandstatus);
                chattimeandstatus.appendChild(chatstime);
                chattimeandstatus.appendChild(chatsvisiblestatus);
                chatphotocontainer.appendChild(chatphoto);
                chatphotocontainer.appendChild(chatCover);
                chatphoto.src = textmesg.Property_Src;
                chatphotocontainer.addEventListener('click', () => {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        removeOptions();
                        if (textmesg.posterId === data.user_Id) {
                            create_Options_Script();
                        } else {
                            view_Options();
                        }
                    });
                });
                function view_Options() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let first_Optionimg = document.createElement('img');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = recreatesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo;
                    first_Optionimg.src = 'newicons/share.png';
                    function create_replyInputs() {
                        first_Option.remove();
                        let mesgBox = document.createElement('div');
                        let mesgTextBox = document.createElement('input');
                        let sendmesg = document.createElement('div');
                        options.appendChild(mesgBox);
                        mesgBox.appendChild(mesgTextBox);
                        options.appendChild(sendmesg);
                        sendmesg.innerHTML = sendsvg
                        sendmesg.classList.add('headerbtns');
                        mesgBox.classList.add('mesgBox');
                        mesgTextBox.placeholder = 'send reply...';
                        function pushChat(user_Id) {
                            const id = '' + new Date().getTime();
                            if (mesgTextBox.value) {
                                Community_myChat_Msg.push({
                                    isText: true,
                                    reply: true,
                                    replyId: textmesg.id,
                                    Property_Src: mesgTextBox.value,
                                    id: id,
                                    posterId: user_Id,
                                    chat_receiver: textmesg.chat_receiver,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent',
                                    views: []
                                });
                                localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                            }
                        }
                        sendmesg.addEventListener('click', () => {
                            ActiveUser_Account.forEach(user => {
                                pushChat(user.user_Id);
                                options.remove();
                                create_Community_Chat_Messages(column, locationId, members_Id);
                            });
                        });
                    }
                    first_Option.addEventListener('click', () => {
                        create_replyInputs();
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                function create_Options_Script() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.innerHTML = deletesvg;
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo2;
                    first_Option.addEventListener('click', () => {
                        Community_myChat_Msg = Community_myChat_Msg.filter(text => {
                            if (text.id === first_Option.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                        options.remove();
                        create_Community_Chat_Messages(column, locationId, members_Id);
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                if (LogInFormData) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === textmesg.posterId) {
                            document.querySelectorAll('.sampleimage').forEach(image => {
                                if (image.id === textmesg.chat_receiver) {
                                    image.src = user.user_ProfilePicture;
                                }
                            });
                            reciepientimage.src = user.user_ProfilePicture;
                            reciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                        }
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (textmesg.posterId === data.user_Id) {
                                textchatcontainer.classList.add('mychatcontainer');
                                chatphotocontainer.classList.add('mychatphoto');
                                chatstime.classList.add('mychatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('mychattimeandstatus');
                                reciepientblock.style.display = 'none';
                            } else {
                                textchatcontainer.classList.add('friendchatcontainer');
                                chatphotocontainer.classList.add('friendschatphoto');
                                chatstime.classList.add('friendschatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('friendschattimeandstatus');
                                chatsvisiblestatus.style.display = 'none';
                            }
                        });
                    }
                }
                chatphotocontainer.addEventListener('click', () => {
                    create_Random_Items(textmesg.id, textmesg.posterId, 'no text to preview', textmesg.Property_Src, 'video', 'chatroom', chatstime.innerHTML,);
                    removeOptions();
                });
            } if (textmesg.isAudio) {
                let textchatcontainer = document.createElement('div');
                let chataudiocontainer = document.createElement('div');
                let chataudio = document.createElement('audio');
                let chatstime = document.createElement('span');
                let chataudioplay = document.createElement('img');
                let chataudiopause = document.createElement('img');
                let chataudiptimegrid = document.createElement('nav');
                let chataudiocurrenttime = document.createElement('span');
                let chataudiototaltime = document.createElement('span');
                let chattimeandstatus = document.createElement('div');
                let chatsvisiblestatus = document.createElement('span');

                let reciepientblock = document.createElement('div');
                let reciepientimgCont = document.createElement('div');
                let reciepientimage = document.createElement('img');
                let reciepientname = document.createElement('strong');

                reciepientblock.appendChild(reciepientimgCont);
                reciepientblock.appendChild(reciepientname);
                reciepientimgCont.appendChild(reciepientimage);
                textchatcontainer.appendChild(reciepientblock);
                reciepientblock.classList.add('reciepientblock');

                chataudiptimegrid.append(chataudiocurrenttime);
                chataudiptimegrid.append(chataudiototaltime);
                chataudiptimegrid.classList.add('chataudiptimegrid');
                chataudioplay.src = 'icons/play.png';
                chataudiopause.src = 'icons/pause.png';
                chataudiocontainer.appendChild(chataudioplay);
                chataudiocontainer.appendChild(chataudiopause);
                chataudiocontainer.appendChild(chataudiptimegrid);
                chataudioplay.style.display = 'block';
                chataudiopause.style.display = 'none';
                textchatcontainer.id = textmesg.chat_receiver;
                chataudiocontainer.id = textmesg.chat_receiver;
                chatsvisiblestatus.id = textmesg.posterId;
                chatsvisiblestatus.textContent = textmesg.chatvisibilty;
                chataudio.id = textmesg.id;
                chataudioplay.id = textmesg.id;
                chataudiopause.id = textmesg.id;
                const startTime = function () {
                    let time;
                    let timeresult = new Date().getTime();
                    let miliseconds = timeresult - textmesg.time;
                    var token;
                    var moment = 'ago';
                    let maintime;

                    time = miliseconds / 1000;
                    if (time >= 60 * 60 * 24 * 7) {
                        chatstime.innerHTML = textmesg.date;
                    } if (time <= 60 * 60 * 24 * 7) {
                        token = 'day';
                        maintime = time / 86400;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60 * 24) {
                        token = 'hr';
                        maintime = time / 3600;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60 * 60) {
                        token = 'min';
                        maintime = time / 60;
                        chatstime.innerHTML = Math.trunc(maintime) + ' ' + token;
                    } if (time <= 60) {
                        token = 'just now';
                        chatstime.innerHTML = token;
                    }
                }
                startTime();
                document.querySelectorAll('.community_chat_sample').forEach(sampletext => {
                    if (sampletext.id === textmesg.chat_receiver) {
                        sampletext.textContent = 'audio';
                    }
                });
                chataudio.classList.add('chataudio');
                chataudio.addEventListener('play', () => {
                    chataudioplay.style.display = 'none';
                    chataudiopause.style.display = 'block';
                });
                chataudio.addEventListener('pause', () => {
                    chataudioplay.style.display = 'block';
                    chataudiopause.style.display = 'none';
                });
                chataudio.addEventListener('ended', () => {
                    chataudioplay.style.display = 'block';
                    chataudiopause.style.display = 'none';
                });

                chataudio.addEventListener('timeupdate', () => {
                    let currentaudiotime = event.target.currentTime;
                    let currentMin = Math.floor(currentaudiotime / 60);
                    let currentSec = Math.floor(currentaudiotime % 60);
                    //if CurrentMin is < 10 add 0 at the beginning;
                    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

                    //if CurrentSec is < 10 add 0 at the beginning;
                    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
                    chataudiocurrenttime.innerHTML = ` ${currentMin} : ${currentSec}  /  `;
                });
                chataudio.addEventListener('loadeddata', (e) => {
                    let audiodureation = e.target.duration;
                    let totalMin = Math.floor(audiodureation / 60);
                    let totalSec = Math.floor(audiodureation % 60);

                    //if totalmin are less than 10 add 0 at the beginning;
                    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
                    //if totalmin are less than 10 add 0 at the beginning;
                    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
                    chataudiototaltime.innerHTML = `${totalMin} : ${totalSec}`;
                    if (textmesg.voice) {
                        chataudiototaltime.innerHTML = 'voice';
                    }
                });
                column.appendChild(textchatcontainer);
                textchatcontainer.appendChild(chataudiocontainer);
                textchatcontainer.appendChild(chataudiocontainer);
                textchatcontainer.appendChild(chattimeandstatus);
                chattimeandstatus.appendChild(chatstime);
                chattimeandstatus.appendChild(chatsvisiblestatus);
                chataudiocontainer.appendChild(chataudio);
                chataudio.src = textmesg.Property_Src;
                chataudiocontainer.addEventListener('click', () => {
                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                    ActiveUser_Account.forEach(data => {
                        removeOptions();
                        if (textmesg.posterId === data.user_Id) {
                            create_Options_Script();
                        } else {
                            view_Options();
                        }
                    });
                });
                chataudioplay.addEventListener('click', () => {
                    chataudio.play();
                    removeOptions();
                });
                chataudiopause.addEventListener('click', () => {
                    chataudio.pause();
                    removeOptions();
                });
                function view_Options() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let first_Optionimg = document.createElement('img');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.appendChild(first_Optionimg);
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo;
                    first_Optionimg.src = 'newicons/share.png';
                    function create_replyInputs() {
                        first_Option.remove();
                        let mesgBox = document.createElement('div');
                        let mesgTextBox = document.createElement('input');
                        let sendmesg = document.createElement('div');
                        let sendmesgImg = document.createElement('img');
                        options.appendChild(mesgBox);
                        mesgBox.appendChild(mesgTextBox);
                        options.appendChild(sendmesg);
                        sendmesg.appendChild(sendmesgImg);
                        sendmesg.classList.add('headerbtns');
                        mesgBox.classList.add('mesgBox');
                        sendmesgImg.src = 'newicons/send.png';
                        mesgTextBox.placeholder = 'send reply...';
                        function pushChat(user_Id) {
                            const id = '' + new Date().getTime();
                            if (mesgTextBox.value) {
                                Community_myChat_Msg.push({
                                    isText: true,
                                    reply: true,
                                    replyId: textmesg.id,
                                    Property_Src: mesgTextBox.value,
                                    id: id,
                                    posterId: user_Id,
                                    chat_receiver: textmesg.chat_receiver,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent',
                                    views: []
                                });
                                localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                            }
                        }
                        sendmesg.addEventListener('click', () => {
                            ActiveUser_Account.forEach(user => {
                                pushChat(user.user_Id);
                                options.remove();
                                create_Community_Chat_Messages(column, locationId, members_Id);
                            });
                        });
                    }
                    first_Option.addEventListener('click', () => {
                        create_replyInputs();
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                function create_Options_Script() {
                    let options = document.createElement('div');
                    let first_Option = document.createElement('span');
                    let first_Optionimg = document.createElement('img');
                    let exit = document.createElement('span');

                    first_Option.id = textmesg.id;
                    column.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(first_Option);
                    first_Option.appendChild(first_Optionimg);
                    options.classList.add('options');
                    first_Option.classList.add('headerbtns');
                    exit.classList.add('headerbtns');
                    first_Option.classList.add('first_Option');
                    exit.innerHTML = undo;
                    first_Optionimg.src = 'newicons/trash-can.png';
                    first_Option.addEventListener('click', () => {
                        Community_myChat_Msg = Community_myChat_Msg.filter(text => {
                            if (text.id === first_Option.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                        options.remove();
                        create_Community_Chat_Messages(column, locationId, members_Id);
                    });
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                if (LogInFormData) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (user.user_Id === textmesg.posterId) {
                            document.querySelectorAll('.sampleimage').forEach(image => {
                                if (image.id === textmesg.chat_receiver) {
                                    image.src = user.user_ProfilePicture;
                                }
                            });
                            reciepientimage.src = user.user_ProfilePicture;
                            reciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                        }
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            if (textmesg.posterId === data.user_Id) {
                                textchatcontainer.classList.add('mychatcontainer');
                                chataudiocontainer.classList.add('mychataudio');
                                chatstime.classList.add('mychatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('mychattimeandstatus');
                                reciepientblock.style.display = 'none';
                            } else {
                                textchatcontainer.classList.add('friendchatcontainer');
                                chataudiocontainer.classList.add('friendschataudio');
                                chatstime.classList.add('friendschatstime');
                                chatsvisiblestatus.classList.add('friendschatstime');
                                chattimeandstatus.classList.add('friendschattimeandstatus');
                                chatsvisiblestatus.style.display = 'none';
                            }
                        });
                    }
                }
            }
        }
    });
}
function getActive_Community_Page() {
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(data => {
        myCommunities = JSON.parse(localStorage.getItem('myCommunities'));
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (member.community_Id === community.community_Id) {
                    if (member.community_Id + data.user_Id === sessionStorage.getItem('activepage')) {
                        document.querySelector('.profile').style.display = 'none';
                        document.querySelector('.chattab').style.display = 'flex';
                        document.querySelector('.navigatiofloatcontainer').style.display = 'none';
                        create_Community_Chat_Rooms(member.community_Id + data.user_Id, member.community_Id, data.user_Id, community.community_Id, community.community_Image, community.community_Name);
                    }
                }
            });
        });
    });
}