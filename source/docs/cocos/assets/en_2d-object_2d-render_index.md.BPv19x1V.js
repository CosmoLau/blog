import{_ as e,c as n,o,a4 as t}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/create-2d.DeBRQ1j0.png",i="/docs/cocos/assets/add-render-component.BloLvBDE.png",R=JSON.parse('{"title":"2D Render Description","description":"","frontmatter":{},"headers":[],"relativePath":"en/2d-object/2d-render/index.md","filePath":"en/2d-object/2d-render/index.md","lastUpdated":1712305443000}'),a={name:"en/2d-object/2d-render/index.md"},d=t('<h1 id="_2d-render-description" tabindex="-1">2D Render Description <a class="header-anchor" href="#_2d-render-description" aria-label="Permalink to &quot;2D Render Description&quot;">​</a></h1><p>All rendering objects in the engine that do not own a model are 2D rendering objects. Unlike 3D objects, 2D objects do not have model information, and their vertex information is held by the Rect information of the UITransform component and created by the engine, and they have no thickness themselves. Due to the design requirements of the engine, the 2D render object needs to be a child of the RenderRoot node (the node with the RenderRoot2D component) in order to complete the data collection operation.</p><p>The rendering requirements for the 2D render object are twofold:</p><ol><li>It needs to have a UITransform component</li><li>It needs to be a child of a RenderRoot node</li></ol><h2 id="_2d-rendering-object-visibility-description" tabindex="-1">2D Rendering Object Visibility Description <a class="header-anchor" href="#_2d-rendering-object-visibility-description" aria-label="Permalink to &quot;2D Rendering Object Visibility Description&quot;">​</a></h2><p>Since there is no difference between 2D rendering objects and 3D renderable nodes in terms of camera visibility, users need to control the layer property of the node and set the Visibility of the camera to match the group rendering. If there are multiple cameras in the scene, wrong layer settings may cause the node to be rendered repeatedly or not at all.</p><h2 id="_2d-renderable-components" tabindex="-1">2D Renderable Components <a class="header-anchor" href="#_2d-renderable-components" aria-label="Permalink to &quot;2D Renderable Components&quot;">​</a></h2><p>Components that have rendering capabilities in their own right are called 2D Renderable components, including:</p><ul><li><a href="./../../ui-system/components/editor/sprite">Sprite Component Reference</a></li><li><a href="./../../ui-system/components/editor/label">Label Component Reference</a></li><li><a href="./../../ui-system/components/editor/mask">Mask Component Reference</a></li><li><a href="./../../ui-system/components/editor/graphics">Graphics Component Reference</a></li><li><a href="./../../ui-system/components/editor/richtext">RichText Component Reference</a></li><li><a href="./../../ui-system/components/editor/ui-static">UIStaticBatch Component Reference</a></li><li><a href="./../../editor/components/tiledmap">TiledMap Component Reference</a></li><li><a href="./../../editor/components/tiledtile">TiledTile Component Reference</a></li><li><a href="./../../editor/components/spine">Spine Skeletal Component Reference</a></li><li><a href="./../../editor/components/dragonbones">DragonBones ArmatureDisplay Component Reference</a></li><li><a href="./../../editor/components/motion-streak">MotionStreak Component Reference</a></li></ul><h2 id="how-to-add-2d-renderable-components" tabindex="-1">How to add 2D Renderable Components <a class="header-anchor" href="#how-to-add-2d-renderable-components" aria-label="Permalink to &quot;How to add 2D Renderable Components&quot;">​</a></h2><p>Some 2D renderable components are built into the editor. After creating a RenderRoot node, create a node with 2D renderable components under this node:</p><p><img src="'+r+'" alt="create-2d"></p><p>2D renderable components can also be added by adding components to the node, the nodes under the 2D menu in the components menu are all 2D renderable components:</p><p><img src="'+i+'" alt="add-render-component"></p><blockquote><p><strong>Note</strong>: only one renderable component can be added to each node, and repeated additions will result in error reporting.</p></blockquote><h2 id="_2d-renderable-component-rules-introduction" tabindex="-1">2D Renderable Component Rules Introduction <a class="header-anchor" href="#_2d-renderable-component-rules-introduction" aria-label="Permalink to &quot;2D Renderable Component Rules Introduction&quot;">​</a></h2><ul><li><a href="./../../ui-system/components/engine/priority">Rendering Order Rules</a></li><li><a href="./../../ui-system/components/engine/ui-batch">2D Renderable Component Batching Rules</a></li><li><a href="./../../ui-system/components/engine/ui-material">Custom Materials for 2D Rendering Objects</a></li></ul>',17),s=[d];function l(c,p,m,h,b,u){return o(),n("div",null,s)}const D=e(a,[["render",l]]);export{R as __pageData,D as default};
