var icont2f = "<a href='#' class='t2f_icon' onclick='t2f_load ()' ><img src='css/t2f_50.png' alt='text2form' /></a>" ;

var textfieldt2f = "<div id='t2f' title='Text2Form'><textarea name='t2f_textfield' onkeyup='t2f_t2f (value)' ></textarea><br /><a href='#' onclick='t2f_tab2new ()' >tabs auflösen</a></div>"

var DOMstart = '#EditView' ;



jQuery(document).ready(function() {
 $(icont2f).appendTo(document.body);
});

function t2f_load () {
 allInputs = $(DOMstart + ' input:text'); // call DomKnoten grap all inputs type=text
 allInputs.each(function(i) {
  $(this).addClass("farbe" + (i) ); // farben verteilen
  $(this).attr( { 'onblur' : 't2f_f2t (value)' } )  ; // use 'onblur' while typing or 'onchange' 
 });
  $("body").append(textfieldt2f); // t2ffieldset einbauen
  $( "#t2f" ).dialog( { show: 'blind', position: ['right', 150], }); // line is optional http://docs.jquery.com/UI/Dialog
  t2f_f2t () ; // first call to import existing data
}

function t2f_tab2new () {
 var t2f_textfield = $(".t2f textarea") ;
 var t2f_textfieldnew = t2f_textfield.val.replace("klml", "jjjj");
 $("#t2f textarea").append( t2f_textfieldnew.val() );  //using tabs !!doesnt work!!
}
function t2f_f2t () { // import existing data
 $("#t2f textarea").text( '' ) ; // clear first
  allInputs.each(function(i) {  
  $("#t2f textarea").append( $(this).val() + '\n' ) ;
 });
};
function t2f_t2f (t2f_textfield) { 
 formelement = new Array();
 formelement = t2f_textfield.split("\n") ; // allocate text
 allInputs.each(function(i) { // distribute content
  $(this).val(formelement[i]);
 }); 
};
