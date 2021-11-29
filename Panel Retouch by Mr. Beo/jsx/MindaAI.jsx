#target photoshop
//
// MindaAI.jsx
//

//
// Generated Sun Nov 28 2021 15:31:39 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Min da AI ==============
//
function MindaAI() {
  // Retouch4me Dodge&Burn
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putBoolean(cTID('IsHB'), false);
    desc1.putDouble(cTID('SenF'), 100);
    desc1.putDouble(cTID('SSdF'), 0);
    executeAction(sTID('a6e5704a-9dk2-02kl-bd6b-d0d7e8b09374'), desc1, dialogMode);
  };

  step1();      // Retouch4me Dodge&Burn
};



//=========================================
//                    MindaAI.main
//=========================================
//

MindaAI.main = function () {
  MindaAI();
};

MindaAI.main();

// EOF

"MindaAI.jsx"
// EOF
