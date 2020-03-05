import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    editButtonClick = () => {
        this.props.changeEditStatus();
        // console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }

    deleteButtonClick = () => {
      this.props.getIdDelete(this.props.note.id);
      //show notification
      this.props.alertOn("Delete note successful","danger");
    }

    render() {
        return (
            <div className="card">
                <div className="card-header d-flex" role="tab" id="section1HeaderId">
                    <h5 className="mb-0 col-9">
                    <a data-toggle="collapse" data-parent="#listNote" href={"#number"+this.props.index} aria-expanded="true" aria-controls="section1ContentId">
                        {this.props.notetitle}
                    </a>
                    
                    </h5>
                    <div className="btn-group float-right col">
                        <button onClick={this.editButtonClick} className="btn btn-outline-info"><i className="fa fa-pen-square"></i></button>
                        <button onClick={() => this.deleteButtonClick()} className="btn btn-outline-danger"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <div id={"number"+this.props.index} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        {this.props.notecontent}
                    </div>
                    <img className="noteimage" src={this.props.noteimage} alt=""/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({
          type: "CHANGE_EDIT_STATUS"
        })
      },
      getEditData: (editData) => {
        dispatch({
          type: "GET_EDIT_DATA",
          editData
        })
      },
      getIdDelete: (deleteId) => {
        dispatch({
          type: "IMPLEMENT_DELETE",
          deleteId
        })
      },
      alertOn: (alertContent,alertType) => {
        dispatch({
          type: "ALERT_ON",
          alertContent,
          alertType
        })
      }
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(NoteItem)