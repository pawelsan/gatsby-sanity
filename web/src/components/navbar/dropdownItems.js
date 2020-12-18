import { useStaticQuery, graphql } from "gatsby";

// Schemas for dropdowns' content 
export const dropdownItemsForAbout = [
    // { dropdown: false, to: '/piecza-zastepcza', text: 'Piecza zastępcza', color: 'red' },
    {
        to: null, text: 'Piecza zastępcza', color: 'red', subItems: [
            { to: '/piecza-zastepcza/rodziny-rdd/', text: 'Rodziny i RDD', color: 'red' },
            { to: '/piecza-zastepcza/wychowankowie/', text: 'Wychowankowie', color: 'red' },
            { to: '/piecza-zastepcza/rodzice/', text: 'Rodzice', color: 'red' },
        ]
    },
    {
        to: null, text: 'Osoby z niepełnosprawnością', color: 'green', subItems: [
            { to: '/osoby-z-niepelnosprawnoscia/rehabilitacja-spoleczna/', text: 'Rehabilitacja spoleczna', color: 'green' },
            { to: '/osoby-z-niepelnosprawnoscia/aktywny-samorzad/', text: 'Aktywny samorząd', color: 'green' },
        ]
    },
    {
        to: null, text: 'Pomoc instytucjonalna', color: 'orange', subItems: [
            { to: '/pomoc-instytucjonalna/domy-pomocy-spolecznej/', text: 'Domy Pomocy Społecznej', color: 'orange' },
            { to: '/pomoc-instytucjonalna/srodowiskowe-domy-samopomocy/', text: 'Środowiskowe Domy Samopomocy', color: 'orange' },
            { to: '/pomoc-instytucjonalna/warsztaty-terapii-zajeciowej/', text: 'Warsztaty Terapii Zajęciowej', color: 'orange' },
        ]
    },
    {
        to: null, text: 'Cudzoziemcy', color: 'blue', subItems: [
            { to: '/cudzoziemcy/pomoc-integracyjna/', text: 'Pomoc integracyjna', color: 'blue' },
            { to: '/cudzoziemcy/karta-polaka/', text: 'Karta Polaka', color: 'blue' },
            { to: '/cudzoziemcy/pomoc-repatriantom/', text: 'Pomoc repatriantom', color: 'blue' },
        ]
    },
    // { dropdown: false, to: '/cudzoziemcy', text: 'Cudzoziemcy', color: 'blue' }
]

export const dropdownItemsForDocuments = [
    { to: '/dokumenty/piecza-zastepcza/', text: 'Piecza zastępcza', color: 'blue' },
    { to: '/dokumenty/pfron/', text: 'PFRON', color: 'green' },
    { to: '/dokumenty/aktywny-samorzad/', text: 'Aktywny Samorząd', color: 'green' },
]

export const dropdownItemsForContact = [
    { to: '/dane-kontaktowe/', text: 'Dane kontaktowe', color: 'red' },
    { to: '/deklaracja/', text: 'Deklaracja dostępności', color: 'red' },
    { to: '/rodo/', text: 'RODO', color: 'red' },
    { to: '/koordynatorzy/', text: 'Koordynatorzy', color: 'blue' },
]

// Data extracted from gatsby
export const navItemQuery = () => {
    const data = useStaticQuery(graphql`
      query navItemQuery {
        allSanityTasksOfPcpr {
          edges {
            node {
              categories {
                title
              }
              pageName
              slug {
                current
              }
            }
          }
        }
        allSanityAboutPcpr {
          edges {
            node {
              pageName
              slug {
                current
              }
            }
          }
        }
        }
      `)
    return (
        data
    )

}