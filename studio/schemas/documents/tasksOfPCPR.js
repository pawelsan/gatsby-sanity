export default {
    name: 'tasksOfPCPR',
    type: 'document',
    title: 'Zadania PCPR',
    fields: [
        {
            name: 'pageName',
            type: 'string',
            title: 'Zadanie'
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
            name: 'categories',
            type: 'array',
            title: 'Wybierz kategorię podstrony',
            description: 'Wybór wpływa na miejsce podstrony w rozwijanym menu głównym.',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                }
            ]
        }
    ],
}
