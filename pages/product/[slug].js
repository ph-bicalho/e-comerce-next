
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout';
import data from "../../utils/data"
import NextLink from "next/link"
import  {Link, Grid, Typography, List, ListItem, Card, Button } from "@material-ui/core"
import useStyles from '../../utils/styles';
import Image from 'next/image';


export default function productScreen() { 
  const classes= useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find(a => a.slug === slug);
  if (!product) {
  return <div> Product Not Found</div>;
}
    return (
    <Layout title={product.name}>
        <div className={classes.section}> 
        <NextLink href="/" passHref>
          <Link> <Typography>Back to products</Typography></Link>
        </NextLink> 
       <Grid container spacing={1}>
            <Grid item md={5} xs={12} spacing={1}>
            <Image src={product.image} alt={product.name} width={300} height={300} layout="responsive"></Image>
            </Grid>
            
            <Grid item md={3} xs={12} >
            <Typography component="h1" variant='h1' >{product.name}</Typography>
                <List>
                    <ListItem> <Typography> Category: {product.category} </Typography></ListItem>    
                    <ListItem> <Typography> Brand: {product.brand} </Typography></ListItem>
                    <ListItem> <Typography> Rating: {product.rating} stars ({product.numReviews} reviews) </Typography></ListItem>           
                    <ListItem> <Typography> Description: {product.description} </Typography></ListItem>        
                </List>   
                
              </Grid>
              <Grid item md={3} xs={12}>
                <Card>
                  <List>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                        <Typography>Price</Typography>  
                        </Grid>
                        <Grid item xs={6}>
                        <Typography>${product.price}</Typography>  
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={6}>
                        <Typography>Status</Typography>  
                        </Grid>
                        <Grid item xs={6}>
                        <Typography>{product.countInStock > 0 ? "In stock": "Unavailable"}</Typography>  
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Button fullWidth variant='contained' color='primary'> Add to cart </Button>
                    </ListItem>
                  </List>
                </Card>

            </Grid>

        </Grid>
       
       </div>
    </Layout>
  )
}