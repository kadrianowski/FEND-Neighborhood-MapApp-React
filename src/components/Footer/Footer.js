import React, { Component } from 'react';
import './Footer.css';
import { FaTree } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return <footer aria-label="author credits">Made with <FaTree /> by Kamil Adrianowski </footer>
    }
}

export default Footer;