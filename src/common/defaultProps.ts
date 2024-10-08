import type {
  CommonComponentProps,
  ImageComponentProps,
  ShapeComponentProps,
  TextComponentProps
} from '../types/props'
import { mapValues, without } from 'lodash-es'

export interface ComponentData {
  props: Record<string, any>
  id: string
  name: string
  layerName?: string
  isHidden?: boolean
  isLocked?: boolean
}

export interface PageData {
  props: Record<string, any>
  setting: Record<string, any>
  id?: number
  title?: string
  desc?: string
  coverImg?: string
  uuid?: string
  latestPublishAt?: string
  updatedAt?: string
  isTemplate?: boolean
  isHot?: boolean
  isNew?: boolean
  author?: string
  status?: string
}

export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
  tag: 'div'
}

/**文本默认属性 */
export const textDefaultProps: TextComponentProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

export const imageDefaultProps: ImageComponentProps = {
  src: 'test.url',
  ...commonDefaultProps
}

export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
}

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

export const imageStylePropsNames = without(
  Object.keys(imageDefaultProps),
  'actionType',
  'url',
  'src'
)

export const shapeStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url')

export const transformToComponentProps = (props: TextComponentProps & ImageComponentProps) => {
  const mapProps = mapValues(props, (item) => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item
    }
  })
  return { ...mapProps }
}
