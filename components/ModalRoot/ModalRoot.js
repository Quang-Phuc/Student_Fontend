import React from 'react'
import {connect} from 'react-redux'
import ReactModal from 'react-modal'
import {OPEN_MODAL, CLOSE_MODAL} from "../../constant/common";
import SignIn from "../LayoutHome/SignIn/SignIn";
import Modal from '@material-ui/core/Modal';
import Register from "../LayoutHome/Register/Register";
import ForgetPassword from "../LayoutHome/ForgetPassword/ForgetPassword";

const MODAL_TYPES = {
    'signIn': SignIn,
    'signUp': Register,
    'forgetPassword': ForgetPassword,
}

const customStyles = {
    content: {
        top: '40%',
    }
};

const mapStateToProps = state => ({
    ...state.modal
})

class ModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: props.modalProps.open
        }
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal() {
        this.props.closeModal()
    }

    render() {
        if (!this.props.modalType) {
            return null
        }
        const SpecifiedModal = MODAL_TYPES[this.props.modalType]
        return (
            <div>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    ariaHideApp={false}
                    overlayClassName="modal fade show"
                    bodyOpenClassName="modal-open"
                    className="modal-dialog modal-dialog-centered"
                    style={customStyles}
                >
                    <SpecifiedModal
                        closeModal={this.closeModal}
                        {...this.props.modalProps}
                    />
                </ReactModal>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(ModalContainer)