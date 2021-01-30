export default {
    title: 'Plik',
    name: 'fileDocument',
    type: 'file',
    options: {
        hotspot: true,
        storeOriginalFilename: true
    },
    fields: [
        {
            name: 'description',
            type: 'string',
            title: 'Opis',
            options: {
                isHighlighted: true
            }
        }
    ]
}