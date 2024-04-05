import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/create-2d.DeBRQ1j0.png",r="/docs/cocos/assets/add-render-component.BloLvBDE.png",f=JSON.parse('{"title":"2D 渲染","description":"","frontmatter":{},"headers":[],"relativePath":"zh/2d-object/2d-render/index.md","filePath":"zh/2d-object/2d-render/index.md","lastUpdated":1712305443000}'),n={name:"zh/2d-object/2d-render/index.md"},s=o('<h1 id="_2d-渲染" tabindex="-1">2D 渲染 <a class="header-anchor" href="#_2d-渲染" aria-label="Permalink to &quot;2D 渲染&quot;">​</a></h1><p>引擎中所有不拥有的 model 的渲染对象都为 2D 渲染对象。与 3D 对象不同，2D 对象本身不拥有 model 信息，其顶点信息是由 UITransform 组件的 Rect 信息持有并由引擎创建的，且本身没有厚度。由于引擎的设计要求，2D 渲染对象需要为 RenderRoot 节点（带有 RenderRoot2D 组件的节点）的子节点才能完成数据的收集操作。</p><p>所以 2D 渲染对象的渲染要求有两点：</p><ol><li>自身带有 UITransform 组件</li><li>需要为带有 RenderRoot2D/Canvas 组件节点的子节点</li></ol><h2 id="_2d-渲染对象可见性说明" tabindex="-1">2D 渲染对象可见性说明 <a class="header-anchor" href="#_2d-渲染对象可见性说明" aria-label="Permalink to &quot;2D 渲染对象可见性说明&quot;">​</a></h2><p>由于 2D 渲染对象在 Camera 的可见性判断上和 3D 渲染节点并无区别，所以用户需要自己控制节点的 layer 属性并设置 Camera 的 Visibility 来配合进行分组渲染，如果场景中出现多个相机的情况，错误的 layer 设置导致节点重复渲染或不渲染。</p><p><strong>这里请 3D 1.2 版本升级的用户注意，我们纠正了之前的 Canvas 只会渲染其子节点的行为，目前需要用户自己管理节点的 layer 和相机的 Visibility，之前使用了多 Canvas 渲染的用户可能会需要对项目做出调整以达到更合理的场景结构。</strong></p><h2 id="_2d-渲染组件" tabindex="-1">2D 渲染组件 <a class="header-anchor" href="#_2d-渲染组件" aria-label="Permalink to &quot;2D 渲染组件&quot;">​</a></h2><p>本身拥有渲染能力的组件我们称为 2D 渲染组件，包括：</p><ul><li><a href="./../../ui-system/components/editor/sprite">Sprite 组件参考</a></li><li><a href="./../../ui-system/components/editor/label">Label 组件参考</a></li><li><a href="./../../ui-system/components/editor/mask">Mask 组件参考</a></li><li><a href="./../../ui-system/components/editor/graphics">Graphics 组件参考</a></li><li><a href="./../../ui-system/components/editor/richtext">RichText 组件参考</a></li><li><a href="./../../ui-system/components/editor/ui-static">UIStaticBatch 组件参考</a></li><li><a href="./../../editor/components/tiledmap">TiledMap 组件参考</a></li><li><a href="./../../editor/components/tiledtile">TiledTile 组件参考</a></li><li><a href="./../../editor/components/spine">Spine（骨骼动画）Skeleton 组件参考</a></li><li><a href="./../../editor/components/dragonbones">DragonBones（龙骨）ArmatureDisplay 组件参考</a></li><li><a href="./../../editor/components/motion-streak">MotionStreak 组件参考</a></li></ul><h3 id="组件添加方式" tabindex="-1">组件添加方式 <a class="header-anchor" href="#组件添加方式" aria-label="Permalink to &quot;组件添加方式&quot;">​</a></h3><p>我们在编辑器内置了一些 2D 渲染组件，在创建了 RenderRoot 节点之后，即可在此节点下创建带有 2D 渲染组件的节点：</p><p><img src="'+i+'" alt="create-2d"></p><p>也可以通过在节点上添加组件的方式来添加 2D 渲染组件，组件菜单中的 2D 菜单下的节点均为 2D 渲染组件：</p><p><img src="'+r+'" alt="add-render-component"></p><blockquote><p><strong>注意</strong>：每个节点上只能添加一个渲染组件，重复添加会导致报错。</p></blockquote><h3 id="组件规则介绍" tabindex="-1">组件规则介绍 <a class="header-anchor" href="#组件规则介绍" aria-label="Permalink to &quot;组件规则介绍&quot;">​</a></h3><ul><li><a href="./../../ui-system/components/engine/priority">渲染排序规则</a></li><li><a href="./../../ui-system/components/engine/ui-batch">2D 渲染组件合批规则说明</a></li><li><a href="./../../ui-system/components/engine/ui-material">2D 渲染对象自定义材质</a></li></ul>',18),l=[s];function d(c,p,h,m,_,u){return t(),a("div",null,l)}const b=e(n,[["render",d]]);export{f as __pageData,b as default};
