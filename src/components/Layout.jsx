import React from "react"
import { Box, Flex, Grid } from "@chakra-ui/layout"
import { forwardRef } from "@chakra-ui/system"
import { domAnimation } from "framer-motion"
import { transition } from "../data/theme"
import { ToastContext } from "../data/providers"

export const Hr = forwardRef((props, ref) => {
  return (
    <Box
      as="hr"
      my={3}
      transition={transition}
      background="borderSubtle"
      border="none"
      height="1px"
      {...props}
      ref={ref}
    />
  )
})

export const layoutContentPadding = [6, 8]

export const LayoutContent = forwardRef((props, ref) => {
  return (
    <Box width="100%" overflow="hidden">
      <Grid
        as="main"
        color="text.100"
        fontWeight="normal"
        gap={12}
        p={layoutContentPadding}
        ref={ref}
        {...props}
      >
        {props.children}
      </Grid>
    </Box>
  )
})

export function Layout({
  children,
  header,
  imageTop,
  imageBottom,
  article,
  ...rest
}) {
  const [toastJsx, setToastJsx] = React.useState(null)

  return (
    <Flex flexFlow="column nowrap">
      <ToastContext.Provider value={{ jsx: toastJsx, setJsx: setToastJsx }}>
        <Box {...rest}>{children}</Box>
      </ToastContext.Provider>
    </Flex>
  )
}
