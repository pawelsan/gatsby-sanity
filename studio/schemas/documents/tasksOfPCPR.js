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
            name: 'mainImage',
            type: 'mainImage',
            title: 'Grafika główna'
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
            name: 'content4',
            type: 'bodyPortableText',
            title: 'Treść4'
        },
        {
            name: 'content5',
            type: 'bodyPortableText',
            title: 'Treść5'
        },
        {
            name: 'category',
            title: 'Wybierz kategorię podstrony',
            description: 'Wybór wpływa na miejsce podstrony w rozwijanym menu głównym.',
            type: 'reference',
            to: {
                type: 'category'
            },
            validation: Rule => Rule.required().error('Ustawienie kategorii jest niezbędne dla właściwego funkcjonowania strony')
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
    preview: {
        select: {
            title: 'pageName',
            media: 'mainImage'
        },
        prepare({ title = 'Brak tytułu', media }) {
            return {
                title,
                media,
            }
        }
    }
}
