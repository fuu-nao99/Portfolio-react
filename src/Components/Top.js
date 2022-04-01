import React from 'react'
import '../App.css'
import {useWindowDimensions} from './windowSize'
import TopImage from '../Images/top_img.jpg'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailIcon from '@material-ui/icons/Mail'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
    color: {
        color: '#F6F6F6',
        backgroundColor: '#282828',
        "&:hover": { 
            color: '#282828',
            backgroundColor: '#F6F6F6',
    }
  }
}));

const Top = () => {
    const { width, height } = useWindowDimensions();
    const classes = useStyles();

    return (
        <div className="top" id="home">
            <section className="top-container" style={{ width: width, height: height }}> 
                <div className="top-content">
                    <h1 id="last">Fujimura</h1>
                    <h1 id="first">Naoki</h1>
                    <p>Welcome to My Portfolio Site</p>
                    <img src={TopImage} alt="TopImage" />
                </div>

                <div className="side-bar">
                    <div className="fade-in-top">
                        <ul>
                            <li>
                                <Link href='https://mail.google.com/mail/?view=cm&to=1gk8250n@komazawa-u.ac.jp'>
                                    <Avatar className={classes.color}>
                                        <MailIcon />
                                    </Avatar>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.instagram.com/aijuswanafiiling/'>
                                    <Avatar className={classes.color}>
                                        <InstagramIcon />
                                    </Avatar>            
                                </Link>
                            </li>
                            <li>
                                <Link href='https://github.com/fuu-nao99' >
                                    <Avatar className={classes.color}>
                                        <GitHubIcon />
                                    </Avatar>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Top