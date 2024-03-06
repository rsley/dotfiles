"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9540],{15632:(e,n,a)=>{a.d(n,{g:()=>r});var i=a(69736),t=a(63068),l=a(11527);const r=({children:e})=>(0,l.jsx)(i.x,{variant:"bodySmall",className:t.Z.pretitle,children:e})},66873:(e,n,a)=>{a.d(n,{x:()=>u});var i=a(50959),t=a(76950),l=a(50540),r=a(30374),d=a(2990),s=a(71459),o=a(8499),m=a(11527);const u=({children:e,action:n,uri:a})=>{const u=(0,l.g)(),c=(0,d.j)();let k;const v=()=>{const e={triggerId:o.K,triggerAction:{type:n}};s.y.set((n=>({...n,...e}))),c.storeAction(r.wH,{operation:t.pT.ADD,uris:[a]})};try{k=i.Children.only(e)}catch(n){return(0,m.jsx)(m.Fragment,{children:e})}return u?i.cloneElement(k,{onClick:v}):(0,m.jsx)(m.Fragment,{children:e})}},5280:(e,n,a)=>{a.r(n),a.d(n,{AlbumPrerelease:()=>Me});a(46758),a(53321),a(86277);var i=a(82187),t=a.n(i),l=a(75802),r=a(69736),d=a(11317),s=a(85648),o=a(66713),m=a(22527),u=a(82857),c=a(50959),k=a(20726),v=a(20580),p=a(80626);function S(e){const n=new Date;return(e instanceof Date?e:new Date(e)).getTime()-n.getTime()}var N=a(3533),y=a(61899),g=a(11527);const b=({uri:e})=>{const n=(0,y.D)(e),{spec:a,logger:i}=(0,p.fU)(k.j,{data:{uri:e||""}}),t=(0,c.useCallback)((()=>{e&&(i.logInteraction(a.actionBarFactory().preSaveButtonFactory().hitUiNavigate({destination:e})),n())}),[n,a,e,i]);return e?(0,g.jsx)(N.D,{onClick:t,children:s.ag.get("web-player.album-prerelease.listen_now")}):null};var F=a(6370),f=a(66873),h=a(91529);const x=3e5,P=36e5;var R=a(20069);const D={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"preReleaseMutationPayload"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleasePayload"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preRelease"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}}]}}]}}]},T={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AlbumPrereleasePreSavedState"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preSaved"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}}]},j={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"PreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"preSavePreReleaseToLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...D.definitions]},C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RemovePreSaveAlbumPrerelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"removePreReleaseFromLibrary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"preReleaseMutationPayload"}}]}}]}},...D.definitions]},_=e=>{const{data:n,invalidate:a,loading:i}=(t={uri:e},l={staleTime:x,gcTime:P},(0,R.a)(T,t,l));var t,l;return{isPreSaved:(0,c.useMemo)((()=>{if(!n)return!1;for(const a of n.lookup)if("PreReleaseResponseWrapper"===a.__typename&&"PreRelease"===a.data.__typename&&a.data.uri===e)return a.data.preSaved;return!1}),[n,e]),isLoading:i,invalidate:a}};var I=a(68985),A=a(65441),L=a(7627),w=a(70526),U=a(19039);const V=(e,n)=>{const{request:a}=(0,c.useContext)(A.Ax),{enqueueSnackbar:i}=(0,U.D)();return(0,I.D)({mutationFn:async n=>{const i=n?j:C,t=await(0,L.J)(a,i,{uri:e}),l=t?.data;if(l)return function(e){let n;if("preSavePreReleaseToLibrary"in e&&"PreReleasePayload"===e.preSavePreReleaseToLibrary.__typename)n=e.preSavePreReleaseToLibrary.preRelease;else{if(!("removePreReleaseFromLibrary"in e)||"PreReleasePayload"!==e.removePreReleaseFromLibrary.__typename)return;n=e.removePreReleaseFromLibrary.preRelease}switch(n.__typename){case"PreRelease":return n.preSaved;case"NotFound":return!1;case"GenericError":return;default:return void(0,w._)(n)}}(l)},onSuccess:e=>{"boolean"==typeof e&&(e&&i(s.ag.get("web-player.album-prerelease.feedback_presaved")),n(e))}})};const M=({uri:e})=>{const{isPreSaved:n,isLoading:a,addPresave:i,removePresave:t}=(e=>{const{isPreSaved:n,invalidate:a,isLoading:i}=_(e),{mutate:t,isPending:l}=V(e,a);return{isPreSaved:n,isLoading:i||l,addPresave:(0,c.useCallback)((()=>t(!0)),[t]),removePresave:(0,c.useCallback)((()=>t(!1)),[t])}})(e),{spec:l,logger:r}=(0,p.fU)(k.j,{data:{uri:e}}),d=()=>{r.logInteraction(l.actionBarFactory().preSaveButtonFactory().hitRemovePresave({prereleaseId:e,itemToBeRemovedFromPresaved:e,contextUri:e})),t()};return n?(0,g.jsx)(F.P,{disabled:a,onClick:d,children:s.ag.get("web-player.album-prerelease.presaved")}):(0,g.jsx)(f.x,{uri:e,action:h.sr.SAVE_PRERELEASE,children:(0,g.jsx)(N.D,{disabled:a,onClick:()=>{r.logInteraction(l.actionBarFactory().preSaveButtonFactory().hitPresave({prereleaseId:e,itemToBePresaved:e,contextUri:e})),i()},children:s.ag.get("web-player.album-prerelease.presave")})})};var E=a(15842),B=a(66205),O=a(97013),W=a(16476),H=a(66819);const Q=({prerelease:e,backgroundColor:n})=>{const a=function(e){const[n,a]=(0,c.useState)((()=>!!e&&S(e)<=0));return(0,c.useEffect)((()=>{if(!e)return;const n=S(e);if(n<=0)return void a(!0);if(n>=36e5)return void a(!1);const i=setTimeout((()=>{a(!0)}),n);return()=>{clearTimeout(i)}}),[e]),n}(e.releaseDate),{spec:i,UBIFragment:t}=(0,p.fU)(k.j,{data:{uri:e.uri}}),l=(0,H.j)();return(0,g.jsx)(E.o,{backgroundColor:n,children:(0,g.jsxs)(B.F,{children:[a?(0,g.jsx)(b,{uri:e.content?.uri}):(0,g.jsx)(M,{uri:e.uri}),(0,g.jsx)(t,{spec:i,children:(0,g.jsx)(v.yj,{menu:(0,g.jsx)(W.v,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:(0,g.jsx)(O.z,{label:s.ag.get("more.label.context",e.content?.name),size:l})})})]})})};var q=a(61058),z=a(97583),Z=a(93421);const G="J9GZWbcqWAQBbj0mGgBp",K="MnacN8FHHYBeSU8hx4U8",Y="HBgE42egR1M0MoBZt7MA",$="l5yLFFUEplqPqkpdgn2z",J="g0_tYvLXcZhPQLQuecrg",X="gjeF0mGZlmvlsLy5SvfQ",ee=({value:e,label:n,hasDivider:a=!1})=>(0,g.jsxs)("div",{className:Y,"aria-hidden":"true",children:[(0,g.jsx)(r.x,{variant:"titleSmall",className:t()({[J]:a}),children:e}),(0,g.jsx)(r.x,{variant:"marginal",semanticColor:"textSubdued",children:n})]});var ne=a(3601);const ae=1e3,ie=60*ae,te=60*ie,le=24*te;const re={days:0,hours:0,minutes:0,seconds:0};function de(e){return e>0?function(e){const n=Math.abs(e);return{days:Math.floor(n/le),hours:Math.floor(n%le/te),minutes:Math.floor(n%te/ie),seconds:Math.floor(n%ie/ae)}}(e):re}const se=({targetDate:e,className:n,onComplete:a,images:i,imageTitle:l})=>{const{days:r,hours:d,minutes:o,seconds:m}=((e,n)=>{const a=(0,c.useRef)(n);a.current=n;const[i,t]=(0,c.useState)((()=>de(S(e))));return(0,ne.Y)((n=>{const i=S(e),l=de(i);t(l),i<=0&&(n(),a.current?.())}),1e3),i})(e,a),k=void 0!==i&&i.length>0&&l,v=s.ag.get("web-player.album-prerelease.countdown_label",{days:r,hours:d,minutes:o,seconds:m});return(0,g.jsxs)("div",{className:t()(G,n,{[K]:k}),role:"timer",children:[(0,g.jsx)("span",{className:X,children:v}),k&&(0,g.jsx)(Z.O,{images:i,type:u.p.ALBUM,shape:Z.K.ROUNDED_CORNERS,className:$,title:l}),(0,g.jsx)(ee,{value:r,label:s.ag.get("web-player.album-prerelease.days",r),hasDivider:!0}),(0,g.jsx)(ee,{value:d,label:s.ag.get("web-player.album-prerelease.hours",d),hasDivider:!0}),(0,g.jsx)(ee,{value:o,label:s.ag.get("web-player.album-prerelease.minutes",o),hasDivider:!0}),(0,g.jsx)(ee,{value:m,label:s.ag.get("web-player.album-prerelease.seconds",m)})]})};var oe=a(97922),me=a(81639),ue=a(16118),ce=a(15632);const ke="xjbmV4vvBCu7c5U6nAgL",ve=({prerelease:e,children:n})=>(0,g.jsx)(v._P,{menu:(0,g.jsx)(W.v,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:n}),pe=({prerelease:e,backgroundColor:n})=>{const{content:a,releaseDate:i}=e,t=(0,q.jh)(),l=t===q.Uo.SMALL||t===q.Uo.XSMALL,{spec:r,logger:d}=(0,p.fU)(k.j,{data:{uri:e.uri}}),s=(0,c.useCallback)(((e,n)=>{if(r){const e=r.headerFactory().artistNameFactory().hitUiNavigate({destination:n.creator.uri});d.logInteraction(e)}}),[d,r]),o=a,m=(0,c.useMemo)((()=>i?new Date(i):void 0),[i]);return(0,g.jsxs)(oe.gF,{backgroundColor:n,size:oe.fR.LARGE,children:[(0,g.jsx)(me.W,{children:o.name?(0,g.jsx)(ue.i,{text:o.name}):null}),!l&&(0,g.jsx)(ve,{prerelease:e,children:(0,g.jsx)(oe.Oz,{images:o.coverArt.sources,name:o.name??"",placeholderType:"album"})}),(0,g.jsxs)(oe.sP,{children:[(0,g.jsx)(ce.g,{children:(0,z.R)(o.type)}),(0,g.jsx)(ve,{prerelease:e,children:(0,g.jsx)(oe.xd,{scaleAtMinWidth:oe.Fi,children:o.name})}),(0,g.jsx)(oe.QS,{creators:o.artists,onCreatorClick:s,releaseDate:i,timeZone:e.timezone}),m&&o.name?(0,g.jsx)(se,{images:l?o.coverArt.sources:[],className:ke,imageTitle:o.name,targetDate:m}):null]})]})};var Se=a(36199),Ne=a(61046),ye=a(73928);const ge={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]},be={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"albumPreReleaseTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTracksData"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTracksData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preReleaseContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrack"}}]}},{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseAlbumTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},...ge.definitions]},Fe={totalLength:0,items:[]};function fe(e){const n=e.preReleaseContent,a=[];if(n?.tracks)for(const e of n.tracks.items)a.push({uri:e.uri,name:e.name?e.name:"",isPlayable:e.playability.playable,durationMs:e.duration?.totalMilliseconds??0,artists:he(e.artists.items),isExplicit:e.contentRating?.label===ye.KS.Explicit,is19PlusOnly:e.contentRating?.label===ye.KS.NineteenPlus});return{totalLength:n?.tracks.totalCount??0,items:a}}function he(e){const n=[];for(const a of e)"Artist"===a.data.__typename&&n.push({name:a.data.profile.name,uri:a.data.uri});return n}const xe=[Se.QD.INDEX,Se.QD.TITLE_AND_ARTIST,Se.QD.DURATION],Pe=c.memo((function({ariaLabel:e,nrTracks:n,prereleaseUri:a,highlightUri:i,scrollToIndex:t,usePlayContextItem:l,hasHeaderRow:r=!0,initalTracks:d}){const{spec:s,UBIFragment:o}=(0,p.fU)(k.j,{data:{uri:a}}),m=(e=>{const{request:n}=(0,c.useContext)(A.Ax);return(0,c.useCallback)((async(a,i)=>{const t=await n(be,{uri:e,offset:a,limit:i});for(const n of t?.data?.lookup||[])if("PreReleaseResponseWrapper"===n.__typename&&"PreRelease"===n.data.__typename&&n.data.uri===e)return fe(n.data);return Fe}),[n,e])})(a),u=(0,c.useRef)(!1),v=(0,c.useRef)(null),[S,N]=(0,c.useState)(null),y=(0,c.useCallback)((e=>({uri:e.uri})),[]);(0,c.useEffect)((()=>{v.current&&(S?v.current.scrollToIndex(S):t&&v.current.scrollToIndex(t))}),[S,t]);const b=(0,c.useCallback)((async(e,n)=>{const a=await m(e,n);if(i&&!S){const e=a.items.findIndex((e=>e?.uri===i));N(e||-1)}return a}),[m,i,S]),F=(0,c.useCallback)(((e,n)=>{const t=!u.current&&!!i&&i===e.uri;return t&&(u.current=!0),(0,g.jsx)(Se.Ym,{uri:e.uri,isPlayable:e.isPlayable,name:e.name,trackNumber:n+1,index:n,artists:e.artists,playcount:0,contextUri:a,duration_ms:e.durationMs,usePlayContextItem:l,isMOGEFRestricted:e.is19PlusOnly,isExplicit:e.isExplicit,shouldHighLight:t,isReleased:e.isPlayable},n+e.uri)}),[i,a,l]);return(0,g.jsx)(o,{spec:s,children:(0,g.jsx)(Ne.a,{columns:xe,children:(0,g.jsx)(Se.Pv,{ariaLabel:e,columns:xe,hasHeaderRow:r,rowPlaceholder:Se.uD,renderRow:F,resolveItem:y,nrTracks:n,fetchTracks:b,limit:300,tracks:d,outerRef:v,columnPersistenceKey:"album-tracklist"},a)})})}));var Re=a(60162),De=a(91643),Te=a(96989);const je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"albumPreRelease"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lookup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uris"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"uri"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseData"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseData"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreRelease"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"preReleaseContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}},{kind:"Field",name:{kind:"Name",value:"isFallback"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrack"}}]}},{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"copyright"}}]}},{kind:"Field",name:{kind:"Name",value:"releaseDate"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}}]}},{kind:"Field",name:{kind:"Name",value:"timezone"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ArtistResponseWrapper"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"width"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albumPreReleaseTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PreReleaseAlbumTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"20"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumPreReleaseTrackArtistItem"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}}]}},...ge.definitions]},Ce=(e,n)=>(0,R.a)(je,e,n),_e=(e,n=Ce)=>{const{data:a,loading:i,error:t}=n({uri:e},{staleTime:x,gcTime:P});return{loading:i,error:!!t,prerelease:(0,c.useMemo)((()=>{if(!a)return null;for(const n of a.lookup)if("PreReleaseResponseWrapper"===n.__typename&&"PreRelease"===n.data.__typename&&n.data.uri===e)return Ae(n.data);return null}),[a,e])}};function Ie(e){return e.includes("℗")?{type:"P",text:e}:{type:"C",text:e}}function Ae(e){const n=e.preReleaseContent;let a;if(n){const i=fe(e);a={artists:Le(n.artists.items),name:n.name??void 0,uri:n.uri,coverArt:{extractedColors:n.coverArt?.extractedColors?.colorRaw,sources:n.coverArt?.sources??[]},type:n.type,tracks:i,copyrights:n.copyright?.split("\n").map(Ie)??[]}}return{uri:e.uri,releaseDate:e.releaseDate?.isoString,timezone:e.timezone??void 0,content:a}}function Le(e){const n=[];for(const a of e)"Artist"===a.data.__typename&&n.push({name:a.data.profile.name,id:a.data.id,uri:a.data.uri,images:a.data.visuals.avatarImage?.sources??[]});return n}var we=a(98716);const Ue="H2kQJCtEGTjIDaPPniwb",Ve="ZSU92ZH1fIuGwPp1cuDi",Me=e=>{const{uri:n}=e,{prerelease:a,loading:i,error:c}=_e(n),k=(e=>{const n=e?.content?.coverArt.extractedColors?.hex;return(0,we.Y)(n),n})(a),v=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),{usePlayContextItem:p}=(0,m.n)({uri:n,pages:[{items:(N=a?.content?.tracks.items||[],N.filter((e=>e.isPlayable)).map((e=>({uri:e.uri,uid:null,type:u.p.TRACK,provider:null}))))}]},{featureIdentifier:"album_prerelease"});var N;if(i||c||!a)return(0,g.jsx)(De.h,{hasError:!!c,errorMessage:s.ag.get("error.not_found.title.album")});if(a?.content?.uri&&function(e,n){if(!e.content?.uri||!e.releaseDate)return!1;const a=S(e.releaseDate);if(a>0)return!1;return a<=-1*n}(a,1728e5)){const e=(0,d._b)(a?.content?.uri);if(e)return(0,g.jsx)(Te.InstrumentedRedirect,{to:e.toURLPath(!0)})}return(0,g.jsxs)("section",{className:Ue,children:[(0,g.jsx)(Re.$,{children:s.ag.get("album.page-title",a.content?.name??"")}),(0,g.jsx)(pe,{prerelease:a,backgroundColor:k}),(0,g.jsx)(Q,{prerelease:a,backgroundColor:k}),a.content?.tracks.totalLength?(0,g.jsxs)("div",{className:"contentSpacing",children:[(0,g.jsx)(r.x,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:s.ag.get("web-player.album-prerelease.tracklist_preview")}),(0,g.jsx)(Pe,{prereleaseUri:n,ariaLabel:a.content?.name??s.ag.get("error.not_found.title.album"),nrTracks:a.content?.tracks.totalLength??0,scrollToIndex:v,usePlayContextItem:p,initalTracks:a.content?.tracks.items,albumUri:a.content?.uri})]}):null,(0,g.jsx)("div",{className:t()(Ve,"contentSpacing"),children:(0,g.jsx)(o.k,{copyrights:a.content?.copyrights??[]})})]})}},66713:(e,n,a)=>{a.d(n,{k:()=>r});a(86277);var i=a(58206);const t="rTMkDBDp47Eo12ZEQv4U";var l=a(11527);const r=({copyrights:e,courtesyLine:n})=>{const a=(e||[]).map(((e,n)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let t;return t="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,l.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:`${t} ${a}`},n)}));return n&&a.unshift((0,l.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:n},a.length)),(0,l.jsx)("div",{className:t,children:a})}}}]);
//# sourceMappingURL=xpui-routes-album-prerelease.js.map