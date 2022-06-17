import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import {useSession,signIn,signOut, getSession} from "next-auth/react";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

type Role = 'Atleta' | 'Deportista' | 'Entrenador';

interface Props {
  userName: string,
  profileImg: string,
  userRole: Role
}
export const ProfileSection: React.FC<Props> = ({userName, profileImg, userRole}) => {

  return (
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <Box>
          <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
          >
              <Avatar alt={userName} src={profileImg} />
          </StyledBadge>
        </Box>
        <Box>
          <Typography variant="h5" component='h1'> {userName} </Typography> 
          <Typography variant="subtitle1" component='h1'> {userRole} </Typography>
        </Box>

       
      </div>
  );
}
export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx)
  return {
      props: {
          session:session
      }
  }
}