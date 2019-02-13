import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-wrap: ${p => p.wrap ? 'wrap' : 'no-wrap'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'flex-start'};
  align-items: ${p => p.align || 'flex-start'};
  width: ${p => p.width || 'auto'};
`

const Root = styled(Flex)`
  width: 100vw;
  height: 100vh;
`

export default ({ children }) => {
  const xs = React.Children.toArray(children.props.children)
  const half = Math.floor(xs.length / 2)

  return (
    <Root align="center" justify="center" direction="column">
      <Flex width="90%" justify="space-around">
        <div>
          {xs.slice(0, half)}
        </div>
        <div>
          {xs.slice(half)}
        </div>
      </Flex>
    </Root>
  )
}
