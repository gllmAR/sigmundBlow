(function() {
    console.log('starting....')
    rhizome.start(function(err) {
        if (err) throw err
        rhizome.send('/sys/subscribe', ['/'])
    })
    rhizome.on('message', function(addr, args) {

        switch (document.getElementById(addr).className) {
            case "hFader":
                document.getElementById(addr).value = (args[0]);
                document.getElementById(addr + ".label").innerHTML = parseFloat(args[0]).toPrecision(5);
                break;
            case "progress":
                document.getElementById(addr).value = (args[0]);
                document.getElementById(addr+".label").innerHTML = parseFloat(args[0]).toPrecision(3);
                break;

            case "label":
                document.getElementById(addr + ".label").innerHTML = parseFloat(args[0]).toPrecision(3);
                break;

            case "push":
                  break;

            default:
        }
    })
    rhizome.on('connected', function() {
        console.log('connected')
    })
})();

function loadInterface() {
    console.log(myInterface.interface.length);
    for (i = 0; i < myInterface.interface.length; i++) {

        switch (myInterface.interface[i].class) {
            case "title":
                var x = document.createElement("SPAN");
                x.innerHTML = myInterface.interface[i].name;
                x.className = myInterface.interface[i].class;
                document.body.appendChild(x);
                var w = document.createElement("BR");
                document.body.appendChild(w);
                break;

            case "label":
                var x = document.createElement("SPAN");
                var y = document.createElement("SPAN")
                x.innerHTML = "/" + myInterface.interface[i].name + " ";
                x.id = '/' + myInterface.interface[i].name;
                x.className = myInterface.interface[i].class;
                y.className = myInterface.interface[i].class;
                y.id = '/' + myInterface.interface[i].name + ".label";
                document.body.appendChild(x);
                document.body.appendChild(y);
                var w = document.createElement("BR");
                document.body.appendChild(w);
                break;

            case "hFader":
                var x = document.createElement("INPUT");
                var y = document.createElement("SPAN");
                var z = document.createElement("SPAN");
                x.type = "range";
                x.id = '/' + myInterface.interface[i].name;
                x.className = myInterface.interface[i].class;
                x.min = myInterface.interface[i].min;
                x.max = myInterface.interface[i].max;
                x.step = myInterface.interface[i].step;
                x.setAttribute("oninput", "rhizome.send(" + "'/" + myInterface.interface[i].name + "'" + ",[parseFloat(value)])")
                y.innerHTML = '/' + myInterface.interface[i].name + " ";
                z.id = '/' + myInterface.interface[i].name + ".label"
                document.body.appendChild(y);
                document.body.appendChild(z);
                var w = document.createElement("BR");
                document.body.appendChild(w);
                document.body.appendChild(x);

                break;

            case "push":
                var x = document.createElement("BUTTON");
                x.id = '/' + myInterface.interface[i].name;
                x.setAttribute("class", myInterface.interface[i].class)
                x.setAttribute("onclick", "rhizome.send(" + "'/" + myInterface.interface[i].name + "'" + ",[parseFloat(1)])")
                x.innerHTML = '/' + myInterface.interface[i].name + " ";
                document.body.appendChild(x);
                break;

              case "progress":
                  var x = document.createElement("PROGRESS");
                  var y = document.createElement("SPAN");
                  var z = document.createElement("SPAN");
                  x.id = '/' + myInterface.interface[i].name;
                  x.className = myInterface.interface[i].class;
                  x.min = myInterface.interface[i].min;
                  x.max = myInterface.interface[i].max;
                  y.innerHTML = '/' + myInterface.interface[i].name + " ";
                  z.id = '/' + myInterface.interface[i].name +".label"
                  document.body.appendChild(y);
                  document.body.appendChild(z)
                  document.body.appendChild(x);
                  var w = document.createElement("BR");
                  document.body.appendChild(w);

                  break;


            default:

        }
    }
}
