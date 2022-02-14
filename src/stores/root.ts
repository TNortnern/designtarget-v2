import { defineStore } from 'pinia'
import api from '~/api'
import type { Media } from '~/types'
interface Resource {
  title: string
  description: string
  cover: Media
  url: string
  createdAt: string
  updatedAt: string
}
interface StrapiEntity {
  id: string
  attributes: any
}
interface Category {
  id: string
  title: string
  description: string
  resources: Resource[]
  createdAt: string
  updatedAt: string
}
interface RootState {
  appLoading: boolean
  categories: Category[]
}

export const useRootStore = defineStore({
  id: 'root',
  state: (): RootState => ({
    appLoading: false,
    categories: [],
  }),
  getters: {
    dataLoaded(): boolean {
      return !!this.categories.length
    },
  },
  actions: {
    async initialize() {
      // override strapi structure
      const cleanEntities = (entities: StrapiEntity[]) => entities.map(({ id, attributes }) => ({ id, ...attributes }))
      try {
        const { data: { data } } = await api.get('/categories?populate[resources][populate][0]=cover')
        const cleanData = cleanEntities(data).map((d: any) => ({
          id: d.id,
          ...d,
          resources: cleanEntities(d.resources.data),
        }))
        this.categories = cleanData
      }
      catch (error) {
        console.log('error', error)
      }
    },
  },
})
