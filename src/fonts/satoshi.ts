import localFont from 'next/font/local';

export const satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/satoshi/Satoshi-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-LightItalic.woff',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Italic.woff',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-MediumItalic.woff',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-BoldItalic.woff',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Black.woff',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-BlackItalic.woff',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-Variable.woff',
            weight: '300 900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/satoshi/Satoshi-VariableItalic.woff',
            weight: '300 900',
            style: 'italic',
        },
    ],
});
