/**
 * Created by JackHui on 2017/9/14.
 */
import React from 'react'
import MusicListItem from '../components/musiclistitem'

let MusicList = React.createClass({
    render() {
        let listEle = null;
        listEle = this.props.musicList.map((item) => {
            return (
                <MusicListItem
    key={item.id}
    musicItem={item}
    focus={item === this.props.currentMusicItem}
    />
            )
        });

        return (
            <ul>
                {listEle}
            </ul>
        )
    }
});

export default MusicList;