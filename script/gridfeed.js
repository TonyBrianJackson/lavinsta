function createGridPost(locationId, gridsection) {
    removePostGridContents(locationId);
    Feeds_Data_Base.forEach(photo => {
        if (photo.posterId === locationId) {
            if (photo.type === 'timeline') {
                let gridpost = document.createElement('a');
                let gridpostImgCover = document.createElement('div');
                let gridpost_Type_Indicator = document.createElement('div');
                let Img_Inidcator_Img = document.createElement('img');
                gridpost.href = `#Post_Id=${photo.id}/postType=${photo.type}`;
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
                                gridpost.classList.add('themedefault');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
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
                                gridpost.classList.add('thememirox');
                            } else if (photo.themeMode == 'xosiphor') {
                                gridpost.classList.add('themexosiphor');
                            } else if (photo.themeMode == 'rhicode') {
                                gridpost.classList.add('themerhicode');
                            } else if (photo.themeMode == 'srccod') {
                                gridpost.classList.add('themesrccode');
                            } else if (photo.themeMode == 'xporiah') {
                                gridpost.classList.add('themexporiah');
                            } else if (photo.themeMode == 'niph') {
                                gridpost.classList.add('themeniph');
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
                gridpost.addEventListener('click', () => {
                    createMain_GridPost(photo.id, photo.Property_Src,'home');
                });
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
                let Img_Inidcator_Img = document.createElement('img');
                gridpost.href = `#Post_Id=${photo.id}/postType=${photo.type}`;
                if (photo.isPhoto) {
                    let gridpostimg = document.createElement('img');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    Img_Inidcator_Img.src = 'icons/image(0).png';
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
                } if (photo.isVideo || photo.isShort) {
                    let gridpostimg = document.createElement('video');
                    gridpost.appendChild(gridpostimg);
                    gridpostimg.classList.add('gridpostimg');
                    gridpostimg.src = photo.Property_Src;
                    Img_Inidcator_Img.src = 'icons/youtube.png';
                    if (photo.isVideo) Img_Inidcator_Img.src = 'icons/youtube.png';
                    if (photo.isShort) Img_Inidcator_Img.src = 'icons/stopwatch.png';
                } if (photo.isText) {
                    let gridposttext = document.createElement('p');
                    gridpost.appendChild(gridposttext);
                    gridposttext.textContent = photo.Property_Src;
                    Img_Inidcator_Img.src = 'icons/text (1).png';
                    gridposttext.classList.add('gridposttext');
                    function textGridPostTextTheme() {
                        function textThemeBackGround() {
                            if (photo.themeMode == 'default') {
                                gridpost.classList.add('themedefault');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'claimer') {
                                gridpost.classList.add('themeclaimer');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'wriser') {
                                gridpost.classList.add('themewriser');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'xriphor') {
                                gridpost.classList.add('themexriphor');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'nophia') {
                                gridpost.classList.add('themenophia');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'oracle') {
                                gridpost.classList.add('themeoracle');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'folah') {
                                gridpost.classList.add('themefolah');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'grino') {
                                gridpost.classList.add('themegrino');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'rhisxos') {
                                gridpost.classList.add('themerhisxos');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'nicklezol') {
                                gridpost.classList.add('themenicklezol');
                                gridpost.classList.add('gridpost_Radius');
                                gridposttext.classList.add('themenicklezolgridposttext');
                            } else if (photo.themeMode == 'mirox') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('thememirox');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'xosiphor') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('themexosiphor');
                                gridposttext.classList.add('gridposttextdark');
                            } else if (photo.themeMode == 'rhicode') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('themerhicode');
                                gridposttext.classList.add('gridposttextToviewWhite');
                            } else if (photo.themeMode == 'srccod') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('themesrccode');
                                gridposttext.classList.add('text_Theme_Color_Is_White');
                            } else if (photo.themeMode == 'xporiah') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('themexporiah');
                                gridposttext.classList.add('text_Theme_Color_Is_White');
                            } else if (photo.themeMode == 'niph') {
                                gridpost.classList.add('gridpost_Radius');
                                gridpost.classList.add('themeniph');
                                gridposttext.classList.add('text_Theme_Color_Is_White');
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
                gridpost_Type_Indicator.appendChild(Img_Inidcator_Img);
                gridpostImgCover.classList.add('gridpostImgCover');
                gridpost.classList.add('gridpost');
                gridpost.addEventListener('click', () => {
                    createMain_GridPost(photo.id, photo.Property_Src,'home');
                });
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
                    let Img_Inidcator_Img = document.createElement('img');
                    gridpost.href = `#Post_Id=${photo.id}/postType=${photo.type}`;
                    if (photo.isPhoto || photo.isAdvert || photo.isCrime) {
                        let gridpostimg = document.createElement('img');
                        gridpost.appendChild(gridpostimg);
                        gridpostimg.classList.add('gridpostimg');
                        Img_Inidcator_Img.src = 'icons/image(0).png';
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
                    }
                    gridpost.id = photo.posterId;
                    gridsection.appendChild(gridpost);
                    gridpost.appendChild(gridpostImgCover);
                    gridpostImgCover.appendChild(gridpost_Type_Indicator);
                    gridpost_Type_Indicator.appendChild(Img_Inidcator_Img);
                    gridpostImgCover.classList.add('gridpostImgCover');
                    gridpost.classList.add('gridpost');
                    gridpost.addEventListener('click', () => {
                        createMain_GridPost(photo.id, photo.Property_Src,'home');
                    });
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