const ActiveAccount = JSON.parse(localStorage.getItem('ActiveUser_Account'));
const datashortcut = JSON.parse(localStorage.getItem('myLogsArray'));

//const ActiveUser_Account_Cookie = JSON.parse(getCookie('ActiveUser_Account'));
let ActiveUser = sessionStorage.getItem('activeuser');

//random icons
const notificationIcon = document.querySelector('#notification');
const peoplecount = document.querySelector('#people');
const chatIcon = document.querySelector('#chat');
const home = document.querySelector('#home');
const video = document.querySelector('#video');

const lavinsta_images_pages = document.querySelector('#lavinsta_images_pages');
const lavinstaReelsPage = document.querySelector('#lavinstaReelsPage');

const lavinsta_images = document.querySelector('#lavinsta_images');
const lavinsta_PublicPage = document.querySelector('#lavinsta_PublicPage');

const lavinsta_Public_Page = document.querySelector('#lavinsta_Public_Page');
const view_Short_Page = document.querySelector('#view_Short_Page');

const lavinsta_feeds_Icon = document.querySelector('#lavinsta_feeds_Icon');
const lavinstaimages_gallery = document.querySelector('#lavinstaimages_gallery');
const reelspageopen = document.querySelector('#reelspageopen');

const msgculomn = document.querySelector('.msgculomn');

const reels = document.querySelector('#reels');

const posterImgSrc = document.getElementById('posterImgSrc');
const VideoPosterName = document.querySelector('.VideoPosterName');

if (Array.isArray(ActiveAccount)) {
    ActiveUser_Account = ActiveAccount;
    create_Active_Account();
} else {
    ActiveUser_Account = [];
}
document.querySelectorAll('input').forEach(input => {
    input.autocomplete = 'off';
});
function loadscreen() {
    let loadingsection = document.createElement('section');
    let loading_progress = document.createElement('span');
    document.body.appendChild(loadingsection);
    loadingsection.appendChild(loading_progress)
    loadingsection.classList.add('loadingsection');
}
const newURL = 'https://tonybrianjackson.github.io/lavinsta_database/users.json';
const url = 'database/users.json';

function fetchUrl() {
    const param = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }
    }
    function getData() {
        fetch(newURL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
    }
    getData();
}
// fetchUrl();
const jsonArr = [{
    firstName: 'Tony',
    surName: 'Jackson',
    id: new Date().getTime()
}];
function pushData() {
    const jsonURL = 'https://github.com/TonyBrianJackson/lavinsta_database/edit/main/users.json';
    fetch(newURL, {
        method: 'POST',
        mode: "no-cors",
        body: JSON.stringify(jsonArr),
        headers: new Headers({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            'Content-Type': 'application/json; charset=UTF-8'
        }),
    });
    // .then(res => res.json())
    // .then(data => console.log(data));

}
// document.body.addEventListener('click', pushData);

function stoploading() {
    document.querySelectorAll('.loadingsection').forEach(section => {
        section.remove();
    });
}
function savedData() {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
}
function create_Active_Account() {
    const smallminiprofile = document.querySelector('.smallminiprofile');
    const profilecontainer = document.querySelector('.profile');
    if (ActiveAccount.length !== 0) {
        profilecontainer.innerHTML = '';
        smallminiprofile.innerHTML = '';
    }
    ActiveUser_Account.forEach(user => {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(profile => {
            if (user.user_Id === profile.user_Id) {
                function Online_Status() {
                    function getActiveUser() {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(activeuser => {
                            if (activeuser.user_Id === profile.user_Id) {
                                if (activeuser.user_Is_Online === false) {
                                    activeuser.user_Is_Online = true;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                        });
                        LogInFormData.forEach(activeuser => {
                            var state = document.visibilityState;
                            if (activeuser.user_Id === profile.user_Id) {
                                if (state == 'hidden') {
                                    activeuser.user_Is_Online = false;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                } else {
                                    activeuser.user_Is_Online = true;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            }
                        });
                    }
                    getActiveUser();

                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    document.addEventListener('visibilitychange', () => {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(activeuser => {
                            let connection = activeuser.user_Connection;
                            var state = document.visibilityState;
                            connection.forEach(connect => {
                                if (connect.connectionId === user.user_Id) {
                                    if (state == 'hidden') {
                                        connect.status = connect.status;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    } else {
                                        connect.status = new Date().getTime();
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                }
                            });
                            if (state == 'hidden') {
                                activeuser.user_Is_Online = false;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            } else {
                                activeuser.user_Is_Online = true;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    });
                }
                Online_Status();
                let userprofileheader = document.createElement('header');
                let exituserprofile = document.createElement('span');
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
                let user_Profile_Settings_Container = document.createElement('span');
                let user_Information_View_Container = document.createElement('span');
                let user_Friends_View_Container = document.createElement('span');
                let user_Profile_Label = document.createElement('span');

                let usersprofilesetting = document.createElement('img');
                let usersinformationview = document.createElement('img');
                let usersfriendsview = document.createElement('img');
                let usersprofilelabel = document.createElement('img');

                let username;
                profile.user_Mid_Name ? username = 
                profile.user_Firstname + ' ' + profile.user_Mid_Name + ' ' + profile.user_Surname : 
                username = profile.user_Firstname + ' ' + profile.user_Surname;

                userspreview.appendChild(user_More_Option_Views);
                user_More_Option_Views.innerHTML = vellip;

                usersprofilelabel.src = 'icons/camera.png';
                usersprofilesetting.src = 'icons/setting.png';
                usersfriendsview.src = 'icons/tow-people_solid.png';
                usersinformationview.src = 'icons/information.png';
                userconnectgrid.id = profile.user_Id;
                exituserprofile.id = profile.user_Id;
                user_More_Option_Views.id = profile.user_Id;
                userprofileheader.id = profile.user_Id;
                user_Profile_Settings_Container.id = profile.user_Id;

                user_Profile_Settings_Container.innerHTML = profilesetting;
                user_Friends_View_Container.innerHTML = peoplesvg;
                user_Information_View_Container.innerHTML = infosvg;
                user_Profile_Label.innerHTML = camerasvg;

                userconnectgrid.appendChild(user_Connection_Grid_Inner);
                user_Connection_Grid_Inner.appendChild(user_Profile_Label);
                user_Connection_Grid_Inner.appendChild(user_Profile_Settings_Container);
                user_Connection_Grid_Inner.appendChild(user_Friends_View_Container);
                user_Connection_Grid_Inner.appendChild(user_Information_View_Container);

                userconnectgrid.classList.add('userconnectgrid');

                if (profile.user_Is_Admin === 'Assist_Admin') {
                    let access_Each_User = document.createElement('span');
                    let access_Each_User_Img = document.createElement('img');
                    user_Connection_Grid_Inner.appendChild(access_Each_User);
                    access_Each_User.appendChild(access_Each_User_Img);
                    access_Each_User_Img.src = 'icons/key.png';
                    access_Each_User.classList.add('access_Each_User');
                    access_Each_User.id = profile.user_Id;
                    function create_Admins_User_List() {
                        let users_Popup = document.createElement('div');
                        let users_Popup_Column = document.createElement('div');
                        let users_Popup_Header = document.createElement('header');
                        let users_Popup_Exit = document.createElement('span');

                        document.body.appendChild(users_Popup);
                        users_Popup.appendChild(users_Popup_Header);
                        users_Popup.appendChild(users_Popup_Column);
                        users_Popup_Header.appendChild(users_Popup_Exit);

                        users_Popup_Exit.innerHTML = '&LeftArrow;';
                        users_Popup.id = profile.user_Id;
                        users_Popup_Column.id = profile.user_Id;
                        users_Popup_Column.classList.add('users_Popup_Column');
                        users_Popup.classList.add('users_Popup');
                        users_Popup.classList.add('users_Popup_Assist');
                        users_Popup_Header.classList.add('users_Popup_Header');
                        users_Popup_Column.style.display = 'grid';
                        access_Each_User.addEventListener('click', () => {
                            users_Popup.style.display = 'flex';
                        });
                        users_Popup_Exit.addEventListener('click', () => {
                            users_Popup.style.display = 'none';
                        });
                    }
                    create_Admins_User_List();
                }
                if (profile.user_Is_Admin === true) {
                    let access_Each_User = document.createElement('span');
                    let access_Each_User_Img = document.createElement('img');
                    user_Connection_Grid_Inner.appendChild(access_Each_User);
                    access_Each_User.appendChild(access_Each_User_Img);
                    access_Each_User_Img.src = 'icons/key.png';
                    access_Each_User.classList.add('access_Each_User');
                    access_Each_User.id = profile.user_Id;
                    function create_Admins_User_List() {
                        let users_Popup = document.createElement('div');
                        let users_Popup_Column = document.createElement('div');
                        let users_Popup_Notification_Column = document.createElement('div');
                        let users_Popup_Column_Admins = document.createElement('div');
                        let users_Popup_Header = document.createElement('header');
                        let users_Popup_Exit = document.createElement('span');
                        let users_Popup_Home = document.createElement('div');
                        let users_Popup_Notification = document.createElement('div');
                        let users_Notification_Img = document.createElement('img');
                        let users_Popup_Admins = document.createElement('div');
                        let users_Admin_Img = document.createElement('img');
                        let users_Home_Img = document.createElement('img');
                        document.body.appendChild(users_Popup);
                        users_Popup.appendChild(users_Popup_Header);
                        users_Popup.appendChild(users_Popup_Column);
                        users_Popup.appendChild(users_Popup_Notification_Column);
                        users_Popup.appendChild(users_Popup_Column_Admins);
                        users_Popup_Header.appendChild(users_Popup_Exit);
                        users_Popup_Header.appendChild(users_Popup_Home);
                        users_Popup_Header.appendChild(users_Popup_Notification);
                        users_Popup_Header.appendChild(users_Popup_Admins);

                        users_Popup_Home.appendChild(users_Home_Img);
                        users_Popup_Notification.appendChild(users_Notification_Img);
                        users_Popup_Admins.appendChild(users_Admin_Img);
                        users_Home_Img.src = 'icons/home.png';
                        users_Notification_Img.src = 'icons/bell.png';
                        users_Admin_Img.src = 'icons/other.png';
                        users_Popup_Exit.innerHTML = '&LeftArrow;';
                        users_Popup.id = profile.user_Id;
                        users_Popup_Column.id = profile.user_Id;
                        users_Popup_Column_Admins.id = profile.user_Id;
                        users_Popup_Notification_Column.id = profile.user_Id;
                        users_Popup_Column.classList.add('users_Popup_Column');
                        users_Popup_Column_Admins.classList.add('users_Popup_Column_Admins');
                        users_Popup_Notification_Column.classList.add('users_Popup_Notification_Column');
                        users_Popup.classList.add('users_Popup');
                        users_Popup_Header.classList.add('users_Popup_Header');
                        users_Popup_Column_Admins.style.display = 'none';
                        users_Popup_Notification_Column.style.display = 'none';
                        users_Popup_Column.style.display = 'grid';
                        users_Popup_Exit.classList.add('headerbtns');
                        users_Popup_Home.classList.add('headerbtns');
                        users_Popup_Notification.classList.add('headerbtns');
                        users_Popup_Admins.classList.add('headerbtns');
                        if (profile.user_Is_CEO === true) {
                            let user_Admins = document.createElement('div');
                            let user_adminImg = document.createElement('img');
                            let user_Main_Admins_Column = document.createElement('div');

                            users_Popup.appendChild(user_Main_Admins_Column);
                            user_Admins.appendChild(user_adminImg);
                            users_Popup_Header.appendChild(user_Admins);
                            user_Admins.classList.add('headerbtns');
                            user_Main_Admins_Column.classList.add('user_Main_Admins_Column');
                            user_Main_Admins_Column.style.display = 'none';
                            user_Admins.addEventListener('click', () => {
                                user_Main_Admins_Column.style.display = 'grid';
                                users_Popup_Column_Admins.style.display = 'none';
                                users_Popup_Notification_Column.style.display = 'none';
                                users_Popup_Column.style.display = 'none';
                            });
                            users_Popup_Home.addEventListener('click', () => {
                                user_Main_Admins_Column.style.display = 'none';
                            });
                            users_Popup_Notification.addEventListener('click', () => {
                                user_Main_Admins_Column.style.display = 'none';
                            });
                            users_Popup_Admins.addEventListener('click', () => {
                                user_Main_Admins_Column.style.display = 'none';
                            });
                            user_adminImg.src = 'icons/update.png';
                        }
                        users_Popup_Home.addEventListener('click', () => {
                            users_Popup_Column_Admins.style.display = 'none';
                            users_Popup_Notification_Column.style.display = 'none';
                            users_Popup_Column.style.display = 'grid';
                        });
                        users_Popup_Notification.addEventListener('click', () => {
                            users_Popup_Column_Admins.style.display = 'none';
                            users_Popup_Notification_Column.style.display = 'grid';
                            users_Popup_Column.style.display = 'none';
                        });
                        users_Popup_Admins.addEventListener('click', () => {
                            users_Popup_Column_Admins.style.display = 'grid';
                            users_Popup_Notification_Column.style.display = 'none';
                            users_Popup_Column.style.display = 'none';
                        });
                        access_Each_User.addEventListener('click', () => {
                            users_Popup.style.display = 'flex';
                        });
                        users_Popup_Exit.addEventListener('click', () => {
                            users_Popup.style.display = 'none';
                        });
                    }
                    create_Admins_User_List();
                }
                user_Profile_Settings_Container.classList.add('headerbtns');
                user_Friends_View_Container.classList.add('headerbtns');
                user_Information_View_Container.classList.add('headerbtns');
                user_Profile_Label.classList.add('headerbtns');
                user_More_Option_Views.classList.add('headerbtns');

                user_Profile_Settings_Container.classList.add('user_Profile_Settings_Container');
                user_Friends_View_Container.classList.add('user_Friends_View_Container');
                user_Information_View_Container.classList.add('user_Information_View_Container');
                user_More_Option_Views.classList.add('user_More_Option_Views');
                usersprofilesetting.classList.add('usersprofilesetting');

                user_More_Option_Views.addEventListener('click', () => {
                    userconnectgrid.classList.toggle('userconnectgridactive');
                });

                //users mini profile
                let userstrash = document.createElement('nav');
                let userminiprofile = document.createElement('div');
                let usersmallprofileimagecontainer = document.createElement('div');
                let usersmallimg = document.createElement('img');
                let usersmallprofilea = document.createElement('a');
                let usersmallprofilename = document.createElement('span');
                let usersmallprofileid = document.createElement('p');
                document.body.appendChild(userstrash);
                userstrash.appendChild(userminiprofile);
                userstrash.style.display = 'none';
                //users post sharing script
                let usersharepopupheader = document.createElement('header');
                let usersharepopupexit = document.createElement('span');
                let usersharepopup = document.createElement('div');
                let usersharepopupcolumn = document.createElement('div');
                let usershareloader = document.createElement('nav');
                userstrash.appendChild(usersharepopup);
                usersharepopupheader.appendChild(usersharepopupexit);
                usersharepopup.appendChild(usersharepopupheader);
                usersharepopup.appendChild(usershareloader);
                usersharepopup.appendChild(usersharepopupcolumn);
                usersharepopupexit.innerHTML = '&LeftArrow;';
                usersharepopupcolumn.id = profile.user_Id;
                usersharepopup.id = profile.user_Id;
                usershareloader.id = profile.user_Id;
                usersharepopupexit.id = profile.user_Id;
                usershareloader.classList.add('usershareloader');
                usersharepopup.classList.add('usersharepopup');
                usersharepopupexit.classList.add('usersharepopupexit');
                usersharepopupcolumn.classList.add('usersharepopupcolumn');
                usersharepopupexit.addEventListener('click', () => {
                    usersharepopup.style.display = 'none';
                });
                //users account deleting
                function user_Deleting() {
                    let license_Popup = document.createElement('div');
                    let popupheader = document.createElement('header');
                    let exit = document.createElement('span');
                    let popupname = document.createElement('p');
                    let license_Column = document.createElement('div');
                    let userssecuritytextbox = document.createElement('textarea');
                    let proceedbutton = document.createElement('button');
                    document.body.appendChild(license_Popup);
                    userssecuritytextbox.placeholder = `decribe problem...`;
                    license_Popup.appendChild(popupheader);
                    license_Popup.appendChild(license_Column);
                    license_Popup.appendChild(proceedbutton);
                    license_Column.appendChild(userssecuritytextbox);
                    popupheader.appendChild(exit);
                    popupheader.appendChild(popupname);
                    exit.innerHTML = undo;
                    popupname.innerHTML = `permanently delete &quest;`;
                    exit.classList.add('headerbtns');
                    proceedbutton.textContent = 'proceed';
                    license_Popup.id = profile.user_Id;
                    proceedbutton.id = profile.user_Id;
                    license_Popup.classList.add('license_Popup');
                    license_Column.classList.add('license_Column');
                    proceedbutton.classList.add('proceedbutton');
                    proceedbutton.addEventListener('click', () => {
                        LogInFormData = LogInFormData.filter(user => {
                            if (proceedbutton.id === user.user_Id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        myLogsArray = myLogsArray.filter(log => {
                            if (proceedbutton.id === log.accountId) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        Feeds_Data_Base = Feeds_Data_Base.filter(advert => {
                            if (proceedbutton.id === advert.posterId) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        ActiveUser_Account = [];
                        localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                        localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
                        location.reload();
                    });
                    exit.addEventListener('click', () => {
                        license_Popup.remove();
                    });
                }
                document.querySelector('#privacy').addEventListener('click', () => {
                    user_Deleting();
                });
                function user_Reporting() {
                    let license_Popup = document.createElement('div');
                    let popupheader = document.createElement('header');
                    let exit = document.createElement('span');
                    let popupname = document.createElement('p');
                    let license_Column = document.createElement('div');
                    let userssecuritytextbox = document.createElement('textarea');
                    let proceedbutton = document.createElement('button');
                    document.body.appendChild(license_Popup);
                    userssecuritytextbox.placeholder = `decribe problem...`;
                    license_Popup.appendChild(popupheader);
                    license_Popup.appendChild(license_Column);
                    license_Popup.appendChild(proceedbutton);
                    license_Column.appendChild(userssecuritytextbox);
                    popupheader.appendChild(exit);
                    popupheader.appendChild(popupname);
                    exit.innerHTML = undo;
                    popupname.innerHTML = `report this account &quest;`;
                    exit.classList.add('headerbtns');
                    proceedbutton.textContent = 'proceed';
                    license_Popup.id = profile.user_Id;
                    proceedbutton.id = profile.user_Id;
                    license_Popup.classList.add('license_Popup');
                    license_Column.classList.add('license_Column');
                    proceedbutton.classList.add('proceedbutton');
                    function report_To_Admin() {
                        if (userssecuritytextbox.value) {
                            const id = '' + new Date().getTime();
                            Admins_Notification.push({
                                id: id,
                                type: 'is_Account_report',
                                Report_Id: profile.user_Id,
                                Image: profile.user_ProfilePicture,
                                Name: profile.user_Firstname + ' ' + profile.user_Surname,
                                problem: userssecuritytextbox.value,
                            });
                            localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                        }
                    }
                    proceedbutton.addEventListener('click', () => {
                        report_To_Admin();
                        userssecuritytextbox.value = '';
                        setTimeout(() => {
                            license_Popup.remove();
                        }, 2000);
                    });

                    exit.addEventListener('click', () => {
                        license_Popup.remove();
                    });
                }
                document.querySelector('#report').addEventListener('click', () => {
                    if (profile.user_Is_CEO !== true && profile.user_Is_Admin !== true) {
                        user_Reporting();
                    }
                });


                smallminiprofile.appendChild(userminiprofile);
                userminiprofile.appendChild(usersmallprofileimagecontainer);
                userminiprofile.appendChild(usersmallprofilea);
                usersmallprofileimagecontainer.appendChild(usersmallimg);
                usersmallprofileid.textContent = profile.lavinsta_Email;
                usersmallprofilename.textContent = username;
                usersmallprofilea.href = '#';
                usersmallprofilea.appendChild(usersmallprofilename);
                usersmallprofilea.appendChild(usersmallprofileid);

                userminiprofile.id = profile.user_Id;
                usersmallimg.src = profile.user_ProfilePicture;
                usersmallimg.id = profile.user_Id;
                usersmallimg.classList.add('usersmallimg');
                usersmallprofileimagecontainer.classList.add('imgcontainer');
                userminiprofile.classList.add('smallprofile');

                let userbioblock = document.createElement('div');
                let userbioinfor = document.createElement('p');

                let userprofileminimizer = document.createElement('span');
                let userpostgridcontainer = document.createElement('nav');
                let userpostgrid = document.createElement('div');

                userpostgridcontainer.appendChild(userpostgrid);

                userbioblock.appendChild(userbioinfor);
                userbioblock.classList.add('bioblock');

                if (profile.user_Bio == '') {
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
                    function clickToTerminateCount() {
                        //home page
                        function disablephotocount() {
                            document.querySelectorAll('.photocount').forEach(count => {
                                if (count.id === profile.user_Id) {
                                    count.textContent = 0;
                                    count.style.display = 'none';
                                    profile.my_PhotoCount = count.textContent;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            });
                        }
                        function disablefeedcount() {
                            document.querySelectorAll('.feedcount').forEach(count => {
                                if (count.id === profile.user_Id) {
                                    count.textContent = 0;
                                    count.style.display = 'none';
                                    profile.my_FeedsCount = count.textContent;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            });
                        }
                        function disableshortcount() {
                            document.querySelectorAll('.shortcount').forEach(count => {
                                if (count.id === profile.user_Id) {
                                    count.textContent = 0;
                                    count.style.display = 'none';
                                    profile.my_ShortCount = count.textContent;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                }
                            });
                        }
                        lavinstafeeds.addEventListener('click', () => {
                            disablefeedcount();
                        });
                        lavinstaimages.addEventListener('click', () => {
                            disablephotocount();
                        });
                        document.querySelector('#lav_Insta_images').addEventListener('click', () => {
                            disablephotocount();
                        });
                        reels.addEventListener('click', () => {
                            disableshortcount();
                        });
                        document.querySelector('#lav_Insta_public').addEventListener('click', () => {
                            disablefeedcount();
                        });
                        document.querySelector('#lav_Insta_short').addEventListener('click', () => {
                            disableshortcount();
                        });
                        //public page
                        lavinsta_images_pages.addEventListener('click', () => {
                            disablephotocount();
                        });
                        lavinstaReelsPage.addEventListener('click', () => {
                            disableshortcount();
                        });

                        //short page
                        lavinsta_PublicPage.addEventListener('click', () => {
                            disablefeedcount();
                        });
                        lavinsta_images.addEventListener('click', () => {
                            disablephotocount();
                        });

                        //photo page
                        lavinsta_Public_Page.addEventListener('click', () => {
                            disablefeedcount();
                        });
                        view_Short_Page.addEventListener('click', () => {
                            disableshortcount();
                        });

                        //video page
                        lavinsta_feeds_Icon.addEventListener('click', () => {
                            disablefeedcount();
                        });
                        lavinstaimages_gallery.addEventListener('click', () => {
                            disablephotocount();
                        });
                        reelspageopen.addEventListener('click', () => {
                            disableshortcount();
                        });
                    }
                    clickToTerminateCount();
                    function HomePageCounts() {
                        let usersnotificationcount = document.createElement('span');
                        let userschatcount = document.createElement('span');
                        let userspeoplecount = document.createElement('span');
                        let usersfeedcount = document.createElement('span');
                        let usersvideocount = document.createElement('span');
                        let otherphotocount = document.createElement('span');
                        let otherpubliccount = document.createElement('span');
                        let othershortcount = document.createElement('span');

                        let feedcount = document.createElement('span');
                        let photocount = document.createElement('span');
                        let shortcount = document.createElement('span');
                        usersnotificationcount.id = profile.user_Id;
                        userschatcount.id = profile.user_Id;
                        userspeoplecount.id = profile.user_Id;
                        usersfeedcount.id = profile.user_Id;
                        usersvideocount.id = profile.user_Id;
                        otherphotocount.id = profile.user_Id;
                        otherpubliccount.id = profile.user_Id;
                        othershortcount.id = profile.user_Id;

                        feedcount.id = profile.user_Id;
                        photocount.id = profile.user_Id;
                        shortcount.id = profile.user_Id;


                        notificationIcon.appendChild(usersnotificationcount);
                        chatIcon.appendChild(userschatcount);
                        peoplecount.appendChild(userspeoplecount);
                        home.appendChild(usersfeedcount);
                        video.appendChild(usersvideocount);
                        document.querySelector('#lav_Insta_images').appendChild(otherphotocount);
                        document.querySelector('#lav_Insta_public').appendChild(otherpubliccount);
                        document.querySelector('#lav_Insta_short').appendChild(othershortcount);
                        lavinstafeeds.appendChild(feedcount);
                        lavinstaimages.appendChild(photocount);
                        reels.appendChild(shortcount);

                        if (profile.my_FeedsCount > 9) {
                            feedcount.textContent = `${9}+`;
                        } else {
                            feedcount.textContent = profile.my_FeedsCount;
                        } if (profile.my_PhotoCount > 9) {
                            otherphotocount.textContent = `${9}+`;
                            photocount.textContent = `${9}+`;
                        } else {
                            photocount.textContent = profile.my_PhotoCount;
                        } if (profile.my_ShortCount > 9) {
                            shortcount.textContent = `${9}+`;
                        } else {
                            shortcount.textContent = profile.my_ShortCount;
                        }

                        let notifications = profile.user_Notifications;
                        let arr = [];
                        notifications.forEach(notification => {
                            if (notification.notification_View === false) {
                                arr.push(notification);
                                if (arr.length > 9) {
                                    usersnotificationcount.textContent = `${9}+`;
                                } else {
                                    usersnotificationcount.textContent = arr.length;
                                }
                            }
                        });


                        notificationIcon.addEventListener('click', () => {
                            let usersnotificationcount = document.querySelectorAll('.usersnotificationcount');
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(userdata => {
                                if (userdata.user_Id === profile.user_Id) {
                                    let notifications = userdata.user_Notifications;
                                    notifications.forEach(notification => {
                                        if (notification.notification_View !== true) {
                                            notification.notification_View = true;
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        }
                                    });
                                }
                            });
                            usersnotificationcount.forEach(count => {
                                if (count.id === profile.user_Id) {
                                    count.style.display = 'none';
                                }
                            });
                        });

                        userschatcount.textContent = '';
                        userspeoplecount.textContent = profile.user_ConnectRequest.length;
                        usersfeedcount.textContent = profile.my_Home_FeedsCount;
                        usersvideocount.textContent = profile.my_VideosCount;
                        otherphotocount.textContent = profile.my_PhotoCount;
                        otherpubliccount.textContent = profile.my_FeedsCount;
                        othershortcount.textContent = profile.my_ShortCount;


                        usersnotificationcount.classList.add('userscount');
                        userschatcount.classList.add('userscount');
                        userspeoplecount.classList.add('userscount');
                        usersfeedcount.classList.add('userscount');
                        usersvideocount.classList.add('userscount');
                        otherphotocount.classList.add('userscount');
                        otherpubliccount.classList.add('userscount');
                        othershortcount.classList.add('userscount');

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
                        otherphotocount.classList.add('photocount');
                        otherpubliccount.classList.add('usersfeedcount');
                        othershortcount.classList.add('shortcount');
                        function countsDisplay() {
                            if (usersnotificationcount.textContent < 1) {
                                usersnotificationcount.style.display = 'none';
                            } else if (usersnotificationcount.textContent > 0) {
                                usersnotificationcount.style.display = 'block';
                            } if (profile.user_ChatView === true) {
                                userschatcount.style.display = 'none';
                            } else if (profile.user_ChatView === false) {
                                userschatcount.style.display = 'block';
                            } if (userspeoplecount.textContent < 1) {
                                userspeoplecount.style.display = 'none';
                            } else if (userspeoplecount.textContent > 0) {
                                userspeoplecount.style.display = 'block';
                            } if (usersfeedcount.textContent < 1) {
                                usersfeedcount.style.display = 'none';
                            } else if (usersfeedcount.textContent > 0) {
                                usersfeedcount.style.display = 'block';
                            } if (usersvideocount.textContent < 1) {
                                usersvideocount.style.display = 'none';
                            } else if (usersvideocount.textContent > 0) {
                                usersvideocount.style.display = 'block';
                            } if (profile.my_FeedsCount < 1) {
                                feedcount.style.display = 'none';
                                otherpubliccount.style.display = 'none';
                            } else if (profile.my_FeedsCount > 0) {
                                feedcount.style.display = 'block';
                                otherpubliccount.style.display = 'block';
                            } if (profile.my_PhotoCount < 1) {
                                photocount.style.display = 'none';
                                otherphotocount.style.display = 'none';
                            } else if (profile.my_PhotoCount > 0) {
                                photocount.style.display = 'block';
                                otherphotocount.style.display = 'block';
                            } if (profile.my_ShortCount < 1) {
                                shortcount.style.display = 'none';
                                othershortcount.style.display = 'none';
                            } else if (profile.my_ShortCount > 0) {
                                shortcount.style.display = 'block';
                                othershortcount.style.display = 'block';
                            }
                        }
                        countsDisplay();
                    }
                    HomePageCounts();
                    function FeedPageCounts() {
                        let photocount = document.createElement('span');
                        let shortcount = document.createElement('span');

                        lavinsta_images_pages.appendChild(photocount);
                        lavinstaReelsPage.appendChild(shortcount);

                        photocount.id = profile.user_Id;
                        shortcount.id = profile.user_Id;

                        if (profile.my_PhotoCount > 9) {
                            photocount.textContent = `${9}+`;
                        } else {
                            photocount.textContent = profile.my_PhotoCount;
                        } if (profile.my_ShortCount > 9) {
                            shortcount.textContent = `${9}+`;
                        } else {
                            shortcount.textContent = profile.my_ShortCount;
                        }
                        photocount.classList.add('userscount');
                        shortcount.classList.add('userscount');

                        photocount.classList.add('photocount');
                        shortcount.classList.add('shortcount');
                        function countsDisplay() {
                            if (profile.my_PhotoCount < 1) {
                                photocount.style.display = 'none';
                            } else if (profile.my_PhotoCount > 0) {
                                photocount.style.display = 'block';
                            } if (profile.my_ShortCount < 1) {
                                shortcount.style.display = 'none';
                            } else if (profile.my_ShortCount > 0) {
                                shortcount.style.display = 'block';
                            }
                        }
                        countsDisplay();
                    }
                    FeedPageCounts();
                    function ShortPageCounts() {
                        let feedcount = document.createElement('span');
                        let photocount = document.createElement('span');

                        lavinsta_PublicPage.appendChild(feedcount);
                        lavinsta_images.appendChild(photocount);

                        feedcount.id = profile.user_Id;
                        photocount.id = profile.user_Id;

                        if (profile.my_FeedsCount > 9) {
                            feedcount.textContent = `${9}+`;
                        } else {
                            feedcount.textContent = profile.my_FeedsCount;
                        } if (profile.my_PhotoCount > 9) {
                            photocount.textContent = `${9}+`;
                        } else {
                            photocount.textContent = profile.my_PhotoCount;
                        }

                        feedcount.classList.add('userscount');
                        photocount.classList.add('userscount');

                        feedcount.classList.add('feedcount');
                        photocount.classList.add('photocount');
                        function countsDisplay() {
                            if (profile.my_FeedsCount < 1) {
                                feedcount.style.display = 'none';
                            } else if (profile.my_FeedsCount > 0) {
                                feedcount.style.display = 'block';
                            } if (profile.my_PhotoCount < 1) {
                                photocount.style.display = 'none';
                            } else if (profile.my_PhotoCount > 0) {
                                photocount.style.display = 'block';
                            }
                        }
                        countsDisplay();
                    }
                    ShortPageCounts();
                    function PhotoPageCounts() {
                        let feedcount = document.createElement('span');
                        let shortcount = document.createElement('span');

                        lavinsta_Public_Page.appendChild(feedcount);
                        view_Short_Page.appendChild(shortcount);

                        feedcount.id = profile.user_Id;
                        shortcount.id = profile.user_Id;

                        if (profile.my_FeedsCount > 9) {
                            feedcount.textContent = `${9}+`;
                        } else {
                            feedcount.textContent = profile.my_FeedsCount;
                        } if (profile.my_ShortCount > 9) {
                            shortcount.textContent = `${9}+`;
                        } else {
                            shortcount.textContent = profile.my_ShortCount;
                        }
                        feedcount.classList.add('userscount');
                        shortcount.classList.add('userscount');

                        feedcount.classList.add('feedcount');
                        shortcount.classList.add('shortcount');
                        function countsDisplay() {
                            if (profile.my_FeedsCount < 1) {
                                feedcount.style.display = 'none';
                            } else if (profile.my_FeedsCount > 0) {
                                feedcount.style.display = 'block';
                            } if (profile.my_ShortCount < 1) {
                                shortcount.style.display = 'none';
                            } else if (profile.my_ShortCount > 0) {
                                shortcount.style.display = 'block';
                            }
                        }
                        countsDisplay();
                    }
                    PhotoPageCounts();
                    function VideoPageCounts() {
                        let feedcount = document.createElement('span');
                        let photocount = document.createElement('span');
                        let shortcount = document.createElement('span');

                        lavinsta_feeds_Icon.appendChild(feedcount);
                        lavinstaimages_gallery.appendChild(photocount);
                        reelspageopen.appendChild(shortcount);

                        feedcount.id = profile.user_Id;
                        photocount.id = profile.user_Id;
                        shortcount.id = profile.user_Id;

                        if (profile.my_FeedsCount > 9) {
                            feedcount.textContent = `${9}+`;
                        } else {
                            feedcount.textContent = profile.my_FeedsCount;
                        } if (profile.my_PhotoCount > 9) {
                            photocount.textContent = `${9}+`;
                        } else {
                            photocount.textContent = profile.my_PhotoCount;
                        } if (profile.my_ShortCount > 9) {
                            shortcount.textContent = `${9}+`;
                        } else {
                            shortcount.textContent = profile.my_ShortCount;
                        }
                        feedcount.classList.add('userscount');
                        photocount.classList.add('userscount');
                        shortcount.classList.add('userscount');

                        feedcount.classList.add('feedcount');
                        photocount.classList.add('photocount');
                        shortcount.classList.add('shortcount');
                        function countsDisplay() {
                            if (profile.my_FeedsCount < 1) {
                                feedcount.style.display = 'none';
                            } else if (profile.my_FeedsCount > 0) {
                                feedcount.style.display = 'block';
                            } if (profile.my_PhotoCount < 1) {
                                photocount.style.display = 'none';
                            } else if (profile.my_PhotoCount > 0) {
                                photocount.style.display = 'block';
                            } if (profile.my_ShortCount < 1) {
                                shortcount.style.display = 'none';
                            } else if (profile.my_ShortCount > 0) {
                                shortcount.style.display = 'block';
                            }
                        }
                        countsDisplay();
                    }
                    VideoPageCounts();
                }
                usersCount();


                user_Friends_View_Container.id = profile.user_Id;
                user_Information_View_Container.id = profile.user_Id;

                user_Friends_View_Container.addEventListener('click', (e) => {
                    createFriends(profile.user_Id);
                });

                user_Information_View_Container.addEventListener('click', () => {
                    usersInformation(profile.user_Id)
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
                profilecontainer.appendChild(usersprofile);
                usersprofile.appendChild(userprofileheader);
                userprofilepic.appendChild(userprofilepicture);
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
                document.title = username;
                usersname.textContent = username;
                if (profile.user_CoverPhoto) {
                    usercoverphoto.src = profile.user_CoverPhoto;
                } else {
                    usersinfopro.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                } if (profile.user_ProfilePicture) {
                    userprofilepicture.src = profile.user_ProfilePicture;
                } else {
                    userprofilepicture.src = 'icons/male-user.png';
                }
                function filter_Image_Profile() {
                    if (profile.user_ProfilePicture_Filter == 'default') {
                        userprofilepicture.classList.add('--color-default');
                        usersmallimg.classList.add('--color-default');
                    } else if (profile.user_ProfilePicture_Filter == 'gray') {
                        userprofilepicture.classList.add('--color-gray');
                        usersmallimg.classList.add('--color-gray');
                    } else if (profile.user_ProfilePicture_Filter == 'contrast') {
                        userprofilepicture.classList.add('--color-contrast');
                        usersmallimg.classList.add('--color-contrast');
                    } else if (profile.user_ProfilePicture_Filter == 'bright') {
                        userprofilepicture.classList.add('--color-bright');
                        usersmallimg.classList.add('--color-bright');
                    } else if (profile.user_ProfilePicture_Filter == 'blur') {
                        userprofilepicture.classList.add('--color-blur');
                        usersmallimg.classList.add('--color-blur');
                    } else if (profile.user_ProfilePicture_Filter == 'invert') {
                        userprofilepicture.classList.add('--color-invert');
                        usersmallimg.classList.add('--color-invert');
                    } else if (profile.user_ProfilePicture_Filter == 'sepia') {
                        userprofilepicture.classList.add('--color-sepia');
                        usersmallimg.classList.add('--color-sepia');
                    } else if (profile.user_ProfilePicture_Filter == 'hue-rotate') {
                        userprofilepicture.classList.add('--color-hue-rotate');
                        usersmallimg.classList.add('--color-hue-rotate');
                    } else if (profile.user_ProfilePicture_Filter == 'opacity') {
                        userprofilepicture.classList.add('--color-opacity');
                        usersmallimg.classList.add('--color-opacity');
                    } else if (profile.user_ProfilePicture_Filter == 'satulate') {
                        userprofilepicture.classList.add('--color-satulate');
                        usersmallimg.classList.add('--color-satulate');
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
                userprofilepicture.classList.add('userprofilepicture');
                usercoverphoto.classList.add('usercoverphoto');

                userpostgridcontainer.classList.add('postgridcontainer');
                userpostgrid.classList.add('postgrid');
                userbioinfor.classList.add('userbioinfor');
                userprofileminimizer.classList.add('userprofileminimizer');
                function expandProfile() {
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
                    user_More_Option_Views.classList.toggle('user_More_Option_Views_Large');
                }

                userprofileminimizer.id = profile.user_Id;
                userprofileminimizer.addEventListener('click', (e) => {
                    let gridpost = document.querySelectorAll('.gridpost');
                    gridpost.forEach(post => {
                        if (e.target.id === post.id) {
                            post.classList.toggle('gridpostlarge');
                        }
                    });
                    document.querySelector('.profile').classList.toggle('profilelarge');
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
                userprofilecolumn.classList.add('secondprofileculomn');
                exituserprofile.addEventListener('click', () => {
                    profilecontainer.style.display = 'none';
                    sessionStorage.setItem('activepage', 'home');
                    document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
                    document.title = 'home';
                });

                user_Profile_Label.addEventListener('click', () => {
                    document.querySelector('.uploadprofilepicturepopup').style.display = 'flex';
                });
                user_Profile_Settings_Container.addEventListener('click', () => {
                    document.querySelector('.profilebtnsettings').style.display = 'flex';
                });

                usersprofile.id = profile.user_Id;
                user_Profile_Label.id = profile.user_Id;
                userbioblock.id = profile.user_Id;
                userpostgrid.id = profile.user_Id;
                userprofilepicture.id = profile.user_Id;

                userbioinfor.id = profile.user_Id;
                usercoverphoto.id = profile.user_Id;
                createGridPost(profile.user_Id, userpostgrid);
            }
        });
    });
}

if (datashortcut) {
    myLogsArray = datashortcut;
    createAdvanceSwitchPage();
} else {
    myLogsArray = [];
}
function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    let res;
    ca.forEach(val => {
        if (val.indexOf(cname) === 0) {
            res = val.substring(cname.length);
        }
    })
    return res;
}
function checkCookie(value) {
    var activeUser_Id = getCookie('External_Details');
    if (activeUser_Id !== '' || activeUser_Id !== null) {
        setCookie('External_Details', value, 30);
    } else {
        setCookie('External_Details', value, 30);
    }
}
function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 60 * 60 * 1000);
    var expire = "expire" + date.toUTCString();
    document.cookie = name + "=;" + expire + ";path/";
}
deleteCookie('ActiveUser_Account');
function setCookie(name, value, expire_date) {
    var date = new Date();
    date.setTime(date.getTime() + (expire_date * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function createAdvanceSwitchPage() {
    if (Array.isArray(JSON.parse(localStorage.getItem('myLogsArray')))) {
        myLogsArray = JSON.parse(localStorage.getItem('myLogsArray'));
        myLogsArray.forEach(account => {
            LogInFormData.forEach(user => {
                if (user.user_Id === account.accountId) {
                    document.querySelector('#accountswitch').addEventListener('click',()=> {
                        create_Switch_Acc_Popup();
                    });
                    function create_Switch_Acc_Popup() {
                        removePopup();
                        let statusviewsheader = document.createElement('header');
                        let license_Popup = document.createElement('nav');
                        let popupname = document.createElement('p');
                        let license_Column = document.createElement('div');
                        let exit = document.createElement('span');
                        let logoutbutton = document.createElement('button');
                        document.body.appendChild(license_Popup);
                        license_Popup.appendChild(statusviewsheader);
                        license_Popup.appendChild(license_Column);
                        license_Popup.appendChild(logoutbutton);
                        statusviewsheader.appendChild(exit);
                        statusviewsheader.appendChild(popupname);
                        exit.innerHTML = undo;
                        logoutbutton.textContent = 'Logout';
                        popupname.innerHTML = `Log In To Another Account &quest;`;
                        exit.classList.add('headerbtns');
                        license_Popup.classList.add('logoutpopup');
                        license_Popup.classList.add('license_Popup');
                        license_Column.classList.add('license_Column');
                        logoutbutton.classList.add('logoutbutton');
                        logoutbutton.addEventListener('click',()=> {
                            document.querySelector('.confirmation_popup').style.display = 'flex';
                        });
                        exit.addEventListener('click', () => {
                            license_Popup.remove();
                        });
                        license_Popup.style.display = 'flex';
                        function Accounts() {
                            myLogsArray.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.accountId) {
                                        let person = document.createElement('div');
                                        let personhead = document.createElement('span');
                                        let persontail = document.createElement('div');
                                        let personAddandBlockFlex = document.createElement('div');
                                        let personprofileimage = document.createElement('img');
                                        let personsname = document.createElement('p');
                                        let personaddbutton = document.createElement('button');
                                        let persondeclinebutton = document.createElement('button');
                                        license_Column.appendChild(person);
                                        person.appendChild(personhead);
                                        person.appendChild(persontail);
                                        personhead.appendChild(personprofileimage);
                                        persontail.appendChild(personsname);
                                        persontail.appendChild(personAddandBlockFlex);
                                        personAddandBlockFlex.appendChild(personaddbutton);
                                        personAddandBlockFlex.appendChild(persondeclinebutton);
                                        personprofileimage.src = user.user_ProfilePicture;
                                        personsname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                        persondeclinebutton.textContent = 'remove';
                                        personaddbutton.textContent = 'login';
                                        personaddbutton.id = account.accountId;
                                        persondeclinebutton.id = account.accountId;
                                        personhead.classList.add('personhead');
                                        personsname.classList.add('personsname');
                                        persontail.classList.add('persontail');
                                        personAddandBlockFlex.classList.add('personAddandBlockFlex');
                                        personaddbutton.classList.add('personaddbutton');
                                        persondeclinebutton.classList.add('persondeclinebutton');
                                        person.classList.add('person');
                                        function filter_Image() {
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
                                        function detectAccount() {
                                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                                ActiveUser_Account.forEach(accdata => {
                                                    if (data.accountId === accdata.user_Id) {
                                                        personaddbutton.disabled = true;
                                                        personaddbutton.textContent = 'Online';
                                                        personaddbutton.classList.add('logIn_Button_Active');
                                                    }
                                                });
                                            }
                                        }
                                        detectAccount();
                                        // if (navigator.onLine === false) {
                                        //     if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                        //         ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                        //         ActiveUser_Account.forEach(data => {
                                        //             turnOffActiveStatus(data.user_Id);
                                        //         });
                                        //     }
                                        // }
                                        // document.body.addEventListener('click', () => {
                                        //     if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                        //         ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                        //         ActiveUser_Account.forEach(data => {
                                        //             turnOffActiveStatus(data.user_Id);
                                        //         });
                                        //     }
                                        // });
                                        persondeclinebutton.addEventListener('click',()=> {
                                            myLogsArray = myLogsArray.filter(user => {
                                                if (user.accountId === persondeclinebutton.id) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            });
                                            localStorage.setItem('myLogsArray',JSON.stringify(myLogsArray));
                                            persondeclinebutton.disabled = true;
                                            persondeclinebutton.textContent = 'removed';
                                        });
                                        personaddbutton.addEventListener('click', () => {
                                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                                ActiveUser_Account.forEach(data => {
                                                    turnOffActiveStatus(data.user_Id);
                                                });
                                            }
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            LogInFormData.forEach(user => {
                                                if (user.user_Id === data.accountId) {
                                                    function pushActiveAccount() {
                                                        ActiveUser_Account = [];
                                                        ActiveUser_Account.push({
                                                            user_Id: user.user_Id,
                                                            user_Mode: user.user_Mode
                                                        });
                                                        localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
                                                        setCookie('External_Details', user.user_Id, 30);
                                                    }
                                                    pushActiveAccount();
                                                    user.user_Is_Online = true;
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                    location.href = 'index.html';
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                        Accounts();
                    }
                    function getActiveUser() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));

                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(activeuser => {
                                    if (data.user_Id === activeuser.user_Id) {
                                        let connection = activeuser.user_Connection;
                                        var state = document.visibilityState;
                                        connection.forEach(connect => {
                                            if (connect.connectionId === data.user_Id) {
                                                if (state == 'hidden') {
                                                    connect.status = connect.status;
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                } else {
                                                    connect.status = new Date().getTime();
                                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                                }
                                            }
                                        });
                                        activeuser.user_Is_Online = false;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                });
                            });
                        }
                    }
                    getActiveUser();
                    function turnOffActiveStatus(user_Id) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            let connection = data.user_Connection;
                            connection.forEach(connect => {
                                if (connect.connectionId === user_Id) {
                                    connect.status = new Date().getTime();
                                }
                            });
                        });
                        LogInFormData.forEach(data => {
                            if (data.user_Id === user_Id) {
                                data.user_Is_Online = false;
                                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                            }
                        });
                    }
                }
            });
            if (ActiveUser_Account) {
                if (LogInFormData) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        ActiveUser_Account.forEach(data => {
                            if (user.user_Id === data.user_Id) {
                                function accountLogIN() {
                                    if (user.user_Id === account.accountId && user.user_ProfilePicture === account.accountImg && user.user_Firstname + ' ' + user.user_Surname === account.accountName) {
                                        posterImgSrc.src = user.user_ProfilePicture;
                                        VideoPosterName.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                        let usersprofile = document.querySelectorAll('.usersprofile');
                                        let userprofileminimizer = document.querySelectorAll('.userprofileminimizer');
                                        let usersuniversalnotificationcenter = document.querySelectorAll('.usersuniversalnotificationcenter');
                                        let usersharepopup = document.querySelectorAll('.usersharepopup');
                                        let user_Profile_Settings_Container = document.querySelectorAll('.user_Profile_Settings_Container');

                                        // function createFriendShareScript() {
                                        //     usersharepopupexit.forEach(exitbutton => {
                                        //         exitbutton.addEventListener('click', () => {
                                        //             let usershareloader = document.querySelectorAll('.usershareloader');
                                        //             usershareloader.forEach(loader => {
                                        //                 if (loader.id === user.user_Id) {
                                        //                     loader.classList.add('usershareloaderloading');
                                        //                     usersharepopupcolumn.forEach(column => {
                                        //                         if (column.id === user.user_Id) {
                                        //                             column.innerHTML = '';
                                        //                         }
                                        //                     });
                                        //                     setTimeout(() => {
                                        //                         loader.classList.remove('usershareloaderloading');
                                        //                         createFriendShareScript();
                                        //                     }, 2000);
                                        //                 }
                                        //             });
                                        //         });
                                        //     });
                                        //     usersharepopupcolumn.forEach(column => {
                                        //         if (column.id === user.user_Id) {
                                        //             column.innerHTML = '';
                                        //         }
                                        //     });
                                        //     usersharepopupcolumn.forEach(column => {
                                        //         if (column.id === user.user_Id) {
                                        //             myFriends.forEach(friend => {
                                        //                 if (friend.friendId_Receivers === user.user_Id) {
                                        //                     let sharetofriendsblock = document.createElement('div');
                                        //                     let sharehead = document.createElement('span');
                                        //                     let sharefriendimg = document.createElement('img');
                                        //                     let sharetail = document.createElement('div');
                                        //                     let sharefriendname = document.createElement('strong');
                                        //                     let shareactionbutton = document.createElement('button');
                                        //                     column.appendChild(sharetofriendsblock);
                                        //                     sharetofriendsblock.appendChild(sharehead);
                                        //                     sharetofriendsblock.appendChild(sharetail);
                                        //                     sharetofriendsblock.appendChild(shareactionbutton);
                                        //                     sharehead.appendChild(sharefriendimg);
                                        //                     sharetail.appendChild(sharefriendname);
                                        //                     shareactionbutton.id = friend.friendId_Connectors;
                                        //                     sharefriendname.textContent = friend.friendsName;
                                        //                     sharefriendimg.src = friend.friendsProfilePicture;
                                        //                     shareactionbutton.textContent = 'send';
                                        //                     sharetofriendsblock.classList.add('sharetofriendsblock');
                                        //                     sharehead.classList.add('sharehead');
                                        //                     sharetail.classList.add('sharetail');
                                        //                     shareactionbutton.classList.add('shareactionbutton');
                                        //                 } if (friend.friendId_Connectors === user.user_Id) {
                                        //                     let sharetofriendsblock = document.createElement('div');
                                        //                     let sharehead = document.createElement('span');
                                        //                     let sharefriendimg = document.createElement('img');
                                        //                     let sharetail = document.createElement('div');
                                        //                     let sharefriendname = document.createElement('strong');
                                        //                     let shareactionbutton = document.createElement('button');
                                        //                     column.appendChild(sharetofriendsblock);
                                        //                     sharetofriendsblock.appendChild(sharehead);
                                        //                     sharetofriendsblock.appendChild(sharetail);
                                        //                     sharetofriendsblock.appendChild(shareactionbutton);
                                        //                     sharehead.appendChild(sharefriendimg);
                                        //                     sharetail.appendChild(sharefriendname);
                                        //                     shareactionbutton.id = friend.friendId_Receivers;
                                        //                     sharefriendname.textContent = friend.myName;
                                        //                     sharefriendimg.src = friend.myProfilePicture;
                                        //                     shareactionbutton.textContent = 'send';
                                        //                     sharetofriendsblock.classList.add('sharetofriendsblock');
                                        //                     sharehead.classList.add('sharehead');
                                        //                     sharetail.classList.add('sharetail');
                                        //                     shareactionbutton.classList.add('shareactionbutton');
                                        //                 }
                                        //             })
                                        //         }
                                        //     })
                                        // }
                                        // createFriendShareScript();
                                        function setLocations() {
                                            function headerbtnsLocations() {
                                                document.querySelectorAll('.homepageheaderbtns').forEach(button => {
                                                    if (button.id == 'lavinstafeeds') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/public+feed`;
                                                    } if (button.id == 'recallsearchpath') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/search`;
                                                    } if (button.id == 'createmorepurpose') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/create`;
                                                    } if (button.id == 'lavinstaimages') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/lavinsta+images`;
                                                    } if (button.id == 'sidebtn') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/navigation`;
                                                    } if (button.id == 'hamburgermenubtn') {
                                                        button.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu`;
                                                    }
                                                });
                                            }
                                            headerbtnsLocations();
                                            function menutabsLocations() {
                                                document.querySelectorAll('.menutabs').forEach(link_Tab => {
                                                    if (link_Tab.id == 'themeswitching') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/theme+switch`;
                                                    } if (link_Tab.id == 'accountsinformation') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/account+Info`;
                                                    } if (link_Tab.id == 'privacy') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/privacy`;
                                                    } if (link_Tab.id == 'memoriespages') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/archieve`;
                                                    } if (link_Tab.id == 'report') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/report`;
                                                    } if (link_Tab.id == 'saved') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/saved`;
                                                    } if (link_Tab.id == 'mainsecuritytabs') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/security`;
                                                    } if (link_Tab.id == 'videoqualties') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/video+setting`;
                                                    } if (link_Tab.id == 'datasaving') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/data+saving`;
                                                    } if (link_Tab.id == 'recyclebin') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/recycle+bin`;
                                                    } if (link_Tab.id == 'openlogoutpage') {
                                                        link_Tab.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/menu/logout`;
                                                    }
                                                });
                                            }
                                            menutabsLocations();
                                            function floatLocations() {
                                                document.querySelectorAll('.items').forEach(item => {
                                                    if (item.id == 'home') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/home+page`;
                                                    } if (item.id == 'people') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/people`;
                                                    } if (item.id == 'chat') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/smart+chat`;
                                                    } if (item.id == 'notification') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/notification`;
                                                    } if (item.id == 'video') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/lavinsta+video`;
                                                    } if (item.id == 'profile') {
                                                        item.href = `#/user_Name=${user.user_Firstname}+${user.user_Surname}/profile`;
                                                    }
                                                });
                                            }
                                            floatLocations();
                                        }
                                        setLocations();

                                        function NotificationsOnly() {
                                            Notification.requestPermission().then(perm => {
                                                if (perm === 'granted') {
                                                    new Notification("Lavinsta", {
                                                        body: `hello ${user.user_Firstname + ' ' + user.user_Surname} explore more on Lavinsta`,
                                                        icon: 'lavinstaphotos/eagle.png',
                                                        image: user.user_ProfilePicture,
                                                    });
                                                }
                                            });
                                        }
                                        if (document.visibilityState == 'hidden') {
                                            NotificationsOnly();
                                        }
                                        // function getActiveAccount_Cookies() {

                                        //     function checkCookie() {
                                        //         deleteCookie('External_Details');
                                        //         var Cookie = getCookie('External_Details');
                                        //         if (Cookie != '') {
                                        //             setCookie('External_Details',user.user_Id,30);
                                        //         } else {
                                        //             Cookie = prompt('enter your name');
                                        //             if (Cookie != '' && Cookie != null) {
                                        //                 setCookie('External_Details',user.user_Id,30);
                                        //             }
                                        //         }
                                        //     }
                                        //     checkCookie();
                                        // }
                                        // getActiveAccount_Cookies();
                                        function appendNecessaryItems() {
                                            sessionStorage.setItem('activeuser', (user.user_Id));

                                            if (Array.isArray(JSON.parse(localStorage.getItem('myFriends')))) {
                                                myFriends = JSON.parse(localStorage.getItem('myFriends'));
                                                myFriends.forEach(friend => {
                                                    if (friend.friendId_Receivers === user.user_Id) {
                                                        friend.MyActiveStatus = new Date().getTime();
                                                        friend.IamActive = true;
                                                    } else {
                                                        friend.IamActive = false;
                                                    } if (friend.friendId_Connectors === user.user_Id) {
                                                        friend.friendsActiveStatus = new Date().getTime();
                                                        friend.FriendIsActive = true;
                                                    } else {
                                                        friend.FriendIsActive = false;
                                                    }
                                                });
                                                localStorage.setItem('myFriends', JSON.stringify(myFriends));
                                            };
                                            if (sessionStorage.getItem('activeuser') === user.user_Id) {
                                                user.user_Is_Online = true;
                                            } else {
                                                user.user_Is_Online = false;
                                            }
                                            usersharepopup.forEach(popup => {
                                                if (popup.id === user.user_Id) {
                                                    document.body.appendChild(popup);
                                                }
                                            });
                                            usersuniversalnotificationcenter.forEach(center => {
                                                if (center.id === user.user_Id) {
                                                    document.body.appendChild(center);
                                                }
                                            })

                                            user_Profile_Settings_Container.forEach(settingsbutton => {
                                                if (settingsbutton.id === user.user_Id) {
                                                    settingsbutton.style.display = 'flex'
                                                } else {
                                                    settingsbutton.remove();
                                                }
                                            });
                                            userprofileminimizer.forEach(button => {
                                                usersprofile.forEach(profile => {
                                                    button.addEventListener('click', () => {
                                                        if (profile.id === user.user_Id) {
                                                            if (button.id === profile.id) {
                                                                profilecontainer.classList.toggle('profilelarge');
                                                            }
                                                        }
                                                    })
                                                });
                                            });
                                        }
                                        appendNecessaryItems();
                                    }
                                }
                                accountLogIN();
                            }
                        });
                    });
                }
            }
        });
    }
}
function getActivePage() {
    const activepage = sessionStorage.getItem('activepage');
    if (activepage) {
        if (activepage == 'videopagebackground') {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.videopagebackground').style.display = 'flex';
        } else if (activepage == 'chattab') {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.chattab').style.display = 'flex';
            secondchatcontainers();
        } else if (activepage == 'notificationtab') {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.notificationtab').style.display = 'flex';
        } else if (activepage == 'profile') {
            document.querySelector('.profile').style.display = 'flex';
        } else if (activepage == 'lavinstaphotos') {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.photogallery').style.display = 'flex';
        } else if (activepage == 'homesearch') {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.navigatiofloatcontainer').style.display = 'none';
            document.querySelector('.main_Seach_Path').style.display = 'flex';
        } else if (activepage == 'hamburgermenupopup') {
            document.querySelector('.hamburgermenupopup').classList.add('hamburgermenupopupactive');
        } else if (activepage == 'lavinstafeeds') {
            document.querySelector('.publicfeedpage').style.display = 'grid';
        } else if (activepage == 'reelsmainpage') {
            document.querySelector('.reelsmainpage').style.display = 'grid';
        } else if (activepage == 'trending_Videos') {
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.querySelector('.gallery').style.display = 'flex';
            document.querySelector('.trending_Videos').style.display = 'grid';
            document.querySelector('#trendingvideos').classList.add('active');
        } else if (activepage == 'live_Videos') {
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.querySelector('.gallery').style.display = 'flex';
            document.querySelector('.live_Videos').style.display = 'grid';
            document.querySelector('.trending_Videos').style.display = 'none';
            document.querySelector('#livestreaming').classList.add('active');
            document.querySelector('#trendingvideos').classList.remove('active');
        } else if (activepage == 'timeline_Videos') {
            document.querySelector('.trending_Videos').style.display = 'none';
            document.querySelector('.timeline_Videos').style.display = 'grid';
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.querySelector('.gallery').style.display = 'flex';
            document.querySelector('#timelinevideos').classList.add('active');
            document.querySelector('#trendingvideos').classList.remove('active');
        } else if (activepage == 'saved_Videos') {
            document.querySelector('.saved_Videos').style.display = 'grid';
            document.querySelector('.trending_Videos').style.display = 'none';
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.querySelector('.gallery').style.display = 'flex';
            document.querySelector('#savedvideos').classList.add('active');
            document.querySelector('#trendingvideos').classList.remove('active');
        } else if (activepage == 'gallery') {
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.querySelector('.gallery').style.display = 'flex';
        }
    }
}
getActivePage();