import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function PropertyCard({item}) {
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
            <span className='flex justify-start items-center gap-2'>
                <img className='w-10 h-10 rounded-full border' src={item?.agent_image} alt="N/A" />
                <span className='flex flex-col'>
                    <span>Agent</span>
                    <span>{item?.agent_name}</span>
                </span>
            </span>
          {/* Agent - {item?.agent_name} */}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-end'>
        <Link to={`/propertyDetails/${item?._id}`}><Button sx={{color : '#EB6753'}} size="small">Details</Button></Link>
      </CardActions>
    </Card>
  );
}

PropertyCard.propTypes = {
    item : PropTypes.object.isRequired
}