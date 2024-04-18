const AdminNotification = JSON.parse(localStorage.getItem('Admins_Notification'));
if (Array.isArray(AdminNotification)) {
    Admins_Notification = AdminNotification;
    create_Admins_Notification();
} else {
    Admins_Notification = [];
}

function CreateAdmins_Rule() {
    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        createAdminsUsers_List();
    } else {
        LogInFormData = [];
    }
}
CreateAdmins_Rule();
function createAdminsUsers_List() {
    document.querySelectorAll('.users_Popup_Column').forEach(column => {
        column.innerHTML = '';
        if (LogInFormData) {
            LogInFormData.forEach(data => {
                if (data.user_Is_Admin === false) {
                    let user = document.createElement('div');
                    let user_Top_Visible_Part = document.createElement('div');
                    let user_Name_And_Img = document.createElement('div');
                    let user_Name_And_Position = document.createElement('span')
                    let user_Head = document.createElement('div');
                    let user_Head_Img = document.createElement('img');
                    let user_Name = document.createElement('strong');
                    let user_Position = document.createElement('i');
                    let user_SeeMore_Attr = document.createElement('span');
                    let user_Bottom_Invisible_Part = document.createElement('div');
                    column.appendChild(user);
                    user.appendChild(user_Top_Visible_Part);
                    user.appendChild(user_Bottom_Invisible_Part);
                    user_Top_Visible_Part.appendChild(user_Name_And_Img);
                    user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                    user_Name_And_Img.appendChild(user_Head);
                    user_Name_And_Img.appendChild(user_Name_And_Position);
                    user_Name_And_Position.appendChild(user_Name);
                    user_Name_And_Position.appendChild(user_Position);
                    user_Head.appendChild(user_Head_Img);
                    user_SeeMore_Attr.textContent = 'More Info';
                    if (data.user_Is_Admin === true) {
                        user_Position.textContent = 'admin';
                    } else {
                        user_Position.textContent = 'user';
                    }
                    user_Head_Img.src = data.user_ProfilePicture;
                    user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                    user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');
                    function create_UserPassWord_Field() {
                        let spaces_Grid = document.createElement('div');
                        let password_Space = document.createElement('div');
                        let email_Space = document.createElement('div');
                        let phone_Space = document.createElement('div');
                        let dateOFBirth_Space = document.createElement('div');
                        let location_Space = document.createElement('div');
                        let bio_Space = document.createElement('div');
                        let password_Input = document.createElement('input');
                        let email_Input = document.createElement('input');
                        let phone_Space_Input = document.createElement('input');
                        let location_Input = document.createElement('input');
                        let dateOfBirth_Input = document.createElement('input');
                        let bio_Input = document.createElement('textarea');
                        let passWord_Visibility = document.createElement('span');
                        let in_Visible_Img = document.createElement('img');
                        let dateOfIssue_Space = document.createElement('div');
                        let dateOfIssue_Input = document.createElement('input');
                        passWord_Visibility.appendChild(in_Visible_Img);
                        user_Bottom_Invisible_Part.appendChild(spaces_Grid);
                        spaces_Grid.appendChild(password_Space);
                        spaces_Grid.appendChild(email_Space);
                        spaces_Grid.appendChild(phone_Space);
                        spaces_Grid.appendChild(dateOFBirth_Space);
                        spaces_Grid.appendChild(dateOfIssue_Space);
                        spaces_Grid.appendChild(location_Space);
                        spaces_Grid.appendChild(bio_Space);

                        password_Space.appendChild(password_Input);
                        password_Space.appendChild(passWord_Visibility);
                        email_Space.appendChild(email_Input);
                        phone_Space.appendChild(phone_Space_Input);
                        dateOFBirth_Space.appendChild(dateOfBirth_Input);
                        dateOfIssue_Space.appendChild(dateOfIssue_Input);
                        location_Space.appendChild(location_Input);
                        bio_Space.appendChild(bio_Input);
                        password_Input.value = data.user_Confirmpassword;
                        dateOfBirth_Input.value = data.user_Dateofbirth;

                        if (data.user_Bio) {
                            bio_Input.value = data.user_Bio;
                        } else {
                            bio_Input.placeholder = 'User Bio';
                        } if (data.user_Phone) {
                            phone_Space_Input.value = data.user_Phone;
                        } else {
                            phone_Space_Input.placeholder = 'User Phone';
                        } if (data.user_Location) {
                            location_Input.value = data.user_Location;
                        } else {
                            location_Input.placeholder = 'Location';
                        } if (data.lavinsta_Email) {
                            email_Input.value = data.lavinsta_Email;
                        } else {
                            email_Input.placeholder = 'lavinsta_Email';
                        } if (data.date_Created) {
                            dateOfIssue_Input.value = `DOI ${data.date_Created}`;
                        } else {
                            dateOfIssue_Input.placeholder = 'Date Created';
                        }
                        password_Input.type = 'password';
                        email_Input.type = 'email';
                        phone_Space_Input.type = 'tel';
                        spaces_Grid.classList.add('spaces_Grid');
                        in_Visible_Img.style.display = 'block';
                        in_Visible_Img.src = 'newicons/hide.png';
                        in_Visible_Img.classList.add('in_Visible_Img');
                        passWord_Visibility.classList.add('In_Visible');
                        passWord_Visibility.addEventListener('click', () => {
                            if (passWord_Visibility.classList.contains('Visible')) {
                                passWord_Visibility.classList.add('In_Visible');
                                passWord_Visibility.classList.remove('Visible');
                                password_Input.type = 'password';
                            } else {
                                passWord_Visibility.classList.remove('In_Visible');
                                passWord_Visibility.classList.add('Visible');
                                password_Input.type = 'text';
                            }
                        });
                    }
                    create_UserPassWord_Field();
                    function create_Admin_Tools() {
                        let admin_Tool_Grid = document.createElement('div');
                        let make_Admin = document.createElement('div');
                        let log_In = document.createElement('div');
                        let delete_User = document.createElement('div');
                        let make_Admin_Img = document.createElement('img');
                        let log_In_Img = document.createElement('img');
                        let delete_User_Img = document.createElement('img');
                        user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                        admin_Tool_Grid.appendChild(make_Admin);
                        admin_Tool_Grid.appendChild(log_In);
                        admin_Tool_Grid.appendChild(delete_User);
                        make_Admin.appendChild(make_Admin_Img);
                        log_In.appendChild(log_In_Img);
                        delete_User.appendChild(delete_User_Img);
                        make_Admin_Img.src = 'icons/verified.png';
                        log_In_Img.src = 'icons/account info.png';
                        delete_User_Img.src = 'newicons/delete.png';
                        make_Admin.classList.add('headerbtns');
                        log_In.classList.add('headerbtns');
                        delete_User.classList.add('headerbtns');
                        admin_Tool_Grid.classList.add('admin_Tool_Grid');
                        function Admin_request() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(user => {
                                    if (user.user_Is_Admin == 'Assist_Admin') {
                                        const id = '' + new Date().getTime();
                                        Admins_Notification.push({
                                            id: id,
                                            type: 'is_Admin_request',
                                            admin_Id: user.user_Id,
                                            new_Request_Id: data.user_Id,
                                        });
                                        localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                                    } if (user.user_Is_Admin === true || user.user_Is_CEO === true) {
                                        if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                            LogInFormData.forEach(userData => {
                                                if (userData.user_Id === data.user_Id) {
                                                    userData.user_Is_Admin = 'Assist_Admin';
                                                }
                                            });
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        }
                                    }
                                });
                            }
                        }
                        make_Admin.addEventListener('click', () => {
                            Admin_request();
                            create_Admins_Notification();
                        });
                        log_In.addEventListener('click', () => {
                            document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                                if (profile_Popup.id === data.user_Id) {
                                    profile_Popup.style.display = 'flex';
                                } else {
                                    profile_Popup.style.display = 'none';
                                }
                            });
                        });
                        delete_User.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === data.user_Id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                        });
                    }
                    create_Admin_Tools();
                    function user_Deleting() {
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
                        confirmation_popup.id = data.user_Id;
                        confirmationtrue.id = data.user_Id;
                        confirmationtrue.addEventListener('click', () => {
                            LogInFormData = LogInFormData.filter(user => {
                                if (user.user_Id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            createAdminsUsers_List();
                        });
                    }
                    user_Deleting();
                    user_SeeMore_Attr.addEventListener('click', () => {
                        user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                    });
                    user.classList.add('user');
                    user.id = data.user_Id;
                }
            });
        }
    });
    document.querySelectorAll('.users_Popup_Column_Admins').forEach(column => {
        column.innerHTML = '';
        if (LogInFormData) {
            LogInFormData.forEach(data => {
                if (data.user_Is_Admin == 'Assist_Admin') {
                    let user = document.createElement('div');
                    let user_Top_Visible_Part = document.createElement('div');
                    let user_Name_And_Img = document.createElement('div');
                    let user_Name_And_Position = document.createElement('span')
                    let user_Head = document.createElement('div');
                    let user_Head_Img = document.createElement('img');
                    let user_Name = document.createElement('strong');
                    let user_Position = document.createElement('i');
                    let user_SeeMore_Attr = document.createElement('span');
                    let user_Bottom_Invisible_Part = document.createElement('div');
                    column.appendChild(user);
                    user.appendChild(user_Top_Visible_Part);
                    user.appendChild(user_Bottom_Invisible_Part);
                    user_Top_Visible_Part.appendChild(user_Name_And_Img);
                    user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                    user_Name_And_Img.appendChild(user_Head);
                    user_Name_And_Img.appendChild(user_Name_And_Position);
                    user_Name_And_Position.appendChild(user_Name);
                    user_Name_And_Position.appendChild(user_Position);
                    user_Head.appendChild(user_Head_Img);
                    user_SeeMore_Attr.textContent = 'More Info';
                    if (data.user_Is_Admin == 'Assist Admin') {
                        user_Position.textContent = 'admin';
                    } else {
                        user_Position.textContent = 'Assist Admin';
                    }
                    user_Head_Img.src = data.user_ProfilePicture;
                    user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                    user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');
                    function create_UserPassWord_Field() {
                        let spaces_Grid = document.createElement('div');
                        let password_Space = document.createElement('div');
                        let email_Space = document.createElement('div');
                        let phone_Space = document.createElement('div');
                        let dateOFBirth_Space = document.createElement('div');
                        let location_Space = document.createElement('div');
                        let bio_Space = document.createElement('div');
                        let password_Input = document.createElement('input');
                        let email_Input = document.createElement('input');
                        let phone_Space_Input = document.createElement('input');
                        let location_Input = document.createElement('input');
                        let dateOfBirth_Input = document.createElement('input');
                        let bio_Input = document.createElement('textarea');
                        let passWord_Visibility = document.createElement('span');
                        let in_Visible_Img = document.createElement('img');
                        let dateOfIssue_Space = document.createElement('div');
                        let dateOfIssue_Input = document.createElement('input');
                        passWord_Visibility.appendChild(in_Visible_Img);
                        user_Bottom_Invisible_Part.appendChild(spaces_Grid);
                        spaces_Grid.appendChild(password_Space);
                        spaces_Grid.appendChild(email_Space);
                        spaces_Grid.appendChild(phone_Space);
                        spaces_Grid.appendChild(dateOFBirth_Space);
                        spaces_Grid.appendChild(dateOfIssue_Space);
                        spaces_Grid.appendChild(location_Space);
                        spaces_Grid.appendChild(bio_Space);

                        password_Space.appendChild(password_Input);
                        password_Space.appendChild(passWord_Visibility);
                        email_Space.appendChild(email_Input);
                        phone_Space.appendChild(phone_Space_Input);
                        dateOFBirth_Space.appendChild(dateOfBirth_Input);
                        dateOfIssue_Space.appendChild(dateOfIssue_Input);
                        location_Space.appendChild(location_Input);
                        bio_Space.appendChild(bio_Input);
                        password_Input.value = data.user_Confirmpassword;
                        dateOfBirth_Input.value = data.user_Dateofbirth;

                        if (data.user_Bio) {
                            bio_Input.value = data.user_Bio;
                        } else {
                            bio_Input.placeholder = 'User Bio';
                        } if (data.user_Phone) {
                            phone_Space_Input.value = data.user_Phone;
                        } else {
                            phone_Space_Input.placeholder = 'User Phone';
                        } if (data.user_Location) {
                            location_Input.value = data.user_Location;
                        } else {
                            location_Input.placeholder = 'Location';
                        } if (data.lavinsta_Email) {
                            email_Input.value = data.lavinsta_Email;
                        } else {
                            email_Input.placeholder = 'lavinsta_Email';
                        } if (data.date_Created) {
                            dateOfIssue_Input.value = `DOI ${data.date_Created}`;
                        } else {
                            dateOfIssue_Input.placeholder = 'Date Created';
                        }
                        password_Input.type = 'password';
                        email_Input.type = 'email';
                        phone_Space_Input.type = 'tel';
                        spaces_Grid.classList.add('spaces_Grid');
                        in_Visible_Img.style.display = 'block';
                        in_Visible_Img.src = 'newicons/hide.png';
                        in_Visible_Img.classList.add('in_Visible_Img');
                        passWord_Visibility.classList.add('In_Visible');
                        passWord_Visibility.addEventListener('click', () => {
                            if (passWord_Visibility.classList.contains('Visible')) {
                                passWord_Visibility.classList.add('In_Visible');
                                passWord_Visibility.classList.remove('Visible');
                                password_Input.type = 'password';
                            } else {
                                passWord_Visibility.classList.remove('In_Visible');
                                passWord_Visibility.classList.add('Visible');
                                password_Input.type = 'text';
                            }
                        });
                    }
                    create_UserPassWord_Field();
                    function create_Admin_Tools() {
                        let admin_Tool_Grid = document.createElement('div');
                        let make_Admin = document.createElement('div');
                        let log_In = document.createElement('div');
                        let delete_User = document.createElement('div');
                        let admin_Seat = document.createElement('div');
                        let admin_Seat_Img = document.createElement('img');
                        let make_Admin_Img = document.createElement('img');
                        let log_In_Img = document.createElement('img');
                        let delete_User_Img = document.createElement('img');
                        user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                        admin_Tool_Grid.appendChild(make_Admin);
                        admin_Tool_Grid.appendChild(log_In);
                        admin_Tool_Grid.appendChild(delete_User);
                        admin_Tool_Grid.appendChild(admin_Seat);
                        make_Admin.appendChild(make_Admin_Img);
                        log_In.appendChild(log_In_Img);
                        delete_User.appendChild(delete_User_Img);
                        admin_Seat.appendChild(admin_Seat_Img);
                        admin_Seat_Img.src = 'icons/update.png';
                        make_Admin_Img.src = 'icons/verified.png';
                        log_In_Img.src = 'icons/account info.png';
                        delete_User_Img.src = 'newicons/delete.png';
                        make_Admin.classList.add('headerbtns');
                        log_In.classList.add('headerbtns');
                        delete_User.classList.add('headerbtns');
                        admin_Seat.classList.add('headerbtns');
                        admin_Tool_Grid.classList.add('admin_Tool_Grid');
                        admin_Seat.addEventListener('click', () => {
                            data.user_Is_Admin = true;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        make_Admin.addEventListener('click', () => {
                            data.user_Is_Admin = false;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        log_In.addEventListener('click', () => {
                            document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                                if (profile_Popup.id === data.user_Id) {
                                    profile_Popup.style.display = 'flex';
                                } else {
                                    profile_Popup.style.display = 'none';
                                }
                            });
                        });
                        delete_User.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === data.user_Id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                        });
                    }
                    create_Admin_Tools();
                    function user_Deleting() {
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
                        confirmation_popup.id = data.user_Id;
                        confirmationtrue.id = data.user_Id;
                        confirmationtrue.addEventListener('click', () => {
                            LogInFormData = LogInFormData.filter(user => {
                                if (user.user_Id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            createAdminsUsers_List();
                        });
                    }
                    user_Deleting();
                    user_SeeMore_Attr.addEventListener('click', () => {
                        user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                    });
                    user.classList.add('user');
                    user.id = data.user_Id;
                }
            });
        }
    });
    document.querySelectorAll('.user_Main_Admins_Column').forEach(column => {
        column.innerHTML = '';
        if (LogInFormData) {
            LogInFormData.forEach(data => {
                if (data.user_Is_Admin == 'Assist_Admin' || data.user_Is_Admin === true) {
                    let user = document.createElement('div');
                    let user_Top_Visible_Part = document.createElement('div');
                    let user_Name_And_Img = document.createElement('div');
                    let user_Name_And_Position = document.createElement('span')
                    let user_Head = document.createElement('div');
                    let user_Head_Img = document.createElement('img');
                    let user_Name = document.createElement('strong');
                    let user_Position = document.createElement('i');
                    let user_SeeMore_Attr = document.createElement('span');
                    let user_Bottom_Invisible_Part = document.createElement('div');
                    column.appendChild(user);
                    user.appendChild(user_Top_Visible_Part);
                    user.appendChild(user_Bottom_Invisible_Part);
                    user_Top_Visible_Part.appendChild(user_Name_And_Img);
                    user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                    user_Name_And_Img.appendChild(user_Head);
                    user_Name_And_Img.appendChild(user_Name_And_Position);
                    user_Name_And_Position.appendChild(user_Name);
                    user_Name_And_Position.appendChild(user_Position);
                    user_Head.appendChild(user_Head_Img);
                    user_SeeMore_Attr.textContent = 'More Info';

                    user_Head_Img.src = data.user_ProfilePicture;
                    user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                    user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');
                    function create_UserPassWord_Field() {
                        let spaces_Grid = document.createElement('div');
                        let password_Space = document.createElement('div');
                        let email_Space = document.createElement('div');
                        let phone_Space = document.createElement('div');
                        let dateOFBirth_Space = document.createElement('div');
                        let location_Space = document.createElement('div');
                        let bio_Space = document.createElement('div');
                        let password_Input = document.createElement('input');
                        let email_Input = document.createElement('input');
                        let phone_Space_Input = document.createElement('input');
                        let location_Input = document.createElement('input');
                        let dateOfBirth_Input = document.createElement('input');
                        let bio_Input = document.createElement('textarea');
                        let passWord_Visibility = document.createElement('span');
                        let in_Visible_Img = document.createElement('img');
                        let dateOfIssue_Space = document.createElement('div');
                        let dateOfIssue_Input = document.createElement('input');
                        passWord_Visibility.appendChild(in_Visible_Img);
                        user_Bottom_Invisible_Part.appendChild(spaces_Grid);
                        spaces_Grid.appendChild(password_Space);
                        spaces_Grid.appendChild(email_Space);
                        spaces_Grid.appendChild(phone_Space);
                        spaces_Grid.appendChild(dateOFBirth_Space);
                        spaces_Grid.appendChild(dateOfIssue_Space);
                        spaces_Grid.appendChild(location_Space);
                        spaces_Grid.appendChild(bio_Space);

                        password_Space.appendChild(password_Input);
                        password_Space.appendChild(passWord_Visibility);
                        email_Space.appendChild(email_Input);
                        phone_Space.appendChild(phone_Space_Input);
                        dateOFBirth_Space.appendChild(dateOfBirth_Input);
                        dateOfIssue_Space.appendChild(dateOfIssue_Input);
                        location_Space.appendChild(location_Input);
                        bio_Space.appendChild(bio_Input);
                        password_Input.value = data.user_Confirmpassword;
                        dateOfBirth_Input.value = data.user_Dateofbirth;

                        if (data.user_Bio) {
                            bio_Input.value = data.user_Bio;
                        } else {
                            bio_Input.placeholder = 'User Bio';
                        } if (data.user_Phone) {
                            phone_Space_Input.value = data.user_Phone;
                        } else {
                            phone_Space_Input.placeholder = 'User Phone';
                        } if (data.user_Location) {
                            location_Input.value = data.user_Location;
                        } else {
                            location_Input.placeholder = 'Location';
                        } if (data.lavinsta_Email) {
                            email_Input.value = data.lavinsta_Email;
                        } else {
                            email_Input.placeholder = 'lavinsta_Email';
                        } if (data.date_Created) {
                            dateOfIssue_Input.value = `DOI ${data.date_Created}`;
                        } else {
                            dateOfIssue_Input.placeholder = 'Date Created';
                        }
                        password_Input.type = 'password';
                        email_Input.type = 'email';
                        phone_Space_Input.type = 'tel';
                        spaces_Grid.classList.add('spaces_Grid');
                        in_Visible_Img.style.display = 'block';
                        in_Visible_Img.src = 'newicons/hide.png';
                        in_Visible_Img.classList.add('in_Visible_Img');
                        passWord_Visibility.classList.add('In_Visible');
                        passWord_Visibility.addEventListener('click', () => {
                            if (passWord_Visibility.classList.contains('Visible')) {
                                passWord_Visibility.classList.add('In_Visible');
                                passWord_Visibility.classList.remove('Visible');
                                password_Input.type = 'password';
                            } else {
                                passWord_Visibility.classList.remove('In_Visible');
                                passWord_Visibility.classList.add('Visible');
                                password_Input.type = 'text';
                            }
                        });
                    }
                    create_UserPassWord_Field();
                    function create_Admin_Tools() {
                        let admin_Tool_Grid = document.createElement('div');
                        let make_Admin = document.createElement('div');
                        let log_In = document.createElement('div');
                        let delete_User = document.createElement('div');
                        let admin_Seat = document.createElement('div');
                        let admin_Seat_Img = document.createElement('img');
                        let make_Admin_Img = document.createElement('img');
                        let log_In_Img = document.createElement('img');
                        let delete_User_Img = document.createElement('img');
                        user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                        admin_Tool_Grid.appendChild(make_Admin);
                        admin_Tool_Grid.appendChild(log_In);
                        admin_Tool_Grid.appendChild(delete_User);
                        admin_Tool_Grid.appendChild(admin_Seat);
                        make_Admin.appendChild(make_Admin_Img);
                        log_In.appendChild(log_In_Img);
                        delete_User.appendChild(delete_User_Img);
                        admin_Seat.appendChild(admin_Seat_Img);
                        admin_Seat_Img.src = 'icons/update.png';
                        make_Admin_Img.src = 'icons/verified.png';
                        log_In_Img.src = 'icons/account info.png';
                        delete_User_Img.src = 'newicons/delete.png';
                        make_Admin.classList.add('make_Admin');
                        log_In.classList.add('log_In');
                        delete_User.classList.add('delete_User');
                        admin_Seat.classList.add('admin_Seat');
                        admin_Tool_Grid.classList.add('admin_Tool_Grid');
                        admin_Seat.addEventListener('click', () => {
                            data.user_Is_Admin = 'Assist_Admin';
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        make_Admin.addEventListener('click', () => {
                            data.user_Is_Admin = false;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        });
                        log_In.addEventListener('click', () => {
                            document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                                if (profile_Popup.id === data.user_Id) {
                                    profile_Popup.style.display = 'flex';
                                } else {
                                    profile_Popup.style.display = 'none';
                                }
                            });
                        });
                        delete_User.addEventListener('click', () => {
                            document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                if (popup.id === data.user_Id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
                        });
                    }
                    create_Admin_Tools();
                    function user_Deleting() {
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
                        confirmation_popup.id = data.user_Id;
                        confirmationtrue.id = data.user_Id;
                        confirmationtrue.addEventListener('click', () => {
                            LogInFormData = LogInFormData.filter(user => {
                                if (user.user_Id === confirmationtrue.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            confirmation_popup.style.display = 'none';
                            createAdminsUsers_List();
                        });
                    }
                    user_Deleting();
                    user_SeeMore_Attr.addEventListener('click', () => {
                        user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                    });
                    user.classList.add('user');
                    user.id = data.user_Id;
                    if (data.user_Is_Admin === true) {
                        user_Position.textContent = 'admin';
                    } else {
                        user_Position.textContent = 'Assist Admin';
                    } if (data.user_Is_CEO === true && data.user_Is_Admin === true) {
                        user.remove();
                    }
                }
            });
        }
    });
}
function create_Admins_Notification() {
    document.querySelectorAll('.users_Popup_Notification_Column').forEach(column => {
        column.innerHTML = '';
        Admins_Notification.forEach(notification => {
            if (notification.type == 'is_Admin_request') {
                let user = document.createElement('div');
                let user_Top_Visible_Part = document.createElement('div');
                let user_Name_And_Img = document.createElement('div');
                let user_Name_And_Position = document.createElement('span')
                let user_Head = document.createElement('div');
                let user_Head_Img = document.createElement('img');
                let user_Name = document.createElement('strong');
                let user_Position = document.createElement('i');
                let user_SeeMore_Attr = document.createElement('span');
                let user_Bottom_Invisible_Part = document.createElement('div');
                column.appendChild(user);
                user.appendChild(user_Top_Visible_Part);
                user.appendChild(user_Bottom_Invisible_Part);
                user_Top_Visible_Part.appendChild(user_Name_And_Img);
                user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                user_Name_And_Img.appendChild(user_Head);
                user_Name_And_Img.appendChild(user_Name_And_Position);
                user_Name_And_Position.appendChild(user_Name);
                user_Name_And_Position.appendChild(user_Position);
                user_Head.appendChild(user_Head_Img);
                user_SeeMore_Attr.textContent = 'More Info';
                user_Position.textContent = 'Assist Admin';

                // id: id,
                // admin_Name: user.user_Firstname + ' ' + user.user_Surname,
                // admin_Id: user.user_Id,
                // admin_Image: user.user_ProfilePicture,
                // new_Request_Id: data.user_Id,
                // new_request_Image: data.user_ProfilePicture,
                // new_Request_Name: data.user_Firstname + ' ' + data.user_Surname,

                LogInFormData.forEach(data => {
                    if (data.user_Id === notification.admin_Id) {
                        user_Head_Img.src = data.user_ProfilePicture;
                        user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    }
                });
                user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');

                function create_Admin_Tools() {
                    let admin_Tool_Grid = document.createElement('div');
                    let make_Admin = document.createElement('div');
                    let log_In = document.createElement('div');
                    let delete_User = document.createElement('div');
                    let make_Admin_Img = document.createElement('img');
                    let log_In_Img = document.createElement('img');
                    let delete_User_Img = document.createElement('img');
                    user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                    admin_Tool_Grid.appendChild(make_Admin);
                    admin_Tool_Grid.appendChild(log_In);
                    admin_Tool_Grid.appendChild(delete_User);
                    make_Admin.appendChild(make_Admin_Img);
                    log_In.appendChild(log_In_Img);
                    delete_User.appendChild(delete_User_Img);
                    make_Admin_Img.src = 'icons/verified.png';
                    log_In_Img.src = 'icons/account info.png';
                    delete_User_Img.src = 'newicons/delete.png';
                    make_Admin.classList.add('make_Admin');
                    log_In.classList.add('log_In');
                    delete_User.classList.add('delete_User');
                    admin_Tool_Grid.classList.add('admin_Tool_Grid');

                    function Accept_Admin_request() {
                        LogInFormData.forEach(data => {
                            if (data.user_Id === notification.new_Request_Id) {
                                data.user_Is_Admin = 'Assist_Admin';
                                Admins_Notification = Admins_Notification.filter(A_Notification => {
                                    if (A_Notification.new_Request_Id === data.user_Id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                            }
                        });
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        create_Admins_Notification();
                    }
                    make_Admin.addEventListener('click', () => {
                        Accept_Admin_request();
                        create_Admins_Notification();
                    });
                    log_In.addEventListener('click', () => {
                        document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                            if (profile_Popup.id === notification.new_Request_Id) {
                                profile_Popup.style.display = 'flex';
                            } else {
                                profile_Popup.style.display = 'none';
                            }
                        });
                    });
                    delete_User.addEventListener('click', () => {
                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                            if (popup.id === notification.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                }
                create_Admin_Tools();
                function create_Notificatiob_Mesg() {
                    let introduction_Grid = document.createElement('div');
                    let introduction_Head_And_Image = document.createElement('div')
                    let introduction_Head = document.createElement('div');
                    let introduction_Name = document.createElement('strong');
                    let introduction_Name_And_Position = document.createElement('span');
                    let introduction_Position = document.createElement('i');
                    let introduction_HeadImg = document.createElement('img');
                    let introduction_Mesg = document.createElement('p');
                    user_Bottom_Invisible_Part.appendChild(introduction_Grid);
                    introduction_Grid.appendChild(introduction_Head_And_Image);
                    introduction_Grid.appendChild(introduction_Mesg);
                    introduction_Head_And_Image.appendChild(introduction_Head);
                    introduction_Head_And_Image.appendChild(introduction_Name_And_Position);
                    introduction_Name_And_Position.appendChild(introduction_Name);
                    introduction_Name_And_Position.appendChild(introduction_Position);
                    introduction_Head.appendChild(introduction_HeadImg);
                    LogInFormData.forEach(data => {
                        if (data.user_Id === notification.new_Request_Id) {
                            introduction_HeadImg.src = data.user_ProfilePicture;
                            introduction_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                            let muted_Message = 'introduce the user above as an Admin, you have to approve it first';
                            introduction_Mesg.textContent = data.user_Firstname + ' ' + data.user_Surname; + ' ' + muted_Message;
                        }
                    });
                    introduction_Position.textContent = 'user';
                    introduction_Grid.classList.add('introduction_Grid');
                }
                create_Notificatiob_Mesg();
                function Notification_Deleting() {
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
                    confirmation_popup.id = notification.id;
                    confirmationtrue.id = notification.id;
                    confirmationtrue.addEventListener('click', () => {
                        Admins_Notification = Admins_Notification.filter(A_Notification => {
                            if (A_Notification.id === confirmationtrue.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                        confirmation_popup.style.display = 'none';
                        create_Admins_Notification();
                    });
                }
                Notification_Deleting();
                user_SeeMore_Attr.addEventListener('click', () => {
                    user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                });
                user.classList.add('user');
                user.id = notification.id;
            } if (notification.type == 'is_Post_report') {
                let user = document.createElement('div');
                let user_Top_Visible_Part = document.createElement('div');
                let user_Name_And_Img = document.createElement('div');
                let user_Name_And_Position = document.createElement('span')
                let user_Head = document.createElement('div');
                let user_Head_Img = document.createElement('img');
                let user_Name = document.createElement('strong');
                let user_Position = document.createElement('i');
                let user_SeeMore_Attr = document.createElement('span');
                let user_Bottom_Invisible_Part = document.createElement('div');
                column.appendChild(user);
                user.appendChild(user_Top_Visible_Part);
                user.appendChild(user_Bottom_Invisible_Part);
                user_Top_Visible_Part.appendChild(user_Name_And_Img);
                user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                user_Name_And_Img.appendChild(user_Head);
                user_Name_And_Img.appendChild(user_Name_And_Position);
                user_Name_And_Position.appendChild(user_Name);
                user_Name_And_Position.appendChild(user_Position);
                user_Head.appendChild(user_Head_Img);
                user_SeeMore_Attr.textContent = 'More Info';
                user_Position.textContent = 'user';

                LogInFormData.forEach(data => {
                    if (data.user_Id === notification.report_Id) {
                        user_Head_Img.src = data.user_ProfilePicture;
                        user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    }
                });
                user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');
                user_Head.addEventListener('click', () => {
                    document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                        if (profile_Popup.id === notification.report_Id) {
                            profile_Popup.style.display = 'flex';
                        } else {
                            profile_Popup.style.display = 'none';
                        }
                    });
                });
                function create_Admin_Tools() {
                    let admin_Tool_Grid = document.createElement('div');
                    let make_Admin = document.createElement('div');
                    let log_In = document.createElement('div');
                    let delete_User = document.createElement('div');
                    let make_Admin_Img = document.createElement('img');
                    let log_In_Img = document.createElement('img');
                    let delete_User_Img = document.createElement('img');
                    user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                    admin_Tool_Grid.appendChild(make_Admin);
                    admin_Tool_Grid.appendChild(log_In);
                    admin_Tool_Grid.appendChild(delete_User);
                    make_Admin.appendChild(make_Admin_Img);
                    log_In.appendChild(log_In_Img);
                    delete_User.appendChild(delete_User_Img);
                    make_Admin_Img.src = 'icons/verified.png';
                    log_In_Img.src = 'icons/account info.png';
                    delete_User_Img.src = 'newicons/delete.png';
                    admin_Tool_Grid.classList.add('admin_Tool_Grid');

                    make_Admin.addEventListener('click', () => {
                        createMain_GridPost(notification.post_Id);
                    });
                    log_In.addEventListener('click', () => {
                        document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                            if (profile_Popup.id === notification.poster_Id) {
                                profile_Popup.style.display = 'flex';
                            } else {
                                profile_Popup.style.display = 'none';
                            }
                        });
                    });
                    delete_User.addEventListener('click', () => {
                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                            if (popup.id === notification.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                }
                create_Admin_Tools();
                function create_Notificatiob_Mesg() {
                    let introduction_Grid = document.createElement('div');
                    let introduction_Head_And_Image = document.createElement('div')
                    let introduction_Head = document.createElement('div');
                    let introduction_Name = document.createElement('strong');
                    let introduction_Name_And_Position = document.createElement('span');
                    let introduction_Position = document.createElement('i');
                    let introduction_HeadImg = document.createElement('img');
                    let introduction_Mesg = document.createElement('p');
                    let introduction_Mesg_Caption = document.createElement('p');
                    user_Bottom_Invisible_Part.appendChild(introduction_Grid);
                    introduction_Grid.appendChild(introduction_Head_And_Image);
                    introduction_Grid.appendChild(introduction_Mesg);
                    introduction_Grid.appendChild(introduction_Mesg_Caption);
                    introduction_Head_And_Image.appendChild(introduction_Head);
                    introduction_Head_And_Image.appendChild(introduction_Name_And_Position);
                    introduction_Name_And_Position.appendChild(introduction_Name);
                    introduction_Name_And_Position.appendChild(introduction_Position);
                    introduction_Head.appendChild(introduction_HeadImg);
                    introduction_Mesg_Caption.textContent = notification.report_Speech;
                    LogInFormData.forEach(data => {
                        if (data.user_Id === notification.poster_Id) {
                            introduction_HeadImg.src = data.user_ProfilePicture;
                            introduction_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                            let muted_Message = 'reported post made by the contact above' + '"...';
                            LogInFormData.forEach(user => {
                                if (user.user_Id === notification.report_Id) {
                                    introduction_Mesg.textContent = user.user_Firstname + ' ' + user.user_Surname + ' ' + muted_Message + ' ' + notification.post_Caption;
                                }
                            });
                        }
                    });
                    introduction_Head.addEventListener('click', () => {
                        document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                            if (profile_Popup.id === notification.poster_Id) {
                                profile_Popup.style.display = 'flex';
                            } else {
                                profile_Popup.style.display = 'none';
                            }
                        });
                    });
                    introduction_Position.textContent = 'user';
                    introduction_Grid.classList.add('introduction_Grid');
                }
                create_Notificatiob_Mesg();
                function Notification_Deleting() {
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
                    confirmation_popup.id = notification.id;
                    confirmationtrue.id = notification.id;
                    confirmationtrue.addEventListener('click', () => {
                        Admins_Notification = Admins_Notification.filter(A_Notification => {
                            if (A_Notification.id === confirmationtrue.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                        confirmation_popup.style.display = 'none';
                        create_Admins_Notification();
                    });
                }
                Notification_Deleting();
                user_SeeMore_Attr.addEventListener('click', () => {
                    user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                });
                user.classList.add('user');
                user.id = notification.id;
            } if (notification.type == 'is_Account_report') {
                let user = document.createElement('div');
                let user_Top_Visible_Part = document.createElement('div');
                let user_Name_And_Img = document.createElement('div');
                let user_Name_And_Position = document.createElement('span')
                let user_Head = document.createElement('div');
                let user_Head_Img = document.createElement('img');
                let user_Name = document.createElement('strong');
                let user_Position = document.createElement('i');
                let user_SeeMore_Attr = document.createElement('span');
                let user_Bottom_Invisible_Part = document.createElement('div');
                column.appendChild(user);
                user.appendChild(user_Top_Visible_Part);
                user.appendChild(user_Bottom_Invisible_Part);
                user_Top_Visible_Part.appendChild(user_Name_And_Img);
                user_Top_Visible_Part.appendChild(user_SeeMore_Attr);
                user_Name_And_Img.appendChild(user_Head);
                user_Name_And_Img.appendChild(user_Name_And_Position);
                user_Name_And_Position.appendChild(user_Name);
                user_Name_And_Position.appendChild(user_Position);
                user_Head.appendChild(user_Head_Img);
                user_SeeMore_Attr.textContent = 'More Info';
                LogInFormData.forEach(data => {
                    if (data.user_Id === notification.Report_Id) {
                        if (data.user_Is_Admin === true) {
                            user_Position.textContent = 'Admin';
                        } if (data.user_Is_CEO === true && data.user_Is_Admin === true) {
                            user_Position.textContent = 'CEO & Admin';
                        } if (data.user_Is_CEO === true) {
                            user_Position.textContent = 'CEO';
                        } if (data.user_Is_CEO !== true && data.user_Is_Admin !== true) {
                            user_Position.textContent = 'User';
                        } if (data.user_Is_Admin == 'Assist_Admin') {
                            user_Position.textContent = 'Assist Admin';
                        }
                        user_Head_Img.src = data.user_ProfilePicture;
                        user_Name.textContent = data.user_Firstname + ' ' + data.user_Surname;
                    }
                });
                user_Top_Visible_Part.classList.add('user_Top_Visible_Part');
                user_Bottom_Invisible_Part.classList.add('user_Bottom_Invisible_Part');

                function create_Admin_Tools() {
                    let admin_Tool_Grid = document.createElement('div');
                    let log_In = document.createElement('div');
                    let delete_User = document.createElement('div');
                    let log_In_Img = document.createElement('img');
                    let delete_User_Img = document.createElement('img');
                    user_Bottom_Invisible_Part.appendChild(admin_Tool_Grid);
                    admin_Tool_Grid.appendChild(log_In);
                    admin_Tool_Grid.appendChild(delete_User);
                    log_In.appendChild(log_In_Img);
                    delete_User.appendChild(delete_User_Img);
                    log_In_Img.src = 'icons/account info.png';
                    delete_User_Img.src = 'newicons/delete.png';
                    admin_Tool_Grid.classList.add('admin_Tool_Grid');

                    log_In.addEventListener('click', () => {
                        document.querySelectorAll('.profile_Cliant').forEach(profile_Popup => {
                            if (profile_Popup.id === notification.Report_Id) {
                                profile_Popup.style.display = 'flex';
                            } else {
                                profile_Popup.style.display = 'none';
                            }
                        });
                    });
                    delete_User.addEventListener('click', () => {
                        document.querySelectorAll('.confirmation_popup').forEach(popup => {
                            if (popup.id === notification.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                }
                create_Admin_Tools();
                function create_Notificatiob_Mesg() {
                    let introduction_Grid = document.createElement('div');
                    let introduction_Mesg = document.createElement('p');
                    user_Bottom_Invisible_Part.appendChild(introduction_Grid);
                    introduction_Grid.appendChild(introduction_Mesg);
                    let muted_Message = notification.problem;
                    introduction_Mesg.textContent = notification.Name + ':' + ' ' + muted_Message;
                    introduction_Grid.classList.add('introduction_Grid');
                }
                create_Notificatiob_Mesg();
                function Notification_Deleting() {
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
                    confirmation_popup.id = notification.id;
                    confirmationtrue.id = notification.id;
                    confirmationtrue.addEventListener('click', () => {
                        Admins_Notification = Admins_Notification.filter(A_Notification => {
                            if (A_Notification.id === confirmationtrue.id) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        localStorage.setItem('Admins_Notification', JSON.stringify(Admins_Notification));
                        confirmation_popup.style.display = 'none';
                        create_Admins_Notification();
                    });
                }
                Notification_Deleting();
                user_SeeMore_Attr.addEventListener('click', () => {
                    user_Bottom_Invisible_Part.classList.toggle('user_Bottom_Invisible_Part_Active');
                });
                user.classList.add('user');
                user.id = notification.id;
            }
        });
    });
}