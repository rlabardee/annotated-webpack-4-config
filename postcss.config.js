module.exports = {
    syntax: 'postcss-scss',
    parser: 'postcss-scss',
    plugins: [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-simple-vars'),
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-hexrgba'),
        require('autoprefixer')
    ]
};
