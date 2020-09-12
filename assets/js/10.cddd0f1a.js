(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{355:function(e,t,r){"use strict";r.r(t);var n=r(42),v=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"introduction-to-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-events"}},[e._v("#")]),e._v(" Introduction to Events")]),e._v(" "),r("p",[e._v("Events are the bread and butter to working with alt:V.")]),e._v(" "),r("p",[e._v("They help you retrieve a player instance whenever they perform a specific event. Examples would be connecting to the server, entering a vehicle, exiting a vehicle, and many more.")]),e._v(" "),r("p",[e._v("Let's take a look at the current available events")]),e._v(" "),r("h2",{attrs:{id:"server-side-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-side-events"}},[e._v("#")]),e._v(" Server Side Events")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Event Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("playerConnect")]),e._v(" "),r("td",[e._v("When a player connects to the server.")])]),e._v(" "),r("tr",[r("td",[e._v("playerDisconnect")]),e._v(" "),r("td",[e._v("When a player disconnects from the server.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceStart")]),e._v(" "),r("td",[e._v("When any resource starts.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceStop")]),e._v(" "),r("td",[e._v("When any resource stops.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceError")]),e._v(" "),r("td",[e._v("When any resource runs into an error.")])]),e._v(" "),r("tr",[r("td",[e._v("resourceStart")]),e._v(" "),r("td",[e._v("When a specific resource starts.")])]),e._v(" "),r("tr",[r("td",[e._v("resourceStop")]),e._v(" "),r("td",[e._v("When a specific resource stops.")])]),e._v(" "),r("tr",[r("td",[e._v("syncedMetaChange")]),e._v(" "),r("td",[e._v("When an entity has their syncedMeta changed.")])]),e._v(" "),r("tr",[r("td",[e._v("streamSyncedMetaChange")]),e._v(" "),r("td",[e._v("When an entity in a client's streaming range has their streamSyncedMeta changed.")])]),e._v(" "),r("tr",[r("td",[e._v("playerDamage")]),e._v(" "),r("td",[e._v("When a player takes damage from someone else or something.")])]),e._v(" "),r("tr",[r("td",[e._v("playerDeath")]),e._v(" "),r("td",[e._v("When a player dies.")])]),e._v(" "),r("tr",[r("td",[e._v("explosion")]),e._v(" "),r("td",[e._v("When an explosion is created. ie. Running into a gas pump.")])]),e._v(" "),r("tr",[r("td",[e._v("weaponDamage")]),e._v(" "),r("td",[e._v("When a weapon does damage.")])]),e._v(" "),r("tr",[r("td",[e._v("vehicleDestroy")]),e._v(" "),r("td",[e._v("When a vehicle is destroyed.")])]),e._v(" "),r("tr",[r("td",[e._v("entityEnterColshape")]),e._v(" "),r("td",[e._v("When an entity enters a ColShape.")])]),e._v(" "),r("tr",[r("td",[e._v("entityLeaveColshape")]),e._v(" "),r("td",[e._v("When an entity leaves a ColShape.")])]),e._v(" "),r("tr",[r("td",[e._v("playerEnterVehicle")]),e._v(" "),r("td",[e._v("When a player enters a vehicle. Fires when they sit down.")])]),e._v(" "),r("tr",[r("td",[e._v("playerLeaveVehicle")]),e._v(" "),r("td",[e._v("When a player leaves a vehicle.")])]),e._v(" "),r("tr",[r("td",[e._v("playerChangedVehicleSeat")]),e._v(" "),r("td",[e._v("When a player is swapping seats in a vehicle.")])]),e._v(" "),r("tr",[r("td",[e._v("removeEntity")]),e._v(" "),r("td",[e._v("When an entity is removed from the game.")])]),e._v(" "),r("tr",[r("td",[e._v("consoleCommand")]),e._v(" "),r("td",[e._v("When you type a message into your server console and press enter.")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://altmp.github.io/altv-typings/modules/_alt_server_.html#on",target:"_blank",rel:"noopener noreferrer"}},[e._v("Check the Server Events API for Info"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"client-side-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-side-events"}},[e._v("#")]),e._v(" Client Side Events")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Event Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("connectionComplete")]),e._v(" "),r("td",[e._v("When a player is fully connected to the server on client-side.")])]),e._v(" "),r("tr",[r("td",[e._v("disconnect")]),e._v(" "),r("td",[e._v("When a player disconnects from the server this triggers client-side.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceStart")]),e._v(" "),r("td",[e._v("When any resource starts.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceStop")]),e._v(" "),r("td",[e._v("When any resource stops.")])]),e._v(" "),r("tr",[r("td",[e._v("anyResourceError")]),e._v(" "),r("td",[e._v("When any resource runs into an error.")])]),e._v(" "),r("tr",[r("td",[e._v("resourceStart")]),e._v(" "),r("td",[e._v("When a specific resource starts.")])]),e._v(" "),r("tr",[r("td",[e._v("resourceStop")]),e._v(" "),r("td",[e._v("When a specific resource stops.")])]),e._v(" "),r("tr",[r("td",[e._v("syncedMetaChange")]),e._v(" "),r("td",[e._v("When an entity has their syncedMeta changed.")])]),e._v(" "),r("tr",[r("td",[e._v("streamSyncedMetaChange")]),e._v(" "),r("td",[e._v("When an entity in a client's streaming range has their streamSyncedMeta changed.")])]),e._v(" "),r("tr",[r("td",[e._v("keydown")]),e._v(" "),r("td",[e._v("When a player presses a key down.")])]),e._v(" "),r("tr",[r("td",[e._v("keyup")]),e._v(" "),r("td",[e._v("When a key is released.")])]),e._v(" "),r("tr",[r("td",[e._v("gameEntityCreate")]),e._v(" "),r("td",[e._v("When an entity enters the streaming range of a client.")])]),e._v(" "),r("tr",[r("td",[e._v("gameEntityDestroy")]),e._v(" "),r("td",[e._v("When an entity leaves the streaming range of a client.")])]),e._v(" "),r("tr",[r("td",[e._v("removeEntity")]),e._v(" "),r("td",[e._v("When an entity is removed from the game.")])]),e._v(" "),r("tr",[r("td",[e._v("consoleCommand")]),e._v(" "),r("td",[e._v("When you type a message into your server console and press enter.")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://altmp.github.io/altv-typings/modules/_alt_client_.html#on",target:"_blank",rel:"noopener noreferrer"}},[e._v("Check the Client Events API for Info"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);