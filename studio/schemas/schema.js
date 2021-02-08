// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import category from './documents/category'
import news from './documents/news'
import tasksOfPCPR from './documents/tasksOfPCPR'
import aboutPCPR from './documents/aboutPCPR'
import projects from './documents/projects'
import cooperation from './documents/cooperation'
import contact from './documents/contact'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import fileDocument from './objects/fileDocument'
import dataTable from './objects/dataTable'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'PCPR website',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    news,
    fileDocument,
    dataTable,
    tasksOfPCPR,
    aboutPCPR,
    projects,
    cooperation,
    contact,
    category,
    mainImage,
    bodyPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
