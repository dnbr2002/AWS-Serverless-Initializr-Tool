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
  Radio,
  Box
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import logo from './images/logo192.png';

const Home = () => {
  const [functionName, setFunctionName] = React.useState('');
  const [language, setLanguage] = React.useState('Python');
  const [templateType, setTemplateType] = React.useState('Lambda');
  const [formData, setFormData] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      functionName,
      language,
      templateType
    };

    setFormData(data);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Generate SSLS Configuration Files
      </Typography>
      <form onSubmit={handleSubmit}>
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
                <MenuItem value="Lambda">Lambda</MenuItem>
                <MenuItem value="Lambda+SQS">Lambda+SQS</MenuItem>
                <MenuItem value="Lambda+APIGateway">Lambda+APIGateway</MenuItem>
              </TextField>
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
                Generate
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>
      {formData && (
        <Paper style={{ marginTop: 16, padding: 16 }}>
          <Typography variant="h6">Form Data JSON:</Typography>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Paper>
      )}
    </Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: 40,
              marginRight: 2,
            }}
          />
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
