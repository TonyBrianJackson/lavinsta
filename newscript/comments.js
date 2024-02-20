//comments
function CreationOfComments() {
    let commentsections = document.querySelectorAll('.commentsection');
    commentsections.forEach(section => {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        section.innerHTML = '';
        Feeds_Data_Base.forEach(feed => {
            let comments = feed.comments;
            comments.forEach(comment => {
                if (section.id === comment.postId) {
                    if (comment.type == 'text') {
                        let commentnameandimg = document.createElement('div');
                        let commentimagecontainer = document.createElement('div');
                        let commentimg = document.createElement('img');
                        let commentname = document.createElement('b');
                        let commentmesg = document.createElement('div');
                        let commentdelete = document.createElement('span');
                        let commenttime = document.createElement('span');
                        let commentpostcontainer = document.createElement('div');
                        let commentpost = document.createElement('div');
                        let reactsflex = document.createElement('div');

                        let commentreact = document.createElement('img');
                        /*LIKE COUNTS*/
                        let likecounts = document.createElement('span');
                        let replycommentcount = document.createElement('span');


                        let commentreply = document.createElement('img');


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

                        commentmesg.addEventListener('click', () => {
                            commentdelete.style.display = 'flex';
                            setTimeout(() => {
                                commentdelete.style.display = 'none';
                            }, 3000);
                        })
                        function view_Options() {
                            let options = document.createElement('div');
                            let first_Option = document.createElement('span');
                            let first_Optionimg = document.createElement('img');
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            second_Option.appendChild(second_Optionimg);
                            first_Option.appendChild(first_Optionimg);
                            third_Option.appendChild(third_Optionimg);
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/share.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
                            function create_replyInputs() {
                                first_Option.remove();
                                second_Option.remove();
                                third_Option.remove();
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

                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                    pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                    options.remove();
                                    createcommentreplys();
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
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            first_Option.appendChild(first_Optionimg);
                            second_Option.appendChild(second_Optionimg);
                            third_Option.appendChild(third_Optionimg);

                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/trash-can.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';

                            first_Option.addEventListener('click', () => {
                                document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
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

                        commentmesg.appendChild(commentdelete);
                        commentmesg.appendChild(commentnameandimg);
                        commentmesg.appendChild(commenttime);
                        commentmesg.appendChild(commentpostcontainer);
                        commentmesg.appendChild(reactsflex);
                        commentmesg.appendChild(expand);
                        reactsflex.appendChild(commentreact);
                        reactsflex.appendChild(likecounts);
                        reactsflex.appendChild(commentreply);
                        reactsflex.appendChild(replycommentcount);
                        //COMMENTS LIKE COUNT
                        replycommentcount.id = comment.id;
                        likecounts.id = comment.id;
                        likecounts.textContent = comment.likes.length;
                        replycommentcount.textContent = comment.comments.length;
                        replycommentcount.classList.add('replycommentcount');
                        commentreact.addEventListener('click', () => {
                            likecomment();
                        });
                        likecounts.classList.add('likecounts');
                        likecounts.addEventListener('click', () => {
                            document.querySelectorAll('.commentlikeLicensePopup').forEach(popup => {
                                if (popup.id === comment.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
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
                            pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Like', 'comment_Like');
                            CreationOfCommentsLikeLicense();
                        }
                        function removelikecount() {
                            likecounts.classList.add('likecounts');
                            likecounts.classList.remove('likecountsactive');
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
                        commentdelete.innerHTML = '&vellip;';
                        expand.classList.add('expand');
                        commentdelete.classList.add('commentdelete');
                        commentdelete.classList.add('headerbtns');

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

                        reactsflex.classList.add('reactsflex');
                        commentnameandimg.classList.add('commentnameandimg');
                        commentmesg.classList.add('commentmesg');

                        commentname.classList.add('commentname');
                        commentimg.classList.add('commentposterimg');
                        commentpost.classList.add('commentpost');
                        commentpost.textContent = comment.Property_Src;

                        commentreact.src = 'icons/like(0).png';
                        commentreply.src = 'icons/message.png';
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
                            if (commentpost.textContent.length > 200) {
                                commentpost.classList.toggle('commentpostmoreorless');
                                if (expand.innerText == 'see more...') {
                                    expand.innerText = 'see less';
                                } else if (expand.innerText == 'see less') {
                                    expand.innerText = 'see more...';
                                } else {
                                    expand.innerText = 'see more...'
                                }
                            }
                        });

                        commentreply.addEventListener('click', () => {
                            document.querySelectorAll('.commentroomsection').forEach(room => {
                                if (room.id === comment.id) {
                                    room.classList.toggle('commentroomsectionactive');
                                } else {
                                    room.classList.add('commentroomsection');
                                    room.classList.remove('commentroomsectionactive');
                                }
                            });
                        });

                        function Poster_Details() {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === comment.posterId) {
                                    commentimg.src = user.user_ProfilePicture;
                                    commentname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                            view_Profile(comment.posterId);
                        });
                        commentname.addEventListener('click', () => {
                            view_Profile(comment.posterId);
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
                        let commentreact = document.createElement('img');
                        let commentreply = document.createElement('img');
                        let commentpostimgcontainer = document.createElement('div');

                        //COMMENT ROOM

                        let likecounts = document.createElement('span');
                        let replycommentcount = document.createElement('span')
                        let commentdelete = document.createElement('span');
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

                        commentmesg.addEventListener('click', () => {
                            commentdelete.style.display = 'flex';
                            setTimeout(() => {
                                commentdelete.style.display = 'none';
                            }, 3000);
                        })
                        function view_Options() {
                            let options = document.createElement('div');
                            let first_Option = document.createElement('span');
                            let first_Optionimg = document.createElement('img');
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            second_Option.appendChild(second_Optionimg);
                            first_Option.appendChild(first_Optionimg);
                            third_Option.appendChild(third_Optionimg);
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/share.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
                            function create_replyInputs() {
                                first_Option.remove();
                                second_Option.remove();
                                third_Option.remove();
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

                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                    pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                    options.remove();
                                    createcommentreplys();
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
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            first_Option.appendChild(first_Optionimg);
                            second_Option.appendChild(second_Optionimg);
                            third_Option.appendChild(third_Optionimg);

                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/trash-can.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';

                            first_Option.addEventListener('click', () => {
                                document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
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
                        replycommentcount.classList.add('replycommentcount');

                        commentmesg.id = comment.inputId;
                        section.appendChild(commentmesg);
                        commentmesg.appendChild(commentdelete);
                        commentmesg.appendChild(commentnameandimg);
                        commentmesg.appendChild(commenttime);
                        commentmesg.appendChild(commentpostcontainer);
                        commentmesg.appendChild(reactsflex);
                        commentmesg.appendChild(expand);
                        commentpostcontainer.appendChild(nextcommentcontainer);

                        commentnameandimg.appendChild(commentimagecontainer);
                        commentnameandimg.appendChild(commentname);
                        commentimagecontainer.appendChild(commentimg);

                        reactsflex.appendChild(commentreact);
                        reactsflex.appendChild(likecounts);
                        reactsflex.appendChild(commentreply);
                        reactsflex.appendChild(replycommentcount);
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
                        commentdelete.innerHTML = '&vellip;';
                        commentreact.src = 'icons/like(0).png';
                        commentreply.src = 'icons/message.png';

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
                        commentpostimgcontainer.appendChild(commentpostimg);
                        nextcommentcontainer.appendChild(commentpostimgcontainer);
                        nextcommentcontainer.appendChild(commentpost);
                        nextcommentcontainer.classList.add('nextcommentcontainer');
                        commentpostimgcontainer.classList.add('commentpostimgcontainer');

                        let itemsviewclosebutton = document.createElement('span');
                        let itemsviewonlargescale = document.createElement('section');
                        let largescalewideviewcontainer = document.createElement('div');
                        let gridpostimagecontainer = document.createElement('div');
                        let gridpostimagetoview = document.createElement('img');
                        let gridposttitlecover = document.createElement('div');
                        let gridpostcaption = document.createElement('p');
                        itemsviewonlargescale.appendChild(largescalewideviewcontainer);
                        itemsviewonlargescale.appendChild(itemsviewclosebutton);
                        largescalewideviewcontainer.appendChild(gridpostimagecontainer);
                        gridpostimagecontainer.appendChild(gridpostimagetoview);
                        gridpostimagecontainer.appendChild(gridposttitlecover);
                        gridposttitlecover.appendChild(gridpostcaption);
                        gridpostimagetoview.src = comment.Property_Src;
                        gridpostcaption.textContent = comment.caption;
                        gridposttitlecover.classList.add('gridposttitlecover');
                        gridpostcaption.classList.add('gridpostcaption');
                        gridpostimagetoview.classList.add('gridpostimagetoview');
                        gridpostimagecontainer.classList.add('gridpostimagecontainer');
                        largescalewideviewcontainer.classList.add('largescalewideviewcontainer');
                        itemsviewclosebutton.classList.add('itemsviewclosebutton');
                        itemsviewonlargescale.classList.add('itemsviewonlargescale');
                        gridpostimagecontainer.style.display = 'flex';
                        itemsviewonlargescale.style.display = 'none';
                        itemsviewclosebutton.innerHTML = '&times;';
                        largescalewideviewcontainer.id = comment.id;
                        itemsviewonlargescale.id = comment.id;
                        commentmesg.appendChild(itemsviewonlargescale);
                        function View_The_Post() {
                            document.body.appendChild(itemsviewonlargescale);
                            itemsviewonlargescale.style.display = 'flex';
                            let commentsectioncontainer = document.querySelectorAll('.commentsectioncontainer');
                            commentsectioncontainer.forEach(container => {
                                if (container.id === comment.postId) {
                                    container.style.display = 'none';
                                }
                            });
                        }
                        commentpostimg.addEventListener('click', () => {
                            View_The_Post();
                        });
                        itemsviewclosebutton.addEventListener('click', () => {
                            commentmesg.appendChild(itemsviewonlargescale);
                            itemsviewonlargescale.style.display = 'none';
                            let commentsectioncontainer = document.querySelectorAll('.commentsectioncontainer');
                            commentsectioncontainer.forEach(container => {
                                if (container.id === comment.postId) {
                                    container.style.display = 'flex';
                                }
                            });
                        });
                        gridposttitlecover.addEventListener('click', () => {
                            gridpostcaption.classList.toggle('gridpostcaptionactive');
                        });

                        if (commentpost.textContent.length > 200) {
                            expand.style.display = 'block';
                        } else {
                            expand.style.display = 'none';
                        }
                        commentreply.addEventListener('click', () => {
                            document.querySelectorAll('.commentroomsection').forEach(room => {
                                if (room.id === comment.id) {
                                    room.classList.toggle('commentroomsectionactive');
                                } else {
                                    room.classList.add('commentroomsection');
                                    room.classList.remove('commentroomsectionactive');
                                }
                            })
                        });

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
                            if (expand.innerText == 'see more...') {
                                expand.innerText = 'see less';
                            } else if (expand.innerText == 'see less') {
                                expand.innerText = 'see more...';
                            } else {
                                expand.innerText = 'see more...'
                            }
                            commentpost.classList.toggle('commentpostmoreorless');
                        });


                        commentreact.addEventListener('click', () => {
                            likecomment();
                        });

                        likecounts.addEventListener('click', () => {
                            document.querySelectorAll('.commentlikeLicensePopup').forEach(popup => {
                                if (popup.id === comment.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
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
                                    commentname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                            view_Profile(comment.posterId);
                        });
                        commentname.addEventListener('click', () => {
                            view_Profile(comment.posterId);
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
                        let commentreact = document.createElement('img');
                        let commentreply = document.createElement('img');


                        let likecounts = document.createElement('span');
                        let replycommentcount = document.createElement('span');
                        let commentdelete = document.createElement('span');
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

                        commentmesg.addEventListener('click', () => {
                            commentdelete.style.display = 'flex';
                            setTimeout(() => {
                                commentdelete.style.display = 'none';
                            }, 3000);
                        })
                        function view_Options() {
                            let options = document.createElement('div');
                            let first_Option = document.createElement('span');
                            let first_Optionimg = document.createElement('img');
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            second_Option.appendChild(second_Optionimg);
                            first_Option.appendChild(first_Optionimg);
                            third_Option.appendChild(third_Optionimg);
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/share.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
                            function create_replyInputs() {
                                first_Option.remove();
                                second_Option.remove();
                                third_Option.remove();
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
                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'mention', 'text', mesgTextBox.value);
                                    pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply', 'mention');
                                    options.remove();
                                    createcommentreplys();
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
                            let second_Option = document.createElement('span');
                            let second_Optionimg = document.createElement('img');
                            let third_Option = document.createElement('span');
                            let third_Optionimg = document.createElement('img');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            options.appendChild(third_Option);
                            first_Option.appendChild(first_Optionimg);
                            second_Option.appendChild(second_Optionimg);
                            third_Option.appendChild(third_Optionimg);

                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');
                            exit.innerHTML = '&times;';
                            first_Optionimg.src = 'newicons/trash-can.png';
                            second_Optionimg.src = 'newicons/chat.png';
                            third_Optionimg.src = 'newicons/like.png';

                            first_Option.addEventListener('click', () => {
                                document.querySelectorAll('.confirmation_popup').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.style.display = 'flex';
                                    } else {
                                        popup.style.display = 'none';
                                    }
                                });
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
                                document.querySelectorAll('.commentroomsection').forEach(popup => {
                                    if (popup.id === comment.id) {
                                        popup.classList.toggle('commentroomsectionactive');
                                    }
                                });
                            });
                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
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
                        commentmesg.appendChild(commentdelete);
                        commentmesg.appendChild(commentnameandimg);
                        commentmesg.appendChild(commenttime);
                        commentmesg.appendChild(commentpostcontainer);
                        commentmesg.appendChild(reactsflex);
                        commentmesg.appendChild(expand);

                        commentnameandimg.appendChild(commentimagecontainer);
                        commentnameandimg.appendChild(commentname);
                        commentimagecontainer.appendChild(commentimg);

                        commentvideoplayer.appendChild(commentplay);
                        commentplay.appendChild(commentplayimg);
                        commentplayimg.src = 'icons/play.png';
                        commentdelete.innerHTML = '&vellip;';
                        commentdelete.classList.add('commentdelete');
                        commentdelete.classList.add('headerbtns');

                        /*LIKES&REACTS COUNTS*/
                        reactsflex.appendChild(commentreact);
                        reactsflex.appendChild(likecounts);
                        reactsflex.appendChild(commentreply);
                        reactsflex.appendChild(replycommentcount);
                        commentvideoplayer.classList.add('commentvideoplayer');
                        commentplay.classList.add('commentplay');
                        likecounts.classList.add('likecounts');
                        replycommentcount.classList.add('replycommentcount');
                        expand.innerText = 'see more...';
                        commentreact.src = 'icons/like(0).png';
                        commentreply.src = 'icons/message.png';

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

                        function view_Comment() {
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
                            gridpostimagetoview.src = comment.Property_Src;
                            gridpostcaption.textContent = comment.caption;
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
                            largescalewideviewcontainer.id = comment.id;
                            itemsviewonlargescale.id = comment.id;
                            document.body.appendChild(itemsviewonlargescale);
                            itemsviewclosebutton.addEventListener('click', () => {
                                itemsviewonlargescale.remove();
                                let commentsectioncontainer = document.querySelectorAll('.commentsectioncontainer');
                                commentsectioncontainer.forEach(container => {
                                    if (container.id === comment.postId) {
                                        container.style.display = 'flex';
                                    }
                                });
                            });
                        }

                        commentpostvdieocontainer.addEventListener('click', () => {
                            view_Comment();
                            let commentsectioncontainer = document.querySelectorAll('.commentsectioncontainer');
                            commentsectioncontainer.forEach(container => {
                                if (container.id === comment.postId) {
                                    container.style.display = 'none';
                                }
                            });
                        });

                        commentreply.addEventListener('click', () => {
                            document.querySelectorAll('.commentroomsection').forEach(room => {
                                if (room.id === comment.id) {
                                    room.classList.toggle('commentroomsectionactive');
                                } else {
                                    room.classList.add('commentroomsection');
                                    room.classList.remove('commentroomsectionactive');
                                }
                            })
                        });

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
                            document.querySelectorAll('.commentlikeLicensePopup').forEach(popup => {
                                if (popup.id === comment.id) {
                                    popup.style.display = 'flex';
                                } else {
                                    popup.style.display = 'none';
                                }
                            });
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
                                    commentname.innerHTML = user.user_Firstname + ' ' + user.user_Surname;
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
                            view_Profile(comment.posterId);
                        });
                        commentname.addEventListener('click', () => {
                            view_Profile(comment.posterId);
                        });
                    }
                }
            });
        });
    });
}
function createMoreCommentOptions() {
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(comment => {
            if (comment.postId === feed.id) {
                let replyroom = document.createElement('div');
                let replyroomculomn = document.createElement('div');
                let commentroomclose = document.createElement('span');
                let newcommentinput = document.createElement('div');
                let newcommentinputinput = document.createElement('input');
                let newcommentinputsend = document.createElement('div');

                let commentattachmenticon = document.createElement('div');
                let commentattachImg = document.createElement('img');
        
                let sendimg = document.createElement('img');
                newcommentinputsend.appendChild(sendimg);
                sendimg.src = 'icons/send.png';
                commentattachmenticon.appendChild(commentattachImg);
                commentattachImg.src = 'icons/discover.png';
                newcommentinputsend.classList.add('headerbtns');
                commentattachmenticon.classList.add('headerbtns');

                //extensions
                let actitionbtnscontainer = document.createElement('div');
                let commentactiongrid = document.createElement('div');
                let replyroomrefresh = document.createElement('span');

                replyroom.appendChild(commentactiongrid);
                commentactiongrid.appendChild(actitionbtnscontainer);
                replyroom.appendChild(replyroomculomn)
                replyroom.appendChild(newcommentinput);
                commentactiongrid.classList.add('commentactiongrid');
                actitionbtnscontainer.classList.add('actitionbtnscontainer');
                actitionbtnscontainer.appendChild(commentroomclose);
                actitionbtnscontainer.appendChild(replyroomrefresh);

                commentroomclose.classList.add('headerbtns');
                replyroomrefresh.classList.add('headerbtns');
                commentroomclose.classList.add('sharegridlike');
                replyroomrefresh.classList.add('sharegridlike');

                replyroomrefresh.innerHTML = '&circlearrowright;';
                commentroomclose.innerHTML = '&LeftArrow;';

                replyroomculomn.id = comment.id;
                replyroom.id = comment.id;

                replyroomrefresh.addEventListener('click', () => {
                    replyroomculomn.innerHTML = '';
                    let commentroomsectionreloadloader = document.createElement('div');
                    replyroom.appendChild(commentroomsectionreloadloader);
                    commentroomsectionreloadloader.classList.add('commentroomsectionreloadloader');
                    setTimeout(() => {
                        createcommentreplys();
                        commentroomsectionreloadloader.remove();
                    }, 2000);
                });

                newcommentinput.classList.add('newcommentinput');
                newcommentinput.appendChild(newcommentinputinput);
                newcommentinput.appendChild(commentattachmenticon);
                newcommentinput.appendChild(newcommentinputsend);
                replyroomculomn.classList.add('replyroomculomn');
                document.body.appendChild(replyroom);
                replyroom.classList.add('commentroomsection');
                newcommentinputinput.setAttribute(`placeholder`, 'post reply...');
                commentroomclose.addEventListener('click', () => {
                    replyroom.classList.toggle('commentroomsectionactive');
                });
                function themeCommentMode() {
                    if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                        ActiveUser_Account.forEach(data => {
                            LogInFormData.forEach(user => {
                                if (user.user_Id === data.user_Id) {
                                    if (user.user_Mode == 'defaultTheme') {
                                        newcommentinputsend.classList.remove('darkmodeicons');
                                        commentattachmenticon.classList.remove('darkmodeicons');
                                    } else if (user.user_Mode == 'darkTheme') {
                                        newcommentinputsend.classList.add('darkmodeicons');
                                        commentattachmenticon.classList.add('darkmodeicons');
                                    } else if (user.user_Mode == 'lightOffTheme') {
                                        newcommentinputsend.classList.add('darkmodeicons');
                                        commentattachmenticon.classList.add('darkmodeicons');
                                    }
                                }
                            });

                        });
                    }
                }
                themeCommentMode();
                function create_Live_Count(postId, count_length) {
                    document.querySelectorAll('.replycommentcount').forEach(count => {
                        if (count.id === postId) {
                            count.textContent = count_length;
                        }
                    });
                }
                function create_LikePopup() {
                    let commentlikelicenseheader = document.createElement('header');
                    let commentlikeexit = document.createElement('span');
                    let commentlikeLicensePopup = document.createElement('div');
                    let commentlikeLicenseColumn = document.createElement('div');
                    document.body.appendChild(commentlikeLicensePopup);

                    commentlikeLicensePopup.classList.add('commentlikeLicensePopup');
                    commentlikeLicenseColumn.classList.add('commentlikeLicenseColumn');
                    commentlikelicenseheader.classList.add('commentlikelicenseheader');
                    commentlikeexit.classList.add('Exitpage_Arrow');
                    commentlikeLicensePopup.appendChild(commentlikelicenseheader);
                    commentlikeLicensePopup.appendChild(commentlikeLicenseColumn);
                    commentlikelicenseheader.appendChild(commentlikeexit);
                    commentlikeexit.innerHTML = '&LeftArrow;';
                    commentlikeLicensePopup.id = comment.id;
                    commentlikeLicenseColumn.id = comment.id;
                    commentlikeexit.addEventListener('click', () => {
                        commentlikeLicensePopup.style.display = 'none';
                    });
                }
                create_LikePopup();
                function DeletComment() {
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
                    confirmation_popup.id = comment.id;
                    confirmationtrue.id = comment.id;

                    confirmationtrue.addEventListener('click', () => {
                        removeComment(comment.postId);
                    });
                    function removeComment(postId) {
                        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                        Feeds_Data_Base.forEach(Commentfeed => {
                            let comments = Commentfeed.comments;
                            if (Commentfeed.id === postId) {
                                comments = comments.filter(comm_ent => {
                                    if (comm_ent.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                Commentfeed.comments = comments;
                                commentcount(postId, comments.length);
                                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                CreationOfComments();
                                confirmation_popup.style.display = 'none';
                            }
                        });
                    }
                    function commentcount(postId, count_length) {
                        document.querySelectorAll('.live_Comment_Counters').forEach(count => {
                            if (count.id === postId) {
                                count.textContent = count_length;
                            }
                        });
                    }
                }
                DeletComment();
                function createPhotoAndVideoReplyComment() {
                    //SHARE PHOTOS AND VIDEOS SEND IN REPLY ROOM
                    let sharephotocomentcontainer = document.createElement('nav');
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
                    let firstImg = document.createElement('img');
                    let secondImg = document.createElement('img');
                    let firsttext = document.createElement('span');
                    let secondtext = document.createElement('span');

                    clickAndUploadContainer.classList.add('clickAndUploadContainer');
                    popup_Names_Container.classList.add('popup_Names_Container');
                    subactions.classList.add('subactions');
                    sharephotoinput.type = 'file';
                    sharevideoinput.type = 'file';
                    sharephotoinput.accept = 'image/*';
                    sharevideoinput.accept = 'video/*';
                    sharephotoinput.id = comment.postId + comment.id + 'photoreply';
                    sharevideoinput.id = comment.postId + comment.id + 'videoreply';
                    const photoreplyId = sharephotoinput.id;
                    const videoreplyId = sharevideoinput.id;

                    shareimg.id = replyroomculomn.id;
                    sharevideo.id = replyroomculomn.id;

                    newphotolabel.htmlFor = photoreplyId;
                    newvideolabel.htmlFor = videoreplyId;
                    sharephotoinput.onchange = replyphotoExecuted;
                    sharevideoinput.onchange = replyvideoExecuted;
                    function replyphotoExecuted() {
                        let reader = new FileReader();
                        reader.readAsDataURL(sharephotoinput.files[0]);
                        reader.onload = function () {
                            if (replyroomculomn.id === shareimg.id) {
                                shareimg.src = reader.result;
                            }
                        }
                    }
                    function replyvideoExecuted() {
                        let reader = new FileReader();
                        reader.readAsDataURL(sharevideoinput.files[0]);
                        reader.onload = function () {
                            if (replyroomculomn.id === sharevideo.id) {
                                sharevideo.src = reader.result;
                            }
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
                                                likecount: 0,
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
                    sharephotosend.addEventListener('click', () => {
                        if (shareimg.src) {
                            const id = '' + new Date().getTime();
                            pushreplyphotocomment(id, comment.id, comment.postId, 'reply', 'photo', captionBoxinput.value, shareimg.src);
                            pushNotification(comment.caption, id, comment.id, comment.posterId, 'comment_Reply');
                            createcommentreplys();
                            captionBoxinput.value = '';
                            sharephotocomentcontainer.style.display = 'none';
                        }
                    });
                    sharevideosend.addEventListener('click', () => {
                        if (sharevideo.src) {
                            const id = '' + new Date().getTime();
                            pushreplyphotocomment(id, comment.id, comment.postId, 'reply', 'video', captionBoxinput.value, sharevideo.src);
                            pushNotification(comment.caption, id, comment.id, comment.posterId, 'comment_Reply');
                            createcommentreplys();
                            create_Live_Count();
                            captionBoxinput.value = '';
                            sharephotocomentcontainer.style.display = 'none';
                        }
                    });
                    newcommentinputsend.addEventListener('click', () => {
                        if (newcommentinputinput.value) {
                            const id = '' + new Date().getTime();
                            set_Comment_Reply_Data(id, comment.id, comment.posterId, comment.postId, 'reply', 'text', newcommentinputinput.value);
                            pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_Reply');
                            createcommentreplys();
                            create_Live_Count();
                            newcommentinputinput.value = '';
                        }
                        commentattachmenticon.classList.remove('replyimagelost');
                        newcommentinputsend.classList.remove('commentreplysendreadystate');
                    });
                    document.body.appendChild(sharephotocomentcontainer);
                    sharephotocomentcontainer.appendChild(header);
                    sharephotocomentcontainer.appendChild(uploadpreviewcontainer);
                    sharephotocomentcontainer.appendChild(clickAndUploadContainer);
                    sharephotocomentcontainer.appendChild(subactions);

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

                    newphotolabel.appendChild(firstImg);
                    newvideolabel.appendChild(secondImg);
                    newphotolabel.appendChild(firsttext);
                    newvideolabel.appendChild(secondtext);

                    firstImg.src = 'icons/image(0).png';
                    secondImg.src = 'icons/youtube.png';

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
                    photoexit.innerHTML = '&LeftArrow;';

                    captionBox.classList.add('caption');
                    newphotolabel.classList.add('newphotolabel');
                    newvideolabel.classList.add('newphotolabel');
                    sharephotosend.classList.add('sharephotosend');
                    sharevideosend.classList.add('sharephotosend');
                    photoexit.classList.add('photoexit');
                    shareimagecontainer.classList.add('shareimagecontainer');
                    sharevideocontainer.classList.add('shareimagecontainer');
                    uploadpreviewcontainer.classList.add('uploadpreviewcontainer');
                    sharephotocomentcontainer.classList.add('post_making_upload_popup');
                    sharephotocomentcontainer.classList.add('sharephotocomentcontainer');
                    commentattachmenticon.addEventListener('click', () => {
                        sharephotocomentcontainer.style.display = 'flex';
                    });
                    photoexit.addEventListener('click', () => {
                        sharephotocomentcontainer.style.display = 'none';
                    });
                }
                createPhotoAndVideoReplyComment();
            }
        });
    });
}
function pushNotification(caption, id, postId, posterId, type, target) {
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
                                likecount: 0,
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
    function create_Live_Count(postId, count_length) {
        document.querySelectorAll('.replycommentcount').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
    pushreplycomment(id, postId, posterId, relationId, target, type, caption);
}

function savedCommentsCreation() {
    if (Array.isArray(JSON.parse(localStorage.getItem('Feeds_Data_Base')))) {
        Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
        CreationOfComments();
        createMoreCommentOptions();
        CreationOfCommentsLikeLicense();
        createlikesrecordlist();
    } else {
        Feeds_Data_Base = [];
    }
}
setTimeout(() => {
    savedCommentsCreation();
}, 10000);
