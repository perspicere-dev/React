import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore'

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
          }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} 
                      image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.columns}>
                    <Column colTitle_1={this.props.colTitles[0]}/>
                    <Column colTitle_2={this.props.colTitles[1]}/>
                    <Column colTitle_3={this.props.colTitles[2]}/>
                </div>
            </section>
        )
    }
}

export default List;
