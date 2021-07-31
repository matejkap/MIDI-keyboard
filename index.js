function onMIDIMessage( event ) {
    var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
    for (var i=0; i<event.data.length; i++) {
      str += "0x" + event.data[i].toString(16) + " ";
    }
    console.log( str );
  }
  
  function startLoggingMIDIInput( midiAccess, indexOfPort ) {
    midiAccess.inputs.forEach( function(entry) {entry.onmidimessage = onMIDIMessage;});
  }