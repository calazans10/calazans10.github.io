(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4dOB":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"description":"Jeferson Calazans is a passionate software developer with a degree in Computer Science. He has been working with web development for the past 7 years."}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,s=i(a("PJYZ")),n=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),g=function(e){var t=u(e),a=f(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),l.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function v(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+l+n+o+a+i+t+s+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=l.default.createElement(I,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),s):s},I=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,A=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},g,{onLoad:n,onError:c,onClick:u,ref:t,loading:f,draggable:A,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var B=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&m&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,w=e.itemProp,v=e.loading,j=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:B?1:0,transition:R?"opacity "+m+"ms":"none"},o),Q="boolean"==typeof h?"lightgray":h,k={transitionDelay:m+"ms"},x=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&k,{},o,{},f),N={title:t,alt:this.state.isVisible?"":a,style:x,className:A,itemProp:w};if(g){var V=g,z=V[0];return l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),Q&&l.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&k)}),z.base64&&l.default.createElement(C,{src:z.base64,spreadProps:N,imageVariants:V,generateSources:y}),z.tracedSVG&&l.default.createElement(C,{src:z.tracedSVG,spreadProps:N,imageVariants:V,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(V),l.default.createElement(I,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:v},z,{imageVariants:V}))}}))}if(p){var T=p,P=T[0],M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete M.display,l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},Q&&l.default.createElement(b,{title:t,style:(0,d.default)({backgroundColor:Q,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},R&&k)}),P.base64&&l.default.createElement(C,{src:P.base64,spreadProps:N,imageVariants:T,generateSources:y}),P.tracedSVG&&l.default.createElement(C,{src:P.tracedSVG,spreadProps:N,imageVariants:T,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(T),l.default.createElement(I,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:v},P,{imageVariants:T}))}}))}return null},t}(l.default.Component);B.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});B.propTypes={resolutions:R,sizes:L,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=B;t.default=Q},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("4dOB"),r=(a("q1tI"),a("Zttt")),s=(a("0mN4"),a("qS8X")),n=a("9eSz"),o=a.n(n),d=a("wTIg"),l=a("+IKJ"),c=Object(d.a)("div",{target:"e13tv7m20"})("display:none;@media (min-width:",Object(l.a)("1200px"),"){display:block;width:40.09009%;margin-right:",Object(l.e)("49px"),";}"),u=a("qKvR");var f=function(){var e=s.data,t=e.site,a=e.placeholderImage;return Object(u.d)(c,null,Object(u.d)(o.a,{fixed:a.childImageSharp.fixed,alt:t.siteMetadata.authorFullName}))},A=Object(d.a)("div",{target:"ebwgot70"})("@media (min-width:",Object(l.a)("1200px"),"){width:40.09009%;}"),g=Object(d.a)("p",{target:"ebwgot71"})("color:#666;letter-spacing:0.016em;line-height:",Object(l.f)(Object(l.c)("24px / 16px")),";&:first-of-type{color:#000;font-size:",Object(l.a)("18px"),";}&:not(:last-of-type){margin-bottom:",Object(l.e)("15px"),";}"),p=Object(d.a)("a",{target:"ebwgot72"})({name:"18i5k9t",styles:"color:#0069ff;&:visited{color:#0069ff;}&:hover{color:#0054cc;}"});function h(e){var t=e.siteDescription;return Object(u.d)(A,null,Object(u.d)(g,null,t),Object(u.d)(g,null,"As a passionate software developer, Jeferson has already worked for several technology companies in various industries, ranging from payments to e-commerce. Since the beginning of his career, Jeferson has adapted to each situation, helping the companies he worked with to build well-crafted applications. He is always open minded and eager to learn new methodologies and technologies."),Object(u.d)(g,null,"When he is not working, you will find Jeferson wandering through the beautiful landscapes around Rio de Janeiro or hanging out with his wife, Michele. He is also into reading books, listening to music and the radio show RoNca RoNca, watching movies and TV series."),Object(u.d)(g,null,"If you want to know more about him, take a look at his profile on"," ",Object(u.d)(p,{href:"https://br.linkedin.com/in/calazans10"},"Linkedin"),", read some of his code on"," ",Object(u.d)(p,{href:"https://github.com/calazans10"},"Github"),", check out his stream on ",Object(u.d)(p,{href:"https://twitter.com/calazans10"},"Twitter")," or get in touch via ",Object(u.d)(p,{href:"mailto:calazans10@gmail.com"},"email"),"."))}h.defaultProps={siteDescription:""};var m=h,b=a("wtQ5");t.default=function(){var e=i.data.site;return Object(u.d)(r.a,null,Object(u.d)(b.a,null),Object(u.d)(f,null),Object(u.d)(m,{siteDescription:e.siteMetadata.description}))}},qS8X:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"authorFullName":"Jeferson Farias Calazans"}},"placeholderImage":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAZaJ9mTZadQc7BdMCf/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMSEQQh/9oACAEBAAEFAloxFo6hSlSbtJr46KWXgievI4TP/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBAhAS/9oACAEDAQE/AawcjWf/xAAaEQACAgMAAAAAAAAAAAAAAAABAgAxAxAR/9oACAECAQE/AcjEVOxlDXr/xAAeEAACAgICAwAAAAAAAAAAAAAAAQIREiExQXGBof/aAAgBAQAGPwLKfwV6fLZTcn7MX2y2PFs2VKN+C12f/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAIUFhof/aAAgBAQABPyHpbgX406VCDndcCPTGQFQf3CPDmIBXQ2Ld5terVKAKg7//2gAMAwEAAgADAAAAEEcHQP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QF3ZRC4sv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxAMTBTYfDDnL//EAB4QAQEAAgICAwAAAAAAAAAAAAERACExQWFxUZGx/9oACAEBAAE/ENrt7cXGPkpE84UImNKLH53+Yt57CA8YTpsrQCo94QJOdDRjFZQeLXidZ6MGq/eIKI6gvse8XmYgqDvP/9k=","width":445,"height":508,"src":"/static/c5ab297f7f0e85afd1af2b8f3e0d83b8/773c2/avatar.jpg","srcSet":"/static/c5ab297f7f0e85afd1af2b8f3e0d83b8/773c2/avatar.jpg 1x"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c85b73d1fb1b83eef8dd.js.map