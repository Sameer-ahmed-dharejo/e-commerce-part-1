import { Box, Button, Card, Rating, Typography } from '@mui/material'
// import { Card, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import ImageProdect1 from '../assets/kiwi1.jpg';
import ImageProdect2 from '../assets/peach-fruit.jpg';
import ImageProdect3 from '../assets/pomegranate.jpg';

const prodectsDeta = [
    { id: 1, image: ImageProdect1, name: "Kiwi Juice", rating: 3, price: "3.50" },
    { id: 2, image: ImageProdect2, name: "Peach Fruit", rating: 4, price: "5.00" },
    { id: 3, image: ImageProdect3, name: "Pomegranate", rating: 5, price: "10.00" },
  ];

const ProdectsCard = () => {
  return (
    <Box className="text-center d-flex justify-content-center gap-3 flex-wrap">
    {prodectsDeta.map((product) => (
      <Card key={product.id} className="text-center p-3" >
        <img src={product.image} alt={product.name} />
        <Typography variant="h5" className="mt-2">{product.name}</Typography>
        <Rating name="read-only" value={product.rating} readOnly />
        <Typography variant="h6">${product.price}</Typography>
        <Button className="my-3" variant="contained">
          <AddIcon /> Add
        </Button>
      </Card>
    ))}
  </Box>
  )
}

export default ProdectsCard;
