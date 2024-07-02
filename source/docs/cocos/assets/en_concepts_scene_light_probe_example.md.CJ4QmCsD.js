import{_ as e,c as t,o,a4 as s}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/effects.CVPA7ovH.png",i="/docs/cocos/assets/surface-standard-effect.idE9OM_l.png",r="/docs/cocos/assets/scene._BROY4YI.png",n="/docs/cocos/assets/light-probe.CtGDP-Yp.png",l="/docs/cocos/assets/reflection-probe.CRNISWKl.png",p="/docs/cocos/assets/mobility.CLZb7Mf9.png",c="/docs/cocos/assets/probe-setting.DdFff3bg.png",g="/docs/cocos/assets/static.CmZ2WNus.png",h="/docs/cocos/assets/bake-option.C8oMzKGG.png",d="/docs/cocos/assets/baking-panels.kV6sL8c1.png",m="/docs/cocos/assets/lightmap-panel.lp03omAq.png",f="/docs/cocos/assets/skybox.CCx0kT8h.png",b="/docs/cocos/assets/baking-result.C-03mvqK.png",I=JSON.parse('{"title":"IBL Example","description":"","frontmatter":{},"headers":[],"relativePath":"en/concepts/scene/light/probe/example.md","filePath":"en/concepts/scene/light/probe/example.md","lastUpdated":1712305443000}'),u={name:"en/concepts/scene/light/probe/example.md"},_=s('<h1 id="ibl-example" tabindex="-1">IBL Example <a class="header-anchor" href="#ibl-example" aria-label="Permalink to &quot;IBL Example&quot;">​</a></h1><p>In Cocos Creator developers can combine image lighting based features. These features include.</p><ul><li>via <a href="./../../skybox">skybox</a> with baked reflection convolution to provide better ambient reflection effects</li><li>Bake lighting information into the environment with <a href="./../lightmap">Lightmapping</a> to bake lighting information into the map to improve lighting performance</li><li>Bake lighting information into maps to improve lighting performance via <a href="./light-probe">light-probe</a>/<a href="./reflection-probe">reflection-probe</a> to detect reflections between objects</li></ul><p>This article will demonstrate how to bake image-based lighting into your scenes from an art asset worker&#39;s workflow.</p><h2 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h2><p>Since both Light Probe and Reflection Probe are for physically based lighting models, please follow the PBR workflow when creating art resources.</p><p>Please prepare the material file in advance using the following shaders; or import the model exported from the DCC tool via <a href="./../../../../asset/model/dcc-export-mesh">Importing Models Exported from DCC Tools</a>. Importing to <strong>Resource Manager</strong> will automatically recognize the materials in the model and convert its shaders to PBR shaders supported by the engine.</p><p><img src="'+a+'" alt="effects"> <img src="'+i+'" alt="effects"></p><ul><li>builtin-standard: built-in standard PBR shader</li><li>dcc/imported-metallic-roughness: shader for models exported based on the metallic-roughness workflow</li><li>dcc/imported-specular-glossiness: shader for models exported based on the specular-glossiniess workflow</li><li>surface/standard: built-in standard surface PBR shader</li><li>dcc/surface-imported-metallic-roughness: built-in shader for models exported from the metallic-roughness workflow based on the standard surface</li><li>dcc/surface-imported-specular-glossiness: built-in shader for models exported from the specular-glossiniess workflow for standard surfaces</li></ul><p>It can also be manually adjusted to use the above standard shaders after the model has been imported into <strong>Assets Manager</strong>.</p><p>Developers can also review the following documentation to understand the entire PBR workflow.</p><ul><li><a href="./../pbr-lighting">Physically Based Lighting</a></li><li><a href="./../../../../shader/effect-builtin-pbr">Physically Based Rendering (PBR)</a></li><li><a href="./../../../../asset/model/dcc-export-mesh">Importing Models Exported from DCC Tools</a>.</li><li><a href="./../../../../importer/materials/fbx-materials">FBX Smart Material Conversion</a></li></ul><h2 id="bake-lights" tabindex="-1">Bake Lights <a class="header-anchor" href="#bake-lights" aria-label="Permalink to &quot;Bake Lights&quot;">​</a></h2><p>The <a href="./light-probe-panel">light-probe panel</a>, and <a href="./../lightmap">lightmap</a> can be used for light baking to generate image-based lighting.</p><h3 id="bakeing-process" tabindex="-1">Bakeing Process <a class="header-anchor" href="#bakeing-process" aria-label="Permalink to &quot;Bakeing Process&quot;">​</a></h3><p>As an example of a manually built scene.</p><p><img src="'+r+'" alt="scene"></p><ul><li><p>Add <a href="./light-probe">light-probe</a></p><p><img src="'+n+'" alt="light-probe"></p></li><li><p>Add <a href="./relfection-probe">reflection probes</a></p><p><img src="'+l+'" alt="reflection-probe"></p></li><li><p>Adjusting the properties of a node</p><ul><li><p>For the nodes that need to use the baked results, adjust their properties as follows:</p><p><img src="'+p+'" alt="mobility"></p><p><img src="'+c+'" alt="setting"></p></li><li><p>For the node to be baked</p><ul><li>Ensure that the <strong>Mobility</strong> property within its <strong>Inspector</strong> is <strong>Static</strong>.</li></ul><p><img src="'+g+'" alt="static"></p><ul><li>Check the <strong>Bake To Light Probe</strong> and <strong>Bake To Reflection Probe</strong> properties of its <strong>MeshRenderer</strong> property and select <strong>Reflection Probe</strong> wisely</li></ul><p><img src="'+h+'" alt="relfection-probe"></p></li></ul></li><li><p>Open the <strong>Reflection Probe</strong> and <strong>Light Probe</strong> panels.</p><ul><li><p>Click the <strong>Bake</strong> button on the above panel and wait for the baking process to finish.</p><p><img src="'+d+'" alt="baking-panels"></p></li></ul></li><li><p>Optionally, you can bake [lightmap] via the <strong>Light Baking</strong> panel (../lightmap.md):</p><p><img src="'+m+'" alt="lightmap manel"></p></li><li><p>Within <strong>Hierarchy</strong> <strong>Scene Node</strong>, find <a href="./../../skybox">Skybox</a> on its <strong>Inspector</strong> component and adjust the corresponding properties to get better results</p><p><img src="'+f+'" alt="skybox"></p><ul><li>Adjust <strong>Env Lighting Type</strong> to <strong>AUTOGEN_HEMISPHERE_DIFFUSE_WITH_REFLECTION</strong></li><li>Click the <strong>Bake</strong> button on the <strong>Skybox</strong> component to bake the reflection convolution map.</li></ul><p>This will give you a more realistic ambient reflection lighting effect</p></li><li><p>Check the baking result:</p><p><img src="'+b+'" alt="result"></p></li></ul>',18),k=[_];function x(w,P,y,B,C,v){return o(),t("div",null,k)}const R=e(u,[["render",x]]);export{I as __pageData,R as default};