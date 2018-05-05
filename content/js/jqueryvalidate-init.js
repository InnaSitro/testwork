$(document).ready(function(){
    $(function(){
        $('#callback-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    phoneUS: true
                }
            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "You should enter at least 2 symbols!"
                },
                tel: {
                    required: "This field is required",
                    phoneUS: "Enter valid phone number!"
                },
            }
        });
    });
});