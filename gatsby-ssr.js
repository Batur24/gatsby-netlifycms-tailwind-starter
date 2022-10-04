const React = require('react')

function getAsyncOrDefer(isDefer) {
    return isDefer ? 's.defer=1' : 's.async=1'
}

exports.onRenderBody = (
    { setHeadComponents },
    { defer = false },
) => {

    const scriptInnerHTML =
        `window.$crisp=[];window.CRISP_WEBSITE_ID="067570dc-4f0d-4b90-b37c-6be72b6e4b3d";` +
        `(function(){d=document;s=d.createElement("script");` +
        `s.src="https://client.crisp.chat/l.js";` +
        `${getAsyncOrDefer(defer)};` +
        `d.getElementsByTagName("head")[0].appendChild(s);})();`

    return setHeadComponents([
        <script
            key="gatsby-plugin-crisp-chat"
            dangerouslySetInnerHTML={{ __html: scriptInnerHTML }}
        />,
    ])
}