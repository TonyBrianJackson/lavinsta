
if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
    createChatMenu();
    create_Chat_Rooms();
    createChatTaskBar();
    create_Video_Chat();
    get_Active_Page();
    createFriendContact();
} else {
    LogInFormData = [];
}
if (Array.isArray(JSON.parse(localStorage.getItem('myChatMsg')))) {
    myChatMsg = JSON.parse(localStorage.getItem('myChatMsg'));
    createChatMessages();
} else {
    myChatMsg = [];
}
function createChatMessages() {
    const userchatroomcolumn = document.querySelectorAll('.userchatroomcolumn');
    userchatroomcolumn.forEach(column => {
        column.innerHTML = '';
        myChatMsg.forEach(textmesg => {
            if (textmesg.chat_receiver + textmesg.posterId === column.id || textmesg.posterId + textmesg.chat_receiver === column.id) {
                if (textmesg.isText) {
                    let textchatcontainer = document.createElement('div');
                    let chatmesgaitself = document.createElement('div');
                    let chattext = document.createElement('p');
                    let chatstime = document.createElement('span');
                    let chattimeandstatus = document.createElement('div');
                    let chatsvisiblestatus = document.createElement('span');

                    function create_Reply() {
                        myChatMsg.forEach(mesg => {
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

                                    replychatcontainer.id = mesg.posterId;
                                    chatphoto.id = mesg.posterId;
                                    chatphotocontainer.id = mesg.posterId;
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

                                    replychatcontainer.id = mesg.posterId;
                                    chatphoto.id = mesg.posterId;
                                    chatphotocontainer.id = mesg.posterId;
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

                    chatsvisiblestatus.id = textmesg.posterId;
                    chatsvisiblestatus.textContent = textmesg.chatvisibilty;

                    textchatcontainer.id = textmesg.chat_receiver;
                    column.appendChild(textchatcontainer);
                    textchatcontainer.appendChild(chatmesgaitself);
                    textchatcontainer.appendChild(chattimeandstatus);
                    chattimeandstatus.appendChild(chatstime);
                    chattimeandstatus.appendChild(chatsvisiblestatus);
                    chatmesgaitself.appendChild(chattext);
                    chattext.textContent = textmesg.Property_Src;

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
                                    myChatMsg.push({
                                        isText: true,
                                        reply: true,
                                        replyId: textmesg.id,
                                        Property_Src: mesgTextBox.value,
                                        id: id,
                                        posterId: user_Id,
                                        chat_receiver: textmesg.posterId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    createChatMessages();
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
                            myChatMsg = myChatMsg.filter(text => {
                                if (text.id === first_Option.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            options.remove();
                            createChatMessages();
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }

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
                    let chatsample = document.querySelectorAll('.chatsample');
                    chatsample.forEach(sampletest => {
                        if (sampletest.id === textmesg.chat_receiver + textmesg.posterId) {
                            sampletest.textContent = textmesg.Property_Src;
                        } else if (sampletest.id === textmesg.posterId + textmesg.chat_receiver) {
                            sampletest.textContent = textmesg.Property_Src;
                        }
                    });
                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
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

                    let chatCover = document.createElement('div');
                    let chattypeIndicator = document.createElement('span');
                    let chattypeIndicatorImage = document.createElement('img');

                    chatCover.appendChild(chattypeIndicator);
                    chattypeIndicator.appendChild(chattypeIndicatorImage);
                    chattypeIndicatorImage.src = 'icons/image(0).png';
                    chatCover.classList.add('chatCover');

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
                                    myChatMsg.push({
                                        isText: true,
                                        reply: true,
                                        replyId: textmesg.id,
                                        Property_Src: mesgTextBox.value,
                                        id: id,
                                        posterId: user_Id,
                                        chat_receiver: textmesg.posterId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    createChatMessages();
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
                            myChatMsg = myChatMsg.filter(text => {
                                if (text.id === first_Option.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            options.remove();
                            createChatMessages();
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }

                    textchatcontainer.id = textmesg.chat_receiver;
                    chatphoto.id = textmesg.chat_receiver;
                    chatphotocontainer.id = textmesg.posterId;
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
                    let chatsample = document.querySelectorAll('.chatsample');
                    chatsample.forEach(sampletest => {
                        if (sampletest.id === textmesg.chat_receiver + textmesg.posterId) {
                            sampletest.textContent = 'photo';
                        } else if (sampletest.id === textmesg.posterId + textmesg.chat_receiver) {
                            sampletest.textContent = 'photo';
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

                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        //textchat
                                        if (textmesg.posterId === user.user_Id) {
                                            textchatcontainer.classList.add('mychatcontainer');
                                            chatphotocontainer.classList.add('mychatphoto');
                                            chatstime.classList.add('mychatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('mychattimeandstatus');
                                        } else {
                                            textchatcontainer.classList.add('friendchatcontainer');
                                            chatphotocontainer.classList.add('friendschatphoto');
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
                    });
                } if (textmesg.isVideo) {
                    let textchatcontainer = document.createElement('div');
                    let chatphotocontainer = document.createElement('div');
                    let chatCover = document.createElement('div');
                    let chattypeIndicator = document.createElement('span');
                    let chattypeIndicatorImage = document.createElement('img');
                    let chatvideo = document.createElement('video');
                    let chatstime = document.createElement('span');
                    let chattimeandstatus = document.createElement('div');
                    let chatsvisiblestatus = document.createElement('span');
                    chatCover.appendChild(chattypeIndicator);
                    chattypeIndicator.appendChild(chattypeIndicatorImage);
                    chattypeIndicatorImage.src = 'icons/youtube.png';
                    chatCover.classList.add('chatCover');

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
                                    myChatMsg.push({
                                        isText: true,
                                        reply: true,
                                        replyId: textmesg.id,
                                        Property_Src: mesgTextBox.value,
                                        id: id,
                                        posterId: user_Id,
                                        chat_receiver: textmesg.posterId,
                                        time: new Date().getTime(),
                                        date: trackingDate,
                                        chatvisibilty: 'sent'
                                    });
                                    localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                }
                            }
                            sendmesg.addEventListener('click', () => {
                                ActiveUser_Account.forEach(user => {
                                    pushChat(user.user_Id);
                                    options.remove();
                                    createChatMessages();
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
                            myChatMsg = myChatMsg.filter(text => {
                                if (text.id === first_Option.id) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            options.remove();
                            createChatMessages();
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }

                    textchatcontainer.id = textmesg.chat_receiver;
                    chatphotocontainer.id = textmesg.posterId;
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
                    let chatsample = document.querySelectorAll('.chatsample');
                    chatsample.forEach(sampletest => {
                        if (sampletest.id === textmesg.chat_receiver + textmesg.posterId) {
                            sampletest.textContent = 'video';
                        } else if (sampletest.id === textmesg.posterId + textmesg.chat_receiver) {
                            sampletest.textContent = 'video';
                        }
                    });
                    column.appendChild(textchatcontainer);
                    textchatcontainer.appendChild(chatphotocontainer);
                    textchatcontainer.appendChild(chattimeandstatus);
                    chattimeandstatus.appendChild(chatstime);
                    chattimeandstatus.appendChild(chatsvisiblestatus);
                    chatphotocontainer.appendChild(chatvideo);
                    chatphotocontainer.appendChild(chatCover);
                    chatvideo.src = textmesg.Property_Src;
                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        //textchat
                                        if (textmesg.posterId === user.user_Id) {
                                            textchatcontainer.classList.add('mychatcontainer');
                                            chatphotocontainer.classList.add('mychatphoto');
                                            chatstime.classList.add('mychatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('mychattimeandstatus');
                                        } else {
                                            textchatcontainer.classList.add('friendchatcontainer');
                                            chatphotocontainer.classList.add('friendschatphoto');
                                            chatstime.classList.add('friendschatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('friendschattimeandstatus');
                                            chatsvisiblestatus.style.display = 'none';
                                        }
                                    }
                                })
                            });
                        }
                    }
                    chatphotocontainer.addEventListener('click', () => {
                        view_textmesg();
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
                    chataudiocontainer.id = textmesg.posterId;
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
                    let chatsample = document.querySelectorAll('.chatsample');
                    chatsample.forEach(sampletest => {
                        if (sampletest.id === textmesg.chat_receiver + textmesg.posterId) {
                            sampletest.textContent = 'audio';
                        } else if (sampletest.id === textmesg.posterId + textmesg.chat_receiver) {
                            sampletest.textContent = 'audio';
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
                    chataudioplay.addEventListener('click', () => {
                        chataudio.play();
                    });
                    chataudiopause.addEventListener('click', () => {
                        chataudio.pause();
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
                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        //textchat
                                        if (textmesg.posterId === user.user_Id) {
                                            textchatcontainer.classList.add('mychatcontainer');
                                            chataudiocontainer.classList.add('mychataudio');
                                            chatstime.classList.add('mychatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('mychattimeandstatus');
                                        } else {
                                            textchatcontainer.classList.add('friendchatcontainer');
                                            chataudiocontainer.classList.add('friendschataudio');
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
                } if (textmesg.isStory_Reply) {
                    let textchatcontainer = document.createElement('div');
                    let chatphotocontainer = document.createElement('div');
                    let chatstime = document.createElement('span');
                    let chattimeandstatus = document.createElement('div');
                    let chatsvisiblestatus = document.createElement('span');

                    let chatCover = document.createElement('div');
                    let chattypeIndicator = document.createElement('span');
                    let chattypeIndicatorImage = document.createElement('img');

                    let attributation_Container = document.createElement('div');
                    let attribute = document.createElement('p');
                    let caption = document.createElement('p');
                    attributation_Container.appendChild(attribute);
                    attributation_Container.appendChild(caption);
                    attribute.textContent = textmesg.attribute;
                    caption.textContent = textmesg.story_title_reply;
                    attributation_Container.classList.add('attributation_Container');
                    caption.classList.add('caption');
                    attribute.classList.add('attribute');

                    chatCover.appendChild(chattypeIndicator);
                    chatCover.appendChild(attributation_Container);
                    chattypeIndicator.appendChild(chattypeIndicatorImage);
                    chattypeIndicatorImage.src = 'icons/image(0).png';
                    chatCover.classList.add('chatCover');



                    textchatcontainer.id = textmesg.chat_receiver;
                    chatphotocontainer.id = textmesg.posterId;
                    if (textmesg.isStoryPhoto === true) {
                        let chatphoto = document.createElement('img');
                        chatphotocontainer.appendChild(chatphoto);
                        chatphoto.id = textmesg.chat_receiver;
                        chatphoto.src = textmesg.Property_Src;
                    } if (textmesg.isStoryVideo === true) {
                        let chatphoto = document.createElement('video');
                        chatphotocontainer.appendChild(chatphoto);
                        chatphoto.id = textmesg.chat_receiver;
                        chatphoto.src = textmesg.Property_Src;
                        chattypeIndicatorImage.src = 'icons/youtube.png';
                    }
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
                    let chatsample = document.querySelectorAll('.chatsample');
                    chatsample.forEach(sampletest => {
                        if (sampletest.id === textmesg.chat_receiver + textmesg.posterId) {
                            sampletest.textContent = 'story reply';
                        } else if (sampletest.id === textmesg.posterId + textmesg.chat_receiver) {
                            sampletest.textContent = 'story reply';
                        }
                    });
                    chatsvisiblestatus.id = textmesg.posterId;
                    chatsvisiblestatus.textContent = textmesg.chatvisibilty;
                    column.appendChild(textchatcontainer);
                    textchatcontainer.appendChild(chatphotocontainer);
                    textchatcontainer.appendChild(chattimeandstatus);
                    chattimeandstatus.appendChild(chatstime);
                    chattimeandstatus.appendChild(chatsvisiblestatus);
                    chatphotocontainer.appendChild(chatCover);

                    if (LogInFormData) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        //textchat
                                        if (textmesg.posterId === user.user_Id) {
                                            textchatcontainer.classList.add('mychatcontainer');
                                            chatphotocontainer.classList.add('mychatphoto');
                                            chatstime.classList.add('mychatstime');
                                            chatsvisiblestatus.classList.add('friendschatstime');
                                            chattimeandstatus.classList.add('mychattimeandstatus');
                                        } else {
                                            textchatcontainer.classList.add('friendchatcontainer');
                                            chatphotocontainer.classList.add('friendschatphoto');
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
                    function viewElement() {
                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');
                        let gridpostimagecontainer = document.createElement('div');
                        let gridposttitlecover = document.createElement('div');
                        let gridpostcaption = document.createElement('p');
                        if (textmesg.isStoryPhoto === true) {
                            let gridpostimagetoview = document.createElement('img');
                            gridpostimagecontainer.appendChild(gridpostimagetoview);
                            gridpostimagetoview.src = textmesg.Property_Src;
                            gridpostimagetoview.classList.add('gridpostimagetoview');
                        } if (textmesg.isStoryVideo === true) {
                            let gridpostimagetoview = document.createElement('video');
                            let gridpostcover = document.createElement('div');
                            let gridpostplaybtn = document.createElement('span');
                            let gridpostpausebtn = document.createElement('span');
                            let gridpostplayImg = document.createElement('img');
                            let gridpostpauseImg = document.createElement('img');
                            gridpostimagecontainer.appendChild(gridpostimagetoview);
                            gridpostimagecontainer.appendChild(gridpostcover);
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
                            gridpostimagetoview.classList.add('gridpostimagetoview');
                            gridpostcover.classList.add('gridpostcover');
                        }
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
                        gridposttitlecover.appendChild(gridpostcaption);
                        gridpostcaption.classList.add('gridpostcaption');
                        gridposttitlecover.classList.add('gridposttitlecover');
                        gridpostcaption.textContent = textmesg.story_reply;
                        itemsviewclosebutton.innerHTML = '&times;';
                        document.body.appendChild(itemsviewonlargescale);
                        itemsviewonlargescale.style.display = 'flex';
                        gridpostimagecontainer.style.display = 'flex';
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer)
                        gridpostimagecontainer.appendChild(gridposttitlecover)
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');
                        itemsviewclosebutton.addEventListener('click', () => {
                            itemsviewonlargescale.remove();
                        });
                    }
                    chatphotocontainer.addEventListener('click', () => {
                        viewElement();
                    });
                }
            }
        });
    });
}
function access_Chat_Count() {
    document.querySelectorAll('.userstrash').forEach(trash => {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                myFriends.forEach(friend => {
                    if (data.user_Id === trash.id || connect.connectionId === trash.id) {
                        if (data.user_Id === data.user_Id) {

                        } if (connect.connectionId === data.user_Id) {

                        }
                    }
                });
            });
        }
    });
    let chatcount = document.createElement('span');
}
function createChatMenu() {
    let userschatcontainer = document.querySelectorAll('.userschatcontainer');
    userschatcontainer.forEach(session => {
        session.innerHTML = '';
        LogInFormData.forEach(data => {
            if (data.user_Id === session.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    let chatblock = document.createElement('div');
                    let chatblockhead = document.createElement('div');
                    let chatblockreciepientProfileImg = document.createElement('img');
                    let chatblocktail = document.createElement('div');
                    let chatreciepientname = document.createElement('p');
                    let chatsample = document.createElement('span');
                    let chatcount = document.createElement('span');
                    let chatstatus = document.createElement('b');

                    session.appendChild(chatblock);
                    chatblock.appendChild(chatblockhead);
                    chatblock.appendChild(chatblocktail);
                    chatblockhead.appendChild(chatblockreciepientProfileImg);
                    chatblockhead.appendChild(chatcount);
                    chatcount.id = data.user_Id + connect.connectionId;
                    chatblocktail.appendChild(chatreciepientname);
                    chatblocktail.appendChild(chatsample);
                    chatblocktail.appendChild(chatstatus);
                    chatstatus.classList.add('chatstatus');
                    chatcount.classList.add('chatcount');
                    chatsample.classList.add('chatsample');
                    chatblock.classList.add('chatblock');
                    chatblockhead.classList.add('chatblockhead');
                    chatblocktail.classList.add('chatblocktail');
                    chatreciepientname.classList.add('chatreciepientname');
                    chatblockreciepientProfileImg.classList.add('chatblockreciepientProfileImg');

                    chatblock.id = connect.connectionId + data.user_Id;
                    chatsample.id = connect.connectionId + data.user_Id;
                    chatsample.textContent = 'start conversation';

                    if (connect.connector_ChatView === false) {
                        chatsample.classList.add('unchecked_Chat');
                    }
                    let countArray = [];
                    if (Array.isArray(JSON.parse(localStorage.getItem('myChatMsg')))) {
                        myChatMsg = JSON.parse(localStorage.getItem('myChatMsg'));
                        myChatMsg.forEach(chat => {
                            if (chat.chat_receiver === data.user_Id) {
                                if (chat.chatvisibilty == 'sent') {
                                    countArray.push(chat);
                                    chatcount.textContent = countArray.length;
                                }
                            }
                        });
                    }

                    if (chatcount.textContent < 1) {
                        chatcount.style.display = 'none';
                    } else if (chatcount.textContent > 0) {
                        chatcount.style.display = 'block';
                    }
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            chatblockreciepientProfileImg.src = user.user_ProfilePicture;
                            chatreciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;

                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    chatblockreciepientProfileImg.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    chatblockreciepientProfileImg.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    chatblockreciepientProfileImg.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    chatblockreciepientProfileImg.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    chatblockreciepientProfileImg.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    chatblockreciepientProfileImg.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    chatblockreciepientProfileImg.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    chatblockreciepientProfileImg.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    chatblockreciepientProfileImg.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    chatblockreciepientProfileImg.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (connect.connectionId === user.user_Id) {
                            if (user.user_Is_Online === true) {
                                chatstatus.textContent = 'online';
                                chatstatus.style.color = 'lightgreen';
                            } else {
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - connect.status;
                                    var token;
                                    var moment = 'ago';
                                    let maintime;

                                    time = miliseconds / 1000;
                                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                        token = 'long';
                                        chatstatus.innerHTML = token + ' ' + moment;
                                        chatstatus.style.color = 'var(--color-dark)';
                                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                                        token = 'week';
                                        maintime = time / 604800;
                                        chatstatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        chatstatus.style.color = 'var(--color-yellow)';
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        token = 'day';
                                        maintime = time / 86400;
                                        chatstatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        chatstatus.style.color = 'var(--color-yellow)';
                                    } if (time <= 60 * 60 * 24) {
                                        token = 'hr';
                                        maintime = time / 3600;
                                        chatstatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        chatstatus.style.color = 'var(--color-yellow)';
                                    } if (time <= 60 * 60) {
                                        token = 'mins';
                                        maintime = time / 60;
                                        chatstatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        chatstatus.style.color = 'var(--color-yellow)';
                                    } if (time <= 60) {
                                        maintime = 'offline';
                                        chatstatus.innerHTML = maintime;
                                        chatstatus.style.color = 'var(--color-bright)';
                                    }
                                }
                                startTime();
                            }
                        }
                    });

                    function decreasecount() {
                        document.querySelectorAll('.userchatroom').forEach(chatroom => {
                            if (chatblock.id === chatroom.id) {
                                chatroom.style.display = 'flex';
                                sessionStorage.setItem('activepage', chatroom.id);
                                document.querySelector('.navigatiofloatcontainer').style.display = 'none';
                            }
                        });
                        chatcount.style.display = 'none';
                        if (Array.isArray(JSON.parse(localStorage.getItem('myChatMsg')))) {
                            myChatMsg = JSON.parse(localStorage.getItem('myChatMsg'));
                            myChatMsg.forEach(chat => {
                                if (chat.chat_receiver + chat.posterId === chatblock.id && chat.posterId !== data.user_Id) {
                                    chat.chatvisibilty = 'seen';
                                    localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                }
                            });
                        }

                        if (LogInFormData) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                let userschatcount = document.querySelectorAll('.userschatcount');
                                userschatcount.forEach(count => {
                                    if (count.id === data.user_Id && user.user_Id === data.user_Id) {
                                        count.style.display = 'none';
                                        user.user_ChatView = true;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                });
                            })
                        }
                    }
                    document.querySelector('#chat').addEventListener('click', () => {
                        if (LogInFormData) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                let userschatcount = document.querySelectorAll('.userschatcount');
                                userschatcount.forEach(count => {
                                    if (count.id === data.user_Id && user.user_Id === data.user_Id) {
                                        count.style.display = 'none';
                                        user.user_ChatView = true;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                })
                            })
                        }
                    });
                    chatblock.addEventListener('click', (e) => {
                        decreasecount();
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(user => {
                            if (user.user_Id === connect.connectionId) {
                                let userconnetions = user.user_Connection;
                                userconnetions.forEach(connection => {
                                    if (connection.id === connect.id) {
                                        connection.connector_ChatView = true;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                })
                            }
                        });
                    });
                });
            }
        });
    });
}
function create_Chat_Rooms() {
    let userschatcontainer = document.querySelectorAll('.userschatcontainer');
    userschatcontainer.forEach(session => {
        LogInFormData.forEach(data => {
            if (data.user_Id === session.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    //user unique chatrooms
                    let userchatroom = document.createElement('nav');
                    let userchatroomcolumn = document.createElement('div');
                    //userchat header
                    let userchatheader = document.createElement('header');
                    let userschatexit = document.createElement('span');
                    let userchatreciepientname = document.createElement('strong');
                    let userchatprofilepicturecontainer = document.createElement('div');
                    let userschatprofilepicture = document.createElement('img');

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


                        chatphotoinput.id = connect.connectionId + session.id + 'Xfr_OxYP';
                        chatvideoinput.id = connect.connectionId + session.id + 'Xfr_OxYV';
                        chataudioinput.id = connect.connectionId + session.id + 'Xfr_OxYA';

                        newphotolabel.htmlFor = chatphotoinput.id;
                        newvideolabel.htmlFor = chatvideoinput.id;
                        newaudiolabel.htmlFor = chataudioinput.id;
                        chatimagepreview.id = connect.connectionId;
                        videoschat.id = connect.connectionId;
                        audiochat.id = connect.connectionId;
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
                                                myChatMsg.push({
                                                    isAudio: true,
                                                    voice: true,
                                                    Property_Src: chat_audionreciever.src,
                                                    id: id,
                                                    posterId: data.user_Id,
                                                    chat_receiver: connect.connectionId,
                                                    time: new Date().getTime(),
                                                    date: trackingDate,
                                                    chatvisibilty: 'sent'
                                                });
                                                localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
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
                                myChatMsg.push({
                                    isText: true,
                                    Property_Src: userchattextbox.value,
                                    id: id,
                                    posterId: data.user_Id,
                                    chat_receiver: connect.connectionId,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent'
                                });
                                localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            }
                        }
                        function pushphotoChat() {
                            const id = '' + new Date().getTime();
                            if (chatimagepreview.src) {
                                myChatMsg.push({
                                    isPhoto: true,
                                    Property_Src: chatimagepreview.src,
                                    id: id,
                                    posterId: data.user_Id,
                                    chat_receiver: connect.connectionId,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent'
                                });
                                localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            }
                        }
                        function pushvideoChat() {
                            const id = '' + new Date().getTime();
                            if (videoschat.src) {
                                myChatMsg.push({
                                    isVideo: true,
                                    Property_Src: videoschat.src,
                                    id: id,
                                    posterId: data.user_Id,
                                    chat_receiver: connect.connectionId,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent'
                                });
                                localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            }
                        }
                        function pushaudioChat() {
                            const id = '' + new Date().getTime();
                            if (audiochat.src) {
                                myChatMsg.push({
                                    isAudio: true,
                                    Property_Src: audiochat.src,
                                    id: id,
                                    posterId: data.user_Id,
                                    chat_receiver: connect.connectionId,
                                    time: new Date().getTime(),
                                    date: trackingDate,
                                    chatvisibilty: 'sent'
                                });
                                localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                            }
                        }
                        function hightlightchatblock() {
                            connect.connector_ChatView = false;
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                        userchatsend.addEventListener('click', () => {
                            if (userchattextbox.value) {
                                userchatroomcolumn.innerHTML = '';
                                pushChat();
                                createChatMessages();
                                hightlightchatblock();
                                userchattextbox.value = '';
                                increaseCount();
                            }
                        });
                        sharephotosend.addEventListener('click', () => {
                            if (chatimagepreview.src) {
                                userchatroomcolumn.innerHTML = '';
                                pushphotoChat();
                                createChatMessages();
                                hightlightchatblock();
                                increaseCount();
                            }
                        });
                        sharevideosend.addEventListener('click', () => {
                            if (videoschat.src) {
                                userchatroomcolumn.innerHTML = '';
                                pushvideoChat();
                                createChatMessages();
                                hightlightchatblock();
                                increaseCount();
                            }
                        });
                        shareaudiosend.addEventListener('click', () => {
                            if (audiochat.src) {
                                userchatroomcolumn.innerHTML = '';
                                pushaudioChat();
                                createChatMessages();
                                hightlightchatblock();
                                increaseCount();
                            }

                        });
                    }
                    createUploader();
                    //chatoptions
                    let chatoptionpopup = document.createElement('div');
                    let optionviewprofile = document.createElement('span');
                    let chatoptionmute = document.createElement('span');
                    chatoptionpopup.appendChild(optionviewprofile);
                    chatoptionpopup.appendChild(chatoptionmute);
                    optionviewprofile.textContent = 'profile';
                    optionviewprofile.id = connect.connectionId;

                    optionviewprofile.addEventListener('click', () => {
                        view_Profile(connect.connectionId);
                    });
                    chatoptionmute.textContent = 'mute';
                    chatoptionmute.style.display = 'none';
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
                    chatcallicon.id = connect.connectionId + data.user_Id;
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
                    userchatroom.appendChild(userchatroomcolumn);
                    userchatroom.appendChild(userschatbox);
                    userchatroom.appendChild(chatfloat);
                    userchatroom.appendChild(chatoptionpopup);
                    userchatroom.classList.add('userchatroom');
                    userchatroomcolumn.classList.add('userchatroomcolumn');
                    userchatroomcolumn.id = connect.connectionId + data.user_Id;
                    //header
                    let friendactivestatus = document.createElement('strong');
                    let usersHeaderflex = document.createElement('div');
                    userchatheader.appendChild(userschatexit);
                    userchatheader.appendChild(userchatprofilepicturecontainer);
                    userchatheader.appendChild(usersHeaderflex);
                    usersHeaderflex.appendChild(userchatreciepientname);
                    usersHeaderflex.appendChild(friendactivestatus);
                    userchatprofilepicturecontainer.appendChild(userschatprofilepicture);
                    userschatexit.innerHTML = '&LeftArrow;';
                    usersHeaderflex.classList.add('usersHeaderflex');
                    userchatheader.classList.add('userchatheader');
                    userchatprofilepicturecontainer.classList.add('userchatprofilepicturecontainer');

                    userchatroom.id = connect.connectionId + data.user_Id;
                    userchatprofilepicturecontainer.id = connect.connectionId;
                    userchatreciepientname.id = connect.connectionId;
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            userschatprofilepicture.src = user.user_ProfilePicture;
                            userchatreciepientname.textContent = user.user_Firstname + ' ' + user.user_Surname;

                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    userschatprofilepicture.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    userschatprofilepicture.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    userschatprofilepicture.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    userschatprofilepicture.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    userschatprofilepicture.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    userschatprofilepicture.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    userschatprofilepicture.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    userschatprofilepicture.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    userschatprofilepicture.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    userschatprofilepicture.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    LogInFormData.forEach(user => {
                        if (connect.connectionId === user.user_Id) {
                            if (user.user_Is_Online === true) {
                                friendactivestatus.textContent = 'online';
                                friendactivestatus.style.color = 'lightgreen';
                            } else {
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - connect.status;
                                    var token;
                                    var moment = 'ago';
                                    let maintime;

                                    time = miliseconds / 1000;
                                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                        token = 'long';
                                        friendactivestatus.innerHTML = token + ' ' + moment;
                                        friendactivestatus.style.color = 'lightgreen';
                                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                                        token = 'week';
                                        maintime = time / 604800;
                                        friendactivestatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        friendactivestatus.style.color = 'var(--color-danger)';
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        token = 'day';
                                        maintime = time / 86400;
                                        friendactivestatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        friendactivestatus.style.color = 'var(--color-danger)';
                                    } if (time <= 60 * 60 * 24) {
                                        token = 'hr';
                                        maintime = time / 3600;
                                        friendactivestatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        friendactivestatus.style.color = 'var(--color-danger)';
                                    } if (time <= 60 * 60) {
                                        token = 'mins';
                                        maintime = time / 60;
                                        friendactivestatus.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                                        friendactivestatus.style.color = 'var(--color-danger)';
                                    } if (time <= 60) {
                                        maintime = 'offline';
                                        friendactivestatus.innerHTML = maintime;
                                        friendactivestatus.style.color = 'var(--color-bright)';
                                    }
                                }
                                startTime();
                            }
                        }
                    });

                    function increaseCount() {
                        if (LogInFormData) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                let userschatcount = document.querySelectorAll('.userschatcount');
                                userschatcount.forEach(count => {
                                    if (count.id === connect.connectionId && user.user_Id === connect.connectionId) {
                                        count.style.display = 'block';
                                        user.user_ChatView = false;
                                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    }
                                });
                            });
                        }
                        let messagecounts = document.querySelectorAll('.chatcount');
                        messagecounts.forEach(count => {
                            if (count.id === connect.connectionId) {
                                count.style.display = 'block';
                            }
                        });
                        document.querySelectorAll('.task_Count').forEach(count => {
                            if (count.id === connect.connectionId) {
                                count.style.display = 'block';
                            }
                        });
                    }
                    userchatreciepientname.classList.add('userchatreciepientname');
                    userschatexit.addEventListener('click', () => {
                        userchatroom.style.display = 'none';
                        sessionStorage.setItem('activepage', 'chattab_Smartchat');
                        document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
                    });
                });
            }
        });
    });
}
function createChatTaskBar() {
    document.querySelectorAll('.chattaskbar').forEach(session => {
        session.innerHTML = '';
        LogInFormData.forEach(data => {
            if (data.user_Id === session.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    let task_Friend = document.createElement('div');
                    let task_Friend_Img = document.createElement('img');
                    let task_Count = document.createElement('span');
                    let task_Active_Status = document.createElement('span');
                    session.appendChild(task_Friend);
                    task_Friend.appendChild(task_Friend_Img);
                    task_Friend.appendChild(task_Count);
                    task_Friend.appendChild(task_Active_Status);
                    task_Friend.classList.add('task_Friend');
                    task_Count.classList.add('task_Count');
                    task_Active_Status.classList.add('task_Active_Status');
                    task_Count.id = connect.connectionId;
                    task_Friend.id = connect.connectionId + data.user_Id;
                    task_Count.textContent = connect.count;
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            task_Friend_Img.src = user.user_ProfilePicture;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    task_Friend_Img.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    task_Friend_Img.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    task_Friend_Img.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    task_Friend_Img.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    task_Friend_Img.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    task_Friend_Img.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    task_Friend_Img.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    task_Friend_Img.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    task_Friend_Img.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    task_Friend_Img.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    if (task_Count.textContent < 1) {
                        task_Count.style.display = 'none';
                    } else if (task_Count.textContent > 0) {
                        task_Count.style.display = 'block';
                    }
                    function decreasecount() {
                        document.querySelectorAll('.userchatroom').forEach(chatroom => {
                            if (connect.connectionId + data.user_Id === chatroom.id) {
                                chatroom.style.display = 'flex';
                                sessionStorage.setItem('activepage', chatroom.id);
                                document.querySelector('.navigatiofloatcontainer').style.display = 'none';
                            } else {
                                chatroom.style.display = 'none';
                            }
                            document.querySelectorAll('.chatcount').forEach(count => {
                                if (count.id === data.user_Id + connect.connectionId) {
                                    count.style.display = 'none';
                                }
                            });
                            if (Array.isArray(JSON.parse(localStorage.getItem('myChatMsg')))) {
                                myChatMsg = JSON.parse(localStorage.getItem('myChatMsg'));
                                myChatMsg.forEach(chat => {
                                    if (chat.chat_receiver + chat.posterId === task_Friend.id && chat.posterId !== data.user_Id) {
                                        chat.chatvisibilty = 'seen';
                                        localStorage.setItem('myChatMsg', JSON.stringify(myChatMsg));
                                    }
                                });
                            }

                            if (LogInFormData) {
                                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                LogInFormData.forEach(user => {
                                    let userschatcount = document.querySelectorAll('.userschatcount');
                                    userschatcount.forEach(count => {
                                        if (count.id === connect.connectionId && user.user_Id === connect.connectionId) {
                                            count.style.display = 'none';
                                            user.user_ChatView = true;
                                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                        }
                                    })
                                })
                            }
                        });
                    }
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(user => {
                        if (connect.connectionId === user.user_Id) {
                            if (user.user_Is_Online === true) {
                                task_Active_Status.classList.add('active_now');
                            } else {
                                const startTime = function () {
                                    let time;
                                    let timeresult = new Date().getTime();
                                    let miliseconds = timeresult - connect.status;

                                    time = miliseconds / 1000;
                                    if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                                        task_Active_Status.classList.add('long_time');
                                    } if (time <= 60 * 60 * 24 * 7 * 4) {
                                        task_Active_Status.classList.add('long_time');
                                    } if (time <= 60 * 60 * 24 * 7) {
                                        task_Active_Status.classList.add('long_time');
                                    } if (time <= 60 * 60 * 24) {
                                        task_Active_Status.classList.add('long_time');
                                    } if (time <= 60 * 60) {
                                        task_Active_Status.classList.add('few_hours');
                                    } if (time <= 60) {
                                        task_Active_Status.classList.add('off_line');
                                    }
                                }
                                startTime();
                            }
                        }
                    });
                    task_Friend.addEventListener('click', () => {
                        decreasecount();
                    });
                });
            }
        });
    });
}
function get_Active_Page() {
    let userchatroom = document.querySelectorAll('.userchatroom');
    userchatroom.forEach(chatroom => {
        if (chatroom.id === sessionStorage.getItem('activepage')) {
            document.querySelector('.profile').style.display = 'none';
            document.querySelector('.chattab').style.display = 'flex';
            chatroom.style.display = 'flex';
            document.querySelector('.navigatiofloatcontainer').style.display = 'none';
        }
    });
}
function create_Video_Chat() {
    let userschatcontainer = document.querySelectorAll('.userschatcontainer');
    userschatcontainer.forEach(session => {
        LogInFormData.forEach(data => {
            if (data.user_Id === session.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    function create_Friends_VC_Contact() {
                        let video_Call_Popup = document.createElement('section');
                        let mainvideocallmenupopup = document.createElement('div');
                        let videocontainer = document.createElement('div');
                        let Video_Reciever = document.createElement('video');
                        let videocallcover = document.createElement('videocallcover');
                        let videocallsheader = document.createElement('header');
                        let videoheaderright = document.createElement('div');
                        let videocallclose = document.createElement('span');
                        let myvideotransmissioncenter = document.createElement('div');
                        let myTrans_Mitter = document.createElement('video');
                        let videocallbottom = document.createElement('nav');
                        let call_Up = document.createElement('span');
                        let call_Down = document.createElement('span');
                        let call_Mute = document.createElement('div');
                        let call_Unmute = document.createElement('div');
                        document.body.appendChild(video_Call_Popup);
                        video_Call_Popup.appendChild(mainvideocallmenupopup);
                        mainvideocallmenupopup.appendChild(videocontainer);
                        mainvideocallmenupopup.appendChild(videocallcover);
                        videocontainer.appendChild(Video_Reciever);
                        videocallcover.appendChild(videocallsheader);
                        videocallcover.appendChild(myvideotransmissioncenter);
                        videocallcover.appendChild(videocallbottom);
                        myvideotransmissioncenter.appendChild(myTrans_Mitter);

                        videocallbottom.appendChild(call_Mute);
                        videocallbottom.appendChild(call_Down);
                        videocallbottom.appendChild(call_Up);
                        videocallbottom.appendChild(call_Unmute);
                        videocallsheader.appendChild(videoheaderright);
                        videoheaderright.appendChild(videocallclose);
                        videocallclose.innerHTML = '&times;';
                        call_Up.textContent = 'call';
                        call_Down.textContent = 'end';
                        call_Mute.textContent = 'mute';
                        call_Unmute.textContent = 'unmute';
                        call_Down.style.display = 'none';

                        videocallbottom.classList.add('videocallbottom');
                        myvideotransmissioncenter.classList.add('myvideotransmissioncenter');
                        videocallclose.classList.add('videocallclose')
                        videocallsheader.classList.add('videocallsheader');
                        videocallcover.classList.add('videocallcover');
                        videocontainer.classList.add('videocontainer');
                        mainvideocallmenupopup.classList.add('mainvideocallmenupopup');
                        video_Call_Popup.classList.add('video_Call_Popup');
                        video_Call_Popup.classList.add('videocallspopup');
                        video_Call_Popup.classList.add('none');
                        Video_Reciever.classList.add('Video_Reciever');

                        Video_Reciever.id = connect.connectionId + data.user_Id;
                        video_Call_Popup.id = connect.connectionId + data.user_Id;

                        function Get_Notification_Center() {
                            let usersuniversalnotificationcenter = document.querySelectorAll('.usersuniversalnotificationcenter');
                            usersuniversalnotificationcenter.forEach(notification_Center => {
                                if (notification_Center.id === data.user_Id) {
                                    notification_Center.classList.add('callnotificationcenteractive');
                                } else {
                                    notification_Center.classList.remove('callnotificationcenteractive');
                                }
                            });
                            usersuniversalnotificationcenter.forEach(notification_Center => {
                                if (notification_Center.id === data.user_Id) {
                                    notification_Center.innerHTML = '';
                                    let thecallingcontact = document.createElement('div');
                                    let contacthead = document.createElement('span');
                                    let contactprofilepicture = document.createElement('img');
                                    let contactright = document.createElement('div');
                                    let contactname = document.createElement('p');
                                    let mutedtext = document.createElement('b');
                                    //others
                                    let callactioncenter = document.createElement('div');
                                    let call_Accept = document.createElement('span');
                                    let call_Decline = document.createElement('span');
                                    callactioncenter.appendChild(call_Accept);
                                    callactioncenter.appendChild(call_Decline);
                                    call_Accept.textContent = 'Accept';
                                    call_Decline.textContent = 'Decline';
                                    callactioncenter.classList.add('callactioncenter');

                                    notification_Center.appendChild(thecallingcontact);
                                    thecallingcontact.appendChild(contacthead);
                                    thecallingcontact.appendChild(contactright);
                                    thecallingcontact.appendChild(callactioncenter);
                                    contactright.appendChild(contactname);
                                    contactright.appendChild(mutedtext);
                                    contacthead.appendChild(contactprofilepicture);
                                    mutedtext.textContent = 'is calling you';
                                    mutedtext.classList.add('mutedtext');
                                    thecallingcontact.classList.add('thecallingcontact');
                                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                                    LogInFormData.forEach(user => {
                                        if (user.user_Id === connect.connectionId) {
                                            contactprofilepicture.src = user.user_ProfilePicture;
                                            contactname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                                            function filter_Image() {
                                                //profile_filter 
                                                if (user.user_ProfilePicture_Filter == 'default') {
                                                    contactprofilepicture.classList.add('--color-default');
                                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                                    contactprofilepicture.classList.add('--color-gray');
                                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                                    contactprofilepicture.classList.add('--color-contrast');
                                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                                    contactprofilepicture.classList.add('--color-bright');
                                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                                    contactprofilepicture.classList.add('--color-blur');
                                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                                    contactprofilepicture.classList.add('--color-invert');
                                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                                    contactprofilepicture.classList.add('--color-sepia');
                                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                                    contactprofilepicture.classList.add('--color-hue-rotate');
                                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                                    contactprofilepicture.classList.add('--color-opacity');
                                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                                    contactprofilepicture.classList.add('--color-satulate');
                                                }
                                            }
                                            filter_Image();
                                        }
                                    });
                                }
                            });
                        }

                        let call_Connection = [{
                            audio: true,
                            video: {
                                facingMode: 'user'
                            },
                            caller_Id_1: data.user_Id + connect.connectionId,
                            caller_Id_2: connect.connectionId + data.user_Id,
                            is_Answered: false,
                            is_Connected: false,
                        }];


                        function activateVideoCall() {
                            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia(call_Connection)) {
                                navigator.mediaDevices.getUserMedia({
                                    video: true,
                                    audio: true
                                }).then(function (stream) {
                                    myTrans_Mitter.srcObject = stream;
                                    myTrans_Mitter.onloadedmetadata = () => {
                                        myTrans_Mitter.play();
                                    }
                                    document.querySelectorAll('.Video_Reciever').forEach(video => {
                                        if (video.id === data.user_Id + connect.connectionId) {
                                            video.srcObject = stream;
                                        }
                                    });
                                });
                            }
                        }
                        function event_Listeners() {
                            videocallclose.addEventListener('click', () => {
                                video_Call_Popup.style.display = 'none';
                            });

                            call_Mute.addEventListener('click', () => {
                                Video_Reciever.volume = 0;
                            });
                            call_Unmute.addEventListener('click', () => {
                                Video_Reciever.volume = 1;
                            });
                            call_Up.addEventListener('click', () => {
                                Get_Notification_Center();
                                activateVideoCall();
                                call_Down.style.display = 'block';
                                call_Up.style.display = 'none';
                            });
                            call_Down.addEventListener('click', () => {
                                call_Down.style.display = 'none';
                                call_Up.style.display = 'block';
                            });
                        }
                        event_Listeners();
                    }
                    create_Friends_VC_Contact();
                });
            }
        });
    });
}
function createFriendContact() {
    let userscallslistcolumn = document.querySelectorAll('.userscallslistcolumn');
    userscallslistcolumn.forEach(session => {
        session.innerHTML = '';
        LogInFormData.forEach(data => {
            if (data.user_Id === session.id) {
                let connections = data.user_Connection;
                connections.forEach(connect => {
                    let friendcontact = document.createElement('div');
                    let contacthead = document.createElement('span');
                    let contacttail = document.createElement('div');
                    let callbutton = document.createElement('div');
                    let contactname = document.createElement('p');
                    let contactprofilepicture = document.createElement('img');
                    contacthead.appendChild(contactprofilepicture);
                    friendcontact.appendChild(contacthead);
                    friendcontact.appendChild(contacttail);
                    contacttail.appendChild(contactname);
                    contacttail.appendChild(callbutton);
                    session.appendChild(friendcontact);
                    contactname.classList.add('contactname');
                    friendcontact.classList.add('friendcontact');
                    contacthead.classList.add('contacthead');
                    contacttail.classList.add('contacttail');
                    callbutton.classList.add('callbutton');
                    callbutton.textContent = 'view room';
                    callbutton.id = connect.connectionId + data.user_Id;
                    LogInFormData.forEach(user => {
                        if (user.user_Id === connect.connectionId) {
                            contactprofilepicture.src = user.user_ProfilePicture;
                            contactname.textContent = user.user_Firstname + ' ' + user.user_Surname;
                            function filter_Image() {
                                //profile_filter 
                                if (user.user_ProfilePicture_Filter == 'default') {
                                    contactprofilepicture.classList.add('--color-default');
                                } else if (user.user_ProfilePicture_Filter == 'gray') {
                                    contactprofilepicture.classList.add('--color-gray');
                                } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                    contactprofilepicture.classList.add('--color-contrast');
                                } else if (user.user_ProfilePicture_Filter == 'bright') {
                                    contactprofilepicture.classList.add('--color-bright');
                                } else if (user.user_ProfilePicture_Filter == 'blur') {
                                    contactprofilepicture.classList.add('--color-blur');
                                } else if (user.user_ProfilePicture_Filter == 'invert') {
                                    contactprofilepicture.classList.add('--color-invert');
                                } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                    contactprofilepicture.classList.add('--color-sepia');
                                } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                    contactprofilepicture.classList.add('--color-hue-rotate');
                                } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                    contactprofilepicture.classList.add('--color-opacity');
                                } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                    contactprofilepicture.classList.add('--color-satulate');
                                }
                            }
                            filter_Image();
                        }
                    });
                    callbutton.addEventListener('click', () => {
                        document.querySelectorAll('.video_Call_Popup').forEach(popup => {
                            if (popup.id === callbutton.id) {
                                popup.style.display = 'flex';
                            } else {
                                popup.style.display = 'none';
                            }
                        });
                    });
                });
            }
        });
    });
}
createFriendContact(); 