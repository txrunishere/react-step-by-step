/*
  If we have some type of style which we used in several components then we use external style file, But if have style which used in a specific component we use module style file
*/

const ExternalStyle = () => {
  return (
    <div
      className='container'
    >
      External Style
    </div>
  )
}

export default ExternalStyle