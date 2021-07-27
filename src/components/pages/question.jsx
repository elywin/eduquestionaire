import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight : 250,
    marginLeft: 250,
    marginBottom:20,
  },
  postAdd: {
    marginLeft: 'auto',
  },

}));

export default function Question() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Question goes here!"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Description goes here!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="post" 
             className={classes.postAdd}
        >
          <PostAddIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>
  );
}
