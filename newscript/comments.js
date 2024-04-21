//comments
function removemesgBox() {
    document.querySelectorAll('.mesgBox').forEach(box => {
        box.remove();
    });
};
function CreationOfComments(section, locationId) {
    document.querySelectorAll('.profile_Cliant').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    document.querySelectorAll('.commentsection').forEach(session => {
        if (session.id === locationId) {
            session.innerHTML = '';
        }
    });
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            if (locationId === comment.postId) {
                if (comment.type == 'text') {
                    let commentnameandimg = document.createElement('div');
                    let commentimagecontainer = document.createElement('div');
                    let commentimg = document.createElement('img');
                    let commentname = document.createElement('b');
                    let commentmesg = document.createElement('div');
                    let commentdelete = document.createElement('div');
                    let commenttime = document.createElement('span');
                    let commentpostcontainer = document.createElement('div');
                    let commentpost = document.createElement('div');
                    let reactsflex = document.createElement('div');

                    /*LIKE COUNTS*/
                    let likecounts = document.createElement('span');
                    let replycommentcount = document.createElement('span');

                    let commentreact = document.createElement('div');
                    let commentreply = document.createElement('div');

                    let expand = document.createElement('span');

                    commentdelete.addEventListener('click', () => {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            removeOptions();
                            if (comment.posterId === data.user_Id) {
                                create_Options_Script();
                            } else {
                                view_Options();
                            }
                        });
                    });

                    function view_Options() {
                        let options = document.createElement('div');
                        let first_Option = document.createElement('span');
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let fouth_Option = document.createElement('span');
                        let exit = document.createElement('span');

                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        options.appendChild(fouth_Option);
                        second_Option.innerHTML = commentsvg;
                        first_Option.innerHTML = recreatesvg;
                        third_Option.innerHTML = likesvg;
                        fouth_Option.innerHTML = copysvg;
                        exit.innerHTML = undo;

                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        fouth_Option.classList.add('headerbtns');
                        first_Option.classList.add('first_Option');
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        function copyTextPost(text) {
                            if (navigator.clipboard) {
                                try {
                                    const toCopy = text;
                                    navigator.clipboard.writeText(toCopy);
                                    create_Message('text copied');
                                }
                                catch (err) {
                                    console.error('Failed to copy: ', err);
                                    create_Message('unable to copy');
                                }
                            }
                        }
                        fouth_Option.addEventListener('click', () => {
                            copyTextPost(comment.Property_Src);
                            removeOptions();
                        });
                        function create_replyInputs() {
                            first_Option.remove();
                            second_Option.remove();
                            third_Option.remove();
                            fouth_Option.remove();
                            let mesgBox = document.createElement('div');
                            let mesgTextBox = document.createElement('input');
                            let sendmesg = document.createElement('div');
                            options.appendChild(mesgBox);
                            mesgBox.appendChild(mesgTextBox);
                            mesgTextBox.focus();
                            options.appendChild(sendmesg);
                            sendmesg.innerHTML = sendsvg
                            sendmesg.classList.add('headerbtns');
                            mesgBox.classList.add('mesgBox');
                            mesgTextBox.placeholder = 'send reply...';

                            sendmesg.addEventListener('click', () => {
                                const id = '' + new Date().getTime();
                                set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                options.remove();
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
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let fouth_Option = document.createElement('span');
                        let exit = document.createElement('span');

                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        options.appendChild(fouth_Option);
                        first_Option.innerHTML = deletesvg;
                        second_Option.innerHTML = commentsvg;
                        third_Option.innerHTML = likesvg;
                        exit.innerHTML = undo2;
                        fouth_Option.innerHTML = copysvg;

                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');
                        fouth_Option.classList.add('headerbtns');
                        options.classList.add('options');

                        first_Option.classList.add('first_Option');

                        first_Option.addEventListener('click', () => {
                            delete_Post_Comments(Feeds_Data_Base, comment.postId, comment.id);
                            options.remove();
                        });
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        function copyTextPost(text) {
                            if (navigator.clipboard) {
                                try {
                                    const toCopy = text;
                                    navigator.clipboard.writeText(toCopy);
                                    create_Message('text copied');
                                }
                                catch (err) {
                                    console.error('Failed to copy: ', err);
                                    create_Message('unable to copy');
                                }
                            }
                        }
                        fouth_Option.addEventListener('click', () => {
                            copyTextPost(comment.Property_Src);
                            removeOptions();
                        });
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }
                    expand.innerText = 'see more...';

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - comment.time;
                        var token;
                        var moment = 'ago';
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        }
                    }
                    startTime();
                    commenttime.classList.add('commenttime');
                    expand.style.display = 'none';
                    commentmesg.id = comment.posterId;
                    section.appendChild(commentmesg);

                    commentnameandimg.appendChild(commentimagecontainer);
                    commentnameandimg.appendChild(commentname);
                    commentimagecontainer.appendChild(commentimg);

                    commentmesg.appendChild(commentnameandimg);
                    commentmesg.appendChild(commenttime);
                    commentmesg.appendChild(commentpostcontainer);
                    commentmesg.appendChild(reactsflex);
                    reactsflex.appendChild(commentreact);
                    reactsflex.appendChild(likecounts);
                    reactsflex.appendChild(commentreply);
                    reactsflex.appendChild(replycommentcount);
                    reactsflex.appendChild(commentdelete);
                    //COMMENTS LIKE COUNT
                    replycommentcount.id = comment.id;
                    likecounts.id = comment.id;
                    likecounts.textContent = comment.likes.length;
                    replycommentcount.textContent = comment.comments.length;
                    commentreact.innerHTML = likesvg;
                    commentreply.innerHTML = commentsvg;
                    replycommentcount.classList.add('replycommentcount');
                    commentreact.addEventListener('click', () => {
                        likecomment();
                    });
                    likecounts.classList.add('likecounts');
                    likecounts.addEventListener('click', () => {
                        LikePopupsAndMore(comment.id, 'commentlike', comment.likes.length);
                    });

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            commentreact.id = data.user_Id + comment.id;
                        });
                    }
                    function getCommentsLike() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                comment.likes.forEach(like => {
                                    if (like.postId === comment.id) {
                                        if (like.id === data.user_Id + comment.id) {
                                            likecounts.classList.remove('likecounts');
                                            likecounts.classList.add('likecountsactive');
                                        }
                                    }
                                });
                            });
                        }
                    }

                    getCommentsLike();
                    likecounts.classList.add('comment_like_counters');
                    function addlikecomment() {
                        const id = '' + new Date().getTime();
                        like_Comment(comment.id, comment.postId);
                        pushNotification(comment.Property_Src, id, comment.id, comment.postId, comment.posterId, 'comment_Like', 'comment_Like');
                        CreationOfCommentsLikeLicense();
                    }
                    function removelikecount() {
                        Un_like_Comment(comment.id);
                        CreationOfCommentsLikeLicense();
                    }
                    function likecomment() {
                        if (likecounts.classList.contains('likecounts')) {
                            addlikecomment();
                        } else {
                            removelikecount();
                        }
                    }

                    commentpostcontainer.appendChild(commentpost);
                    commentpostcontainer.classList.add('commentpostcontainer');
                    commentdelete.innerHTML = settingssvg;
                    expand.classList.add('expand');
                    commentdelete.classList.add('commentdelete');
                    commentdelete.classList.add('headerbtns');

                    commentreact.classList.add('replylike');
                    commentreply.classList.add('replylike');

                    commentdelete.id = comment.posterId;

                    reactsflex.classList.add('reactsflex');
                    commentnameandimg.classList.add('commentnameandimg');
                    commentmesg.classList.add('commentmesg');

                    commentname.classList.add('commentname');
                    commentimg.classList.add('commentposterimg');
                    commentpost.classList.add('commentpost');
                    commentpost.textContent = comment.Property_Src;
                    commentpost.appendChild(expand);
                    commentpost.textContent.split(" ").forEach(texttitle => {
                        prefix.forEach(unit => {
                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                if (unit.prefixName == 'https://') {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                } else {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                }
                            }
                        });
                    });
                    /*LIKES&REACTS COUNTS*/
                    if (commentpost.textContent.length > 200) {
                        expand.style.display = 'flex';
                    } else {
                        expand.style.display = 'none';
                    }


                    expand.addEventListener('click', () => {
                        commentpost.classList.toggle('commentpostmoreorless');
                        if (expand.innerText === 'see more...') {
                            expand.innerText = 'see less';
                        } else if (expand.innerText === 'see less') {
                            expand.innerText = 'see more...';
                        } else {
                            expand.innerText = 'see more...'
                        }
                    });
                    commentpost.addEventListener('click', () => {
                        commentpost.classList.toggle('commentpostmoreorless');
                        if (expand.innerText == 'see more...') {
                            expand.innerText = 'see less';
                        } else if (expand.innerText == 'see less') {
                            expand.innerText = 'see more...';
                        } else {
                            expand.innerText = 'see more...'
                        }
                    });

                    commentreply.addEventListener('click', () => {
                        create_Comment_Reply_room(comment.id);
                    });

                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === comment.posterId) {
                                commentimg.src = user.user_ProfilePicture;
                                let username;
                                user.user_Mid_Name ? username = user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                commentname.innerHTML = username;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        commentimg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        commentimg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        commentimg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        commentimg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        commentimg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        commentimg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        commentimg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        commentimg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        commentimg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        commentimg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details();
                    commentimg.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                    commentname.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                } if (comment.type == 'photo') {
                    let commentmesg = document.createElement('div');
                    let commentpostimg = document.createElement('img');
                    let commentpostcontainer = document.createElement('div');
                    let nextcommentcontainer = document.createElement('div');
                    let commentpost = document.createElement('p');
                    let commentimagecontainer = document.createElement('div');
                    let commentnameandimg = document.createElement('div');
                    let commentimg = document.createElement('img');
                    let commentname = document.createElement('b');
                    let reactsflex = document.createElement('div');
                    let commentreact = document.createElement('div');
                    let commentreply = document.createElement('div');
                    let commentpostimgcontainer = document.createElement('div');

                    //COMMENT ROOM

                    let likecounts = document.createElement('span');
                    let replycommentcount = document.createElement('span')
                    let commentdelete = document.createElement('div');
                    let expand = document.createElement('span');
                    let commenttime = document.createElement('span');


                    commentdelete.addEventListener('click', () => {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            removeOptions();
                            if (comment.posterId === data.user_Id) {
                                create_Options_Script();
                            } else {
                                view_Options();
                            }
                        });
                    });


                    function view_Options() {
                        let options = document.createElement('div');
                        let first_Option = document.createElement('span');
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let exit = document.createElement('span');
                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        first_Option.innerHTML = recreatesvg;
                        second_Option.innerHTML = commentsvg;
                        third_Option.innerHTML = likesvg;
                        exit.innerHTML = undo;

                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        first_Option.classList.add('first_Option');
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        if (comment.caption) {
                            let fouth_Option = document.createElement('span');
                            options.appendChild(fouth_Option);
                            fouth_Option.innerHTML = copysvg;
                            fouth_Option.classList.add('headerbtns');

                            function copyTextPost(text) {
                                if (navigator.clipboard) {
                                    try {
                                        const toCopy = text;
                                        navigator.clipboard.writeText(toCopy);
                                        create_Message('text copied');
                                    } catch (err) {
                                        console.error('Failed to copy: ', err);
                                        create_Message('unable to copy');
                                    }
                                }
                            }
                            fouth_Option.addEventListener('click', () => {
                                copyTextPost(comment.caption);
                                removeOptions();
                            });
                            first_Option.addEventListener('click', () => {
                                fouth_Option.remove();
                            });
                        }
                        function create_replyInputs() {
                            first_Option.remove();
                            second_Option.remove();
                            third_Option.remove();
                            let mesgBox = document.createElement('div');
                            let mesgTextBox = document.createElement('input');
                            let sendmesg = document.createElement('div');
                            options.appendChild(mesgBox);
                            mesgBox.appendChild(mesgTextBox);
                            mesgTextBox.focus();
                            options.appendChild(sendmesg);
                            sendmesg.innerHTML = sendsvg
                            sendmesg.classList.add('headerbtns');
                            mesgBox.classList.add('mesgBox');
                            mesgTextBox.placeholder = 'send reply...';

                            sendmesg.addEventListener('click', () => {
                                const id = '' + new Date().getTime();
                                set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                options.remove();
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
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let exit = document.createElement('span');

                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        first_Option.innerHTML = deletesvg;
                        second_Option.innerHTML = commentsvg;
                        third_Option.innerHTML = likesvg;
                        exit.innerHTML = undo2;

                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');

                        options.classList.add('options');

                        first_Option.classList.add('first_Option');

                        first_Option.addEventListener('click', () => {
                            delete_Post_Comments(Feeds_Data_Base, comment.postId, comment.id);
                            options.remove();
                        });
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        if (comment.caption) {
                            let fouth_Option = document.createElement('span');
                            options.appendChild(fouth_Option);
                            fouth_Option.innerHTML = copysvg;
                            fouth_Option.classList.add('headerbtns');

                            function copyTextPost(text) {
                                if (navigator.clipboard) {
                                    try {
                                        const toCopy = text;
                                        navigator.clipboard.writeText(toCopy);
                                        create_Message('text copied');
                                    } catch (err) {
                                        console.error('Failed to copy: ', err);
                                        create_Message('unable to copy');
                                    }
                                }
                            }
                            fouth_Option.addEventListener('click', () => {
                                copyTextPost(comment.caption);
                                removeOptions();
                            });
                            first_Option.addEventListener('click', () => {
                                fouth_Option.remove();
                            });
                        }
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - comment.time;
                        var token;
                        var moment = 'ago';
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        }
                    }
                    startTime();

                    commenttime.classList.add('commenttime');
                    replycommentcount.id = comment.id;
                    likecounts.id = comment.id;
                    likecounts.textContent = comment.likes.length;
                    replycommentcount.textContent = comment.comments.length;
                    commentreact.innerHTML = likesvg;
                    commentreply.innerHTML = commentsvg;
                    replycommentcount.classList.add('replycommentcount');

                    commentmesg.id = comment.inputId;
                    section.appendChild(commentmesg);
                    commentmesg.appendChild(commentnameandimg);
                    commentmesg.appendChild(commenttime);
                    commentmesg.appendChild(commentpostcontainer);
                    commentmesg.appendChild(reactsflex);
                    commentpostcontainer.appendChild(nextcommentcontainer);

                    commentnameandimg.appendChild(commentimagecontainer);
                    commentnameandimg.appendChild(commentname);
                    commentimagecontainer.appendChild(commentimg);

                    reactsflex.appendChild(commentreact);
                    reactsflex.appendChild(likecounts);
                    reactsflex.appendChild(commentreply);
                    reactsflex.appendChild(replycommentcount);
                    reactsflex.appendChild(commentdelete);
                    commentreact.classList.add('replylike');
                    commentreply.classList.add('replylike');
                    function themeCommentMode() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        if (user.user_Mode == 'defaultTheme') {
                                            commentreact.classList.remove('darkmodeicons');
                                            commentreply.classList.remove('darkmodeicons');
                                        } else if (user.user_Mode == 'darkTheme') {
                                            commentreact.classList.add('darkmodeicons');
                                            commentreply.classList.add('darkmodeicons');
                                        } else if (user.user_Mode == 'lightOffTheme') {
                                            commentreact.classList.add('darkmodeicons');
                                            commentreply.classList.add('darkmodeicons');
                                        }
                                    }
                                });

                            });
                        }
                    }
                    themeCommentMode();
                    commentdelete.id = comment.posterId;
                    /*LIKES&REACTS COUNTS*/
                    likecounts.classList.add('likecounts');
                    commentpostcontainer.classList.add('commentpostcontainer');
                    commentdelete.classList.add('commentdelete');
                    commentdelete.classList.add('headerbtns');
                    expand.innerText = 'see more...';
                    commentdelete.innerHTML = settingssvg;

                    reactsflex.classList.add('reactsflex');
                    expand.classList.add('expand');
                    commentmesg.classList.add('commentmesg');
                    commentpost.classList.add('commentpost');
                    commentnameandimg.classList.add('commentnameandimg');
                    commentimg.classList.add('commentposterimg');
                    commentname.classList.add('commentname');
                    commentpostimg.classList.add('commentpostimg');
                    commentpostimg.src = comment.Property_Src;
                    commentpost.textContent = comment.caption;
                    commentpost.appendChild(expand);
                    commentpost.textContent.split(" ").forEach(texttitle => {
                        prefix.forEach(unit => {
                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                if (unit.prefixName == 'https://') {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                } else {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                }
                            }
                        });
                    });
                    commentpostimgcontainer.appendChild(commentpostimg);
                    nextcommentcontainer.appendChild(commentpostimgcontainer);
                    nextcommentcontainer.appendChild(commentpost);
                    nextcommentcontainer.classList.add('nextcommentcontainer');
                    commentpostimgcontainer.classList.add('commentpostimgcontainer');

                    commentpostimg.addEventListener('click', () => {
                        create_Random_Items(comment.id, comment.posterId, comment.caption, comment.Property_Src, comment.type, 'comment', commenttime.innerHTML);
                    });

                    if (commentpost.textContent.length > 200) {
                        expand.style.display = 'block';
                    } else {
                        expand.style.display = 'none';
                    }
                    commentreply.addEventListener('click', () => {
                        create_Comment_Reply_room(comment.id);
                    });

                    expand.addEventListener('click', () => {
                        commentpost.classList.toggle('commentpostmoreorless');
                        if (expand.innerText == 'see more...') {
                            expand.innerText = 'see less';
                        } else if (expand.innerText == 'see less') {
                            expand.innerText = 'see more...';
                        } else {
                            expand.innerText = 'see more...'
                        }
                    });
                    commentpost.addEventListener('click', () => {
                        if (expand.textContent == 'see more...') {
                            expand.textContent = 'see less.'
                            commentpost.classList.toggle('commentpostactive');
                        } else if (expand.textContent == 'see less.') {
                            expand.textContent = 'see more...';
                            commentpost.classList.toggle('commentpostactive');
                        }
                    });


                    commentreact.addEventListener('click', () => {
                        likecomment();
                    });

                    likecounts.addEventListener('click', () => {
                        LikePopupsAndMore(comment.id, 'commentlike', comment.likes.length);
                    });
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            commentreact.id = data.user_Id + comment.id;
                        });
                    }

                    function getCommentsLike() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                comment.likes.forEach(like => {
                                    if (like.postId === comment.id) {
                                        if (like.id === data.user_Id + comment.id) {
                                            likecounts.classList.remove('likecounts');
                                            likecounts.classList.add('likecountsactive');
                                        }
                                    }
                                });
                            });
                        }
                    }

                    getCommentsLike();
                    likecounts.classList.add('comment_like_counters');
                    function addlikecomment() {
                        const id = '' + new Date().getTime();
                        likecounts.classList.remove('likecounts');
                        likecounts.classList.add('likecountsactive');
                        like_Comment(comment.id, comment.postId);
                        pushNotification(comment.caption, id, comment.id, comment.posterId, 'comment_Like', 'comment_Like');
                        CreationOfCommentsLikeLicense();
                    }
                    function removelikecount() {
                        likecounts.classList.add('likecounts');
                        likecounts.classList.remove('likecountsactive');
                        Un_like_Comment();
                        CreationOfCommentsLikeLicense();
                    }
                    function likecomment() {
                        if (likecounts.classList.contains('likecounts')) {
                            addlikecomment();
                        } else {
                            removelikecount();
                        }
                    }


                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === comment.posterId) {
                                commentimg.src = user.user_ProfilePicture;
                                let username;
                                user.user_Mid_Name ? username = 
                                user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                username = user.user_Firstname + ' ' + user.user_Surname;
                                commentname.innerHTML = username;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        commentimg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        commentimg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        commentimg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        commentimg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        commentimg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        commentimg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        commentimg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        commentimg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        commentimg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        commentimg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details()
                    commentimg.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                    commentname.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                } if (comment.type == 'video') {
                    let commentmesg = document.createElement('div');
                    let commentpostvdieocontainer = document.createElement('div');
                    let commentpostvideo = document.createElement('video');

                    let commentvideoplayer = document.createElement('span');
                    let commentplay = document.createElement('span');
                    let commentplayimg = document.createElement('img');

                    let commenttime = document.createElement('span');
                    let commentpostcontainer = document.createElement('div');
                    let nextcommentcontainer = document.createElement('div');
                    let commentpost = document.createElement('p');

                    let commentimagecontainer = document.createElement('div');
                    let commentnameandimg = document.createElement('div');
                    let commentimg = document.createElement('img');
                    let commentname = document.createElement('b');
                    let reactsflex = document.createElement('div');
                    let commentreact = document.createElement('div');
                    let commentreply = document.createElement('div');


                    let likecounts = document.createElement('span');
                    let replycommentcount = document.createElement('span');
                    let commentdelete = document.createElement('div');
                    let expand = document.createElement('span');


                    commentdelete.addEventListener('click', () => {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            removeOptions();
                            if (comment.posterId === data.user_Id) {
                                create_Options_Script();
                            } else {
                                view_Options();
                            }
                        });
                    });


                    function view_Options() {
                        let options = document.createElement('div');
                        let first_Option = document.createElement('span');
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let exit = document.createElement('span');

                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        second_Option.innerHTML = commentsvg;
                        first_Option.innerHTML = recreatesvg;
                        third_Option.innerHTML = likesvg;
                        exit.innerHTML = undo;

                        options.classList.add('options');
                        first_Option.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        if (comment.caption) {
                            let fouth_Option = document.createElement('span');
                            options.appendChild(fouth_Option);
                            fouth_Option.innerHTML = copysvg;
                            fouth_Option.classList.add('headerbtns');

                            function copyTextPost(text) {
                                if (navigator.clipboard) {
                                    try {
                                        const toCopy = text;
                                        navigator.clipboard.writeText(toCopy);
                                        create_Message('text copied');
                                    } catch (err) {
                                        console.error('Failed to copy: ', err);
                                        create_Message('unable to copy');
                                    }
                                }
                            }
                            fouth_Option.addEventListener('click', () => {
                                copyTextPost(comment.caption);
                                removeOptions();
                            });
                            first_Option.addEventListener('click', () => {
                                fouth_Option.remove();
                            });
                        }
                        function create_replyInputs() {
                            first_Option.remove();
                            second_Option.remove();
                            third_Option.remove();
                            removemesgBox();
                            let mesgBox = document.createElement('div');
                            let mesgTextBox = document.createElement('input');
                            let sendmesg = document.createElement('div');
                            options.appendChild(mesgBox);
                            mesgBox.appendChild(mesgTextBox);
                            mesgTextBox.focus();
                            options.appendChild(sendmesg);
                            sendmesg.innerHTML = sendsvg
                            sendmesg.classList.add('headerbtns');
                            mesgBox.classList.add('mesgBox');
                            mesgTextBox.placeholder = 'send reply...';

                            sendmesg.addEventListener('click', () => {
                                const id = '' + new Date().getTime();
                                set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                options.remove();
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
                        let second_Option = document.createElement('span');
                        let third_Option = document.createElement('span');
                        let exit = document.createElement('span');

                        first_Option.id = comment.id;
                        section.insertAdjacentElement("afterend", options);
                        options.appendChild(exit);
                        options.appendChild(first_Option);
                        options.appendChild(second_Option);
                        options.appendChild(third_Option);
                        first_Option.innerHTML = deletesvg;
                        second_Option.innerHTML = commentsvg;
                        third_Option.innerHTML = likesvg;
                        exit.innerHTML = undo2;

                        first_Option.classList.add('headerbtns');
                        exit.classList.add('headerbtns');
                        second_Option.classList.add('headerbtns');
                        third_Option.classList.add('headerbtns');

                        options.classList.add('options');

                        first_Option.classList.add('first_Option');

                        first_Option.addEventListener('click', () => {
                            delete_Post_Comments(Feeds_Data_Base, comment.postId, comment.id);
                            options.remove();
                        });
                        second_Option.addEventListener('click', () => {
                            create_Comment_Reply_room(comment.id);
                        });
                        third_Option.addEventListener('click', () => {
                            likecomment();
                        });
                        if (comment.caption) {
                            let fouth_Option = document.createElement('span');
                            options.appendChild(fouth_Option);
                            fouth_Option.innerHTML = copysvg;
                            fouth_Option.classList.add('headerbtns');

                            function copyTextPost(text) {
                                if (navigator.clipboard) {
                                    try {
                                        const toCopy = text;
                                        navigator.clipboard.writeText(toCopy);
                                        create_Message('text copied');
                                    } catch (err) {
                                        console.error('Failed to copy: ', err);
                                        create_Message('unable to copy');
                                    }
                                }
                            }
                            fouth_Option.addEventListener('click', () => {
                                copyTextPost(comment.caption);
                                removeOptions();
                            });
                            first_Option.addEventListener('click', () => {
                                fouth_Option.remove();
                            });
                        }
                        exit.addEventListener('click', () => {
                            options.remove();
                        });
                    }

                    commentreact.classList.add('replylike');
                    commentreply.classList.add('replylike');

                    function themeCommentMode() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                LogInFormData.forEach(user => {
                                    if (user.user_Id === data.user_Id) {
                                        if (user.user_Mode == 'defaultTheme') {
                                            commentreact.classList.remove('darkmodeicons');
                                            commentreply.classList.remove('darkmodeicons');
                                        } else if (user.user_Mode == 'darkTheme') {
                                            commentreact.classList.add('darkmodeicons');
                                            commentreply.classList.add('darkmodeicons');
                                        } else if (user.user_Mode == 'lightOffTheme') {
                                            commentreact.classList.add('darkmodeicons');
                                            commentreply.classList.add('darkmodeicons');
                                        }
                                    }
                                });

                            });
                        }
                    }
                    themeCommentMode();

                    commentdelete.id = comment.posterId;

                    const startTime = function () {
                        let time;
                        let timeresult = new Date().getTime();
                        let miliseconds = timeresult - comment.time;
                        var token;
                        var moment = 'ago';
                        let maintime;

                        time = miliseconds / 1000;
                        if (time <= 60 * 60 * 24 * 7 * 4 * 12) {
                            token = 'month';
                            maintime = time / 2419200;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7 * 4) {
                            token = 'week';
                            maintime = time / 604800;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24 * 7) {
                            token = 'day';
                            maintime = time / 86400;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60 * 24) {
                            token = 'hr';
                            maintime = time / 3600;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60 * 60) {
                            token = 'min';
                            maintime = time / 60;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        } if (time <= 60) {
                            token = 'sec';
                            maintime = time;
                            commenttime.innerHTML = Math.trunc(maintime) + ' ' + token + ' ' + moment;
                        }
                    }
                    startTime();

                    commentmesg.id = comment.inputId;
                    section.appendChild(commentmesg);

                    commenttime.classList.add('commenttime');
                    commentmesg.appendChild(commentnameandimg);
                    commentmesg.appendChild(commenttime);
                    commentmesg.appendChild(commentpostcontainer);
                    commentmesg.appendChild(reactsflex);

                    commentnameandimg.appendChild(commentimagecontainer);
                    commentnameandimg.appendChild(commentname);
                    commentimagecontainer.appendChild(commentimg);

                    commentvideoplayer.appendChild(commentplay);
                    commentplay.appendChild(commentplayimg);
                    commentplayimg.src = 'icons/play.png';
                    commentdelete.innerHTML = settingssvg;
                    commentdelete.classList.add('commentdelete');
                    commentdelete.classList.add('headerbtns');

                    /*LIKES&REACTS COUNTS*/
                    reactsflex.appendChild(commentreact);
                    reactsflex.appendChild(likecounts);
                    reactsflex.appendChild(commentreply);
                    reactsflex.appendChild(replycommentcount);
                    reactsflex.appendChild(commentdelete);
                    commentvideoplayer.classList.add('commentvideoplayer');
                    commentplay.classList.add('commentplay');
                    likecounts.classList.add('likecounts');
                    replycommentcount.classList.add('replycommentcount');
                    expand.innerText = 'see more...';
                    commentreact.innerHTML = likesvg;
                    commentreply.innerHTML = commentsvg;

                    reactsflex.classList.add('reactsflex');
                    expand.classList.add('expand');
                    commentmesg.classList.add('commentmesg');
                    commentpost.classList.add('commentpost');
                    commentnameandimg.classList.add('commentnameandimg');
                    commentimg.classList.add('commentposterimg');
                    commentname.classList.add('commentname');
                    commentpostvdieocontainer.classList.add('commentpostvdieocontainer');
                    commentpostvideo.classList.add('commentpostimg');
                    commentpostvideo.src = comment.Property_Src;
                    commentpost.textContent = comment.caption;
                    commentpost.appendChild(expand);
                    commentpost.textContent.split(" ").forEach(texttitle => {
                        prefix.forEach(unit => {
                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                if (unit.prefixName == 'https://') {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                } else {
                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                    commentpost.innerHTML = newtitle;
                                }
                            }
                        });
                    });
                    commentpostcontainer.appendChild(nextcommentcontainer);
                    commentpostvdieocontainer.appendChild(commentpostvideo);
                    commentpostvdieocontainer.appendChild(commentvideoplayer);
                    nextcommentcontainer.appendChild(commentpostvdieocontainer);
                    nextcommentcontainer.appendChild(commentpost);
                    commentpostcontainer.classList.add('commentpostcontainer');
                    nextcommentcontainer.classList.add('nextcommentcontainer');

                    if (commentpost.textContent.length > 200) {
                        expand.style.display = 'block';
                    } else {
                        expand.style.display = 'none';
                    }

                    commentpostvdieocontainer.addEventListener('click', () => {
                        create_Random_Items(comment.id, comment.posterId, comment.caption, comment.Property_Src, comment.type, 'comment', commenttime.innerHTML);
                    });

                    commentreply.addEventListener('click', () => {
                        create_Comment_Reply_room(comment.id);
                    });

                    expand.addEventListener('click', () => {
                        commentpost.classList.toggle('commentpostmoreorless');
                        if (expand.innerText == 'see more...') {
                            expand.innerText = 'see less';
                        } else if (expand.innerText == 'see less') {
                            expand.innerText = 'see more...';
                        } else {
                            expand.innerText = 'see more...'
                        }
                    });
                    commentpost.addEventListener('click', () => {
                        if (expand.textContent == 'see more...') {
                            expand.textContent = 'see less.'
                            commentpost.classList.toggle('commentpostactive');
                        } else if (expand.textContent == 'see less.') {
                            expand.textContent = 'see more...';
                            commentpost.classList.toggle('commentpostactive');
                        }
                    });

                    //COMMENTS LIKE COUNT
                    likecounts.textContent = comment.likes.length;
                    replycommentcount.textContent = comment.comments.length;
                    replycommentcount.id = comment.id;
                    likecounts.id = comment.id;
                    replycommentcount.classList.add('replycommentcount');
                    commentreact.addEventListener('click', () => {
                        likecomment();
                    });
                    likecounts.addEventListener('click', () => {
                        LikePopupsAndMore(comment.id, 'commentlike', comment.likes.length);
                    });

                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            commentreact.id = data.user_Id + comment.id;
                        });
                    }

                    function getCommentsLike() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                comment.likes.forEach(like => {
                                    if (like.postId === comment.id) {
                                        if (like.id === data.user_Id + comment.id) {
                                            likecounts.classList.remove('likecounts');
                                            likecounts.classList.add('likecountsactive');
                                        }
                                    }
                                });
                            });
                        }
                    }

                    getCommentsLike();
                    likecounts.classList.add('comment_like_counters');
                    function addlikecomment() {
                        const id = '' + new Date().getTime();
                        likecounts.classList.remove('likecounts');
                        likecounts.classList.add('likecountsactive');
                        like_Comment(comment.id, comment.postId);
                        pushNotification(comment.caption, id, comment.id, comment.posterId, 'comment_Like', 'comment_Like');
                        CreationOfCommentsLikeLicense();
                    }
                    function removelikecount() {
                        likecounts.classList.add('likecounts');
                        likecounts.classList.remove('likecountsactive');
                        Un_like_Comment();
                        CreationOfCommentsLikeLicense();
                    }
                    function likecomment() {
                        if (likecounts.classList.contains('likecounts')) {
                            addlikecomment();
                        } else {
                            removelikecount();
                        }
                    }


                    function Poster_Details() {
                        LogInFormData.forEach(user => {
                            if (user.user_Id === comment.posterId) {
                                commentimg.src = user.user_ProfilePicture;
                                let username;
                                user.user_Mid_Name ? username = user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                    username = user.user_Firstname + ' ' + user.user_Surname;
                                commentname.innerHTML = username;
                                function filter_Image() {
                                    //profile_filter 
                                    if (user.user_ProfilePicture_Filter == 'default') {
                                        commentimg.classList.add('--color-default');
                                    } else if (user.user_ProfilePicture_Filter == 'gray') {
                                        commentimg.classList.add('--color-gray');
                                    } else if (user.user_ProfilePicture_Filter == 'contrast') {
                                        commentimg.classList.add('--color-contrast');
                                    } else if (user.user_ProfilePicture_Filter == 'bright') {
                                        commentimg.classList.add('--color-bright');
                                    } else if (user.user_ProfilePicture_Filter == 'blur') {
                                        commentimg.classList.add('--color-blur');
                                    } else if (user.user_ProfilePicture_Filter == 'invert') {
                                        commentimg.classList.add('--color-invert');
                                    } else if (user.user_ProfilePicture_Filter == 'sepia') {
                                        commentimg.classList.add('--color-sepia');
                                    } else if (user.user_ProfilePicture_Filter == 'hue-rotate') {
                                        commentimg.classList.add('--color-hue-rotate');
                                    } else if (user.user_ProfilePicture_Filter == 'opacity') {
                                        commentimg.classList.add('--color-opacity');
                                    } else if (user.user_ProfilePicture_Filter == 'satulate') {
                                        commentimg.classList.add('--color-satulate');
                                    }
                                }
                                filter_Image();
                            }
                        });
                    }
                    Poster_Details()
                    commentimg.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                    commentname.addEventListener('click', () => {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account.forEach(user => {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'))
                                createProfileOptions(comment.posterId, user.user_Id);
                            });
                        }
                    });
                }
            }
        });
    });
}

function create_Comment_Reply_room(locationId) {
    document.querySelectorAll('.commentroomsectionactive').forEach(popup => {
        popup.remove();
    });
    document.querySelectorAll('.profile_Cliant').forEach(popup => {
        popup.remove();
    });
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            if (comment.id === locationId) {
                let replyroom = document.createElement('div');
                let replyroomculomn = document.createElement('div');
                let commentmovebackward = document.createElement('span');
                let newcommentinput = document.createElement('div');
                let newcommentinputinput = document.createElement('input');
                let newcommentinputsend = document.createElement('div');

                let commentattachmenticon = document.createElement('div');

                newcommentinputsend.innerHTML = sendsvg;
                commentattachmenticon.innerHTML = moresvg;
                newcommentinputsend.classList.add('headerbtns');
                commentattachmenticon.classList.add('headerbtns');

                //extensions
                let actitionbtnscontainer = document.createElement('div');
                let commentactiongrid = document.createElement('div');
                let commentrefreshbtn = document.createElement('span');
                commentmovebackward.innerHTML = undo;
                commentrefreshbtn.innerHTML = recreatesvg;
                replyroom.appendChild(commentactiongrid);
                commentactiongrid.appendChild(actitionbtnscontainer);
                replyroom.appendChild(replyroomculomn)
                replyroom.appendChild(newcommentinput);
                commentactiongrid.classList.add('commentactiongrid');
                actitionbtnscontainer.classList.add('actitionbtnscontainer');
                actitionbtnscontainer.appendChild(commentmovebackward);
                actitionbtnscontainer.appendChild(commentrefreshbtn);

                commentmovebackward.classList.add('headerbtns');
                commentrefreshbtn.classList.add('headerbtns');
                commentmovebackward.classList.add('sharegridlike');
                commentrefreshbtn.classList.add('sharegridlike');

                replyroomculomn.id = comment.id;
                replyroom.id = comment.id;
                function create_Options_Script() {
                    let options = document.createElement('div');
                    let exit = document.createElement('span');

                    let sharegridview = document.createElement('div');
                    let sharegridlike = document.createElement('div');
                    let sharegridphotoo = document.createElement('div');

                    replyroomculomn.insertAdjacentElement("afterend", options);
                    options.appendChild(exit);
                    options.appendChild(sharegridview);
                    options.appendChild(sharegridlike);
                    options.appendChild(sharegridphotoo);

                    exit.innerHTML = undo2;
                    sharegridlike.innerHTML = likesvg;
                    sharegridphotoo.innerHTML = createsvg;
                    sharegridview.innerHTML = focussvg;

                    sharegridview.classList.add('headerbtns');
                    sharegridlike.classList.add('headerbtns');
                    sharegridphotoo.classList.add('headerbtns');
                    sharegridview.classList.add('sharegridlike');
                    sharegridlike.classList.add('sharegridlike');
                    sharegridphotoo.classList.add('sharegridlike');
                    exit.classList.add('headerbtns');

                    options.classList.add('options');
                    function checkIfPostIsLiked() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                let likes = feed.likes;
                                likes.forEach(like => {
                                    if (like.id === data.user_Id + feed.id) {
                                        sharegridlike.classList.add('sharegridliked');
                                        sharegridlike.classList.remove('sharegridlike');
                                    }
                                });
                            });
                        }
                    }
                    checkIfPostIsLiked();
                    sharegridlike.addEventListener('click', () => {
                        makeLike();
                    });
                    sharegridview.addEventListener('click', () => {
                        replyroom.remove();
                        create_Comment_room(comment.postId);
                    });
                    sharegridphotoo.addEventListener('click', () => {
                        if (comment.type == 'text') {
                            Media_Comment_Reply_Popup(comment.id, comment.postId, comment.posterId, comment.Property_Src);
                        } else {
                            Media_Comment_Reply_Popup(comment.id, comment.postId, comment.posterId, comment.caption);
                        }
                    });
                    function getCommentsLike() {
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                comment.likes.forEach(like => {
                                    if (like.postId === comment.id) {
                                        if (like.id === data.user_Id + comment.id) {
                                            sharegridlike.classList.remove('sharegridlike');
                                            sharegridlike.classList.add('sharegridliked');
                                        }
                                    }
                                });
                            });
                        }
                    }

                    getCommentsLike();
                    function decideRight() {
                        const id = '' + new Date().getTime();
                        sharegridlike.classList.remove('sharegridlike');
                        sharegridlike.classList.add('sharegridliked');
                        like_Comment(comment.id, comment.postId);
                        pushNotification(comment.Property_Src, id, comment.id, comment.postId, comment.posterId, 'comment_Like', 'comment_Like');
                        CreationOfCommentsLikeLicense();
                    }
                    function decideLeft() {
                        sharegridlike.classList.add('sharegridlike');
                        sharegridlike.classList.remove('sharegridliked');
                        Un_like_Comment(comment.id);
                        CreationOfCommentsLikeLicense();
                    }

                    function makeLike() {
                        if (sharegridlike.classList.contains('sharegridlike')) {
                            decideRight();
                        } else if (sharegridlike.classList.contains('sharegridliked')) {
                            decideLeft();
                        }
                    }
                    exit.addEventListener('click', () => {
                        options.remove();
                    });
                }
                commentrefreshbtn.addEventListener('click', () => {
                    replyroomculomn.innerHTML = '';
                    let commentroomsectionreloadloader = document.createElement('div');
                    replyroom.appendChild(commentroomsectionreloadloader);
                    commentroomsectionreloadloader.classList.add('commentroomsectionreloadloader');
                    setTimeout(() => {
                        commentroomsectionreloadloader.remove();
                        createcommentreplys(replyroomculomn, comment.id);
                    }, 2000);
                });

                newcommentinput.classList.add('newcommentinput');
                newcommentinput.appendChild(newcommentinputinput);
                newcommentinput.appendChild(commentattachmenticon);
                newcommentinput.appendChild(newcommentinputsend);
                replyroomculomn.classList.add('replyroomculomn');
                document.body.appendChild(replyroom);
                replyroom.classList.add('commentroomsection');
                replyroom.classList.add('commentroomsectionactive');
                newcommentinputinput.setAttribute(`placeholder`, 'post reply...');
                commentmovebackward.addEventListener('click', () => {
                    replyroom.classList.toggle('commentroomsectionactive');
                });
                newcommentinputsend.addEventListener('click', () => {
                    if (newcommentinputinput.value) {
                        const id = '' + new Date().getTime();
                        set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'reply', 'text', newcommentinputinput.value);
                        pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply');
                        newcommentinputinput.value = '';
                    }
                    commentattachmenticon.classList.remove('replyimagelost');
                    newcommentinputsend.classList.remove('commentreplysendreadystate');
                });
                commentattachmenticon.addEventListener('click', () => {
                    create_Options_Script();
                });
                createcommentreplys(replyroomculomn, locationId);
                external_loader(replyroomculomn);
            }
        });
    });
}
function Media_Comment_Reply_Popup(locationId, postId, posterId, caption) {
    document.querySelectorAll('.mediacommentspopup').forEach(popup => {
        popup.remove();
    });
    //SHARE PHOTOS AND VIDEOS SEND IN REPLY ROOM
    let mediacommentspopup = document.createElement('nav');
    let photoexit = document.createElement('span');
    let uploadpreviewcontainer = document.createElement('div');
    let shareimagecontainer = document.createElement('div');
    let sharevideocontainer = document.createElement('div');
    let newphotolabel = document.createElement('label');
    let newvideolabel = document.createElement('label');
    let shareimg = document.createElement('img');
    let sharevideo = document.createElement('video');
    let sharephotosend = document.createElement('button');
    let sharevideosend = document.createElement('button');
    let captionBox = document.createElement('div');
    let captionBoxinput = document.createElement('input');
    let sharephotoinput = document.createElement('input');
    let sharevideoinput = document.createElement('input');

    let header = document.createElement('header');
    let popup_Names_Container = document.createElement('div');
    let Names_title = document.createElement('strong');
    let subactions = document.createElement('div');

    let clickAndUploadContainer = document.createElement('div');

    let firsttext = document.createElement('span');
    let secondtext = document.createElement('span');
    photoexit.innerHTML = undo;
    photoexit.classList.add('headerbtns');
    clickAndUploadContainer.classList.add('clickAndUploadContainer');
    popup_Names_Container.classList.add('popup_Names_Container');
    subactions.classList.add('subactions');
    sharephotoinput.type = 'file';
    sharevideoinput.type = 'file';
    sharephotoinput.accept = 'image/*';
    sharevideoinput.accept = 'video/*';
    sharephotoinput.id = postId + locationId + 'photoreply';
    sharevideoinput.id = postId + locationId + 'videoreply';
    const photoreplyId = sharephotoinput.id;
    const videoreplyId = sharevideoinput.id;

    newphotolabel.htmlFor = photoreplyId;
    newvideolabel.htmlFor = videoreplyId;
    sharephotoinput.onchange = replyphotoExecuted;
    sharevideoinput.onchange = replyvideoExecuted;
    function replyphotoExecuted() {
        let reader = new FileReader();
        reader.readAsDataURL(sharephotoinput.files[0]);
        reader.onload = function () {
            shareimg.src = reader.result;
        }
    }
    function replyvideoExecuted() {
        let reader = new FileReader();
        reader.readAsDataURL(sharevideoinput.files[0]);
        reader.onload = function () {
            sharevideo.src = reader.result;
        }
    }
    function pushreplyphotocomment(id, postId, relationId, target, type, caption, Property_Src) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comm_ent => {
                        if (comm_ent.id === postId) {
                            let commentreplies = comm_ent.comments;
                            commentreplies.push({
                                relationId: relationId,
                                postId: postId,
                                type: type,
                                target: target,
                                Property_Src: Property_Src,
                                caption: caption,
                                posterId: data.user_Id,
                                id: id,
                                time: new Date().getTime(),
                                date: trackingDate,
                                inputId: postId,
                                likes: []
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            document.querySelectorAll('.replyroomculomn').forEach(section => {
                                if (section.id === locationId) {
                                    createcommentreplys(section, locationId);
                                } else {
                                    createcommentreplys(locationId);
                                }
                            });
                        }
                    });
                });
            });
        }
    }
    sharephotosend.addEventListener('click', () => {
        if (shareimg.src) {
            const id = '' + new Date().getTime();
            pushreplyphotocomment(id, locationId, postId, 'reply', 'photo', captionBoxinput.value, shareimg.src);
            pushNotification(caption, id, locationId, posterId, 'comment_Reply');
            captionBoxinput.value = '';
            mediacommentspopup.remove();
        }
    });
    sharevideosend.addEventListener('click', () => {
        if (sharevideo.src) {
            const id = '' + new Date().getTime();
            pushreplyphotocomment(id, locationId, postId, 'reply', 'video', captionBoxinput.value, sharevideo.src);
            pushNotification(caption, id, locationId, posterId, 'comment_Reply');
            captionBoxinput.value = '';
            mediacommentspopup.remove();
        }
    });

    document.body.appendChild(mediacommentspopup);
    mediacommentspopup.appendChild(header);
    mediacommentspopup.appendChild(uploadpreviewcontainer);
    mediacommentspopup.appendChild(clickAndUploadContainer);
    mediacommentspopup.appendChild(subactions);

    uploadpreviewcontainer.appendChild(shareimagecontainer);
    uploadpreviewcontainer.appendChild(sharevideocontainer);

    shareimagecontainer.appendChild(shareimg);
    sharevideocontainer.appendChild(sharevideo);

    clickAndUploadContainer.appendChild(newphotolabel);
    clickAndUploadContainer.appendChild(newvideolabel);

    newphotolabel.appendChild(sharephotoinput);
    newvideolabel.appendChild(sharevideoinput);

    subactions.appendChild(captionBox);
    subactions.appendChild(sharephotosend);
    subactions.appendChild(sharevideosend);

    header.appendChild(photoexit);
    header.appendChild(popup_Names_Container);
    popup_Names_Container.appendChild(Names_title);

    Names_title.textContent = 'Media Comment';

    newphotolabel.innerHTML = imagesvg;
    newvideolabel.innerHTML = videosvg;
    newphotolabel.appendChild(firsttext);
    newvideolabel.appendChild(secondtext);

    firsttext.textContent = 'photo';
    secondtext.textContent = 'video';

    sharephotoinput.classList.add('sharephotoinput');
    sharevideoinput.classList.add('sharephotoinput');
    captionBox.appendChild(captionBoxinput);
    captionBoxinput.placeholder = 'add caption...';
    newphotolabel.addEventListener('click', () => {
        shareimagecontainer.style.display = 'flex';
        sharephotosend.style.display = 'block';
        sharevideocontainer.style.display = 'none';
        sharevideosend.style.display = 'none';
    });
    newvideolabel.addEventListener('click', () => {
        shareimagecontainer.style.display = 'none';
        sharephotosend.style.display = 'none';
        sharevideocontainer.style.display = 'flex';
        sharevideosend.style.display = 'block';
    })
    sharevideosend.style.display = 'none';
    sharephotosend.style.display = 'block';
    shareimagecontainer.style.display = 'flex';
    sharevideocontainer.style.display = 'none';

    sharephotosend.textContent = 'send photo';
    sharevideosend.textContent = 'send video';

    captionBox.classList.add('caption');
    newphotolabel.classList.add('newphotolabel');
    newvideolabel.classList.add('newphotolabel');
    sharephotosend.classList.add('sharephotosend');
    sharevideosend.classList.add('sharephotosend');
    shareimagecontainer.classList.add('shareimagecontainer');
    sharevideocontainer.classList.add('shareimagecontainer');
    uploadpreviewcontainer.classList.add('uploadpreviewcontainer');
    mediacommentspopup.classList.add('post_making_upload_popup');
    mediacommentspopup.classList.add('mediacommentspopup');
    photoexit.addEventListener('click', () => {
        mediacommentspopup.remove();
    });
}
function pushNotification(caption, id, postId, relationId, posterId, type, target) {
    ActiveUser_Account.forEach(data => {
        if (data.user_Id !== posterId) {
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (user.user_Id === posterId) {
                    user.user_NotificationView = false;
                    let Notifications = user.user_Notifications;
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                    function filterNotification() {
                        Notifications = Notifications.filter(notification => {
                            if (notification.type == type && notification.postId === postId) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                        user.user_Notifications = Notifications;
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        notificationPusher();
                    }
                    function notificationPusher() {
                        Notifications.push({
                            type: type,
                            target: target,
                            notificationId: data.user_Id,
                            id: id,
                            caption: caption,
                            trackingId: posterId,
                            postId: postId,
                            relationId: relationId,
                            posterId: data.user_Id,
                            notification_Count: 0,
                            time: new Date().getTime(),
                            date: trackingDate,
                            notification_isChecked: false,
                            notification_View: false,
                        });
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                    }
                    filterNotification();
                    return true;
                }
            });
        }
    });
}
function like_Comment(postId, relationId) {
    function pushLikeLicense(postId, relationId) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comment => {
                        if (comment.id === postId) {
                            let likes = comment.likes;
                            likes.push({
                                postId: postId,
                                posterId: data.user_Id,
                                relationId: relationId,
                                id: data.user_Id + postId,
                                time: new Date().getTime(),
                                date: trackingDate
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            document.querySelectorAll('.comment_like_counters').forEach(count => {
                                if (count.id === postId) {
                                    count.textContent = likes.length;
                                    count.classList.remove('likecounts');
                                    count.classList.add('likecountsactive');
                                }
                            });
                        }
                    });
                });
            });
        }
    }
    pushLikeLicense(postId, relationId);
}
function Un_like_Comment(postId) {
    function removeLikeLicense(postId) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comment => {
                        if (comment.id === postId) {
                            let likes = comment.likes;
                            likes = likes.filter(like => {
                                if (like.id === data.user_Id + postId) {
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                            comment.likes = likes;
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            document.querySelectorAll('.comment_like_counters').forEach(count => {
                                if (count.id === postId) {
                                    count.textContent = likes.length;
                                    count.classList.add('likecounts');
                                    count.classList.remove('likecountsactive');
                                }
                            });
                        }
                    });
                });
            });
        }
    }
    removeLikeLicense(postId);
}
function set_Comment_Reply_Data(id, postId, posterId, relationId, target, type, caption) {
    function pushreplycomment(id, postId, posterId, relationId, target, type, caption) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comment => {
                        if (comment.id === postId) {
                            let commentreplies = comment.comments;
                            commentreplies.push({
                                relationId: relationId,
                                postId: postId,
                                type: type,
                                target: target,
                                trackingId: posterId,
                                Property_Src: caption,
                                date: trackingDate,
                                time: new Date().getTime(),
                                posterId: data.user_Id,
                                id: id,
                                inputId: postId,
                                likes: []
                            });
                            localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                            create_Live_Count(postId, commentreplies.length);
                        }
                    });
                });
            });
        }
    }
    pushreplycomment(id, postId, posterId, relationId, target, type, caption);
    document.querySelectorAll('.replyroomculomn').forEach(section => {
        if (section.id === postId) {
            createcommentreplys(section, postId);
        } else {
            createcommentreplys(postId);
        }
    });
    function create_Live_Count(postId, count_length) {
        document.querySelectorAll('.replycommentcount').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
}
function delete_Post_Comments(Feeds_Data_Base, postId, locationId) {
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === postId) {
            let confirmation_popup = document.createElement('div');
            let confirmationflex = document.createElement('div');
            let confirmationflex1 = document.createElement('div');
            let confirmationtext = document.createElement('p');
            let confirmationtrue = document.createElement('span');
            let confirmationfalse = document.createElement('span');
            confirmationtext.textContent = 'Are You Sure You Want To Deleted';
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
                confirmation_popup.remove();
            });
            confirmation_popup.style.display = 'flex';

            confirmation_popup.id = locationId;
            confirmationtrue.id = locationId;
            confirmationtrue.addEventListener('click', () => {
                let comments = feed.comments;
                comments = comments.filter(photo => {
                    if (photo.id === confirmationtrue.id) {
                        return false;
                    } else {
                        return true;
                    }
                });
                feed.comments = comments;
                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                document.querySelectorAll('.commentsection').forEach(section => {
                    if (section.id === postId) {
                        CreationOfComments(section, postId);
                    } else {
                        CreationOfComments(postId);
                    }
                });
                commentcount(postId, comments.length);
                confirmation_popup.remove();
            });
        }
    });
    function commentcount(postId, count_length) {
        document.querySelectorAll('.live_Comment_Counters').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
}
