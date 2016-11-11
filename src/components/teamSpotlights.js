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
  }
};

const tilesData = [
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfHAAAAJGUwYWVmOTI5LWQyZGItNGY4OC05MmFmLWM1YzdmNDRjOGNjYw.jpg',
        title: 'Michele Anjos',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/015/1ab/30ac588.jpg',
        title: 'Lei Zhu',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/034/10c/340ebe1.jpg',
        title: 'Norman Chou',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/046/30d/262f479.jpg',
        title: 'Himanshu Yadav',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/09f/133/032a32d.jpg',
        title: 'Augustin Calderon',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAIaAAAAJDY5MTY2NjM1LWYwNjYtNGVjZS05ZDg4LWRiYmU1MzAzNjgzYw.jpg',
        title: 'Cindy Ng',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAORAAAAJDVhYTY3YzFmLTE4ZWItNGEzNC1hMjVjLWU5M2RlNGNmYWJjOQ.jpg',
        title: 'Vyacheslav Alayev',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0a0/2b4/0a7813d.jpg',
        title: 'Grace Yang',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/0a2/389/1dea92f.jpg',
        title: 'Bronislava Goldenberg',
        author: 'Lorem ipsum dolor sit amet'
    },
    {
        img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANAAAAAJDYzMTYxZjQyLTIwMjUtNDNkZS1iMTVlLWNlZGNmMjIxM2I0MA.jpg',
        title: 'Rahul Lodha',
        author: 'Lorem ipsum dolor sit amet'
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
                    cellHeight={409}
                    cols={3}
                    style={styles.gridList}
                >
                    {tilesData.map((tile, index) => (
                        <Card key={index}>
                            <CardMedia>
                                <img src={tile.img} />
                            </CardMedia>
                            <CardTitle title={tile.title} subtitle={tile.author} />
                            <CardActions>
                                <FlatButton
                                    className="button-icon-social"
                                    icon={<i className="icon icon-social ion-social-linkedin-outline"></i>} />
                                <FlatButton
                                    className="button-icon-social"
                                    icon={<i className="icon icon-social ion-social-github-outline"></i>} />
                                <FlatButton
                                    className="button-icon-social"
                                    icon={<i className="icon icon-social ion-ios-arrow-down"></i>} />
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
