(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wrapper"],{"0e04":function(e,t,n){"use strict";var a=n("e333"),r=n.n(a);r.a},1:function(e,t){},"1a77":function(e,t,n){e.exports=n.p+"img/icon-large.53f00b7d.png"},"1a98":function(e,t,n){"use strict";var a=n("db00"),r=n.n(a);r.a},2787:function(e,t,n){},"2d58":function(e,t,n){"use strict";var a=n("edc9"),r=n.n(a);r.a},"2f50":function(e,t,n){e.exports=n.p+"img/aquaria-menu.1a89fbab.svg"},"39b5":function(e,t,n){e.exports=n.p+"img/MS-01.f169151b.svg"},"3d0a":function(e,t,n){"use strict";var a=n("fe0e"),r=n.n(a);r.a},"47b0":function(e,t,n){"use strict";var a=n("d2c9"),r=n.n(a);r.a},"5ec7":function(e,t,n){},"5f14":function(e,t,n){"use strict";var a=n("d0b0"),r=n.n(a);r.a},7829:function(e,t,n){},"7fb8":function(e,t,n){},"8f89":function(e,t,n){"use strict";var a=n("7829"),r=n.n(a);r.a},"96fb":function(e,t,n){"use strict";var a=n("c3e0"),r=n.n(a);r.a},9966:function(e,t,n){"use strict";var a=n("2787"),r=n.n(a);r.a},"99c0":function(e,t,n){"use strict";var a=n("e8d9"),r=n.n(a);r.a},"9db5":function(e,t,n){e.exports=n.p+"img/FT-01.e4a6c439.svg"},ae0b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("Content"),n("Footer"),n("BadBrowser")],1)},r=[],o=(n("57aa"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"content"}},[n("Controls"),n("Center",{attrs:{id:"center"}})],1)}),i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"controls"}},[n("Logo"),n("AffordanceMode")],1)},c=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"logo-intro"}},[a("div",{attrs:{id:"logo"}},["mobile"===e.$mq||"tablet"===e.$mq||"laptop"===e.$mq?a("img",{attrs:{src:n("1a77"),alt:"Aquaria Logo"},on:{click:function(t){return e.showAbout()}}}):e._e(),e._m(0)]),"laptop"===e.$mq?a("p",{attrs:{id:"intro"}}):e._e()])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wait"}},[a("img",{attrs:{id:"gif",src:n("6679"),alt:"Loading",title:"Loading data..."}})])}],d=n("4360"),p=n("1157"),f=n.n(p),h={name:"Logo",methods:{showAbout:function(){0===document.getElementsByClassName("dimmer").length?(f()("body").append('<div class="dimmer"></div>'),f()("div.dimmer").on("click",(function(){f()("div#about_overlay, div#help_overlay").hide(),f()("div.dimmer").remove()}))):f()("div.dimmer").remove(),f()("div#about_overlay").slideToggle("slow")},showExplanations:function(){f()("div.dimmer").remove(),f()("div#about_overlay, div#help_overlay").hide(),f()("body, #gallery").css("margin-top","5em"),f()("div.container").first().hide(),f()("div.outer_container").first().append("<div id='tree_helper' class='chardinjs-helper-layer chardinjs-relative-position'></div>"),f()("#tree_helper").html('<img src="/images/tree-overlay.png" />'),f()("body").chardinJs("start")}},computed:{data:function(){return d["a"].state.message}}},m=h,v=(n("9966"),n("2877")),b=Object(v["a"])(m,l,u,!1,null,"37ab1ca4",null),g=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"affordance_mode"}},[n("h3",{attrs:{id:"gene_name"},on:{click:function(t){return e.showPanels()}}}),n("Title3D",{attrs:{id:"title3D"}}),n("SearchPanel",{attrs:{id:"searchByName"}}),n("Gallery",{attrs:{id:"gallery"}}),n("AboutUniprot",{attrs:{id:"uniprot"}})],1)},_=[],y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"searchByName"}},[n("h3",[e._v("Specify a Protein")]),n("form",{attrs:{id:"myform",name:"myform",ACTION:"#",method:"post"}},[n("p",{attrs:{id:"input1"}},[n("input",{staticClass:"search",attrs:{type:"text",id:"protein_syn_input",name:"protein_syn_input",placeholder:"Protein name/ID",autocomplete:"on","data-intro":"START HERE - specify a protein name (or UniProt identifier, or PDB ID), then press 'Enter'.","data-position":"right"}})]),n("p"),n("p",{attrs:{id:"input2"}},[n("input",{staticClass:"search",attrs:{type:"text",id:"organism_syn_input",name:"organism_syn_input",placeholder:"Organism",autocomplete:"on","data-intro":"Enter an organism name (human is default).","data-position":"right"}})])])])}],x={name:"SearchPanel",methods:{fillin:function(e){document.getElementById("protein_syn_input").value=e,setTimeout((function(){window.location.href="/P04637"}),300)}}},A=x,S=(n("e8c9"),Object(v["a"])(A,y,k,!1,null,null,null)),E=S.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"titleBar3Dview","data-intro":"3D view: initially shows PDB structure estimated to be most relevant for the specified protein. Hue is used to indicate secondary structure: yellow = strand, blue = helix, and green = coil. Lightness is used to indicate amino acid substitutions between the specified protein and PDB structure: slightly dark = conserved, very dark = non-conserved, white = insertions, and semi-transparent = other chains. <br><p>&nbsp;</p>\n<div class='bg_helpdoc'>\n<table id='helptable'><tr><td>\n<h2>Videos</h2>\n<p><a target='_blank' href='http://youtu.be/FAQ3yVGYSzY'>Quick introduction (6:16)</a></p>\n<p><a target='_blank' href='http://youtu.be/PIs1qyV_dIQ'>General overview (44:25)</a></p>\n<p><a target='_blank' href='http://youtu.be/XU_6TWM9ke8'>Leap Motion controller (2:18)</a></p>\n<h2>Installation</h2>\n<p><a target='_blank' href='https://docs.google.com/document/d/1waNOvw442Bwncx_FlMJAATH35aJxXpxu0iRcrZt8hrQ/pub'>On Mac OS</a></p>\n<p><a target='_blank' href='https://docs.google.com/document/d/1wZo-76MEPyoDj-9uAxHyz4y2f4_6ZR89uJcPBQvVUQc/pub'>On Windows</a></p>\n<h2>Documentation</h2>\n<p><a target='_blank' href='/help/Aquaria3D_QR_v1.pdf'>Mouse & keyboard controls</a></p>\n<p><a target='_blank' href='https://docs.google.com/document/d/1566Ub_-WAXMcuOA8gmb2-X9JmYfWuZarrgneNVaBQd8/pub'>Aquaria API</a></p>\n</td><td>\n<h2>Publication</h2>\n<p><a target='_blank' href='http://nature.com/articles/nmeth.3258'>O&rsquo;Donoghue et al., Nature Methods (2015)</a></p>\n<h2>Forum</h2>\n<p><a target='_blank' href='https://www.biostars.org/t/aquaria'>View forum</a></p>\n<p><a target='_blank' href='https://www.biostars.org/p/new/post/?tag_val=aquaria'>Ask a question</a></p>\n<h2>Bugs</h2>\n<p><a target='_blank' href='https://github.com/ODonoghueLab/Aquaria/issues'>View known bugs</a></p>\n<p><a target='_blank' href='https://github.com/ODonoghueLab/Aquaria/issues/new' >Report new bug</a></p>\n</td></tr></table>\n</div>\n","data-position":"bottom"}},[e._v("3D structure "),n("span",{staticClass:"explanation",attrs:{id:"structureviewerexplanation"}}),n("div",{staticClass:"rightHeaderBar"},[n("a",{attrs:{href:"javascript:;",title:"Toggle full window view","data-intro":"Full window","data-position":"bottom"}},[n("span",{staticClass:"roundButton",staticStyle:{display:"inline-block"},attrs:{id:"expander"}})]),n("a",{staticClass:"launchApplicationLink",attrs:{href:"#",target:"_blank",title:"Launch stand-alone Java application","data-intro":"Standalone application","data-position":"top"}},[n("span",{staticClass:"applauncher roundButton",staticStyle:{display:"inline-block"}})])])])}],R={name:"Title3D"},I=R,P=(n("3d0a"),Object(v["a"])(I,C,T,!1,null,"645e07b7",null)),V=P.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",attrs:{id:"about","data-intro":"UniProt summary of the specified protein's function.","data-position":"right"}},[e._m(0),n("div",{attrs:{id:"psyns"}},[n("p",[e._v("(example: "),n("a",{attrs:{href:"#"},on:{click:function(t){return e.fillin("p53")}}},[e._v("p53")]),e._v(" or "),n("a",{attrs:{href:"#"},on:{click:function(t){return e.fillin("P04637")}}},[e._v("P04637")]),e._v(")")])]),e._m(1),e._m(2),n("div",{attrs:{id:"uniProtDesc"}})])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v("About "),n("span",{staticClass:"explanation"},[e._v(" Uniprot ID")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"},attrs:{id:"gsyns"}},[n("p",[e._v("Genes: ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"osyns"}},[n("p")])}],U={name:"AboutUniprot"},B=U,q=(n("0e04"),Object(v["a"])(B,O,D,!1,null,"2590993c",null)),F=q.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"gallery"}},[n("div",{staticClass:"panel",attrs:{id:"description","data-intro":"PDB summary for the shown structure.","data-position":"bottom"}},[n("h3",[e._v("About "),n("span",{staticClass:"explanation"},[e._v(" PDB")])]),n("span",{staticClass:"content",attrs:{id:"description","data-intro":"PDB summary for the shown structure.","data-position":"bottom"}},[n("span",{staticStyle:{display:"none"},attrs:{id:"biounitDisplay"}},[n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitLeft",title:"Navigate to other assemblies"}},[e._v("<")]),e._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitType"}},[e._v("biounit")]),e._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitCount"}},[e._v("x/x")]),e._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitRight",title:"Navigate to other assemblies"}},[e._v(">")]),n("a",{attrs:{id:"helpBiounit",href:"https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies#Anchor-BioUnit",target:"_blank",title:"Go to PDB to view explanation of assembly"}},[n("span",{staticClass:"help roundButton"})])]),n("span",{staticStyle:{display:"none"},attrs:{id:"aboutPDBHider","data-intro":"PubMed Information about PDB structure","data-position":"left"}},[n("p",{attrs:{id:"classification"}},[e._v("Classification unavailable")]),n("h4",{attrs:{id:"reference_title"}},[e._v("Title unavailable")]),n("p",{attrs:{id:"reference_link"}},[n("a",{attrs:{href:"#"}},[e._v("PubMed Link unavailable")])]),n("p",{attrs:{id:"molecule",title:"View this structure in Aquaria","data-intro":"Information about currently focused PDB chain.","data-position":"left"}},[n("strong",[e._v("Molecule: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])])]),n("p",{attrs:{id:"organism"}},[n("strong",[e._v("Organism: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])]),n("p",{attrs:{id:"small_molecules"}},[n("strong",[e._v("Small molecules: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])]),n("p",{attrs:{id:"method"}},[n("strong",[e._v("Method: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])]),n("p",{attrs:{id:"resolution"}},[n("strong",[e._v("Resolution: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])]),n("p",{attrs:{id:"pdb"}},[n("strong",[e._v("Protein Data Bank: ")]),n("span",{staticClass:"text"},[e._v("unavailable")])])])])])}],M={name:"Gallery"},$=M,j=(n("1a98"),Object(v["a"])($,L,N,!1,null,"035c6330",null)),H=j.exports,Q={name:"AffordanceMode",components:{SearchPanel:E,AboutUniprot:F,Gallery:H,Title3D:V},mounted:function(){var e=f()("#affordance_mode").width()/2-f()("#searchByName").width()/2;e+="px",f()("#searchByName").css({"margin-left":e})},methods:{showPanels:function(){0===document.getElementsByClassName("dimmer").length?(f()("body").append('<div class="dimmer"></div>'),f()("#gene_name").hide(),f()("div.dimmer").on("click",(function(){f()("#searchByName, #title3D,#uniprot, #gallery").hide(),f()("div.dimmer").remove(),f()("#gene_name").show()}))):f()("div.dimmer").remove(),f()("#searchByName, #title3D").slideToggle("slow")}}},z=Q,J=(n("c519"),Object(v["a"])(z,w,_,!1,null,"31defa9f",null)),W=J.exports,X={name:"Controls",components:{Logo:g,AffordanceMode:W}},G=X,Z=(n("d390"),Object(v["a"])(G,s,c,!1,null,"62c0f173",null)),Y=Z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("XRButton"),n("div",{staticClass:"item",attrs:{id:"menu-btn"}},[n("a",{attrs:{href:"#Menu"}},[n("img",{attrs:{src:e.menu}})])]),n("Menu"),n("StructureViewer",{attrs:{id:"structureviewer"}}),n("AboutAquaria"),n("Tabs")],1)},ee=[],te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"aquariaWarning",attrs:{id:"updateJava3D"}},[n("p",[n("strong",[e._v("Aquaria needs to update your Java3D.")])]),n("form",{attrs:{action:"/downloads/AquariaSetupMac.dmg"}},[n("p",[e._v("1. "),n("button",{attrs:{id:"myButton",type:"submit"}},[e._v("Download Aquaria Setup")])])]),n("p",[e._v("2. After downloading, run AquariaSetupMac.dmg from your Downloads folder.")]),n("p",[e._v("3. Restart your browser once the setup is finished.")]),n("br"),n("p",[e._v("For more information see "),n("a",{attrs:{href:"https://docs.google.com/document/d/1waNOvw442Bwncx_FlMJAATH35aJxXpxu0iRcrZt8hrQ/pub",target:"_blank"}},[e._v("Aquaria help")]),e._v(".")])]),n("span",{staticClass:"threedcontent resizable",attrs:{id:"threeD"}},[n("span",{attrs:{id:"threeDSpan"}}),n("iframe",{attrs:{src:"/html/waiting.html",frameBorder:"0",name:"waitingFrame",id:"waitingFrame",scrolling:"no",allowtransparency:"true"}},[n("p",[e._v("Your browser does not support iframes.")])]),n("iframe",{staticStyle:{bottom:"20px",left:"20px"},attrs:{src:"/html/selectionText.html",frameBorder:"0",name:"selectionText",id:"selectionText",scrolling:"no",allowtransparency:"true"}},[n("p",[e._v("Your browser does not support iframes.")])])])])}],ae={name:"StructureViewer",mounted:function(){function e(){var e=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];if(!navigator.platform)return!1;while(e.length)if(navigator.platform===e.pop()||screen.width>=300&&screen.width<=600)return!0}var t=e();t&&(window.outerHeight-window.innerHeight>=80?(f()("#structureviewer").css({height:"88vh"}),window.scrollTo(0,0)):(f()("#structureviewer").css({height:"103vh"}),window.scrollTo(0,0)),window.addEventListener("resize",(function(){window.outerHeight-window.innerHeight>=80?(f()("#structureviewer").css({height:"88vh"}),window.scrollTo(0,0)):(f()("#structureviewer").css({height:"103vh"}),window.scrollTo(0,0))})))}},re=ae,oe=(n("99c0"),Object(v["a"])(re,te,ne,!1,null,"16c56d80",null)),ie=oe.exports,se=n("1ff0"),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},[n("div",{staticClass:"tab",attrs:{id:"Structures"}},[n("a",{attrs:{href:"#Structures"}},[e._v("Matching Structures "),n("span",{staticClass:"icon"},[n("img",{attrs:{src:e.MS}})])])]),n("MatchingStructures",{staticClass:"panel"}),n("div",{staticClass:"tab",attrs:{id:"Features"}},[n("a",{attrs:{href:"#Features"}},[n("span",{staticClass:"icon"},[n("img",{attrs:{src:e.FT}})]),e._v(" Features")])]),n("FeatureList",{staticClass:"panel"})],1)},le=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"content toggled",attrs:{id:"vis"}})},de=[],pe={name:"MatchingStructures"},fe=pe,he=(n("5f14"),Object(v["a"])(fe,ue,de,!1,null,null,null)),me=he.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toggled",attrs:{id:"featurelist"}})},be=[],ge={name:"FeatureList",methods:{}},we=ge,_e=(n("b165"),Object(v["a"])(we,ve,be,!1,null,null,null)),ye=_e.exports,ke={name:"Tabs",components:{MatchingStructures:me,FeatureList:ye},data:function(){return{MS:n("39b5"),FT:n("9db5")}},mounted:function(){document.querySelector(".icon").addEventListener("click",(function(){if(0===document.getElementsByClassName("dimmer").length){var e=document.createElement("div");e.className="dimmer",document.body.append(e),document.querySelector(".tabs > .panel").style.display="block",document.querySelector("div.dimmer").style.height="100%",document.querySelector("div.dimmer").style.zIndex="0",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelector(".tabs > .panel").style.display="none",document.querySelector("div.dimmer").remove()}))}else document.querySelector("div.dimmer").remove()}))}},xe=ke,Ae=(n("47b0"),Object(v["a"])(xe,ce,le,!1,null,null,null)),Se=Ae.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.dataReceived&&!e.isOpen?n("img",{staticClass:"xr-menu-button",attrs:{src:"/images/ar-button.png"},on:{click:function(t){return e.open()}}}):e._e(),e.isOpen?n("div",{staticClass:"column xr-modal"},[n("div",{staticClass:"column inner-modal"},[n("div",{staticClass:"row modal-header"},[n("div"),n("h1",[e._v("XR Options")]),n("button",{on:{click:function(t){return e.close()}}},[e._v("X")])]),n("div",{staticClass:"column modal-content"},[n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.downloadGltf()}}},[e._v("Download GLTF (.glb)")]),n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.downloadUsd()}}},[e._v("Download USD (.usdz)")]),e.sceneViewer?n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.openInSceneViewer()}}},[e._v("Open in Scene Viewer")]):e._e(),e.quickLook?n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.openInQuickLook()}}},[e._v("Open in AR Quick Look")]):e._e(),e.psvrEnabled?n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.psvrExport()}}},[e._v("Send to PSVR")]):e._e(),e.hevsPlatform?n("button",{staticClass:"xr-item default-button",attrs:{disabled:!!e.hevsAsset},on:{click:function(t){e.close(),e.hevsExport()}}},[e._v(e._s(e.hevsAsset?"Connected to HEVS":"Send to HEVS"))]):e._e(),e.advancedViewerEnabled?n("button",{staticClass:"xr-item default-button",on:{click:function(t){e.close(),e.openInAdvancedViewer()}}},[e._v("Open in Advanced Viewer")]):e._e(),n("canvas",{ref:"qr",staticClass:"xr-qr"})])])]):e._e()])},Ce=[],Te=(n("99af"),n("4160"),n("caad"),n("c975"),n("d81d"),n("b0c0"),n("a9e3"),n("25eb"),n("b680"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("3ca3"),n("841c"),n("1276"),n("498a"),n("4c53"),n("159b"),n("ddb0"),n("2b3d"),n("3835")),Re=(n("96cf"),n("1da1")),Ie=(n("7db0"),n("c740"),n("a15b"),n("fb6a"),n("5319"),n("bc3a")),Pe=n.n(Ie),Ve=Number.parseInt("45")||40,Oe={supportsSceneViewer:/(android)/i.test(navigator.userAgent),supportsQuickLook:document.createElement("a").relList.supports("ar"),supportsMixedReality:/(Windows NT 10.0)/i.test(navigator.userAgent)};function De(e){var t=window.AQUARIA.groupedFeatures.find((function(t){var n=Object(Te["a"])(t,1),a=n[0];return a===e})),n=Object(Te["a"])(t,2),a=n[1];return{featureSets:a,name:e}}function Ue(e,t,n){var a=0,r=Math.max(n,0);return a=Math.max(e.featureSets.findIndex((function(e){return e.Type===t.Type&&e.Category===t.Category})),0),[a,r]}function Be(e,t,n,a){var r=document.createElement("a");r.href=We(e,t,{format:n,featureTrackToBake:a}),r.download="".concat(e,".").concat(t,".").concat(n),r.click()}function qe(e,t,n){var a=We(e,t,{format:"usdz",featureTrackToBake:n});et(a)}function Fe(e,t,n){var a=We(e,t,{featureTrackToBake:n}),r="".concat(e,".").concat(t);Ke(a,r)}function Le(e,t,n){return Ne.apply(this,arguments)}function Ne(){return Ne=Object(Re["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=We(t,n,{format:"gltf"}),o={modelUri:r,fileName:"".concat(t,".").concat(n),collection:a},e.next=4,Pe.a.post("".concat("https://odonoghuelab.org:8011","/xr/sendToPSVR"),o);case 4:if(i=e.sent,!(i.status>=400)){e.next=9;break}throw new Error(i.data);case 9:return e.abrupt("return",i.data.result);case 10:case"end":return e.stop()}}),e)}))),Ne.apply(this,arguments)}function Me(e,t,n){return $e.apply(this,arguments)}function $e(){return $e=Object(Re["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=We(n,a,{rescale:!1}),o={hevsPlatform:t,modelUri:r,name:"".concat(n,".").concat(a)},e.next=4,Pe.a.post("".concat("https://odonoghuelab.org:8011","/xr/sendToHEVS"),o);case 4:if(i=e.sent,!(i.status>=400)){e.next=9;break}throw new Error(i.data);case 9:return e.abrupt("return",i.data.assetId);case 10:case"end":return e.stop()}}),e)}))),$e.apply(this,arguments)}function je(e,t,n,a,r,o){return He.apply(this,arguments)}function He(){return He=Object(Re["a"])(regeneratorRuntime.mark((function e(t,n,a,r,o,i){var s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return s={hevsPlatform:t,assetId:n,collection:a,featureSetIndex:r,trackName:o,skipUpload:i},e.next=4,Pe.a.post("".concat("https://odonoghuelab.org:8011","/xr/setHEVSFeature"),s);case 4:if(c=e.sent,!(c.status>=400)){e.next=7;break}throw new Error(c.data);case 7:e.next=15;break;case 9:return l={hevsPlatform:t,assetId:n},e.next=12,Pe.a.post("".concat("https://odonoghuelab.org:8011","/xr/clearHEVSFeature"),l);case 12:if(u=e.sent,!(u.status>=400)){e.next=15;break}throw new Error(u.data);case 15:case"end":return e.stop()}}),e)}))),He.apply(this,arguments)}function Qe(e,t,n,a){return ze.apply(this,arguments)}function ze(){return ze=Object(Re["a"])(regeneratorRuntime.mark((function e(t,n,a,r){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={hevsPlatform:t,assetId:n,pose:a,view:r},e.next=3,Pe.a.post("".concat("https://odonoghuelab.org:8011","/xr/setHEVSView"),o);case 3:if(i=e.sent,!(i.status>=400)){e.next=6;break}throw new Error(i.data);case 6:case"end":return e.stop()}}),e)}))),ze.apply(this,arguments)}function Je(e,t){var n=document.createElement("a");n.href="".concat("https://ie.csiro.au/apps/aquaria-export-preview","?protein=").concat(e,"&pdb=").concat(t),n.target="_",n.click()}function We(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={format:"glb",featureTrackToBake:null,rescale:!0},r=Object.assign(a,n),o="".concat("https://ie.csiro.au/services/aquaria-export","/").concat(e,"/").concat(t,".").concat(r.format),i=new URLSearchParams;if(!1===n.rescale&&i.append("rescale","false"),n.featureTrackToBake){var s=n.featureTrackToBake.map((function(e){var t="".concat(e.color.replace("#",""),"-").concat(e.start);return e.start!==e.end&&(t="".concat(t,"-").concat(e.end)),t}));i.append("f",s.join(","))}var c=i.toString();return c?"".concat(o,"?").concat(i):o}function Xe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=n&&n.length>Ve?n.slice(0,Ve):n,r=We(e,t,{format:"$FORMAT",featureTrackToBake:a});return r}function Ge(e){Oe.supportsQuickLook?et(e.replace("$FORMAT","usdz")):Oe.supportsSceneViewer&&Ke(e.replace("$FORMAT","glb"),"Aquaria Auto-XR")}function Ze(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=window.AQUARIA.panel3d.embededJolecule.soupWidget.camera.position.clone(),n=window.AQUARIA.panel3d.embededJolecule.soupWidget.camera.quaternion.clone();return e&&(t.x=-t.x,n.set(n.z,n.w,n.x,n.y)),{position:[t.x,t.y,t.z],orientation:[n.x,n.y,n.z,n.w]}}function Ye(){return window.AQUARIA.panel3d.embededJolecule.soupView}function Ke(e,t){var n="com.google.android.googlequicksearchbox",a="android.intent.action.VIEW",r="ar_preferred",o="https://developers.google.com/ar",i="intent://arvr.google.com/scene-viewer/1.0?file=".concat(e,"&mode=").concat(r,"&title=").concat(t,"#Intent;scheme=https;package=").concat(n,";action=").concat(a,";S.browser_fallback_url=").concat(o,";end;"),s=document.createElement("a");s.href=i,s.click()}function et(e){var t=document.createElement("a");t.href=e,t.rel="ar",t.appendChild(document.createElement("img")),t.click()}var tt=n("d055"),nt=n.n(tt),at=n("f7fe"),rt=n.n(at),ot=n("5a89"),it=",",st=2,ct=new URLSearchParams(location.search),lt=Number.parseInt(ct.has("HEVS_UPDATE_INTERVAL")?ct.get("HEVS_UPDATE_INTERVAL"):"1000")||1e3;if(ct.has("xr")){var ut=ct.get("xr");ct.delete("xr"),history.replaceState(null,"","".concat(location.pathname,"?").concat(ct.toString())),Ge(ut)}var dt={name:"XRButton",components:{},data:function(){return{dataReceived:!1,pdbId:"none",proteinId:"none",quickLook:Oe.supportsQuickLook,sceneViewer:Oe.supportsSceneViewer,featuresActive:!1,featureSet:null,featureTrack:-1,featureCollection:null,isOpen:!1,view:null,pose:null,hevsPlatform:ct.get("HEVS"),hevsAsset:null,hevsUploadedCollections:[],psvrEnabled:!!ct.get("PSVR"),advancedViewerEnabled:!!ct.get("dev")}},mounted:function(){var e,t=this;this.hevsViewUpdateDebounced=rt()((function(){return t.hevsViewUpdate()}),lt,{leading:!0,maxWait:lt});var n=function(n,r,o){e(n,r,o),t.dataReceived=!0,t.featuresActive=!1,t.featureSet=null,t.featureTrack=-1,t.featureCollection=null,t.hevsUploadedCollections=[],t.proteinId=n,t.pdbId=r,a()};window.AQUARIA.chainSelected!==n&&(e=window.AQUARIA.chainSelected,window.AQUARIA.chainSelected=n),window.AQUARIA.onFeatureChange=function(e,n){e?(t.featuresActive=!0,t.featureSet=e,t.featureTrack=n,t.featureCollection=De(e.Server)):(t.featuresActive=!1,t.featureSet=null,t.featureTrack=-1,t.featureCollection=null),t.hevsPlatform&&t.hevsAsset&&t.hevsFeatureUpdate()},function(){var e=function e(){requestAnimationFrame((function(){return e()}));try{var n=Ye(),a=Ze();t.pose||(t.pose=a,t.view=n);for(var r=!1,o=0;o<3;o++)if(a.position[o]!==t.pose.position[o]){r=!0;break}for(var i=0;i<4;i++)if(a.orientation[i]!==t.pose.orientation[i]){r=!0;break}r&&(t.pose=a,t.view=n)}catch(s){}};e()}();var a=function(){if(""!==window.location.search||""!==window.location.hash){console.log("loading view");var e=o();i(e.selected,e.pitch,e.yaw,e.roll,e.zoom)}};function r(){for(var e=window.AQUARIA.panel3d.embededJolecule.soupView,t=window.AQUARIA.panel3d.embededJolecule.soup,n={},a=t.getResidueProxy(),r=0;r<t.getResidueCount();r++)a.load(r),a.selected&&(n[a.chain]||(n[a.chain]=[]),n[a.chain].push(a.resNum));var o="#";for(var i in Object.keys(n).length>0&&(o="#"),n){o.length>1&&(o+=it),o+=i;var s=n[i].sort(),c=0;while(c<s.length){c>0&&(o+=it),o+=s[c];var l=1;while(c+l<s.length&&s[c+l]-s[c]===l)l++;l>1&&(o+="-"+s[c+l-1]),c+=l}}var u=e.currentView.cameraParams.position.clone().sub(e.currentView.cameraParams.focus).normalize(),d=e.currentView.cameraParams.up,p=d.clone().cross(u),f=u.clone().cross(p),h=new ot["c"];h.set(p.x,f.x,u.x,0,p.y,f.y,u.y,0,p.z,f.z,u.z,0,0,0,0,1);var m=(new ot["a"]).setFromRotationMatrix(h,"YXZ"),v=e.currentView.cameraParams.zoom/10,b="+";v<0&&(b="-");var g="".concat(o,"?(").concat(ot["b"].radToDeg(m.y).toFixed(st),",").concat(ot["b"].radToDeg(m.x).toFixed(st),",").concat(ot["b"].radToDeg(m.z).toFixed(st),")&").concat(b).concat(v.toFixed(st));window.history.replaceState(null,null,window.location.origin+window.location.pathname+window.location.search+g)}function o(){var e=decodeURIComponent(window.location.href.substr(window.location.origin.length+window.location.pathname.length+window.location.search.length));if(0===e.length)return null;var t,n=e.indexOf("?"),a={},r="A",o=0,i=0,s=0;if("#"===e[0]){var c=0,l=e.substring(1,n);if(l.length>0){var u=l.split(",");for(c=0;c<u.length;c++){var d=u[c].split("-"),p=0;while(p<d[0].length){if(!isNaN(Number(d[0][p])))break;p++}p>0&&(r=d[0].substring(0,p),a[r]||(a[r]=[]),d[0]=d[0].substr(p));var f=Number(d[0].trim()),h=d.length>1?Number(d[1].trim()):NaN;if(isNaN(f))break;for(isNaN(h)&&(h=f);f<=h;f++)a[r].push(f)}}}if(-1!==n)for(var m=e.substr(n+1).split("&"),v=0;v<m.length;v++){var b=m[v].trim();if("("===b[0]){var g=b.substring(1,b.length-1),w=g.split(",");o=Number(w[0])||0,i=Number(w[1])||0,s=Number(w[2])||0}else"+"!==b[0]&&"-"!==b[0]||(t=parseFloat(b)||void 0)}return{selected:a,yaw:o,pitch:i,roll:s,zoom:t}}function i(e,t,n,a,r){var o=window.AQUARIA.panel3d.embededJolecule.soupView,i=window.AQUARIA.panel3d.embededJolecule.controller,s=[],c=function(t){s=s.concat(e[t].map((function(e){return window.AQUARIA.panel3d.embededJolecule.soup.findFirstResidue(t,e)})))};for(var l in e)c(l);i.clearSelectedResidues(),s.forEach((function(e){i.selectResidue(e.iRes,!0)}));var u=o.getZoomedOutViewOfSelection();r?r*=10:r=u.cameraParams.zoom;var d=u.cameraParams.focus,p=new ot["a"](ot["b"].degToRad(t),ot["b"].degToRad(n),ot["b"].degToRad(a),"YXZ"),f=d.clone().add(new ot["d"](0,0,r).applyEuler(p)),h=new ot["d"](0,1,0).applyEuler(p),m=window.AQUARIA.panel3d.embededJolecule.soupView,v=m.currentView.clone();v.cameraParams.focus.set(d.x,d.y,d.z),v.cameraParams.up.set(h.x,h.y,h.z),v.cameraParams.position=f,v.cameraParams.zoom=r,m.setTargetView(v)}window.addEventListener("keyup",(function(e){if("Digit1"===e.code)a();else if("Digit2"===e.code)i({A:[114,115,116,125]},0,0,0,8);else if("Digit3"===e.code){for(var t=window.AQUARIA.panel3d.embededJolecule.soup,n=[],r=t.getResidueProxy(),o=0;o<t.getResidueCount();o++)r.load(o),r.selected&&n.push(r.resNum);console.log("resNums: ",n)}})),window.addEventListener("mouseup",(function(){r()}))},computed:{currentFeatureTrack:function(){return this.featuresActive?this.featureSet.Tracks[this.featureTrack]:null}},watch:{pose:function(e){this.hevsAsset&&this.hevsViewUpdateDebounced()}},methods:{open:function(){var e=this;this.isOpen=!0;var t=Xe(this.proteinId,this.pdbId,this.currentFeatureTrack),n=location.search?"".concat(location.href,"&xr=").concat(t):"".concat(location.href,"?xr=").concat(t);this.$nextTick((function(){return nt.a.toCanvas(e.$refs.qr,n)}))},close:function(){this.isOpen=!1},downloadGltf:function(){Be(this.proteinId,this.pdbId,"glb",this.currentFeatureTrack,"".concat(this.proteinId).concat(this.pdbId,".glb"))},downloadUsd:function(){Be(this.proteinId,this.pdbId,"usdz",this.currentFeatureTrack,"".concat(this.proteinId).concat(this.pdbId,".usdz"))},openInQuickLook:function(){qe(this.proteinId,this.pdbId,this.currentFeatureTrack)},openInSceneViewer:function(){Fe(this.proteinId,this.pdbId,this.currentFeatureTrack)},psvrExport:function(){var e=Object(Re["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.featureCollection||De(localStorage.getItem("featureOrder").split(",")[0]),console.log("[PSVR] Exporting Asset w/ ".concat(this.featureCollection?"ACTIVE":"DEFAULT/FIRST"," collection [").concat(t.name,"]")),e.next=5,Le(this.proteinId,this.pdbId,t);case 5:n=e.sent,console.log("[PSVR] Transfer successful, PSVR Response: [".concat(n,"]")),e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](0),console.warn("[PSVR] Transfer error"),console.dir(e.t0),alert("Send to PSVR failed (".concat(e.t0.message||"Unknown error",")"));case 14:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),hevsExport:function(){var e=Object(Re["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("[HEVS] Exporting Asset"),e.next=4,Me(this.hevsPlatform,this.proteinId,this.pdbId);case 4:this.hevsAsset=e.sent,console.log("[HEVS] Transfer successful, HEVS Asset ID: [".concat(this.hevsAsset,"]")),this.featuresActive&&this.hevsFeatureUpdate(),this.hevsViewUpdate(),e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),console.warn("[HEVS] Transfer error"),console.dir(e.t0),alert("Send to HEVS failed (".concat(e.t0.message||"Unknown error",")"));case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),hevsFeatureUpdate:function(){var e=Object(Re["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.featuresActive){e.next=10;break}return t=Ue(this.featureCollection,this.featureSet,this.featureTrack),n=Object(Te["a"])(t,2),a=n[0],r=n[1],o=this.hevsUploadedCollections.includes(this.featureCollection.name),o||this.hevsUploadedCollections.push(this.featureCollection.name),console.log("[HEVS] Updating Feature Info [".concat(this.featureCollection.name," | Set ").concat(a," | Track ").concat(r,"]").concat(o?" (SKIPPING DATA UPLOAD)":"")),e.next=8,je(this.hevsPlatform,this.hevsAsset,this.featureCollection,a,r,o);case 8:e.next=13;break;case 10:return console.log("[HEVS] Clearing Feature Info"),e.next=13,je(this.hevsPlatform,this.hevsAsset,null,null,null);case 13:console.log("[HEVS] Feature update OK"),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](0),console.warn("[HEVS] Feature update error"),console.dir(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,16]])})));function t(){return e.apply(this,arguments)}return t}(),hevsViewUpdate:function(){var e=Object(Re["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("[HEVS] Updating View [".concat(this.pose.position[0],", ").concat(this.pose.position[1],", ").concat(this.pose.position[2],"], ").concat(this.pose.orientation[0],", ").concat(this.pose.orientation[1],", ").concat(this.pose.orientation[2],", ").concat(this.pose.orientation[3],"]")),e.next=4,Qe(this.hevsPlatform,this.hevsAsset,this.pose,this.view);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),console.warn("[HEVS] View update error"),console.dir(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),openInAdvancedViewer:function(){Je(this.proteinId,this.pdbId)}}},pt=dt,ft=pt,ht=(n("d418"),Object(v["a"])(ft,Ee,Ce,!1,null,"20ea3f23",null)),mt=ht.exports,vt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},bt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel floating",attrs:{id:"Menu"}},[n("a",{staticClass:"close",attrs:{href:"#"}}),n("div",[n("a",{staticClass:"lnk",attrs:{id:"print",href:"#"}},[e._v("Print")])]),n("div",[n("a",{staticClass:"lnk",attrs:{href:"#Menu"}},[e._v("Sidechains")]),n("a",{staticClass:"lnk",attrs:{href:"#Menu"}},[e._v("Neighbors")]),n("a",{staticClass:"lnk",attrs:{href:"#Menu"}},[e._v("Ligands")]),n("a",{staticClass:"lnk",attrs:{href:"#Menu"}},[e._v("Water")])]),n("select",[n("option",{attrs:{selected:""}},[e._v("Ribbon")]),n("option",[e._v("Sphere")]),n("option",[e._v("Backbone")])])])}],gt={name:"Menu",mounted:function(){document.querySelector("#print").addEventListener("click",(function(e){e.preventDefault(),window.AQUARIA.screenshot()}))}},wt=gt,_t=(n("96fb"),Object(v["a"])(wt,vt,bt,!1,null,"60af0ea2",null)),yt=_t.exports,kt={name:"Center",components:{StructureViewer:ie,AboutAquaria:se["a"],Tabs:Se,XRButton:mt,Menu:yt},data:function(){return{menu:n("2f50")}},mounted:function(){var e=window.innerWidth-75;f()("#structurematches").css({width:e}),f()("#threeDSpan-inner-sequence-widget-inner canvas").on("click",(function(){f()("#structurematches").show()}))}},xt=kt,At=(n("2d58"),Object(v["a"])(xt,K,ee,!1,null,"183f52e6",null)),St=At.exports,Et={name:"Content",components:{Controls:Y,Center:St}},Ct=Et,Tt=(n("b318"),Object(v["a"])(Ct,o,i,!1,null,null,null)),Rt=Tt.exports,It=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}})},Pt=[],Vt={name:"Footer"},Ot=Vt,Dt=Object(v["a"])(Ot,It,Pt,!1,null,null,null),Ut=Dt.exports,Bt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},qt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bad_browser"}},[n("p",{attrs:{id:"starter"}},[n("img",{staticStyle:{display:"none"},attrs:{src:"/images/logo-large.png",width:"605",height:"167",alt:"Aquaria"}})]),n("h2",{staticStyle:{color:"crimson",display:"none"}},[e._v("Sorry, but Aquaria will not work with your browser!")])])}],Ft={name:"BadBrowser"},Lt=Ft,Nt=Object(v["a"])(Lt,Bt,qt,!1,null,null,null),Mt=Nt.exports,$t={name:"Wrapper",components:{Content:Rt,BadBrowser:Mt,Footer:Ut},mounted:function(){document.querySelector("#header").remove(),setTimeout((function(){document.querySelector(".matrixLoading")&&(document.querySelector(".matrixLoading").style.visibility="hidden",document.querySelector(".matrixLoading").style.display="none")}),1500)}},jt=$t,Ht=(n("8f89"),Object(v["a"])(jt,a,r,!1,null,null,null));t["default"]=Ht.exports},b165:function(e,t,n){"use strict";var a=n("e2e4"),r=n.n(a);r.a},b318:function(e,t,n){"use strict";var a=n("d1f0"),r=n.n(a);r.a},be68:function(e,t,n){},c3e0:function(e,t,n){},c519:function(e,t,n){"use strict";var a=n("7fb8"),r=n.n(a);r.a},d0b0:function(e,t,n){},d1f0:function(e,t,n){},d2c9:function(e,t,n){},d390:function(e,t,n){"use strict";var a=n("be68"),r=n.n(a);r.a},d418:function(e,t,n){"use strict";var a=n("5ec7"),r=n.n(a);r.a},d9a5:function(e,t,n){},db00:function(e,t,n){},e2e4:function(e,t,n){},e333:function(e,t,n){},e8c9:function(e,t,n){"use strict";var a=n("d9a5"),r=n.n(a);r.a},e8d9:function(e,t,n){},edc9:function(e,t,n){},fe0e:function(e,t,n){}}]);
//# sourceMappingURL=wrapper.4828216b.js.map