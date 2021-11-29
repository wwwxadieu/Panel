#target photoshop
//
// NhatmunAI.jsx
//

//
// Generated Sun Nov 28 2021 15:31:12 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Nhat mun AI ==============
//
function NhatmunAI() {
  // Retouch4me Heal
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putBoolean(cTID('IsHB'), false);
    desc1.putDouble(cTID('SenF'), 100);
    executeAction(sTID('a6e0kl2a-95ce-11d3-bd6b-93khdf9he1al'), desc1, dialogMode);
  };

  step1();      // Retouch4me Heal
};



//=========================================
//                    NhatmunAI.main
//=========================================
//

NhatmunAI.main = function () {
  NhatmunAI();
};

NhatmunAI.main();

// EOF

"NhatmunAI.jsx"
// EOF
