function CSXSWindowType(){}CSXSWindowType._PANEL="Panel";CSXSWindowType._MODELESS="Modeless";CSXSWindowType._MODAL_DIALOG="ModalDialog";EvalScript_ErrMessage="EvalScript error.";function Version(a,b,c,d){this.major=a;this.minor=b;this.micro=c;this.special=d}Version.MAX_NUM=999999999;function VersionBound(a,b){this.version=a;this.inclusive=b}function VersionRange(a,b){this.lowerBound=a;this.upperBound=b}function Runtime(a,b){this.name=a;this.versionRange=b}
function Extension(a,b,c,d,f,e,g,h,k,l,m,n,p,q,r,s){this.id=a;this.name=b;this.mainPath=c;this.basePath=d;this.windowType=f;this.width=e;this.height=g;this.minWidth=h;this.minHeight=k;this.maxWidth=l;this.maxHeight=m;this.defaultExtensionDataXml=n;this.specialExtensionDataXml=p;this.requiredRuntimeList=q;this.isAutoVisible=r;this.isPluginExtension=s}function CSEvent(a,b,c,d){this.type=a;this.scope=b;this.appId=c;this.extensionId=d}CSEvent.prototype.data="";function SystemPath(){}
SystemPath.USER_DATA="userData";SystemPath.COMMON_FILES="commonFiles";SystemPath.MY_DOCUMENTS="myDocuments";SystemPath.APPLICATION="application";SystemPath.EXTENSION="extension";SystemPath.HOST_APPLICATION="hostApplication";function ColorType(){}ColorType.RGB="rgb";ColorType.GRADIENT="gradient";ColorType.NONE="none";function RGBColor(a,b,c,d){this.red=a;this.green=b;this.blue=c;this.alpha=d}function Direction(a,b){this.x=a;this.y=b}function GradientStop(a,b){this.offset=a;this.rgbColor=b}
function GradientColor(a,b,c,d){this.type=a;this.direction=b;this.numStops=c;this.arrGradientStop=d}function UIColor(a,b,c){this.type=a;this.antialiasLevel=b;this.color=c}function AppSkinInfo(a,b,c,d,f,e,g){this.baseFontFamily=a;this.baseFontSize=b;this.appBarBackgroundColor=c;this.panelBackgroundColor=d;this.appBarBackgroundColorSRGB=f;this.panelBackgroundColorSRGB=e;this.systemHighlightColor=g}
function HostEnvironment(a,b,c,d,f,e,g){this.appName=a;this.appVersion=b;this.appLocale=c;this.appUILocale=d;this.appId=f;this.isAppOffline=e;this.appSkinInfo=g}function CSInterface(){}CSInterface.THEME_COLOR_CHANGED_EVENT="com.adobe.csxs.events.ThemeColorChanged";CSInterface.prototype.hostEnvironment=JSON.parse(window.__adobe_cep__.getHostEnvironment());CSInterface.prototype.closeExtension=function(){window.__adobe_cep__.closeExtension()};
CSInterface.prototype.getSystemPath=function(a){a=decodeURI(window.__adobe_cep__.getSystemPath(a));var b=this.getOSInformation();0<=b.indexOf("Windows")?a=a.replace("file:///",""):0<=b.indexOf("Mac")&&(a=a.replace("file://",""));return a};CSInterface.prototype.evalScript=function(a,b){if(null==b||void 0==b)b=function(a){};window.__adobe_cep__.evalScript(a,b)};CSInterface.prototype.getApplicationID=function(){return this.hostEnvironment.appId};CSInterface.prototype.getHostCapabilities=function(){return JSON.parse(window.__adobe_cep__.getHostCapabilities())};
CSInterface.prototype.dispatchEvent=function(a){"object"==typeof a.data&&(a.data=JSON.stringify(a.data));window.__adobe_cep__.dispatchEvent(a)};CSInterface.prototype.addEventListener=function(a,b,c){window.__adobe_cep__.addEventListener(a,b,c)};CSInterface.prototype.removeEventListener=function(a,b,c){window.__adobe_cep__.removeEventListener(a,b,c)};CSInterface.prototype.requestOpenExtension=function(a,b){window.__adobe_cep__.requestOpenExtension(a,b)};
CSInterface.prototype.getExtensions=function(a){a=JSON.stringify(a);a=window.__adobe_cep__.getExtensions(a);return JSON.parse(a)};CSInterface.prototype.getNetworkPreferences=function(){var a=window.__adobe_cep__.getNetworkPreferences();return JSON.parse(a)};
CSInterface.prototype.initResourceBundle=function(){for(var a=JSON.parse(window.__adobe_cep__.initResourceBundle()),b=document.querySelectorAll("[data-locale]"),c=0;c<b.length;c++){var d=b[c],f=d.getAttribute("data-locale");if(f)for(var e in a)if(0==e.indexOf(f)){var g=a[e];if(-1==e.indexOf("."))d.innerHTML=g;else{var h=e.substring(e.indexOf(".")+1);d[h]=g}}}return a};CSInterface.prototype.dumpInstallationInfo=function(){return window.__adobe_cep__.dumpInstallationInfo()};
CSInterface.prototype.getOSInformation=function(){var a=navigator.userAgent;if("Win32"==navigator.platform||"Windows"==navigator.platform){var b="Windows platform";-1<a.indexOf("Windows NT 5.0")?b="Windows 2000":-1<a.indexOf("Windows NT 5.1")?b="Windows XP":-1<a.indexOf("Windows NT 5.2")?b="Windows Server 2003":-1<a.indexOf("Windows NT 6.0")?b="Windows Vista":-1<a.indexOf("Windows NT 6.1")?b="Windows 7":-1<a.indexOf("Windows NT 6.2")&&(b="Windows 8");var c="32-bit";-1<a.indexOf("WOW64")&&(c="64-bit");
return b+" "+c}return"MacIntel"==navigator.platform||"Macintosh"==navigator.platform?(b=new String,b=a,a=b.indexOf(")")-b.indexOf("Mac OS X"),a=b.substr(b.indexOf("Mac OS X"),a).replace("_","."),a=a.replace("_",".")):"Unknown Operation System"};
