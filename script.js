function changeBorder(event) {
    if (event.target.localName === 'img') {

        $(document).find('.border').removeClass('border');
        event.target.className += ' border';
    }
}

$('.gallery').each(function (index, el) {
    $(el).on('click', changeBorder)
});

// document.querySelectorAll('.gallery').forEach(el => el.addEventListener('click', event => console.log(event)))


//Close and open the modal
const $opentBtn = $('.explain');
const $closeBtn = $('.close');
const $modal = $('.modal');

$opentBtn.on('click', () => $modal.css('display', 'block'));

$closeBtn.on('click', () => {
    $modal.css('display', 'none');
});

$(document).on('click', (e) => {
    if (e.target.className === 'modal') {
        $modal.css('display', 'none');
    }
});