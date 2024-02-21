let Feeds_Data_Base = [];

let postReport = [];

//saving videopos
const timelineviddoeskeleton = document.querySelectorAll('.timelineviddoeskeleton');
function requestDisplayNone() {
    let postskelton = document.querySelector('.postskelton');
    let gridpostskeleton = document.querySelectorAll('.gridpostskeleton');
    postskelton.style.display = 'none';   
    gridpostskeleton.forEach(skets =>{
        skets.style.display = 'none';
    });
}

function regularItemDisplay() {
    const postwriterfloatitems = document.querySelectorAll('.postwriterfloatitems');
    postwriterfloatitems.forEach(item =>{
        item.addEventListener('click',()=>{
            document.querySelector('.sidebarcontents').style.display = 'flex';
            if (item.id!='smallphotopost') {
                document.querySelector('.smallphoto1').style.display = 'none';
                Photopostbtn3.style.display = 'none';            
            } else {
                document.querySelector('.smallphoto1').style.display = 'flex';
                Photopostbtn3.style.display = 'block'; 
            } if (item.id!='smallvideopost') {
                document.querySelector('.smallvideo2').style.display = 'none';
                videopostbtn3.style.display = 'none';
            } else {
                document.querySelector('.smallvideo2').style.display = 'flex';
                videopostbtn3.style.display = 'block';
            } if (item.id!='smallshortvideopost') {
                document.querySelector('.shortvideo3').style.display = 'none';
                shortpostbtn3.style.display = 'none';
            } else {
                document.querySelector('.shortvideo3').style.display = 'flex';
                shortpostbtn3.style.display = 'block';
            } if (item.id!='smalltextposter') {
                document.querySelector('.textarea').style.display = 'none';
                postBtn.style.display = 'none';
            } else {
                document.querySelector('.textarea').style.display = 'flex';
                postBtn.style.display = 'block';
            }
        })
    });
}
regularItemDisplay();

function TimeLineTextPostThemes() {
    const textpostactionmenu = document.querySelectorAll('.textpostactionmenu');
    textpostactionmenu.forEach(button =>{
        button.addEventListener('click',()=>{
            if (button.id!='TextthemeMode') {
                document.querySelector('.sidebar_Create').style.display = 'none';
            } else {
                document.querySelector('.sidebar_Create').style.display = 'flex';
            } if (button.id !='TextThemeFont') {
                document.querySelector('.sidebar_Theme_Text_Font').style.display = 'none';
            } else {
                document.querySelector('.sidebar_Theme_Text_Font').style.display = 'flex';
            }
        });
    });
    const sidetextthemeitems = document.querySelectorAll('.sidetextthemeitems');
    let sidebar_Mode_Theme_Title = document.querySelector('.sidebar_Mode_Theme_Title');
    function removeactiveclassesHere() {
        sidetextthemeitems.forEach(item =>{
            item.classList.remove('active');
        });
    }
    const sidebarfontname = document.querySelectorAll('.--sidebarfontname');
    let sidebar_Mode_Font_Title = document.querySelector('.sidebar_Mode_Font_Title');
    function removeactiveclassesThere() {
        sidebarfontname.forEach(item =>{
            item.classList.remove('active');
        })
    }
    sidebarfontname.forEach(item =>{
        item.addEventListener('click',()=>{
            removeactiveclassesThere();
            sidebar_Mode_Font_Title.textContent = item.textContent;
            item.classList.add('active');
        });
    });
    sidebar_Mode_Theme_Title.addEventListener('click',()=>{
        document.querySelector('.sidebar_Create').style.display = 'none';
    });
    sidebar_Mode_Font_Title.addEventListener('click',()=>{
        document.querySelector('.sidebar_Theme_Text_Font').style.display = 'none';
    });
    
    sidetextthemeitems.forEach(item =>{
        item.addEventListener('click',()=>{
            sidebar_Mode_Theme_Title.textContent = item.textContent;
            removeactiveclassesHere();
            item.classList.add('active');
        })
    });
}
TimeLineTextPostThemes();
function PublicTextPostThemes() {
    const textpostpublic = document.querySelectorAll('.textpostpublic');
    textpostpublic.forEach(button =>{
        button.addEventListener('click',()=>{
            if (button.id!='TextthemeMode') {
                document.querySelector('.public_Create').style.display = 'none';
            } else {
                document.querySelector('.public_Create').style.display = 'flex';
            } if (button.id !='TextThemeFont') {
                document.querySelector('.Theme_Text_Font').style.display = 'none';
            } else {
                document.querySelector('.Theme_Text_Font').style.display = 'flex';
            }
        });
    });
    const publictextthemeitems = document.querySelectorAll('.publictextthemeitems');
    let public_Mode_Theme_Title = document.querySelector('.public_Mode_Theme_Title');
    function removeactiveclassesHere() {
        publictextthemeitems.forEach(item =>{
            item.classList.remove('active');
        });
    }
    const publicfontname = document.querySelectorAll('.--publicfontname');
    let public_Mode_Font_Title = document.querySelector('.public_Mode_Font_Title');
    function removeactiveclassesThere() {
        publicfontname.forEach(item =>{
            item.classList.remove('active');
        })
    }
    publicfontname.forEach(item =>{
        item.addEventListener('click',()=>{
            removeactiveclassesThere();
            public_Mode_Font_Title.textContent = item.textContent;
            item.classList.add('active');
        });
    });
    public_Mode_Theme_Title.addEventListener('click',()=>{
        document.querySelector('.public_Create').style.display = 'none';
    });
    public_Mode_Font_Title.addEventListener('click',()=>{
        document.querySelector('.Theme_Text_Font').style.display = 'none';
    });
    
    publictextthemeitems.forEach(item =>{
        item.addEventListener('click',()=>{
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
    reader.onload = function() {
        document.querySelector('#reelpagevideo').src = reader.result;
    }
}

function CommunityProfileImage() {
    const reader = new FileReader();
    reader.readAsDataURL(document.querySelector('#com_profile').files[0]);
    reader.onload = function() {
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