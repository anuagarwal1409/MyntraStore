import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '30px',

  },
  media: {
    height: 0,
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

export default function Reviews() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(4);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
    
  return (

    <List className={classes.root}>
    <ListItem>
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Neha Nayak"
        subheader="September 14, 2016"
      />
      
      <CardContent>
      
      <Rating name="read-only" value={value} readOnly />
      
        <Typography variant="body2" color="textSecondary" component="p">
          Good Ambience with a very friendly staff
        </Typography>
      
        </CardContent>
    </Card>
    </ListItem>
    <ListItem>
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Neha Nayak"
        subheader="September 14, 2016"
      />
      
      <CardContent>
      
      <Rating name="read-only" value={value} readOnly />
      
        <Typography variant="body2" color="textSecondary" component="p">
          Good Ambience with a very friendly staff
        </Typography>
      
        </CardContent>
    </Card>
    </ListItem>
    <ListItem>
    <Card>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Neha Nayak"
        subheader="September 14, 2016"
      />
      
      <CardContent>
      
      <Rating name="read-only" value={value} readOnly />
      
        <Typography variant="body2" color="textSecondary" component="p">
          Good Ambience with a very friendly staff
        </Typography>
      
        </CardContent>
    </Card>

    </ListItem>
    </List>

  );
}