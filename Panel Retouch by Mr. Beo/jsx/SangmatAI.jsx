#target photoshop
//
// SangmatAI.jsx
//

//
// Generated Sun Nov 28 2021 15:31:50 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Sang mat AI ==============
//
function SangmatAI() {
  // Retouch4me Eye Vessels
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putBoolean(cTID('IsHB'), false);
    desc1.putDouble(cTID('SenF'), 100);
    executeAction(sTID('a6e5704a-46ce-jd23-bd6b-3ccee5ey8s3s'), desc1, dialogMode);
  };

  step1();      // Retouch4me Eye Vessels
};



//=========================================
//                    SangmatAI.main
//=========================================
//

SangmatAI.main = function () {
  SangmatAI();
};

SangmatAI.main();

// EOF

"SangmatAI.jsx"
// EOF
