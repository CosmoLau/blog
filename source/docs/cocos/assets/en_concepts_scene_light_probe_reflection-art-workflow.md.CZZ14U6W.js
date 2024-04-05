import{_ as e,c as t,o,a4 as r}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/static.B2maZiFk.png",s="/docs/cocos/assets/mesh-renderer-reflect-probe.BzcxpCA8.png",i="/docs/cocos/assets/bake.DhFGvw7D.png",l="/docs/cocos/assets/plannar-scene.CWKtqfYK.png",a="/docs/cocos/assets/plannar-probe-property.UVn7UXnX.png",c="/docs/cocos/assets/plane-reflection-probe-property.66hZ3aLb.png",p="/docs/cocos/assets/plannar-reflection-result.BgsMtPV2.png",R=JSON.parse('{"title":"Reflection Probe Art Workflow","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/light/probe/reflection-art-workflow.md","filePath":"en/concepts/scene/light/probe/reflection-art-workflow.md","lastUpdated":1712305443000}'),f={name:"en/concepts/scene/light/probe/reflection-art-workflow.md"},g=r('<h1 id="reflection-probe-art-workflow" tabindex="-1">Reflection Probe Art Workflow <a class="header-anchor" href="#reflection-probe-art-workflow" aria-label="Permalink to &quot;Reflection Probe Art Workflow&quot;">​</a></h1><h2 id="bake-reflection-probe-workflow" tabindex="-1">Bake Reflection Probe Workflow <a class="header-anchor" href="#bake-reflection-probe-workflow" aria-label="Permalink to &quot;Bake Reflection Probe Workflow&quot;">​</a></h2><ul><li><p>Create <strong>Reflection Probe</strong> nodes within the scene</p></li><li><p>Modify the <strong>Mobility</strong> property of the node that needs to bake the reflection to <strong>Static</strong></p><p><img src="'+n+'" alt="static"></p></li><li><p>Find <strong>Reflection Probe Settings</strong> by scrolling down on the <strong>Inspector</strong> of the node where the reflection needs to be baked, and adjust its corresponding property to.</p><p><img src="'+s+'" alt="setting"></p><ul><li><strong>Reflection Probe</strong>: Select the type of reflection probe</li><li><strong>Bake To Reflection Probe</strong>: Check whether to bake the reflection information of this mesh renderer to the reflection probe related map</li></ul><p>For detail, please refer to <a href="./../../../../engine/renderable/model-component">MeshRenderer Component Reference</a></p></li><li><p>Bake</p><ul><li><p>Click the <strong>Bake</strong> button on the <strong>Inspector</strong> to bake the currently selected reflection probe.</p><p><img src="'+i+'" alt="bake"></p></li><li><p>Select <strong>Projects</strong> -&gt; <strong>Light</strong> -&gt; <strong>Reflection Probe</strong> on the main menu to open the <a href="./reflection-probe-panel">Reflection Probe Panel</a> and bake by clicking the bake button on the panel.</p></li></ul></li><li><p>Check baking results</p><p>After baking is complete, <strong>Asset Manager</strong> creates mappings named starting with <strong>reflectionProbe_</strong> within the <strong>Asset Manager</strong>. Developers can see if these mappings meet expectations.</p></li></ul><p>For more examples, please refer to <a href="./example">IBL Example</a>.</p><h2 id="real-time-reflection-probe-workflow" tabindex="-1">Real-time Reflection Probe Workflow <a class="header-anchor" href="#real-time-reflection-probe-workflow" aria-label="Permalink to &quot;Real-time Reflection Probe Workflow&quot;">​</a></h2><ul><li><p>Build the scene as shown in the figure.</p><p><img src="'+l+'" alt="scene"></p></li><li><p>Create <strong>Reflection Probe</strong> nodes in the scene:</p><ul><li>Modify <strong>Probe Type</strong> to <strong>PLANNAR</strong></li><li>Configure the <strong>Source Camera</strong> property to be the <strong>Main Camera</strong> node created in the above step</li></ul><p><img src="'+a+'" alt="inspector"></p></li><li><p>Modify the <strong>Reflection Probe</strong> of the <strong>MeshRenderer</strong> property of the <strong>Plane</strong> node in the scene to <strong>PLANNAR_REFLECTION</strong>.</p><p><img src="'+c+'" alt="inspector"></p></li><li><p>At this point it can be observed that within the scene, the reflection of the plane changes.</p><p><img src="'+p+'" alt="plannar-reflection-result"></p></li></ul>',6),h=[g];function b(d,m,k,_,w,u){return o(),t("div",null,h)}const A=e(f,[["render",b]]);export{R as __pageData,A as default};
