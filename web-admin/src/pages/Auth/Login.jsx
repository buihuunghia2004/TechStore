import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Link from '@mui/material/Link'
import Input from '@mui/material/Input'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useAuth } from '~/hooks/useAuth'
import { useNavigate } from 'react-router-dom'


export default function SignInSide() {
  const { handleLogin } = useAuth()
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      await handleLogin(credentials);
      navigate('/home')
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ width: { xs: '100%', md: '50vw' }, display: 'flex', justifyContent: 'flex-end', backdropFilter: 'blur(12px)',}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', px: 2,}}>
          <Box component='main'
            sx={{ my: 'auto',py: 2,pb: 5,display: 'flex',gap: 2,
              flexDirection: 'column',
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 1,
              '& form': { display: 'flex', flexDirection: 'column', gap: 2 },
            }}
          >
            <Stack sx={{ gap: 4, mb: 2 }}>
              <Stack sx={{ gap: 1 }}>
                <Typography component='h1' variant='h4'>Sign in</Typography>
                <Typography variant='body2'>New to company?{' '}
                  <Link href='#replace-with-a-link' variant='body2'>Sign up!</Link>
                </Typography>
              </Stack>
            </Stack>
            <Divider>or</Divider>
            <Stack sx={{ gap: 4, mt: 2 }}>
              <form
                onSubmit={(event) => {event.preventDefault()
                  const formElements = event.currentTarget.elements;
                  const credentials = {login: formElements.email.value,
                    password: formElements.password.value,
                    persistent: formElements.persistent.checked,
                  }
                  login(credentials)
                }}
              >
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' name='email' fullWidth />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' name='password' fullWidth />
                </FormControl>
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <Box sx={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center',}}>
                    <Checkbox size='small' label='Remember me' name='persistent'/>
                    <Link href='#replace-with-a-link' variant='body2'>Forgot your password?</Link>
                  </Box>
                  <Button type='submit' fullWidth variant='contained'>Sign in</Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component='footer' sx={{ py: 3 }}>
            <Typography variant='caption' align='center'>
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
}
