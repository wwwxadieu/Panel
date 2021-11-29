#target photoshop
//
// KhoitudongAI.jsx
//

//
// Generated Sun Nov 28 2021 19:48:29 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Khoi tu dong AI ==============
//
function KhoitudongAI() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Retouch4me Portrait Volumes
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putBoolean(cTID('IsHB'), false);
    desc1.putDouble(cTID('SenF'), 100);
    executeAction(sTID('v63p704a-9pv2-00pl-pv6b-po9r2et9itv1'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Retouch4me Portrait Volumes
};



//=========================================
//                    KhoitudongAI.main
//=========================================
//

KhoitudongAI.main = function () {
  KhoitudongAI();
};

KhoitudongAI.main();

// EOF

"KhoitudongAI.jsx"
// EOF
