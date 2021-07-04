import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        colTitles: PropTypes.arrayOf(PropTypes.string),
    }


    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.colTitle_1}</h3>
                <h3 className={styles.title}>{this.props.colTitle_2}</h3>
                <h3 className={styles.title}>{this.props.colTitle_3}</h3>
            </section>

        )
    }
}

export default Column;
