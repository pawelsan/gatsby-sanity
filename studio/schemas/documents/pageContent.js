export default {
    name: 'pageContent',
    type: 'document',
    title: 'Treść stron',
    fields: [
        {
            name: 'pageName',
            type: 'string',
            title: 'Nazwa strony'
        },
        {
            name: 'contentTitle',
            type: 'string',
            title: 'Tytuł treści'
        },
        {
            name: 'content',
            type: 'bodyPortableText',
            title: 'Treść'
        },
        {
            name: 'content2',
            type: 'bodyPortableText',
            title: 'Treść2'
        },
        {
            name: 'content3',
            type: 'bodyPortableText',
            title: 'Treść3'
        },
    ],
}
