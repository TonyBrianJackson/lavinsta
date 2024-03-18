const firstName = document.getElementById('first-name');
const surName = document.getElementById('sur-name');
const email = document.getElementById('sign-upemail');
const sign_upphone = document.getElementById('sign-upphone');
const createpassword = document.getElementById('makepassword');
const confirmpassword = document.getElementById('confirmpassword');
const verify = document.querySelector('#verify');

const login_upphone = document.getElementById('login_upphone');
let Adminmode = false;
let Admins_Key;
let CEO_Mode;
let lavinsta_Email;

document.querySelector('.Verify_Admins_Key_Button').addEventListener('click', () => {
    Admins_Key = 'CyBern3tTjSnL4viNsT4rCE04dMinNC0d3';
    CEO_Mode = 'CyBern3tTjSnL4viNsT4rCE04dMinNC30C0d3';

    if (document.querySelector('#AdminsKeyVerificationBox_Key_N0ts3t').value === Admins_Key) {
        Adminmode = true;
        document.querySelector('.signupasanadmin').style.display = 'none';
        document.querySelector('.signuppage').style.display = 'flex';
    } else {
        Adminmode = false;
    } if (document.querySelector('#CEOsKeyVerificationBox_key_N0ts3t').value === CEO_Mode) {
        CEO_Mode = true;
    } else {
        CEO_Mode = false;
    }
});
function AllOtherThingsAboutPassword() {
    document.querySelector('.KeY_AdM1Ns').addEventListener('dblclick', () => {
        document.querySelector('.signupasanadmin').style.display = 'flex';
        document.querySelector('.signuppage').style.display = 'none';
    });
    document.querySelector('#exItAMINsKey_Password_Page').addEventListener('click', () => {
        document.querySelector('.signupasanadmin').style.display = 'none';
        document.querySelector('.signuppage').style.display = 'flex';
    });
    document.querySelector('.use_Phone_Number').addEventListener('click', () => {
        document.querySelector('.email_textBox').classList.toggle('email_textBoxactive');
        document.querySelector('.Phone_textBox').classList.toggle('Phone_textBoxactive');
    });

    document.querySelector('.use_user_Phone').addEventListener('click', () => {
        document.querySelector('.login_email').classList.toggle('email_textBoxactive');
        document.querySelector('.login_phone').classList.toggle('Phone_textBoxactive');
    });
    document.querySelector('.use_Phone_Reset').addEventListener('click', () => {
        document.querySelector('.user_Email_Reset').classList.toggle('email_textBoxactive');
        document.querySelector('.user_Phone_Reset').classList.toggle('Phone_textBoxactive');
    });
    document.querySelector('.recent_Logs_call').addEventListener('click', () => {
        document.querySelectorAll('.pages').forEach(page => {
            if (page.classList.contains('holdallpage')) {
                page.style.display = 'flex';
            } else {
                page.style.display = 'none';
            }
        });
    });
    document.querySelector('.create_Pass_Visible').addEventListener('click', () => {
        let indicator = document.querySelector('.create_Pass_Visible small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('makepassword').type = 'text';
            document.getElementById('makepassword').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('makepassword').type = 'password';
            document.getElementById('makepassword').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.confirm_Pass_Visible').addEventListener('click', () => {
        let indicator = document.querySelector('.confirm_Pass_Visible small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('confirmpassword').type = 'text';
            document.getElementById('confirmpassword').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('confirmpassword').type = 'password';
            document.getElementById('confirmpassword').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.login_Password_Visible').addEventListener('click', () => {
        let indicator = document.querySelector('.login_Password_Visible small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('userspassword').type = 'text';
            document.getElementById('userspassword').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('userspassword').type = 'password';
            document.getElementById('userspassword').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.reset_Create_Password_Visible').addEventListener('click', () => {
        let indicator = document.querySelector('.reset_Create_Password_Visible small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('users_Reset_Password_Reset').type = 'text';
            document.getElementById('users_Reset_Password_Reset').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('users_Reset_Password_Reset').type = 'password';
            document.getElementById('users_Reset_Password_Reset').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.reset_Confirm_Password_Visible').addEventListener('click', () => {
        let indicator = document.querySelector('.reset_Confirm_Password_Visible small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('Users_Confirm_Password_Reset').type = 'text';
            document.getElementById('Users_Confirm_Password_Reset').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('Users_Confirm_Password_Reset').type = 'password';
            document.getElementById('Users_Confirm_Password_Reset').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.admin_keyVisibility').addEventListener('click', () => {
        let indicator = document.querySelector('.admin_keyVisibility small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('AdminsKeyVerificationBox_Key_N0ts3t').type = 'text';
            document.getElementById('AdminsKeyVerificationBox_Key_N0ts3t').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('AdminsKeyVerificationBox_Key_N0ts3t').type = 'password';
            document.getElementById('AdminsKeyVerificationBox_Key_N0ts3t').focus();
            indicator.textContent = 'SP';
        }
    });
    document.querySelector('.CEO_keyVisibility').addEventListener('click', () => {
        let indicator = document.querySelector('.CEO_keyVisibility small');
        if (indicator.classList.contains('visible')) {
            indicator.classList.add('hidden');
            indicator.classList.remove('visible');
            document.getElementById('CEOsKeyVerificationBox_key_N0ts3t').type = 'text';
            document.getElementById('CEOsKeyVerificationBox_key_N0ts3t').focus();
            indicator.textContent = 'HP';
        } else {
            indicator.classList.remove('hidden');
            indicator.classList.add('visible');
            document.getElementById('CEOsKeyVerificationBox_key_N0ts3t').type = 'password';
            document.getElementById('CEOsKeyVerificationBox_key_N0ts3t').focus();
            indicator.textContent = 'SP';
        }
    });
}
AllOtherThingsAboutPassword();
const savedFormData = JSON.parse(localStorage.getItem('LogInFormData'));
if (Array.isArray(savedFormData)) {
    LogInFormData = savedFormData;
    createAccounts();
    document.querySelector('.recent_Logs_call').style.display = 'flex';
} else {
    LogInFormData = [];
    document.querySelector('.recent_Logs_call').style.display = 'none';
}

const genderSex = document.querySelector('.genderSex');



const DateOfBirtConsole_Day = document.querySelector('.DateOfBirtConsole_Day');
const DateOfBirtConsole_Month = document.querySelector('.DateOfBirtConsole_Month');
const DateOfBirtConsole_Year = document.querySelector('.DateOfBirtConsole_Year');

const newday = new Date();
const newmonth = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const newtrackingDate = newday.getDate() + ' ' + newmonth[newday.getMonth()] + ' ' + newday.getFullYear();

// document.querySelectorAll('input').forEach(input => {
//     input.autocomplete = 'off';
// });
// import { writeFile } from 'fs';
// import usersdatabase  from '../database/users.json' assert {type: 'json'};
// console.log(usersdatabase);
function pushformdata() {
    const UserId = '' + new Date().getTime();
    const lavinstaId = UserId + UserId;
    LogInFormData.push({
        //general data
        user_Firstname: firstName.value,
        user_Surname: surName.value,
        user_Email: email.value,
        user_Createpaswword: createpassword.value,
        user_Confirmpassword: confirmpassword.value,
        user_Dateofbirth: DateOfBirtConsole_Day.textContent + ' ' + DateOfBirtConsole_Month.textContent + ' ' + DateOfBirtConsole_Year.textContent,
        user_ProfilePicture: document.querySelector('#Male_Or_Female').src,
        user_CoverPhoto: document.querySelector('#Male_Or_Female').src,
        user_ProfilePicture_Filter: 'default',
        user_CoverPhoto_Filter: 'default',
        user_Id: UserId,
        lavinsta_Id: lavinstaId,
        lavinsta_Email: lavinsta_Email,
        user_Phone: '',
        user_Bio: '',
        user_Location: '',
        user_Mode: 'defaultTheme',
        user_Play: 'default',
        user_Is_Online: false,
        user_Is_Ghost: false,
        user_Is_CEO: CEO_Mode,
        user_Is_Admin: Adminmode,
        user_Is_Spy: false,
        user_Is_Professional: false,
        user_TaskBar_Mode: false,
        user_Gender: genderSex.textContent,
        user_verificationKey: verify.value,
        date_Created: newtrackingDate,
        time_Created: new Date().getTime(),
        user_NotificationView: true,
        user_ChatView: true,
        user_shortcountView: true,
        user_photocountView: true,
        user_feedcountView: true,
        user_Counts: {
            my_FeedsCount: 0,
            my_PhotoCount: 0,
            my_ShortCount: 0,
        },
        user_Recent_Search: [],
        user_Recent_Video_Search: [],
        user_Ids: [],
        user_Stories: [],
        user_MessageRequest: [],
        user_ConnectRequest: [],
        user_SentRequest: [],
        user_Connection: [],
        user_Notifications: [],
        user_Followers: [],
        user_Archieve: [],
        user_Saved: [],
        user_Trash: [],
        user_Story_Trash: [],
        //counts
        my_FeedsCount: 0,
        my_PhotoCount: 0,
        my_ShortCount: 0,
        my_Home_FeedsCount: 0,
    });
    // const finished = (error) => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }
    // };
    // writeFile(usersdatabase, JSON.stringify(LogInFormData, null, 2), finished);
    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
}

function createAccounts() {
    const holdalllistcolumn = document.querySelector('#holdalllistcolumn');
    LogInFormData.forEach(data => {
        let accountbrief = document.createElement('div');
        let leftsectionofaccountbrief = document.createElement('div');
        let rightsectionofaccountbrief = document.createElement('div');
        let briefaccountsname = document.createElement('span');
        let accountremoveconnectgrid = document.createElement('div');
        let accountloginbtn = document.createElement('span');
        let accountremovebtn = document.createElement('span');
        let accountbriefsimg = document.createElement('img');
        accountremoveconnectgrid.appendChild(accountloginbtn);
        accountremoveconnectgrid.appendChild(accountremovebtn);
        holdalllistcolumn.appendChild(accountbrief);
        accountbrief.appendChild(leftsectionofaccountbrief);
        leftsectionofaccountbrief.appendChild(accountbriefsimg);
        accountbrief.appendChild(rightsectionofaccountbrief);
        rightsectionofaccountbrief.appendChild(briefaccountsname);
        rightsectionofaccountbrief.appendChild(accountremoveconnectgrid);
        briefaccountsname.textContent = data.user_Firstname + ' ' + data.user_Surname;
        accountbriefsimg.src = data.user_ProfilePicture
        accountloginbtn.textContent = 'login';
        accountremovebtn.textContent = 'remove';
        accountloginbtn.id = data.user_Id;
        accountremovebtn.id = data.id;
        accountloginbtn.classList.add('accountloginbtn');
        accountremovebtn.classList.add('accountloginbtn');
        accountremoveconnectgrid.classList.add('accountremoveconnectgrid');
        briefaccountsname.classList.add('briefaccountsname');
        accountbrief.classList.add('accountbrief');
        leftsectionofaccountbrief.classList.add('leftsectionofaccountbrief');
        rightsectionofaccountbrief.classList.add('rightsectionofaccountbrief');
        function filter_Image() {
            if (data.profile_filter == 'default') {
                accountbriefsimg.classList.add('--color-default');
            } else if (data.profile_filter == 'gray') {
                accountbriefsimg.classList.add('--color-gray');
            } else if (data.profile_filter == 'contrast') {
                accountbriefsimg.classList.add('--color-contrast');
            } else if (data.profile_filter == 'bright') {
                accountbriefsimg.classList.add('--color-bright');
            } else if (data.profile_filter == 'blur') {
                accountbriefsimg.classList.add('--color-blur');
            } else if (data.profile_filter == 'invert') {
                accountbriefsimg.classList.add('--color-invert');
            } else if (data.profile_filter == 'sepia') {
                accountbriefsimg.classList.add('--color-sepia');
            } else if (data.profile_filter == 'hue-rotate') {
                accountbriefsimg.classList.add('--color-hue-rotate');
            } else if (data.profile_filter == 'opacity') {
                accountbriefsimg.classList.add('--color-opacity');
            } else if (data.profile_filter == 'satulate') {
                accountbriefsimg.classList.add('--color-satulate');
            }
        }
        filter_Image();
        accountloginbtn.addEventListener('click', (e) => {
            document.querySelector('.recentlogconsole').textContent = data.user_Firstname + ' ' + data.user_Surname;
            location.href = 'index.html';
            sessionStorage.setItem('activepage', 'home');
            function pushLogsArray() {
                myLogsArray.push({
                    accountId: data.user_Id,
                });
                localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
            }
            function filterLogs() {
                myLogsArray = myLogsArray.filter(log => {
                    if (log.accountId === e.target.id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                pushLogsArray();
            }
            function pushActiveAccount() {
                ActiveUser_Account = [];
                ActiveUser_Account.push({
                    user_Id: data.user_Id,
                    userMode: data.userMode
                });
                localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account))
            }
            pushActiveAccount();
            if (Array.isArray(mySavedLogs)) {
                myLogsArray = mySavedLogs;
                filterLogs();
            } else {
                myLogsArray = [];
                filterLogs();
            }
        });
    });
};
function getDateOfBirthValues() {
    let day_Option = document.querySelectorAll('.day_Option');
    let month_picker_Option = document.querySelectorAll('.month_picker_Option');
    function removeActiveDatePickerClasses() {
        day_Option.forEach(option => {
            option.classList.remove('active');
        });
    }
    function removeActiveMonthPickerClasses() {
        month_picker_Option.forEach(option => {
            option.classList.remove('active');
        });
    }
    day_Option.forEach(option => {
        option.addEventListener('click', () => {
            removeActiveDatePickerClasses();
            DateOfBirtConsole_Day.textContent = option.textContent;
            document.querySelector('.date_picker_container').style.display = 'none';
            option.classList.add('active');
        });
    });
    month_picker_Option.forEach(option => {
        option.addEventListener('click', () => {
            DateOfBirtConsole_Month.textContent = option.textContent;
            document.querySelector('.date_picker_container_month').style.display = 'none';
            removeActiveMonthPickerClasses();
            option.classList.add('active');
        });
    });
    DateOfBirtConsole_Day.addEventListener('click', () => {
        document.querySelector('.date_picker_container').style.display = 'flex';
    });
    document.querySelector('.Month_PickerCloseButton').addEventListener('click', () => {
        document.querySelector('.date_picker_container_month').style.display = 'none';
    });

    DateOfBirtConsole_Month.addEventListener('click', () => {
        document.querySelector('.date_picker_container_month').style.display = 'flex';
    });
    document.querySelector('.Date_PickerCloseButton').addEventListener('click', () => {
        document.querySelector('.date_picker_container').style.display = 'none';
    });
    document.querySelector('.done_with_Month_Picker').addEventListener('click', () => {
        document.querySelector('.date_picker_container_month').style.display = 'none';
    });
    document.querySelector('.done_with_Date_Picker').addEventListener('click', () => {
        document.querySelector('.date_picker_container').style.display = 'none';
    });
    function getYear() {
        function insetThisValue(actual_Year_Value) {
            DateOfBirtConsole_Year.textContent = actual_Year_Value.target.value;
        }
        document.querySelector('#DateOfBirt_Year').addEventListener('keyup', insetThisValue);
    }
    getYear();
}
getDateOfBirthValues();

const loginbtn2 = document.querySelector('.loginbtn2');
loginbtn2.addEventListener('click', () => {
    document.querySelector('.loginpage').style.display = 'flex';
    document.querySelector('.signuppage').style.display = 'none';
});

const signupbtn = document.querySelectorAll('.signupbtn');
signupbtn.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'signup') {
            document.querySelector('.signuppage').style.display = 'none';
        } else {
            document.querySelector('.signuppage').style.display = 'flex';
        }
        if (item.id != 'login') {
            document.querySelector('.loginpage').style.display = 'none';
        } else {
            document.querySelector('.loginpage').style.display = 'flex';
        }
    })
});
const toopendateofbirth = document.querySelector('#toopendateofbirth');
toopendateofbirth.addEventListener('click', () => {
    if (firstName.value && surName.value && email.value || firstName.value && surName.value && sign_upphone.value) {
        document.querySelector('.signuppage').style.display = 'none';
        document.querySelector('.signuppage1').style.display = 'flex';
        let URL = 'https://www.cybernet.com/lavinsta.auth';
        console.log(URL);
    } else {
        document.querySelector('.signuppage').style.display = 'flex';
        document.querySelector('.signuppage1').style.display = 'none';
    }
});

const genderpage = document.querySelector('#genderpage');
genderpage.addEventListener('click', () => {
    if (DateOfBirtConsole_Day.textContent != 'Day' && DateOfBirtConsole_Month.textContent != 'Month' && DateOfBirtConsole_Year.textContent != 'Year') {
        if (DateOfBirtConsole_Year.textContent.length === 4) {
            document.querySelector('.signuppage1').style.display = 'none';
            document.querySelector('.signuppage2').style.display = 'flex';
        }
    } else {
        document.querySelector('.signuppage1').style.display = 'flex';
        document.querySelector('.signuppage2').style.display = 'none';
    }
});
const passwordpage = document.querySelector('#passwordpage');
const gender = document.querySelectorAll('.gender');
function changeActiveClasses() {
    gender.forEach(element => {
        element.classList.remove('active');
    });
}
let verification_console = document.querySelector('.verification_console');
function getRandomCode() {
    var minNumber = 10000;
    var maxNumber = 99999;
    let randomcode = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    let new_user_Id_maile = document.querySelector('.new_user_Id_maile');
    let username = firstName.value.toLowerCase().trim().replace(' ','.') + surName.value.toLowerCase().trim().replace(' ','');
    
    lavinsta_Email = `${username}${randomcode}@lavinsta`;

    verification_console.textContent = randomcode;
    new_user_Id_maile.textContent = lavinsta_Email;
    alert(randomcode);
    function NotificationsOnly() {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                new Notification("Lavinsta", {
                    body: `your verification code is ${verification_console.textContent}`,
                    icon: 'lavinstaphotos/eagle.png',
                });
                new Notification("Lavinsta", {
                    body: `${lavinsta_Email} is your lavinsta mail address`,
                    icon: 'lavinstaphotos/eagle.png',
                });
            }
        });
    }
    NotificationsOnly();
}
document.querySelector('#deliver_Code').addEventListener('click', () => {
    getRandomCode();
});
gender.forEach(sex => {
    sex.addEventListener('click', () => {
        if (sex.id == 'male') {
            genderSex.textContent = 'male';
            document.querySelectorAll('.create_Account_Logo').forEach(logo => {
                logo.src = 'icons/male-user.png';
            });
            changeActiveClasses();
            sex.classList.add('active');
        } if (sex.id == 'female') {
            changeActiveClasses();
            sex.classList.add('active');
            genderSex.textContent = 'female';
            document.querySelectorAll('.create_Account_Logo').forEach(logo => {
                logo.src = 'icons/female user.png';
            });
        }
    })
})

passwordpage.addEventListener('click', () => {
    if (genderSex.textContent == '') {
        document.querySelector('.signuppage3').style.display = 'none';
        document.querySelector('.signuppage2').style.display = 'flex';
    } else {
        document.querySelector('.signuppage3').style.display = 'flex';
        document.querySelector('.signuppage2').style.display = 'none';
    }
});
const verificationpage = document.querySelector('#verificationpage');
verificationpage.addEventListener('click', () => {
    if (createpassword.value === confirmpassword.value && createpassword.value.length > 8) {
        function accountValidation() {
            LogInFormData.forEach(data => {
                if (data.user_Firstname === firstName.value && data.user_Surname === surName.value && data.user_Email === email.value && data.user_Createpaswword === createpassword.value) {
                    let loginconsole_Validiation = document.querySelector('.loginconsole_Validiation');
                    loginconsole_Validiation.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    loginconsole_Validiation.style.color = 'red';
                    alert(data.user_Firstname + ' ' + data.user_Surname + ' ' + 'already exist');
                    location.reload();
                }
            });
        }
        if (Array.isArray(savedFormData)) {
            LogInFormData = savedFormData;
            accountValidation();
        } else {
            LogInFormData = [];
        }
        document.querySelector('.signuppage4').style.display = 'flex';
        document.querySelector('.signuppage3').style.display = 'none';
    }
});
const welcomepage = document.querySelector('#welcomepage');
welcomepage.addEventListener('click', () => {
    if (verify.value) {
        if (verify.value === verification_console.textContent) {
            pushformdata();
            location.reload();
        }
    }
})
const nextbtn1 = document.querySelectorAll('.nextbtn1');
const loginbtn = document.querySelector('.loginbtn');
function logIn() {
    const usersemail = document.getElementById('usersemail');
    const userspassword = document.getElementById('userspassword');
    const loginconsole = document.querySelector('.loginconsole');
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    LogInFormData.forEach(data => {
        // data.user_Email === usersemail.value && data.user_Confirmpassword === userspassword.value && data.user_Phone === login_upphone.value
        if (data.user_Email !== usersemail.value && data.user_Confirmpassword !== userspassword.value && data.user_Phone !== login_upphone.value) {
            loginconsole.textContent = 'wrong details provide';
            loginconsole.style.color = 'red';
        } if (data.user_Email === usersemail.value && data.user_Confirmpassword === userspassword.value && data.user_Phone === login_upphone.value) {
            loginconsole.textContent = data.user_Firstname + ' ' + data.user_Surname;
            loginconsole.style.color = 'lightgreen';
            loginbtn.id = data.user_Id;
            function pushLogsArray() {
                myLogsArray.push({
                    accountName: data.user_Firstname + ' ' + data.user_Surname,
                    accountImg: data.user_ProfilePicture,
                    accountId: data.user_Id,
                    account_filter: data.user_ProfilePicture_Filter
                });
                localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
            }
            function filterLogs() {
                myLogsArray = myLogsArray.filter(log => {
                    if (log.accountId === loginbtn.id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                pushLogsArray();
            }
            function pushActiveAccount() {
                ActiveUser_Account = [];
                ActiveUser_Account.push({
                    user_Id: data.user_Id,
                });
                localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account))
            }
            pushActiveAccount();
            if (Array.isArray(mySavedLogs)) {
                myLogsArray = mySavedLogs;
                filterLogs();
            } else {
                myLogsArray = [];
                filterLogs();
            }
            sessionStorage.setItem('activepage', 'home');
            setTimeout(() => {
                location.href = 'index.html';
            }, 2000);
        }
    })
}
loginbtn.addEventListener('click', () => {
    logIn();
});

document.getElementById('first-name').focus();

const forget_Password = document.querySelector('#forget_Password');
const Open_LoggIn_Page = document.querySelector('#Open_LoggIn_Page');
const forgot_Password_Page = document.querySelector('.forgot_Password_Page');
const Open_Forgot_Password_Page = document.querySelector('#Open_Forgot_Password_Page');
const loginpage = document.querySelector('.loginpage');
forget_Password.addEventListener('click', () => {
    document.querySelector('.forgot_Password_Page').style.display = 'flex';
    document.querySelector('.loginpage').style.display = 'none';
});
Open_LoggIn_Page.addEventListener('click', () => {
    document.querySelector('.forgot_Password_Page').style.display = 'none';
    document.querySelector('.loginpage').style.display = 'flex';
});
Open_Forgot_Password_Page.addEventListener('click', () => {
    document.querySelector('.Verify_Password_Page').style.display = 'none';
    document.querySelector('.forgot_Password_Page').style.display = 'flex';
});
const usersemail_Reset = document.querySelector('#usersemail_Reset');
const usersphone_Reset = document.querySelector('#usersphone_Reset');
const Users_verification_Input = document.querySelector('#Users_verification_Input');

const users_Reset_Password_Reset = document.querySelector('#users_Reset_Password_Reset');
const Users_Confirm_Password_Reset = document.querySelector('#Users_Confirm_Password_Reset');

const get_Verification_Code_Button = document.querySelector('#get_Verification_Code_Button');
const verify_Acc_Button = document.querySelector('.verify_Acc_Button');
const Verify_Password_Button = document.querySelector('.Verify_Password_Button');
let reset_Console = document.querySelector('.reset_Console');
function getResetCode() {
    var minNumber = 10000;
    var maxNumber = 99999;
    reset_Console.textContent = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    alert(reset_Console.textContent);
}
function find_Acc_UId() {
    LogInFormData.forEach(user => {
        if (user.user_Email === usersemail_Reset.value || user.user_Phone === usersphone_Reset.value) {
            const users_Id_And_Logo = document.querySelectorAll('.users_Id_And_Logo');
            const users_Name_And_Page_Title = document.querySelectorAll('#users_Name_And_Page_Title');
            users_Id_And_Logo.forEach(logo => {
                logo.src = user.user_ProfilePicture;
            });
            users_Name_And_Page_Title.forEach(title => {
                title.textContent = user.user_Firstname + ' ' + user.user_Surname;
            });
        }
    });
}
function Verify_Account() {
    LogInFormData.forEach(user => {
        if (user.user_Email === usersemail_Reset.value || user.user_Phone === usersphone_Reset.value) {
            if (Users_verification_Input.value) {
                if (Users_verification_Input.value === reset_Console.textContent) {
                    user.user_verificationKey = Users_verification_Input.value;
                    document.querySelector('.forgot_Password_Page').style.display = 'none';
                    document.querySelector('.Verify_Password_Page').style.display = 'flex';
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                }
            }
        }
    });
}
function Reset_Password() {
    LogInFormData.forEach(user => {
        if (user.user_Email === usersemail_Reset.value || user.user_Phone === usersphone_Reset.value) {
            if (users_Reset_Password_Reset.value && Users_Confirm_Password_Reset.value) {
                if (users_Reset_Password_Reset.value.length > 8 && Users_Confirm_Password_Reset.value.length > 8) {
                    if (users_Reset_Password_Reset.value === Users_Confirm_Password_Reset.value) {
                        user.user_Createpaswword = users_Reset_Password_Reset.value;
                        user.user_Confirmpassword = Users_Confirm_Password_Reset.value;
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        Verify_Password_Button.id = user.user_Id;
                        document.querySelector('.Verify_Password_Console').textContent = Users_Confirm_Password_Reset.value;
                        document.querySelector('.Verify_Password_Console').style = 'color: lightgreen;';
                        function pushLogsArray() {
                            myLogsArray.push({
                                accountId: user.user_Id,
                            });
                            localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                        }
                        function filterLogs() {
                            myLogsArray = myLogsArray.filter(log => {
                                if (log.accountId === Verify_Password_Button.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            localStorage.setItem('myLogsArray', JSON.stringify(myLogsArray));
                            pushLogsArray();
                        }
                        function pushActiveAccount() {
                            ActiveUser_Account = [];
                            ActiveUser_Account.push({
                                user_Id: user.user_Id,
                                userMode: data.userMode
                            });
                            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account))
                        }
                        pushActiveAccount();
                        if (Array.isArray(mySavedLogs)) {
                            myLogsArray = mySavedLogs;
                            filterLogs();
                        } else {
                            myLogsArray = [];
                            filterLogs();
                        }
                        setTimeout(() => {
                            location.href = 'index.html';
                            sessionStorage.setItem('activepage', 'home');
                        }, 3000);
                    } else if (users_Reset_Password_Reset.value && Users_Confirm_Password_Reset.value === user.user_Createpaswword && user.user_Confirmpassword) {
                        document.querySelector('.Verify_Password_Console').textContent = 'cant use old password!';
                        document.querySelector('.Verify_Password_Console').style = 'color: red;';
                    } else if (users_Reset_Password_Reset.value !== Users_Confirm_Password_Reset.value) {
                        document.querySelector('.Verify_Password_Console').textContent = 'passwords doesnt match!';
                        document.querySelector('.Verify_Password_Console').style = 'color: red;';
                    }
                } else {
                    document.querySelector('.Verify_Password_Console').textContent = 'weak password!';
                    document.querySelector('.Verify_Password_Console').style = 'color: red;';
                }
            }
        }
    });
}
get_Verification_Code_Button.addEventListener('click', () => {
    if (usersemail_Reset.value || usersphone_Reset.value) {
        find_Acc_UId();
        getResetCode();
    }
});
verify_Acc_Button.addEventListener('click', () => {
    Verify_Account();
});
Verify_Password_Button.addEventListener('click', () => {
    Reset_Password();
});
document.querySelector('.exit_Shortcut_LogIn').addEventListener('click', () => {
    document.querySelector('.pages.holdallpage').style.display = 'none';
    loginpage.style.display = 'flex';
})