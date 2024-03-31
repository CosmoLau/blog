import{_ as s,v as a,b as n,R as o}from"./chunks/framework.5ffcbaff.js";const A=JSON.parse('{"title":"消息系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/messages.md","filePath":"zh/manual/editor/extension/messages.md"}'),l={name:"zh/manual/editor/extension/messages.md"},p=o(`<h1 id="消息系统" tabindex="-1">消息系统 <a class="header-anchor" href="#消息系统" aria-label="Permalink to &quot;消息系统&quot;">​</a></h1><p>Cocos Creator 中有许多独立运行进程，且这些进程间是相互隔离的。在编辑器内需要与其他功能进行交互的时候，需要通过 &quot;消息机制&quot; 进行交互。</p><p>编辑器里的&quot;消息系统&quot;是 IPC（进程间通信）的功能扩展封装。这个系统承担起了整个编辑器内通讯交互的重担。</p><p>更多关于多进程构架和跨进程通信的介绍请参考文档 <a href="./package.html">基础结构</a>.</p><h2 id="消息类型" tabindex="-1">消息类型 <a class="header-anchor" href="#消息类型" aria-label="Permalink to &quot;消息类型&quot;">​</a></h2><p>Cocos Creator 系统内的消息有两种类型：</p><ol><li>普通消息：主动发送某条消息到某个功能（扩展）</li><li>广播消息：某个功能（扩展）完成了一个操作后向所有人发送通知，告知操作已经完成</li></ol><h3 id="普通消息" tabindex="-1">普通消息 <a class="header-anchor" href="#普通消息" aria-label="Permalink to &quot;普通消息&quot;">​</a></h3><p>可以理解成一种对外的接口，例如引擎的 <strong>场景编辑器</strong> 模块已经定义好了一个用于查询节点的 <code>query-node</code> 消息，如下所示：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scene</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">contributions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">messages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">query-node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">queryNode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>关于如何自定义消息以及消息各字段的含义，请参考文档 <a href="./contributions-messages.html">自定义消息</a>。</p><p>当我们在自己编写的扩展中想要查询场景节点时，就可以使用这个消息来完成，如下所示:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> info </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scene</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">query-node</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> uuid)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>这种消息类似一种远程调用 (RPC), 拿到的 <code>info</code> 对象就是实际查询的节点上的部分数据。</p><blockquote><p><strong>注意</strong>：由于是远程调用，<code>request</code> 是不会立即返回的，因此需要使用 <code>await</code> 将异步转为同步。</p></blockquote><h4 id="普通消息的命名规范" tabindex="-1">普通消息的命名规范 <a class="header-anchor" href="#普通消息的命名规范" aria-label="Permalink to &quot;普通消息的命名规范&quot;">​</a></h4><p>请使用 <strong>小写</strong> 单词，并且不能包含特殊字符，单词间以 <strong>-</strong> 连接。如 <code>open-panel</code>、<code>text-changed</code>。</p><h3 id="广播消息" tabindex="-1">广播消息 <a class="header-anchor" href="#广播消息" aria-label="Permalink to &quot;广播消息&quot;">​</a></h3><p>广播消息是某一个功能内的操作完成后，对外进行的一种通知。</p><h4 id="接收广播消息" tabindex="-1">接收广播消息 <a class="header-anchor" href="#接收广播消息" aria-label="Permalink to &quot;接收广播消息&quot;">​</a></h4><p>比如，<strong>场景编辑器</strong> 在启动一个场景后，需要通知所有人 &quot;场景&quot; 已经启动完毕，<strong>场景编辑器</strong> 发送广播消息使用的是如下代码：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scene:ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sceneUUID)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>若一个扩展想要接收 <code>scene:ready</code> 消息，则需要在 <code>package.json</code> 里先定义，如下所示：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello-world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">contributions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">messages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">scene:ready</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>每当场景准备就绪后，广播的 <code>scene:ready</code> 消息就会触发 &quot;hello-world&quot; 扩展里的 <code>initData</code> 方法。</p><h4 id="发送广播消息" tabindex="-1">发送广播消息 <a class="header-anchor" href="#发送广播消息" aria-label="Permalink to &quot;发送广播消息&quot;">​</a></h4><p>若一个扩展想要发送广播消息，也需要在 <code>package.json</code> 里先定义。</p><p>比如，&quot;hello-world&quot; 在准备好数据后，会向外广播一条消息，以方便其他扩展与之配合。如下所示：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello-world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">contributions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">messages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">scene:ready</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">hello-world:ready</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello-world ready notification.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在适当的时机，&quot;hello-world&quot; 扩展内调用如下代码即可广播给所有人：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello-world:ready</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><blockquote><p><strong>注意</strong>：广播消息可以没有 <code>methods</code>，表示不监听。如上面的定义所示，表示 “hello-world” 不需要监听自己的初始化完成的消息。</p></blockquote><h4 id="广播消息的命名规范" tabindex="-1">广播消息的命名规范 <a class="header-anchor" href="#广播消息的命名规范" aria-label="Permalink to &quot;广播消息的命名规范&quot;">​</a></h4><p>格式为 <code>packageName:actionName</code>，以下命名都是合法的：</p><ul><li>scene:ready</li><li>scene:query-node</li><li>hello-world:ready</li><li>hello-world:data-loaded</li></ul><p>加上 <code>packageName</code> 可以防止命名出现冲突，在 <code>package.json</code> 中定义消息的时候也能够更加直观的看到监听的是哪一个扩展的哪个广播消息（动作）。</p><h2 id="查看消息列表" tabindex="-1">查看消息列表 <a class="header-anchor" href="#查看消息列表" aria-label="Permalink to &quot;查看消息列表&quot;">​</a></h2><p>编辑器内的功能以及扩展对外开放的消息列表，可以通过 <strong>开发者 -&gt; 消息管理</strong> 面板查看。详细定义规则请参考文档 <a href="./contributions-messages.html">自定义消息</a>。</p><h2 id="在代码中发送消息" tabindex="-1">在代码中发送消息 <a class="header-anchor" href="#在代码中发送消息" aria-label="Permalink to &quot;在代码中发送消息&quot;">​</a></h2><p><code>send</code> 方法只发送消息，并不会等待返回。如果不需要返回数据，且不关心是否执行完成，请使用这个方法。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">(pkgName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>request</code> 方法返回一个 promise 对象，这个 promise 会接收消息处理后返回的数据。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(pkgName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> message</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>broadcast</code> 方法只发送，并且发送给所有监听对应消息的功能扩展。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">broadcast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">pkgName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">actionName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,45),e=[p];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};