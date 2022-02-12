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
  small: ImageFormat
  medium: ImageFormat
  thumbnail: ImageFormat
  large: ImageFormat
}
export interface Media {
  id: string
  url: string
  formats: ImageFormats
}
