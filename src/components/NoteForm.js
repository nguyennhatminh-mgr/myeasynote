import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notetitle:"",
            notecontent:"",
            id:"",
            noteimage:""
        }
    }
    
    UNSAFE_componentWillMount() {
        if(this.props.editData){
            this.setState({
                notetitle:this.props.editData.notetitle,
                notecontent:this.props.editData.notecontent,
                id:this.props.editData.id,
                noteimage:this.props.editData.noteimage
            });
        }
    }
    
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    addData = () => {
        if (this.state.id){     //edit case
            var editData = {};
            editData.id=this.state.id;
            editData.notetitle=this.state.notetitle;
            editData.notecontent=this.state.notecontent;
            editData.noteimage=this.state.noteimage;
            this.props.editDataStore(editData);
            //close form
            this.props.changeEditStatus();
            //show alert notifier
            this.props.alertOn("Edit note successful","warning");
        }
        else{       // add case
            var item ={};
            item.notetitle=this.state.notetitle;
            item.notecontent=this.state.notecontent;
            item.noteimage=this.state.noteimage;
            // this.props.addData(item);
            this.props.addDataStore(item);
            this.props.alertOn("Add note successful","success");
        }
        
    }
    changeTitle = () => {
        if (this.props.isAdd){
            return <h3>Add New Note</h3>
        }
        else{
            return <h3>Edit Note</h3>
        }
    }
    render() {
        return (
            <div className="col-4 setwidthresponsive mb-5">
                {
                    this.changeTitle()
                }
                <form>
                    <div className="form-group">
                        <label htmlFor="true">Note title</label>
                        <input defaultValue={this.props.editData.notetitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="notetitle" aria-describedby="helpId" placeholder="Enter title here" />
                        <small id="helpId" className="form-text text-muted">Enter title here</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Note content</label>
                        <textarea defaultValue={this.props.editData.notecontent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="notecontent" aria-describedby="helpId" placeholder="Enter content here" />
                        <small id="helpId" className="form-text text-muted">Enter content here</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="true">Link image</label>
                        <input defaultValue={this.props.editData.noteimage} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteimage" aria-describedby="helpId" placeholder="Enter link image here" />
                        <small id="helpId" className="form-text text-muted">Enter link image here</small>
                    </div>
                    <button type="reset" onClick={() => this.addData()} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editData: state.editData,
        isAdd : state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem});
        },
        editDataStore: (editData) => {
            dispatch({type:"IMPLEMENT_EDIT",editData});
        },
        changeEditStatus: () => {
            dispatch({
              type: "CHANGE_EDIT_STATUS"
            })
        },
        alertOn: (alertContent,alertType) => {
            dispatch({
              type: "ALERT_ON",
              alertContent,
              alertType
            })
        },
        alertOff: () => {
            dispatch({
              type: "ALERT_OFF"
            })
        }
    }
}
//this.props.addDataStore()
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
