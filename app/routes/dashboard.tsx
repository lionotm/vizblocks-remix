import * as React from 'react'
import { ActionFunction, LoaderFunction, Outlet } from 'remix'
import { json, useLoaderData } from 'remix'
import { magicLinkStrategy } from '~/utils/auth.server'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'

import CollapsibleMenu from '~/components/CollapsibleMenu'
import { User } from '@supabase/supabase-js'

type LoaderData = { user: User | null }

export const loader: LoaderFunction = async ({ request }) => {
  const session = await magicLinkStrategy.checkSession(request, {
    failureRedirect: '/login',
  })

  return json<LoaderData>({ user: session.user })
}

const drawerWidth = 240

export default function Dashboard() {
  const { user } = useLoaderData<LoaderData>()

  console.log(user)

  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop: '1rem',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <CollapsibleMenu />
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 3, bgcolor: 'rgba(108, 221, 170, 0.2)', height: '100vh' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  )
}
