
var elements = document.getElementsByName('tag');
var kangals = document.getElementsByClassName('kangal');
for (let tag of elements) {
    tag.addEventListener('change', function () {
        var check = this.id.slice(0, this.id.length - 7);
        for (let kangal of kangals) {
            if (kangal.classList.contains(check)) {
                kangal.style.display = 'inline-block';
            } else {
                kangal.style.display = 'none';
            }
        }
    });
}
