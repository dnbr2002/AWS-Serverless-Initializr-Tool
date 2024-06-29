// client/src/App.js
import React from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const Home = () => {
  const [functionName, setFunctionName] = React.useState('');
  const [language, setLanguage] = React.useState('Python');
  const [templateType, setTemplateType] = React.useState('Lambda');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Generate SSLS Configuration Files
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>
            <TextField
              label="Function Name"
              fullWidth
              value={functionName}
              onChange={(e) => setFunctionName(e.target.value)}
              style={{ marginBottom: 16 }}
            />
            <FormControl component="fieldset" style={{ marginBottom: 16 }}>
              <FormLabel component="legend">Language</FormLabel>
              <RadioGroup
                aria-label="language"
                name="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                row
              >
                <FormControlLabel value="python" control={<Radio />} label="Python" />
                <FormControlLabel value="node.js" control={<Radio />} label="Node.js" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Template Type"
              select
              fullWidth
              value={templateType}
              onChange={(e) => setTemplateType(e.target.value)}
              style={{ marginTop: 16 }}
            >
              <MenuItem value="2.5.4">Lambda</MenuItem>
              <MenuItem value="2.4.5">Lambda+SQS</MenuItem>
              <MenuItem value="2.3.10">Lambda+APIGateway</MenuItem>
            </TextField>
            <Button variant="contained" color="primary" style={{ marginTop: 16 }}>
              Generate
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            SSLS Initializr Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ marginTop: 80, padding: 24 }}>
        <Home />
      </main>
    </ThemeProvider>
  );
};

export default App;
