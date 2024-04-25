function createGridPost(locationId, gridsection) {
    removePostGridContents(locationId);
    Feeds_Data_Base.forEach(photo => {
        if (photo.posterId === locationId) {
            if (photo.type === 'timeline') {
                let gridpost = document.createElement('a');
                let gridpostImgCover = document.createElement('div');
                let gridpost_Type_Indicator = document.createElement('div');
                gridpost.href = `view.html?Post_Id=${photo.id}`;
                if (photo.isPhoto || photo.isProfile_Photo || photo.isCover_Photo) {
                    let gridpostimg = document.createElement('img');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    gridpost_Type_Indicator.innerHTML = imagesvg;
                    if (photo.children) {
                        let children = photo.children;
                        for (let i = 0; i < children.length; i++) {
                            gridpostimg.src = children[0].Property_Src;
                        }
                    } else {
                        gridpostimg.src = photo.Property_Src;
                    }
                    function filter_Image() {
                        if (photo.filter == 'default') {
                            gridpostimg.classList.add('--color-default');
                        } else if (photo.filter == 'gray') {
                            gridpostimg.classList.add('--color-gray');
                        } else if (photo.filter == 'contrast') {
                            gridpostimg.classList.add('--color-contrast');
                        } else if (photo.filter == 'bright') {
                            gridpostimg.classList.add('--color-bright');
                        } else if (photo.filter == 'blur') {
                            gridpostimg.classList.add('--color-blur');
                        } else if (photo.filter == 'invert') {
                            gridpostimg.classList.add('--color-invert');
                        } else if (photo.filter == 'sepia') {
                            gridpostimg.classList.add('--color-sepia');
                        } else if (photo.filter == 'hue-rotate') {
                            gridpostimg.classList.add('--color-hue-rotate');
                        } else if (photo.filter == 'opacity') {
                            gridpostimg.classList.add('--color-opacity');
                        } else if (photo.filter == 'satulate') {
                            gridpostimg.classList.add('--color-satulate');
                        }
                    }
                    filter_Image();
                } if (photo.isVideo) {
                    let gridpostimg = document.createElement('video');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    gridpostimg.src = photo.Property_Src;
                    gridpost_Type_Indicator.innerHTML = videosvg;
                } if (photo.isText) {
                    let gridpostmain = document.createElement('div');
                    let gridposttext = document.createElement('p');
                    gridpost.appendChild(gridpostmain);
                    gridpostmain.appendChild(gridposttext);
                    gridposttext.textContent = photo.Property_Src;
                    gridpost_Type_Indicator.innerHTML = textsvg;
                    gridposttext.classList.add('gridposttext');
                    gridpostmain.classList.add('gridpostmain');
                    function textGridPostTextTheme() {
                        function textThemeBackGround() {
                            if (photo.themeMode == 'default') {
                                gridpostmain.classList.add('themedefault');
                            } else if (photo.themeMode == 'claimer') {
                                gridpostmain.classList.add('themeclaimer');
                            } else if (photo.themeMode == 'wriser') {
                                gridpostmain.classList.add('themewriser');
                            } else if (photo.themeMode == 'xriphor') {
                                gridpostmain.classList.add('themexriphor');
                            } else if (photo.themeMode == 'nophia') {
                                gridpostmain.classList.add('themenophia');
                            } else if (photo.themeMode == 'oracle') {
                                gridpostmain.classList.add('themeoracle');
                            } else if (photo.themeMode == 'folah') {
                                gridpostmain.classList.add('themefolah');
                            } else if (photo.themeMode == 'grino') {
                                gridpostmain.classList.add('themegrino');
                            } else if (photo.themeMode == 'rhisxos') {
                                gridpostmain.classList.add('themerhisxos');
                            } else if (photo.themeMode == 'nicklezol') {
                                gridpostmain.classList.add('themenicklezol');
                            } else if (photo.themeMode == 'mirox') {
                                gridpostmain.classList.add('thememirox');
                            } else if (photo.themeMode == 'xosiphor') {
                                gridpostmain.classList.add('themexosiphor');
                            } else if (photo.themeMode == 'rhicode') {
                                gridpostmain.classList.add('themerhicode');
                            } else if (photo.themeMode == 'srccod') {
                                gridpostmain.classList.add('themesrccode');
                            } else if (photo.themeMode == 'xporiah') {
                                gridpostmain.classList.add('themexporiah');
                            } else if (photo.themeMode == 'niph') {
                                gridpostmain.classList.add('themeniph');
                            }
                        }
                        textThemeBackGround();
                        function textThemeFont() {
                            if (photo.fontMode == 'Default') {
                                gridposttext.classList.add('TextDefault');
                            } else if (photo.fontMode == 'Times') {
                                gridposttext.classList.add('TextTimes');
                            } else if (photo.fontMode == 'Asul') {
                                gridposttext.classList.add('TextAsul');
                            } else if (photo.fontMode == 'Satisfy') {
                                gridposttext.classList.add('TextSatisfy');
                            } else if (photo.fontMode == 'Great Vibes') {
                                gridposttext.classList.add('TextGreatVibes');
                            }
                        }
                        textThemeFont();
                    }
                    textGridPostTextTheme();
                }
                gridpost.id = photo.posterId;
                gridsection.appendChild(gridpost);
                gridpost.appendChild(gridpostImgCover);
                gridpostImgCover.appendChild(gridpost_Type_Indicator);
                gridpostImgCover.classList.add('gridpostImgCover');
                gridpost.classList.add('gridpost');
                const setBackGroundImage = ()=> {
                    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            if (data.user_Id === photo.posterId) {
                                if (data.user_CoverPhoto) {
                                    gridpost.style.backgroundImage = "url(" + data.user_CoverPhoto + ")";
                                } else {
                                    gridpost.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                                }
                            }
                        })
                    }
                }
                setBackGroundImage();
            }
        }
    });
}
function createPublicGridPost(locationId, gridsection) {
    removePostGridContents(locationId);
    Feeds_Data_Base.forEach(photo => {
        if (photo.posterId === locationId) {
            if (photo.type == 'public') {
                let gridpost = document.createElement('a');
                let gridpostImgCover = document.createElement('div');
                let gridpost_Type_Indicator = document.createElement('div');
                gridpost.href = `view.html?Post_Id=${photo.id}`;
                if (photo.isPhoto) {
                    let gridpostimg = document.createElement('img');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    if (photo.children) {
                        let children = photo.children;
                        for (let i = 0; i < children.length; i++) {
                            gridpostimg.src = children[0].Property_Src;
                            gridpost.style.backgroundImage = "url(" + children[0].Property_Src + ")";
                        }
                    } else {
                        gridpostimg.src = photo.Property_Src;
                        gridpost.style.backgroundImage = "url(" + photo.Property_Src + ")";
                    }
                    function filter_Image() {
                        if (photo.filter == 'default') {
                            gridpostimg.classList.add('--color-default');
                        } else if (photo.filter == 'gray') {
                            gridpostimg.classList.add('--color-gray');
                        } else if (photo.filter == 'contrast') {
                            gridpostimg.classList.add('--color-contrast');
                        } else if (photo.filter == 'bright') {
                            gridpostimg.classList.add('--color-bright');
                        } else if (photo.filter == 'blur') {
                            gridpostimg.classList.add('--color-blur');
                        } else if (photo.filter == 'invert') {
                            gridpostimg.classList.add('--color-invert');
                        } else if (photo.filter == 'sepia') {
                            gridpostimg.classList.add('--color-sepia');
                        } else if (photo.filter == 'hue-rotate') {
                            gridpostimg.classList.add('--color-hue-rotate');
                        } else if (photo.filter == 'opacity') {
                            gridpostimg.classList.add('--color-opacity');
                        } else if (photo.filter == 'satulate') {
                            gridpostimg.classList.add('--color-satulate');
                        }
                    }
                    filter_Image();
                } if (photo.isVideo || photo.isShort) {
                    let gridpostimg = document.createElement('video');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    gridpostimg.src = photo.Property_Src;
                    gridpost_Type_Indicator.innerHTML = imagesvg;
                    if (photo.isVideo) gridpost_Type_Indicator.innerHTML = videosvg;
                    if (photo.isShort) gridpost_Type_Indicator.innerHTML = stopwatchsvg;
                } if (photo.isText) {
                    let gridpostmain = document.createElement('div');
                    let gridposttext = document.createElement('p');
                    gridpost.appendChild(gridpostmain);
                    gridpostmain.appendChild(gridposttext);
                    gridposttext.textContent = photo.Property_Src;
                    gridpost_Type_Indicator.innerHTML = textsvg;
                    gridposttext.classList.add('gridposttext');
                    gridpostmain.classList.add('gridpostmain');
                    function textGridPostTextTheme() {
                        function textThemeBackGround() {
                            if (photo.themeMode == 'default') {
                                gridpostmain.classList.add('themedefault');
                            } else if (photo.themeMode == 'claimer') {
                                gridpostmain.classList.add('themeclaimer');
                            } else if (photo.themeMode == 'wriser') {
                                gridpostmain.classList.add('themewriser');
                            } else if (photo.themeMode == 'xriphor') {
                                gridpostmain.classList.add('themexriphor');
                            } else if (photo.themeMode == 'nophia') {
                                gridpostmain.classList.add('themenophia');
                            } else if (photo.themeMode == 'oracle') {
                                gridpostmain.classList.add('themeoracle');
                            } else if (photo.themeMode == 'folah') {
                                gridpostmain.classList.add('themefolah');
                            } else if (photo.themeMode == 'grino') {
                                gridpostmain.classList.add('themegrino');
                            } else if (photo.themeMode == 'rhisxos') {
                                gridpostmain.classList.add('themerhisxos');
                            } else if (photo.themeMode == 'nicklezol') {
                                gridpostmain.classList.add('themenicklezol');
                            } else if (photo.themeMode == 'mirox') {
                                gridpostmain.classList.add('thememirox');
                            } else if (photo.themeMode == 'xosiphor') {
                                gridpostmain.classList.add('themexosiphor');
                            } else if (photo.themeMode == 'rhicode') {
                                gridpostmain.classList.add('themerhicode');
                            } else if (photo.themeMode == 'srccod') {
                                gridpostmain.classList.add('themesrccode');
                            } else if (photo.themeMode == 'xporiah') {
                                gridpostmain.classList.add('themexporiah');
                            } else if (photo.themeMode == 'niph') {
                                gridpostmain.classList.add('themeniph');
                            }
                        }
                        textThemeBackGround();
                        function textThemeFont() {
                            if (photo.fontMode == 'Default') {
                                gridposttext.classList.add('TextDefault');
                            } else if (photo.fontMode == 'Times') {
                                gridposttext.classList.add('TextTimes');
                            } else if (photo.fontMode == 'Asul') {
                                gridposttext.classList.add('TextAsul');
                            } else if (photo.fontMode == 'Satisfy') {
                                gridposttext.classList.add('TextSatisfy');
                            } else if (photo.fontMode == 'Great Vibes') {
                                gridposttext.classList.add('TextGreatVibes');
                            }
                        }
                        textThemeFont();
                    }
                    textGridPostTextTheme();
                }
                gridpost.id = photo.posterId;
                gridsection.appendChild(gridpost);
                gridpost.appendChild(gridpostImgCover);
                gridpostImgCover.appendChild(gridpost_Type_Indicator);
                gridpostImgCover.classList.add('gridpostImgCover');
                gridpost.classList.add('gridpost');
                const setBackGroundImage = ()=> {
                    if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                        LogInFormData.forEach(data => {
                            if (data.user_Id === photo.posterId) {
                                if (data.user_CoverPhoto) {
                                    gridpost.style.backgroundImage = "url(" + data.user_CoverPhoto + ")";
                                } else {
                                    gridpost.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                                }
                            }
                        })
                    }
                }
                setBackGroundImage();
            }
        }
    });
}
function createOtherGridPost(locationId, gridsection) {
    removePostGridContents(locationId);
    Feeds_Data_Base.forEach(photo => {
        if (photo.posterId === locationId) {
            if (photo.type == 'other') {
                if (photo.posterId === gridsection.id) {
                    let gridpost = document.createElement('a');
                    let gridpostImgCover = document.createElement('div');
                    let gridpost_Type_Indicator = document.createElement('div');
                    gridpost.href = `view.html?Post_Id=${photo.id}`;
                    if (photo.isPhoto || photo.isAdvert || photo.isCrime) {
                        let gridpostimg = document.createElement('img');
                        gridpost.appendChild(gridpostimg);
                        gridpostimg.classList.add('gridpostimg');
                            if (photo.children) {
                            let children = photo.children;
                            for (let i = 0; i < children.length; i++) {
                                gridpostimg.src = children[0].Property_Src;
                                gridpost.style.backgroundImage = "url(" + children[0].Property_Src + ")";
                            }
                        } else {
                            gridpostimg.src = photo.Property_Src;
                            gridpost.style.backgroundImage = "url(" + photo.Property_Src + ")";
                        }
                        function filter_Image() {
                            if (photo.filter == 'default') {
                                gridpostimg.classList.add('--color-default');
                            } else if (photo.filter == 'gray') {
                                gridpostimg.classList.add('--color-gray');
                            } else if (photo.filter == 'contrast') {
                                gridpostimg.classList.add('--color-contrast');
                            } else if (photo.filter == 'bright') {
                                gridpostimg.classList.add('--color-bright');
                            } else if (photo.filter == 'blur') {
                                gridpostimg.classList.add('--color-blur');
                            } else if (photo.filter == 'invert') {
                                gridpostimg.classList.add('--color-invert');
                            } else if (photo.filter == 'sepia') {
                                gridpostimg.classList.add('--color-sepia');
                            } else if (photo.filter == 'hue-rotate') {
                                gridpostimg.classList.add('--color-hue-rotate');
                            } else if (photo.filter == 'opacity') {
                                gridpostimg.classList.add('--color-opacity');
                            } else if (photo.filter == 'satulate') {
                                gridpostimg.classList.add('--color-satulate');
                            }
                        }
                        filter_Image();
                    }
                    gridpost.id = photo.posterId;
                    gridsection.appendChild(gridpost);
                    gridpost.appendChild(gridpostImgCover);
                    gridpostImgCover.appendChild(gridpost_Type_Indicator);
                    gridpost_Type_Indicator.innerHTML = imagesvg;
                    gridpostImgCover.classList.add('gridpostImgCover');
                    gridpost.classList.add('gridpost');
                    const setBackGroundImage = ()=> {
                        if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                            LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                            LogInFormData.forEach(data => {
                                if (data.user_Id === photo.posterId) {
                                    if (data.user_CoverPhoto) {
                                        gridpost.style.backgroundImage = "url(" + data.user_CoverPhoto + ")";
                                    } else {
                                        gridpost.style.backgroundImage = "url(" + 'lavinstaphotos/eagle.png' + ")";
                                    }
                                }
                            })
                        }
                    }
                    setBackGroundImage();
                }
            }
        }
    });
}
function removePostGridContents(locationId) {
    document.querySelectorAll('.postgrid').forEach(session => {
        if (session.id === locationId) {
            session.innerHTML = '';
        }
    });
}