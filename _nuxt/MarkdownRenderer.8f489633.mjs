import{a as Z,p as J,t as G,h as T,T as Q,r as nn,q as ln}from"./entry.b2d48240.mjs";function w(n=""){return n.toUpperCase()===n}const en=["-","_","/","."];function on(n,e=en){const o=[];let t="",i=w(n[0]),r=e.includes(n[0]);for(const a of n.split("")){const p=e.includes(a);p?(o.push(t),t="",i=!1,r=!0):!r&&!i&&w(a)?(o.push(t),t=a,i=!0,r=!1):(t+=a,i=w(a),r=p)}return t&&o.push(t),o}function tn(n){return n?n[0].toUpperCase()+n.substr(1):""}function rn(n=""){return(Array.isArray(n)?n:on(n)).map(e=>tn(e)).join("")}class k{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}k.prototype.property={};k.prototype.normal={};k.prototype.space=null;function E(n,e){const o={},t={};let i=-1;for(;++i<n.length;)Object.assign(o,n[i].property),Object.assign(t,n[i].normal);return new k(o,t,e)}function D(n){return n.toLowerCase()}class h{constructor(e,o){this.property=e,this.attribute=o}}h.prototype.space=null;h.prototype.boolean=!1;h.prototype.booleanish=!1;h.prototype.overloadedBoolean=!1;h.prototype.number=!1;h.prototype.commaSeparated=!1;h.prototype.spaceSeparated=!1;h.prototype.commaOrSpaceSeparated=!1;h.prototype.mustUseProperty=!1;h.prototype.defined=!1;let an=0;const u=m(),c=m(),U=m(),l=m(),s=m(),y=m(),d=m();function m(){return 2**++an}const L=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:c,overloadedBoolean:U,number:l,spaceSeparated:s,commaSeparated:y,commaOrSpaceSeparated:d},Symbol.toStringTag,{value:"Module"})),O=Object.keys(L);class M extends h{constructor(e,o,t,i){let r=-1;if(super(e,o),R(this,"space",i),typeof t=="number")for(;++r<O.length;){const a=O[r];R(this,O[r],(t&L[a])===L[a])}}}M.prototype.defined=!0;function R(n,e,o){o&&(n[e]=o)}const un={}.hasOwnProperty;function v(n){const e={},o={};let t;for(t in n.properties)if(un.call(n.properties,t)){const i=n.properties[t],r=new M(t,n.transform(n.attributes||{},t),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(r.mustUseProperty=!0),e[t]=r,o[D(t)]=t,o[D(r.attribute)]=t}return new k(e,o,n.space)}const z=v({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),B=v({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function I(n,e){return e in n?n[e]:e}function j(n,e){return I(n,e.toLowerCase())}const F=v({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:j,properties:{xmlns:null,xmlnsXLink:null}}),H=v({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:c,ariaAutoComplete:null,ariaBusy:c,ariaChecked:c,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:s,ariaCurrent:null,ariaDescribedBy:s,ariaDetails:null,ariaDisabled:c,ariaDropEffect:s,ariaErrorMessage:null,ariaExpanded:c,ariaFlowTo:s,ariaGrabbed:c,ariaHasPopup:null,ariaHidden:c,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:s,ariaLevel:l,ariaLive:null,ariaModal:c,ariaMultiLine:c,ariaMultiSelectable:c,ariaOrientation:null,ariaOwns:s,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:c,ariaReadOnly:c,ariaRelevant:null,ariaRequired:c,ariaRoleDescription:s,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:c,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),sn=v({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:j,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:y,acceptCharset:s,accessKey:s,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:s,autoFocus:u,autoPlay:u,capture:u,charSet:null,checked:u,cite:null,className:s,cols:l,colSpan:null,content:null,contentEditable:c,controls:u,controlsList:s,coords:l|y,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:U,draggable:c,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:s,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:s,httpEquiv:s,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:s,itemRef:s,itemScope:u,itemType:s,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:s,placeholder:null,playsInline:u,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:s,required:u,reversed:u,rows:l,rowSpan:l,sandbox:s,scope:null,scoped:u,seamless:u,selected:u,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:c,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:c,width:l,wrap:null,align:null,aLink:null,archive:s,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:c,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),cn=v({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:I,properties:{about:d,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:s,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:y,g2:y,glyphName:y,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:d,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:s,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:d,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:d,rev:d,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:d,requiredFeatures:d,requiredFonts:d,requiredFormats:d,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:d,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:d,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:d,to:null,transform:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),pn=/^data[-\w.:]+$/i,A=/-[a-z]/g,dn=/[A-Z]/g;function gn(n,e){const o=D(e);let t=e,i=h;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&pn.test(e)){if(e.charAt(4)==="-"){const r=e.slice(5).replace(A,fn);t="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=e.slice(4);if(!A.test(r)){let a=r.replace(dn,hn);a.charAt(0)!=="-"&&(a="-"+a),e="data"+a}}i=M}return new i(t,e)}function hn(n){return"-"+n.toLowerCase()}function fn(n){return n.charAt(1).toUpperCase()}const mn=E([B,z,F,H,sn],"html");E([B,z,F,H,cn],"svg");function yn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _={exports:{}};const vn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];(function(n){n.exports=vn})(_);const bn=yn(_.exports),b="default",V=/^@|^v-on:/,q=/^:|^v-bind:/,N=/^v-model/,kn=["select","textarea","input"],Mn=Z({name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(n){const{content:{tags:e={}}}=J().public,{tag:o,value:t,...i}=G(n);return{tags:e,contentProps:i}},render(n){var S;const{tags:e,tag:o,value:t,contentProps:i}=n;if(!t)return null;let r=t.body||t;this.excerpt&&t.excerpt&&(r=t.excerpt);const a={...t,tags:{...e,...(t==null?void 0:t.tags)||{}}};let p=a.component||o;typeof a.component=="object"&&(p=a.component.name),p=W(p);const f=(r.children||[]).map(P=>C(P,T,a));return T(p,{...i,...(S=a.component)==null?void 0:S.props,...this.$attrs},{default:X(f)})}});function C(n,e,o){var a;const t=n.tag,i=typeof((a=n.props)==null?void 0:a.__ignoreMap)>"u"&&o.tags[n.tag]||n.tag;if(n.type==="text")return e(Q,n.value);const r=W(i);return typeof r=="object"&&(r.tag=t),e(r,Cn(n,o),Sn(n,e,o))}function Sn(n,e,o){const i=(n.children||[]).reduce((r,a)=>{if(!Y(a))return r[b].push(C(a,e,o)),r;if(Dn(a))return r[b].push(...a.children.map(f=>C(f,e,o))),r;const p=K(a);return r[p]=a.children.map(f=>C(f,e,o)),r},{[b]:[]});return Object.fromEntries(Object.entries(i).map(([r,a])=>[r,X(a)]))}function Cn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(i,r){if(r==="__ignoreMap")return i;const a=t[r];if(N.test(r)&&!kn.includes(o))return xn(r,a,i,e);if(r==="v-bind")return Pn(r,a,i,e);if(V.test(r))return wn(r,a,i,e);if(q.test(r))return On(r,a,i,e);const{attribute:p}=gn(mn,r);return Array.isArray(a)&&a.every(f=>typeof f=="string")?(i[p]=a.join(" "),i):(i[p]=a,i)},{})}function xn(n,e,o,t){const i=g=>+g,r=g=>g.trim(),a=g=>g,p=n.replace(N,"").split(".").filter(g=>g).reduce((g,$)=>(g[$]=!0,g),{}),f="value",S=p.lazy?"change":"input",P=p.number?i:p.trim?r:a;return o[f]=x(e,t),o.on=o.on||{},o.on[S]=g=>t[e]=P(g),o}function Pn(n,e,o,t){const i=x(e,t);return o=Object.assign(o,i),o}function wn(n,e,o,t){return n=n.replace(V,""),o.on=o.on||{},o.on[n]=()=>x(e,t),o}function On(n,e,o,t){return n=n.replace(q,""),o[n]=x(e,t),o}const W=n=>{if(!bn.includes(n)){const e=nn(rn(n),!1);if(typeof e=="object")return e}return n};function x(n,e){const o=n.split(".").reduce((t,i)=>typeof t=="object"?t[i]:void 0,e);return typeof o>"u"?ln(n):o}function K(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||b}function X(n){return n.length?()=>n:void 0}function Dn(n){return Y(n)&&K(n)===b}function Y(n){return n.tag==="template"}export{Mn as default};
