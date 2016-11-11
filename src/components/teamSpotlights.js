import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './scss/teamSpotlights.scss';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 850
  },
};

const tilesData = [
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfHAAAAJGUwYWVmOTI5LWQyZGItNGY4OC05MmFmLWM1YzdmNDRjOGNjYw.jpg',
        title: 'Michele Anjos',
        author: 'pashminu',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/015/1ab/30ac588.jpg',
        title: 'Lei Zhu',
        author: 'jill111',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/034/10c/340ebe1.jpg',
        title: 'Norman Chou',
        author: 'Danson67',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/046/30d/262f479.jpg',
        title: 'Himanshu Yadav',
        author: 'fancycrave1',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/09f/133/032a32d.jpg',
        title: 'Augustin Calderon',
        author: 'Hans',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAIaAAAAJDY5MTY2NjM1LWYwNjYtNGVjZS05ZDg4LWRiYmU1MzAzNjgzYw.jpg',
        title: 'Cindy Ng',
        author: 'fancycravel',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAORAAAAJDVhYTY3YzFmLTE4ZWItNGEzNC1hMjVjLWU5M2RlNGNmYWJjOQ.jpg',
        title: 'Vyacheslav Alayev',
        author: 'jill111',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0a0/2b4/0a7813d.jpg',
        title: 'Grace Yang',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/015/1ab/30ac588.jpg',
        title: 'Lei Zhu',
        author: 'jill111',
    }
];

class TeamSpotlights extends Component {
    constructor() {
        super();
    }

    renderAppBar() {
        return (
            <AppBar
                title="Team Spotlights"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }

    renderDockedDrawer() {
        return (
            <Drawer width={250}>
                <AppBar title="Team Spotlights" className="main-title" />
                <MenuItem>Incredibles</MenuItem>
                <MenuItem>Avengers</MenuItem>
            </Drawer>
        );
    }

    renderTeamSpotlightsGrid() {
        return (
            <div style={styles.root}>
                <div className="grid-title">We are Incredibles <i className="icon ion-ios-flame"></i></div>
                <GridList
                    padding={10}
                    cellHeight={505}
                    cols={3}
                    style={styles.gridList}
                >
                    {tilesData.map((tile, index) => (
                        <Card key={index}>
                            <CardMedia>
                                <img src={tile.img} />
                            </CardMedia>
                            <CardTitle title={tile.title} subtitle={tile.author} />
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            </CardText>
                            <CardActions>
                              <FlatButton label="Action1" />
                              <FlatButton label="Action2" />
                            </CardActions>
                        </Card>
                    ))}
                </GridList>
            </div>
        );
    }

	render() {
		return (
			<div className="team-spotlights">
                { this.renderDockedDrawer() }
                { this.renderTeamSpotlightsGrid() }
			</div>
		);
	}
};

export default TeamSpotlights;
