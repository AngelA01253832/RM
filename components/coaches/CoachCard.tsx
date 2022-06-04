import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"

export const CoachCard = () => {
  return (
    <Card sx={{ display: 'flex', color:'black', background:'#EAECEE' }}>
        <Box sx={{textAlign:'center', marginTop:2}}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 125, height: 125, margin:'auto' }}
                />
                <Typography>Hector bonillas</Typography>
                <Typography>Horario: 7:00 - 12:30</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                    <Typography variant="subtitle1" color="black" component="div">
                    Atletas | Rutinas
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" color="black" component="div">
                    10 | 05
                    </Typography>
                </Box>
            </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                Conoce mas sobre mi
                </Typography>
                <Typography variant="subtitle1" color="black" component="div">
                    Descripcion
                </Typography>
            </CardContent>
        </Box>
    
  </Card>
  )
}
