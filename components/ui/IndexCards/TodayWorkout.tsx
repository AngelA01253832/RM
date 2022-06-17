import { Box, Card, Grid, Typography, Button, ButtonProps } from "@mui/material"
import { green } from "@mui/material/colors";
import { AddWeightCard } from ".";
import { WorkoutCard } from "../../workouts/WorkoutCard";
import { styled } from '@mui/material/styles';


const drawerWidth : number = 240;
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginBottom: 6, 
  marginTop:6, 
  color: '#FFF',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));
export const TodayWorkout = () => {
  return (
      <>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1.5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
            <Typography variant='h5' component='h3'>Rutina del dia</Typography>        
            <Grid container spacing={2} style={{
                marginTop:'1.5vh'
            }}>
                <Grid item xs={6 }>
                    <WorkoutCard/>
                </Grid>

                <Grid item xs={6 }>
                    <Card style={{textAlign:'center', background:'#EAECEE',color:'black'}}>
                        <Typography variant='h6' component='h6'>Añadir peso corporal</Typography>
                        <AddWeightCard/>
                        <ColorButton variant="contained" size="small" color="success">
                             Añadir peso 
                        </ColorButton>
                    </Card>
                </Grid>

                
            </Grid>  
        </Box> 
      </>
)}
