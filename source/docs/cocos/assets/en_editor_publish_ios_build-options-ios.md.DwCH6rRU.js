import{_ as e,c as t,o,a4 as a}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/ios-build-options.BdnKV3Ih.png",b=JSON.parse('{"title":"Build Options - iOS","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/ios/build-options-ios.md","filePath":"en/editor/publish/ios/build-options-ios.md","lastUpdated":1712305443000}'),n={name:"en/editor/publish/ios/build-options-ios.md"},r=a('<h1 id="build-options-ios" tabindex="-1">Build Options - iOS <a class="header-anchor" href="#build-options-ios" aria-label="Permalink to &quot;Build Options - iOS&quot;">​</a></h1><p><img src="'+i+'" alt="ios-build-options"></p><h2 id="executable-name" tabindex="-1">Executable Name <a class="header-anchor" href="#executable-name" aria-label="Permalink to &quot;Executable Name&quot;">​</a></h2><p>This a field used to specify the name of the main executable file of an application, which is stored in the app&#39;s Info.plist file. If not provided, the system will generate a default value based on the app name field. The value for this field must adhere to a specific format, containing only numbers, letters, underscores (_) and hyphens (-).</p><h2 id="bundle-identifier" tabindex="-1">Bundle Identifier <a class="header-anchor" href="#bundle-identifier" aria-label="Permalink to &quot;Bundle Identifier&quot;">​</a></h2><p>The package name, usually in reverse order of the product website URL, such as <code>com.mycompany.myproduct</code>.</p><blockquote><p><strong>Note</strong>: The package name can only contain numbers (0-9), letters (A-Z, a-z), hyphens (-), and dots (.), and the last part of the package name must start with a letter and cannot start with an underscore or a number. For more details, please refer to <a href="https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier" target="_blank" rel="noreferrer">Bundle Identifier</a>.</p></blockquote><h2 id="skip-the-update-of-xcode-project" tabindex="-1">Skip the update of Xcode project <a class="header-anchor" href="#skip-the-update-of-xcode-project" aria-label="Permalink to &quot;Skip the update of Xcode project&quot;">​</a></h2><p>By default, each build will execute the CMake command to generate an Xcode project. However, if modifications or configurations are made to the generated Xcode project, such as integrating an SDK with CocoaPods, this could cause issues, as these modifications will be reverted in the next build.</p><p>However, if this option is checked, subsequent builds will no longer update or overwrite the configuration of the Xcode project.</p><p>It should be noted that other changes related to CMake, such as adding C++ source code, will no longer trigger the regeneration of the Xcode project.</p><h2 id="orientation" tabindex="-1">Orientation <a class="header-anchor" href="#orientation" aria-label="Permalink to &quot;Orientation&quot;">​</a></h2><p>The screen orientation currently includes three options: <strong>Portrait</strong>, <strong>Landscape Left</strong>, and <strong>Landscape Right</strong>.</p><ul><li><strong>Portrait:</strong> The screen is in an upright position with the Home button at the bottom.</li><li><strong>Landscape Left:</strong> The screen is in a landscape position with the Home button on the left side of the screen.</li><li><strong>Landscape Right:</strong> The screen is in a landscape position with the Home button on the right side of the screen.</li></ul><h2 id="os-target" tabindex="-1">OS Target <a class="header-anchor" href="#os-target" aria-label="Permalink to &quot;OS Target&quot;">​</a></h2><p>This defines the default launch system, types can be used are as follows:</p><ul><li>iPhone OS: Run on real iOS devices, e.g. an iPhone, and iPad.</li><li>iOS Simulator: Run on the iOS simulator.</li></ul><p>These is just the default value and can be modified at any time in Xcode.</p><h2 id="render-backend" tabindex="-1">Render Backend <a class="header-anchor" href="#render-backend" aria-label="Permalink to &quot;Render Backend&quot;">​</a></h2><p>The Render Backend currently supports <strong>METAL</strong>. For more details, refer to the official documentation on <a href="https://developer.apple.com/cn/metal/" target="_blank" rel="noreferrer">Metal</a>.</p><h2 id="developer-team" tabindex="-1">Developer Team <a class="header-anchor" href="#developer-team" aria-label="Permalink to &quot;Developer Team&quot;">​</a></h2><p>This option is used to configure the Apple Developer account used for signing the app when building and compiling the iOS project. If you manually configure this information in Xcode during compilation, the configuration in Xcode takes precedence. When performing a rebuild, the value of this option will override the value configured in Xcode.</p><h2 id="target-ios-version" tabindex="-1">Target iOS Version <a class="header-anchor" href="#target-ios-version" aria-label="Permalink to &quot;Target iOS Version&quot;">​</a></h2><p>This option is used to specify the iOS software version when publishing to the iOS platform, with a default value of 12.0. The version number after the build will be recorded in the <code>TARGET_IOS_VERSION</code> field in the <code>build/ios/proj/cfg.cmake</code> file.</p>',24),s=[r];function d(l,c,h,p,u,f){return o(),t("div",null,s)}const g=e(n,[["render",d]]);export{b as __pageData,g as default};