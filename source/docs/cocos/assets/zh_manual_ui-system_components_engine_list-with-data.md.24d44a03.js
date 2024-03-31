import{_ as s,v as a,b as n,R as l}from"./chunks/framework.5ffcbaff.js";const p="/docs/cocos/assets/itemlist.36486750.png",o="/docs/cocos/assets/item-template.a489b505.png",e="/docs/cocos/assets/item-binding.ffd0b30b.png",t="/docs/cocos/assets/itemlist-complete.c56478f6.png",c="/docs/cocos/assets/result.758b7fbe.png",b=JSON.parse('{"title":"制作动态生成内容的列表","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/engine/list-with-data.md","filePath":"zh/manual/ui-system/components/engine/list-with-data.md"}'),r={name:"zh/manual/ui-system/components/engine/list-with-data.md"},y=l(`<h1 id="制作动态生成内容的列表" tabindex="-1">制作动态生成内容的列表 <a class="header-anchor" href="#制作动态生成内容的列表" aria-label="Permalink to &quot;制作动态生成内容的列表&quot;">​</a></h1><p>UI 界面只有静态页面内容是不够的，我们会遇到很多需要由一组数据动态生成多个元素组成的 UI 面板，比如选人界面、物品栏、选择关卡等等。</p><h2 id="准备数据" tabindex="-1">准备数据 <a class="header-anchor" href="#准备数据" aria-label="Permalink to &quot;准备数据&quot;">​</a></h2><p>以物品栏为例，我们要动态生成一个物品，大概需要这样的一组数据：</p><ul><li>物品 id</li><li>图标 id，我们可以在另一张资源表中建立图标 id 到对应 spriteFrame 的索引</li><li>物品名称</li><li>出售价格</li><li>...</li></ul><p>下面我们将会结合脚本介绍如何定义和使用数据，如果您对 Cocos Creator 的脚本系统还不熟悉，可以先从 <a href="./../../../scripting/">脚本开发指南</a> 一章开始学习。</p><h3 id="自定义数据类" tabindex="-1">自定义数据类 <a class="header-anchor" href="#自定义数据类" aria-label="Permalink to &quot;自定义数据类&quot;">​</a></h3><p>对于大多数游戏来说，这些数据通常都来自于服务器或本地的数据库，现在我们为了展示流程，暂时把数据存在列表组件里就可以了。您可以新建一个脚本 <code>ItemList.ts</code>，并添加如下的属性：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">ccclass</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Item</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Item</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">property</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">property</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">itemName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">property</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">itemPrice</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(SpriteFrame)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">iconSF</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SpriteFrame</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">ccclass</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ItemList</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">([Item])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Item</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(Prefab)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">itemPrefab</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Prefab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">instantiate</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemPrefab</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ItemTemplate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面脚本的前半部分我们声明了一个叫做 <code>Item</code> 的数据类，用来存放我们展示物品需要的各种数据。注意这个类并没有继承 <code>Component</code>，因此它不是一个组件，但可以被组件使用。关于声明自定义类的更多内容，请查阅 <a href="./../../../scripting/decorator.html">装饰器</a> 文档。</p><p>下半部分是正常的组件声明方式，这个组件中只有一个 <code>items</code> 属性，上面的声明方式将会给我们一个由 <code>Item</code> 类组成的数组，我们可以在 <strong>属性检查器</strong> 中为每个 <code>Item</code> 元素设置数据。</p><p>新建一个节点并将 <code>ItemList.ts</code> 添加上去，我们可以在 <strong>属性检查器</strong> 里找到 <code>Items</code> 属性，要开始创建数据，需要先将数组的容量设为大于 0 的值。让我们将容量设为 3，并将每个元素的数据如下图设置。</p><p><img src="`+p+'" alt="item list"></p><p>这样我们最基本的数据就准备好了，如果您在制作有很多内容的游戏，请务必使用 excel、数据库等更专业的系统来管理您的数据，将外部数据格式转化为 Cocos Creator 可以使用的 TypeScript 和 JSON 格式都非常容易。</p><h2 id="制作表现-prefab-模板" tabindex="-1">制作表现：Prefab 模板 <a class="header-anchor" href="#制作表现-prefab-模板" aria-label="Permalink to &quot;制作表现：Prefab 模板&quot;">​</a></h2><p>接下来我们还需要一个可以在运行时用来实例化每个物品的模板资源 —— <a href="./../../../asset/prefab.html">Prefab 预制</a>。这个 Prefab 的结构如下图所示：</p><p><img src="'+o+`" alt="item template"></p><p><code>icon</code>、<code>name</code>、<code>price</code> 子节点之后就会用来展示图标、物品名称和价格的数据。</p><h3 id="模板组件绑定" tabindex="-1">模板组件绑定 <a class="header-anchor" href="#模板组件绑定" aria-label="Permalink to &quot;模板组件绑定&quot;">​</a></h3><p>您在拼装 Prefab 时可以根据自己的需要自由发挥，上图中展示的仅仅是一个结构的例子。有了物品的模板结构，接下来我们需要一个组件脚本来完成节点结构的绑定。新建一个 <code>ItemTemplate.ts</code> 的脚本，并将其添加到刚才制作的模板节点上。该脚本内容如下：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">ccclass</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ItemTemplate</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">property</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(Sprite)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Sprite</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(Label)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">itemName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(Label)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">itemPrice</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Label</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>接下来将对应的节点拖拽到该组件的各个属性上：</p><p><img src="`+e+`" alt="item binding"></p><p>注意 <code>id</code> 这个属性我们会直接通过数据赋值，不需要绑定节点。</p><h3 id="通过数据更新模板表现" tabindex="-1">通过数据更新模板表现 <a class="header-anchor" href="#通过数据更新模板表现" aria-label="Permalink to &quot;通过数据更新模板表现&quot;">​</a></h3><p>接下来我们需要继续修改 <code>ItemTemplate.ts</code>，为其添加接受数据后进行处理的逻辑。在上述脚本后面加入以下内容：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// data: { id, iconSF, itemName, itemPrice }</span></span>
<span class="line"><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(data: Item) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">icon</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">spriteFrame</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">iconSF</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemName</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">itemName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemPrice</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">itemPrice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>init</code> 方法接受一个数据对象，并使用这个对象里的数据更新各个负责表现组件的相应属性。现在我们可以将 <code>Item</code> 节点保存成一个 Prefab 了，这就是我们物品的模板。</p><h2 id="根据数据生成列表内容" tabindex="-1">根据数据生成列表内容 <a class="header-anchor" href="#根据数据生成列表内容" aria-label="Permalink to &quot;根据数据生成列表内容&quot;">​</a></h2><p>现在让我们回到 <code>ItemList.ts</code> 脚本，接下来要添加的是物品模板 Prefab 的引用，以及动态生成列表的逻辑。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(Prefab)</span></span>
<span class="line"><span style="color:#FFCB6B;">itemPrefab</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Prefab </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onLoad</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">instantiate</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemPrefab</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">items</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ItemTemplate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在 <code>onLoad</code> 回调方法里，我们依次遍历 <code>items</code> 里存储的每个数据，以 <code>itemPrefab</code> 为模板生成新节点并添加到 <code>ItemList.ts</code> 所在节点上。之后调用 <code>ItemTemplate.ts</code> 里的 <code>init</code> 方法，更新每个节点的表现。</p><p>现在我们可以为 <code>ItemList.ts</code> 所在的节点添加一个 <strong>Layout</strong> 组件，通过 <strong>属性检查器</strong> 下方的 <strong>添加组件 -&gt; UI -&gt; Layout</strong>，然后设置 <strong>Layout</strong> 组件的以下属性：</p><ul><li><code>Type</code>：<code>HORIZONTAL</code></li><li><code>Resize Mode</code>：<code>CONTAINER</code></li></ul><p>别忘了把 <code>item</code> Prefab 拖拽到 <code>ItemList</code> 组件的 <code>itemPrefab</code> 属性里。您还可以为这个节点添加一个 <strong>Sprite</strong> 组件，作为列表的背景。</p><p>完成后的 <code>itemList</code> 节点属性如下：</p><p><img src="`+t+'" alt="itemlist complete"></p><h2 id="预览效果" tabindex="-1">预览效果 <a class="header-anchor" href="#预览效果" aria-label="Permalink to &quot;预览效果&quot;">​</a></h2><p>最后运行预览，可以看到类似这样的效果（具体效果和您制作的物品模板，以及输入的数据有关）：</p><p><img src="'+c+'" alt="result"></p><p>注意前面步骤中添加 <strong>Layout</strong> 组件并不是必须的，<strong>Layout</strong> 能够帮助您自动排列列表中的节点元素，但您也可以用脚本程序来控制节点的排列。我们通常还会配合 <strong>ScrollView</strong> 滚动视图组件一起使用，以便在有限的空间内展示大量内容。可以配合 <a href="./auto-layout.html">自动布局</a> 和 <a href="./../editor/scrollview.html">滚动视图</a> 一起学习。</p>',41),F=[y];function D(C,A,i,d,m,h){return a(),n("div",null,F)}const g=s(r,[["render",D]]);export{b as __pageData,g as default};
