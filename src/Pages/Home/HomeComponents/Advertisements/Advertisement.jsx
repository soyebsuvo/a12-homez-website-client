import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Advertisement({item}) {
  return (
    <Card className='relative'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item?.image}
      ></CardMedia>
      <h3 className='absolute top-32 px-2 rounded-md font-bold left-2 bg-white'>${item?.price?.min} - ${item?.price?.max}</h3>
      <h3 className='absolute top-2 px-2 rounded-md font-bold left-2 bg-[#EB6753] text-white'>{item?.verification_status}</h3>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item?.title}
        </Typography>
        <Typography sx={{marginBottom : "9px"}} variant="body2" color="text.secondary">
          {item?.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Agent - {item?.agent_name}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-end'>
        <Link to={`/advertise/details/${item?._id}`}><Button sx={{color : '#EB6753'}} size="small">Details</Button></Link>
      </CardActions>
    </Card>
  );
}

Advertisement.propTypes = {
    item : PropTypes.object.isRequired
}