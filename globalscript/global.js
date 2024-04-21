let LogInFormData = [];
let ActiveUser_Account = [];
let myLogsArray = [];
const mySavedLogs = JSON.parse(localStorage.getItem('myLogsArray'));

let myFriends = [];
let myChatMsg = [];
let myCommunities = [];
let Feeds_Data_Base = [];

let postReport = [];
let myLocation_Url;
let Admins_Notification = [];

const chatMessage = JSON.parse(localStorage.getItem('myChatMsg'));
const communities = JSON.parse(localStorage.getItem('myCommunities'));


//SVG ELEMENT GENIUS CREATION
function createDevTool() {
    document.querySelectorAll('.devtool').forEach(tool => {
        tool.remove();
    });
    let devtool = document.createElement('section');
    let textboxcontainer = document.createElement('div');
    document.body.appendChild(devtool);
    devtool.appendChild(textboxcontainer);
    let cmd = 'cmd> ';
    devtool.classList.add('devtool');
    devtool.classList.add('osTransformation');

    function initializeUser() {
        textboxcontainer.innerHTML = '';
        let username = document.createElement('p');
        textboxcontainer.appendChild(username);
        username.classList.add('devtoolusername');
        username.classList.add('active');
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(user => {
                if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(data => {
                        if (data.user_Id === user.user_Id) {
                            username.textContent = cmd + ':' + data.user_Firstname + ' ' + data.user_Surname;
                        }
                    });
                }
            });
        }
    }
    initializeUser();
    setTimeout(() => {
        createnewLine();
    }, 100);
    function createnewLine() {
        document.querySelectorAll('.devtoolusername').forEach(name => {
            name.classList.remove('active');
        });
        document.querySelectorAll('.devtextarea').forEach(area => {
            area.classList.remove('active');
        });
        let textarea = document.createElement('input');
        textboxcontainer.appendChild(textarea);
        textarea.value = cmd + ':';
        textarea.focus();
        textarea.classList.add('devtextarea');
        textarea.classList.add('active');

        textarea.addEventListener('keyup', () => {
            if (textarea.value == cmd || textarea.value == '') {
                textarea.remove();
                const newArr = document.querySelectorAll('.devtextarea');
                for (let i = 0; i < newArr.length; i++) {
                    newArr[i].focus();
                }
                if (newArr.length == 0) {
                    createnewLine();
                }
            }
        });
        devtool.addEventListener('click', () => {
            const newArr = document.querySelectorAll('.devtextarea');
            for (let i = 0; i < newArr.length; i++) {
                newArr[i].focus();
            }
        });
        textarea.addEventListener('click', () => {
            document.querySelectorAll('.devtextarea').forEach(areatext => {
                areatext.classList.remove('active');
            });
            textarea.classList.add('active');
        });
    }
    document.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            document.querySelectorAll('.devtextarea').forEach(areatext => {
                if (areatext.focus) {
                    generate_response(areatext);
                } else {

                }
            });
        }
    });
    const devToolHelpList = [
        {
            command: 'console.clear();',
            data: 'remove history'
        }, {
            command: 'console.exit();',
            data: 'exit devTool'
        }, {
            command: 'people();',
            data: 'view people page'
        }, {
            command: 'smartchat();',
            data: 'view chats menu'
        }, {
            command: 'notification();',
            data: 'view notification page'
        }, {
            command: 'lavinstaImages();',
            data: 'open lavinsta images'
        }, {
            command: 'publicFeed();',
            data: 'open lavinsta feeds'
        }, {
            command: 'shortVideos();',
            data: 'view notification page'
        }, {
            command: 'lavinsta.search();',
            data: 'open lavinsta videos'
        }, {
            command: 'lavinstaVideos();',
            data: 'open lavinsta videos'
        }, {
            command: 'init> login',
            data: 'visit login page'
        }, {
            command: 'init> sign up',
            data: 'visit login page'
        }, {
            command: 'location.reload();',
            data: 'refresh page'
        }, {
            command: 'history.back();',
            data: 'visit previous page -1'
        }, {
            command: 'history.forward();',
            data: 'visit previous page +1'
        }, {
            command: 'exit.help();',
            data: 'exit help'
        }
    ]
    function createHelplist() {
        devToolHelpList.forEach(help => {
            let init = `<p>${cmd + ':' + 'initializing...'}</p>`;
            let mainhelp = `<p>${cmd + ':' + help.command}</p><i>${help.data}</i>`;
            textboxcontainer.innerHTML = init;
            setTimeout(() => {
                init = `<p>${'commands and functions'}</p>`;
                textboxcontainer.innerHTML = init;
            }, 2000);
            setTimeout(() => {
                textboxcontainer.innerHTML += mainhelp;
                createnewLine();
            }, 3000);
        });
    }
    function generate_response(devtext) {
        if (devtext.classList.contains('active')) {
            createnewLine();
            if (devtext.value == `${cmd + ':'}people();`) {
                document.querySelector('.people').style.display = 'flex';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}smartchat();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'flex';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}notification();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'flex';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}profile();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'flex';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinstaVideos();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'flex';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}publicFeed();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'flex';
            } if (devtext.value == `${cmd + ':'}shortVideos();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'grid';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinstaImages();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'flex';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinsta.search();`) {
                document.querySelector('.searchpath').style.display = 'flex';
            } if (devtext.value == `${cmd + ':'}help();`) {
                createHelplist();
            } if (devtext.value == `${cmd + ':'}console.clear();`) {
                document.querySelectorAll('.devtextarea').forEach(area => {
                    area.remove();
                });
                createnewLine();
            } if (devtext.value == `${cmd + ':'}console.exit();`) {
                textboxcontainer.style.alignContent = 'center';
                textboxcontainer.style.alignItems = 'center';
                textboxcontainer.style.justifyItems = 'center';
                textboxcontainer.innerHTML = `<strong>Bye Bye...</strong>`;
                setTimeout(() => {
                    devtool.remove();
                }, 2000);
            } if (devtext.value == `${cmd + ':'}init> login` || devtext.value == `${cmd + ':'}init> signup`) {
                location.href = 'login.html';
            } if (devtext.value == `${cmd + ':'}location.reload();`) {
                location.reload();
            } if (devtext.value == `${cmd + ':'}history.back();`) {
                history.back();
            } if (devtext.value == `${cmd + ':'}history.foward();`) {
                history.go(-1);
            } if (devtext.value == `${cmd + ':'}exit.help();`) {
                initializeUser();
                createnewLine();
            }
        }
    }
    setTimeout(() => {
        devtool.classList.remove('osTransformation');
    }, 1000 * 1);
}
// createDevTool();
// document.addEventListener('keypress',(e)=> {
//     console.log(e.currentTarget);
//     if (e.key == 'D' + 'E' + 'V' + 'M' + 'O' + 'D' + 'E') {
//         createDevTool();
//     }
// });

function ThemeSettings(user_Id, user_Mode) {
    var root = document.querySelector(':root')
    //background variable declaration
    let lightcolor;
    let whitecolor;
    let darkcolor;
    defaultMode.addEventListener('click', () => {
        lightcolor = '89%';
        whitecolor = '100%';
        darkcolor = '15%';
        document.querySelector('.themeactive-1').classList.add('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        setTimeout(() => {
            restoreTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'defaultTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'defaultTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    darkMode.addEventListener('click', () => {
        lightcolor = '15%';
        whitecolor = '5%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.add('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        setTimeout(() => {
            changeIconsTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'darkTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'darkTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    LightOffMode.addEventListener('click', () => {
        lightcolor = '20%';
        whitecolor = '15%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.add('active');
        ChangeBackGround();
        setTimeout(() => {
            changeIconsTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'lightOffTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'lightOffTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    if (user_Mode == 'defaultTheme') {
        lightcolor = '89%';
        whitecolor = '100%';
        darkcolor = '15%';
        document.querySelector('.themeactive-1').classList.add('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        restoreTheme();
    } if (user_Mode == 'darkTheme') {
        lightcolor = '15%';
        whitecolor = '5%';
        darkcolor = '100%';
        // lightcolor = '30%';
        // whitecolor = '35%';
        // darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.add('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        changeIconsTheme();
    } if (user_Mode == 'lightOffTheme') {
        lightcolor = '5%';
        whitecolor = '15%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.add('active');
        ChangeBackGround();
        changeIconsTheme();
    }
    function ChangeBackGround() {
        root.style.setProperty('--color-light-verylight', lightcolor);
        root.style.setProperty('--color-white-verylight', whitecolor);
        root.style.setProperty('--dark-color-verylight', darkcolor);
    }
    function changeIconsTheme() {
        const likes111Icons = document.querySelectorAll('.likes111');
        const opencommentboxactivatedarkmode = document.querySelectorAll('.opencommentboxactivate');
        const sharegridlikedarkmore = document.querySelectorAll('.sharegridlike img');
        const commentreactimg = document.querySelectorAll('.commentreactimg');
        const replylikedarkmode = document.querySelectorAll('.replylike');
        const replygridphotodarkmode = document.querySelectorAll('.replygridphoto img');
        const newcommentsendimg = document.querySelectorAll('.newcommentinput img');
        const gridcommentdarkmode = document.querySelectorAll('.gridinput img');
        const userprofilelabel = document.querySelectorAll('.profilelabel img');
        const chatattachmentimg = document.querySelectorAll('.chatattachmentimg');
        const chatfloatitems = document.querySelectorAll('.chatfloat img');
        const userconnectgrid = document.querySelectorAll('.userconnectgrid span img');
        const usertopactivitytimeline = document.querySelectorAll('.usertopactivitytimeline img');
        const headerbtns = document.querySelectorAll('.headerbtns img');
        const admin_Tool_Grid_Img = document.querySelectorAll('.admin_Tool_Grid div img');
        const in_Visible_Img = document.querySelectorAll('.in_Visible_Img');
        const users_Popup_HeaderImg = document.querySelectorAll('.users_Popup_Header div img');

        users_Popup_HeaderImg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        in_Visible_Img.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        admin_Tool_Grid_Img.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        usertopactivitytimeline.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        headerbtns.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        userconnectgrid.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });

        chatattachmentimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        chatfloatitems.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        userprofilelabel.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        gridcommentdarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        newcommentsendimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        replygridphotodarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        replylikedarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons')
        });
        commentreactimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        sharegridlikedarkmore.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        opencommentboxactivatedarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        likes111Icons.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
    }
    function restoreTheme() {
        const likes111Icons = document.querySelectorAll('.likes111');
        const opencommentboxactivatedarkmode = document.querySelectorAll('.opencommentboxactivate');
        const sharegridlikedarkmore = document.querySelectorAll('.sharegridlike img');
        const commentreactimg = document.querySelectorAll('.commentreactimg');
        const replylikedarkmode = document.querySelectorAll('.replylike');
        const newcommentsendimg = document.querySelectorAll('.newcommentinput img');
        const gridcommentdarkmode = document.querySelectorAll('.gridinput img');
        const userprofilelabel = document.querySelectorAll('.profilelabel img');
        const chatattachmentimg = document.querySelectorAll('.chatattachmentimg');
        const chatfloatitems = document.querySelectorAll('.chatfloat img');
        const userconnectgrid = document.querySelectorAll('.userconnectgrid span img');
        const usertopactivitytimeline = document.querySelectorAll('.usertopactivitytimeline img');
        const headerbtns = document.querySelectorAll('.headerbtns img');
        const admin_Tool_Grid_Img = document.querySelectorAll('.admin_Tool_Grid div img');
        const in_Visible_Img = document.querySelectorAll('.in_Visible_Img');
        const users_Popup_HeaderImg = document.querySelectorAll('.users_Popup_Header div img');

        users_Popup_HeaderImg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        in_Visible_Img.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        admin_Tool_Grid_Img.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        usertopactivitytimeline.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        headerbtns.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        userconnectgrid.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        chatattachmentimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        chatfloatitems.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        userprofilelabel.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        gridcommentdarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons')
        });
        newcommentsendimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        replylikedarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons')
        });
        commentreactimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        sharegridlikedarkmore.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        opencommentboxactivatedarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        likes111Icons.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
    }
}
if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(user => {
        ThemeSettings(user.user_Id, user.user_Mode);
    });
}
const swipechanges = () => {
    // let touchStartX = 0;
    // let touchEndX = 0;
    // function checkDirection() {
    //     if (touchEndX < touchStartX) {
    //         document.querySelector('.float').classList.add('floatactive');
    //     } if (touchEndX > touchStartX) {
    //         document.querySelector('.float').classList.remove('floatactive');
    //     }
    // }
    // document.querySelector('main').addEventListener('touchmove',(e) => {
    //     touchStartX = e.changedTouches[0].screenX;
    //     checkDirection();
    // });
    // document.querySelector('main').addEventListener('touchend',(e) => {
    //     touchEndX = e.changedTouches[0].screenX;
    //     checkDirection();
    // });

    let mouseX, initialX = 0;
    let mouseY,initialY = 0;
    let isSwiped;
    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup"
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend"
        }
    }
    let deviceType = "";
    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            deviceType = "touch";
            return true;
        } catch (error) {
            deviceType = "mouse";
            return false;
        }
    }
    let rectLeft = document.querySelector('main').getBoundingClientRect().left;
    let rectTop = document.querySelector('main').getBoundingClientRect().top;

    const getXY = (e) => {
        mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
        mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
    };
    isTouchDevice();
    document.querySelector('main').addEventListener(events[deviceType].down,(event) => {
        isSwiped = true;
        getXY(event);
        initialX = mouseX;
        initialY = mouseY;
    });
    document.querySelector('main').addEventListener(events[deviceType].move,(event) => {
        if (!isTouchDevice()) {
            event.preventDefault();
        } if (isSwiped) {
            getXY(event);
            let diffX = mouseX - initialX;
            let diffY = mouseY - initialY;
            function displayItemsToNone() {
                // document.querySelector('.profile').style.display = 'flex';
                document.querySelector('.float').classList.remove('floatactive');
                document.querySelector('.main_Master_Center').classList.remove('main_Master_Centeractive');
            }
            function displayItemsToFlex() {
                // document.querySelector('.profile').style.display = 'flex';
                document.querySelector('.float').classList.add('floatactive');
                document.querySelector('.main_Master_Center').classList.add('main_Master_Centeractive');
            }
            if (Math.abs(diffY) > Math.abs(diffX)) {
                diffY > 0 ? displayItemsToNone() : displayItemsToNone();
            } else {
                diffX > 0 ? displayItemsToNone() : displayItemsToFlex();
            }
        }
    });
    document.querySelector('main').addEventListener(events[deviceType].up, () => {
        isSwiped = false;
    });
    document.querySelector('main').addEventListener("mouseleave", () => {
        isSwiped = false;
    });
    window.onload = () => {
        isSwiped = false;
    }
}
swipechanges();