import './style.css'

export default function HeadTextDescription( { desc, color } ) {
  return (
    <p className={`text-secondary fs-4 fw-light desc ${color}`}> { desc } </p>
  )
}
