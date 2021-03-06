export default {
    name: 'category',
    type: 'document',
    title: 'Kategoria podstron "Zadania PCPR"',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Nazwa'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Środek adresu podstrony, na której wiadomość będzie dostępna',
            description: 'Niezbędne w celu stworzenia adresu podstron "Zadania PCPR',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required().error('Ustawienie końcówki adresu jest niezbędne dla właściwego funkcjonowania strony')
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}
