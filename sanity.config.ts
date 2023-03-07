import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


const projectId = process.env.NEXT_PUBLIC_SANITY_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET!;

export default defineConfig({
  basePath:'/studio',
  name: 'Sathwic_Portfolio_Studio',

  title: 'Sathwic portfolio Studio',

  projectId: 'v5jmg2zj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
