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
            name: 'contents',
            type: 'array',
            of: [{ type: 'bodyPortableTextSection' }]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Wybierz kategorię podstrony',
            description: 'Wybór wpływa na adres podstrony oraz jej miejsce w menu głównym. Ustaw jeśli chcesz, aby link do podstrony pojawił się e odpowiedniej części rozwijanego menu. Do wykorzystania tylko w wypadku umieszczenia podstrony w części "Zadania PCPR". W przeciwnym razie pozostaw puste.',
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
