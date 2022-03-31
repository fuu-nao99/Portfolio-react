import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {useWindowDimensions} from './windowSize'

export default function Skills() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="skills-container" id="skills" style={{ width: width, height: height }} >
      <Box className="skills-contents">
        <h1>Skills</h1>
        <Box className="skills-box" >
          <Card >
            <CardContent>
              <Typography variant="h6">
                言語《実務経験あり》
              </Typography>
              <Typography color="textSecondary">
                HTML / CSS / JavaScript / TypeScript / C# / VB.NET 
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="skills-box">
          <Card >
            <CardContent>
              <Typography variant="h6">
                言語《制作経験あり》
              </Typography>
              <Typography color="textSecondary">
                HTML / CSS / JavaScript / TypeScript
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="skills-box" >
          <Card >
            <CardContent>
              <Typography variant="h6">
                フレームワーク《制作経験あり》
              </Typography>
              <Typography color="textSecondary">
                React / Vue.js / jQuery / Blazor
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className="skills-box">
          <Card >
            <CardContent>
              <Typography variant="h6">
                データベース
              </Typography>
              <Typography color="textSecondary">
                MySQL 
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}