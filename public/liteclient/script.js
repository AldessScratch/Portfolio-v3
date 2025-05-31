document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('content').style.opacity = '1';
        document.body.classList.remove('no-scroll');
    }, 3000);
});