import{_ as e,c as t,o as r,a4 as l}from"./chunks/framework.uQk9_EO2.js";const T=JSON.parse('{"title":"glTF Models","description":"","frontmatter":{},"headers":[],"relativePath":"en/asset/model/glTF.md","filePath":"en/asset/model/glTF.md","lastUpdated":1712305443000}'),o={name:"en/asset/model/glTF.md"},a=l('<h1 id="gltf-models" tabindex="-1">glTF Models <a class="header-anchor" href="#gltf-models" aria-label="Permalink to &quot;glTF Models&quot;">​</a></h1><p>Cocos Creator supports glTF 2.0 and earlier file formats.</p><h2 id="uri-parsing" tabindex="-1">URI Parsing <a class="header-anchor" href="#uri-parsing" aria-label="Permalink to &quot;URI Parsing&quot;">​</a></h2><p>Creator supports URIs in the following form specified in glTF:</p><ul><li><p>Data URI</p></li><li><p>Relative URI path</p></li><li><p>File URL</p></li><li><p>File path</p></li></ul><h2 id="conversion-relationships" tabindex="-1">Conversion Relationships <a class="header-anchor" href="#conversion-relationships" aria-label="Permalink to &quot;Conversion Relationships&quot;">​</a></h2><p>When importing a glTF model into Creator, the assets in glTF will be converted to assets in Creator according to the following relationships:</p><table><thead><tr><th style="text-align:left;">glTF Asset</th><th style="text-align:left;">Cocos Creator Asset</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-scene" target="_blank" rel="noreferrer">glTF Scene</a></td><td style="text-align:left;">Prefab</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-mesh" target="_blank" rel="noreferrer">glTF Mesh</a></td><td style="text-align:left;">Mesh</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-skin" target="_blank" rel="noreferrer">glTF Skin</a></td><td style="text-align:left;">Skeleton</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-material" target="_blank" rel="noreferrer">glTF Material</a></td><td style="text-align:left;">Material</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-texture" target="_blank" rel="noreferrer">glTF Texture</a></td><td style="text-align:left;">Texture</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-image" target="_blank" rel="noreferrer">glTF Image</a></td><td style="text-align:left;">Image</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#reference-animation" target="_blank" rel="noreferrer">glTF Animation</a></td><td style="text-align:left;">Animation Clip</td></tr></tbody></table><h3 id="gltf-scene" tabindex="-1">glTF Scene <a class="header-anchor" href="#gltf-scene" aria-label="Permalink to &quot;glTF Scene&quot;">​</a></h3><p>After import, the glTF scene will be converted to a prefab asset in Creator, and the nodes recursively contained in the glTF scene will be converted to nodes in the prefab one by one according to the same hierarchical relationship.</p><h4 id="scene-root-node" tabindex="-1">Scene Root Node <a class="header-anchor" href="#scene-root-node" aria-label="Permalink to &quot;Scene Root Node&quot;">​</a></h4><p>The prefab will use a node without any spatial transformation information as the root node, and all <a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenenodes" target="_blank" rel="noreferrer">root nodes</a> of the glTF scene will be the children of this node.</p><h4 id="node-conversion" tabindex="-1">Node Conversion <a class="header-anchor" href="#node-conversion" aria-label="Permalink to &quot;Node Conversion&quot;">​</a></h4><p>The properties in the glTF node will be converted to properties in the prefab node according to the texture relationships in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Node Property</th><th style="text-align:left;">Prefab Node Property</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodechildren" target="_blank" rel="noreferrer">Hierarchy</a></td><td style="text-align:left;">Hierarchy</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodetranslation" target="_blank" rel="noreferrer">Displacement</a></td><td style="text-align:left;">Position</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#noderotation" target="_blank" rel="noreferrer">Rotation</a></td><td style="text-align:left;">Rotation</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodescale" target="_blank" rel="noreferrer">Scaling</a></td><td style="text-align:left;">Scaling</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodematrix" target="_blank" rel="noreferrer">Matrix</a></td><td style="text-align:left;">Decompress and set the position, rotation, and scaling respectively</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodemesh" target="_blank" rel="noreferrer">Mesh</a></td><td style="text-align:left;">MeshRenderer component</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodeskin" target="_blank" rel="noreferrer">Skin</a></td><td style="text-align:left;">SkinnedMeshRenderer component</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodeweights" target="_blank" rel="noreferrer">Initial Weight</a></td><td style="text-align:left;">(Skinned) MeshRenderer component weight</td></tr></tbody></table><h4 id="meshrenderer" tabindex="-1">MeshRenderer <a class="header-anchor" href="#meshrenderer" aria-label="Permalink to &quot;MeshRenderer&quot;">​</a></h4><p>If the glTF node references a mesh, then the corresponding prefab node will also have a MeshRenderer component added to it after import. If the glTF node also references a skin, then the corresponding prefab node will also have a SkinnedMeshRenderer added to it.</p><p>The mesh, skeletons, and materials in the SkinnedMeshRenderer component correspond to the transformed glTF mesh, skin, and material assets.</p><p>If the glTF node specifies an initial weight, the converted (skinned) MeshRenderer will also carry this weight.</p><h3 id="gltf-mesh" tabindex="-1">glTF Mesh <a class="header-anchor" href="#gltf-mesh" aria-label="Permalink to &quot;glTF Mesh&quot;">​</a></h3><p>After import, the glTF mesh will be converted to a mesh asset in Cocos Creator.</p><p>All <a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#meshprimitives-white_check_mark" target="_blank" rel="noreferrer">primitives</a> in the glTF mesh will be converted to sub-meshes in the Creator one by one.</p><p>If <a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#meshweights" target="_blank" rel="noreferrer">weight</a> is specified for the glTF mesh, the corresponding weights will be stored in the converted Creator mesh.</p><h4 id="gltf-primitive" tabindex="-1">glTF Primitive <a class="header-anchor" href="#gltf-primitive" aria-label="Permalink to &quot;glTF Primitive&quot;">​</a></h4><p>The index arrays of the glTF primitives will correspond to the index arrays of the converted Cocos Creator sub-meshes.</p><p>The glTF primitive schema will be converted to the Cocos Creator primitive schema according to the texture in the following table.</p><table><thead><tr><th style="text-align:left;">glTF Primitive Schema</th><th style="text-align:left;">Cocos Creator Primitive Schema</th></tr></thead><tbody><tr><td style="text-align:left;"><code>POINTS</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.POINT_LIST</code></td></tr><tr><td style="text-align:left;"><code>LINES</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.LINE_LIST</code></td></tr><tr><td style="text-align:left;"><code>LINE_LOOP</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.LINE_LOOP</code></td></tr><tr><td style="text-align:left;"><code>LINE_STRIP</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.LINE_STRIP</code></td></tr><tr><td style="text-align:left;"><code>TRIANGLES</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.TRIANGLE_LIST</code></td></tr><tr><td style="text-align:left;"><code>TRIANGLE_STRIP</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.TRIANGLE_STRIP</code></td></tr><tr><td style="text-align:left;"><code>TRIANGLE_FAN</code></td><td style="text-align:left;"><code>gfx.PrimitiveMode.TRIANGLE_FAN</code></td></tr></tbody></table><p>glTF vertex attributes will be converted to Cocos Creator vertex attributes, and the attribute names will be converted as shown in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Vertex Attribute Name</th><th style="text-align:left;">Cocos Creator Vertex Attribute Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>POSITION</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_POSITION</code></td></tr><tr><td style="text-align:left;"><code>NORMAL</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_NORMAL</code></td></tr><tr><td style="text-align:left;"><code>TANGENT</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_TANGENT</code></td></tr><tr><td style="text-align:left;"><code>TEXCOORD_0</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_TEX_COORD</code></td></tr><tr><td style="text-align:left;"><code>TEXCOORD_1</code>..<code>TEXCOORD_8</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_TEX_COORD1</code>..<code>gfx.AttributeName.ATTR_TEX_COORD8</code></td></tr><tr><td style="text-align:left;"><code>COLOR_0</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_COLOR</code></td></tr><tr><td style="text-align:left;"><code>COLOR_1</code>..<code>COLOR_2</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_COLOR1</code>..<code>gfx.AttributeName.ATTR_COLOR2</code></td></tr><tr><td style="text-align:left;"><code>JOINTS_0</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_JOINTS</code></td></tr><tr><td style="text-align:left;"><code>WEIGHTS_0</code></td><td style="text-align:left;"><code>gfx.AttributeName.ATTR_WEIGHTS</code></td></tr></tbody></table><blockquote><p><strong>Note</strong>: if there are other <code>JOINTS</code>, <code>WEIGHTS</code> vertex attributes in the glTF primitive, such as <code>JOINTS_1</code>, <code>WEIGHTS_1</code>, it means that the vertices of this glTF mesh may be affected by more than 4 skeletons.</p></blockquote><p>For each vertex, all the weight information determined by <code>JOINTS_{}</code>, <code>WEIGHTS_{}</code> will be sorted by weight value and the four skeletons with the highest influence weight will be taken as <code>gfx.AttributeName.ATTR_JOINTS</code> and <code>gfx.AttributeName.ATTR_WEIGHTS</code>.</p><p>glTF deformation targets will be converted to Cocos Creator sub-mesh deformation data.</p><h3 id="gltf-skins" tabindex="-1">glTF Skins <a class="header-anchor" href="#gltf-skins" aria-label="Permalink to &quot;glTF Skins&quot;">​</a></h3><p>After import, glTF skins will be converted to skeletal assets in Cocos Creator.</p><h3 id="gltf-material" tabindex="-1">glTF Material <a class="header-anchor" href="#gltf-material" aria-label="Permalink to &quot;glTF Material&quot;">​</a></h3><p>After import, glTF materials will be converted to material assets in Cocos Creator.</p><h3 id="gltf-texture" tabindex="-1">glTF Texture <a class="header-anchor" href="#gltf-texture" aria-label="Permalink to &quot;glTF Texture&quot;">​</a></h3><p>After import, glTF texture will be converted to a texture asset in Cocos Creator.</p><p>The glTF image referenced in the glTF texture will be converted to a reference to the corresponding converted Cocos Creator image.</p><p>glTF texture properties will be converted to Cocos Creator texture properties according to the texture in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Texture Property</th><th style="text-align:left;">Cocos Creator Texture Property</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplermagfilter" target="_blank" rel="noreferrer">Magnification Filter</a></td><td style="text-align:left;">Magnification Filter</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplerminfilter" target="_blank" rel="noreferrer">Minification Filter</a></td><td style="text-align:left;">Minification Filter, Mip Map Filter</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplerwraps" target="_blank" rel="noreferrer">S Wrap Mode</a></td><td style="text-align:left;">S Wrap Mode</td></tr><tr><td style="text-align:left;"><a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#samplerwrapt" target="_blank" rel="noreferrer">T Wrap Mode</a></td><td style="text-align:left;">Wrap Mode</td></tr></tbody></table><p>The glTF texture magnification filter will be converted to the Cocos Creator texture magnification filter according to the texture in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Texture Magnification Filter</th><th style="text-align:left;">Cocos Creator Texture Magnification Filter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td></tr><tr><td style="text-align:left;"><code>LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td></tr></tbody></table><p>The glTF Texture Minification Filter will be converted to Cocos Creator Texture Minification Filter and Cocos Creator Texture Mip Map Filter according to the texture relationships in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Texture Minification Filter</th><th style="text-align:left;">Cocos Creator Texture Minification Filter</th><th style="text-align:left;">Cocos Creator Mip Map Filter</th></tr></thead><tbody><tr><td style="text-align:left;"><code>NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.NONE</code></td></tr><tr><td style="text-align:left;"><code>LINEAR_MIPMAP_LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.NONE</code></td></tr><tr><td style="text-align:left;"><code>LINEAR_MIPMAP_NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td></tr><tr><td style="text-align:left;"><code>LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td></tr><tr><td style="text-align:left;"><code>NEAREST_MIPMAP_LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td></tr><tr><td style="text-align:left;"><code>NEAREST_MIPMAP_NEAREST</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td><td style="text-align:left;"><code>TextureBase.Filter.LINEAR</code></td></tr></tbody></table><p>glTF Texture Wrap mode will be converted to Cocos Creator Texture Wrap mode according to the texture in the following table:</p><table><thead><tr><th style="text-align:left;">glTF Texture Wrap Mode</th><th style="text-align:left;">Cocos Creator Texture Wrap Mode</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CLAMP_TO_EDGE</code></td><td style="text-align:left;"><code>TextureBase.WrapMode.CLAMP_TO_EDGE</code></td></tr><tr><td style="text-align:left;"><code>REPEAT</code></td><td style="text-align:left;"><code>TextureBase.WrapMode.REPEAT</code></td></tr><tr><td style="text-align:left;"><code>MIRRORED_REPEAT</code></td><td style="text-align:left;"><code>TextureBase.WrapMode.MIRRORED_REPEAT</code></td></tr></tbody></table><h3 id="gltf-image" tabindex="-1">glTF Image <a class="header-anchor" href="#gltf-image" aria-label="Permalink to &quot;glTF Image&quot;">​</a></h3><p>After import, the glTF image will be converted to an image asset in Cocos Creator.</p><p>When the <a href="https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#imageuri" target="_blank" rel="noreferrer">URI</a> of the glTF image is a Data URI, the image data will be fetched from the Data URI. Otherwise, the image data will be resolved from the Data URI according to the <a href="./image-location-resolution">Cocos Creator Image Location Resolution Algorithm</a>, where <code>url</code> is the URI of the glTF image and <code>startDir</code> is the directory where the glTF file is located.</p><h3 id="gltf-animation" tabindex="-1">glTF Animation <a class="header-anchor" href="#gltf-animation" aria-label="Permalink to &quot;glTF Animation&quot;">​</a></h3><p>After import, glTF animations will be converted to Cocos Creator animation assets.</p>',52),i=[a];function d(n,s,c,h,g,f){return r(),t("div",null,i)}const m=e(o,[["render",d]]);export{T as __pageData,m as default};
