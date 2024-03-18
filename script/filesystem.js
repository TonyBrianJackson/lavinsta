const timelineviddoeskeleton = document.querySelectorAll('.timelineviddoeskeleton');
function requestDisplayNone() {
    let postskelton = document.querySelector('.postskelton');
    let gridpostskeleton = document.querySelectorAll('.gridpostskeleton');
    postskelton.style.display = 'none';
    gridpostskeleton.forEach(skets => {
        skets.style.display = 'none';
    });
}

function regularItemDisplay() {
    const postwriterfloatitems = document.querySelectorAll('.postwriterfloatitems');
    postwriterfloatitems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.sidebarcontents').style.display = 'flex';
            if (item.id != 'smallphotopost') {
                document.querySelector('.smallphoto1').style.display = 'none';
                Photopostbtn.style.display = 'none';
            } else {
                document.querySelector('.smallphoto1').style.display = 'flex';
                Photopostbtn.style.display = 'block';
                document.querySelector('#multipostbtn').style.display = 'none';
            } if (item.id != 'smallvideopost') {
                document.querySelector('.smallvideo2').style.display = 'none';
                videopostbtn.style.display = 'none';
            } else {
                document.querySelector('.smallvideo2').style.display = 'flex';
                videopostbtn.style.display = 'block';
                document.querySelector('#multipostbtn').style.display = 'none';
            } if (item.id != 'smallshortvideopost') {
                document.querySelector('.shortvideo3').style.display = 'none';
                shortpostbtn.style.display = 'none';
            } else {
                document.querySelector('.shortvideo3').style.display = 'flex';
                shortpostbtn.style.display = 'block';
                document.querySelector('#multipostbtn').style.display = 'none';
            } if (item.id != 'smalltextposter') {
                document.querySelector('.textarea').style.display = 'none';
                postBtn.style.display = 'none';
            } else {
                document.querySelector('.textarea').style.display = 'flex';
                postBtn.style.display = 'block';
                document.querySelector('#multipostbtn').style.display = 'none';
            }
        })
    });
}
regularItemDisplay();

function TimeLineTextPostThemes() {
    const textpostactionmenu = document.querySelectorAll('.textpostactionmenu');
    textpostactionmenu.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id != 'TextthemeMode') {
                document.querySelector('.sidebar_Create').style.display = 'none';
            } else {
                document.querySelector('.sidebar_Create').style.display = 'flex';
            } if (button.id != 'TextThemeFont') {
                document.querySelector('.sidebar_Theme_Text_Font').style.display = 'none';
            } else {
                document.querySelector('.sidebar_Theme_Text_Font').style.display = 'flex';
            }
        });
    });
    const sidetextthemeitems = document.querySelectorAll('.sidetextthemeitems');
    let sidebar_Mode_Theme_Title = document.querySelector('.sidebar_Mode_Theme_Title');
    function removeactiveclassesHere() {
        sidetextthemeitems.forEach(item => {
            item.classList.remove('active');
        });
    }
    const sidebarfontname = document.querySelectorAll('.--sidebarfontname');
    let sidebar_Mode_Font_Title = document.querySelector('.sidebar_Mode_Font_Title');
    function removeactiveclassesThere() {
        sidebarfontname.forEach(item => {
            item.classList.remove('active');
        })
    }
    sidebarfontname.forEach(item => {
        item.addEventListener('click', () => {
            removeactiveclassesThere();
            sidebar_Mode_Font_Title.textContent = item.textContent;
            item.classList.add('active');
        });
    });
    sidebar_Mode_Theme_Title.addEventListener('click', () => {
        document.querySelector('.sidebar_Create').style.display = 'none';
    });
    sidebar_Mode_Font_Title.addEventListener('click', () => {
        document.querySelector('.sidebar_Theme_Text_Font').style.display = 'none';
    });

    sidetextthemeitems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar_Mode_Theme_Title.textContent = item.textContent;
            removeactiveclassesHere();
            item.classList.add('active');
        })
    });
}
TimeLineTextPostThemes();
function PublicTextPostThemes() {
    const textpostpublic = document.querySelectorAll('.textpostpublic');
    textpostpublic.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id != 'TextthemeMode') {
                document.querySelector('.public_Create').style.display = 'none';
            } else {
                document.querySelector('.public_Create').style.display = 'flex';
            } if (button.id != 'TextThemeFont') {
                document.querySelector('.Theme_Text_Font').style.display = 'none';
            } else {
                document.querySelector('.Theme_Text_Font').style.display = 'flex';
            }
        });
    });
    const publictextthemeitems = document.querySelectorAll('.publictextthemeitems');
    let public_Mode_Theme_Title = document.querySelector('.public_Mode_Theme_Title');
    function removeactiveclassesHere() {
        publictextthemeitems.forEach(item => {
            item.classList.remove('active');
        });
    }
    const publicfontname = document.querySelectorAll('.--publicfontname');
    let public_Mode_Font_Title = document.querySelector('.public_Mode_Font_Title');
    function removeactiveclassesThere() {
        publicfontname.forEach(item => {
            item.classList.remove('active');
        })
    }
    publicfontname.forEach(item => {
        item.addEventListener('click', () => {
            removeactiveclassesThere();
            public_Mode_Font_Title.textContent = item.textContent;
            item.classList.add('active');
        });
    });
    public_Mode_Theme_Title.addEventListener('click', () => {
        document.querySelector('.public_Create').style.display = 'none';
    });
    public_Mode_Font_Title.addEventListener('click', () => {
        document.querySelector('.Theme_Text_Font').style.display = 'none';
    });

    publictextthemeitems.forEach(item => {
        item.addEventListener('click', () => {
            public_Mode_Theme_Title.textContent = item.textContent;
            removeactiveclassesHere();
            item.classList.add('active');
        })
    });
}
PublicTextPostThemes();

const reelpageshortuploader = document.querySelector('#reelpageshortuploader');
const reelpagetitle = document.querySelector('#reelpagetitle');
const reelpagevideo = document.querySelector('#reelpagevideo');
function accessFile() {
    const reader = new FileReader();
    reader.readAsDataURL(reelpageshortuploader.files[0]);
    reader.onload = function () {
        document.querySelector('#reelpagevideo').src = reader.result;
    }
}

function CommunityProfileImage() {
    const reader = new FileReader();
    reader.readAsDataURL(document.querySelector('#com_profile').files[0]);
    reader.onload = function () {
        document.querySelector('#com_profilesrc').src = reader.result;
    }
}

const profilepictureuploading = document.getElementById('profilepictureuploading').src;

const profilefilterbtn = document.querySelector('.profilefilterbtn');
const coverfilterbtn = document.querySelector('.coverfilterbtn');
const profilefilter_Close_button = document.querySelector('.profilefilter_Close_button');
const coverfilter_Close_button = document.querySelector('.coverfilter_Close_button');
const profilepicturefilterpopup = document.querySelector('.profilepicturefilterpopup');
const coverpicturefilterpopup = document.querySelector('.coverpicturefilterpopup');
const Profile_img_filter = document.querySelectorAll('.profilepicturefilterpopup span img');
const Cover_img_filter = document.querySelectorAll('.coverpicturefilterpopup span img');
function activateFilter() {
    Profile_img_filter.forEach(filt => {
        filt.src = document.getElementById('profilepictureuploading').src;
    });
}
document.querySelectorAll('.profilepicturefilterpopup .filtername').forEach(filt => {
    filt.addEventListener('click', () => {
        document.querySelector('.profilefiltertitle').textContent = filt.textContent;
    });
});
document.querySelectorAll('.coverpicturefilterpopup .filtername').forEach(filt => {
    filt.addEventListener('click', () => {
        document.querySelector('.coverfiltertitle').textContent = filt.textContent;
    });
});

profilefilter_Close_button.addEventListener('click', () => {
    profilepicturefilterpopup.style.display = 'none';
});
coverfilter_Close_button.addEventListener('click', () => {
    coverpicturefilterpopup.style.display = 'none';
});
setTimeout(() => {
    activateFilter();
}, 5000);
let filterdefault;
let filterblur;
let filtersepia;
let filterhuerotate;
let filterinvert;
let filterbright;
let filteropacity;
let filtergrey;
let filtercontrast;
function changeFilter() {
    root.style.setProperty('--clr-none', filterdefault);
    root.style.setProperty('--clr-blur', filterblur);
    root.style.setProperty('--clr-sepia', filtersepia);
    root.style.setProperty('--clr-hue-rotate', filterhuerotate);
    root.style.setProperty('--clr-invert', filterinvert);
    root.style.setProperty('--clr-bright', filterbright);
    root.style.setProperty('--clr-opacity', filteropacity);
    root.style.setProperty('--clr-grey', filtergrey);
    root.style.setProperty('--clr-contrast', filtercontrast);
}

profilefilterbtn.addEventListener('click', () => {
    profilepicturefilterpopup.style.display = 'flex';
    coverpicturefilterpopup.style.display = 'none';
});
coverfilterbtn.addEventListener('click', () => {
    profilepicturefilterpopup.style.display = 'none';
    coverpicturefilterpopup.style.display = 'flex';
});

function readfile() {
    let profileuploader = document.getElementById('profileuploader');
    let profilereader = new FileReader();
    profilereader.readAsDataURL(profileuploader.files[0]);
    profilereader.onload = function () {
        document.getElementById('profilepictureuploading').src = profilereader.result;
        Profile_img_filter.forEach(filt => {
            filt.src = document.getElementById('profilepictureuploading').src;
        });
    }
};

function reload() {
    let coveruploader = document.getElementById('coverphotouploader');
    let coverreader = new FileReader();
    coverreader.readAsDataURL(coveruploader.files[0]);
    coverreader.onload = function () {
        document.getElementById('uploadingdefaultcoverphoto').src = coverreader.result;
        Cover_img_filter.forEach(filt => {
            filt.src = document.getElementById('uploadingdefaultcoverphoto').src;
        });
    }
};
function rewindfile() {
    let photopostinput = document.getElementById('photopostinput');
    let preader = new FileReader();
    preader.readAsDataURL(photopostinput.files[0]);
    preader.onload = function () {
        document.getElementById('photophoto').src = preader.result;
    }
};
let emptyArr = [];
function multiplefiles() {
    const choice = document.querySelector('#multiplephotopostinput');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.homepageflexer').style.display = 'flex';
                document.querySelector('.homepageflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });
                Photopostbtn.style.display = 'none';
                multipostbtn.style.display = 'block';

                document.getElementById('photophoto').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.getElementById('photophoto').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}
function multiplepublicfiles() {
    const choice = document.querySelector('#multiplepublicinput');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.publicflexer').style.display = 'flex';
                document.querySelector('.publicflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });
                publicphotoupload.style.display = 'none';
                publicmultipleupload.style.display = 'block';

                document.querySelector('.publicimagepreview').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.querySelector('.publicimagepreview').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}
function multiplephotosfiles() {
    const choice = document.querySelector('#multiple_worldwidephotoinput');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.photoflexer').style.display = 'flex';
                document.querySelector('.photoflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });
                postworldwidephoto.style.display = 'none';
                multiplepostworldwidephoto.style.display = 'block';

                document.querySelector('#srcworldwidephoto').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.querySelector('#srcworldwidephoto').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}
function multipleadvertsfiles() {
    const choice = document.querySelector('#multiple_adverstinput');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.advertflexer').style.display = 'flex';
                document.querySelector('.advertflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });
                postadvert.style.display = 'none';
                multiplepostadvert.style.display = 'block';

                document.querySelector('#srcadvertphoto').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.querySelector('#srcadvertphoto').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}
function multiplecrimesfiles() {
    const choice = document.querySelector('#multiple_crimepostinput');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.crimeflexer').style.display = 'flex';
                document.querySelector('.crimeflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });
                postcrime.style.display = 'none';
                multiplepostcrime.style.display = 'block';
                document.querySelector('#srccrimephoto').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.querySelector('#srccrimephoto').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}
function removeImgContainer() {
    document.querySelectorAll('.multipleimages').forEach(container => {
        container.remove();
    });
}
function multiplestory() {
    const choice = document.querySelector('#multiplestory_input');
    if (choice.files.length > 1) {
        removeImgContainer();
        emptyArr = [];
        for (let i = 0; i < choice.files.length; i++) {
            let ImageContainer = document.createElement('div');
            let image = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(choice.files[i]);
            reader.onload = () => {
                document.querySelector('.storyflexer').style.display = 'flex';
                document.querySelector('.storyflexelement').appendChild(ImageContainer);
                ImageContainer.appendChild(image);
                ImageContainer.length = emptyArr.length;
                image.length = emptyArr.length;
                ImageContainer.classList.add('multipleimages');
                image.src = reader.result;
                emptyArr.push({
                    Property_Src: image.src,
                    Child_Id: new Date().getTime()
                });

                document.querySelector('.photostoryuploader').style.display = 'none';
                document.querySelector('.videostoryuploader').style.display = 'none';
                document.querySelector('.multiplestoryuploader').style.display = 'block';

                document.querySelector('#storyphotopreview').src = reader.result;
                ImageContainer.addEventListener('click', () => {
                    document.querySelector('#storyphotopreview').src = image.src;
                });
            }
        }
    } else {
        create_Message("should be atleast 2");
    }
}

//VIDEO FUNCTION
function reloadfile() {
    let videouploadinput = document.getElementById('videoinput1');
    let vreader = new FileReader();
    vreader.readAsDataURL(videouploadinput.files[0]);
    vreader.onload = function () {
        let videovideo = document.getElementById('videovideo');
        videovideo.src = vreader.result;
        videovideo.classList.add('newvideos');
    }
}


function reelfile() {
    let shortvideoinput = document.getElementById('shortinput');
    let sreader = new FileReader();
    sreader.readAsDataURL(shortvideoinput.files[0]);
    sreader.onload = function () {
        let newSvideos = document.getElementById('shortvideovideo');
        newSvideos.src = sreader.result;
    }
}