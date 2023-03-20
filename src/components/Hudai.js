import React from 'react';
import { Button } from 'react-bootstrap';

const Hudai = ({children}) => {
    return (
        <Button variant="primary" className='w-100' type="submit">
            {children}
        </Button>
    );
};

export default Hudai;     