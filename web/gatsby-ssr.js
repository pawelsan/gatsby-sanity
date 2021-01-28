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


                    function setFont(font) {
                        window.__font = font;
                        if (font === 'large') {
                            document.documentElement.setAttribute('data-font', 'large');
                        } else {
                            document.documentElement.setAttribute('data-font', 'normal');
                        }
                    };
                    window.__setPreferredFont = function (font) {
                        setFont(font);
                        try {
                            localStorage.setItem('preferred-font', font);
                        } catch (e) { }
                    };

                    let preferredFont;
                    try {
                        preferredFont = localStorage.getItem('preferred-font');
                    } catch (e) { }
            
                    // let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                    setFont(preferredFont ? preferredFont : 'normal');
                })();`,
            }}
        />,
    ]);
};