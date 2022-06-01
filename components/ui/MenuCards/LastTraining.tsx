import { Card, Grid, Typography } from "@mui/material"

export const LastTraining = () => {
  return (
      <>
        <Typography variant='h4' component='h3'>Tu ultimo entrenamiento</Typography>        
          <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <Typography variant='h6' component='h6'>Tiempo:</Typography>
                    <Typography>15 minutos</Typography>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Typography variant='h6' component='h6'>Distancia:</Typography>
                    <Typography>2.3 km</Typography>

                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Typography variant='h6' component='h6'>Calorias:</Typography>
                    <Typography>159 kcal</Typography>

                </Card>
            </Grid>
          </Grid>  
      </>
)}
