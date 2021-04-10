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

import GridList from '@material-ui/core/GridList';


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
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width:'auto' ,
    height:'550px',
    margin:'10px',
  },

}));

export default function ShopDetails() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div>

          <GridList className={classes.gridList} cols={2.5}>
            <Card style={{height:'425px', margin:"10px"}}>
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="W for Women"
                    
                />
                <CardMedia
                    className={classes.media}
                    image="https://www.ecommercenext.org/wp-content/uploads/2020/10/hm-clothes-store-today-180614-tease_caeb7ebd0c281285eafa292d621e41ee-1536x864.jpg"
                    
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Address: G 51, Crystal Courtyard, Chandrasekharpur, Patia, Bhubaneswar, Bhubaneshwar - 751024, Near IOCL Office (Map)
                    Phone: 09471238698
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    //onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                </Card>
                    
            
            <Card style={{height:'425px', margin:"10px"}}>

          

            <CardHeader
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }

                title="Planet Fashion"

                
            />
            <CardMedia
                className={classes.media}

                image="https://cdn.cheapism.com/images/Landsend.max-784x410.jpg"
                
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Address: G.1/p 51, Fortune Towers, Patia,Bhubaneshwar - 751024, Near IOCL Office (Map)
                Phone: 09471238698
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                //onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>

        </Card>
        <Card style={{height:'425px', margin:"10px"}}>
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Fashion Era Boutique"
                />
                <CardMedia
                    className={classes.media}
                    image="https://www.womansworld.com/wp-content/uploads/2020/10/womens-clothing-store.jpg"
                    
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Address: Central, Patia,Bhubaneshwar - 751024, Near IOCL Office (Map)
                    Phone: 09471238698
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    //onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

            </Card>
          </GridList>
      </div>
    
  );
}