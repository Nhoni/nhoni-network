import './Button.css'

function Button({ children, variant = 'primary', onClick, href }) {
  const className = `button button-${variant}`
  
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button