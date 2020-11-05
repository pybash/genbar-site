window.addEventListener('load', (e) => {
    var tabletButton = document.getElementById('tablet')
    var accountButton = document.getElementById('account')

    tabletButton.addEventListener('click', (e) => {
        location.href = "wiki/tablet.html"
    })
    accountButton.addEventListener('click', (e) => {
        location.href = "wiki/account.html"
    })
})