(this["webpackJsonpmarketplace-listener"]=this["webpackJsonpmarketplace-listener"]||[]).push([[0],{209:function(e,t,n){},210:function(e,t,n){},215:function(e,t){},363:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s,l,o,j,d,b,h,x,O,p,m,g=n(1),f=n.n(g),u=n(84),k=n.n(u),w=(n(209),n(210),n(39)),v=n(22),S=n(28),I=n(66),y=n(172),N=n(29),D=function(e){return"".concat((t=e,t.substring(0,6)),"...").concat(function(e){return e.slice(-6)}(e));var t},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return I.ethers.BigNumber.from(e).div(I.ethers.BigNumber.from(10).pow(t)).toNumber()},T=function(e){return I.ethers.utils.formatEther(e)},L=function(e){var t=new Date(1e3*e);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+" - "+"0".concat(t.getHours().toString()).slice(-2)+":"+"0".concat(t.getMinutes().toString()).slice(-2)},A=n(366),P=n(372),_=n(370),F=n(196),M=n(197),E=n(92),B=n(90),U=n(195),z=n(193),W=n(5),J=N.a.div(c||(c=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #131318;\n  border-radius: 20px;\n  padding: 16px;\n  margin-top: 60px;\n  position: relative;\n"]))),R=N.a.div(r||(r=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 20px;\n  background-color: #161326;\n  border: 1px solid #595da1;\n  color: #7d8fd1;\n  padding: 10px;\n"]))),K=N.a.div(i||(i=Object(S.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1000;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n"]))),V=N.a.span(a||(a=Object(S.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 8px;\n"]))),G=N.a.span(s||(s=Object(S.a)(["\n  font-size: 12px;\n  color: #7d8fd1;\n  margin-bottom: 4px;\n"]))),H=function(e){var t=e.volume,n=function(e){var t=e.active,n=e.payload,c=e.label;return t&&n&&c?Object(W.jsxs)(R,{children:[Object(W.jsx)(V,{children:c}),Object(W.jsx)(G,{children:"NFT ID: ".concat(n[0].payload.id)}),Object(W.jsx)(G,{children:"NFT Price: ".concat(n[0].payload.price)}),Object(W.jsx)(G,{children:"Tot. Volume: ".concat(n[0].payload.volume)})]}):null},c=t.length;return Object(W.jsxs)(J,{children:[Object(W.jsx)(V,{children:"Volume Sold Since Page Load"}),Object(W.jsx)(A.a,{width:"100%",height:300,children:Object(W.jsxs)(P.a,{data:t,margin:{top:5,right:20,bottom:5,left:0},children:[Object(W.jsx)(_.a,{stroke:"#BDC2C4",strokeDasharray:"5 5",opacity:"0.4"}),Object(W.jsx)(F.a,{dataKey:"time",stroke:"#919191",fontSize:"12px"}),Object(W.jsx)(M.a,{yAxisId:"left",stroke:"#919191",fontSize:"12px",domain:["dataMin","dataMax"]}),Object(W.jsx)(M.a,{yAxisId:"right",orientation:"right",stroke:"#919191",fontSize:"12px"}),Object(W.jsx)(E.a,{content:Object(W.jsx)(n,{})}),Object(W.jsx)(B.a,{}),Object(W.jsx)(U.a,{dataKey:"volume",yAxisId:"left",type:"monotone",stroke:"#0098A1",fill:"#6562a1"}),Object(W.jsx)(z.a,{dataKey:"price",yAxisId:"right",type:"monotone",stroke:"#47CF73"})]})}),!c&&Object(W.jsx)(K,{children:Object(W.jsx)(V,{children:"No sales yet"})})]})},q=new I.ethers.providers.JsonRpcProvider("https://rpc.ftm.tools/"),Q="https://paintswap.finance/marketplace/",X=1e3,Y=new y.MarketplaceV2(q),Z=600,$=960,ee=1280,te=1920,ne=2560,ce={xs:"@media screen and (min-width: ".concat(0,"px)"),sm:"@media screen and (min-width: ".concat(Z,"px)"),md:"@media screen and (min-width: ".concat($,"px)"),lg:"@media screen and (min-width: ".concat(ee,"px)"),xl:"@media screen and (min-width: ".concat(te,"px)"),xxl:"@media screen and (min-width: ".concat(ne,"px)")},re=N.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n"]))),ie=N.a.div(o||(o=Object(S.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-gap: 60px;\n  width: 100%;\n\n  "," {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  "," {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  "," {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  "," {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  "," {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n"])),ce.sm,ce.md,ce.lg,ce.xl,ce.xxl),ae=N.a.div(j||(j=Object(S.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  grid-gap: 60px;\n  width: 100%;\n"]))),se=N.a.div(d||(d=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n  width: 100%;\n  background-color: #131318;\n  border-radius: 20px;\n  padding-bottom: 24px;\n"]))),le=N.a.div(b||(b=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: visible;\n  max-height: 550px;\n"]))),oe=N.a.div(h||(h=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 8px;\n  margin-left: 24px;\n  margin-right: 24px;\n"]))),je=N.a.div(x||(x=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 8px;\n"]))),de=N.a.span(O||(O=Object(S.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 8px;\n"]))),be=N.a.span(p||(p=Object(S.a)(["\n  font-size: 14px;\n  color: #7d8fd1;\n"]))),he=N.a.div(m||(m=Object(S.a)(["\n  margin-top: 16px;\n  height: 1px;\n  width: 100%;\n  background-color: #7d8fd1;\n  opacity: 0.3;\n"]))),xe=function(){var e=f.a.useState(!1),t=Object(v.a)(e,2),n=t[0],c=t[1],r=f.a.useState([]),i=Object(v.a)(r,2),a=i[0],s=i[1],l=f.a.useState([]),o=Object(v.a)(l,2),j=o[0],d=o[1],b=f.a.useState([]),h=Object(v.a)(b,2),x=h[0],O=h[1],p=f.a.useState([]),m=Object(v.a)(p,2),u=m[0],k=m[1],S=f.a.useState([]),I=Object(v.a)(S,2),y=I[0],N=I[1],A=f.a.useState([]),P=Object(v.a)(A,2),_=P[0],F=P[1],M=f.a.useState([]),E=Object(v.a)(M,2),B=E[0],U=E[1],z=f.a.useState([]),J=Object(v.a)(z,2),R=J[0],K=J[1];return Object(g.useEffect)((function(){n||(console.log("Start listening"),Y.onNewListing((function(e){console.log("New listing!\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});a.unshift(t),a.length>X&&a.pop(),s(Object(w.a)(a))})),Y.onSold((function(e){console.log("Sold!\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});j.unshift(t),j.length>X&&j.pop(),d(Object(w.a)(j)),R.push({time:t.time,volume:C(t.priceTotal)+(R.length?R[R.length-1].volume:0),id:t.marketplaceId.toString(),price:C(t.priceTotal)}),R.length>500&&R.shift(),K(Object(w.a)(R))})),Y.onUnsold((function(e,t){if(t){console.log("Cancelled sale\n",e);var n=Object.assign({},e,{cancelled:!0,time:L(Date.now()/1e3)});x.unshift(n)}else{console.log("Failed to sell\n",e);var c=Object.assign({},e,{cancelled:!1,time:L(Date.now()/1e3)});x.unshift(c)}x.length>X&&x.pop(),O(Object(w.a)(x))})),Y.onPriceUpdate((function(e){console.log("Price updated\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});u.unshift(t),u.length>X&&u.pop(),k(Object(w.a)(u))})),Y.onNewBid((function(e){console.log("New bid\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});_.unshift(t),_.length>X&&_.pop(),F(Object(w.a)(_))})),Y.onNewOffer((function(e){console.log("New offer\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});B.unshift(t),B.length>X&&B.pop(),U(Object(w.a)(B))})),Y.onDurationExtended((function(e){console.log("Auction duration extended\n",e);var t=Object.assign({},e,{time:L(Date.now()/1e3)});y.unshift(t),y.length>X&&y.pop(),N(Object(w.a)(y))}))),c(!0)}),[n,a,j,x,u,y,_,B,R]),Object(W.jsxs)(re,{children:[Object(W.jsxs)(ie,{children:[Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"LISTING"}),Object(W.jsxs)(le,{children:[a&&a.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Collection"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"collections/").concat(e.collection.toLowerCase()),target:"_blank",rel:"noreferrer",children:D(e.collection.toLowerCase())})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Token ID"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"assets/").concat(e.collection.toLowerCase(),"/").concat(e.tokenID.toString()),target:"_blank",rel:"noreferrer",children:e.tokenID.toString()})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Type"}),Object(W.jsx)(be,{children:e.isAuction?"Auction":"Sale"})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Duration"}),Object(W.jsx)(be,{children:"".concat(e.duration.toNumber()/3600,"h")})]}),e.amount.toNumber()>1&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Amount"}),Object(W.jsx)(be,{children:e.amount.toString()})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Unit Price"}),Object(W.jsx)(be,{children:T(e.pricePerUnit)})]})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"".concat(e.amount.toNumber()>1?"Total Price":"Price")}),Object(W.jsx)(be,{children:T(e.priceTotal)})]}),Object(W.jsx)(he,{})]},t)})),!a.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"SOLD"}),Object(W.jsxs)(le,{children:[j&&j.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Collection"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"collections/").concat(e.collection.toLowerCase()),target:"_blank",rel:"noreferrer",children:D(e.collection.toLowerCase())})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Token ID"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"assets/").concat(e.collection.toLowerCase(),"/").concat(e.tokenID.toString()),target:"_blank",rel:"noreferrer",children:e.tokenID.toString()})})]}),e.amount.toNumber()>1&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Amount"}),Object(W.jsx)(be,{children:e.amount.toString()})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Unit Price"}),Object(W.jsx)(be,{children:T(e.pricePerUnit)})]})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"".concat(e.amount.toNumber()>1?"Total Price":"Price")}),Object(W.jsx)(be,{children:T(e.priceTotal)})]}),Object(W.jsx)(he,{})]},t)})),!j.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"UNSOLD"}),Object(W.jsxs)(le,{children:[x&&x.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Reason"}),Object(W.jsx)(be,{children:e.cancelled?"Cancelled":"Expired"})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Collection"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"collections/").concat(e.collection.toLowerCase()),target:"_blank",rel:"noreferrer",children:D(e.collection.toLowerCase())})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Token ID"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"assets/").concat(e.collection.toLowerCase(),"/").concat(e.tokenID.toString()),target:"_blank",rel:"noreferrer",children:e.tokenID.toString()})})]}),Object(W.jsx)(he,{})]},t)})),!x.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"PRICE UPDATE"}),Object(W.jsxs)(le,{children:[u&&u.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"New Price"}),Object(W.jsx)(be,{children:T(e.price)})]}),Object(W.jsx)(he,{})]},t)})),!u.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"BIDS"}),Object(W.jsxs)(le,{children:[_&&_.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Bidder"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"user/").concat(e.bidder.toLowerCase()),target:"_blank",rel:"noreferrer",children:D(e.bidder)})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Bid"}),Object(W.jsx)(be,{children:T(e.bid)})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Next Minimum"}),Object(W.jsx)(be,{children:T(e.nextMinimum)})]}),Object(W.jsx)(he,{})]},t)})),!_.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"OFFERS"}),Object(W.jsxs)(le,{children:[B&&B.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Offerer"}),Object(W.jsx)(be,{children:Object(W.jsx)("a",{href:"".concat(Q,"user/").concat(e.offerrer.toLowerCase()),target:"_blank",rel:"noreferrer",children:D(e.offerrer)})})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Offer"}),Object(W.jsx)(be,{children:T(e.offer)})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"Next Minimum"}),Object(W.jsx)(be,{children:T(e.nextMinimum)})]}),Object(W.jsx)(he,{})]},t)})),!B.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)("p",{children:"AUCTION CHANGE"}),Object(W.jsxs)(le,{children:[y&&y.map((function(e,t){return Object(W.jsxs)(oe,{children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(de,{children:Object(W.jsx)("a",{href:"".concat(Q).concat(e.marketplaceId.toString()),target:"_blank",rel:"noreferrer",children:e.marketplaceId.toString()})}),Object(W.jsx)(be,{children:e.time})]}),Object(W.jsxs)(je,{children:[Object(W.jsx)(be,{children:"End Time"}),Object(W.jsx)(be,{children:L(e.endTime.toNumber())})]}),Object(W.jsx)(he,{})]},t)})),!y.length&&Object(W.jsx)(de,{children:"Waiting for events..."})]})]})]}),Object(W.jsx)(ae,{children:Object(W.jsx)(H,{volume:R})})]})},Oe=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsxs)("header",{className:"App-header",children:[Object(W.jsx)("a",{href:"https://paintswap.finance",target:"_blank",rel:"noreferrer",children:Object(W.jsx)("img",{src:"./logo.png",alt:"logo",className:"App-logo"})}),Object(W.jsx)("h1",{children:"NFT Live Events"}),Object(W.jsxs)("span",{className:"App-subtitle",children:[Object(W.jsx)("a",{href:"https://github.com/PaintSwap/paintswap-marketplace-listener",target:"_blank",rel:"noreferrer",children:"Code"})," | ",Object(W.jsx)("a",{href:"https://www.npmjs.com/package/@paintswap/marketplace-interactions",target:"_blank",rel:"noreferrer",children:"Library"})]})]}),Object(W.jsx)(xe,{})]})},pe=f.a.memo(Oe),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,373)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};k.a.render(Object(W.jsx)(f.a.StrictMode,{children:Object(W.jsx)(pe,{})}),document.getElementById("root")),me()}},[[363,1,2]]]);
//# sourceMappingURL=main.00a408d3.chunk.js.map