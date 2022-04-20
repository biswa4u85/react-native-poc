module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "@svgr/webpack"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
            'react-native-vector-icons$': 'react-web-vector-icons',
            'react-native-svg-transformer$': 'react-svg',
        }
    }
}