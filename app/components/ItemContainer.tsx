interface Props {
  children: JSX.Element,
  pointer?: boolean,
  hover?: boolean,
  flex?: boolean,
  extraClass?: string,
  href?: string,
}

const ItemContainer = ({ children, pointer = false, hover = false, flex = false, extraClass, href }: Props) => {
  return href ? (
    <article className={
      "bg-white rounded-lg p-3 h-fit" +
      (pointer ? ' cursor-pointer' : '') +
      (hover ? ' hover:scale-105 transition-transform duration-150' : '') +
      (flex ? ' flex-1' : '') +
      (extraClass ? ` ${extraClass}` : '')
    }>
      <a href={href} className='p-0 m-0'>
        {children}
      </a>
    </article>
  ) : (
    <article className={
      "bg-white rounded-lg p-3 h-fit" +
      (pointer ? ' cursor-pointer' : '') +
      (hover ? ' hover:scale-105 transition-transform duration-150' : '') +
      (flex ? ' flex-1' : '') +
      (extraClass ? ` ${extraClass}` : '')
    }
    >
      {children}
    </article>
  )
}

export default ItemContainer