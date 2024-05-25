import CracoLessPlugin from 'craco-less';

const config = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
            lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
            },
            },
        },
        },
    ],
};

export default config;
