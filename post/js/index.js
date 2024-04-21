function checksearchParameters() {
    let newparemeters = new URLSearchParams(window.location.search).get('Post_Id');
    window.addEventListener('DOMContentLoaded', createMain_GridPost(newparemeters));
    console.log(newparemeters);
}
checksearchParameters();
const swipechanges = () => {
    let mouseX, initialX = 0;
    let mouseY,initialY = 0;
    let isSwiped;
    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup"
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend"
        }
    }
    let deviceType = "";
    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            deviceType = "touch";
            return true;
        } catch (error) {
            deviceType = "mouse";
            return false;
        }
    }
    let rectLeft = document.body.getBoundingClientRect().left;
    let rectTop = document.body.getBoundingClientRect().top;

    const getXY = (e) => {
        mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
        mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
    };
    isTouchDevice();
    document.addEventListener(events[deviceType].down,(event) => {
        isSwiped = true;
        getXY(event);
        initialX = mouseX;
        initialY = mouseY;
    });
    document.addEventListener(events[deviceType].move,(event) => {
        if (!isTouchDevice()) {
            event.preventDefault();
        } if (isSwiped) {
            getXY(event);
            let diffX = mouseX - initialX;
            let diffY = mouseY - initialY;
            function displayItemsToNone() {
                document.querySelector('.temp_header').classList.remove('temp_headerActive');
            }
            function displayItemsToFlex() {
                document.querySelector('.temp_header').classList.add('temp_headerActive');
                setTimeout(() => {
                    document.querySelector('.temp_header').classList.remove('temp_headerActive');
                }, 3000);
            }
            if (Math.abs(diffY) > Math.abs(diffX)) {
                diffY > 0 ? displayItemsToNone() : displayItemsToNone();
            } else {
                diffX > 0 ? displayItemsToNone() : displayItemsToFlex();
            }
        }
    });
    document.addEventListener(events[deviceType].up, () => {
        isSwiped = false;
    });
    document.addEventListener("mouseleave", () => {
        isSwiped = false;
    });
    window.onload = () => {
        isSwiped = false;
    }
}
swipechanges();
document.querySelector('.rewind_history').addEventListener('click',()=> {
    history.back();
});