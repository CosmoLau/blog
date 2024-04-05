import{_ as e,c as t,o as n,a4 as r}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/skinned-mesh-renderer.D6hnkTkJ.png",f=JSON.parse('{"title":"蒙皮网格渲染器组件（SkinnedMeshRenderer）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/module-map/mesh/skinnedMeshRenderer.md","filePath":"zh/module-map/mesh/skinnedMeshRenderer.md","lastUpdated":1712305443000}'),d={name:"zh/module-map/mesh/skinnedMeshRenderer.md"},a=r('<h1 id="蒙皮网格渲染器组件-skinnedmeshrenderer" tabindex="-1">蒙皮网格渲染器组件（SkinnedMeshRenderer） <a class="header-anchor" href="#蒙皮网格渲染器组件-skinnedmeshrenderer" aria-label="Permalink to &quot;蒙皮网格渲染器组件（SkinnedMeshRenderer）&quot;">​</a></h1><p>蒙皮网格渲染器组件（SkinnedMeshRenderer）主要用于渲染蒙皮模型网格。</p><p><a href="./../../asset/model/mesh">导入模型资源</a> 后，若模型网格中带有蒙皮信息，在使用模型时，SkinnedMeshRenderer 组件便会自动添加到模型节点上。</p><p><img src="'+s+'" alt="SkinnedMeshRenderer"></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Materials</strong></td><td style="text-align:left;">网格资源允许使用多个材质资源，所有材质资源都存在 <code>materials</code> 数组中。<br>如果网格资源中有多个子网格，那么 Mesh Renderer 会从 <code>materials</code> 数组中获取对应的材质来渲染此子网格。</td></tr><tr><td style="text-align:left;"><strong>LightmapSettings</strong></td><td style="text-align:left;">用于烘焙 Lightmap，详情请参考 <a href="./../../concepts/scene/light/lightmap">光照贴图</a>。</td></tr><tr><td style="text-align:left;"><strong>ShadowCastingMode</strong></td><td style="text-align:left;">指定当前模型是否会投射阴影，需要先在场景中 <a href="./../../concepts/scene/light/shadow#开启阴影">开启阴影</a>。</td></tr><tr><td style="text-align:left;"><strong>ReceiveShadow</strong></td><td style="text-align:left;">指定当前模型是否会接收并显示其它物体产生的阴影效果，需要先在场景中 <a href="./../../concepts/scene/light/shadow#开启阴影">开启阴影</a>。该属性仅在阴影类型为 <strong>ShadowMap</strong> 时生效。</td></tr><tr><td style="text-align:left;"><strong>Mesh</strong></td><td style="text-align:left;">指定渲染所用的网格资源，网格渲染器组件中 <a href="./../../engine/renderable/model-component#网格资源">网格资源</a> 部分的内容。</td></tr><tr><td style="text-align:left;"><strong>Skeleton</strong></td><td style="text-align:left;">当前模型的骨骼数据，一般直接来自导入的 glTF 或 FBX 模型文件</td></tr><tr><td style="text-align:left;"><strong>SkinningRoot</strong></td><td style="text-align:left;">骨骼根节点的引用，对应控制该模型的动画组件所在节点</td></tr></tbody></table><p>蒙皮网格渲染器组件相关接口请参考 <a href="./__APIDOC__/zh/class/SkinnedMeshRenderer">SkinnedMeshRenderer API</a>。</p><p>蒙皮网格渲染器组件（SkinnedMeshRenderer）与普通的网格渲染组件（MeshRenderer）的区别在于：</p><ul><li>MeshRenderer 组件渲染的是静态模型，由 3D 模型数据组成</li><li>SkinnedMeshRenderer 组件不但渲染模型还会渲染骨骼，因此除了 3D 模型数据外，还包括骨骼数据以及顶点权重等数据。<br>但如果 SkinnedMeshRenderer 上没有挂载任何骨骼数据，那么它和普通的 MeshRenderer 组件没有区别。</li></ul>',9),l=[a];function i(o,h,g,c,p,m){return n(),t("div",null,l)}const k=e(d,[["render",i]]);export{f as __pageData,k as default};
