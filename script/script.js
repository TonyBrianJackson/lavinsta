const PostGrid = document.getElementById('Postgrid');
const gridpostlargeviewcontainer = document.querySelector('.gridpostlargeviewcontainer');
const gridpostimgwideview = document.querySelector('.gridpostimgwideview');
const search_textBox = document.querySelector('.search_textBox');
const home_search_TextBox = document.querySelector('.home_search_TextBox');
const mainsearchbarsvg = document.querySelector('.homeMainSearchBar svg');
const VideoMainSearchBarSvg = document.querySelector('.VideoMainSearchBar svg');
let searchsuggessionlist = [];

function All_Search_On_Home() {
    const Home_Search_Icon = document.querySelectorAll('.Home_Search_Icon');
    function removesearchactiveclassList() {
        Home_Search_Icon.forEach(item => {
            item.classList.remove('active');
        });
    }
    Home_Search_Icon.forEach(item => {
        item.addEventListener('click', () => {
            removesearchactiveclassList();
            if (item.id != 'homesearch') {
            } else {
                item.classList.add('active');
                advancesearch_Method();
            } if (item.id != 'peoplesearch') {
            } else {
                item.classList.add('active');
                searchpeople();
            } if (item.id != 'feedsearch') {
            } else {
                item.classList.add('active');
                search_feeds_Post();
            } if (item.id != 'videosearch') {
            } else {
                item.classList.add('active');
                search_Reels_On_Home();
            } if (item.id != 'photosearch') {
            } else {
                document.querySelector('#photosearch').classList.add('active');
                searcphotos();
            } if (item.id != 'recentsearchlist') {
            } else {
                item.classList.add('active');
                ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
                ActiveUser_Account.forEach(user => {
                    createsuggesion(user.user_Id);
                });
            }
        });
    });

    function localFeedSearch() {
        if (document.querySelector('.search_textBox').value) {
            const Textvalue = document.querySelector('.search_textBox');
            document.querySelectorAll('.post').forEach(photo => {
                Feeds_Data_Base = JSON.parse(localStorage.getItem('Feeds_Data_Base'));
                Feeds_Data_Base.find(post => {
                    if (post.type == 'timeline') {
                        if (post.isPhoto || post.isProfile_Photo || post.isCover_Photo || post.isVideo) {
                            let splitedTitle = post.title.split(" , ");
                            let splitedText = Textvalue.value.split(" , ");
                            splitedTitle.forEach(dataTitle => {
                                splitedText.forEach(TextTitle => {
                                    let titleType = dataTitle.toLowerCase();
                                    let textType = TextTitle.toLowerCase();
                                    if (titleType.indexOf(textType) != -1) {
                                        if (photo.id === post.id) {
                                            photo.style.display = 'flex';
                                        } else {
                                            photo.style.display = 'none';
                                        }
                                    }
                                })
                            })
                        } else if (post.isText) {
                            let splitedTitle = post.Property_Src.split(" , ");
                            let splitedText = Textvalue.value.split(" , ");
                            splitedTitle.forEach(dataTitle => {
                                splitedText.forEach(TextTitle => {
                                    let titleType = dataTitle.toLowerCase();
                                    let textType = TextTitle.toLowerCase();
                                    if (titleType.indexOf(textType) != -1) {
                                        if (photo.id === post.id) {
                                            photo.style.display = 'flex';
                                        } else {
                                            photo.style.display = 'none';
                                        }
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    }
    function advancesearch_Method() {
        if (document.querySelector('#homesearch').classList.contains('active')) {
            if (document.querySelector('.search_textBox').value) {
                const Textvalue = document.querySelector('.search_textBox');
                document.querySelector('.homesearch_List').innerHTML = '';
                LogInFormData.forEach(user => {
                    Feeds_Data_Base.find(post => {
                        if (user.user_Id === post.posterId) {
                            if (post.type) {
                                let searchResult;
                                if (post.isPhoto || post.isAdvert || post.isCrime || post.isVideo || post.isShort) {
                                    let splitedTitle = post.title.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.title}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        })
                                    })
                                } else if (post.isText) {
                                    let splitedTitle = post.Property_Src.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.Property_Src}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        });
                                    });
                                }
                                document.querySelectorAll('.search_result').forEach(result => {
                                    result.addEventListener('click', () => {
                                        createMain_GridPost(result.id);
                                    });
                                });
                            }
                        }
                    });
                });
            }
        }
    };
    function search_feeds_Post() {
        if (document.querySelector('#feedsearch').classList.contains('active')) {
            if (document.querySelector('.search_textBox').value) {
                const Textvalue = document.querySelector('.search_textBox');
                document.querySelector('.homesearch_List').innerHTML = '';
                Feeds_Data_Base.find(post => {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === post.posterId) {
                            if (post.type == 'public') {
                                if (post.isText) {
                                    let splitedTitle = post.Property_Src.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                let searchResult;
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.Property_Src}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        });
                                    });
                                } if (post.isPhoto || post.isAdvert || post.isCrime || post.isVideo || post.isShort) {
                                    let splitedTitle = post.title.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                let searchResult;
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.title}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        })
                                    })
                                }
                                document.querySelectorAll('.search_result').forEach(result => {
                                    result.addEventListener('click', () => {
                                        createMain_GridPost(result.id);
                                    });
                                });
                            }
                        }
                    });
                });
            }
        }
    };
    function search_Reels_On_Home() {
        if (document.querySelector('#videosearch').classList.contains('active')) {
            if (document.querySelector('.search_textBox').value) {
                const Textvalue = document.querySelector('.search_textBox');
                document.querySelector('.homesearch_List').innerHTML = '';
                Feeds_Data_Base.find(post => {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === post.posterId) {
                            if (post.isVideo || post.isShort) {
                                if (post.title) {
                                    let splitedTitle = post.title.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                let searchResult;
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.title}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        })
                                    })
                                }
                                document.querySelectorAll('.search_result').forEach(result => {
                                    result.addEventListener('click', () => {
                                        createMain_GridPost(result.id);
                                    });
                                });
                            }
                        }
                    });
                });
            }
        }
    };
    function searcphotos() {
        if (document.querySelector('#photosearch').classList.contains('active')) {
            if (document.querySelector('.search_textBox').value) {
                const Textvalue = document.querySelector('.search_textBox');
                document.querySelector('.homesearch_List').innerHTML = '';
                Feeds_Data_Base.find(post => {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === post.posterId) {
                            if (post.type == 'other') {
                                if (post.title) {
                                    let splitedTitle = post.title.split(" , ");
                                    let splitedText = Textvalue.value.split(" , ");
                                    splitedTitle.forEach(dataTitle => {
                                        splitedText.forEach(TextTitle => {
                                            let titleType = dataTitle.toLowerCase();
                                            let textType = TextTitle.toLowerCase();
                                            if (titleType.indexOf(textType) != -1) {
                                                let searchResult;
                                                searchResult =
                                                    `<div class="search_result" id="${post.id}">
                                                    <div>
                                                        <div><img src="${user.user_ProfilePicture}"></div>
                                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                                    </div>
                                                    <small>${post.attribute}</small>
                                                    <p>${post.title}</p>
                                                </div>`;
                                                document.querySelector('.homesearch_List').innerHTML += searchResult;
                                            }
                                        })
                                    })
                                }
                                document.querySelectorAll('.search_result').forEach(result => {
                                    result.addEventListener('click', () => {
                                        createMain_GridPost(result.id);
                                    });
                                });
                            }
                        }
                    });
                });
            }
        }
    };
    function searchpeople() {
        if (document.querySelector('#peoplesearch').classList.contains('active')) {
            if (document.querySelector('.search_textBox').value) {
                const Textvalue = document.querySelector('.search_textBox');
                document.querySelector('.homesearch_List').innerHTML = '';
                LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                LogInFormData.find(user => {
                    let Html;
                    let username = user.user_Firstname + ' ' + user.user_Surname;
                    let splitedusername = username.toLowerCase().split(" , ");
                    let splitedText = Textvalue.value.toLowerCase().split(" , ");
                    splitedusername.forEach(name => {
                        splitedText.forEach(text => {
                            if (name.indexOf(text) != -1) {
                                Html =
                                    `<div class="search_result" id="${user.user_Id}">
                                    <div>
                                        <div><img src="${user.user_ProfilePicture}"></div>
                                        <strong>${user.user_Firstname + ' ' + user.user_Surname}</strong>
                                    </div>
                                    <p>${user.user_Bio}</p>
                                </div>`;
                                document.querySelector('.homesearch_List').innerHTML += Html;
                            }
                        });
                    });
                });
                document.querySelectorAll('.search_result').forEach(result => {
                    result.addEventListener('click', () => {
                        createUsersProfile(result.id);
                    });
                });
            }
        }
    };

    document.addEventListener('keypress', (e) => {
        if (document.querySelector('.search_textBox').value) {
            if (e.key == 'Enter') {
                pushsuggesion();
                if (document.querySelector('#homesearch').classList.contains('active')) {
                    advancesearch_Method();
                } else if (document.querySelector('#feedsearch').classList.contains('active')) {
                    search_feeds_Post();
                } else if (document.querySelector('#videosearch').classList.contains('active')) {
                    search_Reels_On_Home();
                } else if (document.querySelector('#photosearch').classList.contains('active')) {
                    searcphotos();
                } else if (document.querySelector('#peoplesearch').classList.contains('active')) {
                    searchpeople();
                }
            }
        }
    });
    if (document.querySelector('#recentsearchlist').classList.contains('active')) {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            createsuggesion(user.user_Id);
        });
    }
    //keyup functions***
    document.querySelector('.search_textBox')
    function text_Visibility(innerValue) {
        home_search_TextBox.value = innerValue.target.value;
        advancesearch_Method();
    };
    function text_Visibility1(innerValue) {
        search_textBox.value = innerValue.target.value;
        advancesearch_Method();
        localFeedSearch();
    };
    function OnPeople(innerValue) {
        search_textBox.value = innerValue.target.value;
        searchpeople();
    };
    function OnPeople1(innerValue) {
        search_textBox.value = innerValue.target.value;
        searchpeople();
    };
    function OnFeed(innerValue) {
        search_textBox.value = innerValue.target.value;
        search_feeds_Post();
    };
    function OnFeed1(innerValue) {
        search_textBox.value = innerValue.target.value;
        search_feeds_Post();
    };
    function OnVideo(innerValue) {
        search_textBox.value = innerValue.target.value;
        search_Reels_On_Home();
    };
    function OnVideo1(innerValue) {
        search_textBox.value = innerValue.target.value;
        search_Reels_On_Home();
    };
    function OnPhoto(innerValue) {
        search_textBox.value = innerValue.target.value;
        searcphotos();
    };
    function OnPhoto1(innerValue) {
        search_textBox.value = innerValue.target.value;
        searcphotos();
    };
    search_textBox.addEventListener('input', text_Visibility);
    home_search_TextBox.addEventListener('input', text_Visibility1);
    search_textBox.addEventListener('input', OnPeople);
    home_search_TextBox.addEventListener('input', OnPeople1);
    search_textBox.addEventListener('input', OnFeed);
    home_search_TextBox.addEventListener('input', OnFeed1);
    search_textBox.addEventListener('input', OnVideo);
    home_search_TextBox.addEventListener('input', OnVideo1);
    search_textBox.addEventListener('input', OnPhoto);
    home_search_TextBox.addEventListener('input', OnPhoto1);

    function pushsuggesion(activeuser) {
        const id = '' + new Date().getTime();
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(user => {
            if (user.user_Id === activeuser) {
                let user_Recent_Search = user.user_Recent_Search;
                function filtersearch() {
                    user_Recent_Search = user_Recent_Search.filter(search => {
                        if (search.title.toLowerCase() === search_textBox.value.toLowerCase()) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    user.user_Recent_Search = user_Recent_Search;
                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                    submitlist();
                }
                function submitlist() {
                    if (search_textBox.value) {
                        user_Recent_Search.push({
                            title: search_textBox.value.toLowerCase(),
                            id: id,
                        });
                        localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                    }
                }
                filtersearch();
            }
        });
    };
    function pushVideoSearch_Suggession() {
        const id = '' + new Date().getTime();
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            ActiveUser_Account.forEach(data => {
                LogInFormData.forEach(user => {
                    if (user.user_Id === data.user_Id) {
                        let user_Recent_Search = user.user_Recent_Video_Search;
                        if (document.querySelector('.Videos_Search_Bar_In_Search-Box').value) {
                            user_Recent_Search.push({
                                title: document.querySelector('.Videos_Search_Bar_In_Search-Box').value.toLowerCase(),
                                id: id,
                            });
                            localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                        }
                    }
                });
            });
        }
    };

    mainsearchbarsvg.addEventListener('click', () => {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        ActiveUser_Account.forEach(data => {
            LogInFormData.forEach(user => {
                if (user.user_Id === data.user_Id) {
                    pushsuggesion(data.user_Id);
                    createsuggesion(data.user_Id);
                }
            });
        });
    });
    VideoMainSearchBarSvg.addEventListener('click', () => {
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        ActiveUser_Account.forEach(data => {
            LogInFormData.forEach(user => {
                if (user.user_Id === data.user_Id) {
                    let user_Recent_Search = user.user_Recent_Video_Search;
                    user_Recent_Search.forEach(recent => {
                        if (recent.title !== document.querySelector('.Videos_Search_Bar_In_Search-Box').value.toLowerCase()) {
                            pushVideoSearch_Suggession();
                        }
                    })
                }
            });
        });
    });

    function createsuggesion(userId) {
        document.querySelectorAll('.homesearch_List').forEach(searchListColumn => {
            searchListColumn.innerHTML = '';
            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
            LogInFormData.forEach(user => {
                if (searchListColumn.id === userId) {
                    let userhomesearchlist = user.user_Recent_Search;
                    userhomesearchlist.forEach(search => {
                        let searchlink = document.createElement('div');
                        let suggessiontext = document.createElement('p');
                        let removesuggession = document.createElement('span');
                        searchListColumn.appendChild(searchlink);
                        searchlink.classList.add('searchlink');
                        suggessiontext.textContent = search.title;
                        searchlink.appendChild(suggessiontext);
                        searchlink.appendChild(removesuggession);
                        removesuggession.classList.add('removesuggession');
                        removesuggession.innerHTML = '&times;';
                        removesuggession.id = search.id;
                        removesuggession.addEventListener('click', () => {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(data => {
                                if (data.user_Id === userId) {
                                    let searchList = data.user_Recent_Search;
                                    searchList = searchList.filter(list => {
                                        if (list.id === removesuggession.id) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    data.user_Recent_Search = searchList;
                                    localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
                                    createsuggesion(data.user_Id);
                                }
                            });
                        });
                        suggessiontext.addEventListener('click', (valuechanges) => {
                            search_textBox.value = suggessiontext.textContent;
                            advancesearch_Method();
                        });
                    });
                }
            });
        });
        document.querySelectorAll('.videosearch_List').forEach(searchListColumn => {
            searchListColumn.innerHTML = '';
            searchsuggessionlist.forEach(suggession => {
                if (searchListColumn.id === suggession.search_Id) {
                    let userhomesearchlist = user.user_Recent_Video_Search;
                    userhomesearchlist.forEach(search => {
                        let searchlink = document.createElement('div');
                        let suggessiontext = document.createElement('p');
                        let removesuggession = document.createElement('span');
                        searchListColumn.appendChild(searchlink);
                        searchlink.classList.add('searchlink');
                        suggessiontext.textContent = search.title;
                        searchlink.appendChild(suggessiontext);
                        searchlink.appendChild(removesuggession);
                        removesuggession.classList.add('removesuggession');
                        removesuggession.innerHTML = '&times;';
                        removesuggession.id = search.id;
                        removesuggession.addEventListener('click', () => {

                        });
                        suggessiontext.addEventListener('click', (valuechanges) => {
                            homesearchbar.value = suggessiontext.textContent;
                            search_textBox.value = suggessiontext.textContent;
                            advancesearch_Method();
                        });
                    });
                }
            });
        });
    };
}
All_Search_On_Home();
function All_Search_On_Video() {
    const Videos_Search_Bar_In_Search_Box = document.querySelector('.Videos_Search_Bar_In_Search-Box');
    const randomvideosearch = document.querySelector('#randomvideosearch');

    function advancesearch_Method() {
        if (document.querySelector('#homesearch').classList.contains('active')) {
            const Videos_Search_Bar_In_Search_Box = document.querySelector('.search_textBox').value.toLowerCase();
            document.querySelectorAll('.videosearch_List').forEach(searchListColumn => {
                searchListColumn.innerHTML = '';
                Feeds_Data_Base.forEach(post => {
                    LogInFormData.forEach(user => {
                        if (user.user_Id === post.posterId) {
                            if (post.isVideo || post.isShort) {
                                let Html;
                                if (post.title.indexOf(Videos_Search_Bar_In_Search_Box) != -1) {
                                    Html = `<div class="search_result" id="${post.id}">
                                                <div>
                                                    <span class="searchvideoresult"><div></div><video src="${post.Property_Src}"></span>
                                                    <nav><strong class="videoseachresultname" id="${user.user_Id}">${user.user_Firstname + ' ' + user.user_Surname}</strong></nav>
                                                </div>
                                                <p>${post.title}</p>
                                                <span>
                                                    <div>${post.likecount + 'likes'}</div>
                                                    <div>${post.commentcount + 'comments'}</div>
                                                    <div>${post.viewcount + 'views'}</div>
                                                </span>
                                                <button id="${post.id}" class="viewPostButton">view post</button>
                                            </div>`;
                                    searchListColumn.innerHTML += Html;
                                    document.querySelectorAll('.searchvideoresult').forEach(result => {
                                        result.addEventListener('click', () => {
                                            document.getElementById('vplayer').src = post.Property_Src;
                                            document.getElementById('vplayer').play();
                                        });
                                    });
                                    document.querySelectorAll('.videoseachresultname').forEach(result => {
                                        result.addEventListener('click', () => {
                                            let usersprofile = document.querySelectorAll('.profile_Cliant');
                                            usersprofile.forEach(profile => {
                                                if (result.id === profile.id) {
                                                    let usersprofileloader = document.createElement('section');
                                                    let mainprofilesvgloader = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                                    let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                                    profile.appendChild(usersprofileloader);
                                                    usersprofileloader.appendChild(mainprofilesvgloader);
                                                    mainprofilesvgloader.appendChild(mainloadercircle);
                                                    mainloadercircle.setAttribute('cy', '30');
                                                    mainloadercircle.setAttribute('cx', '30');
                                                    mainloadercircle.setAttribute('r', '30');
                                                    usersprofileloader.classList.add('usersprofileloader');
                                                    profile.style.display = 'flex';
                                                    LogInFormData.forEach(data => {
                                                        if (data.user_Id === result.id) {
                                                            document.title = data.user_Firstname + ' ' + data.user_Surname;
                                                        }
                                                    })
                                                    sessionStorage.setItem('activepage', result.id);
                                                    setTimeout(() => {
                                                        usersprofileloader.remove();
                                                    }, 3000);
                                                } else {
                                                    profile.style.display = 'none';
                                                }
                                            });
                                        });
                                    });
                                    document.querySelectorAll('.viewPostButton').forEach(result => {
                                        result.addEventListener('click', () => {
                                            function view_Post() {
                                                let itemsviewonlargescale = document.querySelectorAll('.itemsviewonlargescale');
                                                itemsviewonlargescale.forEach(largecontainer => {
                                                    if (largecontainer.id === result.id) {
                                                        let gridpostloader = document.createElement('section');
                                                        let mainloadersvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                                        let mainloadercircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                                        largecontainer.appendChild(gridpostloader);
                                                        gridpostloader.appendChild(mainloadersvg);
                                                        mainloadersvg.appendChild(mainloadercircle);
                                                        mainloadercircle.setAttribute('cy', '30');
                                                        mainloadercircle.setAttribute('cx', '30');
                                                        mainloadercircle.setAttribute('r', '30');
                                                        gridpostloader.classList.add('gridpostloader');
                                                        gridpostloader.id = result.id;
                                                        document.body.appendChild(largecontainer);
                                                        largecontainer.style.display = 'flex';
                                                        setTimeout(() => {
                                                            gridpostloader.remove();
                                                        }, 2000);
                                                    } else {
                                                        largecontainer.style.display = 'none';
                                                    }
                                                });
                                            }
                                            view_Post();
                                        })
                                    });
                                } else {
                                    searchListColumn.innerHTML = 'no result';
                                }
                            }
                        }
                    });
                });
            });
        }
    };
    function text_Visibility(innerValue) {
        Videos_Search_Bar_In_Search_Box.value = innerValue.target.value;
        advancesearch_Method();
    };
    function text_Visibility1(innerValue) {
        randomvideosearch.value = innerValue.target.value;
        advancesearch_Method();
    };
    randomvideosearch.addEventListener('input', text_Visibility);
    Videos_Search_Bar_In_Search_Box.addEventListener('input', text_Visibility1);
}
All_Search_On_Video();

const postcontainer = document.querySelector('.postcontainer');
const CurrentTime = document.querySelector('#CurrentTime');
const totalDuration = document.querySelector('#totalDuration');
const progressarea = document.querySelector('.progressarea');
const progressbar = document.querySelector('.progressbar');
const progresstime = document.querySelector('.progresstime');
const videovideoplayer = document.querySelector('.videovideoplayer');
const next10secstrim = document.querySelector('#next10secstrim');
const previous10secstrim = document.querySelector('#previous10secstrim');
const playerplaybtn = document.querySelector('#playerplaybtn');
const playerpausebtn = document.querySelector('#playerpausebtn');
const expanding = document.querySelector('.alphaleftcontrols.expanding');
const collapsing = document.querySelector('.alphaleftcontrols.collapsing');
const pictureInpicture = document.querySelector('alpharightcontrols.pictureInpicture');
const repeatbtn = document.querySelector('.alpharightcontrols.repeat');
const loopbtn = document.querySelector('.alpharightcontrols.loop');
const volumeon = document.querySelector('.alpharightcontrols.volumeon');
const volumeoff = document.querySelector('.alpharightcontrols.volumeoff');
const volumerange = document.querySelector('#volumerange');
const alpharightcontrols = document.querySelectorAll('.alpharightcontrols');
//videoplayer works


const gallery = document.querySelector('.gallery');
const connectvideos = document.querySelector('.connectvideos');
const Videoplayer = document.getElementById('vplayer');
const videouploadpopup = document.querySelector('.videouploadpopup');
const titlearea = document.querySelector('.titlearea');
const playeractionarea = document.querySelector('.playeractionarea');
const mainvideoplayer = document.querySelector('.mainvideoplayer');
const videoplayernavigation = document.querySelector('.videoplayernavigation');
const videoplayermiddleplaypause = document.querySelector('.videoplayermiddleplaypause');
const videoplayerplaybutton = document.querySelector('.videoplayerplaybutton');
const videoplayerpausebutton = document.querySelector('.videoplayerpausebutton');
mainvideoplayer.addEventListener('mousemove', () => {
    videoplayermiddleplaypause.classList.add('videoplayermiddleplaypauseactive');
    videoplayernavigation.style.display = 'flex';
});
mainvideoplayer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        videoplayermiddleplaypause.classList.remove('videoplayermiddleplaypauseactive');
        videoplayernavigation.style.display = 'none';
    }, 1000);
});
next10secstrim.addEventListener('click', () => {
    Videoplayer.currentTime += 10;
});
previous10secstrim.addEventListener('click', () => {
    Videoplayer.currentTime -= 10;
});
Videoplayer.addEventListener('loadeddata', (e) => {
    let videoDuration = e.target.duration;
    let totalMin = Math.floor(videoDuration / 60);
    let totalSec = Math.floor(videoDuration % 60);

    //if totalmin are less than 10 add 0 at the beginning;
    totalMin < 10 ? totalMin = "0" + totalMin : totalMin;
    //if totalmin are less than 10 add 0 at the beginning;
    totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
    totalDuration.innerHTML = `${totalMin} : ${totalSec}`;
});

Videoplayer.addEventListener('timeupdate', () => {
    let currentVideoTime = event.target.currentTime;
    let currentMin = Math.floor(currentVideoTime / 60);
    let currentSec = Math.floor(currentVideoTime % 60);
    //if CurrentMin is < 10 add 0 at the beginning;
    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

    //if CurrentSec is < 10 add 0 at the beginning;
    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
    CurrentTime.innerHTML = `${currentMin} : ${currentSec}`;

    //progress bar
    let videoDuration = event.target.duration;
    let progressvalue = (currentVideoTime / videoDuration) * 100;
    progressbar.style.width = `${progressvalue}%`;
});
Videoplayer.addEventListener('ended', () => {
    playerpausebtn.style.display = 'none';
    videoplayerpausebutton.style.display = 'none';
    playerplaybtn.style.display = 'flex';
    videoplayerplaybutton.style.display = 'flex';
});
Videoplayer.addEventListener('play', () => {
    playerpausebtn.style.display = 'flex';
    videoplayerpausebutton.style.display = 'flex';
    playerplaybtn.style.display = 'none';
    videoplayerplaybutton.style.display = 'none';
});
Videoplayer.addEventListener('pause', () => {
    playerpausebtn.style.display = 'none';
    videoplayerpausebutton.style.display = 'none';
    playerplaybtn.style.display = 'flex';
    videoplayerplaybutton.style.display = 'flex';
});
var Document_Title = document.title;

document.addEventListener('visibilitychange', () => {
    var state = document.visibilityState;
    if (!Videoplayer.paused) {
        if (state == 'hidden') {
            Videoplayer.pause();
        }
    }
    document.querySelectorAll('video').forEach(video => {
        if (!video.paused) {
            if (state == 'hidden') {
                video.pause();
            }
        }
    })
});
//duration events
progressarea.addEventListener('click', () => {
    let videoDuration = Videoplayer.duration;
    progressbarwidthvalue = progressarea.clientWidth;
    let clickOffSetx = event.offsetX;
    Videoplayer.currentTime = (clickOffSetx / progressbarwidthvalue) * videoDuration;
});
progressarea.addEventListener('mousemove', () => {
    let progressbarwidthvalue = progressarea.clientWidth;
    let x = event.offsetX;
    progresstime.style.setProperty('--x', `${x}px`);
    progresstime.style.display = 'block';
    let videoDuration = Videoplayer.duration;
    let progressareatime = Math.floor((x / progressbarwidthvalue) * videoDuration);
    let currentMin = Math.floor(progressareatime / 60);
    let currentSec = Math.floor(progressareatime % 60);

    //if CurrentMin is < 10 add 0 at the beginning;
    currentMin < 10 ? currentMin = "0" + currentMin : currentMin;

    //if currentsec is < than 10 add 0 at the beginning
    currentSec < 10 ? currentSec = "0" + currentSec : currentSec;
    CurrentTime.innerHTML = ` ${currentMin} : ${currentSec}`;
    progresstime.innerHTML = `${currentMin} : ${currentSec}`;
});
progressarea.addEventListener('mouseleave', () => {
    progresstime.style.display = 'none';
});

expanding.addEventListener('click', () => {
    document.querySelector('.videoplayer').requestFullscreen();
    document.querySelector('.videoplayer').style = 'border-radius: 0px;';
    expanding.style.display = 'none';
    collapsing.style.display = 'flex';
});
collapsing.addEventListener('click', () => {
    expanding.style.display = 'flex';
    collapsing.style.display = 'none';
    document.querySelector('.videoplayer').style = 'border-radius: 10px;';
    document.exitFullscreen();
});
volumeon.addEventListener('click', () => {
    volumeoff.style.display = 'flex';
    volumeon.style.display = 'none';
    volumerange.value = 0;
    Videoplayer.volume = 0;
});
volumeoff.addEventListener('click', () => {
    volumeoff.style.display = 'none';
    volumeon.style.display = 'flex';
    volumerange.value = 80;
    Videoplayer.volume = 0.8;
});
function volumeChanges() {
    Videoplayer.volume = volumerange.value / 100;
    if (volumerange.value < 1) {
        volumeoff.style.display = 'flex';
        volumeon.style.display = 'none';
    } else {
        volumeoff.style.display = 'none';
        volumeon.style.display = 'flex';
    }
}

volumerange.addEventListener('change', () => {
    volumeChanges();
});


repeatbtn.addEventListener('click', () => {
    loopbtn.style.display = 'flex';
    repeatbtn.style.display = 'none';
});
loopbtn.addEventListener('click', () => {
    loopbtn.style.display = 'none';
    repeatbtn.style.display = 'flex';
});

playerplaybtn.addEventListener('click', () => {
    let vplayer = document.querySelector('#vplayer');
    if (vplayer.src) {
        vplayer.play();
    }
});

videoplayerplaybutton.addEventListener('click', () => {
    let vplayer = document.querySelector('#vplayer');
    if (vplayer.src) {
        vplayer.play();
    }
});

//end
playerpausebtn.addEventListener('click', () => {
    let vplayer = document.querySelector('#vplayer');
    if (vplayer.src) {
        vplayer.pause();
    }
});
videoplayerpausebutton.addEventListener('click', () => {
    let vplayer = document.querySelector('#vplayer');
    if (vplayer.src) {
        vplayer.pause();
    }
});

const TrendIngVid = document.getElementById('videotrending');
let videotitleposter = document.getElementById('videotitle');


function videoadding() {
    let videoinput4 = document.getElementById('videovideouploader');
    let v4reader = new FileReader();
    v4reader.readAsDataURL(videoinput4.files[0]);
    v4reader.onload = function () {
        document.getElementById('videovid').src = v4reader.result;
    }
}
//reels adding
function reeladding() {
    let videoinputs4 = document.getElementById('reeluploader');
    let sv4reader = new FileReader();
    sv4reader.readAsDataURL(videoinputs4.files[0]);
    sv4reader.onload = function () {
        document.getElementById('videovid').src = sv4reader.result;
    }
}


const reeLabel = document.getElementById('reellabel');
const videoLabel = document.getElementById('videolabel');
videoLabel.addEventListener('click', () => {
    let addvideo = document.getElementById('addvideo');
    let addreel = document.getElementById('addreel');
    let textarea2 = document.getElementById('videotitle');
    let videovid = document.getElementById('videovid');
    videovid.style.display = 'flex';
    addvideo.style.display = 'block';
    addreel.style.display = 'none';
    textarea2.style.width = '80%';
    document.querySelector('.gallery').style.display = 'flex';
});
reeLabel.addEventListener('click', () => {
    let addvideo = document.getElementById('addvideo');
    let addreel = document.getElementById('addreel');
    let textarea2 = document.getElementById('videotitle');
    let videovid = document.getElementById('videovid');
    videovid.style.display = 'flex';
    addvideo.style.display = 'none';
    addreel.style.display = 'block';
    textarea2.style.width = '80%';
    document.querySelector('.gallery').style.display = 'none';
});

function activatebuttons() {
    let uploadlabel = document.querySelectorAll('.--uploadlabel');
    uploadlabel.forEach(label => {
        label.addEventListener('click', () => {
            if (label.classList.contains('worldwidelabel')) {
                postworldwidephoto.style.display = 'block';
                multiplepostworldwidephoto.style.display = 'none';
                multiplepostadvert.style.display = 'none';
                multiplepostcrime.style.display = 'none';
                document.querySelector('.lavinstaphotopreview').style.display = 'flex';
            } else {
                postworldwidephoto.style.display = 'none';
                document.querySelector('.lavinstaphotopreview').style.display = 'none';
            } if (label.classList.contains('advertlabel')) {
                postadvert.style.display = 'block';
                multiplepostworldwidephoto.style.display = 'none';
                multiplepostadvert.style.display = 'none';
                multiplepostcrime.style.display = 'none';
                document.querySelector('.lavinstaadvertpreview').style.display = 'flex';
            } else {
                postadvert.style.display = 'none';
                document.querySelector('.lavinstaadvertpreview').style.display = 'none';
            } if (label.classList.contains('crimelabel')) {
                postcrime.style.display = 'block';
                multiplepostworldwidephoto.style.display = 'none';
                multiplepostadvert.style.display = 'none';
                multiplepostcrime.style.display = 'none';
                document.querySelector('.lavinstacrimepreview').style.display = 'flex';
            } else {
                postcrime.style.display = 'none';
                document.querySelector('.lavinstacrimepreview').style.display = 'none';
            }
        })
    });
}
activatebuttons();

function uploadadvert(event) {
    let adverstinput = document.querySelector('#adverstinput');
    const filereader = new FileReader();
    filereader.readAsDataURL(adverstinput.files[0]);
    filereader.onload = function () {
        document.querySelector('#srcadvertphoto').src = filereader.result;
    }
}

const photogalleryculomn1 = document.querySelector('.photogalleryculomn1');
const photogalleryculomn2 = document.querySelector('.photogalleryculomn2');
function uploadcrime(event) {
    let crimepostinput = document.querySelector('#crimepostinput');
    const filereader = new FileReader();
    filereader.readAsDataURL(crimepostinput.files[0]);
    filereader.onload = function () {
        document.querySelector('#srccrimephoto').src = filereader.result;
    }
}

const photogalleryculomn = document.querySelector('.photogalleryculomn');
function postwordwide() {
    let worldwidephotoinput = document.getElementById('worldwidephotoinput');
    let worldwidereader = new FileReader();
    worldwidereader.readAsDataURL(worldwidephotoinput.files[0]);
    worldwidereader.onload = function () {
        document.getElementById('srcworldwidephoto').src = worldwidereader.result;
    }
};

//LOGOUT SCRIPT
const enterlogoutpagebtn = document.querySelector('.enterlogoutpagebtn');
const confirmation_popup = document.querySelector('.confirmation_popup');
const confirmationtrue = document.querySelector('.confirmationtrue');
const confirmationfalse = document.querySelector('.confirmationfalse');
confirmationfalse.addEventListener('click', () => {
    confirmation_popup.style.display = 'none';
    document.querySelector('.logoutpopup').style.display = 'none';
})
confirmationtrue.addEventListener('click', () => {
    confirmation_popup.style.display = 'none';
    location.href = 'login.html';
    localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
})
enterlogoutpagebtn.addEventListener('click', () => {
    confirmation_popup.style.display = 'flex';
});
const Edit_DateOfBirtConsole_Day = document.querySelector('.Edit_DateOfBirtConsole_Day');
const Edit_DateOfBirtConsole_Month = document.querySelector('.Edit_DateOfBirtConsole_Month');
const Edit_DateOfBirtConsole_Year = document.querySelector('.Edit_DateOfBirtConsole_Year');
const edit_Date_PickerCloseButton = document.querySelector('.edit_Date_PickerCloseButton');
const edit_Month_PickerCloseButton = document.querySelector('.edit_Month_PickerCloseButton');
const edit_done_with_Month_Picker = document.querySelector('.edit_done_with_Month_Picker');
const edit_done_with_Date_Picker = document.querySelector('.edit_done_with_Date_Picker');

const edit_day_Option = document.querySelectorAll('.edit_day_Option');
const edit_month_picker_Option = document.querySelectorAll('.edit_month_picker_Option');

function removeEditDayOptionActiveClasses() {
    edit_day_Option.forEach(option => {
        option.classList.remove('active');
    });
}
function removeEditMonthOptionActiveClasses() {
    edit_month_picker_Option.forEach(option => {
        option.classList.remove('active');
    });
}
function findInput(editedValue) {
    Edit_DateOfBirtConsole_Year.textContent = editedValue.target.value;
}
document.querySelector('#Edit_DateOfBirt_Year').addEventListener('keyup', findInput);
edit_day_Option.forEach(option => {
    option.addEventListener('click', () => {
        Edit_DateOfBirtConsole_Day.textContent = option.textContent;
        document.querySelector('.edit_date_picker_container').style.display = 'none';
        removeEditDayOptionActiveClasses();
        option.classList.add('active');
    });
});

edit_month_picker_Option.forEach(option => {
    option.addEventListener('click', () => {
        removeEditMonthOptionActiveClasses();
        Edit_DateOfBirtConsole_Month.textContent = option.textContent;
        document.querySelector('.edit_date_picker_container_month').style.display = 'none';
        option.classList.add('active');
    });
})
Edit_DateOfBirtConsole_Day.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container').style.display = 'flex';
});
Edit_DateOfBirtConsole_Month.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container_month').style.display = 'flex';
});
edit_Date_PickerCloseButton.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container').style.display = 'none';
});
edit_Month_PickerCloseButton.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container_month').style.display = 'none';
});
edit_done_with_Date_Picker.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container').style.display = 'none';
});
edit_done_with_Month_Picker.addEventListener('click', () => {
    document.querySelector('.edit_date_picker_container_month').style.display = 'none';
});