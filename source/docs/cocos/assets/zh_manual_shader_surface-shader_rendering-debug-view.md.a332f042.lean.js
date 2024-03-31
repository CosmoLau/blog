import{_ as o,v as s,b as n,F as d,L as t,E as a,O as e,R as h,M as l}from"./chunks/framework.5ffcbaff.js";const i="/docs/cocos/assets/debug-view.cc125d53.jpg",O=JSON.parse('{"title":"渲染调试功能","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/rendering-debug-view.md","filePath":"zh/manual/shader/surface-shader/rendering-debug-view.md"}'),b={name:"zh/manual/shader/surface-shader/rendering-debug-view.md"},c=d("h1",{id:"渲染调试功能",tabindex:"-1"},[t("渲染调试功能 "),d("a",{class:"header-anchor",href:"#渲染调试功能","aria-label":'Permalink to "渲染调试功能"'},"​")],-1),u=d("blockquote",null,[d("p",null,[d("strong",null,"注意"),t("：只有使用 Surface Shader 框架的材质，内置的渲染调试功能才可以生效。")])],-1),_=d("p",null,"通过在编辑器的场景预览窗口右上角按钮选择对应的调试模式即可同屏查看模型、材质、光照及其他计算数据，在渲染效果异常的时候可以快速定位问题。",-1),f=d("p",null,[d("img",{src:i,alt:"debug-view"})],-1),g=d("p",null,"为了方便逐像素对比，我们使用全屏调试而非画中画的显示方式，可以快速在同一幅画面中切换不同数据来定位渲染错误所在，也可使用取色器来探知像素的具体数值。",-1),p=d("strong",null,"无理数可视化",-1),m=h('<p>渲染调试功能细分为如下三种：<br></p><h2 id="_1、公共选项" tabindex="-1">1、公共选项 <a class="header-anchor" href="#_1、公共选项" aria-label="Permalink to &quot;1、公共选项&quot;">​</a></h2><p>无论单项还是组合模式中都生效的调试选项，包括：</p><table><thead><tr><th>名称</th><th>功能</th><th>调试技巧</th></tr></thead><tbody><tr><td>光照信息带固有色</td><td>勾选则显示正常材质光照，勾掉则显示白模纯光照的效果。</td><td>可更明显的查看AO、GI等间接光相关的影响。</td></tr><tr><td>级联阴影染色</td><td>级联阴影从近到远逐层染色，分布为偏红、绿、蓝、黄，超出阴影范围的区域无染色。</td><td>可查看并确认场景阴影的精细度。<br>如果三四层占比太少说明阴影过于精细，应当增大阴影可视距离。<br>如果一二层占比太少说明阴影过于粗糙，应当减小阴影可视距离。</td></tr></tbody></table><h2 id="_2、单项模式" tabindex="-1">2、单项模式 <a class="header-anchor" href="#_2、单项模式" aria-label="Permalink to &quot;2、单项模式&quot;">​</a></h2>',5),q=h('<p>可调试的数据包括四大类：</p><h3 id="i、原始模型数据" tabindex="-1">I、原始模型数据 <a class="header-anchor" href="#i、原始模型数据" aria-label="Permalink to &quot;I、原始模型数据&quot;">​</a></h3><table><thead><tr><th>名称</th><th>功能</th><th>说明及调试技巧</th><th>依赖项</th></tr></thead><tbody><tr><td>顶点色</td><td>同名称</td><td></td><td>必须在材质中勾选<strong>使用顶点色</strong></td></tr><tr><td>世界空间顶点法线</td><td>同名称</td><td></td><td></td></tr><tr><td>世界空间顶点切线</td><td>同名称</td><td>如果计算中出现了无理数或异常光照效果可以重点检查此处，如果是黑色则说明未开启模型切线但开启了法线贴图或各向异性。</td><td>不能在模型的切线设置中选择排除<br>必须在材质中勾选<strong>使用法线贴图</strong>或<strong>是各向异性</strong></td></tr><tr><td>世界空间顶点坐标</td><td>可视化顶点坐标（无缩放）</td><td>rgb显示xyz轴坐标数据。<br>可通过色彩来判断世界空间轴的不同，通过明暗来判断模型大小。</td><td></td></tr><tr><td>法线图镜像</td><td>显示法线图翻转复用标记</td><td>为了提高法线图利用率，有些对称的模型（如面部）只会烘焙一半的法线，另一半使用镜像标记复用法线图中的数据。<br>如果该标记的值在模型上没有任何变化，可能导致模型另一半的法线呈现凹凸翻转等异常效果。</td><td>必须在材质中勾选<strong>使用法线贴图</strong></td></tr><tr><td>正反面标记</td><td>显示正面或反面</td><td>默认的单面模型，法线不会自动区分，在模型的正面和反面看到的明暗是相同的。<br>当单面模型使用双面材质时，会自动区分正反面法线，在模型的正面和反面看到的明暗是不同的。<br>该标记为白色表示模型正面，黑色表示反面。可通过它来查验单面模型的光照明暗问题。</td><td></td></tr><tr><td>UV0</td><td>显示第一套UV</td><td></td><td></td></tr><tr><td>UV1</td><td>显示第二套UV</td><td></td><td>必须在材质中勾选<strong>使用第二套UV</strong></td></tr><tr><td>光照贴图UV</td><td>显示光照贴图UV</td><td>如果光照贴图效果不正确，可开启此选项，对比光照贴图的大致区域来查错。</td><td>必须烘焙场景</td></tr><tr><td>投影深度Z</td><td>显示（0-1非线性变化）深度</td><td>远裁面过大会导致近景深度值也会偏高</td><td></td></tr><tr><td>线性深度W</td><td>显示（0-1线性变化）深度</td><td>远裁面过大会导致近景深度值也会偏高</td><td></td></tr></tbody></table><h3 id="ii、原始材质数据" tabindex="-1">II、原始材质数据 <a class="header-anchor" href="#ii、原始材质数据" aria-label="Permalink to &quot;II、原始材质数据&quot;">​</a></h3><table><thead><tr><th>名称</th><th>功能</th><th>说明及调试技巧</th><th>依赖项</th></tr></thead><tbody><tr><td>世界空间像素法线</td><td>同名称</td><td>可以和对应的顶点数据做对比以查看法线贴图的影响是否正确</td><td></td></tr><tr><td>世界空间像素切线/副法线</td><td>同名称</td><td>可以和对应的顶点数据做对比以查看法线贴图的影响是否正确</td><td>不能在模型的切线设置中选择排除<br>必须在材质中勾选<strong>使用法线贴图</strong>或<strong>是各向异性</strong></td></tr><tr><td>固有色</td><td>同名称</td><td></td><td></td></tr><tr><td>漫反射颜色</td><td>从固有色和其他材质数据计算出的影响漫反射光照的基础色</td><td></td><td></td></tr><tr><td>镜面反射颜色</td><td>从固有色和其他材质数据计算出的影响镜面反射光照的基础色</td><td></td><td></td></tr><tr><td>不透明度</td><td>越小表示越透明</td><td></td><td>必须在材质中开启<strong>Alpha Blend</strong></td></tr><tr><td>金属度</td><td>同名称</td><td></td><td></td></tr><tr><td>粗糙度</td><td>同名称</td><td></td><td></td></tr><tr><td>镜面反射强度</td><td>显示非金属基准镜面反射率F0的倍增</td><td>如果镜面反射都为黑色，请检查此项数据是否设置为0</td><td></td></tr></tbody></table><h3 id="iii、光照结果数据" tabindex="-1">III、光照结果数据 <a class="header-anchor" href="#iii、光照结果数据" aria-label="Permalink to &quot;III、光照结果数据&quot;">​</a></h3><table><thead><tr><th>名称</th><th>功能</th><th>说明及调试技巧</th><th>依赖项</th></tr></thead><tbody><tr><td>直接光漫反射</td><td>同名称</td><td></td><td></td></tr><tr><td>直接光镜面反射</td><td>同名称</td><td></td><td></td></tr><tr><td>直接光照</td><td>相当于直接光漫反射 + 直接光镜面反射</td><td></td><td></td></tr><tr><td>环境光漫反射</td><td>同名称</td><td></td><td></td></tr><tr><td>环境光镜面反射</td><td>同名称</td><td></td><td></td></tr><tr><td>环境光照</td><td>相当于环境光漫反射 + 环境光镜面反射</td><td></td><td></td></tr><tr><td>自发光</td><td>显示材质中设置的自发光颜色</td><td></td><td></td></tr><tr><td>光照贴图</td><td>显示烘焙的光照贴图RGB颜色</td><td></td><td>必须烘焙场景</td></tr><tr><td>阴影</td><td>显示平行光、聚光灯、点光的阴影</td><td></td><td>必须在场景面板和光源中开启阴影，物体开启接收阴影</td></tr><tr><td>环境光遮蔽</td><td>显示材质中设置的AO贴图及实时AO的值</td><td></td><td></td></tr></tbody></table><h3 id="iv、其他数据" tabindex="-1">IV、其他数据 <a class="header-anchor" href="#iv、其他数据" aria-label="Permalink to &quot;IV、其他数据&quot;">​</a></h3><table><thead><tr><th>名称</th><th>功能</th><th>说明及调试技巧</th><th>依赖项</th></tr></thead><tbody><tr><td>雾因子</td><td>显示雾效因子，越大说明雾越浓</td><td></td><td>必须在场景面板中开启雾效</td></tr></tbody></table><h2 id="_3、组合模式" tabindex="-1">3、组合模式 <a class="header-anchor" href="#_3、组合模式" aria-label="Permalink to &quot;3、组合模式&quot;">​</a></h2>',10),I=h('<p>包括：</p><table><thead><tr><th>名称</th><th>功能</th><th>说明及调试技巧</th><th>类别</th></tr></thead><tbody><tr><td>直接光漫反射</td><td>开启/禁用直接光漫反射</td><td>影响平行光、聚光灯和点光</td><td>光照</td></tr><tr><td>直接光镜面反射</td><td>开启/禁用直接光镜面反射</td><td>影响平行光、聚光灯和点光</td><td>光照</td></tr><tr><td>环境光漫反射</td><td>开启/禁用环境光漫反射</td><td>影响天光</td><td>光照</td></tr><tr><td>环境光镜面反射</td><td>开启/禁用环境光镜面反射</td><td>影响天光</td><td>光照</td></tr><tr><td>自发光</td><td>开启/禁用自发光</td><td>如果有些物体过亮或者曝掉，可尝试关闭此选项是不是材质中设置了不必要的自发光</td><td>光照</td></tr><tr><td>光照贴图</td><td>开启/禁用烘焙光照</td><td>影响烘焙</td><td>光照</td></tr><tr><td>阴影</td><td>开启/禁用直接光阴影</td><td>影响实时平行光/聚光灯/点光阴影和烘焙的平行光阴影</td><td>光照</td></tr><tr><td>环境光遮蔽</td><td>开启/禁用环境光遮蔽</td><td>影响天光</td><td>光照</td></tr><tr><td>法线贴图</td><td>开启/禁用法线图</td><td>如果光照异常散乱，可尝试关闭此选项以查看是否是法线图扰动强度不当所致<br>如果光照效果错误或出现无理数，可尝试关闭此选项以查看是否是模型未开启切线所致</td><td>材质</td></tr><tr><td>雾</td><td>开启/禁用雾效</td><td>如果场景颜色异常变灰，可尝试关闭此选项以查看是否是雾参数设置不当所致</td><td>环境</td></tr><tr><td>色调映射</td><td>开启/禁用色调映射</td><td>如果场景色彩与原材质差异过大，可尝试关闭此选项查看是否正常，说明场景面板中不该勾选UseHDR</td><td>色彩空间</td></tr><tr><td>伽马矫正</td><td>开启/禁用伽马矫正</td><td>如果场景色彩异常浓艳与偏暗，可尝试关闭此选项查看是否正常，说明贴图资源可能被多次伽马矫正了</td><td>色彩空间</td></tr></tbody></table><h2 id="_4、运行时使用渲染调试" tabindex="-1">4、运行时使用渲染调试 <a class="header-anchor" href="#_4、运行时使用渲染调试" aria-label="Permalink to &quot;4、运行时使用渲染调试&quot;">​</a></h2><p>使用引擎内置资源中的预设体 <code>tools/debug-view-runtime-control</code>，将它拖到场景 Canvas 节点下即可在运行时使用 UI 来进行渲染调试。</p>',4);function v(x,y,P,k,V,U){const r=l("font");return s(),n("div",null,[c,u,_,f,g,d("p",null,[t("另外 Surface Shader 还内置了 "),p,t(" 的功能，一旦有一些像素出现异常的"),a(r,{color:"#ff0033"},{default:e(()=>[t(" 红色(255, 0, 51) ")]),_:1}),t("和"),a(r,{color:"#00ff33"},{default:e(()=>[t(" 绿色(0, 255, 51) ")]),_:1}),t("交替闪烁，则说明这些像素的渲染计算出现了无理数，请使用单项调试模式来检查模型切线或其他相关数据。")]),m,d("p",null,[t("调试重点"),a(r,{color:"#ff8000"},{default:e(()=>[t("聚焦在某个需要测试的数据上")]),_:1}),t("，整个场景都将此数据可视化输出。")]),q,d("p",null,[t("调试重点"),a(r,{color:"#ff8000"},{default:e(()=>[t("聚焦在总体的渲染表现上")]),_:1}),t("，可以屏蔽或打开每个模块，模块之间互不关联，可查看不同模块之间对渲染效果的影响。")]),d("p",null,[t("单项模式优先级高于组合模式，"),a(r,{color:"#ff0000"},{default:e(()=>[t("如果想使用组合模式的话，必须选中无单项模式。")]),_:1})]),I])}const S=o(b,[["render",v]]);export{O as __pageData,S as default};
