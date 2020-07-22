export default {
    name: 'gdpr',
    type: 'document',
    title: 'RODO',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tytuł'
        },
        {
            name: 'intro',
            type: 'bodyPortableText',
            title: 'Wstęp'
        },
        {
            name: 'conditions',
            type: 'bodyPortableText',
            title: 'Zasady przetwarzania danych'
        },
        {
            name: 'rights',
            type: 'bodyPortableText',
            title: 'Przysługujące prawa'
        },
        {
            name: 'ending',
            type: 'bodyPortableText',
            title: 'Informacje końcowe'
        },
        {
            name: 'entryIntoForce',
            type: 'string',
            title: 'Wejście w życie'
        },
        {
            name: 'signature',
            type: 'string',
            title: 'Podpis'
        },
    ],
}
