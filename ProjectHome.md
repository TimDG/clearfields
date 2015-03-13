This plugin allows you to have form fields that are emptied when they get focus. If you don't enter anything, the default value is restored when the focus is lost.

You can customize which input fields are affected by the plugin and which aren't.

```

//This will affect all input fields
$("body").clearFields();

//This will affect only the input fields in div#main
$("div#main").clearFields();

//This will affect all input fields that have class error
$("body").clearFields({selector: ".error"});
```

Finally, you can easily select which types of input fields you using the parameters "textFields", "textAreas" and "passwordFields". By default these are set to true.

```

//This will only affect text fields and text areas in the div#main.
$("div#main").clearFields({passwordFields: false});

//This will only affect password fields that have class error
$("body").clearFields({textFields:false,textAreas:false,selector:'.error'});
```

Released under the <a href='http://www.opensource.org/licenses/gpl-3.0.html'>GPLv3 license</a>