import styled from 'styled-components'

// styled-components is a package


// in this approach we write css like normal css
const Heading = styled.h2`
  color: red;
  width: 200px;
  border: 1px solid white;
`


// in this approach we write css like in JSX in object
const Paragraph = styled.h2({
  color: 'blue',
  width: "200px",
  border: "2px solid white",
  padding: 10,
  borderRadius: 10,
  margin: 10
})

const StyledComponents = () => {
  return (
    <>
    <div>Styled Components</div>
    <Heading>Hello World</Heading>
    <Paragraph>Lorem ipsum dolor sit consectetur ?</Paragraph>
    </>
  )
}

export default StyledComponents