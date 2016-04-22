function loadInterface() {
  console.log(myInterface.interface.length);
   for (i = 0; i < myInterface.interface.length; i++) {

     if (myInterface.interface[i].class == "title"){
        var x = document.createElement("SPAN");
        x.innerHTML = myInterface.interface[i].name ;
        document.body.appendChild(x);
        var w = document.createElement("BR");
        document.body.appendChild(w);
     }

     if (myInterface.interface[i].class == "hFader"){

     var x = document.createElement("INPUT");
     var y = document.createElement("SPAN");
     var z = document.createElement("SPAN");
     x.type = "range";
     x.id = '/'+myInterface.interface[i].name+".input";
     x.setAttribute("class", myInterface.interface[i].class)
     x.setAttribute("min", myInterface.interface[i].min);
     x.setAttribute("max", myInterface.interface[i].max);
     x.setAttribute("step", myInterface.interface[i].step);
     x.setAttribute("oninput", "rhizome.send("+"'/"+myInterface.interface[i].name+"'"+",[parseFloat(value)])")
     y.innerHTML = '/'+myInterface.interface[i].name+" ";
     z.id = '/'+myInterface.interface[i].name+".label"


    document.body.appendChild(y);
    document.body.appendChild(z);
    var w = document.createElement("BR");
    document.body.appendChild(w);
      document.body.appendChild(x);

}

 else if (myInterface.interface[i].class == "push"){
  var x = document.createElement("BUTTON");
  x.id = '/'+myInterface.interface[i].name+".input";
  x.setAttribute("class", myInterface.interface[i].class)
  x.setAttribute("onclick","rhizome.send("+"'/"+myInterface.interface[i].name+"'"+",[parseFloat(1)])")
  x.innerHTML = '/'+myInterface.interface[i].name+" ";
  document.body.appendChild(x);
  }
}
}
