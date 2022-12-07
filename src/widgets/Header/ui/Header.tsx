import { memo } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

export const Header = memo(() => (
    <AppBar>
        <Toolbar>
            <Container>
                <Typography variant="h5">
                    <Link to="/">Main</Link>
                </Typography>
            </Container>
        </Toolbar>
    </AppBar>
));
