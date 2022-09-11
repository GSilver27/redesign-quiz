$(document).ready(function () {
    let step = 1;
    const name = document.getElementById('name');
    const city = document.getElementById('city');
    const btnNext = $('.btn-quiz');

    function changeStep() {
        $('#step-' + step).fadeOut(300, () => {
            $('#step-' + ++step).fadeIn(300);
        });
    }

    btnNext.on('click', () => {
        if (step === 1 && name.value.length >= 2
            && $('input[name="phone"]').is(':not(:placeholder-shown)')
            && city.value.length >= 3)
            changeStep();
        else if (step === 2 && $('input[name="step-2"]').is(':checked')) changeStep();
        else if (step === 3 && $('input[name="step-3"]').is(':checked')) changeStep();
        else if (step === 4 && $('input[name="step-4"]').is(':checked')) changeStep();
        else if (step === 5 && $('input[name="step-5"]').is(':checked')) changeStep();
        else if (step === 6 && $('input[name="step-6"]').is(':checked')) changeStep();
        else if (step === 7 && $('input[name="step-7"]').is(':checked')) changeStep();
        else if (step === 8 && $('input[name="step-8"]').is(':checked')) changeStep();
        else if (step === 9 && $('input[name="step-9"]').is(':checked')) changeStep();
        else if (step === 10 && $('input[name="step-10"]').is(':checked')) changeStep();
    });

    if (!$('#step-11').is(':hidden')) {
        $('.quiz__bottom-part').hide();
    }
});