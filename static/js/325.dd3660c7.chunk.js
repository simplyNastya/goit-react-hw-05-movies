"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{325:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var a=i(433),n=i(861),o=i(439),s=i(757),c=i.n(s),r=i(791),l=i(87),v=i(689),m=i(538),d={movieDetailsSection:"movieDetailsPage_movieDetailsSection__tYogp",goBackBtn:"movieDetailsPage_goBackBtn__B6q+P",movieDetails:"movieDetailsPage_movieDetails__4sWzQ",mainMovieInfo:"movieDetailsPage_mainMovieInfo__I6MHj",movieTitle:"movieDetailsPage_movieTitle__vqg1j",movieSubtitleText:"movieDetailsPage_movieSubtitleText__Hlr2i",movieSubtitleSpan:"movieDetailsPage_movieSubtitleSpan__1UnBb",movieSubtitleOverview:"movieDetailsPage_movieSubtitleOverview__ETC4f",movieSubtitleGenre:"movieDetailsPage_movieSubtitleGenre__2EEOj",additMovieInfo:"movieDetailsPage_additMovieInfo__azJ1y",additMovieTitle:"movieDetailsPage_additMovieTitle__YbP2v",additMovieList:"movieDetailsPage_additMovieList__oGetC",additMovieItem:"movieDetailsPage_additMovieItem__lb5-q",additMovieLink:"movieDetailsPage_additMovieLink__CnXWY"},u=i(184),_=function(){var e,t=(0,r.useState)({}),i=(0,o.Z)(t,2),s=i[0],_=i[1],h=(0,r.useState)([]),p=(0,o.Z)(h,2),f=p[0],g=p[1],x=(0,v.UO)().id,j=(0,v.s0)(),b=(null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)||"/";(0,r.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.TP)(x);case 3:t=e.sent,_(t.data),g((0,a.Z)(t.data.genres)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.name),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);return(0,u.jsx)("main",{children:(0,u.jsxs)("section",{className:d.movieDetailsSection,children:[(0,u.jsx)("button",{onClick:function(){return j(b)},type:"button",className:d.goBackBtn,children:"Go back"}),(0,u.jsxs)("div",{className:d.movieDetails,children:[s.poster_path&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.original_title,width:"355",className:d.movieImg}),(0,u.jsxs)("div",{className:d.mainMovieInfo,children:[(0,u.jsx)("h2",{className:d.movieTitle,children:s.original_title}),(0,u.jsxs)("p",{className:d.movieSubtitleText,children:["Vote average: ",(0,u.jsx)("span",{children:" "}),(0,u.jsx)("span",{className:d.movieSubtitleSpan,children:s.vote_average})]}),(0,u.jsx)("h3",{className:d.movieSubtitleOverview,children:"Overview"}),(0,u.jsx)("p",{className:d.movieSubtitleText,children:s.overview}),(0,u.jsx)("h3",{className:d.movieSubtitleGenre,children:"Genres"}),(0,u.jsx)("p",{className:d.movieSubtitleText,children:f.map((function(e){return e.name})).join(", ")})]})]}),(0,u.jsxs)("div",{className:d.additMovieInfo,children:[(0,u.jsx)("h2",{className:d.additMovieTitle,children:"Additional information"}),(0,u.jsxs)("ul",{className:d.additMovieList,children:[(0,u.jsx)("li",{className:d.additMovieItem,children:(0,u.jsx)(l.rU,{to:"cast",state:{from:b},className:d.additMovieLink,children:"Cast"})}),(0,u.jsx)("li",{className:d.additMovieItem,children:(0,u.jsx)(l.rU,{to:"reviews",state:{from:b},className:d.additMovieLink,children:"Reviews"})}),(0,u.jsx)("li",{className:d.additMovieItem,children:(0,u.jsx)(l.rU,{to:"trailer",state:{from:b},className:d.additMovieLink,children:"Trailer"})})]}),(0,u.jsx)(v.j3,{})]})]})})}},538:function(e,t,i){i.d(t,{Df:function(){return s},M1:function(){return l},TP:function(){return c},om:function(){return m},tx:function(){return v},z1:function(){return r}});var a=i(243),n="5cc33dbe2a444448fed26d3844693d78",o="api.themoviedb.org/3",s=function(){return a.Z.get("https://".concat(o,"/trending/movie/day?api_key=").concat(n))},c=function(e){return a.Z.get("https://".concat(o,"/movie/").concat(e,"?api_key=").concat(n))},r=function(e){return a.Z.get("https://".concat(o,"/search/movie?api_key=").concat(n,"&query=").concat(e,"&page=1&include_adult=true"))},l=function(e){return a.Z.get("https://".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(n))},v=function(e){return a.Z.get("https://".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(n,"&page=1"))},m=function(e){return a.Z.get("https://".concat(o,"/movie/").concat(e,"/videos?api_key=").concat(n))}}}]);
//# sourceMappingURL=325.dd3660c7.chunk.js.map