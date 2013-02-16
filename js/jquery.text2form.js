var t2fbutton = "<button class='t2f_icon'>text 2 form</button>" ;
var t2fbuttonhook = 'body' ;
var t2ftextfield = "<div id='t2f' ><textarea></textarea><br />make2newline: <button>tabs</button><button>spaces</button><button>blanklines</button></div>"
var t2fDOMstart = 'body' ;
var t2fforms = 'input:text' ;

function t2f_load () {
  allInputs = $(t2fDOMstart).find(t2fforms);
  allInputs.each(function(i) {
   $(this).addClass("rainbow" + (i) ); // spread colors
   $(this).attr( { 'onblur' : 't2f_f2t (value)' } )  ; // use 'onblur' while typing or 'onchange' 
  });

   $("body").append(t2ftextfield);
   $( "#t2f" ).dialog( { show: 'blind', position: ['right', 150], }); // line is optional http://docs.jquery.com/UI/Dialog
   t2f_f2t () ; // import existing data first

   $('#t2f textarea').keyup(function() {
    t2f_t2f( $(this).val() );
   });

   $('#t2f button').click(function() {
    switch ($(this).html()) {
      case "tabs":
        replace = /\t/g ;
      break;
      case "blanklines":
        replace = /\n\n/g ;
      break;
      case "spaces":
        replace = /\s/g ;
      break;
      }
      t2f_2newline ( replace ) ;
   });
}
function t2f_t2f (t2f_textfield) { 
 formelement = new Array();
 formelement = t2f_textfield.split("\n") ; // allocate text
 allInputs.each(function(i) { // distribute content
  $(this).val(formelement[i]);
 }); 
};
function t2f_f2t () { // import existing data
 $("#t2f textarea").text( '' ) ; // clear first
  allInputs.each(function(i) {  
  $("#t2f textarea").append( $(this).val() + '\n' ) ;
 });
};
function t2f_2newline ( char ) {
 var t2f_textfieldnew = $("#t2f textarea").val().replace(char, '\n');
 $("#t2f textarea").val( t2f_textfieldnew );
 t2f_t2f($("#t2f textarea").val());
}
