import React from 'react';

class UnitDuration extends React.Component {
    constructor(props) {
        super(props);

        this.decrementDuration = this.decrementDuration.bind(this);
        this.incrementDuration = this.incrementDuration.bind(this);
    }

    decrementDuration() {
        this.props.changeDuration(this.props.length, this.props.name, 'decr');
    }

    incrementDuration() {
        this.props.changeDuration(this.props.length, this.props.name, 'inc');
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'row'}><div id={this.props.name + '-label'}>{this.props.name[0].toLocaleUpperCase() + this.props.name.slice(1) + ' Length'}</div></div>
                <div className={'row'}>
                    <button id={this.props.name + '-decrement'} onClick={this.decrementDuration}><i className={'fa fa-arrow-down'} /></button>
                    <div id={this.props.name + '-length'}>{this.props.length}</div>
                    <button id={this.props.name + '-increment'} onClick={this.incrementDuration}><i className={'fa fa-arrow-up'}/></button>
                </div>
            </div>
        )
    }
}

export default UnitDuration;