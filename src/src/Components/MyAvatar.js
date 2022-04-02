import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

// 画像ファイルをインポート
import ImageFile from '../Images/my_avatar.jpg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const MyAvatar = () =>{
  const classes = useStyles();

  return (
    <>
      <Box p={2} className="profile-Box">
        <Box display='flex' justifyContent='center'  p={1} >
          <Avatar
            alt='Naoki Fujimura'
            src={ImageFile}
            className={classes.large}
          />
        </Box>
      </Box>
    </>
  );
}

export default MyAvatar;