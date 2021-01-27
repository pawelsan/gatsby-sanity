/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            dangerouslySetInnerHTML={{
                __html: `    (function () {
                    function setTheme(theme) {
                        window.__theme = theme;
                        if (theme === 'dark') {
                            document.documentElement.setAttribute('data-theme', 'dark');
                        } else {
                            document.documentElement.setAttribute('data-theme', 'light');
                        }
                    };
                    window.__setPreferredTheme = function (theme) {
                        setTheme(theme);
                        try {
                            localStorage.setItem('preferred-theme', theme);
                        } catch (e) { }
                    };

                    let preferredTheme;
                    try {
                        preferredTheme = localStorage.getItem('preferred-theme');
                    } catch (e) { }
            
                    let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                })();`,
            }}
        />,
    ]);
};