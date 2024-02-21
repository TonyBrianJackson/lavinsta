const savedpage = document.querySelector('.savedpage');
const createReel = document.querySelector('.createReel');

// large screen post uploading
const Photopostbtn3 = document.getElementById('photopostbtn');
const videopostbtn3 = document.getElementById('videopostbtn');
const shortpostbtn3 = document.getElementById('shortpostbtn');
const postBtn = document.getElementById('postbtn');

//video player videos uploading script

const addReel = document.getElementById('addreel');
const videoPostBtn = document.getElementById('addvideo');

//advert,photos and crime
const postadvert = document.querySelector('.postadvert');
const postcrime = document.querySelector('.postcrime');
const postworldwidephoto = document.querySelector('.postworldwidephoto');

//theme settinngs
const coverpictureuploadbtn = document.querySelector('.coverpictureuploadbtn');
const profilepictureuploadbtn = document.querySelector('.profilepictureuploadbtn');

const publicphotoupload = document.querySelector('.publicphotoupload');
const publicvideoupload = document.querySelector('.publicvideoupload');
const publictextupload = document.querySelector('.publictextupload');

const UploadStory = document.querySelector('#photostoryuploader');
const VideoUploadStory = document.querySelector('#videostoryuploader');

const create_Community_Button = document.querySelector('.create_Community_Button');

const submitbio = document.querySelector('.submitbio');
const savechanges = document.querySelector('.savechanges');
const submitdateofbirth = document.querySelector('.submitdateofbirth');
const submitnationality = document.querySelector('.submitnationality');
const submitgender = document.querySelector('.submitgender');
const Activate = document.querySelectorAll('.Activate');

const taskbar_Switch = document.querySelector('.taskbar_Switch');

const securityreset = document.querySelector('.securityreset');

const caption = document.getElementById('title');
const Sidebarcontent = document.querySelector('.sidebarcontents');

const peopleculomn = document.querySelector('.peopleculomn');
const peoplerequestculomn = document.querySelector('.peoplerequestculomn');
const peoplelistculomn = document.querySelector('.peoplelistculomn');
const generalnotificationculomn = document.querySelector('.generalnotificationculomn');


function itemsDisplaySettings() {
    document.getElementById('photol').addEventListener('click', () => {
        let smallphoto1 = document.querySelector('.smallphoto1');
        let smallvideo2 = document.querySelector('.smallvideo2');
        let shortvideo3 = document.querySelector('.shortvideo3');
        let textarea = document.querySelector('.textarea');

        textarea.style.display = 'none';
        smallphoto1.style.display = 'flex';
        smallvideo2.style.display = 'none';
        shortvideo3.style.display = 'none';
        videopostbtn3.style.display = 'none';
        shortpostbtn3.style.display = 'none';
        postBtn.style.display = 'none';
        Photopostbtn3.style.display = 'block';
    });
    document.getElementById('videol').addEventListener('click', () => {
        let smallphoto1 = document.querySelector('.smallphoto1');
        let smallvideo2 = document.querySelector('.smallvideo2');
        let shortvideo3 = document.querySelector('.shortvideo3');
        let textarea = document.querySelector('.textarea');

        textarea.style.display = 'none';
        smallphoto1.style.display = 'none';
        smallvideo2.style.display = 'flex';
        shortvideo3.style.display = 'none';
        videopostbtn3.style.display = 'block';
        shortpostbtn3.style.display = 'none';
        postBtn.style.display = 'none';
        Photopostbtn3.style.display = 'none';
    });
    document.getElementById('shortl').addEventListener('click', () => {
        let smallphoto1 = document.querySelector('.smallphoto1');
        let smallvideo2 = document.querySelector('.smallvideo2');
        let shortvideo3 = document.querySelector('.shortvideo3');
        let textarea = document.querySelector('.textarea');

        textarea.style.display = 'none';
        smallphoto1.style.display = 'none';
        smallvideo2.style.display = 'none';
        shortvideo3.style.display = 'flex';
        videopostbtn3.style.display = 'none';
        shortpostbtn3.style.display = 'block';
        postBtn.style.display = 'none';
        Photopostbtn3.style.display = 'none';
    });
    document.getElementById('textl').addEventListener('click', () => {
        let smallphoto1 = document.querySelector('.smallphoto1');
        let smallvideo2 = document.querySelector('.smallvideo2');
        let shortvideo3 = document.querySelector('.shortvideo3');
        let textarea = document.querySelector('.textarea');
        textarea.style.display = 'flex';
        smallphoto1.style.display = 'none';
        smallvideo2.style.display = 'none';
        shortvideo3.style.display = 'none';
        videopostbtn3.style.display = 'none';
        shortpostbtn3.style.display = 'none';
        postBtn.style.display = 'block';
        Photopostbtn3.style.display = 'none';
        document.querySelector('#maintextPoster').focus();
    });
}
itemsDisplaySettings();
function ResavedData() {
    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
}
if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    active_user_render();
} else {
    LogInFormData = [];
}

function active_user_render() {
    LogInFormData.forEach(user => {
        ActiveUser_Account.forEach(data => {
            if (user.user_Id === data.user_Id) {
                document.getElementById('firtnamechanged').value = user.user_Firstname;
                document.getElementById('surnamechanges').value = user.user_Surname;
                document.getElementById('accountemail').value = user.user_Email;
                document.getElementById('accountphonenumber').value = user.user_Phone;

                function Create_Additional_HtmlTags() {
                    document.querySelector('.secondreelcontainer').innerHTML = `<div class="reelscontainer" id="${user.user_Id}"></div>`;
                    document.querySelector('.greatpublixpostcontainer').innerHTML = `<div class="publicpostcontainer" id="${user.user_Id}"></div>`;
                    document.querySelector('.greatpostcontainer').innerHTML = `<div class="usersfeedcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.publicreelside').innerHTML += `<div class="Public_video_Reel_Column" id="${user.user_Id}"></div>`;
                    document.querySelector('.advertStatusbarcontainer').innerHTML = `<div class="advertStatusbar" id="${user.user_Id}"></div>`;
                    document.querySelector('.reelsideoutercontainer').innerHTML += `<div class="rightsidefeedsothersection" id="${user.user_Id}"></div>`;

                    document.querySelector('.photogalleryculomn').innerHTML = `<div class="lavinstaphoto_Img_Container" id="${user.user_Id}"></div>`;
                    document.querySelector('.photogalleryculomn1').innerHTML = `<div class="lavistaadvert_Img_Container" id="${user.user_Id}"></div>`;
                    document.querySelector('.photogalleryculomn2').innerHTML = `<div class="lavinstacrime_Img_Container" id="${user.user_Id}"></div>`;

                    document.querySelector('.topkeepsuggession.homesearchList').innerHTML = `<div class="both_Search_Popup homesearch_List" id="${user.user_Id}"></div>`;
                    document.querySelector('.topkeepsuggession.videosearchList').innerHTML = `<div class="both_Search_Popup videosearch_List" id="${user.user_Id}"></div>`;
                    document.querySelector('.generalnotificationculomn').innerHTML = `<div class="usersnotificationcoulmn" id="${user.user_Id}"></div>`;
                    document.querySelector('.msgculomn').innerHTML = `<div class="userschatcontainer" id="${user.user_Id}"></div>`;
                    document.querySelector('.groupmsgculomn').innerHTML = `<div class="userCommunityChatContainer" id="${user.user_Id}"></div>`;
                    document.querySelector('.footer_task_bar').innerHTML = `<nav class="chattaskbar" id="${user.user_Id}"></nav>`;
                    document.querySelector('.peoplerequestculomn').innerHTML = `<div class="usersfriendrequestcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.sentrequestculomn').innerHTML = `<div class="usersentrequestcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.peoplelistculomn').innerHTML = `<div class="usersfriendlistcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.peopleculomn').innerHTML = `<div class="userpeoplecolumn" id="${user.user_Id}"></div>`;

                    document.querySelector('.calllistcolumn').innerHTML = `<div class="userscallslistcolumn" id="${user.user_Id}"></div>`;

                    document.querySelector('.storiesarchivecolumn').innerHTML += `<div class="userstoryarchievecolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.deletedpostsssculomn').innerHTML += `<div class="userstrashcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.deletedstoriessssculomn').innerHTML += `<div class="userstorytrashcolumn" id="${user.user_Id}"></div>`;
                    document.querySelector('.savedpage').innerHTML += `<div class="savedculomn" id="${user.user_Id}"></div>`;

                    //video player
                    document.querySelector('.trending_Videos').innerHTML = `<div class="TrendingVideos_Column" id="${user.user_Id}"></div>`;
                    document.querySelector('.live_Videos').innerHTML = `<div class="LiveVideos_Column" id="${user.user_Id}"></div>`;
                    document.querySelector('.timeline_Videos').innerHTML = `<div class="TimeLineVideos_Column" id="${user.user_Id}"></div>`;
                    document.querySelector('.saved_Videos').innerHTML = `<div class="SavedVideos_Column" id="${user.user_Id}"></div>`;
                    document.querySelector('#reelsgridculomn').innerHTML = `<div class="ReelsVideos_Column" id="${user.user_Id}"></div>`;
                }
                Create_Additional_HtmlTags();

                function createEditinFunctions() {
                    //eiditin the users bio
                    let userbioinfor = document.querySelectorAll('.userbioinfor');
                    let bioblock = document.querySelectorAll('.bioblock');
                    submitbio.addEventListener('click', () => {
                        if (document.getElementById('biotextarea').value) {
                            bioblock.forEach(block => {
                                if (block.id === user.user_Id) {
                                    block.style.display = 'grid';
                                } else {
                                    block.style.display = 'none';
                                }
                            });
                            userbioinfor.forEach(bioinfo => {
                                if (bioinfo.id === user.user_Id) {
                                    bioinfo.textContent = document.getElementById('biotextarea').value;
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === data.user_Id) {
                                            user.user_Bio = document.getElementById('biotextarea').value;
                                            ResavedData();
                                        }
                                    });
                                }
                            });
                        }
                    });
                    //editing the users account data
                    savechanges.addEventListener('click', () => {
                        if (document.getElementById('accountpassword').value === user.user_Confirmpassword) {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    user.user_Firstname = document.getElementById('firtnamechanged').value;
                                    user.user_Surname = document.getElementById('surnamechanges').value;
                                    user.user_Email = document.getElementById('accountemail').value;
                                    user.user_Phone = document.getElementById('accountphonenumber').value;
                                    ResavedData();
                                }
                            });
                            location.reload();
                        } else {
                            alert('wrong password');
                        }
                    });

                    submitnationality.addEventListener('click', () => {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                user.user_Location = document.querySelector('#placetextarea').value.toLowerCase();
                                ResavedData();
                            }
                        });
                    });
                    submitdateofbirth.addEventListener('click', () => {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                user.user_Dateofbirth = document.querySelector('.Edit_DateOfBirtConsole_Day').textContent + ' ' + document.querySelector('.Edit_DateOfBirtConsole_Month').textContent + ' ' + document.querySelector('.Edit_DateOfBirtConsole_Year').textContent;
                                ResavedData();
                            }
                        });
                    });
                    Activate.forEach(activate => {
                        let gendername = document.querySelector('.gendername');
                        activate.addEventListener('click', () => {
                            if (activate.id != 'male') {
                                gendername.textContent = 'female';
                                document.querySelector('#male').classList.remove('active');
                            } else {
                                gendername.textContent = 'male';
                                document.querySelector('#male').classList.add('active');
                            } if (activate.id != 'female') {
                                gendername.textContent = 'male';
                                document.querySelector('#female').classList.remove('active');
                            } else {
                                gendername.textContent = 'female';
                                document.querySelector('#female').classList.add('active');
                            }
                        })
                    });
                    submitgender.addEventListener('click', () => {
                        if (document.querySelector('.gendername').textContent != 'Gender') {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    user.user_Gender = document.querySelector('.gendername').textContent;
                                    ResavedData();
                                }
                            });
                        }
                    });
                    securityreset.addEventListener('click', () => {
                        const Old_Create_Password_Input = document.querySelector('#Old_Create_Password_Input');
                        const Old_Confirm_Password_Input = document.querySelector('#Old_Confirm_Password_Input');
                        const New_Create_Password_Input = document.querySelector('#New_Create_Password_Input');
                        const New_Confirm_Password_Input = document.querySelector('#New_Confirm_Password_Input');
                        if (Old_Create_Password_Input.value === user.user_Createpaswword && Old_Confirm_Password_Input.value === user.user_Confirmpassword) {
                            if (New_Create_Password_Input.value.length > 8 && New_Confirm_Password_Input.value.length > 8) {
                                if (New_Create_Password_Input.value === New_Confirm_Password_Input.value) {
                                    if (New_Confirm_Password_Input.value === user.user_Createpaswword) {
                                        alert("can't use old password!");
                                    } else {
                                        LogInFormData.forEach(user => {
                                            if (user.user_Id === data.user_Id) {
                                                user.user_Createpaswword = New_Create_Password_Input.value;
                                                user.user_Confirmpassword = New_Confirm_Password_Input.value;
                                                ResavedData();
                                            }
                                        });
                                        securityreset.id = user.user_Id;
                                        alert(New_Confirm_Password_Input.value);
                                        function pushLogsArray() {
                                            myLogsArray.push({
                                                accountId: user.user_Id,
                                            });
                                            localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                                        }
                                        function filterLogs() {
                                            myLogsArray = myLogsArray.filter(log => {
                                                if (log.accountId === securityreset.id) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            });
                                            localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                                            pushLogsArray();
                                        }
                                        if (Array.isArray(mySavedLogs)) {
                                            myLogsArray = mySavedLogs;
                                            filterLogs();
                                        } else {
                                            myLogsArray = [];
                                            filterLogs();
                                        }
                                        setTimeout(() => {
                                            location.reload();
                                            sessionStorage.setItem('activepage', 'home');
                                        }, 3000);
                                    }
                                } else if (New_Create_Password_Input.value !== New_Confirm_Password_Input.value) {
                                    alert("passwords doesn't match!");
                                }
                            } else {
                                alert("weak password!");
                            }
                        } else {
                            alert("follow instructions!");
                        }
                    });
                    taskbar_Switch.addEventListener('click', () => {
                        if (user.user_TaskBar_Mode === true) {
                            taskbar_Switch.innerHTML = '&times;';
                            document.querySelector('.footer_task_bar').style.display = 'none';
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    user.user_TaskBar_Mode = false;
                                    ResavedData();
                                }
                            });
                        } else {
                            taskbar_Switch.innerHTML = '&check;';
                            document.querySelector('.footer_task_bar').style.display = 'flex';
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    user.user_TaskBar_Mode = true;
                                    ResavedData();
                                }
                            });
                        }
                    });
                }

                function CheckOnAllOtherThings() {
                    if (user.user_TaskBar_Mode === true) {
                        taskbar_Switch.innerHTML = '&check;';
                        document.querySelector('.footer_task_bar').style.display = 'flex';
                    } else {
                        taskbar_Switch.innerHTML = '&times;';
                        document.querySelector('.footer_task_bar').style.display = 'none';
                    }
                }
                CheckOnAllOtherThings();
                createEditinFunctions();

                function removecount() {
                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        let userscount = document.querySelectorAll('.userspeoplecount');
                        LogInFormData.forEach(user => {
                            userscount.forEach(count => {
                                if (user.user_Id === data.user_Id && count.id === user.user_Id) {
                                    count.style.display = 'none';
                                    count.textContent = 0;
                                    user.my_PeopleCount = count.textContent;
                                    ResavedData();
                                }
                            });
                        });
                    }
                }
                document.querySelector('#people').addEventListener('click', () => {
                    removecount();
                });

                function shareNotification(id, isStory, caption) {
                    LogInFormData.forEach(user_data => {
                        let connections = user_data.user_Connection;
                        connections.forEach(connection => {
                            if (connection.connectionId === user.user_Id) {
                                let Notifications = user_data.user_Notifications;
                                Notifications.push({
                                    isStory: isStory,
                                    type: 'postNotification',
                                    notificationId: user.user_Id,
                                    id: id,
                                    caption: caption,
                                    trackingId: user_data.user_Id,
                                    posterId: user.user_Id,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    notification_isChecked: false,
                                    notification_View: false,
                                });
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    });
                }
                function Increase_FeedCount() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    if (LogInFormData) {
                        LogInFormData.forEach(user_data => {
                            document.querySelectorAll('.feedcount').forEach(count => {
                                if (user_data.user_Id !== user.user_Id && count.id === user_data.user_Id) {
                                    if (count.textContent !== `${9}+`) {
                                        count.textContent = parseInt(count.textContent) + 1;
                                        user_data.my_FeedsCount = count.textContent;
                                        ResavedData();
                                    }
                                }
                            });
                        });
                    }
                }
                function Increase_PhotoCount() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    if (LogInFormData) {
                        LogInFormData.forEach(user_data => {
                            document.querySelectorAll('.photocount').forEach(count => {
                                if (user_data.user_Id !== user.user_Id && count.id === user_data.user_Id) {
                                    if (count.textContent !== `${9}+`) {
                                        count.textContent = parseInt(count.textContent) + 1;
                                        user_data.my_PhotoCount = count.textContent;
                                        ResavedData();
                                    }
                                }
                            });
                        });
                    }
                }
                function Increase_ShortCount() {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    if (LogInFormData) {
                        LogInFormData.forEach(user_data => {
                            document.querySelectorAll('.shortcount').forEach(count => {
                                if (user_data.user_Id !== user.user_Id && count.id === user_data.user_Id) {
                                    if (count.textContent !== `${9}+`) {
                                        count.textContent = parseInt(count.textContent) + 1;
                                        user_data.my_ShortCount = count.textContent;
                                        ResavedData();
                                    }
                                }
                            });
                        });
                    }
                }
                function uploadFunctions() {
                    function pushPhotoFeed() {
                        const id = '' + new Date().getTime();
                        if (document.querySelector('.publicimagepreview').src) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isPhoto: true,
                                title: document.querySelector('.publictitleinput').value,
                                Property_Src: document.querySelector('.publicimagepreview').src,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'public photo',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                                filter: 'default',
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base))
                            shareNotification(id, false, 'added a photo in feeds');
                            Increase_FeedCount();
                        }
                    }
                    function pushVideoFeed() {
                        const id = '' + new Date().getTime();
                        if (document.querySelector('.publicvideopreview').src) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isVideo: true,
                                title: document.querySelector('.publictitleinput').value,
                                Property_Src: document.querySelector('.publicvideopreview').src,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                views: [],
                                sharecount: 0,
                                attribute: 'public video',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                                filter: 'default',
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'posted a video in feeds');
                            Increase_FeedCount();
                        }
                    }
                    function pushTextFeed() {
                        const id = '' + new Date().getTime();
                        if (document.querySelector('.publictextpreview').value) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isText: true,
                                title: document.querySelector('.publictitleinput').value,
                                Property_Src: document.querySelector('.publictextpreview').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'public text',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                                filter: 'default',
                                themeMode: document.querySelector('.public_Mode_Theme_Title').textContent,
                                fontMode: document.querySelector('.public_Mode_Font_Title').textContent,
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base))
                            shareNotification(id, false, 'made a TextPost in feeds');
                            Increase_FeedCount();
                        }
                    }
                    //post functions 
                    publicphotoupload.addEventListener('click', () => {
                        pushPhotoFeed();
                        document.querySelector('.publictitleinput').value = '';
                        Creation_Mark_Photo(document.querySelector('.publicimagepreview').src, 'creating post...');
                    });
                    publicvideoupload.addEventListener('click', () => {
                        pushVideoFeed();
                        document.querySelector('.publictitleinput').value = '';
                        Creation_Mark_Video(document.querySelector('.publicvideopreview').src, 'creating post...');
                    });
                    publictextupload.addEventListener('click', () => {
                        pushTextFeed();
                        Creation_Mark_Text(document.querySelector('.publictextpreview').value, 'creating post...');
                        document.querySelector('.publictitleinput').value = '';
                        document.querySelector('.publictextpreview').value = '';
                    });
                    function push() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('profilepictureuploading').src) {
                            Feeds_Data_Base.push({
                                type: 'timeline',
                                isProfile_Photo: true,
                                title: document.querySelector('.profilepicturecaption').value,
                                Property_Src: document.getElementById('profilepictureuploading').src,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'profile photo',
                                filter: document.querySelector('.profilefiltertitle').textContent,
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'uploaded a new profile photo');
                        }
                    }

                    profilepictureuploadbtn.addEventListener('click', () => {
                        push();
                        document.querySelector('.profilepicturecaption').value = '';
                        Creation_Mark_Photo(document.getElementById('profilepictureuploading').src, 'updating profile photo...');
                        let userprofilepicture = document.querySelectorAll('.userprofilepicture');
                        let usersmallimg = document.querySelectorAll('.usersmallimg');
                        usersmallimg.forEach(profilePicture => {
                            if (profilePicture.id === user.userId) {
                                profilePicture.src = document.getElementById('profilepictureuploading').src;
                            }
                        });
                        userprofilepicture.forEach(profilePicture => {
                            if (profilePicture.id === user.user_Id) {
                                profilePicture.src = document.getElementById('profilepictureuploading').src;
                                ResavedData();
                            }
                        });
                        LogInFormData.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                user.user_ProfilePicture_Filter = document.querySelector('.profilefiltertitle').textContent;
                                user.user_ProfilePicture = document.getElementById('profilepictureuploading').src;
                                ResavedData();
                            }
                        });
                        setTimeout(() => {
                            createPhotoPostOnTimeLine();
                            createGridPost();
                            create_TimeLine_G_Video();
                        }, 3000);
                    });
                    //coverphoto uploading
                    function pushcoverPhoto() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('uploadingdefaultcoverphoto').src) {
                            Feeds_Data_Base.push({
                                type: 'timeline',
                                isCover_Photo: true,
                                title: document.querySelector('.profilepicturecaption').value,
                                Property_Src: document.getElementById('uploadingdefaultcoverphoto').src,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'cover photo',
                                filter: document.querySelector('.coverfiltertitle').textContent,
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'uploaded a new cover photo');
                        }
                    }
                    coverpictureuploadbtn.addEventListener('click', () => {
                        pushcoverPhoto();
                        document.querySelector('.profilepicturecaption').value = '';
                        Creation_Mark_Photo(document.getElementById('uploadingdefaultcoverphoto').src, 'updating cover photo...');
                        let usercoverphoto = document.querySelectorAll('.usercoverphoto');
                        usercoverphoto.forEach(coverPhoto => {
                            if (coverPhoto.id === user.user_Id) {
                                coverPhoto.src = document.getElementById('uploadingdefaultcoverphoto').src;
                            }
                        });
                        LogInFormData.forEach(user => {
                            if (user.user_Id === data.user_Id) {
                                user.user_CoverPhoto = document.getElementById('uploadingdefaultcoverphoto').src;
                                user.user_CoverPhoto_Filter = document.querySelector('.coverfiltertitle').textContent;
                                ResavedData();
                            }
                        });
                    });
                    //photos uploading script
                    function push_photo_feed_DB() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('photophoto').src) {
                            Feeds_Data_Base.push({
                                type: 'timeline',
                                isPhoto: true,
                                Property_Src: document.getElementById('photophoto').src,
                                title: document.getElementById('title').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'timeline photo',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                                filter: 'default',
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'added a photo to timeline');
                        }
                    };
                    function addPhoto() {
                        push_photo_feed_DB();
                        Creation_Mark_Photo(document.getElementById('photophoto').src, 'creating post...');
                        document.getElementById('title').value = '';
                        Sidebarcontent.style.display = 'none';
                    };
                    Photopostbtn3.addEventListener('click', () => {
                        if (document.getElementById('photophoto').src) {
                            addPhoto();
                        }
                    });
                    //uploading timeline videos
                    function pushTimelineVideo() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('videovideo').src) {
                            Feeds_Data_Base.push({
                                type: 'timeline',
                                isVideo: true,
                                Property_Src: document.getElementById('videovideo').src,
                                title: document.getElementById('title').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                views: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'timeline video',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            })
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base))
                            shareNotification(id, false, 'added a public video in feeds');
                        }
                    };
                    function pushFeeds_Data_Base() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('videovid').src) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isVideo: true,
                                Property_Src: document.getElementById('videovid').src,
                                title: document.getElementById('videotitle').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                views: [],
                                sharecount: 0,
                                attribute: 'public video',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'added a public video in feeds');
                            Increase_FeedCount();
                        }
                    }
                    function PostVideo() {
                        pushTimelineVideo();
                        document.getElementById('title').value = '';
                        Sidebarcontent.style.display = 'none';
                        Creation_Mark_Video(document.querySelector('#videovideo').src, 'creating post...');
                    };
                    function postGridVideo() {
                        pushFeeds_Data_Base();
                        Creation_Mark_Video(document.querySelector('#videovid').src, 'publishing video...');
                    }

                    videoPostBtn.addEventListener('click', () => {
                        if (document.getElementById('videovid').src) {
                            postGridVideo();
                        }
                    });
                    videopostbtn3.addEventListener('click', () => {
                        if (document.getElementById('videovideo').src) {
                            PostVideo();
                        }
                    });
                    //uploading textpost
                    function pushTextPost() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('maintextPoster').value) {
                            Feeds_Data_Base.push({
                                type: 'timeline',
                                isText: true,
                                Property_Src: document.getElementById('maintextPoster').value,
                                title: document.getElementById('title').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                sharecount: 0,
                                attribute: 'timeline text',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                                themeMode: document.querySelector('.sidebar_Mode_Theme_Title').textContent,
                                fontMode: document.querySelector('.sidebar_Mode_Font_Title').textContent,
                            })
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            shareNotification(id, false, 'made a TextPost on timeline');
                        }
                    }

                    function Addpost() {
                        pushTextPost();
                        Creation_Mark_Text(document.getElementById('maintextPoster').value, 'creating post...');
                        document.getElementById('maintextPoster').value = '';
                        document.getElementById('title').value = '';
                        Sidebarcontent.style.display = 'none';
                    }
                    postBtn.addEventListener('click', () => {
                        if (document.getElementById('maintextPoster').value) {
                            Addpost();
                        }
                    });
                    //uploading short videos

                    function pushShortArrayOnLargeScreen() {
                        const id = '' + new Date().getTime();
                        if (document.getElementById('shortvideovideo').src) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isShort: true,
                                Property_Src: document.getElementById('shortvideovideo').src,
                                title: document.getElementById('title').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                views: [],
                                sharecount: 0,
                                attribute: 'public short',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            })
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base))
                            shareNotification(id, false, 'posted a short video');
                            Increase_ShortCount();
                        }
                    }

                    function pushreelspageVideo() {
                        const id = '' + new Date().getTime();
                        if (document.querySelector('#reelpagevideo').src) {
                            Feeds_Data_Base.push({
                                type: 'public',
                                isShort: true,
                                Property_Src: document.querySelector('#reelpagevideo').src,
                                title: document.querySelector('#reelpagetitle').value,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: user.user_Id,
                                id: id,
                                likes: [],
                                comments: [],
                                shares: [],
                                views: [],
                                sharecount: 0,
                                attribute: 'public short',
                                likeactive: true,
                                commentactive: true,
                                shareactive: true,
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base))
                            shareNotification(id, false, 'posted a short video');
                            Increase_ShortCount();
                        }
                    }
                    function pushshortGridArray() {
                        const id = '' + new Date().getTime();
                        Feeds_Data_Base.push({
                            type: 'public',
                            isShort: true,
                            Property_Src: document.getElementById('videovid').src,
                            title: document.getElementById('videotitle').value,
                            date: trackingDate,
                            time: new Date().getTime(),
                            posterId: user.user_Id,
                            id: id,
                            sharecount: 0,
                            likes: [],
                            comments: [],
                            shares: [],
                            views: [],
                            attribute: 'public short',
                            likeactive: true,
                            commentactive: true,
                            shareactive: true,
                        })
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        shareNotification(id, false, 'posted a short video');
                        Increase_ShortCount();
                    }
                    function PostShort() {
                        pushShortArrayOnLargeScreen();
                        Creation_Mark_Video(document.querySelector('#shortvideovideo').src, 'creating post...');
                        document.getElementById('title').value = '';
                        Sidebarcontent.style.display = 'none';
                    }

                    function createReelPageVideo() {
                        pushreelspageVideo();
                        Creation_Mark_Video(document.querySelector('#reelpagevideo').src, 'creating post...');
                        document.querySelector('#reelpagetitle').value = '';
                    }
                    function postreelGrid() {
                        pushshortGridArray();
                        Creation_Mark_Video(document.querySelector('#videovid').src, 'creating post...');
                        document.getElementById('videotitle').value = '';
                    }
                    shortpostbtn3.addEventListener('click', () => {
                        if (document.getElementById('shortvideovideo').src) {
                            PostShort();
                        }
                    });
                    createReel.addEventListener('click', () => {
                        if (document.querySelector('#reelpagevideo').src) {
                            createReelPageVideo();
                        }
                    });
                    addReel.addEventListener('click', () => {
                        if (document.getElementById('videovid').src) {
                            postreelGrid();
                        }
                    });
                    //advert, photos and crime uploading
                    function pushAdvert() {
                        const id = '' + new Date().getTime();
                        Feeds_Data_Base.push({
                            type: 'other',
                            Property_Src: document.querySelector('#srcadvertphoto').src,
                            title: document.querySelector('#worldwidecaptionbox').value,
                            posterId: user.user_Id,
                            id: id,
                            time: new Date().getTime(),
                            date: trackingDate,
                            sharecount: 0,
                            likes: [],
                            comments: [],
                            shares: [],
                            likeactive: true,
                            commentactive: true,
                            shareactive: true,
                            isAdvert: true,
                            attribute: 'advert',
                            filter: 'default',
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        shareNotification(id, false, 'posted an advert');
                        Increase_PhotoCount();
                    }
                    function pushworldwidephoto() {
                        const id = '' + new Date().getTime();
                        Feeds_Data_Base.push({
                            type: 'other',
                            Property_Src: document.getElementById('srcworldwidephoto').src,
                            title: document.getElementById('worldwidecaptionbox').value,
                            posterId: user.user_Id,
                            id: id,
                            time: new Date().getTime(),
                            date: trackingDate,
                            sharecount: 0,
                            likes: [],
                            comments: [],
                            shares: [],
                            likeactive: true,
                            commentactive: true,
                            shareactive: true,
                            isPhoto: true,
                            attribute: 'lavinsta photos',
                            filter: 'default',
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        shareNotification(id, false, 'posted in lavinsta photos');
                        Increase_PhotoCount();
                    };
                    function pushCrime() {
                        const id = '' + new Date().getTime();
                        Feeds_Data_Base.push({
                            type: 'other',
                            Property_Src: document.querySelector('#srccrimephoto').src,
                            title: document.querySelector('#worldwidecaptionbox').value,
                            posterId: user.user_Id,
                            id: id,
                            time: new Date().getTime(),
                            date: trackingDate,
                            sharecount: 0,
                            likes: [],
                            comments: [],
                            shares: [],
                            likeactive: true,
                            commentactive: true,
                            shareactive: true,
                            isCrime: true,
                            attribute: 'crime',
                            filter: 'default',
                        });
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        shareNotification(id, false, 'posted a crime');
                        Increase_PhotoCount();
                    }
                    function postAdvert() {
                        pushAdvert();
                        document.querySelector('#worldwidecaptionbox').value = '';
                        Creation_Mark_Photo(document.getElementById('srcadvertphoto').src, 'publishing advert...');
                    }
                    function postphoto() {
                        pushworldwidephoto();
                        document.getElementById('worldwidecaptionbox').value = '';
                        Creation_Mark_Photo(document.getElementById('srcworldwidephoto').src, 'publishing photo...');
                    }
                    function postCrime() {
                        pushCrime();
                        document.querySelector('#worldwidecaptionbox').value = '';
                        Creation_Mark_Photo(document.getElementById('srccrimephoto').src, 'publishing crime...');
                    }
                    postcrime.addEventListener('click', () => {
                        if (document.querySelector('#srccrimephoto').src) {
                            postCrime();
                            setTimeout(() => {
                                createOtherPost();
                                createPhotosGadget();
                                createAdsGadget();
                                createOtherGridPost();
                            }, 3000);
                        }
                    });
                    postadvert.addEventListener('click', () => {
                        if (document.querySelector('#srcadvertphoto').src) {
                            postAdvert();
                            setTimeout(() => {
                                createOtherPost();
                                createPhotosGadget();
                                createAdsGadget();
                                createOtherGridPost();
                            }, 3000);
                        }
                    });
                    postworldwidephoto.addEventListener('click', () => {
                        if (document.getElementById('srcworldwidephoto').src) {
                            postphoto();
                            setTimeout(() => {
                                createOtherPost();
                                createPhotosGadget();
                                createAdsGadget();
                                createOtherGridPost();
                            }, 3000);
                        }
                    });
                    function uploadstatus() {
                        function pushphotostories() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(userdata => {
                                if (userdata.user_Id === user.user_Id) {
                                    let stories = userdata.user_Stories;
                                    const id = '' + new Date().getTime();
                                    stories.push({
                                        type: 'photo',
                                        Property_Src: document.getElementById('storyphotopreview').src,
                                        title: document.getElementById('storytitlebox').value,
                                        id: id,
                                        posterId: user.user_Id,
                                        time: new Date().getTime(),
                                        views: [],
                                        statusviewers: 0,
                                        filter: 'default',
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    shareNotification(id, true, 'added a photo to story');
                                }
                            });
                        }
                        function pushvideostories() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(userdata => {
                                if (userdata.user_Id === user.user_Id) {
                                    let stories = userdata.user_Stories;
                                    const id = '' + new Date().getTime();
                                    stories.push({
                                        type: 'video',
                                        Property_Src: document.getElementById('storyvideopreview').src,
                                        title: document.getElementById('storytitlebox').value,
                                        id: id,
                                        posterId: user.user_Id,
                                        time: new Date().getTime(),
                                        views: [],
                                        statusviewers: 0,
                                        filter: 'default',
                                    });
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    shareNotification(id, true, 'added a video to story');
                                }
                            });
                        }
                        function increase_StoryCount() {
                            let storycount = document.querySelectorAll('.storycount');
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(users_d => {
                                storycount.forEach(count => {
                                    if (users_d.user_Id === user.user_Id && count.id === users_d.user_Id) {
                                        count.style.display = 'block';
                                        count.textContent = users_d.user_Stories.length;
                                    }
                                });
                            });

                        }
                        function uploadVideoToStory() {
                            pushvideostories();
                            let mystory = document.querySelectorAll('.mystory');
                            mystory.forEach(story => {
                                if (story.id === user.user_Id) {
                                    setTimeout(() => {
                                        story.style.display = 'flex';
                                    }, 2000);
                                }
                            });
                            increase_StoryCount();
                            Creation_Mark_Video_Story(document.querySelector('#storyvideopreview').src, 'publishing status...');
                            document.getElementById('storytitlebox').value = '';
                        };
                        function PostStory() {
                            pushphotostories();
                            let mystory = document.querySelectorAll('.mystory');
                            mystory.forEach(story => {
                                if (story.id === user.user_Id) {
                                    setTimeout(() => {
                                        story.style.display = 'flex';
                                    }, 2000);
                                }
                            });
                            increase_StoryCount();
                            document.getElementById('storytitlebox').value = '';
                            Creation_Mark_Photo_Story(document.getElementById('storyphotopreview').src, 'publishing status...');
                        };
                        VideoUploadStory.addEventListener('click', () => {
                            if (document.querySelector('#storyvideopreview').src) {
                                uploadVideoToStory();
                            }
                        });
                        UploadStory.addEventListener('click', () => {
                            if (document.querySelector('#storyphotopreview').src) {
                                PostStory();
                            }
                        });
                    }
                    uploadstatus();
                }
                uploadFunctions();
                function Lavinsta_Communities() {
                    function pushCommunity() {
                        const id = '' + new Date().getTime();
                        myCommunities.push({
                            creator_Id: user.user_Id,
                            community_Image: document.querySelector('#com_profilesrc').src,
                            community_Name: document.querySelector('.communityname_TextBox').value,
                            date_Created: trackingDate,
                            time: new Date().getTime(),
                            community_Id: id,
                            Community_myChat_Msg: [],
                            community_Members: [{
                                community_Id: id,
                                members_Id: user.user_Id,
                                id: id,
                                count: 0,
                                checked: false,
                                view: false,
                            }]
                        });
                        localStorage.setItem('myCommunities', JSON.stringify(myCommunities));
                    }
                    create_Community_Button.addEventListener('click', () => {
                        if (document.querySelector('.communityname_TextBox').value) {
                            pushCommunity();
                            document.querySelector('.communityname_TextBox').value = '';
                            let updatingmessage = document.createElement('div');
                            let innermessage = document.createElement('span');
                            let updatingImg = document.createElement('img');
                            document.body.appendChild(updatingmessage);
                            updatingmessage.appendChild(updatingImg);
                            updatingmessage.appendChild(innermessage);
                            updatingImg.classList.add('updatingimg');
                            innermessage.textContent = 'creating community...';
                            updatingmessage.classList.add('updatingmessage');
                            updatingImg.src = document.querySelector('#com_profilesrc').src;
                            setTimeout(() => {
                                updatingmessage.textContent = 'reflesh page and view';
                                setTimeout(() => {
                                    updatingmessage.remove();
                                }, 2000);
                                create_Community_Chat_Menu();
                            }, 3000);
                        }
                    });
                }
                Lavinsta_Communities();
                function searchFunctions() {
                    function searchOtherPost() {
                        let adgrid = document.querySelectorAll('.adgrid');
                        const public_Search_Bar = document.querySelector('.gallery_Search_Bar');
                        document.querySelector('.gallery_Search_Bar');
                        adgrid.forEach(feed => {
                            let posttitle = feed.querySelector('.posttitle').textContent.toLowerCase();
                            if (posttitle.indexOf(public_Search_Bar.value.toLowerCase()) != -1) {
                                feed.style.display = 'flex';
                            } else {
                                feed.style.display = 'none';
                            }
                        })
                    }
                    function searchpeople() {
                        const peoplepagesearchpeople = document.querySelector('#peoplepagesearchpeople');
                        let people = document.querySelectorAll('.person');
                        people.forEach(person => {
                            let personsname = person.querySelector('.personsname').textContent.toLowerCase();
                            if (personsname.indexOf(peoplepagesearchpeople.value.toLowerCase()) != -1) {
                                if (person.id === user.user_Id) {
                                    person.style.display = 'none';
                                } else {
                                    person.style.display = 'flex';
                                }
                            } else {
                                person.style.display = 'none';
                            }
                        })
                    }
                    function searchpeoplerequest() {
                        const peoplerequestsearchbar = document.querySelector('#peoplerequestsearchbar');
                        let people = document.querySelectorAll('.friendconnectrequest');
                        people.forEach(person => {
                            let personsname = person.querySelector('.personsname').textContent.toLowerCase();
                            if (personsname.indexOf(peoplerequestsearchbar.value.toLowerCase()) != -1) {
                                person.style.display = 'flex';
                            } else {
                                person.style.display = 'none';
                            }
                        })
                    }
                    function searchmyfriendlist() {
                        const friendlistsearch = document.querySelector('#friendlistsearch');
                        let friendcontainer = document.querySelectorAll('.friendcontainer');
                        friendcontainer.forEach(friend => {
                            let friendname = friend.querySelector('.friendname').textContent.toLowerCase();
                            if (friendname.indexOf(friendlistsearch.value.toLowerCase()) != -1) {
                                friend.style.display = 'flex';
                            } else {
                                friend.style.display = 'none';
                            }
                        })
                    }
                    function search_Feeds() {
                        const public_Search_Bar = document.querySelector('.public_Search_Bar');
                        let post = document.querySelectorAll('.publicpostcontainer .post');
                        let worldwidegadgetcontainer = document.querySelectorAll('.advertStatusbar .worldwidegadgetcontainer');
                        worldwidegadgetcontainer.forEach(gadget => {
                            let title = gadget.querySelector('.worldwidegadgetcaption').textContent.toLowerCase();
                            if (title.indexOf(public_Search_Bar.value.toLowerCase()) != -1) {
                                gadget.style.display = 'flex';
                            } else {
                                gadget.style.display = 'none';
                            }
                        });
                        post.forEach(feed => {
                            let posttitle = feed.querySelector('.posttitle').textContent.toLowerCase();
                            if (posttitle.indexOf(public_Search_Bar.value.toLowerCase()) != -1) {
                                feed.style.display = 'flex';
                            } else {
                                feed.style.display = 'none';
                            }
                        })
                    }
                    function seach_Reels_Feeds() {
                        const ReelPage_Search_Bar = document.querySelector('.ReelPage_Search_Bar');
                        let gadget = document.querySelectorAll('.rightsidefeedsothersection .worldwidegadgetcontaineronshortpage');
                        let reel = document.querySelectorAll('.reelscontainer .reel');
                        gadget.forEach(section => {
                            let title = section.querySelector('.worldwidegadgetcaption').textContent.toLowerCase();
                            if (title.indexOf(ReelPage_Search_Bar.value.toLowerCase()) != -1) {
                                section.style.display = 'flex';
                            } else {
                                section.style.display = 'none';
                            }
                        });
                        reel.forEach(post => {
                            let title = post.querySelector('.posttitle').textContent.toLowerCase();
                            if (title.indexOf(ReelPage_Search_Bar.value.toLowerCase()) != -1) {
                                post.style.display = 'flex';
                            } else {
                                post.style.display = 'none';
                            }
                        });
                    }

                    document.querySelector('.gallery_Search_Bar').addEventListener('keyup', searchOtherPost);
                    document.querySelector('.ReelPage_Search_Bar').addEventListener('keyup', seach_Reels_Feeds);
                    document.querySelector('.public_Search_Bar').addEventListener('keyup', search_Feeds)
                    document.querySelector('#friendlistsearch').addEventListener('keyup', searchmyfriendlist);
                    document.querySelector('#peoplerequestsearchbar').addEventListener('keyup', searchpeoplerequest);
                    document.querySelector('#peoplepagesearchpeople').addEventListener('keyup', searchpeople);
                }
                searchFunctions()
            }
        });
    });
}