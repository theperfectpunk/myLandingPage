$(document).ready(function() {
    //Select all links with hashes
    $('a[href*="#"]')
    //Remove links that don't actually point to anything
    .not('a[href="#"]')
    .not('a[href="#0"]')
    .click(function(event) {
        //On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out the element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1)+ ']');
            // Does the scroll target exist?
            if(target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top-100  
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });
});

function openModal() {

    //show the modal
    $('#questionModal').modal('show');

    //radio button checked listener
    var prev = null;
    $('.myRadio').change(function () {
        $(this).closest('label').addClass('radio-checked');
        if(prev!=null) {
            prev.removeClass('radio-checked');
        }
        prev = $(this).closest('label');
    });
    var step = 0;
    $('.myBtn').click(function () {
        $('form').children('div#step:eq('+step+')').first().addClass('hideClass');
        if(step<=1) {
            step++;
            console.log(step);
        } else
            $('.myBtn').text('SUBMIT');
        $('form').children('div#step:eq('+step+')').first().removeClass('hideClass');
    });
}
