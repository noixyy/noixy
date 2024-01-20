document.addEventListener('DOMContentLoaded', function () {
    var workPlay = document.querySelector('.work-play');

    document.querySelector('.work-play a').addEventListener('mouseover', function() {
        document.querySelector('.work-play').classList.add('shake');
    });
    
    document.querySelector('.work-play a').addEventListener('mouseout', function() {
        document.querySelector('.work-play').classList.remove('shake');
    });
});