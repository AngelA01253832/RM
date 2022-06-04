import { Box, Card, Grid, Typography,Toolbar } from "@mui/material"
import WeightProgressChart from "./WeightProgressChart";

const drawerWidth : number = 240;
const weight: number[] = [76,78,75,78,74,78,78];
const dates: number[] = [1,2,3,4,5,6,7];


export const WeightProgress = () => {
  return (
      <>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1.5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
            <Typography variant='h5' component='h3'>Mi peso los ultimos 7 dias</Typography>        
            <Grid container spacing={2} style={{
                marginTop:'1.5vh'
            }}>
                <Grid item xs={12 }>
                    <Card style={{textAlign:'center', background:'#EAECEE',color:'black'}}>
                        <WeightProgressChart/>
                    </Card>
                </Grid>                
            </Grid>  
        </Box> 
      </>
)}
