/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 200,
    margin: 20,
    color: '#F27E63'
  },
  media: {
    height: 140,
  },
});

const Tile = ({ id,image,countryName, handleClick, children }) => {
  const classes = useStyles();
  return (  
    <Card className={classes.root} id ={id} onClick ={handleClick}>
    <CardActionArea >
    <CardMedia
      className={classes.media}
      image={image}
      title={countryName}
    />
    <CardContent>
      <Typography className={classes.color} gutterBottom variant="h5" component="h2">
        {children}
      </Typography>
    </CardContent>
  </CardActionArea>
  </Card>
  );
};

Tile.propTypes = {
  id: PropTypes.string,   
  handleClick: PropTypes.func,
  image: PropTypes.string,
  countryName: PropTypes.string,
  children: PropTypes.oneOfType([
   PropTypes.arrayOf(PropTypes.node),
   PropTypes.node
  ]),
};
Tile.defaultProps = {
  id: '12345',
  image:
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1933&q=80',
  countryName: 'Not Provided',
  handleClick: () => window.open("https://www.google.com/"),
  children: null,
};

export default Tile;
