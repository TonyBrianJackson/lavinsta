function createcommentreplys(section, locationId) {
    document.querySelectorAll('.replyroomculomn').forEach(session => {
        if (session.id === locationId) {
            session.innerHTML = '';
        }
    });
    Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
    Feeds_Data_Base.forEach(feed => {
        let comments = feed.comments;
        comments.forEach(maincomment => {
            let commentreplies = maincomment.comments;
            commentreplies.forEach(comment => {
                if (comment.postId === locationId) {
                    if (comment.type == 'text') {
                        let commentmesg = document.createElement('div');
                        let commentpostcontainer = document.createElement('div');
                        let commentpost = document.createElement('p');
                        let commentnameandimg = document.createElement('div');
                        let commentpostimgcontainer = document.createElement('div');
                        let commentimg = document.createElement('img');
                        let commentname = document.createElement('b');
                        let reactsflex = document.createElement('div');
                        let commentreact = document.createElement('div');
                        let commenttime = document.createElement('span');
                        let commentdelete = document.createElement('div');
                        /*LIKE COUNTS*/
                        let likecounts = document.createElement('span');
                        //LIKES RECORD

                        //extensions 
                        let expand = document.createElement('span');

                        function create_Mention_Comment() {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(user => {
                                if (user.user_Id === comment.trackingId) {
                                    let username;
                                    user.user_Mid_Name ? username =
                                        user.user_Firstname + ' ' + user.user_Mid_Name + ' ' + user.user_Surname :
                                        username = user.user_Firstname + ' ' + user.user_Surname;
                                    let html = `<a href ="#/user_Id=${user.user_Id}/users_Name=${user.user_Firstname + '+' + user.user_Surname}" class="mentionedUser" id="${comment.id}" href="">${username}</a>`;
                                    commentpost.innerHTML = html + ' ' + comment.Property_Src;
                                    commentpost.textContent.split(" ").forEach(texttitle => {
                                        prefix.forEach(unit => {
                                            if (texttitle.indexOf(unit.prefixName) != -1) {
                                                if (unit.prefixName == 'https://' || unit.prefixName == 'http://') {
                                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                                    commentpost.innerHTML = newtitle;
                                                } else {
                                                    let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                                    commentpost.innerHTML = newtitle;
                                                }
                                            }
                                        });
                                    });
                                    document.querySelectorAll('.mentionedUser').forEach(block => {
                                        block.addEventListener('click', () => {
                                            createUsersProfile(user.user_Id);
                                        })
                                    })
                                }
                            })
                        }
                        if (comment.target == 'mention') {
                            create_Mention_Comment();
                        } else {
                            commentpost.textContent = comment.Property_Src;
                            commentpost.textContent.split(" ").forEach(texttitle => {
                                prefix.forEach(unit => {
                                    if (texttitle.indexOf(unit.prefixName) != -1) {
                                        if (unit.prefixName == 'https://' || unit.prefixName == 'http://') {
                                            let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                            console.log(texttitle);
                                            commentpost.innerHTML = newtitle;
                                        } else {
                                            let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                            console.log(texttitle);
                                            commentpost.innerHTML = newtitle;
                                        }
                                    }
                                });
                            });
                        }
                        commentpost.appendChild(expand);

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
                            let third_Option = document.createElement('span');
                            let fouth_Option = document.createElement('span');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(third_Option);
                            options.appendChild(fouth_Option);
                            first_Option.innerHTML = recreatesvg;
                            third_Option.innerHTML = likesvg;
                            fouth_Option.innerHTML = copysvg;
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            fouth_Option.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = undo;

                            third_Option.addEventListener('click', () => {
                                likecomment();
                            });
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
                                copyTextPost(comment.Property_Src);
                                removeOptions();
                            });
                            function create_replyInputs() {
                                first_Option.remove();
                                third_Option.remove();
                                fouth_Option.remove();
                                let mesgBox = document.createElement('div');
                                let mesgTextBox = document.createElement('input');
                                let sendmesg = document.createElement('div');
                                options.appendChild(mesgBox);
                                mesgBox.appendChild(mesgTextBox);
                                mesgTextBox.focus();
                                options.appendChild(sendmesg);
                                sendmesg.innerHTML = sendsvg;
                                sendmesg.classList.add('headerbtns');
                                mesgBox.classList.add('mesgBox');
                                mesgTextBox.type = 'text';
                                mesgTextBox.placeholder = 'send reply...';

                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.postId, comment.posterId, comment.relationId, 'mention', 'text', mesgTextBox.value);
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
                            second_Option.innerHTML = likesvg;
                            third_Option.innerHTML = copysvg;
                            exit.innerHTML = undo2;
                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');

                            first_Option.addEventListener('click', () => {
                                delete_Comments_Replies(Feeds_Data_Base, comment.relationId, comment.postId, comment.id);
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
                                likecomment();
                            });
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
                            third_Option.addEventListener('click', () => {
                                copyTextPost(comment.Property_Src);
                                removeOptions();
                            });
                            exit.addEventListener('click', () => {
                                options.remove();
                            });
                        }

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

                        function getlikecounts() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    let likes = comment.likes;
                                    likes.forEach(like => {
                                        if (like.postId === comment.id) {
                                            if (like.id === data.user_Id + comment.id) {
                                                likecounts.classList.add('likecountsactive');
                                                likecounts.classList.remove('likecounts');
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        getlikecounts();
                        likecounts.classList.add('comment_like_counters');

                        function likecomment() {
                            if (likecounts.classList.contains('likecounts')) {
                                const id = '' + new Date().getTime();
                                likecounts.classList.add('likecountsactive');
                                likecounts.classList.remove('likecounts');
                                like_Comment_Reply(comment.id, comment.postId, comment.relationId);
                                pushNotification(comment.Property_Src, id, comment.id, comment.posterId, 'comment_ReplyLike', 'comment_ReplyLike');
                            } else {
                                likecounts.classList.remove('likecountsactive');
                                likecounts.classList.add('likecounts');
                                Un_like_Comment_Reply(comment.id);
                            }
                        }
                        commentreact.addEventListener('click', () => {
                            likecomment();
                        });
                        commentreact.classList.add('replylike');


                        commentdelete.id = comment.posterId;


                        commentmesg.id = comment.posterId;
                        section.appendChild(commentmesg);

                        commentmesg.appendChild(commentnameandimg);
                        commentmesg.appendChild(commenttime);
                        commentmesg.appendChild(commentpostcontainer);
                        commentmesg.appendChild(reactsflex);

                        commentpostcontainer.appendChild(commentpost);
                        commenttime.classList.add('commenttime');
                        commentpostcontainer.classList.add('commentpostcontainer');


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
                        likecounts.textContent = comment.likes.length;
                        likecounts.id = comment.id;
                        commentnameandimg.appendChild(commentpostimgcontainer);
                        commentnameandimg.appendChild(commentname);
                        commentpostimgcontainer.appendChild(commentimg);
                        reactsflex.appendChild(commentreact);
                        reactsflex.appendChild(likecounts);
                        reactsflex.appendChild(commentdelete);
                        commentreact.innerHTML = likesvg;
                        commentdelete.innerHTML = settingssvg;

                        commentmesg.classList.add('commentmesg');
                        commentdelete.classList.add('commentdelete');
                        commentdelete.classList.add('headerbtns');
                        commentpost.classList.add('commentpost');
                        commentnameandimg.classList.add('commentnameandimg');
                        commentimg.classList.add('commentposterimg');
                        commentname.classList.add('commentname');
                        reactsflex.classList.add('reactsflex');


                        commentpost.addEventListener('click', () => {
                            commentpost.classList.toggle('commentpostactive');
                        });

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
                        let commenttime = document.createElement('span');
                        let nextcommentcontainer = document.createElement('div');
                        let commentpostimg = document.createElement('img');
                        let commentpostcontainer = document.createElement('div');
                        let commentpost = document.createElement('p');
                        //name and img
                        let commentpostimgcontainer = document.createElement('div');
                        let commentnameandimg = document.createElement('div');
                        let commentname = document.createElement('b');
                        let commentimagecontainer = document.createElement('div');
                        let commentimg = document.createElement('img');
                        let reactsflex = document.createElement('div');
                        let commentreact = document.createElement('div');
                        let likecounts = document.createElement('span');
                        let commentdelete = document.createElement('div');
                        //EXPAND TEXT
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
                            let third_Option = document.createElement('span');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(third_Option);
                            first_Option.innerHTML = recreatesvg;
                            third_Option.innerHTML = likesvg;
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = undo;

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
                                third_Option.remove();
                                let mesgBox = document.createElement('div');
                                let mesgTextBox = document.createElement('input');
                                let sendmesg = document.createElement('div');
                                options.appendChild(mesgBox);
                                mesgBox.appendChild(mesgTextBox);
                                mesgTextBox.focus();
                                options.appendChild(sendmesg);
                                sendmesg.innerHTML = sendsvg;
                                sendmesg.classList.add('headerbtns');
                                mesgBox.classList.add('mesgBox');
                                mesgTextBox.type = 'text';
                                mesgTextBox.placeholder = 'send reply...';

                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.postId, comment.posterId, comment.relationId, 'mention', 'text', mesgTextBox.value);
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
                            let second_Option = document.createElement('span');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            first_Option.innerHTML = deletesvg;
                            second_Option.innerHTML = likesvg;
                            exit.innerHTML = undo2;
                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');

                            first_Option.addEventListener('click', () => {
                                delete_Comments_Replies(Feeds_Data_Base, comment.relationId, comment.postId, comment.id);
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
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

                        likecounts.addEventListener('click', () => {
                            LikePopupsAndMore(comment.id, 'commentlike', comment.likes.length);
                        });

                        reactsflex.appendChild(commentreact);
                        reactsflex.appendChild(likecounts);
                        reactsflex.appendChild(commentdelete);
                        reactsflex.classList.add('reactsflex');
                        commentreact.classList.add('replylike');

                        commentreact.innerHTML = likesvg;
                        commentnameandimg.appendChild(commentimagecontainer);
                        commentnameandimg.appendChild(commentname);
                        commentimagecontainer.appendChild(commentimg);
                        commentnameandimg.classList.add('commentnameandimg');
                        commentimg.classList.add('commentimg');
                        commentname.classList.add('commentname');

                        commentpostimg.addEventListener('click', () => {
                            create_Random_Items(comment.id, comment.posterId, comment.caption, comment.Property_Src, comment.type, 'comment', commenttime.innerHTML);
                        });

                        commentpost.addEventListener('click', () => {
                            commentpost.classList.toggle('commentpostactive');
                        });
                        commentmesg.id = comment.posterId;
                        section.appendChild(commentmesg);

                        commentmesg.appendChild(commentnameandimg);
                        commentmesg.appendChild(commenttime);
                        commentmesg.appendChild(commentpostcontainer);
                        commentmesg.appendChild(reactsflex);
                        commentpostimgcontainer.appendChild(commentpostimg);
                        commentpostcontainer.appendChild(nextcommentcontainer);
                        nextcommentcontainer.appendChild(commentpostimgcontainer);
                        nextcommentcontainer.appendChild(commentpost);
                        commentpostimgcontainer.classList.add('commentpostimgcontainer');
                        commentpostcontainer.classList.add('commentpostcontainer');
                        nextcommentcontainer.classList.add('nextcommentcontainer');
                        commentmesg.classList.add('commentmesg');
                        commentpost.classList.add('commentpost');
                        commentpostimg.classList.add('commentpostimg');
                        commenttime.classList.add('commenttime');
                        likecounts.classList.add('likecounts');
                        commentpostimg.src = comment.Property_Src;
                        commentpost.textContent = comment.caption;
                        commentpost.appendChild(expand);
                        commentpost.textContent.split(" ").forEach(texttitle => {
                            prefix.forEach(unit => {
                                if (texttitle.indexOf(unit.prefixName) != -1) {
                                    if (unit.prefixName == 'https://' || unit.prefixName == 'http://') {
                                        let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                        console.log(texttitle);
                                        commentpost.innerHTML = newtitle;
                                    } else {
                                        let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                        console.log(texttitle);
                                        commentpost.innerHTML = newtitle;
                                    }
                                }
                            });
                        });
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
                        commentdelete.id = comment.posterId;


                        commentdelete.innerHTML = settingssvg;
                        commentdelete.classList.add('commentdelete');
                        commentdelete.classList.add('headerbtns');

                        commentreact.addEventListener('click', () => {
                            likecomment();
                        })
                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                commentreact.id = data.user_Id + comment.id;
                            });
                        }

                        function getlikecounts() {
                            if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                ActiveUser_Account.forEach(data => {
                                    let likes = comment.likes;
                                    likes.forEach(like => {
                                        if (like.postId === comment.id) {
                                            if (like.id === data.user_Id + comment.id) {
                                                likecounts.classList.add('likecountsactive');
                                                likecounts.classList.remove('likecounts');
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        getlikecounts();
                        likecounts.classList.add('comment_like_counters');
                        function likecomment() {
                            if (likecounts.classList.contains('likecounts')) {
                                const id = '' + new Date().getTime();
                                likecounts.classList.add('likecountsactive');
                                likecounts.classList.remove('likecounts');
                                like_Comment_Reply(comment.id, comment.postId, comment.relationId);
                                pushNotification(comment.caption, id, comment.id, comment.postId, comment.posterId, 'comment_ReplyLike', 'comment_ReplyLike');
                            } else {
                                likecounts.classList.add('likecounts');
                                likecounts.classList.remove('likecountsactive');
                                likecounts.textContent = parseInt(likecounts.textContent) - 1;
                                comment.likecount = likecounts.textContent;
                                Un_like_Comment_Reply(comment.id);
                            }
                        }
                        likecounts.textContent = comment.likes.length;
                        likecounts.id = comment.id;

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

                        let likecounts = document.createElement('span');
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
                            let third_Option = document.createElement('span');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(third_Option);
                            first_Option.innerHTML = recreatesvg;
                            third_Option.innerHTML = likesvg;
                            options.classList.add('options');
                            first_Option.classList.add('headerbtns');
                            third_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            first_Option.classList.add('first_Option');
                            exit.innerHTML = undo;

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
                                third_Option.remove();
                                let mesgBox = document.createElement('div');
                                let mesgTextBox = document.createElement('input');
                                let sendmesg = document.createElement('div');
                                options.appendChild(mesgBox);
                                mesgBox.appendChild(mesgTextBox);
                                mesgTextBox.focus();
                                options.appendChild(sendmesg);
                                sendmesg.innerHTML = sendsvg;
                                sendmesg.classList.add('headerbtns');
                                mesgBox.classList.add('mesgBox');
                                mesgTextBox.type = 'text';
                                mesgTextBox.placeholder = 'send reply...';

                                sendmesg.addEventListener('click', () => {
                                    const id = '' + new Date().getTime();
                                    set_Comment_Reply_Data(id, comment.postId, comment.posterId, comment.relationId, 'mention', 'text', mesgTextBox.value);
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
                            let second_Option = document.createElement('span');
                            let exit = document.createElement('span');

                            first_Option.id = comment.id;
                            section.insertAdjacentElement("afterend", options);
                            options.appendChild(exit);
                            options.appendChild(first_Option);
                            options.appendChild(second_Option);
                            first_Option.innerHTML = deletesvg;
                            second_Option.innerHTML = likesvg;
                            exit.innerHTML = undo2;
                            first_Option.classList.add('headerbtns');
                            exit.classList.add('headerbtns');
                            second_Option.classList.add('headerbtns');

                            options.classList.add('options');

                            first_Option.classList.add('first_Option');

                            first_Option.addEventListener('click', () => {
                                delete_Comments_Replies(Feeds_Data_Base, comment.relationId, comment.postId, comment.id);
                                options.remove();
                            });
                            second_Option.addEventListener('click', () => {
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

                        likecounts.addEventListener('click', () => {
                            LikePopupsAndMore(comment.id, 'commentlike', comment.likes.length);
                        });

                        commentreact.classList.add('replylike');

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
                        reactsflex.appendChild(commentdelete);

                        commentvideoplayer.classList.add('commentvideoplayer');
                        commentplay.classList.add('commentplay');
                        likecounts.classList.add('likecounts');
                        expand.innerText = 'see more...';
                        commentreact.innerHTML = likesvg;

                        reactsflex.classList.add('reactsflex');
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
                                    if (unit.prefixName == 'https://' || unit.prefixName == 'http://') {
                                        let newtitle = commentpost.textContent.replace(texttitle, `<a href="${texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                        console.log(texttitle);
                                        commentpost.innerHTML = newtitle;
                                    } else {
                                        let newtitle = commentpost.textContent.replace(texttitle, `<a href="${'https://' + texttitle.trim()}" target="_blank">${texttitle.trim()}</a>`);
                                        console.log(texttitle);
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

                        commentpostvdieocontainer.addEventListener('click', () => {
                            create_Random_Items(comment.id, comment.posterId, comment.caption, comment.Property_Src, comment.type, 'comment', commenttime.innerHTML);
                        });

                        commentpost.addEventListener('click', () => {
                            commentpost.classList.toggle('commentpostactive');
                        });

                        //COMMENTS LIKE COUNT
                        likecounts.textContent = comment.likes.length;
                        likecounts.id = comment.id;
                        commentreact.addEventListener('click', () => {
                            likecomment();
                        });

                        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                            ActiveUser_Account.forEach(data => {
                                commentreact.id = data.user_Id + comment.id;
                            });


                            function getlikecounts() {
                                if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
                                    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                                    ActiveUser_Account.forEach(data => {
                                        let likes = comment.likes;
                                        likes.forEach(like => {
                                            if (like.postId === comment.id) {
                                                if (like.id === data.user_Id + comment.id) {
                                                    likecounts.classList.add('likecountsactive');
                                                    likecounts.classList.remove('likecounts');
                                                }
                                            }
                                        });
                                    });
                                }
                            }
                            getlikecounts();

                            likecounts.classList.add('comment_like_counters');


                            function likecomment() {
                                if (likecounts.classList.contains('likecounts')) {
                                    const id = '' + new Date().getTime();
                                    likecounts.classList.add('likecountsactive');
                                    likecounts.classList.remove('likecounts');
                                    like_Comment_Reply(comment.id, comment.postId, comment.relationId);
                                    pushNotification(comment.caption, id, comment.id, comment.postId, comment.posterId, 'comment_ReplyLike', 'comment_ReplyLike');
                                } else {
                                    likecounts.classList.add('likecounts');
                                    likecounts.classList.remove('likecountsactive');
                                    Un_like_Comment_Reply(comment.id);
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
                        }
                    }
                }
            });

        });
    });
}
function like_Comment_Reply(postId, relationId, longrelationId) {
    function pushLikeLicense(postId, relationId, longrelationId) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comment => {
                        let commentreplies = comment.comments;
                        commentreplies.forEach(reply => {
                            if (reply.id === postId) {
                                let likes = reply.likes;
                                likes.push({
                                    postId: postId,
                                    posterId: data.user_Id,
                                    relationId: relationId,
                                    longrelationId: longrelationId,
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
            });
        }
    }
    pushLikeLicense(postId, relationId, longrelationId);
}
function Un_like_Comment_Reply(postId) {
    function removeLikeLicense(postId) {
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(data => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.forEach(feed => {
                    let comments = feed.comments;
                    comments.forEach(comment => {
                        let commentreplies = comment.comments;
                        commentreplies.forEach(reply => {
                            if (reply.id === postId) {
                                let likes = reply.likes;
                                likes = likes.filter(like => {
                                    if (like.id === data.user_Id + postId) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                reply.likes = likes;
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
            });
        }
    }
    removeLikeLicense(postId);
}
function delete_Comments_Replies(Feeds_Data_Base, relationId, postId, locationId) {
    Feeds_Data_Base.forEach(feed => {
        if (feed.id === relationId) {
            let comments = feed.comments;
            comments.forEach(comment => {
                if (comment.id === postId) {
                    let commentreplies = comment.comments;
                    commentreplies.forEach(reply => {
                        if (reply.id === locationId) {
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
                                let replies = comment.comments;
                                replies = replies.filter(photo => {
                                    if (photo.id === confirmationtrue.id) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                                comment.comments = replies;
                                localStorage.setItem('Feeds_Data_Base', JSON.stringify(Feeds_Data_Base));
                                commentcount(postId, replies.length);
                                confirmation_popup.remove();
                                document.querySelectorAll('.replyroomculomn').forEach(section => {
                                    if (section.id === comment.id) {
                                        createcommentreplys(section, postId);
                                    } else {
                                        createcommentreplys(postId);
                                    }
                                });
                            });
                        }
                    });
                }
            });
        }
    });
    function commentcount(postId, count_length) {
        document.querySelectorAll('.replycommentcount').forEach(count => {
            if (count.id === postId) {
                count.textContent = count_length;
            }
        });
    }
}