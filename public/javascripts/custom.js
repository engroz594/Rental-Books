var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

window.onload = function() {
// AJAX request for getting html for books section HTML
    HTMLRequest = new XMLHttpRequest();
    HTMLRequest.open('GET', 'users/getBooks', true);
    HTMLRequest.send();

    HTMLRequest.onreadystatechange = function () {
        if (HTMLRequest.readyState === XMLHttpRequest.DONE) {
            // Everything is good, the response was received.
            var htmlObject = document.createElement('div');
            htmlObject.innerHTML = HTMLRequest.responseText;
            document.querySelector('.featuredBooks').appendChild(htmlObject)
        }
    };


// AJAX request for getting html for JSON
    JSONRequest = new XMLHttpRequest();
    JSONRequest.open('GET', 'users/getJSON', true);
    JSONRequest.send();

    JSONRequest.onreadystatechange = function () {
        if (JSONRequest.readyState === XMLHttpRequest.DONE) {
            // Everything is good, the response was received.
            let quotes = JSON.parse(JSONRequest.response);
            quotes.forEach(element => {
                var htmlObject = document.createElement('div');
                htmlObject.innerHTML = '<div class="mySlides">' +
                    '<q>' + element.quote + '</q>' +
                    '<p class="author">- ' + element.author + '</p>' +
                    '</div>';

                document.querySelector('.quotes-slider').appendChild(htmlObject)
            });
            // htmlObject.innerHTML = httpRequest.responseText;
            // console.log()
            // document.querySelector('.featuredBooks').appendChild(htmlObject)
            showSlides(1)
        }
    };

    setInterval(() => {
        plusSlides(1);
    }, 3000)
};