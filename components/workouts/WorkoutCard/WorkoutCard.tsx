import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { Link } from '@mui/material/';

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
          image="https://img.redbull.com/images/c_crop,w_5384,h_2692,x_0,y_383,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/07/06/2dadbf08-6d2f-4d9a-9419-952d9641950c/rowing-collection"
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
        <NextLink href='/workout' passHref>
          <Link>
              <ColorButton variant="contained" size="small" color="success">
                  Ver detalles 
              </ColorButton>
          </Link>
        </NextLink>
      </CardActions>
    </Card>
  );
}

