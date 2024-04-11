function removeItemsActiveClasses() {
    document.querySelectorAll('.items').forEach(item => {
        item.classList.remove('active');
    })
}

const floatItems = document.querySelectorAll('.items');
floatItems.forEach(item => {
    item.addEventListener('click', () => {
        removeItemsActiveClasses();
        item.classList.add('active');
        if (item.id != 'home') {
        } else {
            loadscreen();
            createrefresh_Loader();
            sessionStorage.setItem('activepage', 'home');
            document.title = 'home';
        } if (item.id != 'people') {
            document.querySelector('.people').style.display = 'none';
        } else {
            loadPage();
            sessionStorage.setItem('activepage', 'lavinstapeople');
            document.querySelector('.people').style.display = 'flex';
            document.title = 'people';
            secondcreatePeople();
        } if (item.id != 'chat') {
            document.querySelector('.chattab').style.display = 'none';
        } else {
            loadPage();
            sessionStorage.setItem('activepage', 'general_smart_Chat');
            document.querySelector('.chattab').style.display = 'flex';
            document.title = 'messages';
            secondchatcontainers();
        } if (item.id != 'notification') {
            document.querySelector('.notificationtab').style.display = 'none';
        } else {
            loadPage();
            sessionStorage.setItem('activepage', 'notificationtab');
            document.querySelector('.notificationtab').style.display = 'flex';
            document.title = 'notifications';
        } if (item.id != 'video') {
            document.querySelector('.videopagebackground').style.display = 'none';
        } else {
            loadPage();
            sessionStorage.setItem('activepage', 'videopagebackground');
            document.querySelector('.videopagebackground').style.display = 'flex';
            document.title = 'lavinsta videos';
        } if (item.id != 'profile') {
            document.querySelector('.profile').style.display = 'none';
        } else {
            loadPage();
            sessionStorage.setItem('activepage', 'profile');
            document.querySelector('.profile').style.display = 'flex';
            document.title = 'profile';
        } if (item.id != 'lav_Insta_images') {
            document.querySelector('.photogallery').style.display = 'none';
        } else {
            loadPage();
            document.querySelector('.photogallery').style.display = 'flex';
            sessionStorage.setItem('activepage', 'lavinstaphotos');
        } if (item.id != 'lav_Insta_public') {
            document.querySelector('.publicfeedpage').style.display = 'none';
        } else {
            loadPage();
            document.querySelector('.publicfeedpage').style.display = 'flex';
            sessionStorage.setItem('activepage', 'lavinstafeeds');
        } if (item.id != 'lav_Insta_search') {
            document.querySelector('.main_Seach_Path').style.display = 'none';
        } else {
            loadPage();
            document.querySelector('.main_Seach_Path').style.display = 'flex';
            sessionStorage.setItem('activepage', 'homesearch');
            document.querySelector('.navigatiofloatcontainer').style.display = 'none';
        } if (item.id != 'lav_Insta_menu') {
            document.querySelector('.hamburgermenupopup').classList.add('hamburgermenupopup');
            document.querySelector('.hamburgermenupopup').classList.remove('hamburgermenupopupactive');
        } else {
            loadPage();
            document.querySelector('.hamburgermenupopup').classList.toggle('hamburgermenupopupactive');
        } if (item.id != 'lav_Insta_short') {
            document.querySelector('.reelsmainpage').style.display = 'none';
        } else {
            loadPage();
            document.querySelector('.reelsmainpage').style.display = 'flex';
            sessionStorage.setItem('activepage', 'reelsmainpage');
        }
    });
});
document.querySelector('.hamburgermenuexit').addEventListener('click', () => {
    document.querySelector('.hamburgermenupopup').classList.toggle('hamburgermenupopupactive');
    sessionStorage.setItem('activepage', 'home');
});
const lavinstaimages = document.querySelector('#lavinstaimages');
lavinstaimages.addEventListener('click', () => {
    loadPage();
    sessionStorage.setItem('activepage', 'lavinstaphotos');
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.videopagebackground').style.display = 'none';
    document.querySelector('.notificationtab').style.display = 'none';
    document.querySelector('.chattab').style.display = 'none';
    document.querySelector('.people').style.display = 'none';
    document.querySelector('.photogallery').style.display = 'flex';

});

const sidebarcontentclosebtn = document.querySelector('.sidebarcontentclosebtn');
sidebarcontentclosebtn.addEventListener('click', () => {
    let sidebarcontents = document.querySelector('.sidebarcontents');
    sidebarcontents.style.display = 'none';
});
const logoutpopupclose = document.querySelector('.logoutpopupclose');
logoutpopupclose.addEventListener('click', () => {
    document.querySelector('.logoutpopup').style.display = 'none';
});
const uploadprofilepicturebackward = document.querySelector('.uploadprofilepicturebackward');
uploadprofilepicturebackward.addEventListener('click', () => {
    let uploadprofilepicturepopup = document.querySelector('.uploadprofilepicturepopup');
    uploadprofilepicturepopup.style.display = 'none';
});
const reelspageclosebtn = document.querySelector('#reelspageclosebtn');
reelspageclosebtn.addEventListener('click', () => {
    document.querySelector('.reelsmainpage').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
const sidebarItems = document.querySelectorAll('.sidebarlinks');
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        homesidebar.classList.toggle('sidebaractive');
        if (item.id != 'newPost') {
            document.querySelector('.sidebarcontents').style.display = 'none';
        } else {
            document.querySelector('.sidebarcontents').style.display = 'flex';
        } if (item.id != 'GoLive') {
            document.querySelector('.live_Page').style.display = 'none';
        } else {
            sessionStorage.setItem('activepage', 'live_Page');
            document.querySelector('.live_Page').style.display = 'flex';
        } if (item.id != 'reels') {
            document.querySelector('.reelsmainpage').style.display = 'none';
        } else {
            document.querySelector('.reelsmainpage').style.display = 'grid';
            sessionStorage.setItem('activepage', 'reelsmainpage');
        } if (item.id != 'videocalls') {
            document.querySelector('.callslist').style.display = 'none';
        } else {
            document.querySelector('.callslist').style.display = 'flex';
        } if (item.id != 'accountswitch') {
            document.querySelector('.logoutpopup').style.display = 'none';
        } else {
            document.querySelector('.logoutpopup').style.display = 'flex';
        } if (item.id =='devmode') {
            createDevTool();
        }
    })
});
document.querySelector('.livecapture').addEventListener('click', () => {
    sessionStorage.setItem('activepage', 'live_Page');
    document.querySelector('.live_Page').style.display = 'flex';
});
document.querySelector('.livepage_Close_Button').addEventListener('click', () => {
    document.querySelector('.live_Page').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
document.querySelector('.calllistexit').addEventListener('click', () => {
    document.querySelector('.callslist').style.display = 'none';
});
const viewbtn = document.querySelector('.viewbtn');
viewbtn.addEventListener('click', () => {
    document.querySelector('.live_Page').classList.toggle('livebackgroundminimize');
    document.querySelector('.livebackground').classList.toggle('livebackground_Fit');
    document.querySelector('.leftliveside').classList.toggle('leftliveside_Fit');
    document.querySelectorAll('.livesidebars').forEach(link => {
        link.classList.toggle('livesidebars_Fit');
    });
});
const gallerybtns1 = document.querySelectorAll('.headerbtns.gallerybtns1');
gallerybtns1.forEach(button => {
    button.addEventListener('click', () => {
        loadPage();
        if (button.id != 'lavinsta_feeds_Icon') {
            document.querySelector('.publicfeedpage').style.display = 'none';
        } else {
            document.querySelector('.publicfeedpage').style.display = 'grid';
            sessionStorage.setItem('activepage', 'lavinstafeeds');
            document.querySelector('.videopagebackground').style.display = 'none';
        } if (button.id != 'lavinstaimages_gallery') {
            document.querySelector('.photogallery').style.display = 'none';
        } else {
            sessionStorage.setItem('activepage', 'lavinstaphotos');
            document.querySelector('.photogallery').style.display = 'flex';
            document.querySelector('.videopagebackground').style.display = 'none';
        } if (button.id != 'createlavinstavideo') {
            document.querySelector('.videouploadpopup').style.display = 'none';
        } else {
            document.querySelector('.videouploadpopup').style.display = 'flex';
        } if (button.id != 'reelspageopen') {
            document.querySelector('.reelsmainpage').style.display = 'none';
        } else {
            document.querySelector('.reelsmainpage').style.display = 'grid';
            sessionStorage.setItem('activepage', 'reelsmainpage');
            document.querySelector('.videopagebackground').style.display = 'none';
        } if (button.id != 'gallery') {
            document.querySelector('.gallery').style.display = 'none';
        } else {
            sessionStorage.setItem('activepage', 'gallery');
            document.querySelector('.gallery').style.display = 'flex';
        } if (button.id != 'videosearchbtn') {
            document.querySelector('.video_Seach_Path').style.display = 'none';
        } else {
            document.querySelector('.video_Seach_Path').style.display = 'flex';
        }
    })
})
const wsidebarlink = document.querySelectorAll('.wsidebarlinks');
wsidebarlink.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'videogallery') {
            document.querySelector('.gallery').style.display = 'none';
        } else {
            sessionStorage.setItem('activepage', 'gallery');
            document.querySelector('.gallery').style.display = 'flex';
            document.querySelector('.wsidebar').classList.toggle('wsidebaractive');
            nextbtn.classList.toggle('nextbtnactive');
        } if (item.id != 'golive') {
            document.querySelector('.live_Page').style.display = 'none';
        } else {
            sessionStorage.setItem('activepage', 'live_Page');
            document.querySelector('.live_Page').style.display = 'flex';
            document.querySelector('.wsidebar').classList.toggle('wsidebaractive');
            nextbtn.classList.toggle('nextbtnactive');
        }
    })
});

const gallerybtns = document.querySelectorAll('.gallerybtns');
gallerybtns.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'trendingvideos') {
            document.querySelector('.trending_Videos').style.display = 'none';
            document.querySelector('#trendingvideos').classList.remove('active');
        } else {
            sessionStorage.setItem('activepage', 'trending_Videos');
            document.querySelector('.trending_Videos').style.display = 'flex';
            document.querySelector('#trendingvideos').classList.add('active');
        } if (item.id != 'trendingshorts') {
            document.querySelector('.class_shortReel').style.display = 'none';
            document.querySelector('#trendingshorts').classList.remove('active');
        } else {
            sessionStorage.setItem('activepage', 'class_shortReel');
            document.querySelector('.class_shortReel').style.display = 'flex';
            document.querySelector('#trendingshorts').classList.add('active');
        } if (item.id != 'livestreaming') {
            document.querySelector('.live_Videos').style.display = 'none';
            document.querySelector('#livestreaming').classList.remove('active');
        } else {
            sessionStorage.setItem('activepage', 'live_Videos');
            document.querySelector('.live_Videos').style.display = 'flex';
            document.querySelector('#livestreaming').classList.add('active');
        } if (item.id != 'timelinevideos') {
            document.querySelector('.timeline_Videos').style.display = 'none';
            document.querySelector('#timelinevideos').classList.remove('active');
        } else {
            sessionStorage.setItem('activepage', 'timeline_Videos');
            document.querySelector('.timeline_Videos').style.display = 'flex';
            document.querySelector('#timelinevideos').classList.add('active');
        } if (item.id != 'savedvideos') {
            document.querySelector('.saved_Videos').style.display = 'none';
            document.querySelector('#savedvideos').classList.remove('active');
        } else {
            sessionStorage.setItem('activepage', 'saved_Videos');
            document.querySelector('.saved_Videos').style.display = 'flex';
            document.querySelector('#savedvideos').classList.add('active');
        }
    })
});

const sidebtn = document.getElementById('sidebtn');
const homesidebar = document.querySelector('.homesidebar');
sidebtn.addEventListener('click', () => {
    homesidebar.classList.toggle('sidebaractive');
});


const maSter = document.querySelector('.master');
const Float = document.querySelector('#float');
const main_Master_Center = document.querySelector('.main_Master_Center');
maSter.addEventListener('click', (event) => {
    Float.classList.toggle('floatactive');
    main_Master_Center.classList.toggle('main_Master_Centeractive');
});
document.querySelector('.headerbtns.toggleBtn.advance').addEventListener('click', () => {
    Float.classList.toggle('floatactive');
    main_Master_Center.classList.toggle('main_Master_Centeractive');
});
const nextbtn = document.querySelector('#nextbtn');

const hamburgermenuitem = document.querySelectorAll('.menutabs');
hamburgermenuitem.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'accountsinformation') {
            document.querySelector('.accountinfopage').style.display = 'none';
        } else {
            document.querySelector('.accountinfopage').style.display = 'flex';
            document.title = 'personal information';
        } if (item.id != 'saved') {
            document.querySelector('.savedpage').style.display = 'none';
        } else {
            document.querySelector('.savedpage').style.display = 'flex';
            document.title = 'saved';
        } if (item.id != 'memoriespages') {
            document.querySelector('.storiesarchivetabs').style.display = 'none';
        } else {
            document.querySelector('.storiesarchivetabs').style.display = 'flex';
            document.title = 'stories archieve';
        } if (item.id != 'openlogoutpage') {
            document.querySelector('.confirmation_popup').style.display = 'none';
        } else {
            document.querySelector('.confirmation_popup').style.display = 'flex';
            document.title = 'logout';
        } if (item.id != 'videoqualties') {
            document.querySelector('.videoqualitytab').style.display = 'none';
        } else {
            document.querySelector('.videoqualitytab').style.display = 'flex';
        } if (item.id != 'mainsecuritytabs') {
            document.querySelector('.securitytab').style.display = 'none';
        } else {
            document.querySelector('.securitytab').style.display = 'flex';
        } if (item.id != 'datasaving') {
            document.querySelector('.datasavingtab').style.display = 'none';
        } else {
            document.querySelector('.datasavingtab').style.display = 'flex';
        } if (item.id != 'recyclebin') {
            document.querySelector('.recycletabs').style.display = 'none';
        } else {
            document.querySelector('.recycletabs').style.display = 'flex';
        } if (item.id != 'themeswitching') {
            document.querySelector('.themecustomizationpopup').style.display = 'none';
        } else {
            document.querySelector('.themecustomizationpopup').style.display = 'flex';
        }
    })
});


const closestoryuploadpopup = document.querySelector('.closestoryuploadpopup');
closestoryuploadpopup.addEventListener('click', () => {
    document.querySelector('.actualstorypopup').style.display = 'none';
});
const storiesuploader = document.querySelectorAll('.storiesuploader');
storiesuploader.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'storyphotolabel') {
            document.querySelector('.storyuploadcontainer').style.display = 'none';
        } else {
            document.querySelector('.storyuploadcontainer').style.display = 'flex';
            let photostoryuploader = document.querySelector('.photostoryuploader');
            let videostoryuploader = document.querySelector('.videostoryuploader');
            videostoryuploader.style.display = 'none';
            photostoryuploader.style.display = 'block';
            document.querySelector('.multiplestoryuploader').style.display = 'none';
        }
        if (item.id != 'storyvideolabel') {
            document.querySelector('.storyuploadcontainervideo').style.display = 'none';
        } else {
            document.querySelector('.storyuploadcontainervideo').style.display = 'flex';
            let photostoryuploader = document.querySelector('.photostoryuploader');
            let videostoryuploader = document.querySelector('.videostoryuploader');
            videostoryuploader.style.display = 'block';
            photostoryuploader.style.display = 'none';
            document.querySelector('.multiplestoryuploader').style.display = 'none';
        }
    })
});

const coverlabeler = document.querySelector('.newpcoverpicturelabel');
const profilelabeler = document.querySelector('.newprofilepicturelabel');
coverlabeler.addEventListener('click', () => {
    document.querySelector('.coverpictureuploadbtn').style.display = 'block';
    document.querySelector('.profilepictureuploadbtn').style.display = 'none';
    document.querySelector('.profilefilterbtn').style.display = 'none';
    document.querySelector('.coverfilterbtn').style.display = 'block';
});
profilelabeler.addEventListener('click', () => {
    document.querySelector('.coverpictureuploadbtn').style.display = 'none';
    document.querySelector('.profilepictureuploadbtn').style.display = 'block';
    document.querySelector('.profilefilterbtn').style.display = 'block';
    document.querySelector('.coverfilterbtn').style.display = 'none';
});

const sectionactive = document.querySelectorAll('.sectionactive');
sectionactive.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'hightquality') {
            document.getElementById('hightquality').classList.remove('active');
        } else {
            document.getElementById('hightquality').classList.add('active');
        }
        if (item.id != 'mediumquality') {
            document.getElementById('mediumquality').classList.remove('active');
        } else {
            document.getElementById('mediumquality').classList.add('active');
        }
        if (item.id != 'lowquality') {
            document.getElementById('lowquality').classList.remove('active');
        } else {
            document.getElementById('lowquality').classList.add('active');
        }
    })
});

const datasavingactive = document.querySelectorAll('.datasavingactive');
datasavingactive.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'activateit') {
            document.querySelector('#activateit').classList.remove('active')
        } else {
            document.querySelector('#activateit').classList.add('active')
        }
        if (item.id != 'deactivateit') {
            document.querySelector('#deactivateit').classList.remove('active')
        } else {
            document.querySelector('#deactivateit').classList.add('active')
        }
    })
})

const themecustomizationexit = document.querySelector('.themecustomizationexit');
themecustomizationexit.addEventListener('click', () => {
    document.querySelector('.themecustomizationpopup').style.display = 'none';
});
const deletedtabs = document.querySelectorAll('.deletedtabs');
deletedtabs.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id != 'deletepst') {
            document.querySelector('.deletedpostsss').style.display = 'none';
        } else {
            document.querySelector('.deletedpostsss').style.display = 'flex';
        } if (item.id != 'deletestoss') {
            document.querySelector('.deletedstoriessss').style.display = 'none';
        } else {
            document.querySelector('.deletedstoriessss').style.display = 'flex';
        }
    })
});

const Arrpost = document.querySelector('.Arrpost');
Arrpost.addEventListener('click', () => {
    document.querySelector('.deletedpostsss').style.display = 'none';
});
const Arrstories = document.querySelector('.Arrstories');
Arrstories.addEventListener('click', () => {
    document.querySelector('.deletedstoriessss').style.display = 'none';
});
const recycletab = document.querySelector('.recycletab');
recycletab.addEventListener('click', () => {
    document.querySelector('.recyclebin').style.display = 'flex';
});
const recyclebinbackarrow = document.querySelector('.recyclebinbackarrow');
recyclebinbackarrow.addEventListener('click', () => {
    document.querySelector('.recyclebin').style.display = 'none';
})
const datasavingbackarrow = document.querySelector('.datasavingbackarrow');
datasavingbackarrow.addEventListener('click', () => {
    document.querySelector('.datasavingtab').style.display = 'none';
})
const securitybackarrow = document.querySelector('.securitybackarrow');
securitybackarrow.addEventListener('click', () => {
    document.querySelector('.securitytab').style.display = 'none';
})

const storiesarchivebackarrow = document.querySelector('.storiesarchivebackarrow');
storiesarchivebackarrow.addEventListener('click', () => {
    document.querySelector('.storiesarchivetabs').style.display = 'none';
});
//MOVING BACK FROM PAGES
const accinfobackarrow = document.querySelector('.accinfobackarrow');
accinfobackarrow.addEventListener('click', () => {
    document.querySelector('.accountinfopage').style.display = 'none';
})

const backarrow = document.querySelector('.backarrow');
backarrow.addEventListener('click', () => {
    document.querySelector('.videoqualitytab').style.display = 'none';
});
const recyclebackarrow = document.querySelector('.recyclebackarrow');
recyclebackarrow.addEventListener('click', () => {
    document.querySelector('.recycletabs').style.display = 'none';
});
function removeActiveMesg(element) {
    element.forEach(button => {
        button.classList.remove('active');
    });
}
document.querySelectorAll('.mesgBtn').forEach(item => {
    item.addEventListener('click', () => {
        removeActiveMesg(document.querySelectorAll('.mesgBtn'));
        item.classList.add('active');
        if (item.id == 'general_smart_Chat') {
            sessionStorage.setItem('activepage', 'general_smart_Chat');
        }
    });
});
const people_C_button = document.querySelectorAll('.people_C_button');
function removeClassActive() {
    people_C_button.forEach(btn => {
        btn.classList.remove('active');
    });
}
people_C_button.forEach(item => {
    item.addEventListener('click', () => {
        removeClassActive();
        item.classList.add('active');
    });
});
const postwritermaster = document.querySelector('.postwritermaster');
postwritermaster.addEventListener('click', () => {
    document.querySelector('.postwriterfloat').classList.toggle('postwriterfloatactive');
    document.querySelector('.livecontainer').classList.toggle('livecontaineractive');
});
const profilesettingsclose = document.querySelector('.profilesettingsclose');
profilesettingsclose.addEventListener('click', () => {
    document.querySelector('.profilebtnsettings').style.display = 'none';
});


const hamburgermenubtn = document.getElementById('hamburgermenubtn');
hamburgermenubtn.addEventListener('click', () => {
    sessionStorage.setItem('activepage', 'hamburgermenupopup');
    document.querySelector('.hamburgermenupopup').classList.toggle('hamburgermenupopupactive');
});

const editactivatenationality = document.querySelectorAll('.editactivatenationality');

editactivatenationality.forEach(edititem => {
    edititem.addEventListener('click', () => {
        if (edititem.id != 'bio') {
            document.querySelector('.submitbio').classList.remove('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.addeditbio').style.display = 'none';
        } else {
            document.querySelector('.submitbio').classList.toggle('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.addeditbio').style.display = 'flex';

        } if (edititem.id != 'location') {
            document.querySelector('.submitnationality').classList.remove('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.addeditnationality').style.display = 'none';
        } else {
            document.querySelector('.submitnationality').classList.toggle('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.addeditnationality').style.display = 'flex';
        } if (edititem.id != 'setgender') {
            document.querySelector('.submitgender').classList.remove('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.setgender').style.display = 'none';
        } else {
            document.querySelector('.submitgender').classList.toggle('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.setgender').style.display = 'flex';
        } if (edititem.id != 'setdateofboth') {
            document.querySelector('.submitdateofbirth').classList.remove('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.setdateofbirth').style.display = 'none';
        } else {
            document.querySelector('.submitdateofbirth').classList.toggle('edit_Tab_ProfileSettings_Edit_Active');
            document.querySelector('.setdateofbirth').style.display = 'flex';
        }
    })
});

const moreprofileinfomation = document.querySelectorAll('.moreprofileinfomation');
moreprofileinfomation.forEach(item => {
    item.addEventListener('click', () => {
        loadPage();
        if (item.id != 'myfriendslist') {
            document.querySelector('.Friendlisttabs').style.display = 'none';
        } else {
            document.querySelector('.Friendlisttabs').style.display = 'flex';
        }
        if (item.id != 'myfollowers') {
            document.querySelector('.followerslisttabs').style.display = 'none';
        } else {
            document.querySelector('.followerslisttabs').style.display = 'flex';
        }
        if (item.id != 'deepprofileinfo') {
            document.querySelector('.infopro').style.display = 'none';
        } else {
            document.querySelector('.infopro').style.display = 'flex';
        }
    })
});

function skeletononlargescreen() {
    const gridpostss = document.querySelectorAll('.gridpost');
    gridpostss.forEach(gridpost => {
        gridpost.classList.toggle('gridpostlarge');
    });
}
//MINIMIZING LARGEVIEW PROFIL

const savedbackarrow = document.querySelector('.savedbackarrow');
savedbackarrow.addEventListener('click', () => {
    document.querySelector('.savedpage').style.display = 'none';
});

const chatpopupclosebtn = document.querySelector('.chatpopupclosebtn');
chatpopupclosebtn.addEventListener('click', () => {
    document.querySelector('.chattab').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
const notificationpopupclosebtn = document.querySelector('.notificationpopupclosebtn');
notificationpopupclosebtn.addEventListener('click', () => {
    document.querySelector('.notificationtab').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
const photogalleryleftarrow = document.querySelector('#photogalleryleftarrow');
photogalleryleftarrow.addEventListener('click', () => {
    document.querySelector('.photogallery').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
document.querySelector('#create_Advert_purpose').addEventListener('click', () => {
    document.querySelector('.uploadphadscrpop').style.display = 'flex';
});
function opene_Search_Popup() {
    const searchmoveback = document.querySelector('.searchmoveback');
    searchmoveback.addEventListener('click', () => {
        let main_Seach_Path = document.querySelector('.main_Seach_Path');
        main_Seach_Path.style.display = 'none';
        document.querySelector('.navigatiofloatcontainer').style.display = 'flex';
        sessionStorage.setItem('activepage', 'home');
    });
    function OpenSearchPath() {
        sessionStorage.setItem('activepage', 'homesearch');
        let main_Seach_Path = document.querySelector('.main_Seach_Path');
        main_Seach_Path.style.display = 'flex';
        document.querySelector('.navigatiofloatcontainer').style.display = 'none';
    }
    document.querySelectorAll('.popup_search').forEach(button => {
        button.addEventListener('click', () => {
            OpenSearchPath();
        });
    });

    //video search popup
    const video_Search_Path_Exit = document.querySelector('.video_Search_Path_Exit');
    const video_Seach_Path = document.querySelector('.video_Seach_Path');
    const randomvideosearch = document.querySelector('#randomvideosearch');
    video_Search_Path_Exit.addEventListener('click', () => {
        video_Seach_Path.style.display = 'none';
    });
    randomvideosearch.addEventListener('click', () => {
        video_Seach_Path.style.display = 'flex';
    });
    //chats and people search
    document.querySelectorAll('.searchbtn_buttonsearch').forEach(button => {
        button.addEventListener('click',()=> {
            if (button.id == 'peoplesearchbutton') {
                document.querySelector('.people .navigationheader .headermiddle').classList.toggle('headermiddleactive');
            } else if (button.id == 'chatsearchbutton') {
                document.querySelector('.chattab .navigationheader .headermiddle').classList.toggle('headermiddleactive');
            }
        })
    })
}
opene_Search_Popup();

const phbtn = document.querySelectorAll('.phbtn');
phbtn.forEach(item => {
    item.addEventListener('click', () => {
        loadPage();
        if (item.id != "lavinstaphotos") {
            document.querySelector('#lavinstaphotos').classList.remove('active');
            document.querySelector('.photogalleryculomn').style.display = 'none';
        } else {
            document.querySelector('#lavinstaphotos').classList.add('active');
            document.querySelector('.photogalleryculomn').style.display = 'flex';
        } if (item.id != "myphotos") {
            document.querySelector('#myphotos').classList.remove('active');
            document.querySelector('.photogalleryculomn1').style.display = 'none';
        } else {
            document.querySelector('#myphotos').classList.add('active');
            document.querySelector('.photogalleryculomn1').style.display = 'flex';
        } if (item.id != "crime") {
            document.querySelector('#crime').classList.remove('active');
            document.querySelector('.photogalleryculomn2').style.display = 'none';
        } else {
            document.querySelector('#crime').classList.add('active');
            document.querySelector('.photogalleryculomn2').style.display = 'flex';
        }
    })
});

const videouploadpopupclose = document.querySelector('.videouploadpopupclose');
videouploadpopupclose.addEventListener('click', () => {
    videouploadpopup.style.display = 'none';
});

const addpurpose = document.querySelector('#addpurpose');
addpurpose.addEventListener('click', () => {
    let livepurposepopup = document.querySelector('.livepurposepopup');
    livepurposepopup.classList.toggle('livepurposepopupactive');
});
const livepurposeclosebtn = document.querySelector('.livepurposeclosebtn');
livepurposeclosebtn.addEventListener('click', () => {
    let livepurposepopup = document.querySelector('.livepurposepopup');
    livepurposepopup.classList.toggle('livepurposepopupactive');
});
const activetimer = document.querySelector('#activetimer');
activetimer.addEventListener('click', () => {
    let livetimer = document.querySelector('.livetimer');
    livetimer.classList.toggle('livetimeractive')
});
const hidesmallvideocheck = document.querySelector('#hidesmallvideocheck');
hidesmallvideocheck.addEventListener('click', () => {
    let tinyvideoview = document.querySelector('.tinyvideoview');
    tinyvideoview.classList.toggle('tinyvideoviewactive');
    gallery.style.display = 'none';
    tinyvideoview.style.display = 'flex';
    tinylivevideocheck.pause();

});
const livehide = document.querySelector('#livehide');
livehide.addEventListener('click', () => {
    let tinyvideoview = document.querySelector('.tinyvideoview');
    tinyvideoview.classList.toggle('tinyvideoviewactive');
    gallery.style.display = 'none';
    tinyvideoview.style.display = 'flex';
    tinylivevideocheck.pause();

});
boostlivevideo.addEventListener('click', () => {
    document.querySelector('.liveboostpopup').classList.toggle('liveboostpopupactive');
});
const liveboostclosebtn = document.querySelector('.liveboostclosebtn');
liveboostclosebtn.addEventListener('click', () => {
    document.querySelector('.liveboostpopup').classList.toggle('liveboostpopupactive');
});
//MULTI PURPOSE CLOSE BTN

const photopopupclosebtn = document.querySelector('.photopopupclosebtn');
photopopupclosebtn.addEventListener('click', () => {
    document.querySelector('.uploadphadscrpop').style.display = 'none';
});
const createmorepurpose = document.querySelector('#createmorepurpose');
createmorepurpose.addEventListener('click', () => {
    document.querySelector('.uploadphadscrpop').style.display = 'flex';
});

//public
const lavinstafeeds = document.querySelector('#lavinstafeeds');
lavinstafeeds.addEventListener('click', () => {
    loadPage();
    document.querySelector('.publicfeedpage').style.display = 'grid';
    sessionStorage.setItem('activepage', 'lavinstafeeds');
});
const activatepublicgadget = document.querySelector('#activatepublicgadget');
activatepublicgadget.addEventListener('click', () => {
    document.querySelector('.publicreelside').style.display = 'flex';
});
const publicexitbutton = document.querySelector('#publicexitbutton');
publicexitbutton.addEventListener('click', () => {
    document.querySelector('.publicfeedpage').style.display = 'none';
    sessionStorage.setItem('activepage', 'home');
});
document.querySelector('#lavinsta_PublicPage').addEventListener('click', () => {
    loadPage();
    document.querySelector('.publicfeedpage').style.display = 'grid';
    document.querySelector('.reelsmainpage').style.display = 'none';
    sessionStorage.setItem('activepage', 'lavinstafeeds');
});
document.querySelector('#lavinsta_Public_Page').addEventListener('click', () => {
    loadPage();
    document.querySelector('.publicfeedpage').style.display = 'grid';
    document.querySelector('.photogallery').style.display = 'none';
    sessionStorage.setItem('activepage', 'lavinstafeeds');
});
document.querySelector('#lavinstaReelsPage').addEventListener('click', () => {
    loadPage();
    document.querySelector('.reelsmainpage').style.display = 'grid';
    document.querySelector('.publicfeedpage').style.display = 'none';
    sessionStorage.setItem('activepage', 'reelsmainpage');
});
document.querySelector('#lavinsta_images_pages').addEventListener('click', () => {
    loadPage();
    sessionStorage.setItem('activepage', 'lavinstaphotos');
    document.querySelector('.photogallery').style.display = 'flex';
    document.querySelector('.publicfeedpage').style.display = 'none';
});


document.querySelector('#lavinsta_images').addEventListener('click', () => {
    loadPage();
    sessionStorage.setItem('activepage', 'lavinstaphotos');
    document.querySelector('.photogallery').style.display = 'flex';
    document.querySelector('.reelsmainpage').style.display = 'none';
});
document.querySelector('#view_Short_Page').addEventListener('click', () => {
    loadPage();
    document.querySelector('.reelsmainpage').style.display = 'grid';
    document.querySelector('.photogallery').style.display = 'none';
    sessionStorage.setItem('activepage', 'reelsmainpage');
});
const createpublicpurpose = document.querySelector('#createpublicpurpose');
createpublicpurpose.addEventListener('click', () => {
    document.querySelector('.createpublicpostpopup').style.display = 'flex';
});
const createreelpurpose = document.querySelector('#createreelpurpose');
createreelpurpose.addEventListener('click', () => {
    document.querySelector('.reelpagecreate').classList.toggle('createpublicpostpopupactive');
})
const publicpostuploadexit = document.querySelector('.publicpostuploadexit');
publicpostuploadexit.addEventListener('click', () => {
    document.querySelector('.createpublicpostpopup').style.display = 'none'
});

document.querySelector('#toggle_advert_sidebar').addEventListener('click', () => {
    document.querySelector('.photosidebar').classList.toggle('sidebaractive');
});
document.querySelector('.create_Community').addEventListener('click', () => {
    document.querySelector('.create_Commnunity_Popup').style.display = 'flex';
});
document.querySelector('.exit_Create_Community').addEventListener('click', () => {
    document.querySelector('.create_Commnunity_Popup').style.display = 'none';
});
function createrefresh_Loader() {
    setTimeout(() => {
        createStoriesPhotos();
        createPhotoPostOnTimeLine();
        createPublicFeed();
        createOtherPost();
        createGridPost();
        createPublicGridPost();
        createOtherGridPost();
        stoploading();
    }, 1000);
}
function loadPage() {
    let loadingsection = document.createElement('section');
    let loading_progress = document.createElement('span');
    document.body.appendChild(loadingsection);
    loadingsection.appendChild(loading_progress)
    loadingsection.classList.add('loadingsection');
    setTimeout(() => {
        loadingsection.remove();
    }, 1000);
    document.querySelectorAll('.profile_Cliant').forEach(profile => {
        profile.style.display = 'none';
    });
    document.querySelectorAll('.userchatroom').forEach(chatroom => {
        chatroom.style.display = 'none';
    });
}