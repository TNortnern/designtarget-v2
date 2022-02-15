import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface ImageFormat {
  ext: string
  name: string
  url: string
  size: number
  width: number
  height: number
}
export interface ImageFormats {
  xsmall: ImageFormat
  small: ImageFormat
  medium: ImageFormat
  thumbnail: ImageFormat
  large: ImageFormat
}
interface MediaAttributes {
  url: string
  name: string
  caption: string
  ext: string
  mime: string
  alternativeText: string
  formats: ImageFormats
  size: number
  width: number
  provider: string
  createdAt: string
  updatedAt: string
}
interface MediaData {
  id: string
  attributes: MediaAttributes
}
export interface Media {
  data: MediaData
}
