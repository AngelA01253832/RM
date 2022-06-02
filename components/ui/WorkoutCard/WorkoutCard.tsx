import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFF',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));

export const WorkoutCard = () => {
  return (
    <Card sx={{ maxWidth: 245, maxHeight: 245, background:'#EAECEE',color:'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Objetivo: 
          </Typography>
          <Typography variant="body2" color="black">
            Remar por 15 minutos a una intensidad moderada
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <ColorButton variant="contained" size="small" color="success">
                Ver detalles 
            </ColorButton>
      </CardActions>
    </Card>
  );
}
