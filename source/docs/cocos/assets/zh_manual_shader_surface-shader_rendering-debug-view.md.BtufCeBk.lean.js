import{_ as h,E as n,c as l,m as d,a as t,J as e,w as a,a5 as o,o as s}from"./chunks/framework.CqnjdYks.js";const i="/docs/cocos/assets/debug-view.DZwElqV5.jpg",v=JSON.parse('{"title":"渲染调试功能","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/rendering-debug-view.md","filePath":"zh/manual/shader/surface-shader/rendering-debug-view.md"}'),_={name:"zh/manual/shader/surface-shader/rendering-debug-view.md"},c=d("h1",{id:"渲染调试功能",tabindex:"-1"},[t("渲染调试功能 "),d("a",{class:"header-anchor",href:"#渲染调试功能","aria-label":'Permalink to "渲染调试功能"'},"​")],-1),b=d("blockquote",null,[d("p",null,[d("strong",null,"注意"),t("：只有使用 Surface Shader 框架的材质，内置的渲染调试功能才可以生效。")])],-1),u=d("p",null,"通过在编辑器的场景预览窗口右上角按钮选择对应的调试模式即可同屏查看模型、材质、光照及其他计算数据，在渲染效果异常的时候可以快速定位问题。",-1),f=d("p",null,[d("img",{src:i,alt:"debug-view"})],-1),p=d("p",null,"为了方便逐像素对比，我们使用全屏调试而非画中画的显示方式，可以快速在同一幅画面中切换不同数据来定位渲染错误所在，也可使用取色器来探知像素的具体数值。",-1),g=d("strong",null,"无理数可视化",-1),m=o("",5),I=o("",10),V=o("",4);function T(q,P,x,S,y,A){const r=n("font");return s(),l("div",null,[c,b,u,f,p,d("p",null,[t("另外 Surface Shader 还内置了 "),g,t(" 的功能，一旦有一些像素出现异常的"),e(r,{color:"#ff0033"},{default:a(()=>[t(" 红色(255, 0, 51) ")]),_:1}),t("和"),e(r,{color:"#00ff33"},{default:a(()=>[t(" 绿色(0, 255, 51) ")]),_:1}),t("交替闪烁，则说明这些像素的渲染计算出现了无理数，请使用单项调试模式来检查模型切线或其他相关数据。")]),m,d("p",null,[t("调试重点"),e(r,{color:"#ff8000"},{default:a(()=>[t("聚焦在某个需要测试的数据上")]),_:1}),t("，整个场景都将此数据可视化输出。")]),I,d("p",null,[t("调试重点"),e(r,{color:"#ff8000"},{default:a(()=>[t("聚焦在总体的渲染表现上")]),_:1}),t("，可以屏蔽或打开每个模块，模块之间互不关联，可查看不同模块之间对渲染效果的影响。")]),d("p",null,[t("单项模式优先级高于组合模式，"),e(r,{color:"#ff0000"},{default:a(()=>[t("如果想使用组合模式的话，必须选中无单项模式。")]),_:1})]),V])}const w=h(_,[["render",T]]);export{v as __pageData,w as default};
