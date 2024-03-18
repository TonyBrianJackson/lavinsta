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

// DATE FUNCTION
const day = new Date();
const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

//TIME FUNCTION
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
        lightcolor = '30%';
        whitecolor = '35%';
        darkcolor = '100%';
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