import { format } from 'date-fns'

export default {
  name: 'news',
  type: 'document',
  title: 'Wiadomość',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      description: 'Tytuł powinien przykłuć uwagę i nie powinien być długi'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Końcówka adresu podstrony, na której wiadomość będzie dostępna',
      description: 'Pole wymagane',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Opublikowano',
      description: 'Pole wymagane'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Grafika główna'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Wprowadzenie/streszczenie',
      description:
        'Dostępne na stronie aktualności pod grafiką, pojawia się także przy wyniku wyszukiwania w przeglądarkach lub przy przekazywaniu linku poprzez media społecznościowe.'
    },
    // {
    //     name: 'authors',
    //     title: 'Authors',
    //     type: 'array',
    //     of: [
    //         {
    //             type: 'authorReference'
    //         }
    //     ]
    // },
    // {
    //     name: 'categories',
    //     type: 'array',
    //     title: 'Categories',
    //     of: [
    //         {
    //             type: 'reference',
    //             to: {
    //                 type: 'category'
    //             }
    //         }
    //     ]
    // },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Blok wiadomości'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Od najnowszej do najstarzej',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Od najstarszej do najnowszej',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'Brak tytułu', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'DD/MM/YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Brak daty publikacji'
      }
    }
  }
}
