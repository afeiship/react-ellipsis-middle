var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;"undefined"!=typeof require&&require;import{r as o,_ as l,R as s,c as a,s as c,a as d}from"./vendor.76891dd0.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const p="react-ellipsis-middle";class m extends o.exports.Component{get sizeStyle(){const{size:e,minSize:r}=this.props;return{width:e,minWidth:r}}render(){const e=this.props,{className:o,children:c,size:d}=e,m=((e,n)=>{var o={};for(var l in e)t.call(e,l)&&n.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&r)for(var l of r(e))n.indexOf(l)<0&&i.call(e,l)&&(o[l]=e[l]);return o})(e,["className","children","size"]),f=l(m);return s.createElement("div",((e,o)=>{for(var l in o||(o={}))t.call(o,l)&&n(e,l,o[l]);if(r)for(var l of r(o))i.call(o,l)&&n(e,l,o[l]);return e})({"data-component":p,className:a(p,o)},f),s.createElement("div",{className:"is-fulltext"},c),s.createElement("div",{className:"is-halftext"},s.createElement("div",{className:"is-overlap",style:this.sizeStyle},c),c))}}m.displayName=p,m.version="__VERSION__",m.defaultProps={size:"50%",minSize:0};const f=c.div`
  width: 600px;
  margin: 50px auto;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
  resize: horizontal;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  .react-ellipsis-middle {
    cursor: pointer;
    &:hover {
      transition: all 0.5s ease;
      background-color: #f60;
    }
  }
`;var u=e=>s.createElement(f,null,s.createElement(m,{size:"120px"},"CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26"),s.createElement(m,{size:"50%"},"CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26"),s.createElement(m,null,"CSS 实现优惠券的技巧 - 2021-03-26"),s.createElement(m,{minSize:"40px"},"我是一个很长的文件，我是一个很长的文件，但请始终保持我的后缀名.pdf"));d.render(s.createElement(s.StrictMode,null,s.createElement(u,null)),document.getElementById("root"));
