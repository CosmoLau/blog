import{_ as s,c as t,o as e,a4 as o}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/effects.CVPA7ovH.png",a="/docs/cocos/assets/surface-standard-effect.idE9OM_l.png",l="/docs/cocos/assets/scene._BROY4YI.png",i="/docs/cocos/assets/light-probe.CtGDP-Yp.png",p="/docs/cocos/assets/reflection-probe.CRNISWKl.png",c="/docs/cocos/assets/mobility.CLZb7Mf9.png",n="/docs/cocos/assets/probe-setting.DdFff3bg.png",g="/docs/cocos/assets/static.CmZ2WNus.png",h="/docs/cocos/assets/bake-option.C8oMzKGG.png",m="/docs/cocos/assets/baking-panels.kV6sL8c1.png",d="/docs/cocos/assets/lightmap-panel.lp03omAq.png",_="/docs/cocos/assets/skybox.CCx0kT8h.png",f="/docs/cocos/assets/baking-result.C-03mvqK.png",y=JSON.parse('{"title":"基于图像的光照示例","description":"","frontmatter":{},"headers":[],"relativePath":"zh/concepts/scene/light/probe/example.md","filePath":"zh/concepts/scene/light/probe/example.md","lastUpdated":1712305443000}'),u={name:"zh/concepts/scene/light/probe/example.md"},b=o('<h1 id="基于图像的光照示例" tabindex="-1">基于图像的光照示例 <a class="header-anchor" href="#基于图像的光照示例" aria-label="Permalink to &quot;基于图像的光照示例&quot;">​</a></h1><p>在 Cocos Creator 中开发者可通过组合基于图像光照的功能。这些功能包含：</p><ul><li>通过 <a href="./../../skybox">天空盒</a> 的烘焙反射卷积图功能以提供更好的环境反射效果</li><li>通过 <a href="./../lightmap">光照贴图</a> 将光照信息烘焙到贴图以提高光照性能</li><li>通过 <a href="./light-probe">光照探针</a>/<a href="./reflection-probe">反射探针</a> 检测物体间的反射信息</li></ul><p>本文将从艺术资产工作者的工作流演示如何在您的场景中烘焙基于图像的照明。</p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>由于光照探针和反射探针都是针对基于物理的光照模型，因此在制作美术资源时，请遵循 PBR 工作流程。</p><p>请提前准备好使用以下着色器的材质文件；或通过 <a href="./../../../../asset/model/dcc-export-mesh">导入从 DCC 工具导出的模型</a> 导出，导入到 <strong>资源管理器</strong> 后会自动识别模型内的材质并将其着色器转化为引擎支持的 PBR 着色器。</p><p><img src="'+r+'" alt="effects"> <img src="'+a+'" alt="effects"></p><ul><li>builtin-standard：内置标准 PBR 着色器</li><li>dcc/imported-metallic-roughness：基于 metallic-roughness 工作流导出的模型使用的着色器</li><li>dcc/imported-specular-glossiness：基于 specular-glossiniess 工作流导出的模型使用的着色器</li><li>surface/standard：内置标准表面 PBR 着色器</li><li>dcc/surface-imported-metallic-roughness：内置标准表面基于 metallic-roughness 工作流导出的模型使用的着色器</li><li>dcc/surface-imported-specular-glossiness：内置标准表面基于 specular-glossiniess 工作流导出的模型使用的着色器</li></ul><p>也可以待模型导入到 <strong>资源管理器</strong> 后手动调整至使用上述标准着色器。</p><p>开发者也可以查看下列文档以便了解整个 PBR 的工作流。</p><ul><li><a href="./../pbr-lighting">基于物理的光照</a></li><li><a href="./../../../../shader/effect-builtin-pbr">基于物理的光照模型（Physically Based Rendering - PBR）</a></li><li><a href="./../../../../asset/model/dcc-export-mesh">导入从 DCC 工具导出的模型</a>。</li><li><a href="./../../../../importer/materials/fbx-materials">FBX 智能材质导入</a></li></ul><h2 id="烘焙光照" tabindex="-1">烘焙光照 <a class="header-anchor" href="#烘焙光照" aria-label="Permalink to &quot;烘焙光照&quot;">​</a></h2><p>通过 <a href="./light-probe-panel">光照探针面板</a>、<a href="./reflection-probe-panel">反射探针面板</a> 和 <a href="./../lightmap">光照贴图</a> 可进行光照的烘焙用于生成基于图像的光照。</p><h3 id="烘焙流程" tabindex="-1">烘焙流程 <a class="header-anchor" href="#烘焙流程" aria-label="Permalink to &quot;烘焙流程&quot;">​</a></h3><p>以手动搭建的场景为例：</p><p><img src="'+l+'" alt="scene"></p><ul><li><p>增加 <a href="./light-probe">光照探针</a></p><p><img src="'+i+'" alt="light-probe"></p></li><li><p>添加 <a href="./relfection-probe">反射探针</a></p><p><img src="'+p+'" alt="reflection-probe"></p></li><li><p>调整节点的属性</p><ul><li><p>对于需要使用烘焙结果的节点，调整其属性如下：</p><p><img src="'+c+'" alt="mobility"></p><p><img src="'+n+'" alt="setting"></p></li><li><p>对于要烘焙的节点</p><ul><li>确保其 <strong>属性检查器</strong> 内的 <strong>Mobility</strong> 属性为 <strong>Static</strong>：</li></ul><p><img src="'+g+'" alt="static"></p><ul><li>勾选其 <strong>MeshRenderer</strong> 属性的 <strong>Bake To Light Probe</strong> 以及 <strong>Bake To Reflection Probe</strong> 属性，并合理选取 <strong>Reflection Probe</strong>：</li></ul><p><img src="'+h+'" alt="relfection-probe"></p></li></ul></li><li><p>打开 <strong>反射探针</strong> 和 <strong>光照探针</strong> 面板。</p><ul><li><p>点击上述面板上的 <strong>烘焙</strong> 按钮并等待烘焙流程结束。</p><p><img src="'+m+'" alt="baking-panels"></p></li></ul></li><li><p>可以选择通过 <strong>光照烘焙</strong> 面板烘焙 <a href="./../lightmap">光照贴图</a>:</p><p><img src="'+d+'" alt="lightmap manel"></p></li><li><p>在 <strong>层级管理</strong> 内 <strong>场景节点</strong>，在其 <strong>属性检查器</strong> 上找到 <a href="./../../skybox">天空盒</a> 组件并调整相应的属性以便获得更好的效果</p><p><img src="'+_+'" alt="skybox"></p><ul><li>将 <strong>Env Lighting Type</strong> 调整为 <strong>AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION（漫反射卷积图和环境反射）</strong></li><li>点击 <strong>天空盒</strong> 组件上的烘焙按钮以烘焙反射卷积图。</li></ul><p>以此可以获取更真实的环境反射光照效果</p></li><li><p>检查烘焙的结果</p><p><img src="'+f+'" alt="result"></p></li></ul>',18),P=[b];function x(k,C,R,B,T,E){return e(),t("div",null,P)}const S=s(u,[["render",x]]);export{y as __pageData,S as default};
