(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{373:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"converting-from-another-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converting-from-another-client"}},[t._v("#")]),t._v(" Converting from another Client?")]),t._v(" "),s("p",[t._v("Well, you're not the only user who has done this.")]),t._v(" "),s("p",[t._v("alt:V has a lot to offer but there are some considerations when using this client.")]),t._v(" "),s("ul",[s("li",[t._v("Server code can only be in JS, C#, or LUA.")]),t._v(" "),s("li",[t._v("Client code can only be in JS.")]),t._v(" "),s("li",[t._v("A module is being created to allow "),s("strong",[t._v("any")]),t._v(" language with WASM.")]),t._v(" "),s("li",[t._v("Natives are based on Rockstar's Actual Native Names")])]),t._v(" "),s("p",[t._v("Those are the only major things to consider about alt:V.")]),t._v(" "),s("p",[t._v("Otherwise here's some other important aspects.")]),t._v(" "),s("ul",[s("li",[t._v("Yes alt:V supports clothing addons.")]),t._v(" "),s("li",[t._v("Yes alt:V supports most modifications.")]),t._v(" "),s("li",[t._v("Yes alt:V supports MLOs.")]),t._v(" "),s("li",[t._v("Yes alt:V supports custom maps.")])]),t._v(" "),s("p",[t._v("Here are some things alt:V does not have.")]),t._v(" "),s("ul",[s("li",[t._v("No LUA on client-side")]),t._v(" "),s("li",[t._v("No ESX")]),t._v(" "),s("li",[t._v("No ELS (Dex++ is working on this)")]),t._v(" "),s("li",[t._v("No censorship if you poke the wrong person.")]),t._v(" "),s("li",[t._v("No we do not support .asi, .dll, or ENB files.")]),t._v(" "),s("li",[t._v("No we do not support ScriptHookV.")])]),t._v(" "),s("br"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"fivem-to-alt-v"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fivem-to-alt-v"}},[t._v("#")]),t._v(" FiveM to alt:V")]),t._v(" "),s("p",[t._v("Here are some key differences between alt:V and FiveM.")]),t._v(" "),s("h3",{attrs:{id:"server-side-and-client-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-and-client-side"}},[t._v("#")]),t._v(" Server Side and Client Side")]),t._v(" "),s("p",[t._v("Yes, we actually have a server side and a client side. Which means that injections are not a very common issue for alt:V. Let alone client manipulation. However, nothing is safe from an expert programmer.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=z-knlYI_QZM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here is a video covering serverside vs clientside."),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"local-player"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player"}},[t._v("#")]),t._v(" Local Player?")]),t._v(" "),s("p",[t._v("We don't use "),s("code",[t._v("local playerPed = PlayerPedId()")]),t._v(" to get our local player.")]),t._v(" "),s("p",[t._v("We use "),s("code",[t._v("alt.Player.local.scriptID")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"local-player-vehicle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player-vehicle"}},[t._v("#")]),t._v(" Local Player Vehicle?")]),t._v(" "),s("p",[t._v("We don't use natives when we don't have to.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vehicle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"threads"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threads"}},[t._v("#")]),t._v(" Threads?")]),t._v(" "),s("p",[t._v("We use intervals and timeouts to generate threads.")]),t._v(" "),s("p",[t._v("We also have access to "),s("code",[t._v("alt.everyTick")]),t._v(" which is basically an interval at 0ms.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomethingElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called at every 5 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called after 10 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Your console will die with this every tick")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events?")]),t._v(" "),s("p",[t._v("Events come in all shapes and sizes. Checkout "),s("a",{attrs:{href:"../api/events"}},[t._v("the API:Events section.")])]),t._v(" "),s("h3",{attrs:{id:"natives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#natives"}},[t._v("#")]),t._v(" Natives?")]),t._v(" "),s("p",[t._v("Natives are imported and only accessible from client-side.")]),t._v(" "),s("p",[t._v("You can visit "),s("a",{attrs:{href:"https://natives.altv.mp",target:"_blank",rel:"noopener noreferrer"}},[t._v("alt:V Native Database"),s("OutboundLink")],1),t._v(" to better understand what is available.")]),t._v(" "),s("h3",{attrs:{id:"loading-screens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-screens"}},[t._v("#")]),t._v(" Loading Screens?")]),t._v(" "),s("p",[t._v("We do not currently support loading screens of any sort. We feel it is an unnecessary feature for multiplayer.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"rage-mp-to-alt-v"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rage-mp-to-alt-v"}},[t._v("#")]),t._v(" RAGE:MP to alt:V")]),t._v(" "),s("p",[t._v("Here are some key differences between alt:V and RAGE:MP.")]),t._v(" "),s("h3",{attrs:{id:"local-player-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-player-2"}},[t._v("#")]),t._v(" Local Player?")]),t._v(" "),s("p",[t._v("We don't use "),s("code",[t._v("local playerPed = PlayerPedId()")]),t._v(" to get our local player.")]),t._v(" "),s("p",[t._v("We use "),s("code",[t._v("alt.Player.local.scriptID")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"mp-events-add-render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mp-events-add-render"}},[t._v("#")]),t._v(" mp.events.add('render')")]),t._v(" "),s("p",[t._v("We use intervals and timeouts to generate threads.")]),t._v(" "),s("p",[t._v("We also have access to "),s("code",[t._v("alt.everyTick")]),t._v(" which is basically an interval at 0ms.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myInterval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doSomethingElse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called at every 5 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("This was called after 10 seconds.")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Your console will die with this every tick")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"mp-events-add-mp-events-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mp-events-add-mp-events-call"}},[t._v("#")]),t._v(" mp.events.add & mp.events.call")]),t._v(" "),s("p",[t._v("Events come in all shapes and sizes. Checkout "),s("a",{attrs:{href:"../api/events"}},[t._v("the API:Events section.")])]),t._v(" "),s("p",[t._v("We get a lot finer control over our events for alt:V.")]),t._v(" "),s("h3",{attrs:{id:"text-labels-markers-etc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-labels-markers-etc"}},[t._v("#")]),t._v(" Text Labels, Markers, etc.")]),t._v(" "),s("p",[t._v("Check out the snippets section of this document.")])])}),[],!1,null,null,null);a.default=n.exports}}]);