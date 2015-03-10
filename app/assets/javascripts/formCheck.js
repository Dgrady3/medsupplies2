function formCheck(formobj){
  // Enter name of mandatory fields
  var fieldRequired = Array("fname", "lname", "phone", "email");
  // Enter field description to appear in the dialog box
  var fieldDescription = Array("First Name", "Last Name", "Phone Number", "Email");
  // dialog message
  var alertMsg = "Please complete the following required fields:\n";

    var l_Msg = alertMsg.length;

  for (var i = 0; i < fieldRequired.length; i++){
    var obj = formobj.elements[fieldRequired[i]];
    if (obj){
      switch(obj.type){
      case "select-one":
        if (obj.selectedIndex == -1 || obj.options[obj.selectedIndex].text == ""){
          alertMsg += " - " + fieldDescription[i] + "\n";
        }
        break;
      case "select-multiple":
        if (obj.selectedIndex == -1){
          alertMsg += " - " + fieldDescription[i] + "\n";
        }
        break;
      case "text":
      case "textarea":
        if (obj.value == "First Name*" || obj.value == "Last Name*" || obj.value == "Phone Number*" ||  obj.value == "Email*" ||obj.value == "" || obj.value == null){
          alertMsg += " - " + fieldDescription[i] + "\n";
        }
        break;
      default:
      }
      if (obj.type == undefined){
        var blnchecked = false;
        for (var j = 0; j < obj.length; j++){
          if (obj[j].checked){
            blnchecked = true;
          }
        }
        if (!blnchecked){
          alertMsg += " - " + fieldDescription[i] + "\n";
        }
      }
    }
  }

  if (alertMsg.length == l_Msg){
    return true;
  }else{
    alert(alertMsg);
    return false;
  }
}
