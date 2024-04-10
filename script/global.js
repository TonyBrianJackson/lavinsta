let LogInFormData = [];
let ActiveUser_Account = [];
let myLogsArray = [];
const mySavedLogs = JSON.parse(localStorage.getItem('myLogsArray'));

let myFriends = [];
let myChatMsg = [];
let myCommunities = [];
let Feeds_Data_Base = [];

let postReport = [];
let myLocation_Url;
let Admins_Notification = [];

const chatMessage = JSON.parse(localStorage.getItem('myChatMsg'));
const communities = JSON.parse(localStorage.getItem('myCommunities'));

// DATE FUNCTION
const day = new Date();
const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

//SVG ELEMENT GENIUS CREATION
const undo =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M14.5,6H11.169V.211L1.1,8.953l-.078.072a3.507,3.507,0,0,0,0,4.95l10.147,8.814V17H14.5A6.507,6.507,0,0,1,21,23.476h0V24h3V15.5A9.511,9.511,0,0,0,14.5,6Zm0,8H8.169v2.211L3.12,11.828a.5.5,0,0,1,0-.656L8.169,6.789V9H14.5A6.508,6.508,0,0,1,21,15.5v1.078A9.466,9.466,0,0,0,14.5,14Z"/></svg>`
const undo2 =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,24H22a7.008,7.008,0,0,0-7-7H10.17v6.414L.877,14.121a3,3,0,0,1,0-4.242L10.17.586V7H15a9.01,9.01,0,0,1,9,9ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V15H15a8.989,8.989,0,0,1,7,3.349V16a7.008,7.008,0,0,0-7-7H8.17Z"/></g></svg>`
const spinnersvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,24A12,12,0,1,1,22.714,6.59a1,1,0,1,1-1.785.9,10,10,0,1,0-.011,9.038,1,1,0,0,1,1.781.908A11.955,11.955,0,0,1,12,24Z"/></svg>`;
const imagesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,7.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm12-2v11.5H5V5.5c0-1.93,1.57-3.5,3.5-3.5h12c1.93,0,3.5,1.57,3.5,3.5ZM8,14l5-5,3.3,3.3,4.7-4.78v-2.02c0-.28-.22-.5-.5-.5H8.5c-.28,0-.5,.22-.5,.5V14ZM3,5.05c-1.69,.25-3,1.69-3,3.45v13.5H19v-3H3V5.05Z"/></svg>`;
const videosvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 24h-24v-20.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-21-3h18v-17.5a.507.507 0 0 0 -.5-.5h-17a.5.5 0 0 0 -.5.5zm5-14v10l9-5z"/></svg>`;
const textsvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m20.5 0h-17a3.5 3.5 0 0 0 -3.5 3.5v20.5h24v-20.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 21h-18v-17.5a.5.5 0 0 1 .5-.5h17a.507.507 0 0 1 .5.5zm-16-16h14v5h-3v-2h-2.5v8h1.5v3h-6v-3h1.5v-8h-2.5v2h-3z"/></svg>`;
const sendsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 465.882 465.882" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M465.882 0 0 262.059l148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>`;
const commentsendsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M1.444,6.669a2,2,0,0,0-.865,3.337l3.412,3.408V20h6.593l3.435,3.43a1.987,1.987,0,0,0,1.408.588,2.034,2.034,0,0,0,.51-.066,1.978,1.978,0,0,0,1.42-1.379L23.991.021ZM2,8.592l17.028-5.02L5.993,16.586v-4Zm13.44,13.424L11.413,18h-4L20.446,4.978Z"/></g></svg>`;
const likesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M15.021,7l.336-2.041a3.044,3.044,0,0,0-4.208-3.287A3.139,3.139,0,0,0,9.582,3.225L7.717,7H3a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H22.018L24,10.963,24.016,7ZM2,19V10A1,1,0,0,1,3,9H7V20H3A1,1,0,0,1,2,19Zm20-8.3L20.33,20H9V8.909l2.419-4.9A1.07,1.07,0,0,1,13.141,3.8a1.024,1.024,0,0,1,.233.84L12.655,9H22Z"/></g></svg>`;
const focussvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
<path d="m3,22h5v2H3c-1.654,0-3-1.346-3-3v-5h2v5c0,.552.448,1,1,1Zm19-1c0,.552-.448,1-1,1h-5v2h5c1.654,0,3-1.346,3-3v-5h-2v5ZM21,0h-5v2h5c.552,0,1,.448,1,1v5h2V3c0-1.654-1.346-3-3-3ZM2,3c0-.552.448-1,1-1h5V0H3C1.346,0,0,1.346,0,3v5h2V3Zm10,11c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm-3.5-7h.464l1.33-2h3.412l1.33,2h.464c1.379,0,2.5,1.121,2.5,2.5v7.5H6v-7.5c0-1.379,1.121-2.5,2.5-2.5Zm7,2h-7c-.275,0-.5.225-.5.5v5.5h8v-5.5c0-.275-.225-.5-.5-.5Z"/>
</svg>`;
const savedsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><linearGradient id="a" x1="3" x2="21" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#01beff"></stop><stop offset=".202" stop-color="#0db0ff"></stop><stop offset=".584" stop-color="#2b8aff"></stop><stop offset="1" stop-color="#525bff"></stop></linearGradient><path fill="url(#a)" d="M20 22H6.5C4.6 22 3 20.4 3 18.5V5c0-1.7 1.3-3 3-3h14c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1zm-1-2v-3H6.5c-.8 0-1.5.7-1.5 1.5S5.7 20 6.5 20zM10 4v8l3.5-2 3.5 2V4z" data-original="url(#a)" class=""></path></g></svg>`;
const commentsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12v-12C24,5.383,18.617,0,12,0Zm10,22h-10c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10v10Zm-8.5-10c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm5,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-10,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>`;
const sharesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M15,17.99h2v6H0V9.99C0,8.33,1.35,6.99,3,6.99H7.03c-.44,.58-.77,1.26-.92,2H3c-.55,0-1,.45-1,1v12H15v-4ZM23.41,6.57L16.86,.01l-1.41,1.41,5.56,5.56H11c-1.65,0-3,1.35-3,3v8h2V9.99c0-.55,.45-1,1-1h10l-5.61,5.61,1.41,1.41,6.61-6.61c.78-.78,.78-2.05,0-2.83Z"/></svg>`;
const moresvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3ZM3,3H8V8H3Z"/><path d="M21,0H13V11H24V3A3,3,0,0,0,21,0Zm0,8H16V3h5Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Zm3-5H8v5H3Z"/><path d="M13,24h8a3,3,0,0,0,3-3V13H13Zm3-8h5v5H16Z"/></svg>`;
const homesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22,5.644V2.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5v1.089L15.076,.941c-1.869-1.262-4.283-1.262-6.152,0L2.424,5.327C.906,6.351,0,8.055,0,9.886v8.614c0,3.033,2.468,5.5,5.5,5.5h3c.828,0,1.5-.671,1.5-1.5V14.5c0-.276,.225-.5,.5-.5h3c.275,0,.5,.224,.5,.5v8c0,.829,.672,1.5,1.5,1.5h3c3.032,0,5.5-2.467,5.5-5.5V9.886c0-1.654-.739-3.204-2-4.242Zm-1,12.856c0,1.378-1.121,2.5-2.5,2.5h-1.5v-6.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v6.5h-1.5c-1.379,0-2.5-1.122-2.5-2.5V9.886c0-.833,.412-1.607,1.102-2.073L10.602,3.427c.85-.573,1.947-.573,2.797,0l6.5,4.387c.689,.465,1.102,1.24,1.102,2.072v8.614Z"/></svg>`;
const smartchatsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M24,24H12.017A12,12,0,1,1,24,11.246l0,.094ZM12.017,3a9,9,0,1,0,0,18H21V11.389A9.015,9.015,0,0,0,12.017,3Z"/><rect x="8" y="8" width="6" height="3"/><rect x="8" y="14" width="10" height="3"/></svg>`;
const peoplesvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm7.5 13.5a5.506 5.506 0 0 0 -5.5-5.5h-4a5.506 5.506 0 0 0 -5.5 5.5v3.5h3v-3.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v3.5h3zm2.5-11.5a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm6.5 13.5a5.506 5.506 0 0 0 -5.5-5.5h-3.5v3h3.5a2.5 2.5 0 0 1 2.5 2.5v3.5h3z"/></svg>`;
const feedsvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 13h-14v-3h14zm-4 2h-10v3h10zm9-10.5v18.5h-24v-18.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-16 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-3.5 1.5a1.5 1.5 0 1 0 -1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zm16.5 2h-18v12h18z"/></svg>`;
const stopwatchsvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m13.5 11.69a2 2 0 1 1 -3 0v-4.69h3zm6.9-5.779a11 11 0 1 1 -16.8 0l-.66-.732-.756.757-2.12-2.122 3.75-3.75 2.122 2.122-.869.868.762.846a10.927 10.927 0 0 1 4.671-1.785v-2.115h3v2.115a10.927 10.927 0 0 1 4.671 1.785l.762-.846-.869-.868 2.122-2.122 3.75 3.75-2.122 2.122-.756-.757zm-.4 7.089a8 8 0 1 0 -8 8 8.009 8.009 0 0 0 8-8z"/></svg>`;
const send2svg = sendsvg;
const videocallsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"
style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
<g>
    <path
        d="M256 0C114.517 0 0 114.497 0 256c0 67.264 26.62 131.824 73.546 179.547L20.632 486.16C10.88 495.489 17.504 512 31 512h225.668c.19 0 .379-.004.568-.011C397.66 511.328 512 397.522 512 256 512 114.517 397.503 0 256 0zm.625 481.991c-.157.001-.314.004-.472.009H68.382l37.238-35.619c6.309-6.034 6.152-16.181-.359-22.012C57.432 381.518 30 320.149 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 124.274-101.103 225.654-225.375 225.991z"
        fill="#000000" data-original="#000000" class=""></path>
    <path
        d="M395.394 155.394 331 219.787V166c0-8.284-6.716-15-15-15H106c-8.284 0-15 6.716-15 15v180c0 8.284 6.716 15 15 15h210c8.284 0 15-6.716 15-15v-53.787l64.394 64.394C404.766 365.982 421 359.38 421 346V166c0-13.37-16.201-20.014-25.606-10.606zM121 331V181h180v150zm270-21.213L337.213 256 391 202.213z"
        fill="#000000" data-original="#000000" class=""></path>
    <circle cx="257" cy="226" r="15" fill="#000000" data-original="#000000" class=""></circle>
</g>
</svg>`;
const createsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
<path d="m23.121,6.151L17.849.879c-.567-.567-1.32-.879-2.121-.879h-7.456c-.801,0-1.554.312-2.121.879L.879,6.151c-.567.567-.879,1.32-.879,2.121v7.456c0,.801.312,1.554.879,2.121l5.272,5.272c.567.567,1.32.879,2.121.879h7.456c.801,0,1.554-.312,2.121-.879l5.272-5.272c.567-.567.879-1.32.879-2.121v-7.456c0-.801-.312-1.554-.879-2.121Zm-1.121,9.577c0,.263-.107.521-.293.707l-5.272,5.272c-.187.186-.444.293-.707.293h-7.456c-.263,0-.521-.107-.707-.293l-5.272-5.272c-.186-.187-.293-.444-.293-.707v-7.456c0-.263.107-.521.293-.707L7.565,2.293c.187-.186.444-.293.707-.293h7.456c.263,0,.521.107.707.293l5.272,5.272c.186.187.293.444.293.707v7.456Zm-9-4.728h4v2h-4v4h-2v-4h-4v-2h4v-4h2v4Z"/>
</svg>`;
const createsolidsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
<path d="m22.975,6.004l-4.979-4.979c-.661-.661-1.54-1.025-2.475-1.025h-7.042c-.935,0-1.813.364-2.475,1.025L1.025,6.004c-.661.661-1.025,1.54-1.025,2.475v7.042c0,.935.364,1.813,1.025,2.475l4.979,4.979c.661.661,1.54,1.025,2.475,1.025h7.042c.935,0,1.813-.364,2.475-1.025l4.979-4.979c.661-.661,1.025-1.54,1.025-2.475v-7.042c0-.935-.364-1.813-1.025-2.475Zm-1.975,9.517c0,.131-.053.26-.146.354l-4.979,4.979c-.093.093-.222.146-.354.146h-7.042c-.131,0-.26-.053-.354-.146l-4.979-4.979c-.093-.093-.146-.222-.146-.354v-7.042c0-.131.053-.26.146-.354l4.979-4.979c.093-.093.222-.146.354-.146h7.042c.131,0,.26.053.354.146l4.979,4.979c.093.093.146.222.146.354v7.042Zm-7.5-5.021h3.5v3h-3.5v3.5h-3v-3.5h-3.5v-3h3.5v-3.5h3v3.5Z"/>
</svg>`;
const camerasvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M21,4H18.729L15.644,0H8.356L5.271,4H3A3,3,0,0,0,0,7V24H24V7A3,3,0,0,0,21,4Zm0,17H3V7H21Z"/><path d="M12,19.5A5.5,5.5,0,1,0,6.5,14,5.506,5.506,0,0,0,12,19.5Zm0-8A2.5,2.5,0,1,1,9.5,14,2.5,2.5,0,0,1,12,11.5Z"/></svg>`;
const advertsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 55 55" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M14.066 51.542c-.79-.28-1.64-.69-2.5-1.22-.02-.02-.05-.03-.08-.05-1.22-.71-2.53-1.73-3.78-2.97-1.25-1.25-2.26-2.56-2.97-3.78-.08-.14-.17-.27-.23-.4-.45-.75-.8-1.49-1.05-2.19-.91 1.39.48 4.57 3.27 7.35 2.77 2.78 5.96 4.17 7.34 3.26zM26.576 8.642c-.21 0-.35.02-.44.04-.02.06-.04.13-.04.21-.097.82.319 2.134.61 2.91 3.02 1.42 6.38 3.82 9.53 6.97 3.14 3.14 5.53 6.49 6.95 9.51.802.305 2.318.754 3.15.57.38-1.31-1.14-6.59-7.37-12.82-5.07-5.07-9.98-7.39-12.39-7.39z" fill="#000000" data-original="#000000"></path><path d="M22.23 4.764c-1.694 1.693-1.979 4.416-1.067 7.62C18.157 23.728 9.668 34.176 7.148 37.1a2.836 2.836 0 0 0-.743-.023c-.008.009-.017 0-.025.009a1.96 1.96 0 0 0-1.29 2.166l-.008.009c.016.066.024.14.041.207.339 1.745 1.82 4.151 4.044 6.376 2.217 2.217 4.623 3.697 6.369 4.036.066.017.14.025.206.042l.009-.009a1.96 1.96 0 0 0 2.167-1.29c.008-.008 0-.017.008-.025.03-.22.015-.47-.022-.742.364-.313.842-.717 1.427-1.195l2.375 2.375a2.88 2.88 0 0 0 3.548.422l7.84-4.847c.19-.124.365-.264.522-.422a2.836 2.836 0 0 0 .819-1.695 2.826 2.826 0 0 0-.82-2.357l-1.849-1.85c3.358-1.81 7.064-3.433 10.873-4.44 3.195.904 5.91.617 7.6-1.073 3.774-3.774.6-12.64-7.385-20.625C34.87 4.164 26.004.99 22.23 4.764zm9.732 37.026c.157.157.165.33.148.43 0 .1-.05.281-.248.397l-7.84 4.847a.54.54 0 0 1-.662-.083L21.18 45.2a82.522 82.522 0 0 1 8.469-5.724zM47.766 30.3c-1.732 1.733-8.535-.239-15.68-7.384S22.968 8.968 24.7 7.236c1.732-1.732 8.536.239 15.681 7.384S49.5 28.57 47.766 30.301z" fill="#000000" data-original="#000000"></path></g></svg>`;
const crimesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 226.55 232.33" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><circle cx="204.05" cy="47.636" r="22.5" fill="#000000" data-original="#000000"></circle><path d="m133.12 176.755-26.866 35.359c-4.177 5.497-3.106 13.339 2.39 17.515a12.443 12.443 0 0 0 7.553 2.548c3.774 0 7.504-1.702 9.963-4.938l29.6-38.96a12.498 12.498 0 0 0 2.535-8.116l-.575-12.948-26.232-27.18z" fill="#000000" data-original="#000000"></path><path d="M121.587 116.274a10.166 10.166 0 0 1-1.425 3.396c1.205.189 2.477.306 3.836.306.875 0 1.794-.061 2.734-.156a1.998 1.998 0 0 1-.988 3.531c-.32.044-.627.064-.94.096l-1.267 3.323a16.47 16.47 0 0 0 4.347 6.21c.026.028.047.057.073.084l38.317 39.703 9.947 49.417c1.194 5.936 6.41 10.036 12.24 10.036.817 0 1.648-.08 2.48-.248 6.768-1.362 11.15-7.953 9.787-14.721l-10.667-53a12.495 12.495 0 0 0-3.26-6.214l-30.736-31.848c3.211-16.563 13.201-33.56 19.672-45.717 5.646-8.68 5.528-21.17-2.015-25.695-7.546-4.523-20.735-3.697-29.82 8.84a187.362 187.362 0 0 0-5.044 7.39l18.152-9.479a10.34 10.34 0 0 1 4.76-1.17c3.854 0 7.355 2.12 9.138 5.533 2.628 5.036.671 11.27-4.363 13.899l-31.326 16.355-7.484 19.619a1.962 1.962 0 0 0-.548-.009c-.681.093-1.336.145-1.978.179l8.172-21.424 32.1-16.76a8.001 8.001 0 0 0-7.407-14.183l-34.789 18.165a8.008 8.008 0 0 0-3.771 4.24l-6.804 17.836.994.216c5.55 1.204 9.086 6.7 7.883 12.25z" fill="#000000" data-original="#000000"></path><path d="M122.017 123.609c-1.954 0-3.733-.235-5.369-.604a10.203 10.203 0 0 1-7.311 1.152l-4.055-.88-1.181 3.098a8 8 0 0 0 14.949 5.703l3.234-8.479c-.088.002-.18.01-.267.01zM54.589 180.273l-.587-13.219-26.266-27.94 1.677 37.752-26.865 35.358c-4.177 5.497-3.106 13.339 2.39 17.516a12.443 12.443 0 0 0 7.553 2.548c3.774 0 7.504-1.702 9.963-4.939l29.6-38.959a12.498 12.498 0 0 0 2.535-8.117zM56.415 119.908c-.038-.68-.072-1.36-.092-2.046-.093-3.33.015-6.716.27-10.103L36.888 76.102c-1.454-2.336-1.912-5.099-1.288-7.778s2.254-4.956 4.589-6.41a10.282 10.282 0 0 1 5.435-1.555c3.587 0 6.859 1.815 8.752 4.856l18.669 29.99 37.393 8.11 1.096-2.877-34.18-11.349-16.341-31.98a8.117 8.117 0 0 0-.437-.747c-1.765-3.223-4.409-5.636-7.818-6.487-8.537-2.127-20.912 2.508-25.947 17.15-5.773 17.112-7.689 29.178-6.563 45.998z" fill="#000000" data-original="#000000"></path><path d="m62.55 172.79 9.964 49.503c1.194 5.937 6.41 10.038 12.24 10.037.817 0 1.647-.08 2.48-.248 6.768-1.362 11.15-7.953 9.788-14.72l-10.667-53a12.497 12.497 0 0 0-3.146-6.096l-26.277-27.952c.064-1.17.067-2.48.01-3.943l-36.143-6.88c.103 1.006.207 2.01.329 3.055.95 4.888 2.632 8.438 4.765 11.017.356.518.74 1.02 1.184 1.492zM97.387 14.958l-43.882 2.371.507 9.398a22.679 22.679 0 0 0-.345 3.906c0 12.427 10.074 22.5 22.5 22.5 12.428 0 22.5-10.073 22.5-22.5 0-2.092-.291-4.115-.826-6.038l10.079-.544zM97.503 12.069 103.95 0 53 7.973l.35 6.482zM109.824 121.909a8.003 8.003 0 0 0 9.515-6.122 8 8 0 0 0-6.122-9.515l-41.612-9.025L52.423 66.43a8 8 0 0 0-13.584 8.455l20.972 33.689a8.004 8.004 0 0 0 5.095 3.59z" fill="#000000" data-original="#000000"></path></g></svg>`;
const recreatesvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M0,15.5V24H3v-.524H3A6.507,6.507,0,0,1,9.5,17h3.331v5.789l10.147-8.814a3.507,3.507,0,0,0,0-4.95L22.9,8.953,12.831.211V6H9.5A9.511,9.511,0,0,0,0,15.5Zm3,1.078V15.5A6.508,6.508,0,0,1,9.5,9h6.331V6.789l5.049,4.383a.5.5,0,0,1,0,.656l-5.049,4.383V14H9.5A9.466,9.466,0,0,0,3,16.578Z"/></svg>`;
const medicalreportsvg =
    `<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7 10h10v3h-10zm0 8h7v-3h-7zm15-12.121v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>`;
const profilesetting =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M15,6c0-3.309-2.691-6-6-6S3,2.691,3,6s2.691,6,6,6,6-2.691,6-6Zm-6,3c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm-.012,6.314c.103,.822-.48,1.571-1.303,1.674-2.627,.328-4.686,2.749-4.686,5.512,0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5c0-4.249,3.213-7.977,7.314-8.488,.818-.106,1.571,.48,1.674,1.303Zm14.012,3.184l-.638-.376c.084-.362,.138-.735,.138-1.123s-.054-.76-.138-1.123l.638-.376c.714-.42,.952-1.34,.531-2.054-.421-.714-1.34-.95-2.054-.531l-.648,.382c-.523-.471-1.144-.825-1.83-1.043v-.755c0-.829-.671-1.5-1.5-1.5s-1.5,.671-1.5,1.5v.755c-.686,.218-1.307,.572-1.83,1.043l-.648-.382c-.713-.418-1.632-.183-2.054,.531-.42,.714-.183,1.633,.531,2.054l.638,.376c-.084,.362-.138,.735-.138,1.123s.054,.76,.138,1.123l-.638,.376c-.714,.42-.952,1.34-.531,2.054,.28,.475,.78,.739,1.294,.739,.259,0,.521-.067,.76-.208l.648-.382c.523,.471,1.144,.825,1.83,1.043v.755c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.755c.686-.218,1.307-.572,1.83-1.043l.648,.382c.239,.141,.501,.208,.76,.208,.514,0,1.014-.264,1.294-.739,.42-.714,.183-1.633-.531-2.054Zm-5.5,.001c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Z"/></svg>`;
const infosvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M14,7.25A1.75,1.75,0,1,1,12.25,5.5,1.751,1.751,0,0,1,14,7.25ZM24,12A12,12,0,1,0,12,24H24Zm-3,0v9H12a9,9,0,1,1,9-9Zm-7,.5A2.5,2.5,0,0,0,11.5,10H9v3h2v5h3Z"/></svg>`;
const microphone = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M10,12a1,1,0,0,1-1,1H4.069a7.993,7.993,0,0,0,15.862,0H15a1,1,0,0,1,0-2h5V9H15a1,1,0,0,1,0-2h4.931A7.993,7.993,0,0,0,4.069,7H9A1,1,0,0,1,9,9H4v2H9A1,1,0,0,1,10,12Z"/><path d="M23,12a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9H11a9.011,9.011,0,0,1-9-9,1,1,0,0,0-2,0A11.013,11.013,0,0,0,11,24h2A11.013,11.013,0,0,0,24,13,1,1,0,0,0,23,12Z"/></svg>`;
const editsvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,3.46c-.05-1.03-.54-1.99-1.34-2.64-1.43-1.17-3.61-1.01-4.98,.36l-1.67,1.67c-.81-.54-1.77-.84-2.77-.84-1.34,0-2.59,.52-3.54,1.46l-3.03,3.03c-.39,.39-.39,1.02,0,1.41s1.02,.39,1.41,0l3.03-3.03c.89-.89,2.3-1.08,3.42-.57L2.07,16.79c-.69,.69-1.07,1.6-1.07,2.57,0,.63,.16,1.23,.46,1.77l-1.16,1.16c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l1.16-1.16c.53,.3,1.14,.46,1.77,.46,.97,0,1.89-.38,2.57-1.07L22.93,6.21c.73-.73,1.11-1.73,1.06-2.76ZM5.8,20.52c-.62,.62-1.7,.62-2.32,0-.31-.31-.48-.72-.48-1.16s.17-.85,.48-1.16L16.08,5.61l2.32,2.32L5.8,20.52ZM21.52,4.8l-1.71,1.71-2.32-2.32,1.6-1.6c.37-.37,.85-.56,1.32-.56,.36,0,.7,.11,.98,.34,.37,.3,.58,.72,.61,1.19,.02,.46-.15,.92-.48,1.24Z"/></svg>`;
const deletesvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
<path d="m11,15.242v3.758h-2v-5.758l2,2Zm6,6.758H7c-.551,0-1-.448-1-1v-10.758l-2-2v12.757c0,1.654,1.346,3,3,3h10c.765,0,1.457-.297,1.988-.77l-1.426-1.425c-.162.114-.349.196-.562.196Zm-4-3h1.758l-1.758-1.758v1.758ZM2.586,4L.043,1.457,1.457.043l3.957,3.957h1.586v-2c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v2h5v2h-2v12.5h-.086l4.043,4.043-1.414,1.414L4.586,6l-2-2Zm6.414,0h6v-2h-6v2Zm9,2H7.414l5.586,5.586v-2.586h2v4.586l3,3V6Z"/>
</svg>`;
const downloadsvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,24H0v-2H24v2Zm-9.86-4.89l9.82-10.11h-6.95V0H7V9H.07l9.8,10.11h0c.57,.58,1.32,.89,2.12,.89h0c.8,0,1.56-.31,2.13-.89ZM4.79,11h4.21V2h6V11h4.22l-6.51,6.71c-.19,.19-.44,.29-.71,.29h0c-.27,0-.52-.1-.7-.29l-6.5-6.71Z"/></svg>`;
const copysvg = 
`<svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m20 20h-20v-17a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-18-2h16v-15a1 1 0 0 0 -1-1h-14a1 1 0 0 0 -1 1zm20-13.816v17.816h-18v2h20v-17a3 3 0 0 0 -2-2.816z"/></svg>`;

const closesvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>`;
const vellip = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2.5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="21.5" r="2.5"/></svg>`;
const checkedsvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M7.8,21.425A2.542,2.542,0,0,1,6,20.679L.439,15.121,2.561,13,7.8,18.239,21.439,4.6l2.122,2.121L9.6,20.679A2.542,2.542,0,0,1,7.8,21.425Z"/></svg>`;
const gendersvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
<path d="m7.858,12c.742,0,1.463-.004,2.663-.703-.65-.733-1.165-1.583-1.513-2.518-.387.144-.801.221-1.15.221-1.654,0-3-1.346-3-3,1.145,0,3.621-1.282,4.849-2.418.382.254.707.591.975.975-.115.463-.183.944-.183,1.443,0,3.309,2.691,6,6,6s6-2.691,6-6S19.809,0,16.5,0C14.839,0,13.333.68,12.246,1.774c-1.174-1.101-2.719-1.774-4.388-1.774C4.654,0,1.879,2.46,1.382,5.732L.011,13.303c-.007.026-.005.052-.011.078.978-.72,2.128-1.2,3.358-1.381h4.5ZM16.5,3c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm7.5,16v5h-3v-5c0-.887-.584-1.632-1.385-1.893l-3.115,3.893-3.115-3.893c-.801.261-1.385,1.006-1.385,1.893v5h-3v-5c0-2.757,2.243-5,5-5h5c2.757,0,5,2.243,5,5Zm-14.89-5c-.455.445-.843.946-1.163,1.5-.599,1.031-.947,2.224-.947,3.5v2l-2.984-3.73c-.604.345-1.016.987-1.016,1.73v5H0v-5c0-2.757,2.243-5,5-5h4.11Z"/>
</svg>`;
const citysvg = 
`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22,5.644V2.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5v1.089L15.076,.941c-1.869-1.262-4.283-1.262-6.152,0L2.424,5.327C.906,6.351,0,8.055,0,9.886v8.614c0,3.033,2.468,5.5,5.5,5.5h3c.828,0,1.5-.671,1.5-1.5V14.5c0-.276,.225-.5,.5-.5h3c.275,0,.5,.224,.5,.5v8c0,.829,.672,1.5,1.5,1.5h3c3.032,0,5.5-2.467,5.5-5.5V9.886c0-1.654-.739-3.204-2-4.242Zm-1,12.856c0,1.378-1.121,2.5-2.5,2.5h-1.5v-6.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v6.5h-1.5c-1.379,0-2.5-1.122-2.5-2.5V9.886c0-.833,.412-1.607,1.102-2.073L10.602,3.427c.85-.573,1.947-.573,2.797,0l6.5,4.387c.689,.465,1.102,1.24,1.102,2.072v8.614Z"/></svg>`;
function createDevTool() {
    document.querySelectorAll('.devtool').forEach(tool => {
        tool.remove();
    });
    let devtool = document.createElement('section');
    let textboxcontainer = document.createElement('div');
    document.body.appendChild(devtool);
    devtool.appendChild(textboxcontainer);
    let cmd = 'cmd> ';
    devtool.classList.add('devtool');
    devtool.classList.add('osTransformation');

    function initializeUser() {
        textboxcontainer.innerHTML = '';
        let username = document.createElement('p');
        textboxcontainer.appendChild(username);
        username.classList.add('devtoolusername');
        username.classList.add('active');
        if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            ActiveUser_Account.forEach(user => {
                if (Array.isArray(JSON.parse(localStorage.getItem('LogInFormData')))) {
                    LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
                    LogInFormData.forEach(data => {
                        if (data.user_Id === user.user_Id) {
                            username.textContent = cmd + ':' + data.user_Firstname + ' ' + data.user_Surname;
                        }
                    });
                }
            });
        }
    }
    initializeUser();
    setTimeout(() => {
        createnewLine();
    }, 100);
    function createnewLine() {
        document.querySelectorAll('.devtoolusername').forEach(name => {
            name.classList.remove('active');
        });
        document.querySelectorAll('.devtextarea').forEach(area => {
            area.classList.remove('active');
        });
        let textarea = document.createElement('input');
        textboxcontainer.appendChild(textarea);
        textarea.value = cmd + ':';
        textarea.focus();
        textarea.classList.add('devtextarea');
        textarea.classList.add('active');

        textarea.addEventListener('keyup', () => {
            if (textarea.value == cmd || textarea.value == '') {
                textarea.remove();
                const newArr = document.querySelectorAll('.devtextarea');
                for (let i = 0; i < newArr.length; i++) {
                    newArr[i].focus();
                }
                if (newArr.length == 0) {
                    createnewLine();
                }
            }
        });
        devtool.addEventListener('click', () => {
            const newArr = document.querySelectorAll('.devtextarea');
            for (let i = 0; i < newArr.length; i++) {
                newArr[i].focus();
            }
        });
        textarea.addEventListener('click', () => {
            document.querySelectorAll('.devtextarea').forEach(areatext => {
                areatext.classList.remove('active');
            });
            textarea.classList.add('active');
        });
    }
    document.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            document.querySelectorAll('.devtextarea').forEach(areatext => {
                if (areatext.focus) {
                    generate_response(areatext);
                } else {

                }
            });
        }
    });
    const devToolHelpList = [
        {
            command: 'console.clear();',
            data: 'remove history'
        }, {
            command: 'console.exit();',
            data: 'exit devTool'
        }, {
            command: 'people();',
            data: 'view people page'
        }, {
            command: 'smartchat();',
            data: 'view chats menu'
        }, {
            command: 'notification();',
            data: 'view notification page'
        }, {
            command: 'lavinstaImages();',
            data: 'open lavinsta images'
        }, {
            command: 'publicFeed();',
            data: 'open lavinsta feeds'
        }, {
            command: 'shortVideos();',
            data: 'view notification page'
        }, {
            command: 'lavinsta.search();',
            data: 'open lavinsta videos'
        }, {
            command: 'lavinstaVideos();',
            data: 'open lavinsta videos'
        }, {
            command: 'init> login',
            data: 'visit login page'
        }, {
            command: 'init> sign up',
            data: 'visit login page'
        }, {
            command: 'location.reload();',
            data: 'refresh page'
        }, {
            command: 'history.back();',
            data: 'visit previous page -1'
        }, {
            command: 'history.forward();',
            data: 'visit previous page +1'
        }, {
            command: 'exit.help();',
            data: 'exit help'
        }
    ]
    function createHelplist() {
        devToolHelpList.forEach(help => {
            let init = `<p>${cmd + ':' + 'initializing...'}</p>`;
            let mainhelp = `<p>${cmd + ':' + help.command}</p><i>${help.data}</i>`;
            textboxcontainer.innerHTML = init;
            setTimeout(() => {
                init = `<p>${'commands and functions'}</p>`;
                textboxcontainer.innerHTML = init;
            }, 2000);
            setTimeout(() => {
                textboxcontainer.innerHTML += mainhelp;
                createnewLine();
            }, 3000);
        });
    }
    function generate_response(devtext) {
        if (devtext.classList.contains('active')) {
            createnewLine();
            if (devtext.value == `${cmd + ':'}people();`) {
                document.querySelector('.people').style.display = 'flex';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}smartchat();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'flex';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}notification();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'flex';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}profile();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'flex';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinstaVideos();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'flex';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}publicFeed();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'flex';
            } if (devtext.value == `${cmd + ':'}shortVideos();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'grid';
                document.querySelector('.photogallery').style.display = 'none';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinstaImages();`) {
                document.querySelector('.people').style.display = 'none';
                document.querySelector('.chattab').style.display = 'none';
                document.querySelector('.notificationtab').style.display = 'none';
                document.querySelector('.videopagebackground').style.display = 'none';
                document.querySelector('.profile').style.display = 'none';
                document.querySelector('.reelsmainpage').style.display = 'none';
                document.querySelector('.photogallery').style.display = 'flex';
                document.querySelector('.publicfeedpage').style.display = 'none';
            } if (devtext.value == `${cmd + ':'}lavinsta.search();`) {
                document.querySelector('.searchpath').style.display = 'flex';
            } if (devtext.value == `${cmd + ':'}help();`) {
                createHelplist();
            } if (devtext.value == `${cmd + ':'}console.clear();`) {
                document.querySelectorAll('.devtextarea').forEach(area => {
                    area.remove();
                });
                createnewLine();
            } if (devtext.value == `${cmd + ':'}console.exit();`) {
                textboxcontainer.style.alignContent = 'center';
                textboxcontainer.style.alignItems = 'center';
                textboxcontainer.style.justifyItems = 'center';
                textboxcontainer.innerHTML = `<strong>Bye Bye...</strong>`;
                setTimeout(() => {
                    devtool.remove();
                }, 2000);
            } if (devtext.value == `${cmd + ':'}init> login` || devtext.value == `${cmd + ':'}init> signup`) {
                location.href = 'login.html';
            } if (devtext.value == `${cmd + ':'}location.reload();`) {
                location.reload();
            } if (devtext.value == `${cmd + ':'}history.back();`) {
                history.back();
            } if (devtext.value == `${cmd + ':'}history.foward();`) {
                history.go(-1);
            } if (devtext.value == `${cmd + ':'}exit.help();`) {
                initializeUser();
                createnewLine();
            }
        }
    }
    setTimeout(() => {
        devtool.classList.remove('osTransformation');
    }, 1000 * 1);
}
// createDevTool();
// document.addEventListener('keypress',(e)=> {
//     console.log(e.currentTarget);
//     if (e.key == 'D' + 'E' + 'V' + 'M' + 'O' + 'D' + 'E') {
//         createDevTool();
//     }
// });
//TIME FUNCTION
function trackTime(ElapsedTime) {
    switch (typeof ElapsedTime) {
        case 'number':
            break;
        case 'string':
            ElapsedTime = +new Date(ElapsedTime);
            break;
        case 'object':
            if (ElapsedTime.constructor === Date) ElapsedTime = ElapsedTime.getTime();
            break;
        default:
            ElapsedTime = +new Date();
    }
    var time_formats = [
        [60, 'secs', 1], // 60
        [120, '1 min ago', '1 minute from now'], // 60*2
        [3600, 'mins', 60], // 60*60, 60
        [7200, '1 hr ago', '1 hour from now'], // 60*60*2
        [86400, 'hrs', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - ElapsedTime) / 1000,
        token = 'ago',
        list_choice = 1;

    if (seconds == 0) {
        return 'Just now';
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return ElapsedTime;
};
var aDay = 24 * 60 * 60 * 1000;
let increment = 0;

let timeing = trackTime((new Date(Date.now())));
const trackingElapsedTime = new Date().getTime();
const trackingDate = day.getDate() + ' ' + month[day.getMonth()] + ' ' + day.getFullYear();
function ThemeSettings(user_Id, user_Mode) {
    var root = document.querySelector(':root')
    //background variable declaration
    let lightcolor;
    let whitecolor;
    let darkcolor;
    defaultMode.addEventListener('click', () => {
        lightcolor = '89%';
        whitecolor = '100%';
        darkcolor = '15%';
        document.querySelector('.themeactive-1').classList.add('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        setTimeout(() => {
            restoreTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'defaultTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'defaultTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    darkMode.addEventListener('click', () => {
        lightcolor = '15%';
        whitecolor = '5%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.add('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        setTimeout(() => {
            changeIconsTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'darkTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'darkTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    LightOffMode.addEventListener('click', () => {
        lightcolor = '20%';
        whitecolor = '15%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.add('active');
        ChangeBackGround();
        setTimeout(() => {
            changeIconsTheme();
        }, 100);
        LogInFormData = JSON.parse(localStorage.getItem('LogInFormData'));
        LogInFormData.forEach(data => {
            if (data.user_Id === user_Id) {
                data.user_Mode = 'lightOffTheme';
                localStorage.setItem('LogInFormData', JSON.stringify(LogInFormData));
            }
        });
        ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
        ActiveUser_Account.forEach(user => {
            user.user_Mode = 'lightOffTheme';
            localStorage.setItem('ActiveUser_Account', JSON.stringify(ActiveUser_Account));
        });
    });
    if (user_Mode == 'defaultTheme') {
        lightcolor = '89%';
        whitecolor = '100%';
        darkcolor = '15%';
        document.querySelector('.themeactive-1').classList.add('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        restoreTheme();
    } if (user_Mode == 'darkTheme') {
        lightcolor = '15%';
        whitecolor = '5%';
        darkcolor = '100%';
        // lightcolor = '30%';
        // whitecolor = '35%';
        // darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.add('active');
        document.querySelector('.themeactive-3').classList.remove('active');
        ChangeBackGround();
        changeIconsTheme();
    } if (user_Mode == 'lightOffTheme') {
        lightcolor = '5%';
        whitecolor = '15%';
        darkcolor = '100%';
        document.querySelector('.themeactive-1').classList.remove('active');
        document.querySelector('.themeactive-2').classList.remove('active');
        document.querySelector('.themeactive-3').classList.add('active');
        ChangeBackGround();
        changeIconsTheme();
    }
    function ChangeBackGround() {
        root.style.setProperty('--color-light-verylight', lightcolor);
        root.style.setProperty('--color-white-verylight', whitecolor);
        root.style.setProperty('--dark-color-verylight', darkcolor);
    }
    function changeIconsTheme() {
        const likes111Icons = document.querySelectorAll('.likes111');
        const opencommentboxactivatedarkmode = document.querySelectorAll('.opencommentboxactivate');
        const sharegridlikedarkmore = document.querySelectorAll('.sharegridlike img');
        const commentreactimg = document.querySelectorAll('.commentreactimg');
        const replylikedarkmode = document.querySelectorAll('.replylike');
        const replygridphotodarkmode = document.querySelectorAll('.replygridphoto img');
        const newcommentsendimg = document.querySelectorAll('.newcommentinput img');
        const gridcommentdarkmode = document.querySelectorAll('.gridinput img');
        const userprofilelabel = document.querySelectorAll('.profilelabel img');
        const chatattachmentimg = document.querySelectorAll('.chatattachmentimg');
        const chatfloatitems = document.querySelectorAll('.chatfloat img');
        const userconnectgrid = document.querySelectorAll('.userconnectgrid span img');
        const usertopactivitytimeline = document.querySelectorAll('.usertopactivitytimeline img');
        const headerbtns = document.querySelectorAll('.headerbtns img');
        const admin_Tool_Grid_Img = document.querySelectorAll('.admin_Tool_Grid div img');
        const in_Visible_Img = document.querySelectorAll('.in_Visible_Img');
        const users_Popup_HeaderImg = document.querySelectorAll('.users_Popup_Header div img');

        users_Popup_HeaderImg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        in_Visible_Img.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        admin_Tool_Grid_Img.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        usertopactivitytimeline.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        headerbtns.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        userconnectgrid.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });

        chatattachmentimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        chatfloatitems.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        userprofilelabel.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        gridcommentdarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        newcommentsendimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        replygridphotodarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        replylikedarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons')
        });
        commentreactimg.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        sharegridlikedarkmore.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        opencommentboxactivatedarkmode.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
        likes111Icons.forEach(icon => {
            icon.classList.add('darkmodeicons');
        });
    }
    function restoreTheme() {
        const likes111Icons = document.querySelectorAll('.likes111');
        const opencommentboxactivatedarkmode = document.querySelectorAll('.opencommentboxactivate');
        const sharegridlikedarkmore = document.querySelectorAll('.sharegridlike img');
        const commentreactimg = document.querySelectorAll('.commentreactimg');
        const replylikedarkmode = document.querySelectorAll('.replylike');
        const newcommentsendimg = document.querySelectorAll('.newcommentinput img');
        const gridcommentdarkmode = document.querySelectorAll('.gridinput img');
        const userprofilelabel = document.querySelectorAll('.profilelabel img');
        const chatattachmentimg = document.querySelectorAll('.chatattachmentimg');
        const chatfloatitems = document.querySelectorAll('.chatfloat img');
        const userconnectgrid = document.querySelectorAll('.userconnectgrid span img');
        const usertopactivitytimeline = document.querySelectorAll('.usertopactivitytimeline img');
        const headerbtns = document.querySelectorAll('.headerbtns img');
        const admin_Tool_Grid_Img = document.querySelectorAll('.admin_Tool_Grid div img');
        const in_Visible_Img = document.querySelectorAll('.in_Visible_Img');
        const users_Popup_HeaderImg = document.querySelectorAll('.users_Popup_Header div img');

        users_Popup_HeaderImg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        in_Visible_Img.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        admin_Tool_Grid_Img.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        usertopactivitytimeline.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        headerbtns.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        userconnectgrid.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        chatattachmentimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        chatfloatitems.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        userprofilelabel.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        gridcommentdarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons')
        });
        newcommentsendimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        replylikedarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons')
        });
        commentreactimg.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        sharegridlikedarkmore.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        opencommentboxactivatedarkmode.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
        likes111Icons.forEach(icon => {
            icon.classList.remove('darkmodeicons');
        });
    }
}
if (Array.isArray(JSON.parse(localStorage.getItem('ActiveUser_Account')))) {
    ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
    ActiveUser_Account.forEach(user => {
        ThemeSettings(user.user_Id, user.user_Mode);
    });
}