import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from 'react-redux'
import {addBasket} from '../actions/addActionns'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props)
  return (
      <div>
    <div class="card-group">
    <div class="card">
      <img src="https://ae01.alicdn.com/kf/HTB1oLwhb5FTMKJjSZFAq6AkJpXam/Plaid-Shirt-Men-Long-Sleeve-Slim-Fit-White-M-5XL-100-Cotton-Dress-Shirts-Male-Clothes.jpg" class="card-img-top" alt="..." height="400px"/>
      <div class="card-body">
        <h5 class="card-title">Shirt</h5>
        <p class="card-text">$80</p>
        <p class="card-text"><small class="text-muted"> <button onClick={() => props.addBasket('skyblueshirt')}  type="button" class="btn btn-warning">Add To Cart</button></small></p>
           </div>
    </div>
    <div class="card">
      <img src="https://ae01.alicdn.com/kf/H3d6f2b005f974a74a3e59f7f3f7eaca9Q/2021-Brand-Casual-Spring-Luxury-Plaid-Long-Sleeve-Slim-Fit-Men-Shirt-Streetwear-Social-Dress-Shirts.jpg_Q90.jpg_.webp" height="400px" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Shirt</h5>
        <p class="card-text">$150</p>
        <p class="card-text"><small class="text-muted"> <button onClick={() => props.addBasket('greyshirt')} type="button" class="btn btn-warning">Add To Cart</button></small></p>
      </div>
    </div>
    <div class="card">
      <img src="https://ae01.alicdn.com/kf/HLB1nxKkLrvpK1RjSZFqq6AXUVXai/2020-Plus-Size-5XL-Mens-Formal-Dress-Shirt-Slim-Fit-Business-Shirt-For-Man-Brand-Clothing.jpg_Q90.jpg_.webp" height="400px" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Shirt</h5>
        <p class="card-text">$90.</p>
        <p class="card-text"><small class="text-muted"> <button onClick={() => props.addBasket('darkblueshirt')}  type="button" class="btn btn-warning">Add To Cart</button></small></p>
      </div>
    </div>
  </div>
  </div>
  );
}
export default connect(null,{addBasket})(RecipeReviewCard);