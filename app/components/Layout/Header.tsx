import * as React from 'react'

import { Link } from 'remix'
import { useTheme } from '~/utils/theme'
import { VizBlocks } from '../svg/VizBlocks'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ModeNightIcon from '@mui/icons-material/ModeNight'

const settings = [
  { name: 'Profile', to: '/profile' },
  { name: 'Account', to: '/account' },
  { name: 'Logout', to: '/' },
]

const drawerZIndex = 1200

function ElevationScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 2,
  })
}

export default function Header({ pathname }: { pathname?: string }) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const { mode, toggleColorMode } = useTheme()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          position='fixed'
          sx={{ px: '0.25rem', zIndex: theme => theme.zIndex.drawer + 1, bgcolor: `${mode === 'light' ? 'white' : 'black'}` }}
        >
          <Container maxWidth={false}>
            <Toolbar disableGutters sx={{ py: '0.25rem' }}>
              <Button color='inherit' component={Link} to='/' prefetch='intent' sx={{ backgroundColor: 'transparent !important' }}>
                <VizBlocks />
              </Button>

              <Box sx={{ flexGrow: 1 }} />

              <IconButton sx={{ mx: 1 }} onClick={toggleColorMode} color='inherit'>
                {mode === 'dark' ? <ModeNightIcon /> : <WbSunnyIcon />}
              </IconButton>

              <Box sx={{ flexGrow: 0 }}>
                {pathname?.includes('dashboard') && (
                  <Tooltip title='Open settings'>
                    <Box display='flex' alignItems='center'>
                      <Typography variant='h6' sx={{ mx: 1 }}>
                        Remy
                      </Typography>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt='Remy Sharp' sx={{ bgcolor: '#6cddaa' }} />
                      </IconButton>
                    </Box>
                  </Tooltip>
                )}
                {pathname === '/' && (
                  <Button color='inherit' size='large' component={Link} to='/login' prefetch='intent'>
                    <Typography variant='h6' component='div' fontWeight='bold'>
                      Login
                    </Typography>
                  </Button>
                )}

                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(setting => {
                    const { name, to } = setting
                    return (
                      <MenuItem key={name} onClick={handleCloseUserMenu} sx={{ mx: 1 }}>
                        <Typography textAlign='center'>{name}</Typography>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  )
}
