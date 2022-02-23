import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import "./styles.css"
export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <>
<div className='producto'>
 

      <Card sx={{ }}>
        <CardActionArea>
          <Link to={`/producto/${product.id}`}>
            <CardMedia
              component="img"
              height="360"
              image={product.img}
              alt="green iguana"
            />
          </Link>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button
            type="button"
            onClick={() => onAdd(product)}
          >
            Agregar +
          </button>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      {/* <div>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div> */}
      </div>
    </>
  );
}
