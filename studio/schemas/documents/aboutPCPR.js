export default {
    name: 'aboutPCPR',
    type: 'document',
    title: 'O nas',
    fields: [
        {
            name: 'pageName',
            type: 'string',
            title: 'Nazwa strony'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Końcówka adresu podstrony, na której wiadomość będzie dostępna',
            description: 'Niezbędne w celu obdarzenia podstrony własnym adresem',
            options: {
                source: 'pageName',
                maxLength: 96
            }
        },
        {
            name: 'contentTitle',
            type: 'string',
            title: 'Nagłówek'
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
        {
            name: "order",
            title: "Kolejność",
            type: "number",
            hidden: true,
        },
    ],
}