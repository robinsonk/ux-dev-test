function formWatch() {
    $('#submit').on( 'click', function(e) {
        e.preventDefault();

        // If all text and select fields aren't filled out, alert the user
        if ($('#name').val() == '' || $('#month').val() == '' || $('#day').val() == '' 
            || $('#year').val() == '' || $('#notes').val() == '') {
            alert('Please fill out all fields');

            // If both gender checkboxes are empty, alert the user
        } else if ( $('#female').prop('checked') == false && $('#male').prop('checked') == false ) {
            alert('Please fill out all fields');

            // If everything is filled out, show static profile view
        } else {
            $('.profile-container').addClass('small');
            $('.form-block').addClass('small');
            $('.button-container').hide();

            $('#name').addClass('view-only');
            $('#name').attr('readonly', 'true');
    
            $('#notes').addClass('view-only-static');
            $('#notes').attr('readonly', 'true');
    
            $('.date-dds').hide();
            $('.static-date').show();
    
            $('#staticMonth').html($('#month').val());
            $('#staticDay').html($('#day').val());
            $('#staticYear').html($('#year').val());
    
            $('.gender-check').attr('disabled');
    
            if ($('.gender-section input:checked')) {
               $('.gender-section input').attr('disabled', 'disabled');
               $('.gender-section label').addClass('view-only-static');
            }
        }
    })

    $('#edit').on('click', function(e) {
        // Prevent page refresh on click
        e.preventDefault();

        // Make all fields editable again and show default form view 
        $('.profile-container').removeClass('small');
        $('.form-block').removeClass('small');
        $('.button-container').show();

        $('#name').removeClass('view-only');
        $('#name').removeAttr('readonly', '');

        $('#notes').removeClass('view-only-static');
        $('#notes').removeAttr('readonly', '');

        $('.date-dds').show();
        $('.static-date').hide();

        $('.gender-check').removeAttr('disabled');

        if ($('.gender-section input:checked')) {
           $('.gender-section input').removeAttr('disabled', '');
           $('.gender-section label').removeClass('view-only-static');
        }
    })
}



function datePop() {
    // Populate day dropdown with numbers 01 to 31
    for (let i = 1; i <= 31; i++) {
        $('#day').append('<option value="'+String(i).padStart(2, '0')+'">'+String(i).padStart(2, '0')+'</option>')
    }

    // Populate month dropdown with numbers 01 to 12
    for (let i = 1; i <= 12; i++) {
        $('#month').append('<option value="'+String(i).padStart(2, '0')+'">'+String(i).padStart(2, '0')+'</option>')
    }

    // Populate year dropdown from 1996 to 2021
    for (let i = 1996; i <= 2021; i++) {
        $('#year').append('<option value="'+String(i).padStart(2, '0')+'">'+String(i).padStart(2, '0')+'</option>')
    }    
}



function radioChecks() {
    // When a checkbox is clicked, treat it like a radio button (allow only one to be selected at a time)
    $('input:checkbox').on('click', function() {
        let check = $(this);

        if (check.is(':checked')) {
            let both = 'input:checkbox[name="' + check.attr("name") + '"]';
            $(both).prop('checked', false);
            check.prop('checked', true);
            console.log($(check).val())
        } else {
            check.prop('checked', false);
        }
    })
}


$(formWatch);
$(datePop);
$(radioChecks);