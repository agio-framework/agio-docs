const users = [];

module.exports = {

    url: 'https://agio.io',
    title: 'Agio',
    tagline: 'Easily way to build NodeJS APIs',
    baseUrl: '/',

    projectName: 'agio-framework',
    organizationName: 'Agio',

    headerLinks: [
        { doc: 'docs', label: 'Docs' },
        { doc: 'get-started', label: 'Get Started' },
        { doc: 'docs', label: 'CLI' },
    ],

    users,


    favicon: 'img/icon-monochrome.svg',
    headerIcon: 'img/icon-monochrome.svg',
    footerIcon: 'img/icon-monochrome.svg',


    colors: {
        darkColor: '#282c34',
        primaryColor: '#8668ed',
        secondaryColor: '#ffffff',
    },


    fonts: {
        defaultFonts: [
            'Raleway',
            'Roboto Mono'
        ],
        codeFonts: [
            'Roboto Mono',
        ]
    },


    copyright: `Copyright © ${new Date().getFullYear()} Agio`,

    highlight: {
        theme: 'atom-one-dark',
    },

    scripts: [
        '//buttons.github.io/buttons.js',
    ],

    stylesheets: [
        '//fonts.googleapis.com/css?family=Raleway:200|Roboto+Mono&display=swap',
        '//cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
    ],

    onPageNav: 'separate',
    cleanUrl: true,

    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

};
