import { DetailsCard } from ".";
import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const date = Date.now();
const toDay = new Date(date)

export const WorkoutDescription = () => {
  return (
    <Grid container spacing={1} style={{
        marginTop:'1.5vh'
    }}>
        <Grid item xs={12}>
            <Card>
                <CardMedia
                    component="img"
                    height="380"
                    image="https://patrimoniomoderno.mx/wp-content/uploads/2020/01/88.-Gimnasio-Tec-The-Raws3.jpg"
                    alt="gym tec"
                />
            </Card>
        </Grid>

        <Typography mt={4} variant="h5">Detalles</Typography>

        <Grid item xs={12}>
            <DetailsCard text={`Tiempo: ${'20 minutos'}`} icon={<AccessTimeIcon/>}/>
        </Grid>

        <Grid item xs={12}>
            <DetailsCard text={`Fecha: ${toDay.toLocaleDateString()}`} icon={<CalendarMonthOutlinedIcon/>}/>
        </Grid>

        <Grid item xs={12}>
            <DetailsCard text={`Entrenador: ${'Hector Bonillas'}`} icon={<AssignmentIndOutlinedIcon/>}/>
        </Grid>

        <Typography mt={4} variant="h5">Indicaciones</Typography>

        <Grid item xs={12}>
            <Card sx={{backgroundColor:'#FFF',}}>
                <CardContent>
                    <Typography variant="subtitle1" color="black">
                    Terminando la rutina de pesas, calentar 2 minutos en la remadora a una intensidad ligera, posteriormente, los siguientes 17 minutos de entrenamiento se debe mantener una intensidad moderada, finalmente, el ultimo minuto de entrenamiento se debe realizar a la máxima intensidad posible.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}
