// DATE FUNCTION
const day = new Date();
const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];


const deletedpostArray = JSON.parse(localStorage.getItem('deletedPost'));

// SAVED ITEMS CREATION SCRIPT
const savedphotopostretrieving = JSON.parse(localStorage.getItem('savePhotosArray'));


//SAVED DELETED STORIES CREATION
const saveddeletedstories = JSON.parse(localStorage.getItem('deletedstoriesArray')); 



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