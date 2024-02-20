if (Array.isArray(JSON.parse(localStorage.getItem('myCommunities')))) {
    myCommunities = JSON.parse(localStorage.getItem('myCommunities'));
    create_Community_Chat_Menu();
    create_Community_Chat_Rooms();
    create_Community_Profile();
    get_Active_Page();
    create_Community_Chat_Members();
    create_Community_Chat_Add_Members();
} else {
    myCommunities = [];
}

let Community_myChat_Msg = [];
if (Array.isArray(JSON.parse(localStorage.getItem('Community_myChat_Msg')))) {
    Community_myChat_Msg = JSON.parse(localStorage.getItem('Community_myChat_Msg'));
    create_Community_Chat_Messages();
} else {
    Community_myChat_Msg = [];
}
JSON.parse(localStorage.getItem('Community_myChat_Msg'));
function removeOptions() {
    document.querySelectorAll('.options').forEach(option => {
        option.remove();
    });
}
function create_Community_Chat_Menu() {
    document.querySelectorAll('.userCommunityChatContainer').forEach(session => {
        session.innerHTML = '';
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (member.community_Id === community.community_Id) {
                    if (session.id === member.members_Id) {
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
                        session.appendChild(chatblock);
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
                        if (member.checked === false) {
                            community_chat_sample.classList.add('unchecked_Chat');
                        }
                        chatblock.id = member.community_Id + member.members_Id;
                        chatblock.addEventListener('click', (e) => {
                            document.querySelectorAll('.userchatroom').forEach(chatroom => {
                                if (chatblock.id === chatroom.id) {
                                    chatroom.style.display = 'flex';
                                    sessionStorage.setItem('activepage', chatroom.id);
                                    document.querySelector('.navigatiofloatcontainer').style.display = 'none';
                                }
                            });
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
                            Community_myChat_Msg = JSON.parse(localStorage.getItem('Community_myChat_Msg'));
                            Community_myChat_Msg.forEach(chat => {
                                if (chat.chat_ReceiverId === member.community_Id && chat.posterId !== member.members_Id) {
                                    chat.chatvisibilty = 'seen';
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            });
                        });
                    }
                }
            });
        });
    })
}
function create_Community_Chat_Members() {
    document.querySelectorAll('.community_memberscolumn').forEach(session => {
        session.innerHTML = '';
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (session.id === member.community_Id) {
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
                            membername.textContent = user.user_Firstname + ' ' + user.user_Surname;

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
                        view_Profile(member.members_Id);
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
    });
}
function create_Community_Profile() {
    document.querySelectorAll('.communityprofilecolumn').forEach(session => {
        session.innerHTML = '';
        myCommunities.forEach(community => {
            if (session.id === community.community_Id) {
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
                let editimg = document.createElement('img');
                let addimg = document.createElement('img');
                let viewimg = document.createElement('img');
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
                editprofile.appendChild(editimg);
                addmembers.appendChild(addimg);
                viewmembers.appendChild(viewimg);
                captionholder.appendChild(new_Name);
                com_container.appendChild(commprofileimage);

                editimg.src = 'icons/send.png';
                addimg.src = 'icons/add-user.png';
                viewimg.src = 'icons/tow-people_solid.png';
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
                    document.querySelectorAll('.membersContainer').forEach(popup => {
                        if (popup.id === community.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'flex';
                        }
                    });
                });
                viewmembers.addEventListener('click', () => {
                    document.querySelectorAll('.membersAddContainer').forEach(popup => {
                        if (popup.id === community.id) {
                            popup.style.display = 'flex';
                        } else {
                            popup.style.display = 'flex';
                        }
                    });
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
    });
}
function create_Community_Chat_Add_Members() {
    document.querySelectorAll('.memberscolumn').forEach(session => {
        session.innerHTML = '';
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (session.id === member.community_Id) {
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
                                        // let mems = community.community_Members;
                                        // connections.forEach(connect => {
                                        //     mems.forEach(mem => {
                                        //         if (mem.members_Id === member.members_Id && connect.connectionId === mem.members_Id) {
                                        //             memberblock.remove();
                                        //         }
                                        //     });
                                        // });
                                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                        LogInFormData.forEach(user => {
                                            if (user.user_Id === connection.connectionId) {
                                                memberimage.src = user.user_ProfilePicture;
                                                membername.textContent = user.user_Firstname + ' ' + user.user_Surname;

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
    });
}
function create_Community_Chat_Rooms() {
    document.querySelectorAll('.userCommunityChatContainer').forEach(session => {
        myCommunities.forEach(community => {
            let members = community.community_Members;
            members.forEach(member => {
                if (member.community_Id === community.community_Id) {
                    if (session.id === member.members_Id) {
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
                        let sendImg = document.createElement('img');
                        let chatattachmentimg = document.createElement('img');
                        //chat float
                        let chatfloat = document.createElement('nav');
                        let chatuploadicon = document.createElement('div');
                        let chatuploadiconimg = document.createElement('img');
                        let chatoptionicon = document.createElement('div');
                        let chatoptioniconimg = document.createElement('img');
                        let chatcallicon = document.createElement('div');
                        let chatcalliconimg = document.createElement('img');
                        let voicerecordicon = document.createElement('div');
                        let voicerecordiconimg = document.createElement('img');

                        //chatoptions
                        let chatoptionpopup = document.createElement('div');
                        let optionviewprofile = document.createElement('span');
                        let optionviewmembers = document.createElement('span');
                        let optionaddmembers = document.createElement('span');
                        if (member.members_Id === community.creator_Id) {
                            let optionaddmembers = document.createElement('span');
                            chatoptionpopup.appendChild(optionaddmembers);
                            optionaddmembers.textContent = 'delete';
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
                                confirmation_popup.id = community.community_Id;
                                confirmationtrue.id = community.community_Id;
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
                                optionaddmembers.addEventListener('click', () => {
                                    confirmation_popup.style.display = 'flex';
                                });
                            }
                            Delete_Community();
                        }
                        function createCommunityProfile() {
                            let memberscontainer = document.createElement('div');
                            let membersheader = document.createElement('header');
                            let membersexit = document.createElement('span');
                            let memberscolumn = document.createElement('div');
                            userchatroom.appendChild(memberscontainer);
                            memberscontainer.appendChild(membersheader);
                            memberscontainer.appendChild(memberscolumn);
                            membersheader.appendChild(membersexit);
                            memberscontainer.classList.add('memberscontainer');
                            memberscontainer.classList.add('community_profile');
                            memberscolumn.classList.add('communityprofilecolumn');
                            membersexit.innerHTML = '&LeftArrow;';
                            optionviewprofile.addEventListener('click', () => {
                                memberscontainer.style.display = 'flex';
                                chatoptionpopup.classList.toggle('chatoptionpopupactive');
                            });
                            memberscontainer.id = member.community_Id;
                            memberscolumn.id = member.community_Id;
                            membersexit.addEventListener('click', () => {
                                memberscontainer.style.display = 'none';
                            });
                        }
                        createCommunityProfile();
                        function createAddmembersPopup() {
                            let memberscontainer = document.createElement('div');
                            let membersheader = document.createElement('header');
                            let title = document.createElement('h1');
                            let membersexit = document.createElement('span');
                            let memberscolumn = document.createElement('div');
                            userchatroom.appendChild(memberscontainer);
                            memberscontainer.appendChild(membersheader);
                            memberscontainer.appendChild(memberscolumn);
                            membersheader.appendChild(membersexit);
                            membersheader.appendChild(title);
                            title.textContent = 'Add Members';
                            memberscontainer.classList.add('memberscontainer');
                            memberscontainer.classList.add('membersAddContainer');

                            memberscolumn.classList.add('memberscolumn');
                            membersexit.innerHTML = '&LeftArrow;';
                            optionaddmembers.addEventListener('click', () => {
                                memberscontainer.style.display = 'flex';
                                chatoptionpopup.classList.toggle('chatoptionpopupactive');
                            });
                            memberscontainer.id = member.community_Id;
                            memberscolumn.id = member.community_Id;
                            membersexit.addEventListener('click', () => {
                                memberscontainer.style.display = 'none';
                            });
                        }
                        createAddmembersPopup();
                        function createmembersPopup() {
                            let memberscontainer = document.createElement('div');
                            let membersheader = document.createElement('header');
                            let title = document.createElement('h1');
                            let membersexit = document.createElement('span');
                            let memberscolumn = document.createElement('div');
                            userchatroom.appendChild(memberscontainer);
                            memberscontainer.appendChild(membersheader);
                            memberscontainer.appendChild(memberscolumn);
                            membersheader.appendChild(membersexit);
                            membersheader.appendChild(title);
                            title.textContent = 'Members';
                            memberscontainer.classList.add('memberscontainer');
                            memberscontainer.classList.add('membersContainer');
                            memberscolumn.classList.add('community_memberscolumn');
                            membersexit.innerHTML = '&LeftArrow;';
                            optionviewmembers.addEventListener('click', () => {
                                memberscontainer.style.display = 'flex';
                                chatoptionpopup.classList.toggle('chatoptionpopupactive');
                            });
                            memberscontainer.id = member.community_Id;
                            memberscolumn.id = member.community_Id;
                            membersexit.addEventListener('click', () => {
                                memberscontainer.style.display = 'none';
                            });
                        }
                        createmembersPopup();
                        function createUploader() {
                            //chat upload popup
                            let chatuploadpopup = document.createElement('nav');
                            let photoexit = document.createElement('span');
                            //photo chat
                            let uploadpreviewcontainer = document.createElement('div');

                            let chatphotocontainer = document.createElement('div');
                            let chatvideocontainer = document.createElement('div');
                            let audiochatcontainer = document.createElement('div');

                            let chatimagepreview = document.createElement('img');
                            let videoschat = document.createElement('video');
                            let audiochat = document.createElement('audio');

                            let newphotolabel = document.createElement('label');
                            let newvideolabel = document.createElement('label');
                            let newaudiolabel = document.createElement('label');
                            //send buttons
                            let sharephotosend = document.createElement('button');
                            let sharevideosend = document.createElement('button');
                            let shareaudiosend = document.createElement('button');
                            //inputs
                            let chatphotoinput = document.createElement('input');
                            let chatvideoinput = document.createElement('input');
                            let chataudioinput = document.createElement('input');

                            let header = document.createElement('header');
                            let popup_Names_Container = document.createElement('div');
                            let Names_title = document.createElement('strong');
                            let subactions = document.createElement('div');

                            let clickAndUploadContainer = document.createElement('div');
                            let firstImg = document.createElement('img');
                            let secondImg = document.createElement('img');
                            let thirdimg = document.createElement('img');
                            let firsttext = document.createElement('span');
                            let secondtext = document.createElement('span');
                            let thirdtext = document.createElement('span');

                            clickAndUploadContainer.classList.add('clickAndUploadContainer');
                            popup_Names_Container.classList.add('popup_Names_Container');
                            subactions.classList.add('subactions');


                            clickAndUploadContainer.appendChild(newphotolabel);
                            clickAndUploadContainer.appendChild(newvideolabel);
                            clickAndUploadContainer.appendChild(newaudiolabel);

                            newphotolabel.appendChild(chatphotoinput);
                            newvideolabel.appendChild(chatvideoinput);
                            newaudiolabel.appendChild(chataudioinput);

                            subactions.appendChild(sharephotosend);
                            subactions.appendChild(sharevideosend);
                            subactions.appendChild(shareaudiosend);

                            header.appendChild(photoexit);
                            header.appendChild(popup_Names_Container);
                            popup_Names_Container.appendChild(Names_title);

                            Names_title.textContent = 'Media Message';

                            newphotolabel.appendChild(firstImg);
                            newvideolabel.appendChild(secondImg);
                            newaudiolabel.appendChild(thirdimg);
                            newphotolabel.appendChild(firsttext);
                            newvideolabel.appendChild(secondtext);
                            newaudiolabel.appendChild(thirdtext);

                            firstImg.src = 'icons/image(0).png';
                            secondImg.src = 'icons/youtube.png';
                            thirdimg.src = 'icons/musical-note.png';

                            firsttext.textContent = 'photo';
                            secondtext.textContent = 'video';
                            thirdtext.textContent = 'audio';


                            document.body.appendChild(chatuploadpopup);
                            chatuploadpopup.appendChild(header);
                            chatuploadpopup.appendChild(uploadpreviewcontainer);
                            chatuploadpopup.appendChild(clickAndUploadContainer);
                            chatuploadpopup.appendChild(subactions);


                            chatphotoinput.id = member.community_Id + session.id + 'Xfr_OxYP';
                            chatvideoinput.id = member.community_Id + session.id + 'Xfr_OxYV';
                            chataudioinput.id = member.community_Id + session.id + 'Xfr_OxYA';

                            newphotolabel.htmlFor = chatphotoinput.id;
                            newvideolabel.htmlFor = chatvideoinput.id;
                            newaudiolabel.htmlFor = chataudioinput.id;
                            chatimagepreview.id = member.community_Id;
                            videoschat.id = member.community_Id;
                            audiochat.id = member.community_Id;
                            chatphotoinput.type = 'file';
                            chatvideoinput.type = 'file';
                            chataudioinput.type = 'file';
                            chatphotoinput.accept = 'image/*';
                            chatvideoinput.accept = 'video/*';
                            chataudioinput.accept = 'audio/*';
                            function getchatPhoto() {
                                let reader = new FileReader();
                                reader.readAsDataURL(chatphotoinput.files[0]);
                                reader.onload = () => {
                                    chatimagepreview.src = reader.result;
                                }
                            }
                            function getchatVideo() {
                                let reader = new FileReader();
                                reader.readAsDataURL(chatvideoinput.files[0]);
                                reader.onload = () => {
                                    videoschat.src = reader.result;
                                }
                            }
                            function getchatAudio() {
                                let reader = new FileReader();
                                reader.readAsDataURL(chataudioinput.files[0]);
                                reader.onload = () => {
                                    audiochat.src = reader.result;
                                }
                            }
                            chatphotoinput.onchange = getchatPhoto;
                            chatvideoinput.onchange = getchatVideo;
                            chataudioinput.onchange = getchatAudio;
                            uploadpreviewcontainer.appendChild(chatphotocontainer);
                            uploadpreviewcontainer.appendChild(chatvideocontainer);
                            uploadpreviewcontainer.appendChild(audiochatcontainer);
                            chatphotocontainer.appendChild(chatimagepreview);
                            chatvideocontainer.appendChild(videoschat);
                            audiochatcontainer.appendChild(audiochat);
                            audiochat.controls = 'control';
                            videoschat.controls = 'control';

                            chatphotocontainer.style.display = 'flex';
                            audiochatcontainer.style.display = 'none';
                            chatvideocontainer.style.display = 'none';
                            newphotolabel.addEventListener('click', () => {
                                //send buttons
                                sharephotosend.style.display = 'block';
                                sharevideosend.style.display = 'none';
                                shareaudiosend.style.display = 'none';
                                //previews
                                chatphotocontainer.style.display = 'flex';
                                audiochatcontainer.style.display = 'none';
                                chatvideocontainer.style.display = 'none';
                            });
                            newvideolabel.addEventListener('click', () => {
                                //send buttons
                                sharephotosend.style.display = 'none';
                                sharevideosend.style.display = 'block';
                                shareaudiosend.style.display = 'none';
                                //previews
                                chatphotocontainer.style.display = 'none';
                                audiochatcontainer.style.display = 'none';
                                chatvideocontainer.style.display = 'flex';
                            });
                            newaudiolabel.addEventListener('click', () => {
                                //send buttons
                                sharephotosend.style.display = 'none';
                                sharevideosend.style.display = 'none';
                                shareaudiosend.style.display = 'block';
                                //previews
                                chatphotocontainer.style.display = 'none';
                                chatvideocontainer.style.display = 'none';
                                audiochatcontainer.style.display = 'flex';
                            });
                            sharephotosend.textContent = 'send photo';
                            sharevideosend.textContent = 'send video';
                            shareaudiosend.textContent = 'send audio';
                            sharevideosend.style.display = 'none';
                            shareaudiosend.style.display = 'none';
                            sharephotosend.classList.add('sharephotosend');
                            sharevideosend.classList.add('sharephotosend');
                            shareaudiosend.classList.add('sharephotosend');
                            newphotolabel.classList.add('newphotolabel');
                            newvideolabel.classList.add('newphotolabel');
                            newaudiolabel.classList.add('newphotolabel');
                            uploadpreviewcontainer.classList.add('uploadpreviewcontainer');
                            chatuploadpopup.classList.add('post_making_upload_popup');
                            chatuploadpopup.classList.add('chatuploadpopup');
                            photoexit.classList.add('photoexit');
                            photoexit.innerHTML = '&LeftArrow;';
                            photoexit.addEventListener('click', () => {
                                chatuploadpopup.style.display = 'none';
                            });
                            chatuploadicon.addEventListener('click', () => {
                                chatuploadpopup.style.display = 'flex';
                            });

                            function create_Voice_Recording_Script() {
                                let my_Audio_Records = [];
                                let voicechat = document.createElement('div');
                                let voicechataudio = document.createElement('audio');
                                let chat_audionreciever = document.createElement('audio');
                                let voicechatsend = document.createElement('div');
                                let voicechatsendimg = document.createElement('img');
                                let audiorecord_Cancel = document.createElement('span');
                                let chat_Audio_Gadget = document.createElement('div');
                                let chatplay = document.createElement('div');
                                let chatRecordplay = document.createElement('img');
                                let chatRecordPause = document.createElement('img');
                                let record_Timer = document.createElement('span');
                                chatplay.appendChild(chatRecordplay);
                                chatplay.appendChild(chatRecordPause);
                                chat_Audio_Gadget.appendChild(chatplay);
                                chat_Audio_Gadget.appendChild(record_Timer);
                                record_Timer.textContent = '00:00';
                                userchatroom.appendChild(voicechat);
                                voicechat.appendChild(audiorecord_Cancel);
                                voicechat.appendChild(chat_Audio_Gadget);
                                voicechat.appendChild(voicechataudio);
                                voicechat.appendChild(chat_audionreciever);
                                voicechat.appendChild(voicechatsend);
                                voicechatsend.appendChild(voicechatsendimg);
                                voicechat.classList.add('voicechat');

                                audiorecord_Cancel.classList.add('headerbtns');
                                chatplay.classList.add('headerbtns');
                                voicechatsend.classList.add('headerbtns');

                                voicechatsendimg.src = 'newicons/send.png';
                                voicechat.style.display = 'none';
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
                                    voicerecordicon.addEventListener('click', () => {
                                        activateaudio();
                                        voicechat.style.display = 'flex';
                                        chatfloat.classList.toggle('chatfloatactive');
                                    });
                                    audiorecord_Cancel.addEventListener('click', () => {
                                        voicechat.style.display = 'none';
                                        voicechataudio.src = '';
                                    });
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
                                                createChatMessages();
                                                hightlightchatblock();
                                                increaseCount();
                                                voicechataudio.src = '';
                                                voicechataudio.pause();
                                            });

                                            function pushVoiceChat() {
                                                const id = '' + new Date().getTime();
                                                if (chat_audionreciever.src) {
                                                    Community_myChat_Msg.push({
                                                        isAudio: true,
                                                        voice: true,
                                                        Property_Src: chat_audionreciever.src,
                                                        id: id,
                                                        posterId: member.members_Id,
                                                        chat_ReceiverId: member.community_Id,
                                                        time: new Date().getTime(),
                                                        date: trackingDate,
                                                        chatvisibilty: 'sent'
                                                    });
                                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                            create_Voice_Recording_Script();
                            function pushChat() {
                                const id = '' + new Date().getTime();
                                if (userchattextbox.value) {
                                    Community_myChat_Msg.push({
                                        isText: true,
                                        Property_Src: userchattextbox.value,
                                        id: id,
                                        posterId: member.members_Id,
                                        chat_ReceiverId: member.community_Id,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            function pushphotoChat() {
                                const id = '' + new Date().getTime();
                                if (chatimagepreview.src) {
                                    Community_myChat_Msg.push({
                                        isPhoto: true,
                                        Property_Src: chatimagepreview.src,
                                        id: id,
                                        posterId: member.members_Id,
                                        chat_ReceiverId: member.community_Id,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            function pushvideoChat() {
                                const id = '' + new Date().getTime();
                                if (videoschat.src) {
                                    Community_myChat_Msg.push({
                                        isVideo: true,
                                        Property_Src: videoschat.src,
                                        id: id,
                                        posterId: member.members_Id,
                                        chat_ReceiverId: member.community_Id,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            function pushaudioChat() {
                                const id = '' + new Date().getTime();
                                if (audiochat.src) {
                                    Community_myChat_Msg.push({
                                        isAudio: true,
                                        Property_Src: audiochat.src,
                                        id: id,
                                        posterId: member.members_Id,
                                        chat_ReceiverId: member.community_Id,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            function hightlightchatblock() {
                                myCommunities.forEach(com => {
                                    let mem = com.community_Members;
                                    if (com.community_Id === member.community_Id) {
                                        mem.forEach(mems => {
                                            if (mems.members_Id === member.members_Id) {
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
                                    create_Community_Chat_Messages();
                                    hightlightchatblock();
                                    userchattextbox.value = '';
                                    increaseCount();
                                }
                            });
                            sharephotosend.addEventListener('click', () => {
                                if (chatimagepreview.src) {
                                    Community_chatroomcolumn.innerHTML = '';
                                    pushphotoChat();
                                    create_Community_Chat_Messages();
                                    hightlightchatblock();
                                    increaseCount();
                                }
                            });
                            sharevideosend.addEventListener('click', () => {
                                if (videoschat.src) {
                                    Community_chatroomcolumn.innerHTML = '';
                                    pushvideoChat();
                                    create_Community_Chat_Messages();
                                    hightlightchatblock();
                                    increaseCount();
                                }
                            });
                            shareaudiosend.addEventListener('click', () => {
                                if (audiochat.src) {
                                    Community_chatroomcolumn.innerHTML = '';
                                    pushaudioChat();
                                    create_Community_Chat_Messages();
                                    hightlightchatblock();
                                    increaseCount();
                                }

                            });
                        }
                        createUploader();

                        chatoptionpopup.appendChild(optionviewprofile);
                        chatoptionpopup.appendChild(optionviewmembers);
                        chatoptionpopup.appendChild(optionaddmembers);
                        optionviewprofile.textContent = 'profile';
                        optionviewmembers.textContent = 'members';
                        optionaddmembers.textContent = 'add members';
                        optionviewmembers.id = member.community_Id;

                        chatoptionpopup.classList.add('chatoptionpopup');
                        chatoptionicon.addEventListener('click', () => {
                            chatoptionpopup.classList.toggle('chatoptionpopupactive');
                        });

                        voicerecordicon.appendChild(voicerecordiconimg);
                        chatoptionicon.appendChild(chatoptioniconimg);
                        chatcallicon.appendChild(chatcalliconimg);
                        voicerecordiconimg.src = 'icons/voice search.png';
                        chatuploadiconimg.src = 'icons/image(0).png';
                        chatattachmentimg.src = 'icons/image(0).png';
                        chatoptioniconimg.src = 'icons/discover.png';
                        chatcalliconimg.src = 'icons/video-camera.png';
                        chatuploadicon.appendChild(chatuploadiconimg);
                        chatfloat.appendChild(voicerecordicon);
                        chatfloat.appendChild(chatuploadicon);
                        chatfloat.appendChild(chatoptionicon);
                        chatfloat.appendChild(chatcallicon);
                        chatcallicon.style.display = 'none';
                        chatattachmentimg.addEventListener('click', () => {
                            chatfloat.classList.toggle('chatfloatactive');
                        });
                        chatcallicon.id = member.community_Id + member.members_Id;
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
                        chatattachmentimg.classList.add('chatattachmentimg');
                        chatuploadiconimg.classList.add('chatuploadiconimg');

                        userschatbox.appendChild(userchattextbox);
                        userschatbox.appendChild(attach);
                        userschatbox.appendChild(userchatsend);
                        attach.appendChild(chatattachmentimg);
                        userchatsend.appendChild(sendImg);

                        attach.classList.add('headerbtns');
                        userchatsend.classList.add('headerbtns');

                        voicerecordicon.classList.add('headerbtns');
                        chatuploadicon.classList.add('headerbtns');
                        chatoptionicon.classList.add('headerbtns');
                        chatcallicon.classList.add('headerbtns');

                        sendImg.src = 'icons/more icons/send.png';

                        userchattextbox.type = 'text';
                        if (profile.user_Mode == 'defaultTheme') {
                            chatattachmentimg.classList.remove('darkmodeicons');
                            chatuploadiconimg.classList.remove('darkmodeicons');
                        } else {
                            chatattachmentimg.classList.add('darkmodeicons');
                            chatuploadiconimg.classList.add('darkmodeicons');
                        }

                        userchattextbox.placeholder = 'send message...';
                        userschatbox.classList.add('userschatbox');
                        document.body.appendChild(userchatroom);
                        userchatroom.appendChild(userchatheader);
                        userchatroom.appendChild(Community_chatroomcolumn);
                        userchatroom.appendChild(userschatbox);
                        userchatroom.appendChild(chatfloat);
                        userchatroom.appendChild(chatoptionpopup);
                        userchatroom.classList.add('userchatroom');
                        Community_chatroomcolumn.classList.add('Community_chatroomcolumn');
                        Community_chatroomcolumn.id = member.community_Id;
                        userchatsend.src = 'icons/send-message.png';
                        //header
                        let friendactivestatus = document.createElement('strong');
                        let usersHeaderflex = document.createElement('div');
                        userchatheader.appendChild(userschatexit);
                        userchatheader.appendChild(userchatprofilepicturecontainer);
                        userchatheader.appendChild(usersHeaderflex);
                        usersHeaderflex.appendChild(userchatreciepientname);
                        usersHeaderflex.appendChild(friendactivestatus);
                        userchatprofilepicturecontainer.appendChild(memberimage);
                        userschatexit.innerHTML = '&LeftArrow;';
                        usersHeaderflex.classList.add('usersHeaderflex');
                        userchatheader.classList.add('userchatheader');
                        userchatprofilepicturecontainer.classList.add('userchatprofilepicturecontainer');

                        userchatroom.id = member.community_Id + member.members_Id;
                        userchatprofilepicturecontainer.id = member.community_Id;
                        userchatreciepientname.id = member.community_Id;
                        memberimage.src = community.community_Image;
                        userchatreciepientname.textContent = community.community_Name;

                        function increaseCount() {
                            if (LogInFormData) {
                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                members.forEach(mem => {
                                    LogInFormData.forEach(user => {
                                        let userschatcount = document.querySelectorAll('.userschatcount');
                                        userschatcount.forEach(count => {
                                            if (mem.community_Id === member.community_Id) {
                                                if (mem.members_Id === count.id && user.user_Id === mem.members_Id && user.user_Id !== member.members_Id) {
                                                    count.style.display = 'block';
                                                    user.user_ChatView = false;
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                }
                                            }
                                        });
                                    });
                                });
                            }
                            let messagecounts = document.querySelectorAll('.chatcount');
                            messagecounts.forEach(count => {
                                if (count.id === community.members_Id) {
                                    count.style.display = 'block';
                                    count.textContent = parseInt(count.textContent) + 1;
                                    member.members_count = count.textContent;
                                    localStorage.setItem('myFriends', JSON.stringify(myFriends));
                                }
                            });
                            document.querySelectorAll('.task_Count').forEach(count => {
                                if (count.id === community.members_Id) {
                                    count.style.display = 'block';
                                    count.textContent = parseInt(count.textContent) + 1;
                                }
                            });
                        }
                        userchatreciepientname.classList.add('userchatreciepientname');
                        userschatexit.addEventListener('click', () => {
                            userchatroom.style.display = 'none';
                            sessionStorage.setItem('activepage', 'chattab_Community');
                            document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
                        });
                    }
                }
            });
        });
    });
}
function create_Community_Chat_Messages() {
    const Community_chatroomcolumn = document.querySelectorAll('.Community_chatroomcolumn');
    Community_chatroomcolumn.forEach(column => {
        column.innerHTML = '';
        Community_myChat_Msg.forEach(textmesg => {
            if (textmesg.chat_ReceiverId === column.id) {
                if (textmesg.isText) {
                    let textchatcontainer = document.createElement('div');
                    let chatmesgaitself = document.createElement('div');
                    let chattext = document.createElement('p');
                    let chatstime = document.createElement('span');

                    let chattimeandstatus = document.createElement('div');
                    let chatsvisiblestatus = document.createElement('span');

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
                                                        chatmesgaitself.classList.add('mychat');
                                                        chatstime.classList.add('mychatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
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

                                    replychatcontainer.id = mesg.chat_ReceiverId;
                                    chatphoto.id = mesg.chat_ReceiverId;
                                    chatphotocontainer.id = mesg.chat_ReceiverId;
                                    chatphoto.src = mesg.Property_Src;
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
                                                        chatphotocontainer.classList.add('mychatphoto');
                                                        chatstime.classList.add('mychatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
                                                        chattimeandstatus.classList.add('mychattimeandstatus');
                                                        reciepientblock.style.display = 'none';
                                                    } else {
                                                        textchatcontainer.classList.add('replyChat');
                                                        replychatcontainer.classList.add('friendchatcontainer');
                                                        chatphotocontainer.classList.add('friendschatphoto');
                                                        chatstime.classList.add('friendschatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
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

                                    replychatcontainer.id = mesg.chat_ReceiverId;
                                    chatphoto.id = mesg.chat_ReceiverId;
                                    chatphotocontainer.id = mesg.chat_ReceiverId;
                                    chatphoto.src = mesg.Property_Src;
                                    chatphotocontainer.addEventListener('click', () => {
                                        removeOptions();
                                    });
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
                                                        chatphotocontainer.classList.add('mychatphoto');
                                                        chatstime.classList.add('mychatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
                                                        chattimeandstatus.classList.add('mychattimeandstatus');
                                                        reciepientblock.style.display = 'none';
                                                    } else {
                                                        textchatcontainer.classList.add('replyChat');
                                                        replychatcontainer.classList.add('friendchatcontainer');
                                                        chatphotocontainer.classList.add('friendschatphoto');
                                                        chatstime.classList.add('friendschatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
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
                                                        chatsvisiblestatus.classList.add('friendschatstime');
                                                        chattimeandstatus.classList.add('mychattimeandstatus');
                                                        reciepientblock.style.display = 'none';
                                                    } else {
                                                        textchatcontainer.classList.add('replyChat');
                                                        replychatcontainer.classList.add('friendchatcontainer');
                                                        chataudiocontainer.classList.add('friendschataudio');
                                                        chatstime.classList.add('friendschatstime');
                                                        chatsvisiblestatus.classList.add('friendschatstime');
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
                        exit.innerHTML = '&times;';
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
                                        chat_ReceiverId: textmesg.chat_ReceiverId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    create_Community_Chat_Messages();
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
                        exit.innerHTML = '&times;';
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
                            create_Community_Chat_Messages();
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }
                    chatsvisiblestatus.id = textmesg.posterId;
                    chatsvisiblestatus.textContent = textmesg.chatvisibilty;

                    textchatcontainer.id = textmesg.chat_ReceiverId;
                    column.appendChild(textchatcontainer);
                    textchatcontainer.appendChild(chatmesgaitself);
                    textchatcontainer.appendChild(chattimeandstatus);
                    chattimeandstatus.appendChild(chatstime);
                    chattimeandstatus.appendChild(chatsvisiblestatus);
                    chatmesgaitself.appendChild(chattext);
                    chattext.textContent = textmesg.Property_Src;

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
                    let community_chat_sample = document.querySelectorAll('.community_chat_sample');
                    community_chat_sample.forEach(sampletext => {
                        if (sampletext.id === textmesg.chat_ReceiverId) {
                            sampletext.textContent = textmesg.Property_Src;
                        } else if (sampletext.id === textmesg.chat_ReceiverId) {
                            sampletext.textContent = textmesg.Property_Src;
                        }
                    });
                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === textmesg.posterId) {
                                document.querySelectorAll('.sampleimage').forEach(image => {
                                    if (image.id === textmesg.chat_ReceiverId) {
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
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        if (textmesg.posterId === user.user_Id) {
                                            textchatcontainer.classList.add('mychatcontainer');
                                            chatmesgaitself.classList.add('mychat');
                                            chatstime.classList.add('mychatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('mychattimeandstatus');
                                            reciepientblock.style.display = 'none';
                                        } else {
                                            textchatcontainer.classList.add('friendchatcontainer');
                                            chatmesgaitself.classList.add('friendschat');
                                            chatstime.classList.add('friendschatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('friendschattimeandstatus');
                                            chatsvisiblestatus.style.display = 'none';
                                        }
                                    }
                                });
                            });
                        }
                    }

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

                    textchatcontainer.id = textmesg.chat_ReceiverId;
                    chatphoto.id = textmesg.chat_ReceiverId;
                    chatphotocontainer.id = textmesg.chat_ReceiverId;
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
                    let community_chat_sample = document.querySelectorAll('.community_chat_sample');
                    community_chat_sample.forEach(sampletext => {
                        if (sampletext.id === textmesg.chat_ReceiverId) {
                            sampletext.textContent = 'photo';
                        } else if (sampletext.id === textmesg.chat_ReceiverId) {
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
                        exit.innerHTML = '&times;';
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
                                        chat_ReceiverId: textmesg.chat_ReceiverId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    create_Community_Chat_Messages();
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
                        exit.innerHTML = '&times;';
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
                            create_Community_Chat_Messages();
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
                                    if (image.id === textmesg.chat_ReceiverId) {
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
                    function viewElement() {
                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');
                        let gridpostimagetoview = document.createElement('img');
                        function Loader() {
                            let gridpostloader = document.createElement('section');
                            let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            itemsviewonlargescale.appendChild(gridpostloader);
                            gridpostloader.appendChild(mainloadersvg);
                            mainloadersvg.appendChild(mainloadercircle);
                            mainloadercircle.setAttribute('cy', '30');
                            mainloadercircle.setAttribute('cx', '30');
                            mainloadercircle.setAttribute('r', '30');
                            gridpostloader.classList.add('gridpostloader');
                            setTimeout(() => {
                                gridpostloader.remove();
                            }, 2000);
                        }
                        Loader();
                        itemsviewclosebutton.innerHTML = '&times;';
                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewonlargescale.style.display = 'flex';
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        largescalewideviewcontainer.appendChild(gridpostimagetoview);
                        gridpostimagetoview.src = textmesg.Property_Src;
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        gridpostimagetoview.classList.add('gridpostimagetoview');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        itemsviewclosebutton.addEventListener('click', () => {
                            itemsviewonlargescale.remove();
                        });
                    }
                    chatphotocontainer.addEventListener('click', () => {
                        viewElement();
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

                    textchatcontainer.id = textmesg.chat_ReceiverId;
                    chatphotocontainer.id = textmesg.chat_ReceiverId;
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
                    let community_chat_sample = document.querySelectorAll('.community_chat_sample');
                    community_chat_sample.forEach(sampletext => {
                        if (sampletext.id === textmesg.chat_ReceiverId) {
                            sampletext.textContent = 'video';
                        } else if (sampletext.id === textmesg.chat_ReceiverId) {
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
                        first_Option.appendChild(first_Optionimg);
                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        first_Option.classList.add('first_Option');
                        exit.innerHTML = '&times;';
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
                                        chat_ReceiverId: textmesg.chat_ReceiverId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    create_Community_Chat_Messages();
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
                        exit.innerHTML = '&times;';
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
                            create_Community_Chat_Messages();
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
                                    if (image.id === textmesg.chat_ReceiverId) {
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
                        view_textmesg();
                        removeOptions();
                    });
                    function view_textmesg() {
                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');
                        let gridpostimagecontainer = document.createElement('div');
                        let gridpostimagetoview = document.createElement('video');
                        let gridpostcover = document.createElement('div');
                        let gridposttitlecover = document.createElement('div');
                        let gridpostcaption = document.createElement('p');
                        let gridpostplaybtn = document.createElement('span');
                        let gridpostpausebtn = document.createElement('span');
                        let gridpostplayImg = document.createElement('img');
                        let gridpostpauseImg = document.createElement('img');
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                        gridpostimagecontainer.appendChild(gridpostimagetoview);
                        gridpostimagecontainer.appendChild(gridpostcover);
                        gridpostimagecontainer.appendChild(gridposttitlecover);
                        gridposttitlecover.appendChild(gridpostcaption);
                        gridpostcover.appendChild(gridpostplaybtn);
                        gridpostcover.appendChild(gridpostpausebtn);
                        gridpostplaybtn.appendChild(gridpostplayImg);
                        gridpostpausebtn.appendChild(gridpostpauseImg);
                        gridpostpausebtn.style.display = 'none';
                        gridpostplaybtn.addEventListener('click', () => {
                            gridpostimagetoview.play();
                        });
                        gridpostpausebtn.addEventListener('click', () => {
                            gridpostimagetoview.pause();
                        });
                        gridpostimagetoview.addEventListener('play', () => {
                            gridpostpausebtn.style.display = 'flex';
                            gridpostplaybtn.style.display = 'none';
                        });
                        gridpostimagetoview.addEventListener('pause', () => {
                            gridpostpausebtn.style.display = 'none';
                            gridpostplaybtn.style.display = 'flex';
                        });
                        gridpostimagetoview.addEventListener('ended', () => {
                            gridpostpausebtn.style.display = 'none';
                            gridpostplaybtn.style.display = 'flex';
                        });
                        gridpostpausebtn.classList.add('gridpostplaybtn');
                        gridpostplaybtn.classList.add('gridpostplaybtn');
                        gridpostplayImg.src = 'icons/play-button.png';
                        gridpostpauseImg.src = 'icons/pause.png';
                        gridpostimagetoview.src = textmesg.Property_Src;
                        gridpostcaption.textContent = textmesg.caption;
                        gridpostcover.classList.add('gridpostcover');
                        gridposttitlecover.classList.add('gridposttitlecover');
                        gridpostcaption.classList.add('gridpostcaption');
                        gridpostimagetoview.classList.add('gridpostimagetoview');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        gridpostimagecontainer.style.display = 'flex';
                        itemsviewonlargescale.style.display = 'flex';
                        itemsviewclosebutton.innerHTML = '&times;';
                        largescalewideviewcontainer.id = textmesg.id;
                        itemsviewonlargescale.id = textmesg.id;
                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewclosebutton.addEventListener('click', () => {
                            itemsviewonlargescale.remove();
                        });
                    }
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
                    textchatcontainer.id = textmesg.chat_ReceiverId;
                    chataudiocontainer.id = textmesg.chat_ReceiverId;
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
                    let community_chat_sample = document.querySelectorAll('.community_chat_sample');
                    community_chat_sample.forEach(sampletext => {
                        if (sampletext.id === textmesg.chat_ReceiverId) {
                            sampletext.textContent = 'audio';
                        } else if (sampletext.id === textmesg.chat_ReceiverId) {
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
                        exit.innerHTML = '&times;';
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
                                        chat_ReceiverId: textmesg.chat_ReceiverId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('Community_myChat_Msg', JSON.stringify(Community_myChat_Msg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    create_Community_Chat_Messages();
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
                        exit.innerHTML = '&times;';
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
                            create_Community_Chat_Messages();
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
                                    if (image.id === textmesg.chat_ReceiverId) {
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
    });
}
