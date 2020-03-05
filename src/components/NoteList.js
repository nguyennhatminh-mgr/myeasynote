import React, { Component } from 'react';
import {firebaseConnect} from '../FirebaseConnect';
import NoteItem from './NoteItem';


class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase:[]
        }
    }
    
    UNSAFE_componentWillMount() {
        firebaseConnect.on('value',(notes) => {
            var arrayData = [];
            notes.forEach((element) => {
                const id = element.key;
                const notecontent = element.val().notecontent;
                const notetitle = element.val().notetitle;
                const noteimage = element.val().noteimage;
                arrayData.push({
                    id:id,
                    notecontent:notecontent,
                    notetitle:notetitle,
                    noteimage:noteimage
                })
            });
            this.setState({
                dataFirebase:arrayData
            });
        })
    }
    
    render() {
        return (
            <div className="col mb-5 minheightlist" >
                <div id="listNote" role="tablist" aria-multiselectable="true">
                    {
                        this.state.dataFirebase.map((value,key) => 
                            <NoteItem key={key}
                                index = {key}
                                note = {value}
                                notecontent={value.notecontent}
                                notetitle={value.notetitle}
                                noteimage={value.noteimage}
                            ></NoteItem>
                        )
                    }
                                     
                </div>
            </div>
        );
    }
}

export default NoteList;