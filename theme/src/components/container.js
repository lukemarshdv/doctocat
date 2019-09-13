import {Box} from '@primer/components'
import React from 'react'

function Container({as, children}) {
  return (
    <Box width="100%" maxWidth={960} p={5} mx="auto" as={as}>
      {children}
    </Box>
  )
}

export default Container
