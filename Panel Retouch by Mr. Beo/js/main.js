(function () {
    function e() {
        var b = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        b.extensionId = "panelretouchmrbeo";
        a.dispatchEvent(b)
    }

    var a = new CSInterface;
    (function () {
        themeManager.init();
        e();
        


   

$("#NhatmunAI").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'NhatmunAI.jsx")') });

$("#MindaAI").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'MindaAI.jsx")') });

$("#SkintoneAI").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'SkintoneAI.jsx")') });

$("#KhoitudongAI").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'KhoitudongAI.jsx")') });

$("#SkintoneAI").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'SkintoneAI.jsx")') });

$("#SangmatAIg").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'SangmatAI.jsx")') });

$("#Xoabongmat").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'Xoabongmat.jsx")') });

$("#trongmat").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'trongmat.jsx")') });

$("#Trangrang").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'Trangrang.jsx")') });

$("#VividLightSharpening").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'VividLightSharpening.jsx")') });



        
    })()
})();
