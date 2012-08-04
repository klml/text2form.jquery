Filling many inputs (Addressforms, Applications, Payments etc) with content from a textarea separated by Newlines.

So its more easy to fill out several forms from a textual source. For example: putting a email signature via clipboard to your CRM.


[easy demo on github](http://klml.github.com/text2form.jquery/)

text2form with an "real" [sugarcrm form](http://bit.umija.de/proj/text2form/jquery.text2form/jquery.text2form_sugarcrm.html) and more on [umija.org/howto:text2form](http://umija.org/howto:text2form)

## Install
Adding this in the htmlhead of your main template.

```html
<script type="text/javascript" src="//code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.text2form.js"></script>
<link rel="stylesheet" type="text/css" href="css/jquery.text2form.css" />

<script type="text/javascript" >
var t2fbuttonhook = '#content' ; // place t2f botton is appended default 'body'
var t2fDOMstart = 'form.entry' ; // Domnnode to start grabbing default 'body'
var t2fforms = 'input:text' ; //Domnnode to grap 'textarea' 'input' etc  default 'input:text' to hide hidden
jQuery(document).ready(function() {
    $(t2fbutton).appendTo(t2fbuttonhook);
    $('.t2f_icon').click(function() {     
        t2f_load() ;
    });
});
</script>
```

Optional you can use [jquery.com/UI/Dialog](http://docs.jquery.com/UI/Dialog)

## Quicksnippet

For this Quicksnippet you dont have to download all sources. But these are from jquery, github, 23hq.com and my own server, so don't expect to much QoS ;)

Just paste this to your html code, customize and try t2f

```html
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>

<script type="text/javascript" src="http://bit.umija.de/proj/text2form/jquery.text2form/jquery-ui-1.8.1.custom.min.js"></script>
<script type="text/javascript" src="https://raw.github.com/klml/text2form.jquery/master/css/jquery.text2form.css"></script>


<link rel="stylesheet" type="text/css" href="http://bit.umija.de/proj/text2form/jquery.text2form/ui-lightness/jquery-ui-1.8.1.custom.css" />
<link rel="stylesheet" type="text/css" href="https://raw.github.com/klml/text2form.jquery/master/js/jquery.text2form.js" />

<script type="text/javascript" >
jQuery(document).ready(function() {
    $(t2fbutton).appendTo(t2fbuttonhook);
    $('.t2f_icon').click(function() {
        t2f_load() ;
    });
});
</script>
```
