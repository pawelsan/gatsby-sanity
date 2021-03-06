import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import {
  MdDescription,
  MdLocalOffer
} from 'react-icons/lib/md'
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = ''
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'news') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Spis treści')
    .items([
      S.listItem()
        .title('Ustawienia główne strony')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),

      S.listItem()
        .title('Aktualności')
        .icon(MdDescription)
        .schemaType('news')
        .child(S.documentTypeList('news').title('Aktualności')),
      S.listItem()
        .title('O nas')
        .icon(MdDescription)
        .schemaType('aboutPCPR')
        .child(S.documentTypeList('aboutPCPR').title('O nas')),
      S.listItem()
        .title('Zadania PCPR')
        .icon(MdDescription)
        .schemaType('tasksOfPCPR')
        .child(S.documentTypeList('tasksOfPCPR').title('Zadania PCPR')),
      S.listItem()
        .title('Projekty')
        .icon(MdDescription)
        .schemaType('projects')
        .child(S.documentTypeList('projects').title('Projekty')),
      S.listItem()
        .title('Współpraca')
        .icon(MdDescription)
        .schemaType('cooperation')
        .child(S.documentTypeList('cooperation').title('Współpraca')),
      S.listItem()
        .title('Kontakt')
        .icon(MdDescription)
        .schemaType('contact')
        .child(S.documentTypeList('contact').title('Kontakt PCPR')),
      S.listItem()
        .title('Kategorie podstron "Zadania PCPR"')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorie')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['category', 'news', 'tasksOfPCPR', 'aboutPCPR', 'projects', 'cooperation', 'contact', 'siteSettings'].includes(listItem.getId())
      )
    ])
