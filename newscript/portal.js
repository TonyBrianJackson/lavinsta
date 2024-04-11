function fetch_Active_Users_Data() {
    const loader = document.querySelector('.loaderload').children;
    const firstChild = loader.item(0);
    const secondChild = loader.item(1);
    const thirdChild = loader.item(2);
    const fouthChild = loader.item(3);
    const fifthChild = loader.item(4);
    setTimeout(() => {
        firstChild.classList.add('loadingBlocksactive');
    }, 0);
    setTimeout(() => {
        secondChild.classList.add('loadingBlocksactive');
    }, 1000);
    setTimeout(() => {
        thirdChild.classList.add('loadingBlocksactive');
    }, 2000);
    setTimeout(() => {
        fouthChild.classList.add('loadingBlocksactive');
    }, 3000);
    setTimeout(() => {
        fifthChild.classList.add('loadingBlocksactive');
        if (JSON.parse(localStorage.getItem('ActiveUser_Account')).length !== 0) {
            ActiveUser_Account = JSON.parse(localStorage.getItem('ActiveUser_Account'));
            // redirect_User();
            location.href = 'lavinsta.html';
        } else {
            ActiveUser_Account = [];
            location.href = 'login.html';
        }
    }, 4000);
}
fetch_Active_Users_Data();
