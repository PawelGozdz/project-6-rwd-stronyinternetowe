import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//Sweet alert

import swal from 'sweetalert2';

// swal(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// );

// $('#contact-form')
//  // field element is invalid
//  .on("invalid.zf.abide", function(ev,elem) {
//   swal(
//     'Oops!',
//     'Coś jest nie tak. Sprawdź czy wszystkie pola są wypełnione',
//     'error'
//   )
// })
// // form validation passed, form will submit if submit event not returned false
// .on("formvalid.zf.abide", function(ev,frm) {
//   // swal(
//   //   'Świetnie!',
//   //   'Wiadomość została wysłana!',
//   //   'success'
//   // )

//   const form = $(this);

//   $.ajax({
//     type: form.attr('method'),
//     url: form.attr('action'),
//     data: form.serialize(),
//     success: function(data) {
//       const result = data;
//       const respond = JSON.parse(result);
//       console.log(respons);
//     }
//   });

// })
// // to prevent form from submitting upon successful validation
// .on("submit", function(ev) {
//   ev.preventDefault();
//   console.log("Submit for form id "+ev.target.id+" intercepted");
// });

$('#contact-form')

// form validation passed, form will submit if submit event not returned false
.on("invalid.zf.abide", function(ev,elem) {
  swal(
    'Coś nie tak',
    'Sprawdź czy wszystkie pola zostały wypełnione',
    'error'
  )
})
.on("formvalid.zf.abide", function(ev,frm) {

  var form = $(this);
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize(),
      success: function (data) {
      var result = trim(data);
      var response = JSON.parse(result);
        console.log(response);
        swal(
          response.message,
          'Dziękuję ' + response.name + ' za Twoją wiadomość!',
          'success'
        )
      }
    });
})
// to prevent form from submitting upon successful validation
.on("submit", function(ev) {
  ev.preventDefault();
});

function trim(str){
var str=str.replace(/^\s+|\s+$/,'');
return str;
}

// Scroll to top arrw
$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 800) {
			$('.arrow').addClass('show');
		} else {
			$('.arrow').removeClass('show');
		}
	});
});