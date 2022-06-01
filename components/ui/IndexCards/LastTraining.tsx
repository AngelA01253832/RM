import { Box, Card, Grid, Typography,Toolbar } from "@mui/material"

const drawerWidth : number = 240;

export const LastTraining = () => {
  return (
      <>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1.5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
            <Typography variant='h5' component='h3'>Tu ultimo entrenamiento</Typography>        
            <Grid container spacing={2} style={{
                marginTop:'1.5vh'
            }}>
                <Grid item xs={4}>
                    <Card style={{textAlign:'center', background:'#EAECEE',color:'black'}}>
                        <Typography variant='h6' component='h6'>Tiempo</Typography>
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center',background:'#44C13C', width:'50px', height:'50px', borderRadius:'50%',margin:' 0 auto' }}>
                            <div style={{background:'#EAECEE', width:'40px', height:'40px', borderRadius:'50%' }}>

                            </div>
                        </div>
                        <Typography>15 minutos</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{textAlign:'center', background:'#EAECEE',color:'black'}}>
                        <Typography variant='h6' component='h6'>Distancia</Typography>
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center',background:'#4040F2', width:'50px', height:'50px', borderRadius:'50%',margin:' 0 auto' }}>
                            <div style={{background:'#EAECEE', width:'40px', height:'40px', borderRadius:'50%' }}>

                            </div>
                        </div>
                        <Typography>15 minutos</Typography>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{textAlign:'center', background:'#EAECEE',color:'black'}}>
                        <Typography variant='h6' component='h6'>Calorias</Typography>
                        <div style={{display:'flex', justifyContent:'center',alignItems:'center',background:'#FF513A', width:'50px', height:'50px', borderRadius:'50%',margin:' 0 auto' }}>
                            <div style={{background:'#EAECEE', width:'40px', height:'40px', borderRadius:'50%' }}>

                            </div>
                        </div>
                        <Typography>15 minutos</Typography>
                    </Card>
                </Grid>
            </Grid>  
        </Box> 
      </>
)}