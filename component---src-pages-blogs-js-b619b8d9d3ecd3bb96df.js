(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AAOf:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n("vOnD"),r=n("Wbzz"),a=o.b.div.withConfig({displayName:"blogstyles__Blog",componentId:"sc-1msxf5-0"})(["background-color:var(--bg-dark-blue);padding:10px;margin-bottom:20px;border-radius:10px;border:1px solid var(--gray-300);position:relative;"]),l=o.b.div.withConfig({displayName:"blogstyles__Intro",componentId:"sc-1msxf5-1"})([""]),i=Object(o.b)(r.Link).withConfig({displayName:"blogstyles__BlogLink",componentId:"sc-1msxf5-2"})([""]),s=o.b.span.withConfig({displayName:"blogstyles__Date",componentId:"sc-1msxf5-3"})(["font-size:12px;color:grey;"]),c=o.b.h3.withConfig({displayName:"blogstyles__BlogTitle",componentId:"sc-1msxf5-4"})(["margin-bottom:0px;width:80%;"]),d=o.b.span.withConfig({displayName:"blogstyles__BlogCategories",componentId:"sc-1msxf5-5"})(["position:absolute;right:5px;top:5px;color:var(--color-gray);font-size:0.8em;padding:5px;border-radius:10px;"])},Wo83:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchBox",(function(){return d}));var o=n("dI71"),r=n("q1tI"),a=n.n(r),l=(n("Wbzz"),n("vOnD")),i=n("Bl7J"),s=(n("tBDR"),n("vrFN")),c=n("AAOf"),d=l.b.input.withConfig({displayName:"blogs__SearchBox",componentId:"sc-1tvcktp-0"})(["background-color:var(--bg-dark-blue);margin:10px 0;font-size:0.8em;padding:5px;border:1px solid var(--gray-300);&:focus{outline:none;}"]),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={searchField:""},n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.searchField,n=this.props.data.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.title.toLowerCase().includes(t.toLowerCase())}));return a.a.createElement(i.a,null,a.a.createElement(s.a,{title:"Blogs"}),a.a.createElement("div",null,a.a.createElement("h1",null,"Kim's Blog Posts"),a.a.createElement("h4",null,n.length," posts"),a.a.createElement(d,{type:"search",placeholder:"Search blog posts",onChange:function(t){return e.setState({searchField:t.target.value})}}),console.log(this.state.searchField),console.log(n),n.map((function(e){var t=e.node;return a.a.createElement(c.a,{key:t.id},a.a.createElement(c.c,{to:t.fields.slug},a.a.createElement(c.d,null,t.frontmatter.title)),a.a.createElement(c.e,null,"Posted on ",t.frontmatter.date),a.a.createElement(c.b,null,t.frontmatter.categories),a.a.createElement("p",null,t.excerpt))}))))},t}(a.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-blogs-js-b619b8d9d3ecd3bb96df.js.map