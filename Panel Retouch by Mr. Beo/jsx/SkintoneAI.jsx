#target photoshop
//
// SkintoneAI.jsx
//

//
// Generated Sun Nov 28 2021 15:32:01 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Skin tone AI ==============
//
function SkintoneAI() {
  // Retouch4me Skin Tone
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putBoolean(cTID('IsHB'), false);
    desc1.putDouble(cTID('SenF'), 100);
    executeAction(sTID('a6e0304a-4lke-jd23-bd6b-5c14704e0000'), desc1, dialogMode);
  };

  step1();      // Retouch4me Skin Tone
};



//=========================================
//                    SkintoneAI.main
//=========================================
//

SkintoneAI.main = function () {
  SkintoneAI();
};

SkintoneAI.main();

// EOF

"SkintoneAI.jsx"
// EOF
