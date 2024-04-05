import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.uQk9_EO2.js";const m=JSON.parse('{"title":"Vertex Animation Texture (VAT)","description":"","frontmatter":{},"headers":[],"relativePath":"en/asset/model/vat.md","filePath":"en/asset/model/vat.md","lastUpdated":1712305443000}'),i={name:"en/asset/model/vat.md"},r=o(`<h1 id="vertex-animation-texture-vat" tabindex="-1">Vertex Animation Texture (VAT) <a class="header-anchor" href="#vertex-animation-texture-vat" aria-label="Permalink to &quot;Vertex Animation Texture (VAT)&quot;">​</a></h1><p>Vertex Animation Texture (VAT) is commonly used to express physics simulation animations such as rigid body fragmentation, fabric, fluid, etc. Physics simulation animations computed in PCG software such as Houdini can be baked into VAT data for export and playback in real-time rendering engines to reproduce complex physics effects with very low performance consumption.</p><p>Currently, the supported VAT data formats are rigid body, flexible body and fluid data exported from Houdini, and fluid data from Zeno.</p><h2 id="data-export-and-usage" tabindex="-1">Data Export and Usage <a class="header-anchor" href="#data-export-and-usage" aria-label="Permalink to &quot;Data Export and Usage&quot;">​</a></h2><p>The exported VAT data contains three parts: fbx model, animation texture, and json file containing VAT material properties (frame count and box max/min value, etc.).</p><h3 id="rigid-body" tabindex="-1">Rigid Body <a class="header-anchor" href="#rigid-body" aria-label="Permalink to &quot;Rigid Body&quot;">​</a></h3><p>1、Export：After Houdini set up rigid body collision, crushing and other animations, choose <strong>VAT2.0 version, UE mode, no paddle, LDR way</strong> to export.</p><p>2、Material：Create a material in Cocos Creator, choose <strong>util/dcc/vat/houdini-rigidbody-v2</strong> for Effect.</p><p>3、Parameter：Check the exported json file, fill the data of Animation Speed, NumOfFrames, PivotMin/Max, PosMin/Max into the material.</p><p>4, Texture: Expand the exported Position shape map, drag the body into PositionMap, and the subordinate Sign and Alpha into PosSignMap and PosAlphaMap respectively (if any). Rotation normal map is the same.</p><h3 id="softbody" tabindex="-1">Softbody <a class="header-anchor" href="#softbody" aria-label="Permalink to &quot;Softbody&quot;">​</a></h3><p>1, Export: After Houdini set up the animation of soft body collision and crushing, choose <strong>VAT3.0 version, Unity mode, no paddle, LDR way</strong> to export.</p><p>2、Material：Create a material in Cocos Creator, choose <strong>util/dcc/vat/houdini-softbody-v3</strong> for Effect.</p><p>3、Parameter：Check the exported json file, fill the data of Animation Speed and NumOfFrames into the material.</p><p>4、Texture：Expand the exported Position shape map, drag the body into PositionMap, and the subordinate Sign and Alpha into PosSignMap and PosAlphaMap respectively (if any). Same for the Rotation normal map.</p><h3 id="fluid-houdini" tabindex="-1">Fluid (Houdini) <a class="header-anchor" href="#fluid-houdini" aria-label="Permalink to &quot;Fluid (Houdini)&quot;">​</a></h3><p>1、Export：After Houdini set up the fluid animation, choose <strong>VAT3.0 version, Unity mode, no paddle, LDR way</strong> to export.</p><p>2、Material：Create a material in Cocos Creator, choose <strong>util/dcc/vat/houdini-fluid-v3-liquid</strong> for Effect.</p><p>3、Parameter: Check the exported json file, fill the data of Animation Speed and NumOfFrames into the material.</p><pre><code>- Check Use Lookup Texture, drag the exported lookup image into LookupMap.
- Check Use Lookup Auto Frame, fill the resolution of the exported lookup into LUTTextureWidth/Height.
- Select the exported fbx model, record its vertex count and fill in FBXVertexCount.
</code></pre><ol start="4"><li>Mapping: Expand the exported Position map, drag the body into PositionMap, and the subordinate Sign and Alpha into PosSignMap and PosAlphaMap respectively (if any). Same for Rotation normal map.</li></ol><h3 id="fluid-zeno" tabindex="-1">Fluid (Zeno) <a class="header-anchor" href="#fluid-zeno" aria-label="Permalink to &quot;Fluid (Zeno)&quot;">​</a></h3><p>1, Export: After Zeno set up the fluid animation, choose <strong>VAT mode</strong> to export.</p><p>2、Material：Create a material in Cocos Creator, choose <strong>util/dcc/vat/zeno-fluid-liquid</strong> for Effect.</p><p>3、Parameters：Check the exported json file, and fill the data such as Animation Speed and NumOfFrames into the material.</p><p>4、Texture：Expand the exported Position map and drag it to PositionMap, Rotation map and drag it to RotationMap.</p><h3 id="error-effect-debugging" tabindex="-1">Error effect debugging <a class="header-anchor" href="#error-effect-debugging" aria-label="Permalink to &quot;Error effect debugging&quot;">​</a></h3><h3 id="rigid-body-1" tabindex="-1">Rigid Body <a class="header-anchor" href="#rigid-body-1" aria-label="Permalink to &quot;Rigid Body&quot;">​</a></h3><p>If there are animation anomalies such as the pieces going around in circles, please make sure the export option is in VAT2.0 UE mode, if you choose the wrong Unity mode, it may lead to this situation.</p><h3 id="fluid" tabindex="-1">Fluid <a class="header-anchor" href="#fluid" aria-label="Permalink to &quot;Fluid&quot;">​</a></h3><p>If the faces are broken or even a little bit messed up, please check if the NumOfFrames are the same as the ones in the DCC software.</p><p>If the whole fluid is shaking or has interspersed faces, make sure the filter mode of both maps is Nearest, and make sure fix alpha transparency artifacts is unchecked.</p>`,32),n=[r];function d(s,p,l,h,u,c){return t(),a("div",null,n)}const x=e(i,[["render",d]]);export{m as __pageData,x as default};