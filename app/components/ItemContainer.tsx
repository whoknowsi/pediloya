interface Props {
  children: JSX.Element,
  pointer?: boolean,
  hover?: boolean,
  flex?: boolean,
  extraClass?: string
}

const ItemContainer = ({ children, pointer = false, hover = false, flex = false, extraClass }: Props) => {
  return (
    <article className={
      "bg-white rounded-lg p-3" +
      (pointer ? ' cursor-pointer' : '') +
      (hover ? ' hover:scale-105 transition-transform duration-150' : '') +
      (flex ? ' flex-1' : '') +
      (extraClass ? ` ${extraClass}` : '')
    }
    >{children}</article>
  )
}

export default ItemContainer