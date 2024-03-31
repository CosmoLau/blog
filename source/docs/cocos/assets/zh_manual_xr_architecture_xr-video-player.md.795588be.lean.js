import{_ as t,v as r,b as d,R as e}from"./chunks/framework.5ffcbaff.js";const a="/docs/cocos/assets/xr_video_player_node.cbd1b2d7.png",b=JSON.parse('{"title":"XR 视频播放器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/architecture/xr-video-player.md","filePath":"zh/manual/xr/architecture/xr-video-player.md"}'),o={name:"zh/manual/xr/architecture/xr-video-player.md"},i=e('<h1 id="xr-视频播放器" tabindex="-1">XR 视频播放器 <a class="header-anchor" href="#xr-视频播放器" aria-label="Permalink to &quot;XR 视频播放器&quot;">​</a></h1><p>XR 头戴设备相较于传统的显示器拥有更为多样化的视频展示方式，结合设备自身的多轴向定位特性和双屏渲染画面，可以满足用户在 3D 场景中浏览全景视频或动态材质的需要。Cocos CreatorXR v1.1.0提供了通用化的 XR 视频播放器，针对 XR 设备优化了视频渲染管线并支持切换展示窗口、180 度、360 度多风格的视频。同时，播放器还提供了交互功能辅助您进行播放控制，您只需要添加或替换视频资源即可完成简易的视频播放功能的内容开发，简化创作步骤，降低开发门槛。</p><p>创建视频播放器，请在层级管理器右键 <strong>创建 -&gt; XR -&gt; XR Video Player</strong>。</p><p><img src="'+a+'" alt="xr_video_player_node"></p><p>其节点中包含的核心组件如下：</p><h2 id="xr-video-player" tabindex="-1">XR Video Player <a class="header-anchor" href="#xr-video-player" aria-label="Permalink to &quot;XR Video Player&quot;">​</a></h2><h3 id="cc-xrvideoplayer" tabindex="-1">cc.XRVideoPlayer <a class="header-anchor" href="#cc-xrvideoplayer" aria-label="Permalink to &quot;cc.XRVideoPlayer&quot;">​</a></h3><p>用于调整视频的各项属性</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>Source Type</td><td>视频来源：REMOTE 表示远程视频 URL，LOCAL 表示本地视频地址</td></tr><tr><td>Remote URL</td><td>Source Type 为 REMOTE 时出现此项，远程视频的 URL</td></tr><tr><td>Clip</td><td>Source Type 为 LOCAL 时出现此项，本地视频剪辑</td></tr><tr><td>Play On Awake</td><td>视频加载后是否自动开始播放</td></tr><tr><td>Playback Rate</td><td>视频播放时的速率，范围：[0.0,2.5]</td></tr><tr><td>Volume</td><td>视频的音量 [0.0,1.0]</td></tr><tr><td>Mute</td><td>是否静音。静音时音量设置为0，取消静音时恢复原来的音量。</td></tr><tr><td>Loop</td><td>视频是否应在结束时再次播放</td></tr><tr><td>Keep Aspect Ratio</td><td>是否保持视频自身的宽高比（使用竖屏视频查看效果）</td></tr><tr><td>Shape</td><td>视频样式。</td></tr><tr><td>Content</td><td>关联带有 MeshRenderer 组件的 VideoContent 作为视频材质渲染对象。</td></tr><tr><td>Video Player Event</td><td>视频播放回调函数，该回调函数会在特定情况被触发，比如播放中、暂停、停止和播放完毕。</td></tr></tbody></table><h2 id="xr-video-controller" tabindex="-1">XR Video Controller <a class="header-anchor" href="#xr-video-controller" aria-label="Permalink to &quot;XR Video Controller&quot;">​</a></h2><h3 id="cc-xrvideocontroller" tabindex="-1">cc.XRVideoController <a class="header-anchor" href="#cc-xrvideocontroller" aria-label="Permalink to &quot;cc.XRVideoController&quot;">​</a></h3><p>用于关联UI和视频功能。</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>Player</td><td>关联指定的 VideoPlayer，用于控制其播放功能。</td></tr><tr><td>HMD Control</td><td>绑定头戴显示器的控制器对象节点。</td></tr><tr><td>Left Hand Controller</td><td>绑定左手柄的控制器对象节点。</td></tr><tr><td>Right Hand Controller</td><td>绑定右手柄的控制器对象节点。</td></tr><tr><td>Play Pause</td><td>播放/暂停 UI。</td></tr><tr><td>Progress Bar</td><td>进度条 UI。</td></tr><tr><td>Fast Forward</td><td>快进按钮 UI。</td></tr><tr><td>Rewind</td><td>快退按钮 UI。</td></tr><tr><td>Video Shape UI</td><td>视频样式 UI。</td></tr><tr><td>Player Back Rate Bar</td><td>倍速 UI。</td></tr><tr><td>Volume UI</td><td>音量调节 UI。</td></tr></tbody></table><h2 id="video-caption" tabindex="-1">Video Caption <a class="header-anchor" href="#video-caption" aria-label="Permalink to &quot;Video Caption&quot;">​</a></h2><h3 id="cc-xrvideocaption" tabindex="-1">cc.XRVideoCaption <a class="header-anchor" href="#cc-xrvideocaption" aria-label="Permalink to &quot;cc.XRVideoCaption&quot;">​</a></h3><p>用于解析字幕文件，目前只支持解析 .srt 类型的字幕文件。</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>Caption Source Type</td><td>字幕来源：REMOTE 表示 URL 里的文件并解析字幕，LOCAL 表示本地字幕文件。</td></tr><tr><td>Remote URL</td><td>Source Type 为 REMOTE 时出现此项，字幕文件的 URL</td></tr><tr><td>Caption File</td><td>Source Type 为 LOCAL 时出现此项，本地字幕文件</td></tr><tr><td>Video Player</td><td>关联指定的 VideoPlayer，将字幕按时间同步于此视频。</td></tr></tbody></table><p>注：Vulkan目前不支持视频播放器。</p>',18),l=[i];function c(n,h,p,s,R,u){return r(),d("div",null,l)}const x=t(o,[["render",c]]);export{b as __pageData,x as default};
