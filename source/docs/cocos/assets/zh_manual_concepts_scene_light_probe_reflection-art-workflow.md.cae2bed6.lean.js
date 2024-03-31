import{_ as t,v as o,b as s,R as r}from"./chunks/framework.5ffcbaff.js";const e="/docs/cocos/assets/static.2e1896d4.png",n="/docs/cocos/assets/mesh-renderer-reflect-probe.c55dbcde.png",a="/docs/cocos/assets/bake.971cbb9c.png",l="/docs/cocos/assets/plannar-scene.f71a002d.png",i="/docs/cocos/assets/plannar-probe-property.5216803e.png",c="/docs/cocos/assets/plane-reflection-probe-property.9e79e087.png",p="/docs/cocos/assets/plannar-reflection-result.180bdf14.png",w=JSON.parse('{"title":"反射探针美术工作流","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/light/probe/reflection-art-workflow.md","filePath":"zh/manual/concepts/scene/light/probe/reflection-art-workflow.md"}'),g={name:"zh/manual/concepts/scene/light/probe/reflection-art-workflow.md"},d=r('<h1 id="反射探针美术工作流" tabindex="-1">反射探针美术工作流 <a class="header-anchor" href="#反射探针美术工作流" aria-label="Permalink to &quot;反射探针美术工作流&quot;">​</a></h1><h2 id="烘焙反射探针工作流" tabindex="-1">烘焙反射探针工作流 <a class="header-anchor" href="#烘焙反射探针工作流" aria-label="Permalink to &quot;烘焙反射探针工作流&quot;">​</a></h2><ul><li><p>在场景内创建 <strong>反射探针</strong> 节点</p></li><li><p>将需要烘焙反射的节点的 <strong>Mobility</strong> 属性修改为 <strong>Static</strong></p><p><img src="'+e+'" alt="static"></p></li><li><p>在需要烘焙反射的节点的 <strong>属性检查器</strong> 上下拉找到 <strong>Reflection Probe Settings</strong>，并调整其对应的属性：</p><p><img src="'+n+'" alt="setting"></p><ul><li><strong>Reflection Probe</strong>: 选择反射探针的类型</li><li><strong>Bake To Reflection Probe</strong>: 勾选是否将该网格渲染器的反射信息烘焙至反射探针相关的贴图</li></ul><p>详情请参考 <a href="./../../../../engine/renderable/model-component.html">MeshRenderer 组件参考</a></p></li><li><p>烘焙</p><ul><li><p>点击 <strong>属性检查器</strong> 上的 <strong>Bake</strong> 按钮，烘焙当前已选择的反射探针：</p><p><img src="'+a+'" alt="bake"></p></li><li><p>主菜单上选择 <strong>项目</strong> -&gt; <strong>光照烘焙</strong> -&gt; <strong>反射探针</strong>，打开 <a href="./reflection-probe-panel.html">反射探针面板</a>，通过点击面板上的烘焙按钮进行烘焙。</p></li></ul></li><li><p>检查烘焙结果</p><p>烘焙完成后，<strong>资源管理器</strong> 内会创建以 <strong>reflectionProbe_</strong> 开头为命名的贴图。开发者可查看这些贴图是否满足预期。</p></li></ul><p>更多示例请参考 <a href="./example.html">基于图像的光照示例</a>。</p><h2 id="实时反射探针工作流示例" tabindex="-1">实时反射探针工作流示例 <a class="header-anchor" href="#实时反射探针工作流示例" aria-label="Permalink to &quot;实时反射探针工作流示例&quot;">​</a></h2><ul><li><p>搭建如图示的场景：</p><p><img src="'+l+'" alt="scene"></p></li><li><p>场景中创建 <strong>反射探针</strong> 节点:</p><ul><li>修改 <strong>探针类型</strong> 为 <strong>PLANNAR</strong></li><li>配置 <strong>Source Camera</strong> 属性为上述步骤中创建的 <strong>Main Camera</strong> 节点</li></ul><p><img src="'+i+'" alt="inspector"></p></li><li><p>修改场景中 <strong>Plane</strong> 节点的 <strong>MeshRenderer</strong> 属性的 <strong>Reflection Probe</strong> 为 <strong>PLANNAR_REFLECTION</strong>：</p><p><img src="'+c+'" alt="inspector"></p></li><li><p>此时可以观察到场景内，该平面的反射变化：</p><p><img src="'+p+'" alt="plannar-reflection-result"></p></li></ul>',6),m=[d];function h(f,_,b,u,P,k){return o(),s("div",null,m)}const x=t(g,[["render",h]]);export{w as __pageData,x as default};
