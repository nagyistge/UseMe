/***********************************
    Developed by Muaz Khan
    @muazkh: (http://twitter.com/muazkh)
    Google+: (https://plus.google.com/100325991024054712503)
    Quora: (http://quora.com/muaz-khan)
    Github: (https://github.com/muaz-khan)
***********************************/

/* ♣♣♣♣♣♣♣♣♣♣♣ features relevant stuff! ♣♣♣♣♣♣♣♣♣♣♣ */
var features = {
    canvas: {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 'Partial Support (v5.0 and v6.0)',
        android: 2.1,
        title: 'HTML5 <canvas> 2d API<br /><br /><strong>Opera Mini</strong> supports the <canvas> element, but is unable to play animations or run other more complex applications.'
    },
    webgl: {
        chrome: 'Partial Support (v16.0 to v19.0)',
        firefox: 'Partial Support (v8.0 to v12.0)',
        opera: 'Partial Support (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 'Partial Support (v5.1 and v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Partial Support (v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'OpenGL API for <canvas> 3d graphics<br /><br />All support is currently listed as <strong>partial</strong> because not all users with these browsers have <strong>WebGL</strong> access. This is due to the additional requirement for users to have up to date video drivers.<br /><br /><strong>Note that WebGL is part of the Khronos Group, not the W3C</strong>.'
    },
    video: {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.3,
        title: 'HTML5 <video> element<br /><br />Different browsers have support for different video formats, see sub-features for details. The <strong>Android</strong> browser (before <strong>2.3</strong>) requires specific handling to run the <video> element.'
    },
    audio: {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.3,
        title: 'HTML5 <audio> element<br /><br />Method of playing sound on webpages (without requiring a plug-in)'
    },
    'color input type': {
        chrome: 'Support Unknown (v18.0)',
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 11.0,
        ie: 'Support Unknown (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<input type=color><br /><br />Form field allowing the user to select a color.'
    },
    contenteditable: {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 6.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: '<div contenteditable></div><br /><br />This support only refers to very basic editing capability, implementations vary significantly on how certain elements can be edited.'
    },
    datalist: {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 8.0,
        opera: 11.6,
        ie: 10.0,
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<datalist> element<br /><br />Method of setting a list of options for a user to select in a text field, while leaving the ability to enter a custom value.'
    },
    'html5 form features': {
        chrome: 'Partial Support (v16.0 to v19.0)',
        firefox: 'Partial Support (v8.0 to v12.0)',
        opera: 11.6,
        ie: 'Partial Support (v10.0)',
        safari: 'Partial Support (v5.0 to v6.0)',
        'ios-safari': 5.0,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<strong>Opera <= 11.5</strong> has almost complete support, but does not support <strong>placeholder</strong> on <strong>textarea</strong> fields. Currently <strong>file uploading</strong> is not possible on <strong>iOS Safari.</strong>'
    },
    'text api for canvas': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of displaying text on <canvas> element'
    },
    'dataset & data-* attributes': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 'Partial Support (v6.0 to v10.0)',
        safari: 5.1,
        'ios-safari': 5.0,
        'opera-mobile': 11.1,
        'opera-mini': 'Partial Support (v5.0 and v6.0)',
        android: 3.0,
        title: 'All browsers can already use <strong>data-*</strong> attributes and access them using <strong>getAttribute</strong>. \'Supported\' refers to accessing the values using the <strong>dataset</strong> property.'
    },
    'date/time input types': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 11.6,
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 5.0,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<input type=date> <input type=time><br /><br /><strong>Chrome</strong> and <strong>Safari</strong> provide date-formatted text fields, but <strong>no real calendar widget</strong>.'
    },
    'details & summary elements': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 4.0,
        title: 'The <strong><details></strong> element generates a simple no-JavaScript widget to show/hide element contents, optionally by clicking on its child <strong><summary></strong> element.'
    },
    'drag and drop': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 12.0,
        ie: 6.0,
        safari: 5.0,
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '\'draggable\' in document.createElement(\'span\')'
    },
    'form validation': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 10.0,
        safari: 'Partial Support (v5.0 and v6.0)',
        'ios-safari': 'Not Supported (3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<strong>Partial support</strong> in <strong>Safari</strong> refers to lack of notice when form with required fields is attempted to be submitted.'
    },
    'toolbar/context menu': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 'Partial Support (v8.0 to v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<strong>Partial support</strong> in <strong>Firefox</strong> refers to using the non-standard <strong>menuitem</strong> child elements, where the current spec uses <strong>command</strong> child elements. It is also currently limited to context menus, not toolbar menus.'
    },
    'progress & meter': {
        chrome: 16.0,
        firefox: 'Partial Support (v8.0 to v12.0)',
        opera: 11.6,
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: '<strong>Partial support</strong> in <strong>Firefox 6+</strong> and <strong>IE10</strong> refers to supporting the <strong>progress</strong> element, but not the <strong>meter</strong> element.'
    },
    'range input type': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 11.6,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Partial Support (v2.1 to v4.0)',
        title: '<input type=range><br /><br />Currently all <strong>Android</strong> browsers hide the <strong>slider</strong> input field by default. However, the element can be styled to be made visible and usable.'
    },
    'new semantic elements': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Partial Support (v5.0 and v6.0)',
        android: 2.2,
        title: '<strong>HTML5</strong> offers some new elements, primarily for semantic purposes. The elements include: <section>, <article>, <aside>, <hgroup>, <header>, <footer>, <nav>, <figure>, <figcaption>, <time>, <mark>.<br /><br /><strong>Partial support</strong> refers to missing the default styling. This is easily taken care of by using <strong>display:block</strong> for all new elements (except <strong>time</strong> and <strong>mark</strong>, these should be <strong>display:inline</strong> anyway).'
    },
    'number input type': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 11.6,
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 'Partial Support (v3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Partial Support (v4.0)',
        title: '<input type=number><br /><br /><strong>iOS Safari</strong> and <strong>Android 4</strong> show number input, but do not use <strong>step</strong>, <strong>min</strong> or <strong>max</strong> attributes or show <strong>increment/decrement</strong> buttons.'
    },
    'offline web applications': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of defining web page files to be cached using a cache manifest file, allowing them to work offline on subsequent visits to the page'
    },
    'session history management': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 10.0,
        safari: 'Partial Support (v5.0, v5.1 and v6.0)',
        'ios-safari': 5.0,
        'opera-mobile': 11.1,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Supported (v2.2 and v2.3) but not supported (v3.0 and v4.0)',
        title: 'Method of manipulating the user\'s browser\'s session history in JavaScript using <strong>history.pushState</strong>, <strong>history.replaceState</strong> and the <strong>popstate</strong> event<br /><br />Older <strong>iOS</strong> versions claim support, but implementation is too buggy to be useful. Partial support in other <strong>Safari</strong>s refers to other buggy behavior.'
    },
    'defer attribute for external scripts': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 'Partial Supported (v12.0)',
        ie: 6.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: '<script defer></script><br /><br />The <strong>boolean defer</strong> attribute on <script> elements allows the <strong>external JavaScript file</strong> to run when the <strong>DOM is loaded</strong>, without delaying page load first.'
    },
    'hashchange event': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.2,
        title: 'Event triggered in JavaScript when the <strong>URL</strong>\'s <strong>hash</strong> has changed (for example: <strong>page.html#foo</strong> to <strong>page.html#bar</strong>)'
    },
    'getelementsbyclassname': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'HTMLDocument.getElementsByClassName (duplicate classes are ignored!)<br /><br />Can be invoked at HTMLElement too.'
    },
    'inline svg in html5': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.1,
        'ios-safari': 5.0,
        'opera-mobile': 12.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Method of using SVG tags directly in HTML documents. Requires HTML5 parser.'
    },
    'classlist (domtokenlist)': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 'Support Unknown (v10.0)',
        safari: 5.1,
        'ios-safari': 5.0,
        'opera-mobile': 11.1,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Method of easily manipulating classes on elements, using the <strong>DOMTokenList</strong> object.'
    },
    'async attribute for external scripts': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 'Partial Supported (v12.0)',
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: '<script async></script><br /><br />The boolean <strong>async</strong> attribute on script elements allows the external JavaScript file to run when it\'s available, without delaying page load first.'
    },
    'png alpha transparency': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 7.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Semi-transparent areas in PNG files<br /><br /><strong>IE6</strong> does support full transparency in <strong>8-bit PNG</strong>s, which can sometimes be an alternative to <strong>32-bit PNG</strong>s.'
    },
    'queryselector/queryselectorall': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Only works for the CSS selectors available. Thus the <strong>IE8</strong> implementation is limited to the <strong>CSS 2.1</strong> selectors'
    },
    'json parsing': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of converting JavaScript objects to <strong>JSON</strong> strings and <strong>JSON</strong> back to objects using <strong>JSON.stringify()</strong> and <strong>JSON.parse()</strong><br /><br />Requires document to be in <strong>IE8+</strong> standards mode to work in <strong>IE8</strong>.'
    },
    'web storage - name/value pairs': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported  (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of storing data locally like cookies, but for larger amounts of data (sessionStorage and localStorage, used to fall under HTML5).'
    },
    'cross-document messaging: postmessage': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 'Partial Support (v8.0 to v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of sending information from a page on one domain to a page on a different one (using postMessage)<br /><br />Partial support in IE refers to only working in frames/iframes (not other tabs/windows).'
    },
    'data urls': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 'Partial Support (v8.0 to v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of embedding images and other files in webpages as a string of text<br /><br />Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files. Max URI length in IE8 is 32KB. In IE9 JavaScript files are supported too and the maximum size limit set to 4GB.'
    },
    'cross-origin resource sharing: cors': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 12.0,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 12.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of performing XMLHttpRequests across domains<br /><br />Supported somewhat in IE8 and IE9 using the XDomainRequest object'
    },
    'geolocation: mapping': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of informing a website of the user\'s geographical location'
    },
    'css3 word-wrap': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 6.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Allows lines to be broken within words if an otherwise unbreakable string is too long to fit.'
    },
    'display: inline-block': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of displaying an element as a block while flowing it with text.<br /><br />Only supported in IE6 and IE7 on elements with a display of "inline" by default. Alternative properties are available to provide complete cross-browser support.'
    },
    'min-width | max-width | min-height | max-height': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 7.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of setting a minimum or maximum width or height to an element.<br /><br />IE7 does not support \'inherit\' as a value on any of these properties. IE8 has some bugs with max-width/height combined with overflow: auto/scroll.'
    },
    'position:fixed': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 7.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Method of keeping an element in a fixed location regardless of scroll position<br /><br />Only works in Android 2.2+ by using the following meta tag: <meta name=viewport content=width=device-width, user-scalable=no>'
    },
    'css counters': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of controlling number values in generated content, using the counter-reset and counter-increment properties.'
    },
    'css3 box-sizing': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of specifying whether or not an element\'s borders and padding should be included in size units'
    },
    ':before and :after pseudo-elements': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 8.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of displaying text or images before or after the given element\'s contents using the :before and :after pseudo-elements'
    },
    'css3 opacity': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of setting the transparency level of an element<br /><br />Transparency for elements in IE8 and older can be achieved using the proprietary "filter" property and does not work well with PNG images using alpha transparency.'
    },
    'css3 text-overflow': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 6.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Append ellipsis when text overflows its containing element'
    },
    'web fonts: @font-face': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.2,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 4.0,
        title: 'Method of displaying fonts downloaded from websites<br /><br />Partial support before IE9 refers to only supporting EOT fonts. Safari for iOS 4.1 and below only supports SVG fonts.'
    },
    'css3 colors: rgba/hsla': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of describing colors using Hue, Saturation and Lightness (hsl()) rather than just RGB, as well as allowing alpha-transparency with rgba() and hsla().'
    },
    'css3 media queries': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of applying styles based on media information. Includes things like page and device dimensions<br /><br />Incomplete support by older webkit browsers refers to only acknowledging different media rules on page reload'
    },
    'css3 selectors': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Advanced element selection using selectors like :nth-child(), :last-child, :first-of-type, etc.'
    },
    'css3 multiple backgrounds': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.1,
        title: 'Method of using multiple images as a background'
    },
    'css3 background sizing': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 2.2,
        title: 'New properties to affect background images, including background-clip, background-origin and background-size'
    },
    'css3 border-radius': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of making the border corners round'
    },
    'css3 box-shadow': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of applying one or more shadow or blur effects to text<br /><br /><strong>Opera Mini</strong> ignores the <strong>blur-radius</strong> set, so no blur effect is visible. <strong>Text-shadow</strong> behavior can be somewhat emulated in older IE versions using the non-standard <strong>dropshadow</strong> or <strong>glow</strong> filters.'
    },
    'css3 transforms': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of transforming an element including rotating, scaling, etc.<br /><br />The scale transform can be emulated in <strong>IE < 9</strong> using Microsoft\'s <strong>zoom</strong> extension, others are (not easily) possible using the <strong>MS Matrix filter</strong>'
    },
    'rem (root em) units': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 12.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Type of unit similar to <strong>em</strong>, but relative only to the root element, not any parent element. Thus compounding does not occur as it does with <strong>em</strong> units.'
    },
    'svg (basic support)': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 3.0,
        title: 'Method of displaying basic Vector Graphics features using the embed or object elements'
    },
    'svg in html img element': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 4.0,
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 3.0,
        title: 'Method of displaying SVG images in HTML using <img><br /><br />Partial support in Safari 3.2 refers to buggy behavior with certain SVG images.'
    },
    'svg in css backgrounds': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 'Partial Support (v3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 5.0,
        android: 3.0,
        title: 'Method of using SVG images as CSS backgrounds'
    },
    'svg fonts': {
        chrome: 16.0,
        firefox: 'Not Supported (v3.6 to v12.0)',
        opera: 11.6,
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Method of using fonts defined as SVG shapes<br /><br />Supported in Opera Mini in SVG images only, not in HTML.'
    },
    'xmlhttprequest 2': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 12.0,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 12.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Adds more functionality to AJAX requests like file uploads, transfer progress information and the ability to send form data.<br /><br /><strong>Firefox 3.5</strong> and <strong>3.6</strong> partial support refers to only including support for the <strong>progress</strong> event.'
    },
    'matchmedia': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 'Support Unknown (v12.0)',
        ie: 10.0,
        safari: 5.1,
        'ios-safari': 5.0,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'API for finding out whether or not a media query applies to the document.'
    },
    'calc() as css unit value': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 8.0,
        opera: 'Support Unknown (v12.0)',
        ie: 9.0,
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 and v4.0)',
        title: 'Method of allowing calculated values for length units, i.e. <strong>width: calc(100%-3em)</strong><br /><br />Support can be somewhat emulated in older versions of <strong>IE</strong> using the non-standard <strong>expression()</strong> syntax.'
    },
    'css3 3d transforms': {
        chrome: 16.0,
        firefox: 10.0,
        opera: 'Support Unknown (v12.0)',
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'Method of transforming an element in the third dimension<br /><br />-webkit-transform-style: preserve-3d;'
    },
    '-webkit-box-reflect': {
        chrome: 16.0,
        firefox: 'Not Supported (v3.6 to v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of displaying a reflection of an element<br /><br />Proposal by <strong>Webkit</strong>, being considered for <strong>W3C</strong> standardization. Similar effect can be achieved in <strong>Firefox 4+</strong> using the <strong>-moz-element()</strong> background property<br /><br />-webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.5, transparent), to(white));'
    },
    'css3 animation': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 12.0,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 4.0,
        title: 'Complex method of animating certain properties of an element<br /><br /><strong>Partial support</strong> in <strong>Android</strong> browser refers to buggy behavior in different scenarios. Support in <strong>Opera 12</strong> is expected, but not assured.'
    },
    'css canvas drawings': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of using HTML5 <canvas> element as a background image<br /><br />Proposal by <strong>Webkit</strong>, being considered for <strong>W3C</strong> standardization. A similar effect can be achieved in <strong>Firefox 4+</strong> using the <strong>-moz-element()</strong> background property'
    },
    'pointer-events (for html)': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'This <strong>CSS property</strong>, when set to <strong>none</strong> allows elements to <strong>not receive hover/click events</strong>, instead the event will occur on anything behind it.<br /><br />Already part of the <strong>SVG specification</strong>, and all SVG-supporting browsers <strong>appear to support</strong> the property on SVG elements.'
    },
    'css masks': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of displaying part of an element, using a selected image as a mask<br /><br />Proposal by <strong>Webkit</strong>, being considered for <strong>W3C</strong> standardization.'
    },
    'ttf/otf - truetype and opentype font support': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 'Partial Support (v9.0 and v10.0)',
        safari: 5.0,
        'ios-safari': 4.2,
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.2,
        title: 'Support for the <strong>TrueType (.ttf)</strong> and <strong>OpenType (.otf)</strong> outline font formats in <strong>@font-face</strong>.<br /><br /><strong>Partial support</strong> in <strong>IE9</strong> refers to the fonts only working when set to be <strong>installable</strong>.'
    },
    'flexible box layout module': {
        chrome: 17.0,
        firefox: 'Partial Support (v3.6 to v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Partial Support (v10.0)',
        safari: 'Partial Support (v5.0 to v6.0)',
        'ios-safari': 'Partial Support (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Partial Support (v2.1 to v4.0)',
        title: 'Method of positioning elements in horizontal or vertical stacks.<br /><br /><strong>Partial support</strong> refers to supporting an older version of the specification.'
    },
    'css3 text-shadow': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 10.0,
        'opera-mini': 'Partial Support (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of applying one or more shadow or blur effects to text<br /><br /><strong>Opera Mini</strong> ignores the <strong>blur-radius</strong> set, so no blur effect is visible. Text-shadow behavior can be somewhat emulated in older <strong>IE</strong> versions using the non-standard <strong>dropshadow</strong> or <strong>glow</strong> filters.'
    },
    'web sockets': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 'Partial Support (v11.6 and v12.0)',
        ie: 10.0,
        safari: 'Partial Support (v5.0 to v6.0)',
        'ios-safari': 'Partial Support (v4.2 to v5.0)',
        'opera-mobile': 'Partial Support (v11.0 and v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Bidirectional communication technology for web apps<br /><br /><strong>Partial support</strong> refers to the <strong>websocket</strong>s implementation using an older version of the protocol and/or the implementation being disabled by default (due to security issues with the older protocol).<br /><br /><strong>Microsoft is currently experimenting with the technology</strong>.'
    },
    'web sql database': {
        chrome: 16.0,
        firefox: 'Not Supported (v3.6 to v12.0)',
        opera: 11.6,
        ie: 'Support Unknown (v10.0)',
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of storing data client-side, allows Sqlite database queries for access and manipulation<br /><br />The Web SQL Database specification is no longer being maintained and support may be dropped in future versions.'
    },
    'web workers': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 10.0,
        safari: 5.0,
        'ios-safari': 5.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Supported only on v2.1 – Not Supported (v2.2 to v4.0)',
        title: 'Method of running scripts in the background, isolated from the web page'
    },
    'web notifications': {
        chrome: 'Partial Support (v16.0 to v19.0)',
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Method of alerting the user outside of a web page by displaying notifications (that do not require interaction by the user).<br /><br /><strong>Partial support</strong> in <strong>Chrome</strong> refers to using an older version of the spec.<br /><br />window.webkitNotifications'
    },
    'requestanimationframe': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 'Support Unknown (v12.0)',
        ie: 10.0,
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'API allowing a more efficient way of running script-based animation, compared to traditional methods using timeouts.<br /><br />Specifically used with <canvas> (2D) and WebGL (3D) drawing'
    },
    'indexeddb': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 'Support Unknown (v12.0)',
        ie: 10.0,
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Method of storing data client-side, allows indexed database queries. Previously known as <strong>WebSimpleDB API</strong>.<br /><br /><strong>Microsoft</strong> is currently experimenting with the technology.'
    },
    'getusermedia/stream api': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 12.0,
        ie: 'Support Unknown (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 12.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Method of accessing external device data (such as a <strong>webcam video steam</strong>). Formerly this was envisioned as the <device> element.'
    },
    'filesystem & filewriter api': {
        chrome: 16.0,
        firefox: 'Support Unknown (v11.0 and v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'File System & File Writer API<br />Method of reading and writing files to a sandboxed file system.'
    },
    'filereader api': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 10.0,
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 11.1,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 3.0,
        title: 'File Reader API<br />Method of reading the contents of a File or Blob object into memory'
    },
    'file api': {
        chrome: 16.0,
        firefox: 'Partial Support (v3.6 to v12.0)',
        opera: 'Partial Support (v11.6 and v12.0)',
        ie: 'Partial Support (v10.0)',
        safari: 'Partial Support (v5.1 and v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Partial Support (v11.1 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Partial Support (v3.0 and v4.0)',
        title: 'Method of manipulating file objects in web applications client-side, as well as programmatically selecting them and accessing their data.<br /><br /><strong>Microsoft</strong> is currently experimenting with the technology. <strong>Partial support</strong> in <strong>Safari</strong> refers to lacking <strong>FileReader</strong> support.'
    },
    'webm/vp8 video format': {
        chrome: 16.0,
        firefox: 8.0,
        opera: 11.6,
        ie: 'Support Unknown (v10.0)',
        safari: 'Not Supported (v5.0 to v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.3,
        title: 'Multimedia format designed to provide a royalty-free, high-quality open video compression format for use with HTML5 video.<br /><br />Will work in <strong>IE9</strong> and <strong>Safari</strong> provided the user has the <strong>WebM codecs</strong> installed.'
    },
    'woff - web open font format': {
        chrome: 16.0,
        firefox: 3.6,
        opera: 11.6,
        ie: 9.0,
        safari: 5.1,
        'ios-safari': 5.0,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Compressed TrueType/OpenType font that contains information about the font\'s source.'
    },
    'mpeg-4/h.264 video format': {
        chrome: 16.0,
        firefox: 'Not Supported (v3.6 to v12.0)',
        opera: 'Not Supported (v11.6 and v12.0)',
        ie: 9.0,
        safari: 5.0,
        'ios-safari': 3.2,
        'opera-mobile': 'Not Supported (v11.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Partial Support (v2.1 to v4.0)',
        title: 'Commonly used video compression format (not royalty-free)<br /><br />Support in <strong>Chrome</strong> may be dropped in some upcoming version. The <strong>Android 2.3</strong> browser currently requires specific handling to play videos. <strong>Firefox</strong> and <strong>Opera</strong> have both stated that they will not support the format.'
    },
    'touch events': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 8.0,
        opera: 'Support Unknown (v12.0)',
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 3.2,
        'opera-mobile': 11.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 2.1,
        title: 'Method of registering when, where and how the interface is touched, for devices with a touch screen. These DOM events are similar to mousedown, mousemove, etc.<br /><br /><strong>Partial support</strong> in <strong>IE10</strong> refers to using <strong>Pointer events</strong>.'
    },
    'animated png (apng)': {
        chrome: 'Support Unknown (v18.0 and v19.0)',
        firefox: 3.6,
        opera: 11.6,
        ie: 'Partial Support (v10.0)',
        safari: 'Support Unknown (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 10.0,
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'Like animated <strong>GIF</strong>s, but allowing <strong>24-bit</strong> colors and <strong>alpha transparency</strong><br /><br />Where support for <strong>APNG</strong> is missing, only the first frame is displayed'
    },
    'full screen api': {
        chrome: 'Partial Support (v16.0 to v19.0)',
        firefox: 'Partial Support (v10.0 to v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 'Partial Support (v5.1 and v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'API for allowing content (like a <video> or <canvas> element) to take up the entire screen.<br /><br /><strong>Partial support</strong> refers to supporting an earlier draft of the spec.'
    },
	'audio api': {
		chrome: 'Partial Support (v16.0 to v19.0)',
        firefox: 'Partial Support (v8.0 to v12.0)',
        opera: 'Support Unknown (v12.0)',
        ie: 'Support Unknown (v10.0)',
        safari: 'Partial Support (v6.0)',
        'ios-safari': 'Not Supported (v3.2 to v5.0)',
        'opera-mobile': 'Not Supported (v10.0 to v12.0)',
        'opera-mini': 'Not Supported (v5.0 and v6.0)',
        android: 'Not Supported (v2.1 to v4.0)',
        title: 'High-level JavaScript API for processing and synthesizing audio<br /><br />Current support in <strong>Gecko/WebKit</strong> is based on two different proposals.'
	}
},
    featureNames = ['Canvas', 'WebGL', 'Video', 'Audio', 'Color input type', 'ContentEditable', 'DataList', 'HTML5 Form Features', 'Text API for Canvas', 'Dataset & data-* attributes', 'Date/Time input types', 'Details & Summary elements', 'Drag and Drop', 'Form validation', 'Toolbar/context menu', 'Progress & Meter', 'Range input type', 'New semantic elements', 'Number input type', 'Offline web applications', 'Session History Management', 'defer attribute for external scripts', 'Hashchange Event', 'getElementsByClassName', 'Inline SVG in HTML5', 'classList (DOMTokenList)', 'async attribute for external scripts', 'PNG alpha transparency', 'querySelector/querySelectorAll', 'JSON Parsing', 'Web Storage - name/value pairs', 'Cross-document messaging: postMessage', 'Data URLs', 'Cross-Origin Resource Sharing: CORS', 'Geolocation: Mapping', 'CSS3 word-wrap', 'display: inline-block', 'min-width | max-width | min-height | max-height', 'position:fixed', 'CSS Counters', 'CSS3 box-sizing', ':before and :after pseudo-elements', 'CSS3 Opacity', 'CSS3 text-overflow', 'Web fonts: @font-face', 'CSS3 Colors: rgba/hsla', 'CSS3 Media Queries', 'CSS3 Selectors', 'CSS3 Multiple backgrounds', 'CSS3 Background Sizing', 'CSS3 border-radius', 'CSS3 box-shadow', 'CSS3 Transforms', 'rem (root em) units', 'SVG (basic support)', 'SVG in HTML img element', 'SVG in CSS backgrounds', 'SVG fonts', 'XMLHttpRequest 2', 'matchMedia', 'calc() as CSS unit value', 'CSS3 3D Transforms', '-webkit-box-reflect', 'CSS3 Animation', 'CSS Canvas Drawings', 'pointer-events (for HTML)', 'CSS Masks', 'TTF/OTF - TrueType and OpenType font support', 'Flexible Box Layout Module', 'CSS3 text-shadow', 'Web Sockets', 'Web SQL Database', 'Web Workers', 'Web Notifications', 'requestAnimationFrame', 'IndexedDB', 'getUserMedia/Stream API', 'FileSystem & FileWriter API', 'FileReader API', 'File API', 'WebM/VP8 video format', 'WOFF - Web Open Font Format', 'MPEG-4/H.264 video format', 'Touch events', 'Animated PNG (APNG)', 'Full Screen API', 'Audio API'],
    browsers = ['Chrome', 'Firefox', 'Opera', 'IE', 'Safari', 'iOS-Safari', 'Opera-Mobile', 'Opera-Mini', 'Android'],
    bLength = browsers.length,
    fLength = featureNames.length,
    search = document.getElementById('search'),
    searchHint = document.getElementById('search-hint'),
    searchResult = document.getElementById('search-result'),
    otherResult = document.getElementById('other-results'),
    tooltip = document.getElementById('tooltip');

/* ♣♣♣♣♣♣♣♣♣♣♣ search ♣♣♣♣♣♣♣♣♣♣♣ */
var searchIt = function ()
{
    var searchValue = search.value, compareWith, j, browserName, version, div, output, browserClass, id, accesskey, name,
        browsersArray = [],
        /* caching */
        features = window.features,
        featureNames = window.featureNames,
        browsers = window.browsers,
        searchResult = window.searchResult,
        otherResult = window.otherResult,
        bLength = window.bLength,
        fLength = window.fLength;

    /* ♣♣♣♣♣♣♣♣♣♣♣ If two features wanna be compared! ♣♣♣♣♣♣♣♣♣♣♣ */
    if (searchValue.indexOf('/vs/') != -1)
    {
        compareWith = searchValue.split('/vs/')[1];
        searchValue = searchValue.split('/vs/')[0];

        /* ♣♣♣♣♣♣♣♣♣♣♣ More than two features are not allowed to compare! ♣♣♣♣♣♣♣♣♣♣♣ */
        if (compareWith.indexOf('/vs/') != -1) compareWith = compareWith.split('/vs/')[1];
    }

    searchResult.innerHTML = '<legend>Search Result</legend>';

    var feature = features[searchValue.toLowerCase()];
    if (feature)
    {
        div = document.createElement('div');
        div.className = 'output';
        output = '<h2 class="header" accesskey="' + feature['title'] + '">' + searchValue + '</h2>';

        /* ♣♣♣♣♣♣♣♣♣♣♣ search result section ♣♣♣♣♣♣♣♣♣♣♣ */
        for (j = 0; j < bLength; j++)
        {
            browserName = browsers[j];
            version = feature[browserName.toLowerCase()];
            browsersArray[j] = version;

            browserClass = 'browser';

            if (version.toString().indexOf('Not Supported') != -1) browserClass += ' no-support';
            else if (version.toString().indexOf('Partial') != -1) browserClass += ' partial-support';
            else if (version.toString().indexOf('Unknown') != -1) browserClass += ' Unknown-support';

            if (typeof version == 'number')
                output += '<div class="' + browserClass + '" accesskey="<strong>' + browserName + '</strong> is supporting <strong>' + searchValue + '</strong> since version <strong>' + version + '</strong>"><div class="name">' + browserName + '</div><div class="version">' + version + '</div></div>';
            else
                output += '<div class="' + browserClass + '" accesskey="<strong>' + browserName + '</strong>: ' + version + '"><div class="name">' + browserName + '</div><div class="version">' + version + '</div></div>';
        }

        div.innerHTML = output;
        searchResult.appendChild(div);


        /* ♣♣♣♣♣♣♣♣♣♣♣ if user wanna compare two features (in-place)! ♣♣♣♣♣♣♣♣♣♣♣ */
        if (compareWith)
        {
            var compareWithFeature = features[compareWith.toLowerCase()];
            if (compareWithFeature)
            {
                div = document.createElement('div');
                div.className = 'output';

                output = '<h2 class="header" accesskey="' + compareWithFeature['title'] + '">' + compareWith + '</h2>';

                /* ♣♣♣♣♣♣♣♣♣♣♣ search result section ♣♣♣♣♣♣♣♣♣♣♣ */
                for (j = 0; j < bLength; j++)
                {
                    browserName = browsers[j];
                    version = compareWithFeature[browserName.toLowerCase()];

                    browserClass = 'browser';

                    if (version.toString().indexOf('Not Supported') != -1) browserClass += ' no-support';
                    else if (version.toString().indexOf('Partial') != -1) browserClass += ' partial-support';
                    else if (version.toString().indexOf('Unknown') != -1) browserClass += ' Unknown-support';

                    if (typeof version == 'number')
                        output += '<div class="' + browserClass + '" accesskey="<strong>' + browserName + '</strong> is supporting <strong>' + compareWith + '</strong> since version <strong>' + version + '</strong>"><div class="name">' + browserName + '</div><div class="version">' + version + '</div></div>';
                    else
                        output += '<div class="' + browserClass + '" accesskey="<strong>' + browserName + '</strong>: ' + version + '"><div class="name">' + browserName + '</div><div class="version">' + version + '</div></div>';
                }

                div.innerHTML = output;
                searchResult.appendChild(div);
            }
        }

        /* ♣♣♣♣♣♣♣♣♣♣♣ Getting other features – output will be relevant to searched feature! ♣♣♣♣♣♣♣♣♣♣♣ */
        id = 100;
        otherResult.innerHTML = '<legend>Other Results</legend>';

        for (var i = 0; i < fLength; i++)
        {
            name = featureNames[i];
            if (name.toLowerCase() != searchValue.toLowerCase())
            {
                feature = features[name.toLowerCase()];
                div = document.createElement('div');
                div.className = 'output';
                div.setAttribute('draggable', 'true');

                div.id = id++;

                /* ♣♣♣♣♣♣♣♣♣♣♣ dragstart event! ♣♣♣♣♣♣♣♣♣♣♣ */
                addEvent(div, 'dragstart', function (e)
                {
                    e.dataTransfer.effectAllowed = 'copy';
                    e.dataTransfer.setData('Text', this.id);
                });

                output = '<h2 class="header" accesskey="' + feature['title'] + '">' + name + '</h2>';
                for (j = 0; j < bLength; j++)
                {
                    browserClass = 'browser';
                    browserName = browsers[j];
                    version = feature[browserName.toLowerCase()];

                    /* ♣♣♣♣♣♣♣♣♣♣♣ if current browser is same supporting both features! ♣♣♣♣♣♣♣♣♣♣♣ */
                    if (browsersArray[j] == version)
                    {
                        browserClass += ' match';

                        accesskey = 'Both <strong>' + searchValue + '</strong> and <strong>' + name;

                        if (version.toString().indexOf('Not Supported') != -1)
                            accesskey += '</strong> are not supported on <strong>' + browserName + '</strong>';
                        else if (version.toString().indexOf('Partial') != -1)
                            accesskey += '</strong> are partially supported on <strong>' + browserName + '</strong>';
                        else
                            accesskey += '</strong> are same supported on <strong>' + browserName + '</strong> version <strong>' + version + '</strong> and upper';

                    }
                    /* ♣♣♣♣♣♣♣♣♣♣♣ if searched feature is low supported than this feature ♣♣♣♣♣♣♣♣♣♣♣ */
                    else if (+browsersArray[j] > +version)
                    {
                        browserClass += ' upper';

                        if (version.toString().indexOf('Not Supported') != -1)
                            accesskey = 'Both ' + searchValue + ' and ' + name + ' not supported on ' + browserName;
                        else if (version.toString().indexOf('Partial') != -1)
                            accesskey = 'Both ' + searchValue + ' and ' + name + ' partially supported on ' + browserName;
                        else
                            accesskey = 'Versions of <strong>' + browserName + '</strong> (' + features[searchValue.toLowerCase()][browserName.toLowerCase()] + ' and upper) supporting <strong>' + searchValue + '</strong> also support <strong>' + name + '</strong>';

                    }
                    /* ♣♣♣♣♣♣♣♣♣♣♣ if searched feature is high supported than this feature ♣♣♣♣♣♣♣♣♣♣♣ */
                    else if (+browsersArray[j] < +version)
                    {
                        browserClass += ' lower';

                        if (version.toString().indexOf('Not Supported') != -1)
                            accesskey = 'Both ' + searchValue + ' and ' + name + ' not supported on ' + browserName;
                        else if (version.toString().indexOf('Partial') != -1)
                            accesskey = 'Both ' + searchValue + ' and ' + name + ' partially supported on ' + browserName;
                        else
                            accesskey = 'Versions of <strong>' + browserName + '</strong> (' + version + ' and upper) supporting <strong>' + name + '</strong> also support <strong>' + searchValue + '</strong>';
                    }
                    /* ♣♣♣♣♣♣♣♣♣♣♣ Not supported, support Unknown, partial support etc. ♣♣♣♣♣♣♣♣♣♣♣ */
                    else
                    {
                        if (version.toString().indexOf('Not Supported') != -1)
                            browserClass += ' no-support';

                        if (typeof version == 'number')
                            accesskey = '<strong>' + browserName + '</strong> is supporting <strong>' + name + '</strong> since version <strong>' + version + '</strong>';
                        else if (version.toString().indexOf('Not Supported') != -1)
                            accesskey = '<strong>' + browserName + '</strong> is not supporting <strong>' + name + '</strong>';
                        else
                            accesskey = '<strong>' + browserName + '</strong>: ' + version;
                    }

                    output += '<div class="' + browserClass + '" accesskey="' + accesskey + '"><div class="name">' + browserName + '</div><div class="version">' + version + '</div></div>';
                }
                div.innerHTML = output;
                otherResult.appendChild(div);
            }
        }

        /* ♣♣♣♣♣♣♣♣♣♣♣ Changing URL hash to allow end-user share feature (s) ♣♣♣♣♣♣♣♣♣♣♣ */
        location.hash = searchValue.replace(/&amp;/g, '&').replace(/ /g, '+');
        if (compareWith) location.hash += '/vs/' + compareWith.replace(/&amp;/g, '&').replace(/ /g, '+');
        
        /*document.title = 'Use: ' + searchValue + ' | HTML5/CSS3 | Muaz Khan';*/
    }
};

/* ♣♣♣♣♣♣♣♣♣♣♣ keyup event + focus too ♣♣♣♣♣♣♣♣♣♣♣ */
function keyup()
{
    var value = search.value,
        fLength = featureNames.length;
    
    searchHint.style.display = 'block';
    searchHint.innerHTML = '';

    searchHint.style['top'] = (search.offsetTop + search.clientHeight) + 'px';
    searchHint.style['left'] = search.offsetLeft + 'px';
    searchHint.style['width'] = search.clientWidth + 'px';

    for (var i = 0; i < fLength; i++)
    {
        var name = featureNames[i];
        if (name.toLowerCase().indexOf(value.toLowerCase()) != -1) searchHint.innerHTML += '<div class="suggestion">' + name + '</div>';
        else
        {
            var feature = features[name.toLowerCase()];
            if (feature && feature['title'].toLowerCase().indexOf(value.toLowerCase()) != -1) searchHint.innerHTML += '<div class="suggestion">' + name + '</div>';
        }
    }
}

/* ♣♣♣♣♣♣♣♣♣♣♣ Document Mouse move event ♣♣♣♣♣♣♣♣♣♣♣ */
addEvent(document, 'mousemove', function (e)
{
    if (!e.target) return;
    var parent = e.target.parentNode;

    if (e.target.className.search(/header/g) !== -1) parent = e.target;
    else if (e.target.className.search(/browser/g) !== -1) parent = e.target;

    if (parent.className.search(/browser/g) !== -1 || e.target.className.search(/browser/g) !== -1 || e.target.className.search(/header/g) !== -1)
    {
        tooltip.innerHTML = parent.getAttribute('accesskey').replace(/<strong>/g, '%%').replace(/<\/strong>/g, '__').replace(/<br \/>/g, '##').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/%%/g, '<strong>').replace(/__/g, '</strong>').replace(/##/g, '<br />');
        tooltip.style['top'] = (parent.offsetTop + parent.clientHeight) + 'px';
        tooltip.style['left'] = parent.offsetLeft + 'px';
        tooltip.style['width'] = (parent.clientWidth - 10) + 'px';
        tooltip.style['opacity'] = 1;
    }
    else if (e.target.id != 'tooltip')
    {
        tooltip.style['opacity'] = 0;
        tooltip.style['left'] = '-500px';
    }
});

/* ♣♣♣♣♣♣♣♣♣♣♣ Document Click Event ♣♣♣♣♣♣♣♣♣♣♣ */
addEvent(document, 'click', function(e) {
    if (!e.target) return;
    if (e.target.className == 'suggestion')
    {
        search.value = e.target.innerHTML.replace(/&amp;/g, '&');
        searchIt();
    }
    if (e.target.id != 'search') searchHint.style.display = 'none';
    if (e.target.className == 'header')
    {
        var value = e.target.innerHTML.replace(/&amp;/g, '&');
        location.hash = value.replace(/ /g, '+').toLowerCase();
        document.title = 'Use: ' + value + ' | HTML5/CSS3 | Muaz Khan';
        search.value = value;
        searchIt();
    }
});

/* ♣♣♣♣♣♣♣♣♣♣♣ function to handle cross-browser Events ♣♣♣♣♣♣♣♣♣♣♣ */
function addEvent(elm, evType, callback)
{
    if (elm.addEventListener)
    {
        elm.addEventListener(evType, callback, !1);
        return true;
    }
    else if (elm.attachEvent) return elm.attachEvent('on' + evType, callback);
    else elm['on' + evType] = callback;
    return this;
}

/* ♣♣♣♣♣♣♣♣♣♣♣ keyup/focus/change Events ♣♣♣♣♣♣♣♣♣♣♣ */
addEvent(search, 'keyup', keyup);
addEvent(search, 'focus', keyup);
addEvent(search, 'change', searchIt);

/* ♣♣♣♣♣♣♣♣♣♣♣ dragover Event ♣♣♣♣♣♣♣♣♣♣♣ */
addEvent(searchResult, 'dragover', function(e) {
    if (e.preventDefault) e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    return false;
});

/* ♣♣♣♣♣♣♣♣♣♣♣ drop Event ♣♣♣♣♣♣♣♣♣♣♣ */
addEvent(searchResult, 'drop', function(e) {
    if (e.stopPropagation) e.stopPropagation();
    var el = document.getElementById(e.dataTransfer.getData('Text'));

    var h2 = el.getElementsByTagName('h2')[0];
    if (h2)
    {
        if (location.hash.indexOf('/vs/') != -1)
            location.hash = location.hash.split('/vs/')[0];
        location.hash += '/vs/' + h2.innerHTML.replace(/&amp;/g, '&').replace(/ /g, '+');
    }
    location.reload();
});

var help = document.getElementById('help');
addEvent(help, 'click', function ()
{
    var helpContainer = document.getElementById('help-container');
    if (help.innerHTML.indexOf('Show Help') != -1)
    {
        helpContainer.style.marginTop = '0';
        help.innerHTML = 'Close Help';
    }
    else
    {
        helpContainer.style.marginTop = '-400px';
        help.innerHTML = 'Show Help';
    }
});

/* ♣♣♣♣♣♣♣♣♣♣♣ at the end (!pageLoad) ♣♣♣♣♣♣♣♣♣♣♣ */
featureNames = featureNames.sort();

if (location.hash.length)
    search.value = location.hash.replace('#', '').replace(/\+/g, ' ').replace(/&amp;/g, '&');

searchIt();